"use client";

import { SideNav } from "@/components/layout/SideNav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle2,
  XCircle,
  DollarSign,
  TrendingUp,
  Clock,
  AlertTriangle,
  AlertCircle,
  ArrowRight,
  Building2,
  FileText,
  Users,
  Globe,
  Calculator,
  Target,
  Shield,
  Phone,
  Home
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";

export default function RealEstateVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['real-estate-virtual-assistant']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-red-600 text-white mb-4 text-sm px-3 py-1">
              Brutal Honesty: 90% Fail
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Real Estate Virtual Assistant:<br />
              <span className="text-lime-600">90% Fail - Client Messes Up or Staff Messes Up</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Look, I'm going to be brutally honest with you - 90% of VA partnerships fail. It's just a matter of time before the client messes up or the staff messes up. Sometimes both.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I started hiring offshore staff in 2012 because a $70/hour Australian bookkeeper was destroying my profit margins at REMAX. I was doing 80K monthly commissions on a 92% split - great revenue, terrible profits.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/pricing" 
                className="inline-flex items-center px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors"
              >
                Get Honest Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/case-studies" 
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-lime-600 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Intro */}
        <div className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            That first VA worked from her grandmother's house in the Philippines. Roosters crowing during client calls. Rain hammering tin roof. Power outages. Grandma talking in the background. I almost quit after two weeks.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Fast forward: 13 years experience (client side 2012-2019, running Shore Agents BPO in Clark, Philippines since 2019). I've seen VAs last 7 years. I've seen them not even show up on Day 1.
          </p>
          
          <Card className="bg-red-50 border-l-4 border-red-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>Here's what nobody tells you upfront.</strong>
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* 90% Failure Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 90% Failure Reality - Why It's Always a Dirty Game</h2>
              <p className="text-lg text-gray-600">Real talk: This is hiring and HR. It's a dirty game in ANY country. No different.</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How they fail:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">The Client Messes Up</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• No documented processes</li>
                    <li>• Unrealistic expectations</li>
                    <li>• Quits during 30-60 day frustration phase</li>
                    <li>• Delegates strategy instead of execution</li>
                    <li>• No systems, no patience, no management time</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">The Staff Messes Up</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Doesn't show up (Day 1 no-shows happen)</li>
                    <li>• Performance drops after a few months</li>
                    <li>• Takes better offer and ghosts</li>
                    <li>• Works multiple clients, divided attention</li>
                    <li>• Lies about experience or availability</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Both Mess Up</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• No clear communication</li>
                    <li>• Misaligned expectations</li>
                    <li>• Trust issues from the start</li>
                    <li>• No backup plan when it goes sideways</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                The advantage you're getting: Hiring someone in a country with lower living expenses.
              </p>
              <p className="text-gray-800 font-semibold">
                What did you expect? Perfection? Economics are lower because the country is different, not because people are desperate. They have options too.
              </p>
              <div className="mt-4 space-y-2 text-sm text-gray-700">
                <p><strong>Best case:</strong> 7 years (longest VA I've seen - sales admin role, everything done right, luck played a part)</p>
                <p><strong>Worst case:</strong> Day 1 no-show</p>
                <p><strong>Common:</strong> 3-6 months then they take better offer</p>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                Does this mean it won't work out? No. But you better have your processes together or you're part of the 90%.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Success Rate Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-100 rounded-full p-3">
              <Target className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Success Rate Reality: 50-50 If You Do Your Part</h2>
              <p className="text-lg text-gray-600">Industry reality: 90% of all VA partnerships fail within 90 days</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                <strong>Industry reality:</strong> 90% of all VA partnerships fail within 90 days.
              </p>
              <p className="text-gray-800 font-bold text-lg mb-4">
                Shore Agents clients who get their shit together: 50% success rate long-term.
              </p>
              <p className="text-gray-800 font-semibold mb-4">Why the difference?</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">We can't control:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Whether you document your processes (most don't)</li>
                    <li>• Whether you have patience for 60-90 days (most quit)</li>
                    <li>• Whether you manage actively (most disappear)</li>
                    <li>• Whether you delegate the right tasks (most don't know the difference)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">We CAN control:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Quality of candidates (we show you real profiles)</li>
                    <li>• Transparency (no hidden markup bullshit)</li>
                    <li>• Tracking tools (see what they're actually doing)</li>
                    <li>• Ongoing support (we're here when shit goes wrong)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The 100% Success Formula:</h3>
              <p className="text-gray-800 font-semibold mb-4">IF you:</p>
              <div className="space-y-2 mb-4">
                {[
                  "Document your processes BEFORE hiring",
                  "Dedicate 5-10 hours/week management (first 90 days)",
                  "Have patience for 60-90 day ramp-up",
                  "Delegate execution tasks (not strategy)",
                  "Use our tracking software",
                  "Don't quit during frustration phase"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-bold text-lg">
                THEN: It works. Every time.
              </p>
              <p className="text-gray-800 font-semibold mt-4">
                The problem: Most people don't do their part. That's not on us. We're the middle man. We give you the tools, the candidates, the transparency, the tracking. You do the work. Or you don't. 50-50.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Night Shift Problem Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Clock className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Philippines Night Shift Problem (What Nobody Warns You About)</h2>
              <p className="text-lg text-gray-600">Here's the reality for US agents</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Here's the reality for US agents: Your 9am-5pm EST = Their 9pm-5am Manila. Night shift.
              </p>
              <div className="space-y-3 text-sm text-gray-700 mb-4">
                <p><strong>What happens:</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>• VA starts coming to office at 9pm</li>
                  <li>• Traffic in Manila at 9pm is a nightmare</li>
                  <li>• They ask to work from home (fair enough)</li>
                  <li>• Now tracking them becomes really difficult</li>
                  <li>• You're paying 10% night differential (Philippine labor law)</li>
                  <li>• Higher cost + harder to manage = you're flying blind</li>
                </ul>
              </div>
              <p className="text-gray-800 font-semibold">
                That's why we built specific tracking software to see what they're actually doing: Screen monitoring, activity tracking, output verification. Not perfect, but better than blind trust.
              </p>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Australian/NZ agents (the advantage nobody talks about):</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Philippines is +2 to +4 hours ahead. DAYTIME overlap - no night shift problems. Time zones actually work for you vs fighting them.
              </p>
              <p className="text-gray-800 font-semibold">
                This is why I moved operations to Clark in 2012.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Outbound Calls Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-100 rounded-full p-3">
              <Phone className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">If You Want Outbound Calls - Verify the Workspace Thoroughly</h2>
              <p className="text-lg text-gray-600">Real talk about cold calling</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                If you're hiring for outbound calls, lead generation, client-facing work - you need to verify the workspace more thoroughly. Yes, avoid the chickens situation.
              </p>
              <div className="space-y-2 text-sm text-gray-700 mb-4">
                <p><strong>Why?</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>• Roosters crowing on a $2M listing call = you look unprofessional</li>
                  <li>• Grandma talking during cold calls = instant hang up</li>
                  <li>• Rain on tin roof = unprofessional</li>
                  <li>• Dogs barking, kids screaming, neighbors yelling = brand damage</li>
                </ul>
              </div>
              <p className="text-gray-800 font-semibold">
                What we do: Video interviews when they're at home - you can see and hear their actual workspace during the interview.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">When home-based works:</h3>
                <div className="space-y-2">
                  {[
                    "Admin tasks (data entry, CRM, email)",
                    "Back-office (bookkeeping, transaction coordination)",
                    "Written work (social media, listings, content)"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">When you need office-based:</h3>
                <div className="space-y-2">
                  {[
                    "Outbound calling (background noise kills you)",
                    "Client-facing calls (professionalism matters)",
                    "Live support (need reliable internet + quiet)"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-100 border-l-4 border-gray-600 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                The tracking reality: Home-based workers are harder to track. That's just reality. Our software helps, but nothing beats office environment for accountability.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Competitor Landscape Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Real Competitor Landscape (What They Won't Tell You)</h2>
              <p className="text-lg text-gray-600">What competitors hide vs what we're honest about</p>
            </div>
          </div>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">MyOutDesk (The Big Player)</h3>
              <div className="space-y-2 text-sm text-gray-700 mb-4">
                <p><strong>Claim:</strong> "Trained by 8,500+ clients, top 2.2% hired"</p>
                <p><strong>Cost:</strong> $1,988/month full-time (12-month contract)</p>
                <p><strong>What they won't tell you:</strong> "Trained" = 4 weeks generic overview, not YOUR business</p>
                <p><strong>Reality:</strong> Still need 60-90 days real training on YOUR systems</p>
                <p><strong>The markup:</strong> You're paying 40-50% more than direct costs</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Virtudesk, TaskBullet, Zirtual, Wing</h3>
              <div className="space-y-2 text-sm text-gray-700 mb-4">
                <p><strong>Pricing:</strong> $1,200-2,500/month depending on level</p>
                <p><strong>Models:</strong> Monthly contracts, some with minimums</p>
                <p><strong>What they hide:</strong> Generic assignment, you don't pick who</p>
                <p><strong>Reality:</strong> All claim "real estate trained" - all need YOUR training still</p>
                <p><strong>The markup:</strong> 35-45% above actual costs</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What NONE of them tell you:</h3>
              <div className="space-y-2 text-sm text-gray-700">
                {[
                  "90% failure rate overall",
                  "Night shift differential for Philippines + US hours",
                  "Tracking home-based workers is extremely difficult",
                  "They're NOT trained for YOUR business",
                  "First 60-90 days you're slower, not faster",
                  "The massive markup they're charging"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What we're honest about:</h3>
              <div className="space-y-2 text-sm text-gray-700">
                {[
                  "It's a dirty game",
                  "90% fail (client or staff messes up, we're the middle man)",
                  "They need YOUR training",
                  "Tracking is difficult (here's our software)",
                  "Takes 60-90 days to productivity",
                  "Our transparent pricing structure"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Our Platform Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Building2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Platform: Real Candidates, Real Costs, No Hidden Fees</h2>
              <p className="text-lg text-gray-600">We're based in Clark, Philippines. We have our own pricing system with exact costs linked to real candidates.</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What You Get:</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">1. Real Candidate Profiles (Not Generic Promises)</h4>
                  <p className="text-sm text-gray-700">Browse actual people with real profiles. See their background, experience, workspace setup. Pick WHO you want, not who we assign. Full-time only - if you want part-time, go to Upwork.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">2. AI DISC Test (Know Exactly What You're Getting)</h4>
                  <p className="text-sm text-gray-700">AI analyzes personality. Tells you exactly what type of person they are. Match to role requirements. No surprises after you hire.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">3. AI Resume Analysis (Real Experience vs Fluff)</h4>
                  <p className="text-sm text-gray-700">AI breaks down their actual experience. Separates claims from real skills. Shows you what they've ACTUALLY done. Not what they say they can do.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">4. Transparent Pricing (See Exact Costs)</h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Entry level roles: Starting around $1,100 USD/month + workspace</li>
                    <li>• Experienced roles: $1,800-2,200 USD/month + workspace</li>
                    <li>• Night differential already factored in</li>
                    <li>• No hidden markup like competitors</li>
                  </ul>
                  <p className="text-sm text-gray-800 font-semibold mt-2">Note: "Experienced" means they worked for another client or company, NOT that we trained them - you still train them for YOUR business</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">5. Workspace Options</h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Work from Home: Lower setup, includes tracking software</li>
                    <li>• Hybrid: Office access when needed</li>
                    <li>• Full Office: Best for client-facing roles</li>
                  </ul>
                  <p className="text-sm text-gray-700 mt-2">You choose based on role requirements</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">6. Built-in Tracking Software</h4>
                  <p className="text-sm text-gray-700">We built this because tracking is difficult. Screen monitoring for home-based workers. Activity verification. Output measurement. You can actually see what they're doing.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What You DON'T Get:</h3>
              <div className="space-y-2 text-sm text-gray-700">
                {[
                  '"Trained and ready" lies - No, they\'re not trained for YOUR business. You train them.',
                  "Generic assignment - You pick the actual person.",
                  "Part-time options - Full-time or go elsewhere.",
                  "Magic solutions - Still hiring, still HR, still a dirty game.",
                  "Hidden markups - Transparent pricing, you see what you pay."
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                Will they work out? That's really up to you and them. We give you the tools to make a good decision. We give you transparency. We give you tracking. But we can't make you document your processes. We can't make you patient for 60-90 days. We can't make them show up if they don't want to.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Pricing Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Pricing Reality: What You're Actually Paying</h2>
              <p className="text-lg text-gray-600">Every competitor hides what you're paying for. We show you the end price with everything included.</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Entry level roles: $1,100-1,500/month total</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Salary</li>
                    <li>• Benefits</li>
                    <li>• Management overhead</li>
                    <li>• Workspace infrastructure</li>
                    <li>• Our business costs</li>
                    <li>• Everything</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced roles: $1,800-2,200/month total</h3>
                  <p className="text-sm text-gray-700">Same inclusions. Higher salary tier. Still transparent.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Competitor comparison:</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-bold text-gray-900">MyOutDesk: $1,988/month</p>
                  <p className="text-sm text-gray-700">What's their cost breakdown? They won't tell you. What's their margin? Hidden. What are you paying for? Mystery.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Shore Agents: $1,100-2,200/month</p>
                  <p className="text-sm text-gray-700">What's the breakdown? We'll show you if you ask. What are you paying for? Everything listed above. What's our margin? We're a business. It's factored in. End price is what matters.</p>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                The difference: We're transparent about YOUR costs (what you pay). They hide everything and markup 40-50% without telling you.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Processes Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <FileText className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Make Sure You Have Your Processes Together First</h2>
              <p className="text-lg text-gray-600">This is the part that makes or breaks you</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Most tasks can be assisted by AI. Here's what you should do:
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Use AI to Document Your Processes</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Before you hire anyone: Sign up to an LLM (I prefer Claude, but use what works). Create Projects for different areas of your business. Document YOUR processes - talk through what you do. Document processes for THEM - step-by-step instructions.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                The key: Learn AI tools to help you think about what you really want to delegate and create processes.
              </p>
              <p className="text-gray-800 font-semibold mb-4">Why? Because if you think this person is going to just figure it out on their own, you're setting them up to fail.</p>
              <h4 className="font-bold text-gray-900 mb-3">What to document:</h4>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• Every task you want to delegate</li>
                <li>• Exactly how YOU do it (step-by-step)</li>
                <li>• What good output looks like</li>
                <li>• Where to find information</li>
                <li>• Who to ask when stuck</li>
                <li>• Decision trees for common situations</li>
              </ul>
              <h4 className="font-bold text-gray-900 mb-3">Tools that help:</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Claude Projects (process documentation)</li>
                <li>• Loom (video walkthroughs)</li>
                <li>• Your CRM (document your specific setup)</li>
                <li>• Our tracking software (verify they're following processes)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-red-50 border-l-4 border-red-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold mb-4">
                Without documentation: They guess. They mess up. You get frustrated. Partnership dies in 60 days.
              </p>
              <p className="text-gray-800 font-semibold">
                With documentation: They have a roadmap. Quality improves. You can scale.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Best Strategy Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-100 rounded-full p-3">
              <Target className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Best Strategy: Be Ready to Hire Multiple Until You Find Reliable Ones</h2>
              <p className="text-lg text-gray-600">Real talk: You're hiring from a country with lower living expenses. What do you think happens?</p>
            </div>
          </div>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                They have options. They'll take better offers. Some won't work out. Some won't even show up. That's NORMAL.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                The smart play: Don't hire one and pray. Be mentally ready to hire a few until you get reliable ones.
              </p>
              <p className="text-gray-700 text-sm mb-4">
                But - with us it's full-time roles. We're not doing the part-time dance. If you want that, use Upwork.
              </p>
              <h4 className="font-bold text-gray-900 mb-3">What we mean:</h4>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• Hire for your first role</li>
                <li>• If they work out, great</li>
                <li>• If they don't (Day 1 no-show, performance drops, takes better offer), hire next one</li>
                <li>• Keep doing this until you find reliable ones</li>
                <li>• Then hire for additional roles</li>
              </ul>
              <h4 className="font-bold text-gray-900 mb-3">Timeline to expect:</h4>
              <ul className="space-y-1 text-sm text-gray-700 mb-4">
                <li>• Some last 7 years (sales admin role - client did everything right, luck played a part)</li>
                <li>• Some don't show Day 1</li>
                <li>• Most fall somewhere in between (6-24 months average)</li>
                <li>• You'll know in 30-60 days if they're reliable</li>
              </ul>
              <h4 className="font-bold text-gray-900 mb-3">Budget reality:</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Entry level: ~$1,100-1,500/month</li>
                <li>• Experienced: ~$1,800-2,200/month</li>
                <li>• Factor in you might need 2-3 attempts to find reliable one</li>
                <li>• Still cheaper than $70/hour local admin</li>
              </ul>
              <p className="text-gray-800 font-semibold mt-4">
                Remember: "Experienced" means worked elsewhere, not trained for YOUR specific business.
              </p>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The 4-to-46 example (Ballast Property Management):</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                They started cautious. Tried other providers. Started with 4 specialists to test us out. Performance was so good they moved their entire operation. Now 46 specialists across multiple departments. Years later, still growing.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                Their quote: "We've used multiple outsourcing companies and ShoreAgents has surpassed our expectations by far."
              </p>
              <p className="text-gray-800 leading-relaxed">
                Did all 46 work out perfectly? No. Some didn't. They hired more. That's the game. But when you get your shit together like Ballast did, it works.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What We've Built Different Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We've Built Different (But It's Still a Dirty Game)</h2>
          
          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Look, we've patched a lot of holes that exist in this industry:
              </p>
              <div className="space-y-2 mb-4">
                {[
                  "Transparency: Real candidates, real costs, no hidden markup",
                  "AI Matching: DISC + Resume Analysis so you know what you're getting",
                  "Tracking: Built software because tracking home-based is difficult",
                  "Honesty: No \"trained and ready\" lies - you train them for YOUR business",
                  "Full-time focus: No part-time chaos, serious roles only",
                  "Workspace verification: For client-facing, we check backgrounds",
                  "Night differential: Factored into pricing, you see real costs",
                  "Clark location: Office-based options available, better infrastructure than Manila"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                But this is still a challenging game. We can't patch:
              </p>
              <div className="space-y-2">
                {[
                  "Clients who don't document processes",
                  "Clients who quit during frustration phase",
                  "Staff who take better offers and ghost",
                  "Staff who don't show up Day 1",
                  "The fundamental reality of hiring humans"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                That's hiring. That's HR. In ANY country. The difference? We're honest about it upfront. We're the middle man - we give you the tools, you do the work.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When It Actually Works Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">When It Actually Works (The Success Pattern)</h2>
          
          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                From 13 years on both sides, successful partnerships have:
              </p>
              <div className="space-y-2 mb-4">
                {[
                  "Documented processes (AI tools, videos, SOPs)",
                  "Realistic timeline (60-90 days to productivity)",
                  "Management time (5-10 hrs/week first 90 days)",
                  "Clear role definition (execution, not strategy)",
                  "Patience (don't quit during frustration phase)",
                  "Backup mentality (if this one doesn't work, next one will)",
                  "Their processes together (systems before people)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">They avoid:</p>
              <div className="space-y-2">
                {[
                  '"Trained and ready" myth',
                  "Expecting immediate results",
                  "No documentation (winging it)",
                  "Scope creep (clear boundaries)",
                  "Quitting in first 60 days",
                  "Delegating decision-making"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The data backs this up:</h3>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• 50% of RealTrends Top 10 Teams use VAs</li>
                <li>• Average time to productivity: 60-90 days (not immediate)</li>
                <li>• Businesses save 60-78% vs local (if they survive 90 days)</li>
                <li>• Entrepreneurs regain 13-15 hours/week (after ramp-up)</li>
              </ul>
              <p className="text-gray-800 font-semibold mb-4">But also:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Most fail within 90 days</li>
                <li>• Usually client or staff messes up (or both)</li>
                <li>• Takes 18-24 months to break even on investment</li>
                <li>• Not a magic bullet, just economics + systems</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Real Costs Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Calculator className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Real Costs (Honest Version)</h2>
              <p className="text-lg text-gray-600">Marketing pitch everywhere: "$10-15/hour! Save 70%!" Reality:</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Year 1 Complete Costs (Experienced VA Example):</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">VA Monthly Cost:</span>
                  <span className="font-semibold">$1,900 (salary + workspace)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Setup Fee:</span>
                  <span className="font-semibold">$1,100 (one-time)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software/Tools:</span>
                  <span className="font-semibold">$100/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">YOUR Training Time (60 hrs @ $150/hr):</span>
                  <span className="font-semibold">$9,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">YOUR Management (5 hrs/wk × 52 × $150):</span>
                  <span className="font-semibold">$39,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Mistakes/Rework:</span>
                  <span className="font-semibold">$5,000</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">YEAR 1 TOTAL:</span>
                  <span className="font-bold text-red-600 text-xl">$66,700</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Year 2+ (After They're Trained):</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">VA Monthly Cost:</span>
                  <span className="font-semibold">$22,800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software:</span>
                  <span className="font-semibold">$1,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Management (2 hrs/wk × 52 × $150):</span>
                  <span className="font-semibold">$15,600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Mistakes:</span>
                  <span className="font-semibold">$1,000</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">YEAR 2 TOTAL:</span>
                  <span className="font-bold text-blue-600 text-xl">$40,600</span>
                </div>
              </div>
              <p className="text-gray-800 font-semibold">
                Break-even: 18-24 months if you don't quit
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h4 className="font-bold text-gray-900 mb-3">When it makes sense:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Reclaim 15+ hours/week</li>
                  <li>• Your time worth $150+/hour</li>
                  <li>• Value saved: $9,000+/month</li>
                  <li>• Year 2+ ROI: 300-500%</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h4 className="font-bold text-gray-900 mb-3">When it doesn't:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Doing under $250k GCI</li>
                  <li>• Can't fill freed time with high-value work</li>
                  <li>• No patience for 60-90 day ramp</li>
                  <li>• No systems or documentation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* What VAs Actually Do Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Real Estate VAs Actually Do</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Good to Delegate:</h3>
                <div className="space-y-2">
                  {[
                    "CRM updates, data entry",
                    "MLS listings management",
                    "Transaction coordination",
                    "Appointment scheduling",
                    "Social media (pre-approved content)",
                    "Email management",
                    "Lead research",
                    "Marketing materials creation"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Never Delegate:</h3>
                <div className="space-y-2">
                  {[
                    "Client relationship building",
                    "Listing presentations",
                    "Negotiations",
                    "Pricing strategy",
                    "Strategic business decisions"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Verify Workspace First:</h3>
              <div className="space-y-2">
                {[
                  "Outbound calling",
                  "Client-facing calls",
                  "Live customer support"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Bottom Line Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Bottom Line</h2>
          
          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                90% fail. Client messes up or staff messes up. We're the middle man. This is hiring. This is HR. It's a challenging game in ANY country.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                The advantage: Lower costs because of economics (living expenses are different). The disadvantage: They have options. Some don't show up. Some take better offers. Some aren't reliable.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What makes the 10% succeed:</h3>
              <div className="space-y-2 mb-4">
                {[
                  "They have their processes together FIRST (documentation, systems)",
                  "They're patient (60-90 days to productivity)",
                  "They manage actively (5-10 hrs/week first 90 days)",
                  "They're ready to hire multiple until they find reliable ones",
                  "They use our tools (AI matching, tracking software, real candidates)",
                  "They don't quit during the frustration phase"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What we provide:</h3>
              <div className="space-y-2 mb-4">
                {[
                  "Real candidate profiles you can browse and pick",
                  "AI DISC Test + Resume Analysis (know what you're getting)",
                  "Transparent pricing (no hidden markup like competitors)",
                  "Tracking software (because monitoring home-based is difficult)",
                  "Honesty (no \"trained and ready\" nonsense)",
                  "Clark-based operations (better infrastructure than Manila)",
                  "Ready talent available (when things don't work out)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What we can't provide:</h3>
              <div className="space-y-2">
                {[
                  "Your documented processes",
                  "Your patience",
                  "Your management time",
                  "Guarantee they'll show up or stay",
                  "Magic that makes hiring not challenging"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-900 font-bold text-xl text-center mb-4">
                Will it work out? That's up to you and them. We give you the tools. You do the work.
              </p>
              <p className="text-gray-900 font-bold text-xl text-center">
                If you get your shit together: 100% success rate. If you don't: Part of the 90% that fail. Simple as that.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Your Processes Together?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Contact ShoreAgents for real candidates, transparent pricing, and honest assessment. We give you the tools. You do the work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 bg-white text-lime-600 font-bold text-lg rounded-lg hover:bg-lime-50 transition-colors shadow-lg"
              >
                Get Honest Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 bg-lime-700 text-white font-bold text-lg rounded-lg hover:bg-lime-800 transition-colors border-2 border-white/20"
              >
                <Building2 className="mr-2 w-5 h-5" />
                View Case Studies
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Final Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            90% fail. Client messes up or staff messes up. We're the middle man. If you get your shit together: 100% success rate. If you don't: Part of the 90% that fail. Simple as that.
          </p>
        </div>
      </div>
    </div>
  );
}
