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
  Palette,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";

export default function GraphicDesignOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['graphic-design-outsourcing']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For $500K+ Annual Revenue Businesses
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Graphic Design Outsourcing:<br />
              <span className="text-lime-600">The Honest Guide Nobody Else Will Write</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Here's something that'll make you rethink everything about outsourcing design work: graphic design just became the 11th fastest-declining job category according to the World Economic Forum's 2025 report. Two years ago, it was listed as "moderately growing." What changed? AI didn't just disrupt the industry—it's systematically replacing the entry-level work most businesses think they're outsourcing.
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
            I'm Stephen Atcheler, and I've spent 15 years watching businesses in the USA, Australia, and New Zealand make expensive mistakes with offshore staffing. This article isn't going to sell you on graphic design outsourcing. In fact, if your business is doing under $500,000 in annual revenue, I'm going to tell you exactly why you shouldn't do it. But if you're ready for the truth about what outsourcing actually costs, when it works, and what AI has already replaced, keep reading.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>Fair warning:</strong> Google Trends shows bugger-all search volume for "graphic design outsourcing" in any of our markets. That tells me most businesses don't even know they're asking the wrong question. They search for "hire graphic designer" or "freelance designer" and end up drowning in subscription service promises of "unlimited designs" that aren't remotely unlimited. This guide exists to help you figure out IF you should outsource before anyone tries to sell you on HOW.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Revenue Threshold Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The $500,000 Revenue Threshold Nobody Mentions</h2>
              <p className="text-lg text-gray-600">Every graphic design platform will tell you their service is perfect for "businesses of all sizes." Complete rubbish.</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Here's the reality: if you're doing under $500K annual revenue, outsourcing design will likely cost you more than it saves—especially in your first year.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                The maths is brutal. That "$25/hour Philippines designer" everyone advertises? Let's calculate what you're actually paying:
              </p>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Designer cost ($25/hr × 20 hrs/wk × 52 wks):</span>
                  <span className="font-semibold">$26,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software access (Figma, Dropbox, brand assets):</span>
                  <span className="font-semibold">$1,200/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your management time (4 hrs/wk × 52 × $100/hr):</span>
                  <span className="font-semibold">$20,800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Revisions in first 90 days:</span>
                  <span className="font-semibold">$5,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Mistakes and rework:</span>
                  <span className="font-semibold">$3,000</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">Total Year One:</span>
                  <span className="font-bold text-red-600 text-xl">$56,000</span>
                </div>
                <p className="text-red-700 font-semibold mt-2">Effective hourly rate: $54/hour, not $25</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                A mid-level US designer costs around $58,000/year ($27.88/hour). Australian businesses pay $60,000-75,000 AUD for similar talent. New Zealand sits at $55,000-70,000 NZD. When you factor in management overhead, your year-one "savings" from outsourcing might be 10-15%, not the 70% those subscription services promise.
              </p>
              <p className="text-gray-800 font-semibold">
                The break-even point doesn't hit until month four or five, after your designer has learned your brand, understands your expectations, and stopped needing constant hand-holding. Most businesses quit during weeks 4-8—right in the frustration valley—and waste every dollar they invested.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When Outsourcing Is Terrible Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When Outsourcing Design Is a Terrible Idea</h2>
              <p className="text-lg text-gray-600">Before we talk about when it works, let's discuss when it absolutely doesn't</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <div className="space-y-6">
                {[
                  {
                    title: "You need strategic or brand-critical work",
                    description: "Brand identity, positioning, or anything requiring deep business understanding shouldn't be outsourced. Your offshore designer doesn't understand your market, your customers, or why your brand matters. They'll give you something that looks professional but feels generic because they're executing your brief, not thinking strategically."
                  },
                  {
                    title: "You're doing sporadic, one-off projects",
                    description: "If you need two designs this month and none next month, you're paying setup and onboarding costs every time. Use Canva Pro ($13/month) or project-based freelancers on Fiverr instead. The overhead of outsourcing requires consistent 20+ hours/week minimum to justify itself."
                  },
                  {
                    title: "You require real-time collaboration",
                    description: "Americans hiring from the Philippines face a 12-16 hour time difference. Your 9am is their 9pm. Urgent revision? It waits until tomorrow. That 'quick fix' becomes a two-day turnaround. Australians actually have better time zone alignment with the Philippines (+2 to +4 hours), while New Zealand sits at +4 to +5 hours—still workable for same-day turnarounds. US businesses wanting real-time work should look at Latin America (Colombia, Mexico, Argentina) where time differences are 1-3 hours, not 12-16."
                  },
                  {
                    title: "You haven't documented your brand",
                    description: "If you don't have written brand guidelines, style examples, and clear processes, your outsourced designer will guess. And guess wrong. Repeatedly. You'll spend more time explaining what you want than it would take to do it yourself."
                  },
                  {
                    title: "You're looking for 'cheap labour'",
                    description: "If your primary motivation is finding the lowest possible rate, you're shopping for disaster. Quality designers—regardless of location—charge appropriate rates for their skill level. Rock-bottom prices attract rock-bottom work."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* AI Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-100 rounded-full p-3">
              <Sparkles className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The AI Reality Everyone's Avoiding</h2>
              <p className="text-lg text-gray-600">Here's what subscription services and outsourcing platforms don't want you to know</p>
            </div>
          </div>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Here's what subscription services and outsourcing platforms don't want you to know: your "professional designer" is already using AI tools extensively. Midjourney for image generation, Adobe Firefly for background removal, Canva AI for layout suggestions, ChatGPT for copywriting. The work you're outsourcing is increasingly AI-assisted, meaning you're paying human rates for partially automated output.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                This matters because AI has already replaced or automated the entry-level tasks most businesses think they're outsourcing:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">90% AI-replaceable right now:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Social media graphics</li>
                    <li>• Simple logo concepts</li>
                    <li>• Background removal</li>
                    <li>• Template customisation</li>
                    <li>• Colour palette generation</li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">50% AI-assisted today:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Website mockups</li>
                    <li>• Marketing materials</li>
                    <li>• Infographics</li>
                    <li>• Presentation decks</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Still requires human expertise:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Brand strategy</li>
                    <li>• Custom illustration</li>
                    <li>• Complex packaging design</li>
                    <li>• Strategic creative direction</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                The question isn't whether to outsource anymore—it's whether you need a human designer at all, or if you could use AI tools directly. For many businesses under that $500K threshold, subscribing to Midjourney ($30/month) and Canva Pro ($13/month) makes more financial sense than paying $1,500-2,000/month for a subscription service whose designers are using those same tools anyway.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Hybrid Approach Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Actually Works: The Hybrid Approach</h2>
              <p className="text-lg text-gray-600">The smartest businesses don't choose between in-house, outsourced, or AI—they use all three strategically</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">In-house senior designer (part-time or full-time):</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Handles brand strategy, art direction, complex creative work, and quality control. This person sets the standards and makes strategic decisions.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• US businesses budget $50,000-70,000 for part-time or $70,000-90,000 full-time</li>
                    <li>• Australian rates run $65,000-85,000 AUD</li>
                    <li>• New Zealand $60,000-80,000 NZD</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Offshore production team (Philippines or Latin America):</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Executes the templates, social graphics, marketing collateral, and repetitive work the senior designer has art-directed.
                  </p>
                  <p className="text-gray-800 font-semibold">
                    At ShoreAgents, we place full-time Filipino designers for $1,200-2,500/month depending on experience level. Latin American designers cost slightly more but offer better time zone alignment for US businesses.
                  </p>
                </div>
                <Separator />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">AI tools for rapid iteration:</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Used directly by your in-house designer or offshore team for quick mockups, variations, and concept testing before committing to final designs.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                This hybrid model typically costs $90,000-120,000 USD annually but produces 3-4× the output of a single in-house designer while maintaining strategic oversight and brand consistency.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* First 90 Days Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-100 rounded-full p-3">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The First 90 Days: What Nobody Warns You About</h2>
              <p className="text-lg text-gray-600">Every outsourcing platform promises you'll "hit the ground running." In reality, outsourcing makes you slower before it makes you faster.</p>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-4">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-red-600 text-white">Days 1-30</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Learning Curve</h3>
                    <p className="text-gray-700 leading-relaxed">
                      You're spending 10-15 hours creating brand guides, style examples, and process documentation. Your designer delivers 3-5 pieces, but 50-70% need major revisions because they're learning your brand. You think, "I could've done this faster myself." You're right. You could have.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-amber-600 text-white">Days 30-60</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Slight Improvement</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Things improve slightly. You're down to 5-10 hours/week managing and giving feedback. Output increases to 8-10 deliverables, but revision rates are still 30-40%. You're not yet seeing ROI, but you're not losing as much productivity.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-blue-600 text-white">Days 60-90</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Turning Point</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Management time drops to 3-5 hours/week. Your designer is delivering 12-15 solid pieces monthly with only 15-20% needing revisions. You've broken even with what you could produce yourself.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-green-600 text-white">Month 4-6</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Finally, The Payoff</h3>
                    <p className="text-gray-700 leading-relaxed">
                      You're spending 2-3 hours/week managing and getting 15-20 high-quality deliverables. Your effective productivity has increased 25%, and the financial ROI is clear.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-100 border-l-4 border-gray-600 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                Most businesses quit during weeks 4-8—right before it starts working. They've invested time and money into the learning curve, then bail before seeing returns. If you're not prepared to commit to at least 120 days, don't start.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Real Costs Across Markets Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Real Costs Across Markets</h2>
              <p className="text-lg text-gray-600">Let's talk actual numbers for USA, Australian, and New Zealand businesses</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">In-House Designer (Full-Time):</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>USA:</strong> $57,990/year salary + 20-30% benefits = $70,000-75,000 total</li>
                  <li>• <strong>Australia:</strong> $65,000 AUD salary + superannuation = $72,000-78,000 AUD total</li>
                  <li>• <strong>New Zealand:</strong> $60,000 NZD salary + KiwiSaver = $66,000-72,000 NZD total</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">ShoreAgents Full-Time Offshore Designer:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>USA businesses:</strong> $1,200-2,500 USD/month ($14,400-30,000/year)</li>
                  <li>• <strong>Australian businesses:</strong> $1,800-3,750 AUD/month ($21,600-45,000/year)</li>
                  <li>• <strong>NZ businesses:</strong> $1,900-4,000 NZD/month ($22,800-48,000/year)</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Subscription Services:</h3>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• <strong>Budget tier (Kimp):</strong> $599-999 USD/month</li>
                <li>• <strong>Mid-tier (Design Pickle, ManyPixels):</strong> $1,500-2,000 USD/month</li>
                <li>• <strong>Premium tier (TodayMade):</strong> $4,999 USD/month</li>
              </ul>
              <p className="text-gray-800 font-semibold">
                The catch with subscription services? That "unlimited requests" promise means one active request at a time with 48-hour turnaround. Realistically, you're getting 10-12 deliverables monthly, making the effective cost $150-200 per design—not exactly the bargain they advertise.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What You Should Never Outsource Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What You Should Never Outsource</h2>
              <p className="text-lg text-gray-600">Even if you've got the budget, the volume, and the commitment, some design work should never be outsourced</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  {
                    title: "Brand strategy and positioning work",
                    description: "Needs someone who deeply understands your business, market, and customers. Surface-level execution without strategic foundation creates pretty designs that don't convert."
                  },
                  {
                    title: "Complex UX work",
                    description: "Requires user research, testing, and rapid iteration. Remote designers working across time zones can't provide the real-time collaboration UX demands."
                  },
                  {
                    title: "High-stakes brand launches",
                    description: "Give you one chance to get it right. Generic work from someone who doesn't understand your market risks missing the mark entirely."
                  },
                  {
                    title: "Sensitive or confidential materials",
                    description: "Carry IP protection risks. Enforcing NDAs across international borders is complicated enough without adding the risk of unauthorised reuse."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border-l-4 border-gray-600 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                For these scenarios, work with premium agencies, specialised consultancies, or in-house teams who can provide the strategic depth and market understanding the work demands.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Honest Path Forward Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Honest Path Forward</h2>
              <p className="text-lg text-gray-600">If you've read this far and you're still interested in outsourcing design work, here's how to actually make it work</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  "Start with a test project. Don't commit to monthly retainers or long-term contracts until you've proven the relationship works with a single, well-defined project.",
                  "Document everything upfront. Create brand guidelines, style examples, approval processes, and communication protocols before your designer starts. The time you invest here saves triple the time later.",
                  "Set realistic expectations. Budget 5-10 hours/week management time initially, accept that first month will be slower than doing it yourself, and commit to at least 90 days before judging results.",
                  "Use the right model for your needs. Freelancers for sporadic work, subscription services for high-volume simple work, direct offshore hires for full-time dedicated needs."
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

        {/* Who This Works For Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who This Actually Works For</h2>
          
          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-6">
                You're ready to outsource graphic design if you can honestly answer yes to these questions:
              </p>
              <div className="space-y-3">
                {[
                  "Annual revenue above $500,000?",
                  "Consistent 20+ hours/week design work?",
                  "Documented brand guidelines and processes?",
                  "Willing to invest 90 days in learning curve?",
                  "Budget 5-10 hours/week management time initially?",
                  "Work is production-focused, not strategic?"
                ].map((question, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{question}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                If you've answered yes to all six, outsourcing can save you real money and expand your capacity significantly. If you answered no to any of them, you're not ready yet—and that's fine. Use AI tools and project-based freelancers until you reach the threshold where dedicated offshore staffing makes sense.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                At ShoreAgents, we only work with businesses who meet these criteria because we're not interested in setting you up to fail. We place full-time Filipino designers at $1,200-2,500/month, but only after helping you determine if outsourcing actually makes sense for your situation. Sometimes the honest answer is "not yet"—and we'll tell you that.
              </p>
              <p className="text-gray-900 font-bold text-xl text-center mt-4">
                The graphic design outsourcing market is flooded with promises of unlimited designs and massive savings. The reality is considerably more nuanced, and the math only works for businesses operating at specific revenue and volume thresholds. Know which side of that threshold you're on before you spend a dollar.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for an Honest Assessment?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Contact ShoreAgents to determine if outsourcing actually makes sense for your situation. Sometimes the honest answer is "not yet"—and we'll tell you that.
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
            Graphic design outsourcing works brilliantly when done right, by ready businesses, with realistic expectations. Know which side of the $500K threshold you're on before you spend a dollar.
          </p>
        </div>
      </div>
    </div>
  );
}
