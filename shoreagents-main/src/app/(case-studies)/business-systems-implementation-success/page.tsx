"use client";

import { SideNav } from "@/components/layout/SideNav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Target,
  Users,
  Settings,
  Award,
  Rocket,
  FileText,
  Handshake,
  TrendingUp,
  Zap,
  BarChart3,
  BookOpen,
  GraduationCap,
  ClipboardList,
  Building2,
  ArrowRight,
  Globe,
  Video,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Star,
  DollarSign
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function BusinessSystemsImplementationSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[{"name":"Case Studies","url":"https://www.shoreagents.com/case-studies"},{"name":"Christel Renton","url":"https://www.shoreagents.com/business-systems-implementation-success"}]} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              Mi Property Group Client Success
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              SMART START:<br />
              <span className="text-lime-600">Why One Agent Can Transform Everything</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              When Christel Renton from Mi Property Group decided to start with just one virtual assistant, 
              she discovered something that changes how Australian property companies approach offshore staffing. 
              This Mi Property Group client success story proves that strategic single-agent implementation beats 
              ambitious multi-hire disasters every time.
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
                  CR
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                "ShoreAgents has been a great support in terms of training and setting us up on new systems, 
                getting processes in place to make our outsourcing most effective."
              </blockquote>
              <div className="text-lg font-bold text-gray-900">Christel Renton</div>
              <div className="text-gray-600 mb-2">Mi Property Group</div>
              <div className="flex items-center gap-2 text-gray-600">
                <Globe className="w-4 h-4" />
                <span>Australia</span>
                <span className="mx-2">•</span>
                <span>Hired One Agent</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Strategy Overview */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            How Christel Renton proved that starting with one virtual assistant creates the foundation for systematic 
            outsourcing success. Picture this: You're running a successful Australian property company, but administrative 
            tasks are consuming hours that should be spent on business development. You know offshore staffing could help, 
            but where do you start? Christel Renton found the answer: start smart, start small, start systematically.
          </p>
        </div>

        <Separator className="my-12" />

        {/* The Decision */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Target className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Decision That Made All the Difference</h2>
              <p className="text-lg text-gray-600">Strategic single-agent implementation creates sustainable success</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Christel Renton's approach to offshore staffing demonstrates something most Australian property companies 
              get wrong: the temptation to hire multiple specialists immediately. Instead of following the typical 
              "let's get a team" mentality, Christel made a strategic decision that would prove crucial—she hired one 
              agent and focused on getting that foundation right.
            </p>
            
            <p className="mb-8">
              This wasn't about being cautious or conservative. As someone managing property operations that require 
              precision, coordination, and reliability, Christel understood that rushing into multiple hires without 
              proper systems would create chaos rather than efficiency. The single-agent approach allowed Mi Property 
              Group to build something sustainable.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Starting with One Agent Creates Success</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Focused Training</h4>
                      <p className="text-gray-700 text-sm">All attention on one person means comprehensive skill development and cultural integration</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">System Development</h4>
                      <p className="text-gray-700 text-sm">Time to properly document processes and create frameworks that scale</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Risk Management</h4>
                      <p className="text-gray-700 text-sm">Lower financial exposure while testing cultural fit and operational effectiveness</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Quality Foundation</h4>
                      <p className="text-gray-700 text-sm">Establishing excellence standards that become the blueprint for future hires</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-800 italic font-medium">
                    "The smart money starts with one and builds systematically, rather than hiring multiple agents and hoping for the best."
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              What makes Christel's approach particularly intelligent is the recognition that offshore staffing success 
              isn't about the number of agents you hire—it's about the systems you build to support them. By starting 
              with one dedicated professional, Mi Property Group created space to develop the training protocols and 
              operational frameworks that would make future scaling both easier and more effective.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Building Systems */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Settings className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Building Systems That Actually Work</h2>
              <p className="text-lg text-gray-600">Implementation success depends on your internal systems</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              The real test of any offshore staffing implementation isn't the hiring decision—it's what happens in those 
              critical first weeks when systems, training, and cultural integration either succeed or fail. Christel's 
              experience with Mi Property Group demonstrates how the right approach to this phase creates long-term success 
              rather than expensive disappointments.
            </p>
            
            <p className="mb-8">
              What most Australian property companies discover too late is that offshore staffing success depends more on 
              your internal systems than on the agent's capabilities. Christel understood this from the beginning, which is 
              why her feedback emphasizes the critical importance of "training and setting us up on new systems, getting 
              processes in place to make our outsourcing most effective."
            </p>

            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The ShoreAgents Implementation Framework</h3>
                <p className="text-gray-700 mb-6">
                  Based on 500+ successful placements, we've learned that implementation success follows a predictable pattern. 
                  Here's exactly what worked for Mi Property Group:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <ClipboardList className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Process Documentation</h4>
                      <p className="text-gray-700 text-sm">Breaking down existing workflows into step-by-step procedures that anyone can follow</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Settings className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">System Integration</h4>
                      <p className="text-gray-700 text-sm">Connecting offshore support with existing property management software and communication tools</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Cultural Training</h4>
                      <p className="text-gray-700 text-sm">Australian business culture, communication styles, and industry-specific terminology</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BarChart3 className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Performance Framework</h4>
                      <p className="text-gray-700 text-sm">Clear metrics and feedback systems that ensure continuous improvement</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-lime-50 border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Key Insight: The system makes the difference, not just the person
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              The Mi Property Group client success story demonstrates that when implementation is done systematically—with 
              proper training, system development, and process documentation—offshore staffing becomes a strategic advantage 
              rather than an administrative burden. This foundation enables property companies to scale confidently, knowing 
              their systems can support growth.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Great Support */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Award className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">"Great Support in Training and Setting Us Up"</h2>
              <p className="text-lg text-gray-600">Building robust systems that enable sustainable success</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              When Christel describes ShoreAgents as providing "great support in terms of training and setting us up on new 
              systems," she's highlighting something that separates successful offshore staffing from the disasters you hear 
              about in industry forums. Most providers hand you a person and wish you luck. We build you a system.
            </p>
            
            <p className="mb-8">
              The training phase that Mi Property Group experienced reflects a fundamental understanding: offshore staffing 
              fails when companies assume their existing processes will automatically work with remote teams. Success requires 
              rebuilding workflows specifically designed for distributed operations, with clear communication protocols and 
              measurable outcomes.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What "Great Support" Means in Practice</h3>
                <p className="text-gray-700 mb-6">
                  Christel's experience wasn't just about getting a virtual assistant—it was about completely reimagining 
                  how Mi Property Group approached operational efficiency:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Process Optimization</h4>
                      <p className="text-gray-700 text-sm">Analyzing current workflows and identifying tasks that could be streamlined, automated, or delegated</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Settings className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Technology Integration</h4>
                      <p className="text-gray-700 text-sm">Setting up secure access to property management systems and establishing communication protocols</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Knowledge Transfer</h4>
                      <p className="text-gray-700 text-sm">Creating documentation that captured Mi Property Group's specific procedures and standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Handshake className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Cultural Bridge-Building</h4>
                      <p className="text-gray-700 text-sm">Ensuring the offshore team member understood Australian business culture and communication preferences</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Result: Systems that make outsourcing "most effective" rather than just functional
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Christel's Direct Testimonial</h2>
              <p className="text-lg text-gray-600">Hear the Mi Property Group success story firsthand</p>
            </div>
          </div>
          
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <p className="text-gray-700 mb-6">
                Authentic validation of the systematic approach to offshore staffing implementation from Christel Renton herself.
              </p>
              
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Video testimonial available</p>
                  <p className="text-sm text-gray-500">YouTube: jbZY-GGoMDw</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-lime-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Implementation Support</h4>
                    <p className="text-gray-700 text-xs">Comprehensive training and system setup</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-lime-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Process Optimization</h4>
                    <p className="text-gray-700 text-xs">Getting processes in place for maximum effectiveness</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-lime-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Systematic Approach</h4>
                    <p className="text-gray-700 text-xs">Strategic methodology that creates lasting success</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Future Growth Foundation */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Rocket className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Building the Foundation for Future Growth</h2>
              <p className="text-lg text-gray-600">Single-agent success creates the blueprint for scaling</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              What makes Christel's single-agent approach particularly strategic is understanding that the first hire isn't 
              just about getting help with current tasks—it's about building the infrastructure for future scaling. Every 
              system developed, every process documented, and every cultural integration lesson learned becomes the blueprint 
              for expanding offshore operations.
            </p>
            
            <p className="mb-8">
              This foundation-first thinking reflects sophisticated business planning. Rather than viewing offshore staffing 
              as a cost-cutting measure, Mi Property Group approached it as a strategic capability development project. The 
              processes that make one virtual assistant effective are the same processes that enable teams of specialists to 
              integrate seamlessly.
            </p>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-gray-900">Stephen's Perspective: Why Single-Agent Success Predicts Scaling Success</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    "I've seen hundreds of property companies over the years, and there's a clear pattern. Companies that 
                    start with one agent and build proper systems consistently succeed when they scale. Companies that hire 
                    multiple people immediately usually struggle because they haven't solved the fundamental challenges of 
                    process documentation and cultural integration."
                  </p>
                  <p>
                    "What Christel did with Mi Property Group is textbook smart implementation. By focusing on getting one 
                    relationship right, they created a template that can be replicated. The systems we built together during 
                    that initial phase become the foundation for everything that follows."
                  </p>
                  <p>
                    "Most importantly, they learned what offshore staffing can and can't do for their business. That knowledge 
                    is invaluable when you're ready to expand operations or add specialized roles."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-gray-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How Single-Agent Success Creates Scaling Readiness</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Proven Processes</h4>
                      <p className="text-gray-700 text-sm">Documentation and workflows tested with real operations, not theoretical frameworks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Handshake className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Cultural Integration</h4>
                      <p className="text-gray-700 text-sm">Understanding of how offshore teams integrate with Australian business culture</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Settings className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Technology Infrastructure</h4>
                      <p className="text-gray-700 text-sm">Secure systems and communication protocols ready for multiple users</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BarChart3 className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Performance Standards</h4>
                      <p className="text-gray-700 text-sm">Clear expectations and measurement systems that ensure quality across multiple agents</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-lime-50 border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Strategic Advantage: Confident scaling based on proven operational frameworks
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Implementation Blueprint */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Target className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Follow Christel's Smart Start Blueprint</h2>
              <p className="text-lg text-gray-600">Exactly how to replicate Mi Property Group's success</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Christel's approach wasn't complicated—it was strategic. She made three key decisions that any Australian 
              property company can replicate: start with one agent, focus on systems first, and build the foundation for 
              future scaling. Here's exactly how to follow her blueprint for offshore staffing success.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Christel Renton Method: Your 4-Phase Implementation Plan</h3>
                
                <div className="space-y-6">
                  {/* Phase 1 */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-lime-600">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Make the Strategic Decision (Week 1)</h4>
                        <p className="text-gray-700 mb-3"><strong>What Christel did right:</strong></p>
                        <ul className="space-y-1 text-gray-700">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                            <span>Chose to hire ONE agent, not a team</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                            <span>Focused on building systems rather than just getting help</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                            <span>Understood this was about creating infrastructure, not quick fixes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                            <span>Committed to proper training and implementation support</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-lime-600">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Build Your Foundation (Weeks 2-4)</h4>
                        <p className="text-gray-700 mb-3"><strong>The systems approach that worked:</strong></p>
                        <ul className="space-y-1 text-gray-700">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                            <span>Document your current processes step-by-step</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                            <span>Set up secure access to your property management systems</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                            <span>Establish communication protocols and expectations</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                            <span>Create performance standards and measurement systems</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-lime-600">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Implement with Support (Weeks 5-8)</h4>
                        <p className="text-gray-700 mb-3"><strong>How Christel got "great support":</strong></p>
                        <ul className="space-y-1 text-gray-700">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                            <span>Work with ShoreAgents to train your virtual assistant</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                            <span>Refine processes based on real-world testing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                            <span>Address cultural integration and communication challenges</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                            <span>Build confidence in the offshore relationship</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Phase 4 */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-lime-600">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Optimize and Scale (Ongoing)</h4>
                        <p className="text-gray-700 mb-3"><strong>Making outsourcing "most effective":</strong></p>
                        <ul className="space-y-1 text-gray-700">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                            <span>Continuously improve processes based on results</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                            <span>Use your proven systems as a template for future hires</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                            <span>Scale confidently knowing your infrastructure works</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                            <span>Maintain the quality standards that made the first hire successful</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Mistakes */}
            <Card className="bg-red-50 border-red-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Most Property Companies Fail</h3>
                <p className="text-gray-700 mb-6">And how Christel avoided these mistakes:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Hiring Too Many at Once</h4>
                      <p className="text-gray-700 text-sm">Christel's solution: Start with one, build systems, then scale systematically</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Skipping Process Documentation</h4>
                      <p className="text-gray-700 text-sm">Christel's solution: Invest in proper training and system setup from day one</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Expecting Immediate Results</h4>
                      <p className="text-gray-700 text-sm">Christel's solution: Focus on building sustainable frameworks, not quick wins</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Going It Alone</h4>
                      <p className="text-gray-700 text-sm">Christel's solution: Work with experienced providers who offer implementation support</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Key Insight: Success comes from following proven methodologies, not reinventing the wheel
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              The Mi Property Group approach proves that offshore staffing success isn't about luck or finding the perfect 
              virtual assistant—it's about building the right systems and following proven methodologies that create lasting 
              value for your property business.
            </p>
          </div>
        </section>

      </div>

      {/* Final CTA */}
      <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white mx-4 mb-8">
        <CardContent className="p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Property Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Start with one agent, build the right systems, and create the foundation for sustainable growth using 
            the same methodology that worked for Mi Property Group.
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
