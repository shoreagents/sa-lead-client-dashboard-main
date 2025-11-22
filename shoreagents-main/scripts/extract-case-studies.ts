/**
 * Extract Case Study Metadata
 * Reads all case study layout.tsx files and extracts their metadata
 */

import fs from 'fs';
import path from 'path';

const caseStudiesDir = path.join(process.cwd(), 'src/app/(case-studies)');
const outputFile = path.join(process.cwd(), 'case-studies-metadata.json');

interface CaseStudyMetadata {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
}

const caseStudies: CaseStudyMetadata[] = [];

// Read all directories in (case-studies)
const directories = fs.readdirSync(caseStudiesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

console.log(`📁 Found ${directories.length} case study directories\n`);

for (const dir of directories) {
  const layoutPath = path.join(caseStudiesDir, dir, 'layout.tsx');
  
  if (fs.existsSync(layoutPath)) {
    const content = fs.readFileSync(layoutPath, 'utf-8');
    
    // Extract metadata using regex
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
      
      caseStudies.push({
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

// Write to JSON file
fs.writeFileSync(outputFile, JSON.stringify(caseStudies, null, 2));

console.log(`\n✨ Extracted ${caseStudies.length} case studies`);
console.log(`📄 Saved to: ${outputFile}`);
console.log('\nNow add these to page-metadata-config.ts!\n');

