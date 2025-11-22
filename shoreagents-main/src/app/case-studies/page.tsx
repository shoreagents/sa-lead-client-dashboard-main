'use client';

import { useState, useMemo } from 'react';
import { SideNav } from "@/components/layout/SideNav";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowRight, Building2 } from 'lucide-react';
import Link from 'next/link';

interface CaseStudy {
  id: string;
  clientName: string;
  company: string;
  title: string;
  url: string;
  category: string;
  industry: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    clientName: 'Ray Wood',
    company: 'Bestagents',
    title: 'Business Referral Partnerships',
    url: '/business-referral-partnerships',
    category: 'Partnerships',
    industry: 'Real Estate'
  },
  {
    id: '2',
    clientName: 'Iain Neilson',
    company: 'Gallery Group',
    title: 'Construction Cost Reduction',
    url: '/construction-cost-reduction',
    category: 'Cost Savings',
    industry: 'Construction'
  },
  {
    id: '3',
    clientName: 'Kuahiwi Kahapea',
    company: 'Ballast',
    title: 'Team Expansion Success',
    url: '/team-expansion-success',
    category: 'Growth',
    industry: 'Real Estate'
  },
  {
    id: '4',
    clientName: 'Tash Poole',
    company: 'BoxBrownie',
    title: 'Customer Service Scaling',
    url: '/customer-service-scaling',
    category: 'Scaling',
    industry: 'Technology'
  },
  {
    id: '5',
    clientName: 'Pernell Callaghan',
    company: 'Arizto Real Estate',
    title: 'Business Growth Through Offshore Staffing',
    url: '/business-growth-through-offshore-staffing',
    category: 'Growth',
    industry: 'Real Estate'
  },
  {
    id: '6',
    clientName: 'Marinella Sortino',
    company: 'Barry Plant',
    title: 'Gradual Team Scaling Success',
    url: '/gradual-team-scaling-success',
    category: 'Scaling',
    industry: 'Real Estate'
  },
  {
    id: '7',
    clientName: 'Steve Lovegrove',
    company: 'Professionals McDowell',
    title: 'Long-term Partnership Success',
    url: '/long-term-partnership-success',
    category: 'Partnerships',
    industry: 'Real Estate'
  },
  {
    id: '8',
    clientName: 'Andrew Lochhead',
    company: 'Century 21',
    title: 'Exceptional Team Performance',
    url: '/exceptional-team-performance',
    category: 'Performance',
    industry: 'Real Estate'
  },
  {
    id: '9',
    clientName: 'Cindy Armour Helm',
    company: 'Better Homes and Gardens',
    title: 'Hiring Success After Failures',
    url: '/hiring-success-after-failures',
    category: 'Recruitment',
    industry: 'Real Estate'
  },
  {
    id: '10',
    clientName: 'Tracey Foy',
    company: 'Professionals Schultz',
    title: 'Reliable Recruitment Partner',
    url: '/reliable-recruitment-partner',
    category: 'Recruitment',
    industry: 'Real Estate'
  },
  {
    id: '11',
    clientName: 'Jack Miller',
    company: 'Gelt Financial',
    title: 'Mortgage Industry Transformation',
    url: '/mortgage-industry-transformation',
    category: 'Transformation',
    industry: 'Mortgage'
  },
  {
    id: '12',
    clientName: 'Luke Newton',
    company: 'LockedOn',
    title: 'Immediate Business Transformation',
    url: '/immediate-business-transformation',
    category: 'Transformation',
    industry: 'Technology'
  },
  {
    id: '13',
    clientName: 'Brett Ayles',
    company: 'Reside Real Estate',
    title: 'Offshore Staffing Success',
    url: '/offshore-staffing-success',
    category: 'Staffing',
    industry: 'Real Estate'
  },
  {
    id: '14',
    clientName: 'Jon Beaulieu',
    company: 'JBMP Group',
    title: 'Smooth Recruitment Process',
    url: '/smooth-recruitment-process',
    category: 'Recruitment',
    industry: 'Property Management'
  },
  {
    id: '15',
    clientName: 'Jonathan Curreri',
    company: 'Crowdcopia',
    title: 'Successful Trial Hiring',
    url: '/successful-trial-hiring',
    category: 'Recruitment',
    industry: 'Technology'
  },
  {
    id: '16',
    clientName: 'Jason Gard',
    company: 'Gard Real Estate',
    title: 'Streamline Back Office',
    url: '/streamline-back-office',
    category: 'Operations',
    industry: 'Real Estate'
  },
  {
    id: '17',
    clientName: 'Michael Garside',
    company: 'Harcourts Dapto',
    title: 'Quick Staff Onboarding',
    url: '/quick-staff-onboarding',
    category: 'Onboarding',
    industry: 'Real Estate'
  },
  {
    id: '18',
    clientName: 'Levi Turner',
    company: 'Bellarine Property',
    title: 'Appraisal & Listings Volume Increase',
    url: '/appraisal-listings-volume-increase',
    category: 'Performance',
    industry: 'Real Estate'
  },
  {
    id: '19',
    clientName: 'Christel Renton',
    company: 'Mi Property Group',
    title: 'Business Systems Implementation Success',
    url: '/business-systems-implementation-success',
    category: 'Systems',
    industry: 'Property Management'
  },
  {
    id: '20',
    clientName: 'Phil Knight',
    company: 'AGENT in a Box',
    title: 'Easy Business Process Implementation',
    url: '/easy-business-process-implementation',
    category: 'Process',
    industry: 'Real Estate'
  },
  {
    id: '21',
    clientName: 'Mark Dwyer',
    company: 'Sales Trainer',
    title: 'Marketing Automation Implementation',
    url: '/marketing-automation-implementation',
    category: 'Automation',
    industry: 'Training'
  },
  {
    id: '22',
    clientName: 'Peter Forbes',
    company: '#1 Property Centre',
    title: 'Mobile Business Solutions',
    url: '/mobile-business-solutions',
    category: 'Technology',
    industry: 'Real Estate'
  },
  {
    id: '23',
    clientName: 'Kevin Turner',
    company: 'Real Estate Talk',
    title: 'Hands-off Business Procedures',
    url: '/hands-off-business-procedures',
    category: 'Automation',
    industry: 'Media'
  },
  {
    id: '24',
    clientName: 'Derek Gallimore',
    company: 'Outsource Accelerator',
    title: 'Industry Expert Validation',
    url: '/industry-expert-validation',
    category: 'Partnerships',
    industry: 'Outsourcing'
  }
];

