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
  Layers
} from 'lucide-react';
import Image from 'next/image';

export default function OffshoreStaffingSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-red-600 text-white px-4 py-2 text-lg mb-6">
            AUSTRALIA REAL ESTATE BREAKTHROUGH: The Complete Transformation
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            From Administrative Support to Strategic Partnership: Reside Real Estate&apos;s Success
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            When Reside Real Estate&apos;s Brett Ayles started with one conservative test, he discovered something that would fundamentally change his business. From &quot;great asset&quot; to role expansion into creative work, to project management capabilities—this Reside Real Estate client success story reveals the complete journey from cautious testing to strategic transformation.
          </p>
          
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
              alt="Reside Real Estate Operations"
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
                    alt="Reside Logo"
                    width={100}
                    height={100}
                    className="mx-auto rounded-full"
                  />
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  &quot;Working with ShoreAgents has been a great experience, we&apos;ve been able to scale and grow thanks to their reliable and experienced agents. The ShoreAgents team has become a key part of our operations and our onshore staff have full faith that things are taken care of so they can focus on what they do best here.&quot;
                </blockquote>
                <div className="text-gray-900 font-bold">Brett Ayles</div>
                <div className="text-gray-600">Reside Real Estate, AU</div>
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
            Reside Real Estate: The Complete Transformation Journey
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            How one Australian real estate company went from conservative testing to &quot;Get me more like this one&quot;
          </p>
          <p className="text-lg text-gray-700">
            Picture this: You&apos;re running a growing Australian real estate company. You&apos;ve heard about offshore staffing but you&apos;re naturally cautious. You start with one person, one role, one test. Eventually, that same team member is earning perfect performance reviews and you&apos;re asking management: &quot;Get me more like this one.&quot; That&apos;s the Reside Real Estate client success story—a journey from skepticism to complete transformation.
          </p>
        </div>

        {/* The Starting Point */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The Starting Point: Smart Business Owner, Conservative Approach</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Brett Ayles approached offshore staffing the way successful business owners approach any significant operational change: carefully, systematically, and with realistic expectations. As the owner of Reside Real Estate, he understood that growing Australian real estate companies face a fundamental challenge—administrative tasks multiply faster than revenue, creating a productivity trap that constrains growth.
                </p>
                <p className="mb-6">
                  The decision to hire one specialist for sales and processing administration wasn&apos;t about cutting costs—it was about testing whether systematic offshore staffing could actually work for his business. Brett needed someone who could handle the detailed, time-consuming tasks that were preventing his team from focusing on what they do best: building relationships and closing deals.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">The Conservative Testing Framework</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                      <div className="bg-lime-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                      <h4 className="font-bold text-gray-900 mb-2">Single Role Focus</h4>
                      <p className="text-gray-700 text-sm">Sales and processing administration</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                      <BarChart3 className="w-12 h-12 text-lime-600 mx-auto mb-4" />
                      <h4 className="font-bold text-gray-900 mb-2">Regular Evaluation</h4>
                      <p className="text-gray-700 text-sm">Ongoing performance tracking</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                      <Target className="w-12 h-12 text-lime-600 mx-auto mb-4" />
                      <h4 className="font-bold text-gray-900 mb-2">Clear Expectations</h4>
                      <p className="text-gray-700 text-sm">Defined metrics and standards</p>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-6 font-semibold">
                    This conservative approach—starting with one person, one role, clear expectations—would prove to be the foundation for a transformation that neither Brett nor his team could have predicted.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Foundation Phase */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Award className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The Foundation Phase: Building Trust Through Excellence</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The initial phase of any offshore staffing relationship is crucial—this is when you discover whether you&apos;ve hired a professional or just found cheap labor. Brett&apos;s early client evaluation revealed something that would set the tone for everything that followed: they hadn&apos;t just found administrative help—they&apos;d discovered &quot;a great asset.&quot;
                </p>
                <p className="mb-6">
                  The evaluation was thorough and honest. Perfect 5/5 ratings across every category weren&apos;t just good numbers—they represented the foundation of trust that would enable everything that came next. But more importantly, Brett&apos;s comments revealed something crucial: this wasn&apos;t just about task completion, it was about business improvement.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Foundation Phase Breakthrough: The Moments That Changed Everything</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Settings className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Process Innovation</h4>
                      <p className="text-gray-700 text-sm mb-2">&quot;Adept at following (and creating) procedures&quot;</p>
                      <p className="text-gray-700 text-sm">&quot;Often encouraged to suggest process improvements&quot;</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <TrendingUp className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Skills Growth</h4>
                      <p className="text-gray-700 text-sm">&quot;Upskilled even with tasks outside employment scope like data mining within Excel&quot;</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Users className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Team Integration</h4>
                      <p className="text-gray-700 text-sm">&quot;Integrated well into the team – they know they can trust his work and timing&quot;</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold">
                      Brett&apos;s Decision: &quot;Regularization, Continue Employment, Salary Increase, Get me more like this one&quot;
                    </p>
                  </div>
                  <p className="text-center text-gray-700 mt-4">
                    The foundation phase established something crucial: this wasn&apos;t about finding someone to follow instructions—it was about partnering with someone who could improve the business.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Growth Phase */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Rocket className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The Growth Phase: From Asset to Strategic Team Member</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The trust established in the foundation phase created something powerful: permission to grow. As the relationship evolved, Brett&apos;s ongoing evaluations revealed the logical progression of systematic offshore staffing—when you hire professionals rather than just task-doers, they expand their capabilities and become more valuable over time.
                </p>
                <p className="mb-6">
                  The growth phase showed continued perfect 5/5 ratings across all categories, but the real story was in what had changed. The specialist wasn&apos;t just maintaining their initial performance; they had evolved from sales and processing administration into a multi-skilled team member handling creative work, system optimization, and proactive business improvement.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Growth Phase Evolution: From Administrative Support to Strategic Asset</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <FileText className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">System Ownership</h4>
                      <p className="text-gray-700 text-sm">&quot;Taking ownership of Trello and optimizing the processes&quot;</p>
                      <p className="text-gray-600 text-xs mt-2">From user to system owner</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <ImageIcon className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Creative Expansion</h4>
                      <p className="text-gray-700 text-sm">&quot;Taking on social media and creative aspects in InDesign, doing really well&quot;</p>
                      <p className="text-gray-600 text-xs mt-2">New skill development</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Star className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Above & Beyond</h4>
                      <p className="text-gray-700 text-sm">&quot;Willing to go the extra mile doing odd jobs after hours&quot;</p>
                      <p className="text-gray-600 text-xs mt-2">Genuine commitment</p>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-6 font-semibold">
                    The Evolution: From administrative helper to creative team member and system optimizer
                  </p>
                </div>

                <p className="mt-6">
                  What happened during the growth phase demonstrates the power of systematic professional development. The specialist had grown from someone who &quot;follows procedures&quot; to someone who &quot;takes ownership of systems.&quot; They had expanded from administrative tasks to creative work that would typically require separate specialized hiring.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Partnership Phase */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Star className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The Partnership Phase: Strategic Value and Advanced Capabilities</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  As the relationship matured, something remarkable had happened at Reside Real Estate. The latest client evaluation revealed the ultimate transformation: what had started as a conservative test had become complete professional integration. The specialist was &quot;growing into some PM functions&quot;—project management capabilities that represent advanced professional development.
                </p>
                <p className="mb-6">
                  The progression from &quot;great asset&quot; to creative team member to strategic partner demonstrates what systematic offshore staffing can achieve. Perfect 5/5 ratings across all categories had become the new normal, with the specialist showing &quot;consistently high quality work&quot; and proactive performance improvement.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Partnership Phase: From Team Member to Strategic Partner</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <BarChart3 className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Advanced Capabilities</h4>
                      <p className="text-gray-700 text-sm">&quot;Growing into some PM functions&quot;</p>
                      <p className="text-gray-600 text-xs mt-2">Project management skill development</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Clock className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Deadline Ownership</h4>
                      <p className="text-gray-700 text-sm">&quot;Happy to stay back and get the job done when we&apos;re on deadlines&quot;</p>
                      <p className="text-gray-600 text-xs mt-2">Shared commitment</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Award className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Consistent Excellence</h4>
                      <p className="text-gray-700 text-sm">&quot;Fast & reliable on all tasks&quot; with perfect attendance record</p>
                      <p className="text-gray-600 text-xs mt-2">Strategic partner status</p>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-6 font-semibold">
                    The Ultimate Evolution: From administrative support to strategic partner with advanced capabilities
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Complete Journey */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The Complete Journey: From Test to Transformation</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <BarChart3 className="w-8 h-8 text-lime-600 mr-3" />
                        <h3 className="text-xl font-bold text-gray-900">Foundation Phase</h3>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-900">&quot;Great Asset&quot;</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Following and creating procedures</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Suggesting process improvements</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Excel data mining skills</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Team trust established</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <ArrowRight className="w-6 h-6 text-lime-600 mx-auto" />

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Rocket className="w-8 h-8 text-lime-600 mr-3" />
                        <h3 className="text-xl font-bold text-gray-900">Growth Phase</h3>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-900">&quot;System Owner&quot;</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Trello system ownership</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Social media management</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>InDesign creative work</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>After-hours commitment</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <ArrowRight className="w-6 h-6 text-lime-600 mx-auto" />

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Star className="w-8 h-8 text-lime-600 mr-3" />
                        <h3 className="text-xl font-bold text-gray-900">Partnership Phase</h3>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-900">&quot;Strategic Partner&quot;</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Project management functions</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Total integration achieved</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Deadline ownership mindset</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Consistently high quality work</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-6 font-semibold">
                    This complete journey demonstrates what systematic offshore staffing can achieve when implemented with patience, clear expectations, and genuine commitment to professional development.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Business Impact */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <DollarSign className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The Business Impact: From Cost Savings to Strategic Value</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The Reside Real Estate transformation story isn&apos;t just about performance reviews—it&apos;s about business impact that compounds over time. When Brett says &quot;Get me more like this one,&quot; he&apos;s not just expressing satisfaction; he&apos;s recognizing strategic value that extends far beyond simple cost savings.
                </p>
                <p className="mb-6">
                  The financial impact reveals the true power of systematic offshore staffing. Australian administrative roles typically cost $50,000-$65,000 annually, plus superannuation and benefits. But the real value came from capability expansion that would have required multiple separate hires: administrative support, creative design, system management, and project coordination.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Impact: Beyond Simple Cost Savings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                      <DollarSign className="w-10 h-10 text-lime-600 mx-auto mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Financial Advantage</h4>
                      <div className="text-3xl font-bold text-lime-600 mb-2">66%</div>
                      <p className="text-sm text-gray-700">Cost reduction vs local hiring</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                      <Layers className="w-10 h-10 text-lime-600 mx-auto mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Capability Expansion</h4>
                      <div className="text-3xl font-bold text-lime-600 mb-2">4+ Roles</div>
                      <p className="text-sm text-gray-700">Admin, Creative, Systems, PM</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                      <TrendingUp className="w-10 h-10 text-lime-600 mx-auto mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Strategic Value</h4>
                      <div className="text-3xl font-bold text-lime-600 mb-2">Exponential</div>
                      <p className="text-sm text-gray-700">Trust, commitment, ownership</p>
                    </div>
                  </div>

                  <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">The Value Evolution: How Strategic Value Compounds</h3>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex items-center mb-2">
                          <DollarSign className="w-6 h-6 text-lime-600 mr-2" />
                          <h4 className="font-bold text-gray-900">Foundation: Cost Efficiency</h4>
                        </div>
                        <p className="text-gray-700 text-sm">Significant annual savings + reliable administrative excellence</p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-lime-600 mx-auto" />
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex items-center mb-2">
                          <Rocket className="w-6 h-6 text-lime-600 mr-2" />
                          <h4 className="font-bold text-gray-900">Growth: Capability Multiplication</h4>
                        </div>
                        <p className="text-gray-700 text-sm">Creative design, system ownership, proactive optimization</p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-lime-600 mx-auto" />
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex items-center mb-2">
                          <Star className="w-6 h-6 text-lime-600 mr-2" />
                          <h4 className="font-bold text-gray-900">Partnership: Strategic Value</h4>
                        </div>
                        <p className="text-gray-700 text-sm">Project management, deadline ownership, business partnership</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-center text-gray-700 mt-6 font-semibold">
                    This progression from cost savings to strategic value demonstrates why Brett&apos;s evaluation concluded with &quot;Get me more like this one.&quot;
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What Brett's Journey Teaches */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">What Brett&apos;s Journey Teaches About Professional Growth</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Brett Ayles&apos; progression from &quot;great asset&quot; to &quot;Get me more like this one&quot; tells a story that every business owner should understand: when you hire professionals rather than just task-doers, growth becomes inevitable. His journey wasn&apos;t about luck or finding an exceptional individual—it was about implementing systematic approaches that enable professional development.
                </p>
                <p className="mb-6">
                  The most revealing aspect of Brett&apos;s evaluations isn&apos;t the perfect performance ratings—it&apos;s the evolution. Foundation phase: following procedures and suggesting improvements. Growth phase: taking ownership of systems and expanding into creative work. Partnership phase: developing project management functions and strategic thinking. This progression didn&apos;t happen by accident.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What Brett&apos;s Evolution Actually Demonstrates</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <TrendingUp className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Systematic Development</h4>
                        <p className="text-gray-700 text-sm">Professional growth through structured opportunity and clear expectations</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Handshake className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Trust Building</h4>
                        <p className="text-gray-700 text-sm">Performance excellence creating permission for expanded responsibilities</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Value Multiplication</h4>
                        <p className="text-gray-700 text-sm">One person covering multiple department functions through skill development</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Star className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Strategic Partnership</h4>
                        <p className="text-gray-700 text-sm">Evolution from task completion to business partnership mindset</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold">
                      The Result: Conservative testing leading to transformational business relationships
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  Brett&apos;s evaluation that his specialist is &quot;happy to stay back and get the job done when we&apos;re on deadlines&quot; reveals something crucial: this isn&apos;t just about task completion—it&apos;s about shared ownership of business success. When virtual assistants develop project management capabilities and demonstrate genuine commitment to deadline achievement, you&apos;ve moved far beyond simple outsourcing.
                </p>
                <p className="mt-4">
                  The financial impact tells only part of the story. Brett saved significant money compared to local hiring, but the real value was capability multiplication. One person providing administrative support, creative design, system optimization, and project management represents the kind of value that makes business owners say &quot;Get me more like this one.&quot;
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What This Means */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">What This Means for Real Estate Business Owners</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Brett&apos;s journey proves that systematic approaches to offshore staffing create competitive advantages that compound over time. His conservative testing methodology—start with one role, build trust through performance, expand capabilities based on proven results—represents a blueprint for sustainable business transformation.
                </p>
                <p className="mb-6">
                  The progression from administrative support to strategic partnership doesn&apos;t happen with typical outsourcing. It requires systematic professional development, clear performance expectations, and the willingness to invest in long-term relationships rather than short-term cost cutting.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Success Factors from Reside Real Estate</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Target className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Conservative Start</h4>
                        <p className="text-gray-700 text-sm">One role, one test, clear expectations</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <BarChart3 className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Regular Evaluation</h4>
                        <p className="text-gray-700 text-sm">Ongoing performance tracking and feedback</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <TrendingUp className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Capability Expansion</h4>
                        <p className="text-gray-700 text-sm">Allow responsibilities to grow with proven performance</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Star className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Strategic Partnership</h4>
                        <p className="text-gray-700 text-sm">Long-term investment in professional development</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA Section */}
        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Follow Brett&apos;s proven approach: start conservatively, build systematically, grow strategically.</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the systematic real estate outsourcing that enables professional growth from &quot;great asset&quot; to strategic partner. Discover why successful business owners consistently request &quot;Get me more like this one.&quot;
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Your Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-bold">
              <Home className="w-5 h-5 mr-2" />
              Real Estate VA Solutions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
