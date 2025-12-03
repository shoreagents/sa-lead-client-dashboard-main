#!/usr/bin/env node

/**
 * Automated SEO for Case Studies & Blog Posts
 */

const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, 'shoreagents-main', 'src', 'app');

// Case Studies with client names
const CASE_STUDIES = {
  'business-referral-partnerships': {
    routeGroup: '(case-studies)',
    clientName: 'Ray Wood',
    company: 'Bestagents',
    title: '12+ Years of Professional Referrals: Featured on Top Agents Playbook',
    description: 'How Ray Wood, respected real estate coach, has referred clients to ShoreAgents for 12+ years. Featured on Top Agents Playbook podcast discussing virtual assistant readiness.',
    breadcrumb: 'Homepage > Case Studies > Ray Wood',
  },
  'construction-cost-reduction': {
    routeGroup: '(case-studies)',
    clientName: 'Iain Neilson',
    company: 'Gallery Group',
    title: 'Construction Cost Reduction: Gallery Group Success Story',
    description: 'How Gallery Group reduced construction costs with offshore estimating and project admin support. Real savings, real results.',
    breadcrumb: 'Homepage > Case Studies > Iain Neilson',
  },
  'team-expansion-success': {
    routeGroup: '(case-studies)',
    clientName: 'Kuahiwi Kahapea',
    company: 'Ballast',
    title: 'Team Expansion Success: Ballast Real Estate Growth',
    description: 'How Ballast Real Estate successfully expanded their team with Filipino virtual assistants. Scaling without overhead increase.',
    breadcrumb: 'Homepage > Case Studies > Kuahiwi Kahapea',
  },
  'customer-service-scaling': {
    routeGroup: '(case-studies)',
    clientName: 'Tash Poole',
    company: 'BoxBrownie',
    title: 'Customer Service Scaling: BoxBrownie Success Story',
    description: 'How BoxBrownie scaled customer service operations with Filipino support staff. 24/7 coverage without burnout.',
    breadcrumb: 'Homepage > Case Studies > Tash Poole',
  },
  'business-growth-through-offshore-staffing': {
    routeGroup: '(case-studies)',
    clientName: 'Pernell Callaghan',
    company: 'Arizto Real Estate',
    title: 'Business Growth Through Offshore Staffing: Arizto Real Estate',
    description: 'How Arizto Real Estate achieved business growth through strategic offshore staffing. Professional Filipino support team.',
    breadcrumb: 'Homepage > Case Studies > Pernell Callaghan',
  },
  'gradual-team-scaling-success': {
    routeGroup: '(case-studies)',
    clientName: 'Marinella Sortino',
    company: 'Barry Plant',
    title: 'Gradual Team Scaling Success: Barry Plant Property Management',
    description: 'How Barry Plant successfully scaled their property management team gradually. Conservative, measured growth strategy.',
    breadcrumb: 'Homepage > Case Studies > Marinella Sortino',
  },
  'long-term-partnership-success': {
    routeGroup: '(case-studies)',
    clientName: 'Steve Lovegrove',
    company: 'Professionals McDowell',
    title: 'Long-term Partnership Success: Professionals McDowell',
    description: 'Multi-year partnership with Professionals McDowell. Perfect 5/5 performance ratings. "If we could clone her we would."',
    breadcrumb: 'Homepage > Case Studies > Steve Lovegrove',
  },
  'exceptional-team-performance': {
    routeGroup: '(case-studies)',
    clientName: 'Andrew Lochhead',
    company: 'Century 21',
    title: 'Exceptional Team Performance: Century 21 Rich River',
    description: 'How Century 21 achieved exceptional team performance. Management\'s assessment: "The whole team there are legends."',
    breadcrumb: 'Homepage > Case Studies > Andrew Lochhead',
  },
  'hiring-success-after-failures': {
    routeGroup: '(case-studies)',
    clientName: 'Cindy Armour Helm',
    company: 'Better Homes and Gardens',
    title: 'Hiring Success After Failures: Better Homes and Gardens',
    description: 'How Cindy Armour Helm found hiring success with ShoreAgents after previous freelancer failures. Reliable, consistent support.',
    breadcrumb: 'Homepage > Case Studies > Cindy Armour Helm',
  },
  'reliable-recruitment-partner': {
    routeGroup: '(case-studies)',
    clientName: 'Tracey Foy',
    company: 'Professionals Schultz',
    title: 'Reliable Recruitment Partner: Professionals Schultz',
    description: 'How Professionals Schultz found a reliable recruitment partner. Consistent placements, quality candidates.',
    breadcrumb: 'Homepage > Case Studies > Tracey Foy',
  },
  'mortgage-industry-transformation': {
    routeGroup: '(case-studies)',
    clientName: 'Jack Miller',
    company: 'Gelt Financial',
    title: 'Mortgage Industry Transformation: Gelt Financial',
    description: 'How Gelt Financial transformed their mortgage operations with Filipino loan processing support. Faster turnarounds, better service.',
    breadcrumb: 'Homepage > Case Studies > Jack Miller',
  },
  'immediate-business-transformation': {
    routeGroup: '(case-studies)',
    clientName: 'Luke Newton',
    company: 'LockedOn',
    title: 'Immediate Business Transformation: LockedOn',
    description: 'How LockedOn experienced immediate business transformation with offshore support. Quick wins, lasting results.',
    breadcrumb: 'Homepage > Case Studies > Luke Newton',
  },
  'offshore-staffing-success': {
    routeGroup: '(case-studies)',
    clientName: 'Brett Ayles',
    company: 'Reside Real Estate',
    title: 'Offshore Staffing Success: Reside Real Estate',
    description: 'How Reside Real Estate achieved offshore staffing success. Building a sustainable remote team.',
    breadcrumb: 'Homepage > Case Studies > Brett Ayles',
  },
  'smooth-recruitment-process': {
    routeGroup: '(case-studies)',
    clientName: 'Jon Beaulieu',
    company: 'JBMP Group',
    title: 'Smooth Recruitment Process: JBMP Group',
    description: 'How JBMP Group experienced a smooth recruitment process. 7-day sprint from need to hire.',
    breadcrumb: 'Homepage > Case Studies > Jon Beaulieu',
  },
  'successful-trial-hiring': {
    routeGroup: '(case-studies)',
    clientName: 'Jonathan Curreri',
    company: 'Crowdcopia',
    title: 'Successful Trial Hiring: Crowdcopia',
    description: 'How Crowdcopia successfully trialed and hired Filipino staff. Low-risk testing before commitment.',
    breadcrumb: 'Homepage > Case Studies > Jonathan Curreri',
  },
  'streamline-back-office': {
    routeGroup: '(case-studies)',
    clientName: 'Jason Gard',
    company: 'Gard Real Estate',
    title: 'Streamline Back Office: Jason Gard Real Estate',
    description: 'How Jason Gard streamlined back office operations. 3 years later: perfect performance reviews.',
    breadcrumb: 'Homepage > Case Studies > Jason Gard',
  },
  'quick-staff-onboarding': {
    routeGroup: '(case-studies)',
    clientName: 'Michael Garside',
    company: 'Harcourts Dapto',
    title: 'Quick Staff Onboarding: Harcourts Dapto',
    description: 'How Harcourts Dapto achieved quick staff onboarding. From interview to productive in 7 days.',
    breadcrumb: 'Homepage > Case Studies > Michael Garside',
  },
  'appraisal-listings-volume-increase': {
    routeGroup: '(case-studies)',
    clientName: 'Levi Turner',
    company: 'Bellarine Property',
    title: 'Appraisal & Listings Volume Increase: Bellarine Property',
    description: 'How Bellarine Property increased appraisal and listings volume with VA support. More deals, same hours.',
    breadcrumb: 'Homepage > Case Studies > Levi Turner',
  },
  'business-systems-implementation-success': {
    routeGroup: '(case-studies)',
    clientName: 'Christel Renton',
    company: 'Mi Property Group',
    title: 'Business Systems Implementation: Mi Property Group',
    description: 'How Mi Property Group successfully implemented business systems with offshore support. Documentation and process.',
    breadcrumb: 'Homepage > Case Studies > Christel Renton',
  },
  'easy-business-process-implementation': {
    routeGroup: '(case-studies)',
    clientName: 'Phil Knight',
    company: 'AGENT in a Box',
    title: 'Easy Business Process Implementation: AGENT in a Box',
    description: 'How AGENT in a Box made business process implementation easy. Systems thinking meets execution.',
    breadcrumb: 'Homepage > Case Studies > Phil Knight',
  },
  'marketing-automation-implementation': {
    routeGroup: '(case-studies)',
    clientName: 'Mark Dwyer',
    company: 'Sales Trainer',
    title: 'Marketing Automation Implementation: Mark Dwyer',
    description: 'How sales trainer Mark Dwyer implemented marketing automation with VA support. Consistent outreach at scale.',
    breadcrumb: 'Homepage > Case Studies > Mark Dwyer',
  },
  'mobile-business-solutions': {
    routeGroup: '(case-studies)',
    clientName: 'Peter Forbes',
    company: '#1 Property Centre',
    title: 'Mobile Business Solutions: Peter Forbes',
    description: 'How Peter Forbes built mobile business solutions with remote support. Business flexibility without compromise.',
    breadcrumb: 'Homepage > Case Studies > Peter Forbes',
  },
  'hands-off-business-procedures': {
    routeGroup: '(case-studies)',
    clientName: 'Kevin Turner',
    company: 'Real Estate Talk',
    title: 'Hands-off Business Procedures: Kevin Turner',
    description: 'How Kevin Turner created hands-off business procedures. Systematic delegation for freedom.',
    breadcrumb: 'Homepage > Case Studies > Kevin Turner',
  },
  'industry-expert-validation': {
    routeGroup: '(case-studies)',
    clientName: 'Derek Gallimore',
    company: 'Outsource Accelerator',
    title: 'Industry Expert Validation: Derek Gallimore Recognition',
    description: 'Recognition from Derek Gallimore, CEO of Outsource Accelerator. Industry expert validation of our methodology.',
    breadcrumb: 'Homepage > Case Studies > Derek Gallimore',
  },
};

