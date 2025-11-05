'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, DollarSign, Target, Building, Users, Award, Clock, Zap, Lightbulb, Handshake, Shield, Rocket, Phone, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ConstructionCostReductionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-lime-600 text-white px-4 py-2 text-lg mb-6">
            Gallery Group Success Story
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Gallery Group Success: How Two Specialists Became a Multi-Year Partnership
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            When a Queensland construction company discovered ShoreAgents through Mike's Business Tours, they made hiring decisions on the spot. Years later, they're not just surviving tough times—they're thriving.
          </p>
          
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=600&fit=crop"
              alt="Construction site and architectural planning"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Client Testimonial */}
        <div className="mb-16">
          <Card className="border-lime-200 bg-gradient-to-br from-lime-50 to-white">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-lime-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                    IN
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                    "We have been partners with ShoreAgents for years now and have a very good system going. We are very happy with ShoreAgents."
                  </p>
                  <div className="border-t border-lime-200 pt-4">
                    <p className="font-bold text-gray-900 text-lg">Iain Neilson</p>
                    <p className="text-gray-600">Gallery Group, AU</p>
                    <p className="text-lime-600 font-medium">Hired a Workforce • Australia</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Critical Breakthrough Alert */}
        <div className="mb-16">
          <Card className="border-red-200 bg-gradient-to-br from-red-50 to-white">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">🚨 CONSTRUCTION BREAKTHROUGH: From Survival to Success</h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                When a Queensland construction company discovered ShoreAgents through Mike's Business Tours, they made hiring decisions on the spot. Years later, they're not just surviving tough times—they're thriving. This Gallery Group client success story reveals how systematic offshore staffing transformed a construction business.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Introduction */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Building className="w-8 h-8 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">🏗️ Gallery Group Client Success: Construction Excellence Story</h2>
              </div>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                How a Queensland construction company went from tough times to thriving with systematic offshore staffing solutions
              </p>
              <p className="text-gray-700 mb-6">
                Picture this: You're touring BPO facilities in the Philippines, seeing presentation after presentation. Then one company stands head and shoulders above the rest. You make hiring decisions on the spot. Years later, those same offshore team members are earning perfect performance reviews. That's the Gallery Group client success story.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* The Discovery */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">🎯 Gallery Group Client Success: The Discovery That Changed Everything</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  Mark from Gallery Group wasn't looking for just another outsourcing provider when he joined Mike's Business Tours in the Philippines. As a Queensland construction and development company, they needed specialized talent who understood the complexities of architectural design, project coordination, and the demanding standards of the Australian construction industry.
                </p>
                <p className="mb-6">
                  Tour after tour, presentation after presentation, nothing stood out. Then they walked into the ShoreAgents office. "They were head and shoulders above the rest," the team later reflected. The difference wasn't just in the facilities or the technology—it was in the systematic approach to understanding industry-specific needs and the genuine expertise in construction virtual assistant services.
                </p>

                <div className="bg-lime-50 rounded-lg p-8 mb-6 border-l-4 border-lime-600">
                  <div className="flex items-center mb-6">
                    <Zap className="w-7 h-7 text-lime-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">The Decision That Started It All</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <Building className="w-10 h-10 text-lime-600 mb-2" />
                      <h4 className="font-bold text-gray-900 mb-2">Industry Expertise</h4>
                      <p className="text-sm text-gray-700">Deep understanding of construction and architectural requirements</p>
                    </div>
                    <div>
                      <Zap className="w-10 h-10 text-lime-600 mb-2" />
                      <h4 className="font-bold text-gray-900 mb-2">Immediate Impact</h4>
                      <p className="text-sm text-gray-700">Hired 2 specialists during their Philippines visit</p>
                    </div>
                    <div>
                      <Target className="w-10 h-10 text-lime-600 mb-2" />
                      <h4 className="font-bold text-gray-900 mb-2">Systematic Approach</h4>
                      <p className="text-sm text-gray-700">Professional recruitment and ongoing management</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6">
                    <p className="text-gray-700 italic text-lg mb-2">
                      "During our stop at ShoreAgents, we lined up 2 interviews and hired both specialists on the spot. The quality was immediately apparent."
                    </p>
                  </div>
                </div>

                <p className="mb-4">
                  That decisive moment during Mike's Business Tours marked the beginning of a multi-year partnership that would help Gallery Group navigate challenging times in the construction industry. The two specialists hired during that Philippines visit became the foundation of a systematic approach to construction outsourcing that continues to deliver results years later.
                </p>
                <p>
                  What started as a business tour discovery became a strategic partnership that demonstrates why Gallery Group continues to describe their relationship with ShoreAgents as having "a very good system going" and being "very happy with ShoreAgents."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Excellence Today */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-8 h-8 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">📈 Gallery Group Client Success: Performance Excellence Today</h2>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                Fast forward to 2025, and the Gallery Group client success story continues to unfold. Recent performance reviews from this month reveal something remarkable: the systematic approach that impressed them years ago is still delivering exceptional results. When team members consistently earn perfect scores and salary increase recommendations, it validates the long-term value of strategic offshore partnerships.
              </p>
              <p className="text-gray-700 mb-8">
                Two recent performance reviews showcase exactly why Gallery Group maintains their confidence in the ShoreAgents system. These aren't theoretical testimonials—they're real performance evaluations conducted by Gallery Group management, demonstrating the caliber of talent and systematic excellence that defines our virtual assistant approach.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Outstanding Performance Card */}
                <div className="bg-gradient-to-br from-lime-50 to-white rounded-lg p-6 border-2 border-lime-200">
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-lime-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">🏆 Outstanding Performance</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray-600 mb-4">Team Member Earning Perfect Scores</p>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <CheckCircle className="w-5 h-5 text-lime-600 mr-2" />
                        <span className="font-semibold text-gray-900">🎯 Work Quality</span>
                      </div>
                      <p className="text-sm text-gray-700 ml-7">Consistently delivers exceptional quality work that exceeds expectations and follows all procedures perfectly</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <CheckCircle className="w-5 h-5 text-lime-600 mr-2" />
                        <span className="font-semibold text-gray-900">Team Integration</span>
                      </div>
                      <p className="text-sm text-gray-700 ml-7">Seamlessly integrates with Australian team, communicates clearly, and contributes valuable insights</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <CheckCircle className="w-5 h-5 text-lime-600 mr-2" />
                        <span className="font-semibold text-gray-900">⏰ Reliability</span>
                      </div>
                      <p className="text-sm text-gray-700 ml-7">Perfect attendance record and always delivers projects on time with professional consistency</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <CheckCircle className="w-5 h-5 text-lime-600 mr-2" />
                        <span className="font-semibold text-gray-900">🔍 Initiative</span>
                      </div>
                      <p className="text-sm text-gray-700 ml-7">Proactively identifies issues, asks thoughtful questions, and continuously improves processes</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 mt-6">
                    <p className="text-sm italic text-gray-700 mb-2">
                      "It's been fantastic having this team member back – they slot in perfectly and contribute immediately"
                    </p>
                    <p className="text-xs font-semibold text-lime-600">Management Recommendation: Continue Employment with commendation</p>
                  </div>
                </div>

                {/* Design Excellence Card */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border-2 border-blue-200">
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">🌟 Design Excellence</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray-600 mb-4">Specialist Earning Salary Increase Recognition</p>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-semibold text-gray-900">🎨 Creative Excellence</span>
                      </div>
                      <p className="text-sm text-gray-700 ml-7">Consistently goes above and beyond to deliver the highest quality visual work possible</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-semibold text-gray-900">🏗️ Technical Mastery</span>
                      </div>
                      <p className="text-sm text-gray-700 ml-7">Deep understanding of architectural visualization and construction industry requirements</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-semibold text-gray-900">🤝 Collaboration</span>
                      </div>
                      <p className="text-sm text-gray-700 ml-7">Works seamlessly with both offshore colleagues and Australian team members</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-semibold text-gray-900">Project Management</span>
                      </div>
                      <p className="text-sm text-gray-700 ml-7">Exceptional ability to manage multiple projects simultaneously while meeting all deadlines</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 mt-6">
                    <p className="text-sm italic text-gray-700 mb-2">
                      "We can rely on this specialist for any task – the quality and dedication are outstanding"
                    </p>
                    <p className="text-xs font-semibold text-blue-600">Management Recommendation: Salary Increase | Performance Areas for Improvement: None identified</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700">
                These recent performance reviews demonstrate exactly why the Gallery Group client success story continues years after that initial discovery through Mike's Business Tours. When offshore team members consistently deliver this level of excellence, it validates the systematic approach to architectural outsourcing that makes the difference between survival and success.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Financial Reality */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <DollarSign className="w-8 h-8 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">💰 Gallery Group Client Success: The Financial Reality</h2>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                The Gallery Group client success story isn't just about performance excellence—it's about financial transformation that enabled a Queensland construction company to not just survive tough economic times, but to thrive. When Iain describes their partnership as helping them "survive tough times, now thrive with their low cost, highly talented offshore team," the numbers tell the complete story.
              </p>
              <p className="text-gray-700 mb-8">
                Construction industry salaries in Queensland represent significant overhead for growing companies. Local architectural specialists, design coordinators, and project management professionals command premium salaries that can strain cash flow during challenging market conditions. Gallery Group's systematic approach to offshore staffing created the financial flexibility needed for sustainable growth.
              </p>

              <div className="bg-gradient-to-br from-lime-50 to-white rounded-lg p-8 mb-6 border-2 border-lime-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">📊 Queensland Construction Industry: Local vs Offshore Cost Analysis</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white rounded-lg p-6 border-l-4 border-red-400">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">🏗️ Architectural Specialist (QLD)</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="text-3xl font-bold text-red-600 mb-2">$85,000+</div>
                        <p className="text-sm text-gray-600">Annual Local Salary</p>
                        <p className="text-xs text-gray-500 mt-2">Plus: Superannuation, WorkCover, Leave Loading</p>
                      </div>
                      <div className="border-t border-gray-200 pt-4">
                        <div className="text-3xl font-bold text-red-600 mb-2">$95,000+</div>
                        <p className="text-sm font-semibold text-gray-900">Total Annual Cost</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border-l-4 border-lime-400">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">🌏 ShoreAgents Specialist</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="text-3xl font-bold text-lime-600 mb-2">$22,000</div>
                        <p className="text-sm text-gray-600">Annual Offshore Cost</p>
                        <p className="text-xs text-gray-500 mt-2">Includes: Management, HR, Equipment, Training</p>
                      </div>
                      <div className="border-t border-gray-200 pt-4">
                        <div className="text-3xl font-bold text-lime-600 mb-2">$22,000</div>
                        <p className="text-sm font-semibold text-gray-900">All-Inclusive Cost</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-lime-600 to-lime-700 rounded-lg p-8 text-white">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="w-6 h-6 text-lime-600 mr-2" />
                    <h4 className="text-xl font-bold">Gallery Group Annual Savings Per Specialist</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-4xl font-bold mb-2">$73,000</div>
                      <p className="text-sm opacity-90">Annual Savings</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-2">77%</div>
                      <p className="text-sm opacity-90">Cost Reduction</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-2">$365K+</div>
                      <p className="text-sm opacity-90">5-Year Savings</p>
                    </div>
                  </div>
                  <p className="text-sm mt-4 opacity-90 italic">Multiple specialists = Multiple hundreds of thousands in savings</p>
                </div>
              </div>

              <p className="text-gray-700">
                These aren't theoretical numbers—they represent the financial reality that enabled Gallery Group to maintain their competitive edge during challenging market conditions. When construction companies can reinvest these savings into business growth, technology, and market expansion, they transform from survival mode to thriving operations that define long-term success.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* We Have a Very Good System Going */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">🔧 Gallery Group Client Success: "We Have a Very Good System Going"</h2>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                Years after that initial discovery through Mike's Business Tours, Gallery Group's assessment remains consistent: "We have been partners with ShoreAgents for years now and have a very good system going. We are very happy with ShoreAgents." This isn't the enthusiasm of a new client—it's the satisfaction of a long-term partnership that consistently delivers results.
              </p>
              <p className="text-gray-700 mb-8">
                What makes this Gallery Group client success story particularly compelling is the systematic nature of the relationship. From those initial two hires during their Philippines visit to the perfect performance reviews earned this month, every aspect reflects the structured approach that differentiates strategic outsourcing from typical cost-cutting measures.
              </p>

              <div className="bg-lime-50 rounded-lg p-8 border-l-4 border-lime-600">
                <div className="flex items-center mb-6">
                  <Shield className="w-7 h-7 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">The Systematic Approach That Creates Gallery Group Client Success</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-6">
                    <Target className="w-10 h-10 text-lime-600 mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Industry Specialization</h4>
                    <p className="text-sm text-gray-700">Construction and architectural expertise, not generic outsourcing</p>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <Zap className="w-10 h-10 text-lime-600 mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Proven Performance</h4>
                    <p className="text-sm text-gray-700">Perfect scores and salary increases demonstrate sustained excellence</p>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <DollarSign className="w-10 h-10 text-lime-600 mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Financial Impact</h4>
                    <p className="text-sm text-gray-700">77% cost savings enabling survival through tough times</p>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <Handshake className="w-10 h-10 text-lime-600 mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Long-Term Partnership</h4>
                    <p className="text-sm text-gray-700">Multi-year relationship built on consistent results and trust</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <p className="text-gray-700 font-semibold">
                    <strong>Result:</strong> From immediate hiring decisions to years of sustained excellence and satisfaction
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mt-6">
                The Gallery Group client success story demonstrates that when construction companies invest in systematic offshore partnerships rather than simple cost-cutting measures, they create sustainable competitive advantages that enable long-term growth and market positioning. This is the difference between surviving tough times and thriving through strategic workforce optimization.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Your Construction Industry Advantage */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Zap className="w-8 h-8 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">🚀 Gallery Group Client Success: Your Construction Industry Advantage</h2>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                The Gallery Group client success story isn't unique—it's replicable. When Queensland construction companies can save $73,000+ annually per specialist while maintaining perfect performance standards, it creates opportunities for any construction business to transform their operational efficiency and financial performance.
              </p>
              <p className="text-gray-700">
                From architectural specialists earning perfect 5/5 performance reviews to project coordinators receiving salary increase recommendations, the systematic approach that impressed Gallery Group during Mike's Business Tours continues to deliver results that enable construction companies to not just survive challenging times, but to thrive and grow.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Gallery Group-Level Success?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join the construction companies that have discovered why industry specialists choose ShoreAgents for systematic, results-driven offshore solutions that deliver both performance excellence and significant cost savings.
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
