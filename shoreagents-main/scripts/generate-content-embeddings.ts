/**
 * Generate Content Embeddings for AI Recommendation Engine
 * 
 * This script:
 * 1. Reads all content from page-metadata-config
 * 2. Categorizes content semantically
 * 3. Generates OpenAI embeddings
 * 4. Stores in content_embeddings table
 */

import { PrismaClient } from '@prisma/client';
import OpenAI from 'openai';
import { allPages } from '../src/lib/page-metadata-config';

const prisma = new PrismaClient();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Semantic category mappings
const SEMANTIC_CATEGORIES = {
  INDUSTRIES: {
    'real-estate': ['real estate', 'property', 'realty', 'listings', 'appraisal'],
    'construction': ['construction', 'building', 'contractor', 'site management'],
    'property-management': ['property management', 'landlord', 'tenant', 'maintenance'],
    'mortgage': ['mortgage', 'loan', 'financing', 'lending'],
    'insurance': ['insurance', 'coverage', 'policy', 'claims'],
    'legal': ['legal', 'law', 'attorney', 'paralegal'],
    'architectural': ['architectural', 'architecture', 'design', 'CAD'],
    'engineering': ['engineering', 'technical', 'structural'],
  },
  SERVICES: {
    'outsourcing': ['outsourcing', 'offshore', 'BPO', 'staff leasing'],
    'virtual-assistant': ['virtual assistant', 'VA', 'remote assistant', 'admin support'],
    'staff-leasing': ['staff leasing', 'employee leasing', 'co-employment'],
  },
  SPECIALIZATIONS: {
    'seo': ['SEO', 'search engine optimization', 'rankings', 'keywords'],
    'marketing': ['marketing', 'digital marketing', 'social media', 'advertising'],
    'accounting': ['accounting', 'financial', 'CPA', 'bookkeeping'],
    'bookkeeping': ['bookkeeping', 'books', 'financial records'],
    'graphic-design': ['graphic design', 'branding', 'visual design'],
    'content-writing': ['content writing', 'copywriting', 'blog writing'],
    'drafting': ['drafting', 'CAD', 'technical drawing'],
    'estimating': ['estimating', 'cost estimation', 'bidding'],
  },
  CONTENT_TYPES: {
    'guide': ['guide', 'how-to', 'tutorial', 'comprehensive'],
    'case-study': ['case study', 'success story', 'results', 'testimonial'],
    'pricing': ['pricing', 'cost', 'quote', 'rates', 'budget'],
    'comparison': ['vs', 'comparison', 'difference', 'versus'],
  },
};

/**
 * Determine semantic categories for content
 */
function categorizeContent(page: typeof allPages[0]): string[] {
  const categories: Set<string> = new Set();
  const searchText = `${page.title} ${page.description} ${page.path}`.toLowerCase();

  // Check all category groups
  Object.entries(SEMANTIC_CATEGORIES).forEach(([groupName, categoryMap]) => {
    Object.entries(categoryMap).forEach(([categoryKey, keywords]) => {
      if (keywords.some(keyword => searchText.includes(keyword.toLowerCase()))) {
        categories.add(categoryKey);
      }
    });
  });

  // Add content type
  categories.add(page.type);

  // Add industry if present in breadcrumb or path
  if (page.path.includes('real-estate')) categories.add('real-estate');
  if (page.path.includes('construction')) categories.add('construction');
  if (page.path.includes('property-management')) categories.add('property-management');
  if (page.path.includes('mortgage')) categories.add('mortgage');
  if (page.path.includes('insurance')) categories.add('insurance');
  if (page.path.includes('legal')) categories.add('legal');
  if (page.path.includes('architectural')) categories.add('architectural');
  if (page.path.includes('engineering')) categories.add('engineering');

  // Service type
  if (page.path.includes('virtual-assistant')) categories.add('virtual-assistant');
  if (page.path.includes('outsourcing')) categories.add('outsourcing');

  return Array.from(categories);
}

/**
 * Generate embedding for content
 */
async function generateEmbedding(text: string): Promise<number[]> {
  try {
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: text,
      dimensions: 1536,
    });
    return response.data[0].embedding;
  } catch (error) {
    console.error('❌ Error generating embedding:', error);
    throw error;
  }
}

/**
 * Main function to generate embeddings for all content
 */
async function main() {
  console.log('🚀 Starting Content Embedding Generation...\n');
  console.log(`📊 Total pages to process: ${allPages.length}\n`);

  let processed = 0;
  let errors = 0;

  for (const page of allPages) {
    try {
      console.log(`\n📄 Processing: ${page.title}`);
      console.log(`   Path: ${page.path}`);
      console.log(`   Type: ${page.type}`);

      // Generate semantic categories
      const categories = categorizeContent(page);
      console.log(`   Categories: ${categories.join(', ')}`);

      // Create embedding text (title + description for now)
      const embeddingText = `${page.title}\n\n${page.description}`;
      
      // Generate embedding
      console.log('   🤖 Generating embedding...');
      const embedding = await generateEmbedding(embeddingText);

      // Store in database
      console.log('   💾 Storing in database...');
      await prisma.$executeRaw`
        INSERT INTO content_embeddings (
          content_id,
          content_type,
          title,
          description,
          full_content,
          url_path,
          embedding,
          metadata,
          semantic_categories
        ) VALUES (
          ${page.path.replace(/^\//, '')},
          ${page.type},
          ${page.title},
          ${page.description},
          ${embeddingText},
          ${page.path},
          ${embedding}::vector,
          ${JSON.stringify({ breadcrumb: page.breadcrumb, keywords: page.keywords })}::jsonb,
          ${categories}::text[]
        )
        ON CONFLICT (content_id) 
        DO UPDATE SET
          title = EXCLUDED.title,
          description = EXCLUDED.description,
          full_content = EXCLUDED.full_content,
          embedding = EXCLUDED.embedding,
          metadata = EXCLUDED.metadata,
          semantic_categories = EXCLUDED.semantic_categories,
          updated_at = NOW()
      `;

      processed++;
      console.log(`   ✅ Success! (${processed}/${allPages.length})`);

      // Rate limit: OpenAI allows 3000 requests/min, but let's be safe
      await new Promise(resolve => setTimeout(resolve, 100));

    } catch (error) {
      errors++;
      console.error(`   ❌ Error processing ${page.path}:`, error);
    }
  }

  console.log('\n\n' + '='.repeat(60));
  console.log('📊 EMBEDDING GENERATION COMPLETE!');
  console.log('='.repeat(60));
  console.log(`✅ Successfully processed: ${processed}`);
  console.log(`❌ Errors: ${errors}`);
  console.log(`📈 Success rate: ${((processed / allPages.length) * 100).toFixed(2)}%`);
  console.log('\n🎉 Content embeddings are ready for AI recommendations!\n');
}

main()
  .catch((error) => {
    console.error('💥 Fatal error:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

