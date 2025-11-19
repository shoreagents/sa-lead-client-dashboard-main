// API endpoint to embed knowledge base
// Call this ONCE to populate embeddings

import { NextRequest, NextResponse } from 'next/server';
import { knowledgeBase } from '@/lib/knowledge-base';
import { batchStoreKnowledge } from '@/lib/embedding-service';

export async function POST(_request: NextRequest) {
  try {
    void _request;
    
    console.log('🚀 Starting knowledge base embedding process...');
    console.log(`📚 Found ${knowledgeBase.length} knowledge articles`);

    // Prepare articles for embedding
    const articles = knowledgeBase.map(item => ({
      content: item.content,
      title: item.title,
      url: item.url || undefined,
      metadata: {
        id: item.id,
        category: item.category || 'general',
        keywords: item.keywords || []
      }
    }));

    // Batch store with embeddings
    const result = await batchStoreKnowledge(articles);

    if (result.success) {
      console.log(`✅ SUCCESS! Embedded ${result.count} knowledge articles`);
      return NextResponse.json({
        success: true,
        message: `Embedded ${result.count} knowledge articles`,
        count: result.count
      });
    } else {
      console.error('❌ FAILED to embed knowledge base');
      console.error('Errors:', result.errors);
      return NextResponse.json({
        success: false,
        message: 'Failed to embed knowledge base',
        errors: result.errors
      }, { status: 500 });
    }
  } catch (error) {
    console.error('💥 Error embedding knowledge base:', error);
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