export default function CaseStudiesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCaseStudies = useMemo(() => {
    if (!searchTerm) return caseStudies;
    
    return caseStudies.filter(study => 
      study.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.industry.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleCaseStudyClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from real businesses. Discover how we've helped companies across industries scale, save costs, and succeed with offshore talent.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search by client, company, industry, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg border-lime-200 focus:border-lime-500 focus:ring-lime-500"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            {filteredCaseStudies.length} {filteredCaseStudies.length === 1 ? 'case study' : 'case studies'} found
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((study) => (
            <Card 
              key={study.id} 
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-lime-200 hover:border-lime-300"
              onClick={() => handleCaseStudyClick(study.url)}
            >
              <CardContent className="p-6">
                {/* Category & Industry Badges */}
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-lime-600 text-white hover:bg-lime-700">
                    {study.category}
                  </Badge>
                  <Badge variant="outline" className="border-lime-600 text-lime-700">
                    {study.industry}
                  </Badge>
                </div>

                {/* Company Icon */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-lime-100 rounded-full p-2">
                    <Building2 className="w-5 h-5 text-lime-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{study.company}</p>
                    <p className="text-xs text-gray-500">{study.clientName}</p>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-lime-600 transition-colors duration-200 line-clamp-2">
                  {study.title}
                </h3>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-lime-600 font-medium group-hover:text-lime-700 transition-colors duration-200">
                    Read Story
                  </span>
                  <ArrowRight className="w-5 h-5 text-lime-600 group-hover:text-lime-700 group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No case studies found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or browse all our success stories.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-lime-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their operations with offshore talent from ShoreAgents.
          </p>
          <Link 
            href="/pricing" 
            className="inline-flex items-center px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors duration-200"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

