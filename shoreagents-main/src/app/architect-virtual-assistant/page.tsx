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
  Compass,
  Layers,
  Layout,
  Boxes,
  Pencil,
  FileCheck,
  Ruler,
  Building2,
  Lightbulb,
  Settings,
  Globe,
  Calendar,
  Monitor
} from 'lucide-react';
import Image from 'next/image';

export default function ArchitectVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge variant="destructive" className="mb-4 bg-red-600 text-white px-4 py-2 text-sm font-semibold flex items-center justify-center w-fit mx-auto">
            <AlertCircle className="w-4 h-4 mr-2" />
            CRITICAL: Architectural Firms Losing $85,000+ Annually on Design Coordination Bottlenecks
          </Badge>
          <p className="text-lg text-gray-600 mb-6">
            While innovative architectural firms scale with systematic architect virtual assistant solutions, others get trapped by expensive local hiring, project delays, and CAD drafting backlogs. Don't let design bottlenecks limit your creative potential.
          </p>

          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            Architect Virtual Assistant: Transform Your Design Practice Operations
          </h1>

          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=600&fit=crop"
              alt="Filipino architect virtual assistant working with architectural design visualization technology and 3D building models"
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
            The Costly Architectural Staffing Mistake
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              After 500+ offshore placements across industries, I've seen architectural firms make the same costly mistake repeatedly.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              They think they can just hire local CAD drafters and somehow scale from handling 3 to 15+ simultaneous design projects without drowning in technical documentation, design coordination, and client communication chaos. What they get instead is mounting overhead, project delays, and architects burning out from administrative tasks instead of focusing on creative design and client relationships.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              But here's what I discovered through our systematic approach to architectural firm staffing…
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold italic">
              An architect virtual assistant transforms architectural operations by handling design coordination, technical documentation, and administrative tasks while delivering 60-70% cost savings compared to local hiring.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you need an architectural project coordinator for multi-project management, a CAD drafting assistant for technical drawings, a design support specialist for presentation materials, or an architectural admin assistant for comprehensive project support – modern architect virtual assistants provide systematic solutions that traditional hiring simply cannot match.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Architectural firms face unprecedented challenges in 2025—complex design requirements, tight project deadlines, competitive fee pressures, and regulatory compliance demands. These pressures make architecture ideal for virtual assistant implementation, which has evolved from basic administrative support to comprehensive design support partnerships.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">70%</div>
              <div className="text-gray-600 font-medium">Cost Savings vs Local Drafters</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">200%</div>
              <div className="text-gray-600 font-medium">Design Project Capacity</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">40%</div>
              <div className="text-gray-600 font-medium">Faster Design Development</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Design Support Coverage</div>
            </CardContent>
          </Card>
        </div>

        {/* Strategic Case */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="w-8 h-8 text-lime-600 mr-3" />
            The Strategic Case for Architect Virtual Assistants in 2025
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Architect virtual assistants have transformed from cost-cutting measures to competitive advantages that leading architectural firms leverage to outpace competitors. Unlike generic virtual assistant services, architectural design assistants specialize in design workflows, technical documentation, and architecture-specific software platforms.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Based on our 500+ placements, architectural firms implementing structured strategies report:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">60-70% reduction in technical documentation costs</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">200% increase in design project capacity</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">40% faster design development and documentation</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">50% improvement in client presentation quality</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">75% more time for creative design and client relationships</span>
            </div>
          </div>

          <div className="text-center mt-6">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 font-semibold">
              <Compass className="mr-2 h-5 w-5" />
              Schedule Your Free Architect VA Strategy Call
            </Button>
          </div>
        </div>

        {/* Cost-Benefit Analysis */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <BarChart className="w-8 h-8 text-lime-600 mr-3" />
            Real-World Impact: Architectural Firm Cost Analysis
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            For a concrete picture of potential savings, consider this comparison for a mid-sized architectural firm managing 8-15 simultaneous design projects:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-lime-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Role</th>
                  <th className="px-6 py-4 text-right font-semibold">Local Cost (Annual)</th>
                  <th className="px-6 py-4 text-right font-semibold">VA Cost (Annual)</th>
                  <th className="px-6 py-4 text-right font-semibold">Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-lime-50">
                  <td className="px-6 py-4 font-medium text-gray-900">CAD Drafter</td>
                  <td className="px-6 py-4 text-right text-gray-700">$65,000</td>
                  <td className="px-6 py-4 text-right text-gray-700">$19,000</td>
                  <td className="px-6 py-4 text-right text-lime-600 font-bold">71%</td>
                </tr>
                <tr className="hover:bg-lime-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Design Assistant</td>
                  <td className="px-6 py-4 text-right text-gray-700">$55,000</td>
                  <td className="px-6 py-4 text-right text-gray-700">$16,000</td>
                  <td className="px-6 py-4 text-right text-lime-600 font-bold">71%</td>
                </tr>
                <tr className="hover:bg-lime-50">
                  <td className="px-6 py-4 font-medium text-gray-900">BIM Coordinator</td>
                  <td className="px-6 py-4 text-right text-gray-700">$72,000</td>
                  <td className="px-6 py-4 text-right text-gray-700">$21,000</td>
                  <td className="px-6 py-4 text-right text-lime-600 font-bold">71%</td>
                </tr>
                <tr className="hover:bg-lime-50">
                  <td className="px-6 py-4 font-medium text-gray-900">3D Visualization Specialist</td>
                  <td className="px-6 py-4 text-right text-gray-700">$68,000</td>
                  <td className="px-6 py-4 text-right text-gray-700">$20,000</td>
                  <td className="px-6 py-4 text-right text-lime-600 font-bold">71%</td>
                </tr>
                <tr className="bg-lime-100 font-bold">
                  <td className="px-6 py-4 text-gray-900">Total Annual Savings</td>
                  <td className="px-6 py-4 text-right text-gray-900">$260,000</td>
                  <td className="px-6 py-4 text-right text-gray-900">$76,000</td>
                  <td className="px-6 py-4 text-right text-lime-600 text-xl">$184,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6 font-semibold">
            Beyond direct savings, the strategic advantage comes from redirecting local architects to high-value activities like conceptual design, client consultation, and strategic project leadership.
          </p>

          <div className="text-center mt-6">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 font-semibold">
              <DollarSign className="mr-2 h-5 w-5" />
              See Complete Architectural ROI Analysis
            </Button>
          </div>
        </div>

        {/* Stephen's Take */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-8 h-8 text-lime-600 mr-3" />
            Stephen's Take: The Systematic Architectural Staffing Solution
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Through 500+ offshore placements since 2012, I've developed a systematic approach to helping architectural firms scale their design capacity without the traditional hiring headaches. The pattern I see repeatedly is architectural firms that excel at creative design but struggle with the systematic technical processes needed to manage multiple design projects simultaneously.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What separates successful architectural firms from struggling ones is their ability to systematize design documentation, technical coordination, and client communication. When I work with architectural firms to implement specialized architect virtual assistants, the transformation isn't just about cost savings – it's about creating systematic excellence that enables creative focus and sustainable growth.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The systematic approach we've developed ensures that architectural design assistants understand design workflows, can navigate architectural software platforms, and maintain the detailed technical documentation that architectural projects require. This isn't generic administrative support – it's architecture-specific systematic solutions.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold italic">
              When architectural firms can focus on creative design while their architectural project coordinators handle the systematic processes, that's when design excellence becomes scalable.
            </p>
          </div>
        </div>

        {/* Comprehensive Services */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Layers className="w-8 h-8 text-lime-600 mr-3" />
            Comprehensive Architect Virtual Assistant Services
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Architectural projects require systematic coordination across multiple design phases and technical disciplines. Here are the core functions where specialized architect virtual assistants deliver exceptional ROI and enable design teams to focus on creativity and innovation:
          </p>

          <div className="space-y-8">
            {/* Design Development */}
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Pencil className="w-6 h-6 text-lime-600 mr-2" />
                  1. Design Development and Documentation
                </h3>
                <p className="text-gray-700 mb-4">
                  Professional architectural project coordinators and CAD drafting assistants handle the systematic workflows that transform concepts into detailed designs:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Ruler className="w-5 h-5 text-lime-600 mr-2" />
                      CAD Drafting & Technical Drawings
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Floor plans, sections, and elevations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Detail drawings and construction docs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Drawing set coordination and checking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">AutoCAD, Revit, and ArchiCAD proficiency</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Boxes className="w-5 h-5 text-lime-600 mr-2" />
                      BIM Coordination & 3D Modeling
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Revit model development and maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">3D modeling and massing studies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">BIM standards implementation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Clash detection and coordination</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Monitor className="w-5 h-5 text-lime-600 mr-2" />
                      Visualization & Presentation
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">3D renderings and visualization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Client presentation board creation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Marketing materials and portfolio</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Virtual reality and walkthroughs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project Coordination */}
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Settings className="w-6 h-6 text-lime-600 mr-2" />
                  2. Project Coordination and Administration
                </h3>
                <p className="text-gray-700 mb-4">
                  Systematic project management and administrative support through dedicated architectural administrative assistants:
                </p>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Design Phase Coordination</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Project schedule development and tracking</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Consultant coordination and communication</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Design review meeting preparation and follow-up</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Drawing transmittal and version control</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Client communication and progress updates</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Regulatory Support */}
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileCheck className="w-6 h-6 text-lime-600 mr-2" />
                  3. Regulatory and Compliance Support
                </h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive regulatory coordination through specialized architectural design support:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Permit & Approval Coordination</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Building permit application preparation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Code compliance research and documentation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Authority submission and tracking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Planning approval support and coordination</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Documentation & Quality Control</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Drawing set quality control and checking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Specification writing and coordination</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Project file organization and archiving</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Design standard implementation and checking</span>
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
              Discover Our Architect VA Implementation Process
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <HelpCircle className="w-10 h-10 text-lime-600 mr-3" />
            Frequently Asked Questions: Architect Virtual Assistants
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What specific tasks can an architect virtual assistant handle?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Architect virtual assistants handle comprehensive design support including CAD drafting, BIM coordination, 3D modeling, architectural visualization, drawing set coordination, permit application preparation, project documentation, and client presentation materials. They work with all major architectural software platforms and can manage systematic design workflows from schematic design through construction documentation while maintaining professional quality standards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How much can architectural firms save with virtual assistants?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Architectural firms typically achieve 60-70% cost savings through architect virtual assistant implementation. A role that costs $65,000-$72,000 annually locally generally costs $19,000-$21,000 when supported by a Filipino architectural design assistant, including all management fees. Beyond direct savings, firms eliminate recruitment, office space, software licensing, and benefit costs while gaining systematic design coordination capabilities.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What architectural software do virtual assistants work with?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Architect virtual assistants are proficient in all major platforms including AutoCAD, Revit, ArchiCAD, SketchUp, Rhino, 3ds Max, V-Ray, and Adobe Creative Suite. They work within your existing software licenses through secure VPN connections and can become proficient with firm-specific templates, standards, and workflows within 1-2 weeks of proper systematic training.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How long does it take to implement an architect virtual assistant?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Implementation typically takes 30-60 days from start to full productivity. This includes 1-2 weeks for recruitment and selection, 1-2 weeks for onboarding and software setup, and 2-4 weeks to reach full productivity with your specific design workflows and standards. Success depends on having documented design standards, proper software access, and clear quality control protocols established through our systematic approach.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Zap className="w-10 h-10 text-white mr-3" />
            Ready to Transform Your Architectural Practice?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Don't let design documentation bottlenecks limit your creative potential. Join the forward-thinking architectural firms leveraging systematic architect virtual assistant solutions to scale efficiently and profitably.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-20 rounded-lg p-4 text-white">
              <div className="text-4xl font-bold mb-2 text-white">500+</div>
              <div className="text-sm opacity-90 text-white">Successful Placements</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 text-white">
              <div className="text-4xl font-bold mb-2 text-white">70%</div>
              <div className="text-sm opacity-90 text-white">Average Cost Savings</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 text-white">
              <div className="text-4xl font-bold mb-2 text-white">30-60</div>
              <div className="text-sm opacity-90 text-white">Days to Full Productivity</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Compass className="mr-2 h-5 w-5" />
              Schedule Your Free Architect VA Strategy Call
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold">
              View Investment & ROI Details
              <DollarSign className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="text-lg font-semibold opacity-90">
            Transform your architectural practice with systematic offshore excellence.
          </p>
          <p className="text-sm opacity-75 mt-2">
            Join architectural firms already saving $184,000+ annually while scaling to 200% more design capacity.
          </p>
        </div>

      </div>
    </div>
  );
}
