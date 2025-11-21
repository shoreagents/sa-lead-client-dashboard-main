import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.shoreagents.com';
  const currentDate = new Date();

  // Static pages
  const staticPages = [
    { url: '', priority: 1, changeFrequency: 'weekly' as const },
    { url: '/pricing', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/how-it-works', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/we-got-talent', priority: 0.9, changeFrequency: 'daily' as const },
    { url: '/case-studies', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/blogs', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  // Blog pages (7 pages)
  const blogPages = [
    '/outsourcing-philippines',
    '/outsourcing-to-india',
    '/outsourcing-to-vietnam',
    '/outsourcing-vs-offshoring',
    '/what-is-outsourcing',
    '/virtual-real-estate-assistant-pricing',
    '/what-does-a-real-estate-virtual-assistant-do',
  ].map(url => ({
    url,
    priority: 0.8,
    changeFrequency: 'monthly' as const
  }));

  // Outsourcing Resource pages (17 pages)
  const outsourcingPages = [
    '/outsourcing',
    '/real-estate-outsourcing',
    '/property-management-outsourcing',
    '/construction-outsourcing',
    '/insurance-outsourcing',
    '/mortgage-outsourcing',
    '/legal-outsourcing',
    '/architectural-outsourcing',
    '/drafting-outsourcing',
    '/engineering-outsourcing',
    '/estimating-outsourcing',
    '/seo-outsourcing',
    '/graphic-design-outsourcing',
    '/accounting-outsourcing',
    '/bookkeeping-outsourcing',
    '/website-outsourcing',
    '/content-writing-outsourcing',
  ].map(url => ({
    url,
    priority: 0.8,
    changeFrequency: 'weekly' as const
  }));

  // Virtual Assistant Resource pages (21 pages)
  const vaPages = [
    '/virtual-assistant',
    '/virtual-assistants',
    '/real-estate-virtual-assistant',
    '/property-management-virtual-assistant',
    '/architect-virtual-assistant',
    '/construction-virtual-assistant',
    '/engineering-virtual-assistant',
    '/mortgage-virtual-assistant',
    '/insurance-virtual-assistant',
    '/legal-virtual-assistant',
    '/drafting-virtual-assistant',
    '/estimating-virtual-assistant',
    '/ai-virtual-assistants',
    '/seo-virtual-assistant',
    '/marketing-virtual-assistant',
    '/bookkeeping-virtual-assistant',
    '/graphic-design-virtual-assistant',
    '/social-media-virtual-assistant',
    '/content-writing-virtual-assistant',
    '/administrative-virtual-assistant',
    '/accounting-virtual-assistant',
  ].map(url => ({
    url,
    priority: 0.8,
    changeFrequency: 'weekly' as const
  }));

  // Case Study pages (24 pages)
  const caseStudyPages = [
    '/appraisal-listings-volume-increase',
    '/business-growth-through-offshore-staffing',
    '/business-referral-partnerships',
    '/business-systems-implementation-success',
    '/construction-cost-reduction',
    '/customer-service-scaling',
    '/easy-business-process-implementation',
    '/exceptional-team-performance',
    '/gradual-team-scaling-success',
    '/hands-off-business-procedures',
    '/hiring-success-after-failures',
    '/immediate-business-transformation',
    '/industry-expert-validation',
    '/long-term-partnership-success',
    '/marketing-automation-implementation',
    '/mobile-business-solutions',
    '/mortgage-industry-transformation',
    '/offshore-staffing-success',
    '/quick-staff-onboarding',
    '/reliable-recruitment-partner',
    '/smooth-recruitment-process',
    '/streamline-back-office',
    '/successful-trial-hiring',
    '/team-expansion-success',
  ].map(url => ({
    url,
    priority: 0.7,
    changeFrequency: 'monthly' as const
  }));

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...blogPages,
    ...outsourcingPages,
    ...vaPages,
    ...caseStudyPages,
  ];

  return allPages.map(({ url, priority, changeFrequency }) => ({
    url: `${baseUrl}${url}`,
    lastModified: currentDate,
    changeFrequency,
    priority,
  }));
}

