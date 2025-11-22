import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkTypes() {
  const blogUrls = [
    '/outsourcing-philippines',
    '/outsourcing-to-india',
    '/outsourcing-to-vietnam',
    '/outsourcing-vs-offshoring',
    '/virtual-real-estate-assistant-pricing',
    '/what-does-a-real-estate-virtual-assistant-do',
    '/what-is-outsourcing',
  ];

  console.log('\n📝 Blog Content Types:\n');

  for (const url of blogUrls) {
    const found = await prisma.contentEmbedding.findFirst({
      where: { url_path: url },
      select: { title: true, content_type: true, semantic_categories: true }
    });

    if (found) {
      console.log(`${found.title}`);
      console.log(`   Type: ${found.content_type}`);
      console.log(`   Categories: ${found.semantic_categories.join(', ')}`);
      console.log('');
    }
  }

  await prisma.$disconnect();
}

checkTypes();
