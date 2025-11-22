import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function findMissing() {
  const expectedBlogs = [
    '/outsourcing-philippines',
    '/outsourcing-to-india',
    '/outsourcing-to-vietnam',
    '/outsourcing-vs-offshoring',
    '/virtual-real-estate-assistant-pricing',
    '/what-does-a-real-estate-virtual-assistant-do',
    '/what-is-outsourcing',
  ];

  console.log('\n🔍 Checking for missing blogs...\n');

  for (const url of expectedBlogs) {
    const found = await prisma.contentEmbedding.findFirst({
      where: { url_path: url },
      select: { title: true, content_type: true }
    });

    if (found) {
      console.log(`✅ ${url} - ${found.title}`);
    } else {
      console.log(`❌ ${url} - MISSING!`);
    }
  }

  await prisma.$disconnect();
}

findMissing();
