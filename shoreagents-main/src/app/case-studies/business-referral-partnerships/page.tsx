"use client";

import { SideNav } from "@/components/layout/SideNav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Target,
  Award,
  TrendingUp,
  Star,
  Users,
  Building2,
  ArrowRight,
  Globe,
  CheckCircle2,
  Lightbulb,
  Zap,
  Mic,
  DollarSign,
  Clock,
  Handshake,
  TrendingDown,
  Video,
  Play,
  Briefcase,
  FileCheck
} from "lucide-react";
import Link from "next/link";

export default function BusinessReferralPartnershipsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              Top Agents Playbook Feature - Ray Wood Partnership
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              12+ Years of Professional Referrals:<br />
              <span className="text-lime-600">Featured on Top Agents Playbook</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Stephen Atcheler's Top Agents Playbook feature represents more than media recognition—it validates a 12+ 
              year referral relationship with respected real estate coach Ray Wood that has consistently delivered client 
              success. When industry leaders feature your methodology, it demonstrates proven results that withstand scrutiny.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/sales" 
                className="inline-flex items-center px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors"
              >
                Schedule Your Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/case-studies" 
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-lime-600 transition-colors"
              >
                View More Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Partnership Stats */}
        <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200 mb-16">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Partnership Excellence</h3>
              <p className="text-gray-700">Validated expertise across three continents</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Clock className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">12+</div>
                <div className="text-gray-900 font-semibold">Years Partnership</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Users className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">500+</div>
                <div className="text-gray-900 font-semibold">Placements</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Globe className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">3</div>
                <div className="text-gray-900 font-semibold">Core Markets</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Award className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">100%</div>
                <div className="text-gray-900 font-semibold">Referral Success</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Overview */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This Top Agents Playbook feature isn't manufactured credibility or promotional content. Ray Wood's Top Agents 
            Playbook showcase highlights systematic business improvement methodologies that have delivered measurable results 
            through 500+ successful placements across Australia, Canada, and the USA.
          </p>
        </div>

        <Separator className="my-12" />

        {/* Top Agents Playbook Feature */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Mic className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Top Agents Playbook Feature</h2>
              <p className="text-lg text-gray-600">Industry recognition that validates proven expertise</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              When respected real estate coach Ray Wood features your methodology on his Top Agents Playbook platform, it 
              demonstrates proven results that withstand industry scrutiny. This isn't a casual interview—it's Ray Wood 
              recognizing Stephen's systematic approach to offshore staffing as fundamentally different from the typical BPO model.
            </p>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Mic className="w-8 h-8 text-lime-400" />
                    <h3 className="text-2xl font-bold">TAP 153: How to tell if you're ready for a Virtual Assistant</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    An in-depth conversation with Stephen Atcheler about virtual assistant readiness indicators and 
                    implementation strategies
                  </p>
                </div>
                <div className="text-center">
                  <a 
                    href="https://www.topagentsplaybook.com/podcast/tap-153-tell-youre-ready-virtual-assistant-interview-stephen-atcheler/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    View Full Episode Page
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-lime-50 border-lime-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn from This Interview</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <DollarSign className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">The $70/Hour Reality</h4>
                      <p className="text-gray-700 text-sm">How administrative tasks give agents a 60% pay cut</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Target className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">5 Dollar-Productive Activities</h4>
                      <p className="text-gray-700 text-sm">The only tasks that directly generate income for agents</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Readiness Indicators</h4>
                      <p className="text-gray-700 text-sm">How to determine if you're prepared for VA implementation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Globe className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Offshore Advantages</h4>
                      <p className="text-gray-700 text-sm">Why Philippines-based VAs deliver superior results</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* The $70/Hour Reality Check */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The $70/Hour Reality Check</h2>
              <p className="text-lg text-gray-600">Understanding the mathematics of productivity</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              There's a fundamental reason why successful real estate coaches like Ray Wood consistently recommend virtual 
              assistants to their clients: they understand the mathematics of productivity that most agents never calculate. 
              When your hourly rate is $70 but you're spending time on $30/hour tasks, you've just given yourself a 60% pay cut.
            </p>

            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <TrendingDown className="w-16 h-16 text-red-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">The 60% Pay Cut Reality</h3>
                </div>
                <div className="space-y-4 bg-white rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold mb-1">Your Actual Hourly Rate: $70</p>
                      <p className="text-gray-700 text-sm">
                        If your annual income is $180,000 and you work 6 days a week, your hourly rate is approximately $70.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      ✗
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold mb-1">Administrative Tasks: $30/hour</p>
                      <p className="text-gray-700 text-sm">
                        When you switch to administrative tasks, you've just given yourself a 60% pay cut—working at 
                        $30/hour instead of your $70 rate.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    This is why coaches like Ray Wood recommend systematic delegation: it's not about convenience, it's 
                    about protecting your income potential.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The 5 Dollar-Productive Activities Framework</h3>
                <p className="text-gray-700 mb-6">
                  Ray Wood has been coaching real estate professionals for over 15 years, helping them understand that 
                  there are really only 5 dollar-productive activities that generate income:
                </p>
                <div className="space-y-3">
                  {[
                    { num: '1', title: 'Open Homes', desc: 'Direct client interaction, immediate feedback, lead generation' },
                    { num: '2', title: 'Prospecting', desc: 'Cold calling, networking, referral development' },
                    { num: '3', title: 'Price Reductions', desc: 'Strategic market positioning, vendor management' },
                    { num: '4', title: 'Listing Presentations', desc: 'Converting prospects to clients, relationship building' },
                    { num: '5', title: 'Contract Negotiation', desc: 'Deal closure, value creation, commission protection' }
                  ].map(item => (
                    <div key={item.num} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                      <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        {item.num}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-700 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-blue-600 rounded">
                  <p className="text-gray-900 font-semibold text-sm">
                    Everything else—listing uploads, contract processing, client follow-up emails, appointment scheduling, 
                    database management—can be systematized and delegated. This isn't about being lazy; it's about 
                    protecting your income potential.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* 12+ Year Professional Partnership */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Handshake className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">12+ Year Professional Partnership Evolution</h2>
              <p className="text-lg text-gray-600">Built on proven results and mutual respect</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <Card className="bg-gradient-to-br from-gray-50 to-white border-lime-200 shadow-lg mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Stephen's Perspective: How It All Started</h3>
                <div className="space-y-4 text-gray-700 italic">
                  <p>
                    "I first met Ray Wood over 12 years ago at a real estate seminar in Australia. Even then, his insights 
                    into agent productivity and business systems impressed me. Ray had this systematic approach to breaking 
                    down what actually made agents successful versus what they thought made them successful."
                  </p>
                  <p>
                    "What struck me wasn't just his coaching philosophy, but how he approached problems. Ray didn't just 
                    tell agents to 'work smarter'—he gave them specific frameworks and processes. When I started developing 
                    ShoreAgents years later, I realized we were both solving the same fundamental problem: how to systematize 
                    success rather than leaving it to chance."
                  </p>
                  <p>
                    "Ray was one of the first industry leaders to understand what we were building. Most people saw 'cheap 
                    overseas labor.' Ray saw systematic business process improvement with geographic arbitrage. That's why 
                    his referrals have been so successful—he understood the methodology from day one."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Parallel Business Evolution</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg p-6 border-l-4 border-lime-600">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-lime-600" />
                      Stephen's Journey
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 2012: Started offshore staffing experiments</li>
                      <li>• Built real estate business to 14 salespeople, 400 rentals</li>
                      <li>• Scaled with team of 5 offshore staff</li>
                      <li>• Moved to Philippines, established ShoreAgents</li>
                      <li>• 500+ successful placements across AUS/NZ/USA</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6 border-l-4 border-green-600">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-green-600" />
                      Ray's Evolution
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Established in Australian real estate coaching</li>
                      <li>• Expanded to Canada market</li>
                      <li>• Launched Top Agents Playbook platform</li>
                      <li>• Targeted US and Australian markets</li>
                      <li>• Thousands of agents coached across 3 continents</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Shared Focus: Systematic approaches to business scaling across Australia, Canada, and USA markets
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              The longevity of their professional relationship demonstrates something crucial: mutual respect built on proven 
              results. Ray Wood doesn't maintain 12+ year relationships with service providers who don't deliver. Stephen 
              doesn't earn ongoing referrals from industry leaders without consistently exceeding expectations.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Cross-Market Expertise */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Cross-Market Expertise</h2>
              <p className="text-lg text-gray-600">Australia, Canada, and USA specialization</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              One of the most valuable aspects of the Stephen-Ray relationship is their shared understanding of cross-border 
              business dynamics. While many service providers claim "international experience," few actually understand the 
              cultural, regulatory, and operational nuances that determine success in different English-speaking markets.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Australia */}
              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">🇦🇺</div>
                    <h3 className="text-xl font-bold text-gray-900">Australia Market</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded p-3">
                      <h4 className="font-bold text-gray-900 mb-1">Business Culture</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Direct communication style</li>
                        <li>• Structured regulatory environment</li>
                        <li>• High labor costs driving adoption</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded p-3">
                      <h4 className="font-bold text-gray-900 mb-1">VA Integration</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Perfect timezone alignment</li>
                        <li>• Strong process documentation</li>
                        <li>• Established offshore relationships</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Canada */}
              <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-red-200">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">🇨🇦</div>
                    <h3 className="text-xl font-bold text-gray-900">Canada Market</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded p-3">
                      <h4 className="font-bold text-gray-900 mb-1">Business Culture</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Polite, relationship-focused</li>
                        <li>• Provincial regulatory variations</li>
                        <li>• Growing offshore acceptance</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded p-3">
                      <h4 className="font-bold text-gray-900 mb-1">VA Integration</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Manageable timezone differences</li>
                        <li>• Cultural sensitivity training</li>
                        <li>• Collaborative implementation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* USA */}
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">🇺🇸</div>
                    <h3 className="text-xl font-bold text-gray-900">USA Market</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded p-3">
                      <h4 className="font-bold text-gray-900 mb-1">Business Culture</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Results-driven, efficiency focused</li>
                        <li>• State-by-state complexity</li>
                        <li>• Established offshore presence</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded p-3">
                      <h4 className="font-bold text-gray-900 mb-1">VA Integration</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Significant timezone challenges</li>
                        <li>• ROI-focused implementation</li>
                        <li>• Scalable process requirements</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-lime-50 border-lime-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Geographic Alignment Matters</h3>
                <p className="text-gray-700 mb-4">
                  When a coach operating across Australia, Canada, and the USA consistently refers clients to an offshore 
                  staffing provider, it validates something crucial: the provider understands the specific cultural and 
                  operational requirements of these markets.
                </p>
                <div className="bg-white border-l-4 border-lime-600 p-4 rounded">
                  <p className="text-gray-900 font-semibold text-sm">
                    Ray Wood's business expansion parallels ShoreAgents' geographic specialization—not by coincidence, but 
                    because both understand that successful international business requires deep market knowledge, not just 
                    service delivery capability.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Proven Referral Results */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Proven Referral Results</h2>
              <p className="text-lg text-gray-600">Consistent client success across all markets</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              The true validation of any professional relationship isn't the initial referral—it's the continued success of 
              those referrals over time. Ray Wood's clients who've implemented ShoreAgents' offshore staffing solutions have 
              consistently achieved measurable improvements in productivity and cost efficiency.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Property Management Success */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <Building2 className="w-10 h-10 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Property Management Success</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-baseline gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>340%</strong> increase in lease renewals processed</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>78%</strong> reduction in administrative costs</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>24/7</strong> tenant communication capability</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>15+</strong> hours weekly recovered for business development</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sales Team Scaling */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <Users className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Sales Team Scaling</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-baseline gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Expansion from <strong>3 to 8</strong> agents supported</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Listing processing time reduced by <strong>60%</strong></span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Database management <strong>fully systematized</strong></span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Commission tracking with <strong>99.9%</strong> accuracy</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* ROI Optimization */}
              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-6">
                  <DollarSign className="w-10 h-10 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">ROI Optimization</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-baseline gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Average 12-month ROI of <strong>340%</strong></span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Implementation within <strong>2-4 weeks</strong></span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Zero</strong> failed implementations</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Continued relationship <strong>expansion</strong></span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-lime-50 border-lime-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Ray's Referrals Consistently Succeed</h3>
                <p className="text-gray-700 mb-6">
                  Ray Wood's clients come to ShoreAgents pre-qualified with the right mindset and realistic expectations. 
                  His coaching has already addressed the fundamental productivity challenges that make virtual assistant 
                  implementation successful.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: FileCheck, title: 'Process Documentation', desc: 'Clients understand the importance of documented procedures' },
                    { icon: Target, title: 'Focus Clarity', desc: 'Already trained on dollar-productive vs administrative activities' },
                    { icon: DollarSign, title: 'ROI Expectations', desc: 'Realistic timeline and outcome expectations established' },
                    { icon: Award, title: 'Higher Success Rates', desc: 'Faster implementation and sustained long-term relationships' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                      <item.icon className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                        <p className="text-gray-700 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Ray Wood Endorsement */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-gray-50 to-white border-lime-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    RW
                  </div>
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                  "Stephen's expertise in offshore staffing has been invaluable to the agents I've referred to him over 
                  the years. His hands-on approach in the Philippines ensures quality results that traditional BPO companies 
                  simply can't match."
                </blockquote>
                <div className="text-lg font-bold text-gray-900">Ray Wood</div>
                <div className="text-gray-600 mb-2">Real Estate Coach & Host</div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mic className="w-4 h-4" />
                  <span>Top Agents Playbook</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>

      {/* Final CTA */}
      <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white mx-4 mb-8">
        <CardContent className="p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Top Agents Playbook Featured Expertise?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join the successful businesses from Ray Wood's referral network who have transformed their operations with our 
            proven methodology. When industry leaders feature your approach, it validates 12+ years of systematic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sales"
              className="inline-flex items-center px-8 py-4 bg-white text-lime-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors"
            >
              Schedule Your Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-lime-600 font-bold text-lg rounded-lg transition-colors"
            >
              <Building2 className="w-5 h-5 mr-2" />
              View More Case Studies
            </Link>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
