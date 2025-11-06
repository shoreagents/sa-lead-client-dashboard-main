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
  Sparkles
} from 'lucide-react';
import Image from 'next/image';

export default function QuickStaffOnboardingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-red-600 text-white px-4 py-2 text-lg mb-6">
            AUSTRALIAN REAL ESTATE EXCELLENCE: From Skeptical to Sensational
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The Harcourts Partnership Journey: Getting Better Every Day
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            When Harcourts Dapto needed administrative support, owner Michael Garside wasn&apos;t sure what to expect. Today, he describes his virtual assistant as a &quot;valued team member&quot; who earned an invitation to the company Christmas trip. This Harcourts client success story shows what happens when quality meets opportunity in a thriving, ongoing partnership.
          </p>
          
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
              alt="Harcourts Dapto Operations"
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
                    alt="Harcourts Logo"
                    width={100}
                    height={100}
                    className="mx-auto rounded-full"
                  />
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  &quot;I have used ShoreAgents successfully to support my Real Estate Sales business for 5 years in which 4 and a half of those were with the same VA. I recently replaced my VA as she had some other opportunities and I must say I am amazed that in a short time my new VA is up to speed and if not doing more!&quot;
                </blockquote>
                <div className="text-gray-900 font-bold">Michael Garside</div>
                <div className="text-gray-600">Harcourts Dapto, AU</div>
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
            Harcourts Dapto Client Success: Ongoing Excellence Journey
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            How an Australian real estate principal discovered that exceptional virtual assistance transforms business operations and builds lasting partnerships
          </p>
          <p className="text-lg text-gray-700">
            Picture this: You run a busy Harcourts office in Dapto, Australia. Administrative tasks are piling up. You&apos;re skeptical about offshore support but decide to try &quot;one agent.&quot; Today, that same virtual assistant is joining your team Christmas trip as a valued member of your ongoing success story. That&apos;s the Harcourts client success journey that proves exceptional people transcend geography.
          </p>
        </div>

        {/* The Beginning */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The Harcourts Client Success Beginning: &quot;Gets Stuck Into the Tasks&quot;</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  When Michael Garside from Harcourts Dapto first brought his new virtual assistant on board, he had the same concerns every real estate principal faces: Will they understand our processes? Can they handle the workload? Will this actually save time or create more work?
                </p>
                <p className="mb-6">
                  Within the first month, those concerns evaporated. Michael discovered something remarkable: his virtual assistant wasn&apos;t just completing tasks—he was taking initiative. When Michael was slow to provide direction, instead of waiting around, the VA would assess the situation and &quot;have a go at the task himself.&quot; This proactive approach set the tone for everything that followed in this Harcourts client success story through our proven real estate virtual assistant methodology.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">First Month: Immediate Excellence Recognition</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <TrendingUp className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Fast Learning</h4>
                        <p className="text-gray-700 text-sm">&quot;Picking up everything quite well, getting quicker each day&quot;</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Lightbulb className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Initiative</h4>
                        <p className="text-gray-700 text-sm">&quot;Had a go at the task himself when guidance was slow&quot;</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MessageSquare className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Communication</h4>
                        <p className="text-gray-700 text-sm">&quot;Great communicator&quot; with clear, efficient methods</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Prioritization</h4>
                        <p className="text-gray-700 text-sm">&quot;Picking up the important tasks really well&quot;</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold">
                      Michael&apos;s Assessment: &quot;Happy and obliging, willing to give the harder tasks a try&quot;
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  What impressed Michael most wasn&apos;t just the technical competence—it was the attitude. His virtual assistant approached every challenge with enthusiasm, willing to tackle harder tasks rather than staying in a comfort zone. This willingness to stretch and grow would become a defining characteristic of their working relationship.
                </p>
                <p className="mt-4">
                  By the end of the first month, Michael knew he&apos;d found something special. The VA wasn&apos;t just completing administrative work—he was demonstrating the qualities that make great team members: initiative, clear communication, and a genuine desire to contribute to the business success through our comprehensive real estate outsourcing approach.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* First Annual Review */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Star className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Harcourts Client Success First Annual Review: &quot;Should Be Team Member of the Month&quot;</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  By the first annual performance review, Michael&apos;s perspective had evolved dramatically. What started as cautious optimism had transformed into genuine enthusiasm. In his assessment, Michael made a statement that speaks volumes: &quot;Honestly, he should be your team member of the month. Very happy with him.&quot;
                </p>
                <p className="mb-6">
                  This wasn&apos;t polite feedback or standard praise. Michael had discovered what many successful real estate professionals learn: exceptional virtual assistants don&apos;t just handle tasks—they become integral to business operations. The daily pitch reports were flowing seamlessly, new responsibilities were being embraced with enthusiasm, and the team&apos;s responsiveness had reached new levels.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">First Annual Review: Three Major Accomplishments</h3>
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <BarChart3 className="w-8 h-8 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900 text-lg">Daily Pitch Report Mastery</h4>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-700"><strong>Challenge:</strong> Getting comprehensive daily reports completed consistently, even during heavy workload periods.</p>
                        <p className="text-sm text-gray-700"><strong>Result:</strong> Seamless daily execution with automatic pickup the next day when needed. No micromanagement required.</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Rocket className="w-8 h-8 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900 text-lg">Eager Learning & Growth</h4>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-700"><strong>Approach:</strong> &quot;Eagerness to learn is great&quot; – consistently seeking new challenges and responsibilities.</p>
                        <p className="text-sm text-gray-700"><strong>Impact:</strong> Continuous skill development while maintaining quality standards on all existing tasks.</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Zap className="w-8 h-8 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900 text-lg">Team Responsiveness</h4>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-700"><strong>Quality:</strong> &quot;Fast, efficient and the team loves the responsiveness. Always pleasant.&quot;</p>
                        <p className="text-sm text-gray-700"><strong>Team Impact:</strong> Enhanced overall office productivity and positive team dynamics.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Michael&apos;s Management Discovery</h3>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <p className="text-gray-700 mb-4 italic">
                      &quot;I really like that he gets stuck into the tasks and follows the process thoroughly. There is no need to micromanage, he gets the jobs done and done very well.&quot;
                    </p>
                    <p className="text-gray-700 mb-4 italic">
                      &quot;I like that he can start the day and get on with the job as he knows what to do and what to pick up on if something else is needed.&quot;
                    </p>
                    <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded">
                      <p className="text-gray-800 font-semibold">
                        Business Impact: Freedom from micromanagement allows focus on high-value activities
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6">
                  Perhaps most telling was Michael&apos;s recommendation at this review: salary increase. This wasn&apos;t just recognition of good performance—it was an investment in someone who had become essential to the business operation. The virtual assistant had proven that geography doesn&apos;t determine quality, and that exceptional team members can emerge from anywhere.
                </p>
                <p className="mt-4">
                  The transformation was complete: from cautious trial to enthusiastic advocate. Michael had discovered what makes our virtual assistant approach different—it&apos;s not about finding cheap labor, it&apos;s about finding exceptional people who happen to provide cost-effective solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Latest Review - Christmas Trip */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Gift className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Harcourts Client Success Latest Review: Christmas Trip Recognition</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  In the most recent performance review, something remarkable had happened. The virtual assistant who started as a cautious administrative hire had become what Michael describes as &quot;a dedicated &amp; valued team member.&quot; The proof? An invitation to join the company&apos;s overseas Christmas trip—recognition typically reserved for core team members who&apos;ve made significant contributions to business success.
                </p>
                <p className="mb-6">
                  This wasn&apos;t a token gesture or a nice bonus. As Michael explained, the Christmas trip invitation was specifically &quot;to recognise his value to the team&quot; and &quot;helped strengthen his bond with the wider team.&quot; When a business owner invests in bringing an offshore team member to Australia for team building, it demonstrates complete integration and genuine appreciation.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest Review: Sustained Excellence Recognition</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <Target className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Proactive Excellence</h4>
                        <p className="text-gray-700 text-sm">First to volunteer during disruptions, ensuring all work completes without delay</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Response Excellence</h4>
                        <p className="text-gray-700 text-sm">Exceptionally prompt responses keeping tasks flowing smoothly and supporting team productivity</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <RefreshCw className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Reliable Consistency</h4>
                        <p className="text-gray-700 text-sm">Excellent attendance record contributing to operational stability and team confidence</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MessageSquare className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Communication Excellence</h4>
                        <p className="text-gray-700 text-sm">Clear, professional communication keeping teams well-informed on progress and updates</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold italic">
                      &quot;We&apos;re fortunate to have him on board &amp; look forward to his continued growth &amp; contributions&quot;
                    </p>
                    <p className="text-gray-800 mt-2">Michael&apos;s Latest Assessment: Complete Integration and Future Planning</p>
                  </div>
                </div>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Michael&apos;s Honest Assessment: Real Excellence, Not Perfection</h3>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <p className="text-gray-700 mb-4">
                      &quot;There have been a few times that he has made errors although he is always quick to acknowledge &amp; rectify… While there are occasional oversights, they are infrequent &amp; usually minor. With gentle reminders, he is quick to correct &amp; learn from them.&quot;
                    </p>
                    <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded">
                      <p className="text-gray-800 font-semibold">
                        What This Really Means: Human excellence with accountability—the kind of team member every business wants.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6">
                  Michael&apos;s latest assessment reveals something crucial about sustainable partnerships: they&apos;re built on realistic expectations and genuine appreciation. He acknowledges minor imperfections while celebrating major contributions. The Christmas trip invitation wasn&apos;t about perfection—it was about consistent value, reliability, and the kind of team integration that transforms business operations.
                </p>
                <p className="mt-4">
                  When Michael states they&apos;re &quot;fortunate to have him on board &amp; look forward to his continued growth &amp; contributions in the coming year,&quot; it captures the essence of successful long-term partnerships through our comprehensive real estate outsourcing approach: mutual respect, shared success, and genuine optimism about the future.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Continuing Partnership Journey */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Rocket className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Harcourts Client Success: The Continuing Partnership Journey</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  This Harcourts client success story isn&apos;t complete—it&apos;s ongoing and thriving. When Michael speaks about &quot;continued growth &amp; contributions in the coming year,&quot; he&apos;s describing something many business owners discover: exceptional virtual assistants become long-term business partners who grow alongside the company.
                </p>
                <p className="mb-6">
                  The progression from cautious trial to Christmas trip invitation represents more than successful outsourcing—it demonstrates cultural integration that transcends geographic boundaries. Michael&apos;s virtual assistant hasn&apos;t just handled administrative tasks; he&apos;s become part of the ongoing Harcourts Dapto success story.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Transformation Journey: From Trial to Partnership</h3>
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Calendar className="w-8 h-8 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900 text-lg">First Month</h4>
                      </div>
                      <p className="text-gray-700 italic">&quot;Happy and obliging, willing to give harder tasks a try&quot;</p>
                    </div>

                    <ArrowRight className="w-6 h-6 text-lime-600 mx-auto" />

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Award className="w-8 h-8 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900 text-lg">Annual Review</h4>
                      </div>
                      <p className="text-gray-700 italic">&quot;Should be team member of the month. Very happy with him.&quot;</p>
                    </div>

                    <ArrowRight className="w-6 h-6 text-lime-600 mx-auto" />

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Gift className="w-8 h-8 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900 text-lg">Recent Review</h4>
                      </div>
                      <p className="text-gray-700 italic">&quot;Dedicated &amp; valued team member&quot; invited to Christmas trip</p>
                    </div>

                    <ArrowRight className="w-6 h-6 text-lime-600 mx-auto" />

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <TrendingUp className="w-8 h-8 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900 text-lg">Ongoing</h4>
                      </div>
                      <p className="text-gray-700 italic">&quot;Look forward to continued growth &amp; contributions&quot;</p>
                    </div>
                  </div>
                </div>

                <p className="mt-6">
                  The ongoing client satisfaction ratings tell their own story: consistent perfect scores for satisfaction and likelihood to recommend. This isn&apos;t honeymoon period enthusiasm—it&apos;s sustained appreciation built on reliable delivery and genuine partnership. Michael knows he can depend on his virtual assistant because years of evidence prove it.
                </p>
                <p className="mt-4">
                  What makes this Harcourts client success story particularly compelling is its realistic progression. Michael didn&apos;t find instant perfection—he found consistent growth, honest communication, and the kind of reliability that allows business owners to focus on what they do best. That&apos;s the foundation of partnerships that last decades, not just years, through our proven virtual assistant methodology.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How to Build Your Own Success Story */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <FileText className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">How You Can Build Your Own Ongoing Success Story</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Michael&apos;s journey from skeptical trial to Christmas trip invitation wasn&apos;t luck—it was the result of smart decisions and realistic expectations. Here&apos;s exactly how to replicate his approach and build your own thriving, long-term partnership with exceptional virtual assistance.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Michael&apos;s Proven Blueprint: Start Smart, Scale Gradually</h3>
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
                        <h4 className="font-bold text-gray-900 text-lg">Start with &quot;One Agent&quot;</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Michael began conservatively with one administrative role. This allowed him to test the waters without overwhelming his processes or budget.</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <Lightbulb className="w-8 h-8 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900 text-lg">Allow Initiative</h4>
                      </div>
                      <p className="text-gray-700 text-sm">When Michael was slow to provide direction, he allowed his VA to &quot;have a go at the task himself.&quot; This built confidence and independence.</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <TrendingUp className="w-8 h-8 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900 text-lg">Progressive Responsibility</h4>
                      </div>
                      <p className="text-gray-700 text-sm">From daily pitch reports to complex new tasks, Michael gradually increased responsibility based on demonstrated competence.</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <Gift className="w-8 h-8 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900 text-lg">Recognition &amp; Investment</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Salary increases and Christmas trip invitations showed genuine appreciation for exceptional performance, building long-term loyalty and partnership.</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold italic">
                      Michael&apos;s Key Insight: &quot;No need to micromanage, he gets the jobs done and done very well&quot;
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Michael&apos;s Approach Works: Realistic Expectations</h3>
                  <p className="text-gray-700 mb-4">
                    Michael didn&apos;t expect perfection. He acknowledged &quot;a few times that he has made errors&quot; while celebrating that his VA was &quot;always quick to acknowledge &amp; rectify.&quot; This realistic perspective allowed their partnership to thrive.
                  </p>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-800 font-semibold">
                      The Reality Check: Exceptional team members make occasional mistakes but take responsibility and learn. That&apos;s exactly what you want in any employee, local or offshore.
                    </p>
                  </div>
                </div>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Your Three-Step Action Plan</h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center mb-2">
                        <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
                        <h4 className="font-bold text-gray-900">Define Your Pilot Project</h4>
                      </div>
                      <p className="text-gray-700 text-sm ml-11">Identify your daily pitch reports or consistent administrative tasks that could benefit from dedicated attention and systematic handling.</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center mb-2">
                        <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
                        <h4 className="font-bold text-gray-900">Plan Your Growth Path</h4>
                      </div>
                      <p className="text-gray-700 text-sm ml-11">Map out additional responsibilities you could delegate as confidence and competence develop over the coming months and years.</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center mb-2">
                        <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
                        <h4 className="font-bold text-gray-900">Commit to the Journey</h4>
                      </div>
                      <p className="text-gray-700 text-sm ml-11">Remember: Michael&apos;s Christmas trip invitation represents years of building trust and partnership. Plan for the long term and ongoing growth.</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold">
                      The most crucial element of Michael&apos;s success? He treated his virtual assistant as a team member from day one, not just a service provider. The Christmas trip invitation wasn&apos;t a business expense—it was recognition of someone who had earned their place on the team through consistent excellence and genuine contribution to ongoing success.
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  Michael&apos;s ongoing partnership proves that exceptional virtual assistance isn&apos;t about finding the perfect person—it&apos;s about creating the conditions where talented people can excel. Clear communication, progressive responsibility, and genuine appreciation for good work create the foundation for partnerships that thrive and grow over time, just like his continues to do.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA Section */}
        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Ready to start your own ongoing success story like Michael at Harcourts Dapto?</h2>
          <p className="text-xl mb-8 opacity-90">
            Begin with &quot;one agent&quot; like Michael did, and build the kind of thriving partnership that leads to Christmas trip invitations and long-term business transformation.
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
