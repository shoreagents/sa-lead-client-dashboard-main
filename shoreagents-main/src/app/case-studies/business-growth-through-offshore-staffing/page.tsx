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
  Code,
  Star,
  Zap,
  Handshake,
  ArrowRight,
  DollarSign,
  Calendar
} from 'lucide-react';
import Image from 'next/image';

export default function BusinessGrowthThroughOffshoreStaffingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-red-600 text-white px-4 py-2 text-lg mb-6">
            NEW ZEALAND VALIDATION: From Cautious Testing to Network Champion
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Arizto Real Estate Client Success: The Conservative Approach That Worked
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            When Arizto Real Estate started with just 2 administrative assistants, they were testing the waters. Three years later, they&apos;re achieving perfect 5/5 performance reviews and expanding to developers while extending services to other companies in their network. This Arizto client success demonstrates how methodical New Zealand businesses achieve offshore staffing excellence.
          </p>
          
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
              alt="Arizto Real Estate Operations"
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
                    alt="Arizto Real Estate Logo"
                    width={100}
                    height={100}
                    className="mx-auto rounded-full"
                  />
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  &quot;The team at ShoreAgents has been crucial for our company growth over the past 12 months. We are extremely happy with the service and will be using them for other companies in our network.&quot;
                </blockquote>
                <div className="text-gray-900 font-bold">Pernell Callaghan</div>
                <div className="text-gray-600">Arizto Real Estate, NZ</div>
                <div className="text-gray-600">Hired a Workforce</div>
                <div className="mt-2 flex items-center justify-center gap-2">
                  <Globe className="w-4 h-4 text-gray-600" />
                  <span>New Zealand</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">2</div>
              <p className="text-gray-700">Conservative Start</p>
            </CardContent>
          </Card>
          <Card className="border-lime-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">12</div>
              <p className="text-gray-700">Months Growth</p>
            </CardContent>
          </Card>
          <Card className="border-lime-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">+DEV</div>
              <p className="text-gray-700">Developers Added</p>
            </CardContent>
          </Card>
          <Card className="border-lime-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">NET</div>
              <p className="text-gray-700">Network Expansion</p>
            </CardContent>
          </Card>
        </div>

        {/* Intro Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Globe className="w-8 h-8 text-lime-600 mr-2" />
            Arizto Real Estate: Three Years of Sustained Excellence
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            How a New Zealand property company discovered that systematic offshore staffing delivers performance worth championing across their entire business network
          </p>
          <p className="text-lg text-gray-700">
            Picture this: You&apos;re a successful New Zealand property company. You&apos;ve heard about offshore staffing but you&apos;re naturally cautious. You start with 2 people. Fast forward three years: you&apos;re recommending salary increases and expanding to your entire network. That&apos;s the Arizto client success story of methodical excellence.
          </p>
        </div>

        {/* The Conservative Start */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The Conservative Start: How Arizto Tested the Waters</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Pernell Callaghan from Arizto Real Estate approached offshore staffing the way most smart New Zealand businesses do: methodically. &quot;We&apos;re thinking about getting 2 people,&quot; he told us. &quot;Administrative assistants. Let&apos;s see how this works.&quot; This wasn&apos;t about dramatic transformation—it was about intelligent testing with measurable outcomes.
                </p>
                <p className="mb-6">
                  That cautious approach turned out to be exactly the right strategy. Within 12 months, Arizto was declaring that &quot;the team at ShoreAgents has been crucial for our company growth.&quot; The systematic quality we delivered wasn&apos;t just meeting expectations—it was exceeding them so consistently that they began expanding to developers and considering implementation across their entire business network.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-6">
                    <div>
                      <div className="text-3xl font-bold text-lime-600 mb-2">2</div>
                      <p className="text-sm text-gray-700">Conservative Start</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-lime-600 mb-2">12</div>
                      <p className="text-sm text-gray-700">Months Growth</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-lime-600 mb-2">+DEV</div>
                      <p className="text-sm text-gray-700">Developers Added</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-lime-600 mb-2">NET</div>
                      <p className="text-sm text-gray-700">Network Expansion</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded">
                    <p className="text-lg text-gray-800 italic">
                      &quot;We are extremely happy with the service and will be using them for other companies in our network&quot;
                    </p>
                  </div>
                  <p className="text-center text-gray-700 mt-4 font-semibold">
                    This progression from cautious testing to confident network expansion demonstrates exactly how New Zealand businesses should approach offshore staffing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Reviews */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Star className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Performance Reviews That Tell the Real Story</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  What separates the Arizto client success story from typical business relationships is the sustained performance excellence documented in their annual reviews. Three years of consistent 5/5 ratings across every performance category isn&apos;t just impressive—it&apos;s the foundation of confidence that enables network expansion.
                </p>
                <p className="mb-6">
                  These aren&apos;t promotional testimonials or marketing materials. They&apos;re internal performance evaluations conducted by Arizto management that reveal the systematic quality delivered by our offshore team members. When New Zealand businesses consistently report &quot;excellent&quot; performance with comments like &quot;quick to reply and do the tasks, very polite, autonomous,&quot; it validates the cultural alignment and professional standards that make offshore staffing successful.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Three-Year Performance Excellence Timeline</h3>
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center mb-3">
                        <Calendar className="w-6 h-6 text-lime-600 mr-2" />
                        <h4 className="font-bold text-gray-900 text-lg">Year One Foundation</h4>
                      </div>
                      <p className="text-gray-700 mb-2">Perfect 5/5 ratings across all categories</p>
                      <p className="text-gray-600 italic text-sm">&quot;Quick to reply and do the tasks, very polite, autonomous&quot;</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center mb-3">
                        <Calendar className="w-6 h-6 text-lime-600 mr-2" />
                        <h4 className="font-bold text-gray-900 text-lg">Year Two Consistency</h4>
                      </div>
                      <p className="text-gray-700 mb-2">Continued excellence with team integration</p>
                      <p className="text-gray-600 italic text-sm">&quot;Always punctual with tasks and communication&quot;</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center mb-3">
                        <Calendar className="w-6 h-6 text-lime-600 mr-2" />
                        <h4 className="font-bold text-gray-900 text-lg">Year Three Investment</h4>
                      </div>
                      <p className="text-gray-700 mb-2">Salary increase recommendations</p>
                      <p className="text-gray-600 italic text-sm">&quot;We would like to increase the salary&quot;</p>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-6 font-semibold">
                    Consistent performance excellence that builds confidence for network expansion
                  </p>
                </div>

                <p className="mt-6">
                  This performance trajectory reveals something crucial about sustainable offshore partnerships: when businesses experience consistent excellence year after year, they naturally evolve from cost-conscious testing to strategic investment. The salary increase recommendations in year three demonstrate that Arizto views their offshore team members as valuable assets worth investing in, not just cost centers to manage.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Developer Expansion */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Code className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Beyond Admin: The Developer Expansion Decision</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The most telling moment in the Arizto client success story came when they decided to expand beyond administrative support. Adding developers to an offshore team requires a fundamentally different level of trust and integration than administrative assistants. It means believing that your offshore team can handle complex, technical work that directly impacts your business operations.
                </p>
                <p className="mb-6">
                  That decision wasn&apos;t made impulsively. It was the result of 18 months of consistent performance excellence that built the confidence needed for technical expansion. When New Zealand businesses feel comfortable entrusting specialized development work to offshore teams, it validates both the quality of the talent and the systematic approach to integration that makes complex collaboration successful.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">The Confidence-Building Evolution: From Admin to Technical Excellence</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2">Administrative Foundation</h4>
                        <p className="text-gray-700 mb-2">2 administrative assistants handling core business processes</p>
                        <p className="text-gray-600 text-sm">Build trust through consistency</p>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-lime-600 mx-auto my-2" />
                    <div className="flex items-start">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2">Excellence Validation</h4>
                        <p className="text-gray-700 mb-2">12 months of perfect performance reviews building confidence</p>
                        <p className="text-gray-600 text-sm">Prove systematic quality</p>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-lime-600 mx-auto my-2" />
                    <div className="flex items-start">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2">Technical Expansion</h4>
                        <p className="text-gray-700 mb-2">Developers added to handle complex technical projects</p>
                        <p className="text-gray-600 text-sm">Scale with confidence</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-6 font-semibold">
                    Evolution from basic support to strategic technical partnership
                  </p>
                </div>

                <p className="mt-6">
                  This systematic evolution from administrative support to specialized technical talent demonstrates why the Arizto client success story represents more than operational efficiency—it validates comprehensive workforce capabilities that enable New Zealand property companies to access global talent for any business requirement.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Network Expansion */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Handshake className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">From Client to Champion: The Network Expansion Decision</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The ultimate validation in the Arizto client success story came when they announced they would be &quot;using them for other companies in our network.&quot; This wasn&apos;t just satisfaction—it was championship. When businesses start recommending your services to other companies they&apos;re connected to, you&apos;ve moved beyond vendor relationship into strategic partnership territory.
                </p>
                <p className="mb-6">
                  That decision reflects something deeper than cost savings or operational efficiency. It demonstrates confidence in the systematic approach, trust in the quality delivery, and recognition that offshore staffing excellence represents a competitive advantage worth sharing across their business network.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What Network Expansion Really Means</h3>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mb-6">
                    <p className="text-lg text-gray-800 italic mb-2">
                      &quot;We are extremely happy with the service and will be using them for other companies in our network&quot;
                    </p>
                    <p className="text-gray-700 text-sm">Beyond Customer Satisfaction - When companies expand services to their network, they&apos;re putting their professional reputation on the line.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                      <Handshake className="w-8 h-8 text-lime-600 mx-auto mb-2" />
                      <h4 className="font-bold text-gray-900 mb-2">TRUST</h4>
                      <p className="text-gray-700 text-sm">Professional reputation on the line</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                      <TrendingUp className="w-8 h-8 text-lime-600 mx-auto mb-2" />
                      <h4 className="font-bold text-gray-900 mb-2">SCALE</h4>
                      <p className="text-gray-700 text-sm">Competitive advantage worth sharing</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                      <Zap className="w-8 h-8 text-lime-600 mx-auto mb-2" />
                      <h4 className="font-bold text-gray-900 mb-2">GROWTH</h4>
                      <p className="text-gray-700 text-sm">Strategic partnership recognition</p>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-6 font-semibold">
                    From service provider to strategic partner in business network growth
                  </p>
                </div>

                <p className="mt-6">
                  The evolution from cautious 2-person testing to confident network champion demonstrates exactly what sustainable offshore partnerships look like. When New Zealand businesses achieve this level of satisfaction and actively expand implementation across their business network, it validates systematic approaches that create lasting competitive advantages through professional workforce optimization.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What Arizto's Journey Teaches */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">What Arizto&apos;s Journey Teaches Us About Smart Growth</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Pernell&apos;s story resonates because it reflects exactly how thoughtful New Zealand businesses operate. No dramatic claims about transformation. No rushing into major changes. Just smart, methodical decision-making that built genuine confidence over time.
                </p>
                <p className="mb-4">
                  What strikes me about Arizto&apos;s approach is their honesty about the process. They started with 2 people because that felt right. They expanded to developers because the quality proved itself. They&apos;re sharing services across their network because they genuinely believe it works. That&apos;s not marketing speak—that&apos;s real business confidence built on actual experience.
                </p>
                <p>
                  The progression from &quot;thinking about getting 2 people&quot; to &quot;extremely happy with the service and will be using them for other companies in our network&quot; happened because we delivered exactly what we promised, when we promised it, for three straight years. That&apos;s the foundation any New Zealand property company can build on.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA Section */}
        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Want to take the same measured approach that worked for Arizto?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start conservative, prove the concept, then grow with confidence. Just like Pernell did.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
              <Phone className="w-5 h-5 mr-2" />
              Start Your Conservative Test
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-bold">
              <Building className="w-5 h-5 mr-2" />
              Learn About Real Estate VAs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
