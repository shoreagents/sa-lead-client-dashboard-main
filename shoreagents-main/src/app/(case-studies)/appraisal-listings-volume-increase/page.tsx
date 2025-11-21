"use client";

import { SideNav } from "@/components/layout/SideNav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Target, 
  Building2, 
  Award, 
  Globe, 
  Star,
  Zap,
  Home,
  Shield,
  FileText,
  Video,
  DollarSign,
  ArrowRight,
  XCircle,
  MessageSquare,
  Rocket,
  ThumbsUp,
  RefreshCw,
  Phone
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function AppraisalListingsVolumeIncreasePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[{"name":"Case Studies","url":"https://www.shoreagents.com/case-studies"},{"name":"Levi Turner","url":"https://www.shoreagents.com/appraisal-listings-volume-increase"}]} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-red-600 text-white mb-4 text-sm px-3 py-1">
              🚨 REVEALED: 25% Volume Increase Through One Strategic Hire
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Bellarine Property Client Success:<br />
              <span className="text-lime-600">How One Virtual Assistant Delivered 25% Volume Growth</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              When Levi Turner hired just one virtual assistant, he discovered something remarkable. Instead of just saving time, 
              he achieved a <strong>25% increase in appraisal listings and sales volume</strong>. This Bellarine Property client 
              success story shows how the right offshore support transforms efficiency into measurable business growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/pricing" 
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
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-lime-50 to-green-50 border-l-4 border-lime-500">
            <CardContent className="p-8">
              <blockquote className="text-xl text-gray-800 italic mb-6 leading-relaxed">
                &quot;We&apos;ve had almost a 25% increase in volume of appraisal listings and sales. I could recommend 
                ShoreAgents more highly enough just to further improve the efficiency and effectiveness of how you work.&quot;
              </blockquote>
              <div className="border-t border-lime-200 pt-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Levi Turner</div>
                    <div className="text-gray-700">Bellarine Property</div>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      <span>Australia</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>1 Strategic Hire</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Intro */}
        <div className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Picture this: You&apos;re a property professional who understands the power of leverage. You know administrative 
            tasks are stealing your dollar-productive time. So you make one strategic hire. The result? <strong>Not just 
            efficiency—but a 25% increase in volume</strong>. That&apos;s the Bellarine Property client success blueprint.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            How a strategic single virtual assistant hire delivered 25% volume growth and operational excellence for an 
            Australian property professional.
          </p>
        </div>

        <Separator className="my-12" />

        {/* Strategic One Agent Approach */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Target className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Strategic One Agent Approach</h2>
              <p className="text-lg text-gray-600">Quality over quantity, systems over shortcuts</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Levi Turner didn&apos;t follow the typical pattern of overwhelming himself with multiple hires. Instead, he chose 
            the methodical approach that smart business owners understand: start with one excellent virtual assistant 
            and perfect the system before scaling. This decision would prove to be the foundation of his remarkable volume growth.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            The genius of Levi&apos;s approach wasn&apos;t about cutting costs—it was about strategic leverage. While many 
            property professionals get caught up in administrative tasks that prevent them from focusing on appraisals and 
            client relationships, Levi understood that the right offshore support could free him to do what only he could do: 
            build relationships and grow his business through our proven real estate virtual assistant methodology.
          </p>

          <Card className="bg-lime-50 border-lime-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Numbers That Tell the Real Story</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-lime-600 mb-2">25%</div>
                  <div className="font-semibold text-gray-900">Volume Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-lime-600 mb-2">1</div>
                  <div className="font-semibold text-gray-900">Strategic Hire</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-lime-600 mb-2">Perfect</div>
                  <div className="font-semibold text-gray-900">Performance</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-lime-600 mb-2">Ongoing</div>
                  <div className="font-semibold text-gray-900">Partnership</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-lime-600">
                <p className="text-gray-800 italic leading-relaxed">
                  &quot;I could recommend ShoreAgents more highly enough just to further improve the efficiency and effectiveness of how you work&quot;
                </p>
              </div>
            </CardContent>
          </Card>

          <p className="mt-8 text-lg text-gray-700 leading-relaxed">
            This Bellarine Property client success demonstrates something crucial: when you make the right hire 
            with the right system, the results compound. Levi&apos;s 25% volume increase wasn&apos;t just about 
            having help—it was about strategic implementation that freed him to focus on the activities that directly 
            generate revenue and build long-term business value.
          </p>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            The one agent approach proved that you don&apos;t need massive teams to achieve significant results. You need 
            the right person, the right processes, and the systematic approach that turns offshore support into a genuine 
            competitive advantage through our comprehensive real estate outsourcing solutions.
          </p>
        </section>

        <Separator className="my-12" />

        {/* Outstanding Performance Excellence */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Star className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">&quot;Outstanding&quot; Performance Excellence</h2>
              <p className="text-lg text-gray-600">Sustained excellence over time, not just initial results</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The true measure of successful offshore partnerships isn&apos;t just immediate results—it&apos;s sustained 
            excellence over time. Levi&apos;s virtual assistant consistently earns perfect performance scores across 
            every evaluation category, with Levi describing the performance as &quot;outstanding,&quot; &quot;excellent,&quot; 
            and calling his VA &quot;a gun&quot; in professional assessments.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            These aren&apos;t token testimonials or manufactured reviews. These are real performance evaluations 
            conducted by Levi Turner for Bellarine Property, documenting the caliber of professional support that enables 25% 
            volume growth while maintaining operational excellence through our systematic virtual assistant approach.
          </p>

          <Card className="bg-lime-50 border-lime-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfect Performance Across All Categories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Target className="w-8 h-8 text-lime-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Quality Excellence</h4>
                  <p className="text-gray-700 text-sm">Completes high-quality work, follows standards and procedures perfectly, maintains complete records with attention to detail</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Shield className="w-8 h-8 text-lime-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Reliability Perfection</h4>
                  <p className="text-gray-700 text-sm">&quot;Unbelievably reliable and committed to his work&quot; with outstanding attendance and dependability</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <MessageSquare className="w-8 h-8 text-lime-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Communication Mastery</h4>
                  <p className="text-gray-700 text-sm">Organizes and expresses ideas clearly with appropriate and efficient communication methods</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <TrendingUp className="w-8 h-8 text-lime-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Professional Growth</h4>
                  <p className="text-gray-700 text-sm">Continually looks for ways to improve quality, applies feedback effectively to enhance performance</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-lime-600 mt-6">
                <p className="text-gray-800 font-semibold mb-2">
                  Management Assessment: &quot;Commitment, Loyalty, Reliable&quot; — Three Most Significant Accomplishments
                </p>
                <p className="text-gray-800 font-semibold">
                  Management Recommendation: &quot;Salary Increase, Continue Employment&quot;
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-lime-200 mt-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Levi&apos;s Direct Management Assessment</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <Star className="w-6 h-6 text-lime-600 mb-2" />
                  <h4 className="font-bold text-gray-900 mb-1">Professional Excellence</h4>
                  <p className="text-gray-700 text-sm italic">&quot;No projects in particular. Just everything is always spot on&quot;</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-lime-600 mb-2" />
                  <h4 className="font-bold text-gray-900 mb-1">Zero Improvement Areas</h4>
                  <p className="text-gray-700 text-sm">Performance so consistent that no areas for improvement could be identified</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <DollarSign className="w-6 h-6 text-lime-600 mb-2" />
                  <h4 className="font-bold text-gray-900 mb-1">Earned Recognition</h4>
                  <p className="text-gray-700 text-sm">Salary increase recommended based on exceptional performance standards</p>
                </div>
              </div>
              <p className="text-gray-700 mt-4">
                When business owners consistently rate performance as perfect across all categories and specifically recommend 
                salary increases, it validates the systematic approach that enables both operational excellence and business growth. 
                This level of professional performance is what transforms single virtual assistant hires into 25% volume increases.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Video Testimonial */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Video className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Levi Turner&apos;s Direct Testimonial: 25% Volume Increase Validation</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  Hear directly from Levi about how strategic virtual assistant implementation delivered measurable 25% volume growth for Bellarine Property.
                </p>
                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Success Factors from Levi&apos;s Implementation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <TrendingUp className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Measurable Growth</h4>
                        <p className="text-gray-700 text-sm">25% increase in appraisal listings and sales volume</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Efficiency Focus</h4>
                        <p className="text-gray-700 text-sm">Improved effectiveness of daily operations</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Strategic Implementation</h4>
                        <p className="text-gray-700 text-sm">One agent approach with systematic excellence</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ThumbsUp className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Strong Recommendation</h4>
                        <p className="text-gray-700 text-sm">Enthusiastic endorsement for other businesses</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Efficiency Revolution */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Zap className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Bellarine Property Client Success: The Efficiency Revolution</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Levi Turner&apos;s results reveal the true impact of strategic virtual assistant implementation. His business transformation demonstrates how the right offshore support creates measurable growth that goes far beyond simple cost savings.
                </p>
                <p className="mb-6">
                  This efficiency transformation didn&apos;t happen overnight—it was the result of systematic implementation where the right virtual assistant took ownership of administrative processes, freeing Levi to focus entirely on revenue-generating activities. The 25% volume increase represents the compound effect of operational excellence meeting strategic focus.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">How One Strategic Hire Transforms Business Operations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <FileText className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Administrative Mastery</h4>
                      <p className="text-gray-700 text-sm">Complete ownership of listing processes, client communication, and data management with perfect accuracy</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Target className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Strategic Focus</h4>
                      <p className="text-gray-700 text-sm">Levi freed to concentrate entirely on appraisals, client relationships, and business development activities</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <TrendingUp className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Volume Growth</h4>
                      <p className="text-gray-700 text-sm">25% increase in appraisal listings and sales as direct result of operational efficiency</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <RefreshCw className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">System Reliability</h4>
                      <p className="text-gray-700 text-sm">Consistent performance enabling predictable business growth and operational stability</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-lime-600 mt-6">
                    <p className="text-gray-800 font-semibold text-center">
                      Efficiency + Effectiveness = 25% Volume Growth Through Strategic Leverage
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  The Bellarine Property client success story demonstrates something crucial about offshore staffing: when you hire the right person with the right system, you don&apos;t just get task completion—you get business transformation. Levi&apos;s ability to increase volume by 25% while maintaining perfect operational standards validates the strategic approach to virtual assistant implementation.
                </p>
                <p className="mt-4">
                  This efficiency revolution proves that the goal isn&apos;t to find cheap labor—it&apos;s to implement systematic solutions that enable business owners to focus on what only they can do while ensuring everything else operates at the highest professional standards through our proven outsourcing methodology.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Following Levi's Blueprint */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Rocket className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Following Levi&apos;s Blueprint: Your Path to 25% Growth</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Levi&apos;s approach wasn&apos;t complicated—it was strategic. He started with one excellent virtual assistant, focused on quality over quantity, and built systems that enabled perfect performance scores and measurable business growth. Here&apos;s exactly how to replicate his blueprint for your own property business.
                </p>
                <p className="mb-6">
                  The Bellarine Property client success story proves that you don&apos;t need massive teams or complex implementations to achieve significant results. You need the right person, the right processes, and the patience to build excellence systematically.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Levi&apos;s Proven Implementation Strategy</h3>
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
                        <h4 className="font-bold text-gray-900 text-lg">Start with One Strategic Hire</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Levi chose the smart path: one excellent virtual assistant rather than multiple mediocre hires. This allowed him to perfect the working relationship, establish clear communication, and build trust through consistent performance before considering expansion.</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
                        <h4 className="font-bold text-gray-900 text-lg">Focus on Systems, Not Just Tasks</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Rather than just delegating individual tasks, Levi built comprehensive systems around administrative processes. This systematic approach enabled his VA to take complete ownership of operational areas, resulting in the &quot;everything is always spot on&quot; assessment.</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
                        <h4 className="font-bold text-gray-900 text-lg">Measure and Recognize Excellence</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Levi&apos;s regular performance evaluations and salary increase recommendations show how to build loyalty and maintain high standards. By recognizing exceptional performance, he created a partnership that delivers consistent results and continuous improvement.</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</div>
                        <h4 className="font-bold text-gray-900 text-lg">Reinvest Time in Revenue Activities</h4>
                      </div>
                      <p className="text-gray-700 text-sm">The secret to Levi&apos;s 25% volume increase: he immediately reinvested the freed time into appraisals and client relationships. This created a compounding effect where efficiency improvements directly translated to business growth and increased revenue generation.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Most Attempts Fail vs. What Levi Did Right</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-start mb-2">
                        <XCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900">Common Mistakes</p>
                          <ul className="text-gray-700 text-sm space-y-1 mt-1">
                            <li>• Hiring multiple VAs before perfecting one relationship</li>
                            <li>• Focusing on costs instead of quality and systems</li>
                            <li>• Poor communication and unclear expectations</li>
                            <li>• Not reinvesting saved time into revenue activities</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-start mb-2">
                        <CheckCircle2 className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900">Levi&apos;s Success Factors</p>
                          <ul className="text-gray-700 text-sm space-y-1 mt-1">
                            <li>• Strategic single hire with systematic quality focus</li>
                            <li>• Investment in proper systems and training</li>
                            <li>• Regular performance feedback and recognition</li>
                            <li>• Immediate reinvestment of time into business growth</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-lime-600 mt-6">
                    <p className="text-gray-800 font-semibold">
                      Levi&apos;s blueprint proves that sustainable business growth comes from strategic implementation, not shortcuts. His 25% volume increase and perfect performance scores demonstrate what happens when you approach offshore staffing as a business system rather than just a cost-cutting measure.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA Section */}
        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Ready to follow Levi&apos;s proven blueprint and achieve your own 25% volume increase through strategic virtual assistant implementation?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start with one strategic hire like Levi did, build systematic excellence, and reinvest your freed time into revenue-generating activities that drive measurable business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center px-8 py-4 bg-white text-lime-600 hover:bg-gray-100 font-bold text-lg rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule Your Consultation
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-lime-600 font-bold text-lg rounded-lg transition-colors"
            >
              <Home className="w-5 h-5 mr-2" />
              Real Estate Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
