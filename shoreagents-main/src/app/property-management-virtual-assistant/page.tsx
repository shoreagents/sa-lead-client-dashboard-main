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
  HelpCircle,
  Briefcase,
  FileText,
  Home,
  HardHat,
  Building2,
  Search,
  Cpu,
  Calendar,
  Key,
  ClipboardList,
  Wrench,
  FileCheck,
  MessageCircle,
  TrendingDown,
  Globe
} from 'lucide-react';
import Image from 'next/image';

export default function PropertyManagementVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge variant="destructive" className="mb-4 bg-red-600 text-white px-4 py-2 text-sm font-semibold flex items-center justify-center w-fit mx-auto">
            <AlertCircle className="w-4 h-4 mr-2" />
            CRITICAL: Property Managers Losing $50,000+ Annually on Inefficient Operations
          </Badge>
          <p className="text-lg text-gray-600 mb-6">
            While smart property management companies scale with systematic property management virtual assistant solutions, others get trapped by expensive local hiring, operational bottlenecks, and tenant service failures. Don't become another casualty.
          </p>

          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            Property Management Virtual Assistant
          </h1>

          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
              alt="Professional property management virtual assistant working with property management software and tenant communication systems"
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

        {/* Stephen's Story */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="w-10 h-10 text-red-600 mr-3" />
            Stephen's $150K Property Management Disaster
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              Back in 2012, I made a $150,000 mistake that nearly killed my property management expansion.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I thought I could just hire local admin staff and somehow scale from 150 to 300+ properties without drowning in paperwork, tenant complaints, and operational chaos. What I got instead was mounting costs, declining service quality, and property managers burning out from administrative overload.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              But here's what I discovered when I implemented specialized property management virtual assistants who understood the specific workflows of property management…
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold italic">
              A property management virtual assistant transforms property management operations by handling up to 80% of administrative tasks remotely, enabling property managers to scale from 150 to 300+ properties without proportional staff increases.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you need a leasing assistant for tenant acquisition, a property admin assistant for daily operations, a tenant relations assistant for communication management, or a property maintenance coordinator for repair workflows – modern property management virtual assistants provide comprehensive solutions that traditional hiring simply cannot match.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">300+</div>
              <div className="text-gray-600 font-medium">Properties Per Manager Capacity</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">75%</div>
              <div className="text-gray-600 font-medium">Cost Savings vs Local Hiring</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">80%</div>
              <div className="text-gray-600 font-medium">Administrative Tasks Handled</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">40%</div>
              <div className="text-gray-600 font-medium">Faster Tenant Response Times</div>
            </CardContent>
          </Card>
        </div>

        {/* Strategic Case */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="w-8 h-8 text-lime-600 mr-3" />
            The Strategic Case for Property Management Virtual Assistants in 2025
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Property management virtual assistants have transformed from cost-cutting measures to competitive advantages that leading property companies leverage to outpace competitors. Unlike generic virtual assistant services, property management assistants specialize in property-specific workflows, compliance requirements, and tenant communication protocols.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">According to industry research, property management firms implementing structured strategies report:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">60-75% reduction in administrative overhead costs</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">40% improvement in tenant response times</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">65% increase in property manager capacity</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">85% improvement in lease renewal rates</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">3.5x more time for relationship building</span>
            </div>
          </div>

          <div className="text-center mt-6">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Your Free Property Management VA Consultation
            </Button>
          </div>
        </div>

        {/* Cost-Benefit Analysis */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <BarChart className="w-8 h-8 text-lime-600 mr-3" />
            Real-World Impact: The Cost-Benefit Analysis
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Based on our 500+ placements, here's the savings breakdown for a typical property management company managing 200+ properties:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-lime-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Function</th>
                  <th className="px-6 py-4 text-right font-semibold">Local Cost (Annual)</th>
                  <th className="px-6 py-4 text-right font-semibold">PMVA Cost (Annual)</th>
                  <th className="px-6 py-4 text-right font-semibold">Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-lime-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Leasing Coordination</td>
                  <td className="px-6 py-4 text-right text-gray-700">$58,000</td>
                  <td className="px-6 py-4 text-right text-gray-700">$18,500</td>
                  <td className="px-6 py-4 text-right text-lime-600 font-bold">68%</td>
                </tr>
                <tr className="hover:bg-lime-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Tenant Communication</td>
                  <td className="px-6 py-4 text-right text-gray-700">$52,000</td>
                  <td className="px-6 py-4 text-right text-gray-700">$16,800</td>
                  <td className="px-6 py-4 text-right text-lime-600 font-bold">68%</td>
                </tr>
                <tr className="hover:bg-lime-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Maintenance Coordination</td>
                  <td className="px-6 py-4 text-right text-gray-700">$55,000</td>
                  <td className="px-6 py-4 text-right text-gray-700">$17,200</td>
                  <td className="px-6 py-4 text-right text-lime-600 font-bold">69%</td>
                </tr>
                <tr className="hover:bg-lime-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Administrative Support</td>
                  <td className="px-6 py-4 text-right text-gray-700">$48,000</td>
                  <td className="px-6 py-4 text-right text-gray-700">$15,600</td>
                  <td className="px-6 py-4 text-right text-lime-600 font-bold">68%</td>
                </tr>
                <tr className="bg-lime-100 font-bold">
                  <td className="px-6 py-4 text-gray-900">Total Annual Savings</td>
                  <td className="px-6 py-4 text-right text-gray-900">$213,000</td>
                  <td className="px-6 py-4 text-right text-gray-900">$68,100</td>
                  <td className="px-6 py-4 text-right text-lime-600 text-xl">$144,900</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6 font-semibold">
            Beyond direct savings, the strategic advantage comes from redirecting local staff to high-value activities like landlord acquisition, strategic planning, and complex tenant relationships.
          </p>

          <div className="text-center mt-6">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 font-semibold">
              <DollarSign className="mr-2 h-5 w-5" />
              See Complete Cost Analysis & ROI Projections
            </Button>
          </div>
        </div>

        {/* Core Functions */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <ClipboardList className="w-8 h-8 text-lime-600 mr-3" />
            Core Property Management Functions Enhanced by Virtual Assistants
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Property management encompasses diverse operational areas, each with specific property management virtual assistant applications. Here are the primary functions delivering exceptional ROI when supported by specialized property management assistants:
          </p>

          <div className="space-y-8">
            {/* Tenant Lifecycle */}
            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 text-lime-600 mr-2" />
                  1. Tenant Lifecycle Management
                </h3>
                <p className="text-gray-700 mb-4">
                  The complete tenant journey from inquiry to move-out involves numerous touchpoints ideal for leasing assistant and tenant relations assistant support:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Prospecting & Inquiry Management</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Initial inquiry responses</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Viewing appointment scheduling</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Follow-up communication</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Lead qualification</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Application Processing</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Application form review</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Reference checking coordination</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Background check processing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Application status updates</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Lease Administration</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Lease document preparation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">DocuSign coordination</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Bond lodging processing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Move-in inspection scheduling</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Marketing */}
            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-6 h-6 text-lime-600 mr-2" />
                  2. Property Advertising and Marketing
                </h3>
                <p className="text-gray-700 mb-4">
                  Effective property marketing requires consistent execution across multiple channels through dedicated property admin assistants:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Listing creation and optimization for Realestate.com.au, Domain, TradeMe</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Social media post creation and distribution</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Property description writing and enhancement</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Photo coordination and upload management</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Maintenance */}
            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Wrench className="w-6 h-6 text-lime-600 mr-2" />
                  3. Maintenance Coordination and Management
                </h3>
                <p className="text-gray-700 mb-4">
                  Maintenance requests require systematic coordination between multiple parties through specialized property maintenance coordinators:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Request Processing</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Maintenance request intake via multiple channels</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Priority assessment and categorization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Landlord approval coordination for repairs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Work order creation and distribution</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Tradesperson Management</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Approved contractor coordination and scheduling</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Quote collection and comparison</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Access arrangement between tenants and contractors</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Work completion follow-up and documentation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 font-semibold">
              <Target className="mr-2 h-5 w-5" />
              Discover Our Proven Implementation Process
            </Button>
          </div>
        </div>

        {/* Philippines Advantage */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Globe className="w-8 h-8 text-lime-600 mr-3" />
            Stephen's Take: The Philippines Advantage for Property Management
          </h2>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              After working with property management virtual assistants from multiple countries, I've found that Filipino professionals excel in property management support for several key reasons. First, their natural service orientation aligns perfectly with the hospitality aspects of property management. Second, their English proficiency enables nuanced tenant communication that maintains professional relationships.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Most importantly, Filipino property management assistants understand the importance of building long-term relationships, which is crucial in property management where tenant retention directly impacts profitability. When we recruit property management virtual assistants in the Philippines, we specifically look for candidates who have customer service experience and can demonstrate empathy in their communication.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The cultural compatibility means less training time on soft skills and more focus on property-specific procedures. This translates to faster implementation and better results for property management companies.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Key Philippines Advantages:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-4">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2" />
                  English Proficiency
                </h4>
                <p className="text-gray-700 text-sm">Clear, professional communication with tenants and landlords</p>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-4">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2" />
                  Service Culture
                </h4>
                <p className="text-gray-700 text-sm">Natural hospitality and customer service orientation</p>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-4">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2" />
                  Time Zone Compatibility
                </h4>
                <p className="text-gray-700 text-sm">Perfect overlap with Australian and New Zealand business hours</p>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-4">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2" />
                  Cost Effectiveness
                </h4>
                <p className="text-gray-700 text-sm">60-75% savings with premium quality service</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Options */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Property Management Virtual Assistant Service Options
          </h2>
          <p className="text-gray-700 text-center mb-8 leading-relaxed">
            ShoreAgents offers flexible property management virtual assistant solutions tailored to your company size and operational needs:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-lime-200 bg-lime-50 h-full flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Start Small</h3>
                <div className="text-4xl font-bold text-lime-600 mb-3">One Agent</div>
                <p className="text-gray-700 mb-6 flex-grow">
                  Perfect for property management companies managing 50-150 properties. Test our specialized property management assistant model with a single dedicated team member.
                </p>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white font-semibold mt-auto">
                  Start with One Agent
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50 h-full flex flex-col relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-lime-600 text-white px-4 py-1 font-semibold">Most Popular</Badge>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Scale Smart</h3>
                <div className="text-4xl font-bold text-lime-600 mb-3">Team</div>
                <p className="text-gray-700 mb-6 flex-grow">
                  Ideal for growing property management companies with 150-400 properties. Multiple specialized roles including leasing assistants and maintenance coordinators.
                </p>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white font-semibold mt-auto">
                  Build Your Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50 h-full flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Enterprise Scale</h3>
                <div className="text-4xl font-bold text-lime-600 mb-3">Workforce</div>
                <p className="text-gray-700 mb-6 flex-grow">
                  For large property management companies with 400+ properties. Complete departmental coverage with specialized property management virtual assistants across all functions.
                </p>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white font-semibold mt-auto">
                  Scale Your Workforce
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* AI Future */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Cpu className="w-8 h-8 text-lime-600 mr-3" />
            The Future: AI-Enhanced Property Management Virtual Assistants
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Property management is evolving rapidly with AI integration. While we don't offer AI-powered property management virtual assistants yet, the industry is moving toward hybrid human-AI models that will revolutionize operations:
          </p>

          <Card className="border-lime-200 bg-white mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Stephen's Vision: AI + Human Intelligence</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                My entire operations team now uses Claude projects for recruitment, operations, finance, and task tracking. Our web development team codes using Cursor with Claude – they're building React and Node.js applications instead of basic PHP.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The future property management virtual assistant will combine Filipino service excellence with AI automation. Imagine tenant inquiries handled instantly, maintenance patterns predicted before problems occur, and lease renewals optimized through data analysis.
              </p>
            </CardContent>
          </Card>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Current AI Integration Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <MessageCircle className="w-5 h-5 text-lime-600 mr-2" />
                  Automated Communication
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-700">• AI-powered initial tenant inquiry responses</li>
                  <li className="text-gray-700">• Smart scheduling for property viewings</li>
                  <li className="text-gray-700">• Automated lease renewal reminders</li>
                  <li className="text-gray-700">• Predictive maintenance notifications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <BarChart className="w-5 h-5 text-lime-600 mr-2" />
                  Data Analysis
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-700">• Tenant behavior analysis for retention</li>
                  <li className="text-gray-700">• Market analysis for rent optimization</li>
                  <li className="text-gray-700">• Maintenance pattern recognition</li>
                  <li className="text-gray-700">• Portfolio performance analytics</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-6">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 font-semibold">
              <Cpu className="mr-2 h-5 w-5" />
              Explore AI Virtual Assistant Future
            </Button>
          </div>
        </div>

        {/* Related Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Explore Related Virtual Assistant Solutions
          </h2>
          <p className="text-gray-700 text-center mb-8">
            Expand your offshore team capabilities with specialized virtual assistants across multiple business functions:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-lime-200 bg-white h-full flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <Home className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real Estate</h3>
                <p className="text-gray-700 mb-4 flex-grow">Comprehensive sales support for agents and agencies</p>
                <Button variant="outline" className="w-full border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold mt-auto">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white h-full flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <HardHat className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Construction</h3>
                <p className="text-gray-700 mb-4 flex-grow">Project coordination and administrative support</p>
                <Button variant="outline" className="w-full border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold mt-auto">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white h-full flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <Building2 className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mortgage</h3>
                <p className="text-gray-700 mb-4 flex-grow">Loan processing and broker support services</p>
                <Button variant="outline" className="w-full border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold mt-auto">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white h-full flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <Briefcase className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Administrative</h3>
                <p className="text-gray-700 mb-4 flex-grow">General business administration and support</p>
                <Button variant="outline" className="w-full border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold mt-auto">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white h-full flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <Search className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">SEO</h3>
                <p className="text-gray-700 mb-4 flex-grow">Search optimization and digital marketing support</p>
                <Button variant="outline" className="w-full border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold mt-auto">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white h-full flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <Cpu className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Enhanced</h3>
                <p className="text-gray-700 mb-4 flex-grow">Future-ready AI-powered virtual assistance</p>
                <Button variant="outline" className="w-full border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold mt-auto">
                  Learn More
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
            Frequently Asked Questions: Property Management Virtual Assistants
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What specific tasks can a property management virtual assistant handle?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Property management virtual assistants handle the complete tenant lifecycle including inquiry responses, application processing, lease coordination, maintenance request management, rent collection follow-up, inspection scheduling, lease renewals, and landlord communication. They work within your property management software and follow your established procedures to maintain consistency and quality standards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How much can property management companies save with virtual assistants?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Property management companies typically achieve 60-75% cost savings through virtual assistant implementation. A role that costs $55,000-$65,000 annually locally generally costs $16,000-$20,000 when supported by a Filipino property management virtual assistant, including all management fees and benefits. Beyond direct savings, companies eliminate recruitment, office space, equipment, and local employment compliance costs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How do property management virtual assistants handle urgent maintenance requests?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Property management virtual assistants follow established escalation procedures for urgent maintenance requests. They can immediately acknowledge receipt, assess urgency based on predefined criteria, contact approved contractors for emergency situations, and escalate to local property managers when required. They maintain 24/7 availability for true emergencies while handling routine maintenance coordination during business hours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What property management software do virtual assistants work with?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Property management virtual assistants are trained on all major platforms including Console Cloud, PropertyMe, Palace, REST Professional, AppFolio, Buildium, and Rent Manager. They can work within your existing system through secure VPN connections with proper user access controls. Most virtual assistants can become proficient with new software within 1-2 weeks with proper training and documentation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How long does it take to implement a property management virtual assistant?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Implementation typically takes 30-60 days from start to full productivity. This includes 1-2 weeks for recruitment and selection, 1-2 weeks for onboarding and initial training, and 2-4 weeks to reach full productivity. Success depends on having documented procedures, proper software access setup, and clear communication protocols. Companies with well-documented processes can achieve faster implementation timelines.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What's the difference between a property management virtual assistant and a general virtual assistant?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Property management virtual assistants specialize specifically in property management workflows, terminology, and software platforms. They understand tenant communication protocols, lease requirements, maintenance coordination, and compliance procedures. General virtual assistants typically handle broader administrative tasks but lack the specialized knowledge of property management processes, tenant relations, and industry-specific software platforms.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Zap className="w-10 h-10 text-white mr-3" />
            Ready to Transform Your Property Management Operations?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Whether you're managing 50 properties or 500, specialized property management virtual assistants can transform your operations, reduce costs, and improve tenant satisfaction.
          </p>
          <p className="text-lg mb-8 opacity-90">
            Our comprehensive outsourcing approach means you get specialized property management assistants backed by professional infrastructure, ongoing management, and proven results from 500+ successful placements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-20 rounded-lg p-4 text-white">
              <BarChart className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-bold mb-2 text-white">1. Portfolio Analysis</div>
              <div className="text-sm opacity-90 text-white">We analyze your processes and identify savings</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 text-white">
              <Target className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-bold mb-2 text-white">2. Custom Strategy</div>
              <div className="text-sm opacity-90 text-white">Receive tailored implementation plan with ROI</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 text-white">
              <Zap className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-bold mb-2 text-white">3. Fast Implementation</div>
              <div className="text-sm opacity-90 text-white">Start within 30-60 days</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Your Free Strategy Call Today
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold">
              Stop the Chaos – Book Now
              <Clock className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="text-sm opacity-75 font-semibold">
            ⏰ The cost of waiting is higher than the cost of starting.
          </p>
          <p className="text-sm opacity-75 mt-2">
            Join 500+ businesses already transforming their operations with ShoreAgents virtual assistants
          </p>
        </div>

      </div>
    </div>
  );
}
