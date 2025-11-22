/**
 * Content Vector Search Service
 * 
 * Provides semantic search capabilities for content recommendations
 * Uses pgvector for fast similarity search
 */

import { PrismaClient } from '@prisma/client';
import OpenAI from 'openai';

const prisma = new PrismaClient();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface ContentMatch {
  content_id: string;
  title: string;
  description: string;
  url_path: string;
  content_type: string;
  semantic_categories: string[];
  similarity: number;
  metadata?: any;
}

/**
 * Generate embedding for search query
 */
async function generateQueryEmbedding(query: string): Promise<number[]> {
  try {
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: query,
      dimensions: 1536,
    });
    return response.data[0].embedding;
  } catch (error) {
    console.error('❌ Error generating query embedding:', error);
    throw error;
  }
}

/**
 * Search content by semantic similarity
 * 
 * @param query - Search query (can be user behavior summary, interests, etc.)
 * @param filters - Optional filters (content_type, categories, etc.)
 * @param limit - Maximum number of results to return (default: 10)
 * @returns Array of matching content sorted by similarity
 */
export async function semanticContentSearch(
  query: string,
  filters?: {
    contentTypes?: string[];
    categories?: string[];
    excludeUrls?: string[];
  },
  limit: number = 10
): Promise<ContentMatch[]> {
  try {
    console.log('🔍 Semantic search query:', query);
    console.log('🎯 Filters:', filters);

    // Generate embedding for query
    const queryEmbedding = await generateQueryEmbedding(query);

    // Build WHERE clause for filters
    let whereConditions: string[] = [];
    if (filters?.contentTypes && filters.contentTypes.length > 0) {
      const types = filters.contentTypes.map(t => `'${t}'`).join(',');
      whereConditions.push(`content_type IN (${types})`);
    }
    if (filters?.categories && filters.categories.length > 0) {
      const cats = filters.categories.map(c => `'${c}'`).join(',');
      whereConditions.push(`semantic_categories && ARRAY[${cats}]`);
    }
    if (filters?.excludeUrls && filters.excludeUrls.length > 0) {
      const urls = filters.excludeUrls.map(u => `'${u}'`).join(',');
      whereConditions.push(`url_path NOT IN (${urls})`);
    }

    const whereClause = whereConditions.length > 0 
      ? `WHERE ${whereConditions.join(' AND ')}` 
      : '';

    // Perform vector similarity search
    const results = await prisma.$queryRawUnsafe<ContentMatch[]>(`
      SELECT 
        content_id,
        title,
        description,
        url_path,
        content_type,
        semantic_categories,
        metadata,
        1 - (embedding <=> $1::vector) AS similarity
      FROM content_embeddings
      ${whereClause}
      ORDER BY embedding <=> $1::vector
      LIMIT $2
    `, queryEmbedding, limit);

    console.log(`✅ Found ${results.length} semantic matches`);
    results.forEach((r, i) => {
      console.log(`   ${i + 1}. ${r.title} (${(r.similarity * 100).toFixed(1)}% similar)`);
    });

    return results;

  } catch (error) {
    console.error('❌ Error in semantic search:', error);
    throw error;
  }
}

/**
 * Find similar content based on user's viewed content
 * 
 * @param viewedContentIds - Array of content IDs user has viewed
 * @param limit - Maximum number of recommendations
 * @returns Array of similar content not yet viewed
 */
export async function findSimilarContent(
  viewedContentIds: string[],
  limit: number = 6
): Promise<ContentMatch[]> {
  if (viewedContentIds.length === 0) {
    // If no history, return popular content
    return await getPopularContent(limit);
  }

  try {
    // Get embeddings of viewed content
    const viewedContent = await prisma.$queryRawUnsafe<any[]>(`
      SELECT embedding, semantic_categories
      FROM content_embeddings
      WHERE content_id = ANY($1::text[])
    `, viewedContentIds);

    if (viewedContent.length === 0) {
      return await getPopularContent(limit);
    }

    // Average the embeddings to get user's interest vector
    // (Simple approach - could be more sophisticated)
    const avgEmbedding = averageEmbeddings(
      viewedContent.map(c => c.embedding)
    );

    // Get all categories from viewed content
    const categories = Array.from(
      new Set(viewedContent.flatMap(c => c.semantic_categories || []))
    );

    // Search for similar content, excluding already viewed
    return await semanticContentSearch(
      categories.join(' '), // Use categories as search hint
      {
        excludeUrls: viewedContentIds,
        categories: categories.length > 0 ? categories : undefined,
      },
      limit
    );

  } catch (error) {
    console.error('❌ Error finding similar content:', error);
    return await getPopularContent(limit);
  }
}

/**
 * Get popular content as fallback
 */
async function getPopularContent(limit: number = 6): Promise<ContentMatch[]> {
  const results = await prisma.$queryRawUnsafe<ContentMatch[]>(`
    SELECT 
      content_id,
      title,
      description,
      url_path,
      content_type,
      semantic_categories,
      metadata,
      1.0 AS similarity
    FROM content_embeddings
    ORDER BY 
      view_count DESC NULLS LAST,
      recommendation_count DESC NULLS LAST,
      created_at DESC
    LIMIT $1
  `, limit);

  console.log(`📊 Returning ${results.length} popular content items as fallback`);
  return results;
}

/**
 * Helper: Average multiple embeddings
 */
function averageEmbeddings(embeddings: number[][]): number[] {
  if (embeddings.length === 0) return [];
  if (embeddings.length === 1) return embeddings[0];

  const dimensions = embeddings[0].length;
  const sum = new Array(dimensions).fill(0);

  for (const embedding of embeddings) {
    for (let i = 0; i < dimensions; i++) {
      sum[i] += embedding[i];
    }
  }

  return sum.map(val => val / embeddings.length);
}

/**
 * Track content view (increment view_count)
 */
export async function trackContentView(contentId: string): Promise<void> {
  try {
    await prisma.$executeRaw`
      UPDATE content_embeddings
      SET view_count = view_count + 1
      WHERE content_id = ${contentId}
    `;
  } catch (error) {
    console.error('❌ Error tracking content view:', error);
  }
}

/**
 * Track content recommendation (increment recommendation_count)
 */
export async function trackContentRecommendation(contentId: string): Promise<void> {
  try {
    await prisma.$executeRaw`
      UPDATE content_embeddings
      SET recommendation_count = recommendation_count + 1
      WHERE content_id = ${contentId}
    `;
  } catch (error) {
    console.error('❌ Error tracking recommendation:', error);
  }
}

export const contentVectorService = {
  semanticContentSearch,
  findSimilarContent,
  trackContentView,
  trackContentRecommendation,
};

