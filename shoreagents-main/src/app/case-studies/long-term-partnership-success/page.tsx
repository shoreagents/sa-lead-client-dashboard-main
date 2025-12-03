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
  Shield,
  FileCheck,
  Rocket,
  Video,
  Play,
  Heart,
  Calendar
} from "lucide-react";
import Link from "next/link";

export default function LongTermPartnershipSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              Professionals McDowell Real Estate - New Zealand
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              6+ Years of Perfect 5/5 Reviews:<br />
              <span className="text-lime-600">"If We Could Clone Her, We Would"</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              When Professionals McDowell Real Estate in New Zealand started with ShoreAgents, they made a conservative 
              choice that transformed their operations. Years later, their team members are earning perfect 5/5 performance 
              ratings and management declares: "If we could clone her we would." This is systematic excellence.
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
        
        {/* Partnership Timeline Stats */}
        <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200 mb-16">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Long-Term Partnership Excellence</h3>
              <p className="text-gray-700">From conservative start to irreplaceable team members</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Calendar className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">6+</div>
                <div className="text-gray-900 font-semibold">Years Partnership</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Star className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">5/5</div>
                <div className="text-gray-900 font-semibold">Perfect Ratings</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Users className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">2</div>
                <div className="text-gray-900 font-semibold">Specialized Roles</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Heart className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">100%</div>
                <div className="text-gray-900 font-semibold">Irreplaceable</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Overview */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Picture this: New Zealand real estate professionals drowning in AML compliance requirements and administrative 
            complexity. One strategic decision that changed everything. Years later, perfect performance reviews and 
            irreplaceable team members. That's the Professionals McDowell client success story.
          </p>
        </div>

        <Separator className="my-12" />

        {/* The Strategic Foundation */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Target className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Strategic Foundation</h2>
              <p className="text-lg text-gray-600">Conservative start, systematic scaling, long-term vision</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Steve Lovegrove from Professionals McDowell Real Estate made a decision that perfectly embodies what every 
              real estate professional should do: start conservative, prove the concept, then scale systematically. Instead 
              of rushing into complex outsourcing arrangements, Steve chose a strategic approach that would define years of 
              operational excellence.
            </p>
            
            <p className="mb-8">
              The New Zealand real estate market presents unique challenges that most offshore providers simply don't 
              understand. AML (Anti-Money Laundering) compliance requirements, REINZ regulations, and the sophisticated 
              administrative demands of property management and sales coordination require specialized expertise, not generic 
              training. Steve understood this from day one.
            </p>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Strategic Conservative Approach That Built Success</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Two Specialized Roles</h4>
                      <p className="text-gray-700 text-sm">Property Management Assistant + Admin Officer focused on NZ compliance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Systematic Integration</h4>
                      <p className="text-gray-700 text-sm">Gradual skill development, process documentation, cultural adaptation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Long-term Vision</h4>
                      <p className="text-gray-700 text-sm">Building sustainable partnership vs short-term cost cutting</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    CEO Insight: "Steve's approach was exactly what I recommend - conservative start, systematic scaling, 
                    long-term partnership focus."
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              This strategic foundation set the stage for what would become a model partnership. While other real estate 
              businesses rush into complex arrangements or try to hire multiple people simultaneously, Steve's measured 
              approach enabled his team to develop the specialized skills and cultural integration that would define their 
              success for years to come.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Performance Excellence Reality */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Star className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Performance Excellence Reality</h2>
              <p className="text-lg text-gray-600">Perfect 5/5 ratings across all categories</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Fast forward to today, and the Professionals McDowell client success story continues with exceptional 
              performance data that validates every aspect of their strategic approach. Recent management assessments reveal 
              something remarkable: perfect 5/5 ratings across all performance categories, with management declaring team 
              members "irreplaceable" and "amazing in all aspects."
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Property Management Specialist */}
              <Card className="bg-lime-50 border-lime-200">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Award className="w-10 h-10 text-lime-600 mx-auto mb-2" />
                    <h3 className="text-xl font-bold text-gray-900">Property Management Specialist</h3>
                    <div className="flex gap-1 justify-center mt-2">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-lime-600 text-lime-600" />)}
                    </div>
                    <p className="text-gray-600 text-sm mt-1">Perfect Performance Rating</p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded p-3">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">Key Achievements:</h4>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• Exceptional attention to detail</li>
                        <li>• Proactive problem-solving approach</li>
                        <li>• Seamless team integration</li>
                        <li>• Outstanding reliability and communication</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white rounded border-l-4 border-lime-600">
                    <p className="text-gray-900 font-semibold text-sm italic">
                      "We would be lost without our team member - amazing at what she does"
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Admin Officer Excellence */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto mb-2" />
                    <h3 className="text-xl font-bold text-gray-900">Admin Officer Excellence</h3>
                    <div className="flex gap-1 justify-center mt-2">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-green-600 text-green-600" />)}
                    </div>
                    <p className="text-gray-600 text-sm mt-1">Excellent Performance Rating</p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded p-3">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">Key Strengths:</h4>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• Consistently high-quality work output</li>
                        <li>• Excellent task management skills</li>
                        <li>• Strong collaborative approach</li>
                        <li>• Reliable performance standards</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white rounded border-l-4 border-green-600">
                    <p className="text-gray-900 font-semibold text-sm italic">
                      "Very reliable and considerate team member with excellent performance"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200 mt-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Consistent Excellence Across All Performance Categories
                </h3>
                <div className="grid md:grid-cols-5 gap-4 mb-6">
                  {['Quality', 'Reliability', 'Communication', 'Teamwork', 'Attendance'].map((category) => (
                    <div key={category} className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <div className="flex gap-1 justify-center mb-2">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-lime-600 text-lime-600" />)}
                      </div>
                      <p className="text-sm font-semibold text-gray-900">{category}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white border-l-4 border-lime-600 p-4 rounded">
                  <p className="text-gray-900 font-bold text-center">
                    Management Recommendation: Continue Employment with highest satisfaction ratings
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Video Testimonial */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Video className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Steve Lovegrove Video Testimonial</h2>
              <p className="text-lg text-gray-600">Authentic validation from New Zealand real estate</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Steve Lovegrove from Professionals McDowell Real Estate provides authentic validation of the systematic virtual 
              assistant excellence that transformed their New Zealand operations. This testimonial demonstrates real-world 
              impact of strategic offshore partnerships that deliver consistent results over multiple years.
            </p>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
              <CardContent className="p-8">
                <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Play className="w-20 h-20 mx-auto mb-4 opacity-80" />
                    <p className="text-gray-300">Professionals McDowell Success Testimonial</p>
                    <p className="text-sm text-gray-400 mt-2">Watch the full video on YouTube</p>
                  </div>
                </div>
                <div className="text-center">
                  <a 
                    href="https://www.youtube.com/watch?v=0zmAXezI9gw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Full Testimonial
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-lime-50 border-lime-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Success Factors</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Target className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Strategic Implementation</h4>
                      <p className="text-gray-700 text-sm">Conservative start with specialized roles, systematic scaling approach</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Award className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Performance Excellence</h4>
                      <p className="text-gray-700 text-sm">Perfect 5/5 ratings across all performance categories consistently</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Globe className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">New Zealand Expertise</h4>
                      <p className="text-gray-700 text-sm">Specialized AML compliance and REINZ protocol mastery</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Heart className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Long-term Partnership</h4>
                      <p className="text-gray-700 text-sm">Multi-year relationship built on trust and consistent results</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* New Zealand Compliance Mastery */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Shield className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">New Zealand Compliance Mastery</h2>
              <p className="text-lg text-gray-600">Specialized AML and REINZ protocol expertise</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              What makes the Professionals McDowell client success story particularly impressive is the sophisticated 
              regulatory environment that New Zealand real estate professionals navigate daily. This isn't basic administrative 
              support - it's specialized compliance management that requires deep understanding of REINZ requirements, AML 
              protocols, and the unique operational demands of New Zealand property markets.
            </p>
            
            <p className="mb-8">
              Most offshore providers offer generic training and hope for the best. The Professionals McDowell client success 
              demonstrates what happens when you implement systematic approaches that address the specific regulatory and 
              operational complexities that New Zealand real estate professionals face every day.
            </p>

            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">New Zealand Real Estate Compliance Specialization</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-lime-600">
                    <div className="flex items-start gap-3 mb-3">
                      <Shield className="w-8 h-8 text-lime-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">AML Compliance Excellence</h4>
                        <p className="text-gray-700 mb-3 text-sm italic">
                          "Our team member takes a massive amount of skill to keep our compliance of sales in line particularly 
                          with our AML requirements."
                        </p>
                        <p className="text-gray-700 text-sm">
                          Anti-Money Laundering regulations require meticulous attention to detail and deep understanding of 
                          New Zealand financial compliance protocols.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-green-600">
                    <div className="flex items-start gap-3 mb-3">
                      <Building2 className="w-8 h-8 text-green-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Property Management Coordination</h4>
                        <p className="text-gray-700 mb-3 text-sm italic">
                          "Learned a number of new tasks in the last 6 months and has coped well with this."
                        </p>
                        <p className="text-gray-700 text-sm">
                          Complex property management workflows, tenant relations, and regulatory coordination across multiple 
                          properties.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-600">
                    <div className="flex items-start gap-3 mb-3">
                      <FileCheck className="w-8 h-8 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Marketing & Client Care</h4>
                        <p className="text-gray-700 mb-3 text-sm italic">
                          "Hard work and attention to detail provides a safe, sound completion of marketing & client care."
                        </p>
                        <p className="text-gray-700 text-sm">
                          Professional marketing campaigns and high-level client relationship management for competitive market 
                          positioning.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">CEO Insight: Why New Zealand Success Matters</h3>
                <div className="space-y-4 text-gray-700">
                  <p className="italic text-sm">
                    "New Zealand's regulatory environment is particularly demanding for real estate professionals. AML compliance 
                    isn't something you can train overnight - it requires systematic understanding and meticulous attention to 
                    detail. When Steve's team consistently delivers perfect compliance support, it validates our approach to 
                    specialized industry training."
                  </p>
                  <p className="italic text-sm">
                    "Steve's success demonstrates why we focus on systematic, long-term partnerships rather than quick outsourcing 
                    solutions. Six years of perfect performance reviews don't happen by accident - they result from methodical 
                    implementation and ongoing professional development."
                  </p>
                  <div className="bg-white border-l-4 border-lime-600 p-4 rounded">
                    <p className="text-gray-900 font-semibold text-sm">— Stephen Atcheler, CEO ShoreAgents</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Partnership Evolution Excellence */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Partnership Evolution Excellence</h2>
              <p className="text-lg text-gray-600">From conservative start to irreplaceable team members</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              The Professionals McDowell client success story demonstrates something crucial about systematic offshore 
              partnerships: they improve over time. From that initial conservative decision to the perfect performance reviews 
              being earned today, every aspect of this partnership reflects the compound benefits of strategic, long-term 
              approaches to virtual assistant integration.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Long-Term Partnership Evolution Timeline</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 border-l-4 border-lime-600">
                    <div className="flex items-start gap-4">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Early Phase: Strategic Foundation</h4>
                        <p className="text-gray-700 text-sm">
                          Conservative start with 2 specialized roles, systematic integration approach, process development
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border-l-4 border-green-600">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Development Phase: Skill Building</h4>
                        <p className="text-gray-700 text-sm">
                          Mastery of AML compliance, property management coordination, cultural integration excellence
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Excellence Phase: Performance Recognition</h4>
                        <p className="text-gray-700 text-sm">
                          Perfect 5/5 performance reviews, management recognition, irreplaceable team member status
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border-l-4 border-purple-600">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                        ∞
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Current Phase: Continued Growth</h4>
                        <p className="text-gray-700 text-sm">
                          Expanding capabilities, new task integration, strategic partnership maturation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Achievement: From conservative start to irreplaceable team members through systematic partnership development
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-50 to-red-50 border-pink-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Management Testimonial Evolution</h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg border-l-4 border-pink-600">
                    <h4 className="font-bold text-gray-900 mb-2">Early Partnership Assessment</h4>
                    <p className="text-gray-700 italic">
                      "We love our team member to pieces! If we could clone her we would. She will always be the best person 
                      we have ever trained."
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border-l-4 border-red-600">
                    <h4 className="font-bold text-gray-900 mb-2">Recent Partnership Assessment</h4>
                    <p className="text-gray-700 italic">
                      "Everything our team member does is amazing in all aspects and we cannot fault her on anything!"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Steve's Blueprint */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Lightbulb className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Follow Steve's Blueprint</h2>
              <p className="text-lg text-gray-600">Build your own "if we could clone them" team members</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Steve Lovegrove's approach wasn't complicated—it was smart. He understood something most real estate professionals 
              miss: the difference between quick fixes and sustainable solutions. Here's exactly how to follow his blueprint and 
              create your own "if we could clone them" team members.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Steve's Exact 4-Step Blueprint (Copy This Process)</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-lime-600" />
                      Step 1: Start Conservative with 2 Specialized Roles
                    </h4>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>What Steve Did:</strong> Property Management Assistant + Admin Officer focused on compliance
                    </p>
                    <div className="bg-lime-50 p-3 rounded">
                      <p className="text-gray-900 font-semibold text-xs">
                        Why This Works: Manageable integration, clear role definition, proof of concept before expansion
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-lime-600" />
                      Step 2: Focus on Systematic Integration, Not Quick Results
                    </h4>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>What Steve Did:</strong> Invested time in process documentation, cultural adaptation, gradual skill development
                    </p>
                    <div className="bg-lime-50 p-3 rounded">
                      <p className="text-gray-900 font-semibold text-xs">
                        Why This Works: Creates sustainable competence vs temporary task completion
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-lime-600" />
                      Step 3: Master Compliance-Level Tasks Before Expansion
                    </h4>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>What Steve Did:</strong> Developed AML expertise, REINZ protocol mastery, complex property management coordination
                    </p>
                    <div className="bg-lime-50 p-3 rounded">
                      <p className="text-gray-900 font-semibold text-xs">
                        Why This Works: Builds irreplaceable expertise vs easily replaceable task completion
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-lime-600" />
                      Step 4: Commit to Long-Term Partnership Development
                    </h4>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>What Steve Did:</strong> Treated team members as partners, invested in ongoing development, maintained consistent standards
                    </p>
                    <div className="bg-lime-50 p-3 rounded">
                      <p className="text-gray-900 font-semibold text-xs">
                        Why This Works: Creates "if we could clone them" loyalty vs high turnover employment
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Reality Check: Why Most People Fail (And How Steve Succeeded)</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-600">
                    <p className="text-gray-900 font-semibold mb-2">The Common Mistake:</p>
                    <p className="text-gray-700 text-sm">
                      Most business owners want to hire 5 people immediately, get instant results, and expect perfect performance 
                      without investment. They treat offshore staffing like ordering from Amazon—quick, cheap, and disposable.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-lime-600">
                    <p className="text-gray-900 font-semibold mb-2">Steve's Different Approach:</p>
                    <p className="text-gray-700 text-sm">
                      He understood that building irreplaceable team members takes time, systematic processes, and mutual commitment. 
                      He started small, focused on quality over quantity, and invested in long-term capability development.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-600">
                    <p className="text-gray-900 font-semibold mb-2">The Result:</p>
                    <p className="text-gray-700 text-sm">
                      Six years later, Steve's team members earn perfect 5/5 reviews while his competitors are still cycling through 
                      cheap replacements. His approach created sustainable competitive advantage.
                    </p>
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
            Ready to Build Your Own "If We Could Clone Them" Team?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Follow Steve's proven blueprint: start conservative with specialized roles, focus on systematic integration, 
            and commit to long-term partnership development. Six years of perfect 5/5 reviews prove this methodology works.
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
