"use client";

import { SideNav } from "@/components/layout/SideNav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  TrendingUp, 
  Users, 
  Target, 
  Building2, 
  Award, 
  Globe, 
  Clock,
  Phone,
  Star,
  Zap,
  Home,
  FileText,
  Video,
  Handshake,
  DollarSign,
  ArrowRight,
  Code
} from "lucide-react";
import Link from "next/link";

export default function ExceptionalTeamPerformancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-red-600 text-white mb-4 text-sm px-3 py-1">
              🚨 AUSTRALIAN REAL ESTATE BREAKTHROUGH: From Team Hire to "Legends" Status
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Century 21 Client Success:<br />
              <span className="text-lime-600">The Staff Who Became &quot;Legends&quot; Instead of Employees</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              When Century 21 Rich River Real Estate hired a specialized team for property management and multimedia operations, 
              they discovered professionals who earned recognition as &quot;legends&quot; within their organization. This Century 21 
              client success story reveals systematic Australian real estate outsourcing excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/pricing" 
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
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-lime-50 to-green-50 border-l-4 border-lime-500">
            <CardContent className="p-8">
              <blockquote className="text-xl text-gray-800 italic mb-6 leading-relaxed">
                &quot;We have 2 staff with ShoreAgents one in Property Management and one in multimedia. We are constantly 
                blown away by the capabilities of our team in the Philippines and we will be hiring more staff with ShoreAgents 
                in the future! The whole team there are legends.&quot;
              </blockquote>
              <div className="border-t border-lime-200 pt-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Andrew Lochhead</div>
                    <div className="text-gray-700">Century 21 Rich River Real Estate</div>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      <span>Australia</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>2 Team Members</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Intro */}
        <div className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            How a leading Australian real estate agency achieved exceptional team performance through systematic property 
            management outsourcing. Picture this: You hire offshore professionals and they integrate so seamlessly that management 
            declares them &quot;legends&quot; who are constantly exceeding expectations. That&apos;s exactly what happened at 
            Century 21 Rich River Real Estate.
          </p>
        </div>

        <Separator className="my-12" />

        {/* Strategic Team Implementation */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Award className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Strategic Team Implementation</h2>
              <p className="text-lg text-gray-600">Complete team approach delivering exceptional results</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            When Andrew Lochhead at Century 21 Rich River Real Estate made the strategic decision to hire a specialized offshore 
            team through ShoreAgents, he needed professionals who could handle the complex demands of Australian property management 
            and multimedia operations. The decision to hire a complete team rather than individual contractors proved transformational.
          </p>

          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none text-gray-700">
                <div className="bg-lime-50 rounded-lg p-6 mb-6 shadow-sm">
                  <blockquote className="text-xl text-gray-800 italic border-l-4 border-lime-600 pl-4 mb-4">
                    &quot;We are constantly blown away by the capabilities of our team in the Philippines and we will be hiring more staff with ShoreAgents in the future! The whole team there are legends.&quot;
                  </blockquote>
                  <p className="text-gray-700">
                    This isn&apos;t typical client feedback—it&apos;s validation of systematic excellence through our proven real estate virtual assistant methodology.
                  </p>
                </div>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Team Structure</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Home className="w-10 h-10 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900 text-lg">Property Management Specialist</h4>
                      </div>
                      <p className="text-gray-700">
                        Comprehensive property management support including compliance, documentation, and administrative coordination
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Video className="w-10 h-10 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900 text-lg">Multimedia Specialist</h4>
                      </div>
                      <p className="text-gray-700">
                        Creative multimedia support for property marketing, visual content, and digital asset management
                      </p>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-6 font-semibold">
                    Strategic Result: Specialized team coverage delivering exceptional performance across all business functions
                  </p>
                </div>

                <p className="mt-6">
                  The strategic decision to hire a complete team created synergies that enhanced overall performance. Property management 
                  and multimedia operations require coordination, and having specialists who understand both their individual roles and 
                  collaborative requirements delivered exceptional results for Century 21 Rich River Real Estate.
                </p>
                <p className="mt-4">
                  This Century 21 client success story demonstrates how systematic team-based approaches to Australian real estate 
                  outsourcing create sustainable competitive advantages. When offshore teams integrate seamlessly with local operations 
                  while maintaining exceptional performance standards, they transform from service providers to valued team members earning 
                  recognition as business &quot;legends&quot; through our specialized real estate outsourcing solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Sustained Professional Excellence */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Star className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Sustained Professional Excellence</h2>
              <p className="text-lg text-gray-600">Consistent performance earning "legends" recognition</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The true validation of any offshore staffing partnership isn&apos;t the initial enthusiasm—it&apos;s sustained excellence 
            over time. Century 21 Rich River Real Estate&apos;s ongoing satisfaction demonstrates something remarkable: consistent 
            professional performance that integrates seamlessly with their Australian operations year after year.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Management consistently reports exceptional satisfaction with team performance, professional communication standards, and 
            the ability to handle complex Australian real estate requirements. This isn&apos;t short-term success—it&apos;s systematic 
            excellence that builds management confidence and creates opportunities for strategic expansion.
          </p>

          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none text-gray-700">
                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Excellence: Key Performance Areas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <FileText className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Quality Standards</h4>
                        <p className="text-gray-700 text-sm">Consistent high-quality work delivery with meticulous attention to detail and procedure adherence</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Reliability Excellence</h4>
                        <p className="text-gray-700 text-sm">Dependable performance with excellent attendance and professional time management</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Communication Skills</h4>
                        <p className="text-gray-700 text-sm">Clear, professional communication across all channels with Australian business standards</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Team Integration</h4>
                        <p className="text-gray-700 text-sm">Seamless collaboration and active contribution to team meetings and projects</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <TrendingUp className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Continuous Improvement</h4>
                        <p className="text-gray-700 text-sm">Proactive approach to process enhancement and quality optimization</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Industry Knowledge</h4>
                        <p className="text-gray-700 text-sm">Deep understanding of Australian real estate operations and compliance requirements</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-lg text-gray-800 italic mb-2">
                      &quot;We are constantly blown away by the capabilities of our team in the Philippines&quot;
                    </p>
                    <p className="text-gray-700 font-semibold">Management Assessment: Exceptional performance across all evaluation criteria</p>
                  </div>
                </div>

                <p className="mt-6">
                  What makes this professional excellence particularly compelling is management&apos;s declaration that the team members 
                  are &quot;legends&quot; who consistently exceed expectations. This isn&apos;t honeymoon period enthusiasm—it&apos;s 
                  sustained professional excellence that validates systematic approaches to Australian real estate outsourcing.
                </p>

                <p className="mt-4">
                  This level of professional recognition demonstrates that when offshore teams possess deep industry knowledge combined 
                  with systematic business process expertise, they create strategic value that transforms outsourcing from cost reduction 
                  to competitive advantage through our comprehensive property management virtual assistant solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Australian Real Estate Industry Expertise */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Home className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Australian Real Estate Industry Expertise</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Century 21 Rich River Real Estate&apos;s success story demonstrates something crucial about effective offshore staffing: generic administrative support isn&apos;t sufficient for Australian real estate operations. The team members earning recognition as &quot;legends&quot; possess deep understanding of Australian real estate industry requirements, from property management compliance to multimedia marketing coordination.
                </p>
                <p className="mb-6">
                  This dual competency—administrative excellence combined with industry expertise—creates the systematic advantages that transform offshore staff from task-based workers to strategic business assets. When professionals understand both the operational requirements and the industry context, they deliver the proactive value that earns management recognition and confidence.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Australian Real Estate Industry Competencies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <FileText className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Property Management Compliance</h4>
                        <p className="text-gray-700 text-sm">Deep knowledge of Australian property management regulations, compliance requirements, and documentation standards</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FileText className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Administrative Excellence</h4>
                        <p className="text-gray-700 text-sm">Systematic document management, compliance tracking, and administrative process optimization</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Video className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Marketing Support</h4>
                        <p className="text-gray-700 text-sm">Professional multimedia services tailored to Australian real estate marketing requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Handshake className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Professional Communication</h4>
                        <p className="text-gray-700 text-sm">Communication standards that align with Australian business culture and client expectations</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-6 font-semibold">
                    Strategic Advantage: Industry expertise combined with systematic administrative excellence
                  </p>
                </div>

                <p className="mt-6">
                  The Century 21 client success story validates a fundamental principle: effective offshore staffing requires more than cost savings. When team members understand both the administrative requirements and the industry context, they become strategic assets rather than simple task executors. This depth of understanding enables the proactive problem-solving that earns &quot;legends&quot; recognition.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Australian Real Estate Market Advantages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Perfect Time Zone Alignment</h4>
                        <p className="text-gray-700 text-sm">Philippines business hours align perfectly with Australian operations, enabling real-time collaboration</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Cultural Compatibility</h4>
                        <p className="text-gray-700 text-sm">Strong English proficiency and professional communication standards that match Australian business expectations</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Industry Understanding</h4>
                        <p className="text-gray-700 text-sm">Specialized training in Australian property management regulations and compliance requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <DollarSign className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Cost Efficiency</h4>
                        <p className="text-gray-700 text-sm">Significant cost savings compared to local hiring while maintaining professional service standards</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-6 text-sm">
                    This combination of industry expertise, cultural compatibility, and operational efficiency creates the foundation for sustained success like Century 21 Rich River Real Estate has achieved.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Strategic Expansion */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Zap className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Strategic Expansion and Future Growth</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The most compelling validation of any offshore staffing partnership is the client&apos;s decision to expand. Century 21 Rich River Real Estate&apos;s declaration that &quot;we will be hiring more staff with ShoreAgents in the future&quot; represents strategic confidence built on proven results. When Australian real estate companies plan expansion based on existing performance, it validates systematic excellence.
                </p>
                <p className="mb-6">
                  This expansion mindset demonstrates the transformative potential of strategic offshore staffing. Instead of viewing the team as cost-saving measures, Century 21 Rich River Real Estate recognizes them as growth enablers. The exceptional performance and &quot;legends&quot; status create confidence to invest in additional capabilities rather than just maintaining existing operations.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Strategic Growth Opportunities: Beyond Current Success</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <TrendingUp className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Operational Scaling</h4>
                        <p className="text-gray-700 text-sm">Additional property management specialists to handle increased portfolio size and transaction volume</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Video className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Creative Expansion</h4>
                        <p className="text-gray-700 text-sm">Enhanced multimedia capabilities for advanced property marketing and digital asset creation</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Building2 className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Department Specialization</h4>
                        <p className="text-gray-700 text-sm">Dedicated specialists for sales support, compliance management, and client communication</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Code className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Technology Integration</h4>
                        <p className="text-gray-700 text-sm">Advanced digital tools and process automation for improved efficiency and service delivery</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-6 font-semibold">
                    Strategic Foundation: Proven success creating confidence for systematic business expansion
                  </p>
                </div>

                <p className="mt-6">
                  The Century 21 client success story demonstrates how systematic offshore staffing creates compound advantages. Initial success with property management and multimedia support builds confidence for expanding into additional operational areas. Exceptional performance enables strategic growth planning rather than reactive problem-solving.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm mt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">The Strategic Success Model: From Foundation to Unlimited Growth</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2">Phase 1: Strategic Team Implementation</h4>
                        <p className="text-gray-700 text-sm">Initial hiring of specialized professionals for core business functions</p>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-lime-600 mx-auto my-2" />
                    <div className="flex items-start">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2">Phase 2: Performance Excellence</h4>
                        <p className="text-gray-700 text-sm">Exceptional performance building management confidence and recognition</p>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-lime-600 mx-auto my-2" />
                    <div className="flex items-start">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2">Phase 3: Strategic Expansion</h4>
                        <p className="text-gray-700 text-sm">Planned growth based on proven success and identified opportunities</p>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-lime-600 mx-auto my-2" />
                    <div className="flex items-start">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2">Phase 4: Competitive Advantage</h4>
                        <p className="text-gray-700 text-sm">Systematic scaling creating sustainable business advantages</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-6 font-semibold">
                    This strategic success model demonstrates why Century 21 Rich River Real Estate represents more than a client success story—it&apos;s a blueprint for systematic business transformation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* What Legends Status Means */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">What &quot;Legends&quot; Status Really Means for Your Business</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  When Andrew&apos;s team declares their offshore staff &quot;legends&quot; who are &quot;constantly blown away by capabilities,&quot; that&apos;s not client satisfaction language—that&apos;s workplace respect. After working with hundreds of Australian agencies, I know that earning recognition like this requires more than completing tasks. It requires genuine professional contribution.
                </p>
                <p className="mb-4">
                  Century 21 Rich River&apos;s decision to hire more staff in the future tells me everything about their confidence level. They&apos;re not just satisfied with cost savings—they&apos;ve discovered strategic capability enhancement. When established brands make expansion commitments, it validates that our approach delivers real business value, not just operational relief.
                </p>
                <p className="mb-6">
                  What I find most compelling about their experience is the combination of property management excellence and multimedia capability in one team structure. That coordination creates synergies you can&apos;t get from individual contractors or generic administrators. It&apos;s systematic business enhancement that compounds over time.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Century 21&apos;s Team Approach Delivers &quot;Legends&quot; Performance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Building2 className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Strategic Team Structure</h4>
                        <p className="text-gray-700 text-sm">Property management + multimedia specialists create coordination that individual contractors can&apos;t match</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Australian Market Focus</h4>
                        <p className="text-gray-700 text-sm">Deep understanding of Australian real estate requirements, not generic training</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Professional Standards</h4>
                        <p className="text-gray-700 text-sm">Office-based professionals with enterprise infrastructure, not home-based freelancers</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <TrendingUp className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Growth Enablement</h4>
                        <p className="text-gray-700 text-sm">Performance so impressive it creates confidence for strategic expansion planning</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold">
                      Strategic Advantage: When team members earn &quot;legends&quot; recognition, they become competitive assets
                    </p>
                  </div>
                  <p className="text-center text-gray-700 mt-4 text-sm">
                    The perfect timezone alignment, cultural compatibility, and professional infrastructure that impressed Century 21 Rich River represents exactly what smart Australian real estate companies should expect from systematic offshore partnerships.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA Section */}
        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Ready to build your own team of &quot;legends&quot; who exceed expectations consistently?</h2>
          <p className="text-xl mb-8 opacity-90">
            Andrew&apos;s success model: strategic team structure, professional standards, systematic integration. Available for 
            any Australian real estate business ready to invest in excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center px-8 py-4 bg-white text-lime-600 hover:bg-gray-100 font-bold text-lg rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule Your Consultation
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-lime-600 font-bold text-lg rounded-lg transition-colors"
            >
              <Building2 className="w-5 h-5 mr-2" />
              View More Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
