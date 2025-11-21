"use client";

import { SideNav } from "@/components/layout/SideNav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Target,
  Users,
  Award,
  TrendingUp,
  Lightbulb,
  Star,
  Clock,
  FileText,
  ArrowRight,
  Building2,
  Globe,
  CheckCircle2,
  XCircle,
  Smile,
  Frown,
  AlertCircle,
  TrendingDown,
  BarChart3,
  UserCheck,
  Heart
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function HiringSuccessAfterFailuresPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[{"name":"Case Studies","url":"https://www.shoreagents.com/case-studies"},{"name":"Cindy Armour Helm","url":"https://www.shoreagents.com/hiring-success-after-failures"}]} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              Better Homes and Gardens Real Estate Client Success
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              "Can We Clone Her?"<br />
              <span className="text-lime-600">From Multiple Failures to Perfect 5/5 Excellence</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              When Cindy Armour-Helm from Better Homes and Gardens Real Estate tried multiple companies before 
              finding ShoreAgents, she discovered something extraordinary. Her team member earned perfect 5/5 reviews 
              and a bonus recommendation with the comment: "Can we clone her?" This is the story of systematic real 
              estate excellence after years of frustration.
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
                  CA
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                "I tried multiple companies before finally using ShoreAgents and I wish I did from the start, 
                because there is really no compare. They are heads and shoulders above the rest! Highly recommended!"
              </blockquote>
              <div className="text-lg font-bold text-gray-900">Cindy Armour-Helm</div>
              <div className="text-gray-600 mb-2">Better Homes and Gardens Real Estate Capital Area</div>
              <div className="flex items-center gap-2 text-gray-600">
                <Globe className="w-4 h-4" />
                <span>USA</span>
                <span className="mx-2">•</span>
                <span>Hired a Team</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Overview */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Picture this: You've tried multiple companies, dealt with attendance issues for years, and then you find 
            a team member so exceptional that your only question is "Can we clone her?" That's exactly what happened 
            to Cindy Armour-Helm at Better Homes and Gardens Real Estate Capital Area. This is why she wishes she'd 
            found ShoreAgents from the start.
          </p>
        </div>

        <Separator className="my-12" />

        {/* "I Wish I Did From The Start" */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <AlertCircle className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">"I Wish I Did From The Start"</h2>
              <p className="text-lg text-gray-600">The transformation from years of frustration to systematic excellence</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Cindy Armour-Helm's journey to ShoreAgents wasn't immediate. As a successful agent with Better Homes 
              and Gardens Real Estate Capital Area in the USA, she had tried multiple companies before discovering 
              what systematic excellence actually looked like. Her honest assessment: "I tried multiple companies 
              before finally using ShoreAgents and I wish I did from the start, because there is really no compare."
            </p>
            
            <p className="mb-8">
              The transformation began when Cindy contacted ShoreAgents with a clear vision: "looking at possibly 3 
              full-time admins to handle current duties and immediate growth options." She wasn't just looking for 
              basic support—she needed systematic solutions that could scale with her ambitious growth plans.
            </p>

            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Multiple Other Companies Couldn't Deliver</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Attendance Issues</h4>
                      <p className="text-gray-700 text-sm">"You have no idea what I dealt with over the past years, months, weeks" – chronic reliability problems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingDown className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Inconsistent Quality</h4>
                      <p className="text-gray-700 text-sm">Lack of systematic approach to real estate administrative tasks and client management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">No Scalability</h4>
                      <p className="text-gray-700 text-sm">Unable to provide the comprehensive administrative support needed for growth plans</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Poor Communication</h4>
                      <p className="text-gray-700 text-sm">Frustrating interactions without the professional standards real estate demands</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-red-600 rounded">
                  <p className="text-gray-800 italic font-medium">
                    "There is really no compare" – Cindy's assessment after experiencing systematic excellence
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              The contrast was immediate and dramatic. After years of dealing with unreliable providers, Cindy 
              discovered team members who were not just dependable, but exceptional. Her statement that ShoreAgents 
              is "heads and shoulders above the rest" wasn't promotional enthusiasm—it was relief after finding 
              systematic solutions that actually worked.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Comprehensive Team Structure */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Users className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Comprehensive Real Estate Team Structure</h2>
              <p className="text-lg text-gray-600">Specialized roles covering every aspect of real estate operations</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              The Cindy Armour-Helm client success story showcases exactly what systematic real estate support looks 
              like in practice. Her team structure demonstrates the comprehensive approach that successful agents need 
              to scale their operations effectively while maintaining the personal touch that clients expect.
            </p>
            
            <p className="mb-8">
              Cindy's vision for "3 full-time admins to handle current duties and immediate growth options" materialized 
              into a specialized team covering every aspect of real estate operations. From administrative coordination to 
              lead generation and client management, each role was designed to leverage her expertise while handling the 
              systematic tasks that previously consumed her time.
            </p>

            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Better Homes and Gardens Real Estate Team Structure</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <FileText className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Administrative Assistant</h4>
                      <p className="text-gray-700 text-sm">Complete administrative coordination, client communications, and operational support for real estate transactions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Target className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Real Estate Cold Caller</h4>
                      <p className="text-gray-700 text-sm">Systematic lead generation through targeted outreach and professional prospect qualification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Inside Sales Representative</h4>
                      <p className="text-gray-700 text-sm">Lead nurturing, appointment setting, and client relationship management to maximize conversion rates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Building2 className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Lease Administrator</h4>
                      <p className="text-gray-700 text-sm">Property management support, lease processing, and tenant coordination for rental properties</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-lime-50 border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Result: Complete operational coverage enabling Cindy to focus on high-value client relationships and business growth
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              This comprehensive team structure demonstrates the systematic approach that separates professional real 
              estate operations from basic administrative support. Each role was specifically designed to address the 
              complexities of modern real estate business while maintaining the personal service standards that Better 
              Homes and Gardens clients expect.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* "Can We Clone Her?" Performance Excellence */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Award className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">"Can We Clone Her?" Performance Excellence</h2>
              <p className="text-lg text-gray-600">Consistent 5/5 reviews and bonus recommendations</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              The true measure of any client success story isn't initial enthusiasm—it's sustained performance that 
              earns recognition and rewards. Cindy's team member achieved something remarkable: consistent 5/5 performance 
              reviews, bonus recommendations, and the ultimate compliment: "Can we clone her?"
            </p>
            
            <p className="mb-8">
              The performance reviews document a journey from initial adjustment to exceptional excellence. After dealing 
              with years of attendance issues and frustrating experiences with other providers, Cindy discovered team 
              members who consistently exceeded expectations across every performance metric.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Excellence Timeline</h3>
                <div className="space-y-6">
                  {/* Month 1 */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-lime-600">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Month 1: Building Foundation</h4>
                        <p className="text-gray-700 mb-2"><strong>All Categories: 5/5</strong> (except Time Management: 4/5)</p>
                        <p className="text-gray-700 mb-3">Initial adjustment period with high performance across quality, reliability, and communication</p>
                        <div className="bg-lime-50 p-3 rounded border-l-4 border-lime-600">
                          <p className="text-gray-800 italic text-sm">
                            "She is definitely a bright young lady! I am super excited to get things up and running"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Month 3 */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-lime-600">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Month 3: Peak Performance</h4>
                        <p className="text-gray-700 mb-2"><strong>All Categories: Perfect 5/5 Across All Areas</strong></p>
                        <p className="text-gray-700 mb-3">Exceptional performance with bonus recommendation and outstanding client satisfaction</p>
                        <div className="bg-lime-50 p-3 rounded border-l-4 border-lime-600">
                          <p className="text-gray-800 italic text-sm font-bold">
                            "Can we clone her? She's absolutely awesome – very reliable, love her"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Month 5 */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-lime-600">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Month 5: Leadership Development</h4>
                        <p className="text-gray-700 mb-2"><strong>Sustained Excellence with Leadership Opportunities</strong></p>
                        <p className="text-gray-700 mb-3">Recommendations for team development and performance improvement initiatives</p>
                        <div className="bg-lime-50 p-3 rounded border-l-4 border-lime-600">
                          <p className="text-gray-800 italic text-sm">
                            "I can count on her to be present in both hours and performance"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-gray-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Made This Team Member "Clone-Worthy"</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Perfect Attendance</h4>
                      <p className="text-gray-700 text-sm">"So thoroughly thrilled – you have no idea what I dealt with over the past years"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Quality Excellence</h4>
                      <p className="text-gray-700 text-sm">"Works outside office hours to improve" and "hard worker" consistently</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Growth Mindset</h4>
                      <p className="text-gray-700 text-sm">"Love her excitement to learn" and "attends trainings" proactively</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Proactive Initiative</h4>
                      <p className="text-gray-700 text-sm">"Suggests plans for growth and improvement" beyond assigned tasks</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-lime-50 border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Achievement: Bonus recommendations and 5/5 client satisfaction across all service areas
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* "You Have No Idea What I Dealt With" */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Heart className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">"You Have No Idea What I Dealt With"</h2>
              <p className="text-lg text-gray-600">The transformation from frustration to confidence</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              The most revealing comment in Cindy's performance reviews wasn't about her new team member's capabilities—it 
              was about her relief: "You have no idea what I dealt with over the past years, months, weeks – very pleased 
              with their attendance and attention." This single statement captures the transformation from frustration to 
              confidence.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Before */}
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Frown className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-gray-900">Before: Years of Frustration</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Chronic Attendance Issues</h4>
                        <p className="text-gray-700 text-xs">"What I dealt with over the past years, months, weeks"</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Multiple Failed Attempts</h4>
                        <p className="text-gray-700 text-xs">"Tried multiple companies" without finding systematic solutions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Stress and Frustration</h4>
                        <p className="text-gray-700 text-xs">"Super frustrated – I can't help but think they were too"</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Low Expectations</h4>
                        <p className="text-gray-700 text-xs">Expecting disappointment rather than excellence</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* After */}
              <Card className="bg-lime-50 border-lime-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Smile className="w-6 h-6 text-lime-600" />
                    <h3 className="text-xl font-bold text-gray-900">After: Systematic Excellence</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Perfect Attendance</h4>
                        <p className="text-gray-700 text-xs">"So thoroughly thrilled" with consistent attendance and attention</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">No Comparison</h4>
                        <p className="text-gray-700 text-xs">"Heads and shoulders above the rest" – clear superiority</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Operational Confidence</h4>
                        <p className="text-gray-700 text-xs">"I can count on her to be present in both hours and performance"</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Growth Excitement</h4>
                        <p className="text-gray-700 text-xs">"Super excited to get things up and running and simply dominate this town!"</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Client Satisfaction: Consistent 5/5 Ratings</h3>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-lime-600 mb-2">5/5</div>
                    <p className="text-gray-700 font-medium">Service Satisfaction</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-lime-600 mb-2">5/5</div>
                    <p className="text-gray-700 font-medium">Referral Likelihood</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-lime-600 mb-2">100%</div>
                    <p className="text-gray-700 font-medium">Retention Rate</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-lime-50 border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Translation: From years of frustration to complete satisfaction and enthusiastic referrals
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* What This Means */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Lightbulb className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Cindy's Story Really Means</h2>
              <p className="text-lg text-gray-600">The reality behind "I wish I did from the start"</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Cindy's relief is palpable in every performance review. "You have no idea what I dealt with over the past 
              years, months, weeks" isn't just a comment about attendance—it's the exhaustion of someone who'd been 
              fighting unreliable providers for years. When she discovered a team member worthy of the question "Can we 
              clone her?" it validated what every real estate professional suspects: reliable, excellent support exists, 
              but most companies simply can't deliver it.
            </p>

            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Reality Behind "I Wish I Did From The Start"</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Years of Lost Time</h4>
                      <p className="text-gray-700 text-sm">Time spent managing unreliable providers instead of growing her business</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Constant Stress</h4>
                      <p className="text-gray-700 text-sm">"Super frustrated" became her normal state with previous providers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingDown className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Financial Waste</h4>
                      <p className="text-gray-700 text-sm">Money spent on unreliable services that created more problems than solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Missed Opportunities</h4>
                      <p className="text-gray-700 text-sm">Growth delayed because she couldn't trust her support infrastructure</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    The Breakthrough: Finally finding systematic excellence that works consistently
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              Cindy's journey resonates because it's so familiar. How many real estate professionals are currently dealing 
              with their own version of "attendance issues for years"? How many are frustrated with providers who promise 
              training but can't deliver reliable results? The difference between Cindy's experience and what most real 
              estate professionals settle for isn't luck—it's systematic methodology.
            </p>

            <p className="mt-6">
              When she describes our approach as "heads and shoulders above the rest," she's highlighting the gap between 
              commodity outsourcing and professional virtual assistant services that actually enhance your business.
            </p>
          </div>
        </section>

      </div>

      {/* Final CTA */}
      <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white mx-4 mb-8">
        <CardContent className="p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stop Settling for Unreliable Providers
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Discover the systematic real estate virtual assistant support that earns "Can we clone her?" recognition 
            and transforms frustrated business owners into enthusiastic advocates.
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
