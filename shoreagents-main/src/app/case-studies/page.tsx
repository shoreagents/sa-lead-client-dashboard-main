'use client';

import { useState, useMemo, useRef } from 'react';
import { SideNav } from "@/components/layout/SideNav";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowRight, Building2, Briefcase, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface CaseStudy {
  id: string;
  clientName: string;
  company: string;
  title: string;
  description: string;
  url: string;
  category: string;
  industry: string;
  thumbnail: string;
}

// Image mapping based on categories
const categoryImages: Record<string, string> = {
  'Partnerships': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  'Cost Savings': 'https://images.unsplash.com/photo-1554224155-6726b3ff0a77?w=800&q=80',
  'Growth': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  'Scaling': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  'Performance': 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
  'Recruitment': 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
  'Transformation': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  'Staffing': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  'Operations': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  'Onboarding': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
  'Systems': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  'Process': 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80',
  'Automation': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
  'Technology': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80'
};

const getThumbnail = (category: string) => {
  return categoryImages[category] || 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80';
};

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    clientName: 'Ray Wood',
    company: 'Bestagents',
    title: 'Business Referral Partnerships',
    description: 'How Bestagents expanded their reach through strategic referral partnerships.',
    url: '/business-referral-partnerships',
    category: 'Partnerships',
    industry: 'Real Estate',
    thumbnail: getThumbnail('Partnerships')
  },
  {
    id: '2',
    clientName: 'Iain Neilson',
    company: 'Gallery Group',
    title: 'Construction Cost Reduction',
    description: 'Achieving significant cost reductions in construction projects with offshore teams.',
    url: '/construction-cost-reduction',
    category: 'Cost Savings',
    industry: 'Construction',
    thumbnail: getThumbnail('Cost Savings')
  },
  {
    id: '3',
    clientName: 'Kuahiwi Kahapea',
    company: 'Ballast',
    title: 'Team Expansion Success',
    description: 'Scaling real estate operations efficiently with a dedicated remote team.',
    url: '/team-expansion-success',
    category: 'Growth',
    industry: 'Real Estate',
    thumbnail: getThumbnail('Growth')
  },
  {
    id: '4',
    clientName: 'Tash Poole',
    company: 'BoxBrownie',
    title: 'Customer Service Scaling',
    description: 'Enhancing customer support capabilities during rapid business growth.',
    url: '/customer-service-scaling',
    category: 'Scaling',
    industry: 'Technology',
    thumbnail: getThumbnail('Scaling')
  },
  {
    id: '5',
    clientName: 'Pernell Callaghan',
    company: 'Arizto Real Estate',
    title: 'Business Growth Through Offshore Staffing',
    description: 'Leveraging offshore staffing to drive sustainable business expansion.',
    url: '/business-growth-through-offshore-staffing',
    category: 'Growth',
    industry: 'Real Estate',
    thumbnail: getThumbnail('Growth')
  },
  {
    id: '6',
    clientName: 'Marinella Sortino',
    company: 'Barry Plant',
    title: 'Gradual Team Scaling Success',
    description: 'A strategic approach to scaling real estate teams over time.',
    url: '/gradual-team-scaling-success',
    category: 'Scaling',
    industry: 'Real Estate',
    thumbnail: getThumbnail('Scaling')
  },
  {
    id: '7',
    clientName: 'Steve Lovegrove',
    company: 'Professionals McDowell',
    title: 'Long-term Partnership Success',
    description: 'Building lasting success through committed remote partnerships.',
    url: '/long-term-partnership-success',
    category: 'Partnerships',
    industry: 'Real Estate',
    thumbnail: getThumbnail('Partnerships')
  },
  {
    id: '8',
    clientName: 'Andrew Lochhead',
    company: 'Century 21',
    title: 'Exceptional Team Performance',
    description: 'Boosting team productivity and performance with offshore talent.',
    url: '/exceptional-team-performance',
    category: 'Performance',
    industry: 'Real Estate',
    thumbnail: getThumbnail('Performance')
  },
  {
    id: '9',
    clientName: 'Cindy Armour Helm',
    company: 'Better Homes and Gardens',
    title: 'Hiring Success After Failures',
    description: 'Overcoming recruitment challenges to find the perfect candidates.',
    url: '/hiring-success-after-failures',
    category: 'Recruitment',
    industry: 'Real Estate',
    thumbnail: getThumbnail('Recruitment')
  },
  {
    id: '10',
    clientName: 'Tracey Foy',
    company: 'Professionals Schultz',
    title: 'Reliable Recruitment Partner',
    description: 'Securing a dependable recruitment partner for consistent hiring.',
    url: '/reliable-recruitment-partner',
    category: 'Recruitment',
    industry: 'Real Estate',
    thumbnail: getThumbnail('Recruitment')
  },
  {
    id: '11',
    clientName: 'Jack Miller',
    company: 'Gelt Financial',
    title: 'Mortgage Industry Transformation',
    description: 'Transforming mortgage processing with specialized virtual assistants.',
    url: '/mortgage-industry-transformation',
    category: 'Transformation',
    industry: 'Mortgage',
    thumbnail: getThumbnail('Transformation')
  },
  {
    id: '12',
    clientName: 'Luke Newton',
    company: 'LockedOn',
    title: 'Immediate Business Transformation',
    description: 'Rapid business transformation using agile offshore solutions.',
    url: '/immediate-business-transformation',
    category: 'Transformation',
    industry: 'Technology',
    thumbnail: getThumbnail('Transformation')
  },
  {
    id: '13',
    clientName: 'Brett Ayles',
    company: 'Reside Real Estate',
    title: 'Offshore Staffing Success',
    description: 'Proven strategies for successful offshore staffing integration.',
    url: '/offshore-staffing-success',
    category: 'Staffing',
    industry: 'Real Estate',
    thumbnail: getThumbnail('Staffing')
  },
  {
    id: '14',
    clientName: 'Jon Beaulieu',
    company: 'JBMP Group',
    title: 'Smooth Recruitment Process',
    description: 'Streamlining the recruitment process for property management efficiency.',
    url: '/smooth-recruitment-process',
    category: 'Recruitment',
    industry: 'Property Management',
    thumbnail: getThumbnail('Recruitment')
  },
  {
    id: '15',
    clientName: 'Jonathan Curreri',
    company: 'Crowdcopia',
    title: 'Successful Trial Hiring',
    description: 'Executing a successful trial hiring phase for tech roles.',
    url: '/successful-trial-hiring',
    category: 'Recruitment',
    industry: 'Technology',
    thumbnail: getThumbnail('Recruitment')
  },
  {
    id: '16',
    clientName: 'Jason Gard',
    company: 'Gard Real Estate',
    title: 'Streamline Back Office',
    description: 'Optimizing back-office operations for real estate agencies.',
    url: '/streamline-back-office',
    category: 'Operations',
    industry: 'Real Estate',
    thumbnail: getThumbnail('Operations')
  },
  {
    id: '17',
    clientName: 'Michael Garside',
    company: 'Harcourts Dapto',
    title: 'Quick Staff Onboarding',
    description: 'Accelerating staff onboarding to get teams productive faster.',
    url: '/quick-staff-onboarding',
    category: 'Onboarding',
    industry: 'Real Estate',
    thumbnail: getThumbnail('Onboarding')
  },
  {
    id: '18',
    clientName: 'Levi Turner',
    company: 'Bellarine Property',
    title: 'Appraisal & Listings Volume Increase',
    description: 'Driving volume in appraisals and listings with focused support.',
    url: '/appraisal-listings-volume-increase',
    category: 'Performance',
    industry: 'Real Estate',
    thumbnail: getThumbnail('Performance')
  },
  {
    id: '19',
    clientName: 'Christel Renton',
    company: 'Mi Property Group',
    title: 'Business Systems Implementation Success',
    description: 'Implementing robust business systems for property management success.',
    url: '/business-systems-implementation-success',
    category: 'Systems',
    industry: 'Property Management',
    thumbnail: getThumbnail('Systems')
  },
  {
    id: '20',
    clientName: 'Phil Knight',
    company: 'AGENT in a Box',
    title: 'Easy Business Process Implementation',
    description: 'Simplifying business processes for real estate professionals.',
    url: '/easy-business-process-implementation',
    category: 'Process',
    industry: 'Real Estate',
    thumbnail: getThumbnail('Process')
  },
  {
    id: '21',
    clientName: 'Mark Dwyer',
    company: 'Sales Trainer',
    title: 'Marketing Automation Implementation',
    description: 'Automating marketing workflows to increase lead generation.',
    url: '/marketing-automation-implementation',
    category: 'Automation',
    industry: 'Training',
    thumbnail: getThumbnail('Automation')
  },
  {
    id: '22',
    clientName: 'Peter Forbes',
    company: '#1 Property Centre',
    title: 'Mobile Business Solutions',
    description: 'Deploying mobile solutions for dynamic real estate management.',
    url: '/mobile-business-solutions',
    category: 'Technology',
    industry: 'Real Estate',
    thumbnail: getThumbnail('Technology')
  },
  {
    id: '23',
    clientName: 'Kevin Turner',
    company: 'Real Estate Talk',
    title: 'Hands-off Business Procedures',
    description: 'Automating procedures to create hands-off business workflows.',
    url: '/hands-off-business-procedures',
    category: 'Automation',
    industry: 'Media',
    thumbnail: getThumbnail('Automation')
  },
  {
    id: '24',
    clientName: 'Derek Gallimore',
    company: 'Outsource Accelerator',
    title: 'Industry Expert Validation',
    description: 'Industry expert insights on the value of outsourcing partnerships.',
    url: '/industry-expert-validation',
    category: 'Partnerships',
    industry: 'Outsourcing',
    thumbnail: getThumbnail('Partnerships')
  }
];

