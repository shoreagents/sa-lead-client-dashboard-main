/**
 * Fix Case Study Content Types
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fixCaseStudies() {
  try {
    console.log('🔧 Fixing case study content types...\n');
    
    // Update all entries that have 'case-study' in semantic_categories
    const result = await prisma.$executeRaw`
      UPDATE content_embeddings
      SET content_type = 'case-study',
          updated_at = NOW()
      WHERE 'case-study' = ANY(semantic_categories)
        AND content_type != 'case-study'
    `;
    
    console.log(`✅ Updated ${result} records to content_type = 'case-study'\n`);
    
    // Verify the change
    const byType = await prisma.$queryRaw<Array<{ content_type: string; count: bigint }>>`
      SELECT content_type, COUNT(*) as count 
      FROM content_embeddings 
      GROUP BY content_type
      ORDER BY count DESC
    `;
    
    console.log('📋 New breakdown by content type:');
    byType.forEach(row => {
      console.log(`   ${row.content_type}: ${row.count}`);
    });
    
    console.log('\n🎉 Case studies are now properly labeled!');
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

fixCaseStudies();

