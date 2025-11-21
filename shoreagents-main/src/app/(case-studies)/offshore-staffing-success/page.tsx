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
  Rocket,
  DollarSign,
  Clock,
  Palette,
  Settings,
  BarChart3,
  Heart
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function OffshoreStaffingSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[{"name":"Case Studies","url":"https://www.shoreagents.com/case-studies"},{"name":"Brett Ayles","url":"https://www.shoreagents.com/offshore-staffing-success"}]} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              Reside Real Estate - Australia
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              From Conservative Test to<br />
              <span className="text-lime-600">"Get Me More Like This One"</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              When Reside Real Estate's Brett Ayles started with one conservative test, he discovered something that would 
              fundamentally change his business. From "great asset" to role expansion into creative work, to project 
              management capabilities—this is the complete journey from cautious testing to strategic transformation.
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
        
        {/* Transformation Journey Stats */}
        <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200 mb-16">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Transformation Journey</h3>
              <p className="text-gray-700">From administrative support to strategic partnership</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Star className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">5/5</div>
                <div className="text-gray-900 font-semibold">Perfect Ratings</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Rocket className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">3</div>
                <div className="text-gray-900 font-semibold">Growth Phases</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Settings className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">4+</div>
                <div className="text-gray-900 font-semibold">Roles Covered</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <DollarSign className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">66%</div>
                <div className="text-gray-900 font-semibold">Cost Reduction</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Client Testimonial */}
        <Card className="bg-gradient-to-br from-gray-50 to-white border-lime-200 shadow-lg mb-12">
          <CardContent className="p-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  BA
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                "Working with ShoreAgents has been a great experience, we've been able to scale and grow thanks to their 
                reliable and experienced agents. The ShoreAgents team has become a key part of our operations and our onshore 
                staff have full faith that things are taken care of so they can focus on what they do best here."
              </blockquote>
              <div className="text-lg font-bold text-gray-900">Brett Ayles</div>
              <div className="text-gray-600 mb-2">Reside Real Estate</div>
              <div className="flex items-center gap-2 text-gray-600">
                <Globe className="w-4 h-4" />
                <span>Australia</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Overview */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Picture this: You're running a growing Australian real estate company. You've heard about offshore staffing but 
            you're naturally cautious. You start with one person, one role, one test. Eventually, that same team member is 
            earning perfect performance reviews and you're asking management: "Get me more like this one." That's the Reside 
            Real Estate client success story—a journey from skepticism to complete transformation.
          </p>
        </div>

        <Separator className="my-12" />

        {/* The Starting Point */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Target className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Starting Point</h2>
              <p className="text-lg text-gray-600">Smart business owner, conservative approach</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Brett Ayles approached offshore staffing the way successful business owners approach any significant operational 
              change: carefully, systematically, and with realistic expectations. As the owner of Reside Real Estate, he 
              understood that growing Australian real estate companies face a fundamental challenge—administrative tasks 
              multiply faster than revenue, creating a productivity trap that constrains growth.
            </p>
            
            <p className="mb-8">
              The decision to hire one specialist for sales and processing administration wasn't about cutting costs—it was 
              about testing whether systematic offshore staffing could actually work for his business. Brett needed someone 
              who could handle the detailed, time-consuming tasks that were preventing his team from focusing on what they 
              do best: building relationships and closing deals.
            </p>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Conservative Testing Framework</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Single Role Focus</h4>
                      <p className="text-gray-700 text-sm">Sales and processing administration</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Regular Evaluation</h4>
                      <p className="text-gray-700 text-sm">Ongoing performance tracking</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Target className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Clear Expectations</h4>
                      <p className="text-gray-700 text-sm">Defined metrics and standards</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    This conservative approach—starting with one person, one role, clear expectations—would prove to be the 
                    foundation for a transformation that neither Brett nor his team could have predicted.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Foundation Phase */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Award className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Foundation Phase: "Great Asset"</h2>
              <p className="text-lg text-gray-600">Building trust through excellence</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              The initial phase of any offshore staffing relationship is crucial—this is when you discover whether you've 
              hired a professional or just found cheap labor. Brett's early client evaluation revealed something that would 
              set the tone for everything that followed: they hadn't just found administrative help—they'd discovered "a great asset."
            </p>

            <Card className="bg-gradient-to-br from-green-50 to-lime-50 border-green-200">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="flex gap-1 justify-center mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-lime-600 text-lime-600" />)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Foundation Phase Breakthrough</h3>
                  <p className="text-gray-600">The moments that changed everything</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-lime-600">
                    <div className="flex items-start gap-3">
                      <Settings className="w-6 h-6 text-lime-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Process Innovation</h4>
                        <p className="text-gray-700 text-sm">
                          "Adept at following (and creating) procedures" + "Often encouraged to suggest process improvements"
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-600">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Skills Growth</h4>
                        <p className="text-gray-700 text-sm">
                          "Upskilled even with tasks outside employment scope like data mining within Excel"
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                    <div className="flex items-start gap-3">
                      <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Team Integration</h4>
                        <p className="text-gray-700 text-sm">
                          "Integrated well into the team – they know they can trust his work and timing"
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-purple-600">
                    <div className="flex items-start gap-3">
                      <Heart className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Brett's Decision</h4>
                        <p className="text-gray-700 text-sm font-semibold">
                          "Regularization, Continue Employment, Salary Increase, Get me more like this one"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    The foundation phase established something crucial: this wasn't about finding someone to follow 
                    instructions—it was about partnering with someone who could improve the business.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Growth Phase */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Rocket className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Growth Phase: "System Owner"</h2>
              <p className="text-lg text-gray-600">From asset to strategic team member</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              The trust established in the foundation phase created something powerful: permission to grow. As the relationship 
              evolved, Brett's ongoing evaluations revealed the logical progression of systematic offshore staffing—when you 
              hire professionals rather than just task-doers, they expand their capabilities and become more valuable over time.
            </p>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="flex gap-1 justify-center mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-blue-600 text-blue-600" />)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Growth Phase Evolution</h3>
                  <p className="text-gray-600">From administrative support to strategic asset</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-5 border-l-4 border-lime-600">
                    <div className="flex items-start gap-3 mb-2">
                      <Settings className="w-7 h-7 text-lime-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">System Ownership</h4>
                        <p className="text-gray-700 text-sm">
                          "Taking ownership of Trello and optimizing the processes" – From user to system owner
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 border-l-4 border-purple-600">
                    <div className="flex items-start gap-3 mb-2">
                      <Palette className="w-7 h-7 text-purple-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">Creative Expansion</h4>
                        <p className="text-gray-700 text-sm">
                          "Taking on social media and creative aspects in InDesign, doing really well" – New skill development
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 border-l-4 border-green-600">
                    <div className="flex items-start gap-3 mb-2">
                      <Zap className="w-7 h-7 text-green-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">Above & Beyond</h4>
                        <p className="text-gray-700 text-sm">
                          "Willing to go the extra mile doing odd jobs after hours" – Genuine commitment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-blue-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    The Evolution: From administrative helper to creative team member and system optimizer
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              What happened during the growth phase demonstrates the power of systematic professional development. The specialist 
              had grown from someone who "follows procedures" to someone who "takes ownership of systems." They had expanded 
              from administrative tasks to creative work that would typically require separate specialized hiring.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Partnership Phase */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Star className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Partnership Phase: "Strategic Partner"</h2>
              <p className="text-lg text-gray-600">Strategic value and advanced capabilities</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              As the relationship matured, something remarkable had happened at Reside Real Estate. The latest client evaluation 
              revealed the ultimate transformation: what had started as a conservative test had become complete professional 
              integration. The specialist was "growing into some PM functions"—project management capabilities that represent 
              advanced professional development.
            </p>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="flex gap-1 justify-center mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-purple-600 text-purple-600" />)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Partnership Phase</h3>
                  <p className="text-gray-600">From team member to strategic partner</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-5 border-l-4 border-purple-600">
                    <div className="flex items-start gap-3">
                      <BarChart3 className="w-7 h-7 text-purple-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">Advanced Capabilities</h4>
                        <p className="text-gray-700 text-sm">
                          "Growing into some PM functions" – Project management skill development
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 border-l-4 border-pink-600">
                    <div className="flex items-start gap-3">
                      <Clock className="w-7 h-7 text-pink-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">Deadline Ownership</h4>
                        <p className="text-gray-700 text-sm">
                          "Happy to stay back and get the job done when we're on deadlines" – Shared commitment
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 border-l-4 border-green-600">
                    <div className="flex items-start gap-3">
                      <Zap className="w-7 h-7 text-green-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">Consistent Excellence</h4>
                        <p className="text-gray-700 text-sm">
                          "Fast & reliable on all tasks" with perfect attendance record
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-purple-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    The Ultimate Evolution: From administrative support to strategic partner with advanced capabilities
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* The Complete Journey */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Complete Journey</h2>
              <p className="text-lg text-gray-600">From test to transformation</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Three-Phase Evolution</h3>
                <div className="space-y-6">
                  {/* Foundation Phase */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-green-600">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">Foundation Phase: "Great Asset"</h4>
                        <ul className="text-sm text-gray-700 space-y-1 mt-2">
                          <li>• Following and creating procedures</li>
                          <li>• Suggesting process improvements</li>
                          <li>• Excel data mining skills</li>
                          <li>• Team trust established</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Growth Phase */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">Growth Phase: "System Owner"</h4>
                        <ul className="text-sm text-gray-700 space-y-1 mt-2">
                          <li>• Trello system ownership</li>
                          <li>• Social media management</li>
                          <li>• InDesign creative work</li>
                          <li>• After-hours commitment</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Partnership Phase */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-purple-600">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">Partnership Phase: "Strategic Partner"</h4>
                        <ul className="text-sm text-gray-700 space-y-1 mt-2">
                          <li>• Project management functions</li>
                          <li>• Total integration achieved</li>
                          <li>• Deadline ownership mindset</li>
                          <li>• Consistently high quality work</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    This complete journey demonstrates what systematic offshore staffing can achieve when implemented with 
                    patience, clear expectations, and genuine commitment to professional development.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Business Impact */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Business Impact</h2>
              <p className="text-lg text-gray-600">From cost savings to strategic value</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              The Reside Real Estate transformation story isn't just about performance reviews—it's about business impact that 
              compounds over time. When Brett says "Get me more like this one," he's not just expressing satisfaction; he's 
              recognizing strategic value that extends far beyond simple cost savings.
            </p>

            <Card className="bg-gradient-to-br from-green-50 to-lime-50 border-green-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Impact: Beyond Simple Cost Savings</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-6 text-center border-t-4 border-lime-600">
                    <DollarSign className="w-10 h-10 text-lime-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-lime-600 mb-2">66%</div>
                    <h4 className="font-bold text-gray-900 mb-1">Financial Advantage</h4>
                    <p className="text-gray-700 text-sm">Cost reduction vs local hiring</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 text-center border-t-4 border-blue-600">
                    <Settings className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
                    <h4 className="font-bold text-gray-900 mb-1">Capability Expansion</h4>
                    <p className="text-gray-700 text-sm">Admin, Creative, Systems, PM</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 text-center border-t-4 border-purple-600">
                    <TrendingUp className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-purple-600 mb-2">∞</div>
                    <h4 className="font-bold text-gray-900 mb-1">Strategic Value</h4>
                    <p className="text-gray-700 text-sm">Trust, commitment, ownership</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">The Value Evolution: How Strategic Value Compounds</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-bold text-gray-900 text-sm mb-1">Foundation: Cost Efficiency</h5>
                        <p className="text-gray-700 text-xs">Significant annual savings + reliable administrative excellence</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-bold text-gray-900 text-sm mb-1">Growth: Capability Multiplication</h5>
                        <p className="text-gray-700 text-xs">Creative design, system ownership, proactive optimization</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-bold text-gray-900 text-sm mb-1">Partnership: Strategic Value</h5>
                        <p className="text-gray-700 text-xs">Project management, deadline ownership, business partnership</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    This progression from cost savings to strategic value demonstrates why Brett's evaluation concluded with 
                    "Get me more like this one."
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Brett's Journey Teaches</h2>
              <p className="text-lg text-gray-600">Lessons in professional growth and transformation</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Brett Ayles' progression from "great asset" to "Get me more like this one" tells a story that every business 
              owner should understand: when you hire professionals rather than just task-doers, growth becomes inevitable. His 
              journey wasn't about luck or finding an exceptional individual—it was about implementing systematic approaches 
              that enable professional development.
            </p>

            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Brett's Evolution Actually Demonstrates</h3>
                <div className="space-y-4">
                  {[
                    { icon: TrendingUp, title: 'Systematic Development', desc: 'Professional growth through structured opportunity and clear expectations' },
                    { icon: CheckCircle2, title: 'Trust Building', desc: 'Performance excellence creating permission for expanded responsibilities' },
                    { icon: Zap, title: 'Value Multiplication', desc: 'One person covering multiple department functions through skill development' },
                    { icon: Star, title: 'Strategic Partnership', desc: 'Evolution from task completion to business partnership mindset' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                      <item.icon className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-700 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    The Result: Conservative testing leading to transformational business relationships
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              Brett's evaluation that his specialist is "happy to stay back and get the job done when we're on deadlines" 
              reveals something crucial: this isn't just about task completion—it's about shared ownership of business success. 
              When virtual assistants develop project management capabilities and demonstrate genuine commitment to deadline 
              achievement, you've moved far beyond simple outsourcing.
            </p>
          </div>
        </section>

      </div>

      {/* Final CTA */}
      <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white mx-4 mb-8">
        <CardContent className="p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Own Transformation Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Follow Brett's proven approach: start conservatively with one role, build trust through performance excellence, 
            and watch systematic professional development create strategic value. Experience the transformation from 
            "great asset" to "Get me more like this one."
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
