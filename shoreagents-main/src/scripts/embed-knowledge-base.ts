// Script to embed existing knowledge base into vector database
// Run this once to populate the embeddings table

import { knowledgeBase } from '../lib/knowledge-base.js';
import { batchStoreKnowledge } from '../lib/embedding-service.js';

async function embedKnowledgeBase() {
  console.log('🚀 Starting knowledge base embedding process...');
  console.log(`📚 Found ${knowledgeBase.length} knowledge articles`);

  try {
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
      console.log('🎯 Maya can now use semantic search for better understanding');
    } else {
      console.error('❌ FAILED to embed knowledge base');
      console.error('Errors:', result.errors);
      process.exit(1);
    }
  } catch (error) {
    console.error('💥 Error embedding knowledge base:', error);
    process.exit(1);
  }
}

// Run the script
embedKnowledgeBase()
  .then(() => {
    console.log('✨ Knowledge base embedding complete!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });

