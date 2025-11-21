/**
 * Content Mapping Service
 * Maps case studies, blogs, and resources to industries and user contexts
 */

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  company: string;
  industry: string[];
  description: string;
  url: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  targetAudience: string[];
}

export interface ResourcePage {
  id: string;
  title: string;
  description: string;
  url: string;
  industry: string;
  type: 'outsourcing' | 'virtual-assistant';
}

// Case Studies Database
export const CASE_STUDIES: CaseStudy[] = [
  // Real Estate
  {
    id: 'business-referral-partnerships',
    title: '12+ Years of Professional Referrals',
    client: 'Ray Wood',
    company: 'Bestagents',
    industry: ['Real Estate', 'All'],
    description: 'Featured on Top Agents Playbook podcast discussing virtual assistant readiness and long-term partnership success',
    url: '/business-referral-partnerships',
    tags: ['real-estate', 'long-term', 'referral', 'trusted']
  },
  {
    id: 'gradual-team-scaling-success',
    title: 'Gradual Team Scaling Success',
    client: 'Marinella Sortino',
    company: 'Barry Plant',
    industry: ['Real Estate', 'Property Management'],
    description: 'How Barry Plant successfully scaled their property management team gradually with offshore support',
    url: '/gradual-team-scaling-success',
    tags: ['real-estate', 'property-management', 'scaling', 'gradual-growth']
  },
  {
    id: 'appraisal-listings-volume-increase',
    title: 'Appraisal & Listings Volume Increase',
    client: 'Levi Turner',
    company: 'Bellarine Property',
    industry: ['Real Estate'],
    description: 'How Bellarine Property increased appraisal and listings volume with VA support',
    url: '/appraisal-listings-volume-increase',
    tags: ['real-estate', 'growth', 'listings', 'roi']
  },
  
  // Construction
  {
    id: 'construction-cost-reduction',
    title: 'Construction Cost Reduction',
    client: 'Iain Neilson',
    company: 'Gallery Group',
    industry: ['Construction', 'All'],
    description: 'How Gallery Group reduced construction costs with offshore estimating and project admin support',
    url: '/construction-cost-reduction',
    tags: ['construction', 'cost-savings', 'estimating', 'roi']
  },
  {
    id: 'team-expansion-success',
    title: 'Team Expansion Success',
    client: 'Kuahiwi Kahapea',
    company: 'Ballast',
    industry: ['Construction', 'Real Estate'],
    description: 'How Ballast Real Estate successfully expanded their team with Filipino virtual assistants',
    url: '/team-expansion-success',
    tags: ['construction', 'real-estate', 'scaling', 'growth']
  },
  
  // Mortgage & Finance
  {
    id: 'mortgage-industry-transformation',
    title: 'Mortgage Industry Transformation',
    client: 'Jack Miller',
    company: 'Gelt Financial',
    industry: ['Mortgage', 'Finance'],
    description: 'How Gelt Financial transformed their mortgage operations with Filipino loan processing support',
    url: '/mortgage-industry-transformation',
    tags: ['mortgage', 'finance', 'loan-processing', 'transformation']
  },
  
  // General Success Stories
  {
    id: 'long-term-partnership-success',
    title: 'Long-term Partnership Success',
    client: 'Steve Lovegrove',
    company: 'Professionals McDowell',
    industry: ['Real Estate', 'All'],
    description: 'Multi-year partnership with perfect 5/5 performance ratings',
    url: '/long-term-partnership-success',
    tags: ['long-term', 'partnership', 'trust', 'real-estate']
  },
  {
    id: 'exceptional-team-performance',
    title: 'Exceptional Team Performance',
    client: 'Andrew Lochhead',
    company: 'Century 21',
    industry: ['Real Estate', 'All'],
    description: 'How Century 21 achieved exceptional team performance with offshore support',
    url: '/exceptional-team-performance',
    tags: ['real-estate', 'performance', 'excellence']
  },
  {
    id: 'hiring-success-after-failures',
    title: 'Hiring Success After Failures',
    client: 'Cindy Armour Helm',
    company: 'Better Homes and Gardens',
    industry: ['Real Estate', 'All'],
    description: 'How Cindy found hiring success with ShoreAgents after previous freelancer failures',
    url: '/hiring-success-after-failures',
    tags: ['real-estate', 'reliable', 'solution', 'vs-freelancers']
  },
  {
    id: 'customer-service-scaling',
    title: 'Customer Service Scaling',
    client: 'Tash Poole',
    company: 'BoxBrownie',
    industry: ['All'],
    description: 'How BoxBrownie scaled customer service operations with Filipino support staff',
    url: '/customer-service-scaling',
    tags: ['customer-service', 'scaling', '24-7', 'support']
  },
  {
    id: 'streamline-back-office',
    title: 'Streamline Back Office',
    client: 'Jason Gard',
    company: 'Gard Real Estate',
    industry: ['Real Estate', 'Property Management'],
    description: 'How Jason Gard streamlined back office operations with 3 years of perfect performance',
    url: '/streamline-back-office',
    tags: ['real-estate', 'back-office', 'admin', 'efficiency']
  },
  {
    id: 'quick-staff-onboarding',
    title: 'Quick Staff Onboarding',
    client: 'Michael Garside',
    company: 'Harcourts Dapto',
    industry: ['Real Estate', 'Property Management'],
    description: 'How Harcourts Dapto achieved quick staff onboarding from interview to productive in 7 days',
    url: '/quick-staff-onboarding',
    tags: ['real-estate', 'onboarding', 'fast', 'efficient']
  }
];

