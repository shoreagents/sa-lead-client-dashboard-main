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
  Phone,
  MessageSquare,
  ClipboardList,
  Camera,
  Home,
  Zap,
  RefreshCw,
  Video,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function CustomerServiceScalingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-red-600 text-white mb-4 text-sm px-3 py-1">
              🚨 REVEALED: BoxBrownie Client Success Framework
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              BoxBrownie Client Success:<br />
              <span className="text-lime-600">8x Customer Service Growth Through Systematic Scaling</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              When a global PropTech leader serving 170,000+ customers across 117 countries relies on your customer service 
              infrastructure for their core operations, it validates systematic excellence. This BoxBrownie client success 
              story reveals how ShoreAgents enabled massive scaling from 2 to 16 customer service representatives supporting 
              a real estate photo editing giant.
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
                &quot;The whole outsourcing process at ShoreAgents has been amazing—starting from recruitment to processing, 
                onboarding, HR, and everything in between. We started with two team members a year and a half ago and we now 
                have a team of 16.&quot;
              </blockquote>
              <div className="border-t border-lime-200 pt-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Tasha Poole</div>
                    <div className="text-gray-700">Customer Service Manager, BoxBrownie</div>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      <span>Australia</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>2 → 16 Team Members</span>
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
            How Australia&apos;s youngest university graduate built a global PropTech empire with systematic customer service 
            scaling through ShoreAgents. This comprehensive BoxBrownie client success analysis demonstrates how systematic 
            customer service scaling enabled a PropTech startup to grow from local Australian business to serving 170,000+ 
            customers globally across 117 countries through professional offshore staffing solutions.
          </p>
        </div>

        <Separator className="my-12" />

        {/* Global PropTech Leadership Foundation */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Award className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Global PropTech Leadership Foundation</h2>
              <p className="text-lg text-gray-600">From Australia's youngest university graduate to global PropTech empire</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            When Mel Myers became Australia&apos;s youngest university student at age 12, few could have predicted he would 
            co-found a global PropTech empire that would revolutionize real estate photo editing worldwide. This BoxBrownie 
            client success story demonstrates how visionary leadership combined with systematic customer service infrastructure 
            creates industry-transforming businesses.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            BoxBrownie&apos;s evolution from a manual photo editing service to serving over 170,000 customers across 117 
            countries required scalable customer service infrastructure that could handle inbound calls, outbound communications, 
            live chat management, and complex order processing. This BoxBrownie client success partnership with ShoreAgents 
            enabled the systematic scaling that transformed a startup into a global leader.
          </p>

          <Card className="bg-lime-50 border-lime-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">BoxBrownie Global Authority Stats</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-lime-600 mb-2">170K+</div>
                  <div className="font-semibold text-gray-900">Global Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-lime-600 mb-2">117</div>
                  <div className="font-semibold text-gray-900">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-lime-600 mb-2">8x</div>
                  <div className="font-semibold text-gray-900">Service Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-lime-600 mb-2">24/7</div>
                  <div className="font-semibold text-gray-900">Support</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-lime-600">
                <p className="text-gray-800 leading-relaxed">
                  This BoxBrownie client success partnership demonstrates how systematic approach to customer service 
                  infrastructure enables PropTech companies to scale globally while maintaining the quality and 
                  responsiveness that customers expect in today's competitive real estate photo editing market.
                </p>
              </div>
            </CardContent>
          </Card>

          <p className="mt-8 text-lg text-gray-700 leading-relaxed">
            When a company founded by Australia&apos;s youngest university graduate chooses to partner with ShoreAgents for 
            their customer service infrastructure, it validates the effectiveness of systematic approaches to offshore 
            staffing that scale with business growth through our comprehensive outsourcing solutions.
          </p>
        </section>

        <Separator className="my-12" />

        {/* Systematic Customer Service Infrastructure */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Systematic Customer Service Infrastructure</h2>
              <p className="text-lg text-gray-600">From 2 to 16 team members in 18 months</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The BoxBrownie client success methodology required sophisticated customer service infrastructure to support a 
            global real estate photo editing platform that processes thousands of orders daily across multiple time zones. 
            From inbound phone calls to outbound customer follow-ups, live chat management to complex order processing, 
            every aspect of customer interaction needed systematic optimization.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            When BoxBrownie started with ShoreAgents eighteen months ago, they had a small customer service team handling 
            basic inquiries. Today, their dedicated team of 16 ShoreAgents customer service representatives manages 
            comprehensive customer support operations that span virtual staging inquiries, photo editing specifications, 
            floor plan requirements, and complex project coordination.
          </p>

          <Card className="bg-lime-50 border-lime-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Service Operations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Phone className="w-8 h-8 text-lime-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Inbound Phone Support</h4>
                  <p className="text-gray-700 text-sm">Professional handling of customer inquiries, technical support, and order assistance</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <MessageSquare className="w-8 h-8 text-lime-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Outbound Communications</h4>
                  <p className="text-gray-700 text-sm">Proactive customer follow-up, order status updates, and satisfaction surveys</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <MessageSquare className="w-8 h-8 text-lime-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Live Chat Management</h4>
                  <p className="text-gray-700 text-sm">Real-time customer support through integrated chat systems and instant assistance</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <ClipboardList className="w-8 h-8 text-lime-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Order Processing</h4>
                  <p className="text-gray-700 text-sm">Complex order management, specification coordination, and delivery tracking</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-lime-600 mt-6">
                <p className="text-gray-800 font-semibold">
                  Achievement: BoxBrownie client success demonstrates 8x customer service scaling through systematic infrastructure development
                </p>
              </div>
            </CardContent>
          </Card>

          <p className="mt-8 text-lg text-gray-700 leading-relaxed">
            This systematic BoxBrownie client success scaling validates our approach to customer service infrastructure 
            development through comprehensive solutions that adapt to rapid business growth and global expansion requirements 
            across multiple markets and time zones.
          </p>
        </section>

        <Separator className="my-12" />

        {/* Video Testimonial */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Video className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Tasha Poole Customer Service Manager Testimonial</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  Tasha Poole, Customer Service Manager at BoxBrownie, provides authentic validation of the systematic 
                  customer service infrastructure that enabled their global expansion. The BoxBrownie client success 
                  testimonial demonstrates real-world impact of professional offshore staffing solutions that scale with business growth.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Success Factors from BoxBrownie Client Success Implementation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <RefreshCw className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Complete Process Management</h4>
                        <p className="text-gray-700 text-sm">End-to-end recruitment, onboarding, and HR management</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <TrendingUp className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Systematic Scaling</h4>
                        <p className="text-gray-700 text-sm">Growth from 2 to 16 team members in 18 months</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Quality Performance</h4>
                        <p className="text-gray-700 text-sm">Exceptional team performance supporting global operations</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Award className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Comprehensive Support</h4>
                        <p className="text-gray-700 text-sm">Full-service management including processing and HR</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-6">
                  This BoxBrownie client success video testimonial validates the effectiveness of our systematic approach 
                  to customer service infrastructure development and demonstrates why global PropTech companies choose 
                  ShoreAgents for scalable offshore staffing solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* PropTech Industry Leadership Requirements */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Camera className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">PropTech Industry Leadership Requirements</h2>
              <p className="text-lg text-gray-600">Specialized knowledge for complex service portfolios</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The BoxBrownie client success case study demonstrates the sophisticated customer service requirements of leading 
            PropTech companies that serve global real estate markets. From handling complex virtual staging inquiries to 
            managing floor plan specifications and coordinating CGI rendering projects, customer service representatives need 
            specialized training and industry knowledge.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            BoxBrownie&apos;s position as a world leader in visual property marketing—serving everyone from individual real 
            estate agents to major international brokerages—requires customer service infrastructure that understands real 
            estate photography, virtual staging technologies, and property marketing workflows. The BoxBrownie client success 
            methodology demonstrates how specialized industry knowledge combined with systematic training creates exceptional 
            customer experiences.
          </p>

          <Card className="bg-lime-50 border-lime-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">BoxBrownie Service Portfolio Requiring Specialized Customer Support</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Camera className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Photo Editing Services</h4>
                    <p className="text-gray-700 text-sm">Image enhancement, day-to-dusk conversion, object removal, and sky replacement for real estate photography</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Home className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Virtual Staging</h4>
                    <p className="text-gray-700 text-sm">Furniture placement, interior design coordination, and room transformation for vacant properties</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClipboardList className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Floor Plan Services</h4>
                    <p className="text-gray-700 text-sm">Technical drafting, layout optimization, and architectural plan creation for property marketing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">CGI Rendering</h4>
                    <p className="text-gray-700 text-sm">3D visualization, architectural rendering, and virtual renovation for development projects</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">360° Virtual Tours</h4>
                    <p className="text-gray-700 text-sm">Immersive property experiences, virtual walkthroughs, and interactive tour creation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageSquare className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">AI Copywriting</h4>
                    <p className="text-gray-700 text-sm">Property descriptions, marketing content, and listing optimization for real estate professionals</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="mt-8 text-lg text-gray-700 leading-relaxed">
            This BoxBrownie client success story demonstrates how comprehensive customer service infrastructure supports 
            complex PropTech operations that require specialized knowledge of real estate marketing, visual design principles, 
            and property development workflows across global markets.
          </p>
        </section>

        <Separator className="my-12" />

        {/* Global Impact and Industry Leadership */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Building2 className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Global Impact and Industry Leadership</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The BoxBrownie client success story validates something crucial about systematic customer service infrastructure: 
                  when PropTech companies can scale their customer support operations efficiently, they unlock global growth 
                  opportunities that transform entire industries. BoxBrownie&apos;s evolution from Australian startup to serving 
                  170,000+ customers across 117 countries demonstrates the strategic advantage of professional offshore staffing.
                </p>
                <p className="mb-6">
                  The BoxBrownie client success methodology demonstrates how systematic customer service scaling enables PropTech 
                  companies to maintain quality while expanding globally. From partnerships with major international real estate 
                  networks like LeadingRE (550 firms, 138,000 sales associates) to collaboration with Engel & Völkers Europe, 
                  BoxBrownie&apos;s customer service infrastructure supports enterprise-level relationships that require exceptional 
                  reliability and professional communication standards.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Market Leadership Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <Building2 className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Global Enterprise Partnerships</h4>
                        <p className="text-gray-700 text-sm">LeadingRE, Engel & Völkers Europe collaboration</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">24-Hour Delivery</h4>
                        <p className="text-gray-700 text-sm">Guaranteed turnaround across all time zones</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Innovation Leadership</h4>
                        <p className="text-gray-700 text-sm">SnapSnapSnap.com app development and AI integration</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Quality Standards</h4>
                        <p className="text-gray-700 text-sm">100% satisfaction guarantee and dedicated quality control</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-lime-600 mt-6">
                    <p className="text-gray-800 font-semibold">
                      Achievement: BoxBrownie client success enables global PropTech leadership through systematic customer service excellence
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  This BoxBrownie client success validation demonstrates that when PropTech companies invest in systematic 
                  customer service infrastructure through professional offshore staffing, they create competitive advantages 
                  that enable global market leadership and sustainable business growth across multiple continents and market segments.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA Section */}
        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Ready to scale your customer service operations like global PropTech leaders BoxBrownie?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the successful businesses that have transformed their customer service infrastructure through proven 
            methodologies validated by BoxBrownie client success achievements.
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
