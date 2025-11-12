'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  CheckCircle, 
  ArrowRight,
  DollarSign,
  Zap,
  Phone,
  BarChart,
  HelpCircle,
  MessageCircle,
  Users,
  TrendingUp,
  Heart,
  Eye,
  Share2,
  Calendar,
  X
} from 'lucide-react';
import Image from 'next/image';

export default function SocialMediaVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Social Media Virtual Assistant: Build Your Brand & Engage Your Audience
          </h1>

          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1200&h=600&fit=crop"
              alt="Professional social media virtual assistant managing multiple social platforms and engagement"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Expert social media managers who create content, engage audiences, run campaigns, and grow your following across all platforms—delivering 300% engagement growth at 68% cost savings.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Book a Strategy Call
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg font-semibold">
              How It Works
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg font-semibold">
              See Pricing
              <DollarSign className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <Zap className="w-8 h-8 text-lime-600 mr-3" />
            Social Media Results That Drive Growth
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="border-lime-200 bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">300%</div>
                <div className="text-gray-600 font-medium text-sm">Engagement Growth</div>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">68%</div>
                <div className="text-gray-600 font-medium text-sm">Cost Savings</div>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">120+</div>
                <div className="text-gray-600 font-medium text-sm">Posts Monthly</div>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium text-sm">Community Management</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What Is Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <MessageCircle className="w-8 h-8 text-lime-600 mr-3" />
            What Is a Social Media Virtual Assistant?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A social media virtual assistant is a dedicated specialist who manages your entire social media presence across platforms. These experts create compelling content, engage with your audience, analyze performance, and implement strategies that build brand awareness and drive business growth.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Unlike sporadic posting or basic scheduling tools, social media VAs bring strategic thinking, creative content creation, community management skills, and data-driven optimization to transform your social channels into powerful business assets that generate leads and revenue.
          </p>
        </div>

        {/* Services Section */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Comprehensive Social Media Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Calendar className="w-10 h-10 text-lime-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Content Creation & Scheduling</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Custom content creation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Editorial calendar management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Optimal timing & scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Multi-platform posting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Users className="w-10 h-10 text-lime-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community Management</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Comment & message responses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Audience engagement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Reputation monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Crisis management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <TrendingUp className="w-10 h-10 text-lime-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Strategies</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Follower growth campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Hashtag strategy & research</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Influencer partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Cross-promotion tactics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <DollarSign className="w-10 h-10 text-lime-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Paid Social Advertising</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Ad campaign creation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Audience targeting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Budget management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>A/B testing & optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <BarChart className="w-10 h-10 text-lime-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics & Reporting</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Performance tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Engagement metrics analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>ROI measurement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Monthly reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Share2 className="w-10 h-10 text-lime-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Platform Management</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Facebook & Instagram</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>LinkedIn & Twitter/X</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>TikTok & YouTube</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Pinterest & other platforms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <DollarSign className="w-8 h-8 text-lime-600 mr-3" />
            The Cost Advantage
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <X className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Local Social Media Manager</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Annual Salary:</span>
                    <span className="font-bold text-gray-900">$62,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Benefits (30%):</span>
                    <span className="font-bold text-gray-900">$18,600</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Tools & Software:</span>
                    <span className="font-bold text-gray-900">$4,400</span>
                  </div>
                  <hr className="border-red-300" />
                  <div className="flex justify-between text-xl">
                    <span className="font-bold text-gray-900">Total Annual Cost:</span>
                    <span className="font-bold text-red-600">$85,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Social Media VA</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Annual Cost:</span>
                    <span className="font-bold text-gray-900">$27,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Tools (included):</span>
                    <span className="font-bold text-gray-900">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Management (included):</span>
                    <span className="font-bold text-gray-900">$0</span>
                  </div>
                  <hr className="border-lime-300" />
                  <div className="flex justify-between text-xl">
                    <span className="font-bold text-gray-900">Total Annual Cost:</span>
                    <span className="font-bold text-lime-600">$27,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-lime-200 bg-lime-100 mt-8">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Annual Savings: $58,000</h3>
              <p className="text-lg text-gray-700">That's a 68% cost reduction with comprehensive social media management!</p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <HelpCircle className="w-10 h-10 text-lime-600 mr-3" />
            Frequently Asked Questions
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Which social media platforms can your VAs manage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our social media VAs are experienced across all major platforms including Facebook, Instagram, LinkedIn, Twitter/X, TikTok, YouTube, Pinterest, and more. They adapt their strategies to each platform's unique audience and algorithm.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Do social media VAs create the actual content?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes! Our social media VAs create compelling copy, source or design graphics, edit videos, and develop complete posts ready for publishing. They can also curate content and repurpose your existing materials for social distribution.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How quickly will I see results?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Initial improvements in consistency and engagement typically appear within 2-4 weeks. Significant follower growth and lead generation usually manifest within 2-3 months as your content gains traction and algorithms favor consistent, quality posting.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Can my social media VA respond to comments and messages?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Absolutely. Community management is a core service. Your VA monitors and responds to comments, messages, and mentions in your brand voice, escalating important inquiries to you while handling routine interactions professionally.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What tools and software do social media VAs use?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our VAs are proficient in Hootsuite, Buffer, Sprout Social, Later, Canva, Adobe Creative Suite, and native platform tools. They adapt to your preferred tools and all necessary software is included in your package.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Zap className="w-10 h-10 text-white mr-3" />
            Ready to Grow Your Social Presence?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start building your brand and engaging your audience with expert social media virtual assistants. Save 68% on costs while achieving 300% engagement growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Start Your Social Journey
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold">
              View Pricing Plans
              <DollarSign className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
