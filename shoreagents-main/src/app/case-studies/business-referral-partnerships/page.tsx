'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Users, Target, Mic, Globe, DollarSign, Clock, Award, Lightbulb, Zap, FileText, Phone, Bot, Shield, TrendingDown, MapPin, Calendar, Building, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BusinessReferralPartnershipsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-lime-600 text-white px-4 py-2 text-lg mb-6">
            Top Agents Playbook Feature
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            How a Top Agents Playbook Feature Validates 12+ Years of Proven Client Referrals
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Exploring the professional relationship, client referrals, and podcast interview that validates systematic offshore staffing expertise
          </p>
          
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=600&fit=crop"
              alt="Professional partnership and collaboration"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Ray Wood Testimonial */}
        <div className="mb-16">
          <Card className="border-lime-200 bg-gradient-to-br from-lime-50 to-white">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-lime-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                    RW
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                    "I've been referring my real estate friends to ShoreAgents for many years now with great success. Their systems and real estate industry experience set them apart from the rest. Plus recent advances in new technology and AI make things even better."
                  </p>
                  <div className="border-t border-lime-200 pt-4">
                    <p className="font-bold text-gray-900 text-lg">Ray Wood</p>
                    <p className="text-gray-600">Bestagents Group, CA</p>
                    <p className="text-lime-600 font-medium">Referral Partner • Canada</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">12+</div>
              <p className="text-gray-700">Years Professional Relationship</p>
            </CardContent>
          </Card>
          <Card className="border-lime-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">Multiple</div>
              <p className="text-gray-700">Successful Client Referrals</p>
            </CardContent>
          </Card>
          <Card className="border-lime-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">3</div>
              <p className="text-gray-700">Core Markets (AUS/CAN/USA)</p>
            </CardContent>
          </Card>
        </div>

        {/* Top Agents Playbook Feature */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The Top Agents Playbook Feature</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  Stephen Atcheler's Top Agents Playbook feature represents more than media recognition—it validates a 12+ year referral relationship that has consistently delivered client success. When respected real estate coach Ray Wood features your methodology on his Top Agents Playbook platform, it demonstrates proven results that withstand industry scrutiny.
                </p>
                <p className="mb-6">
                  This Top Agents Playbook feature isn't manufactured credibility or promotional content. Ray Wood's showcase highlights systematic business improvement methodologies that have delivered measurable results through comprehensive virtual assistant solutions across 500+ successful placements.
                </p>

                {/* Podcast Interview Card */}
                <div className="bg-gradient-to-br from-lime-600 to-lime-700 rounded-2xl p-8 text-white mb-6">
                  <div className="flex items-center mb-4">
                    <Mic className="w-8 h-8 mr-3" />
                    <h3 className="text-2xl font-bold">Full Interview Available</h3>
                  </div>
                  <h4 className="text-xl font-semibold mb-4">
                    TAP 153: How to tell if you're ready for a Virtual Assistant
                  </h4>
                  <p className="mb-6 opacity-90">
                    An in-depth conversation with Stephen Atcheler about virtual assistant readiness indicators and implementation strategies
                  </p>
                  <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100">
                    🎙️ View Full Episode Page
                  </Button>
                </div>

                {/* What You'll Learn */}
                <div className="bg-lime-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Lightbulb className="w-6 h-6 text-lime-600 mr-2" />
                    What You'll Learn from This Interview
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <FileText className="w-5 h-5 text-lime-600 mr-2" />
                        <h4 className="font-bold text-gray-900">The $70/Hour Reality</h4>
                      </div>
                      <p className="text-gray-700 text-sm">How administrative tasks give agents a 60% pay cut</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <Target className="w-5 h-5 text-lime-600 mr-2" />
                        <h4 className="font-bold text-gray-900">5 Dollar-Productive Activities</h4>
                      </div>
                      <p className="text-gray-700 text-sm">The only tasks that directly generate income for agents</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <Zap className="w-5 h-5 text-lime-600 mr-2" />
                        <h4 className="font-bold text-gray-900">Readiness Indicators</h4>
                      </div>
                      <p className="text-gray-700 text-sm">How to determine if you're prepared for VA implementation</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <Globe className="w-5 h-5 text-lime-600 mr-2" />
                        <h4 className="font-bold text-gray-900">Offshore Advantages</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Why Philippines-based VAs deliver superior results</p>
                    </div>
                  </div>
                </div>

                <p className="mb-4">
                  The interview wasn't a casual conversation—it was Ray Wood recognizing Stephen's systematic approach to offshore staffing as fundamentally different from the typical BPO model. When a coach who's helped thousands of agents chooses to feature your methodology, it validates years of refining processes that actually work.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* The $70/Hour Reality Check */}
        <div className="mb-16">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <DollarSign className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The $70/Hour Reality Check</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  If your annual income is $180,000 and you work 6 days a week, your hourly rate is approximately $70.
                </p>
                <p className="mb-4">
                  <strong>When you switch to administrative tasks, you've just given yourself a 60% pay cut</strong>—working at $30/hour instead of your $70 rate.
                </p>
                <p className="mb-4">
                  This is why coaches like Ray Wood recommend systematic delegation: it's not about convenience, it's about protecting your income potential.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 5 Dollar-Productive Activities */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">
                  The 5 Dollar-Productive Activities Framework
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className="bg-lime-50 rounded-lg p-6 border-l-4 border-lime-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1. Open Homes</h3>
                  <p className="text-gray-700">Direct client interaction, immediate feedback, lead generation</p>
                </div>
                <div className="bg-lime-50 rounded-lg p-6 border-l-4 border-lime-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2. Prospecting</h3>
                  <p className="text-gray-700">Cold calling, networking, referral development</p>
                </div>
                <div className="bg-lime-50 rounded-lg p-6 border-l-4 border-lime-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3. Price Reductions</h3>
                  <p className="text-gray-700">Strategic market positioning, vendor management</p>
                </div>
                <div className="bg-lime-50 rounded-lg p-6 border-l-4 border-lime-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4. Listing Presentations</h3>
                  <p className="text-gray-700">Converting prospects to clients, relationship building</p>
                </div>
                <div className="bg-lime-50 rounded-lg p-6 border-l-4 border-lime-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5. Contract Negotiation</h3>
                  <p className="text-gray-700">Deal closure, value creation, commission protection</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Everything else—listing uploads, contract processing, client follow-up emails, appointment scheduling, database management—can be systematized and delegated. This isn't about being lazy; it's about protecting your income potential and focusing on activities that only you can perform.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 12+ Year Partnership Evolution */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">12+ Year Professional Referral Partnership Evolution</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <div className="bg-lime-50 rounded-lg p-6 mb-6 border-l-4 border-lime-600">
                  <div className="flex items-center mb-4">
                    <FileText className="w-6 h-6 text-lime-600 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900">Stephen's Perspective: How It All Started</h3>
                  </div>
                  <p className="mb-4 italic">
                    "I first met Ray Wood over 12 years ago at a real estate seminar in Australia. Even then, his insights into agent productivity and business systems impressed me. Ray had this systematic approach to breaking down what actually made agents successful versus what they thought made them successful."
                  </p>
                  <p className="mb-4 italic">
                    "What struck me wasn't just his coaching philosophy, but how he approached problems. Ray didn't just tell agents to 'work smarter'—he gave them specific frameworks and processes. When I started developing ShoreAgents years later, I realized we were both solving the same fundamental problem: how to systematize success rather than leaving it to chance."
                  </p>
                  <p className="italic">
                    "Ray was one of the first industry leaders to understand what we were building. Most people saw 'cheap overseas labor.' Ray saw systematic business process improvement with geographic arbitrage. That's why his referrals have been so successful—he understood the methodology from day one."
                  </p>
                </div>

                <p className="mb-6">
                  The timing of their initial meeting was significant. Stephen was still developing his real estate business in Australia, eventually scaling to 14 salespeople and 400 rental properties with a team of 5 offshore staff. Ray Wood was establishing himself as one of Australia's leading real estate coaches, helping agents understand the systematic approaches that separate top performers from everyone else.
                </p>

                {/* Parallel Evolution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="w-5 h-5 text-lime-600 mr-2" />
                      <h4 className="font-bold text-gray-900">Stephen's Journey</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li>• 2012: Started offshore staffing experiments</li>
                      <li>• Built real estate business to 14 salespeople, 400 rentals</li>
                      <li>• Scaled with team of 5 offshore staff</li>
                      <li>• Moved to Philippines, established ShoreAgents</li>
                      <li>• 500+ successful placements across AUS/NZ/USA</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                      <h4 className="font-bold text-gray-900">Ray's Evolution</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li>• Established in Australian real estate coaching</li>
                      <li>• Expanded to Canada market</li>
                      <li>• Launched Top Agents Playbook platform</li>
                      <li>• Targeted US and Australian markets</li>
                      <li>• Thousands of agents coached across 3 continents</li>
                    </ul>
                  </div>
                </div>

                <p className="mb-4">
                  <strong>Shared Focus:</strong> Systematic approaches to business scaling across Australia, Canada, and USA markets
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cross-Market Expertise */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Cross-Market Expertise: Australia, Canada, USA</h2>
              </div>
              <p className="text-gray-700 mb-6">
                One of the most valuable aspects of the Stephen-Ray relationship is their shared understanding of cross-border business dynamics. While many service providers claim "international experience," few actually understand the cultural, regulatory, and operational nuances that determine success in different English-speaking markets.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gradient-to-br from-lime-50 to-white rounded-lg p-6 border border-lime-200">
                  <MapPin className="w-10 h-10 text-lime-600 mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Australia Market</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Culture:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Direct communication style</li>
                      <li>• Structured regulatory environment</li>
                      <li>• High labor costs driving offshore adoption</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">VA Integration:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Perfect timezone alignment with Philippines</li>
                      <li>• Strong process documentation culture</li>
                      <li>• Established offshore business relationships</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-white rounded-lg p-6 border border-red-200">
                  <MapPin className="w-10 h-10 text-red-600 mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Canada Market</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Culture:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Polite, relationship-focused approach</li>
                      <li>• Provincial regulatory variations</li>
                      <li>• Growing acceptance of offshore solutions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">VA Integration:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Manageable timezone differences</li>
                      <li>• Emphasis on cultural sensitivity training</li>
                      <li>• Collaborative implementation approach</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border border-blue-200">
                  <MapPin className="w-10 h-10 text-blue-600 mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">USA Market</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Culture:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Results-driven, efficiency focused</li>
                      <li>• State-by-state regulatory complexity</li>
                      <li>• Established offshore industry presence</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">VA Integration:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Significant timezone challenges</li>
                      <li>• ROI-focused implementation</li>
                      <li>• Scalable process requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Proven Referral Results */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-8 h-8 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Proven Referral Results</h2>
              </div>
              <p className="text-gray-700 mb-6">
                The true validation of any professional relationship isn't the initial referral—it's the continued success of those referrals over time. Ray Wood's clients who've implemented ShoreAgents' offshore staffing solutions have consistently achieved measurable improvements in productivity and cost efficiency.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-lime-50 rounded-lg p-6 border-l-4 border-lime-600">
                  <div className="flex items-center mb-3">
                    <Building className="w-6 h-6 text-lime-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-900">Property Management Success</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 mb-3">Sydney Agency Transformation:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>340% increase</strong> in lease renewals processed</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>78% reduction</strong> in administrative costs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>24/7 tenant</strong> communication capability</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Principal recovered <strong>15+ hours weekly</strong> for business development</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-lime-50 rounded-lg p-6 border-l-4 border-lime-600">
                  <div className="flex items-center mb-3">
                    <Users className="w-6 h-6 text-lime-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-900">Sales Team Scaling</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 mb-3">Melbourne Team Implementation:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Supported expansion from <strong>3 to 8 agents</strong></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Listing processing time reduced by <strong>60%</strong></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Database management <strong>fully systematized</strong></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Commission tracking automated with <strong>99.9% accuracy</strong></span>
                    </li>
                  </ul>
                </div>

                <div className="bg-lime-50 rounded-lg p-6 border-l-4 border-lime-600">
                  <div className="flex items-center mb-3">
                    <FileText className="w-6 h-6 text-lime-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-900">ROI Optimization</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 mb-3">Cross-Market Implementation:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Average 12-month ROI of <strong>340%</strong></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Implementation completed within <strong>2-4 weeks</strong></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Zero failed</strong> implementations from Ray's referrals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Continued relationship expansion after initial success</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                <div className="flex items-center mb-3">
                  <Target className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-lg font-bold text-gray-900">Why Ray's Referrals Consistently Succeed</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Ray Wood's clients come to ShoreAgents pre-qualified with the right mindset and realistic expectations. His coaching has already addressed the fundamental productivity challenges that make virtual assistant implementation successful.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <div className="flex items-center mb-1">
                      <FileText className="w-4 h-4 text-blue-600 mr-2" />
                      <p className="font-semibold text-gray-900">Process Documentation</p>
                    </div>
                    <p className="text-sm text-gray-700">Clients understand the importance of documented procedures</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <Target className="w-4 h-4 text-blue-600 mr-2" />
                      <p className="font-semibold text-gray-900">Focus Clarity</p>
                    </div>
                    <p className="text-sm text-gray-700">Already trained on dollar-productive vs administrative activities</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <TrendingUp className="w-4 h-4 text-blue-600 mr-2" />
                      <p className="font-semibold text-gray-900">ROI Expectations</p>
                    </div>
                    <p className="text-sm text-gray-700">Realistic timeline and outcome expectations established</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Industry Insights */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Industry Insights: What Most BPO Companies Get Wrong</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Stephen's recognition by industry leaders like Ray Wood stems from a fundamental difference in approach. While most BPO companies focus on cheap labor arbitrage, ShoreAgents built a methodology around systematic business process improvement that happens to use geographic arbitrage for cost efficiency.
              </p>

              <div className="bg-red-50 rounded-lg p-6 mb-6 border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🚨 Stephen's Controversial Industry Takes</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Training Guarantees are BS</h4>
                    <p className="text-gray-700 italic">"Companies that guarantee training generally can't deliver it. Too many business variations exist. You'll end up training them yourself anyway."</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Home-Based Workers Don't Work</h4>
                    <p className="text-gray-700 italic">"Rain on tin roofs, power outages, chickens in the background. Philippines infrastructure isn't ready for home-based professional services."</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Freelancer Platforms are Risky</h4>
                    <p className="text-gray-700 italic">"Independent contractors are hard to manage and track. I've seen clients lose computers, data, and money on these platforms."</p>
                  </div>
                </div>
              </div>

              <div className="bg-lime-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-lime-600 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900">The ShoreAgents Methodology Difference</h3>
                  </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Office-Based Professional Environment</h4>
                    <p className="text-sm text-gray-700">Biometric security, enterprise-grade equipment, backup power systems, professional supervision</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Staff Leasing vs Freelancing</h4>
                    <p className="text-sm text-gray-700">Employees under Philippines law, managed by ShoreAgents, dedicated to your business exclusively</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Honest Training Approach</h4>
                    <p className="text-sm text-gray-700">No false training promises. Support for YOUR process documentation and implementation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Geographic Specialization</h4>
                    <p className="text-sm text-gray-700">Deep understanding of AUS/NZ/USA business cultures and regulatory requirements</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ray Wood Quote */}
        <div className="mb-16">
          <Card className="border-lime-200 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <CardContent className="p-8">
              <blockquote className="text-2xl italic mb-6 leading-relaxed">
                "Stephen's expertise in offshore staffing has been invaluable to the agents I've referred to him over the years. His hands-on approach in the Philippines ensures quality results that traditional BPO companies simply can't match."
              </blockquote>
              <p className="text-xl font-semibold">— Ray Wood</p>
              <p className="text-lime-400">Real Estate Coach & Host of Top Agents Playbook</p>
            </CardContent>
          </Card>
        </div>

        {/* Future Partnership */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-8 h-8 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Top Agents Playbook Partnership: Future Referral Opportunities
                </h2>
              </div>
              <p className="text-gray-700 mb-6">
                The offshore staffing industry continues evolving rapidly, particularly with AI integration and changing business models. Stephen's recognition by industry leaders like Ray Wood positions ShoreAgents at the forefront of these developments, combining proven systematic approaches with emerging technologies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-lime-50 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <Bot className="w-6 h-6 text-lime-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-900">AI Integration</h3>
                  </div>
                  <p className="text-sm text-gray-700">Virtual assistants enhanced with AI tools for improved productivity and expanded capability sets</p>
                </div>
                <div className="bg-lime-50 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <Globe className="w-6 h-6 text-lime-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-900">Remote Work Normalization</h3>
                  </div>
                  <p className="text-sm text-gray-700">Accelerated adoption of offshore staffing as remote work becomes standard business practice</p>
                </div>
                <div className="bg-lime-50 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <FileText className="w-6 h-6 text-lime-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-900">Performance Analytics</h3>
                  </div>
                  <p className="text-sm text-gray-700">Advanced tracking and optimization tools for measuring and improving offshore team performance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why This Validates Excellence */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Why Top Agents Playbook Feature Validates Business Excellence
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-lime-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Peer Validation</h3>
                  <p className="text-gray-700">Recognition from established industry leaders who understand the challenges of building and scaling service businesses</p>
                </div>
                <div className="bg-lime-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Proven Results</h3>
                  <p className="text-gray-700">Multiple successful client referrals over 12+ years demonstrate consistent quality and measurable outcomes</p>
                </div>
                <div className="bg-lime-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Market Credibility</h3>
                  <p className="text-gray-700">Cross-border expertise validated by coaches operating in our core geographic markets</p>
                </div>
                <div className="bg-lime-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Methodology Validation</h3>
                  <p className="text-gray-700">Systematic approaches that deliver results worth featuring on respected industry platforms</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Top Agents Playbook Featured Expertise?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join the successful businesses from Ray Wood's referral network who have transformed their operations with our proven methodology featured on Top Agents Playbook.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Your Consultation
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg">
                <Briefcase className="w-5 h-5 mr-2" />
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