// Blog Posts
const BLOG_POSTS = {
  'what-is-outsourcing': {
    routeGroup: '(blogs)',
    title: 'What is Outsourcing? Complete Guide for 2025',
    description: 'Understanding outsourcing: definitions, benefits, risks, and when it makes sense. Complete guide with real costs and ROI data.',
    breadcrumb: [
      { name: 'Outsourcing', url: 'https://www.shoreagents.com/outsourcing' },
      { name: 'What is Outsourcing', url: 'https://www.shoreagents.com/what-is-outsourcing' }
    ],
  },
  'outsourcing-vs-offshoring': {
    routeGroup: '(blogs)',
    title: 'Outsourcing vs Offshoring: Key Differences Explained',
    description: 'Understanding the difference between outsourcing and offshoring. Which is right for your business? Complete comparison guide.',
    breadcrumb: [
      { name: 'Outsourcing', url: 'https://www.shoreagents.com/outsourcing' },
      { name: 'Outsourcing vs Offshoring', url: 'https://www.shoreagents.com/outsourcing-vs-offshoring' }
    ],
  },
  'outsourcing-to-vietnam': {
    routeGroup: '(blogs)',
    title: 'Outsourcing to Vietnam: Complete 2025 Guide',
    description: 'Everything you need to know about outsourcing to Vietnam. Costs, benefits, challenges, and how it compares to Philippines.',
    breadcrumb: [
      { name: 'Outsourcing', url: 'https://www.shoreagents.com/outsourcing' },
      { name: 'Outsourcing to Vietnam', url: 'https://www.shoreagents.com/outsourcing-to-vietnam' }
    ],
  },
  'outsourcing-to-india': {
    routeGroup: '(blogs)',
    title: 'Outsourcing to India: 2025 Guide',
    description: 'Complete guide to outsourcing to India. Costs, benefits, time zones, and why India is a leading BPO destination.',
    breadcrumb: [
      { name: 'Outsourcing', url: 'https://www.shoreagents.com/outsourcing' },
      { name: 'Outsourcing to India', url: 'https://www.shoreagents.com/outsourcing-to-india' }
    ],
  },
  'virtual-real-estate-assistant-pricing': {
    routeGroup: '(blogs)',
    title: 'Virtual Real Estate Assistant Pricing: Complete 2025 Guide',
    description: 'Real estate VA pricing guide. Hourly rates, hidden costs, real ROI calculations. What you actually pay vs what you get.',
    breadcrumb: [
      { name: 'Virtual Assistants', url: 'https://www.shoreagents.com/virtual-assistant' },
      { name: 'Real Estate Virtual Assistant', url: 'https://www.shoreagents.com/real-estate-virtual-assistant' },
      { name: 'Pricing Guide', url: 'https://www.shoreagents.com/virtual-real-estate-assistant-pricing' }
    ],
  },
  'outsourcing-philippines': {
    routeGroup: '(blogs)',
    title: 'Outsourcing Philippines: Why It\'s the #1 BPO Destination',
    description: 'Why Philippines is the premier outsourcing destination. English proficiency, cultural fit, time zones, costs, and infrastructure.',
    breadcrumb: [
      { name: 'Outsourcing', url: 'https://www.shoreagents.com/outsourcing' },
      { name: 'Outsourcing Philippines', url: 'https://www.shoreagents.com/outsourcing-philippines' }
    ],
  },
  'what-does-a-real-estate-virtual-assistant-do': {
    routeGroup: '(blogs)',
    title: 'What Does a Real Estate Virtual Assistant Do? Complete Guide',
    description: 'Everything a real estate VA can handle: transaction coordination, ISA services, CRM management, listing admin. Complete role breakdown.',
    breadcrumb: [
      { name: 'Virtual Assistants', url: 'https://www.shoreagents.com/virtual-assistant' },
      { name: 'Real Estate Virtual Assistant', url: 'https://www.shoreagents.com/real-estate-virtual-assistant' },
      { name: 'What Do They Do', url: 'https://www.shoreagents.com/what-does-a-real-estate-virtual-assistant-do' }
    ],
  },
};

