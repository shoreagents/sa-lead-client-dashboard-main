import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fixBlogTypes() {
  const blogUrls = [
    '/outsourcing-philippines',
    '/outsourcing-vs-offshoring',
  ];

  console.log('\n🔧 Fixing blog content types...\n');

  for (const url of blogUrls) {
    await prisma.contentEmbedding.updateMany({
      where: { url_path: url },
      data: { content_type: 'blog' }
    });
    console.log(`✅ Updated ${url} to blog type`);
  }

  // Verify
  const allBlogs = await prisma.contentEmbedding.count({
    where: { content_type: 'blog' }
  });

  console.log(`\n📚 Total blogs in database: ${allBlogs}\n`);

  await prisma.$disconnect();
}

fixBlogTypes();
