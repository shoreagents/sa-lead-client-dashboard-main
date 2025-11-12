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
  Globe
} from 'lucide-react';
import Image from 'next/image';

export default function AccountingOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge variant="destructive" className="mb-4 bg-red-600 text-white px-4 py-2 text-sm font-semibold flex items-center justify-center w-fit mx-auto">
            <AlertCircle className="w-4 h-4 mr-2" />
            CRITICAL: Accounting Firms Hemorrhaging $200K+ Annually on Staffing Disasters
          </Badge>
          <p className="text-lg text-gray-600 mb-6">
            While forward-thinking firms embrace systematic accounting outsourcing, others are drowning in recruitment nightmares, burnout turnover, and compliance risks. Don't become another casualty.
          </p>

          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Accounting Outsourcing That Actually Works
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Skip the recruitment chaos. Eliminate the training disasters. Get accounting professionals who understand your business from day one.
          </p>

          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
              alt="Accounting team analyzing financial data and charts on computer screens in modern office environment"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Stop the Staffing Bleeding
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
              <div className="text-4xl font-bold text-lime-600 mb-2">73%</div>
              <div className="text-gray-600 font-medium">Average Cost Reduction</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Successful Placements</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">48hrs</div>
              <div className="text-gray-600 font-medium">Average Match Time</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">94%</div>
              <div className="text-gray-600 font-medium">Client Retention Rate</div>
            </CardContent>
          </Card>
        </div>

        {/* Stephen's Story */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-10 h-10 text-lime-600 mr-3" />
            Why I'm Obsessed with Fixing Accounting Outsourcing
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm Stephen Atcheler, CEO of ShoreAgents, and I've witnessed firsthand how traditional accounting staffing approaches are failing businesses across Australia, New Zealand, and the USA. The patterns are consistent: astronomical recruitment costs, devastating turnover rates, and compliance risks that threaten entire practices.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The accounting industry is facing an unprecedented staffing crisis. Graduate numbers are declining, experienced professionals are leaving for corporate roles, and the remaining talent is demanding salaries that make sustainable growth nearly impossible for most firms.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              What frustrates me most is seeing firms attempt traditional outsourcing approaches that treat accounting like basic data entry. They hire cheap offshore workers without proper accounting expertise, then wonder why their clients are unhappy and their compliance risks are skyrocketing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through our 500+ successful placements, we've developed a completely different approach to accounting outsourcing. It's not about finding cheap labor in the Philippines. It's about finding qualified accounting professionals who understand your specific practice area, your software systems, and your client expectations from day one.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The firms that succeed with our approach typically see 73% cost reductions compared to local hiring, while actually improving service quality and client satisfaction. They're able to scale their operations without the recruitment nightmares that plague traditional staffing approaches.
            </p>
          </div>
        </div>

        {/* The Staffing Crisis */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <X className="w-10 h-10 text-red-600 mr-3" />
            The Accounting Staffing Crisis Nobody Talks About
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            The accounting industry is hemorrhaging talent faster than ever. Graduate numbers are declining. Experienced professionals are leaving for corporate roles. And the ones who stay? They're demanding salaries that would make your grandfather's accountant faint.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <DollarSign className="w-6 h-6 text-red-600 mr-2" />
                  The Real Cost of Local Hiring
                </h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Based on our client data from Australia, New Zealand, and the USA, here's what accounting firms are really paying for local junior to mid-level accounting staff:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><strong>Australia:</strong> $65,000-$85,000 AUD annually (junior), $85,000-$120,000 AUD (mid-level)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><strong>New Zealand:</strong> $50,000-$70,000 NZD annually (junior), $70,000-$95,000 NZD (mid-level)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><strong>USA:</strong> $45,000-$65,000 USD annually (junior), $65,000-$90,000 USD (mid-level)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><strong>Plus:</strong> Superannuation, benefits, office space, equipment, training, and the hidden cost of turnover</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-3 leading-relaxed">
                  But here's the kicker: The real cost isn't just the salary. It's the recruitment nightmare, the three-month ramp-up period, the software training, the inevitable turnover, and the compliance risks when inexperienced staff make mistakes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
                  The Traditional Outsourcing Trap
                </h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Most accounting firms that try outsourcing get burned because they fall into the commodity trap. They hire cheap data entry clerks who can barely handle basic bookkeeping, let alone complex accounting functions. Then they wonder why their clients are complaining about quality.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The traditional BPO approach treats accounting like a factory process. Send work offshore, hope for the best, and fix the mistakes later. That's not accounting outsourcing—that's accounting chaos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50 md:col-span-2">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-red-600 mr-2" />
                  The Compliance Nightmare
                </h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Accounting isn't just about numbers—it's about compliance, regulations, and professional standards that vary dramatically between Australia, New Zealand, and the USA. When you hire the wrong accounting outsourcing provider, you're not just risking poor quality work. You're risking your professional reputation and your client relationships.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I've seen firms lose major clients because their offshore team didn't understand local tax regulations. One firm in Auckland nearly lost their practicing certificate because their outsourced bookkeeper was making GST errors. These aren't just operational hiccups—they're career-ending disasters.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* The Solution */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <Zap className="w-10 h-10 text-lime-600 mr-3" />
            The ShoreAgents Accounting Outsourcing Solution
          </h2>
          <p className="text-2xl text-gray-700 text-center mb-8">
            Our accounting outsourcing approach is fundamentally different. We don't provide cheap labor—we provide skilled accounting professionals who understand your specific business model, your software systems, and your geographic market requirements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <UserCheck className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Pre-Qualified Accounting Professionals</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Every accounting professional in our network has been pre-screened for both technical competency and cultural fit. We're not hiring fresh graduates hoping they'll learn on the job. We're sourcing experienced professionals who already understand the accounting software your firm uses and the specific requirements of your practice area.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you need someone proficient in MYOB, Xero, QuickBooks, or more specialized software like CCH, BGL, or Class, we find candidates who already have that expertise. We don't train them—we find them already skilled and ready to contribute from day one.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Geographic Market Understanding</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  One of our key differentiators is geographic specialization. Our accounting professionals are specifically trained to understand the regulatory environments of Australia, New Zealand, and the USA. They understand the difference between Australian GST and US sales tax. They know New Zealand's FBT rules and Australian superannuation requirements.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This isn't generic offshore outsourcing—it's targeted professional placement with deep market knowledge.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Cost Reality */}
          <Card className="border-lime-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <DollarSign className="w-8 h-8 text-lime-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">The Cost Reality</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our accounting outsourcing typically costs 73% less than local hiring. Here's what firms are actually paying:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-lime-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-lime-600 mb-1">$14,300-$18,200</div>
                  <div className="text-sm text-gray-700 font-medium">Junior Accounting Professional</div>
                  <div className="text-xs text-gray-600">USD annually</div>
                </div>
                <div className="bg-lime-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-lime-600 mb-1">$18,200-$26,000</div>
                  <div className="text-sm text-gray-700 font-medium">Mid-Level Professional</div>
                  <div className="text-xs text-gray-600">USD annually</div>
                </div>
                <div className="bg-lime-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-lime-600 mb-1">$26,000-$36,400</div>
                  <div className="text-sm text-gray-700 font-medium">Senior Professional</div>
                  <div className="text-xs text-gray-600">USD annually</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                But the real value isn't just cost savings—it's the elimination of recruitment headaches, training disasters, and turnover crises. Our accounting professionals are career-focused, culturally aligned, and professionally committed to your firm's success.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What We Deliver */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="w-8 h-8 text-lime-600 mr-3" />
            What We Actually Deliver
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Let me be completely transparent about what we offer and what we don't. We specialize in finding and placing accounting professionals who can handle:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Transaction processing and data entry</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Bookkeeping and accounts reconciliation</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Financial statement preparation</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Tax return preparation and compliance</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Payroll processing and reporting</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">BAS, GST, and tax reporting</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Client communication and account management</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Audit support and document preparation</span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            We don't provide software training or licenses—that's your responsibility. We find professionals who already have the skills you need, or you can train them on your specific processes. Our role is sourcing, placement, and ongoing management to ensure cultural fit and performance standards.
          </p>
        </div>

        {/* Service Options */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <Briefcase className="w-10 h-10 text-lime-600 mr-3" />
            How We Structure Accounting Outsourcing
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
            Every accounting firm has different needs, so we've developed three distinct approaches to accounting outsourcing that scale with your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="flex items-center justify-center mb-4">
                    <UserCheck className="w-12 h-12 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Start Small</h3>
                  <p className="text-lg text-gray-600 mb-4">Single Professional Placement</p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Perfect for smaller firms or those testing the waters with accounting outsourcing. We place one skilled accounting professional who integrates directly with your existing team. This approach lets you experience the quality and cultural fit before committing to larger-scale outsourcing.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Most firms start here because it's low-risk and high-impact. You get immediate cost savings and capacity increase while maintaining full control over training and integration.
                  </p>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Start with One Professional
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Build Your Team</h3>
                  <p className="text-lg text-gray-600 mb-4">Multi-Professional Structure</p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    For growing firms that need comprehensive accounting support across multiple functions. We build a dedicated team of 2-5 accounting professionals with complementary skills—perhaps a senior accountant, two junior professionals, and a specialized payroll expert.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This team approach allows you to cover all your accounting functions while maintaining the cost advantages of outsourcing. Each professional specializes in specific areas, creating efficiency and expertise depth.
                  </p>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Build Your Accounting Team
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Complete Workforce</h3>
                  <p className="text-lg text-gray-600 mb-4">Enterprise-Level Outsourcing</p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    For established firms ready to completely transform their staffing model. We develop a comprehensive accounting workforce that handles all your back-office functions, from junior data entry to senior financial reporting.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This enterprise approach typically involves 6-15 professionals organized into specialized departments—bookkeeping, tax, payroll, and client services. It's the most dramatic cost transformation but requires the highest level of organizational readiness.
                  </p>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Enterprise Workforce Solution
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="border-lime-200 bg-lime-50 mt-8">
            <CardContent className="p-6">
              <div className="flex items-start">
                <Settings className="w-6 h-6 text-lime-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Integration with Existing Services</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Many of our clients combine accounting outsourcing with other specialized support. If you're already using our virtual assistant services for administrative tasks, adding accounting professionals creates a comprehensive support structure. This integrated approach often delivers the best results because your entire support team understands your business model and can communicate effectively across functions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Implementation Process */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <Settings className="w-10 h-10 text-lime-600 mr-3" />
            How Our Accounting Outsourcing Process Works
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
            The biggest differentiator between successful and disastrous accounting outsourcing is the implementation process. Here's exactly how we ensure your accounting outsourcing succeeds from day one.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-lime-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-lime-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Requirements Analysis</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We start with a comprehensive analysis of your current accounting operations. What software systems do you use? What types of clients do you serve? What are your peak workload periods? What compliance requirements are critical to your practice? This isn't a generic consultation—it's a detailed operational assessment that allows us to identify exactly what type of accounting professional will succeed in your environment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-lime-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-lime-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Candidate Matching</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Based on your requirements, we match you with pre-qualified accounting professionals from our network. These aren't random offshore workers—they're experienced professionals who already understand your industry, your software, and your geographic market. You interview the candidates directly and make the final hiring decision. We facilitate the process, but you maintain complete control over who joins your team.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-lime-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-lime-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Integration and Setup</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Once you've selected your accounting professional, we handle the operational setup. This includes establishing communication protocols, setting up access to your systems, and ensuring they have the professional workspace and technology needed to perform at their best. Your role is to provide access to your accounting software and train them on your specific processes. Our role is to ensure they have the infrastructure and support needed to succeed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-lime-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-lime-600 font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Ongoing Management</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The key to successful accounting outsourcing is ongoing management and support. We monitor performance, handle any cultural integration issues, and ensure your accounting professional remains engaged and productive. This isn't a set-it-and-forget-it arrangement. We're actively involved in ensuring your accounting outsourcing delivers the results you need.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 font-semibold">
              <Settings className="mr-2 h-5 w-5" />
              See Our Complete Process
            </Button>
          </div>
        </div>

        {/* Why Choose ShoreAgents */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Award className="w-8 h-8 text-lime-600 mr-3" />
            Why Choose ShoreAgents for Accounting Outsourcing?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The accounting industry is built on trust, accuracy, and professional competence. When you choose ShoreAgents for your accounting outsourcing, you're not just getting cost savings—you're getting a partnership that understands the critical importance of getting it right.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our 500+ successful placements include dozens of accounting firms across Australia, New Zealand, and the USA. We understand the unique challenges of accounting outsourcing and have developed systems to address them proactively.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The timezone advantage alone is worth considering. While your competitors are struggling with local hiring challenges, your Philippines-based accounting team is working while you sleep, ensuring you wake up to completed work and faster client turnaround times.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            But the real advantage is cultural. Filipino accounting professionals have a strong work ethic, high English proficiency, and a service-oriented approach that aligns perfectly with the professional standards expected in the accounting industry.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <HelpCircle className="w-10 h-10 text-lime-600 mr-3" />
            Accounting Outsourcing: Your Questions Answered
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How much does accounting outsourcing actually cost?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our accounting outsourcing typically costs 73% less than local hiring. Junior professionals start at $14,300 USD annually, mid-level at $18,200 USD, and senior professionals at $26,000 USD. This includes all management and operational support. Compare this to local salaries of $45,000-$120,000+ plus benefits, and the savings become clear.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What accounting software do your professionals know?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our candidates are pre-screened for proficiency in major accounting software including MYOB, Xero, QuickBooks, Sage, CCH, BGL, Class, and many others. We don't provide software training—we find professionals who already have the skills you need, or you can train them on your specific processes and software configurations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Do your accounting professionals understand Australian/NZ/US regulations?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, our accounting professionals are specifically trained to understand the regulatory environments of Australia, New Zealand, and the USA. They understand GST, BAS, superannuation, payroll taxes, and other compliance requirements. However, complex regulatory interpretation should always be overseen by qualified local professionals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How quickly can you match me with an accounting professional?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our average matching time is 48 hours. Because we maintain a pre-qualified network of accounting professionals, we can quickly identify candidates who match your specific requirements. The timeline depends on how specialized your needs are, but most clients are interviewing candidates within 2-3 days.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What happens if the accounting professional doesn't work out?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our 94% client retention rate suggests this rarely happens, but if there's a mismatch, we work to resolve it immediately. This might involve additional training, role adjustments, or finding a replacement candidate. Our goal is long-term success, not quick placements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Do you provide ongoing management and support?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, ongoing management is included in our service. We monitor performance, handle cultural integration issues, and ensure your accounting professional remains engaged and productive. This isn't a placement service—it's a complete accounting outsourcing solution with ongoing support.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How do I know if accounting outsourcing is right for my firm?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Accounting outsourcing works best for firms that are struggling with local hiring costs, experiencing high turnover, or need to scale quickly without the overhead of additional local staff. If you're spending more than 30% of your time on recruitment and staff management instead of client service, accounting outsourcing could transform your business.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Zap className="w-10 h-10 text-white mr-3" />
            Ready to Transform Your Accounting Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Stop losing money on staffing disasters. Start your accounting outsourcing journey with a proven partner who understands the accounting industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Your Strategy Call
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold">
              See Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            Join 500+ successful businesses. See our pricing and start saving 73% on accounting staff costs.
          </p>
        </div>

        {/* Related Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Related Outsourcing Services</h2>
          <p className="text-gray-600 mb-8 text-center">
            Many accounting firms benefit from expanding their outsourcing strategy beyond core accounting functions. Here are complementary services that integrate seamlessly with your accounting operations:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Calculator className="w-12 h-12 text-lime-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Bookkeeping Outsourcing</h3>
                <p className="text-sm text-gray-600 mb-4">Specialized bookkeeping professionals for transaction processing and data entry.</p>
                <Button variant="outline" size="sm" className="border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-lime-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Administrative Support</h3>
                <p className="text-sm text-gray-600 mb-4">Virtual assistants to handle client communications and scheduling.</p>
                <Button variant="outline" size="sm" className="border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold">
                  Explore Support
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-lime-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Digital Marketing</h3>
                <p className="text-sm text-gray-600 mb-4">Marketing specialists to help grow your accounting practice.</p>
                <Button variant="outline" size="sm" className="border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold">
                  Discover Marketing
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <FileCheck className="w-12 h-12 text-lime-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Content Creation</h3>
                <p className="text-sm text-gray-600 mb-4">Professional content writers for newsletters and client communications.</p>
                <Button variant="outline" size="sm" className="border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold">
                  Explore Content Services
                </Button>
              </CardContent>
            </Card>
          </div>

          <p className="text-gray-600 mt-8 text-center">
            By combining accounting outsourcing with these complementary services, you can create a comprehensive support structure that handles all non-client-facing functions while you focus on high-value advisory work and business development.
          </p>
        </div>

      </div>
    </div>
  );
}
