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
  Wrench,
  Hammer,
  ClipboardCheck,
  TrendingDown,
  Package
} from 'lucide-react';
import Image from 'next/image';

export default function ConstructionOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <Badge className="bg-red-600 text-white px-4 py-2 text-lg hover:bg-red-700">
              🚨 CRITICAL: Construction Companies Burning $120K+ Annually on Inefficient Administration
            </Badge>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Construction Outsourcing: Break Through the $3M Growth Wall
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            While smart builders embrace systematic construction outsourcing, others are drowning in paperwork, permit delays, and project coordination chaos. Don't let administrative bottlenecks cap your growth at $3M when you could be scaling to $15M+ profitably.
          </p>
          
          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=600&fit=crop"
              alt="Construction site with blueprints and hard hat showing construction outsourcing for project management"
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
            Construction outsourcing transforms how builders manage complex projects by delegating administrative, coordination, and documentation tasks to skilled offshore professionals. This comprehensive guide reveals how construction companies across Australia, New Zealand, and the USA are breaking through growth barriers and achieving 60-75% cost savings while scaling operations systematically.
          </p>
        </div>

        {/* Key Stats Grid */}
        <div className="bg-gradient-to-br from-lime-50 to-lime-100 rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <TrendingDown className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">73%</span>
              </div>
              <p className="text-gray-700 font-medium">Administrative Cost Reduction</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">3.2x</span>
              </div>
              <p className="text-gray-700 font-medium">Project Capacity Increase</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">89%</span>
              </div>
              <p className="text-gray-700 font-medium">On-Time Project Delivery</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <DollarSign className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">$2M→$12M</span>
              </div>
              <p className="text-gray-700 font-medium">Typical Revenue Growth</p>
            </div>
          </div>
        </div>

        {/* Growth Walls Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Construction Companies Hit Growth Walls—And How to Break Through
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Most construction businesses plateau at $2-4M because they're trapped in the "hire more local staff" cycle. After 500+ successful offshore placements, I've seen this pattern destroy promising construction companies.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed font-semibold">
              The companies that break through to $10M+ revenue always have one thing in common: they systematically outsource construction administration while keeping their builders building.
            </p>
          </div>
        </div>

        {/* Growth Trap Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center">
            <AlertCircle className="w-10 h-10 text-red-600 mr-3" />
            The Construction Growth Trap: Why Traditional Scaling Fails
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Here's what I've learned from working with hundreds of construction companies: most builders are excellent at building, but they're drowning in everything else that comes with growth—permits, client communication, project coordination, and endless documentation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The typical response is to hire more local administrative staff. A project coordinator costs $65,000-85,000 in Australia, $60,000-80,000 in New Zealand, or $70,000-90,000 in the USA. Plus benefits, office space, equipment, and training time.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              But here's the problem: construction administration scales exponentially. One project might need 20 hours of admin work per week. Five projects need 120 hours. The math doesn't work with local wages.
            </p>
          </div>

          {/* $3M Wall */}
          <div className="bg-red-50 border-l-4 border-red-600 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The $3M Revenue Wall Reality</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most construction companies hit a wall at $2-4M annual revenue because administrative costs become unsustainable. They need more coordination, more documentation, more client communication—but can't afford to hire enough local staff to handle it properly.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is where construction outsourcing becomes transformative. Instead of hiring a $75,000 local coordinator, you get a dedicated offshore professional for $18,000-25,000 annually. Same quality work, systematic processes, better documentation—at a fraction of the cost.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              The construction companies that scale past $10M all understand this principle: you can't build your way out of administrative chaos. You need systematic processes and dedicated professionals handling everything that doesn't require being on-site.
            </p>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white">
              Discover Your Construction Scaling Strategy
            </Button>
          </div>
        </div>

        {/* What is Construction Outsourcing */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What is Construction Outsourcing?
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Construction outsourcing is the strategic delegation of administrative, coordination, and documentation tasks to skilled offshore professionals. It's not about replacing your builders—it's about freeing them to focus on what they do best while dedicated specialists handle everything else.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Think of it as building a parallel administrative team that handles all the behind-the-scenes work that construction projects require. Permit processing, client communication, project documentation, supplier coordination, cost tracking—all the essential tasks that don't require being on-site.
          </p>
        </div>

        {/* Core Functions */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center">
            <ClipboardCheck className="w-10 h-10 text-lime-600 mr-3" />
            Core Functions Perfect for Construction Outsourcing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Administration */}
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Project Administration</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Permit application preparation and tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Building code compliance verification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Inspection scheduling and coordination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Project documentation and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Quality control checklists and tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Client Communication */}
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Client Communication</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Initial consultation scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Regular progress updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Selection appointments coordination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Change order communication</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Final walkthrough coordination</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Supplier Coordination */}
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Package className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Supplier Coordination</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Material ordering and tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Delivery scheduling coordination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Supplier relationship management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Purchase order processing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Invoice verification and tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cost Management */}
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Calculator className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Cost Management</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Detailed quantity takeoffs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Budget tracking and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Change order cost analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Subcontractor bid coordination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Project profitability analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How ShoreAgents Transforms */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="w-10 h-10 text-lime-600 mr-3" />
            How ShoreAgents Transforms Construction Operations
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            At ShoreAgents, we don't just provide construction outsourcing—we create systematic solutions that transform how construction companies operate. Our approach focuses on finding the right professionals in the Philippines who understand construction processes and can integrate seamlessly with your existing operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-lime-200 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-lime-600">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Requirements Analysis</h3>
                <p className="text-sm text-gray-700">
                  We analyze your construction processes to identify the highest-impact outsourcing opportunities
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-lime-600">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Candidate Sourcing</h3>
                <p className="text-sm text-gray-700">
                  We recruit skilled professionals with construction industry experience and relevant software knowledge
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-lime-600">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Integration & Setup</h3>
                <p className="text-sm text-gray-700">
                  We handle all setup, system integration, and ensure seamless communication with your existing team
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-lime-600">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Ongoing Management</h3>
                <p className="text-sm text-gray-700">
                  We provide continuous oversight, performance monitoring, and optimization to ensure sustained success
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50">
              See How Our Process Works
            </Button>
          </div>
        </div>

        {/* Why Philippines */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Globe className="w-8 h-8 text-purple-600 mr-3" />
            Why the Philippines for Construction Outsourcing?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The Philippines has become the premier destination for construction outsourcing due to exceptional English communication skills, strong work ethic, and established construction industry knowledge. Filipino professionals understand Western business practices and can communicate effectively with clients, suppliers, and team members.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Additionally, the timezone alignment works perfectly for Australian and New Zealand construction companies, while US companies benefit from extended coverage hours and next-day project updates.
          </p>
        </div>

        {/* Why Choose Construction Outsourcing */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Construction Companies Choose Outsourcing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-10 h-10 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Massive Cost Savings</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A local project coordinator costs $65,000-90,000 annually plus benefits. An offshore professional delivers the same quality for $18,000-25,000 including all infrastructure and management.
                </p>
                <p className="text-lg font-semibold text-lime-600">
                  That's 60-75% cost savings while often getting better documentation and communication.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-10 h-10 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Scalable Project Capacity</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Instead of hiring locally for each new project, you can scale your offshore team as needed. Handle 3x more projects with the same local team size.
                </p>
                <p className="text-lg font-semibold text-lime-600">
                  No recruitment delays, no training periods, no office space concerns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="w-10 h-10 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Systematic Processes</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Offshore teams follow documented processes consistently. No more worrying about key staff taking vacation or leaving mid-project.
                </p>
                <p className="text-lg font-semibold text-lime-600">
                  Better documentation, more consistent quality, fewer project delays.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Zap className="w-10 h-10 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Focus on Core Business</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your builders build. Your project managers manage sites. Your offshore team handles everything else that doesn't require physical presence.
                </p>
                <p className="text-lg font-semibold text-lime-600">
                  Everyone works at their highest and best use.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Options */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Construction Outsourcing Service Options
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            We offer flexible construction outsourcing solutions to match your current needs and growth plans. Whether you're a small builder managing a few projects or an established company handling complex developments, we have the right approach.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Small</h3>
                  <p className="text-gray-600 mb-4">
                    Begin with one dedicated professional handling your highest-priority administrative functions. Perfect for testing the waters and proving the concept.
                  </p>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto">
                  Explore Single Agent Option
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Build Your Team</h3>
                  <p className="text-gray-600 mb-4">
                    Develop a specialized team of 3-8 professionals handling different aspects of construction administration. Ideal for growing companies managing multiple projects.
                  </p>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Scale Enterprise</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive workforce solutions for established construction companies managing complex projects, multiple locations, or high-volume operations.
                  </p>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto">
                  Scale Your Workforce
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Investment & ROI */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center">
            <Calculator className="w-10 h-10 text-lime-600 mr-3" />
            Construction Outsourcing Investment & ROI
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Understanding the financial impact of construction outsourcing is crucial for making informed decisions. Here's the realistic breakdown of costs and returns based on our experience with hundreds of construction companies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Local vs Offshore */}
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local Project Coordinator:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• $65,000-90,000 base salary</li>
                <li>• $20,000-25,000 benefits</li>
                <li>• $8,000-12,000 office/equipment</li>
                <li className="font-bold text-lg mt-4">Total: $93,000-127,000</li>
              </ul>
            </div>

            <div className="bg-lime-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Offshore Professional:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• $18,000-25,000 all-inclusive</li>
                <li>• No benefits or overhead</li>
                <li>• Professional infrastructure included</li>
                <li className="font-bold text-lg mt-4 text-lime-600">Total: $18,000-25,000</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Annual Savings:</h4>
              <p className="text-3xl font-bold text-green-600">$75,000-102,000</p>
              <p className="text-sm text-gray-600">per position</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Project Capacity Increase:</h4>
              <p className="text-3xl font-bold text-blue-600">2-3x</p>
              <p className="text-sm text-gray-600">more projects manageable</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Payback Period:</h4>
              <p className="text-3xl font-bold text-purple-600">1-2 months</p>
              <p className="text-sm text-gray-600">typically</p>
            </div>
          </div>

          <div className="bg-lime-50 border-l-4 border-lime-600 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Real-World Example</h3>
            <p className="text-gray-700 leading-relaxed">
              A $3M annual revenue construction company replacing 2 local coordinators with offshore professionals saves $150,000+ annually while improving project delivery consistency.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2 font-semibold">
              This often enables them to scale to $6-8M revenue within 18 months.
            </p>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50">
              View Detailed Pricing
            </Button>
          </div>
        </div>

        {/* Technology Integration */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <Server className="w-10 h-10 text-indigo-600 mr-3" />
            Construction Technology Integration
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Successful construction outsourcing depends on seamless technology integration. Our offshore professionals are trained on major construction management platforms and can integrate with your existing systems immediately.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">Supported Construction Software</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-indigo-200 bg-white">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Project Management</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Procore</strong> – Enterprise construction management</li>
                  <li>• <strong>Buildertrend</strong> – Residential construction platform</li>
                  <li>• <strong>CoConstruct</strong> – Custom home building software</li>
                  <li>• <strong>BuildTools</strong> – Construction project management</li>
                  <li>• <strong>PlanGrid</strong> – Field management and collaboration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 bg-white">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Communication & CRM</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Salesforce</strong> – Customer relationship management</li>
                  <li>• <strong>HubSpot</strong> – Marketing and sales automation</li>
                  <li>• <strong>Microsoft Teams</strong> – Team communication</li>
                  <li>• <strong>Slack</strong> – Project communication</li>
                  <li>• <strong>Zoom</strong> – Video conferencing and client meetings</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 bg-white">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Financial Management</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>QuickBooks</strong> – Accounting and financial tracking</li>
                  <li>• <strong>Xero</strong> – Cloud-based accounting platform</li>
                  <li>• <strong>FreshBooks</strong> – Project-based accounting</li>
                  <li>• <strong>Sage</strong> – Construction-specific accounting</li>
                  <li>• <strong>Excel/Google Sheets</strong> – Custom reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 bg-white">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Design & Documentation</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>AutoCAD</strong> – 2D and 3D design software</li>
                  <li>• <strong>Revit</strong> – Building information modeling</li>
                  <li>• <strong>SketchUp</strong> – 3D modeling and visualization</li>
                  <li>• <strong>Bluebeam</strong> – PDF markup and collaboration</li>
                  <li>• <strong>Adobe Creative Suite</strong> – Documentation design</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-indigo-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation Support</h3>
            <p className="text-gray-700 leading-relaxed">
              We handle all technical setup and integration with your existing systems. Our offshore professionals receive comprehensive training on your specific software stack and processes before beginning work.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              This includes user account setup, security protocols, data access permissions, and workflow integration to ensure seamless operations from day one.
            </p>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Construction Outsourcing Implementation Process
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Implementing construction outsourcing requires careful planning and systematic execution. Our proven process ensures smooth integration and maximum success from the start.
          </p>

          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="border-l-4 border-lime-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Phase 1: Assessment & Planning (Week 1-2)</h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Initial Consultation</h4>
              <p className="text-gray-700 mb-3">
                We begin with a comprehensive analysis of your construction operations to identify the highest-impact outsourcing opportunities. This includes reviewing your current processes, identifying bottlenecks, and understanding your specific needs.
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>• Current workflow analysis and documentation</li>
                <li>• Technology stack assessment and integration requirements</li>
                <li>• Team structure evaluation and role definition</li>
                <li>• Performance metrics and success criteria establishment</li>
                <li>• Timeline and milestone planning</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Phase 2: Recruitment & Selection (Week 2-4)</h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Candidate Sourcing</h4>
              <p className="text-gray-700 mb-3">
                Our recruitment team identifies and screens candidates with specific construction industry experience and relevant technical skills. We focus on professionals who understand construction processes and can integrate with your existing operations.
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>• Construction industry experience verification</li>
                <li>• Technical skills assessment and software proficiency testing</li>
                <li>• English communication skills evaluation</li>
                <li>• Cultural fit assessment and work style compatibility</li>
                <li>• Reference checks and background verification</li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Phase 3: Training & Integration (Week 4-6)</h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Training Program</h4>
              <p className="text-gray-700 mb-3">
                Selected candidates undergo intensive training on your specific processes, systems, and construction standards. This ensures they're fully prepared to contribute effectively from their first day.
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>• Company-specific process training and documentation</li>
                <li>• Construction software and technology platform training</li>
                <li>• Local building codes and regulatory compliance education</li>
                <li>• Client communication protocols and standards</li>
                <li>• Quality control procedures and reporting requirements</li>
              </ul>
            </div>

            {/* Phase 4 */}
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Phase 4: Launch & Optimization (Week 6-8)</h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Go-Live Support</h4>
              <p className="text-gray-700 mb-3">
                We provide intensive support during the initial launch period to ensure smooth operations and address any challenges that arise. Our team monitors performance closely and makes adjustments as needed.
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>• Daily performance monitoring and feedback</li>
                <li>• Process refinement and optimization</li>
                <li>• Communication flow establishment and testing</li>
                <li>• Quality assurance and performance measurement</li>
                <li>• Ongoing support and troubleshooting</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-lime-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Success Timeline</h3>
            <p className="text-gray-700 leading-relaxed">
              Most construction companies see immediate improvement in administrative efficiency within the first 2-4 weeks, with full optimization achieved within 90 days.
            </p>
            <p className="text-lg font-semibold text-lime-600 mt-2">
              Average implementation time: 6-8 weeks from start to full productivity
            </p>
          </div>
        </div>

        {/* Quality Control */}
        <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <Shield className="w-10 h-10 text-green-600 mr-3" />
            Quality Control & Performance Management
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Ensuring consistent quality and performance is crucial for construction outsourcing success. Our comprehensive quality control framework ensures your offshore team delivers exceptional results consistently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-green-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Daily Performance Tracking</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Task completion rates and quality scores</li>
                  <li>• Response time monitoring for client communications</li>
                  <li>• Accuracy measurements for documentation</li>
                  <li>• Adherence to process standards and procedures</li>
                  <li>• System usage and productivity metrics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Weekly Quality Reviews</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Work sample evaluation and feedback</li>
                  <li>• Client satisfaction assessment</li>
                  <li>• Process improvement identification</li>
                  <li>• Training needs assessment</li>
                  <li>• Performance coaching and development</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Monthly Strategic Reviews</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Overall performance analysis and trends</li>
                  <li>• Goal achievement and target setting</li>
                  <li>• Process optimization and efficiency improvements</li>
                  <li>• Technology and system enhancement planning</li>
                  <li>• Strategic alignment and future planning</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-green-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">ShoreAgents Quality Guarantee</h3>
            <p className="text-gray-700 leading-relaxed">
              We provide comprehensive ongoing management and oversight to ensure your offshore team delivers consistent, high-quality results. Our dedicated success team monitors performance daily and provides immediate support for any issues that arise.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              This includes regular performance reviews, continuous training updates, and proactive problem-solving to maintain optimal productivity and quality standards.
            </p>
          </div>
        </div>

        {/* Geographic Markets */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center">
            <Globe className="w-10 h-10 text-lime-600 mr-3" />
            Construction Outsourcing Across Markets
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Construction outsourcing delivers unique advantages across different geographic markets. Understanding these regional differences helps construction companies maximize their outsourcing investment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-lime-200 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🇦🇺 Australia Market</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Advantages:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Perfect timezone alignment with Philippines</li>
                    <li>• Understanding of Australian building codes (NCC)</li>
                    <li>• Familiarity with local councils and processes</li>
                    <li>• Experience with Australian construction software</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Typical Applications:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Residential building coordination</li>
                    <li>• Commercial project administration</li>
                    <li>• Permit processing and compliance</li>
                    <li>• Client communication and updates</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🇳🇿 New Zealand Market</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Advantages:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Excellent timezone coverage (4-hour difference)</li>
                    <li>• Knowledge of NZBC compliance requirements</li>
                    <li>• Understanding of earthquake standards</li>
                    <li>• Familiarity with NZ construction practices</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Typical Applications:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Residential and commercial projects</li>
                    <li>• Compliance documentation</li>
                    <li>• Consent application support</li>
                    <li>• Project coordination and reporting</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🇺🇸 USA Market</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Advantages:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Extended business hours coverage</li>
                    <li>• Understanding of IBC and local codes</li>
                    <li>• Experience with US construction software</li>
                    <li>• Familiarity with permitting processes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Typical Applications:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Multi-state project coordination</li>
                    <li>• Permit research and applications</li>
                    <li>• Subcontractor coordination</li>
                    <li>• Progress reporting and documentation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Australia</h4>
              <p className="text-sm text-gray-600 mb-2">Local: $85,000 AUD</p>
              <p className="text-sm text-gray-600 mb-2">Offshore: $22,000 AUD</p>
              <p className="text-2xl font-bold text-lime-600">74% Savings</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">New Zealand</h4>
              <p className="text-sm text-gray-600 mb-2">Local: $78,000 NZD</p>
              <p className="text-sm text-gray-600 mb-2">Offshore: $20,000 NZD</p>
              <p className="text-2xl font-bold text-lime-600">74% Savings</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">USA</h4>
              <p className="text-sm text-gray-600 mb-2">Local: $75,000 USD</p>
              <p className="text-sm text-gray-600 mb-2">Offshore: $18,000 USD</p>
              <p className="text-2xl font-bold text-lime-600">76% Savings</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <Card className="border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What construction functions can be outsourced effectively?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The most effectively outsourced construction functions include project administration, permit processing, client communication, supplier coordination, cost tracking, and project documentation. Functions requiring physical site presence like inspections and construction supervision typically remain onshore, while administrative and coordination tasks achieve excellent results through outsourcing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How do offshore teams handle local building codes and regulations?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We recruit professionals with construction industry experience and provide specialized training in local building codes, municipal requirements, and industry standards specific to your market. Implementation includes comprehensive training on regulatory compliance, regular updates on code changes, and local oversight for complex compliance issues. Our teams develop expertise in specific markets and maintain tracking systems that meet local requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What about construction software and technology integration?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our offshore professionals are skilled in major construction management platforms including Procore, Buildertrend, CoConstruct, and other industry-specific software. We handle all system integration and ensure your offshore team has appropriate access to your construction management systems. Training on your specific software and processes is included in our implementation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How long does it take to implement construction outsourcing?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Construction outsourcing implementation typically requires 6-8 weeks due to the specialized nature of construction processes. This includes 1-2 weeks for candidate recruitment and initial training, 2-3 weeks for construction standards and company process training, and 2-3 weeks for system integration and parallel operations. Teams typically reach full productivity within 90-120 days as they gain experience with your specific project requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Does outsourcing affect client relationships and satisfaction?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Well-implemented construction outsourcing typically improves client satisfaction through better communication, faster response times, and more systematic project management. Offshore teams often provide more detailed documentation and consistent follow-up than overwhelmed local staff. Success requires proper implementation with quality monitoring, clear communication protocols, and maintaining personal relationships for complex client interactions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How do you ensure quality control for construction outsourcing?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Quality control is built into our construction outsourcing process through systematic training, performance monitoring, and regular quality reviews. We provide ongoing management oversight, establish clear quality standards, and conduct regular performance evaluations. Our teams use standardized processes, detailed checklists, and quality verification systems to ensure consistent delivery that meets your construction standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Scale Your Construction Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Stop letting administrative bottlenecks limit your growth. Join the construction companies that have discovered the power of strategic outsourcing to scale efficiently and profitably.
          </p>
          <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            <Phone className="w-5 h-5 mr-2" />
            Book Your Strategy Call
          </Button>
          <p className="mt-4 text-sm opacity-75">
            Book a strategy call to discuss your specific construction challenges and discover how outsourcing can transform your operations.
          </p>
        </div>
      </div>
    </div>
  );
}