export default function CaseStudiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], ["0%", "20%"]);

  const categories = ['All', ...Array.from(new Set(caseStudies.map(study => study.category)))];

  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter(study => {
      const matchesSearch = 
        study.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.industry.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || study.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
      
      <div ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-50 via-white to-lime-100 animate-gradient opacity-80"></div>
        
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-lime-200/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-green-100/30 rounded-full blur-[120px]"
        />

        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="border-lime-500 text-lime-700 bg-white/50 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase mb-6 shadow-sm">
              Client Success Stories
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Real Results from <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-green-600">Real Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Discover how companies across industries have transformed their operations, reduced costs, and scaled successfully with ShoreAgents.
            </p>
            
            <div className="max-w-2xl mx-auto relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-400 to-green-400 rounded-full opacity-30 group-hover:opacity-50 blur transition duration-300"></div>
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 w-6 h-6" />
                <Input
                  type="text"
                  placeholder="Search by company, industry, or result..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-16 pr-6 py-8 rounded-full border-slate-100 focus:border-lime-500 focus:ring-lime-500 shadow-xl text-lg bg-white/90 backdrop-blur-md w-full transition-all duration-300 group-hover:bg-white"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-lime-600/70 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ChevronDown className="w-10 h-10" />
        </motion.div>
      </div>

      <div className="relative z-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-lime-600 text-white shadow-md shadow-lime-200 scale-105'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-lime-300 hover:bg-lime-50 hover:shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 flex justify-between items-center border-b border-gray-200 pb-4"
          >
            <h2 className="text-xl font-bold text-gray-800">Featured Stories</h2>
            <p className="text-gray-500 text-xs font-medium">
              Showing {filteredCaseStudies.length} {filteredCaseStudies.length === 1 ? 'story' : 'stories'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link href={study.url} className="group block h-full">
                  <Card className="h-full border-0 shadow-md shadow-gray-200/50 hover:shadow-xl hover:shadow-lime-100/50 transition-all duration-300 overflow-hidden flex flex-col bg-white rounded-xl hover:-translate-y-1">
                    <div className="relative h-40 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <Image
                        src={study.thumbnail}
                        alt={study.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 z-20 flex flex-col gap-1">
                        <Badge className="bg-white/95 text-gray-800 hover:bg-white shadow-sm backdrop-blur-md border-0 w-fit px-2 py-0.5 text-[10px] font-bold">
                          {study.category}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="flex-grow p-5 relative">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="bg-lime-50 rounded-full p-1.5 group-hover:bg-lime-100 transition-colors duration-200">
                          <Building2 className="w-3.5 h-3.5 text-lime-600" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-gray-900 truncate">{study.company}</p>
                          <p className="text-[10px] text-gray-500 truncate">{study.clientName}</p>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-lime-600 transition-colors duration-300 line-clamp-2 leading-snug">
                        {study.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2 text-xs leading-relaxed font-medium">
                        {study.description}
                      </p>
                      
                      <div className="flex items-center text-[10px] font-semibold text-gray-500 bg-gray-50 px-2 py-1 rounded-full w-fit border border-gray-100">
                        <Briefcase className="w-3 h-3 mr-1 text-gray-400" />
                        {study.industry}
                      </div>
                    </CardContent>

                    <CardFooter className="p-5 pt-0 mt-auto border-t border-gray-50/50">
                      <div className="flex items-center justify-between w-full pt-3">
                        <span className="text-[10px] font-bold text-lime-600 bg-lime-50 px-2 py-0.5 rounded border border-lime-100 uppercase tracking-wide">
                           Case Study
                        </span>
                        <div className="flex items-center text-lime-600 font-bold text-xs group-hover:translate-x-1 transition-transform duration-300">
                          Read <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200 shadow-sm"
            >
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No case studies found</h3>
              <p className="text-gray-500 max-w-md mx-auto mb-6 text-sm">
                We couldn't find any stories matching "{searchTerm}".
              </p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                className="px-6 py-2 bg-lime-600 text-white text-sm font-bold rounded-full hover:bg-lime-700 transition-colors shadow-md"
              >
                Clear filters
              </button>
            </motion.div>
          )}

          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="mt-24 relative overflow-hidden rounded-3xl bg-gradient-to-br from-lime-600 to-green-700 text-white shadow-2xl"
          >
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="absolute -right-20 -top-20 w-64 h-64 bg-lime-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
             <div className="relative z-10 px-8 py-12 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
                  <p className="text-lime-100 text-lg mb-0">
                    Join hundreds of businesses that have transformed their operations with offshore talent from ShoreAgents.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link 
                    href="/pricing" 
                    className="inline-flex items-center px-8 py-4 bg-white text-lime-700 font-bold rounded-xl hover:bg-lime-50 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
