"use client";

import { SideNav } from "@/components/layout/SideNav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle2,
  TrendingUp, 
  Target, 
  Globe, 
  Code,
  Star,
  Handshake,
  ArrowRight,
  Calendar,
  Building2,
  Award
} from "lucide-react";
import Link from "next/link";

export default function BusinessGrowthThroughOffshoreStaffingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-red-600 text-white mb-4 text-sm px-3 py-1">
              🚨 NEW ZEALAND VALIDATION: From Cautious Testing to Network Champion
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Arizto Real Estate:<br />
              <span className="text-lime-600">From 2 People to Network-Wide Champion in 3 Years</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              When Arizto Real Estate started with just 2 administrative assistants, they were testing the waters. 
              Three years later, they&apos;re achieving perfect 5/5 performance reviews and expanding to developers 
              while extending services to other companies in their network. This Arizto client success demonstrates 
              how methodical New Zealand businesses achieve offshore staffing excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/pricing" 
                className="inline-flex items-center px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors"
              >
                Start Your Conservative Test
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
                &quot;The team at ShoreAgents has been crucial for our company growth over the past 12 months. 
                We are extremely happy with the service and will be using them for other companies in our network.&quot;
              </blockquote>
              <div className="flex items-center gap-4">
                <Globe className="w-10 h-10 text-lime-600" />
                <div>
                  <p className="text-gray-900 font-bold text-lg">Pernell Callaghan</p>
                  <p className="text-gray-700">Arizto Real Estate, NZ - Hired a Workforce - New Zealand</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">2</div>
                <p className="text-gray-700 font-semibold">Conservative Start</p>
              </CardContent>
            </Card>
            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
                <p className="text-gray-700 font-semibold">Months Growth</p>
              </CardContent>
            </Card>
            <Card className="border-purple-300 bg-purple-50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">+DEV</div>
                <p className="text-gray-700 font-semibold">Developers Added</p>
              </CardContent>
            </Card>
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">NET</div>
                <p className="text-gray-700 font-semibold">Network Expansion</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Intro */}
        <div className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            How a New Zealand property company discovered that systematic offshore staffing delivers performance 
            worth championing across their entire business network.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Picture this: You&apos;re a successful New Zealand property company. You&apos;ve heard about offshore 
            staffing but you&apos;re naturally cautious. You start with 2 people. Fast forward three years: 
            you&apos;re recommending salary increases and expanding to your entire network. That&apos;s the Arizto 
            client success story of methodical excellence.
          </p>
        </div>

        <Separator className="my-12" />

        {/* The Conservative Start */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Target className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Conservative Start: How Arizto Tested the Waters</h2>
              <p className="text-lg text-gray-600">Methodical testing with measurable outcomes</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Pernell Callaghan from Arizto Real Estate approached offshore staffing the way most smart New Zealand 
            businesses do: methodically. &quot;We&apos;re thinking about getting 2 people,&quot; he told us. 
            &quot;Administrative assistants. Let&apos;s see how this works.&quot; This wasn&apos;t about dramatic 
            transformation—it was about <strong>intelligent testing with measurable outcomes</strong>.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            That cautious approach turned out to be exactly the right strategy. Within 12 months, Arizto was declaring 
            that &quot;the team at ShoreAgents has been crucial for our company growth.&quot; The systematic quality we 
            delivered wasn&apos;t just meeting expectations—it was exceeding them so consistently that they began 
            expanding to developers and considering implementation across their entire business network through our 
            proven real estate virtual assistant solutions.
          </p>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🇳🇿 The New Zealand Business Advantage: Methodical Implementation</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-6">
                <div>
                  <div className="text-4xl font-bold text-lime-600 mb-2">2</div>
                  <p className="text-sm text-gray-700 font-semibold">Conservative Start</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
                  <p className="text-sm text-gray-700 font-semibold">Months Growth</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">+DEV</div>
                  <p className="text-sm text-gray-700 font-semibold">Developers Added</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">NET</div>
                  <p className="text-sm text-gray-700 font-semibold">Network Expansion</p>
                </div>
              </div>
              <Card className="bg-white border-lime-200">
                <CardContent className="p-4">
                  <p className="text-gray-800 italic text-center">
                    &quot;We are extremely happy with the service and will be using them for other companies in our network&quot;
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border-l-4 border-lime-600 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                This progression from cautious testing to confident network expansion demonstrates exactly how New 
                Zealand businesses should approach offshore staffing. The methodical approach that started with 2 
                administrative assistants has evolved into a strategic advantage that Arizto now wants to share 
                across their entire business network through systematic real estate outsourcing excellence.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Performance Reviews */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-yellow-100 rounded-full p-3">
              <Star className="w-8 h-8 text-yellow-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Performance Reviews That Tell the Real Story</h2>
              <p className="text-lg text-gray-600">Three years of consistent 5/5 ratings</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            What separates the Arizto client success story from typical business relationships is the 
            <strong> sustained performance excellence documented in their annual reviews</strong>. Three years of 
            consistent 5/5 ratings across every performance category isn&apos;t just impressive—it&apos;s the 
            foundation of confidence that enables network expansion.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            These aren&apos;t promotional testimonials or marketing materials. They&apos;re internal performance 
            evaluations conducted by Arizto management that reveal the systematic quality delivered by our offshore 
            team members. When New Zealand businesses consistently report &quot;excellent&quot; performance with 
            comments like &quot;quick to reply and do the tasks, very polite, autonomous,&quot; it validates the 
            cultural alignment and professional standards that make offshore staffing successful.
          </p>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">📈 Three-Year Performance Excellence Timeline</h3>
              <div className="space-y-4">
                <Card className="border-green-300 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Badge className="bg-green-600 text-white">Year 1</Badge>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Year One Foundation</h4>
                        <p className="text-gray-700 mb-2">Perfect 5/5 ratings across all categories</p>
                        <div className="bg-gray-50 border-l-4 border-green-500 p-3 rounded">
                          <p className="text-gray-800 italic text-sm">&quot;Quick to reply and do the tasks, very polite, autonomous&quot;</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-300 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Badge className="bg-blue-600 text-white">Year 2</Badge>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Year Two Consistency</h4>
                        <p className="text-gray-700 mb-2">Continued excellence with team integration</p>
                        <div className="bg-gray-50 border-l-4 border-blue-500 p-3 rounded">
                          <p className="text-gray-800 italic text-sm">&quot;Always punctual with tasks and communication&quot;</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-300 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Badge className="bg-purple-600 text-white">Year 3</Badge>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Year Three Investment</h4>
                        <p className="text-gray-700 mb-2">Salary increase recommendations</p>
                        <div className="bg-gray-50 border-l-4 border-purple-500 p-3 rounded">
                          <p className="text-gray-800 italic text-sm">&quot;We would like to increase the salary&quot;</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                This performance trajectory reveals something crucial about sustainable offshore partnerships: when 
                businesses experience consistent excellence year after year, they naturally evolve from cost-conscious 
                testing to strategic investment. The salary increase recommendations in year three demonstrate that 
                Arizto views their offshore team members as valuable assets worth investing in, not just cost centers 
                to manage.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Developer Expansion */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-purple-100 rounded-full p-3">
              <Code className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Beyond Admin: The Developer Expansion Decision</h2>
              <p className="text-lg text-gray-600">When trust enables technical excellence</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            The most telling moment in the Arizto client success story came when they decided to expand beyond 
            administrative support. <strong>Adding developers to an offshore team requires a fundamentally different 
            level of trust</strong> and integration than administrative assistants. It means believing that your 
            offshore team can handle complex, technical work that directly impacts your business operations.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            That decision wasn&apos;t made impulsively. It was the result of 18 months of consistent performance 
            excellence that built the confidence needed for technical expansion. When New Zealand businesses feel 
            comfortable entrusting specialized development work to offshore teams, it validates both the quality of 
            the talent and the systematic approach to integration that makes complex collaboration successful.
          </p>

          <Card className="border-purple-300 bg-purple-50 mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 The Confidence-Building Evolution: From Admin to Technical Excellence</h3>
              <div className="space-y-4">
                <Card className="bg-white border-lime-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                        1
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">PHASE 1 - Administrative Foundation</h4>
                        <p className="text-gray-700 mb-2">2 administrative assistants handling core business processes</p>
                        <p className="text-gray-600 text-sm italic">Build trust through consistency</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-purple-600" />
                </div>

                <Card className="bg-white border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                        2
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">PHASE 2 - Excellence Validation</h4>
                        <p className="text-gray-700 mb-2">12 months of perfect performance reviews building confidence</p>
                        <p className="text-gray-600 text-sm italic">Prove systematic quality</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-purple-600" />
                </div>

                <Card className="bg-white border-purple-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                        3
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">PHASE 3 - Technical Expansion</h4>
                        <p className="text-gray-700 mb-2">Developers added to handle complex technical projects</p>
                        <p className="text-gray-600 text-sm italic">Scale with confidence</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border-l-4 border-purple-600">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                <strong>Evolution from basic support to strategic technical partnership.</strong> This systematic 
                evolution from administrative support to specialized technical talent demonstrates why the Arizto 
                client success story represents more than operational efficiency—it validates comprehensive workforce 
                capabilities that enable New Zealand property companies to access global talent for any business 
                requirement through our comprehensive virtual assistant and outsourcing solutions.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Network Expansion */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">From Client to Champion: The Network Expansion Decision</h2>
              <p className="text-lg text-gray-600">Beyond satisfaction to strategic partnership</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            The ultimate validation in the Arizto client success story came when they announced they would be 
            &quot;using them for other companies in our network.&quot; This wasn&apos;t just satisfaction—it was 
            <strong> championship</strong>. When businesses start recommending your services to other companies 
            they&apos;re connected to, you&apos;ve moved beyond vendor relationship into strategic partnership territory.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            That decision reflects something deeper than cost savings or operational efficiency. It demonstrates 
            confidence in the systematic approach, trust in the quality delivery, and recognition that offshore 
            staffing excellence represents a competitive advantage worth sharing across their business network.
          </p>

          <Card className="border-green-300 bg-gradient-to-br from-green-50 to-lime-50 mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🌐 What Network Expansion Really Means</h3>
              
              <Card className="bg-white border-green-200 mb-6">
                <CardContent className="p-6">
                  <p className="text-lg text-gray-800 italic mb-3">
                    &quot;We are extremely happy with the service and will be using them for other companies in our network&quot;
                  </p>
                  <p className="text-gray-700">
                    <strong>Beyond Customer Satisfaction:</strong> When companies expand services to their network, 
                    they&apos;re putting their professional reputation on the line. Arizto&apos;s decision to extend 
                    our services to other companies represents the highest level of confidence in systematic quality 
                    delivery.
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white border-green-200">
                  <CardContent className="p-6 text-center">
                    <Handshake className="w-10 h-10 text-green-600 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900 text-lg mb-2">TRUST</h4>
                    <p className="text-gray-700 text-sm">Professional reputation on the line</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-green-200">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="w-10 h-10 text-green-600 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900 text-lg mb-2">SCALE</h4>
                    <p className="text-gray-700 text-sm">Competitive advantage worth sharing</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-green-200">
                  <CardContent className="p-6 text-center">
                    <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900 text-lg mb-2">GROWTH</h4>
                    <p className="text-gray-700 text-sm">Strategic partnership recognition</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                <strong>From service provider to strategic partner in business network growth.</strong> The evolution 
                from cautious 2-person testing to confident network champion demonstrates exactly what sustainable 
                offshore partnerships look like. When New Zealand businesses achieve this level of satisfaction and 
                actively expand implementation across their business network, it validates systematic approaches that 
                create lasting competitive advantages through professional workforce optimization.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What Arizto's Journey Teaches */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Arizto&apos;s Journey Teaches Us About Smart Growth</h2>
              <p className="text-lg text-gray-600">Methodical excellence that builds lasting confidence</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Pernell&apos;s story resonates because it reflects exactly how thoughtful New Zealand businesses 
                operate. No dramatic claims about transformation. No rushing into major changes. Just smart, methodical 
                decision-making that built genuine confidence over time.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                What strikes me about Arizto&apos;s approach is their honesty about the process. They started with 2 
                people because that felt right. They expanded to developers because the quality proved itself. 
                They&apos;re sharing services across their network because they genuinely believe it works. That&apos;s 
                not marketing speak—that&apos;s real business confidence built on actual experience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The progression from &quot;thinking about getting 2 people&quot; to &quot;extremely happy with the 
                service and will be using them for other companies in our network&quot; happened because we delivered 
                exactly what we promised, when we promised it, for three straight years. That&apos;s the foundation 
                any New Zealand property company can build on.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border-l-4 border-blue-600">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                Want to take the same measured approach that worked for Arizto? Start conservative, prove the concept, 
                then grow with confidence. Just like Pernell did.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Conservative Success Story?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Start conservative, prove the concept, then grow with confidence. Follow Pernell&apos;s proven methodology 
              for offshore staffing excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 bg-white text-lime-600 font-bold text-lg rounded-lg hover:bg-lime-50 transition-colors shadow-lg"
              >
                Start Your Conservative Test
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 bg-lime-700 text-white font-bold text-lg rounded-lg hover:bg-lime-800 transition-colors border-2 border-white/20"
              >
                <Building2 className="mr-2 w-5 h-5" />
                View More Case Studies
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Final Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            Three years of 5/5 performance reviews. Network-wide expansion. That&apos;s the power of methodical offshore staffing excellence.
          </p>
        </div>
      </div>
    </div>
  );
}
