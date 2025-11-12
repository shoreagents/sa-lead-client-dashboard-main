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
  Calculator,
  FileCheck,
  UserCheck,
  Settings,
  Lightbulb,
  Globe,
  Building2,
  Layers,
  FileText
} from 'lucide-react';
import Image from 'next/image';

export default function BookkeepingOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge variant="destructive" className="mb-4 bg-red-600 text-white px-4 py-2 text-sm font-semibold flex items-center justify-center w-fit mx-auto">
            <AlertCircle className="w-4 h-4 mr-2" />
            CRITICAL: Australian Businesses Hemorrhaging $87,000+ Annually on Broken Bookkeeping Services
          </Badge>
          <p className="text-lg text-gray-600 mb-6">
            While smart businesses dominate with systematic bookkeeping outsourcing and offshore bookkeeping services, others get destroyed by $70/hour local bookkeepers demanding endless questions. Stop the financial bleeding NOW.
          </p>

          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Bookkeeping Outsourcing: Ultimate 2025 Proven System – Eliminate $87,000+ Annual Losses
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            From Stephen Atcheler's personal $150K bookkeeping disaster to revolutionizing financial bookkeeping outsourcing for 500+ businesses across Australia, New Zealand, and USA – the complete systematic solution.
          </p>

          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop"
              alt="Professional bookkeeper working with financial documents, calculator and laptop showing accounting software"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Book Your Bookkeeping Transformation Call
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
              <div className="text-4xl font-bold text-lime-600 mb-2">82%</div>
              <div className="text-gray-600 font-medium">Cost Savings vs Local Bookkeeping</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Successful BPO Placements</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">$12,800</div>
              <div className="text-gray-600 font-medium">Annual Cost vs $72,000+ Local</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">14</div>
              <div className="text-gray-600 font-medium">Days Average Setup</div>
            </CardContent>
          </Card>
        </div>

        {/* Stephen's $150K Nightmare Story */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="w-10 h-10 text-red-600 mr-3" />
            My $150,000 Bookkeeping Nightmare – Why I Created This System
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm Stephen Atcheler, and before I revolutionized professional bookkeeping outsourcing for hundreds of businesses, I nearly went bankrupt from my own bookkeeping incompetence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Back in 2010-11, I owned Rebel Estate Agents after converting from Just Results Property. My journey went Ray White employee → Metro City Realty → REMAX contractor → business owner. At 20 years old, I was entrepreneurial but absolutely clueless about small business bookkeeping outsourcing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold italic">
              The Breaking Point: "I was doing bookkeeping at night after selling all day, then introduced staff and had no clue about payroll or chart of accounts. I was pretty shitty at bookkeeping – that's being honest."
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Enter the local bookkeeper solution. $70 per hour. Seemed reasonable until reality hit – she'd ask me a million questions about where receipts went, how to categorize expenses, basically everything. I was paying premium rates while still doing half the work myself.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Then my business expanded into property management. More payroll, more complexity. She started coming four days a week, six hours daily. Do the math: $1,680 weekly, over $87,000 annually just for bookkeeping services outsourcing that still required constant management.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'd been experimenting with outsourcing for sales admin, so I thought I'd try it for bookkeeping. Found a company in Manila called DVP specializing in offshore bookkeeping services. The difference was immediate – not just cost, but competence and independence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold italic">
              The Cultural Advantage: "If their mum didn't make them become a nurse, they probably ended up being an accountant or bookkeeper. The Philippines has incredible financial talent."
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Back then, training was harder – limited software, no AI tools, more manual processes. Today's cloud bookkeeping outsourcing with Xero, QuickBooks, and AI training systems makes implementation seamless. You can even create custom ChatGPT bots specifically for your bookkeeping processes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From that $150,000 mistake, I built the systematic approach that's now transformed 500+ businesses. Every painful lesson learned, every mistake avoided, every efficiency gained – it's all built into our bookkeeping outsourcing methodology.
            </p>
          </div>
        </div>

        {/* Cost Savings Analysis */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <DollarSign className="w-10 h-10 text-lime-600 mr-3" />
            Bookkeeping Outsourcing Cost Savings Analysis
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <X className="w-6 h-6 text-red-600 mr-2" />
                  Traditional Local Bookkeeping
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Hourly Rate:</span>
                    <span className="font-bold">$70/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekly Hours:</span>
                    <span className="font-bold">24 hours (4 days × 6 hours)</span>
                  </div>
                  <div className="flex justify-between text-xl text-red-600 font-bold border-t-2 border-red-200 pt-3">
                    <span>Annual Cost:</span>
                    <span>$87,360</span>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-red-200">
                    <p className="font-bold mb-2">Additional Costs:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Recruitment: $5,000</li>
                      <li>• Training Time: $8,000</li>
                      <li>• Management Overhead: $12,000</li>
                      <li>• Equipment/Software: $3,000</li>
                    </ul>
                  </div>
                  
                  <div className="flex justify-between text-2xl text-red-600 font-bold border-t-2 border-red-300 pt-3 mt-4">
                    <span>Total Annual Cost:</span>
                    <span>$115,360</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-lime-600 mr-2" />
                  ShoreAgents Bookkeeping Outsourcing
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Annual Rate:</span>
                    <span className="font-bold">$12,800</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Availability:</span>
                    <span className="font-bold">Full-time dedicated</span>
                  </div>
                  <div className="flex justify-between text-xl text-lime-600 font-bold border-t-2 border-lime-200 pt-3">
                    <span>Setup Fee:</span>
                    <span>$2,500 (one-time)</span>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-lime-200">
                    <p className="font-bold mb-2">Included Services:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• AI-powered recruitment</li>
                      <li>• Custom training & integration</li>
                      <li>• Ongoing management</li>
                      <li>• Technology setup & support</li>
                    </ul>
                  </div>
                  
                  <div className="flex justify-between text-2xl text-lime-600 font-bold border-t-2 border-lime-300 pt-3 mt-4">
                    <span>Total Annual Cost:</span>
                    <span>$15,300</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Savings Calculation */}
          <Card className="border-lime-200 bg-gradient-to-br from-lime-600 to-green-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">Annual Savings Calculation</h3>
              <div className="text-5xl font-bold mb-2">$100,060</div>
              <p className="text-xl mb-4">Annual Savings</p>
              <p className="text-lg opacity-90">That's 87% cost reduction while improving quality and reliability</p>
            </CardContent>
          </Card>

          {/* ROI Beyond Cost */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Time Recovery</h4>
                <p className="text-sm text-gray-700">Eliminate 10+ hours weekly spent managing local bookkeepers</p>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Accuracy Improvement</h4>
                <p className="text-sm text-gray-700">Reduce errors by 60-80% through systematic processes</p>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Scalability</h4>
                <p className="text-sm text-gray-700">Add specialized functions without exponential cost increases</p>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Technology Access</h4>
                <p className="text-sm text-gray-700">Leverage AI tools and cloud integration unavailable traditionally</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Traditional Services Fail */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <X className="w-10 h-10 text-red-600 mr-3" />
            Why Traditional Bookkeeping Services Destroy Australian Businesses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
                  The $70/Hour Question Trap That Kills Productivity
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every Australian business owner falls into this trap: hire a local bookkeeper thinking you're getting expert financial bookkeeping outsourcing. Instead, you get endless questions, constant interruptions, and someone who needs your input for basic decisions. "Where's this receipt?" "How should I categorize this?" You're paying premium rates while providing the expertise yourself.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <TrendingDown className="w-6 h-6 text-red-600 mr-2" />
                  The Scalability Death Spiral
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Start with basic bookkeeping at $35,000 annually. Add payroll processing – another $25,000. Need accounts payable management – $20,000 more. Require financial reporting expertise – additional $30,000. Suddenly you're spending $110,000+ for what bookkeeping BPO services deliver at $20,000 total.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Settings className="w-6 h-6 text-red-600 mr-2" />
                  Technology Resistance and Software Limitations
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Local bookkeepers resist cloud-based systems, avoid automation, and lack training in modern platforms. They prefer familiar manual processes that increase billable hours while decreasing efficiency. Meanwhile, Philippines-based professionals excel in Xero, QuickBooks, MYOB, and integrated AI tools.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Globe className="w-6 h-6 text-red-600 mr-2" />
                  Geographic Talent Shortage in Australia
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Sydney, Melbourne, Brisbane, and Perth businesses compete for limited qualified bookkeepers. This creates artificial scarcity, inflated prices, and declining service quality. The Philippines offers abundant English-speaking, university-educated financial professionals specifically trained for Australian bookkeeping outsourcing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* The ShoreAgents Revolution */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <Zap className="w-10 h-10 text-lime-600 mr-3" />
            The ShoreAgents Bookkeeping Outsourcing Revolution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <UserCheck className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">AI-Powered Recruitment</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We don't post ads and hope for the best. Our systematic recruitment includes video interviews with every potential bookkeeper. We transcribe these interviews, analyze responses, and use AI matching to ensure perfect cultural and technical fit.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Proven Client Success</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Team Urban X operates seven staff across their financial departments. Gallery Homes needed construction bookkeeping outsourcing for their large finance department. Our specialists understand industry-specific requirements from day one.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Custom AI Training Systems</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We create custom ChatGPT training bots specifically programmed with your chart of accounts, business processes, and industry requirements. Your bookkeeper has instant access to expert-level guidance 24/7.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Building2 className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Specialized Industry Expertise</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Real Estate Specialists understand trust accounts and commission structures. Construction Experts handle progress claims and retention management. Professional Services specialists manage time-based billing and project profitability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Layers className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Scalable Team Integration</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Start with one specialist, scale to complete financial departments. Our bookkeeping back office outsourcing grows with your business – accounts payable, receivable, payroll, and financial reporting all integrate seamlessly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Quality Control Excellence</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We've spent years perfecting cultural integration for Australian businesses. Our specialists understand local business practices, communication styles, and quality expectations. They think strategically about your financial operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Levels */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <Briefcase className="w-10 h-10 text-lime-600 mr-3" />
            Complete Bookkeeping Outsourcing Service Levels
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="flex items-center justify-center mb-4">
                    <UserCheck className="w-12 h-12 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Entry Level</h3>
                  <p className="text-3xl font-bold text-lime-600 mb-2">$12,800</p>
                  <p className="text-gray-600 mb-4">annually</p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Perfect for growing businesses needing reliable professional bookkeeping outsourcing without local premium costs. Your dedicated specialist handles data entry, bank reconciliations, invoicing, expense categorization, and monthly financial reporting.
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-6">
                    Includes complete setup, industry-specific training, ongoing management, and direct communication channels. 82% cost savings with superior specialization.
                  </p>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Start with One Bookkeeper
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
                    <Users className="w-12 h-12 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Growth Level</h3>
                  <p className="text-3xl font-bold text-lime-600 mb-2">$45,000</p>
                  <p className="text-gray-600 mb-4">Specialized Financial Team</p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Established businesses requiring comprehensive bookkeeping services outsourcing across multiple functions. Build specialized teams handling accounts payable, accounts receivable, payroll processing, and financial reporting.
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    Team approach ensures coverage, deep specialization, and collaborative efficiency while maintaining 70-85% cost savings.
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    vs $280,000+ local equivalent
                  </p>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Build Your Financial Team
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Enterprise Level</h3>
                  <p className="text-3xl font-bold text-lime-600 mb-2">Custom</p>
                  <p className="text-gray-600 mb-4">Complete Financial Operations</p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Large-scale operations requiring enterprise-grade bookkeeping BPO services with advanced security, compliance management, and sophisticated reporting capabilities. Complete integration with existing ERP systems.
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-6">
                    Perfect for businesses with $5M+ revenue needing sophisticated financial operations without Sydney or Melbourne overhead costs. Includes executive-level financial analysis and strategic reporting.
                  </p>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Enterprise Financial Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Software-Specific Expertise */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Settings className="w-8 h-8 text-lime-600 mr-3" />
            Software-Specific Bookkeeping Outsourcing Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Xero Bookkeeping Outsourcing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our Xero bookkeeping outsourcing specialists are certified in advanced features including bank feed management, automated reconciliations, multi-currency handling, and project tracking. They understand Australian tax requirements, BAS preparation, and local banking integration.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">QuickBooks Bookkeeping Outsourcing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Comprehensive QuickBooks bookkeeping outsourcing covering both Online and Desktop versions. Our specialists excel in chart of account optimization, inventory management, job costing, and advanced reporting for construction and professional services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">MYOB and Sage Specialization</h3>
                <p className="text-gray-700 leading-relaxed">
                  Expert MYOB bookkeeping outsourcing and Sage bookkeeping outsourcing for businesses with established systems. Our specialists handle complex migrations, advanced reporting, and integration with industry-specific add-ons plus Australian compliance knowledge.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <Clock className="w-10 h-10 text-lime-600 mr-3" />
            30-60-90 Day Bookkeeping Outsourcing Implementation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-lime-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-lime-600 font-bold text-xl">1-14</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Comprehensive Assessment and Matching</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Deep dive into your current bookkeeping challenges, software systems, industry requirements, and growth plans. Our AI-powered matching system evaluates video-interviewed candidates against your specific criteria. Every potential bookkeeper is scored on technical skills, communication style, industry experience, and cultural fit.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-lime-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-lime-600 font-bold text-xl">15-30</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Integration and Custom Training</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Your selected specialist undergoes intensive training on your specific systems, processes, and business requirements. We create custom AI training bots programmed with your chart of accounts, approval workflows, and industry-specific procedures. Unlike traditional training that takes months, our systematic approach has your bookkeeper productive from day one.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-lime-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-lime-600 font-bold text-xl">31-60</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Full Productivity and Quality Control</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Your bookkeeper operates independently with ongoing quality monitoring and performance optimization. We track accuracy rates, processing speeds, and communication effectiveness to ensure superior performance compared to local alternatives. Monthly financial reports improve in quality and timeliness while you experience cost savings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-lime-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-lime-600 font-bold text-xl">61-90</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Optimization and Scale Planning</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  With proven success, we identify expansion opportunities. Most clients add specialized functions like accounts payable outsourcing, payroll processing outsourcing, or industry-specific services based on demonstrated value and cost savings. Your bookkeeping operation becomes a strategic advantage.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 font-semibold">
              <FileCheck className="mr-2 h-5 w-5" />
              See Complete Implementation Process
            </Button>
          </div>
        </div>

        {/* Geographic Advantages */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Globe className="w-8 h-8 text-lime-600 mr-3" />
            Geographic Advantages for Australian, New Zealand & USA Markets
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Australian Bookkeeping Outsourcing</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Philippines operates 2-4 hours behind Australian time zones, creating perfect overlap for real-time collaboration. While Sydney businesses sleep, your bookkeeper processes transactions for next-day delivery.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our specialists understand Australian GST, PAYG, superannuation, and BAS requirements. They're trained in local banking systems, AUSTRAC compliance, and industry-specific regulations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">New Zealand Market Specialization</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                New Zealand businesses benefit from minimal time zone difference and cultural alignment. Our bookkeepers understand GST differences, KiwiSaver requirements, and local employment regulations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Particularly valuable for property management companies dealing with REINZ compliance and Property Guru integration requirements specific to New Zealand real estate operations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">USA Operations and GAAP Compliance</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                For US businesses or Australian companies with US operations, our specialists bring GAAP expertise, state-specific tax knowledge, and experience with complex multi-state reporting requirements.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Time zone advantages allow overnight processing of East Coast transactions, West Coast support during business hours, and continuous coverage that local bookkeepers cannot provide.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <HelpCircle className="w-10 h-10 text-lime-600 mr-3" />
            Complete Bookkeeping Outsourcing FAQ
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What does bookkeeping outsourcing actually cost compared to local Australian hiring?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our professional bookkeeping outsourcing specialists start at $12,800 AUD annually compared to $72,000+ for equivalent Australian talent. That's 82% cost savings while typically improving accuracy, speed, and reliability. Include recruitment costs, training time, and management overhead – your savings often exceed 85%.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Will offshore bookkeepers understand Australian compliance and tax requirements?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Absolutely. Our specialists are specifically trained in Australian business practices including GST, PAYG, superannuation, BAS preparation, and AUSTRAC compliance. They work with local software like Xero and understand banking integration better than many local bookkeepers who resist cloud systems.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How do you guarantee quality control and prevent errors?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We use AI-powered training systems, systematic quality monitoring, and proven management methodologies developed through 500+ successful placements. Our error rates typically fall below 1% compared to 3-5% for traditional local arrangements. Custom ChatGPT training bots provide instant expert guidance for complex decisions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What software platforms do your bookkeeping specialists support?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Complete expertise in Xero bookkeeping outsourcing, QuickBooks bookkeeping outsourcing, MYOB bookkeeping outsourcing, and Sage bookkeeping outsourcing. Our specialists are certified in advanced features and can handle complex integrations, custom reporting, and automated workflows that maximize efficiency.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How quickly can we implement bookkeeping outsourcing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Initial setup typically completes within 14 days including candidate matching, system integration, and custom training. This far exceeds traditional local hiring which averages 8-12 weeks and often results in poor cultural fits requiring restart.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Can we scale beyond basic bookkeeping into specialized functions?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Definitely. Most clients expand into accounts payable outsourcing, accounts receivable outsourcing, payroll processing outsourcing, and financial reporting outsourcing. We can build complete financial departments or integrate with other services like sales admin and customer service.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What happens if the bookkeeping arrangement doesn't work out?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  With 500+ successful placements and 95%+ retention rates, mismatches are rare due to our systematic screening process. However, if issues arise, we handle replacement immediately and ensure business continuity. Our goal is long-term partnerships, not short-term placements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How do you handle data security and confidentiality?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Enterprise-grade security protocols including encrypted connections, secure access controls, and comprehensive confidentiality agreements. Our specialists work from professional facilities with monitored environments and backup systems. Data security often exceeds what small businesses can implement with local staff.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What about time zone differences and communication?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Philippines operates 2-4 hours behind Australian time zones, creating perfect overlap for real-time collaboration. Communication is in professional English with cultural alignment that often exceeds local hiring. Plus, overnight processing means you start each day with updated financials.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How does bookkeeping outsourcing compare to bookkeeping software and automation?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Software handles routine data entry but human expertise manages exceptions, complex categorizations, compliance requirements, and strategic financial analysis. Our specialists leverage automation tools while providing judgment and problem-solving that software cannot replicate. It's the best of both worlds.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Zap className="w-10 h-10 text-white mr-3" />
            Transform Your Bookkeeping Operations – Save $100,000+ Annually
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ businesses that eliminated bookkeeping chaos while achieving 82% cost savings through systematic bookkeeping outsourcing. Get Stephen Atcheler's proven methodology that transformed financial operations across Australia, New Zealand, and USA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Book Your Transformation Call
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold">
              <Calculator className="mr-2 h-5 w-5" />
              Calculate Your Savings
            </Button>
          </div>
        </div>

        {/* Related Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Expand Beyond Bookkeeping</h2>
          <p className="text-gray-600 mb-8 text-center">
            Smart Integration Strategy: Start with bookkeeping outsourcing to experience the ShoreAgents difference, then expand into specialized services as your business grows. Most clients add 2-3 additional services within 6 months based on proven results.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Building2 className="w-12 h-12 text-lime-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Complete Business Process Outsourcing</h3>
                <p className="text-sm text-gray-600 mb-4">Transform your entire business operations with comprehensive BPO solutions.</p>
                <Button variant="outline" size="sm" className="border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold">
                  Explore Solutions
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-lime-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Virtual Assistant Services</h3>
                <p className="text-sm text-gray-600 mb-4">Professional virtual assistants for administrative and specialized support.</p>
                <Button variant="outline" size="sm" className="border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold">
                  Browse VA Services
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Building2 className="w-12 h-12 text-lime-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Real Estate Outsourcing</h3>
                <p className="text-sm text-gray-600 mb-4">Specialized support for real estate agents and property businesses.</p>
                <Button variant="outline" size="sm" className="border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold">
                  Real Estate Solutions
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Calculator className="w-12 h-12 text-lime-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Accounting Outsourcing</h3>
                <p className="text-sm text-gray-600 mb-4">Professional accounting services including financial reporting and tax.</p>
                <Button variant="outline" size="sm" className="border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold">
                  Accounting Services
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
}
