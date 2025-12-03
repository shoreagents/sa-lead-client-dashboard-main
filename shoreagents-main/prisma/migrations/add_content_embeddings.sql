-- Add Content Embeddings Table for AI Recommendation Engine
-- This stores all website content (blogs, case studies, resources) with semantic embeddings

CREATE TABLE IF NOT EXISTS public.content_embeddings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content_id VARCHAR(255) UNIQUE NOT NULL,  -- e.g., 'real-estate-outsourcing'
  content_type VARCHAR(50) NOT NULL,         -- 'blog', 'case-study', 'pillar', 'sub-pillar'
  title TEXT NOT NULL,
  description TEXT,
  full_content TEXT,                         -- Full page content for embedding
  url_path VARCHAR(500) NOT NULL,            -- Exact URL: /real-estate-outsourcing
  embedding vector(1536),                    -- OpenAI text-embedding-3-small
  metadata JSONB DEFAULT '{}',               -- { industry, keywords, author, datePublished }
  semantic_categories TEXT[] DEFAULT '{}',   -- ['marketing', 'real-estate', 'seo']
  view_count INTEGER DEFAULT 0,              -- Track popularity
  recommendation_count INTEGER DEFAULT 0,    -- How many times recommended
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for fast semantic search
CREATE INDEX IF NOT EXISTS content_embeddings_embedding_idx ON public.content_embeddings USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
CREATE INDEX IF NOT EXISTS content_embeddings_content_type_idx ON public.content_embeddings (content_type);
CREATE INDEX IF NOT EXISTS content_embeddings_categories_idx ON public.content_embeddings USING GIN (semantic_categories);
CREATE INDEX IF NOT EXISTS content_embeddings_content_id_idx ON public.content_embeddings (content_id);
CREATE INDEX IF NOT EXISTS content_embeddings_url_path_idx ON public.content_embeddings (url_path);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_content_embeddings_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at
CREATE TRIGGER content_embeddings_updated_at
BEFORE UPDATE ON public.content_embeddings
FOR EACH ROW
EXECUTE FUNCTION update_content_embeddings_updated_at();

-- Add comment
COMMENT ON TABLE public.content_embeddings IS 'Stores all website content with vector embeddings for AI-powered semantic recommendations';

