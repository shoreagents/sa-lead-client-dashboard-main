export interface KnowledgeItem {
  id: string;
  title: string;
  content: string;
  keywords: string[];
  category: 'service' | 'team' | 'company' | 'pricing' | 'process';
  url?: string;
  interestTags?: string[]; // Tags to identify user interests
  relatedServices?: string[]; // Related services that might interest the user
}

export interface VectorSearchResult {
  id: string;
  content: string;
  title: string;
  url: string;
  similarity: number;
}

export const knowledgeBase: KnowledgeItem[] = [
  // Company Information
  {
    id: 'company-overview',
    title: 'About ShoreAgents',
    content: 'ShoreAgents is a leading outsourcing company that provides comprehensive business solutions. We help companies scale efficiently by offering expert teams and proven processes across various industries.',
    keywords: ['about', 'company', 'overview', 'who we are', 'shoreagents'],
    category: 'company'
  },
  
  // Services
  {
    id: 'real-estate-services',
    title: 'Real Estate Outsourcing',
    content: 'We provide comprehensive real estate support including property management, client relations, market research, lead generation, administrative tasks, and transaction support. Our team handles everything from initial client contact to closing deals.',
    keywords: ['real estate', 'property', 'realty', 'estate', 'property management', 'client relations'],
    category: 'service',
    interestTags: ['realEstate'],
    relatedServices: ['property-management', 'customer-service', 'administrative-assistant']
  },
  
  {
    id: 'construction-services',
    title: 'Construction Outsourcing',
    content: 'Full-service construction support including project management, site supervision, quality control, safety compliance, administrative tasks, and vendor management. We help construction companies streamline operations and reduce costs.',
    keywords: ['construction', 'building', 'project management', 'site supervision', 'quality control'],
    category: 'service',
    interestTags: ['construction'],
    relatedServices: ['engineering-support', 'project-management', 'administrative-assistant']
  },
  
  {
    id: 'legal-services',
    title: 'Legal Outsourcing',
    content: 'Professional legal support services including document preparation, legal research, case management, administrative assistance, and compliance support. Our legal teams are trained in various practice areas.',
    keywords: ['legal', 'law', 'legal support', 'document preparation', 'case management'],
    category: 'service',
  },
  
  {
    id: 'finance-services',
    title: 'Finance & Accounting Outsourcing',
    content: 'Comprehensive financial services including bookkeeping, payroll processing, financial reporting, tax preparation, and accounting support. We help businesses maintain accurate financial records.',
    keywords: ['finance', 'accounting', 'bookkeeping', 'payroll', 'financial reporting', 'tax'],
    category: 'service',
  },
  
  {
    id: 'marketing-services',
    title: 'Marketing Team Outsourcing',
    content: 'Full-service marketing support including digital marketing, content creation, social media management, SEO optimization, and campaign management. Our marketing teams help businesses grow their online presence.',
    keywords: ['marketing', 'digital marketing', 'social media', 'seo', 'content creation', 'campaigns'],
    category: 'service',
  },
  
  {
    id: 'graphic-design-services',
    title: 'Graphic Design Outsourcing',
    content: 'Professional graphic design services including logo design, marketing materials, website graphics, social media assets, and brand identity development. Our designers create visually appealing content that represents your brand.',
    keywords: ['graphic design', 'logo design', 'marketing materials', 'brand identity', 'visual content'],
    category: 'service',
  },
  
  // Team Information
  {
    id: 'stephen-atcheler',
    title: 'Stephen Atcheler - CEO',
    content: 'Stephen Atcheler is the CEO of ShoreAgents, leading the company with over 15 years of experience in business operations and outsourcing solutions. He has successfully built and scaled multiple businesses.',
    keywords: ['stephen atcheler', 'ceo', 'leadership', 'founder', 'executive'],
    category: 'team',
  },
  
  {
    id: 'charm-salas',
    title: 'Charm Salas - Chief Operating Officer',
    content: 'Charm Salas serves as our Chief Operating Officer, overseeing day-to-day operations and ensuring service quality. She has extensive experience in operations management and team leadership.',
    keywords: ['charm salas', 'coo', 'operations', 'chief operating officer'],
    category: 'team',
  },
  
  {
    id: 'kath-macenas',
    title: 'Kath Macenas - Head of Success',
    content: 'Kath Macenas leads our success team, ensuring client satisfaction and project success. She works closely with clients to understand their needs and deliver exceptional results.',
    keywords: ['kath macenas', 'head of success', 'client success', 'project management'],
    category: 'team',
  },
  
  // Pricing Information
  {
    id: 'pricing-overview',
    title: 'Pricing & Packages',
    content: 'We offer flexible pricing models including hourly rates, monthly packages, and custom solutions. Our pricing is competitive and transparent, with no hidden fees. Contact us for a personalized quote.',
    keywords: ['pricing', 'cost', 'rates', 'packages', 'prices', 'how much'],
    category: 'pricing',
  },
  
  // Process Information
  {
    id: 'how-it-works',
    title: 'How It Works',
    content: 'Our process is simple: 1) Initial consultation to understand your needs, 2) Team selection and onboarding, 3) Service delivery with regular updates, 4) Continuous improvement and optimization.',
    keywords: ['how it works', 'process', 'workflow', 'steps', 'procedure'],
    category: 'process',
  },
  
  {
    id: 'getting-started',
    title: 'Getting Started',
    content: 'Getting started with ShoreAgents is easy. Simply contact us for a consultation, discuss your needs, and we\'ll create a customized solution. Our team will handle the rest while you focus on your core business.',
    keywords: ['getting started', 'start', 'begin', 'consultation', 'onboarding'],
    category: 'process',
  },

  // Talent Pool and Team Information
  {
    id: 'talent-pool',
    title: 'Our Talent Pool',
    content: 'ShoreAgents has a diverse and skilled talent pool of professionals across various industries. Our team includes experts in real estate, construction, engineering, marketing, finance, and more. All team members are carefully vetted and trained to meet our high standards.',
    keywords: ['talent pool', 'team', 'staff', 'employees', 'professionals', 'where is the talent pool', 'talent', 'workforce'],
    category: 'team',
  },

  {
    id: 'team-location',
    title: 'Team Location & Office',
    content: 'Our team is primarily located in the Philippines, providing cost-effective solutions while maintaining high-quality standards. We have a main office and multiple satellite locations to ensure comprehensive coverage and support.',
    keywords: ['team location', 'office location', 'where are you located', 'philippines', 'office', 'location'],
    category: 'team',
  },

  {
    id: 'hire-team',
    title: 'Hire a Team',
    content: 'We offer comprehensive team building services where we can assemble a complete team for your business needs. Whether you need a small specialized team or a large department, we can provide the right professionals.',
    keywords: ['hire team', 'build team', 'team building', 'complete team', 'department', 'hire a team'],
    category: 'service',
  },

  {
    id: 'hire-one-agent',
    title: 'Hire One Agent',
    content: 'Need just one dedicated professional? We can provide individual agents for specific roles like virtual assistants, customer service representatives, or specialized professionals.',
    keywords: ['hire one agent', 'single agent', 'one person', 'individual', 'dedicated agent'],
    category: 'service',
  },

  {
    id: 'case-studies',
    title: 'Success Stories & Case Studies',
    content: 'Explore our success stories and case studies to see how we\'ve helped businesses achieve their goals. From real estate companies to construction firms, our clients have seen significant improvements in efficiency and cost savings.',
    keywords: ['case studies', 'success stories', 'examples', 'results', 'clients', 'stories'],
    category: 'company',
  },

  {
    id: 'testimonials',
    title: 'Client Testimonials',
    content: 'Read what our clients have to say about working with ShoreAgents. Our testimonials showcase the quality of our services and the positive impact we\'ve had on businesses worldwide.',
    keywords: ['testimonials', 'reviews', 'feedback', 'client feedback', 'what clients say'],
    category: 'company',
  },

  {
    id: 'contact-us',
    title: 'Contact Us',
    content: 'Ready to get started? Contact our team to discuss your outsourcing needs. We offer free consultations and can provide customized solutions for your business.',
    keywords: ['contact', 'contact us', 'get in touch', 'reach out', 'consultation', 'talk to us'],
    category: 'company',
  },

  // Additional specific entries for common questions
  {
    id: 'virtual-assistant',
    title: 'Virtual Assistant Services',
    content: 'Our virtual assistants can handle administrative tasks, customer service, data entry, scheduling, and more. They work as an extension of your team, providing cost-effective support.',
    keywords: ['virtual assistant', 'va', 'admin assistant', 'administrative', 'customer service assistant'],
    category: 'service',
  },

  {
    id: 'real-estate-va',
    title: 'Real Estate Virtual Assistant',
    content: 'Specialized virtual assistants for real estate professionals. They can handle lead generation, client communication, property research, transaction coordination, and administrative tasks.',
    keywords: ['real estate virtual assistant', 'real estate va', 'property va', 'realty assistant'],
    category: 'service',
  },

  {
    id: 'property-management-va',
    title: 'Property Management Assistant',
    content: 'Dedicated assistants for property management companies. They handle tenant communication, maintenance coordination, rent collection, property inspections, and administrative tasks.',
    keywords: ['property management assistant', 'property management va', 'property management support'],
    category: 'service',
  },

  {
    id: 'customer-service',
    title: 'Customer Service Assistant',
    content: 'Professional customer service representatives who can handle inquiries, complaints, support tickets, and provide excellent customer experience for your business.',
    keywords: ['customer service', 'customer support', 'client service', 'support assistant'],
    category: 'service',
  },

  {
    id: 'engineering-support',
    title: 'Engineering Support',
    content: 'Technical engineering support for various industries including CAD design, technical documentation, project management, and engineering administrative tasks.',
    keywords: ['engineering support', 'engineering assistant', 'technical support', 'cad design'],
    category: 'service',
  },

  {
    id: 'marketing-team',
    title: 'Marketing Team',
    content: 'Complete marketing teams including digital marketing specialists, content creators, social media managers, SEO experts, and graphic designers.',
    keywords: ['marketing team', 'digital marketing', 'marketing support', 'marketing services'],
    category: 'service',
  },

  {
    id: 'finance-accounting',
    title: 'Finance & Accounting Team',
    content: 'Professional finance and accounting teams for bookkeeping, payroll, financial reporting, tax preparation, and accounting support services.',
    keywords: ['finance', 'accounting', 'bookkeeping', 'payroll', 'financial reporting'],
    category: 'service',
  },

  // ========================================
  // 🎯 CUSTOM KNOWLEDGE - How to Handle Questions
  // ========================================
  // Add your own knowledge here about how Maya should handle specific questions
  
  {
    id: 'objection-too-expensive',
    title: 'Handling "Too Expensive" Objection',
    content: 'When prospects say we\'re too expensive, emphasize the value and ROI. Our offshore team costs 60-70% less than US hires while maintaining high quality. Break down the total cost of a US employee (salary + benefits + office space + equipment) vs our all-inclusive pricing. Highlight that clients typically see ROI within 3-6 months. Offer to create a detailed cost comparison showing their specific savings. Ask: "What budget range were you expecting?" to understand their constraints.',
    keywords: ['expensive', 'cost', 'price', 'too much', 'budget', 'afford', 'roi', 'savings'],
    category: 'process'
  },

  {
    id: 'objection-quality-concerns',
    title: 'Handling Quality Concerns',
    content: 'When prospects worry about quality of offshore staff, emphasize our rigorous screening process. We only hire the top 5% of applicants with proven track records. All team members are college-educated, English-proficient, and undergo skills testing. We provide 30-day trial periods with full refund guarantee. Share success stories and testimonials from similar companies. Offer to show candidate portfolios and arrange intro calls with potential team members. Our retention rate is 95%+ which speaks to quality and satisfaction.',
    keywords: ['quality', 'qualified', 'skills', 'experience', 'good enough', 'capable', 'competent'],
    category: 'process'
  },

  {
    id: 'objection-time-difference',
    title: 'Handling Time Zone Concerns',
    content: 'When prospects worry about time zones (Philippines is 12-16 hours ahead of US), position it as an advantage. Your team works while you sleep, providing 24/7 business coverage. Many clients love coming into the office with tasks completed overnight. We offer flexible scheduling - staff can work US hours if needed. Our communication tools (Slack, Zoom, email) make real-time collaboration seamless. Most clients find async work actually increases productivity. For urgent matters, there\'s always overlap hours or we can adjust schedules.',
    keywords: ['time zone', 'hours', 'availability', 'schedule', 'different time', 'timezone', 'communication'],
    category: 'process'
  },

  {
    id: 'decision-process-timeline',
    title: 'Understanding Decision Timeline',
    content: 'When prospects are interested but not ready to commit, understand their decision process. Ask: "What does your typical decision-making process look like?" and "Who else needs to be involved?" Typical timeline: Initial interest → Review proposal (1-3 days) → Stakeholder buy-in (3-7 days) → Contract signing (1-2 days) → Team member selection (3-5 days) → Onboarding (5-10 days). Total: 2-4 weeks from interest to productive team member. Offer to create a custom implementation timeline. Stay in touch with value-adding content during their decision period.',
    keywords: ['timeline', 'how long', 'when', 'start date', 'decision', 'process', 'next steps'],
    category: 'process'
  },

  {
    id: 'handling-competitor-comparison',
    title: 'Handling Competitor Comparisons',
    content: 'When prospects mention other outsourcing companies, never badmouth competitors. Instead, focus on our unique value: 1) We\'re not just a staffing agency - we provide fully managed teams with ongoing support. 2) Our cultural fit process ensures team members align with your company values. 3) We have direct relationships with candidates (not middlemen). 4) 95%+ retention rate vs industry average of 70%. 5) We handle all HR, payroll, legal, and benefits. Ask: "What\'s most important to you in an outsourcing partner?" Then emphasize how we excel in those areas. Offer side-by-side comparison showing total value, not just hourly rates.',
    keywords: ['competitor', 'vs', 'versus', 'compare', 'comparison', 'other company', 'alternative', 'difference'],
    category: 'process'
  },

  {
    id: 'handling-urgency',
    title: 'Creating Urgency Without Pressure',
    content: 'When prospects are interested but stalling, create natural urgency. Our top candidates get hired quickly - waiting means missing out on great talent. We only take on X new clients per month to maintain quality. Current onboarding slots fill up 2-3 weeks in advance. For specific roles (like developers), demand is high and availability limited. Frame it as: "I want to make sure we can get you the best possible team members. Our top candidates typically get placed within a week. When would you ideally want your team member to start?" Don\'t pressure - just be honest about timelines and availability. Offer to "hold" a candidate for 48-72 hours while they decide.',
    keywords: ['urgency', 'hurry', 'rush', 'fast', 'quickly', 'asap', 'how soon', 'when can we start'],
    category: 'process'
  },

  // ========================================
  // 📋 CUSTOMER FAQs - From Real Questions
  // ========================================
  
  {
    id: 'faq-english-proficiency',
    title: 'FAQ: Do Staff Speak English?',
    content: 'Yes, all our staff speak English fluently. The Philippines has English as a primary language due to American-influenced education and Western-aligned culture. Staff are college-educated with strong English skills from both academic training and the BPO industry\'s focus on U.S. clients. English proficiency varies from good to excellent - for roles with direct client communication (phone/video), we select staff with neutral, Westernized accents to ensure seamless integration. Historical context: The Philippines was under American colonization, cementing English as a mainstay language, especially in business. Our promotional videos showcase our team\'s clear communication. For customer-facing roles, accent and communication style are carefully matched to client needs.',
    keywords: ['english', 'speak', 'language', 'communication', 'accent', 'fluent', 'proficiency'],
    category: 'team'
  },

  {
    id: 'faq-written-communication',
    title: 'FAQ: Written Communication Quality',
    content: 'Our staff have strong written English skills, particularly in American English due to U.S.-influenced education. Written English is competent and professional, especially when using templates (common in real estate and structured industries). Staff easily adapt to American, British, or Australian English with autocorrect settings. Important notes: 1) Occasional cultural quirks like extra plurals or exclamation marks - we train staff on formal communication standards. 2) For sensitive contexts (medical, legal), provide clear phrasing guidelines to avoid misunderstandings. 3) Templates and style guides greatly enhance consistency. Staff are educated early in English and excel when following predefined formats. Overall: Strong written capabilities that improve significantly with clear guidelines and templates.',
    keywords: ['writing', 'written', 'email', 'grammar', 'spelling', 'communication', 'text'],
    category: 'team'
  },

  {
    id: 'faq-communication-tools',
    title: 'FAQ: How to Communicate with Staff',
    content: 'Communicate with offshore staff using professional tools like Slack (recommended), Microsoft Teams, Google Meet, or Zoom for day-to-day messaging and video calls. Traditional VoIP phone calls also available. Key practices: 1) Treat remote staff as integral team members - greet them daily. 2) Include in virtual team meetings (weekly/monthly). 3) Daily check-ins via Slack or Zoom. 4) Use same tools you use internally - extend to offshore team. 5) Maintain respectful, positive relationships to promote engagement and reduce turnover. 6) Avoid using them as frustration outlets - treat with same respect as onshore team. Regular inclusion in team rhythms optimizes cohesion and productivity. Available 24/7 for urgent matters.',
    keywords: ['communicate', 'contact', 'talk', 'reach', 'slack', 'zoom', 'teams', 'meetings'],
    category: 'process'
  },

  {
    id: 'faq-dedicated-staff',
    title: 'FAQ: Dedicated vs Shared Staff',
    content: 'Staff are 100% dedicated to a single client - never shared between multiple clients. They work full-time from our office using company-owned equipment under supervision. Benefits: 1) Full focus on your tasks only. 2) No freelancing or multiple jobs. 3) Protects confidential data - staff won\'t work for competitors. 4) Consistent availability during your business hours. 5) Easy monitoring by on-site management. 6) No conflicts of interest. Office-based work (not remote) ensures oversight and prevents data security risks. This exclusive dedication is contractual and monitored by our management team who can quickly address any availability issues.',
    keywords: ['dedicated', 'exclusive', 'shared', 'full time', 'focus', 'freelance', 'multiple clients'],
    category: 'service'
  },

  {
    id: 'faq-timezone-scheduling',
    title: 'FAQ: Working Hours and Timezones',
    content: 'We operate 24/7 to accommodate any timezone globally. For US clients: Staff work night shifts in Philippines (8am-5pm your time). For Australia/New Zealand: Staff work early morning to afternoon (close timezone alignment). For Europe/UK: Mid-shift scheduling to match your business hours. Philippines is ideal for global outsourcing due to BPO industry experience with timezone flexibility. Staff are accustomed to adjusting schedules to match client needs exactly. Whether you need 9-5 EST, PST, AEST, or GMT - we align perfectly. This ensures your offshore team functions as an integrated part of your operations, providing support exactly when you need it.',
    keywords: ['timezone', 'time zone', 'hours', 'schedule', 'availability', 'when', 'shift'],
    category: 'process'
  },

  {
    id: 'faq-office-location',
    title: 'FAQ: Where Staff Work From',
    content: 'All staff work from our office at Philexcel Business Center in Clark, Pampanga, Philippines - approximately 70km north of Manila. Office features: 1) Biometric security systems for check-in/check-out. 2) Secure, monitored environment. 3) Company-owned equipment. 4) Professional workspace. 5) On-site management and support. For client visits: Clark airport is only 15 minutes from our office (convenient access despite 5-hour drive from Manila due to traffic). Centralized office setup enhances security, operational efficiency, and easier management/supervision. No remote work to ensure data security and productivity.',
    keywords: ['location', 'office', 'where', 'philippines', 'clark', 'visit', 'address'],
    category: 'company'
  },

  {
    id: 'faq-data-security',
    title: 'FAQ: Data Security Policy',
    content: 'Comprehensive data security: 1) No USB drives allowed in office. 2) Restricted phone usage. 3) All data saved to admin-locked computers on secure network. 4) ISO-accredited IT team. 5) Biometric access control. Client best practices we recommend: 1) Set up company email addresses for staff (not personal emails). 2) Use password managers (never send passwords via chat). 3) Implement ability to lock out staff from systems if needed. 4) Delete temporary password shares immediately. 5) Integrate remote workers into your existing security policies. Two-layer protection: Our security measures + your company policies = comprehensive data safety. Suitable for handling sensitive client information.',
    keywords: ['security', 'data', 'safe', 'protect', 'confidential', 'privacy', 'secure'],
    category: 'company'
  },

  {
    id: 'faq-staff-replacement',
    title: 'FAQ: What If Staff Member Doesn\'t Work Out',
    content: '90-day replacement guarantee with proactive support. Process: 1) Rigorous hiring with skills testing (high success rate). 2) Frequent check-ins during first 90 days. 3) If performance issues arise, we notify you first with feedback. 4) Coaching and support to maximize success. 5) If still not working, FREE replacement (no additional charge). Philosophy: "Hire slow, fire fast" - thorough vetting upfront. Before replacement, we assess: Is training adequate? Are processes clear? Are expectations realistic? We provide support to ensure success. If truly not a fit within 90 days, we handle termination and re-recruitment at no cost. This minimizes your risk and ensures you get the right team member.',
    keywords: ['replace', 'not working', 'fire', 'terminate', 'guarantee', 'refund', 'change'],
    category: 'process'
  },

  {
    id: 'faq-payment-timing',
    title: 'FAQ: When Do I Pay?',
    content: 'Pay on success only - zero risk for clients. Payment structure: 1) "Window shopping" phase is FREE - review candidates at no cost. 2) No payment if you don\'t find suitable candidate. 3) Payment due only when you accept a candidate and they sign job offer. 4) Invoice includes: setup fee, recruitment fee, and first month service. 5) Billing starts from staff member\'s start date. You only pay when completely satisfied with hiring decision. No upfront costs, no penalty for not finding the right fit. This structure minimizes financial risk and builds trust in our recruitment process.',
    keywords: ['pay', 'payment', 'when', 'invoice', 'bill', 'cost', 'charge'],
    category: 'pricing'
  },

  {
    id: 'faq-payment-methods',
    title: 'FAQ: Payment Methods Available',
    content: 'Multiple payment options for global clients: 1) International Bank Transfer - any currency, converted to Philippine pesos. 2) Wise (TransferWise) - RECOMMENDED - pay in local currency (USD, AUD, NZD, etc.) into our local accounts. We absorb currency fluctuation risk. 2% convenience fee. 3) PayPal - easy, uses credit cards, higher fees (passed to client) but very convenient. We accept payments in multiple currencies to accommodate global clients. Wise is most popular for easy local currency payments without complex international transfers.',
    keywords: ['payment', 'pay', 'how', 'method', 'wire', 'transfer', 'paypal', 'wise'],
    category: 'pricing'
  },

  {
    id: 'faq-contract-period',
    title: 'FAQ: Contract Period and Terms',
    content: 'Service agreement with flexible terms: 1) 60-day notice required for termination (not long-term lock-in). 2) Security deposit required at signing. 3) Deposit forfeited if terminating without 60-day notice. 4) Notice period allows proper transition per Philippines Labor Code. Purpose: Provides clarity and security for both parties while ensuring compliance with local labor laws. Not a restrictive long-term contract - just structured notice for orderly transitions whether onboarding or offboarding.',
    keywords: ['contract', 'term', 'period', 'agreement', 'commitment', 'cancel', 'terminate'],
    category: 'process'
  },

  {
    id: 'faq-cost-savings',
    title: 'FAQ: How Much Money Can I Save?',
    content: 'Substantial savings with tiered discounts: Role-based savings: Admin/Finance roles: 70% savings (cost drops to 25-30% of local). Specialized roles (web dev, design): 80-85% savings (hire 3-4 for price of one local). Tiered discount structure by team size: Standard (1 agent): Base rate. Bronze (2-5): 9% discount. Silver (6-15): 20% discount. Gold (16-25): 25% discount. Platinum (26+): 31% discount. Example: Hire 10 agents, get 20% off all monthly fees. Larger commitments = bigger savings. This allows businesses to scale operations while controlling overhead costs significantly.',
    keywords: ['save', 'savings', 'cost', 'cheap', 'discount', 'price', 'how much', 'roi'],
    category: 'pricing'
  },

  {
    id: 'faq-why-philippines',
    title: 'FAQ: Why Outsource to Philippines?',
    content: 'Philippines offers unique advantages: 1) Cost-effectiveness: Lower living expenses allow sustainable wages that are 60-80% below Western rates without compromising quality. 2) English proficiency: Primary language, Western-aligned education. 3) Cultural compatibility: Familiar with Western business practices and norms. 4) Strong work ethic: Asian work culture meets Western business understanding. 5) Loyalty: Filipino workers demonstrate exceptional commitment and reliability. 6) Educated workforce: College-educated professionals. 7) BPO industry expertise: Established outsourcing infrastructure. Example: Hire architect in Philippines for fraction of US cost without sacrificing quality. Clear instructions maximize efficiency - Filipino staff often more dependable than local hires.',
    keywords: ['why', 'philippines', 'filipino', 'offshore', 'outsource', 'advantage', 'benefit'],
    category: 'company'
  },

  {
    id: 'faq-freelancer-vs-bpo',
    title: 'FAQ: Freelancer vs BPO Comparison',
    content: 'BPO advantages over freelancers: Freelancer issues: 1) Work from home (unreliable environment). 2) Multiple clients (divided attention). 3) Own equipment (inconsistent setup). 4) No supervision (productivity concerns). 5) Wage inflation (as reputation grows on Upwork/Fiverr). 6) Disappear after payment. 7) Unverified credentials. BPO benefits: 1) Office environment (professional, monitored). 2) Single client dedication (full focus). 3) Company equipment (standardized, secure). 4) Supervised (management oversight). 5) Stable costs (local market rates). 6) Verified credentials. 7) Better data security. 8) Integrated into teams. 9) Long-term reliability. BPO provides predictable, secure, professionally managed solution for businesses seeking dependable outsourcing.',
    keywords: ['freelancer', 'upwork', 'fiverr', 'vs', 'versus', 'compare', 'difference', 'better'],
    category: 'process'
  },

  {
    id: 'faq-getting-started',
    title: 'FAQ: How to Get Started',
    content: 'Simple 4-step process: 1) Send inquiry - Click "send inquiry" button on our website for initial contact. 2) Book meeting (optional but recommended) - Discuss roles and needs with success team via sales page. 3) Send details - Provide company details and job description when ready. 4) Sign service agreement - We send agreement, you sign, recruitment begins. Alternative: Jump straight to service agreement if you have all details ready. Detailed meeting helps ensure alignment on requirements and expectations. Process is flexible - engage at your own pace, from general inquiry to immediate partnership.',
    keywords: ['start', 'begin', 'get started', 'how', 'process', 'first step', 'sign up'],
    category: 'process'
  },

  {
    id: 'faq-outsourceable-roles',
    title: 'FAQ: What Roles Can Be Outsourced',
    content: 'Any task performable remotely is outsourceable: Ideal roles: 1) Repetitive, process-driven tasks. 2) Time-consuming administrative work. 3) Back-office operations. 4) Tasks not easily automated. Specific examples: Real Estate: Admin, operations, transaction coordination. Construction/Development: Drafters, architects, engineers, CAD work. General: Finance, bookkeeping, customer service, data entry, social media, content creation. NOT recommended for outsourcing: Core leadership roles, strategic decision-making, executive functions. Best approach: Identify tedious, repetitive computer-based tasks your onshore team finds burdensome. Outsource operational work, keep strategic work in-house. Enhances onshore staff satisfaction while optimizing workforce efficiency.',
    keywords: ['roles', 'positions', 'jobs', 'tasks', 'what', 'can', 'outsource', 'hire'],
    category: 'service'
  },

  {
    id: 'faq-virtual-staff-tasks',
    title: 'FAQ: Tasks Virtual Staff Can Complete',
    content: 'Virtual staff handle diverse business functions: Administrative: Scheduling, correspondence, file management, clerical tasks. Operational: Day-to-day business processes, operational support. Finance: Bookkeeping, invoicing, payroll, financial tasks requiring confidentiality. Marketing: Social media management, content creation, campaign support, standardized marketing tasks. Important: While staff can perform skill-based tasks, YOU provide business-specific training. We provide skilled professionals, you train them on your specific processes and context. Maintain basic understanding of outsourced tasks for quality control. Virtual staff significantly lighten day-to-day management load with proper guidance and oversight from you.',
    keywords: ['tasks', 'what can', 'do', 'responsibilities', 'duties', 'work', 'handle'],
    category: 'service'
  },

  {
    id: 'faq-interview-process',
    title: 'FAQ: Client Interview Involvement',
    content: 'You actively participate in hiring process: 1) Provide job description - Defines role for candidate search. 2) We conduct initial screening - Standard interviews with in-depth questions. 3) Access to video interviews - Review candidates before formal interview. 4) Final interview - You interview shortlisted candidates. 5) Final decision - YOU choose who to hire (we don\'t make this decision for you). Philosophy: Client involvement essential for cultural fit and avoiding mismatches. You know exactly who you\'re hiring - no surprises. We facilitate process but hiring decision is 100% yours. This minimizes risk and ensures new hire aligns with your team and culture perfectly.',
    keywords: ['interview', 'meet', 'candidate', 'hire', 'selection', 'choose', 'process'],
    category: 'process'
  },

  {
    id: 'faq-training-responsibility',
    title: 'FAQ: Who Trains Staff Member',
    content: 'YOU train the staff member - this is crucial for success. ShoreAgents provides: Equipment, workspace, HR management, payroll, office infrastructure. YOU provide: Business-specific training, process documentation, task guidance. Why you must train: 1) You understand your business operations intimately. 2) Training ensures relevance to your specific needs. 3) Best results come from internal training. 4) Third-party training rarely delivers effective results. We handle everything except training so you can focus on integrating new team member into your business practices. This approach ensures training is tailored and effective for your organizational goals.',
    keywords: ['training', 'train', 'onboard', 'teach', 'learn', 'who trains'],
    category: 'process'
  },

  {
    id: 'faq-performance-tracking',
    title: 'FAQ: Performance Tracking System',
    content: 'Three-tiered performance tracking system: Daily/Weekly monitoring: Daily casual check-ins, formal weekly reviews. Three evaluation layers: 1) You to ShoreAgents - How well staff meets your expectations. 2) ShoreAgents to staff - Accountability and performance feedback. 3) Staff to you - Voice concerns about tasks/training. Benefits: Ensures alignment, addresses issues early, tracks productivity. Legal compliance: Required for Philippines Labor Code - formal evaluations needed after 6 months for lawful performance-based termination. This system balances productivity tracking with legal protection for all parties. Mutual evaluations create robust framework for managing outsourced staff effectively.',
    keywords: ['performance', 'tracking', 'monitoring', 'evaluate', 'review', 'measure', 'productivity'],
    category: 'process'
  },

  {
    id: 'faq-retention-rates',
    title: 'FAQ: Staff Retention Rates',
    content: 'Less than 5% annual churn rate (95%+ retention). How we achieve this: 1) Fulfilling work environment - Regular engagement activities (bingo, games, themed events). 2) Competitive compensation - Advise clients to stay competitive with market rates. 3) Staff happiness tracking - Performance reviews identify satisfaction shifts. 4) Proactive issue resolution - Address dissatisfaction early. 5) Client engagement - Encourage thoughtful interaction with staff. 6) Cultural events - Holiday celebrations (Easter, Christmas) with activities and treats. Location advantage: Pampanga\'s family-oriented workforce provides stability - supporting family motivates steady employment. Some staff have been with us for years, becoming integral team members.',
    keywords: ['retention', 'turnover', 'stay', 'quit', 'leave', 'churn', 'longevity'],
    category: 'company'
  },

  {
    id: 'faq-staff-tenure',
    title: 'FAQ: Average Staff Tenure',
    content: 'Average 2+ years for administrative roles (considered successful). Context: Many outsourced roles (admin, operations) are stepping stones, not lifelong careers. Two years is positive outcome for these position types. Location advantage: Pampanga\'s family-oriented culture promotes stability - family support motivation keeps staff employed longer. Some staff become long-term team members (years of service). Industry reality: Admin roles typically see 1-2 year tenure industry-wide. Our retention exceeds industry average due to positive work environment, competitive pay, and engaged management. Success defined by staff staying beyond 2 years in typically high-turnover administrative positions.',
    keywords: ['how long', 'tenure', 'stay', 'average', 'duration', 'years'],
    category: 'company'
  },

  {
    id: 'faq-labor-code-compliance',
    title: 'FAQ: Labor Code Compliance',
    content: 'Strict adherence to Philippines Labor Code (mandatory). Labor laws heavily protect workers\' rights in all aspects: hiring, performance reviews, termination. Key compliance areas: 1) Performance documentation. 2) Lawful termination procedures. 3) Employee protections after 6 months. 4) Mandatory in service agreement with clients. Client responsibility: YOU must also comply with local labor codes. Non-compliance penalties are client\'s financial responsibility. We ensure: All practices meet legal standards, proper documentation, protection for both employer and employee. This compliance is crucial for operational integrity and legal protection of ShoreAgents and clients.',
    keywords: ['legal', 'labor', 'law', 'compliance', 'code', 'regulations', 'rules'],
    category: 'company'
  },

  {
    id: 'faq-support-services',
    title: 'FAQ: ShoreAgents Support Services',
    content: 'Comprehensive support infrastructure: 1) Dedicated Recruitment Team - Sourcing and hiring. 2) Success Team (Account Managers) - Primary contact, 24/7 availability, day-to-day operations support. 3) Event Coordination - Facilitate bonuses, celebrations, team events for your staff. 4) Medical Support - On-site doctor and nurse for health/wellbeing. 5) IT Team - Technical support, software, hardware, troubleshooting. 6) Finance Team - Payroll, bonuses, compensation management. 7) HR Management - All employment administration. Benefits: We handle logistical and administrative burdens so you focus on business. Staff feel valued and supported, improving satisfaction and retention. Full-service approach ensures smooth outsourcing experience.',
    keywords: ['support', 'help', 'service', 'assistance', 'team', 'account manager'],
    category: 'service'
  },

  {
    id: 'faq-testimonials-case-studies',
    title: 'FAQ: Client Testimonials and Success Stories',
    content: 'Extensive client success across industries and countries: Real Estate: Levi Turner (AU) - 25% increase in appraisal listings and sales. Jason Gard (AU) - Streamlined back office, significantly reduced workload. Pernell Callaghan (NZ) - Crucial for company growth. Steve Lovegrove (NZ) - Changed business dynamic, increased competitiveness. Tech/Startups: Jonathan Curreri (USA) - Performance exceeded expectations, expanding team. Tash Poole (AU) - Comprehensive process from recruitment to HR. Corporate: Cindy Armour-Helm (USA) - Tried multiple companies, ShoreAgents significantly superior. Michael Garside (AU) - 5 years of positive results. Consistent themes: High-quality candidates, excellent support, seamless hiring, professional process, business growth, operational efficiency. Clients from USA, Australia, New Zealand across real estate, tech, services.',
    keywords: ['testimonial', 'review', 'case study', 'success', 'client', 'results', 'proof'],
    category: 'company'
  }
];

