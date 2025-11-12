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
  Settings,
  Lock
} from 'lucide-react';
import Image from 'next/image';

export default function DraftingOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <Badge className="bg-red-600 text-white px-4 py-2 text-lg hover:bg-red-700">
              🚨 CRITICAL: Engineering & Architecture Firms Hemorrhaging $75K+ Annually on Drafting Disasters
            </Badge>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Drafting Outsourcing: The Ultimate 2025 Solution
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            While forward-thinking firms leverage systematic drafting outsourcing to slash costs and accelerate project delivery, others are drowning in recruitment nightmares, skill gaps, and CAD license expenses. Don't become another casualty of the talent crisis.
          </p>
          
          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=600&fit=crop"
              alt="CAD drafting outsourcing with technical drawings and engineering blueprints"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700 mb-8">
            From Stephen Atcheler's 500+ successful offshore placements: The complete framework for transforming your CAD operations while your competitors struggle with talent shortages and exploding costs.
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
                <TrendingUp className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">82%</span>
              </div>
              <p className="text-gray-700 font-medium">Cost Reduction vs Local Hiring</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">3.2x</span>
              </div>
              <p className="text-gray-700 font-medium">Faster Project Turnaround</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">24/7</span>
              </div>
              <p className="text-gray-700 font-medium">Philippines Time Zone Coverage</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">150+</span>
              </div>
              <p className="text-gray-700 font-medium">Drafting Specialists Placed</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white font-semibold">
            <Phone className="w-5 h-5 mr-2" />
            Schedule Your Consultation
          </Button>
        </div>

        {/* Stephen's Insights */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 mb-16">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-16 h-16 bg-lime-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What 150+ Drafting Placements Taught Me About Industry Quality</h3>
              <p className="text-sm text-gray-600">Stephen Atcheler, CEO of ShoreAgents</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              After placing drafting specialists across Australia, New Zealand, and the USA, I've noticed a consistent pattern: firms struggle not because they can't find CAD operators, but because they're hiring for the wrong skillset entirely.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The fundamental problem with traditional CAD hiring is that most firms treat drafting as a purely technical skill. They focus on software proficiency rather than <span className="font-bold">drafting intelligence</span> – the ability to understand why drawings matter and how they impact construction, fabrication, and project success.
            </p>

            <div className="bg-white rounded-lg p-6 my-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">The Industry Reality I See Repeatedly:</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Engineering and architecture firms hire people who can use AutoCAD or Revit, then spend months training them on industry standards, construction logic, and drawing conventions. Meanwhile, they're paying full local salaries for substandard work that requires constant revision.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This is where drafting outsourcing becomes strategically superior. Our Philippines specialists aren't just CAD operators – they're engineering graduates who understand the technical principles behind every line and dimension. They ask the right questions: "How will this be constructed?" and "What information does the contractor need?"
              </p>
            </div>

            <div className="bg-lime-50 border-l-4 border-lime-600 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Key Insight from 500+ Placements:</h4>
              <p className="text-gray-700 leading-relaxed italic">
                "The most successful firms have discovered that technical skills are common, but drafting judgment is rare. The Philippines combines both, with the added advantage of complementary time zones that effectively double your production capacity."
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              What separates successful CAD drafting outsourcing from failed attempts is understanding that you're not just hiring cheaper labor – you're accessing a talent pool that's been specifically trained for precision work and systematic documentation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              This isn't about cutting costs – it's about building technical competence that lets you scale your capacity while maintaining quality standards that actually improve your professional reputation.
            </p>
          </div>
        </div>

        {/* Why Traditional Approaches Fail */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Traditional Drafting Approaches Are Failing Engineering & Architecture Firms
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            After working with 500+ firms across three countries, I've identified the critical problems destroying profitability in technical drawing operations. Most firms are stuck in outdated hiring models that guarantee failure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Local Talent Crisis: Why CAD Skills Are Disappearing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Here's the brutal truth: The pool of skilled CAD operators in Australia, New Zealand, and the USA is shrinking fast. Universities are producing engineers who want to design, not draft. The old-school draftsmen are retiring, and nobody's replacing them.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I've seen Sydney firms spend six months trying to fill a single CAD position. When they finally find someone, they're either overqualified and leave quickly, or underqualified and produce work that needs constant revision.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">The Real Cost of Local Hiring Disasters:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Recruitment costs: $15K-25K per position</li>
                    <li>• Training time: 3-6 months before productive</li>
                    <li>• Salary inflation: CAD operators demanding $65K-85K</li>
                    <li>• Turnover costs: 40% leave within 18 months</li>
                    <li>• Revision cycles: Poor quality requiring 2-3 rounds</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Software License Trap: When CAD Costs Spiral Out of Control</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  AutoCAD, Revit, SolidWorks – these essential tools cost $2K-5K per seat annually. Add specialized plugins, training, and updates, and you're looking at $8K-12K per CAD operator before they even start working.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  An Auckland architecture firm told me they were spending $40K yearly on software licenses for four CAD operators. When two quit within six months, they were stuck paying for unused licenses while scrambling to find replacements. That's money down the drain that could have funded three offshore specialists.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-red-200 bg-red-50 mb-8">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Deadline Pressure Cooker: When Projects Become Profit Killers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Engineering and architecture work comes in waves. One week you're scrambling to meet multiple deadlines, the next you're slow. Local staff costs are fixed whether you're busy or not. During peak periods, you're either paying overtime rates or missing deadlines. During slow periods, you're paying for idle time.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I've watched firms lose major contracts because they couldn't scale their drafting capacity quickly enough. A Denver engineering firm missed out on a $2M infrastructure project because they couldn't produce the required drawings within the bid timeframe. Their two local CAD operators were already maxed out on existing work.
              </p>
            </CardContent>
          </Card>

          <div className="bg-lime-50 border-l-4 border-lime-600 p-6 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-2">Industry Reality Check:</h4>
            <p className="text-gray-700 leading-relaxed italic">
              "The firms winning major contracts today have cracked the code on scalable drafting capacity. They can handle five projects simultaneously or focus all resources on one urgent deadline. That flexibility is impossible with traditional hiring models."
            </p>
          </div>
        </div>

        {/* ShoreAgents Solution */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The ShoreAgents Drafting Outsourcing Solution: Precision, Scale, and Profit
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Our drafting outsourcing methodology isn't about finding cheap labor – it's about accessing a pool of specialists trained specifically for precision technical drawing. These aren't generalists trying to learn CAD; they're dedicated professionals who live and breathe technical documentation.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The Philippines Advantage: Why Our Drafting Specialists Excel</h3>
            <p className="text-lg text-gray-700 mb-6">
              The Philippines has emerged as the global center for technical drafting excellence. Their educational system produces engineers who are trained on the same software you use, follow international standards, and understand the precision requirements of engineering documentation.
            </p>

            <div className="bg-lime-50 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Our Drafting Specialists Have Experience With:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">AutoCAD:</span>
                    <span className="text-gray-700"> 2D technical drawings, construction documentation</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Revit:</span>
                    <span className="text-gray-700"> 3D BIM modeling, architectural coordination</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">SolidWorks:</span>
                    <span className="text-gray-700"> Mechanical design, assembly drawings</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">MicroStation:</span>
                    <span className="text-gray-700"> Infrastructure projects, civil engineering</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Inventor:</span>
                    <span className="text-gray-700"> 3D mechanical design, manufacturing drawings</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">CATIA:</span>
                    <span className="text-gray-700"> Complex surface modeling, aerospace applications</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">SketchUp:</span>
                    <span className="text-gray-700"> Conceptual design, presentation drawings</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Tekla:</span>
                    <span className="text-gray-700"> Structural steel detailing, construction drawings</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mt-4 italic">
                We match you with specialists who already have proficiency in your required software. Any additional training for specific workflows or standards would be provided by you based on your requirements.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">The Secret Weapon: Time Zones</h4>
              <p className="text-gray-700 leading-relaxed">
                While your Australian or American team sleeps, your Philippines drafting specialists are working. Submit drawings for revision at 5 PM, and they're waiting in your inbox the next morning. This isn't just convenient – it's a competitive advantage.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Matching That Actually Works</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Most firms worry about quality when they hear "outsourcing." Here's how we eliminate that concern: Every drafting specialist we recommend goes through a rigorous screening process focused on technical competence and industry experience before we present them to you.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We don't just find people who can use software – we find specialists who understand drafting principles, construction logic, and quality documentation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scalability That Matches Your Project Flow</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This is where technical drafting outsourcing becomes a strategic weapon. Need to double your CAD capacity for a major project? We can have additional specialists working within 48 hours. Project finished early? Scale back without layoffs or unused salary costs.
                </p>
                <p className="text-gray-700 leading-relaxed italic text-sm">
                  A Perth engineering firm recently won a massive mining infrastructure project that required 12 CAD operators for four months. Instead of hiring locally (which would have taken months and cost $400K+), they worked with us to identify 12 qualified specialists within a week.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mb-16">
          <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white font-semibold">
            <Target className="w-5 h-5 mr-2" />
            Get Your Custom Drafting Strategy
          </Button>
        </div>

        {/* Service Options */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Drafting Outsourcing Service Options: Find Your Perfect Fit
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Whether you're a solo architect needing occasional CAD support or a major engineering firm requiring full-scale drafting outsourcing, we have solutions that scale with your needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Entry-Level: Single CAD Specialist</h3>
                  <p className="text-gray-600 mb-4">
                    Perfect for smaller firms or specialized projects. Start with one agent who becomes an extension of your team.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 text-left mb-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dedicated resource: Same specialist on all projects</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Custom training: Learns your standards</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cost predictability: Fixed monthly rate</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Direct communication: Work directly together</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Immediate availability: Ready within 48 hours</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Start with Single Specialist →
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth-Stage: Multi-Specialist Teams</h3>
                  <p className="text-gray-600 mb-4">
                    For firms handling multiple projects simultaneously or requiring specialized expertise across different disciplines.
                  </p>
                  <p className="text-gray-700 text-sm mb-4">
                    Instead of hiring generalists who are okay at everything, you get specialists who excel in their specific area. Your structural projects get handled by someone who lives and breathes steel detailing.
                  </p>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Build Multi-Specialist Team →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise-Level: Complete Drafting Departments</h3>
                  <p className="text-gray-600 mb-4">
                    For major firms requiring full-scale drafting capacity with project management, quality control, and scalable resources.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 text-left mb-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dedicated project coordinators</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Quality assurance managers</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Scale from 5 to 50 specialists</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Enterprise Workforce Solutions →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Implementation: From Consultation to Production in 30 Days
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Our proven process eliminates the typical headaches of bringing new team members online. Within 30 days, your drafting specialists are producing work that matches your existing standards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Week 1: Strategy and Selection</h3>
              <p className="text-gray-700 mb-3">
                Comprehensive assessment of your current drafting needs, project types, and quality standards.
              </p>
              <p className="text-gray-700 text-sm">
                We present 3-5 pre-screened candidates with relevant experience in your industry. You review portfolios, technical assessments, and interview them directly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Week 2-3: Integration</h3>
              <p className="text-gray-700 mb-3">
                Your specialists familiarize themselves with your specific drawing standards, layer conventions, and quality expectations.
              </p>
              <p className="text-gray-700 text-sm">
                Covers drawing standards, quality protocols, communication systems, industry standards, and workflow adaptation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Week 4: Production & Quality</h3>
              <p className="text-gray-700 mb-3">
                Your specialists begin working on real projects under close supervision. Every drawing is reviewed before reaching you.
              </p>
              <p className="text-gray-700 text-sm">
                By week 4, you're receiving production-quality work that meets your standards. Training period is complete.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose ShoreAgents */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose ShoreAgents for Your Drafting Outsourcing
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            The difference between us and other BPO providers comes down to specialization and accountability. We don't just provide warm bodies – we provide carefully selected professionals who understand the precision requirements of engineering and architectural documentation.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our expertise lies in finding and matching you with specialists who have the right technical background and experience. We handle the sourcing, screening, and recommendation process, then present you with qualified candidates who meet your specific requirements.
          </p>
          <div className="bg-white rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
              <Globe className="w-6 h-6 text-lime-600 mr-2" />
              Geographic Advantage:
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Our Philippines-based specialists work during your night hours, effectively giving you 24/7 production capacity. Submit revisions at 5 PM, and they're ready by 8 AM the next morning. This time zone advantage alone can cut project delivery times by 30-50%."
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white font-semibold">
            <DollarSign className="w-5 h-5 mr-2" />
            See Investment Options
          </Button>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions About Drafting Outsourcing
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How much does drafting outsourcing cost compared to local hiring?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our drafting outsourcing services start at $14,300 USD annually for a dedicated CAD specialist, compared to $65,000+ for local Australian staff. That's a 78% cost reduction while maintaining the same quality standards. When you factor in recruitment costs, training time, software licenses, and equipment, the savings often exceed $50K per specialist annually.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What happens if a drafting specialist doesn't meet our quality standards?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  If a specialist you've hired doesn't meet your quality expectations, we'll help you find a replacement candidate. Our screening process focuses on matching you with professionals who already demonstrate the precision and technical competence you need, reducing the likelihood of quality issues.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How do we ensure data security and confidentiality with offshore drafting?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  All our specialists work from secure, monitored facilities with enterprise-grade security protocols. We use VPN connections, encrypted file transfers, and comprehensive non-disclosure agreements. Your project files are never stored locally and are automatically deleted after project completion. We maintain the same security standards as major international engineering firms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What CAD software do your drafting specialists use?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our specialists have experience with all major CAD platforms including AutoCAD, Revit, SolidWorks, Inventor, MicroStation, CATIA, Tekla, and SketchUp. You provide the software licenses as part of your existing setup, and our specialists work directly within your systems. They adapt to your specific software configuration and any specialized plugins you use.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How quickly can we scale up drafting capacity for large projects?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We can typically add additional specialists within 48-72 hours for urgent projects. For planned expansions, we prefer 1-2 weeks notice to ensure proper integration with your systems and standards. The specialists come with existing CAD experience and adapt to your specific requirements and workflows.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Do you handle both 2D drafting and 3D modeling?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, our specialists handle everything from basic 2D technical drawings to complex 3D BIM models. We have specialists trained in architectural documentation, structural steel detailing, mechanical assembly drawings, civil engineering plans, and electrical schematics. Whatever your drafting needs, we can match you with specialists who have specific experience in your area.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What time zones do your drafting specialists work in?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our specialists work Philippines time, which overlaps perfectly with Australian business hours and provides overnight coverage for USA clients. This means you can submit projects at the end of your day and receive completed work the next morning. The time zone advantage alone can reduce project delivery times by 30-50% compared to traditional local hiring.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Can we integrate your drafting specialists with our existing project management systems?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Absolutely. Our specialists work within your existing systems and workflows. They can access your project management platforms, file servers, and communication tools. We don't require you to change your processes – we adapt to your way of working. This seamless integration is one of the key advantages of our approach to technical drafting outsourcing.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Services */}
        <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Complete Your Technical Team with Related Services
          </h2>
          <p className="text-xl text-gray-700 text-center mb-8">
            Most firms that implement drafting outsourcing discover they can optimize their entire technical operation. Our integrated approach lets you build complete offshore teams that work seamlessly together.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-lime-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Settings className="w-6 h-6 text-lime-600 mr-2" />
                  Engineering Support
                </h3>
                <p className="text-gray-700 mb-3">
                  Complement your CAD specialists with engineering virtual assistants for calculations, specifications, and project coordination.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Perfect for: Structural calculations, MEP coordination, project documentation, regulatory compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Building2 className="w-6 h-6 text-lime-600 mr-2" />
                  Architectural Design
                </h3>
                <p className="text-gray-700 mb-3">
                  Expand beyond technical drawings with architect virtual assistants for design development and construction documentation.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Perfect for: Design development, 3D modeling, rendering, permit submissions, construction administration.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Users className="w-6 h-6 text-lime-600 mr-2" />
                  Construction Support
                </h3>
                <p className="text-gray-700 mb-3">
                  Integrate with construction virtual assistants for project management, scheduling, and field coordination.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Perfect for: Project scheduling, submittal tracking, RFI management, progress reporting.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Calculator className="w-6 h-6 text-lime-600 mr-2" />
                  Cost Estimation
                </h3>
                <p className="text-gray-700 mb-3">
                  Connect your drafting team with estimating virtual assistants for accurate quantity takeoffs and cost analysis.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Perfect for: Quantity surveying, material takeoffs, cost databases, bid preparation.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 bg-white rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-2">Integration Advantage:</h4>
            <p className="text-gray-700 leading-relaxed italic">
              "Most successful firms start with one service like drafting outsourcing, then expand to complete departments. The same training standards, quality control, and management systems work across all services, creating a seamless offshore operation."
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Drafting Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the engineering and architecture firms that have already eliminated their drafting headaches and scaled their capacity beyond their competitors' reach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Target className="w-5 h-5 mr-2" />
              Book Your Strategy Session
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold">
              <DollarSign className="w-5 h-5 mr-2" />
              View Investment Options
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">
            Don't let outdated hiring models cost you another contract. The firms dominating their markets have already made this transition.
          </p>
        </div>
      </div>
    </div>
  );
}
