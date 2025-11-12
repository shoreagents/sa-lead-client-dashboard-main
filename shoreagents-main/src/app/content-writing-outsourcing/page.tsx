'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Users, 
  TrendingUp, 
  Shield, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  DollarSign,
  Target,
  Zap,
  Award,
  Phone,
  AlertCircle,
  BarChart,
  TrendingDown,
  X,
  HelpCircle,
  Briefcase,
  FileText,
  Settings,
  Lightbulb,
  Globe,
  Building2,
  Cpu,
  Edit
} from 'lucide-react';
import Image from 'next/image';

export default function ContentWritingOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge variant="destructive" className="mb-4 bg-red-600 text-white px-4 py-2 text-sm font-semibold flex items-center justify-center w-fit mx-auto">
            <AlertCircle className="w-4 h-4 mr-2" />
            CRITICAL: Content Departments Draining $200K+ Annually With Zero ROI
          </Badge>
          <p className="text-lg text-gray-600 mb-6">
            While growing businesses struggle with expensive, unmanageable content teams producing inconsistent results, smart companies are transferring entire content operations offshore for 70%+ cost savings. Stop hemorrhaging money on broken content departments.
          </p>

          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Content Writing Outsourcing: Complete Department Transfer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Replace your entire content department with systematized offshore operations that scale with your business while you maintain strategic oversight without daily management headaches
          </p>

          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=600&fit=crop"
              alt="Content writing team collaborating on creative projects with laptops and documents in modern office workspace"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Book Your Department Strategy Call
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg font-semibold">
              See Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Successful BPO Implementations</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">70%+</div>
              <div className="text-gray-600 font-medium">Cost Savings vs In-House</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">15-20</div>
              <div className="text-gray-600 font-medium">Articles Monthly + Strategy</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">12+</div>
              <div className="text-gray-600 font-medium">Years Building Offshore Ops</div>
            </CardContent>
          </Card>
        </div>

        {/* Stephen's Story */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-10 h-10 text-lime-600 mr-3" />
            How I Scaled Content Operations Across 14 Salespeople & 400 Rentals
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              When I built my real estate business to 14 salespeople and 400 rental properties, content became a massive operational challenge. We weren't just talking about hiring one writer – we needed a complete content outsourcing strategy that could handle multiple agents, locations, and property types systematically.
            </p>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Content Operations Reality</h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Each agent needed suburb content, property descriptions, market reports, and social media posts. Multiply that by 14 agents across different areas, plus 400 rental properties requiring regular content updates. We weren't looking for a single content writer – we needed an entire content department outsourcing solution.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The local content team approach was financially impossible. A content manager ($85,000), two content writers ($65,000 each), a social media coordinator ($55,000), and a graphic designer ($70,000) would cost $340,000 annually – plus benefits, equipment, and management overhead.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Building Systematized Content Operations</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Instead of hiring individual content people, I built a complete content operations outsourcing system. The Philippines team handled:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Suburb content production</span>
                    <span className="text-gray-700"> – Detailed local area guides for each agent's territory</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Property descriptions</span>
                    <span className="text-gray-700"> – Standardized but customized content for all listings</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Market reports</span>
                    <span className="text-gray-700"> – Monthly and quarterly content across all areas</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Social media strategies</span>
                    <span className="text-gray-700"> – Coordinated content across 14 different agent profiles</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Email campaigns</span>
                    <span className="text-gray-700"> – Automated but personalized content for each agent's database</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-lime-100 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Scaling Success</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="text-3xl font-bold text-red-600 mb-2">$340,000+</div>
                  <div className="text-sm text-gray-700">Local Content Team Cost</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-3xl font-bold text-lime-600 mb-2">$95,000</div>
                  <div className="text-sm text-gray-700">Offshore Operations Cost</div>
                </div>
              </div>
              <p className="text-gray-700 mb-3 leading-relaxed">
                The offshore content operations cost $95,000 annually versus $340,000+ for local teams. More importantly, the system worked without my daily involvement. Each agent had consistent, professional content that actually helped them sell more properties and build their personal brands.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold">
                This wasn't about finding cheaper writers – it was about building content operations that could scale with the business. When I sold that real estate company, the content system was a major value driver because it operated independently of my personal involvement.
        </p>
      </div>
    </div>

          <div className="mt-6 text-center">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Your Outsourcing Strategy Call
            </Button>
          </div>
        </div>

        {/* The Problems with Traditional Content Departments */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <X className="w-10 h-10 text-red-600 mr-3" />
            Why Traditional Content Departments Fail
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <DollarSign className="w-6 h-6 text-red-600 mr-2" />
                  The Cost Spiral
                </h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Content manager: $85,000. Two writers: $130,000. Social coordinator: $55,000. Graphic designer: $70,000. Total: $340,000+ annually before benefits, equipment, and overhead.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  As your business grows, costs multiply exponentially. Need more content? Hire more people. Expand to new markets? Double the team. Traditional content departments can't scale affordably.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
                  The Management Nightmare
                </h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Content teams require constant management: daily task assignments, quality reviews, deadline enforcement, performance management, and interpersonal drama resolution.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You're running a content department instead of your business. The time cost alone exceeds $50,000 annually in lost strategic focus and business development opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 text-red-600 mr-2" />
                  The Turnover Crisis
                </h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Content writers job-hop constantly. Average tenure: 18 months. Each departure costs $15,000-$25,000 in recruitment, training, and lost productivity. With a 4-person team, expect 2-3 turnovers annually.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Your content quality and brand voice reset with each new hire. Consistent brand messaging becomes impossible when team composition changes quarterly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <TrendingDown className="w-6 h-6 text-red-600 mr-2" />
                  The Scaling Impossibility
                </h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Traditional content teams can't scale flexibly. Seasonal campaigns? Too bad, you're stuck with fixed capacity. New market expansion? Wait 8-12 weeks for recruitment and training.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By the time your content team scales, market opportunities have passed. Competitors with flexible content operations capture the market while you're still hiring.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* The ShoreAgents Solution */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <Zap className="w-10 h-10 text-lime-600 mr-3" />
            The ShoreAgents Content Operations Solution
          </h2>
          <p className="text-2xl text-gray-700 text-center mb-8">
            Transfer your entire content department offshore with proven BPO methodology that eliminates management headaches while delivering superior results at 70%+ cost savings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Building2 className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Complete Department Transfer</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Replace your entire content operation – writers, editors, social coordinators, strategists – with systematized offshore teams that maintain quality while reducing costs by 70%+.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Brand Voice Consistency</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Systematically document your brand voice through recorded sessions, style guides, and AI-enhanced workflows. Your offshore team maintains better consistency than rotating local hires.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Instant Scalability</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Need double content volume for a campaign? Team adjusts within days. Expanding to new markets? Additional members integrate seamlessly using existing processes. Zero recruitment delays.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Cpu className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">AI-Enhanced Workflows</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Advanced AI tools enhance content quality while reducing costs. We provide the specific technology stack that makes modern content outsourcing work efficiently and effectively.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Strategic Oversight</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Maintain complete strategic control through monthly planning, content calendar approvals, and performance reviews. Offshore team handles execution while you control strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Settings className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Technology Integration</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Integrate with your existing CMS, marketing automation, social media management, and analytics tools. We adapt to your technology preferences rather than forcing platform changes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Options */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <Briefcase className="w-10 h-10 text-lime-600 mr-3" />
            Content Writing Outsourcing Service Levels
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="flex items-center justify-center mb-4">
                    <Edit className="w-12 h-12 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Essential Content Team</h3>
                  <p className="text-3xl font-bold text-lime-600 mb-2">$30,000-$50,000</p>
                  <p className="text-gray-600 mb-4">annually</p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Small to medium businesses needing consistent content production without the overhead of full content departments. Includes dedicated content writer, social media coordinator, and editorial oversight.
                  </p>
                  <ul className="text-left space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">15-20 articles monthly</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Social media content strategy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Brand voice documentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Editorial calendar management</span>
                    </li>
                  </ul>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Start Essential Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-lime-600 text-white px-4 py-1 font-semibold">Most Popular</Badge>
              </div>
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="flex items-center justify-center mb-4">
                    <FileText className="w-12 h-12 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Complete Content Department</h3>
                  <p className="text-3xl font-bold text-lime-600 mb-2">$70,000-$120,000</p>
                  <p className="text-gray-600 mb-4">annually</p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Growing businesses needing comprehensive content operations across multiple channels and markets. Complete department transfer including writers, editors, strategists, and coordinators.
                  </p>
                  <ul className="text-left space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">40-60+ articles monthly</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Multi-channel content strategy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Specialized industry writers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Complete operations management</span>
                    </li>
                  </ul>
                  <p className="text-xs text-gray-600 italic">vs $340,000+ local equivalent</p>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Transfer Your Department
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="flex items-center justify-center mb-4">
                    <BarChart className="w-12 h-12 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Enterprise Content Operations</h3>
                  <p className="text-3xl font-bold text-lime-600 mb-2">Custom</p>
                  <p className="text-gray-600 mb-4">Enterprise pricing</p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Large-scale operations needing comprehensive content across multiple brands, markets, and languages. Complete content operations with advanced analytics, compliance, and strategic planning.
                  </p>
                  <ul className="text-left space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">100+ articles monthly</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Multi-brand content systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Advanced compliance oversight</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Dedicated account executives</span>
                    </li>
                  </ul>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Enterprise Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <HelpCircle className="w-10 h-10 text-lime-600 mr-3" />
            Frequently Asked Questions: Content Writing Outsourcing
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How do you maintain brand consistency across outsourced content operations?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We systematically document your brand voice through recorded sessions, style guides, and content examples. The offshore team uses AI-enhanced workflows that maintain voice consistency across all content pieces. Regular reviews and feedback loops ensure brand alignment improves over time rather than degrading.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What happens to our existing content team during transition?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Transition is gradual and business-focused. Many businesses reassign content team members to higher-value strategic roles like customer relationship management, business development, or strategic planning. The offshore operations handle production while existing team members focus on strategy and relationship building.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How quickly can outsourced content operations scale for campaigns or business growth?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Content services outsourcing scales immediately without hiring delays. Need double content volume for a campaign? The team adjusts within days. Expanding to new markets? Additional team members integrate seamlessly using existing processes and brand documentation. No recruitment or training delays.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What oversight and control do we maintain over outsourced content operations?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  You maintain complete strategic oversight through monthly planning sessions, content calendar approvals, and performance reviews. The offshore team handles production execution while you control strategy, messaging, and quality standards. Think CEO oversight rather than daily management.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How does content outsourcing integrate with our existing marketing technology stack?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our content operations integrate with your existing CMS, marketing automation, social media management, and analytics tools. We adapt to your technology preferences rather than requiring platform changes. Integration setup is part of the transition process with ongoing technical support included.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What geographic markets can outsourced content operations support?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We specialize in Australian, New Zealand, and US market content with deep understanding of cultural nuances, regulatory requirements, and local business practices. Time zone alignment ensures real-time collaboration when needed. Content adapts to local market requirements while maintaining global brand consistency.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Why Choose ShoreAgents */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Award className="w-8 h-8 text-lime-600 mr-3" />
            Why Choose ShoreAgents for Content Writing Outsourcing
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            After 12+ years building offshore business processes and 500+ successful implementations, we've perfected the content operations transfer methodology that eliminates the problems that make traditional content departments expensive and ineffective.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="w-6 h-6 text-lime-600 mr-2" />
                  Proven BPO Methodology
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  12+ years perfecting offshore business process outsourcing across 500+ implementations. We know exactly how to transfer content operations while maintaining quality and strategic alignment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Building2 className="w-6 h-6 text-lime-600 mr-2" />
                  Enterprise Infrastructure
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Clark-based office with security guards, biometric access, backup power, and enterprise-grade technology. No home-based worker reliability issues or infrastructure concerns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Lightbulb className="w-6 h-6 text-lime-600 mr-2" />
                  Real Business Experience
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Stephen scaled content operations across 14 salespeople and 400 rentals using these exact methods. Real business experience, not theoretical consulting approaches.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Cpu className="w-6 h-6 text-lime-600 mr-2" />
                  AI Integration Expertise
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Advanced AI tools and methodologies that enhance content quality while reducing costs. We provide the specific technology stack that makes modern content outsourcing work.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-lime-200 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Operations Integration</h3>
              <p className="text-gray-700 leading-relaxed">
                We don't just provide content writing – we integrate with your complete business operations. Your content creation outsourcing team works seamlessly with other offshore departments, creating unified business operations rather than isolated services. Whether you need content operations only or want to explore virtual assistant services for other departments, we build scalable offshore operations that grow with your business.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Zap className="w-10 h-10 text-white mr-3" />
            Replace Your Content Department Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Stop hemorrhaging $300K+ annually on inefficient content departments. Transform to systematized offshore operations that scale with your business growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-20 rounded-lg p-4 text-white">
              <div className="text-4xl font-bold mb-2 text-white">70%</div>
              <div className="text-sm opacity-90 text-white">Cost Savings vs In-House</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 text-white">
              <div className="text-4xl font-bold mb-2 text-white">15-20</div>
              <div className="text-sm opacity-90 text-white">Articles Monthly Output</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 text-white">
              <div className="text-4xl font-bold mb-2 text-white">12+</div>
              <div className="text-sm opacity-90 text-white">Years BPO Expertise</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Book Your Content Operations Strategy Call
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold">
              See Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="text-sm mt-6 opacity-75">
            Transform from expensive, complex content departments to scalable offshore operations serving Australian, New Zealand, and US markets
          </p>
        </div>

      </div>
    </div>
  );
}
