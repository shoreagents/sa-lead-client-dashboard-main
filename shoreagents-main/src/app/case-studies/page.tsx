'use client';

import { useState, useMemo } from 'react';
import { SideNav } from "@/components/layout/SideNav";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, Building, Users, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  thumbnail: string;
  industry: string;
  results: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Business Referral Partnerships',
    description: '300% growth in referral partnerships through consistent offshore service delivery. Building strategic networks that drive sustainable business growth.',
    url: '/case-studies/business-referral-partnerships',
    category: 'Partnership Success',
    thumbnail: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop',
    industry: 'Business Services',
    results: '300% Referral Growth'
  },
  {
    id: '2',
    title: 'Construction Cost Reduction',
    description: '72% reduction in drafting and estimating costs while tripling bid capacity. ShoreAgents offshore team delivers CAD excellence at unprecedented value.',
    url: '/case-studies/construction-cost-reduction',
    category: 'Cost Optimization',
    thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=250&fit=crop',
    industry: 'Construction',
    results: '72% Cost Savings'
  },
  {
    id: '3',
    title: 'Team Expansion Success',
    description: 'Scaling from 2 to 20 team members in 12 months without quality compromise. Rapid growth enabled by Philippine offshore talent.',
    url: '/case-studies/team-expansion-success',
    category: 'Scaling Success',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop',
    industry: 'Digital Marketing',
    results: '10x Team Growth'
  },
  {
    id: '4',
    title: 'BoxBrownie Client Success: 8x Customer Service Growth',
    description: 'Global PropTech leader serving 170,000+ customers across 117 countries scales from 2 to 16 customer service representatives. Systematic infrastructure supporting real estate photo editing empire.',
    url: '/case-studies/customer-service-scaling',
    category: 'Customer Support',
    thumbnail: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=250&fit=crop',
    industry: 'PropTech',
    results: '8x Team Growth'
  },
  {
    id: '5',
    title: 'Business Growth Through Offshore Staffing',
    description: 'Revenue doubling in 18 months by leveraging strategic offshore team placement. Cost efficiency enabling aggressive market expansion.',
    url: '/case-studies/business-growth-through-offshore-staffing',
    category: 'Growth Strategy',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    industry: 'Technology',
    results: '200% Revenue Growth'
  },
  {
    id: '6',
    title: 'Gradual Team Scaling Success',
    description: 'Methodical team growth from 3 to 15 members over 24 months. Sustainable expansion with zero turnover and exceptional performance.',
    url: '/case-studies/gradual-team-scaling-success',
    category: 'Scaling Success',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
    industry: 'Financial Services',
    results: '5x Team Scale'
  },
  {
    id: '7',
    title: 'Long-Term Partnership Success',
    description: '5+ years of partnership excellence with continuously expanding team. ShoreAgents as strategic growth partner, not just vendor.',
    url: '/case-studies/long-term-partnership-success',
    category: 'Partnership Success',
    thumbnail: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=250&fit=crop',
    industry: 'Real Estate',
    results: '5+ Year Partnership'
  },
  {
    id: '8',
    title: 'Exceptional Team Performance',
    description: 'Offshore team consistently outperforming local benchmarks. 98% quality scores and recognition as company MVPs.',
    url: '/case-studies/exceptional-team-performance',
    category: 'Performance Excellence',
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop',
    industry: 'Healthcare',
    results: '98% Quality Score'
  },
  {
    id: '9',
    title: 'Hiring Success After Failures',
    description: 'Overcoming three failed offshore hiring attempts. ShoreAgents structured approach delivers reliable, high-performing team.',
    url: '/case-studies/hiring-success-after-failures',
    category: 'Recruitment Success',
    thumbnail: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=250&fit=crop',
    industry: 'Professional Services',
    results: '100% Retention'
  },
  {
    id: '10',
    title: 'Reliable Recruitment Partner',
    description: 'ShoreAgents as trusted recruitment extension. 50+ successful placements with 95% first-year retention rate.',
    url: '/case-studies/reliable-recruitment-partner',
    category: 'Recruitment Success',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
    industry: 'Recruitment Agency',
    results: '50+ Placements'
  },
  {
    id: '11',
    title: 'Mortgage Industry Transformation',
    description: 'Revolutionizing mortgage processing with offshore team. 60% faster turnaround times and 70% cost reduction.',
    url: '/case-studies/mortgage-industry-transformation',
    category: 'Industry Transformation',
    thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop',
    industry: 'Mortgage',
    results: '60% Faster Processing'
  },
  {
    id: '12',
    title: 'Immediate Business Transformation',
    description: 'Dramatic operational improvement within first 90 days. ShoreAgents fast-track implementation delivers instant ROI.',
    url: '/case-studies/immediate-business-transformation',
    category: 'Quick Wins',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    industry: 'Consulting',
    results: '90-Day Transformation'
  },
  {
    id: '13',
    title: 'Offshore Staffing Success',
    description: 'Complete offshore staffing solution replacing expensive local team. 65% cost savings with improved service quality.',
    url: '/case-studies/offshore-staffing-success',
    category: 'Cost Optimization',
    thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop',
    industry: 'Legal Services',
    results: '65% Cost Reduction'
  },
  {
    id: '14',
    title: 'Smooth Recruitment Process',
    description: 'Effortless hiring experience from search to onboarding. ShoreAgents white-glove service eliminates recruitment headaches.',
    url: '/case-studies/smooth-recruitment-process',
    category: 'Recruitment Success',
    thumbnail: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&h=250&fit=crop',
    industry: 'Accounting',
    results: 'Seamless Onboarding'
  },
  {
    id: '15',
    title: 'Successful Trial Hiring',
    description: 'Risk-free trial period validates offshore model. 100% conversion to permanent roles after 3-month evaluation.',
    url: '/case-studies/successful-trial-hiring',
    category: 'Recruitment Success',
    thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop',
    industry: 'Insurance',
    results: '100% Trial Success'
  },
  {
    id: '16',
    title: 'Streamline Back Office',
    description: 'Back office transformation through strategic offshore placement. 80% efficiency gain in administrative operations.',
    url: '/case-studies/streamline-back-office',
    category: 'Operational Efficiency',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
    industry: 'Manufacturing',
    results: '80% Efficiency Gain'
  },
  {
    id: '17',
    title: 'Quick Staff Onboarding',
    description: 'New team members productive within 2 weeks. ShoreAgents comprehensive training and integration program.',
    url: '/case-studies/quick-staff-onboarding',
    category: 'Quick Wins',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
    industry: 'Retail',
    results: '2-Week Ramp-Up'
  },
  {
    id: '18',
    title: 'Appraisal Listings Volume Increase',
    description: 'Real estate appraisal firm doubles listing capacity through offshore administrative support. 120% volume increase in 6 months.',
    url: '/case-studies/appraisal-listings-volume-increase',
    category: 'Growth Strategy',
    thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop',
    industry: 'Real Estate',
    results: '120% Volume Growth'
  },
  {
    id: '19',
    title: 'Business Systems Implementation Success',
    description: 'Successful CRM and automation implementation led by offshore technical team. 90% reduction in manual processes.',
    url: '/case-studies/business-systems-implementation-success',
    category: 'Technology Implementation',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    industry: 'Technology',
    results: '90% Process Automation'
  },
  {
    id: '20',
    title: 'Easy Business Process Implementation',
    description: 'Streamlined process implementation with minimal disruption. ShoreAgents change management expertise ensures smooth transitions.',
    url: '/case-studies/easy-business-process-implementation',
    category: 'Operational Efficiency',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    industry: 'Logistics',
    results: 'Zero Downtime'
  },
  {
    id: '21',
    title: 'Marketing Automation Implementation',
    description: 'Marketing automation platform deployed and managed by offshore specialists. 300% increase in lead generation efficiency.',
    url: '/case-studies/marketing-automation-implementation',
    category: 'Technology Implementation',
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop',
    industry: 'Marketing',
    results: '300% Lead Efficiency'
  },
  {
    id: '22',
    title: 'Mobile Business Solutions',
    description: 'Mobile-first workflow implementation enabling 24/7 business operations. Offshore team manages round-the-clock mobile support.',
    url: '/case-studies/mobile-business-solutions',
    category: 'Technology Implementation',
    thumbnail: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=250&fit=crop',
    industry: 'Field Services',
    results: '24/7 Mobile Support'
  },
  {
    id: '23',
    title: 'Hands-Off Business Procedures',
    description: 'Complete business process outsourcing enabling owner to focus on strategy. Offshore team manages day-to-day operations autonomously.',
    url: '/case-studies/hands-off-business-procedures',
    category: 'Full Process Outsourcing',
    thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop',
    industry: 'Business Services',
    results: '100% Autonomous Ops'
  },
  {
    id: '24',
    title: 'Industry Expert Validation',
    description: 'Offshore team quality validated by industry experts. ShoreAgents delivers talent that meets or exceeds industry standards.',
    url: '/case-studies/industry-expert-validation',
    category: 'Performance Excellence',
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop',
    industry: 'Professional Services',
    results: 'Expert-Level Quality'
  }
];

