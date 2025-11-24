#!/usr/bin/env node

/**
 * Automated SEO Application Script
 * Applies metadata + breadcrumbs to all resource pages
 */

const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, 'shoreagents-main', 'src', 'app');

// Define all pages that need SEO treatment
const PAGES_TO_UPDATE = {
  // Outsourcing pages (route group: resources-outsourcing)
  outsourcing: {
    routeGroup: '(resources-outsourcing)',
    pageKey: 'outsourcing',
    breadcrumbKey: 'outsourcing',
  },
  'property-management-outsourcing': {
    routeGroup: '(resources-outsourcing)',
    pageKey: 'property-management-outsourcing',
    breadcrumbKey: 'property-management-outsourcing',
  },
  'construction-outsourcing': {
    routeGroup: '(resources-outsourcing)',
    pageKey: 'construction-outsourcing',
    breadcrumbKey: 'construction-outsourcing',
  },
  'insurance-outsourcing': {
    routeGroup: '(resources-outsourcing)',
    pageKey: 'insurance-outsourcing',
    breadcrumbKey: 'insurance-outsourcing',
  },
  'mortgage-outsourcing': {
    routeGroup: '(resources-outsourcing)',
    pageKey: 'mortgage-outsourcing',
    breadcrumbKey: 'mortgage-outsourcing',
  },
  'legal-outsourcing': {
    routeGroup: '(resources-outsourcing)',
    pageKey: 'legal-outsourcing',
    breadcrumbKey: 'legal-outsourcing',
  },
  'architectural-outsourcing': {
    routeGroup: '(resources-outsourcing)',
    pageKey: 'architectural-outsourcing',
    breadcrumbKey: 'architectural-outsourcing',
  },
  'drafting-outsourcing': {
    routeGroup: '(resources-outsourcing)',
    pageKey: 'drafting-outsourcing',
    breadcrumbKey: 'drafting-outsourcing',
  },
  'engineering-outsourcing': {
    routeGroup: '(resources-outsourcing)',
    pageKey: 'engineering-outsourcing',
    breadcrumbKey: 'engineering-outsourcing',
  },
  'estimating-outsourcing': {
    routeGroup: '(resources-outsourcing)',
    pageKey: 'estimating-outsourcing',
    breadcrumbKey: 'estimating-outsourcing',
  },
  'seo-outsourcing': {
    routeGroup: '(resources-outsourcing)',
    pageKey: 'seo-outsourcing',
    breadcrumbKey: 'seo-outsourcing',
  },
  'graphic-design-outsourcing': {
    routeGroup: '(resources-outsourcing)',
    pageKey: 'graphic-design-outsourcing',
    breadcrumbKey: 'graphic-design-outsourcing',
  },
  'accounting-outsourcing': {
    routeGroup: '(resources-outsourcing)',
    pageKey: 'accounting-outsourcing',
    breadcrumbKey: 'accounting-outsourcing',
  },
  'bookkeeping-outsourcing': {
    routeGroup: '(resources-outsourcing)',
    pageKey: 'bookkeeping-outsourcing',
    breadcrumbKey: 'bookkeeping-outsourcing',
  },
  'website-outsourcing': {
    routeGroup: '(resources-outsourcing)',
    pageKey: 'website-outsourcing',
    breadcrumbKey: 'website-outsourcing',
  },
  'content-writing-outsourcing': {
    routeGroup: '(resources-outsourcing)',
    pageKey: 'content-writing-outsourcing',
    breadcrumbKey: 'content-writing-outsourcing',
  },

  // Virtual Assistant pages (route group: resources-virtual-assistants)
  'virtual-assistant': {
    routeGroup: '(resources-virtual-assistants)',
    pageKey: 'virtual-assistant',
    breadcrumbKey: 'virtual-assistant',
  },
  'virtual-assistants': {
    routeGroup: '(resources-virtual-assistants)',
    pageKey: 'virtual-assistant',
    breadcrumbKey: 'virtual-assistant',
    skipLayout: true, // This is an alias, skip layout creation
  },
  'real-estate-virtual-assistant': {
    routeGroup: '(resources-virtual-assistants)',
    pageKey: 'real-estate-virtual-assistant',
    breadcrumbKey: 'real-estate-virtual-assistant',
  },
  'property-management-virtual-assistant': {
    routeGroup: '(resources-virtual-assistants)',
    pageKey: 'property-management-virtual-assistant',
    breadcrumbKey: 'property-management-virtual-assistant',
  },
  'architect-virtual-assistant': {
    routeGroup: '(resources-virtual-assistants)',
    pageKey: 'architect-virtual-assistant',
    breadcrumbKey: 'architect-virtual-assistant',
  },
  'construction-virtual-assistant': {
    routeGroup: '(resources-virtual-assistants)',
    pageKey: 'construction-virtual-assistant',
    breadcrumbKey: 'construction-virtual-assistant',
  },
  'engineering-virtual-assistant': {
    routeGroup: '(resources-virtual-assistants)',
    pageKey: 'engineering-virtual-assistant',
    breadcrumbKey: 'engineering-virtual-assistant',
  },
  'mortgage-virtual-assistant': {
    routeGroup: '(resources-virtual-assistants)',
    pageKey: 'mortgage-virtual-assistant',
    breadcrumbKey: 'mortgage-virtual-assistant',
  },
  'insurance-virtual-assistant': {
    routeGroup: '(resources-virtual-assistants)',
    pageKey: 'insurance-virtual-assistant',
    breadcrumbKey: 'insurance-virtual-assistant',
  },
  'legal-virtual-assistant': {
    routeGroup: '(resources-virtual-assistants)',
    pageKey: 'legal-virtual-assistant',
    breadcrumbKey: 'legal-virtual-assistant',
  },
  'drafting-virtual-assistant': {
    routeGroup: '(resources-virtual-assistants)',
    pageKey: 'drafting-virtual-assistant',
    breadcrumbKey: 'drafting-virtual-assistant',
  },
  'estimating-virtual-assistant': {
    routeGroup: '(resources-virtual-assistants)',
    pageKey: 'estimating-virtual-assistant',
    breadcrumbKey: 'estimating-virtual-assistant',
  },
  'ai-virtual-assistants': {
    routeGroup: '(resources-virtual-assistants)',
    pageKey: 'ai-virtual-assistants',
    breadcrumbKey: 'ai-virtual-assistants',
  },
  'seo-virtual-assistant': {
    routeGroup: '(resources-virtual-assistants)',
    pageKey: 'seo-virtual-assistant',
    breadcrumbKey: 'seo-virtual-assistant',
  },
  'marketing-virtual-assistant': {
    routeGroup: '(resources-virtual-assistants)',
    pageKey: 'marketing-virtual-assistant',
    breadcrumbKey: 'marketing-virtual-assistant',
  },
  'bookkeeping-virtual-assistant': {
    routeGroup: '(resources-virtual-assistants)',
    pageKey: 'bookkeeping-virtual-assistant',
    breadcrumbKey: 'bookkeeping-virtual-assistant',
  },
  'graphic-design-virtual-assistant': {
    routeGroup: '(resources-virtual-assistants)',
    pageKey: 'graphic-design-virtual-assistant',
    breadcrumbKey: 'graphic-design-virtual-assistant',
  },
  'social-media-virtual-assistant': {
    routeGroup: '(resources-virtual-assistants)',
    pageKey: 'social-media-virtual-assistant',
    breadcrumbKey: 'social-media-virtual-assistant',
  },
  'content-writing-virtual-assistant': {
    routeGroup: '(resources-virtual-assistants)',
    pageKey: 'content-writing-virtual-assistant',
    breadcrumbKey: 'content-writing-virtual-assistant',
  },
  'administrative-virtual-assistant': {
    routeGroup: '(resources-virtual-assistants)',
    pageKey: 'administrative-virtual-assistant',
    breadcrumbKey: 'administrative-virtual-assistant',
  },
  'accounting-virtual-assistant': {
    routeGroup: '(resources-virtual-assistants)',
    pageKey: 'accounting-virtual-assistant',
    breadcrumbKey: 'accounting-virtual-assistant',
  },
};

