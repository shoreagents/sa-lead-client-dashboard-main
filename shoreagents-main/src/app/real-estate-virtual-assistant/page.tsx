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
  X,
  HelpCircle,
  Briefcase,
  FileText,
  Lightbulb,
  Globe,
  Home,
  Eye,
  TrendingDown
} from 'lucide-react';
import Image from 'next/image';

export default function RealEstateVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge variant="destructive" className="mb-4 bg-red-600 text-white px-4 py-2 text-sm font-semibold flex items-center justify-center w-fit mx-auto">
            <AlertCircle className="w-4 h-4 mr-2" />
            CRITICAL: Real Estate Businesses Losing $50,000+ Annually on Inefficient Staffing
          </Badge>
          <p className="text-lg text-gray-600 mb-6">
            While smart real estate professionals scale with systematic real estate virtual assistant solutions, others get trapped by expensive local hiring, unreliable freelancers, and operational chaos. Don't become another statistic.
          </p>

          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Real Estate Virtual Assistant: 7 Brutal Truths Every Business Owner Must Know to Stop Bleeding Money and Scale Fast!
          </h1>

          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
              alt="Real estate professional with architectural plans and property documents representing virtual assistant services"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Successful Real Estate Placements</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">78%</div>
              <div className="text-gray-600 font-medium">Cost Savings vs Local Hiring</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">12+</div>
              <div className="text-gray-600 font-medium">Years Perfecting Our System</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">25%</div>
              <div className="text-gray-600 font-medium">Average Business Growth</div>
            </CardContent>
          </Card>
        </div>

        {/* Stephen's Story */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="w-10 h-10 text-red-600 mr-3" />
            Stephen's $150K Real Estate Disaster (And What I Learned)
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              Back in 2012, I made a $150,000 mistake that nearly killed my real estate business.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I thought I could just hire a "trained" real estate virtual assistant and everything would magically work. What I got instead was someone working from home with chickens in the background who would disappear for days.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              But here's what I learned from building a team of 5 offshore staff that helped me scale to 14 salespeople and 400 rentals before I sold that business…
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Let me tell you what happened when I first tried to hire a real estate virtual assistant in 2012. I was running my own real estate business – had built it up to 14 salespeople and 400 rentals. I thought I could just hire a "trained" VA and everything would work perfectly.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              What I got instead was a nightmare. The VA was working from home with rain on the tin roof during calls, power outages (brown outs), and I kid you not – grandma in the background with chickens and roosters crowing. She'd just disappear for days without explanation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold italic">
              The brutal truth? Most companies that guarantee "trained" real estate staff are selling you BS. There are too many variations between businesses. I had no processes documented, she had no idea what we did as a business, and the initial few weeks were pretty much terrible.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              That expensive lesson taught me everything about what actually works. After 12+ years and 500+ successful placements, I can tell you exactly what separates professional real estate virtual assistant companies from the disasters waiting to happen.
            </p>
          </div>
        </div>

        {/* What is a Real Estate VA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Briefcase className="w-8 h-8 text-lime-600 mr-3" />
            What is a Real Estate Virtual Assistant? (The Complete Definition)
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A real estate virtual assistant is a skilled remote professional who works exclusively for your real estate business, handling everything from administrative tasks to complex marketing campaigns. Unlike freelancers who juggle multiple clients, your virtual assistant becomes a dedicated team member focused solely on growing your business.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Whether you need a realtor virtual assistant for individual agent support, a real estate sales assistant for lead generation, a specialized transaction coordinator for closing management, a real estate marketing assistant for campaign execution, or a comprehensive real estate administrative assistant for daily operations – modern real estate virtual assistant companies provide complete solutions.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern real estate virtual assistant services handle sophisticated tasks including:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Lead generation and nurturing campaigns</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Social media management and content creation</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Transaction coordination and client communication</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Market analysis and property research</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">CRM management and database optimization</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Digital marketing and advertising management</span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6 font-semibold">
            The key difference between professional real estate virtual assistant companies and generic freelancers? Our real estate virtual assistant services include specialists who are specifically trained in real estate processes, terminology, and industry software – not generic admin workers trying to figure out your business on your time and dime.
          </p>
        </div>

        {/* Proven ROI */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <TrendingUp className="w-10 h-10 text-lime-600 mr-3" />
            Proven ROI: Why Smart Real Estate Professionals Choose Virtual Assistants
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
            The numbers don't lie. According to Salesforce research, businesses using virtual sales support see 43% higher conversion rates than traditional methods.
          </p>

          <Card className="border-lime-200 bg-white mb-6">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Benefits That Shock Most Business Owners</h3>
              <p className="text-gray-700 mb-4">When you hire a virtual real estate assistant, you unlock multiple revenue streams:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <DollarSign className="w-6 h-6 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Cost Reduction:</strong>
                    <span className="text-gray-700"> Save 60-75% compared to local hiring</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Revenue Multiplication:</strong>
                    <span className="text-gray-700"> Handle 3x more leads without working longer hours</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Efficiency Gains:</strong>
                    <span className="text-gray-700"> Focus on high-value activities like client meetings</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart className="w-6 h-6 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Scalability Without Overhead:</strong>
                    <span className="text-gray-700"> Grow your team without office space costs</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Your Free Real Estate VA Consultation
            </Button>
          </div>
        </div>

        {/* 7 Brutal Truths */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <Eye className="w-10 h-10 text-red-600 mr-3" />
            7 Brutal Truths About Real Estate Virtual Assistants (That Nobody Tells You)
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Before you hire a real estate virtual assistant, you need to hear these brutal truths. The industry is full of sugar-coated advice and unrealistic expectations. Here's what successful real estate business owners wish they knew before they started:
          </p>

          <div className="space-y-6">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
                  Brutal Truth #1: 90% of Real Estate Businesses Hire the Wrong Type of VA
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Most business owners think any virtual assistant can handle real estate tasks. WRONG. Generic VAs from freelance platforms will cost you deals, frustrate your clients, and waste months of your time.
                </p>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  The brutal reality? You need professional real estate virtual assistant companies with industry-trained specialists who understand your business from day one.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <DollarSign className="w-6 h-6 text-red-600 mr-2" />
                  Brutal Truth #2: You're Bleeding $50,000+ Per Year Without Realizing It
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Every hour your team spends on administrative tasks instead of revenue-generating activities costs you money. Conservative calculation: 20 hours weekly on admin tasks × $150/hour opportunity cost = $156,000 annual loss.
                </p>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  The brutal truth? While your team is scheduling appointments and entering data, your competitors are closing deals and scaling faster with dedicated real estate virtual assistant services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 text-red-600 mr-2" />
                  Brutal Truth #3: Freelancers Will Abandon You When You Need Them Most
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Freelancers disappear during your busiest months, leave without notice, and treat your business like a side hustle.
                </p>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  The brutal reality? Professional real estate virtual assistant companies provide backup support, management oversight, and long-term commitment that freelancers never will.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-red-600 mr-2" />
                  Brutal Truth #4: Most VAs Are Just Expensive Data Entry Clerks
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  If your real estate virtual assistant is only doing basic admin work, you're wasting money. Top-performing VAs generate leads, nurture prospects, manage complex marketing campaigns, and directly contribute to revenue growth.
                </p>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  The brutal truth? If your VA isn't making you money, they're costing you opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Globe className="w-6 h-6 text-red-600 mr-2" />
                  Brutal Truth #5: The Philippines Advantage Isn't About Cheap Labor
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Too many business owners focus on cost savings and miss the real advantage. According to World Bank data, the Philippines has the highest English proficiency in Asia and a culture built around service excellence.
                </p>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  The brutal reality? It's not about cheap labor – it's about accessing world-class talent at sustainable rates through professional real estate virtual assistant services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-red-600 mr-2" />
                  Brutal Truth #6: 80% of VA Failures Happen Because Business Owners Lack Scalable Systems
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Here's what real estate business owners don't want to admit: when real estate virtual assistant partnerships fail, it's because they're trying to scale a broken foundation.
                </p>
                <p className="text-gray-700 leading-relaxed font-semibold mb-3">The brutal reality of why real estate businesses fail with VAs:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">No standardized processes: Every transaction handled differently</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Unrealistic delegation: Expect VAs to manage what requires business owner decisions</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Poor management structure: No clear reporting lines or accountability</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Treating VAs as outsiders: Instead of integrating them into company culture</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <TrendingDown className="w-6 h-6 text-red-600 mr-2" />
                  Brutal Truth #7: Scaling Without VAs Means You'll Never Truly Scale
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Every successful real estate business reaches a ceiling where the owner becomes the bottleneck. You can't personally handle 200+ transactions per year while maintaining quality service.
                </p>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  The most brutal truth of all? Your business growth is limited by your willingness to delegate and scale through others. Business owners who refuse to hire real estate virtual assistants stay stuck in the same revenue bracket year after year while their competitors build empires.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Complete Solutions */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Briefcase className="w-8 h-8 text-lime-600 mr-3" />
            Complete Real Estate Virtual Assistant Solutions (Find Your Perfect Match)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Different real estate businesses need different real estate virtual assistant specializations. Professional real estate virtual assistant companies provide comprehensive solutions covering every aspect of your business:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Realtor Virtual Assistant Services</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Our realtor virtual assistant specialists support individual agents with lead management, client communication, and transaction coordination. Perfect for agents needing comprehensive support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real Estate Investment VAs</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Real estate investor assistants excel at property analysis, market research, deal sourcing, and managing renovation projects. Perfect for building and managing portfolios.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial Real Estate VAs</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Commercial real estate assistants handle complex commercial transactions, lease analysis, market research, and investor relations with sophisticated expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real Estate Marketing VAs</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Real estate marketing assistants create compelling content, manage social media campaigns, and execute digital marketing strategies that generate qualified leads.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transaction Coordinators</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Professional transaction coordinators manage the complex process from contract to closing, ensuring nothing falls through the cracks with compliance and deadline management.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Administrative Specialists</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Real estate administrative assistants handle daily operations, scheduling, client communication, and back-office tasks that keep your business running smoothly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pricing & ROI */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <DollarSign className="w-8 h-8 text-lime-600 mr-3" />
            Real Estate Virtual Assistant Pricing & ROI Analysis (2025 Complete Guide)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Entry Level</h3>
                <div className="text-3xl font-bold text-lime-600 mb-2">$800-1,200</div>
                <p className="text-sm text-gray-600 mb-4">per month</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-700">• Administrative support and basic tasks</li>
                  <li className="text-gray-700">• Email management and scheduling</li>
                  <li className="text-gray-700">• Data entry and CRM management</li>
                  <li className="text-gray-700">• Perfect for new businesses</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-lime-600 text-white px-4 py-1 font-semibold">Most Popular</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Level</h3>
                <div className="text-3xl font-bold text-lime-600 mb-2">$1,200-1,800</div>
                <p className="text-sm text-gray-600 mb-4">per month</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-700">• Lead generation and nurturing</li>
                  <li className="text-gray-700">• Social media management</li>
                  <li className="text-gray-700">• Transaction coordination</li>
                  <li className="text-gray-700">• Ideal for established businesses</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Specialist Level</h3>
                <div className="text-3xl font-bold text-lime-600 mb-2">$1,800-2,500</div>
                <p className="text-sm text-gray-600 mb-4">per month</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-700">• Advanced marketing management</li>
                  <li className="text-gray-700">• Complex project coordination</li>
                  <li className="text-gray-700">• Specialized skills (design/video)</li>
                  <li className="text-gray-700">• Perfect for high-volume businesses</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-lime-200 bg-white">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ROI Calculator: Your Investment vs Returns</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-700 mb-2"><strong>Monthly Investment:</strong> $1,500 (Professional Level VA)</p>
                  <p className="text-gray-700 mb-2"><strong>Time Saved:</strong> 60 hours/month</p>
                  <p className="text-gray-700 mb-2"><strong>Your Hourly Value:</strong> $150/hour</p>
                  <p className="text-gray-700 mb-2"><strong>Direct Time Value:</strong> $9,000/month</p>
                </div>
                <div className="bg-lime-100 rounded-lg p-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-lime-600 mb-2">$90,000</div>
                    <div className="text-gray-700 font-semibold">Net ROI per Year</div>
                    <p className="text-sm text-gray-600 mt-2">Plus increased deal flow & better work-life balance!</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-6">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 font-semibold">
              <DollarSign className="mr-2 h-5 w-5" />
              See Complete Pricing & ROI Breakdown
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <HelpCircle className="w-10 h-10 text-lime-600 mr-3" />
            Frequently Asked Questions About Real Estate Virtual Assistants
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How much does a real estate virtual assistant cost?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Professional real estate virtual assistant services typically range from $800-2,500 monthly depending on experience level and specialization. This represents a 60-75% cost saving compared to local hiring while providing dedicated, trained support.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What's the difference between real estate virtual assistant companies and freelancers?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Real estate virtual assistant companies provide professional office environments, backup support, ongoing management, and industry-specific training. Freelancers work independently with no support structure or guarantees.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Can a real estate virtual assistant help with lead generation?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Absolutely! Professional real estate virtual assistants excel at lead generation including cold calling, social media management, email campaigns, CRM optimization, and follow-up systems that convert prospects into clients.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How quickly can I get started with a real estate virtual assistant?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  With professional real estate virtual assistant companies, you can typically start within 1-2 weeks. This includes consultation, candidate matching, interviews, and onboarding with full system integration.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Do real estate virtual assistants work in my time zone?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes! Our real estate virtual assistants can work in your preferred time zone or overlap hours. Philippines-based VAs provide excellent coverage for US, Australian, and New Zealand business hours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What if my real estate virtual assistant doesn't work out?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Professional real estate virtual assistant companies provide replacement guarantees and ongoing support. If there's a fit issue, we'll work with you to find the right match without additional recruitment fees.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Why Choose ShoreAgents */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Award className="w-8 h-8 text-lime-600 mr-3" />
            Why Choose ShoreAgents for Your Real Estate Virtual Assistant Needs
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            ShoreAgents isn't just another real estate virtual assistant company – we're the only BPO built specifically for real estate by real estate professionals who understand exactly what you need to scale your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Home className="w-6 h-6 text-lime-600 mr-2" />
                  Real Estate DNA
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Founded and managed by Stephen Atcheler, who built and scaled multiple real estate businesses before creating ShoreAgents. We understand your challenges because we've lived them.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Users className="w-6 h-6 text-lime-600 mr-2" />
                  Pre-Trained Talent Pool
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every real estate virtual assistant receives comprehensive real estate training before joining our talent pool. No learning curve on your time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Shield className="w-6 h-6 text-lime-600 mr-2" />
                  Ongoing Support
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Unlike freelance platforms, we provide continuous support, training, and management to ensure your VA's success with 24/7 technical and operational support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Award className="w-6 h-6 text-lime-600 mr-2" />
                  Proven Track Record
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Over 500 successful client partnerships with documented results and transformations. Real businesses, real growth, real success stories.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Zap className="w-10 h-10 text-white mr-3" />
            Take Action: Transform Your Real Estate Business Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            The evidence is overwhelming. Successful real estate professionals are scaling their businesses, increasing their income, and improving their work-life balance with professional real estate virtual assistants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Your Free Consultation
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold">
              Review Transparent Pricing
              <DollarSign className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-sm opacity-75">
            Your real estate virtual assistant is waiting. Your transformation starts today.
          </p>
        </div>

      </div>
    </div>
  );
}