// Layout template for case studies
function generateCaseStudyLayout(pageSlug, config) {
  return `import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "${config.title} | ${config.clientName} - ${config.company}",
  description: "${config.description}",
  keywords: ["case study", "${config.company}", "${config.clientName}", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/${pageSlug}",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;
}

// Layout template for blog posts
function generateBlogLayout(pageSlug, config) {
  return `import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "${config.title}",
  description: "${config.description}",
  keywords: ["outsourcing", "virtual assistant", "BPO", "offshore staffing", "Philippines"],
  canonicalUrl: "/${pageSlug}",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "Stephen Atcheler",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;
}

// Function to add breadcrumb with custom items
function addCustomBreadcrumbToPage(pageContent, breadcrumbItems) {
  // Check if breadcrumb is already imported
  if (pageContent.includes('import { Breadcrumb')) {
    console.log('  ⚠️  Breadcrumb already imported, skipping');
    return pageContent;
  }

  // Add breadcrumb import
  const importLine = `import { Breadcrumb } from "@/components/ui/breadcrumb";`;
  const importRegex = /import .+ from .+;/g;
  const imports = pageContent.match(importRegex);
  if (imports && imports.length > 0) {
    const lastImport = imports[imports.length - 1];
    pageContent = pageContent.replace(lastImport, `${lastImport}\n${importLine}`);
  }

  // Create breadcrumb items array
  const breadcrumbCode = `\n          {/* Breadcrumb */}\n          <Breadcrumb items={${JSON.stringify(breadcrumbItems)}} className="mb-6" />\n          `;

  // Add breadcrumb after max-w div
  const patterns = [
    {
      regex: /(<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">)/,
      replacement: `$1${breadcrumbCode}`
    },
    {
      regex: /(<section[^>]*>\s*<div className="max-w-[^"]*"[^>]*>)/,
      replacement: `$1${breadcrumbCode}`
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
  console.log('🚀 Starting Case Studies & Blog Posts SEO Automation\n');
  
  let stats = { created: 0, updated: 0, skipped: 0, errors: 0 };

  // Process Case Studies
  console.log('📚 Processing Case Studies...\n');
  for (const [pageSlug, config] of Object.entries(CASE_STUDIES)) {
    console.log(`📄 ${config.clientName} - ${config.company}`);
    
    const pageDir = path.join(BASE_DIR, config.routeGroup, pageSlug);
    const layoutPath = path.join(pageDir, 'layout.tsx');
    const pagePath = path.join(pageDir, 'page.tsx');

    if (!fs.existsSync(pageDir)) {
      console.log(`  ❌ Directory not found`);
      stats.errors++;
      continue;
    }

    // Create layout
    if (!fs.existsSync(layoutPath)) {
      try {
        fs.writeFileSync(layoutPath, generateCaseStudyLayout(pageSlug, config), 'utf8');
        console.log(`  ✅ Created layout.tsx`);
        stats.created++;
      } catch (error) {
        console.log(`  ❌ Error: ${error.message}`);
        stats.errors++;
      }
    } else {
      stats.skipped++;
    }

    // Update page with breadcrumb
    if (fs.existsSync(pagePath)) {
      try {
        let pageContent = fs.readFileSync(pagePath, 'utf8');
        const breadcrumbItems = [
          { name: 'Case Studies', url: 'https://www.shoreagents.com/case-studies' },
          { name: config.clientName, url: `https://www.shoreagents.com/${pageSlug}` }
        ];
        const updatedContent = addCustomBreadcrumbToPage(pageContent, breadcrumbItems);
        
        if (updatedContent !== pageContent) {
          fs.writeFileSync(pagePath, updatedContent, 'utf8');
          console.log(`  ✅ Updated with breadcrumb`);
          stats.updated++;
        }
      } catch (error) {
        console.log(`  ❌ Error: ${error.message}`);
        stats.errors++;
      }
    }
  }

  // Process Blog Posts
  console.log('\n📝 Processing Blog Posts...\n');
  for (const [pageSlug, config] of Object.entries(BLOG_POSTS)) {
    console.log(`📄 ${config.title}`);
    
    const pageDir = path.join(BASE_DIR, config.routeGroup, pageSlug);
    const layoutPath = path.join(pageDir, 'layout.tsx');
    const pagePath = path.join(pageDir, 'page.tsx');

    if (!fs.existsSync(pageDir)) {
      console.log(`  ❌ Directory not found`);
      stats.errors++;
      continue;
    }

    // Create layout
    if (!fs.existsSync(layoutPath)) {
      try {
        fs.writeFileSync(layoutPath, generateBlogLayout(pageSlug, config), 'utf8');
        console.log(`  ✅ Created layout.tsx`);
        stats.created++;
      } catch (error) {
        console.log(`  ❌ Error: ${error.message}`);
        stats.errors++;
      }
    } else {
      stats.skipped++;
    }

    // Update page with breadcrumb
    if (fs.existsSync(pagePath)) {
      try {
        let pageContent = fs.readFileSync(pagePath, 'utf8');
        const updatedContent = addCustomBreadcrumbToPage(pageContent, config.breadcrumb);
        
        if (updatedContent !== pageContent) {
          fs.writeFileSync(pagePath, updatedContent, 'utf8');
          console.log(`  ✅ Updated with breadcrumb`);
          stats.updated++;
        }
      } catch (error) {
        console.log(`  ❌ Error: ${error.message}`);
        stats.errors++;
      }
    }
  }

  // Summary
  console.log('\n\n' + '='.repeat(50));
  console.log('📊 AUTOMATION COMPLETE!');
  console.log('='.repeat(50));
  console.log(`✅ Layouts created: ${stats.created}`);
  console.log(`✅ Pages updated: ${stats.updated}`);
  console.log(`⚠️  Skipped: ${stats.skipped}`);
  console.log(`❌ Errors: ${stats.errors}`);
  console.log(`\n🎉 Case Studies: ${Object.keys(CASE_STUDIES).length}`);
  console.log(`🎉 Blog Posts: ${Object.keys(BLOG_POSTS).length}`);
  console.log('\n💡 Ready to commit and push!\n');
}

main();

