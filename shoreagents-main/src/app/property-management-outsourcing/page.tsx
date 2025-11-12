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
  Home,
  Calculator,
  Globe,
  AlertCircle
} from 'lucide-react';
import Image from 'next/image';

export default function PropertyManagementOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <Badge className="bg-red-600 text-white px-4 py-2 text-lg hover:bg-red-700">
              🚨 CRITICAL: Property Management Companies Bleeding $150K+ Annually on Administrative Overhead
            </Badge>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Property Management Outsourcing: The Complete Guide to Scaling Your Portfolio Without Adding Staff
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            While smart property managers embrace systematic property management outsourcing, others are getting trapped by the linear scaling nightmare. Don't become another victim of the 800-unit ceiling.
          </p>
          
          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
              alt="Property management outsourcing growth analytics showing upward trending charts, calculator and office workspace representing portfolio scaling efficiency"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Book a Strategy Call
            </Button>
            <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg">
              How It Works
            </Button>
            <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg">
              <Calculator className="w-5 h-5 mr-2" />
              See Pricing
            </Button>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Property management outsourcing strategically delegates routine property operations to specialized offshore professionals, enabling property management companies to scale from 100 to 1,000+ units without proportional staff increases while reducing operational costs by 65-80%. This comprehensive guide reveals how I transformed my own property management operations from administrative nightmare to profit center through strategic real estate outsourcing partnerships.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Back in 2012, when I was building my real estate business in Australia, property management was supposed to be the "predictable income stream" while sales provided the growth capital. What I discovered was that property management was actually the most administratively intensive part of our operation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We were spending 3-4 hours of administrative work for every hour of actual property management value. Tenant calls, maintenance coordination, lease renewals, inspection scheduling, trust accounting—it never stopped. And unlike sales, where you could have big months and quiet months, property management demanded consistent daily attention.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The breakthrough came when we moved our property management administration offshore through proven staff leasing arrangements. Suddenly, our local property managers could focus on relationships, inspections, and growth instead of drowning in paperwork. That's when I realized property management outsourcing wasn't just cost-saving—it was a complete operational transformation.
            </p>
          </div>
        </div>

        {/* Stephen's Stats Grid */}
        <div className="bg-gradient-to-br from-lime-50 to-lime-100 rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Home className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">400</span>
              </div>
              <p className="text-gray-700 font-medium">Rentals I Managed</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">2</span>
              </div>
              <p className="text-gray-700 font-medium">Property Management VAs</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">78%</span>
              </div>
              <p className="text-gray-700 font-medium">Cost Savings Achieved</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">500+</span>
              </div>
              <p className="text-gray-700 font-medium">Successful Placements</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white">
              <Phone className="w-5 h-5 mr-2" />
              Book Your Property Management Strategy Call
            </Button>
          </div>
        </div>

        {/* The Scaling Nightmare Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The Property Management Scaling Nightmare: Why I Nearly Quit
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Property management faces a fundamental scalability paradox: each new property adds revenue, but also adds proportional administrative burden. Most property management companies operate under a flawed assumption that growth requires proportional local staff increases.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When I was running my property management operation, I found local employees were just too expensive. Receptionist costs $65,000, sales assistant costs $70,000, bookkeeper costs $60,000—and that's before benefits, office space, and equipment. As your business grows, you start to expand into other areas, but the overhead scales faster than revenue.
            </p>
            
            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
                The Breaking Point Reality
              </h3>
              <p className="text-gray-700 mb-4">
                Based on my experience and 500+ client placements, most property management companies hit operational walls at predictable portfolio sizes:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-lime-600 mr-2">•</span>
                  <span><strong>50-150 units:</strong> Owner doing everything – success rate 85%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-600 mr-2">•</span>
                  <span><strong>150-400 units:</strong> Administrative overwhelm hits – success rate drops to 60%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-600 mr-2">•</span>
                  <span><strong>400-800 units:</strong> Process breakdown occurs – success rate plummets to 35%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-600 mr-2">•</span>
                  <span><strong>800+ units:</strong> System complexity chaos – only 15% succeed without major reorganization</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                The companies that successfully scale beyond 800 units almost universally implement some form of strategic property management outsourcing. I learned this the hard way, but you don't have to.
              </p>
            </div>
          </div>

          {/* Stephen's Reality Check */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-lime-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">S</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Stephen's Property Management Reality Check</h3>
                <p className="text-sm text-gray-600">CEO, ShoreAgents | Former Property Manager (400+ Units)</p>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                We had Property Management virtual assistants. Two of them. They handled lease renewals, calling back tenants, booking inspections—all of that type of stuff. The transformation was immediate.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Before outsourcing, our local property managers were drowning in administrative tasks. After implementing our offshore team, they could focus on what actually mattered: building relationships with owners, conducting quality inspections, and growing the portfolio.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The cost difference was staggering. Our offshore property management support cost us about $16,000 annually per person, while local staff cost $65,000+ before benefits. We could hire three offshore specialists for the price of one local assistant.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold">
                Here's what most BPO companies won't tell you: the real value isn't just cost savings—it's operational transformation. Your local team becomes strategic instead of administrative.
              </p>
            </div>
          </div>
        </div>

        {/* Functions That Work Offshore */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Property Management Functions Actually Work Offshore
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            After managing 400 rentals and placing 500+ offshore professionals, I can tell you exactly which property management functions work offshore and which ones don't. Property management naturally divides into client-facing activities requiring local presence and administrative functions perfect for outsourcing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tenant Lifecycle Card */}
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-lime-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">1. Tenant Lifecycle Administration</h3>
                <p className="text-gray-600 mb-4">
                  The tenant journey from application to move-out involves extensive administrative work perfectly suited for offshore teams:
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Application Processing & Screening:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Online application review and initial qualification</li>
                      <li>• Background check coordination and analysis</li>
                      <li>• Employment and rental history verification</li>
                      <li>• Credit score evaluation and documentation</li>
                      <li>• Rental application status communication</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Lease Administration:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Lease document preparation and customization</li>
                      <li>• Rental agreement processing and filing</li>
                      <li>• Lease renewal coordination and documentation</li>
                      <li>• Rent increase notifications and processing</li>
                      <li>• Move-in/move-out inspection scheduling</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Maintenance Operations Card */}
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-lime-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">2. Maintenance Operations Coordination</h3>
                <p className="text-gray-600 mb-4">
                  Maintenance represents 30-40% of property management workload and offers exceptional outsourcing opportunities:
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Work Order Management:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Initial maintenance request assessment and categorization</li>
                      <li>• Vendor assignment and scheduling coordination</li>
                      <li>• Work order tracking and status updates</li>
                      <li>• Cost estimation and approval workflows</li>
                      <li>• Completion verification and documentation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Financial Operations Card */}
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-lime-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">3. Financial Operations & Trust Accounting</h3>
                <p className="text-gray-600 mb-4">
                  Property management involves complex financial operations with strict compliance requirements—ideal for dedicated offshore specialists:
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Daily Operations:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Daily rent payment processing and reconciliation</li>
                      <li>• Late fee calculation and application</li>
                      <li>• Security deposit tracking and management</li>
                      <li>• Trust account reconciliation and reporting</li>
                      <li>• Monthly property performance reports</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50">
              See Our Proven Implementation Process
            </Button>
          </div>
        </div>

        {/* Honest Truth Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The Honest Truth About Property Management Outsourcing
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Look, I'm going to be straight with you about property management outsourcing. Most BPO companies will promise you "trained" property management staff. That's basically BS. Companies that guarantee training generally don't exist because it's just too hard—too many variations between businesses.
          </p>

          <div className="bg-lime-50 border-l-4 border-lime-600 p-6 mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Actually Provide</h3>
            <p className="text-gray-700 mb-4">
              We do not train the staff in your specific property management processes. However, we're happy to show you how to set up training systems that actually work. Here's what we do provide:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Pre-screened professionals with property management software experience (AppFolio, Buildium, Yardi)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Professional office environment in Clark Freeport Zone with enterprise infrastructure</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Complete equipment setup including computers, dual screens, headsets, and secure internet</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Ongoing management and supervision through our staff management systems</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Implementation guidance for creating your property management training processes</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why This Approach Actually Works</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Having been through multiple outsourcing attempts myself, I've learned that sustainable success comes from realistic expectations and proper implementation. You need to document your processes, but once you do, you have a system that scales infinitely.
            </p>
            <p className="text-gray-700 leading-relaxed">
              That documentation discipline actually improved our local operations too. We discovered we had no consistency in how different staff handled similar situations. Outsourcing forced us to create systems we should have had all along.
            </p>
          </div>
        </div>

        {/* Geographic Advantages */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Geographic Advantages: Why Philippines Works for Property Management
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Whether you're a property manager in Brisbane, a property developer in Auckland, or running rentals in Phoenix, our Philippines-based teams understand the unique requirements of English-speaking property markets. Living here in the Philippines and working with 500+ offshore placements, I can tell you exactly why this location works.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="border-lime-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="w-8 h-8 text-lime-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Australia/New Zealand</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Perfect time zone overlap for business hours</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Understanding of REINZ compliance (NZ)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Familiarity with Australian property regulations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-lime-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="w-8 h-8 text-lime-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">United States</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Overnight processing during US downtime</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Experience with MLS systems and state regulations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Professional English communication skills</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-lime-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                Our Clark-based office provides enterprise-grade infrastructure with backup power, redundant internet, and professional security. No more worrying about power outages, internet failures, or unprofessional home environments affecting your property management operations.
              </p>
            </div>
          </div>
        </div>

        {/* AI Future Section */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg p-8 mb-16">
          <div className="flex items-center mb-6">
            <Zap className="w-10 h-10 text-purple-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">The Future: AI-Powered Property Management</h2>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Here's where things get interesting for property management. We don't offer AI-powered assistants yet, but I'm going to show you exactly how to set this up yourself using the same tools we use internally.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            My entire operations team now uses Claude projects for recruitment, operations, finance, and task tracking. Our web development team codes using Cursor with Claude—they're building React and Node.js applications instead of basic PHP. Every one of these roles can have an element of AI through it.
          </p>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI + Human Property Management Possibilities:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Intelligent maintenance request routing and vendor selection</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Automated lease renewal communication with personalized timing</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Predictive maintenance scheduling based on property data</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Smart financial reporting with automated insights</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">AI-enhanced tenant communication with human oversight</span>
              </li>
            </ul>
          </div>

          <p className="text-lg font-semibold text-gray-900">
            The future belongs to property managers who combine global talent with intelligent technology. Your offshore property management team becomes AI-enhanced, not AI-replaced.
          </p>
        </div>

        {/* Real-World Transformation */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Real-World Property Management Transformation
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Based on my experience with 400 rentals and 500+ successful offshore placements, here's what property management outsourcing actually delivers in the real world:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Cost Impact */}
            <div>
              <div className="flex items-center mb-4">
                <DollarSign className="w-8 h-8 text-green-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Cost Impact</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>78% cost reduction on administrative functions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>$16,000 vs $65,000 annual cost per role</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>No recruitment costs – we handle hiring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>No office overhead – professional infrastructure included</span>
                </li>
              </ul>
            </div>

            {/* Operational Results */}
            <div>
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Operational Results</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>24/7 coverage for maintenance coordination</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Consistent documentation and compliance tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Faster response times for tenant inquiries</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Improved owner reporting quality and frequency</span>
                </li>
              </ul>
            </div>

            {/* Strategic Benefits */}
            <div>
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Strategic Benefits</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Local staff refocused on growth and relationships</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Scalable operations without proportional hiring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>System documentation improves overall efficiency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Competitive advantage through lower operating costs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-lime-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Clock className="w-6 h-6 text-lime-600 mr-2" />
              Timeline Reality Check:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-lime-600 mb-2">Week 1-2</div>
                <p className="text-sm text-gray-700">Process documentation and team recruitment</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-lime-600 mb-2">Week 3-4</div>
                <p className="text-sm text-gray-700">Initial training and parallel operations setup</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-lime-600 mb-2">Week 5-8</div>
                <p className="text-sm text-gray-700">Gradual function transfer with quality monitoring</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-lime-600 mb-2">Month 3+</div>
                <p className="text-sm text-gray-700">Full productivity and optimization opportunities</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50">
              <Calculator className="w-5 h-5 mr-2" />
              See Investment Options & ROI Calculator
            </Button>
          </div>
        </div>

        {/* Getting Started Options */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Getting Started: Your Property Management Outsourcing Options
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Whether you're managing 50 units and looking to scale efficiently, or managing 500+ units seeking operational optimization, we have proven solutions that align with your growth objectives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Start Small */}
            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Small & Scale</h3>
                  <p className="text-gray-600">
                    Test property management outsourcing with one dedicated specialist before expanding to full teams.
                  </p>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto">
                  Explore One Agent Solution
                </Button>
              </CardContent>
            </Card>

            {/* Build Team */}
            <Card className="border-lime-200 hover:shadow-xl transition-shadow bg-lime-50 h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <Badge className="bg-lime-600 text-white mb-4">MOST POPULAR</Badge>
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Build Your Team</h3>
                  <p className="text-gray-600">
                    Create a complete property management support team with specialized roles and functions.
                  </p>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto">
                  Build Team Solutions
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Workforce</h3>
                  <p className="text-gray-600">
                    Large-scale property management operations with multiple locations and complex requirements.
                  </p>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto">
                  Enterprise Solutions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose ShoreAgents */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Why Choose ShoreAgents for Property Management:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Real estate industry expertise</h4>
                <p className="text-gray-700">I built and scaled my own property management operation</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Honest implementation approach</h4>
                <p className="text-gray-700">No false promises about "trained" staff</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Professional infrastructure</h4>
                <p className="text-gray-700">Clark-based office with enterprise security and backup systems</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Comprehensive support</h4>
                <p className="text-gray-700">From recruitment to ongoing management and performance monitoring</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 md:col-span-2">
              <CheckCircle className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Proven results</h4>
                <p className="text-gray-700">500+ successful placements with measurable ROI outcomes</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            FAQ: Property Management Outsourcing Realities
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Do you provide property management training for offshore staff?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We do not train staff in your specific property management processes—that's your business expertise. However, we provide pre-screened professionals with property management software experience and show you how to create training systems that actually work. We handle recruitment, infrastructure, and ongoing management while you focus on process documentation and team development.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How much can property management companies actually save?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Based on our 500+ placements, property management companies typically achieve 65-80% cost savings on administrative functions. A local property management assistant costing $65,000+ annually typically costs $16,000 when outsourced to our Philippines team, including all infrastructure and management overhead. Beyond direct savings, you eliminate recruitment, training, office space, and equipment costs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How do offshore teams handle tenant emergencies?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Offshore teams handle maintenance through tiered response protocols distinguishing true emergencies from urgent requests. They maintain 24/7 emergency vendor relationships and have clear escalation procedures to local management when required. Most "emergencies" are actually coordination tasks perfect for offshore handling, while true emergencies get immediate local attention.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What's the typical implementation timeline for property management outsourcing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Property management outsourcing implementation typically requires 4-6 weeks due to system complexity and process documentation needs. This includes 1-2 weeks for team recruitment, 2-3 weeks for system integration and process documentation, and 1-2 weeks for parallel operations and quality validation. Teams usually reach full productivity within 60-90 days.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Can offshore teams access our property management software securely?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, our teams securely access all major property management platforms including AppFolio, Buildium, Yardi, Console, and others through VPN connections and role-based access controls. We implement enterprise-grade security including multi-factor authentication, IP restrictions, and comprehensive audit trails for compliance and quality control.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How does outsourcing affect owner and tenant satisfaction?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Well-implemented property management outsourcing typically improves satisfaction through faster response times, more consistent communication, and detailed reporting. Offshore teams often provide more comprehensive documentation than overwhelmed local staff. Success requires proper implementation with quality monitoring and maintaining local management presence for relationship building.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Property Management Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Stop struggling with the administrative burden that's limiting your growth. Let's discuss how property management outsourcing can transform your operations the same way it transformed mine.
          </p>
          <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            <Phone className="w-5 h-5 mr-2" />
            Book Your Property Management Strategy Call
          </Button>
          <p className="mt-4 text-sm opacity-75">
            15-minute consultation • No sales pressure • Real solutions from someone who's been there
          </p>
        </div>
      </div>
    </div>
  );
}
