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
  Scale,
  BookOpen,
  Lock,
  Search
} from 'lucide-react';
import Image from 'next/image';

export default function LegalOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <Badge className="bg-red-600 text-white px-4 py-2 text-lg hover:bg-red-700">
              ⚖️ CRITICAL: Legal Compliance Costs Rising 34% While 67% of Firms Struggle with Capacity
            </Badge>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Legal Outsourcing: Complete 2025 Guide to Systematic Legal Support
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            While progressive law firms embrace systematic legal outsourcing, others face escalating costs, resource constraints, and regulatory complexity. Don't let operational limitations restrict your legal practice growth.
          </p>
          
          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop"
              alt="Legal outsourcing professional with law books and scales of justice representing legal services"
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
              <Calculator className="w-5 h-5 mr-2" />
              See Pricing
            </Button>
          </div>
        </div>

        {/* Introduction Text */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            How law firms and legal departments achieve 65% cost reduction while maintaining compliance standards through strategic legal outsourcing partnerships.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The legal industry is experiencing a fundamental shift. Rising operational costs, increasing regulatory complexity, and growing client demands for efficiency have created an environment where traditional law firm models struggle to remain competitive.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At ShoreAgents, we've helped law firms across Australia, New Zealand, and the USA transform their operations through systematic legal outsourcing. Our approach focuses on providing skilled legal professionals who understand Western legal frameworks while delivering substantial cost savings.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Legal outsourcing isn't just about cost reduction—it's about accessing specialized expertise, ensuring consistent quality, and creating scalable operations that grow with your practice. When implemented correctly, it becomes a strategic advantage that allows your firm to focus on high-value legal work while maintaining operational excellence.
          </p>
        </div>

        {/* Key Stats Grid */}
        <div className="bg-gradient-to-br from-lime-50 to-lime-100 rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">67%</span>
              </div>
              <p className="text-gray-700 font-medium">Law Firms Face Capacity Constraints</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">65%</span>
              </div>
              <p className="text-gray-700 font-medium">Cost Reduction Through Outsourcing</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <DollarSign className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">34%</span>
              </div>
              <p className="text-gray-700 font-medium">Annual Compliance Cost Increases</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">24/7</span>
              </div>
              <p className="text-gray-700 font-medium">Operational Coverage Available</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white font-semibold">
            <Phone className="w-5 h-5 mr-2" />
            Book Your Legal Outsourcing Consultation
          </Button>
        </div>

        {/* What Is Legal Outsourcing */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Is Legal Outsourcing?
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              Legal outsourcing involves delegating specific legal tasks and processes to qualified professionals outside your immediate organization. Rather than hiring full-time, in-house staff for every function, law firms and legal departments can access specialized expertise through strategic outsourcing partnerships.
            </p>
          </div>

          {/* Core Services */}
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Core Legal Outsourcing Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Search className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Legal Research</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Case law analysis, statutory research, legal precedent identification, regulatory compliance research, and international legal comparative studies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Document Preparation</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Contract drafting, legal document review, compliance documentation, filing preparation, and template development for standard legal procedures.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Administrative Support</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Case management, client communication, scheduling, billing support, and regulatory filing coordination across multiple jurisdictions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Specialized Practice Areas */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Specialized Legal Practice Areas
          </h2>
          
          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Scale className="w-7 h-7 text-lime-600 mr-3" />
              Legal Outsourcing for Conveyancing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Legal outsourcing for conveyancing involves delegating key legal tasks related to property settlement—such as title searches, contract review, and risk assessments—to qualified professionals outside your local team.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This approach is particularly beneficial for real estate transactions, where conveyancers play a critical role in ensuring smooth, compliant transfer of ownership. By outsourcing, firms gain access to skilled legal experts at lower costs while maintaining flexibility during fluctuating workloads.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Outsourcing enhances process efficiency, reduces legal risk, and allows your core team to focus on strategic business functions—without sacrificing quality or compliance standards.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Other Practice Areas Include:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Corporate law and business compliance</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Immigration law documentation and processing</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Family law case preparation and research</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Personal injury case management</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Intellectual property research and filing</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Employment law compliance and documentation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Benefits */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Strategic Benefits of Legal Outsourcing
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12">
            Legal outsourcing delivers measurable benefits that extend far beyond simple cost reduction. Here are the key advantages that make it a strategic imperative for modern law firms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-lime-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-10 h-10 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Substantial Cost Reduction</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Achieve 65% cost reduction compared to local hiring while maintaining quality standards. Eliminate overhead costs including office space, equipment, benefits, and training expenses.
                </p>
                <p className="text-lg font-semibold text-lime-600">
                  Average savings: $45,000-$75,000 annually per outsourced role
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="w-10 h-10 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Access to Specialized Expertise</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tap into skilled legal professionals with specialized knowledge in specific practice areas, jurisdictions, and legal technologies.
                </p>
                <p className="text-lg font-semibold text-lime-600">
                  Immediate access to expertise that might take months to recruit locally
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-10 h-10 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Scalable Operations</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Scale your legal support team up or down based on case load and business needs without the complexity of traditional hiring and firing.
                </p>
                <p className="text-lg font-semibold text-lime-600">
                  Flexible capacity management aligned with business cycles
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Operational Excellence */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Operational Excellence Benefits</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-lime-600 pl-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Enhanced Focus on Core Legal Work</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Free up your senior legal professionals to focus on high-value activities like client relationship management, complex legal strategy, and business development.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When routine legal tasks are handled by skilled outsourced professionals, your team can concentrate on the work that directly drives firm growth and client satisfaction.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Improved Turnaround Times</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Leverage time zone advantages for faster project completion. While your local team focuses on client-facing activities during business hours, your outsourced team can handle research, documentation, and administrative tasks.
                </p>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  Result: Faster case processing, quicker response times, and improved client satisfaction through enhanced service delivery.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Risk Mitigation and Compliance</h4>
                <p className="text-gray-700 leading-relaxed">
                  Professional legal outsourcing providers maintain strict quality control processes, compliance protocols, and risk management procedures that often exceed what individual firms can implement internally.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3 font-semibold">
                  Reduce errors, ensure consistent quality, and maintain compliance across all legal processes through systematic outsourcing partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16 space-y-4">
          <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold">
            <Zap className="w-5 h-5 mr-2" />
            See Our Proven Process
          </Button>
          <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white font-semibold ml-4">
            <Phone className="w-5 h-5 mr-2" />
            Book Consultation Now
          </Button>
        </div>

        {/* Cost Analysis */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <Calculator className="w-10 h-10 text-lime-600 mr-3" />
            Legal Outsourcing Cost Analysis: Real Numbers
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Understanding the true cost of legal services requires analyzing total employment costs, not just salaries. Here's a comprehensive breakdown based on actual market data.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Local Cost */}
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Legal Staff Total Cost Analysis</h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Australian Legal Assistant – Annual Cost Breakdown:</h4>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• Base salary: $55,000 – $75,000</li>
                <li>• Superannuation (11%): $6,050 – $8,250</li>
                <li>• Worker's compensation: $1,200 – $1,800</li>
                <li>• Payroll tax: $2,200 – $3,200</li>
                <li>• Office space & equipment: $12,000 – $18,000</li>
                <li>• Legal software licenses: $3,000 – $5,000</li>
                <li>• Training & development: $4,000 – $6,000</li>
                <li>• Annual leave & sick leave: $6,000 – $8,500</li>
              </ul>
              <p className="text-2xl font-bold text-red-600">TOTAL ANNUAL COST: $89,450 – $125,750</p>
            </div>

            {/* Outsourced Cost */}
            <div className="bg-lime-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ShoreAgents Legal Outsourcing Investment</h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Equivalent Legal Support – Complete Package:</h4>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• Setup fee: $596.66 (one-time)</li>
                <li>• Monthly service fee: $662 – $1,200</li>
                <li>• Professional office infrastructure: Included</li>
                <li>• Equipment & technology: Included</li>
                <li>• Ongoing management: Included</li>
                <li>• Quality assurance: Included</li>
                <li>• Cultural integration: Included</li>
                <li>• No leave or HR complications: N/A</li>
              </ul>
              <p className="text-xl font-bold text-lime-600 mb-2">TOTAL ANNUAL INVESTMENT:</p>
              <p className="text-lg font-semibold text-gray-900">$8,541 – $15,000 (Year 1)</p>
              <p className="text-lg font-semibold text-gray-900">$7,944 – $14,400 (Year 2+)</p>
            </div>
          </div>

          {/* Savings Calculation */}
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cost Savings Calculation:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Local Legal Staff Average:</p>
                <p className="text-3xl font-bold text-gray-900">$107,600</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">ShoreAgents Investment:</p>
                <p className="text-3xl font-bold text-lime-600">$11,775</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Annual Savings:</p>
                <p className="text-3xl font-bold text-green-600">$95,825</p>
              </div>
            </div>
            <p className="text-xl font-bold text-center text-green-600">
              (89% Cost Reduction) • ROI achieved in just 1.2 months
            </p>
          </div>

          {/* Hidden Costs */}
          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Hidden Costs of Local Legal Hiring</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Recruitment & Turnover</h4>
                <p className="text-gray-700 text-sm">
                  Legal recruitment costs $8,000-$15,000 per hire. With 22% annual turnover in legal support roles, these costs compound quickly.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Training & Integration</h4>
                <p className="text-gray-700 text-sm">
                  4-6 months to full legal competency. During this period, you're paying full salary for reduced productivity while managing training personally.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Management Overhead</h4>
                <p className="text-gray-700 text-sm">
                  Time spent on performance management, HR issues, compliance monitoring, and professional development. Value this at your billable rate.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quality & Compliance */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <Shield className="w-10 h-10 text-blue-600 mr-3" />
            Quality Assurance & Compliance in Legal Outsourcing
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Quality and compliance are non-negotiable in legal work. Here's how systematic legal outsourcing ensures standards that often exceed what individual firms can maintain internally.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-blue-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Lock className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Professional Infrastructure & Security</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Our legal support professionals work from secure, professional office environments with enterprise-grade security protocols. This includes biometric access control, endpoint security, and comprehensive data protection measures.
                </p>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  Unlike home-based arrangements, professional office infrastructure ensures consistent performance, security compliance, and professional accountability that legal work demands.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Multi-Layer Quality Control</h3>
                </div>
                <p className="text-gray-700 mb-3">Every piece of legal work goes through systematic quality control processes:</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Initial review by experienced legal professionals</li>
                  <li>• Compliance verification against relevant jurisdictional requirements</li>
                  <li>• Quality assurance review before delivery</li>
                  <li>• Performance tracking and continuous improvement</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Scale className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Compliance & Risk Management</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Jurisdictional Compliance</h4>
                    <p className="text-gray-700 text-sm">
                      Our legal professionals are trained in Australian, New Zealand, and US legal frameworks, ensuring compliance with local legal requirements and professional standards.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Data Security Protocols</h4>
                    <p className="text-gray-700 text-sm">
                      Enterprise-grade data protection, encrypted communication channels, and strict confidentiality protocols that meet international legal security standards.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Communication & Cultural Integration</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  English as an official language ensures clear, professional communication. Our legal support professionals understand Western legal terminology, procedures, and communication styles.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Time zone alignment with Australia, New Zealand, and the USA means real-time collaboration during your business hours, with the advantage of extended coverage for urgent matters.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Implementation Process: From Assessment to Success
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Successful legal outsourcing requires systematic implementation. Here's the proven process that ensures seamless integration and immediate value delivery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Needs Assessment</h3>
              <p className="text-gray-700">
                Comprehensive analysis of your current legal processes, workflow bottlenecks, and capacity requirements. We identify the specific tasks and roles that will deliver maximum value through outsourcing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Candidate Matching</h3>
              <p className="text-gray-700">
                Based on your specific requirements, we identify and screen candidates with the right combination of legal knowledge, technical skills, and cultural fit for your firm.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integration Setup</h3>
              <p className="text-gray-700">
                Systematic integration including system access, security protocols, communication channels, and initial training on your specific procedures and preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Optimization</h3>
              <p className="text-gray-700">
                Continuous monitoring, feedback integration, and performance optimization to ensure your outsourced team delivers maximum value and seamlessly integrates with your operations.
              </p>
            </div>
          </div>
        </div>

        {/* Service Tiers */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Service Tier Options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Individual Support</h3>
                  <p className="text-gray-600 mb-4">
                    Start with one dedicated legal professional to test processes and cultural fit.
                  </p>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Start with one specialist →
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Team Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Multiple specialists working together across different legal functions and practice areas.
                  </p>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Build your legal team →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Complete legal support infrastructure for large firms and legal departments.
                  </p>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Enterprise solutions →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mb-16 space-y-4">
          <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold">
            <DollarSign className="w-5 h-5 mr-2" />
            See Investment Options
          </Button>
          <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white font-semibold ml-4">
            <Phone className="w-5 h-5 mr-2" />
            Schedule Legal Consultation
          </Button>
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
                  What legal services can be safely outsourced?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Legal research, document preparation, case management, compliance documentation, contract review, and administrative support can all be effectively outsourced while maintaining quality and confidentiality standards. Client-facing strategic work typically remains in-house.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How do you ensure confidentiality and data security?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We maintain enterprise-grade security protocols including encrypted communication, secure office environments, biometric access control, and comprehensive confidentiality agreements. Our professionals work in professional offices with strict data protection measures that meet international legal security standards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What qualifications do your legal professionals have?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our legal professionals are university-educated with relevant legal qualifications and experience in Western legal frameworks. We recruit based on your specific requirements and ensure candidates have the appropriate combination of legal knowledge, technical skills, and cultural fit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How much can law firms save through legal outsourcing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Firms typically achieve 65-89% cost reduction compared to local hiring while maintaining quality. This includes savings on salaries, benefits, office space, equipment, and training costs. Average annual savings range from $75,000-$95,000 per outsourced role.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How does time zone difference affect legal outsourcing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Philippines time zones align well with Australia, New Zealand, and USA business hours, enabling real-time collaboration. This also provides extended coverage for urgent matters, with work continuing while your local team is offline, resulting in faster turnaround times.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Do you provide training for legal software and procedures?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We recruit candidates who already have the required skills and experience. While we don't provide software training, we identify professionals who are already proficient in the legal software and systems you use, or we can help coordinate training arrangements based on your specific needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Transform Your Legal Practice with Strategic Outsourcing
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't let operational limitations restrict your legal practice growth. Join progressive law firms achieving 65% cost reduction while maintaining the highest quality and compliance standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Your Legal Outsourcing Consultation
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold">
              <Award className="w-5 h-5 mr-2" />
              Read Success Stories
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">
            Transform your legal operations while maintaining the highest standards of quality, compliance, and client service.
          </p>
        </div>
      </div>
    </div>
  );
}
