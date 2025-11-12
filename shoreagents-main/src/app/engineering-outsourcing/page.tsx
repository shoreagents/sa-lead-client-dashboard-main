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
  Settings,
  Layers,
  Hammer
} from 'lucide-react';
import Image from 'next/image';

export default function EngineeringOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <Badge className="bg-red-600 text-white px-4 py-2 text-lg hover:bg-red-700">
              🚨 CRITICAL: Construction Companies Losing $150K+ Annually on Engineering Bottlenecks
            </Badge>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Engineering Outsourcing: The Complete 2025 Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            While smart property developers embrace systematic engineering outsourcing, others are getting trapped by expensive in-house limitations, project delays, and compliance failures. Don't become another victim of outdated staffing models.
          </p>
          
          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=600&fit=crop"
              alt="Engineering outsourcing with structural calculations and technical drawings"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700 mb-8">
            Discover how Australian property developers and construction companies are saving 68% on engineering costs while accelerating project timelines by 34% through strategic offshore partnerships.
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
                <span className="text-4xl font-bold text-gray-900">68%</span>
              </div>
              <p className="text-gray-700 font-medium">Average Cost Savings</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">34%</span>
              </div>
              <p className="text-gray-700 font-medium">Faster Project Completion</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">24/7</span>
              </div>
              <p className="text-gray-700 font-medium">Timezone Advantage</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-lime-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">500+</span>
              </div>
              <p className="text-gray-700 font-medium">Successful Placements</p>
            </div>
          </div>
        </div>

        {/* Why Most Engineering Outsourcing Fails */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Most Engineering Outsourcing Fails – And What Actually Works
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              I've been watching the engineering outsourcing industry make the same critical mistake for years. Companies focus on finding cheap engineers instead of finding the right engineers – and it's destroying project timelines and budgets across Australia.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Take Marcus, a Melbourne developer I met last year. He was hemorrhaging money on his engineering costs – paying $180,000 annually for two in-house structural engineers who were only productive 60% of the time. When specialized MEP work came up, he'd pay $250/hour for consultants. When projects ramped up, he'd scramble for temporary engineers at premium rates.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              The inefficiency was staggering. Marcus was paying full-time salaries for part-time productivity while still outsourcing specialized work at premium rates. Sound familiar?
            </p>
            
            <div className="bg-white rounded-lg p-6 my-6">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                What most people don't understand about engineering outsourcing is that it's not about replacing your engineering team – it's about augmenting their capabilities. The most successful clients I work with use engineering outsourcing to handle routine structural calculations, civil drawings, and MEP designs while their in-house teams focus on client relationships, complex problem-solving, and business development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                After implementing our engineering outsourcing solution, Marcus got access to a full team of Philippine-based structural, civil, and MEP engineers for $45,000 annually. Same quality work, 24-hour turnaround times due to timezone advantages, and scalable capacity based on project demands.
              </p>
            </div>

            <div className="bg-lime-50 border-l-4 border-lime-600 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                His project timelines shortened by 30% because our team worked while his Australian team slept. When his team finished at 5 PM, our engineers started their day with fresh energy and clear priorities. By 8 AM the next morning, Marcus had progress updates, completed calculations, and preliminary drawings ready for review.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold">
                Last I checked, Marcus has expanded to three concurrent developments and is consistently delivering projects 34% faster than his previous timelines. He's saving 68% on engineering costs while maintaining Australian quality standards.
              </p>
            </div>

            <p className="text-xl text-gray-900 font-bold mt-6">
              The difference between successful engineering outsourcing and expensive failures isn't cost – it's specialization, quality control, and understanding that professional engineering requires professional management.
            </p>
          </div>
        </div>

        {/* Why Traditional Staffing Fails */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Traditional Engineering Staffing Is Bankrupting Property Developers
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            After working with 500+ property developers and construction companies across Australia, New Zealand, and the USA, I've identified the critical engineering bottlenecks that are crushing profit margins and destroying project timelines.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="w-7 h-7 text-red-600 mr-2" />
                  The Hidden Cost of In-House Engineering Teams
                </h3>
                <p className="text-gray-700 mb-4">Most property developers think they're saving money by maintaining in-house engineering teams. The reality is devastating when you calculate the true costs:</p>
                <ul className="space-y-2 text-gray-700 text-sm mb-4">
                  <li>• Structural Engineer: $95,000 – $120,000 annually plus 30% benefits</li>
                  <li>• Civil Engineer: $85,000 – $105,000 annually plus 30% benefits</li>
                  <li>• MEP Engineer: $90,000 – $110,000 annually plus 30% benefits</li>
                  <li>• Office space, equipment, software: $25,000 – $35,000 annually</li>
                  <li>• Training and certification: $10,000 – $15,000 annually</li>
                </ul>
                <p className="text-xl font-bold text-red-600">
                  Total cost for basic three-engineer team: $380,000 – $475,000 annually
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-7 h-7 text-red-600 mr-2" />
                  The 60% Utilization Crisis
                </h3>
                <p className="text-gray-700 mb-4">
                  Here's the brutal truth about in-house engineering teams: they're only productive 60% of the time. Project cycles create feast-or-famine workloads where engineers are either overwhelmed or underutilized.
                </p>
                <p className="text-gray-700 mb-4">
                  I had a Melbourne developer paying $180,000 annually for two structural engineers who were only busy three days per week. When they needed specialized MEP work, they'd hire expensive consultants at $250/hour.
                </p>
                <p className="text-gray-700 font-semibold">
                  The inefficiency is staggering. You're paying full-time salaries for part-time productivity while still outsourcing specialized work at premium rates.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-7 h-7 text-red-600 mr-2" />
                  The Compliance Nightmare
                </h3>
                <p className="text-gray-700 mb-4">
                  Australian building codes are complex and constantly evolving. The National Construction Code (NCC) updates annually, state-specific requirements vary significantly, and local council interpretations add another layer of complexity.
                </p>
                <p className="text-gray-700 font-semibold">
                  I've seen companies face $50,000 – $100,000 in rework costs because their engineers missed updated wind load calculations or new bushfire construction requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-7 h-7 text-red-600 mr-2" />
                  The Scalability Trap
                </h3>
                <p className="text-gray-700 mb-4">
                  Property development is inherently cyclical. One month you need three engineers, the next month you need eight. Traditional staffing models force you to choose between two bad options:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Maintain excess capacity:</strong> Pay for engineers you don't need</li>
                  <li>• <strong>Scramble for resources:</strong> Delay projects while searching for temporary engineers at premium rates</li>
                </ul>
                <p className="text-gray-700 mt-4 font-semibold">
                  Either approach destroys profitability and project timelines.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Solution */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Engineering Outsourcing Solution: 68% Cost Savings, 34% Faster Delivery
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            After 500+ successful placements, we've perfected an engineering outsourcing system that delivers Australian quality standards at Philippine costs with 24/7 productivity advantages.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Specialized Engineering Teams by Discipline</h3>
            <p className="text-lg text-gray-700 mb-6">
              Unlike generic outsourcing providers, we maintain specialized engineering teams trained in specific disciplines and Australian compliance requirements:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-lime-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Building2 className="w-6 h-6 text-lime-600 mr-2" />
                  Structural Engineering
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Timber frame design and analysis</li>
                  <li>• Steel structure calculations</li>
                  <li>• Foundation design for all soil types</li>
                  <li>• Load path analysis and optimization</li>
                  <li>• AS 1170 wind load compliance</li>
                  <li>• Seismic design requirements</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Layers className="w-6 h-6 text-blue-600 mr-2" />
                  Civil Engineering
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Site drainage and stormwater management</li>
                  <li>• Earthworks and grading plans</li>
                  <li>• Pavement design and specifications</li>
                  <li>• Retaining wall design</li>
                  <li>• Council development applications</li>
                  <li>• Environmental impact assessments</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Settings className="w-6 h-6 text-purple-600 mr-2" />
                  MEP Engineering
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Electrical system design and load calculations</li>
                  <li>• Plumbing and hydraulic services</li>
                  <li>• HVAC system design and sizing</li>
                  <li>• Fire protection system design</li>
                  <li>• Energy efficiency compliance</li>
                  <li>• Smart home integration planning</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Three-Layer Quality Control System</h3>
                <p className="text-gray-700 mb-4">
                  Our quality control system ensures every engineering deliverable meets Australian standards before reaching your desk:
                </p>
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1. Philippine Engineer Completion:</strong> Specialists trained in Australian codes complete initial design</li>
                  <li><strong>2. Australian Project Manager Review:</strong> Local managers verify accuracy and compliance</li>
                  <li><strong>3. Registered Engineer Certification:</strong> When required, Australian-registered engineers provide final stamp</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Productivity Advantage</h3>
                <p className="text-gray-700 mb-4">
                  The Philippines' timezone position creates a natural productivity advantage:
                </p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li><strong>5:00 PM Australia:</strong> Brief our engineers on requirements</li>
                  <li><strong>6:00 PM – 2:00 AM:</strong> Philippine engineers execute work</li>
                  <li><strong>8:00 AM Australia:</strong> Review completed work and updates</li>
                  <li><strong>9:00 AM – 5:00 PM:</strong> Provide feedback, coordinate next phase</li>
                </ul>
                <p className="text-lime-600 font-bold mt-4">
                  Result: 34% reduction in project timelines
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Cost Comparison Table */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Proven Cost Savings Analysis</h3>
            <p className="text-lg text-gray-700 mb-6">
              Based on our 500+ successful placements, here's the real-world cost comparison:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-lime-50">
                    <th className="border border-lime-200 px-4 py-3 text-left text-gray-900 font-bold">Engineering Resource</th>
                    <th className="border border-lime-200 px-4 py-3 text-left text-gray-900 font-bold">Traditional Cost</th>
                    <th className="border border-lime-200 px-4 py-3 text-left text-gray-900 font-bold">Our Cost</th>
                    <th className="border border-lime-200 px-4 py-3 text-left text-gray-900 font-bold">Savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">Structural Engineer</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">$125,000/year</td>
                    <td className="border border-gray-200 px-4 py-3 text-lime-600">$35,000/year</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-bold">72%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">Civil Engineer</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">$110,000/year</td>
                    <td className="border border-gray-200 px-4 py-3 text-lime-600">$32,000/year</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-bold">71%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">MEP Engineer</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">$115,000/year</td>
                    <td className="border border-gray-200 px-4 py-3 text-lime-600">$38,000/year</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-bold">67%</td>
                  </tr>
                  <tr className="bg-lime-100">
                    <td className="border border-lime-200 px-4 py-3 font-bold text-gray-900">Total 3-Engineer Team</td>
                    <td className="border border-lime-200 px-4 py-3 font-bold text-gray-900">$350,000/year</td>
                    <td className="border border-lime-200 px-4 py-3 font-bold text-lime-600">$105,000/year</td>
                    <td className="border border-lime-200 px-4 py-3 font-bold text-green-600 text-xl">70%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mt-6 italic">
              These savings include all management oversight, quality control, and technology costs. You get complete engineering services for less than the cost of one local engineer.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white font-semibold">
            <Phone className="w-5 h-5 mr-2" />
            Schedule Your Strategy Consultation
          </Button>
        </div>

        {/* Service Options */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Engineering Outsourcing Service Options
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Choose the engineering outsourcing solution that matches your project scope and growth trajectory. All options include our three-layer quality control system and 24/7 productivity advantages.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Single Specialist</h3>
                  <p className="text-gray-600 mb-4">
                    Perfect for small to medium projects requiring specialized engineering expertise.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 text-left mb-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>One dedicated engineer (structural, civil, or MEP)</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Project-specific training and setup</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Direct project manager coordination</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Quality control and compliance review</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Start with One Specialist
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Engineering Team</h3>
                  <p className="text-gray-600 mb-4">
                    Ideal for growing developers with multiple concurrent projects requiring diverse engineering disciplines.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 text-left mb-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>3-5 engineers across multiple disciplines</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Integrated project management coordination</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cross-discipline collaboration and oversight</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>24/7 workflow optimization</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Build Your Engineering Team
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Engineering Workforce</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive solution for established developers with complex, multi-site operations.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 text-left mb-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Full engineering department replacement</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Senior engineers and support staff</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Enterprise-level technology and processes</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Strategic planning and optimization</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Scale Your Engineering Workforce
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            How Our Engineering Outsourcing Implementation Works
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Our systematic approach ensures smooth integration with your existing processes while maintaining Australian quality standards and compliance requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Requirements Analysis</h3>
              <p className="text-gray-700 text-sm">
                Detailed assessment of your current engineering needs, project types, and compliance requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Team Selection & Training</h3>
              <p className="text-gray-700 text-sm">
                Careful selection of engineers with relevant experience and comprehensive training in your specific requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technology Integration</h3>
              <p className="text-gray-700 text-sm">
                Seamless integration with your existing systems and implementation of collaborative workflows.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pilot Project Launch</h3>
              <p className="text-gray-700 text-sm">
                Controlled pilot project to validate processes, quality standards, and communication workflows.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">5</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Full Implementation</h3>
              <p className="text-gray-700 text-sm">
                Scaling to full production capacity with ongoing management and continuous improvement.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose ShoreAgents */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose ShoreAgents for Engineering Outsourcing?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Our 500+ successful placements across Australia, New Zealand, and the USA demonstrate our commitment to quality, compliance, and client success:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-lime-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Specialized Industry Focus</h4>
                <p className="text-gray-700">We understand property development and construction engineering requirements</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-lime-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Australian Compliance Expertise</h4>
                <p className="text-gray-700">Our teams are trained in local building codes and regulatory requirements</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-lime-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Proven Track Record</h4>
                <p className="text-gray-700">500+ successful placements with measurable cost savings and timeline improvements</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-lime-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Ongoing Management</h4>
                <p className="text-gray-700">Dedicated project managers ensure consistent quality and communication</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-lime-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Scalable Solutions</h4>
                <p className="text-gray-700">From single specialists to complete engineering departments</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-lime-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Geographic Expertise</h4>
                <p className="text-gray-700">Understanding of Australian, New Zealand, and US market requirements</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mt-6 italic">
            We're not just another outsourcing provider – we're your strategic partner in building a more efficient, cost-effective engineering operation.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions About Engineering Outsourcing
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How much does engineering outsourcing cost compared to local hiring?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our engineering outsourcing delivers 68% average cost savings compared to local Australian hiring. A structural engineer costing $125,000 annually in Australia (including benefits and overhead) is available through our service for $35,000 annually with the same quality standards and better productivity due to timezone advantages.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Do offshore engineers understand Australian building codes and compliance requirements?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  This is the critical challenge with engineering outsourcing. Most offshore engineers don't understand Australian building codes – which is why many engineering outsourcing attempts fail. We solve this by hiring engineers who already have experience with Australian projects and implementing a three-layer quality control system that includes mandatory review by Australian project managers who verify all work meets local compliance requirements before delivery.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How do you ensure quality control and professional standards?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We implement a three-layer quality control system: First, Philippine engineers complete initial designs using specialized software and compliance libraries. Second, Australian project managers review all work for accuracy and compliance. Third, we provide access to Australian-registered engineers for final certification when required. This system ensures professional standards while maintaining cost efficiency.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What happens if I need to scale up or down my engineering resources?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our engineering outsourcing is designed for flexibility. You can scale resources up or down based on project demands without long-term commitments or recruitment delays. Need three engineers this month and eight next month? We adjust capacity dynamically. During slow periods, reduce resources without severance costs. During busy periods, access additional specialists immediately from our pre-trained talent pool.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How does the timezone difference affect project timelines?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  The timezone difference is actually an advantage. When your Australian team finishes at 5 PM, our Philippine engineers start their day with fresh energy and clear priorities. This creates a 24-hour workflow that accelerates project completion by 34%. Your project managers brief requirements at end of day, engineers execute overnight, and you have progress updates by morning. Complex projects complete in days rather than weeks.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Can I integrate engineering outsourcing with my existing project management systems?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, our engineering teams integrate seamlessly with your existing systems. We use collaborative platforms for real-time file sharing, progress tracking, and communication. Our engineers can work within your preferred software environment and follow your established processes. We also provide project management oversight to ensure smooth coordination between offshore engineers and your local team.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What's the difference between your service and hiring freelancers directly?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Freelancers are individuals with limited oversight and no quality control systems. Our engineering outsourcing provides managed teams with specialized training, ongoing quality control, and project management oversight. You get consistent availability, professional standards, and accountability. We handle recruitment, training, performance management, and quality assurance – you focus on your projects, not managing individual contractors.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How quickly can I start with engineering outsourcing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Implementation typically takes 2-3 weeks from initial consultation to active project work. This includes requirements analysis, engineer selection and training, technology integration, and quality control setup. We can expedite the process for urgent projects while maintaining our quality standards. Our goal is to have your engineering team productive and delivering results as quickly as possible.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Transform Your Engineering Operations Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ property developers who've eliminated engineering bottlenecks with our proven outsourcing solution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 rounded-lg p-4">
              <CheckCircle className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">68% cost savings guaranteed</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <CheckCircle className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">34% faster project completion</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <CheckCircle className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">Australian compliance assured</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <CheckCircle className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">24/7 productivity advantage</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Book Your Strategy Session
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold">
              <DollarSign className="w-5 h-5 mr-2" />
              View Investment Options
            </Button>
          </div>
        </div>

        {/* Related Services */}
        <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Complete Your Project Delivery Ecosystem
          </h2>
          <p className="text-xl text-gray-700 text-center mb-8">
            Engineering outsourcing works best when integrated with complementary services. Explore our complete range of specialized support solutions:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-lime-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Building2 className="w-6 h-6 text-lime-600 mr-2" />
                  Architectural Support
                </h3>
                <p className="text-gray-700 mb-3">
                  Coordinate engineering with architectural design services.
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
                  Drafting Services
                </h3>
                <p className="text-gray-700 mb-3">
                  Convert engineering calculations into professional drawings.
                </p>
                <a href="#" className="text-lime-600 hover:text-lime-700 font-semibold flex items-center">
                  Learn More →
                </a>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Hammer className="w-6 h-6 text-lime-600 mr-2" />
                  Construction Support
                </h3>
                <p className="text-gray-700 mb-3">
                  Comprehensive construction project management and coordination.
                </p>
                <a href="#" className="text-lime-600 hover:text-lime-700 font-semibold flex items-center">
                  Learn More →
                </a>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Calculator className="w-6 h-6 text-lime-600 mr-2" />
                  Estimating Services
                </h3>
                <p className="text-gray-700 mb-3">
                  Accurate cost estimation and quantity surveying support.
                </p>
                <a href="#" className="text-lime-600 hover:text-lime-700 font-semibold flex items-center">
                  Learn More →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
