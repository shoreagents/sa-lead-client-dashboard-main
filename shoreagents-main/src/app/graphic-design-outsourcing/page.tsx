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
  TrendingDown,
  X,
  HelpCircle,
  Briefcase,
  Palette,
  Image as ImageIcon,
  Layers,
  MonitorPlay,
  FileText,
  Lightbulb
} from 'lucide-react';
import Image from 'next/image';

export default function GraphicDesignOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge variant="destructive" className="mb-4 bg-red-600 text-white px-4 py-2 text-sm font-semibold flex items-center justify-center w-fit mx-auto">
            <AlertCircle className="w-4 h-4 mr-2" />
            CRITICAL: Businesses Losing $75,000+ Annually on Failed Graphic Design Approaches
          </Badge>
          <p className="text-lg text-gray-600 mb-6">
            While smart businesses embrace systematic graphic design outsourcing, others are getting trapped by unreliable freelancers, overpriced agencies, and internal design disasters. Don't become another victim.
          </p>

          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Graphic Design Outsourcing: Ultimate 2025 Strategy Guide
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            From ShoreAgents CEO Stephen Atcheler: How 500+ successful businesses eliminated design headaches while saving 78% on creative costs through proven Philippines-based graphic design teams.
          </p>

          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=600&fit=crop"
              alt="Graphic designers working on creative projects with design software and color palettes in modern studio"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Your Design Strategy Call
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg font-semibold">
              See Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">78%</div>
              <div className="text-gray-600 font-medium">Average Cost Savings</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">24hr</div>
              <div className="text-gray-600 font-medium">Turnaround Time</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Successful Placements</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">92%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </CardContent>
          </Card>
        </div>

        {/* Stephen's $45K Disaster Story */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="w-10 h-10 text-red-600 mr-3" />
            Why I Had to Learn Graphic Design Outsourcing the Hard Way
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Let me tell you about the $45,000 graphic design disaster that taught me everything I know about creative design outsourcing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Three years ago, I had a Melbourne real estate client – premium agency with 12 agents – who was spending $3,800 monthly on a "boutique" design agency. Property brochures, social media graphics, marketing materials, the works. Premium pricing for premium results, right?
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Wrong. Dead wrong.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The agency was delivering 2-3 designs per week, taking 5-7 days per project, and charging $800-1,200 per property brochure. My client was booking property photography, waiting a week for listings, then waiting another week for marketing materials. In Melbourne's fast-moving market, that's business suicide.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              But here's the kicker – the design quality was inconsistent. Some brochures looked fantastic, others looked like they were designed by someone's nephew. No brand consistency. No systematic approach. Just expensive creative chaos.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When that client came to me desperate for a solution, I made a critical mistake. I thought graphic design outsourcing was just about finding cheaper designers. I was wrong, and it cost both of us dearly.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I connected them with a Philippines-based designer who quoted $200 per brochure. Seemed like a win – 75% cost savings, right? But I failed to implement the systems and oversight that make graphic design outsourcing actually work.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Three months later, the client had burned through four different designers, wasted $12,000 on unusable designs, and was ready to fire me. The designs were cheap, but they looked cheap. No brand guidelines, no quality control, no systematic process. Just another outsourcing failure.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              That's when I learned the truth about successful graphic design outsourcing: it's not about finding cheaper designers – it's about building systematic, quality-controlled creative operations that happen to be more cost-effective than local alternatives.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, that same client has a dedicated Philippines-based design team of three specialists: one focused on property marketing, one on social media, and one on brand materials. They're producing 15-20 design projects weekly, with 24-hour turnaround times, at $14,500 annually total – less than four months of their old agency fees.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              More importantly, they have consistent brand quality, systematic processes, and the creative bandwidth to dominate their market. That expensive lesson taught me exactly what businesses need to make graphic design outsourcing work – and what 90% of providers get completely wrong.
            </p>
          </div>
        </div>

        {/* The $75K Annual Disaster */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <X className="w-10 h-10 text-red-600 mr-3" />
            The $75,000 Annual Graphic Design Disaster Most Businesses Accept
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Based on my analysis of 500+ businesses across Australia, New Zealand, and the USA, I've identified the systematic failures that cost companies $75,000+ annually in wasted design investment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <DollarSign className="w-6 h-6 text-red-600 mr-2" />
                  The Local Agency Money Trap
                </h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Australian and US design agencies charge $80-150 per hour, with project minimums of $2,000-5,000. A typical business spending $5,000 monthly on design gets maybe 35-50 hours of actual design work. That's $60,000 annually for part-time creative support.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  But here's what agencies don't tell you: 60% of that cost is overhead – fancy offices, account managers, creative directors who don't actually design, and profit margins that fund their luxury lifestyles. You're paying premium prices for middle-management bloat.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
                  The Freelancer Reliability Nightmare
                </h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Platform-based freelancers seem cheaper at $25-65 per hour, but hidden costs destroy your budget. Project delays, communication gaps, inconsistent quality, and constant turnover mean you're managing designers instead of focusing on your business.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I've seen businesses cycle through 15+ freelancers in a year, spending 20+ hours monthly on designer management, recruitment, and damage control. That's not cost-effective – that's expensive chaos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 text-red-600 mr-2" />
                  The In-House Design Disaster
                </h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Hiring an in-house designer costs $65,000-85,000 annually in Australia, $55,000-75,000 in the USA. Add benefits, equipment, software licenses, and management overhead, and you're looking at $90,000+ for one designer with limited skills.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  But most businesses don't need 40 hours of design work weekly. Your expensive in-house designer spends 50% of their time on administrative tasks, meetings, and non-design activities. You're paying designer rates for administrative work.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-6 h-6 text-red-600 mr-2" />
                  The Real Cost of Design Delays
                </h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  For real estate businesses, design delays cost deals. A property listing delayed by slow design work can cost $10,000-50,000 in lost sales opportunities. Marketing campaigns launched late miss critical timing windows. Product launches delayed by design bottlenecks lose first-mover advantages.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The opportunity cost of slow, unreliable design support far exceeds the sticker price. When your marketing is delayed, your competition captures the market share you should own.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50 md:col-span-2">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Palette className="w-6 h-6 text-red-600 mr-2" />
                  The Brand Consistency Crisis
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Without systematic graphic design outsourcing, your brand becomes a collection of random creative decisions. Different designers, different styles, different quality levels. Your marketing materials look like they're from different companies. Inconsistent branding reduces trust, confuses customers, and undermines your professional credibility. The cost of brand confusion is impossible to calculate, but it's destroying your market position every single day.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* The Solution */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <Zap className="w-10 h-10 text-lime-600 mr-3" />
            The ShoreAgents Systematic Graphic Design Outsourcing Solution
          </h2>
          <p className="text-2xl text-gray-700 text-center mb-8">
            After 500+ successful placements, we've perfected the graphic design outsourcing model that eliminates creative chaos while delivering enterprise-level results at 78% cost savings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 font-semibold">
              See Our Proven Process
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Dedicated Philippines-Based Design Teams</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Our graphic design outsourcing model places skilled Filipino designers directly into your business operations. These aren't freelancers or shared resources – they're dedicated team members who understand your brand, your industry, and your standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Systematic Brand Management</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We implement comprehensive brand guidelines, template systems, and quality control processes that ensure every design deliverable maintains perfect brand consistency. Your dedicated designers follow systematic processes that eliminate creative chaos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">24-Hour Turnaround Advantage</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The Philippines timezone creates a natural productivity advantage. When your Australian or US business closes, your design team starts working. Projects submitted at 5 PM are often completed by 9 AM the next day.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Quality-Controlled Creative Operations</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Our facility-based operation ensures consistent quality, reliable internet connectivity, and professional working conditions. Your designers work in supervised environments with quality control managers who review every deliverable.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Scalable Design Capacity</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Need more design capacity during busy periods? We can scale your team up or down based on business needs. Launch a major campaign? Add specialist designers for specific projects. Seasonal businesses can adjust creative capacity to match demand cycles.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Enterprise-Level Results</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Filipino designers combine Western education standards with Asian work ethics. They're trained in the same design software, follow the same industry standards, and deliver the same quality as local designers – but at 78% cost savings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Options */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <Briefcase className="w-10 h-10 text-lime-600 mr-3" />
            ShoreAgents Graphic Design Outsourcing Options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="flex items-center justify-center mb-4">
                    <Palette className="w-12 h-12 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">One Agent</h3>
                  <p className="text-3xl font-bold text-lime-600 mb-2">$14,300 USD</p>
                  <p className="text-gray-600 mb-4">annually</p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Perfect for small businesses or those testing graphic design outsourcing for the first time. One dedicated designer handles all your creative needs – social media graphics, basic marketing materials, simple web graphics.
                  </p>
                  <ul className="text-left space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">One dedicated designer</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Brand guidelines setup</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">24-hour turnaround</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Quality control included</span>
                    </li>
                  </ul>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-lime-600 text-white px-4 py-1 font-semibold">Most Popular</Badge>
              </div>
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="flex items-center justify-center mb-4">
                    <Layers className="w-12 h-12 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Team</h3>
                  <p className="text-3xl font-bold text-lime-600 mb-2">Custom Pricing</p>
                  <p className="text-gray-600 mb-4">2-5 designers</p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Growing businesses need specialized design skills. Our team solutions provide multiple designers with different specializations – print design, digital graphics, brand development, web design, and motion graphics.
                  </p>
                  <ul className="text-left space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">2-5 specialized designers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Coordinated team approach</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Multiple design disciplines</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">60% agency cost savings</span>
                    </li>
                  </ul>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="flex items-center justify-center mb-4">
                    <BarChart className="w-12 h-12 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Workforce</h3>
                  <p className="text-3xl font-bold text-lime-600 mb-2">Enterprise</p>
                  <p className="text-gray-600 mb-4">Complete creative department</p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Large businesses with complex creative needs require systematic design operations. Our enterprise workforce solutions provide complete creative departments with project managers, senior designers, specialists, and quality control systems.
                  </p>
                  <ul className="text-left space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Multiple design teams</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Dedicated project managers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Senior design leadership</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">70% cost savings</span>
                    </li>
                  </ul>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="border-lime-200 bg-lime-50 mt-8">
            <CardContent className="p-6">
              <div className="flex items-start">
                <Lightbulb className="w-6 h-6 text-lime-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Integration with Existing Services</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Most clients start with our virtual assistant services or comprehensive outsourcing solutions, then add graphic design support as they see the quality and reliability of our systematic approach. This integration creates powerful operational synergies. Your virtual assistant can brief designers, manage projects, and coordinate deliverables while your design team focuses purely on creative work.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Implementation Process */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-lime-600 mr-3" />
            How ShoreAgents Implements Graphic Design Outsourcing
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
            Our systematic implementation process ensures successful graphic design outsourcing from day one, avoiding the common failures that destroy 80% of outsourcing attempts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-lime-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-lime-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Week 1: Brand Foundation & Design Brief</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We start with comprehensive brand analysis and design brief development. Your existing brand guidelines, style preferences, target audience, and business objectives are documented and systematized for consistent application. This foundation phase prevents the inconsistency problems that plague most graphic design outsourcing arrangements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-lime-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-lime-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Week 2: Designer Matching & Integration</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Based on your brand requirements and design needs, we match you with pre-screened designers who have relevant industry experience. Real estate businesses get designers familiar with property marketing. Professional services get designers experienced with corporate branding. Your designers complete brand immersion training before handling any live projects.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-lime-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-lime-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Week 3-4: Pilot Projects & Quality Calibration</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We start with small pilot projects to calibrate quality expectations and refine communication processes. These early projects establish design standards, revision protocols, and delivery timelines. This calibration phase ensures your graphic design outsourcing operation delivers exactly what you need, how you need it, when you need it.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-lime-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-lime-600 font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Month 2-3: Full Operation & Optimization</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Once processes are established, we move to full operational capacity. Your design team handles all regular creative needs while we monitor quality, manage performance, and optimize workflows. Most clients see dramatic productivity improvements by month 3 – faster turnaround times, consistent quality, and the creative bandwidth to pursue opportunities they previously couldn't handle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose ShoreAgents */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Award className="w-8 h-8 text-lime-600 mr-3" />
            Why Choose ShoreAgents for Graphic Design Outsourcing
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            With 500+ successful placements, we've solved the systematic problems that make most graphic design outsourcing attempts fail. We handle the management, quality control, and cultural integration that transforms offshore designers into productive team members.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            You get enterprise-level creative operations without the complexity, cost, or management headaches of traditional design agencies or unreliable freelancers. See what our clients say about the transformation in their creative operations.
          </p>
          <div className="mt-6">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 font-semibold">
              <DollarSign className="mr-2 h-5 w-5" />
              See Investment Options
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <HelpCircle className="w-10 h-10 text-lime-600 mr-3" />
            Graphic Design Outsourcing: Frequently Asked Questions
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How much does graphic design outsourcing cost compared to local designers?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our graphic design outsourcing delivers 78% cost savings compared to local designers. A dedicated designer costs $14,300 USD annually versus $65,000+ for local talent. Design agencies charging $80-150 per hour become $15-25 per hour equivalent with our systematic approach.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What types of design work can outsourced designers handle?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our designers handle all standard business design needs: marketing materials, social media graphics, website graphics, logos, brochures, presentations, digital advertisements, print materials, and brand development. They're skilled in Adobe Creative Suite, Canva, Figma, and other professional design tools.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How do you ensure quality control with offshore designers?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Quality control is built into our systematic process. Every designer follows documented brand guidelines, uses approved templates, and has their work reviewed by quality control managers before delivery. We also provide ongoing training and performance monitoring to maintain consistent standards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What about communication and timezone differences?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Philippine timezones actually provide advantages for Australian, New Zealand, and US businesses. There's 4-6 hours of overlap for real-time communication, plus the overnight work advantage means projects submitted at close of business are often ready by morning. All our designers are English-fluent with Western business communication training.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How quickly can you set up graphic design outsourcing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Implementation typically takes 2-4 weeks from contract signing to full operation. Week 1 focuses on brand foundation and requirements. Week 2 handles designer matching and integration. Weeks 3-4 involve pilot projects and quality calibration. Most clients see significant productivity improvements by month 2.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What happens if the designer doesn't work out?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We handle all staffing issues through our comprehensive management system. If a designer isn't meeting expectations, we provide additional training, adjust workflows, or replace them with a better match. You never deal with hiring, firing, or performance management – we handle everything.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Can graphic design outsourcing scale with business growth?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Absolutely. Our model scales from single designers to complete creative departments. Start with one designer, add specialists as needed, or build integrated teams with multiple design disciplines. We also offer seasonal scaling for businesses with fluctuating creative needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Zap className="w-10 h-10 text-white mr-3" />
            Ready to Transform Your Creative Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ businesses who've eliminated design chaos while achieving 78% cost savings through systematic graphic design outsourcing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Your Strategy Session
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold">
              See Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Related Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Complete Outsourcing & Design Solutions</h2>
          <p className="text-gray-600 mb-8 text-center">
            Graphic design outsourcing is part of our comprehensive business solutions. Discover our complete outsourcing services and specialized virtual assistant solutions that work together seamlessly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <MonitorPlay className="w-12 h-12 text-lime-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Website Development</h3>
                <p className="text-sm text-gray-600 mb-4">SEO-optimized websites built by skilled developers.</p>
                <Button variant="outline" size="sm" className="border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold">
                  Website Outsourcing
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <FileText className="w-12 h-12 text-lime-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Content Marketing</h3>
                <p className="text-sm text-gray-600 mb-4">Complement your SEO with strategic content creation.</p>
                <Button variant="outline" size="sm" className="border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold">
                  Content Writing Services
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-lime-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Digital Marketing</h3>
                <p className="text-sm text-gray-600 mb-4">Build complete digital marketing teams with design as foundation.</p>
                <Button variant="outline" size="sm" className="border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold">
                  Digital Marketing Services
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-lime-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">SEO Virtual Assistant</h3>
                <p className="text-sm text-gray-600 mb-4">Dedicated SEO specialists who work as your team members.</p>
                <Button variant="outline" size="sm" className="border-lime-600 text-lime-600 hover:bg-lime-50 font-semibold">
                  SEO Virtual Assistant
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
}
