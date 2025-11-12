'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  DollarSign,
  Target,
  Zap,
  Phone,
  BarChart,
  HelpCircle,
  FileText,
  Scale,
  Lightbulb,
  Home,
  Building2,
  Briefcase,
  Shield,
  Monitor,
  Database,
  MessageCircle,
  Award,
  Settings
} from 'lucide-react';
import Image from 'next/image';

export default function LegalVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Legal Virtual Assistant: Property Law & Conveyancing Support
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Eliminate processing delays, reduce red tape bottlenecks, and accelerate property transactions with specialized legal virtual assistants who understand the property game.
          </p>

          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop"
              alt="Professional legal virtual assistant working on property law documents and conveyancing contracts"
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

        {/* Legal Processing Efficiency Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">45%</div>
              <div className="text-gray-600 font-medium">Faster Document Processing</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">70%</div>
              <div className="text-gray-600 font-medium">Cost Reduction</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">85%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">60%</div>
              <div className="text-gray-600 font-medium">More Billable Hours</div>
            </CardContent>
          </Card>
        </div>

        {/* Understanding Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Scale className="w-8 h-8 text-lime-600 mr-3" />
            Understanding Legal Virtual Assistants for Property Law
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A legal virtual assistant specializing in property law is a remote professional who provides comprehensive administrative and operational support to conveyancers, real estate attorneys, property lawyers, and legal firms handling property transactions. These specialized assistants understand the complexities of property contracts, settlement processes, and the administrative burden that can slow down transactions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Whether you're a conveyancer in Australia handling Section 32 statements and property settlements, or a real estate attorney in the USA managing closing documents and title reviews, the challenge is the same: extensive paperwork, tight deadlines, and clients expecting swift, accurate service. Virtual assistants with property law experience can transform your practice by handling routine tasks while ensuring compliance and accuracy.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The key difference between general legal support and property-focused legal virtual assistants lies in their understanding of real estate transactions, property law terminology, and the specific software platforms used in conveyancing and real estate legal work. This specialization enables them to contribute meaningfully from day one rather than requiring extensive training.
          </p>
        </div>

        {/* Stephen's Take */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-8 h-8 text-lime-600 mr-3" />
            Stephen's Take: From Real Estate Trenches to Legal Solutions
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Having run a real estate business myself, I lived through the contract delays, processing bottlenecks, and red tape nightmares that slow down property deals. You know that feeling when a simple contract amendment takes three days because everyone's buried in paperwork? That's where specialized VAs become game-changers.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold italic">
              We work with firms that are cranking through property contracts at lightning speed because they've got the right support handling document preparation, client communication, and compliance tracking. The magic isn't teaching them law—it's connecting legal professionals with VAs who already understand property transactions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When your assistant knows the difference between a Section 32 and a HUD-1, you're not starting from zero.
            </p>
          </div>
        </div>

        {/* Professional Specializations */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Professional Legal Specializations We Support
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <Home className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Conveyancers (Australia)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Section 32 preparation, contract reviews, settlement coordination, PEXA management, title searches, and client communication for residential and commercial property transactions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <Scale className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real Estate Attorneys (USA)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Closing document preparation, title examinations, purchase agreement reviews, deed preparation, escrow coordination, and legal research for property transactions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <Building2 className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Property Development Lawyers</h3>
                <p className="text-gray-700 leading-relaxed">
                  Development agreements, subdivision documentation, planning applications, construction contracts, strata titling, and regulatory compliance support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <Briefcase className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial Property Lawyers</h3>
                <p className="text-gray-700 leading-relaxed">
                  Lease agreements, commercial sales contracts, due diligence coordination, zoning compliance, environmental assessments, and investment property transactions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Task Distribution */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <BarChart className="w-8 h-8 text-lime-600 mr-3" />
            Task Distribution: What Legal VAs Handle
          </h2>
          <p className="text-gray-700 text-center mb-8">Time Allocation Analysis</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-bold text-lime-600 mb-3">45%</div>
                <h3 className="font-bold text-gray-900 mb-2">Administrative Tasks</h3>
                <p className="text-gray-700 text-sm">Document preparation, filing, scheduling, client communication</p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-bold text-lime-600 mb-3">30%</div>
                <h3 className="font-bold text-gray-900 mb-2">Document Processing</h3>
                <p className="text-gray-700 text-sm">Contract reviews, settlement statements, title searches</p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-bold text-lime-600 mb-3">15%</div>
                <h3 className="font-bold text-gray-900 mb-2">Legal Research & Compliance</h3>
                <p className="text-gray-700 text-sm">Regulatory research, precedent analysis, compliance checks</p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-bold text-lime-600 mb-3">10%</div>
                <h3 className="font-bold text-gray-900 mb-2">Technology & Systems</h3>
                <p className="text-gray-700 text-sm">Database management, software updates, system integration</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Legal Professionals Trust VAs */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Shield className="w-8 h-8 text-lime-600 mr-3" />
            Why Legal Professionals Trust Virtual Assistance
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The legal profession demands precision, confidentiality, and adherence to strict deadlines. Modern legal practices recognize that specialized virtual assistants provide these qualities while reducing overhead costs by up to 70%. The key is finding VAs who understand legal terminology, compliance requirements, and the urgency of property transactions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Recent industry research shows that law firms using virtual assistants report increased efficiency, better client satisfaction, and more time for billable work. The most successful implementations involve VAs who bring existing legal knowledge rather than requiring extensive training, eliminating the learning curve that slows down traditional hiring approaches.
          </p>
        </div>

        {/* Operational Benefits */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Operational Benefits for Legal Practices
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Faster Turnarounds</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reduce contract processing time by 45% with dedicated VAs handling document preparation and coordination.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <DollarSign className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Optimization</h3>
                <p className="text-gray-700 leading-relaxed">
                  Save 60-70% on operational costs compared to hiring additional local staff while maintaining service quality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Scale className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance Focus</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ensure regulatory compliance with VAs trained in legal requirements and documentation standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Growth</h3>
                <p className="text-gray-700 leading-relaxed">
                  Scale your practice efficiently during busy periods without the overhead of permanent staff expansion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technology Integration */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Monitor className="w-8 h-8 text-lime-600 mr-3" />
            Technology Integration & Platform Expertise
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Our legal virtual assistants are proficient in the technology platforms commonly used by conveyancers, real estate attorneys, and property lawyers. This expertise enables seamless integration with your existing workflows and systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Conveyancing Platforms</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• PEXA</li>
                  <li>• Sympli</li>
                  <li>• InfoTrack</li>
                  <li>• GlobalX</li>
                  <li>• ConveyThis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Legal Practice Management</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Clio</li>
                  <li>• MyCase</li>
                  <li>• PracticePanther</li>
                  <li>• Time Matters</li>
                  <li>• ProLaw</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Document Management</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• NetDocuments</li>
                  <li>• iManage</li>
                  <li>• DocuSign</li>
                  <li>• Adobe Sign</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Communication & CRM</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Outlook</li>
                  <li>• Teams</li>
                  <li>• Zoom</li>
                  <li>• Salesforce</li>
                  <li>• LawMaster</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Implementation Strategy */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="w-8 h-8 text-lime-600 mr-3" />
            Implementation Strategy: Getting Started
          </h2>

          <div className="space-y-6">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="text-3xl font-bold text-lime-600 mr-4">1</div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Phase 1: Assessment & Matching</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Analyze current workflow bottlenecks and pain points</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Identify specific tasks suitable for delegation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Match with VA experienced in your practice area</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Establish security and confidentiality protocols</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="text-3xl font-bold text-lime-600 mr-4">2</div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Phase 2: Integration & Training</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">System access setup and security configuration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Process documentation and workflow mapping</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Practice-specific training and orientation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Quality standards and performance metrics</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="text-3xl font-bold text-lime-600 mr-4">3</div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Phase 3: Optimization & Growth</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Gradual responsibility expansion with monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Performance tracking and efficiency optimization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Process refinement and continuous improvement</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Scaling support based on practice growth</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <HelpCircle className="w-10 h-10 text-lime-600 mr-3" />
            Frequently Asked Questions
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Can virtual assistants handle confidential client information securely?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, our legal virtual assistants operate under strict confidentiality protocols with signed NDAs, secure communication channels, and compliance with attorney-client privilege requirements. All data handling follows legal industry standards for information security.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Do legal VAs understand property law terminology and processes?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our property law VAs have experience with real estate transactions and understand terminology like Section 32 statements, settlement statements, title searches, and conveyancing processes. This background enables immediate contribution without extensive training.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How quickly can a legal virtual assistant start contributing to our practice?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  With our structured onboarding process, most legal VAs can begin handling routine tasks within one week and reach full productivity within 30 days. The timeline depends on the complexity of your systems and specific requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What's the difference between general legal support and property law VAs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Property law VAs have specific experience with real estate transactions, understand conveyancing software, and are familiar with settlement processes, title documentation, and property law compliance requirements—enabling specialized support from day one.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Can virtual assistants work with our existing legal practice management software?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, our VAs are experienced with major legal platforms including Clio, PEXA, MyCase, and other practice management systems. We provide specific training on your software during the onboarding process to ensure seamless integration.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Zap className="w-10 h-10 text-white mr-3" />
            Ready to Eliminate Processing Delays?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join property lawyers and conveyancers who've accelerated their transactions by 45% while reducing operational costs. Our specialized legal virtual assistants understand the property game and are ready to tackle your red tape challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Start Your Legal Team
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold">
              View Pricing Plans
              <DollarSign className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
