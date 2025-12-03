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
  Phone,
  Heart,
  Trophy,
  Rocket,
  ThumbsUp,
  BarChart3
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function QuickStaffOnboardingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[{"name":"Case Studies","url":"https://www.shoreagents.com/case-studies"},{"name":"Michael Garside","url":"https://www.shoreagents.com/quick-staff-onboarding"}]} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              Harcourts Dapto Client Success - Australia
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              From Skeptical to Sensational:<br />
              <span className="text-lime-600">The Christmas Trip That Proves Partnership Excellence</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              When Harcourts Dapto needed administrative support, owner Michael Garside wasn't sure what to expect. 
              Today, he describes his virtual assistant as a "valued team member" who earned an invitation to the 
              company Christmas trip. This is what happens when quality meets opportunity in a thriving, ongoing 
              partnership.
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
                  MG
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                "I have used ShoreAgents successfully to support my Real Estate Sales business for 5 years in which 
                4 and a half of those were with the same VA. I recently replaced my VA as she had some other 
                opportunities and I must say I am amazed that in a short time my new VA is up to speed and if not 
                doing more!"
              </blockquote>
              <div className="text-lg font-bold text-gray-900">Michael Garside</div>
              <div className="text-gray-600 mb-2">Harcourts Dapto</div>
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
            Picture this: You run a busy Harcourts office in Dapto, Australia. Administrative tasks are piling up. 
            You're skeptical about offshore support but decide to try "one agent." Today, that same virtual assistant 
            is joining your team Christmas trip as a valued member of your ongoing success story. That's the Harcourts 
            client success journey that proves exceptional people transcend geography.
          </p>
        </div>

        <Separator className="my-12" />

        {/* "Gets Stuck Into the Tasks" */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Zap className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">"Gets Stuck Into the Tasks"</h2>
              <p className="text-lg text-gray-600">Immediate excellence from day one</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              When Michael Garside from Harcourts Dapto first brought his new virtual assistant on board, he had the 
              same concerns every real estate principal faces: Will they understand our processes? Can they handle the 
              workload? Will this actually save time or create more work?
            </p>
            
            <p className="mb-8">
              Within the first month, those concerns evaporated. Michael discovered something remarkable: his virtual 
              assistant wasn't just completing tasks—he was taking initiative. When Michael was slow to provide direction, 
              instead of waiting around, the VA would assess the situation and "have a go at the task himself." This 
              proactive approach set the tone for everything that followed.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">First Month: Immediate Excellence Recognition</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Fast Learning</h4>
                      <p className="text-gray-700 text-sm">"Picking up everything quite well, getting quicker each day"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Initiative</h4>
                      <p className="text-gray-700 text-sm">"Had a go at the task himself when guidance was slow"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Communication</h4>
                      <p className="text-gray-700 text-sm">"Great communicator" with clear, efficient methods</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Prioritization</h4>
                      <p className="text-gray-700 text-sm">"Picking up the important tasks really well"</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Michael's Assessment: "Happy and obliging, willing to give the harder tasks a try"
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              What impressed Michael most wasn't just the technical competence—it was the attitude. His virtual assistant 
              approached every challenge with enthusiasm, willing to tackle harder tasks rather than staying in a comfort 
              zone. This willingness to stretch and grow would become a defining characteristic of their working relationship.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* First Annual Review */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Trophy className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">"Should Be Team Member of the Month"</h2>
              <p className="text-lg text-gray-600">From cautious optimism to genuine enthusiasm</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              By the first annual performance review, Michael's perspective had evolved dramatically. What started as 
              cautious optimism had transformed into genuine enthusiasm. In his assessment, Michael made a statement 
              that speaks volumes: "Honestly, he should be your team member of the month. Very happy with him."
            </p>
            
            <p className="mb-8">
              This wasn't polite feedback or standard praise. Michael had discovered what many successful real estate 
              professionals learn: exceptional virtual assistants don't just handle tasks—they become integral to business 
              operations. The daily pitch reports were flowing seamlessly, new responsibilities were being embraced with 
              enthusiasm, and the team's responsiveness had reached new levels.
            </p>

            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">First Annual Review: Three Major Accomplishments</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-lime-600">
                    <div className="flex items-start gap-3 mb-3">
                      <BarChart3 className="w-8 h-8 text-lime-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Daily Pitch Report Mastery</h4>
                        <p className="text-gray-700 mb-2"><strong>Challenge:</strong> Getting comprehensive daily reports completed consistently, even during heavy workload periods.</p>
                        <p className="text-gray-700 text-sm"><strong>Result:</strong> Seamless daily execution with automatic pickup the next day when needed. No micromanagement required.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-green-600">
                    <div className="flex items-start gap-3 mb-3">
                      <Lightbulb className="w-8 h-8 text-green-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Eager Learning & Growth</h4>
                        <p className="text-gray-700 mb-2"><strong>Approach:</strong> "Eagerness to learn is great" – consistently seeking new challenges and responsibilities.</p>
                        <p className="text-gray-700 text-sm"><strong>Impact:</strong> Continuous skill development while maintaining quality standards on all existing tasks.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-600">
                    <div className="flex items-start gap-3 mb-3">
                      <Zap className="w-8 h-8 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Team Responsiveness</h4>
                        <p className="text-gray-700 mb-2"><strong>Quality:</strong> "Fast, efficient and the team loves the responsiveness. Always pleasant."</p>
                        <p className="text-gray-700 text-sm"><strong>Team Impact:</strong> Enhanced overall office productivity and positive team dynamics.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Michael's Management Discovery</h3>
                <div className="space-y-4 text-gray-700">
                  <p className="italic">
                    "I really like that he gets stuck into the tasks and follows the process thoroughly. There is no 
                    need to micromanage, he gets the jobs done and done very well."
                  </p>
                  <p className="italic">
                    "I like that he can start the day and get on with the job as he knows what to do and what to pick 
                    up on if something else is needed."
                  </p>
                  <div className="bg-white border-l-4 border-lime-600 p-4 rounded">
                    <p className="text-gray-900 font-semibold">
                      Business Impact: Freedom from micromanagement allows focus on high-value activities
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              Perhaps most telling was Michael's recommendation at this review: salary increase. This wasn't just recognition 
              of good performance—it was an investment in someone who had become essential to the business operation. The 
              virtual assistant had proven that geography doesn't determine quality, and that exceptional team members can 
              emerge from anywhere.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Christmas Trip Recognition */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Heart className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Christmas Trip Recognition</h2>
              <p className="text-lg text-gray-600">"A dedicated & valued team member"</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              In the most recent performance review, something remarkable had happened. The virtual assistant who started 
              as a cautious administrative hire had become what Michael describes as "a dedicated & valued team member." 
              The proof? An invitation to join the company's overseas Christmas trip—recognition typically reserved for 
              core team members who've made significant contributions to business success.
            </p>
            
            <p className="mb-8">
              This wasn't a token gesture or a nice bonus. As Michael explained, the Christmas trip invitation was 
              specifically "to recognise his value to the team" and "helped strengthen his bond with the wider team." 
              When a business owner invests in bringing an offshore team member to Australia for team building, it 
              demonstrates complete integration and genuine appreciation.
            </p>

            <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Latest Review: Sustained Excellence Recognition</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-6 h-6 text-lime-600" />
                      <h4 className="font-bold text-gray-900">Proactive Excellence</h4>
                    </div>
                    <p className="text-gray-700 text-sm">First to volunteer during disruptions, ensuring all work completes without delay</p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-6 h-6 text-lime-600" />
                      <h4 className="font-bold text-gray-900">Response Excellence</h4>
                    </div>
                    <p className="text-gray-700 text-sm">Exceptionally prompt responses keeping tasks flowing smoothly and supporting team productivity</p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-6 h-6 text-lime-600" />
                      <h4 className="font-bold text-gray-900">Reliable Consistency</h4>
                    </div>
                    <p className="text-gray-700 text-sm">Excellent attendance record contributing to operational stability and team confidence</p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <Phone className="w-6 h-6 text-lime-600" />
                      <h4 className="font-bold text-gray-900">Communication Excellence</h4>
                    </div>
                    <p className="text-gray-700 text-sm">Clear, professional communication keeping teams well-informed on progress and updates</p>
                  </div>
                </div>

                <div className="mt-6 bg-white border-l-4 border-lime-600 p-6 rounded">
                  <p className="text-gray-800 italic mb-3 text-lg">
                    "We're fortunate to have him on board & look forward to his continued growth & contributions"
                  </p>
                  <p className="text-gray-900 font-bold">
                    Michael's Latest Assessment: Complete Integration and Future Planning
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Michael's Honest Assessment: Real Excellence, Not Perfection</h3>
                <p className="text-gray-700 italic mb-4">
                  "There have been a few times that he has made errors although he is always quick to acknowledge & 
                  rectify… While there are occasional oversights, they are infrequent & usually minor. With gentle 
                  reminders, he is quick to correct & learn from them."
                </p>
                <div className="bg-white border-l-4 border-lime-600 p-4 rounded">
                  <p className="text-gray-900 font-semibold">
                    What This Really Means: Human excellence with accountability—the kind of team member every business wants
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              Michael's latest assessment reveals something crucial about sustainable partnerships: they're built on realistic 
              expectations and genuine appreciation. He acknowledges minor imperfections while celebrating major contributions. 
              The Christmas trip invitation wasn't about perfection—it was about consistent value, reliability, and the kind 
              of team integration that transforms business operations.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* The Continuing Partnership Journey */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Rocket className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Continuing Partnership Journey</h2>
              <p className="text-lg text-gray-600">From trial to long-term business partnership</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              This Harcourts client success story isn't complete—it's ongoing and thriving. When Michael speaks about 
              "continued growth & contributions in the coming year," he's describing something many business owners 
              discover: exceptional virtual assistants become long-term business partners who grow alongside the company.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Transformation Journey: From Trial to Partnership</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6 border-l-4 border-lime-600">
                    <div className="flex items-start gap-4">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">First Month</h4>
                        <p className="text-gray-700 text-sm">"Happy and obliging, willing to give harder tasks a try"</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border-l-4 border-green-600">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Annual Review</h4>
                        <p className="text-gray-700 text-sm">"Should be team member of the month. Very happy with him."</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Recent Review</h4>
                        <p className="text-gray-700 text-sm">"Dedicated & valued team member" invited to Christmas trip</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border-l-4 border-purple-600">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        ∞
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Ongoing</h4>
                        <p className="text-gray-700 text-sm">"Look forward to continued growth & contributions"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              The ongoing client satisfaction ratings tell their own story: consistent perfect scores for satisfaction 
              and likelihood to recommend. This isn't honeymoon period enthusiasm—it's sustained appreciation built on 
              reliable delivery and genuine partnership. Michael knows he can depend on his virtual assistant because 
              years of evidence prove it.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Build Your Own Success Story */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <ThumbsUp className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Build Your Own Ongoing Success Story</h2>
              <p className="text-lg text-gray-600">Michael's proven blueprint for long-term partnership</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Michael's journey from skeptical trial to Christmas trip invitation wasn't luck—it was the result of smart 
              decisions and realistic expectations. Here's exactly how to replicate his approach and build your own thriving, 
              long-term partnership with exceptional virtual assistance.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Michael's Proven Blueprint: Start Smart, Scale Gradually</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-lime-600" />
                      Step 1: Start with "One Agent"
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Michael began conservatively with one administrative role. This allowed him to test the waters 
                      without overwhelming his processes or budget.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-lime-600" />
                      Step 2: Allow Initiative
                    </h4>
                    <p className="text-gray-700 text-sm">
                      When Michael was slow to provide direction, he allowed his VA to "have a go at the task himself." 
                      This built confidence and independence.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-lime-600" />
                      Step 3: Progressive Responsibility
                    </h4>
                    <p className="text-gray-700 text-sm">
                      From daily pitch reports to complex new tasks, Michael gradually increased responsibility based 
                      on demonstrated competence.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-lime-600" />
                      Step 4: Recognition & Investment
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Salary increases and Christmas trip invitations showed genuine appreciation for exceptional 
                      performance, building long-term loyalty and partnership.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Michael's Key Insight: "No need to micromanage, he gets the jobs done and done very well"
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Michael's Approach Works: Realistic Expectations</h3>
                <p className="text-gray-700 mb-6">
                  Michael didn't expect perfection. He acknowledged "a few times that he has made errors" while celebrating 
                  that his VA was "always quick to acknowledge & rectify." This realistic perspective allowed their 
                  partnership to thrive.
                </p>
                <div className="bg-white border-l-4 border-blue-600 p-4 rounded mb-6">
                  <p className="text-gray-900 font-semibold">
                    The Reality Check: Exceptional team members make occasional mistakes but take responsibility and learn. 
                    That's exactly what you want in any employee, local or offshore.
                  </p>
                </div>
                <p className="text-gray-700">
                  The most crucial element of Michael's success? He treated his virtual assistant as a team member from 
                  day one, not just a service provider. The Christmas trip invitation wasn't a business expense—it was 
                  recognition of someone who had earned their place on the team through consistent excellence and genuine 
                  contribution to ongoing success.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-gray-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Three-Step Action Plan</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Define Your Pilot Project</h4>
                      <p className="text-gray-700 text-sm">
                        Identify your daily pitch reports or consistent administrative tasks that could benefit from 
                        dedicated attention and systematic handling.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Plan Your Growth Path</h4>
                      <p className="text-gray-700 text-sm">
                        Map out additional responsibilities you could delegate as confidence and competence develop 
                        over the coming months and years.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Commit to the Journey</h4>
                      <p className="text-gray-700 text-sm">
                        Remember: Michael's Christmas trip invitation represents years of building trust and partnership. 
                        Plan for the long term and ongoing growth.
                      </p>
                    </div>
                  </div>
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
            Ready to Start Your Own Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Begin with "one agent" like Michael did, and build the kind of thriving partnership that leads to 
            Christmas trip invitations and long-term business transformation.
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
