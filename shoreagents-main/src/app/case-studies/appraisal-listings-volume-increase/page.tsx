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
  Sparkles,
  Percent
} from 'lucide-react';
import Image from 'next/image';

export default function AppraisalListingsVolumeIncreasePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-red-600 text-white px-4 py-2 text-lg mb-6">
            REVEALED: 25% Volume Increase Through One Strategic Hire
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            25% Volume Increase: How One Virtual Assistant Transformed Bellarine Property&apos;s Operations
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            When Levi Turner hired just one virtual assistant, he discovered something remarkable. Instead of just saving time, he achieved a 25% increase in appraisal listings and sales volume. This Bellarine Property client success story shows how the right offshore support transforms efficiency into measurable business growth.
          </p>
          
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
              alt="Bellarine Property Operations"
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
                    alt="Bellarine Property Logo"
                    width={100}
                    height={100}
                    className="mx-auto rounded-full"
                  />
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  &quot;We&apos;ve had almost a 25% increase in volume of appraisal listings and sales. I could recommend ShoreAgents more highly enough just to further improve the efficiency and effectiveness of how you work.&quot;
                </blockquote>
                <div className="text-gray-900 font-bold">Levi Turner</div>
                <div className="text-gray-600">Bellarine Property, AU</div>
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
            Bellarine Property Client Success: The One Agent Game-Changer
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            How a strategic single virtual assistant hire delivered 25% volume growth and operational excellence for an Australian property professional
          </p>
          <p className="text-lg text-gray-700">
            Picture this: You&apos;re a property professional who understands the power of leverage. You know administrative tasks are stealing your dollar-productive time. So you make one strategic hire. The result? Not just efficiency—but a 25% increase in volume. That&apos;s the Bellarine Property client success blueprint.
          </p>
        </div>

        {/* Strategic One Agent Approach */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Bellarine Property Client Success: The Strategic One Agent Approach</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Levi Turner didn&apos;t follow the typical pattern of overwhelming himself with multiple hires. Instead, he chose the methodical approach that smart business owners understand: start with one excellent virtual assistant and perfect the system before scaling. This decision would prove to be the foundation of his remarkable volume growth.
                </p>
                <p className="mb-6">
                  The genius of Levi&apos;s approach wasn&apos;t about cutting costs—it was about strategic leverage. While many property professionals get caught up in administrative tasks that prevent them from focusing on appraisals and client relationships, Levi understood that the right offshore support could free him to do what only he could do: build relationships and grow his business through our proven real estate virtual assistant methodology.
                </p>
                <p className="mb-6">
                  This decision would prove to be the foundation of his remarkable volume growth through our strategic one agent approach that focuses on quality over quantity.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">The Numbers That Tell the Real Story</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                      <Percent className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                      <div className="text-4xl font-bold text-lime-600 mb-2">25%</div>
                      <h4 className="font-bold text-gray-900 mb-2">Volume Increase</h4>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                      <Users className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                      <div className="text-4xl font-bold text-lime-600 mb-2">1</div>
                      <h4 className="font-bold text-gray-900 mb-2">Strategic Hire</h4>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                      <Star className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                      <div className="text-4xl font-bold text-lime-600 mb-2">Perfect</div>
                      <h4 className="font-bold text-gray-900 mb-2">Performance Scores</h4>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                      <TrendingUp className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                      <div className="text-4xl font-bold text-lime-600 mb-2">Ongoing</div>
                      <h4 className="font-bold text-gray-900 mb-2">Partnership</h4>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold italic">
                      &quot;I could recommend ShoreAgents more highly enough just to further improve the efficiency and effectiveness of how you work&quot;
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  This Bellarine Property client success demonstrates something crucial: when you make the right hire with the right system, the results compound. Levi&apos;s 25% volume increase wasn&apos;t just about having help—it was about strategic implementation that freed him to focus on the activities that directly generate revenue and build long-term business value.
                </p>
                <p className="mt-4">
                  The one agent approach proved that you don&apos;t need massive teams to achieve significant results. You need the right person, the right processes, and the systematic approach that turns offshore support into a genuine competitive advantage through our comprehensive real estate outsourcing solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Outstanding Performance Excellence */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Star className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Bellarine Property Client Success: &quot;Outstanding&quot; Performance Excellence</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The true measure of successful offshore partnerships isn&apos;t just immediate results—it&apos;s sustained excellence over time. Levi&apos;s virtual assistant consistently earns perfect performance scores across every evaluation category, with Levi describing the performance as &quot;outstanding,&quot; &quot;excellent,&quot; and calling his VA &quot;a gun&quot; in professional assessments.
                </p>
                <p className="mb-6">
                  These aren&apos;t token testimonials or manufactured reviews. These are real performance evaluations conducted by Levi Turner for Bellarine Property, documenting the caliber of professional support that enables 25% volume growth while maintaining operational excellence through our systematic virtual assistant approach.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
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
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold mb-2">
                      Management Assessment: &quot;Commitment, Loyalty, Reliable&quot; — Three Most Significant Accomplishments
                    </p>
                    <p className="text-gray-800 font-semibold">
                      Management Recommendation: &quot;Salary Increase, Continue Employment&quot;
                    </p>
                  </div>
                </div>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm mt-6">
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
                    When business owners consistently rate performance as perfect across all categories and specifically recommend salary increases, it validates the systematic approach that enables both operational excellence and business growth. This level of professional performance is what transforms single virtual assistant hires into 25% volume increases.
                  </p>
                </div>
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
                <div className="bg-lime-50 rounded-lg p-6 shadow-sm text-center mt-6">
                  <PlayCircle className="w-16 h-16 text-lime-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-semibold">Video testimonial coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

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
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
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
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
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
