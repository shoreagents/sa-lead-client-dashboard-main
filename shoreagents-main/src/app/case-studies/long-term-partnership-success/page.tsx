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
  Key,
  DollarSign,
  Calendar,
  Handshake,
  Code,
  Lightbulb,
  ArrowRight,
  Copy,
  AlertCircle,
  Video,
  CheckCircle2
} from 'lucide-react';
import Image from 'next/image';

export default function LongTermPartnershipSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-red-600 text-white px-4 py-2 text-lg mb-6">
            NEW ZEALAND BREAKTHROUGH: Long-Term Partnership Excellence
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            What Makes a Virtual Assistant &quot;Irreplaceable&quot;? The Professionals McDowell Discovery
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            When Professionals McDowell Real Estate in New Zealand started with ShoreAgents, they made a conservative choice that transformed their operations. Years later, their team members are earning perfect 5/5 performance ratings and management declares: &quot;If we could clone her we would.&quot; This Professionals McDowell client success story reveals systematic excellence.
          </p>
          
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
              alt="Professionals McDowell Real Estate Operations"
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
                    alt="Schultz Realty Ltd Maungaturoto"
                    width={100}
                    height={100}
                    className="mx-auto rounded-full"
                  />
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  &quot;Outsourcing will change the dynamics of your business and certainly make you way more competitive in this very demanding market.&quot;
                </blockquote>
                <div className="text-gray-900 font-bold">Steve Lovegrove</div>
                <div className="text-gray-600">Professionals McDowell Real Estate, NZ</div>
                <div className="text-gray-600">Hired a Team</div>
                <div className="mt-2 flex items-center justify-center gap-2">
                  <Globe className="w-4 h-4 text-gray-600" />
                  <span>New Zealand</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Intro Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How Professionals McDowell Real Estate Built Their Dream Team with ShoreAgents
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            How Steve Lovegrove&apos;s strategic approach built a long-term partnership that defines systematic real estate virtual assistant excellence
          </p>
          <p className="text-lg text-gray-700">
            Picture this: New Zealand real estate professionals drowning in AML compliance requirements and administrative complexity. One strategic decision that changed everything. Years later, perfect performance reviews and irreplaceable team members. That&apos;s the Professionals McDowell client success story.
          </p>
        </div>

        {/* Strategic Foundation */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Professionals McDowell Client Success: The Strategic Foundation</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Steve Lovegrove from Professionals McDowell Real Estate made a decision that perfectly embodies what I tell every real estate professional: start conservative, prove the concept, then scale systematically. Instead of rushing into complex outsourcing arrangements, Steve chose a strategic approach that would define years of operational excellence.
                </p>
                <p className="mb-6">
                  The New Zealand real estate market presents unique challenges that most offshore providers simply don&apos;t understand. AML (Anti-Money Laundering) compliance requirements, REINZ regulations, and the sophisticated administrative demands of property management and sales coordination require specialized expertise, not generic training. Steve understood this from day one.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">The Strategic Conservative Approach That Built Success</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <FileText className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Two Specialized Roles</h4>
                      <p className="text-gray-700 text-sm">Property Management Assistant + Admin Officer focused on NZ compliance</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <Target className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Systematic Integration</h4>
                      <p className="text-gray-700 text-sm">Gradual skill development, process documentation, cultural adaptation</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <Handshake className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Long-term Vision</h4>
                      <p className="text-gray-700 text-sm">Building sustainable partnership vs short-term cost cutting</p>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-6 font-semibold">
                    This strategic foundation set the stage for what would become a model partnership.
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
                <FileText className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Professionals McDowell Client Success: Performance Excellence Reality</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Fast forward to today, and the Professionals McDowell client success story continues with exceptional performance data that validates every aspect of their strategic approach. Recent management assessments reveal something remarkable: perfect 5/5 ratings across all performance categories, with management declaring team members &quot;irreplaceable&quot; and &quot;amazing in all aspects.&quot;
                </p>
                <p className="mb-6">
                  These aren&apos;t theoretical testimonials or marketing fabrications. These are real management assessments conducted by Steve&apos;s team, documenting the caliber of property management virtual assistant excellence that systematic approaches deliver when implemented correctly.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">Property Management Specialist</h3>
                      <div className="bg-lime-600 text-white px-4 py-2 rounded-full font-bold">5/5</div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">Perfect Performance Rating</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Exceptional attention to detail</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Proactive problem-solving approach</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Seamless team integration</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Outstanding reliability and communication</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 border-l-4 border-lime-600 p-3 rounded">
                      <p className="text-sm text-gray-800 italic">
                        &quot;We would be lost without our team member – amazing at what she does&quot;
                      </p>
                    </div>
                  </div>

                  <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">Admin Officer Excellence</h3>
                      <div className="bg-lime-600 text-white px-4 py-2 rounded-full font-bold">5/5</div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">Excellent Performance Rating</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Consistently high-quality work output</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Excellent task management skills</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Strong collaborative approach</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Reliable performance standards</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 border-l-4 border-lime-600 p-3 rounded">
                      <p className="text-sm text-gray-800 italic">
                        &quot;Very reliable and considerate team member with excellent performance&quot;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Consistent Excellence Across All Performance Categories</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center mb-4">
                    <div>
                      <div className="bg-lime-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 font-bold text-xl">5/5</div>
                      <p className="text-sm font-semibold text-gray-900">Quality</p>
                    </div>
                    <div>
                      <div className="bg-lime-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 font-bold text-xl">5/5</div>
                      <p className="text-sm font-semibold text-gray-900">Reliability</p>
                    </div>
                    <div>
                      <div className="bg-lime-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 font-bold text-xl">5/5</div>
                      <p className="text-sm font-semibold text-gray-900">Communication</p>
                    </div>
                    <div>
                      <div className="bg-lime-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 font-bold text-xl">5/5</div>
                      <p className="text-sm font-semibold text-gray-900">Teamwork</p>
                    </div>
                    <div>
                      <div className="bg-lime-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 font-bold text-xl">5/5</div>
                      <p className="text-sm font-semibold text-gray-900">Attendance</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded">
                    <p className="text-gray-800 font-semibold">
                      Management Recommendation: Continue Employment with highest satisfaction ratings
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  These performance results demonstrate exactly why the Professionals McDowell client success story continues to strengthen year after year. When offshore team members consistently deliver this level of excellence across all performance categories, it validates the systematic approach to real estate outsourcing that creates sustainable competitive advantage.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Testimonial */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Video className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Professionals McDowell Client Success: Steve Lovegrove Video Testimonial</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  Steve Lovegrove from Professionals McDowell Real Estate provides authentic validation of the systematic virtual assistant excellence that transformed their New Zealand operations. This Professionals McDowell client success testimonial demonstrates real-world impact of strategic offshore partnerships that deliver consistent results over multiple years.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Success Factors from Professionals McDowell Implementation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Target className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Strategic Implementation</h4>
                        <p className="text-gray-700 text-sm">Conservative start with specialized roles, systematic scaling approach</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Award className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Performance Excellence</h4>
                        <p className="text-gray-700 text-sm">Perfect 5/5 ratings across all performance categories consistently</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">New Zealand Expertise</h4>
                        <p className="text-gray-700 text-sm">Specialized AML compliance and REINZ protocol mastery</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Handshake className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Long-term Partnership</h4>
                        <p className="text-gray-700 text-sm">Multi-year relationship built on trust and consistent results</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* New Zealand Compliance Mastery */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Globe className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Professionals McDowell Client Success: New Zealand Compliance Mastery</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  What makes the Professionals McDowell client success story particularly impressive is the sophisticated regulatory environment that New Zealand real estate professionals navigate daily. This isn&apos;t basic administrative support – it&apos;s specialized compliance management that requires deep understanding of REINZ requirements, AML protocols, and the unique operational demands of New Zealand property markets.
                </p>
                <p className="mb-6">
                  Most offshore providers offer generic training and hope for the best. The Professionals McDowell client success demonstrates what happens when you implement systematic approaches that address the specific regulatory and operational complexities that New Zealand real estate professionals face every day.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">New Zealand Real Estate Compliance Specialization</h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center mb-3">
                        <Shield className="w-8 h-8 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900">AML Compliance Excellence</h4>
                      </div>
                      <p className="text-gray-700 mb-2 text-sm">
                        Management Quote: &quot;Our team member takes a massive amount of skill to keep our compliance of sales in line particularly with our AML requirements.&quot;
                      </p>
                      <p className="text-gray-600 text-sm">
                        Anti-Money Laundering regulations require meticulous attention to detail and deep understanding of New Zealand financial compliance protocols.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center mb-3">
                        <Home className="w-8 h-8 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900">Property Management Coordination</h4>
                      </div>
                      <p className="text-gray-700 mb-2 text-sm">
                        Achievement: &quot;Learned a number of new tasks in the last 6 months and has coped well with this.&quot;
                      </p>
                      <p className="text-gray-600 text-sm">
                        Complex property management workflows, tenant relations, and regulatory coordination across multiple properties.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center mb-3">
                        <FileText className="w-8 h-8 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900">Marketing & Client Care</h4>
                      </div>
                      <p className="text-gray-700 mb-2 text-sm">
                        Recognition: &quot;Hard work and attention to detail provides a safe, sound completion of marketing & client care.&quot;
                      </p>
                      <p className="text-gray-600 text-sm">
                        Professional marketing campaigns and high-level client relationship management for competitive market positioning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Partnership Evolution */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Handshake className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Professionals McDowell Client Success: Partnership Evolution Excellence</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The Professionals McDowell client success story demonstrates something crucial about systematic offshore partnerships: they improve over time. From that initial conservative decision to the perfect performance reviews being earned today, every aspect of this partnership reflects the compound benefits of strategic, long-term approaches to virtual assistant integration.
                </p>
                <p className="mb-6">
                  Most businesses approach offshore staffing as a cost-cutting measure with short-term thinking. The Professionals McDowell client success methodology reveals what happens when you treat offshore partnerships as strategic investments in business capability development. Years later, their team members aren&apos;t just performing tasks – they&apos;re integral to business operations.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Long-Term Partnership Evolution Timeline</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2">Early Phase: Strategic Foundation</h4>
                        <p className="text-gray-700 text-sm">Conservative start with 2 specialized roles, systematic integration approach, process development</p>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-lime-600 mx-auto my-2" />
                    <div className="flex items-start">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2">Development Phase: Skill Building</h4>
                        <p className="text-gray-700 text-sm">Mastery of AML compliance, property management coordination, cultural integration excellence</p>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-lime-600 mx-auto my-2" />
                    <div className="flex items-start">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2">Excellence Phase: Performance Recognition</h4>
                        <p className="text-gray-700 text-sm">Perfect 5/5 performance reviews, management recognition, irreplaceable team member status</p>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-lime-600 mx-auto my-2" />
                    <div className="flex items-start">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2">Current Phase: Continued Growth</h4>
                        <p className="text-gray-700 text-sm">Expanding capabilities, new task integration, strategic partnership maturation</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-6 font-semibold">
                    Achievement: From conservative start to irreplaceable team members through systematic partnership development
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded">
                    <h4 className="font-bold text-gray-900 mb-2">Early Partnership Assessment</h4>
                    <p className="text-gray-800 italic text-sm">
                      &quot;We love our team member to pieces! If we could clone her we would. She will always be the best person we have ever trained.&quot;
                    </p>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded">
                    <h4 className="font-bold text-gray-900 mb-2">Recent Partnership Assessment</h4>
                    <p className="text-gray-800 italic text-sm">
                      &quot;Everything our team member does is amazing in all aspects and we cannot fault her on anything!&quot;
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  This six-year partnership evolution demonstrates that successful offshore relationships aren&apos;t built overnight – they develop through systematic approaches, consistent quality, and mutual commitment to excellence. The Professionals McDowell client success story validates our methodology for building sustainable virtual assistant partnerships that strengthen over time.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Steve's Blueprint */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Zap className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">How You Can Follow Steve&apos;s Blueprint to Build Your Own Perfect Partnership</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Steve Lovegrove&apos;s approach wasn&apos;t complicated—it was smart. He understood something most real estate professionals miss: the difference between quick fixes and sustainable solutions. Here&apos;s exactly how to follow his blueprint and create your own &quot;if we could clone them&quot; team members.
                </p>
                <p className="mb-6">
                  The key insight from Steve&apos;s success is that he treated this like building a business partnership, not hiring cheap labor. Six years later, his team members aren&apos;t just employees—they&apos;re integral to operations. Here&apos;s his exact playbook you can copy:
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Steve&apos;s Exact 4-Step Blueprint (Copy This Process)</h3>
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
                        <h4 className="font-bold text-gray-900 text-lg">Start Conservative with 2 Specialized Roles</h4>
                      </div>
                      <p className="text-gray-700 mb-2"><strong>What Steve Did:</strong> Property Management Assistant + Admin Officer focused on compliance</p>
                      <p className="text-gray-700"><strong>Why This Works:</strong> Manageable integration, clear role definition, proof of concept before expansion</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
                        <h4 className="font-bold text-gray-900 text-lg">Focus on Systematic Integration, Not Quick Results</h4>
                      </div>
                      <p className="text-gray-700 mb-2"><strong>What Steve Did:</strong> Invested time in process documentation, cultural adaptation, gradual skill development</p>
                      <p className="text-gray-700"><strong>Why This Works:</strong> Creates sustainable competence vs temporary task completion</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
                        <h4 className="font-bold text-gray-900 text-lg">Master Compliance-Level Tasks Before Expansion</h4>
                      </div>
                      <p className="text-gray-700 mb-2"><strong>What Steve Did:</strong> Developed AML expertise, REINZ protocol mastery, complex property management coordination</p>
                      <p className="text-gray-700"><strong>Why This Works:</strong> Builds irreplaceable expertise vs easily replaceable task completion</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</div>
                        <h4 className="font-bold text-gray-900 text-lg">Commit to Long-Term Partnership Development</h4>
                      </div>
                      <p className="text-gray-700 mb-2"><strong>What Steve Did:</strong> Treated team members as partners, invested in ongoing development, maintained consistent standards</p>
                      <p className="text-gray-700"><strong>Why This Works:</strong> Creates &quot;if we could clone them&quot; loyalty vs high turnover employment</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6 mt-6">
                  <div className="flex items-start">
                    <AlertCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Reality Check: Why Most People Fail (And How Steve Succeeded)</h4>
                      <p className="text-gray-700 mb-2"><strong>The Common Mistake:</strong> Most business owners want to hire 5 people immediately, get instant results, and expect perfect performance without investment. They treat offshore staffing like ordering from Amazon—quick, cheap, and disposable.</p>
                      <p className="text-gray-700 mb-2"><strong>Steve&apos;s Different Approach:</strong> He understood that building irreplaceable team members takes time, systematic processes, and mutual commitment. He started small, focused on quality over quantity, and invested in long-term capability development.</p>
                      <p className="text-gray-700"><strong>The Result:</strong> Six years later, Steve&apos;s team members earn perfect 5/5 reviews while his competitors are still cycling through cheap replacements. His approach created sustainable competitive advantage.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Your Practical Implementation Guide (Start This Week)</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Calendar className="w-6 h-6 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Week 1: Define Your Two Roles</h4>
                        <p className="text-gray-700 text-sm">Identify your two highest-impact administrative bottlenecks. For most real estate professionals: property management coordination + compliance/admin support.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FileText className="w-6 h-6 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Week 2: Document Your Processes</h4>
                        <p className="text-gray-700 text-sm">Create step-by-step procedures for your most critical tasks. Don&apos;t expect perfect training—plan to do the training yourself initially.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Handshake className="w-6 h-6 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Week 3: Set Partnership Expectations</h4>
                        <p className="text-gray-700 text-sm">Commit to 6-month minimum partnership, systematic skill development, and treating team members as business partners, not disposable employees.</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">
                    Steve&apos;s success isn&apos;t magic—it&apos;s methodology. He followed a systematic approach that you can replicate. The question isn&apos;t whether this works (six years of perfect performance reviews prove it does), but whether you&apos;re willing to invest in building sustainable partnerships rather than looking for quick fixes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA Section */}
        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Ready to follow Steve&apos;s proven blueprint and build your own &quot;if we could clone them&quot; team members?</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you&apos;re drowning in compliance requirements like Steve was, or simply need systematic administrative support, his conservative approach and long-term partnership mindset can transform your real estate operations.
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
