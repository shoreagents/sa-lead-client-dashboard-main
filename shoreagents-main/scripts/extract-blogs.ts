/**
 * Extract Blog Metadata
 */

import fs from 'fs';
import path from 'path';

const blogsDir = path.join(process.cwd(), 'src/app/(blogs)');
const outputFile = path.join(process.cwd(), 'blogs-metadata.json');

interface BlogMetadata {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
}

const blogs: BlogMetadata[] = [];

const directories = fs.readdirSync(blogsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

console.log(`📁 Found ${directories.length} blog directories\n`);

for (const dir of directories) {
  const layoutPath = path.join(blogsDir, dir, 'layout.tsx');
  
  if (fs.existsSync(layoutPath)) {
    const content = fs.readFileSync(layoutPath, 'utf-8');
    
    const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
    const descriptionMatch = content.match(/description:\s*["']([^"']+)["']/);
    const keywordsMatch = content.match(/keywords:\s*\[(.*?)\]/s);
    const urlMatch = content.match(/canonicalUrl:\s*["']([^"']+)["']/);
    
    if (titleMatch && descriptionMatch) {
      const keywords = keywordsMatch 
        ? keywordsMatch[1]
            .split(',')
            .map(k => k.trim().replace(/['"]/g, ''))
            .filter(k => k.length > 0)
        : [];
      
      blogs.push({
        slug: dir,
        title: titleMatch[1],
        description: descriptionMatch[1],
        keywords,
        canonicalUrl: urlMatch ? urlMatch[1] : `/${dir}`,
      });
      
      console.log(`✅ ${dir}`);
    } else {
      console.log(`⚠️  ${dir} - Could not extract metadata`);
    }
  }
}

fs.writeFileSync(outputFile, JSON.stringify(blogs, null, 2));

console.log(`\n✨ Extracted ${blogs.length} blogs`);
console.log(`📄 Saved to: ${outputFile}\n`);
