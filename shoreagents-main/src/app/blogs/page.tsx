'use client';

import { useState, useMemo, useRef } from 'react';
import { SideNav } from "@/components/layout/SideNav";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Clock, ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  thumbnail: string;
  publishDate: string;
  author: string;
  readTime: string;
  authorAvatar?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'What is Outsourcing?',
    description: 'A comprehensive guide to understanding outsourcing strategies and how they can dramatically scale your business operations.',
    url: '/what-is-outsourcing',
    category: 'Outsourcing',
    thumbnail: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
    publishDate: '2024-01-15',
    author: 'ShoreAgents Team',
    readTime: '8 min read'
  },
  {
    id: '2',
    title: 'Outsourcing vs Offshoring',
    description: 'Navigate the complexities of global talent. We break down the key differences between outsourcing and offshoring models.',
    url: '/outsourcing-vs-offshoring',
    category: 'Strategy',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    publishDate: '2024-01-20',
    author: 'ShoreAgents Team',
    readTime: '7 min read'
  },
  {
    id: '3',
    title: 'Outsourcing to Vietnam',
    description: 'Explore the emerging opportunities and distinct advantages of establishing your remote teams in Vietnam.',
    url: '/outsourcing-to-vietnam',
    category: 'Destinations',
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    publishDate: '2024-01-25',
    author: 'ShoreAgents Team',
    readTime: '6 min read'
  },
  {
    id: '4',
    title: 'Outsourcing to India',
    description: 'A deep dive into why India remains a powerhouse for global outsourcing and how to leverage its talent pool effectively.',
    url: '/outsourcing-to-india',
    category: 'Destinations',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    publishDate: '2024-02-01',
    author: 'ShoreAgents Team',
    readTime: '6 min read'
  },
  {
    id: '5',
    title: 'Outsourcing Philippines',
    description: 'Why the Philippines continues to be the premier destination for English-speaking offshore talent and business support.',
    url: '/outsourcing-philippines',
    category: 'Destinations',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    publishDate: '2024-02-05',
    author: 'ShoreAgents Team',
    readTime: '10 min read'
  },
  {
    id: '6',
    title: 'Virtual Real Estate Assistant Pricing',
    description: 'The definitive 2024 guide to cost structures, salary expectations, and ROI when hiring virtual real estate assistants.',
    url: '/virtual-real-estate-assistant-pricing',
    category: 'Real Estate VA',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff0a77?w=800&q=80',
    publishDate: '2024-02-10',
    author: 'ShoreAgents Team',
    readTime: '9 min read'
  },
  {
    id: '7',
    title: 'Real Estate Virtual Assistant Duties',
    description: 'Unlock potential: A complete breakdown of tasks and responsibilities you can delegate to a Real Estate Virtual Assistant.',
    url: '/what-does-a-real-estate-virtual-assistant-do',
    category: 'Real Estate VA',
    thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    publishDate: '2024-02-15',
    author: 'ShoreAgents Team',
    readTime: '11 min read'
  }
];

// --- Shared Styles ---
const cardHoverStyle = "hover:shadow-xl hover:-translate-y-1 transition-all duration-300";
const sectionSpacing = "my-16 md:my-24";

