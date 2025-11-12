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
  Building2,
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
  FileText,
  AlertCircle,
  Search,
  Globe,
  BarChart,
  TrendingDown,
  X,
  HelpCircle,
  Briefcase
} from 'lucide-react';
import Image from 'next/image';

export default function SEOOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <Badge className="bg-red-600 text-white px-4 py-2 text-lg hover:bg-red-700">
              🚨 CRITICAL: Businesses Losing $50,000+ Annually on Failed SEO Outsourcing
            </Badge>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            SEO Outsourcing
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            While smart businesses leverage SEO outsourcing with skilled virtual assistants to dominate search results at 70% cost savings, others are getting trapped by agencies that promise everything but deliver nothing. Don't become another SEO outsourcing disaster story.
          </p>
          
          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
              alt="SEO outsourcing with analytics dashboard showing ranking improvements and traffic growth"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Book a Strategy Call
            </Button>
            <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg font-semibold">
              How It Works
            </Button>
            <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg font-semibold">
              <DollarSign className="w-5 h-5 mr-2" />
              See Pricing
            </Button>
          </div>
        </div>

        {/* Key Stats Grid */}
        <div className="bg-gradient-to-br from-lime-50 to-lime-100 rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">70-85%</span>
              </div>
              <p className="text-gray-700 font-medium">Cost Savings vs Local SEO Agencies</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">6-8 Weeks</span>
              </div>
              <p className="text-gray-700 font-medium">To See Ranking Improvements</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <BarChart className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">400%</span>
              </div>
              <p className="text-gray-700 font-medium">Average Traffic Increase</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">85%</span>
              </div>
              <p className="text-gray-700 font-medium">Clients Expand to Additional Services</p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-16 h-16 bg-lime-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Stephen Atcheler, CEO of ShoreAgents</h3>
              <p className="text-sm text-gray-600">500+ Successful Virtual Assistant Placements</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              I've watched businesses waste over $200,000 on failed SEO outsourcing before discovering what actually works. After managing 500+ successful virtual assistant placements, I've learned the hard truth: most SEO agencies charge premium prices while secretly outsourcing the work to cheap providers anyway.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              The businesses dominating search results in 2025 aren't paying $15,000+ monthly to agencies that outsource everything. They're implementing smart SEO outsourcing by hiring skilled virtual assistants directly – getting superior results at 70% cost savings while maintaining full control.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you need SEO virtual assistants for technical optimization, content creation, or link building campaigns, our proven offshore staffing methodology connects you directly with skilled professionals who work as your dedicated team members, not disappearing contractors.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white font-semibold">
            <Phone className="w-5 h-5 mr-2" />
            Schedule Your SEO Outsourcing Consultation
          </Button>
        </div>

        {/* Stephen's $75K Disaster Story */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="w-10 h-10 text-red-600 mr-3" />
            My $75,000 SEO Outsourcing Disaster (And What I Learned)
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Early in my business, I made the classic mistake that most business owners make with SEO outsourcing. I thought I could just hire a local agency and they'd handle everything professionally. Over 18 months, I spent $75,000 on three different Australian SEO agencies, each promising to be "different" from the last.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The first agency charged $8,000 monthly for "comprehensive SEO services." After 6 months, we had zero ranking improvements. Then I discovered the truth: they were outsourcing all the actual work to a $500/month team overseas while pocketing the 1600% markup. The second agency used black-hat tactics that nearly got us penalized by Google.
            </p>
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Real Disaster</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A Melbourne real estate agency hired a "premium" agency charging $12,000 monthly. The agency was secretly outsourcing everything to cheap providers who used automated tools and bought spam backlinks. When Google's algorithm update hit, their organic traffic dropped 85% overnight.
              </p>
              <p className="text-gray-900 font-bold">
                It took us 8 months to clean up the mess, disavow thousands of toxic links, and rebuild their search authority. That "premium" SEO outsourcing relationship cost them over $200,000 in lost business and recovery efforts.
              </p>
            </div>
            <div className="bg-lime-50 border-l-4 border-lime-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Breakthrough</h3>
              <p className="text-gray-700 leading-relaxed">
                The breakthrough came when I realized agencies outsource anyway – they just add massive markups and remove your control. Smart SEO outsourcing means hiring skilled virtual assistants directly. Now we provide access to dedicated Philippines-based SEO specialists who work as your team members, not agency subcontractors, delivering superior results at a fraction of the cost.
              </p>
            </div>
          </div>
        </div>

        {/* What's Broken */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <X className="w-10 h-10 text-red-600 mr-3" />
            What's Broken in Traditional SEO Outsourcing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="w-7 h-7 text-red-600 mr-2" />
                  The Agency Markup Trap
                </h3>
                <p className="text-gray-700 mb-4">
                  Here's the dirty secret: most local SEO agencies outsource 80% of their work to offshore teams anyway. They charge you $12,000-15,000 monthly for "premium services" while paying $2,000-3,000 for the actual work.
                </p>
                <p className="text-gray-700 font-semibold">
                  A Brisbane property developer was paying $8,000 monthly to a "boutique" agency that was secretly outsourcing everything to a $500/month team in India. The agency was taking a 1600% markup!
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <X className="w-7 h-7 text-red-600 mr-2" />
                  The "Black Box" Problem
                </h3>
                <p className="text-gray-700 mb-4">
                  Traditional SEO outsourcing through agencies keeps you in the dark. You get monthly reports with pretty graphs, but you have no idea who's actually doing the work. No access to the team. No control over quality. No transparency about methods being used.
                </p>
                <p className="text-gray-700 font-semibold">
                  When problems arise, the agency blames "algorithm changes" while you watch your rankings disappear.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <TrendingDown className="w-7 h-7 text-red-600 mr-2" />
                  The Cheap Provider Problem
                </h3>
                <p className="text-gray-700 mb-4">
                  To maintain their margins, agencies often outsource to the cheapest providers they can find – usually unqualified teams using dangerous shortcuts. These providers focus on quick results rather than sustainable strategies, putting your business at risk.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="w-7 h-7 text-red-600 mr-2" />
                  The Talent Quality Gap
                </h3>
                <p className="text-gray-700 mb-4">
                  Since agencies prioritize cost over quality, they often work with SEO providers who don't understand Western business practices, cultural nuances, or industry-specific requirements.
                </p>
                <p className="text-gray-700 font-semibold">
                  You end up with generic, template-based strategies that don't match your business needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* The Solution */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <Zap className="w-10 h-10 text-lime-600 mr-3" />
            The ShoreAgents SEO Outsourcing Solution
          </h2>
          <p className="text-2xl text-gray-700 text-center mb-8">
            Skilled SEO virtual assistants + direct hiring + proven management = Superior results at 70% cost savings with full control
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Find Your SEO Virtual Assistant
            </Button>
            <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold">
              <DollarSign className="w-5 h-5 mr-2" />
              View Investment Options
            </Button>
          </div>

          <div className="bg-white rounded-lg p-6">
            <p className="text-lg text-gray-900 font-semibold text-center italic">
              "Smart SEO outsourcing means hiring skilled virtual assistants directly rather than paying agency markups for the same offshore work."
            </p>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-lime-600 mr-3" />
            Our Smart SEO Outsourcing Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-lime-600">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Strategic Talent Matching (Week 1)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Instead of generic SEO outsourcing, we match you with skilled virtual assistants who specialize in your industry. Every candidate goes through comprehensive evaluation.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Industry-specific SEO knowledge assessment</li>
                  <li>• Technical skills evaluation and certification</li>
                  <li>• Business strategy alignment and goal setting</li>
                  <li>• Communication and cultural fit verification</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-lime-600">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Direct Integration (Week 2)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Your SEO virtual assistant integrates directly with your business – no agency middleman. They work as your dedicated team member.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Complete business and market analysis</li>
                  <li>• Competitive research and opportunity identification</li>
                  <li>• Technical SEO audit and strategy development</li>
                  <li>• Content strategy aligned with business objectives</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-lime-600">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Systematic Implementation (Week 3+)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Your virtual assistant implements comprehensive SEO strategies with full transparency. You have direct access and complete visibility.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Technical SEO optimization and site improvements</li>
                  <li>• Content creation and optimization campaigns</li>
                  <li>• Strategic link building and outreach programs</li>
                  <li>• Performance monitoring and strategy refinement</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-lime-600">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Scaling & Expansion (Ongoing)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  As your business grows, we can add complementary virtual assistants to create a complete digital marketing team.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Team expansion with complementary specialists</li>
                  <li>• Advanced SEO strategy development</li>
                  <li>• Integration with content marketing and social media</li>
                  <li>• Long-term strategic planning and monitoring</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Philippines */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Globe className="w-8 h-8 text-lime-600 mr-3" />
            Why Philippines SEO Outsourcing Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Perfect Timezone Alignment</h3>
              <p className="text-gray-700 leading-relaxed">
                While Australian clients sleep, your SEO virtual assistant is working – analyzing performance, creating content, building links, monitoring rankings. You wake up to fresh reports and overnight progress. For US clients, we provide real-time support during business hours.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Superior Cultural and Language Skills</h3>
              <p className="text-gray-700 leading-relaxed">
                Filipino SEO specialists understand Western business culture and write excellent English content. They grasp the nuances of Australian, New Zealand, and US markets – creating content that resonates with local audiences.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality vs. Cheap Providers</h3>
              <p className="text-gray-700 leading-relaxed">
                Unlike agencies that use the cheapest providers, we select skilled professionals who understand that SEO is a long-term strategy. Our virtual assistants are detail-oriented, patient, and committed to sustainable results.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Team Members</h3>
              <p className="text-gray-700 leading-relaxed">
                Your SEO virtual assistant works exclusively for you – not juggling multiple clients like agency subcontractors. They understand your business deeply and are invested in your long-term success.
              </p>
            </div>
          </div>
        </div>

        {/* Service Options */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <Briefcase className="w-10 h-10 text-lime-600 mr-3" />
            SEO Outsourcing Virtual Assistant Options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">SEO Virtual Assistant</h3>
                  <p className="text-gray-600 mb-4">
                    Perfect for businesses getting started with professional SEO outsourcing through skilled virtual assistants.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 text-left mb-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dedicated SEO specialist (40 hours/week)</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Technical SEO audits and optimization</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Keyword research and content strategy</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Link building and outreach campaigns</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Hire SEO Virtual Assistant
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-xl transition-shadow bg-lime-50 h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <Badge className="bg-lime-600 text-white mb-4">MOST POPULAR</Badge>
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">SEO Team Outsourcing</h3>
                  <p className="text-gray-600 mb-4">
                    For growing businesses needing comprehensive SEO outsourcing with specialized virtual assistants.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 text-left mb-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>SEO specialist + content writer + link builder</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Advanced technical SEO and optimization</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Content marketing and strategy integration</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Comprehensive analytics and reporting</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Build SEO Team
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Digital Marketing Outsourcing</h3>
                  <p className="text-gray-600 mb-4">
                    For established businesses needing complete digital marketing outsourcing with SEO as the foundation.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 text-left mb-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Complete digital marketing team</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>SEO + content + social + PPC specialists</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Multi-channel campaign management</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Advanced performance tracking</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Scale Digital Marketing
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Award className="w-8 h-8 text-lime-600 mr-3" />
            Real Client Success: Brisbane Property Developer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <X className="w-6 h-6 text-red-600 mr-2" />
                BEFORE (18 Months)
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>$8,000 monthly to local SEO agency</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Zero rankings for property keywords</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>20 organic visitors monthly</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>No access to actual SEO team</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Black box reporting with no transparency</span>
                </li>
              </ul>
            </div>

            <div className="bg-lime-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-lime-600 mr-2" />
                AFTER (6 Months)
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>$2,800 monthly for dedicated SEO VA</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Page 1 for "Brisbane property development"</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>400% increase in organic traffic</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Direct daily communication with SEO specialist</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Complete transparency and control</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              "We were skeptical about SEO outsourcing after our agency disaster. But having a dedicated virtual assistant who works directly with us changed everything. We have complete control and transparency, plus results that our expensive agency never delivered."
            </p>
          </div>
        </div>

        {/* Investment Comparison */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <DollarSign className="w-8 h-8 text-lime-600 mr-3" />
            SEO Outsourcing Investment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Local SEO Agencies</h3>
              <div className="text-5xl font-bold text-red-600 mb-2">$12,000-15,000</div>
              <p className="text-gray-600">Monthly (they outsource anyway)</p>
            </div>

            <div className="text-center p-6 bg-lime-50 rounded-lg border-4 border-lime-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">SEO Virtual Assistant</h3>
              <div className="text-5xl font-bold text-lime-600 mb-2">$14,300</div>
              <p className="text-gray-600">Annual (direct access)</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Your Savings</h3>
              <div className="text-5xl font-bold text-green-600 mb-2">90%+</div>
              <p className="text-gray-600">Cost reduction</p>
            </div>
          </div>

          <p className="text-center text-lg text-gray-700 mt-8">
            Stop paying agency markups for outsourced work. Get skilled SEO virtual assistants directly with full transparency and control.
          </p>
        </div>

        <div className="text-center mb-16">
          <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white font-semibold">
            <DollarSign className="w-5 h-5 mr-2" />
            See Complete Pricing Options
          </Button>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <HelpCircle className="w-10 h-10 text-lime-600 mr-3" />
            SEO Outsourcing FAQ
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How is your SEO outsourcing different from agencies?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most agencies outsource the work anyway while charging premium prices. We connect you directly with skilled SEO virtual assistants, eliminating agency markups and giving you full control. You save 70-90% while getting better results because your specialist works exclusively for you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What makes Philippines SEO outsourcing better than other countries?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Filipino SEO specialists excel at English writing and understand Western business culture. They're naturally detail-oriented and patient – perfect for SEO's long-term nature. Plus, timezone alignment means while you sleep, your SEO work continues, giving you overnight progress.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How do you ensure quality without agency oversight?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We provide three-layer quality control: Philippines team lead oversight, Australian management validation, and monthly reviews. Plus, you have direct access to your specialist, so you can see exactly what's being done and provide feedback immediately.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Can I scale my SEO outsourcing as my business grows?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Absolutely. 85% of our clients expand to additional virtual assistants. We can build your complete digital marketing team with SEO specialists, content writers, social media managers, and PPC experts who work together seamlessly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What if my SEO virtual assistant doesn't work out?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Unlike agencies where you're stuck with whoever they assign, we ensure proper matching upfront. If there are any issues, we can replace your specialist quickly. Our comprehensive management system ensures long-term success and retention.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How quickly can I see results with SEO outsourcing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our clients typically see ranking improvements in 6-8 weeks versus 6-12 months with traditional agencies. Your dedicated specialist begins with comprehensive analysis within 2 weeks and starts implementation immediately, while agencies often take months just to get started.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What SEO tools and software do your virtual assistants use?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our SEO specialists are proficient in industry-standard tools including Ahrefs, SEMrush, Screaming Frog, Google Analytics, Search Console, and more. We can work with your existing tool stack or recommend cost-effective alternatives that deliver professional results.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Do you handle local SEO for specific geographic markets?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, our SEO virtual assistants specialize in local search optimization for Australian, New Zealand, and US markets. They understand regional search patterns, local citation building, Google My Business optimization, and geographic-specific SEO strategies that drive local traffic and conversions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Zap className="w-10 h-10 text-white mr-3" />
            Ready for Smart SEO Outsourcing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Stop paying agency markups for outsourced work. Get skilled SEO virtual assistants directly with full transparency and control at 90% cost savings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Schedule SEO Consultation
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold">
              <Users className="w-5 h-5 mr-2" />
              Find SEO Virtual Assistant
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75 italic">
            "The future of SEO belongs to businesses that hire skilled virtual assistants directly, not those paying agency markups for the same offshore work."
          </p>
        </div>

        {/* Related Services */}
        <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Complete Outsourcing & Virtual Assistant Solutions
          </h2>
          <p className="text-xl text-gray-700 text-center mb-8">
            SEO outsourcing is part of our comprehensive business solutions. Discover our complete outsourcing services and specialized virtual assistant solutions that work together seamlessly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-lime-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Search className="w-6 h-6 text-lime-600 mr-2" />
                  SEO Virtual Assistant
                </h3>
                <p className="text-gray-700 mb-3">
                  Dedicated SEO specialists who work as your team members.
                </p>
                <a href="#" className="text-lime-600 hover:text-lime-700 font-semibold flex items-center">
                  SEO Virtual Assistant →
                </a>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <FileText className="w-6 h-6 text-lime-600 mr-2" />
                  Content Marketing
                </h3>
                <p className="text-gray-700 mb-3">
                  Complement your SEO with strategic content creation.
                </p>
                <a href="#" className="text-lime-600 hover:text-lime-700 font-semibold flex items-center">
                  Content Writing Services →
                </a>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <BarChart className="w-6 h-6 text-lime-600 mr-2" />
                  Digital Marketing
                </h3>
                <p className="text-gray-700 mb-3">
                  Build complete digital marketing teams with SEO as foundation.
                </p>
                <a href="#" className="text-lime-600 hover:text-lime-700 font-semibold flex items-center">
                  Digital Marketing Services →
                </a>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Globe className="w-6 h-6 text-lime-600 mr-2" />
                  Website Development
                </h3>
                <p className="text-gray-700 mb-3">
                  SEO-optimized websites built by skilled developers.
                </p>
                <a href="#" className="text-lime-600 hover:text-lime-700 font-semibold flex items-center">
                  Website Outsourcing →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