// Layout template
function generateLayout(pageKey) {
  return `import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";
import { PAGE_METADATA } from "@/lib/page-metadata-config";

const pageKey = '${pageKey}';
const config = PAGE_METADATA[pageKey];

export const metadata: Metadata = genMeta({
  title: config.title,
  description: config.description,
  keywords: config.keywords,
  canonicalUrl: config.canonicalUrl,
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;
}

// Function to add breadcrumb import to page.tsx
function addBreadcrumbToPage(pageContent, breadcrumbKey) {
  // Check if breadcrumb is already imported
  if (pageContent.includes('import { Breadcrumb')) {
    console.log('  ⚠️  Breadcrumb already imported, skipping');
    return pageContent;
  }

  // Add breadcrumb import after other imports
  const importLine = `import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";`;
  
  // Find the last import statement
  const importRegex = /import .+ from .+;/g;
  const imports = pageContent.match(importRegex);
  if (imports && imports.length > 0) {
    const lastImport = imports[imports.length - 1];
    pageContent = pageContent.replace(lastImport, `${lastImport}\n${importLine}`);
  }

  // Add breadcrumb component after SideNav
  // Look for common patterns where we can insert the breadcrumb
  const patterns = [
    // Pattern 1: After <div className="max-w-7xl...
    {
      regex: /(<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">)/,
      replacement: `$1\n          {/* Breadcrumb */}\n          <Breadcrumb items={BREADCRUMB_PATHS['${breadcrumbKey}']} className="mb-6" />\n          `
    },
    // Pattern 2: After <section... and <div className="max-w-
    {
      regex: /(<section[^>]*>\s*<div className="max-w-[^"]*"[^>]*>)/,
      replacement: `$1\n          {/* Breadcrumb */}\n          <Breadcrumb items={BREADCRUMB_PATHS['${breadcrumbKey}']} className="mb-6" />\n          `
    }
  ];

  for (const pattern of patterns) {
    if (pattern.regex.test(pageContent)) {
      pageContent = pageContent.replace(pattern.regex, pattern.replacement);
      break;
    }
  }

  return pageContent;
}

// Main execution
function main() {
  console.log('🚀 Starting SEO Automation Script\n');
  
  let createdCount = 0;
  let updatedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  for (const [pageName, config] of Object.entries(PAGES_TO_UPDATE)) {
    console.log(`\n📄 Processing: ${pageName}`);
    
    const pageDir = path.join(BASE_DIR, config.routeGroup, pageName);
    const layoutPath = path.join(pageDir, 'layout.tsx');
    const pagePath = path.join(pageDir, 'page.tsx');

    // Check if directory exists
    if (!fs.existsSync(pageDir)) {
      console.log(`  ❌ Directory not found: ${pageDir}`);
      errorCount++;
      continue;
    }

    // Step 1: Create layout.tsx if it doesn't exist and not skipped
    if (!config.skipLayout) {
      if (!fs.existsSync(layoutPath)) {
        try {
          const layoutContent = generateLayout(config.pageKey);
          fs.writeFileSync(layoutPath, layoutContent, 'utf8');
          console.log(`  ✅ Created layout.tsx`);
          createdCount++;
        } catch (error) {
          console.log(`  ❌ Error creating layout: ${error.message}`);
          errorCount++;
        }
      } else {
        console.log(`  ⚠️  Layout already exists, skipping`);
        skippedCount++;
      }
    }

    // Step 2: Update page.tsx to add breadcrumb
    if (fs.existsSync(pagePath)) {
      try {
        let pageContent = fs.readFileSync(pagePath, 'utf8');
        const updatedContent = addBreadcrumbToPage(pageContent, config.breadcrumbKey);
        
        if (updatedContent !== pageContent) {
          fs.writeFileSync(pagePath, updatedContent, 'utf8');
          console.log(`  ✅ Updated page.tsx with breadcrumb`);
          updatedCount++;
        } else {
          console.log(`  ⚠️  Page already has breadcrumb or couldn't find insertion point`);
        }
      } catch (error) {
        console.log(`  ❌ Error updating page: ${error.message}`);
        errorCount++;
      }
    } else {
      console.log(`  ❌ page.tsx not found`);
      errorCount++;
    }
  }

  // Summary
  console.log('\n\n' + '='.repeat(50));
  console.log('📊 AUTOMATION COMPLETE!');
  console.log('='.repeat(50));
  console.log(`✅ Layouts created: ${createdCount}`);
  console.log(`✅ Pages updated: ${updatedCount}`);
  console.log(`⚠️  Skipped: ${skippedCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log('\n🎉 Total pages processed: ' + Object.keys(PAGES_TO_UPDATE).length);
  console.log('\n💡 Next steps:');
  console.log('  1. Review the changes');
  console.log('  2. Test a few pages locally');
  console.log('  3. Commit with: git add -A && git commit -m "🤖 Auto-apply SEO to all resource pages"');
  console.log('  4. Push to GitHub\n');
}

// Run the script
main();

