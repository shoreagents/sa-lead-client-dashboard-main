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
  Clock,
  DollarSign,
  FileText,
  Settings,
  Shield,
  Rocket,
  ThumbsUp,
  BarChart3,
  Phone,
  Workflow,
  HeartHandshake
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function StreamlineBackOfficePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[{"name":"Case Studies","url":"https://www.shoreagents.com/case-studies"},{"name":"Jason Gard","url":"https://www.shoreagents.com/streamline-back-office"}]} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              Jason Gard Real Estate Client Success - Australia
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              From Overwhelmed to Optimized:<br />
              <span className="text-lime-600">Reclaiming High-Value Time Through Strategic Delegation</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              When Jason needed to focus on high-dollar activities instead of back-office administration, one specialist 
              transformed everything. Years later, perfect performance reviews and system automation prove that smart 
              delegation beats working harder. This is how to streamline without sacrificing quality.
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
        
        {/* Client Quote */}
        <Card className="bg-gradient-to-br from-gray-50 to-white border-lime-200 shadow-lg mb-16">
          <CardContent className="p-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  JG
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                "The support from Stephen and the team has been absolutely sensational. Outsourcing really allowed me 
                to streamline what I do, particularly with my back office out of things which takes a lot of time off 
                me, and allows me to focus on the role that I need."
              </blockquote>
              <div className="text-lg font-bold text-gray-900">Jason Gard</div>
              <div className="text-gray-600 mb-2">Jason Gard Real Estate</div>
              <div className="flex items-center gap-2 text-gray-600">
                <Globe className="w-4 h-4" />
                <span>Australia</span>
                <span className="mx-2">•</span>
                <span>Hired One Agent</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Overview */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Picture this: You're drowning in administrative tasks that pull you away from what generates real income. 
            You hire one specialist. Three years later, they're earning perfect scores, handling system automation, 
            and you're considering hybrid work arrangements because the trust is absolute. That's the Jason Gard client 
            success transformation.
          </p>
        </div>

        <Separator className="my-12" />

        {/* The Back Office Reality Check */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <FileText className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Back Office Reality Check</h2>
              <p className="text-lg text-gray-600">The administrative burden that grows with success</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Jason faced what every successful real estate professional eventually confronts: the administrative burden 
              that grows with success. As Jason Gard Real Estate expanded, the back-office demands consumed more time 
              that should have been spent on high-value client activities and business development.
            </p>

            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Real Estate Business Owner's Dilemma</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <FileText className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Administrative Overload</h4>
                      <p className="text-gray-700 text-sm">Contract processing, listing management, client communications consuming revenue-generating time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <DollarSign className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Opportunity Cost</h4>
                      <p className="text-gray-700 text-sm">Every hour on paperwork is an hour not spent prospecting, listing, or serving high-value clients</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Growth Limitations</h4>
                      <p className="text-gray-700 text-sm">Success creating more work instead of more freedom and scalable business systems</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-red-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    "Back office tasks that take a lot of time off me" – The productivity trap that successful agents face
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              Jason's situation reflects a common challenge in Australian real estate: as individual performance increases, 
              administrative demands multiply exponentially. What starts as manageable paperwork becomes a full-time job 
              that distances successful agents from the client-facing activities that built their reputation.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* The One Agent Strategy */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Target className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The One Agent Strategy</h2>
              <p className="text-lg text-gray-600">Focused implementation that transforms operations</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Rather than building a large team immediately, Jason took a measured approach that would prove transformational: 
              hire one specialist to handle the core administrative functions that were consuming his highest-value time. 
              This wasn't about finding the cheapest solution—it was about finding the right professional who could grow 
              with the business.
            </p>
            
            <p className="mb-8">
              The hiring decision followed a systematic approach: identify the highest-impact role first, implement it 
              successfully, then scale based on proven results. Jason's choice of a Sales Admin specialist would become 
              the foundation for years of business optimization.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why the One Agent Strategy Works</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Focused Implementation</h4>
                      <p className="text-gray-700 text-sm">Master one role completely before adding complexity</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Immediate Impact</h4>
                      <p className="text-gray-700 text-sm">Quick relief from highest-burden administrative tasks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Cost Efficiency</h4>
                      <p className="text-gray-700 text-sm">Fraction of local administrative hire costs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Scalable Foundation</h4>
                      <p className="text-gray-700 text-sm">Proven system for future team expansion</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Result: Perfect foundation for systematic business transformation without overwhelming complexity
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              Jason's Sales Admin specialist became responsible for the core functions that were consuming his time: 
              listing management, contract processing, client communication coordination, and system administration. 
              This wasn't just task delegation—it was strategic role design that would evolve and expand as trust and 
              capability were proven.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Sustained Excellence Over Time */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Star className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Sustained Excellence Over Time</h2>
              <p className="text-lg text-gray-600">Consistent performance across multiple years</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              The true measure of any offshore staffing success isn't the first few months—it's the sustained performance 
              over multiple years. Jason's specialist has consistently earned exceptional ratings across all performance 
              areas, demonstrating the reliability that transforms business operations from chaotic to systematic.
            </p>
            
            <p className="mb-8">
              From the first annual evaluation through multiple years of partnership, performance reviews consistently 
              show excellent ratings across all categories: Quality, Communication, Reliability, Teamwork, and Time 
              Management. When Jason notes "I am happy with her performance" and recommends salary increases, it validates 
              the systematic approach to professional offshore development.
            </p>

            <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Consistent Performance Excellence</h3>
                
                <div className="space-y-8">
                  {/* Early Partnership */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-6 h-6 text-lime-600" />
                      <h4 className="text-xl font-bold text-gray-900">Early Partnership: Foundation Building</h4>
                    </div>
                    <div className="space-y-2 text-gray-700 mb-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                        <span>Implementing ClickUp project management</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                        <span>Automation for new sales systems</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                        <span>Pipeline Pro and Freshcaller integration</span>
                      </div>
                    </div>
                    <div className="bg-lime-50 p-4 rounded border-l-4 border-lime-600">
                      <p className="text-sm text-gray-900"><strong>Performance Rating:</strong> Excellent across all areas</p>
                      <p className="text-sm text-gray-900"><strong>Recommendation:</strong> Continue Employment, Salary Increase</p>
                    </div>
                  </div>

                  {/* Ongoing Partnership */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-6 h-6 text-green-600" />
                      <h4 className="text-xl font-bold text-gray-900">Ongoing Partnership: Mastery & Growth</h4>
                    </div>
                    <div className="space-y-2 text-gray-700 mb-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Marketing/systems project leadership</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Overseeing ClickUp contractor management</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>New phone system implementation</span>
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded border-l-4 border-green-600">
                      <p className="text-sm text-gray-900"><strong>Performance Rating:</strong> Outstanding with "Excellent" communication</p>
                      <p className="text-sm text-gray-900"><strong>Recommendation:</strong> Salary Increase</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-lime-600">
                    <p className="text-gray-900 font-semibold mb-1">Early Partnership:</p>
                    <p className="text-gray-700 text-sm italic">"None, I am happy with her performance"</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-600">
                    <p className="text-gray-900 font-semibold mb-1">Ongoing Partnership:</p>
                    <p className="text-gray-700 text-sm italic">"Very efficient" across all performance areas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* The Trust Evolution */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Shield className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">From Supervision to Autonomy</h2>
              <p className="text-lg text-gray-600">Building trust through proven performance</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              After implementing the initial setup, Jason was already considering hybrid work arrangements: "I would like 
              to see her be able to work 2 or 3 days at home and 2 or 3 days in the office. I have no issues with her 
              working from home and trust her with her abilities to get the work done."
            </p>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Trust Indicator</h3>
                <p className="text-gray-700 mb-4">
                  Offering remote work flexibility within the established partnership based on proven performance demonstrates 
                  the reliability and professional integration that separates strategic offshore partnerships from typical 
                  outsourcing arrangements.
                </p>
                <div className="bg-white border-l-4 border-lime-600 p-4 rounded">
                  <p className="text-gray-900 font-semibold">
                    This level of trust—offering flexible work arrangements to an offshore team member within the first 
                    year—validates the systematic approach to professional relationship building
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              This sustained excellence over multiple years validates something crucial about professional offshore 
              relationships: when implemented correctly with the right partner, they become increasingly valuable over time. 
              Jason's specialist evolved from handling basic administrative tasks to managing complex system implementations 
              and contractor oversight—growth that benefits both the business and the professional's career development.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Beyond Administration to Innovation */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Settings className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Beyond Administration to Innovation</h2>
              <p className="text-lg text-gray-600">Technology implementation and business transformation</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              What started as basic administrative support evolved into something far more valuable: a technology 
              implementation partner who drives business efficiency improvements. Jason's specialist didn't just handle 
              existing processes—they became instrumental in implementing new systems that transformed how the business 
              operates.
            </p>

            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">System Implementation Leadership</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-lime-600">
                    <div className="flex items-start gap-3 mb-3">
                      <Workflow className="w-8 h-8 text-lime-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Process Automation</h4>
                        <div className="space-y-2 text-gray-700">
                          <p className="text-sm"><strong>ClickUp Implementation:</strong> Complete project management system rollout with workflow automation and task tracking integration</p>
                          <p className="text-sm"><strong>Sales System Automation:</strong> Running automation for new sales pipeline processes and client management workflows</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-green-600">
                    <div className="flex items-start gap-3 mb-3">
                      <Phone className="w-8 h-8 text-green-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Communication Systems</h4>
                        <div className="space-y-2 text-gray-700">
                          <p className="text-sm"><strong>Freshcaller Integration:</strong> Advanced phone system implementation with call routing and client communication optimization</p>
                          <p className="text-sm"><strong>Pipeline Pro Setup:</strong> CRM system configuration and client management process optimization</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-600">
                    <div className="flex items-start gap-3 mb-3">
                      <Users className="w-8 h-8 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Team Coordination</h4>
                        <div className="space-y-2 text-gray-700">
                          <p className="text-sm"><strong>Contractor Management:</strong> Overseeing ClickUp contractors and coordinating system changes across multiple teams</p>
                          <p className="text-sm"><strong>Zoom Collaboration:</strong> Active participation in meetings and strategic planning sessions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-lime-50 border-lime-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">From Support to Strategic Implementation Partner</h3>
                <p className="text-gray-700 mb-6">
                  Jason's specialist evolved from handling basic administrative tasks to leading complex technology 
                  implementations. This progression represents the true value of long-term offshore partnerships: 
                  professional growth that directly benefits business capabilities.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-5 h-5 text-lime-600" />
                      <h4 className="font-bold text-gray-900">Project Leadership</h4>
                    </div>
                    <p className="text-gray-700 text-sm">Leading implementation of new marketing and system projects</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Settings className="w-5 h-5 text-lime-600" />
                      <h4 className="font-bold text-gray-900">System Optimization</h4>
                    </div>
                    <p className="text-gray-700 text-sm">Continuously improving business processes and automation</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-lime-600" />
                      <h4 className="font-bold text-gray-900">Team Integration</h4>
                    </div>
                    <p className="text-gray-700 text-sm">Seamless collaboration with both local and external teams</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Evolution: From task completion to strategic business capability enhancement
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Jason's Success Formula */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Lightbulb className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Copy Jason's Exact Success Formula</h2>
              <p className="text-lg text-gray-600">The systematic roadmap to streamlined operations</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Jason's approach wasn't complicated—it was systematic. Here's exactly how to replicate his transformation 
              from overwhelmed business owner to focused professional with trusted offshore support.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Jason's Proven Implementation Roadmap</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-lime-600" />
                      Step 1: The Honest Time Audit
                    </h4>
                    <p className="text-gray-700 text-sm mb-2"><strong>Jason's Insight:</strong> "Back office out of things which takes a lot of time off me"</p>
                    <p className="text-gray-700 text-sm">
                      Track exactly how much time you spend on administrative tasks versus revenue-generating activities. 
                      Write down every administrative task for one week—you'll be shocked at the results.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Target className="w-5 h-5 text-lime-600" />
                      Step 2: The Strategic One-Agent Start
                    </h4>
                    <p className="text-gray-700 text-sm mb-2"><strong>Jason's Approach:</strong> Hired ONE Sales Admin specialist, not a team</p>
                    <p className="text-gray-700 text-sm">
                      Don't try to outsource everything at once. Choose your highest-time-consumption role first, master 
                      it completely, then expand. This focused approach lets you develop processes properly.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-lime-600" />
                      Step 3: Trust Through Performance, Not Promises
                    </h4>
                    <p className="text-gray-700 text-sm mb-2"><strong>Jason's Evolution:</strong> From supervision to offering remote work flexibility</p>
                    <p className="text-gray-700 text-sm">
                      Jason didn't start with complete trust—he built it through consistent performance. Set clear 
                      expectations, measure performance consistently, and let trust develop naturally.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-lime-600" />
                      Step 4: Expand Responsibilities as Trust Grows
                    </h4>
                    <p className="text-gray-700 text-sm mb-2"><strong>Jason's Strategy:</strong> From basic admin to system implementation leadership</p>
                    <p className="text-gray-700 text-sm">
                      As they prove their capabilities, give them opportunities to contribute to business improvement. 
                      This creates mutual value and career development that benefits everyone.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Where Most People Fail vs. What Jason Did Right</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-600">
                      <p className="text-gray-900 font-semibold mb-2">❌ Common Mistake:</p>
                      <p className="text-gray-700 text-sm">Hiring multiple people immediately and trying to manage everything at once</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-600">
                      <p className="text-gray-900 font-semibold mb-2">❌ Common Mistake:</p>
                      <p className="text-gray-700 text-sm">Expecting immediate trust and perfect results without developing processes</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-lime-600">
                      <p className="text-gray-900 font-semibold mb-2">✅ Jason's Success:</p>
                      <p className="text-gray-700 text-sm">One role, perfected completely, then expanded responsibilities based on proven performance</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-lime-600">
                      <p className="text-gray-900 font-semibold mb-2">✅ Jason's Success:</p>
                      <p className="text-gray-700 text-sm">Built trust through consistent performance tracking and clear communication</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-gray-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Next 30 Days: Implementation Checklist</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Week 1-2: Assessment</h4>
                    <div className="space-y-1 ml-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-lime-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Track your time for one full week</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-lime-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">List all administrative tasks consuming your schedule</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-lime-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Calculate your hourly rate vs. admin time cost</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Week 3: Strategy</h4>
                    <div className="space-y-1 ml-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-lime-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Choose your highest-impact role for outsourcing</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-lime-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Document current processes for that role</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-lime-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Research proven offshore staffing providers</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Week 4: Implementation</h4>
                    <div className="space-y-1 ml-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-lime-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Schedule consultation with ShoreAgents</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-lime-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Prepare detailed role requirements</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-lime-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Plan performance measurement systems</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-lime-50 border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Jason's Secret: Start small, measure everything, build trust through results, then scale systematically
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>

      {/* Final CTA */}
      <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white mx-4 mb-8">
        <CardContent className="p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Streamline Your Back Office?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Start with one specialist like Jason did, build trust through performance, and discover why he says the 
            support has been "absolutely sensational" in helping him focus on what matters most.
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
