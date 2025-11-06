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
  ClipboardList,
  Gift,
  ThumbsUp,
  TrendingDown,
  Smile,
  Sparkles,
  Percent,
  BookOpen,
  GraduationCap,
  Heart,
  UserCheck,
  Wifi,
  WifiOff,
  CloudRain,
  HomeIcon,
  AlertTriangle,
  CheckCircle as CheckCircleIcon,
  Smartphone,
  Laptop,
  Plane,
  Umbrella,
  Mic,
  Radio,
  RadioIcon,
  Play,
  CheckSquare,
  Eye,
  Trophy,
  Medal,
  Landmark,
  Banknote,
  TrendingUp as TrendingUpIcon,
  Search,
  Frown,
  Scale
} from 'lucide-react';
import Image from 'next/image';

export default function SmoothRecruitmentProcessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-red-600 text-white px-4 py-2 text-lg mb-6">
            FROM FRUSTRATION TO SUCCESS: The Real Estate Professional&apos;s Journey
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Why Jon Beaulieu Ditched Freelancers for Systematic Offshore Staffing
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            When Jon Beaulieu from JBMP Group faced unreliable freelancers and inconsistent quality, he discovered something different. This JBMP Group client success story reveals how systematic recruitment and professional management transformed his real estate operations—even through the inevitable challenges of finding the right fit.
          </p>
          
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
              alt="JBMP Group Operations"
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
                    alt="JBMP Group Logo"
                    width={100}
                    height={100}
                    className="mx-auto rounded-full"
                  />
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  &quot;We have hired freelancers in the past however it was unreliable with a lot of inconsistency. We searched Google for other options and came across ShoreAgents in which we are glad we did. The recruitment process was so smooth as they presented us with thoroughly prequalified candidates to interview. We chose our first agent, and we are extremely impressed with her dedication to her work not to mention quality. We will be looking to ShoreAgents for many more roles in the future.&quot;
                </blockquote>
                <div className="text-gray-900 font-bold">Jon Beaulieu</div>
                <div className="text-gray-600">JBMP Group, USA</div>
                <div className="text-gray-600">Hired One Agent</div>
                <div className="mt-2 flex items-center justify-center gap-2">
                  <Flag className="w-4 h-4 text-gray-600" />
                  <span>United States of America</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Intro Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Flag className="w-8 h-8 text-lime-600 mr-2" />
            JBMP Group Client Success: Professional Excellence Through Systematic Recruitment
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            How Jon Beaulieu transformed his real estate business from freelancer frustration to professional consistency
          </p>
          <p className="text-lg text-gray-700">
            Picture this: You&apos;ve tried hiring freelancers. It&apos;s unreliable. Inconsistent. You Google &quot;other options&quot; and find a company that changes everything—not just with solutions, but with the professional recruitment process that impresses you from day one. That&apos;s the JBMP Group client success story.
          </p>
        </div>

        {/* The Freelancer Problem */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Frown className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">JBMP Group Client Success: The Freelancer Problem Every Business Owner Knows</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Jon Beaulieu had been down this road before. Like countless real estate professionals, he&apos;d tried the freelancer route, hoping to find reliable administrative support for his growing business. The promise seemed attractive: flexible talent, project-based work, cost-effective solutions.
                </p>
                <p className="mb-6">
                  But reality hit hard. &quot;We have hired freelancers in the past however it was unreliable with a lot of inconsistency,&quot; Jon later reflected. The constant cycle of finding, training, and losing freelancers was costing more than money—it was costing time, energy, and business momentum that successful real estate operations simply can&apos;t afford.
                </p>

                <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">The Freelancer Reality Check</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <RefreshCw className="w-8 h-8 text-red-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Inconsistent Quality</h4>
                      <p className="text-gray-700 text-sm">Work standards varied dramatically between projects and freelancers</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <TrendingDown className="w-8 h-8 text-red-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Unreliable Delivery</h4>
                      <p className="text-gray-700 text-sm">Missed deadlines, incomplete projects, and sudden disappearances</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <DollarSign className="w-8 h-8 text-red-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Hidden Costs</h4>
                      <p className="text-gray-700 text-sm">Constant retraining, quality control, and project management overhead</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Clock className="w-8 h-8 text-red-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Time Drain</h4>
                      <p className="text-gray-700 text-sm">More time managing freelancers than focusing on core business activities</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold">
                      This wasn&apos;t just Jon&apos;s experience—it&apos;s the reality for thousands of real estate professionals who&apos;ve discovered that cheap freelancer labor often becomes expensive business disruption.
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  When you need consistent, reliable administrative support for critical business functions, the freelancer model simply doesn&apos;t deliver the systematic reliability that growing businesses require.
                </p>
                <p className="mt-4">
                  That&apos;s when Jon made the decision that would change everything: instead of continuing the freelancer cycle, he searched Google for &quot;other options&quot; and discovered a systematic approach to offshore staffing that would transform his entire perspective on real estate virtual assistant solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* The Google Search */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Search className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">JBMP Group Client Success: The Google Search That Changed Everything</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Frustrated with freelancer inconsistency, Jon did what any business owner would do: he searched Google for better alternatives. &quot;We searched Google for other options and came across ShoreAgents in which we are glad we did,&quot; he later shared. But what he discovered wasn&apos;t just another offshore staffing company—it was a systematic approach that impressed him from the very first interaction.
                </p>
                <p className="mb-6">
                  The difference was immediately apparent. Instead of generic freelancer platforms or typical outsourcing companies promising cheap labor, Jon found a professional organization that understood the specific needs of real estate businesses. The recruitment process itself became the first proof point that this would be different.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What Made ShoreAgents Different from Day One</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Building className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Professional Recruitment Process</h4>
                      <p className="text-gray-700 text-sm">Structured candidate presentation with pre-screened, qualified professionals</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Target className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Industry Specialization</h4>
                      <p className="text-gray-700 text-sm">Deep understanding of real estate administrative needs and workflows</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Zap className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Immediate Impression</h4>
                      <p className="text-gray-700 text-sm">Quality candidates and smooth process that impressed from first contact</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Settings className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Systematic Approach</h4>
                      <p className="text-gray-700 text-sm">Structured methodology vs. freelancer randomness</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold">
                      Result: Professional recruitment that delivered pre-qualified candidates ready for real estate administrative work
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  &quot;The recruitment process was so smooth as they presented us with thoroughly prequalified candidates to interview,&quot; Jon reflected. This wasn&apos;t the typical offshore staffing experience of sifting through dozens of unqualified applicants or hoping freelancers would show up. It was a professional service that understood his time was valuable and his business needs were specific.
                </p>
                <p className="mt-4">
                  When Jon chose his first specialist from the presented candidates, he was &quot;extremely impressed with her dedication to her work not to mention quality.&quot; The systematic approach to recruitment had delivered exactly what the freelancer model couldn&apos;t: a dedicated professional focused on quality work and business success through comprehensive real estate outsourcing solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Exceptional Performance */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Star className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">JBMP Group Client Success: Exceptional Performance from Day One</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The difference between freelancer frustration and professional success became clear within the first month. Jon&apos;s new real estate administrative specialist didn&apos;t just meet expectations—she exceeded them across every performance metric that matters for business success.
                </p>
                <p className="mb-6">
                  &quot;She&apos;s doing a great job!&quot; became Jon&apos;s immediate assessment. But the real validation came through the systematic performance review process that provided specific, measurable evidence of the quality and dedication that Jon had been missing with freelancer arrangements.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">First Month Performance: Perfect Scores Across All Categories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Star className="w-8 h-8 text-lime-600 mb-3" />
                      <div className="text-3xl font-bold text-lime-600 mb-2">5/5</div>
                      <h4 className="font-bold text-gray-900 mb-2">Quality Excellence</h4>
                      <p className="text-gray-700 text-sm">&quot;Great work in the detail we need&quot;</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <TrendingUp className="w-8 h-8 text-lime-600 mb-3" />
                      <div className="text-3xl font-bold text-lime-600 mb-2">5/5</div>
                      <h4 className="font-bold text-gray-900 mb-2">Continuous Improvement</h4>
                      <p className="text-gray-700 text-sm">&quot;Always asking how to improve performance&quot;</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Shield className="w-8 h-8 text-lime-600 mb-3" />
                      <div className="text-3xl font-bold text-lime-600 mb-2">5/5</div>
                      <h4 className="font-bold text-gray-900 mb-2">Perfect Reliability</h4>
                      <p className="text-gray-700 text-sm">&quot;Always shows up early and gets everything done&quot;</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Clock className="w-8 h-8 text-lime-600 mb-3" />
                      <div className="text-3xl font-bold text-lime-600 mb-2">5/5</div>
                      <h4 className="font-bold text-gray-900 mb-2">Time Management</h4>
                      <p className="text-gray-700 text-sm">&quot;Priority list completed quickly in correct order&quot;</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold italic mb-2">
                      &quot;Every meeting she is always asking what she can do to improve her performance. Always trying to learn more and find new ways to help!&quot;
                    </p>
                    <p className="text-gray-800 font-semibold">First Month Management Assessment</p>
                  </div>
                </div>

                <p className="mt-6">
                  The contrast with his freelancer experience was dramatic. Instead of chasing freelancers for basic task completion, Jon found himself working with a professional who proactively sought feedback and continuously looked for ways to contribute more value to the business.
                </p>
                <p className="mt-4">
                  This wasn&apos;t luck—it was the result of systematic recruitment that identifies professionals who understand business requirements and are committed to long-term success. The dedication to quality work that Jon had been missing with freelancers was now a daily reality through professional virtual assistant services.
                </p>
                <p className="mt-4">
                  &quot;We will be looking to ShoreAgents for many more roles in the future,&quot; Jon declared after just one month. The systematic approach had delivered exactly what every business owner needs: reliable, professional, dedicated support that enables business growth rather than creating management overhead.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Professional Growth */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">JBMP Group Client Success: Professional Growth Through Systematic Support</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The JBMP Group client success story demonstrates something crucial about professional offshore staffing: it&apos;s not just about finding the right person—it&apos;s about having the systematic support to develop them into the perfect fit for your business needs. This became evident as Jon&apos;s business evolved and required different approaches to maximizing his specialist&apos;s potential.
                </p>
                <p className="mb-6">
                  By the fifth month, Jon&apos;s management team was implementing new software systems and refining business processes. Rather than viewing this as a setback, it became an opportunity to demonstrate the systematic approach that differentiates professional offshore staffing from freelancer arrangements.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Systematic Professional Development: The ShoreAgents Difference</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <BarChart3 className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Honest Assessment</h4>
                      <p className="text-gray-700 text-sm">&quot;Has not been trained fully&quot; – Transparent evaluation of development needs</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <GraduationCap className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Structured Training</h4>
                      <p className="text-gray-700 text-sm">Systematic approach to skill development and knowledge transfer</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Rocket className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Growth Mindset</h4>
                      <p className="text-gray-700 text-sm">&quot;Eager to take on more work&quot; – Proactive development attitude</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Settings className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Continuous Support</h4>
                      <p className="text-gray-700 text-sm">Ongoing management support through business changes and system updates</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold">
                      Result: Professional development that adapts to business needs rather than abandoning relationships
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  During this transition period, Jon&apos;s management team noted: &quot;Has not been trained fully&quot; but importantly added &quot;Not of her own fault.&quot; This honest assessment demonstrates the systematic approach to professional development that freelancer arrangements simply cannot provide.
                </p>
                <p className="mt-4">
                  Instead of starting over with new freelancers, the JBMP Group client success story shows how systematic support enables businesses to develop their offshore professionals into exactly what they need. The specialist remained &quot;eager to take on more work&quot; while management developed the structured training approach that would maximize her contribution.
                </p>
                <p className="mt-4">
                  This is what differentiates professional offshore staffing from freelancer arrangements: the systematic support to develop long-term relationships that adapt to business evolution rather than creating constant turnover and retraining cycles through our comprehensive outsourcing solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Systematic Beats Freelancer */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">JBMP Group Client Success: Why Systematic Beats Freelancer Every Time</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The JBMP Group client success story illustrates why successful real estate professionals choose systematic offshore staffing over freelancer arrangements. When Jon reflected on his experience, he identified the key elements that made the difference: professional recruitment, dedicated commitment, and systematic support that adapts to business needs.
                </p>
                <p className="mb-6">
                  &quot;The recruitment process was so smooth as they presented us with thoroughly prequalified candidates to interview. We chose our first agent, and we are extremely impressed with her dedication to her work not to mention quality. We will be looking to ShoreAgents for many more roles in the future.&quot;
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Freelancer vs. Professional Offshore Staffing: The Reality</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 rounded-lg p-6 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                        <XCircle className="w-6 h-6 text-red-600 mr-2" />
                        Freelancer Experience
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <XCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Unreliable with inconsistent quality</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Constant searching and retraining</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Project-based, not business-focused</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>No systematic development support</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Hidden costs from turnover</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Time drain on management</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                        <CheckCircle2 className="w-6 h-6 text-lime-600 mr-2" />
                        Professional Offshore Staffing
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Smooth recruitment with prequalified candidates</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Dedicated professionals, not project workers</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Systematic performance monitoring</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Ongoing management support</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Adaptable to business evolution</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Long-term relationship building</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold">
                      Jon&apos;s experience demonstrates why systematic approaches consistently outperform freelancer arrangements
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  The JBMP Group client success story validates something crucial about professional offshore staffing: it&apos;s not about finding cheap labor, it&apos;s about implementing systematic solutions that support business growth. From the smooth recruitment process to the dedicated professional commitment, every aspect focuses on long-term business success.
                </p>
                <p className="mt-4">
                  This is why Jon concluded his assessment with confidence: &quot;We will be looking to ShoreAgents for many more roles in the future.&quot; The systematic approach had delivered exactly what freelancer arrangements couldn&apos;t: reliable, professional, dedicated support that enables business scaling rather than creating management overhead through our proven real estate virtual assistant methodology.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What Jon's Experience Means */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">What Jon&apos;s Experience Means for Your Real Estate Business</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Jon&apos;s story resonates because it&apos;s so familiar. Every real estate professional who&apos;s tried freelancers knows the frustration—the inconsistency, the unreliability, the constant cycle of finding and training new people. What made Jon&apos;s experience different wasn&apos;t luck, it was finding a systematic approach that actually works.
                </p>
                <p className="mb-6">
                  When Jon says &quot;We will be looking to ShoreAgents for many more roles in the future,&quot; he&apos;s not just satisfied—he&apos;s confident. That confidence comes from experiencing firsthand what happens when you stop treating offshore staffing as a cost-cutting measure and start treating it as a strategic business decision.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">The Three Things That Changed Everything for Jon</h3>
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
                        <h4 className="font-bold text-gray-900 text-lg">Professional Recruitment Process</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Instead of sifting through random freelancers, Jon received &quot;thoroughly prequalified candidates&quot; ready to interview. No wasted time, no guesswork.</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
                        <h4 className="font-bold text-gray-900 text-lg">Dedicated Professional Commitment</h4>
                      </div>
                      <p className="text-gray-700 text-sm">His specialist wasn&apos;t just completing tasks—she was &quot;always asking what she can do to improve her performance.&quot; That&apos;s business partnership, not freelance work.</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
                        <h4 className="font-bold text-gray-900 text-lg">Systematic Support Structure</h4>
                      </div>
                      <p className="text-gray-700 text-sm">When challenges arose, there was professional management support to work through them—not abandonment like typical freelancer platforms.</p>
                    </div>
                  </div>
                </div>

                <p className="mt-6">
                  The difference between Jon&apos;s freelancer frustration and his success with ShoreAgents wasn&apos;t about finding cheaper labor. It was about finding a professional system that treats offshore staffing as a strategic business decision rather than a desperate cost-cutting measure.
                </p>
                <p className="mt-4">
                  If you&apos;re tired of the freelancer cycle—the searching, the hoping, the disappointment, the starting over—Jon&apos;s experience shows there&apos;s a better way. Not a magic solution, but a professional approach that actually delivers on its promises.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA Section */}
        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Want to see if the approach that worked for Jon might work for your real estate business?</h2>
          <p className="text-xl mb-8 opacity-90">
            We can&apos;t promise you&apos;ll have the exact same experience as Jon, but we can promise you the same professional recruitment process and systematic support that impressed him from day one.
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
