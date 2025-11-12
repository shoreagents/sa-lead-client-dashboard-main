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
  Calculator,
  Globe,
  Server,
  BarChart,
  Box,
  Layers,
  PenTool,
  Settings
} from 'lucide-react';
import Image from 'next/image';

export default function ArchitecturalOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <Badge className="bg-red-600 text-white px-4 py-2 text-lg hover:bg-red-700">
              🚨 CRITICAL: 68% of Architecture Firms Are Drowning in Administrative Overload
            </Badge>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Architectural Outsourcing: Complete 2025 Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            While smart firms embrace systematic architectural outsourcing, others are burning out their expensive architects on CAD cleanup, permit applications, and project documentation. Don't become another statistic losing $85K+ annually on misallocated talent.
          </p>
          
          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=600&fit=crop"
              alt="Architectural outsourcing with blueprints and drafting tools representing CAD and BIM services"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700 mb-8">
            Professional Architecture Support That Actually Works – From CAD Drafting to Project Coordination
          </h2>

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
              <Calculator className="w-5 h-5 mr-2" />
              See Pricing
            </Button>
          </div>
        </div>

        {/* Key Stats Grid */}
        <div className="bg-gradient-to-br from-lime-50 to-lime-100 rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">500+</span>
              </div>
              <p className="text-gray-700 font-medium">Placements</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">78%</span>
              </div>
              <p className="text-gray-700 font-medium">Cost Savings</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">12+</span>
              </div>
              <p className="text-gray-700 font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">24/7</span>
              </div>
              <p className="text-gray-700 font-medium">Support</p>
            </div>
          </div>
        </div>

        {/* Stephen's Introduction */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 mb-16">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-16 h-16 bg-lime-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Stephen Atcheler, CEO of ShoreAgents</h3>
              <p className="text-sm text-gray-600">500+ Successful Placements | 12+ Years Industry Experience</p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">
              The Architecture Industry's Biggest Talent Allocation Problem
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              After 12 years in the Philippines BPO industry and 500+ successful placements, I've seen how architecture firms waste their most expensive talent on tasks that don't require their expertise.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Here's the brutal reality: Your $85,000 architect shouldn't be spending 40% of their time on CAD cleanup, permit applications, and project documentation. Yet that's exactly what's happening in 68% of architecture firms across Australia, New Zealand, and the USA.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              The firms that understand systematic architectural outsourcing are scaling faster, winning more projects, and keeping their architects focused on actual architecture. The ones that don't? They're burning out their best talent while competitors eat their market share.
            </p>
          </div>
        </div>

        {/* 2025 Market Reality */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            2025 Architecture Market Reality Check
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            The global architecture services market hit $394.6 billion in 2024, but here's what industry reports won't tell you about the talent allocation crisis:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <AlertCircle className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">68% Administrative Overload</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Architecture firms report their licensed professionals spend 40%+ time on non-design tasks
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <DollarSign className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">$85K+ Talent Waste</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Average annual cost of misallocating senior architectural talent to routine tasks
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Clock className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">47% Project Delays</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Firms report delays due to internal resource allocation bottlenecks
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <AlertCircle className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">73% Burnout Risk</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Licensed architects report feeling overwhelmed by administrative workload
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 bg-lime-50 border-l-4 border-lime-600 p-6 rounded-lg">
            <p className="text-lg text-gray-900 font-semibold">
              Meanwhile, smart architecture firms using systematic outsourcing are experiencing 30% faster project completion, 78% cost reduction on support tasks, and significantly higher architect satisfaction rates.
            </p>
          </div>
        </div>

        {/* What Is Architectural Outsourcing */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What is Architectural Outsourcing?
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Architectural outsourcing is the systematic delegation of non-core architectural tasks to qualified professionals, allowing your licensed architects to focus on design, client relationships, and high-value decision-making.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              This isn't about replacing your architects—it's about amplifying their impact. When your $85,000 architect spends their day on CAD cleanup and permit applications, you're essentially paying premium rates for administrative work.
            </p>
          </div>

          {/* Core Services */}
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Core Architectural Outsourcing Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <PenTool className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">CAD Drafting & Documentation</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Technical drawing production, detail development, construction documentation, and drawing set coordination
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Box className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">3D Modeling & Visualization</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Building information modeling (BIM), 3D rendering, walkthrough animations, and presentation materials
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Permit & Regulatory Support</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Permit application preparation, code compliance checking, regulatory research, and submission coordination
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Project Administration</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Project tracking, document management, client communication, and administrative coordination
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Types of Support */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Types of Architectural Support We Provide
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Whether you need an architectural assistant for general support, a specialized CAD operator for technical drawings, or a project coordinator for administrative management, our Philippines-based professionals can fill any architectural support role your firm requires.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Architectural Assistant vs CAD Operator vs Project Coordinator
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-lime-50">
                  <th className="border border-lime-200 px-4 py-3 text-left text-gray-900 font-bold">Role Type</th>
                  <th className="border border-lime-200 px-4 py-3 text-left text-gray-900 font-bold">Primary Focus</th>
                  <th className="border border-lime-200 px-4 py-3 text-left text-gray-900 font-bold">Key Responsibilities</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">Architectural Assistant</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">General Support</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">Project coordination, client communication, document management, administrative tasks</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">CAD Operator</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">Technical Drawing</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">AutoCAD drafting, Revit modeling, technical documentation, drawing set production</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">Project Coordinator</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">Project Management</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">Timeline tracking, permit coordination, regulatory compliance, stakeholder communication</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mt-6 italic">
            Our architectural support specialists are skilled in industry-standard software including AutoCAD, Revit, SketchUp, 3ds Max, and various BIM platforms. However, we don't provide software training or licenses—we find candidates who already possess the technical skills your specific projects require.
          </p>
        </div>

        {/* Why Choose ShoreAgents */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose ShoreAgents for Your Architectural Outsourcing Needs
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            After 500+ successful placements and 12 years in the Philippines BPO industry, we've perfected the process of matching architecture firms with skilled professionals who understand both technical requirements and Western business practices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Building2 className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">🏢 Professional Office Environment</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Clark-based facility with security, biometric access, and enterprise-grade technology infrastructure
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">🎯 Skilled Candidate Matching</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We find candidates with existing CAD, BIM, and architectural software proficiency based on your specific requirements
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">⚡ Time Zone Advantage</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Perfect alignment with Australia, New Zealand, and USA business hours for seamless collaboration
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">🛡️ Data Security & Compliance</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Enterprise-grade security protocols, endpoint protection, and confidentiality agreements
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Honest Approach */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Honest Approach to Architectural Outsourcing
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We don't provide architectural training or software licenses—that's not our business model. Instead, we focus on finding candidates who already have the specific technical skills your projects require, whether that's advanced Revit modeling, AutoCAD proficiency, or specialized BIM experience.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            What we DO provide is professional infrastructure, ongoing management, and skilled professionals who understand Western business practices and architectural workflows. You get the technical expertise you need without the overhead of training or managing remote staff.
          </p>
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Cost Reality Check</h3>
            <p className="text-lg text-gray-700 mb-4">
              A CAD operator in Australia costs $65,000+ annually. Our architectural support specialists deliver the same quality work for approximately $14,300 annually, representing a 78% cost reduction while maintaining professional standards.
            </p>
            <p className="text-xl font-bold text-lime-600">
              That's an annual savings of $50,700 per position—money you can reinvest in business growth, technology upgrades, or additional architectural talent.
            </p>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            How Our Architectural Outsourcing Process Works
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Our proven methodology ensures successful integration of architectural support professionals into your existing workflows.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Requirements Analysis</h3>
              <p className="text-gray-700">
                Detailed assessment of your software requirements, project types, and specific technical skills needed
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Candidate Matching</h3>
              <p className="text-gray-700">
                Skilled professionals identified based on your exact technical requirements and project needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integration & Setup</h3>
              <p className="text-gray-700">
                Professional onboarding, system access setup, and workflow integration coordination
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Management</h3>
              <p className="text-gray-700">
                Continuous performance monitoring, quality assurance, and professional development support
              </p>
            </div>
          </div>
        </div>

        {/* Service Options */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Choose Your Architectural Support Solution
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Every architecture firm has different needs and growth stages. Our scalable approach lets you start small and expand as your requirements evolve.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Small – One Agent</h3>
                  <p className="text-gray-600 mb-4">
                    Perfect for smaller firms or those new to architectural outsourcing. Test our quality and cultural fit with a single CAD operator or architectural assistant.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 text-left mb-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>$14,300 annually vs $65,000+ local cost</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Single specialist focused on your needs</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Ideal for testing workflows and integration</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Easy to scale up after proving success</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Learn about starting with one agent →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-xl transition-shadow bg-lime-50 h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <Badge className="bg-lime-600 text-white mb-4">MOST POPULAR</Badge>
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Scale Smart – Build Your Team</h3>
                  <p className="text-gray-600 mb-4">
                    Ideal for growing firms needing specialized support across multiple functions. Combine CAD operators, project coordinators, and admin assistants.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 text-left mb-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Multiple specialists working together</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Coordinated project management approach</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Covers CAD, BIM, admin, and coordination</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Scalable from 2-8 team members</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Explore team building solutions →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Go Big – Enterprise Workforce</h3>
                  <p className="text-gray-600 mb-4">
                    For established firms with complex operations, multiple locations, or major projects requiring comprehensive architectural support across all functions.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 text-left mb-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Complete department-level support</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Integrated workflow management</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Multi-project coordination capability</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Enterprise-level quality assurance</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Discover enterprise workforce solutions →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Services */}
        <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Complete Design & Construction Support Ecosystem
          </h2>
          <p className="text-xl text-gray-700 text-center mb-8">
            Architecture firms don't operate in isolation. Our comprehensive outsourcing services connect seamlessly with related disciplines to support your entire project lifecycle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-lime-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Settings className="w-6 h-6 text-lime-600 mr-2" />
                  Engineering Support
                </h3>
                <p className="text-gray-700 mb-3">
                  Structural, MEP, and civil engineering support for comprehensive project development
                </p>
                <a href="#" className="text-lime-600 hover:text-lime-700 font-semibold flex items-center">
                  Learn about engineering outsourcing →
                </a>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Building2 className="w-6 h-6 text-lime-600 mr-2" />
                  Construction Coordination
                </h3>
                <p className="text-gray-700 mb-3">
                  Project management, contractor coordination, and construction administration support
                </p>
                <a href="#" className="text-lime-600 hover:text-lime-700 font-semibold flex items-center">
                  Explore construction outsourcing →
                </a>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <PenTool className="w-6 h-6 text-lime-600 mr-2" />
                  Specialized Drafting
                </h3>
                <p className="text-gray-700 mb-3">
                  Technical drafting, detail development, and production drawing creation
                </p>
                <a href="#" className="text-lime-600 hover:text-lime-700 font-semibold flex items-center">
                  Discover drafting outsourcing →
                </a>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Calculator className="w-6 h-6 text-lime-600 mr-2" />
                  Cost Estimation
                </h3>
                <p className="text-gray-700 mb-3">
                  Quantity takeoffs, cost analysis, and budget preparation for project planning
                </p>
                <a href="#" className="text-lime-600 hover:text-lime-700 font-semibold flex items-center">
                  View estimating outsourcing →
                </a>
              </CardContent>
            </Card>
          </div>

          <p className="text-gray-700 text-center mt-8 italic">
            This integrated approach means you can scale your entire design and construction support ecosystem through a single partner, ensuring consistent quality, communication, and project coordination across all disciplines.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How much does architectural outsourcing cost?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our architectural support specialists start at $14,300 USD annually, compared to $65,000+ for local Australian staff. That's a 78% cost saving while maintaining professional quality and standards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Do you provide training for architectural software?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  No, we don't provide training or software licenses. We specialize in finding candidates who already have the specific technical skills you need—whether that's AutoCAD, Revit, SketchUp, or other architectural software proficiency.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What types of architectural projects can be outsourced?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  CAD drafting, 3D modeling, BIM development, construction documentation, permit applications, project coordination, and administrative tasks. Essentially any architectural support work that doesn't require physical site presence.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How do you ensure quality and project security?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Professional office environment with enterprise-grade security, confidentiality agreements, endpoint protection, and ongoing quality management. All staff work from our secure Clark facility, not from home.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What's the time zone advantage for architectural outsourcing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Philippines time zones align perfectly with Australia, New Zealand, and USA business hours. Your architectural support team can work during your business day or provide overnight project completion for faster turnaround.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Can architectural outsourcing scale with my firm's growth?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes. Start with one architectural assistant, expand to a specialized team, or implement enterprise-level support. Our scalable approach grows with your business needs and project requirements.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Architecture Firm?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Stop wasting your $85,000 architects on $15,000 tasks. Discover how systematic architectural outsourcing can save you 78% on operational costs while freeing your team to focus on actual architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Book Your Consultation
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold">
              <DollarSign className="w-5 h-5 mr-2" />
              See Investment Options
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">
            Proven Results from Architecture Firms
          </p>
        </div>
      </div>
    </div>
  );
}
