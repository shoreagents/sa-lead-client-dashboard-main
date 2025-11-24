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
    id: '1',
    title: 'What is Outsourcing?',
    description: 'A comprehensive guide to understanding outsourcing and how it can benefit your business.',
    url: '/what-is-outsourcing',
    category: 'Outsourcing',
    thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop',
    publishDate: '2024-01-15',
    author: 'ShoreAgents Team',
    readTime: '8 min read'
  },
  {
    id: '2',
    title: 'Outsourcing vs Offshoring',
    description: 'Understanding the key differences between outsourcing and offshoring for your business.',
    url: '/outsourcing-vs-offshoring',
    category: 'Outsourcing',
    thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop',
    publishDate: '2024-01-20',
    author: 'ShoreAgents Team',
    readTime: '7 min read'
  },
  {
    id: '3',
    title: 'Outsourcing to Vietnam',
    description: 'Explore the benefits and opportunities of outsourcing to Vietnam for your business.',
    url: '/outsourcing-to-vietnam',
    category: 'Outsourcing',
    thumbnail: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&h=250&fit=crop',
    publishDate: '2024-01-25',
    author: 'ShoreAgents Team',
    readTime: '6 min read'
  },
  {
    id: '4',
    title: 'Outsourcing to India',
    description: 'Discover why India is a leading destination for outsourcing and how to leverage it.',
    url: '/outsourcing-to-india',
    category: 'Outsourcing',
    thumbnail: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=250&fit=crop',
    publishDate: '2024-02-01',
    author: 'ShoreAgents Team',
    readTime: '6 min read'
  },
  {
    id: '5',
    title: 'Outsourcing Philippines',
    description: 'Why the Philippines is the premier destination for outsourcing your business operations.',
    url: '/outsourcing-philippines',
    category: 'Outsourcing',
    thumbnail: 'https://images.unsplash.com/photo-1578663899664-27b62cd03a44?w=400&h=250&fit=crop',
    publishDate: '2024-02-05',
    author: 'ShoreAgents Team',
    readTime: '10 min read'
  },
  {
    id: '6',
    title: 'Virtual Real Estate Assistant Pricing',
    description: 'Complete pricing guide for hiring virtual real estate assistants in 2024.',
    url: '/virtual-real-estate-assistant-pricing',
    category: 'Real Estate VA',
    thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop',
    publishDate: '2024-02-10',
    author: 'ShoreAgents Team',
    readTime: '9 min read'
  },
  {
    id: '7',
    title: 'What Does a Real Estate Virtual Assistant Do?',
    description: 'Everything you need to know about real estate virtual assistants and their role in your business.',
    url: '/what-does-a-real-estate-virtual-assistant-do',
    category: 'Real Estate VA',
    thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop',
    publishDate: '2024-02-15',
    author: 'ShoreAgents Team',
    readTime: '11 min read'
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
                      <span>{new Date(blog.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
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
