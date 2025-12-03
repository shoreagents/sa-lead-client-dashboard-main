"use client";

import { SideNav } from "@/components/layout/SideNav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Target,
  Award,
  TrendingUp,
  DollarSign,
  Star,
  Clock,
  Users,
  Building2,
  ArrowRight,
  Globe,
  CheckCircle2,
  Lightbulb,
  Zap,
  BarChart3,
  Briefcase,
  Settings,
  ThumbsUp,
  TrendingDown,
  Trophy
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function ConstructionCostReductionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[{"name":"Case Studies","url":"https://www.shoreagents.com/case-studies"},{"name":"Iain Neilson","url":"https://www.shoreagents.com/construction-cost-reduction"}]} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              Gallery Group Client Success - Queensland, AU
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              From Survival to Success:<br />
              <span className="text-lime-600">How 77% Cost Savings Transformed a Construction Business</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              When a Queensland construction company discovered ShoreAgents through Mike's Business Tours, they made 
              hiring decisions on the spot. Years later, they're not just surviving tough times—they're thriving with 
              perfect performance reviews and $73K+ annual savings per specialist. This is the Gallery Group success story.
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
                  IN
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                "We have been partners with ShoreAgents for years now and have a very good system going. We are very 
                happy with ShoreAgents."
              </blockquote>
              <div className="text-lg font-bold text-gray-900">Iain Neilson</div>
              <div className="text-gray-600 mb-2">Gallery Group</div>
              <div className="flex items-center gap-2 text-gray-600">
                <Globe className="w-4 h-4" />
                <span>Queensland, Australia</span>
                <span className="mx-2">•</span>
                <span>Hired a Workforce</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Overview */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Picture this: You're touring BPO facilities in the Philippines, seeing presentation after presentation. 
            Then one company stands head and shoulders above the rest. You make hiring decisions on the spot. Years 
            later, those same offshore team members are earning perfect performance reviews. That's the Gallery Group 
            client success story.
          </p>
        </div>

        <Separator className="my-12" />

        {/* The Discovery That Changed Everything */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Lightbulb className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Discovery That Changed Everything</h2>
              <p className="text-lg text-gray-600">Finding the right partner through Mike's Business Tours</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Mark from Gallery Group wasn't looking for just another outsourcing provider when he joined Mike's Business 
              Tours in the Philippines. As a Queensland construction and development company, they needed specialized talent 
              who understood the complexities of architectural design, project coordination, and the demanding standards of 
              the Australian construction industry.
            </p>
            
            <p className="mb-8">
              Tour after tour, presentation after presentation, nothing stood out. Then they walked into the ShoreAgents 
              office. "They were head and shoulders above the rest," the team later reflected. The difference wasn't just 
              in the facilities or the technology—it was in the systematic approach to understanding industry-specific needs 
              and the genuine expertise in construction virtual assistant services.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Decision That Started It All</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Industry Expertise</h4>
                      <p className="text-gray-700 text-sm">Deep understanding of construction and architectural requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Immediate Impact</h4>
                      <p className="text-gray-700 text-sm">Hired 2 specialists during their Philippines visit</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Settings className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Systematic Approach</h4>
                      <p className="text-gray-700 text-sm">Professional recruitment and ongoing management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Quality Immediately Apparent</h4>
                      <p className="text-gray-700 text-sm">Confidence to hire on the spot during business tour</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-800 italic font-medium">
                    "During our stop at ShoreAgents, we lined up 2 interviews and hired both specialists on the spot. 
                    The quality was immediately apparent."
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              That decisive moment during Mike's Business Tours marked the beginning of a multi-year partnership that would 
              help Gallery Group navigate challenging times in the construction industry. The two specialists hired during 
              that Philippines visit became the foundation of a systematic approach to construction outsourcing that continues 
              to deliver results years later.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Performance Excellence Today */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Award className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Performance Excellence Today</h2>
              <p className="text-lg text-gray-600">Perfect scores and salary increase recommendations</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Fast forward to 2025, and the Gallery Group client success story continues to unfold. Recent performance 
              reviews from this month reveal something remarkable: the systematic approach that impressed them years ago 
              is still delivering exceptional results. When team members consistently earn perfect scores and salary 
              increase recommendations, it validates the long-term value of strategic offshore partnerships.
            </p>
            
            <p className="mb-8">
              Two recent performance reviews showcase exactly why Gallery Group maintains their confidence in the ShoreAgents 
              system. These aren't theoretical testimonials—they're real performance evaluations conducted by Gallery Group 
              management, demonstrating the caliber of talent and systematic excellence that defines our virtual assistant 
              approach.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Outstanding Performance */}
              <Card className="bg-lime-50 border-lime-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-6 h-6 text-lime-600" />
                    <h3 className="text-xl font-bold text-gray-900">Outstanding Performance</h3>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">Team Member Earning Perfect Scores</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Work Quality</h4>
                        <p className="text-gray-700 text-xs">Consistently delivers exceptional quality work that exceeds expectations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Team Integration</h4>
                        <p className="text-gray-700 text-xs">Seamlessly integrates with Australian team and communicates clearly</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Reliability</h4>
                        <p className="text-gray-700 text-xs">Perfect attendance record and always delivers on time</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Initiative</h4>
                        <p className="text-gray-700 text-xs">Proactively identifies issues and improves processes</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white border-l-4 border-lime-600 rounded">
                    <p className="text-gray-800 text-xs italic">
                      "It's been fantastic having this team member back – they slot in perfectly and contribute immediately"
                    </p>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="inline-block bg-lime-600 text-white px-3 py-1 rounded text-xs font-semibold">
                      Continue Employment with Commendation
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Design Excellence */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Trophy className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">Design Excellence</h3>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">Specialist Earning Salary Increase Recognition</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Creative Excellence</h4>
                        <p className="text-gray-700 text-xs">Goes above and beyond to deliver highest quality visual work</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Technical Mastery</h4>
                        <p className="text-gray-700 text-xs">Deep understanding of architectural visualization</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Collaboration</h4>
                        <p className="text-gray-700 text-xs">Works seamlessly with offshore and Australian teams</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Project Management</h4>
                        <p className="text-gray-700 text-xs">Manages multiple projects while meeting all deadlines</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white border-l-4 border-blue-600 rounded">
                    <p className="text-gray-800 text-xs italic">
                      "We can rely on this specialist for any task – the quality and dedication are outstanding"
                    </p>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold">
                      Salary Increase Recommended
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-gray-700 font-semibold">
              Performance Areas for Improvement: <span className="text-lime-600">None identified</span>
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* The Financial Reality */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Financial Reality</h2>
              <p className="text-lg text-gray-600">77% cost reduction enabling survival to success transformation</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              The Gallery Group client success story isn't just about performance excellence—it's about financial 
              transformation that enabled a Queensland construction company to not just survive tough economic times, but 
              to thrive. When Iain describes their partnership as helping them "survive tough times, now thrive with their 
              low cost, highly talented offshore team," the numbers tell the complete story.
            </p>
            
            <p className="mb-8">
              Construction industry salaries in Queensland represent significant overhead for growing companies. Local 
              architectural specialists, design coordinators, and project management professionals command premium salaries 
              that can strain cash flow during challenging market conditions. Gallery Group's systematic approach to offshore 
              staffing created the financial flexibility needed for sustainable growth.
            </p>

            <Card className="bg-gradient-to-br from-gray-50 to-lime-50 border-lime-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Queensland Construction Industry: Local vs Offshore Cost Analysis
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  {/* Local Cost */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="text-center mb-4">
                      <Building2 className="w-12 h-12 text-red-600 mx-auto mb-2" />
                      <h4 className="font-bold text-gray-900">Architectural Specialist (QLD)</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex justify-between">
                        <span>Base Salary:</span>
                        <span className="font-bold">$85,000+</span>
                      </div>
                      <div className="text-xs text-gray-600">Plus: Super, WorkCover, Leave</div>
                      <div className="pt-2 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                          <span className="font-bold">Total Annual Cost:</span>
                          <span className="text-xl font-bold text-red-600">$95,000+</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Offshore Cost */}
                  <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-lime-600">
                    <div className="text-center mb-4">
                      <Globe className="w-12 h-12 text-lime-600 mx-auto mb-2" />
                      <h4 className="font-bold text-gray-900">ShoreAgents Specialist</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex justify-between">
                        <span>Annual Cost:</span>
                        <span className="font-bold">$22,000</span>
                      </div>
                      <div className="text-xs text-gray-600">All-Inclusive: Management, HR, Equipment, Training</div>
                      <div className="pt-2 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                          <span className="font-bold">Total Annual Cost:</span>
                          <span className="text-xl font-bold text-lime-600">$22,000</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Savings */}
                  <div className="bg-gradient-to-br from-lime-500 to-green-600 text-white rounded-lg p-6 shadow-sm">
                    <div className="text-center mb-4">
                      <TrendingUp className="w-12 h-12 mx-auto mb-2" />
                      <h4 className="font-bold">Gallery Group Savings</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Annual Savings:</span>
                        <span className="font-bold">$73,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cost Reduction:</span>
                        <span className="font-bold">77%</span>
                      </div>
                      <div className="pt-2 border-t border-white/30">
                        <div className="flex justify-between items-center">
                          <span className="font-bold">5-Year Savings:</span>
                          <span className="text-xl font-bold">$365K+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-lime-600 text-white p-6 rounded-lg text-center">
                  <p className="text-xl font-bold mb-2">Multiple specialists = Multiple hundreds of thousands in savings</p>
                  <p className="text-sm opacity-90">Enabling transformation from survival mode to thriving operations</p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              These aren't theoretical numbers—they represent the financial reality that enabled Gallery Group to maintain 
              their competitive edge during challenging market conditions. When construction companies can reinvest these 
              savings into business growth, technology, and market expansion, they transform from survival mode to thriving 
              operations that define long-term success.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* "We Have a Very Good System Going" */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Settings className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">"We Have a Very Good System Going"</h2>
              <p className="text-lg text-gray-600">Multi-year partnership built on consistent results</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Years after that initial discovery through Mike's Business Tours, Gallery Group's assessment remains 
              consistent: "We have been partners with ShoreAgents for years now and have a very good system going. We are 
              very happy with ShoreAgents." This isn't the enthusiasm of a new client—it's the satisfaction of a long-term 
              partnership that consistently delivers results.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Systematic Approach That Creates Success</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Target className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Industry Specialization</h4>
                      <p className="text-gray-700 text-sm">Construction and architectural expertise, not generic outsourcing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Star className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Proven Performance</h4>
                      <p className="text-gray-700 text-sm">Perfect scores and salary increases demonstrate sustained excellence</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <DollarSign className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Financial Impact</h4>
                      <p className="text-gray-700 text-sm">77% cost savings enabling survival through tough times</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <ThumbsUp className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Long-Term Partnership</h4>
                      <p className="text-gray-700 text-sm">Multi-year relationship built on consistent results and trust</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Result: From immediate hiring decisions to years of sustained excellence and satisfaction
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              The Gallery Group client success story demonstrates that when construction companies invest in systematic 
              offshore partnerships rather than simple cost-cutting measures, they create sustainable competitive advantages 
              that enable long-term growth and market positioning. This is the difference between surviving tough times and 
              thriving through strategic workforce optimization.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Your Construction Industry Advantage */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Briefcase className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Construction Industry Advantage</h2>
              <p className="text-lg text-gray-600">Replicable success for construction businesses</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              The Gallery Group client success story isn't unique—it's replicable. When Queensland construction companies 
              can save $73,000+ annually per specialist while maintaining perfect performance standards, it creates 
              opportunities for any construction business to transform their operational efficiency and financial performance.
            </p>

            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Can Achieve</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Architectural specialists earning perfect 5/5 performance reviews</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Project coordinators receiving salary increase recommendations</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">77% cost reduction per specialist ($73K+ annual savings)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Multi-year partnerships built on consistent excellence</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Transformation from survival mode to thriving operations</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Industry-specific expertise in construction and architecture</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              From architectural specialists earning perfect 5/5 performance reviews to project coordinators receiving 
              salary increase recommendations, the systematic approach that impressed Gallery Group during Mike's Business 
              Tours continues to deliver results that enable construction companies to not just survive challenging times, 
              but to thrive and grow.
            </p>
          </div>
        </section>

      </div>

      {/* Final CTA */}
      <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white mx-4 mb-8">
        <CardContent className="p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Construction Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Experience the systematic construction outsourcing approach that transformed Gallery Group from survival to 
            success. Join the construction companies that have discovered why industry specialists choose ShoreAgents for 
            systematic, results-driven offshore solutions.
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
