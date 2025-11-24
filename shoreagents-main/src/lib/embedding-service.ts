// Embedding Service for Vector Search & Memory
// Uses OpenAI embeddings for semantic search

import { OpenAIEmbeddings } from '@langchain/openai';
import { createClient } from '@/lib/supabase/client';

// Initialize OpenAI embeddings
const embeddings = new OpenAIEmbeddings({
  openAIApiKey: process.env.OPENAI_API_KEY,
  modelName: 'text-embedding-3-small', // 1536 dimensions, cost-effective
  batchSize: 512 // Process multiple texts at once
});

/**
 * Generate embedding for a single text
 */
export async function generateEmbedding(text: string): Promise<number[]> {
  try {
    const embedding = await embeddings.embedQuery(text);
    return embedding;
  } catch (error) {
    console.error('Error generating embedding:', error);
    throw new Error(`Failed to generate embedding: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Generate embeddings for multiple texts (batch)
 */
export async function generateEmbeddings(texts: string[]): Promise<number[][]> {
  try {
    const embeddingsList = await embeddings.embedDocuments(texts);
    return embeddingsList;
  } catch (error) {
    console.error('Error generating embeddings batch:', error);
    throw new Error(`Failed to generate embeddings: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Search knowledge base using vector similarity
 */
export async function searchKnowledgeWithEmbeddings(
  query: string,
  options: {
    matchThreshold?: number;
    matchCount?: number;
  } = {}
): Promise<Array<{
  id: string;
  content: string;
  title: string;
  url: string;
  similarity: number;
}>> {
  try {
    const { matchThreshold = 0.78, matchCount = 5 } = options;

    // Generate embedding for the query
    const queryEmbedding = await generateEmbedding(query);

    // Search in Supabase using the match_knowledge function
    const supabase = createClient();
    const { data, error } = await supabase.rpc('match_knowledge', {
      query_embedding: queryEmbedding,
      match_threshold: matchThreshold,
      match_count: matchCount
    });

    if (error) {
      console.error('Error searching knowledge:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in searchKnowledgeWithEmbeddings:', error);
    return [];
  }
}

/**
 * Store knowledge article with embedding
 */
export async function storeKnowledgeWithEmbedding(
  content: string,
  title: string,
  url?: string,
  metadata?: Record<string, any>
): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    // Generate embedding
    const embedding = await generateEmbedding(content);

    // Store in Supabase
    const supabase = createClient();
    const { data, error } = await supabase
      .from('knowledge_embeddings')
      .insert({
        content,
        title,
        url,
        embedding,
        metadata: metadata || {}
      })
      .select()
      .single();

    if (error) {
      console.error('Error storing knowledge:', error);
      return { success: false, error: error.message };
    }

    return { success: true, id: data.id };
  } catch (error) {
    console.error('Error in storeKnowledgeWithEmbedding:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Batch store multiple knowledge articles with embeddings
 */
export async function batchStoreKnowledge(
  articles: Array<{
    content: string;
    title: string;
    url?: string;
    metadata?: Record<string, any>;
  }>
): Promise<{ success: boolean; count: number; errors: string[] }> {
  try {
    console.log(`📝 Generating embeddings for ${articles.length} articles...`);

    // Generate embeddings for all articles
    const contents = articles.map(a => a.content);
    const embeddingsList = await generateEmbeddings(contents);

    console.log(`✅ Generated ${embeddingsList.length} embeddings`);

    // Prepare data for insertion
    const records = articles.map((article, index) => ({
      content: article.content,
      title: article.title,
      url: article.url || null,
      embedding: embeddingsList[index],
      metadata: article.metadata || {}
    }));

    // Insert into Supabase
    const supabase = createClient();
    const { data, error } = await supabase
      .from('knowledge_embeddings')
      .insert(records)
      .select();

    if (error) {
      console.error('Error batch storing knowledge:', error);
      return { success: false, count: 0, errors: [error.message] };
    }

    console.log(`✅ Stored ${data.length} knowledge articles with embeddings`);

    return { success: true, count: data.length, errors: [] };
  } catch (error) {
    console.error('Error in batchStoreKnowledge:', error);
    return { 
      success: false, 
      count: 0, 
      errors: [error instanceof Error ? error.message : 'Unknown error']
    };
  }
}

/**
 * Search conversation memories using vector similarity
 */
export async function searchMemories(
  userId: string,
  query: string,
  options: {
    matchThreshold?: number;
    matchCount?: number;
  } = {}
): Promise<Array<{
  id: string;
  conversation_id: string;
  memory_type: string;
  content: any;
  importance_score: number;
  similarity: number;
  created_at: string;
}>> {
  try {
    const { matchThreshold = 0.75, matchCount = 10 } = options;

    // Generate embedding for the query
    const queryEmbedding = await generateEmbedding(query);

    // Search in Supabase using the match_memories function
    const supabase = createClient();
    const { data, error } = await supabase.rpc('match_memories', {
      query_embedding: queryEmbedding,
      target_user_id: userId,
      match_threshold: matchThreshold,
      match_count: matchCount
    });

    if (error) {
      console.error('Error searching memories:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in searchMemories:', error);
    return [];
  }
}

/**
 * Store conversation memory with embedding
 */
export async function storeMemory(
  userId: string,
  conversationId: string,
  memoryType: 'summary' | 'entity' | 'buffer' | 'vector',
  content: any,
  options: {
    importanceScore?: number;
    expiresAt?: Date;
    metadata?: Record<string, any>;
  } = {}
): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    const { importanceScore = 5, expiresAt, metadata } = options;

    // Generate embedding for vector search (if content is text)
    let embedding = null;
    if (typeof content === 'string') {
      embedding = await generateEmbedding(content);
    } else if (content.summary) {
      // If content is object with summary, embed the summary
      embedding = await generateEmbedding(content.summary);
    }

    // Store in Supabase
    const supabase = createClient();
    const { data, error } = await supabase
      .from('conversation_memory')
      .insert({
        user_id: userId,
        conversation_id: conversationId,
        memory_type: memoryType,
        content: typeof content === 'string' ? { text: content } : content,
        embedding,
        importance_score: importanceScore,
        expires_at: expiresAt?.toISOString() || null,
        metadata: metadata || {}
      })
      .select()
      .single();

    if (error) {
      console.error('Error storing memory:', error);
      return { success: false, error: error.message };
    }

    console.log(`💾 Stored ${memoryType} memory for user ${userId}`);
    return { success: true, id: data.id };
  } catch (error) {
    console.error('Error in storeMemory:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Get recent important memories (without vector search)
 */
export async function getRecentMemories(
  userId: string,
  options: {
    memoryCount?: number;
    minImportance?: number;
  } = {}
): Promise<Array<{
  id: string;
  conversation_id: string;
  memory_type: string;
  content: any;
  importance_score: number;
  created_at: string;
}>> {
  try {
    const { memoryCount = 10, minImportance = 5 } = options;

    const supabase = createClient();
    const { data, error } = await supabase.rpc('get_recent_memories', {
      target_user_id: userId,
      memory_count: memoryCount,
      min_importance: minImportance
    });

    if (error) {
      console.error('Error getting recent memories:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in getRecentMemories:', error);
    return [];
  }
}

/**
 * Hybrid search: Combine vector similarity with keyword search
 */
export async function hybridSearchKnowledge(
  query: string,
  options: {
    matchThreshold?: number;
    matchCount?: number;
  } = {}
): Promise<Array<{
  id: string;
  content: string;
  title: string;
  url: string;
  similarity?: number;
  rank?: number;
}>> {
  try {
    const { matchThreshold = 0.75, matchCount = 10 } = options;

    // Run both searches in parallel
    const [vectorResults, keywordResults] = await Promise.all([
      // Vector similarity search
      searchKnowledgeWithEmbeddings(query, { matchThreshold, matchCount }),
      // Keyword search
      (async () => {
        const supabase = createClient();
        const { data, error } = await supabase
          .from('knowledge_embeddings')
          .select('id, content, title, url')
          .textSearch('content', query, { type: 'websearch' })
          .limit(matchCount);
        
        if (error) return [];
        return data || [];
      })()
    ]);

    // Merge and deduplicate results
    const seenIds = new Set<string>();
    const mergedResults: any[] = [];

    // Add vector results first (they're usually better)
    vectorResults.forEach((result, index) => {
      if (!seenIds.has(result.id)) {
        seenIds.add(result.id);
        mergedResults.push({ ...result, rank: index + 1 });
      }
    });

    // Add keyword results that weren't in vector results
    keywordResults.forEach((result, index) => {
      if (!seenIds.has(result.id)) {
        seenIds.add(result.id);
        mergedResults.push({ ...result, rank: vectorResults.length + index + 1 });
      }
    });

    return mergedResults.slice(0, matchCount);
  } catch (error) {
    console.error('Error in hybridSearchKnowledge:', error);
    // Fallback to vector search only
    return searchKnowledgeWithEmbeddings(query, options);
  }
}

