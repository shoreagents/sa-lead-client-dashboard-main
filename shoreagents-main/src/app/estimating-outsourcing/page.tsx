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
  BarChart,
  Lightbulb,
  Settings
} from 'lucide-react';
import Image from 'next/image';

export default function EstimatingOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <Badge className="bg-red-600 text-white px-4 py-2 text-lg hover:bg-red-700">
              🚨 CRITICAL: Construction Companies Losing $100K+ Annually on Estimating Disasters
            </Badge>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Estimating Outsourcing
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            While smart contractors embrace systematic estimating outsourcing, others are getting trapped by inaccurate bids, cost overruns, and project failures. Don't become another victim of the 67% of construction projects that exceed budget due to poor estimating.
          </p>
          
          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop"
              alt="Cost estimating outsourcing with construction plans and calculator showing accurate project estimates"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            After 500+ successful offshore placements, construction companies are transforming their profitability through strategic estimating outsourcing. However, choosing the wrong approach can lead to $150K+ disasters that destroy business operations.
          </p>

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
                <TrendingUp className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">78%</span>
              </div>
              <p className="text-gray-700 font-medium">Cost Reduction vs Local Estimators</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">3.4x</span>
              </div>
              <p className="text-gray-700 font-medium">Faster Turnaround Than Traditional</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">500+</span>
              </div>
              <p className="text-gray-700 font-medium">Successful Construction Placements</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">±3%</span>
              </div>
              <p className="text-gray-700 font-medium">Accuracy Rate on Project Estimates</p>
            </div>
          </div>
        </div>

        {/* Stephen's Story */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 mb-16">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-16 h-16 bg-lime-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">My $150K Estimating Disaster (And How It Changed Everything)</h3>
              <p className="text-sm text-gray-600">Stephen Atcheler, CEO of ShoreAgents</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Let me tell you about the phone call that changed how I think about estimating outsourcing forever. It was March 2019, and I had just finished a consultation with a Melbourne-based commercial construction company. Their CEO, James, had been struggling with their internal estimating team for months.
            </p>
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "Stephen," he said, "we just lost a $2.3 million tender because our estimate was 18% higher than the winning bid. But here's the kicker – six months later, that same contractor came back asking for variations worth $400K because their original estimate was completely wrong."
              </p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              That's when James shared the real nightmare. His company had been paying $95K annually for a senior estimator who was consistently producing estimates that were either too high (losing them work) or too low (costing them profits). The final straw came when a residential development project went 23% over budget due to estimation errors – a $150K loss that nearly bankrupted the company.
            </p>
            <div className="bg-lime-50 border-l-4 border-lime-600 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                Within three months of implementing our cost estimating outsourcing solution, James's company was winning 40% more tenders with accurate estimates that maintained healthy profit margins. The Philippines-based estimating team we provided understood Australian construction standards, worked during his off-hours, and delivered estimates with ±3% accuracy.
              </p>
              <p className="text-gray-900 font-bold">
                From our 500+ successful placements, I've learned that Australian construction companies see an average 78% cost reduction and 3.4x faster turnaround when they implement systematic estimating outsourcing.
              </p>
            </div>
            <p className="text-xl text-gray-900 font-bold">
              But here's what most people don't understand about estimating outsourcing: it's not just about saving money – it's about transforming your entire competitive positioning. When you can produce accurate estimates faster and cheaper than your competitors, you don't just win more work; you win the RIGHT work at the RIGHT margins.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white font-semibold">
            <Phone className="w-5 h-5 mr-2" />
            Schedule Your Consultation
          </Button>
        </div>

        {/* Why Traditional Estimating Fails */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Traditional Estimating Is Killing Australian Construction Companies
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            After working with hundreds of construction companies across Australia, New Zealand, and the USA, I can tell you that the estimating crisis isn't just about numbers – it's about survival. The traditional approach to construction estimating is fundamentally broken.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="w-7 h-7 text-red-600 mr-2" />
                  The $95K Estimator Who Can't Estimate
                </h3>
                <p className="text-gray-700 mb-4">
                  Here's the uncomfortable truth: most Australian construction companies are paying $95K+ annually for senior estimators who are either overloaded, outdated, or simply not skilled enough for today's complex projects.
                </p>
                <p className="text-gray-700 font-semibold">
                  One Brisbane contractor told me their estimator's single calculation error cost them $80K on a commercial fit-out project.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-7 h-7 text-red-600 mr-2" />
                  The Feast-or-Famine Workload Problem
                </h3>
                <p className="text-gray-700 mb-4">
                  Construction is cyclical, but payroll isn't. During busy periods, your estimator is overwhelmed and makes costly mistakes. During slow periods, you're paying full salary for partial productivity.
                </p>
                <p className="text-gray-700 font-semibold">
                  This feast-or-famine cycle is destroying profitability across the industry.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <BarChart className="w-7 h-7 text-red-600 mr-2" />
                  The Technology Gap That's Widening
                </h3>
                <p className="text-gray-700 mb-4">
                  Most Australian estimators are still using Excel spreadsheets and outdated software while their international competitors leverage advanced quantity surveying tools, AI-assisted take-offs, and real-time material pricing databases.
                </p>
                <p className="text-gray-700 font-semibold">
                  Estimates that take 2-3 weeks to produce, contain calculation errors, and miss critical cost components.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <DollarSign className="w-7 h-7 text-red-600 mr-2" />
                  The Hidden Costs Killing Margins
                </h3>
                <p className="text-gray-700 mb-3">Every construction business owner focuses on obvious costs – salaries, software, training. But the hidden costs are far more devastating:</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Lost opportunities: Missing time-sensitive tenders</li>
                  <li>• Overpriced bids: Conservative estimates losing work</li>
                  <li>• Underpriced bids: Optimistic estimates destroying profitability</li>
                  <li>• Reputation damage: Estimate errors damaging client relationships</li>
                  <li>• Cash flow problems: Inaccurate estimates disrupting financial planning</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 bg-red-100 border-l-4 border-red-600 p-6 rounded-lg">
            <p className="text-lg text-gray-900 font-bold">
              One Perth-based residential builder calculated that estimate-related problems cost them $180K annually in lost profits, rework, and opportunity costs. That's nearly double what they were paying their estimator in salary.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold">
            <Zap className="w-5 h-5 mr-2" />
            See How We Fix This
          </Button>
        </div>

        {/* The Solution */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The ShoreAgents Estimating Outsourcing Solution
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Our estimating outsourcing solution isn't just about finding cheaper estimators – it's about building a systematic, scalable, and sustainable competitive advantage. Based on 500+ successful placements, we've developed a proven methodology that transforms how Australian construction companies approach project estimation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Globe className="w-7 h-7 text-lime-600 mr-2" />
                  Our Proven Offshore Estimating Methodology
                </h3>
                <p className="text-gray-700 mb-4">
                  Unlike generic BPO providers who treat estimating as data entry, we've built specialized construction estimating teams that understand Australian building standards, material costs, and regulatory requirements.
                </p>
                <p className="text-gray-700 font-semibold">
                  Our Philippines-based estimators are trained specifically for the Australian market and work during your off-hours, delivering complete estimates by the time you arrive at the office.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <BarChart className="w-7 h-7 text-lime-600 mr-2" />
                  Advanced Technology Integration
                </h3>
                <p className="text-gray-700 mb-4">
                  Our offshore estimating teams use the latest quantity surveying software, including Bluebeam, PlanSwift, and specialized Australian pricing databases. This technology integration ensures accuracy rates within ±3% while significantly reducing turnaround times.
                </p>
                <p className="text-gray-700 font-semibold">
                  Human expertise combined with technological efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-7 h-7 text-lime-600 mr-2" />
                  Quality Control Systems That Work
                </h3>
                <p className="text-gray-700 mb-4">
                  Every estimate goes through our three-tier quality control process: initial preparation, peer review, and final verification. This systematic approach eliminates the single-point-of-failure problem.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Automatic calculation verification</li>
                  <li>• Cross-referencing with historical data</li>
                  <li>• Specialized reviews for complex projects</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-7 h-7 text-lime-600 mr-2" />
                  Scalability That Grows With You
                </h3>
                <p className="text-gray-700 mb-4">
                  Our estimating outsourcing solution scales seamlessly with your business cycles. Need estimates for three small projects? We handle it. Bidding on a major development with tight deadlines? We can assign a dedicated team within 48 hours.
                </p>
                <p className="text-gray-700 font-semibold">
                  You pay for the estimating capacity you need, when you need it.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Clock className="w-8 h-8 text-lime-600 mr-3" />
              Geographic Advantages That Matter
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              The Philippines-to-Australia time zone alignment is perfect for construction estimating. Your project documents are submitted at the end of your workday, processed overnight, and delivered as complete estimates the next morning.
            </p>
            <p className="text-lg text-gray-900 font-semibold">
              This creates a 24-hour productivity cycle that competitors can't match.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white font-semibold">
            <Lightbulb className="w-5 h-5 mr-2" />
            Get Your Custom Solution
          </Button>
        </div>

        {/* Service Options */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Estimating Outsourcing Service Options
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            We understand that every construction company has different estimating needs. That's why we've developed flexible service options that can be customized to your specific requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Entry-Level Estimating Support</h3>
                  <p className="text-gray-600 mb-4">
                    Perfect for smaller construction companies or those testing estimating outsourcing for the first time.
                  </p>
                  <p className="text-3xl font-bold text-lime-600 mb-4">Starting at $14,300 annually</p>
                  <p className="text-sm text-gray-600">
                    That's 78% less than hiring a local estimator, with no sick leave, superannuation, or recruitment costs.
                  </p>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Start with Single Agent
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Team-Based Estimating Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    For growing construction companies handling multiple projects simultaneously.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Specialized estimating support across different trade areas – structural, electrical, plumbing, and finishes.
                  </p>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Estimating Workforce</h3>
                  <p className="text-gray-600 mb-4">
                    Large construction companies and developers need enterprise workforce solutions for complex projects.
                  </p>
                  <p className="text-gray-700 text-sm">
                    Includes dedicated project managers, quality control specialists, and direct integration with your existing project management systems.
                  </p>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Enterprise Solutions
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Specialized Services */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Specialized Estimating Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-lime-600 mx-auto mb-2" />
                <h4 className="font-bold text-gray-900 mb-1">Electrical estimating</h4>
                <p className="text-gray-600 text-sm">Specialized teams for electrical contractors</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-lime-600 mx-auto mb-2" />
                <h4 className="font-bold text-gray-900 mb-1">Civil estimating</h4>
                <p className="text-gray-600 text-sm">Infrastructure and earthworks specialists</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-lime-600 mx-auto mb-2" />
                <h4 className="font-bold text-gray-900 mb-1">Fit-out estimating</h4>
                <p className="text-gray-600 text-sm">Commercial and retail interior specialists</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-lime-600 mx-auto mb-2" />
                <h4 className="font-bold text-gray-900 mb-1">Renovation estimating</h4>
                <p className="text-gray-600 text-sm">Experts in existing building modifications</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-lime-600 mx-auto mb-2" />
                <h4 className="font-bold text-gray-900 mb-1">Emergency estimating</h4>
                <p className="text-gray-600 text-sm">Fast-track estimates for urgent projects</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white font-semibold">
            <DollarSign className="w-5 h-5 mr-2" />
            Compare Pricing Options
          </Button>
        </div>

        {/* Implementation Process */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Implementation: Getting Started With Estimating Outsourcing
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            The implementation process is designed to be seamless and risk-free. Based on our experience with 500+ successful placements, we've refined our onboarding process to ensure you see immediate results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment & Planning</h3>
              <p className="text-sm text-gray-600 mb-2">(Week 1)</p>
              <p className="text-gray-700 text-sm">
                Comprehensive assessment of your current estimating processes, project types, and specific requirements. We analyze your templates, software preferences, and establish baseline metrics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Team Selection & Training</h3>
              <p className="text-sm text-gray-600 mb-2">(Week 2-3)</p>
              <p className="text-gray-700 text-sm">
                Based on your specific requirements, we select and train your dedicated estimating team on Australian construction standards, your preferred software, and your company's specific methodologies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pilot Project</h3>
              <p className="text-sm text-gray-600 mb-2">(Week 4)</p>
              <p className="text-gray-700 text-sm">
                Start with a pilot project to test all systems and processes. This allows you to evaluate quality, communication effectiveness, and overall fit before full implementation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Full Implementation</h3>
              <p className="text-sm text-gray-600 mb-2">(Ongoing)</p>
              <p className="text-gray-700 text-sm">
                Once the pilot is successful, we move to full implementation with ongoing optimization, regular performance reviews, and scaling adjustments based on your business growth.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold">
            <FileText className="w-5 h-5 mr-2" />
            See Our Full Process
          </Button>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions About Estimating Outsourcing
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How accurate are offshore estimating teams compared to local estimators?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our offshore estimating teams consistently achieve ±3% accuracy rates, which is significantly better than the industry average of ±15% for traditional estimating methods. This improved accuracy comes from systematic processes, multiple quality control checks, and specialized training in Australian construction standards. Our teams use advanced software tools and maintain updated material cost databases, ensuring estimates are both accurate and current.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What types of construction projects can be estimated offshore?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our estimating teams handle virtually all project types including residential construction, commercial buildings, industrial facilities, civil infrastructure, electrical systems, and specialized trades. We've successfully completed estimates for projects ranging from $50K home renovations to $50M commercial developments. The key is having estimators who understand Australian building codes, material specifications, and local market conditions – which all our team members receive specialized training in.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How does the time zone difference affect project timelines?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  The Philippines-Australia time zone alignment is actually a major advantage for construction estimating. You can submit project documents at the end of your workday, and receive completed estimates the next morning. This creates a 24-hour productivity cycle that dramatically reduces turnaround times. For urgent projects, we maintain overlap hours where both teams work simultaneously, ensuring immediate communication when needed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What's included in the estimating outsourcing service?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our comprehensive service includes material take-offs, labor calculations, equipment costs, overhead allowances, risk assessments, and detailed cost breakdowns. We also provide alternative material specifications, value engineering suggestions, and project timeline estimates. All estimates come with supporting documentation, calculation sheets, and are delivered in your preferred format. Quality control, project management, and ongoing support are included in all packages.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How do you ensure quality control for offshore estimating?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Every estimate goes through our three-tier quality control process: initial preparation by the estimator, peer review by a senior team member, and final verification by our Australian-trained quality manager. We also maintain audit trails for all calculations, use standardized estimating templates, and conduct regular accuracy reviews against actual project costs. This systematic approach ensures consistent quality while maintaining fast turnaround times.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What's the real cost comparison between offshore and local estimating?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our estimating outsourcing starts at $14,300 USD annually compared to $95,000+ for a local senior estimator. That's a 78% cost saving before considering additional benefits like no recruitment costs, sick leave, superannuation, or training expenses. When you factor in the improved accuracy, faster turnaround times, and scalability, the total value proposition typically delivers 300-400% ROI within the first year.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How quickly can you scale up estimating capacity for large projects?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We can scale your estimating capacity within 48-72 hours for urgent projects. Our resource pool includes specialists in all major construction trades, allowing us to assign additional estimators with the right expertise for your specific project type. This scalability eliminates the feast-or-famine cycle that affects traditional estimating departments, ensuring you have the right capacity when you need it.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Estimating Process?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ construction companies that have already discovered the competitive advantage of systematic estimating outsourcing. Get accurate estimates, faster turnaround times, and significant cost savings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Book Your Consultation
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold">
              <Users className="w-5 h-5 mr-2" />
              Meet Our Team
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">
            Proven results from construction companies worldwide
          </p>
        </div>

        {/* Related Services */}
        <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl shadow-lg p-8">
          <div className="bg-lime-100 border-l-4 border-lime-600 p-4 rounded-lg mb-8">
            <p className="text-lg text-gray-900 font-semibold flex items-center">
              <Lightbulb className="w-6 h-6 text-lime-600 mr-2" />
              Pro Tip: Estimating outsourcing is just one component of a comprehensive business transformation. Smart construction companies combine multiple services for maximum competitive advantage.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Integrate Estimating With Your Complete Business Solution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-lime-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Building2 className="w-6 h-6 text-lime-600 mr-2" />
                  Construction Outsourcing
                </h3>
                <p className="text-gray-700 mb-3">
                  Comprehensive construction outsourcing solutions for complete project lifecycle management
                </p>
                <a href="#" className="text-lime-600 hover:text-lime-700 font-semibold flex items-center">
                  Learn More →
                </a>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <FileText className="w-6 h-6 text-lime-600 mr-2" />
                  Drafting Outsourcing
                </h3>
                <p className="text-gray-700 mb-3">
                  Professional drafting outsourcing services for seamless design-to-estimate workflows
                </p>
                <a href="#" className="text-lime-600 hover:text-lime-700 font-semibold flex items-center">
                  Learn More →
                </a>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Settings className="w-6 h-6 text-lime-600 mr-2" />
                  Engineering Outsourcing
                </h3>
                <p className="text-gray-700 mb-3">
                  Specialized engineering outsourcing support for technical project requirements
                </p>
                <a href="#" className="text-lime-600 hover:text-lime-700 font-semibold flex items-center">
                  Learn More →
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">🔥 Popular Outsourcing Combinations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-lime-50 rounded-lg">
                <CheckCircle className="w-8 h-8 text-lime-600 mx-auto mb-2" />
                <p className="font-bold text-gray-900 mb-1">Estimating + Construction Outsourcing</p>
                <p className="text-sm text-gray-600">Complete project lifecycle support from bid to completion</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="font-bold text-gray-900 mb-1">Estimating + Drafting Outsourcing</p>
                <p className="text-sm text-gray-600">Seamless design-to-estimate workflow integration</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="font-bold text-gray-900 mb-1">Engineering + Estimating</p>
                <p className="text-sm text-gray-600">Technical design and accurate cost estimation combined</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
