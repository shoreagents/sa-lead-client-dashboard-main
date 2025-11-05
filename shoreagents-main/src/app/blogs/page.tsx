'use client';

import { useState, useMemo } from 'react';
import { SideNav } from "@/components/layout/SideNav";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ExternalLink, Calendar, User } from 'lucide-react';
import Image from 'next/image';

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
}

const blogPosts: BlogPost[] = [
  {
    id: '8',
    title: 'Real Estate Virtual Assistant: 90% Fail - Client Messes Up or Staff Messes Up',
    description: 'Brutally honest truth about VA partnerships. 13 years experience reveals why 90% fail, what causes it, and how to be in the 10% that succeed.',
    url: '/real-estate-virtual-assistant-90-fail',
    category: 'Reality Check',
    thumbnail: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=250&fit=crop',
    publishDate: '2025-01-28',
    author: 'Stephen (Shore Agents)',
    readTime: '15 min read'
  },
  {
    id: '7',
    title: 'What Does a Real Estate Virtual Assistant Do?',
    description: 'Complete guide to real estate VA responsibilities. From administrative support to transaction coordination, discover how VAs transform real estate businesses.',
    url: '/what-does-a-real-estate-virtual-assistant-do',
    category: 'Real Estate VA',
    thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop',
    publishDate: '2025-01-25',
    author: 'ShoreAgents Team',
    readTime: '10 min read'
  },
  {
    id: '6',
    title: 'Outsourcing to the Philippines',
    description: 'The Philippines: World\'s #1 English-speaking BPO destination. Learn why top companies choose Filipino talent for customer service and virtual assistance.',
    url: '/outsourcing-philippines',
    category: 'Country Guide',
    thumbnail: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400&h=250&fit=crop',
    publishDate: '2025-01-22',
    author: 'ShoreAgents Team',
    readTime: '11 min read'
  },
  {
    id: '5',
    title: 'Virtual Real Estate Assistant Pricing',
    description: 'Complete 2025 pricing guide for virtual real estate assistants. Cost breakdown, ROI calculations, and how to save 60-78% compared to local hiring.',
    url: '/virtual-real-estate-assistant-pricing',
    category: 'Pricing Guide',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop',
    publishDate: '2025-01-20',
    author: 'ShoreAgents Team',
    readTime: '12 min read'
  },
  {
    id: '4',
    title: 'Outsourcing to India',
    description: 'Why India remains the global IT outsourcing leader. Explore massive talent pool, technical excellence, and cost-effective solutions from the world\'s BPO capital.',
    url: '/outsourcing-to-india',
    category: 'Country Guide',
    thumbnail: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=250&fit=crop',
    publishDate: '2025-01-18',
    author: 'ShoreAgents Team',
    readTime: '10 min read'
  },
  {
    id: '3',
    title: 'Outsourcing to Vietnam',
    description: 'Complete guide to outsourcing in Vietnam. Discover cost advantages, talent pool, and why Vietnam is becoming a top outsourcing destination in Southeast Asia.',
    url: '/outsourcing-to-vietnam',
    category: 'Country Guide',
    thumbnail: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&h=250&fit=crop',
    publishDate: '2025-01-15',
    author: 'ShoreAgents Team',
    readTime: '9 min read'
  },
  {
    id: '2',
    title: 'Outsourcing vs Offshoring: What\'s the Difference?',
    description: 'Comprehensive comparison guide explaining the key differences between outsourcing and offshoring, and which strategy is right for your business.',
    url: '/outsourcing-vs-offshoring',
    category: 'Comparison Guide',
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop',
    publishDate: '2025-01-12',
    author: 'ShoreAgents Team',
    readTime: '7 min read'
  },
  {
    id: '1',
    title: 'What is Outsourcing?',
    description: 'Complete guide to outsourcing in 2025. Learn what outsourcing is, its benefits, types, and how it can transform your business operations.',
    url: '/what-is-outsourcing',
    category: 'Outsourcing Guide',
    thumbnail: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop',
    publishDate: '2025-01-10',
    author: 'ShoreAgents Team',
    readTime: '8 min read'
  }
];

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBlogs = useMemo(() => {
    if (!searchTerm) return blogPosts;
    
    return blogPosts.filter(blog => 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleBlogClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover insights, tips, and resources about outsourcing, virtual assistants, and business growth.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search blogs by title, description, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg border-lime-200 focus:border-lime-500 focus:ring-lime-500"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'} found
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <Card 
              key={blog.id} 
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-lime-200 hover:border-lime-300"
              onClick={() => handleBlogClick(blog.url)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={blog.thumbnail}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-lime-600 text-white hover:bg-lime-700">
                    {blog.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-lime-600 transition-colors duration-200">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blog.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                  </div>
                  <span className="text-lime-600 font-medium">{blog.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lime-600 font-medium group-hover:text-lime-700 transition-colors duration-200">
                    Read More
                  </span>
                  <ExternalLink className="w-4 h-4 text-lime-600 group-hover:text-lime-700 transition-colors duration-200" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or browse all our articles.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