export default function CaseStudiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(caseStudies.map(cs => cs.category)));
    return ['All', ...cats];
  }, []);

  // Filter case studies based on search and category
  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter(caseStudy => {
      const matchesSearch = 
        caseStudy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        caseStudy.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        caseStudy.industry.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || caseStudy.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-lime-600 text-white px-4 py-2 text-lg mb-4">
            Client Success Stories
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real businesses. Discover how ShoreAgents has helped companies across industries transform their operations through strategic offshore staffing.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="border-lime-200">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-lime-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 mb-1">200+</div>
              <p className="text-sm text-gray-600">Success Stories</p>
            </CardContent>
          </Card>
          <Card className="border-lime-200">
            <CardContent className="p-6 text-center">
              <Building className="w-8 h-8 text-lime-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 mb-1">15+</div>
              <p className="text-sm text-gray-600">Industries Served</p>
            </CardContent>
          </Card>
          <Card className="border-lime-200">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-lime-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 mb-1">1,000+</div>
              <p className="text-sm text-gray-600">Team Members Placed</p>
            </CardContent>
          </Card>
          <Card className="border-lime-200">
            <CardContent className="p-6 text-center">
              <Award className="w-8 h-8 text-lime-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900 mb-1">95%</div>
              <p className="text-sm text-gray-600">Client Satisfaction</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search case studies by title, description, or industry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6 text-lg border-gray-300 focus:border-lime-500 focus:ring-lime-500"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-lime-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-lime-50 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCaseStudies.map((caseStudy) => (
            <Link key={caseStudy.id} href={caseStudy.url} target="_blank" rel="noopener noreferrer">
              <Card className="border-lime-200 hover:shadow-xl transition-all duration-300 cursor-pointer h-full group">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={caseStudy.thumbnail}
                      alt={caseStudy.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-lime-600 text-white shadow-md">
                        {caseStudy.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs border-lime-600 text-lime-600">
                        {caseStudy.industry}
                      </Badge>
                      <Badge variant="outline" className="text-xs border-gray-300 text-gray-600">
                        {caseStudy.results}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-lime-600 transition-colors">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {caseStudy.description}
                    </p>
                    <div className="flex items-center text-lime-600 font-medium text-sm group-hover:translate-x-2 transition-transform">
                      Read Case Study →
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No case studies found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-6 py-3 bg-lime-600 text-white rounded-lg hover:bg-lime-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-lime-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of companies who have transformed their operations with ShoreAgents offshore teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-white text-lime-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
            </Link>
            <Link href="/pricing">
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-lime-600 transition-colors">
                View Pricing
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
