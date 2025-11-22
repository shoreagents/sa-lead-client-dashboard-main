import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function showFinalCount() {
  const counts = await prisma.contentEmbedding.groupBy({
    by: ['content_type'],
    _count: true
  });

  console.log('\n📊 FINAL CONTENT BREAKDOWN:\n');
  
  let total = 0;
  counts.sort((a, b) => a.content_type.localeCompare(b.content_type));
  
  counts.forEach(({ content_type, _count }) => {
    console.log(`   ${content_type.padEnd(15)} : ${_count}`);
    total += _count;
  });
  
  console.log(`   ${'─'.repeat(15)}   ${'─'.repeat(3)}`);
  console.log(`   ${'TOTAL'.padEnd(15)} : ${total}\n`);

  await prisma.$disconnect();
}

showFinalCount();
