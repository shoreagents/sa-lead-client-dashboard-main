'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Target, 
  Building, 
  Award, 
  Globe, 
  Clock,
  Phone,
  Star,
  Zap,
  Home,
  Shield,
  FileText,
  Video,
  Handshake,
  DollarSign,
  Calendar,
  Lightbulb,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  RefreshCw,
  Headphones,
  Settings,
  PlayCircle,
  XCircle,
  BarChart3,
  MessageSquare,
  Image as ImageIcon,
  Rocket,
  Layers,
  Briefcase,
  MapPin,
  Flag,
  ClipboardList
} from 'lucide-react';
import Image from 'next/image';

export default function StreamlineBackOfficePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-red-600 text-white px-4 py-2 text-lg mb-6">
            REAL ESTATE BREAKTHROUGH: From Overwhelm to Control
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            From Overwhelmed to Optimized: How Jason Gard Reclaimed His Time Through Strategic Offshore Support
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            When Jason needed to focus on high-dollar activities instead of back-office administration, one specialist transformed everything. Years later, perfect performance reviews and system automation prove that smart delegation beats working harder. This Jason Gard client success story reveals how to streamline without sacrificing quality.
          </p>
          
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
              alt="Jason Gard Real Estate Operations"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Client Quote Card */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop"
                    alt="Gard Real Estate Logo"
                    width={100}
                    height={100}
                    className="mx-auto rounded-full"
                  />
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  &quot;The support from Stephen and the team has been absolutely sensational. Outsourcing really allowed me to streamline what I do, particularly with my back office out of things which takes a lot of time off me, and allows me to focus on the role that I need.&quot;
                </blockquote>
                <div className="text-gray-900 font-bold">Jason Gard</div>
                <div className="text-gray-600">Jason Gard Real Estate, AU</div>
                <div className="text-gray-600">Hired One Agent</div>
                <div className="mt-2 flex items-center justify-center gap-2">
                  <Globe className="w-4 h-4 text-gray-600" />
                  <span>Australia</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Intro Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Home className="w-8 h-8 text-lime-600 mr-2" />
            Jason Gard Client Success: Smart Delegation Strategy
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            How an Australian real estate professional transformed from overwhelmed owner to focused business leader through strategic offshore support
          </p>
          <p className="text-lg text-gray-700">
            Picture this: You&apos;re drowning in administrative tasks that pull you away from what generates real income. You hire one specialist. Three years later, they&apos;re earning perfect scores, handling system automation, and you&apos;re considering hybrid work arrangements because the trust is absolute. That&apos;s the Jason Gard client success transformation.
          </p>
        </div>

        {/* Back Office Reality Check */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Jason Gard Client Success: The Back Office Reality Check</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Jason faced what every successful real estate professional eventually confronts: the administrative burden that grows with success. As Jason Gard Real Estate expanded, the back-office demands consumed more time that should have been spent on high-value client activities and business development.
                </p>
                <p className="mb-6">
                  &quot;The support from Stephen and the team has been absolutely sensational,&quot; Jason explains. &quot;Outsourcing really allowed me to streamline what I do, particularly with my back office out of things which takes a lot of time off me, and allows me to focus on the role that I need.&quot; This wasn&apos;t just about delegation—it was about strategic workforce optimization through proven real estate virtual assistant solutions.
                </p>

                <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Real Estate Business Owner&apos;s Dilemma</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <FileText className="w-8 h-8 text-red-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Administrative Overload</h4>
                      <p className="text-gray-700 text-sm">Contract processing, listing management, client communications consuming revenue-generating time</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <DollarSign className="w-8 h-8 text-red-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Opportunity Cost</h4>
                      <p className="text-gray-700 text-sm">Every hour on paperwork is an hour not spent prospecting, listing, or serving high-value clients</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <RefreshCw className="w-8 h-8 text-red-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Growth Limitations</h4>
                      <p className="text-gray-700 text-sm">Success creating more work instead of more freedom and scalable business systems</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-4">
                    <p className="text-lg text-gray-800 italic">
                      &quot;Back office tasks that take a lot of time off me&quot; – The productivity trap that successful agents face
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  Jason&apos;s situation reflects a common challenge in Australian real estate: as individual performance increases, administrative demands multiply exponentially. What starts as manageable paperwork becomes a full-time job that distances successful agents from the client-facing activities that built their reputation.
                </p>
                <p className="mt-4">
                  The solution wasn&apos;t working longer hours or hiring expensive local staff. Jason needed systematic back-office support that understood real estate operations while operating at a fraction of local costs through our specialized real estate outsourcing approach that has helped 500+ businesses achieve similar transformations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* One Agent Strategy */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Jason Gard Client Success: The One Agent Strategy</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Rather than building a large team immediately, Jason took a measured approach that would prove transformational: hire one specialist to handle the core administrative functions that were consuming his highest-value time. This wasn&apos;t about finding the cheapest solution—it was about finding the right professional who could grow with the business.
                </p>
                <p className="mb-6">
                  The hiring decision followed our systematic one agent approach: identify the highest-impact role first, implement it successfully, then scale based on proven results. Jason&apos;s choice of a Sales Admin specialist would become the foundation for years of business optimization.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why the One Agent Strategy Works for Real Estate</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <Home className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Focused Implementation</h4>
                        <p className="text-gray-700 text-sm">Master one role completely before adding complexity</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Immediate Impact</h4>
                        <p className="text-gray-700 text-sm">Quick relief from highest-burden administrative tasks</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <DollarSign className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Cost Efficiency</h4>
                        <p className="text-gray-700 text-sm">Fraction of local administrative hire costs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <TrendingUp className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Scalable Foundation</h4>
                        <p className="text-gray-700 text-sm">Proven system for future team expansion</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold">
                      Result: Perfect foundation for systematic business transformation without overwhelming complexity
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  Jason&apos;s Sales Admin specialist became responsible for the core functions that were consuming his time: listing management, contract processing, client communication coordination, and system administration. This wasn&apos;t just task delegation—it was strategic role design that would evolve and expand as trust and capability were proven.
                </p>
                <p className="mt-4">
                  The beauty of starting with one agent is the ability to develop processes organically while maintaining direct oversight. Jason could invest time in proper training and system development without managing multiple new team members, creating a sustainable foundation for future growth through our proven virtual assistant methodology.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sustained Excellence */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Star className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Jason Gard Client Success: Sustained Excellence Over Time</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The true measure of any offshore staffing success isn&apos;t the first few months—it&apos;s the sustained performance over multiple years. Jason&apos;s specialist has consistently earned exceptional ratings across all performance areas, demonstrating the reliability that transforms business operations from chaotic to systematic.
                </p>
                <p className="mb-6">
                  From the first annual evaluation through multiple years of partnership, performance reviews consistently show excellent ratings across all categories: Quality, Communication, Reliability, Teamwork, and Time Management. When Jason notes &quot;I am happy with her performance&quot; and recommends salary increases, it validates the systematic approach to professional offshore development.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Consistent Performance Excellence Over the Years</h3>
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-bold text-gray-900 text-lg">Early Partnership: Foundation Building</h4>
                        <Badge className="bg-lime-600 text-white">Excellent</Badge>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Implementing ClickUp project management</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Automation for new sales systems</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Pipeline Pro and Freshcaller integration</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 border-l-4 border-lime-600 p-3 rounded">
                        <p className="text-sm text-gray-800 italic mb-2">
                          &quot;None, I am happy with her performance&quot;
                        </p>
                        <p className="text-sm text-gray-700 font-semibold">Performance Rating: Excellent across all areas</p>
                        <p className="text-sm text-gray-700 font-semibold">Recommendation: Continue Employment, Salary Increase</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-bold text-gray-900 text-lg">Ongoing Partnership: Mastery & Growth</h4>
                        <Badge className="bg-lime-600 text-white">Outstanding</Badge>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Marketing/systems project leadership</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Overseeing ClickUp contractor management</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">New phone system implementation</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 border-l-4 border-lime-600 p-3 rounded">
                        <p className="text-sm text-gray-800 italic mb-2">
                          &quot;Very efficient&quot; across all performance areas
                        </p>
                        <p className="text-sm text-gray-700 font-semibold">Performance Rating: Outstanding with &quot;Excellent&quot; communication</p>
                        <p className="text-sm text-gray-700 font-semibold">Recommendation: Salary Increase</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Trust Evolution: From Supervision to Autonomy</h3>
                  <p className="text-gray-700 mb-4">
                    After implementing the initial setup, Jason was already considering hybrid work arrangements: &quot;I would like to see her be able to work 2 or 3 days at home and 2 or 3 days in the office. I have no issues with her working from home and trust her with her abilities to get the work done.&quot;
                  </p>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded">
                    <p className="text-gray-800 font-semibold">
                      Trust Indicator: Offering remote work flexibility within the established partnership based on proven performance
                    </p>
                  </div>
                  <p className="text-gray-700 mt-4">
                    This level of trust—offering flexible work arrangements to an offshore team member within the first year—demonstrates the reliability and professional integration that separates strategic offshore partnerships from typical outsourcing arrangements.
                  </p>
                </div>

                <p className="mt-6">
                  This sustained excellence over multiple years validates something crucial about professional offshore relationships: when implemented correctly with the right partner, they become increasingly valuable over time. Jason&apos;s specialist evolved from handling basic administrative tasks to managing complex system implementations and contractor oversight—growth that benefits both the business and the professional&apos;s career development.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Testimonial */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Video className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Jason Gard&apos;s Video Testimonial</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  Hear directly from Jason about his experience with ShoreAgents and the transformation it brought to his business operations.
                </p>
                <div className="bg-lime-50 rounded-lg p-6 shadow-sm text-center">
                  <PlayCircle className="w-16 h-16 text-lime-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-semibold">Video testimonial coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Beyond Administration to Innovation */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Settings className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Jason Gard Client Success: Beyond Administration to Innovation</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  What started as basic administrative support evolved into something far more valuable: a technology implementation partner who drives business efficiency improvements. Jason&apos;s specialist didn&apos;t just handle existing processes—they became instrumental in implementing new systems that transformed how the business operates.
                </p>
                <p className="mb-6">
                  From ClickUp project management implementation to Pipeline Pro integration and Freshcaller phone system deployment, the role expanded beyond typical administrative boundaries. This evolution demonstrates how strategic offshore partnerships can become drivers of business innovation rather than just cost-saving measures.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <RefreshCw className="w-8 h-8 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900 text-lg">Process Automation</h4>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">ClickUp Implementation:</h5>
                          <p className="text-gray-700 text-sm">Complete project management system rollout with workflow automation and task tracking integration</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Sales System Automation:</h5>
                          <p className="text-gray-700 text-sm">Running automation for new sales pipeline processes and client management workflows</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Headphones className="w-8 h-8 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900 text-lg">Communication Systems</h4>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Freshcaller Integration:</h5>
                          <p className="text-gray-700 text-sm">Advanced phone system implementation with call routing and client communication optimization</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Pipeline Pro Setup:</h5>
                          <p className="text-gray-700 text-sm">CRM system configuration and client management process optimization</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Users className="w-8 h-8 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900 text-lg">Team Coordination</h4>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Contractor Management:</h5>
                          <p className="text-gray-700 text-sm">Overseeing ClickUp contractors and coordinating system changes across multiple teams</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">Zoom Collaboration:</h5>
                          <p className="text-gray-700 text-sm">Active participation in meetings and strategic planning sessions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">From Support to Strategic Implementation Partner</h3>
                  <p className="text-gray-700 mb-4">
                    Jason&apos;s specialist evolved from handling basic administrative tasks to leading complex technology implementations. This progression represents the true value of long-term offshore partnerships: professional growth that directly benefits business capabilities.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-start">
                      <Target className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Project Leadership</h4>
                        <p className="text-gray-700 text-sm">Leading implementation of new marketing and system projects</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Settings className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">System Optimization</h4>
                        <p className="text-gray-700 text-sm">Continuously improving business processes and automation</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Team Integration</h4>
                        <p className="text-gray-700 text-sm">Seamless collaboration with both local and external teams</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-4">
                    <p className="text-gray-800 font-semibold">
                      Evolution: From task completion to strategic business capability enhancement
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  This technological leadership capability demonstrates why Jason&apos;s investment in offshore staffing has become increasingly valuable over time. Rather than just saving money on administrative tasks, he gained a strategic partner who drives business improvement through systematic implementation of modern tools and processes that enhance overall operational efficiency through our comprehensive real estate virtual assistant solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How to Copy Jason's Formula */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <FileText className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">How to Copy Jason&apos;s Exact Success Formula</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Jason&apos;s approach wasn&apos;t complicated—it was systematic. Here&apos;s exactly how to replicate his transformation from overwhelmed business owner to focused professional with trusted offshore support. Follow his blueprint step by step, and you&apos;ll understand why he says outsourcing &quot;really allowed me to streamline what I do.&quot;
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Jason&apos;s Proven Implementation Roadmap</h3>
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
                        <h4 className="font-bold text-gray-900 text-lg">The Honest Time Audit</h4>
                      </div>
                      <p className="text-gray-700 mb-2"><strong>Jason&apos;s Insight:</strong> &quot;Back office out of things which takes a lot of time off me&quot;</p>
                      <p className="text-gray-700 text-sm">Track exactly how much time you spend on administrative tasks versus revenue-generating activities. Jason realized his back-office work was consuming time that should have been spent on client acquisition and relationship management. Write down every administrative task for one week—you&apos;ll be shocked at the results.</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
                        <h4 className="font-bold text-gray-900 text-lg">The Strategic One-Agent Start</h4>
                      </div>
                      <p className="text-gray-700 mb-2"><strong>Jason&apos;s Approach:</strong> Hired ONE Sales Admin specialist, not a team</p>
                      <p className="text-gray-700 text-sm">Don&apos;t try to outsource everything at once. Jason focused on Sales Admin because that&apos;s where the highest-impact administrative burden lived. Choose your highest-time-consumption role first, master it completely, then expand. This focused approach lets you develop processes properly without overwhelming yourself or your new team member.</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
                        <h4 className="font-bold text-gray-900 text-lg">Trust Through Performance, Not Promises</h4>
                      </div>
                      <p className="text-gray-700 mb-2"><strong>Jason&apos;s Evolution:</strong> From supervision to offering remote work flexibility</p>
                      <p className="text-gray-700 text-sm">Jason didn&apos;t start with complete trust—he built it through consistent performance. By year one, he was comfortable offering hybrid work arrangements because the results spoke for themselves. Set clear expectations, measure performance consistently, and let trust develop naturally based on delivered results, not initial promises.</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</div>
                        <h4 className="font-bold text-gray-900 text-lg">Expand Responsibilities as Trust Grows</h4>
                      </div>
                      <p className="text-gray-700 mb-2"><strong>Jason&apos;s Strategy:</strong> From basic admin to system implementation leadership</p>
                      <p className="text-gray-700 text-sm">Jason&apos;s specialist evolved from handling routine tasks to implementing ClickUp, managing Pipeline Pro, and overseeing contractors. Don&apos;t keep your offshore team member in a box—as they prove their capabilities, give them opportunities to contribute to business improvement. This creates mutual value and career development that benefits everyone.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Where Most People Fail vs. What Jason Did Right</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-start mb-2">
                        <XCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900">Common Mistake:</p>
                          <p className="text-gray-700 text-sm">Hiring multiple people immediately and trying to manage everything at once</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900">Jason&apos;s Success:</p>
                          <p className="text-gray-700 text-sm">One role, perfected completely, then expanded responsibilities based on proven performance</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-start mb-2">
                        <XCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900">Common Mistake:</p>
                          <p className="text-gray-700 text-sm">Expecting immediate trust and perfect results without developing processes</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900">Jason&apos;s Success:</p>
                          <p className="text-gray-700 text-sm">Built trust through consistent performance tracking and clear communication</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Your Next 30 Days: Jason&apos;s Implementation Checklist</h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-6 h-6 text-lime-600 mr-2" />
                        <h4 className="font-bold text-gray-900">Week 1-2: Assessment</h4>
                      </div>
                      <ul className="space-y-1 text-sm text-gray-700 ml-8">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Track your time for one full week</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>List all administrative tasks consuming your schedule</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Calculate your hourly rate vs. admin time cost</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center mb-2">
                        <Target className="w-6 h-6 text-lime-600 mr-2" />
                        <h4 className="font-bold text-gray-900">Week 3: Strategy</h4>
                      </div>
                      <ul className="space-y-1 text-sm text-gray-700 ml-8">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Choose your highest-impact role for outsourcing</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Document current processes for that role</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Research proven offshore staffing providers</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center mb-2">
                        <Zap className="w-6 h-6 text-lime-600 mr-2" />
                        <h4 className="font-bold text-gray-900">Week 4: Implementation</h4>
                      </div>
                      <ul className="space-y-1 text-sm text-gray-700 ml-8">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Schedule consultation with ShoreAgents</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Prepare detailed role requirements</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Plan performance measurement systems</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold">
                      Jason&apos;s Secret: Start small, measure everything, build trust through results, then scale systematically
                    </p>
                  </div>
                  <p className="text-gray-700 mt-4">
                    The most important lesson from Jason&apos;s success is patience with the process. He didn&apos;t rush into complex arrangements or expect immediate perfection. He built a professional relationship systematically, measured performance consistently, and allowed responsibilities to expand naturally as trust and capability were proven.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA Section */}
        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Ready to follow Jason&apos;s blueprint and transform your back-office operations from burden to strategic advantage?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start with one specialist like Jason did, build trust through performance, and discover why he says the support has been &quot;absolutely sensational&quot; in helping him focus on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Your Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-bold">
              <Home className="w-5 h-5 mr-2" />
              Real Estate Solutions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
