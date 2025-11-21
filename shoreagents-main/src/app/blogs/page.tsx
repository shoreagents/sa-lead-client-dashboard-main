'use client';

import { useState, useMemo, useRef } from 'react';
import { SideNav } from "@/components/layout/SideNav";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Clock, ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

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

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], ["0%", "20%"]);

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
              Resources & Insights
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Knowledge to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-green-600">Scale Your Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Expert advice, industry trends, and strategic guides on outsourcing, virtual assistants, and team expansion.
            </p>
            
            <div className="max-w-2xl mx-auto relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-400 to-green-400 rounded-full opacity-30 group-hover:opacity-50 blur transition duration-300"></div>
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 w-6 h-6" />
                <Input
                  type="text"
                  placeholder="Search for topics, strategies, or guides..."
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
            <h2 className="text-xl font-bold text-gray-800">Latest Articles</h2>
            <p className="text-gray-500 text-xs font-medium">
              Showing {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link href={blog.url} className="group block h-full">
                  <Card className="h-full border-0 shadow-md shadow-gray-200/50 hover:shadow-xl hover:shadow-lime-100/50 transition-all duration-300 overflow-hidden flex flex-col bg-white rounded-xl hover:-translate-y-1">
                    <div className="relative h-40 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <Image
                        src={blog.thumbnail}
                        alt={blog.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 z-20">
                        <Badge className="bg-white/95 text-gray-800 hover:bg-white shadow-sm backdrop-blur-md border-0 px-2.5 py-0.5 text-[10px] font-bold tracking-wide">
                          {blog.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="flex-grow p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-lime-600 transition-colors duration-200 line-clamp-2 leading-snug">
                        {blog.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2 text-xs leading-relaxed font-medium">
                        {blog.description}
                      </p>
                      
                      <div className="flex items-center text-[10px] text-gray-400 font-semibold space-x-3 pt-3 border-t border-gray-50">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(blog.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {blog.readTime}
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="p-5 pt-0 mt-auto">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-2 group-hover:opacity-80 transition-opacity">
                           <div className="w-6 h-6 rounded-full bg-lime-100 flex items-center justify-center text-lime-700 font-bold text-[10px] ring-2 ring-white">
                              SA
                           </div>
                           <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{blog.author}</span>
                        </div>
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

          {filteredBlogs.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200 shadow-sm"
            >
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-500 max-w-md mx-auto mb-6 text-sm">
                We couldn't find any articles matching "{searchTerm}".
              </p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                className="px-6 py-2 bg-lime-600 text-white text-sm font-bold rounded-full hover:bg-lime-700 transition-colors shadow-md"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
