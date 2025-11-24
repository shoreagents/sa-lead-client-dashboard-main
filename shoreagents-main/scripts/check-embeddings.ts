/**
 * Check Content Embeddings in Database
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkEmbeddings() {
  try {
    // Count total embeddings
    const count = await prisma.$queryRaw<[{ count: bigint }]>`
      SELECT COUNT(*) as count FROM content_embeddings
    `;
    
    console.log(`\n📊 Total embeddings in database: ${count[0].count}\n`);
    
    // Get all content IDs grouped by type
    const byType = await prisma.$queryRaw<Array<{ content_type: string; count: bigint }>>`
      SELECT content_type, COUNT(*) as count 
      FROM content_embeddings 
      GROUP BY content_type
      ORDER BY count DESC
    `;
    
    console.log('📋 Breakdown by content type:');
    byType.forEach(row => {
      console.log(`   ${row.content_type}: ${row.count}`);
    });
    
    // Get sample content IDs
    const samples = await prisma.$queryRaw<Array<{ content_id: string; content_type: string; title: string }>>`
      SELECT content_id, content_type, title 
      FROM content_embeddings 
      ORDER BY created_at DESC
      LIMIT 10
    `;
    
    console.log('\n📄 Most recent 10 entries:');
    samples.forEach((row, i) => {
      console.log(`   ${i + 1}. [${row.content_type}] ${row.content_id}`);
      console.log(`      "${row.title.substring(0, 60)}..."`);
    });
    
    // Check for case studies specifically
    const caseStudies = await prisma.$queryRaw<[{ count: bigint }]>`
      SELECT COUNT(*) as count 
      FROM content_embeddings 
      WHERE 'case-study' = ANY(semantic_categories)
    `;
    
    console.log(`\n🎯 Case studies (by category tag): ${caseStudies[0].count}`);
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkEmbeddings();

