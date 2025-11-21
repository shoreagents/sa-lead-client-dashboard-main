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
  Ruler,
  Monitor,
  ClipboardList
} from "lucide-react";
import Link from "next/link";

export default function EstimatingVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For 15+ Projects Annually
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Estimating Virtual Assistant:<br />
              <span className="text-lime-600">Why Contractors Who Can't Bid on 15+ Projects Monthly Are Leaving Money on the Table</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Your competitors are bidding on three times more projects than you are. They're not working harder. They're not cutting corners. They've figured out that trying to do all your own estimating is like insisting on mixing your own concrete when you've got a ReadyMix plant down the road.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The maths is brutal: if you're spending 8-12 hours on each estimate and you can only produce 6-8 quality bids per month, you're losing opportunities to contractors who are producing 15-20 estimates monthly at the same quality level. When construction estimating errors already cost the USA industry $273 billion annually and cause 52% of project delays, being outbid because you simply couldn't prepare enough estimates fast enough is inexcusable.
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
            I've been placing estimating virtual assistants with construction companies across the USA, Australia, and New Zealand for 15 years. I've watched Queensland contractors save $73,000+ annually per estimator whilst increasing their bid volume by 200%. I've also seen companies waste $40,000 trying to offshore quantity takeoffs to someone who'd never read a construction drawing in their life.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This guide is for general contractors and specialty contractors currently doing 15+ projects annually who are losing bids simply because they can't produce enough estimates fast enough.</strong> If you're a residential builder doing 3-4 custom homes a year, this isn't for you.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* What Nobody Tells You Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <AlertCircle className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Nobody Tells You About Estimating Virtual Assistants</h2>
              <p className="text-lg text-gray-600">Here's what makes an estimating VA different from every other offshore role</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Here's what makes an estimating VA different from every other offshore role: they're not doing data entry. They're doing engineering-level work that directly determines whether you win or lose six-figure contracts.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                An estimating virtual assistant is a construction professional—typically with an engineering or construction management degree—who specialises in quantity takeoffs, cost analysis, and bid preparation. They use the same software you do (PlanSwift, Bluebeam, RSMeans), read the same drawings, and produce estimates that must withstand the same scrutiny as your in-house work.
              </p>
              <p className="text-gray-800 leading-relaxed">
                The difference between a good estimating VA and a mediocre one is whether they understand why a steel grade matters, when to apply different waste factors, and how to read structural details that affect pricing. You don't want someone who can operate software—you want someone who understands construction.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Bid Volume Problem Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Target className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Bid Volume Problem Nobody's Fixing</h2>
              <p className="text-lg text-gray-600">Right now, you're choosing between preparing estimates yourself or hiring a full-time local estimator</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Right now, you're choosing between preparing estimates yourself or hiring a full-time local estimator at $80,000-120,000 annually across USA, Australia, and New Zealand. Neither solves your real problem: you need to scale bid volume without proportionally scaling costs.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                Here's the reality: at a 30% win rate, you're preparing 60-80 detailed estimates annually to secure your target workload. If each estimate takes 8-12 hours and you're doing it yourself, that's 480-960 hours annually—25-50% of your working year spent on work that only pays off one-third of the time.
              </p>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-3">The Problem with Each Option:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Local estimators:</strong> Create fixed overhead that kills flexibility. Slow periods? You're paying full salary for capacity you don't need. Boom periods? You're capacity-constrained because hiring another estimator takes 60-90 days.</li>
                  <li>• <strong>Per-project estimating services:</strong> You're spending $500-2,000 per estimate with no institutional knowledge.</li>
                  <li>• <strong>Doing it yourself:</strong> 25-50% of your working year spent on estimates that only pay off one-third of the time.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Why Filipino VAs Work Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Building2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Why Filipino Estimating VAs Actually Work</h2>
              <p className="text-lg text-gray-600">Philippines universities produce 50,000+ engineering and construction management graduates annually</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Philippines universities produce 50,000+ engineering and construction management graduates annually. Many have 3-5 years experience before becoming VAs. They're trained on USA/Australian/New Zealand standards and software. And they cost $1,800-2,500 monthly instead of $6,000-9,000 for equivalent local talent.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                Gallery Group in Queensland hired two construction specialists through ShoreAgents and now saves $73,000+ annually per specialist whilst maintaining perfect performance reviews. These aren't call centre operators—they're professionals who understand construction drawings, CSI divisions, and trade-specific requirements.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                When you're working 9am-5pm in New York or Sydney, your Filipino VA is working at that exact same moment (9pm-5am Manila time). There's no communication delay. They're responding to Slack messages, joining Zoom calls, and processing RFIs whilst you work.
              </p>
              <p className="text-gray-800 leading-relaxed">
                Filipino engineering programmes emphasise structural analysis, construction methods, and project costing. Your VA likely has a civil engineering degree and understands why construction details matter.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Real Numbers Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Calculator className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Real Numbers</h2>
              <p className="text-lg text-gray-600">Let's compare actual costs for a mid-level estimator</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">USA Full-Time:</h3>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Base salary:</span>
                    <span className="font-semibold">$70,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Benefits:</span>
                    <span className="font-semibold">$17,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Software:</span>
                    <span className="font-semibold">$2,400</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Office:</span>
                    <span className="font-semibold">$8,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Recruitment:</span>
                    <span className="font-semibold">$5,000</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">Total annually:</span>
                    <span className="font-bold text-red-600 text-xl">$102,900</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Australia Full-Time:</h3>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Base salary:</span>
                    <span className="font-semibold">$85,000 AUD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Super:</span>
                    <span className="font-semibold">$9,400 AUD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">WorkCover:</span>
                    <span className="font-semibold">$3,200 AUD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Software:</span>
                    <span className="font-semibold">$2,600 AUD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Office:</span>
                    <span className="font-semibold">$9,000 AUD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Recruitment:</span>
                    <span className="font-semibold">$6,000 AUD</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">Total annually:</span>
                    <span className="font-bold text-blue-600 text-xl">$115,150 AUD</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">New Zealand Full-Time:</h3>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Base salary:</span>
                    <span className="font-semibold">$78,000 NZD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">KiwiSaver:</span>
                    <span className="font-semibold">$2,300 NZD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">ACC:</span>
                    <span className="font-semibold">$1,800 NZD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Software:</span>
                    <span className="font-semibold">$2,500 NZD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Office:</span>
                    <span className="font-semibold">$8,500 NZD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Recruitment:</span>
                    <span className="font-semibold">$5,500 NZD</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">Total annually:</span>
                    <span className="font-bold text-lime-600 text-xl">$98,640 NZD</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Filipino Estimating VA:</h3>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monthly cost:</span>
                    <span className="font-semibold">$2,200 × 12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Software:</span>
                    <span className="font-semibold">$2,400</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">Total annually:</span>
                    <span className="font-bold text-green-600 text-xl">$28,800 USD</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <p className="text-gray-800 font-bold text-lg mb-4">
                You're looking at 70-75% cost savings. For a construction company running two estimators, that's $140,000-180,000 staying in your pocket annually.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                But here's what matters more: scalability. Need to double bid capacity for three months? Add another VA at $6,600 versus hiring a $90,000 full-time person. Slow winter coming? Scale back without redundancy costs.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What Makes This Work Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Makes This Actually Work</h2>
              <p className="text-lg text-gray-600">Estimating VAs work brilliantly when you have the right systems. They fail when you don't</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">1. Documented Procedures</h3>
                  <p className="text-sm text-gray-700">Your VA needs your cost database, waste factors, labour rates, equipment costs, and markup structures documented. If this lives in your head, you're not ready. Successful contractors create estimating manuals covering standard waste factors, productivity rates, and markup calculations.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">2. Software and Training</h3>
                  <p className="text-sm text-gray-700">Your VA needs the same software you use. Budget $2,000-3,000 annually for licences (PlanSwift, Bluebeam, RSMeans). Most Filipino VAs are already trained on these platforms but need 2-3 weeks learning YOUR specific workflows.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">3. Quality Control</h3>
                  <p className="text-sm text-gray-700">Someone reviews every estimate before submission. Your VA produces the detailed takeoff and cost breakdown, but you review for accuracy and strategic pricing. Gallery Group's perfect reviews happened because management invested time in feedback and quality control.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">4. Realistic Timeline</h3>
                  <p className="text-sm text-gray-700">First estimate takes 200% of normal time whilst they learn your systems. Weeks 2-4: 150% of normal time. Months 2-3: Matching your speed. Month 4+: Often faster because they're doing this full-time. Contractors who expect immediate productivity fail. Those who invest 30-40 hours training in months 1-2 succeed.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When This Doesn't Work Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When This Doesn't Work</h2>
              <p className="text-lg text-gray-600">I'll save you $20,000-40,000 by telling you when estimating VAs don't work</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <div className="space-y-3">
                {[
                  "You're doing under 15 projects annually: The training investment doesn't justify savings for 8-12 estimates yearly.",
                  "Your estimates are 100% relationship-based: If winning depends entirely on on-site meetings and complex strategic pricing, offshore estimating won't help.",
                  "You have no documented procedures: If your process is 'I figure it out based on experience,' document procedures first, then hire a VA.",
                  "You need site visits for every estimate: Specialty work like historic renovation or contaminated sites requires extensive on-site investigation that can't be done remotely.",
                  "You're looking for someone to 'figure it out': VAs execute your system—they don't create it. You provide cost databases, waste factors, and quality review."
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* How to Implement Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">How to Implement Without Wasting $40,000</h2>
              <p className="text-lg text-gray-600">Here's what actually works</p>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <Badge className="bg-blue-600 text-white mb-3">Phase 1: Weeks 1-3</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Document Your Process</h3>
                <p className="text-gray-700 leading-relaxed">
                  Create your estimating manual covering cost databases, waste factors, productivity rates, and markup structures. This is 20-40 hours but it's the foundation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <Badge className="bg-green-600 text-white mb-3">Phase 2: Weeks 4-8</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hire and Train</h3>
                <p className="text-gray-700 leading-relaxed">
                  Work with a construction-specialist placement firm. First week: system orientation. Second-third weeks: shadow your estimates. Fourth week+: produce estimates under supervision.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <Badge className="bg-amber-600 text-white mb-3">Phase 3: Months 2-4</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Supervised Production</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your VA produces estimates whilst you review everything and provide feedback. Expect 40-60 hours of your time during this phase.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <Badge className="bg-lime-600 text-white mb-3">Phase 4: Month 5+</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Scaled Independence</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your VA produces estimates independently whilst you spot-check and make strategic adjustments. They're handling the heavy lifting.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-green-300 bg-green-50 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                Gallery Group followed exactly this approach—invested time in training, and now their offshore specialists earn perfect performance reviews whilst saving $73,000+ annually per specialist.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Market Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Market Reality Across USA, Australia, and New Zealand</h2>
              <p className="text-lg text-gray-600">"Estimating virtual assistant" has virtually no search volume in any market</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                "Estimating virtual assistant" has virtually no search volume in any market. Why? Because contractors search for "construction estimator" or "bid preparation"—they're not specifically looking for offshore solutions until they discover this solves their capacity problem.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                This creates opportunity: whilst your competitors haven't figured out offshore estimating yet, you can build 2-3x bid capacity and win more work.
              </p>
              <p className="text-gray-800 leading-relaxed">
                Filipino VAs trained on USA standards (CSI divisions, ASTM specs, IBC codes) integrate seamlessly. In Australia and New Zealand, they work brilliantly for general estimating, though you may need certified quantity surveyors for large commercial projects requiring statutory approvals. All three markets share the same reality: you need more bid capacity than you can afford with local hires.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Triple Your Bid Capacity?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              The contractors winning more work aren't working harder—they're working systematically. They've figured out that handling all estimating yourself leaves money on the table when competitors are producing 15-20 quality estimates monthly to your 6-8.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              ShoreAgents places construction estimating professionals at $1,800-2,500 monthly. We'll tell you honestly whether you're ready, what systems you need, and what realistic timelines look like.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Not ready yet? Document your procedures first. Get your cost databases organised. Then come back when you're prepared for systematic implementation that actually works.
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
            Construction estimating errors already cost the USA industry $273 billion annually and cause 52% of project delays. Being outbid because you simply couldn't prepare enough estimates fast enough is inexcusable. The solution isn't working harder—it's working systematically.
          </p>
        </div>
      </div>
    </div>
  );
}
