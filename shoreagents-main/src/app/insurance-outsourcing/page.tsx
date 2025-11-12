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
  Shield,
  Users, 
  TrendingUp, 
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
  Lock,
  Server,
  BarChart,
  ThumbsUp,
  TrendingDown
} from 'lucide-react';
import Image from 'next/image';

export default function InsuranceOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <Badge className="bg-red-600 text-white px-4 py-2 text-lg hover:bg-red-700">
              🚨 CRITICAL: Insurance Companies Hemorrhaging $2.1M+ Annually on Inefficient Claims Processing
            </Badge>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Insurance Outsourcing: Complete Guide to Reducing Costs & Improving Efficiency
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            While forward-thinking insurers embrace systematic insurance outsourcing to slash operational costs by 67% and accelerate claim processing, others are drowning in manual workflows, compliance nightmares, and customer dissatisfaction. Don't let outdated processes destroy your competitive advantage.
          </p>
          
          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop"
              alt="Stack of insurance documents, calculator, and printed claim forms on an office desk representing insurance outsourcing for claims processing and administrative support"
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

        {/* Introduction Text */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <p className="text-xl text-gray-700 leading-relaxed">
            Professional insurance outsourcing isn't just about cutting costs – it's about accessing specialized expertise that transforms your entire claims operation. From first notice of loss to final settlement, offshore teams deliver the precision, speed, and regulatory compliance that modern insurance companies demand.
          </p>
        </div>

        {/* Key Stats Grid */}
        <div className="bg-gradient-to-br from-lime-50 to-lime-100 rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <TrendingDown className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">67%</span>
              </div>
              <p className="text-gray-700 font-medium">Average Cost Reduction</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">73%</span>
              </div>
              <p className="text-gray-700 font-medium">Faster Claims Processing</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">300%</span>
              </div>
              <p className="text-gray-700 font-medium">Scalability During Disasters</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">24/7</span>
              </div>
              <p className="text-gray-700 font-medium">Claims Support Coverage</p>
            </div>
          </div>
        </div>

        {/* Stephen's Industry Reality */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 mb-16">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-16 h-16 bg-lime-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">💡 Stephen's Industry Reality: Why Most Insurance Outsourcing Fails</h3>
              <p className="text-sm text-gray-600">CEO, ShoreAgents | 15+ Years Industry Experience</p>
            </div>
          </div>
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-gray-700 leading-relaxed">
              "Over the past 15 years, I've seen countless insurance companies make the same costly mistakes when it comes to outsourcing. They chase the cheapest hourly rates, thinking any warm body can process claims or handle customer service. This approach consistently leads to disaster."
            </p>
            <p className="text-gray-700 leading-relaxed">
              "The insurance industry has unique challenges that generic outsourcing providers simply don't understand. You need people who grasp the complexities of regulatory compliance, understand the nuances of different policy types, and can navigate sophisticated insurance software platforms like Guidewire or Duck Creek."
            </p>
            <p className="text-gray-700 leading-relaxed">
              "Here's what I've learned from working with insurance companies across Australia, New Zealand, and the United States: successful insurance outsourcing isn't about finding the cheapest labor. It's about accessing specialized expertise that's increasingly difficult to find in local markets."
            </p>
            <p className="text-gray-700 leading-relaxed">
              "Most insurance executives don't realize that in Australia, for example, finding someone who understands both complex property claims AND advanced insurance technology systems is nearly impossible. The local talent pool is limited, expensive, and often lacks the specialized training needed for efficient claims processing."
            </p>
            <p className="text-gray-700 leading-relaxed">
              "The Philippines has become the global hub for insurance operations precisely because of this talent concentration. Unlike other outsourcing destinations that focus on generic services, the Philippines has developed specialized insurance expertise over decades of serving major carriers worldwide."
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              "The insurance companies that thrive with offshore teams are those who understand this fundamental truth: you need specialized insurance professionals, not just general administrative workers. That's exactly what we provide through our systematic approach to insurance talent acquisition and development."
            </p>
          </div>
        </div>

        {/* What Companies Get Wrong */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center">
            <AlertCircle className="w-10 h-10 text-red-600 mr-3" />
            What Most Insurance Companies Get Catastrophically Wrong
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-8 h-8 text-red-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">The "Cheap Labor" Trap</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Most insurers think outsourcing means finding the cheapest possible workforce. This leads to disasters: botched claims, compliance failures, and customer retention nightmares. Professional insurance outsourcing requires specialized expertise, not just low hourly rates.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Server className="w-8 h-8 text-red-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">The Technology Integration Nightmare</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Insurance companies often expect outsourced teams to magically integrate with their existing systems. Without proper platform expertise and security protocols, this creates chaos. Successful insurance BPO requires deep knowledge of Guidewire, Duck Creek, and other industry-specific platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-red-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">The Compliance Catastrophe</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Insurance is one of the most regulated industries in the world. State-specific requirements, NAIC guidelines, and federal compliance create a minefield that untrained offshore teams can't navigate. This is why specialized insurance services outsourcing requires industry-specific expertise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How ShoreAgents Transforms */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <Award className="w-10 h-10 text-lime-600 mr-3" />
            How ShoreAgents Transforms Insurance Operations
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Here's the brutal truth: most BPO companies treat insurance like generic data entry. We approach insurance outsourcing as a specialized discipline requiring deep industry knowledge, advanced technology integration, and systematic quality controls.
          </p>

          <div className="space-y-8">
            {/* Specialized Expertise */}
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-lime-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialized Insurance Expertise</h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        We don't just provide workers – we provide insurance professionals. Our teams understand claims processing workflows, regulatory requirements, and customer service standards specific to property & casualty, life & health, and commercial insurance operations.
                      </p>
                      <p>
                        Each team member undergoes comprehensive training on insurance fundamentals, including policy types, coverage analysis, claims investigation procedures, and fraud detection protocols. This isn't generic call center training – it's specialized insurance education that takes months to complete.
                      </p>
                      <p className="font-semibold">
                        Our professionals understand the difference between liability and comprehensive coverage, can navigate complex policy language, and know when to escalate unusual claims. This level of expertise is what separates professional insurance BPO from basic administrative support.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technology Integration */}
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Server className="w-8 h-8 text-lime-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Technology Integration</h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        Our teams are trained on major insurance platforms including Guidewire, Duck Creek, Applied Systems, and Sapiens. We handle system integration, security protocols, and data management with the same standards used in our real estate outsourcing operations.
                      </p>
                      <p>
                        Unlike generic BPO providers who struggle with insurance software complexity, our team members are specifically trained on the workflow nuances of each platform. They understand how to navigate PolicyCenter for underwriting, ClaimCenter for claims management, and BillingCenter for payment processing.
                      </p>
                      <p className="font-semibold">
                        Security is paramount in insurance operations. Our infrastructure includes SOC 2 Type II compliance, end-to-end encryption, secure VPN connections, and multi-factor authentication protocols. We understand that insurance data requires the highest level of protection.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quality Assurance */}
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-8 h-8 text-lime-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Systematic Quality Assurance</h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        Every claim processed, every policy administered, and every customer interaction follows systematic quality protocols. We maintain 99.5% accuracy rates through continuous monitoring, regular training updates, and compliance verification procedures.
                      </p>
                      <p>
                        Our quality assurance program includes daily performance reviews, weekly compliance audits, and monthly training updates. We track key performance indicators including processing speed, accuracy rates, customer satisfaction scores, and regulatory compliance metrics.
                      </p>
                      <p className="font-semibold">
                        This systematic approach ensures consistent service delivery regardless of claim volume fluctuations or staff changes. Your insurance operations maintain the same high standards whether processing 100 claims or 1,000 claims per week.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Functions */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center">
            <FileText className="w-10 h-10 text-lime-600 mr-3" />
            Core Insurance Functions We Handle
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Claims Processing */}
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Claims Processing & Management</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>First Notice of Loss (FNOL) intake and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Claims investigation and evidence gathering</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Damage assessment coordination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Settlement processing and payment coordination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fraud detection and verification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Subrogation support and recovery processing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Policy Administration */}
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Policy Administration</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>New policy issuance and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Renewals and policy modifications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Premium calculations and billing support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Compliance verification and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Customer correspondence and notifications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Agent backend support and coordination</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Customer Service */}
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Service & Support</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>24/7 customer service and support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Policy inquiries and explanations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Claims status updates and coordination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Billing support and payment processing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Multi-channel communication management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Escalation handling and resolution</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Underwriting Support */}
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Underwriting Support</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Application review and verification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Risk assessment data gathering</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Documentation coordination and filing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Pricing calculations and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Regulatory compliance verification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Decision support and recommendations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Cost Savings Table */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center">
            <DollarSign className="w-10 h-10 text-green-600 mr-3" />
            Real Cost Savings Analysis
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-lime-600">
                  <th className="py-4 px-4 font-bold text-gray-900">Insurance Function</th>
                  <th className="py-4 px-4 font-bold text-gray-900">Australia Annual Cost</th>
                  <th className="py-4 px-4 font-bold text-gray-900">Outsourced Annual Cost</th>
                  <th className="py-4 px-4 font-bold text-gray-900">Annual Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 text-gray-700">Claims Processor</td>
                  <td className="py-4 px-4 text-gray-700">$68,000 – $78,000</td>
                  <td className="py-4 px-4 text-lime-600 font-semibold">$18,000 – $24,000</td>
                  <td className="py-4 px-4 text-green-600 font-bold">$50,000+ (69-74%)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 text-gray-700">Customer Service Rep</td>
                  <td className="py-4 px-4 text-gray-700">$55,000 – $65,000</td>
                  <td className="py-4 px-4 text-lime-600 font-semibold">$15,000 – $20,000</td>
                  <td className="py-4 px-4 text-green-600 font-bold">$40,000+ (69-73%)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 text-gray-700">Underwriter Assistant</td>
                  <td className="py-4 px-4 text-gray-700">$62,000 – $72,000</td>
                  <td className="py-4 px-4 text-lime-600 font-semibold">$17,000 – $22,000</td>
                  <td className="py-4 px-4 text-green-600 font-bold">$45,000+ (67-72%)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 text-gray-700">Policy Administrator</td>
                  <td className="py-4 px-4 text-gray-700">$58,000 – $68,000</td>
                  <td className="py-4 px-4 text-lime-600 font-semibold">$16,000 – $21,000</td>
                  <td className="py-4 px-4 text-green-600 font-bold">$42,000+ (69-72%)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-6 bg-lime-50 rounded-lg">
            <p className="text-lg text-gray-900 font-semibold">
              Total Annual Savings: A typical insurance company outsourcing 10 positions saves <span className="text-lime-600">$450,000+ annually</span> while accessing specialized expertise and 24/7 coverage that's impossible to replicate with local hiring.
            </p>
          </div>
        </div>

        {/* Insurance Specializations */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="w-10 h-10 text-lime-600 mr-3" />
            Insurance Specializations We Handle
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Professional insurance outsourcing requires deep understanding of different insurance lines. Our teams are trained on the specific requirements, regulations, and workflows for major insurance categories.
          </p>

          <div className="space-y-8">
            {/* P&C Insurance */}
            <Card className="border-lime-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Property & Casualty Insurance</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive support for P&C operations including auto insurance claims, homeowners insurance processing, and commercial property coverage. Our teams understand liability assessment, damage evaluation, and settlement procedures.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Auto Insurance:</strong> Collision claims, liability processing, and comprehensive coverage</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Homeowners Insurance:</strong> Property damage assessment and coverage verification</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Commercial Lines:</strong> Business property claims and risk assessment</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Workers Compensation:</strong> Workplace injury claims and benefit coordination</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>General Liability:</strong> Liability investigation and settlement processing</span>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-700 mt-4 font-semibold">
                  Our P&C specialists understand state-specific regulations, coverage requirements, and claims handling procedures across Australia, New Zealand, and the United States.
                </p>
              </CardContent>
            </Card>

            {/* Life & Health */}
            <Card className="border-lime-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Life & Health Insurance</h3>
                <p className="text-gray-700 mb-4">
                  Specialized support for life and health insurance operations including claims processing, policy administration, and customer service. Our teams understand medical terminology, benefit coordination, and regulatory compliance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Life Insurance:</strong> Death benefit processing and beneficiary coordination</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Health Insurance:</strong> Medical claims review and payment processing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Disability Claims:</strong> Benefit evaluation and administration</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Medicare Processing:</strong> Supplement and advantage plan administration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Group Benefits:</strong> Employee benefit plan coordination</span>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-700 mt-4 font-semibold">
                  Our life and health specialists are trained on HIPAA compliance, medical coding, and privacy protection requirements essential for healthcare-related insurance processing.
                </p>
              </CardContent>
            </Card>

            {/* Specialized Lines */}
            <Card className="border-lime-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialized Insurance Lines</h3>
                <p className="text-gray-700">
                  Beyond traditional P&C and life insurance, we provide specialized support for niche insurance markets including professional liability, cyber insurance, marine insurance, and surety bonds. Our teams adapt to unique policy structures and regulatory requirements.
                </p>
                <p className="text-gray-700 mt-4">
                  Whether you're processing errors and omissions claims, managing cyber breach notifications, or handling marine cargo claims, our specialists understand the unique workflows and compliance requirements of specialized insurance lines.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Geographic Advantages */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center">
            <Globe className="w-10 h-10 text-lime-600 mr-3" />
            Geographic Market Advantages
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-lime-200 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🇦🇺 Australia Market</h3>
                <p className="text-gray-700 mb-4">
                  Perfect time zone alignment enables real-time claims processing during Australian business hours. Our teams understand APRA regulations and local insurance market requirements.
                </p>
                <p className="text-lime-600 font-bold text-lg">
                  Average cost savings: 71% vs Sydney/Melbourne hiring
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🇳🇿 New Zealand Market</h3>
                <p className="text-gray-700 mb-4">
                  Excellent timezone overlap with Auckland/Wellington enables seamless customer service. Teams trained on New Zealand insurance regulations and EQC requirements.
                </p>
                <p className="text-lime-600 font-bold text-lg">
                  Average cost savings: 68% vs Wellington/Auckland hiring
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🇺🇸 USA Market</h3>
                <p className="text-gray-700 mb-4">
                  Strategic daytime coverage complements US operations with specialized knowledge of state-specific insurance regulations and NAIC compliance requirements.
                </p>
                <p className="text-lime-600 font-bold text-lg">
                  Average cost savings: 65% vs US market rates
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technology Platform Expertise */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <Server className="w-10 h-10 text-indigo-600 mr-3" />
            Insurance Technology Platform Expertise
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Our teams are trained on major insurance platforms that power modern insurance operations. Unlike generic BPO providers, we understand the specific workflows and integration requirements of insurance technology systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-indigo-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Guidewire Suite</h3>
                <p className="text-gray-700">PolicyCenter, ClaimCenter, BillingCenter integration and workflow management</p>
              </CardContent>
            </Card>
            <Card className="border-indigo-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Duck Creek</h3>
                <p className="text-gray-700">Policy administration and claims processing with real-time updates</p>
              </CardContent>
            </Card>
            <Card className="border-indigo-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Applied Systems</h3>
                <p className="text-gray-700">Agency management and policy processing integration</p>
              </CardContent>
            </Card>
            <Card className="border-indigo-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sapiens</h3>
                <p className="text-gray-700">Digital insurance platform solutions with cloud capabilities</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 p-6 bg-indigo-100 rounded-lg">
            <p className="text-gray-900 flex items-start">
              <Lock className="w-6 h-6 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
              <span><strong>Security & Compliance:</strong> All technology integration includes SOC 2 Type II compliance, advanced encryption protocols, and secure data transmission standards that meet insurance industry security requirements.</span>
            </p>
          </div>
        </div>

        {/* Service Options */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Insurance Outsourcing Service Options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Individual Specialist</h3>
                  <p className="text-gray-600 mb-4">
                    Perfect for testing our service or handling specific functions like claims processing or customer service. Get started with a single trained professional.
                  </p>
                  <p className="text-3xl font-bold text-lime-600 mb-4">Starting at $1,598/month</p>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto">
                  Start with One Agent
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-xl transition-shadow bg-lime-50 h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <Badge className="bg-lime-600 text-white mb-4">MOST POPULAR</Badge>
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Specialized Team</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive insurance support team covering claims, customer service, and policy administration. Ideal for growing insurance companies.
                  </p>
                  <p className="text-3xl font-bold text-lime-600 mb-4">3-8 team members</p>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto">
                  Build Your Team
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Workforce</h3>
                  <p className="text-gray-600 mb-4">
                    Complete insurance operations outsourcing for large carriers. Full-scale claims processing, customer service, and policy administration capabilities.
                  </p>
                  <p className="text-3xl font-bold text-lime-600 mb-4">10+ professionals</p>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto">
                  Enterprise Solutions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Implementation Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment & Planning</h3>
              <p className="text-gray-700">
                Comprehensive analysis of your current insurance operations, technology requirements, and compliance needs. We map your existing workflows and identify optimization opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Team Recruitment</h3>
              <p className="text-gray-700">
                We source and recruit insurance professionals with specific expertise in your required functions. All candidates undergo rigorous screening and insurance industry background verification.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">System Integration</h3>
              <p className="text-gray-700">
                Secure integration with your existing insurance platforms, security protocols implementation, and workflow optimization. We handle all technical setup and testing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Launch & Optimization</h3>
              <p className="text-gray-700">
                Controlled launch with pilot programs, continuous performance monitoring, and ongoing optimization. We provide dedicated support during the transition period.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-lime-50 rounded-lg text-center">
            <p className="text-lg text-gray-900">
              <strong>Timeline:</strong> Most insurance companies are fully operational with their offshore team within <span className="text-lime-600 font-bold">6-8 weeks</span>, compared to 4-6 months for local hiring and training.
            </p>
          </div>
        </div>

        {/* Why Choose ShoreAgents */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <Award className="w-10 h-10 text-lime-600 mr-3" />
            Why Choose ShoreAgents for Insurance Outsourcing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">500+ Successful Placements</h4>
                <p className="text-gray-700">Track record of successful offshore implementations across multiple industries, with specialized expertise in insurance operations and regulatory compliance.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Industry-Specific Expertise</h4>
                <p className="text-gray-700">Deep understanding of insurance regulations, compliance requirements, and industry-specific workflows across Australia, New Zealand, and the United States.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Comprehensive Management</h4>
                <p className="text-gray-700">Complete oversight of your offshore team including performance monitoring, quality assurance, and ongoing staff management support.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Advanced Security</h4>
                <p className="text-gray-700">Bank-level security protocols, SOC 2 Type II compliance, and comprehensive data protection measures that meet insurance industry standards.</p>
              </div>
            </div>
          </div>
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
                  How much does insurance outsourcing cost compared to local hiring?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Professional insurance outsourcing typically costs 65-74% less than local hiring in Australia, New Zealand, or the United States. A claims processor who costs $68,000+ annually in Australia can be outsourced for $18,000-$24,000, including our management and oversight services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What insurance functions can be successfully outsourced?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most operational insurance functions can be outsourced including claims processing, policy administration, customer service, underwriting support, and premium calculations. Complex regulatory decisions and senior management functions typically remain in-house while operational processing transitions offshore.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How do you ensure compliance with insurance regulations?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our teams undergo comprehensive training on insurance regulations specific to Australia, New Zealand, and the United States. We maintain systematic compliance protocols, regular audit procedures, and direct oversight from licensed insurance professionals to ensure adherence to all applicable regulations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How quickly can an offshore insurance team be operational?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Most insurance companies are fully operational with their offshore team within 6-8 weeks, compared to 4-6 months for local hiring and training. This includes recruitment, system integration, training, and quality assurance setup.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What happens during natural disasters or high-volume claim periods?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our teams are specifically trained to handle volume fluctuations and emergency situations. We maintain scalable capacity that can handle 300%+ volume increases during natural disasters without compromising processing quality or turnaround times.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How do you protect sensitive customer data and ensure security?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We implement bank-level security protocols including SOC 2 Type II compliance, advanced encryption, secure data transmission, and restricted access controls. All team members undergo comprehensive background checks and sign strict confidentiality agreements in accordance with insurance industry security requirements.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl shadow-lg p-8 mb-16">
          <div className="flex items-center mb-6">
            <ThumbsUp className="w-10 h-10 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Real Success Story: Regional P&C Carrier Transformation</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-red-100 border-l-4 border-red-600 p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-3">THE CHALLENGE:</h3>
              <p className="text-gray-700 leading-relaxed">
                "A Melbourne-based property and casualty insurer was hemorrhaging money during storm season. Their 8-person claims team was processing 180 claims per week, but suddenly faced 720 claims in two weeks. They were paying $180/hour for emergency contractors who had no insurance experience."
              </p>
            </div>

            <div className="bg-blue-100 border-l-4 border-blue-600 p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-3">THE SOLUTION:</h3>
              <p className="text-gray-700 leading-relaxed">
                "Within 45 days, we deployed a 12-person specialized claims processing team. Each team member had 3+ years of insurance experience and was trained on the client's specific Guidewire implementation."
              </p>
            </div>

            <div className="bg-green-100 border-l-4 border-green-600 p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-3">THE RESULTS:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-900 font-semibold mb-2">Cost Reduction:</p>
                  <p className="text-gray-700">68% decrease in claims processing costs</p>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold mb-2">Processing Speed:</p>
                  <p className="text-gray-700">Average claim turnaround reduced from 12 days to 4 days</p>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold mb-2">Quality Improvement:</p>
                  <p className="text-gray-700">Error rates decreased by 79%</p>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold mb-2">Scalability:</p>
                  <p className="text-gray-700">Successfully handled 200% volume increase during next storm season</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-900 font-semibold mb-2">Customer Satisfaction:</p>
                  <p className="text-gray-700">Net Promoter Score improved by 31 points</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Insurance Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Stop hemorrhaging money on inefficient claims processing. Let's discuss how our specialized insurance outsourcing can transform your operations with proven results.
          </p>
          <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            <Phone className="w-5 h-5 mr-2" />
            Book Your Insurance Strategy Call
          </Button>
          <p className="mt-4 text-sm opacity-75">
            15-minute consultation • No sales pressure • Real insurance expertise
          </p>
        </div>
      </div>
    </div>
  );
}
