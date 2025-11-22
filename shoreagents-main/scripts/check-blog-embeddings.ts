import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkBlogs() {
  const blogs = await prisma.contentEmbedding.findMany({
    where: {
      content_type: 'blog'
    },
    select: {
      title: true,
      url_path: true,
      semantic_categories: true,
    },
    orderBy: {
      title: 'asc'
    }
  });

  console.log(`\n📚 Found ${blogs.length} blog embeddings:\n`);
  blogs.forEach((blog, i) => {
    console.log(`${i + 1}. ${blog.title}`);
    console.log(`   URL: ${blog.url_path}`);
    console.log(`   Categories: ${blog.semantic_categories.join(', ')}`);
    console.log('');
  });

  // Show total counts
  const allContent = await prisma.contentEmbedding.groupBy({
    by: ['content_type'],
    _count: true
  });

  console.log('\n📊 Total Content by Type:');
  allContent.forEach(({ content_type, _count }) => {
    console.log(`   ${content_type}: ${_count}`);
  });

  await prisma.$disconnect();
}

checkBlogs();
