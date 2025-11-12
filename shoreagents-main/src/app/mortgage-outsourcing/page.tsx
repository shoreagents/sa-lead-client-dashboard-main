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
  TrendingDown,
  Home as HomeIcon,
  Briefcase
} from 'lucide-react';
import Image from 'next/image';

export default function MortgageOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <Badge className="bg-red-600 text-white px-4 py-2 text-lg hover:bg-red-700">
              🚨 CRITICAL: Mortgage Companies Losing $200K+ Annually on Manual Processing
            </Badge>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Mortgage Outsourcing: Transform Your Lending Operations in 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            While smart lenders embrace systematic mortgage outsourcing, others are getting buried under loan backlogs, compliance errors, and skyrocketing labor costs. Don't become another victim of manual mortgage chaos.
          </p>
          
          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=600&fit=crop"
              alt="Mortgage process outsourcing professional analyzing financial data on dual monitors with loan documents and US currency on desk - modern office environment"
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

        {/* Stephen's Introduction */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 mb-16">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-16 h-16 bg-lime-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Stephen Atcheler, CEO of ShoreAgents</h3>
              <p className="text-sm text-gray-600">500+ Successful Placements | 15+ Years Industry Experience</p>
            </div>
          </div>
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-gray-700 leading-relaxed">
              After 500+ successful offshore placements across Australia, New Zealand, and the USA, I've seen mortgage companies transform their operations through strategic outsourcing. But here's what the industry won't tell you: most mortgage BPO implementations fail because companies focus on cheap labor instead of specialized mortgage expertise.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              I'm Stephen Atcheler, CEO of ShoreAgents, and I'll show you exactly how to implement mortgage outsourcing that actually works – without the $50K+ disasters I've seen destroy mortgage operations.
            </p>
          </div>
        </div>

        {/* Key Stats Grid */}
        <div className="bg-gradient-to-br from-lime-50 to-lime-100 rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <TrendingDown className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">73%</span>
              </div>
              <p className="text-gray-700 font-medium">Cost Reduction vs Local Staff</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">48%</span>
              </div>
              <p className="text-gray-700 font-medium">Faster Loan Processing Times</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">24/7</span>
              </div>
              <p className="text-gray-700 font-medium">Operations Coverage</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">500+</span>
              </div>
              <p className="text-gray-700 font-medium">Successful Placements</p>
            </div>
          </div>
        </div>

        {/* What I Learned Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What 500+ Mortgage Placements Taught Me About Industry Problems
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              After placing staff with mortgage companies across Australia, New Zealand, and the USA, I've observed the same pattern repeatedly: traditional staffing approaches are fundamentally broken for the mortgage industry.
            </p>
            <p>
              Most mortgage businesses try to solve capacity issues by hiring local processors at premium rates. But experienced mortgage professionals are increasingly rare and expensive. The recruitment cycle becomes endless while loan pipelines suffer.
            </p>
            <p>
              What I've learned is that mortgage companies need specialized offshore teams who understand loan documentation, compliance basics, and can integrate with existing systems – not just cheaper labor.
            </p>
            <p className="font-semibold text-xl text-lime-600">
              The companies that succeed with mortgage outsourcing treat it as system building, not cost cutting. That's the difference between transformation and disaster.
            </p>
          </div>
        </div>

        {/* What Is Mortgage Outsourcing */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Is Mortgage Outsourcing? (And Why Most Companies Get It Wrong)
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Mortgage process outsourcing is the strategic delegation of mortgage operations to specialized offshore teams who become an extension of your in-house staff. Unlike generic BPO services, effective mortgage outsourcing requires deep understanding of loan origination, compliance requirements, and industry-specific software platforms.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              But here's where most companies fail: they treat mortgage outsourcing like data entry. They send work offshore without proper system integration, compliance training, or quality controls. The result? More problems than solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              Real mortgage business process outsourcing involves finding professionals who understand loan products, regulatory requirements, and can work seamlessly with your existing workflow. It's about building an offshore extension of your team, not just moving tasks to cheaper labor.
            </p>
          </div>

          {/* Core Services */}
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Mortgage Outsourcing Services Include:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Loan application processing and initial review</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Document collection and verification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Credit analysis and risk assessment support</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Underwriting support and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Closing coordination and post-closing activities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Quality control and compliance monitoring</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 mt-6 italic">
                The goal isn't just cost reduction – it's operational transformation that allows your team to focus on revenue-generating activities while maintaining the quality and compliance standards your business demands.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Traditional Staffing is Broken */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center">
            <AlertCircle className="w-10 h-10 text-red-600 mr-3" />
            Why Traditional Mortgage Staffing Is Broken (Industry Secrets Exposed)
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            After working with mortgage companies across Australia, New Zealand, and the USA, I've identified the systemic problems destroying mortgage operations. The industry standard approach is fundamentally flawed.
          </p>

          <div className="space-y-8">
            {/* Local Hiring Trap */}
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Local Hiring Trap</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Most mortgage companies try to solve capacity issues by hiring local processors at $65K-$85K annually. Add benefits, training, office space, and management overhead, and you're looking at $120K+ per employee. But here's the killer: experienced mortgage processors are increasingly rare and expensive.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In Brisbane alone, I've seen mortgage companies lose three processors in six months because competing lenders offered better packages. The recruitment and training cycle becomes endless, while loan pipelines suffer.
                </p>
              </CardContent>
            </Card>

            {/* Compliance Nightmare */}
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Compliance Nightmare</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mortgage regulations change constantly. APRA requirements in Australia, CCCFA in New Zealand, and various state regulations in the USA create a compliance minefield. One mistake can result in regulatory penalties, bank partnership terminations, and reputation damage worth hundreds of thousands.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Traditional hiring approaches don't address this. You're hoping individual employees stay current with regulations while handling increasing loan volumes. It's a recipe for disaster.
                </p>
              </CardContent>
            </Card>

            {/* Scalability Problem */}
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Scalability Problem</h3>
                <p className="text-gray-700 leading-relaxed">
                  Mortgage businesses experience dramatic volume fluctuations. Interest rate changes can double or halve your pipeline overnight. Traditional staffing models can't handle this volatility. You're either overstaffed during slow periods or drowning during busy times.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Real Cost */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Real Cost of Broken Mortgage Operations:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Lost bank partnerships due to processing delays</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Compliance violations resulting in regulatory penalties</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Client complaints and reputation damage</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Staff burnout and constant recruitment costs</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Missed revenue opportunities during peak periods</span>
              </li>
            </ul>
            <p className="text-xl font-semibold text-gray-900 mt-6">
              The mortgage industry needs a fundamentally different approach. That's where strategic mortgage BPO becomes the game-changer smart lenders use to dominate their markets.
            </p>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white">
              <Phone className="w-5 h-5 mr-2" />
              Book Your Mortgage Outsourcing Consultation
            </Button>
          </div>
        </div>

        {/* ShoreAgents Solution */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="w-10 h-10 text-lime-600 mr-3" />
            The ShoreAgents Mortgage Outsourcing Solution
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Our mortgage outsourcing services aren't about finding cheap labor in the Philippines. We focus on building specialized mortgage teams that understand your specific loan products, compliance requirements, and operational systems.
          </p>

          <div className="space-y-8">
            {/* Honest Assessment */}
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Honest Assessment: What We Actually Provide</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Let me be clear about our capabilities. We don't provide mortgage training or software licenses – that's your responsibility. What we do is find candidates with existing mortgage experience or strong financial backgrounds who can learn your specific processes quickly.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We specialize in identifying professionals who've worked with mortgage brokers, banks, or financial institutions. These candidates understand loan documentation, compliance basics, and can adapt to your specific requirements with proper guidance from your team.
                </p>
              </CardContent>
            </Card>

            {/* Philippines Advantage */}
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Philippines Advantage for Mortgage Operations</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Philippines offers unique advantages for mortgage business process outsourcing. The education system produces finance graduates familiar with Western banking concepts. English proficiency is excellent, and the cultural work ethic aligns perfectly with mortgage industry demands for accuracy and attention to detail.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  More importantly, the timezone overlap with Australia and the evening coverage for USA operations means your mortgage pipeline never stops moving. While your local team sleeps, your offshore team processes applications, verifies documents, and prepares files for next-day decisions.
                </p>
              </CardContent>
            </Card>

            {/* Systematic Approach */}
            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Systematic Approach to Mortgage Outsourcing:</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-lime-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Candidate Selection:</h4>
                      <p className="text-gray-700">Find professionals with mortgage or financial services background</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-lime-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Cultural Integration:</h4>
                      <p className="text-gray-700">Ensure understanding of Australian/NZ/USA business practices</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-lime-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">System Integration:</h4>
                      <p className="text-gray-700">Help integrate your offshore team with existing workflows</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-lime-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Quality Management:</h4>
                      <p className="text-gray-700">Ongoing oversight and performance optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-lime-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Scalability Support:</h4>
                      <p className="text-gray-700">Rapid team expansion during peak periods</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-900 font-semibold mt-6 text-lg">
                  The result is a mortgage processing operation that runs more efficiently than purely local teams while maintaining the quality and compliance standards your business requires. Our clients typically see 73% cost reduction and 48% faster processing times within the first six months.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Options */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Mortgage Outsourcing Service Options
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Every mortgage business has different needs. Whether you're a single broker needing processing support or a large lender requiring comprehensive operations, we have solutions that scale with your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Single Processor */}
            <Card className="border-lime-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Single Mortgage Processor</h3>
                  <p className="text-gray-600 mb-4">
                    Perfect for mortgage brokers or small lenders needing dedicated processing support. Your processor integrates with your existing systems and workflows.
                  </p>
                  <ul className="text-left space-y-2 text-sm text-gray-700 mb-6">
                    <li>• Document collection and verification</li>
                    <li>• Application processing and initial review</li>
                    <li>• Client communication support</li>
                    <li>• Compliance documentation</li>
                  </ul>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white">
                  Start with One Processor
                </Button>
              </CardContent>
            </Card>

            {/* Processing Team */}
            <Card className="border-lime-200 hover:shadow-xl transition-shadow bg-lime-50">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Badge className="bg-lime-600 text-white mb-4">MOST POPULAR</Badge>
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Mortgage Processing Team</h3>
                  <p className="text-gray-600 mb-4">
                    Multi-person teams for growing mortgage operations. Includes processors, coordinators, and quality control specialists working together.
                  </p>
                  <ul className="text-left space-y-2 text-sm text-gray-700 mb-6">
                    <li>• Complete loan processing pipeline</li>
                    <li>• Underwriting support and documentation</li>
                    <li>• Quality control and compliance monitoring</li>
                    <li>• Extended hours coverage</li>
                  </ul>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white">
                  Build Your Team
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Operations */}
            <Card className="border-lime-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Mortgage Operations</h3>
                  <p className="text-gray-600 mb-4">
                    Complete offshore mortgage operations for large lenders. Comprehensive teams handling all aspects of mortgage processing and support.
                  </p>
                  <ul className="text-left space-y-2 text-sm text-gray-700 mb-6">
                    <li>• Full mortgage processing departments</li>
                    <li>• 24/7 operations coverage</li>
                    <li>• Scalable capacity management</li>
                    <li>• Advanced reporting and analytics</li>
                  </ul>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white">
                  Scale Your Workforce
                </Button>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-gray-700 mt-8 text-lg">
            The key is starting with what makes sense for your current volume and growth plans. Many of our most successful clients began with one agent and expanded to full teams as their mortgage business grew.
          </p>
        </div>

        {/* Implementation Process */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            How Our Mortgage Outsourcing Implementation Works
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Unlike generic BPO providers who dump candidates on you, we follow a systematic implementation process that ensures your offshore mortgage team integrates seamlessly with your operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Requirements Analysis</h3>
              <p className="text-gray-700">
                We analyze your current mortgage processes, loan products, software systems, and compliance requirements. This isn't a sales call – it's a deep dive into what you actually need.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Candidate Selection</h3>
              <p className="text-gray-700">
                We identify candidates with relevant financial services background. These aren't random call center workers – they're professionals who understand mortgage concepts and can learn your specific processes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integration Setup</h3>
              <p className="text-gray-700">
                We help establish secure connections to your mortgage software, set up communication protocols, and create documentation for your specific workflow requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Management</h3>
              <p className="text-gray-700">
                We provide continuous oversight, performance monitoring, and optimization. This isn't "set and forget" – we actively manage your offshore team to ensure consistent results.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-lime-50 rounded-lg text-center">
            <p className="text-lg text-gray-900">
              The entire process takes <span className="font-bold text-lime-600">2-4 weeks</span> from initial consultation to your first offshore mortgage processor handling live loans. Compare that to the <span className="font-bold">8-16 weeks</span> required to hire and train local staff.
            </p>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-700 mb-4">
              Ready to see how mortgage process outsourcing can transform your operations?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50">
                Learn More About Our Proven Methodology
              </Button>
              <Button className="bg-lime-600 hover:bg-lime-700 text-white">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Geographic Markets */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <Globe className="w-10 h-10 text-purple-600 mr-3" />
            Why Australia, New Zealand & USA Choose Philippines for Mortgage Outsourcing
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            After 500+ placements across these markets, I've seen firsthand why the Philippines offers unique advantages for mortgage business process outsourcing. It's not just about cost – it's about operational advantages that transform how mortgage businesses work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-blue-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🇦🇺 Australia Market</h3>
                <p className="text-gray-700 mb-4">
                  Perfect timezone alignment means your Sydney or Melbourne office hands off to Philippines teams for overnight processing. APRA compliance requirements are well-understood by our candidates.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Overlapping business hours with major cities</li>
                  <li>• Understanding of Australian banking systems</li>
                  <li>• Cultural alignment with service expectations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🇳🇿 New Zealand Market</h3>
                <p className="text-gray-700 mb-4">
                  Similar timezone benefits with Auckland operations. Our teams understand CCCFA requirements and can work with major New Zealand lenders and software platforms.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Real-time collaboration during business hours</li>
                  <li>• Familiarity with NZ mortgage processes</li>
                  <li>• English-first communication standards</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🇺🇸 USA Market</h3>
                <p className="text-gray-700 mb-4">
                  Evening and overnight coverage means loan applications processed while your US team sleeps. Experience with major US mortgage platforms and state-specific requirements.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 24/7 operations capability</li>
                  <li>• Understanding of US mortgage regulations</li>
                  <li>• Experience with US banking software</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <p className="text-lg text-gray-700 mt-8 text-center font-semibold">
            The combination of timezone advantages, cultural fit, and financial services expertise makes the Philippines the optimal location for mortgage outsourcing across all three markets. Your mortgage pipeline operates continuously while maintaining the quality standards your business demands.
          </p>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white">
              <DollarSign className="w-5 h-5 mr-2" />
              See Mortgage Outsourcing Investment Options
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions About Mortgage Outsourcing
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How much does mortgage outsourcing cost compared to local hiring?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our mortgage processors start at $19,500 USD annually, compared to $85,000+ for local Australian mortgage staff. That's a 73% cost reduction while maintaining the same quality of work. When you factor in benefits, office space, and management overhead for local staff, the savings often exceed 80%.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What mortgage software can your offshore teams work with?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our teams have experience with major mortgage platforms including Encompass, Calyx Point, MortgageBot, and various bank-specific systems. However, you're responsible for providing software licenses and training on your specific configurations. We focus on finding candidates who can learn these systems quickly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How do you ensure compliance with mortgage regulations?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We find candidates with financial services backgrounds who understand compliance basics, but you remain responsible for training them on your specific regulatory requirements. Our role is ensuring they have the foundation to learn your compliance procedures quickly and accurately.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What happens if my offshore mortgage processor doesn't work out?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We provide ongoing management and performance monitoring to prevent issues before they become problems. If replacement is necessary, we handle the transition process and find a suitable candidate at no additional cost. Our goal is long-term success, not just placement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How quickly can we get started with mortgage outsourcing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  The typical timeline is 2-4 weeks from initial consultation to your first processor handling live loans. This includes candidate selection, background verification, system setup, and initial integration. Much faster than the 8-16 weeks required for local hiring and training.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Can we scale our offshore mortgage team during busy periods?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Absolutely. This is one of the key advantages of outsourcing. When interest rates drop and application volumes surge, we can rapidly add team members. When markets slow, you're not stuck with expensive local staff you can't afford to maintain. Scalability is built into our approach.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What security measures protect sensitive loan data?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our facilities feature enterprise-grade security including secure internet connections, restricted access, and comprehensive privacy policies. However, you control access to your systems through VPNs and user permissions. We work within your existing security framework rather than creating new vulnerabilities.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Why ShoreAgents is Different */}
        <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Why ShoreAgents Is Different from Generic BPO Companies
          </h2>
          <p className="text-xl text-gray-700 text-center mb-8">
            Most BPO companies treat mortgage outsourcing like data entry. They focus on cheap labor without understanding the complexity of mortgage operations. That's why so many outsourcing implementations fail.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Industry Focus:</h4>
                <p className="text-gray-700">We specialize in financial services, not generic outsourcing</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Quality Standards:</h4>
                <p className="text-gray-700">Find candidates with relevant experience, not just cheap labor</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Ongoing Management:</h4>
                <p className="text-gray-700">Active oversight ensures consistent performance</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Geographic Expertise:</h4>
                <p className="text-gray-700">Deep understanding of AUS/NZ/USA markets</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Scalability Support:</h4>
                <p className="text-gray-700">Rapid expansion during peak periods</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Cultural Integration:</h4>
                <p className="text-gray-700">Teams that understand Western business practices</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              We don't provide software licenses or mortgage-specific training – those remain your responsibility. But we do provide something more valuable: professionals who can learn quickly and integrate seamlessly with your existing operations.
            </p>
            <p className="text-gray-900 font-semibold text-lg">
              Our success comes from understanding that every mortgage business is unique. We don't provide cookie-cutter solutions – we build customized teams that work specifically with your processes, systems, and quality standards.
            </p>
          </div>
        </div>

        {/* Future of Mortgage Operations */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The Future of Mortgage Operations: What Smart Lenders Are Building
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            The mortgage industry is evolving rapidly. Interest rate volatility, increasing regulatory complexity, and competitive pressure for faster turnaround times are reshaping how successful lenders operate.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-lime-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Technology Integration</h3>
              <p className="text-gray-700 leading-relaxed">
                AI and automation are changing mortgage processing, but they're not replacing humans – they're augmenting them. The most successful implementations combine offshore teams with intelligent automation to create processing capabilities that neither could achieve alone.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Scalable Operations</h3>
              <p className="text-gray-700 leading-relaxed">
                Market volatility requires operations that can scale rapidly. Traditional hiring models can't handle the dramatic volume swings that characterize modern mortgage markets. Outsourcing provides the flexibility to expand during busy periods and contract during slow times.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Global Talent Access</h3>
              <p className="text-gray-700 leading-relaxed">
                The shortage of experienced mortgage processors in developed markets is driving smart lenders to global talent pools. The Philippines offers not just cost advantages, but access to skilled professionals who understand financial services and can work seamlessly with Western business practices.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-lime-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Winning Formula for 2025 and Beyond:</h3>
            <div className="text-lg text-gray-900">
              <span className="font-semibold text-lime-600">Local expertise for client relationships</span> + 
              <span className="font-semibold text-blue-600"> Offshore efficiency for processing</span> + 
              <span className="font-semibold text-purple-600"> Technology integration for automation</span> + 
              <span className="font-semibold text-green-600"> Scalable capacity for market volatility</span> = 
              <span className="font-bold text-gray-900"> Competitive advantage that's difficult to replicate.</span>
            </div>
            <p className="text-gray-700 mt-4">
              The mortgage companies building this foundation today will dominate their markets tomorrow. The ones clinging to traditional staffing models will struggle to compete on speed, cost, and service quality.
            </p>
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Join Mortgage Companies Already Winning with Outsourcing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-lime-600 mb-2">500+</div>
              <p className="text-gray-700 font-medium">Successful Placements</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-lime-600 mb-2">73%</div>
              <p className="text-gray-700 font-medium">Average Cost Savings</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-lime-600 mb-2">48%</div>
              <p className="text-gray-700 font-medium">Faster Processing</p>
            </div>
          </div>
          <p className="text-center text-xl text-gray-700 mt-8">
            Don't let your competitors gain the outsourcing advantage while you're still struggling with traditional hiring challenges.
          </p>
          <div className="text-center mt-6">
            <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50">
              <BarChart className="w-5 h-5 mr-2" />
              Read Success Stories
            </Button>
          </div>
        </div>

        {/* Final Multi-CTA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Ready to Discuss Your Mortgage Outsourcing Strategy?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-lime-200 hover:shadow-lg transition-shadow text-center h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <Phone className="w-12 h-12 text-lime-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Schedule a Consultation</h3>
                <p className="text-gray-700 mb-6 flex-grow">
                  Discuss your specific requirements and learn how mortgage outsourcing can transform your operations
                </p>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto">
                  Book Your Call
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow text-center h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <DollarSign className="w-12 h-12 text-lime-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Get Pricing Information</h3>
                <p className="text-gray-700 mb-6 flex-grow">
                  See exactly how much you can save with our transparent pricing structure
                </p>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto">
                  View Pricing
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow text-center h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <Target className="w-12 h-12 text-lime-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Learn Our Process</h3>
                <p className="text-gray-700 mb-6 flex-grow">
                  Understand exactly how we implement mortgage outsourcing for maximum success
                </p>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto">
                  See How It Works
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final Hero CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Mortgage Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the mortgage companies already saving 73% on processing costs while improving their turnaround times. Let's discuss how mortgage outsourcing can solve your specific operational challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Your Consultation
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold">
              Learn More About Our Company
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">
            Questions? Contact our team or explore our complete outsourcing solutions
          </p>
        </div>
      </div>
    </div>
  );
}
