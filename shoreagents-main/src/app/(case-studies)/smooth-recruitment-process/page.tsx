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
  AlertCircle,
  UserCheck,
  Search,
  ThumbsUp,
  XCircle,
  Rocket,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function SmoothRecruitmentProcessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[{"name":"Case Studies","url":"https://www.shoreagents.com/case-studies"},{"name":"Jon Beaulieu","url":"https://www.shoreagents.com/smooth-recruitment-process"}]} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              JBMP Group Client Success - USA
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              From Freelancer Frustration<br />
              to <span className="text-lime-600">Professional Excellence Through Systematic Recruitment</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              When Jon Beaulieu from JBMP Group faced unreliable freelancers and inconsistent quality, he discovered 
              something different. This is how systematic recruitment and professional management transformed his real 
              estate operations—even through the inevitable challenges of finding the right fit.
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
                  JB
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                "We have hired freelancers in the past however it was unreliable with a lot of inconsistency. We 
                searched Google for other options and came across ShoreAgents in which we are glad we did. The 
                recruitment process was so smooth as they presented us with thoroughly prequalified candidates to 
                interview. We chose our first agent, and we are extremely impressed with her dedication to her work 
                not to mention quality. We will be looking to ShoreAgents for many more roles in the future."
              </blockquote>
              <div className="text-lg font-bold text-gray-900">Jon Beaulieu</div>
              <div className="text-gray-600 mb-2">JBMP Group</div>
              <div className="flex items-center gap-2 text-gray-600">
                <Globe className="w-4 h-4" />
                <span>United States</span>
                <span className="mx-2">•</span>
                <span>Hired One Agent</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Overview */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Picture this: You've tried hiring freelancers. It's unreliable. Inconsistent. You Google "other options" 
            and find a company that changes everything—not just with solutions, but with the professional recruitment 
            process that impresses you from day one. That's the JBMP Group client success story.
          </p>
        </div>

        <Separator className="my-12" />

        {/* The Freelancer Problem */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <AlertCircle className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Freelancer Problem Every Business Owner Knows</h2>
              <p className="text-lg text-gray-600">Why the freelancer model fails real estate professionals</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Jon Beaulieu had been down this road before. Like countless real estate professionals, he'd tried the 
              freelancer route, hoping to find reliable administrative support for his growing business. The promise 
              seemed attractive: flexible talent, project-based work, cost-effective solutions.
            </p>
            
            <p className="mb-8">
              But reality hit hard. "We have hired freelancers in the past however it was unreliable with a lot of 
              inconsistency," Jon later reflected. The constant cycle of finding, training, and losing freelancers was 
              costing more than money—it was costing time, energy, and business momentum that successful real estate 
              operations simply can't afford.
            </p>

            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Freelancer Reality Check</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <XCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Inconsistent Quality</h4>
                      <p className="text-gray-700 text-sm">Work standards varied dramatically between projects and freelancers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <XCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Unreliable Delivery</h4>
                      <p className="text-gray-700 text-sm">Missed deadlines, incomplete projects, and sudden disappearances</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <XCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Hidden Costs</h4>
                      <p className="text-gray-700 text-sm">Constant retraining, quality control, and project management overhead</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <XCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Time Drain</h4>
                      <p className="text-gray-700 text-sm">More time managing freelancers than focusing on core business activities</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              This wasn't just Jon's experience—it's the reality for thousands of real estate professionals who've 
              discovered that cheap freelancer labor often becomes expensive business disruption. When you need consistent, 
              reliable administrative support for critical business functions, the freelancer model simply doesn't deliver 
              the systematic reliability that growing businesses require.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* The Google Search That Changed Everything */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Search className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Google Search That Changed Everything</h2>
              <p className="text-lg text-gray-600">Discovering a systematic approach to offshore staffing</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Frustrated with freelancer inconsistency, Jon did what any business owner would do: he searched Google for 
              better alternatives. "We searched Google for other options and came across ShoreAgents in which we are glad 
              we did," he later shared. But what he discovered wasn't just another offshore staffing company—it was a 
              systematic approach that impressed him from the very first interaction.
            </p>
            
            <p className="mb-8">
              The difference was immediately apparent. Instead of generic freelancer platforms or typical outsourcing 
              companies promising cheap labor, Jon found a professional organization that understood the specific needs 
              of real estate businesses. The recruitment process itself became the first proof point that this would be 
              different.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Made ShoreAgents Different from Day One</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <UserCheck className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Professional Recruitment Process</h4>
                      <p className="text-gray-700 text-sm">Structured candidate presentation with pre-screened, qualified professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Industry Specialization</h4>
                      <p className="text-gray-700 text-sm">Deep understanding of real estate administrative needs and workflows</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Immediate Impression</h4>
                      <p className="text-gray-700 text-sm">Quality candidates and smooth process that impressed from first contact</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Systematic Approach</h4>
                      <p className="text-gray-700 text-sm">Structured methodology vs. freelancer randomness</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Result: Professional recruitment that delivered pre-qualified candidates ready for real estate administrative work
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              "The recruitment process was so smooth as they presented us with thoroughly prequalified candidates to 
              interview," Jon reflected. This wasn't the typical offshore staffing experience of sifting through dozens 
              of unqualified applicants or hoping freelancers would show up. It was a professional service that understood 
              his time was valuable and his business needs were specific.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Exceptional Performance from Day One */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Star className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Exceptional Performance from Day One</h2>
              <p className="text-lg text-gray-600">Perfect 5/5 scores across all categories</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              The difference between freelancer frustration and professional success became clear within the first month. 
              Jon's new real estate administrative specialist didn't just meet expectations—she exceeded them across every 
              performance metric that matters for business success.
            </p>
            
            <p className="mb-8">
              "She's doing a great job!" became Jon's immediate assessment. But the real validation came through the 
              systematic performance review process that provided specific, measurable evidence of the quality and 
              dedication that Jon had been missing with freelancer arrangements.
            </p>

            <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">First Month Performance: Perfect Scores</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-6 h-6 text-lime-600" />
                      <div>
                        <h4 className="font-bold text-gray-900">Quality Excellence</h4>
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-lime-600 text-lime-600" />)}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">"Great work in the detail we need"</p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-6 h-6 text-lime-600" />
                      <div>
                        <h4 className="font-bold text-gray-900">Continuous Improvement</h4>
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-lime-600 text-lime-600" />)}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">"Always asking how to improve performance"</p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-6 h-6 text-lime-600" />
                      <div>
                        <h4 className="font-bold text-gray-900">Perfect Reliability</h4>
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-lime-600 text-lime-600" />)}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">"Always shows up early and gets everything done"</p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-6 h-6 text-lime-600" />
                      <div>
                        <h4 className="font-bold text-gray-900">Time Management</h4>
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-lime-600 text-lime-600" />)}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">"Priority list completed quickly in correct order"</p>
                  </div>
                </div>

                <div className="mt-6 bg-white border-l-4 border-lime-600 p-6 rounded">
                  <p className="text-gray-800 italic mb-3">
                    "Every meeting she is always asking what she can do to improve her performance. Always trying to 
                    learn more and find new ways to help!"
                  </p>
                  <p className="text-gray-900 font-bold">
                    First Month Management Assessment
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              The contrast with his freelancer experience was dramatic. Instead of chasing freelancers for basic task 
              completion, Jon found himself working with a professional who proactively sought feedback and continuously 
              looked for ways to contribute more value to the business.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Professional Growth Through Systematic Support */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Lightbulb className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Professional Growth Through Systematic Support</h2>
              <p className="text-lg text-gray-600">Adapting to business evolution with structured development</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              The JBMP Group client success story demonstrates something crucial about professional offshore staffing: 
              it's not just about finding the right person—it's about having the systematic support to develop them into 
              the perfect fit for your business needs. This became evident as Jon's business evolved and required different 
              approaches to maximizing his specialist's potential.
            </p>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Systematic Professional Development: The ShoreAgents Difference</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Honest Assessment</h4>
                      <p className="text-gray-700 text-sm">"Has not been trained fully" – Transparent evaluation of development needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Structured Training</h4>
                      <p className="text-gray-700 text-sm">Systematic approach to skill development and knowledge transfer</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Growth Mindset</h4>
                      <p className="text-gray-700 text-sm">"Eager to take on more work" – Proactive development attitude</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Continuous Support</h4>
                      <p className="text-gray-700 text-sm">Ongoing management support through business changes and system updates</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Result: Professional development that adapts to business needs rather than abandoning relationships
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              During transition periods, Jon's management team noted: "Has not been trained fully" but importantly added 
              "Not of her own fault." This honest assessment demonstrates the systematic approach to professional development 
              that freelancer arrangements simply cannot provide. Instead of starting over with new freelancers, the JBMP 
              Group success shows how systematic support enables businesses to develop their offshore professionals into 
              exactly what they need.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Why Systematic Beats Freelancer */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <ThumbsUp className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Why Systematic Beats Freelancer Every Time</h2>
              <p className="text-lg text-gray-600">The reality of freelancer vs. professional offshore staffing</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              When Jon reflected on his experience, he identified the key elements that made the difference: professional 
              recruitment, dedicated commitment, and systematic support that adapts to business needs. "We will be looking 
              to ShoreAgents for many more roles in the future."
            </p>

            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Freelancer vs. Professional Offshore Staffing</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Freelancer Experience */}
                  <div className="bg-red-50 rounded-lg p-6 border-2 border-red-200">
                    <div className="flex items-center gap-2 mb-4">
                      <XCircle className="w-6 h-6 text-red-600" />
                      <h4 className="text-xl font-bold text-gray-900">Freelancer Experience</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="text-red-600">❌</span>
                        <span>Unreliable with inconsistent quality</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-600">❌</span>
                        <span>Constant searching and retraining</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-600">❌</span>
                        <span>Project-based, not business-focused</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-600">❌</span>
                        <span>No systematic development support</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-600">❌</span>
                        <span>Hidden costs from turnover</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-600">❌</span>
                        <span>Time drain on management</span>
                      </div>
                    </div>
                  </div>

                  {/* Professional Offshore Staffing */}
                  <div className="bg-lime-50 rounded-lg p-6 border-2 border-lime-600">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-6 h-6 text-lime-600" />
                      <h4 className="text-xl font-bold text-gray-900">Professional Offshore Staffing</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="text-lime-600">✅</span>
                        <span>Smooth recruitment with prequalified candidates</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-lime-600">✅</span>
                        <span>Dedicated professionals, not project workers</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-lime-600">✅</span>
                        <span>Systematic performance monitoring</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-lime-600">✅</span>
                        <span>Ongoing management support</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-lime-600">✅</span>
                        <span>Adaptable to business evolution</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-lime-600">✅</span>
                        <span>Long-term relationship building</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-lime-50 border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Jon's experience demonstrates why systematic approaches consistently outperform freelancer arrangements
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* What Jon's Experience Means */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Rocket className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Jon's Experience Means for Your Business</h2>
              <p className="text-lg text-gray-600">The three things that changed everything</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Jon's story resonates because it's so familiar. Every real estate professional who's tried freelancers 
              knows the frustration—the inconsistency, the unreliability, the constant cycle of finding and training 
              new people. What made Jon's experience different wasn't luck, it was finding a systematic approach that 
              actually works.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Three Things That Changed Everything for Jon</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Professional Recruitment Process</h4>
                        <p className="text-gray-700 text-sm">
                          Instead of sifting through random freelancers, Jon received "thoroughly prequalified candidates" 
                          ready to interview. No wasted time, no guesswork.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Dedicated Professional Commitment</h4>
                        <p className="text-gray-700 text-sm">
                          His specialist wasn't just completing tasks—she was "always asking what she can do to improve 
                          her performance." That's business partnership, not freelance work.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Systematic Support Structure</h4>
                        <p className="text-gray-700 text-sm">
                          When challenges arose, there was professional management support to work through them—not 
                          abandonment like typical freelancer platforms.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              The difference between Jon's freelancer frustration and his success with ShoreAgents wasn't about finding 
              cheaper labor. It was about finding a professional system that treats offshore staffing as a strategic 
              business decision rather than a desperate cost-cutting measure.
            </p>

            <Card className="bg-blue-50 border-blue-200 mt-8">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  If you're tired of the freelancer cycle—the searching, the hoping, the disappointment, the starting 
                  over—Jon's experience shows there's a better way. Not a magic solution, but a professional approach 
                  that actually delivers on its promises.
                </p>
                <div className="bg-white border-l-4 border-lime-600 p-4 rounded">
                  <p className="text-gray-900 font-semibold">
                    Want to see if the approach that worked for Jon might work for your real estate business? We can't 
                    promise you'll have the exact same experience as Jon, but we can promise you the same professional 
                    recruitment process and systematic support that impressed him from day one.
                  </p>
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
            Ready to Ditch the Freelancer Frustration?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Experience the smooth recruitment process and professional excellence that transformed Jon's business. 
            No more unreliability, no more inconsistency—just dedicated professionals ready to help your business grow.
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
