-- Enable pgvector extension for vector similarity search
CREATE EXTENSION IF NOT EXISTS vector;

-- Knowledge Base Embeddings Table
-- Stores vector embeddings of knowledge articles for semantic search
CREATE TABLE IF NOT EXISTS knowledge_embeddings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content TEXT NOT NULL,
  title TEXT,
  url TEXT,
  embedding VECTOR(1536), -- OpenAI text-embedding-3-small dimensions
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast vector similarity search (cosine distance)
CREATE INDEX IF NOT EXISTS knowledge_embeddings_embedding_idx 
ON knowledge_embeddings 
USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);

-- Full text search index for hybrid search
CREATE INDEX IF NOT EXISTS knowledge_embeddings_content_idx 
ON knowledge_embeddings 
USING gin(to_tsvector('english', content));

-- Conversation Memory Table
-- Stores conversation summaries and entity memories
CREATE TABLE IF NOT EXISTS conversation_memory (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT NOT NULL,
  conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
  memory_type TEXT NOT NULL CHECK (memory_type IN ('summary', 'entity', 'buffer', 'vector')),
  content JSONB NOT NULL,
  embedding VECTOR(1536), -- For semantic memory search
  importance_score INTEGER DEFAULT 5 CHECK (importance_score BETWEEN 1 AND 10),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ, -- Optional expiry for short-term memories
  metadata JSONB
);

-- Indexes for conversation memory
CREATE INDEX IF NOT EXISTS conversation_memory_user_idx ON conversation_memory(user_id);
CREATE INDEX IF NOT EXISTS conversation_memory_conversation_idx ON conversation_memory(conversation_id);
CREATE INDEX IF NOT EXISTS conversation_memory_type_idx ON conversation_memory(memory_type);
CREATE INDEX IF NOT EXISTS conversation_memory_importance_idx ON conversation_memory(importance_score DESC);

-- Index for vector similarity search on memories
CREATE INDEX IF NOT EXISTS conversation_memory_embedding_idx 
ON conversation_memory 
USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 50);

-- Function to match knowledge by similarity
CREATE OR REPLACE FUNCTION match_knowledge(
  query_embedding VECTOR(1536),
  match_threshold FLOAT DEFAULT 0.78,
  match_count INT DEFAULT 5
)
RETURNS TABLE (
  id UUID,
  content TEXT,
  title TEXT,
  url TEXT,
  similarity FLOAT
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    knowledge_embeddings.id,
    knowledge_embeddings.content,
    knowledge_embeddings.title,
    knowledge_embeddings.url,
    1 - (knowledge_embeddings.embedding <=> query_embedding) AS similarity
  FROM knowledge_embeddings
  WHERE 1 - (knowledge_embeddings.embedding <=> query_embedding) > match_threshold
  ORDER BY knowledge_embeddings.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- Function to match conversation memories by similarity
CREATE OR REPLACE FUNCTION match_memories(
  query_embedding VECTOR(1536),
  target_user_id TEXT,
  match_threshold FLOAT DEFAULT 0.75,
  match_count INT DEFAULT 10
)
RETURNS TABLE (
  id UUID,
  user_id TEXT,
  conversation_id UUID,
  memory_type TEXT,
  content JSONB,
  importance_score INTEGER,
  similarity FLOAT,
  created_at TIMESTAMPTZ
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    conversation_memory.id,
    conversation_memory.user_id,
    conversation_memory.conversation_id,
    conversation_memory.memory_type,
    conversation_memory.content,
    conversation_memory.importance_score,
    1 - (conversation_memory.embedding <=> query_embedding) AS similarity,
    conversation_memory.created_at
  FROM conversation_memory
  WHERE 
    conversation_memory.user_id = target_user_id
    AND conversation_memory.embedding IS NOT NULL
    AND 1 - (conversation_memory.embedding <=> query_embedding) > match_threshold
    AND (conversation_memory.expires_at IS NULL OR conversation_memory.expires_at > NOW())
  ORDER BY 
    conversation_memory.importance_score DESC,
    conversation_memory.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- Function to get recent important memories (without vector search)
CREATE OR REPLACE FUNCTION get_recent_memories(
  target_user_id TEXT,
  memory_count INT DEFAULT 10,
  min_importance INT DEFAULT 5
)
RETURNS TABLE (
  id UUID,
  user_id TEXT,
  conversation_id UUID,
  memory_type TEXT,
  content JSONB,
  importance_score INTEGER,
  created_at TIMESTAMPTZ
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    conversation_memory.id,
    conversation_memory.user_id,
    conversation_memory.conversation_id,
    conversation_memory.memory_type,
    conversation_memory.content,
    conversation_memory.importance_score,
    conversation_memory.created_at
  FROM conversation_memory
  WHERE 
    conversation_memory.user_id = target_user_id
    AND conversation_memory.importance_score >= min_importance
    AND (conversation_memory.expires_at IS NULL OR conversation_memory.expires_at > NOW())
  ORDER BY 
    conversation_memory.importance_score DESC,
    conversation_memory.created_at DESC
  LIMIT memory_count;
END;
$$;

-- Trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_knowledge_embeddings_updated_at
  BEFORE UPDATE ON knowledge_embeddings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Comments for documentation
COMMENT ON TABLE knowledge_embeddings IS 'Stores vector embeddings of knowledge base articles for semantic search';
COMMENT ON TABLE conversation_memory IS 'Stores conversation memories with optional vector embeddings for semantic retrieval';
COMMENT ON FUNCTION match_knowledge IS 'Finds similar knowledge articles using vector similarity search';
COMMENT ON FUNCTION match_memories IS 'Finds similar conversation memories using vector similarity search';
COMMENT ON FUNCTION get_recent_memories IS 'Gets recent high-importance memories without vector search';

