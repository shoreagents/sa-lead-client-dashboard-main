'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  TrendingUp, 
  TrendingDown,
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
  Handshake,
  DollarSign,
  Calendar,
  AlertCircle,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Smile,
  Frown
} from 'lucide-react';
import Image from 'next/image';

export default function HiringSuccessAfterFailuresPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-red-600 text-white px-4 py-2 text-lg mb-6">
            REAL ESTATE BREAKTHROUGH: &quot;Can We Clone Her?&quot;
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            &quot;Can We Clone Her?&quot; – How Cindy Armour-Helm Discovered Virtual Assistant Excellence After Multiple Failed Attempts
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            When Cindy Armour-Helm from Better Homes and Gardens Real Estate tried multiple companies before finding ShoreAgents, she discovered something extraordinary. Her team member earned perfect 5/5 reviews and a bonus recommendation with the comment: &quot;Can we clone her?&quot; This Cindy Armour-Helm client success story reveals systematic real estate excellence.
          </p>
          
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
              alt="Better Homes and Gardens Real Estate Operations"
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
                    alt="Better Homes and Gardens"
                    width={100}
                    height={100}
                    className="mx-auto rounded-full"
                  />
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  &quot;I tried multiple companies before finally using ShoreAgents and I wish I did from the start, because there is really no compare. They are heads and shoulders above the rest! Highly recommended!&quot;
                </blockquote>
                <div className="text-gray-900 font-bold">Cindy Armour-Helm</div>
                <div className="text-gray-600">Better Homes and Gardens Real Estate Capital Area, USA</div>
                <div className="text-gray-600">Hired a Team</div>
                <div className="mt-2 flex items-center justify-center gap-2">
                  <Globe className="w-4 h-4 text-gray-600" />
                  <span>United States of America</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Intro Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Home className="w-8 h-8 text-lime-600 mr-2" />
            Cindy Armour-Helm Client Success: Real Estate Team Excellence
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            How Better Homes and Gardens Real Estate Capital Area transformed their operations after trying multiple companies
          </p>
          <p className="text-lg text-gray-700">
            Picture this: You&apos;ve tried multiple companies, dealt with attendance issues for years, and then you find a team member so exceptional that your only question is &quot;Can we clone her?&quot; That&apos;s exactly what happened to Cindy Armour-Helm at Better Homes and Gardens Real Estate Capital Area. This Cindy Armour-Helm client success story shows why she wishes she&apos;d found ShoreAgents from the start.
          </p>
        </div>

        {/* I Wish I Did From The Start */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Cindy Armour-Helm Client Success: &quot;I Wish I Did From The Start&quot;</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Cindy Armour-Helm&apos;s journey to ShoreAgents wasn&apos;t immediate. As a successful agent with Better Homes and Gardens Real Estate Capital Area in the USA, she had tried multiple companies before discovering what systematic excellence actually looked like. Her honest assessment: &quot;I tried multiple companies before finally using ShoreAgents and I wish I did from the start, because there is really no compare.&quot;
                </p>
                <p className="mb-6">
                  The transformation began when Cindy contacted ShoreAgents with a clear vision: &quot;looking at possibly 3 full-time admins to handle current duties and immediate growth options.&quot; She wasn&apos;t just looking for basic support—she needed systematic solutions that could scale with her ambitious growth plans.
                </p>

                <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6 shadow-sm mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <XCircle className="w-6 h-6 text-red-600 mr-2" />
                    What Multiple Other Companies Couldn&apos;t Deliver
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-red-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Attendance Issues</h4>
                        <p className="text-gray-700 text-sm">&quot;You have no idea what I dealt with over the past years, months, weeks&quot; – chronic reliability problems</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <TrendingDown className="w-6 h-6 text-red-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Inconsistent Quality</h4>
                        <p className="text-gray-700 text-sm">Lack of systematic approach to real estate administrative tasks and client management</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-6 h-6 text-red-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">No Scalability</h4>
                        <p className="text-gray-700 text-sm">Unable to provide the comprehensive administrative support needed for growth plans</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-red-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Poor Communication</h4>
                        <p className="text-gray-700 text-sm">Frustrating interactions without the professional standards real estate demands</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-4">
                    <p className="text-lg text-gray-800 italic">
                      &quot;There is really no compare&quot; – Cindy&apos;s assessment after experiencing systematic excellence
                    </p>
                  </div>
                </div>

                <p className="mt-4">
                  The contrast was immediate and dramatic. After years of dealing with unreliable providers, Cindy discovered team members who were not just dependable, but exceptional. Her statement that ShoreAgents is &quot;heads and shoulders above the rest&quot; wasn&apos;t promotional enthusiasm—it was relief after finding systematic solutions that actually worked.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comprehensive Team Structure */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Star className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Cindy Armour-Helm Client Success: Comprehensive Real Estate Team Structure</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The Cindy Armour-Helm client success story showcases exactly what systematic real estate support looks like in practice. Her team structure demonstrates the comprehensive approach that successful agents need to scale their operations effectively while maintaining the personal touch that clients expect.
                </p>
                <p className="mb-6">
                  Cindy&apos;s vision for &quot;3 full-time admins to handle current duties and immediate growth options&quot; materialized into a specialized team covering every aspect of real estate operations. From administrative coordination to lead generation and client management, each role was designed to leverage her expertise while handling the systematic tasks that previously consumed her time.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Better Homes and Gardens Real Estate Team Structure</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <FileText className="w-10 h-10 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900 text-lg">Administrative Assistant</h4>
                      </div>
                      <p className="text-gray-700">
                        Complete administrative coordination, client communications, and operational support for real estate transactions
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Phone className="w-10 h-10 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900 text-lg">Real Estate Cold Caller</h4>
                      </div>
                      <p className="text-gray-700">
                        Systematic lead generation through targeted outreach and professional prospect qualification
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Target className="w-10 h-10 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900 text-lg">Inside Sales Representative</h4>
                      </div>
                      <p className="text-gray-700">
                        Lead nurturing, appointment setting, and client relationship management to maximize conversion rates
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Home className="w-10 h-10 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900 text-lg">Lease Administrator</h4>
                      </div>
                      <p className="text-gray-700">
                        Property management support, lease processing, and tenant coordination for rental properties
                      </p>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-6 font-semibold">
                    Result: Complete operational coverage enabling Cindy to focus on high-value client relationships and business growth
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Excellence */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Award className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Cindy Armour-Helm Client Success: &quot;Can We Clone Her?&quot; Performance Excellence</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The true measure of any client success story isn&apos;t initial enthusiasm—it&apos;s sustained performance that earns recognition and rewards. Cindy&apos;s team member achieved something remarkable: consistent 5/5 performance reviews, bonus recommendations, and the ultimate compliment: &quot;Can we clone her?&quot;
                </p>
                <p className="mb-6">
                  The performance reviews document a journey from initial adjustment to exceptional excellence. After dealing with years of attendance issues and frustrating experiences with other providers, Cindy discovered team members who consistently exceeded expectations across every performance metric.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Excellence Timeline: From Adjustment to Exceptional</h3>
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-6 h-6 text-lime-600 mr-2" />
                          <h4 className="font-bold text-gray-900 text-lg">Month 1: Building Foundation</h4>
                        </div>
                        <div className="bg-lime-600 text-white px-3 py-1 rounded-full text-sm font-bold">4.8/5</div>
                      </div>
                      <p className="text-gray-700 mb-2">All Categories: 5/5 (except Time Management: 4/5)</p>
                      <p className="text-gray-600 text-sm mb-2">Initial adjustment period with high performance across quality, reliability, and communication</p>
                      <div className="bg-gray-50 border-l-4 border-lime-600 p-3 rounded">
                        <p className="text-gray-800 italic text-sm">
                          &quot;She is definitely a bright young lady! I am super excited to get things up and running&quot;
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-6 h-6 text-lime-600 mr-2" />
                          <h4 className="font-bold text-gray-900 text-lg">Month 3: Peak Performance</h4>
                        </div>
                        <div className="bg-lime-600 text-white px-3 py-1 rounded-full text-sm font-bold">5/5</div>
                      </div>
                      <p className="text-gray-700 mb-2">All Categories: Perfect 5/5 Across All Areas</p>
                      <p className="text-gray-600 text-sm mb-2">Exceptional performance with bonus recommendation and outstanding client satisfaction</p>
                      <div className="bg-gray-50 border-l-4 border-lime-600 p-3 rounded">
                        <p className="text-gray-800 italic text-sm">
                          &quot;Can we clone her? She&apos;s absolutely awesome – very reliable, love her&quot;
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-6 h-6 text-lime-600 mr-2" />
                          <h4 className="font-bold text-gray-900 text-lg">Month 5: Leadership Development</h4>
                        </div>
                        <div className="bg-lime-600 text-white px-3 py-1 rounded-full text-sm font-bold">5/5</div>
                      </div>
                      <p className="text-gray-700 mb-2">Sustained Excellence with Leadership Opportunities</p>
                      <p className="text-gray-600 text-sm mb-2">Recommendations for team development and performance improvement initiatives</p>
                      <div className="bg-gray-50 border-l-4 border-lime-600 p-3 rounded">
                        <p className="text-gray-800 italic text-sm">
                          &quot;I can count on her to be present in both hours and performance&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What Made This Team Member &quot;Clone-Worthy&quot;</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Perfect Attendance</h4>
                        <p className="text-gray-700 text-sm">&quot;So thoroughly thrilled – you have no idea what I dealt with over the past years&quot;</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Quality Excellence</h4>
                        <p className="text-gray-700 text-sm">&quot;Works outside office hours to improve&quot; and &quot;hard worker&quot; consistently</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <TrendingUp className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Growth Mindset</h4>
                        <p className="text-gray-700 text-sm">&quot;Love her excitement to learn&quot; and &quot;attends trainings&quot; proactively</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Lightbulb className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Proactive Initiative</h4>
                        <p className="text-gray-700 text-sm">&quot;Suggests plans for growth and improvement&quot; beyond assigned tasks</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-6 font-semibold">
                    Achievement: Bonus recommendations and 5/5 client satisfaction across all service areas
                  </p>
                </div>

                <p className="mt-6">
                  This level of performance excellence demonstrates exactly why Cindy declared ShoreAgents &quot;heads and shoulders above the rest.&quot; When team members consistently earn perfect reviews, bonus recommendations, and client wishes for cloning, it validates the systematic approach that separates professional offshore staffing from basic cost-cutting solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Before and After */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Frown className="w-10 h-10 text-red-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Cindy Armour-Helm Client Success: &quot;You Have No Idea What I Dealt With&quot;</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The most revealing comment in Cindy&apos;s performance reviews wasn&apos;t about her new team member&apos;s capabilities—it was about her relief: &quot;You have no idea what I dealt with over the past years, months, weeks – very pleased with their attendance and attention.&quot; This single statement captures the transformation from frustration to confidence.
                </p>
                <p className="mb-6">
                  Years of dealing with unreliable providers had created a pattern of low expectations and constant disappointment. When Cindy discovered team members who not only showed up consistently but exceeded performance standards across every metric, it represented more than operational improvement—it was the relief of finding systematic excellence.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-4">
                      <Frown className="w-8 h-8 text-red-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">Before: Years of Frustration</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Chronic Attendance Issues</p>
                          <p className="text-gray-700 text-sm">&quot;What I dealt with over the past years, months, weeks&quot; – constant reliability problems</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <XCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Multiple Failed Attempts</p>
                          <p className="text-gray-700 text-sm">&quot;Tried multiple companies&quot; without finding systematic solutions</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Stress and Frustration</p>
                          <p className="text-gray-700 text-sm">&quot;Super frustrated – I can&apos;t help but think they were too&quot; – operational tension</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <TrendingDown className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Low Expectations</p>
                          <p className="text-gray-700 text-sm">Expecting disappointment rather than excellence</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-4">
                      <Smile className="w-8 h-8 text-lime-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">After: Systematic Excellence</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Perfect Attendance</p>
                          <p className="text-gray-700 text-sm">&quot;So thoroughly thrilled&quot; with consistent attendance and attention</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">No Comparison</p>
                          <p className="text-gray-700 text-sm">&quot;Heads and shoulders above the rest&quot; – clear superiority</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Operational Confidence</p>
                          <p className="text-gray-700 text-sm">&quot;I can count on her to be present in both hours and performance&quot;</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Zap className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Growth Excitement</p>
                          <p className="text-gray-700 text-sm">&quot;Super excited to get things up and running and simply dominate this town!&quot;</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Client Satisfaction: Consistent 5/5 Ratings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="bg-lime-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 font-bold text-xl">5/5</div>
                      <p className="text-sm font-semibold text-gray-900">Service Satisfaction</p>
                    </div>
                    <div>
                      <div className="bg-lime-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 font-bold text-xl">5/5</div>
                      <p className="text-sm font-semibold text-gray-900">Referral Likelihood</p>
                    </div>
                    <div>
                      <div className="bg-lime-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 font-bold text-xl">100%</div>
                      <p className="text-sm font-semibold text-gray-900">Retention Rate</p>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-4 font-semibold">
                    Translation: From years of frustration to complete satisfaction and enthusiastic referrals
                  </p>
                </div>

                <p className="mt-6">
                  The Cindy Armour-Helm client success story represents more than operational improvement—it&apos;s validation that systematic excellence creates transformational business experiences. When clients move from years of frustration to asking &quot;Can we clone her?&quot; it demonstrates the profound impact of finding the right offshore staffing partner.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What Cindy's Story Means */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">What Cindy&apos;s Story Really Means for Real Estate Professionals</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Cindy&apos;s relief is palpable in every performance review. &quot;You have no idea what I dealt with over the past years, months, weeks&quot; isn&apos;t just a comment about attendance—it&apos;s the exhaustion of someone who&apos;d been fighting unreliable providers for years. When she discovered a team member worthy of the question &quot;Can we clone her?&quot; it validated what every real estate professional suspects: reliable, excellent support exists, but most companies simply can&apos;t deliver it.
                </p>
                <p className="mb-6">
                  What&apos;s remarkable about Cindy&apos;s transformation isn&apos;t the perfect 5/5 ratings or even the bonus recommendations—it&apos;s that she wishes she&apos;d found us &quot;from the start.&quot; After trying multiple companies and dealing with chronic attendance issues, she discovered that systematic excellence isn&apos;t just possible, it&apos;s sustainable.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Reality Behind &quot;I Wish I Did From The Start&quot;</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Years of Lost Time</h4>
                        <p className="text-gray-700 text-sm">Time spent managing unreliable providers instead of growing her business</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <AlertCircle className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Constant Stress</h4>
                        <p className="text-gray-700 text-sm">&quot;Super frustrated&quot; became her normal state with previous providers</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <DollarSign className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Financial Waste</h4>
                        <p className="text-gray-700 text-sm">Money spent on unreliable services that created more problems than solutions</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Missed Opportunities</h4>
                        <p className="text-gray-700 text-sm">Growth delayed because she couldn&apos;t trust her support infrastructure</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold">
                      The Breakthrough: Finally finding systematic excellence that works consistently
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  Cindy&apos;s journey resonates because it&apos;s so familiar. How many real estate professionals are currently dealing with their own version of &quot;attendance issues for years&quot;? How many are frustrated with providers who promise training but can&apos;t deliver reliable results? How many are spending premium time on administrative tasks because they simply can&apos;t trust anyone else to handle them properly?
                </p>
                <p className="mt-4">
                  The difference between Cindy&apos;s experience and what most real estate professionals settle for isn&apos;t luck—it&apos;s systematic methodology. When she describes our approach as &quot;heads and shoulders above the rest,&quot; she&apos;s highlighting the gap between commodity outsourcing and professional virtual assistant services that actually enhance your business.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA Section */}
        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Stop settling for unreliable providers that create more stress than solutions.</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover the systematic real estate virtual assistant support that earns &quot;Can we clone her?&quot; recognition and transforms frustrated business owners into enthusiastic advocates.
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
