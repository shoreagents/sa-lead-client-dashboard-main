/**
 * Generate Content Embeddings for AI Recommendation Engine
 * 
 * This script:
 * 1. Reads all content from page-metadata-config
 * 2. Categorizes content semantically
 * 3. Generates OpenAI embeddings
 * 4. Stores in content_embeddings table
 */

import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import OpenAI from 'openai';
import { PAGE_METADATA } from '../src/lib/page-metadata-config.js';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const prisma = new PrismaClient();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Convert PAGE_METADATA to array format
const allPages = Object.entries(PAGE_METADATA).map(([key, meta]) => ({
  path: meta.canonicalUrl || `/${key}`,
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords || [],
  type: determineContentType(key, meta.title),
}));

// Determine content type from key and title
function determineContentType(key: string, title: string): string {
  // Check if it's a case study (has client name pattern or success story keywords)
  const caseStudyKeywords = [
    'case study', 'success story', 'client success', 'transformation',
    'partnership', 'validation', 'growth', 'scaling', 'implementation',
    'onboarding', 'recruitment', 'expansion'
  ];
  
  const hasClientPattern = title.includes('|') && title.includes('-'); // "Title | Client - Company" pattern
  const hasCaseStudyKeyword = caseStudyKeywords.some(keyword => 
    title.toLowerCase().includes(keyword) || key.toLowerCase().includes(keyword)
  );
  
  if (hasClientPattern || hasCaseStudyKeyword) {
    return 'case-study';
  }
  
  // Main pillar pages
  if (key === 'outsourcing' || key === 'virtual-assistant') return 'pillar';
  
  // Blog posts (explicitly defined blog slugs or has guide/how-to in title)
  const blogSlugs = [
    'outsourcing-philippines',
    'outsourcing-to-india',
    'outsourcing-to-vietnam',
    'outsourcing-vs-offshoring',
    'virtual-real-estate-assistant-pricing',
    'what-does-a-real-estate-virtual-assistant-do',
    'what-is-outsourcing',
  ];
  
  if (blogSlugs.includes(key) || 
      title.toLowerCase().includes('guide') || 
      title.toLowerCase().includes('how to')) {
    return 'blog';
  }
  
  // Service pages
  if (key.includes('outsourcing') || key.includes('virtual-assistant')) return 'sub-pillar';
  
  return 'blog';
}

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
  const keywords = page.keywords?.join(' ').toLowerCase() || '';

  // Check all category groups
  Object.entries(SEMANTIC_CATEGORIES).forEach(([groupName, categoryMap]) => {
    Object.entries(categoryMap).forEach(([categoryKey, categoryKeywords]) => {
      if (categoryKeywords.some(keyword => 
        searchText.includes(keyword.toLowerCase()) || 
        keywords.includes(keyword.toLowerCase())
      )) {
        categories.add(categoryKey);
      }
    });
  });

  // Add content type
  categories.add(page.type);

  // Add industry if present in path
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
          ${JSON.stringify({ keywords: page.keywords })}::jsonb,
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