// Blog Posts Database
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'what-is-outsourcing',
    title: 'What is Outsourcing? Complete Guide for 2025',
    description: 'Understanding outsourcing: definitions, benefits, risks, and when it makes sense. Complete guide with real costs and ROI data.',
    url: '/what-is-outsourcing',
    tags: ['beginner', 'education', 'guide'],
    targetAudience: ['new_lead', 'stage_1']
  },
  {
    id: 'outsourcing-philippines',
    title: 'Outsourcing Philippines: Why It\'s the #1 BPO Destination',
    description: 'Why Philippines is the premier outsourcing destination. English proficiency, cultural fit, time zones, costs, and infrastructure.',
    url: '/outsourcing-philippines',
    tags: ['philippines', 'education', 'comparison'],
    targetAudience: ['new_lead', 'stage_1', 'stage_2']
  },
  {
    id: 'virtual-real-estate-assistant-pricing',
    title: 'Virtual Real Estate Assistant Pricing: Complete 2025 Guide',
    description: 'Real estate VA pricing guide. Hourly rates, hidden costs, real ROI calculations. What you actually pay vs what you get.',
    url: '/virtual-real-estate-assistant-pricing',
    tags: ['pricing', 'real-estate', 'roi'],
    targetAudience: ['stage_1', 'stage_2']
  },
  {
    id: 'what-does-a-real-estate-virtual-assistant-do',
    title: 'What Does a Real Estate Virtual Assistant Do? Complete Guide',
    description: 'Everything a real estate VA can handle: transaction coordination, ISA services, CRM management, listing admin. Complete role breakdown.',
    url: '/what-does-a-real-estate-virtual-assistant-do',
    tags: ['real-estate', 'roles', 'education'],
    targetAudience: ['stage_1', 'stage_2']
  },
  {
    id: 'outsourcing-vs-offshoring',
    title: 'Outsourcing vs Offshoring: Key Differences Explained',
    description: 'Understanding the difference between outsourcing and offshoring. Which is right for your business? Complete comparison guide.',
    url: '/outsourcing-vs-offshoring',
    tags: ['education', 'comparison'],
    targetAudience: ['new_lead', 'stage_1']
  },
  {
    id: 'outsourcing-to-india',
    title: 'Outsourcing to India: 2025 Guide',
    description: 'Complete guide to outsourcing to India. Costs, benefits, time zones, and why India is a leading BPO destination.',
    url: '/outsourcing-to-india',
    tags: ['comparison', 'india'],
    targetAudience: ['stage_1']
  },
  {
    id: 'outsourcing-to-vietnam',
    title: 'Outsourcing to Vietnam: Complete 2025 Guide',
    description: 'Everything you need to know about outsourcing to Vietnam. Costs, benefits, challenges, and how it compares to Philippines.',
    url: '/outsourcing-to-vietnam',
    tags: ['comparison', 'vietnam'],
    targetAudience: ['stage_1']
  }
];

// Helper Functions
export function getCaseStudiesForIndustry(industry?: string): CaseStudy[] {
  if (!industry) {
    // Return most popular/general ones
    return CASE_STUDIES.filter(cs => cs.industry.includes('All')).slice(0, 3);
  }

  const matches = CASE_STUDIES.filter(cs => 
    cs.industry.some(ind => ind.toLowerCase().includes(industry.toLowerCase()))
  );

  // If no matches, return general ones
  return matches.length > 0 
    ? matches.slice(0, 3) 
    : CASE_STUDIES.filter(cs => cs.industry.includes('All')).slice(0, 3);
}

export function getBlogForStage(stage: string, industry?: string): BlogPost | null {
  // Filter by target audience
  let matches = BLOG_POSTS.filter(blog => blog.targetAudience.includes(stage));

  // Further filter by industry if provided
  if (industry && industry.toLowerCase().includes('real estate')) {
    const realEstateBlogs = matches.filter(blog => blog.tags.includes('real-estate'));
    if (realEstateBlogs.length > 0) {
      return realEstateBlogs[0];
    }
  }

  // Return first match or default
  return matches[0] || BLOG_POSTS[0];
}

export function getResourcePageForIndustry(
  industry: string, 
  type: 'outsourcing' | 'virtual-assistant' = 'outsourcing'
): ResourcePage | null {
  const slug = industry.toLowerCase().replace(/\s+/g, '-');
  const suffix = type === 'outsourcing' ? '-outsourcing' : '-virtual-assistant';
  
  return {
    id: `${slug}${suffix}`,
    title: `${industry} ${type === 'outsourcing' ? 'Outsourcing' : 'Virtual Assistant'}`,
    description: `Comprehensive guide to ${type === 'outsourcing' ? 'outsourcing' : 'virtual assistants'} for ${industry} companies`,
    url: `/${slug}${suffix}`,
    industry,
    type
  };
}

export function getPopularCaseStudies(limit: number = 3): CaseStudy[] {
  // Return the most popular/featured ones
  return [
    CASE_STUDIES.find(cs => cs.id === 'business-referral-partnerships'),
    CASE_STUDIES.find(cs => cs.id === 'construction-cost-reduction'),
    CASE_STUDIES.find(cs => cs.id === 'long-term-partnership-success')
  ].filter(Boolean).slice(0, limit) as CaseStudy[];
}

export function searchCaseStudies(query: string): CaseStudy[] {
  const lowerQuery = query.toLowerCase();
  return CASE_STUDIES.filter(cs =>
    cs.title.toLowerCase().includes(lowerQuery) ||
    cs.description.toLowerCase().includes(lowerQuery) ||
    cs.tags.some(tag => tag.includes(lowerQuery)) ||
    cs.industry.some(ind => ind.toLowerCase().includes(lowerQuery))
  );
}

