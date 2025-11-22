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
  XCircle,
  Settings,
  Shield,
  Rocket,
  ThumbsUp,
  FileCheck,
  Home,
  UserX,
  AlertTriangle
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function MarketingAutomationImplementationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[{"name":"Case Studies","url":"https://www.shoreagents.com/case-studies"},{"name":"Mark Dwyer","url":"https://www.shoreagents.com/marketing-automation-implementation"}]} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              Sales Trainer Active Client Success - Australia
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Why Mark Called It a 'Game-Changer':<br />
              <span className="text-lime-600">Marketing on Autopilot Through Systematic Implementation</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              When training company owner Mark Dwyer tried ShoreAgents after experiencing typical VA problems, he 
              discovered why our systematic approach is "a game-changer." This reveals the methodology differences 
              that create "autopilot" business operations instead of ongoing headaches.
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
                  MD
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                "As someone who owns a thriving Real Estate Training and Recruitment company, I know the importance 
                of having things run smoothly behind the scenes. Hiring a VA has been a game-changer for me in 
                achieving this. Although it took some initial effort to set up, having marketing tasks consistently 
                handled on autopilot has resulted in significant success. I am truly grateful to ShoreAgents for 
                providing an excellent VA service that I would highly recommend to anyone looking to streamline 
                their business operations."
              </blockquote>
              <div className="text-lg font-bold text-gray-900">Mark Dwyer</div>
              <div className="text-gray-600 mb-2">Sales Trainer Active</div>
              <div className="flex items-center gap-2 text-gray-600">
                <Globe className="w-4 h-4" />
                <span>Australia</span>
                <span className="mx-2">•</span>
                <span>Hired One Agent</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Overview */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Picture this: You're a training company owner who understands quality. You've heard the horror stories—disappeared 
            workers, training nightmares, home-based chaos. So when you need a virtual assistant, you research properly and 
            choose systematic methodology over cheap alternatives. That's Mark's smart approach, and here's exactly why our 
            methodology delivers "game-changer" results.
          </p>
        </div>

        <Separator className="my-12" />

        {/* Why Most VA Experiences Fail */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Why Most VA Experiences Fail</h2>
              <p className="text-lg text-gray-600">And how Mark avoided these problems</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Mark Dwyer's success with ShoreAgents stands out because he avoided the disasters that plague 80% of VA 
              implementations. After 500+ placements and 12+ years in this industry, we can tell you exactly why most 
              virtual assistant experiences fail within the first 90 days.
            </p>
            
            <p className="mb-8">
              Most BPO companies promise "trained" virtual assistants—that's basically BS. There are too many business 
              variations to deliver real training. You end up training them yourself anyway, but without the systematic 
              infrastructure to make it work. Mark chose a different path.
            </p>

            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Three Common VA Disasters Mark Avoided</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 border-l-4 border-red-600">
                    <div className="flex items-start gap-3 mb-3">
                      <Home className="w-8 h-8 text-red-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Home-Based Worker Chaos</h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Rain on tin roofs during client calls</li>
                          <li>• Power outages mid-project</li>
                          <li>• Chickens and roosters in the background</li>
                          <li>• Disappearing for days without explanation</li>
                        </ul>
                        <p className="text-gray-700 text-sm mt-2 italic">
                          Philippines infrastructure isn't ready for home-based professional services.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border-l-4 border-red-600">
                    <div className="flex items-start gap-3 mb-3">
                      <UserX className="w-8 h-8 text-red-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Training Guarantee Lies</h4>
                        <p className="text-gray-700 text-sm mb-2">
                          Companies guarantee training they can't deliver. Your business is unique—no BPO has pre-trained 
                          people for your specific processes. You'll train them yourself, but without support systems, 
                          it becomes a nightmare.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border-l-4 border-red-600">
                    <div className="flex items-start gap-3 mb-3">
                      <XCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Freelancer Platform Risks</h4>
                        <p className="text-gray-700 text-sm">
                          Independent contractors are hard to track and manage. We've seen clients lose computers, data, 
                          and money. When something goes wrong, you have zero recourse and no professional infrastructure 
                          backing you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Smart Choice: Mark avoided these problems by choosing our systematic approach from the start
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              Mark understands quality from his training company background. When he chose ShoreAgents, he made a smart 
              decision to avoid the typical VA disasters that plague most business owners. Here's exactly what makes our 
              approach different and why it delivered his "game-changer" results.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* The Systematic Difference */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Settings className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The ShoreAgents Systematic Difference</h2>
              <p className="text-lg text-gray-600">Four advantages that create "game-changer" results</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Mark's "game-changer" experience came from discovering our systematic approach that addresses every problem 
              other providers ignore. After 500+ successful placements, we've developed infrastructure and processes that 
              eliminate the typical VA disasters.
            </p>
            
            <p className="mb-8">
              When Mark says "it took some initial effort to set up," he's referring to our systematic implementation 
              process. We focus on building sustainable systems that deliver lasting "autopilot" operations rather than 
              quick fixes that break down over time.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Four Systematic Advantages Mark Experienced</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-lime-600">
                    <div className="flex items-start gap-3 mb-3">
                      <Building2 className="w-8 h-8 text-lime-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Professional Office Infrastructure</h4>
                        <p className="text-gray-700 text-sm">
                          Enterprise-grade equipment, biometric security, backup power systems, professional supervision. 
                          No chickens, no power outages, no disappearing acts. Your VA works in a real office environment.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-green-600">
                    <div className="flex items-start gap-3 mb-3">
                      <Shield className="w-8 h-8 text-green-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Staff Leasing vs Freelancing</h4>
                        <p className="text-gray-700 text-sm">
                          Your VA is our employee under Philippines law, dedicated exclusively to your business. No sharing 
                          with other clients, no independent contractor risks, no data security nightmares.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-600">
                    <div className="flex items-start gap-3 mb-3">
                      <FileCheck className="w-8 h-8 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Honest Implementation Support</h4>
                        <p className="text-gray-700 text-sm">
                          We don't promise fake training. We support YOUR process documentation and help implement YOUR 
                          systems. Mark invested setup time upfront and achieved "autopilot" results long-term.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-purple-600">
                    <div className="flex items-start gap-3 mb-3">
                      <Globe className="w-8 h-8 text-purple-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Geographic Specialization</h4>
                        <p className="text-gray-700 text-sm">
                          Deep understanding of Australian business culture, perfect timezone alignment, established 
                          professional relationships. Mark didn't just get cheaper labor—he got cultural fit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Result: Mark achieved "significant success" because our methodology eliminates typical VA failure points
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              Mark's transformation from "initial effort to set up" to "marketing tasks consistently handled on autopilot" 
              demonstrates our systematic approach in action. This isn't about finding cheap labor—it's about implementing 
              business process improvements that happen to cost 78% less than local alternatives while delivering superior 
              results.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* From Setup to Autopilot */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Rocket className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">From Setup to "Autopilot" Success</h2>
              <p className="text-lg text-gray-600">Mark's implementation journey</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Mark's honest assessment—"it took some initial effort to set up"—reveals our systematic implementation 
              approach. Unlike providers who promise instant results, we focus on building sustainable systems that create 
              long-term operational efficiency.
            </p>
            
            <p className="mb-8">
              As a training company owner, Mark understood that proper implementation prevents ongoing problems. His 
              willingness to invest setup time created the "autopilot" marketing operations that now run seamlessly behind 
              the scenes.
            </p>

            <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Our Proven Implementation Methodology
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-lime-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Phase 1: Process Documentation Support</h4>
                        <p className="text-gray-700 mb-2">
                          We help you document YOUR specific processes—no fake "training" promises. Mark invested time 
                          here to create systematic procedures his VA could follow consistently.
                        </p>
                        <div className="bg-lime-50 p-3 rounded border-l-4 border-lime-600">
                          <p className="text-gray-900 font-semibold text-sm">
                            Why It Works: Your business gets documented processes that any future staff can follow.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Phase 2: Professional Infrastructure Setup</h4>
                        <p className="text-gray-700 mb-2">
                          Your VA starts in our office environment with enterprise equipment, security protocols, and 
                          professional supervision. No home-based chaos or reliability issues.
                        </p>
                        <div className="bg-green-50 p-3 rounded border-l-4 border-green-600">
                          <p className="text-gray-900 font-semibold text-sm">
                            Mark's Experience: Professional setup that supports consistent performance from day one.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Phase 3: Systematic Training Implementation</h4>
                        <p className="text-gray-700 mb-2">
                          Your VA learns YOUR documented processes with our support. Mark's marketing procedures became 
                          systematic workflows that run without daily oversight.
                        </p>
                        <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-600">
                          <p className="text-gray-900 font-semibold text-sm">
                            Key Difference: Training on your actual business, not generic procedures.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Phase 4: "Autopilot" Optimization</h4>
                        <p className="text-gray-700 mb-2">
                          Continuous refinement until operations run smoothly without your daily input. Mark achieved 
                          "significant success" as marketing tasks became truly automated.
                        </p>
                        <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-600">
                          <p className="text-gray-900 font-semibold text-sm">
                            End Result: "Having things run smoothly behind the scenes" – Mark's own words.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-white border-l-4 border-lime-600 p-6 rounded">
                  <p className="text-gray-800 italic mb-3 text-lg">
                    "Although it took some initial effort to set up, having marketing tasks consistently handled on 
                    autopilot has resulted in significant success. It's been a game-changer for me."
                  </p>
                  <p className="text-gray-900 font-bold">— Mark Dwyer, Owner, Sales Trainer Active</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* The Science Behind Autopilot */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Lightbulb className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Science Behind "Autopilot" Operations</h2>
              <p className="text-lg text-gray-600">Why Mark's results are replicable</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Mark's "game-changer" results aren't luck—they're the inevitable outcome of systematic implementation. When 
              you eliminate the three main failure points (infrastructure, training lies, and freelancer risks), virtual 
              assistant success becomes predictable and scalable.
            </p>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  The Three Elements That Make Our Approach a "Game-Changer"
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Building2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Infrastructure Reliability</h4>
                      <p className="text-gray-700 text-sm">
                        Professional office environment eliminates 90% of typical VA problems. Mark never dealt with power 
                        outages, home distractions, or unreliable internet. Consistent infrastructure enables consistent 
                        performance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <FileCheck className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Process Documentation</h4>
                      <p className="text-gray-700 text-sm">
                        Mark's "initial effort to set up" created documented systems that run independently. Instead of 
                        training people over and over, you train the process once and it scales forever.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Globe className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Cultural Integration</h4>
                      <p className="text-gray-700 text-sm">
                        Geographic specialization in Australian business culture means your VA understands your market 
                        context. Mark didn't just get cheaper labor—he got someone who understands his business environment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Combined Effect: "Marketing tasks consistently handled on autopilot" – systematic reliability
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              Mark's enthusiastic recommendation—"truly grateful" and "would highly recommend to anyone"—reflects the 
              confidence of someone who has experienced systematic business improvement. His training company background 
              means he understands the difference between temporary fixes and permanent solutions.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* How to Replicate Success */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Target className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">How to Replicate Mark's Success</h2>
              <p className="text-lg text-gray-600">The systematic implementation that creates "autopilot" results</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Mark's transformation from typical VA frustrations to "autopilot" success follows our systematic methodology. 
              Here's exactly how to implement the same approach that made him "truly grateful" and achieved "significant 
              success" for his training company.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">4-Step Success Framework</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-lime-600" />
                      Step 1: Choose Infrastructure Over Price
                    </h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Mark chose professional office environment over home-based cheaper options. Reliable infrastructure 
                      eliminates 90% of typical VA problems and enables the consistent performance needed for "autopilot" 
                      operations.
                    </p>
                    <div className="bg-red-50 p-3 rounded mt-2">
                      <p className="text-gray-900 font-semibold text-xs">
                        Why Most Fail: They choose cheap labor over systematic infrastructure and spend more time managing 
                        problems than growing their business.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-lime-600" />
                      Step 2: Invest in Process Documentation
                    </h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Mark's "initial effort to set up" involved documenting his marketing processes systematically. This 
                      upfront investment creates scalable systems that run independently of individual people.
                    </p>
                    <div className="bg-lime-50 p-3 rounded mt-2">
                      <p className="text-gray-900 font-semibold text-xs">
                        Mark's Advantage: Training company owners understand that documented processes enable consistent 
                        delivery regardless of staff changes.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-lime-600" />
                      Step 3: Focus on Systematic Training
                    </h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Instead of believing "training guarantees," Mark worked with our systematic approach to implement his 
                      documented processes. Real training happens on your actual business workflows, not generic procedures.
                    </p>
                    <div className="bg-blue-50 p-3 rounded mt-2">
                      <p className="text-gray-900 font-semibold text-xs">
                        Critical Difference: Training on your specific business creates expertise that transfers and scales 
                        with your operations.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-lime-600" />
                      Step 4: Measure "Significant Success"
                    </h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Mark tracked measurable business improvement beyond just cost savings. The goal is operational 
                      efficiency that enables business growth, not just cheaper labor.
                    </p>
                    <div className="bg-green-50 p-3 rounded mt-2">
                      <p className="text-gray-900 font-semibold text-xs">
                        Success Indicator: When you achieve "having things run smoothly behind the scenes," you've created 
                        the systematic efficiency Mark experienced.
                      </p>
                    </div>
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
            Ready to Experience Your "Game-Changer" Moment?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Follow Mark's proven approach: invest in proper setup, choose infrastructure over price, and focus on 
            systematic implementation that creates "autopilot" business operations. Stop fighting VA disasters and 
            start experiencing operational excellence.
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
