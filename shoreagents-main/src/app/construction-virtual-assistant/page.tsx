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
  HardHat,
  Building2,
  Settings,
  ClipboardList,
  Calendar,
  FileCheck,
  Lightbulb,
  Monitor,
  Database,
  MessageCircle,
  TrendingDown,
  Globe
} from 'lucide-react';
import Image from 'next/image';

export default function ConstructionVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Construction Virtual Assistants: Your Secret Weapon for Project Domination
          </h1>

          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=600&fit=crop"
              alt="Construction virtual assistant helping project manager with blueprints and construction coordination"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
            A construction virtual assistant transforms construction operations by handling project coordination, document management, and administrative tasks while delivering 60-70% cost savings compared to local hiring. As construction projects become increasingly complex and competitive pressures intensify, forward-thinking construction companies are leveraging specialized virtual assistants to streamline workflows, improve project delivery, and enable project managers to focus on critical on-site activities and client relationships.
          </p>

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

        {/* What is a Construction VA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <HardHat className="w-8 h-8 text-lime-600 mr-3" />
            What is a Construction Virtual Assistant?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A construction virtual assistant is a skilled remote professional who specializes in supporting construction companies through comprehensive project coordination, administrative management, and operational support. Unlike general virtual assistants, construction VAs possess specialized knowledge of construction terminology, project management software, building codes, and industry workflows essential for successful construction operations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            These dedicated professionals serve as extensions of your construction team, handling time-intensive administrative and coordination tasks that are critical to project success but don't require physical presence on job sites. From initial project setup to final completion documentation, construction virtual assistants ensure smooth project progression while enabling project managers and site supervisors to focus on quality control, safety, and client satisfaction.
          </p>
        </div>

        {/* Evolution Section */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="w-8 h-8 text-lime-600 mr-3" />
            The Evolution of Construction Virtual Assistance
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The construction industry has undergone significant transformation driven by technology adoption, regulatory complexity, and changing client expectations. Modern construction virtual assistants have evolved to meet these challenges through:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900">Project Management Software Proficiency:</strong>
                <span className="text-gray-700"> Mastery of Procore, PlanGrid, CoConstruct, and other platforms</span>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900">Regulatory Compliance Knowledge:</strong>
                <span className="text-gray-700"> Understanding of building codes, permit processes, and safety regulations</span>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900">Digital Documentation Systems:</strong>
                <span className="text-gray-700"> Expertise in cloud-based document management and collaboration</span>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900">Communication Coordination:</strong>
                <span className="text-gray-700"> Systematic management of stakeholder communication</span>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900">Quality Control Support:</strong>
                <span className="text-gray-700"> Systematic tracking and reporting of project milestones</span>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900">Cost Management Assistance:</strong>
                <span className="text-gray-700"> Budget tracking and expense management support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Competencies */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Settings className="w-8 h-8 text-lime-600 mr-3" />
            Core Competencies of Construction Virtual Assistants
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Professional construction virtual assistants possess specialized skills that directly impact project efficiency, quality control, and successful completion:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Monitor className="w-6 h-6 text-lime-600 mr-2" />
                  Technical Proficiency
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm"><strong>Project Management Software:</strong> Procore, PlanGrid, CoConstruct, BuilderTrend</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm"><strong>Document Management:</strong> Box, Dropbox, SharePoint, Google Workspace</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm"><strong>Communication Tools:</strong> Slack, Microsoft Teams, Zoom, WhatsApp</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm"><strong>Scheduling Software:</strong> Microsoft Project, Primavera P6, Smartsheet</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm"><strong>Financial Management:</strong> QuickBooks, Sage, FreshBooks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm"><strong>CAD Software:</strong> Basic AutoCAD, SketchUp, Revit proficiency</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Building2 className="w-6 h-6 text-lime-600 mr-2" />
                  Industry Knowledge
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm"><strong>Construction Processes:</strong> Understanding of construction phases and workflows</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm"><strong>Building Codes:</strong> Knowledge of local building requirements and compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm"><strong>Safety Standards:</strong> OSHA requirements and construction safety protocols</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm"><strong>Quality Control:</strong> Construction quality standards and inspection processes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm"><strong>Vendor Management:</strong> Construction supply chain coordination</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Comprehensive Services */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <ClipboardList className="w-8 h-8 text-lime-600 mr-3" />
            Comprehensive Construction Virtual Assistant Services
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Professional construction virtual assistants provide diverse services across the entire project lifecycle, from initial planning and permitting through construction execution and project closeout.
          </p>

          <div className="space-y-8">
            {/* Project Coordination */}
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Calendar className="w-6 h-6 text-lime-600 mr-2" />
                  Project Coordination and Management
                </h3>
                <p className="text-gray-700 mb-4">
                  The foundation of construction virtual assistant services centers on project coordination that ensures timely completion, quality standards, and effective communication among all stakeholders.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Project Planning and Scheduling</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Master schedule development and maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Resource allocation planning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Milestone tracking and monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Critical path management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Progress reporting and performance analysis</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Stakeholder Communication</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Client communication and progress updates</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Subcontractor coordination and task assignment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Supplier management and delivery coordination</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Team meeting facilitation and coordination</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Issue resolution support and documentation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Document Management */}
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-lime-600 mr-2" />
                  Document Management and Administrative Support
                </h3>
                <p className="text-gray-700 mb-4">
                  Professional document management and administrative coordination ensure compliance, quality control, and efficient project execution.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Blueprint and Plan Management</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Drawing distribution and coordination</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Revision control and tracking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Document organization and filing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Version management and updates</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Digital archive creation and backup</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Permit and Compliance Tracking</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Permit application management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Compliance monitoring and tracking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Inspection scheduling and coordination</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Regulatory communication and liaison</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Compliance documentation maintenance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Financial Support */}
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <DollarSign className="w-6 h-6 text-lime-600 mr-2" />
                  Financial and Cost Management Support
                </h3>
                <p className="text-gray-700 mb-4">
                  Construction virtual assistants provide essential financial coordination and cost management support to maintain project budgets and profitability.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Budget Tracking and Cost Control</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Daily expense monitoring and tracking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Budget variance analysis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Change order management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Vendor invoice processing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Regular cost reporting</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Procurement and Supply Chain</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Material ordering coordination</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Vendor management and tracking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Delivery scheduling and tracking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Inventory management support</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">Purchase order processing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stephen's Take */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-8 h-8 text-lime-600 mr-3" />
            Stephen's Take: The Construction Virtual Assistant Advantage
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Having worked with construction companies since 2012, I've witnessed how the right virtual assistant can transform project management capabilities and company profitability. The most successful construction companies I've partnered with understand that virtual assistants aren't just about reducing administrative costs—they're about creating systematic excellence that enables growth.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold italic">
              When project managers can focus on quality control, safety, and problem-solving while their virtual assistant handles documentation, coordination, and communication, that's when you see dramatic improvements in project delivery and client satisfaction.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The companies that implement construction virtual assistants strategically don't just save money—they position themselves to take on more complex projects and build stronger client relationships.
            </p>
          </div>
        </div>

        {/* Benefits and Cost Analysis */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <BarChart className="w-8 h-8 text-lime-600 mr-3" />
            Benefits and Cost Analysis
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Construction virtual assistants deliver significant advantages that directly impact operational efficiency, project quality, and business growth for construction companies of all sizes.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Direct Cost Comparison</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-lime-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Role</th>
                  <th className="px-6 py-4 text-right font-semibold">Local Annual Cost</th>
                  <th className="px-6 py-4 text-right font-semibold">VA Cost (Annual)</th>
                  <th className="px-6 py-4 text-right font-semibold">Annual Savings</th>
                  <th className="px-6 py-4 text-right font-semibold">Savings %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-lime-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Project Coordinator</td>
                  <td className="px-6 py-4 text-right text-gray-700">$50,000 – $70,000</td>
                  <td className="px-6 py-4 text-right text-gray-700">$15,000 – $22,000</td>
                  <td className="px-6 py-4 text-right text-gray-700">$28,000 – $48,000</td>
                  <td className="px-6 py-4 text-right text-lime-600 font-bold">65-70%</td>
                </tr>
                <tr className="hover:bg-lime-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Administrative Assistant</td>
                  <td className="px-6 py-4 text-right text-gray-700">$35,000 – $50,000</td>
                  <td className="px-6 py-4 text-right text-gray-700">$12,000 – $18,000</td>
                  <td className="px-6 py-4 text-right text-gray-700">$17,000 – $32,000</td>
                  <td className="px-6 py-4 text-right text-lime-600 font-bold">64-71%</td>
                </tr>
                <tr className="hover:bg-lime-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Document Controller</td>
                  <td className="px-6 py-4 text-right text-gray-700">$45,000 – $60,000</td>
                  <td className="px-6 py-4 text-right text-gray-700">$14,000 – $20,000</td>
                  <td className="px-6 py-4 text-right text-gray-700">$25,000 – $40,000</td>
                  <td className="px-6 py-4 text-right text-lime-600 font-bold">66-72%</td>
                </tr>
                <tr className="hover:bg-lime-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Estimator Assistant</td>
                  <td className="px-6 py-4 text-right text-gray-700">$40,000 – $55,000</td>
                  <td className="px-6 py-4 text-right text-gray-700">$13,000 – $19,000</td>
                  <td className="px-6 py-4 text-right text-gray-700">$21,000 – $36,000</td>
                  <td className="px-6 py-4 text-right text-lime-600 font-bold">65-70%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Financial Advantages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700"><strong>No Employee Benefits:</strong> Elimination of health insurance, retirement, and benefit costs</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700"><strong>Reduced Office Overhead:</strong> No additional workspace or equipment expenses</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700"><strong>Lower Recruitment Costs:</strong> Reduced hiring and onboarding expenses</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700"><strong>Flexible Scaling:</strong> Pay only for needed capacity without long-term commitments</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700"><strong>Increased Project Capacity:</strong> Manage more projects without overhead increases</span>
            </div>
          </div>
        </div>

        {/* Philippines Advantage */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Globe className="w-8 h-8 text-lime-600 mr-3" />
            Why Choose Philippines-Based Construction Virtual Assistants
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Philippines has emerged as the premier destination for construction virtual assistants due to excellent technical education, English proficiency, and strong work ethic aligned with international construction standards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Construction Industry Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Engineering and construction programs through accredited universities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Professional development in construction management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">International standards knowledge and familiarity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Technology proficiency in construction management software</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cultural and Professional Advantages</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Excellent written and verbal English communication</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Understanding of Western business practices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Service orientation and commitment to quality</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Time zone flexibility for global project support</span>
                  </li>
                </ul>
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
                  What specific tasks can a construction virtual assistant handle?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Construction virtual assistants handle comprehensive project support including project coordination, document management, permit tracking, subcontractor coordination, progress reporting, budget tracking, material ordering, quality control documentation, client communication, and regulatory compliance. They work with all major construction management software platforms and can manage systematic workflows from project initiation through closeout while maintaining professional standards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How much can construction companies save with virtual assistants?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Construction companies typically achieve 60-70% cost savings through virtual assistant implementation. A role that costs $50,000-$70,000 annually locally generally costs $15,000-$22,000 when supported by a Filipino construction virtual assistant, including all management fees. Beyond direct savings, companies eliminate recruitment, office space, equipment, and benefit costs while gaining specialized construction coordination capabilities.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What construction management software do virtual assistants work with?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Construction virtual assistants are proficient in all major platforms including Procore, PlanGrid, CoConstruct, BuilderTrend, JobNimbus, Microsoft Project, Primavera P6, AutoCAD, SketchUp, and QuickBooks. They work within your existing software licenses through secure VPN connections and can become proficient with company-specific templates and workflows within 1-2 weeks of proper training.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How long does it take to implement a construction virtual assistant?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Implementation typically takes 30-60 days from start to full productivity. This includes 1-2 weeks for recruitment and selection, 1-2 weeks for onboarding and software setup, and 2-4 weeks to reach full productivity with your specific construction workflows and standards. Success depends on having documented processes, proper software access, and clear quality control protocols.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Can construction virtual assistants handle urgent project issues?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, construction virtual assistants can provide extended support hours and time zone flexibility to address urgent project coordination needs. While they cannot physically visit job sites, they can coordinate emergency responses, contact subcontractors, communicate with suppliers, update project stakeholders, and escalate critical issues to on-site managers according to established protocols.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How do construction virtual assistants ensure quality and accuracy?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Professional construction virtual assistants follow systematic quality control procedures including peer review, checklist verification, standardized templates, regular quality audits, and continuous feedback loops with project managers. They are trained in construction industry standards and work within established quality management systems to ensure accuracy and consistency across all project documentation and coordination activities.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Zap className="w-10 h-10 text-white mr-3" />
            Ready to Transform Your Construction Operations?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            The most successful construction companies are those that view virtual assistants as strategic partners rather than just cost-saving measures.
          </p>
          <p className="text-lg mb-8 opacity-90">
            When you can manage more projects simultaneously, maintain better communication with stakeholders, and ensure consistent quality documentation while focusing your time on critical field activities and client relationships, you create sustainable competitive advantages that drive long-term business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Book Your Strategy Call
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold">
              View ROI Calculator
              <DollarSign className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="text-sm opacity-75">
            Discover how skilled virtual assistants can help you scale your construction operations, reduce administrative overhead, and build the foundation for significant business growth in the competitive construction industry.
          </p>
        </div>

      </div>
    </div>
  );
}