const CustomBackgroundLines = () => {
  const paths = [
    "M720 450C720 450 742.459 440.315 755.249 425.626C768.039 410.937 778.88 418.741 789.478 401.499",
    "M720 450C720 450 741.044 435.759 753.062 410.636C765.079 385.514 770.541 386.148 782.73 370.489",
    "M720 450C720 450 712.336 437.768 690.248 407.156C668.161 376.544 672.543 394.253 665.951 365.784",
    "M720 450C720 450 738.983 448.651 790.209 446.852C841.436 445.052 816.31 441.421 861.866 437.296",
    "M720 450C720 450 696.366 458.841 682.407 472.967C668.448 487.093 673.23 487.471 647.919 492.882",
  ];

  const colors = ["#65a30d", "#4d7c0f", "#84cc16", "#3f6212", "#a3e635"];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        {paths.map((path, i) => (
          <motion.path
            key={i}
            d={path}
            stroke={colors[i % colors.length]}
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ 
              duration: 3 + i, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut" 
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredBlogs = useMemo(() => {
    return blogPosts.filter(blog => {
      const matchesSearch = 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-lime-200 selection:text-lime-900">
      <SideNav />

      {/* --- Hero Section --- */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(101,163,13,0.15),_rgba(15,23,42,1))]"></div>
        <CustomBackgroundLines />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div style={{ y: headerY, opacity: headerOpacity }} className="space-y-8">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              <Badge className="bg-lime-500/10 text-lime-400 hover:bg-lime-500/20 border-lime-500/20 px-6 py-2 text-sm font-bold uppercase tracking-widest backdrop-blur-md rounded-full">
                Resources & Insights
              </Badge>
            </motion.div>
            <motion.h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1]" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              Knowledge to <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">Scale Your Business</span>
            </motion.h1>
            <motion.p className="max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed font-light" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
               Expert advice, industry trends, and strategic guides on outsourcing, virtual assistants, and team expansion.
            </motion.p>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="max-w-xl mx-auto relative group mt-8"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-400 to-green-500 rounded-full opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-lime-500 transition-colors" />
                <Input
                  type="text"
                  placeholder="Search for topics, strategies, or guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-14 pr-6 py-7 rounded-full border-white/10 bg-slate-900/80 text-white placeholder:text-slate-500 focus:border-lime-500 focus:ring-lime-500/20 shadow-2xl text-base backdrop-blur-xl w-full transition-all duration-300"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}><ChevronDown className="w-8 h-8" /></motion.div>
      </div>

      <div className="relative z-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          
          {/* Filter Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                onClick={() => setSelectedCategory(category)}
                className={cn(
                    "px-6 py-6 rounded-full text-sm font-bold transition-all duration-300",
                    selectedCategory === category 
                        ? "bg-lime-600 text-white shadow-lg shadow-lime-200 hover:bg-lime-500 scale-105" 
                        : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 shadow-sm"
                )}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Results Count */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 flex justify-between items-center border-b border-slate-100 pb-4"
          >
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Latest Articles</h2>
            <p className="text-slate-500 text-sm font-medium">
              Showing {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'}
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link href={blog.url} className="group block h-full">
                  <Card className={cn("h-full bg-white border-slate-100 overflow-hidden flex flex-col rounded-3xl shadow-lg", cardHoverStyle)}>
                    <div className="relative h-52 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                      <Image
                        src={blog.thumbnail}
                        alt={blog.title}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <Badge className="bg-white/90 text-slate-900 hover:bg-white shadow-sm backdrop-blur-md border-0 px-4 py-1.5 text-xs font-bold tracking-wide uppercase rounded-full">
                          {blog.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="flex-grow p-8">
                      <div className="flex items-center text-xs text-slate-400 font-bold space-x-3 mb-4 uppercase tracking-wider">
                        <div className="flex items-center">
                          <Calendar className="w-3.5 h-3.5 mr-1.5 text-lime-500" />
                          {new Date(blog.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </div>
                        <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                        <div className="flex items-center">
                          <Clock className="w-3.5 h-3.5 mr-1.5 text-lime-500" />
                          {blog.readTime}
                        </div>
                      </div>

                      <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-lime-600 transition-colors duration-300 line-clamp-2 leading-tight tracking-tight">
                        {blog.title}
                      </h3>
                      
                      <p className="text-slate-500 mb-6 line-clamp-3 text-sm leading-relaxed font-medium">
                        {blog.description}
                      </p>
                    </CardContent>

                    <CardFooter className="p-8 pt-0 mt-auto border-t border-slate-100">
                      <div className="flex items-center justify-between w-full pt-6">
                        <div className="flex items-center space-x-3">
                           <div className="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center text-lime-700 font-bold text-xs ring-2 ring-white shadow-sm">
                              SA
                           </div>
                           <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{blog.author}</span>
                        </div>
                        <div className="flex items-center text-lime-600 font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
                          Read Article <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredBlogs.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="text-center py-32 bg-slate-50 rounded-3xl border border-dashed border-slate-200"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Search className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No articles found</h3>
              <p className="text-slate-500 max-w-md mx-auto mb-8">
                We couldn't find any articles matching "{searchTerm}". Try searching for something else.
              </p>
              <Button 
                onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                className="px-8 py-6 bg-lime-600 text-white text-sm font-bold rounded-full hover:bg-lime-500 transition-all shadow-lg shadow-lime-900/20 hover:shadow-lime-900/30"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>

        {/* --- Final CTA --- */}
        <section className="py-32 bg-slate-50 relative overflow-hidden border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
               Ready to Build Your Team?
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              You've read the insights. Now take the next step. We help 500K+ agencies build high-performing offshore teams that actually work.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/pricing">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-xl transition-all">
                  View Pricing Models
                </Button>
              </Link>
               <Link href="/contact">
                <Button size="lg" variant="outline" className="px-12 py-8 text-xl font-bold rounded-2xl border-slate-300 hover:bg-white text-slate-700">
                  Book Strategy Call
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