// Traditional keyword-based search (fallback)
export function searchKnowledge(query: string): KnowledgeItem[] {
  const searchTerm = query.toLowerCase();
  
  return knowledgeBase
    .map(item => {
      const titleMatch = item.title.toLowerCase().includes(searchTerm) ? 3 : 0;
      const contentMatch = item.content.toLowerCase().includes(searchTerm) ? 2 : 0;
      const keywordMatch = item.keywords.some(keyword => 
        keyword.toLowerCase().includes(searchTerm)
      ) ? 1 : 0;
      
      const score = titleMatch + contentMatch + keywordMatch;
      
      return { item, score };
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(result => result.item)
    .slice(0, 3); // Return top 3 matches
}

// Vector-based semantic search (uses embeddings)
export async function searchKnowledgeWithVector(
  query: string,
  options?: { matchThreshold?: number; matchCount?: number }
): Promise<VectorSearchResult[]> {
  try {
    // Dynamic import to avoid server-side issues
    const { searchKnowledgeWithEmbeddings } = await import('@/lib/embedding-service');
    
    const results = await searchKnowledgeWithEmbeddings(query, options);
    return results;
  } catch (error) {
    console.error('Vector search failed, falling back to keyword search:', error);
    // Fallback to keyword search
    const keywordResults = searchKnowledge(query);
    return keywordResults.map(item => ({
      id: item.id,
      content: item.content,
      title: item.title,
      url: item.url || '',
      similarity: 0.5 // Placeholder similarity
    }));
  }
}

// Hybrid search: Combines vector + keyword search
export async function searchKnowledgeHybrid(
  query: string,
  options?: { matchThreshold?: number; matchCount?: number }
): Promise<VectorSearchResult[]> {
  try {
    // Dynamic import
    const { hybridSearchKnowledge } = await import('@/lib/embedding-service');
    
    const results = await hybridSearchKnowledge(query, options);
    return results;
  } catch (error) {
    console.error('Hybrid search failed, falling back to vector search:', error);
    return searchKnowledgeWithVector(query, options);
  }
}
