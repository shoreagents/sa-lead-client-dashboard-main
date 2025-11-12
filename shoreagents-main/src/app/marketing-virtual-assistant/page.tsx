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
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  DollarSign,
  Target,
  Zap,
  Phone,
  BarChart,
  HelpCircle,
  Lightbulb,
  Globe,
  MessageCircle,
  Mail,
  Users,
  Edit,
  Eye,
  X
} from 'lucide-react';
import Image from 'next/image';

export default function MarketingVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Marketing Virtual Assistant: Scale Your Marketing with Expert Support
          </h1>

          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop"
              alt="Professional marketing virtual assistant managing campaigns and analytics"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Professional marketing specialists who execute campaigns, manage content, analyze data, and drive growth across all digital channels—delivering expert results at 65% cost savings.
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
            Marketing Results That Drive Growth
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="border-lime-200 bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">220%</div>
                <div className="text-gray-600 font-medium text-sm">Campaign ROI</div>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">65%</div>
                <div className="text-gray-600 font-medium text-sm">Cost Savings</div>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">3x</div>
                <div className="text-gray-600 font-medium text-sm">More Campaigns</div>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium text-sm">Campaign Support</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What Is Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="w-8 h-8 text-lime-600 mr-3" />
            What Is a Marketing Virtual Assistant?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A marketing virtual assistant is a skilled digital marketing professional who handles the full spectrum of marketing activities for your business. From campaign management and content creation to analytics and strategy, these specialists bring comprehensive marketing expertise to drive measurable business growth.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Unlike general administrative VAs, marketing virtual assistants possess specialized skills in digital marketing channels, tools, and strategies. They understand customer journeys, conversion optimization, and data-driven decision making—transforming your marketing from a cost center into a growth engine.
          </p>
        </div>

        {/* Services Section */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Comprehensive Marketing Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Target className="w-10 h-10 text-lime-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Campaign Management</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Multi-channel campaign planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Campaign execution & monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>A/B testing & optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Performance tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Edit className="w-10 h-10 text-lime-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Content Marketing</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Content strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Blog & article creation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Editorial calendar management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Content distribution</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Mail className="w-10 h-10 text-lime-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Email Marketing</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Email campaign creation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>List segmentation & management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Automation workflows</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Performance optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <MessageCircle className="w-10 h-10 text-lime-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Social Media Marketing</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Social media strategy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Content creation & scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Community management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Paid social advertising</span>
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
                    <span>Data analysis & insights</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>ROI tracking & reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Dashboard creation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Performance optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Globe className="w-10 h-10 text-lime-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Paid Advertising</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Google Ads management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Facebook & Instagram ads</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>LinkedIn advertising</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Budget optimization</span>
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
                  <h3 className="text-2xl font-bold text-gray-900">Local Marketing Manager</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Annual Salary:</span>
                    <span className="font-bold text-gray-900">$70,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Benefits (30%):</span>
                    <span className="font-bold text-gray-900">$21,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Tools & Software:</span>
                    <span className="font-bold text-gray-900">$5,000</span>
                  </div>
                  <hr className="border-red-300" />
                  <div className="flex justify-between text-xl">
                    <span className="font-bold text-gray-900">Total Annual Cost:</span>
                    <span className="font-bold text-red-600">$96,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Marketing Virtual Assistant</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Annual Cost:</span>
                    <span className="font-bold text-gray-900">$33,600</span>
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
                    <span className="font-bold text-lime-600">$33,600</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-lime-200 bg-lime-100 mt-8">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Annual Savings: $62,400</h3>
              <p className="text-lg text-gray-700">That's a 65% cost reduction with comprehensive marketing support!</p>
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
                  What marketing channels can a Marketing VA manage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our Marketing VAs are skilled across all major digital channels including social media, email marketing, content marketing, SEO, paid advertising (Google Ads, Facebook/Instagram, LinkedIn), and analytics. They can manage single channels or coordinate integrated multi-channel campaigns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Do Marketing VAs have industry-specific experience?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes! We match you with Marketing VAs who have relevant industry experience. Whether you're in real estate, construction, e-commerce, healthcare, or B2B services, we have specialists who understand your market, audience, and competitive landscape.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Can a Marketing VA create content for my campaigns?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Absolutely. Our Marketing VAs are skilled content creators who can write blog posts, social media content, email copy, ad copy, and more. They understand how to create compelling content that engages your audience and drives conversions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How do Marketing VAs measure campaign success?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Marketing VAs track comprehensive metrics including traffic, engagement rates, conversion rates, cost per acquisition, ROI, and other KPIs specific to your goals. You'll receive regular reports with actionable insights and optimization recommendations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What tools and software do Marketing VAs use?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our Marketing VAs are proficient in industry-leading tools including HubSpot, Mailchimp, Hootsuite, Buffer, Google Analytics, Google Ads, Facebook Business Manager, Canva, and many more. All necessary software and training is included in your package.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Zap className="w-10 h-10 text-white mr-3" />
            Ready to Scale Your Marketing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start driving growth with expert marketing virtual assistants. Execute more campaigns, achieve better results, and save 65% on marketing costs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Start Your Marketing Journey
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
