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
  Ban
} from "lucide-react";
import Link from "next/link";

export default function EstimatingOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For Contractors Bidding 8+ Projects Monthly
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Outsource Construction Estimating:<br />
              <span className="text-lime-600">The 8-Project Rule Nobody Tells You</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              If you're bidding fewer than eight projects per month, close this page right now. Outsourcing your construction estimating will cost you MORE money than hiring someone part-time locally. The maths doesn't work, and I'd rather tell you that now than watch you burn $15,000 over six months discovering it yourself.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Still here? Good. That means you're likely running 10+ bids monthly, spending $8,000-12,000 annually on estimates, and genuinely ready for what outsourced construction estimating actually delivers.
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
            I'm Stephen Atcheler. Been placing offshore staff with construction companies across the USA, Australia, and New Zealand for 15 years. I've seen outsourced estimating save American contractors six figures annually when implemented at the right volume. I've also watched Australian builders waste $40,000 because they outsourced at five projects per month when the maths clearly said they shouldn't.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This article is for:</strong> Construction contractors bidding $2M+ in projects annually, running 8-12+ estimates monthly, and operating in markets with genuine volume. If you're a residential builder doing three custom homes a year, you don't need this. Come back when your bid volume justifies the fixed costs.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* The Numbers Nobody Shows You Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Numbers Nobody Shows You</h2>
              <p className="text-lg text-gray-600">Before we get into when it works brilliantly, let me show you the break-even calculation</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    An in-house estimator costs roughly <strong>$8,541 per month all-in</strong> (salary, software, benefits, training). Outsourcing 10 estimates monthly at an average $750 each costs $7,500, plus another $1,000 for your review and communication time. <strong>Total: $8,500 per month.</strong>
                  </p>
                  <p className="text-gray-800 font-semibold text-xl text-center py-4 border-t border-b border-red-300">
                    You break even at exactly 10 estimates per month.
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">In-house estimator (all-in):</span>
                    <span className="font-semibold">$8,541/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Outsourcing 10 estimates @ $750:</span>
                    <span className="font-semibold">$7,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Review & communication time:</span>
                    <span className="font-semibold">$1,000</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">Outsourcing Total:</span>
                    <span className="font-bold text-red-600">$8,500/month</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                <strong>Below that threshold? You're wasting money.</strong> Above 15 estimates monthly? Outsourcing becomes genuinely cost-effective. But here's what pisses me off about this industry: every estimating service advertises their speed and savings without mentioning that at low volumes, you'd be better off hiring a part-time local estimator for $3,500 per month.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What Outsourced Construction Estimating Actually Delivers Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Outsourced Construction Estimating Actually Delivers</h2>
              <p className="text-lg text-gray-600">Let's establish what you're actually buying</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Standard Services:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Quantity takeoffs (material calculations)",
                  "Cost estimating (labour + materials)",
                  "Bid preparation and formatting",
                  "Preliminary/conceptual estimates",
                  "Change order estimates"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                Typical Turnaround: 24-48 hours for standard commercial or residential projects, faster for rush work at premium rates.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What They're Actually Good At:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                High-volume, relatively standardised work where you need consistent output, scalable capacity during peak seasons, and professional formatting that matches general contractor requirements.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What They Struggle With:</h3>
              <div className="space-y-2">
                {[
                  "Highly custom projects requiring deep company knowledge",
                  "Fast-turnaround change orders needing immediate response",
                  "Negotiated contracts where pricing strategy matters more than accuracy",
                  "Developing long-term competitive advantages through incremental pricing experimentation"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* USA Market Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The USA Market Reality (And Why This Barely Exists in Australia or New Zealand)</h2>
              <p className="text-lg text-gray-600">Here's something you need to understand</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Here's something you need to understand: construction estimating outsourcing is overwhelmingly a USA market phenomenon. Google Trends shows a massive spike in USA searches in late 2025—interest went from near-zero to 100 within weeks. Meanwhile, Australia and New Zealand show insufficient data to even register a trend.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                Why the geographic split?
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                In Australia and New Zealand, the profession is called "quantity surveying" rather than "estimating," and it's heavily regulated with formal qualifications required (AIQS membership in Australia). You don't casually outsource quantity surveying to offshore providers when professional liability and licensing requirements are this stringent.
              </p>
              <p className="text-gray-800 leading-relaxed">
                The USA market, by contrast, has no licensing requirements for estimators in most states. That creates a massive service industry: dozens of companies advertising 60-75% cost savings, 24-48 hour turnarounds, and "bid more, win more" promises. The market hit explosive growth because USA construction firms report 20-30% cost savings and can reduce estimation time by 70% when they get the implementation right.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border-l-4 border-gray-600">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                For the rest of this article, I'm writing primarily for USA contractors, because that's where the market actually exists. If you're in Australia or New Zealand reading this, the principles apply, but you're likely searching for "quantity surveying services" rather than "estimating outsourcing," and your market dynamics are completely different.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Liability Gap Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Liability Gap: Who Pays When Estimates Are Wrong?</h2>
              <p className="text-lg text-gray-600">Every construction contractor reading this needs to understand something fundamental</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold text-xl mb-4">
                You are responsible for mistakes, not your estimating service.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Here's the scenario nobody wants to discuss: The estimating service misses 20% of required materials in their takeoff. You submit a bid based on their numbers. You win the project at $847,000. Halfway through construction, you discover the material shortage. The actual cost is $1,016,000.
              </p>
              <p className="text-gray-800 font-semibold text-lg">
                You eat that $169,000 loss. Not the estimating service.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Yes, many services carry E&O insurance. I AM Builders advertises a $1 Million Accuracy Guarantee backed by their E&O policy. Some services promise 95-98% accuracy guarantees. But pursuing those claims takes time, requires extensive documentation, and rarely compensates for the client relationship damage and cash flow hit you've already absorbed.
              </p>
              <p className="text-gray-800 font-semibold">
                The honest truth about offshore estimating services: they're providing you with professional analysis and recommendations, but the final responsibility for bid accuracy sits entirely with you. That's why successful contractors treat outsourced estimates as professional second opinions requiring internal review, not turnkey solutions they can submit blind.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What this means practically:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You need someone on your team—ideally your project manager or a senior estimator if you're running hybrid operations—who can review outsourced estimates for reasonableness. That review takes 45-90 minutes per estimate, checking:
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4 ml-4">
                <li>• Material quantities against your experience</li>
                <li>• Labour rates against your actual costs</li>
                <li>• Regional pricing variations</li>
                <li>• Scope completeness</li>
              </ul>
              <p className="text-gray-800 font-semibold">
                This review time is real cost. It's why my earlier break-even calculation included $1,000 monthly for review and communication. Companies that skip this quality control step are the ones discovering expensive mistakes mid-project.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Offshore vs USA Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Offshore vs USA Reality (And What "USA-Based" Actually Means)</h2>
              <p className="text-lg text-gray-600">Many construction estimating companies advertising themselves as "USA-based" are actually using offshore estimators</p>
            </div>
          </div>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Many construction estimating companies advertising themselves as "USA-based" are actually using offshore estimators in the Philippines, India, or Pakistan. The company might be registered in California with a Dallas mailing address, but the actual estimators working your projects are in Manila.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">How to identify offshore operations:</h3>
              <ul className="space-y-2 text-sm text-gray-700 mb-4 ml-4">
                <li>• Pricing under $300 per estimate (USA labour can't deliver profitably at those rates)</li>
                <li>• 24-hour turnaround regardless of project complexity</li>
                <li>• Generic email responses with time-stamped replies at 2am USA time</li>
                <li>• No direct phone access to the actual estimator</li>
                <li>• Company mentions "global team" or "international resources"</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why it matters:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Offshore estimators typically cost $10-30/hour in labour, delivering estimates at $200-500. USA-based estimators command $50-75/hour, producing estimates at $800-2,000. That price difference reflects:
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4 ml-4">
                <li>• Local knowledge of regional building codes and climate considerations</li>
                <li>• Access to local supplier pricing and union vs non-union labour rates</li>
                <li>• Same-timezone communication for questions and clarifications</li>
                <li>• USA-based company accountability and legal recourse</li>
              </ul>
              <p className="text-gray-800 font-semibold">
                Neither option is inherently superior—it depends on your project types and requirements. Commodity work with standardised specifications works fine with offshore services. Complex commercial projects with extensive client interaction benefit from USA-based support.
              </p>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The hybrid approach many contractors use:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Keep a part-time or full-time senior estimator in-house for complex projects, competitive strategy, and client presentations. Outsource overflow work, commodity projects, and specialist trades you bid infrequently. This gives you the institutional knowledge benefits of in-house expertise while maintaining scalability through outsourced capacity.
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Cost:</strong> In-house estimator ($5,000-7,000/month) plus outsource overflow ($1,000-3,000/month as needed) versus full outsourcing ($7,500-12,000/month at scale).</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When It Makes Sense Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When Outsourcing Construction Estimating Actually Makes Sense</h2>
              <p className="text-lg text-gray-600">After 15 years watching construction companies succeed and fail at this, here's what separates the successful implementations</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Outsource When:</h3>
                <div className="space-y-2">
                  {[
                    "You're consistently bidding 10+ projects monthly",
                    "Projects are relatively standardised (residential subdivisions, commercial fit-outs, standard trade work)",
                    "You have peak seasons requiring surge capacity",
                    "You're entering new markets or trades and need to test viability before hiring in-house",
                    "Your current estimating bottleneck is preventing you from bidding enough work to grow",
                    "You have clear documentation of your cost structures, markup requirements, and bidding standards"
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">Don't Outsource When:</h3>
                <div className="space-y-2">
                  {[
                    "You're bidding fewer than 8 projects monthly (the maths doesn't work)",
                    "Projects are highly custom requiring deep institutional knowledge",
                    "You need fast-turnaround change orders (24-48 hours is too slow for site decisions)",
                    "You're trying to develop competitive pricing strategy (outsourced services provide accuracy, not strategic advantage)",
                    "Your processes aren't documented (you'll spend six months teaching rather than implementing)",
                    "You're a startup contractor still developing your estimating methodology"
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
        </section>

        <Separator className="my-12" />

        {/* Real Costs Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Real Costs: Beyond the Advertised Rate</h2>
              <p className="text-lg text-gray-600">Every estimating service loves advertising their per-estimate fees. Here's what those advertised rates don't include</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Your Hidden Costs:</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Review time: 45-90 minutes per estimate @ $75-150/hr:</span>
                  <span className="font-semibold">$56-225 per estimate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Communication overhead:</span>
                  <span className="font-semibold">30-60 minutes per estimate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Learning curve:</span>
                  <span className="font-semibold">First 3-6 months while they learn your standards</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Revisions:</span>
                  <span className="font-semibold">Most services include 1-2 revision rounds, but changes beyond that cost extra</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Rush fees:</span>
                  <span className="font-semibold">Need it in 12 hours instead of 48? Expect 50-100% premium pricing</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">First-Year Reality:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you're outsourcing 10 estimates monthly at an average $750 per estimate, your first-year costs look like:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Estimating service fees:</span>
                  <span className="font-semibold">$90,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Review time:</span>
                  <span className="font-semibold">$12,000-20,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Communication overhead:</span>
                  <span className="font-semibold">$6,000-12,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Learning curve inefficiency:</span>
                  <span className="font-semibold">$8,000-15,000</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">Total first-year investment:</span>
                  <span className="font-bold text-red-600 text-xl">$116,000-137,000</span>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                By year two, once systems are established and the service knows your standards, costs typically drop 30-40% as review time decreases and revisions become rare. This is why volume matters—you need enough estimates to amortise those fixed setup costs across sufficient projects.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Software Sophistication Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-100 rounded-full p-3">
              <FileText className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Software Sophistication: The Gap Nobody Discusses</h2>
              <p className="text-lg text-gray-600">Here's something the industry doesn't talk about</p>
            </div>
          </div>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Here's something the industry doesn't talk about: estimating services provide GENERIC estimates using industry-standard software and databases. In-house estimators provide CUSTOMISED estimates using YOUR specific data.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">What offshore estimating services do:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Use RSMeans pricing (national averages, not your actual costs)</li>
                    <li>• Apply standard labour productivity rates (not your crew's actual performance)</li>
                    <li>• Follow generic templates (not optimised for your processes)</li>
                    <li>• Produce estimates that look professional but lack strategic customisation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">What in-house estimators can do:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Build databases from YOUR actual project costs</li>
                    <li>• Track YOUR historical win rates by estimate assumptions</li>
                    <li>• Integrate with YOUR project management systems</li>
                    <li>• Develop YOUR competitive pricing strategy through incremental experimentation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                For commodity work where you're bidding against 12 other contractors on published plans, generic estimates work fine. For negotiated contracts, design-build projects, or repeat clients who know your quality, customised estimates provide competitive advantage.
              </p>
              <p className="text-gray-800 font-semibold">
                The contractors who succeed with outsourced estimating understand this gap. They use outsourced services for volume work and maintain in-house capacity for strategic projects requiring customisation.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* 90-Day Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-100 rounded-full p-3">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 90-Day Reality: What Actually Happens</h2>
              <p className="text-lg text-gray-600">Most estimating services promise immediate impact. Here's what actually happens</p>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-4">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-red-600 text-white">Days 1-30</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Setup and Standards Transfer</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      You're providing sample estimates, explaining your markup structure, clarifying regional pricing. First estimates come back requiring extensive revisions. You're spending more time managing the service than you saved. Frustration is high, questioning whether this was worth it.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-amber-600 text-white">Days 31-60</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Pattern Recognition</h3>
                    <p className="text-gray-700 leading-relaxed">
                      The service is starting to understand your standards. Revisions decrease from 4-5 rounds to 1-2 rounds. Communication becomes more efficient. You're still spending significant review time but seeing improvement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-blue-600 text-white">Days 61-90</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Emerging Efficiency</h3>
                    <p className="text-gray-700 leading-relaxed">
                      First estimates come back 70-80% complete with minor revisions. Review time drops from 90 minutes to 45 minutes. You're finally seeing the time savings promised. ROI starts appearing in your ability to bid more projects.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-green-600 text-white">Months 4-6</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Systematic Operation</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Estimates consistently require only minor adjustments. Review time stabilises at 30-45 minutes per estimate. You've increased bid volume by 40-60%. The economics finally make sense.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-100 border-l-4 border-gray-600 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                Companies that quit during months 1-2 never see the benefits. Companies that commit to the 90-180 day implementation timeline typically see legitimate value by month six.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When You Should Hire In-House Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When You Should Hire In-House Instead</h2>
              <p className="text-lg text-gray-600">For all the benefits of outsourced construction estimating, here's when hiring an in-house estimator makes more sense</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">You should hire in-house when:</h3>
              <div className="space-y-3">
                {[
                  "You're consistently bidding 15+ projects monthly (economies of scale favour permanent staff)",
                  "Projects require deep institutional knowledge and customisation",
                  "Fast-turnaround change orders are common in your work",
                  "You're focused on developing competitive pricing strategy for growth",
                  "Estimators can also handle bid management, client presentations, and project handoffs",
                  "Building long-term accumulated knowledge is strategically important"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The economics:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Full-time senior estimator costs $8,541/month all-in. At 15 estimates monthly, that's $569 per estimate. Outsourced services charge $500-750 per estimate plus review time, totaling $650-900 per estimate.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                Above 15 estimates monthly, in-house becomes cheaper. You also gain strategic advantages in pricing development, field communication, and institutional knowledge that outsourced services simply cannot provide.
              </p>
              <p className="text-gray-800 font-semibold">
                The most successful construction companies I work with use a hybrid model: in-house senior estimator managing core competencies plus outsourced capacity for overflow and specialist trades. This balances strategic advantage with scalable capacity.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Honest Assessment Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-100 rounded-full p-3">
              <Target className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Honest Assessment: Is This Right for You?</h2>
              <p className="text-lg text-gray-600">I've given you the volume threshold, the real costs, the timeline, and the liability reality</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Category 1: Not Ready Yet</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Bidding &lt;8 projects monthly, revenue under $2M annually</strong>
              </p>
              <ul className="space-y-2 text-sm text-gray-700 ml-4">
                <li>• Stop here. Outsourcing costs you MORE than hiring part-time local support</li>
                <li>• Focus on growing your bid volume first</li>
                <li>• Come back when you have the volume to justify fixed costs</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Category 2: Right at the Threshold</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>8-12 projects monthly, $2-5M annual revenue</strong>
              </p>
              <ul className="space-y-2 text-sm text-gray-700 ml-4">
                <li>• You're in the break-even zone where this could work</li>
                <li>• Consider part-time in-house ($3,500/month) before full outsourcing</li>
                <li>• If you do outsource, commit to the 90-day implementation timeline</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Category 3: Clear Economic Case</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>12+ projects monthly, $5M+ annual revenue</strong>
              </p>
              <ul className="space-y-2 text-sm text-gray-700 ml-4">
                <li>• Outsourcing makes financial sense if implemented systematically</li>
                <li>• Expect 6-month payback on implementation investment</li>
                <li>• Consider hybrid model for strategic advantage</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What ShoreAgents Actually Offers Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What ShoreAgents Actually Offers (And Doesn't)</h2>
          
          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                ShoreAgents places full-time offshore construction staff including estimators, project coordinators, and administrative support at <strong>$1,200-2,500/month</strong> depending on experience and role complexity. We work with construction companies across the USA, Australia, and New Zealand.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                But we're not an estimating service delivering per-project quotes. We place full-time staff members who become part of your team, learn your systems, and work during your business hours (USA contractors get staff working USA daytime in real-time, not overnight with communication delays).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Our approach works when:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• You have consistent, ongoing estimating needs (not sporadic project-based work)</li>
                    <li>• You're ready to invest in training someone on your specific processes</li>
                    <li>• You want institutional knowledge to accumulate within your offshore team</li>
                    <li>• You need dedicated capacity, not just project-based deliverables</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Our approach doesn't work when:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• You need turnkey estimates delivered by someone else's staff</li>
                    <li>• You want project-based rather than ongoing staffing relationships</li>
                    <li>• You're below the volume threshold where permanent staff makes sense</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 text-white">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-4">
                For companies at Category 3 volume levels looking to build systematic offshore capacity rather than just buying project-based services, we can help. For companies needing turnkey estimating services, you want the dozens of USA providers advertising construction estimating services.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Path Forward Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Path Forward</h2>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Construction estimating outsourcing works brilliantly for high-volume contractors who understand the break-even maths, commit to proper implementation timelines, and maintain systematic quality control. It's a disaster for low-volume builders who chase advertised savings without understanding the hidden costs and volume requirements.
          </p>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                If you're bidding 10+ projects monthly, spending $8,000+ annually on estimates, and genuinely ready for systematic implementation, outsourced estimating can free up 15-20 hours weekly while maintaining or improving estimate quality. By month six, you'll have reclaimed time to focus on client relationships, business development, and actually running projects.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                If you're bidding 5-7 projects monthly, you'll spend more on outsourcing than hiring someone part-time locally. Better to know that now than discover it after spending $15,000 over six months.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                The construction estimating services industry is booming because USA contractors are desperate for capacity during a workforce shortage. That desperation makes you vulnerable to providers selling fantasies rather than showing you the real maths. I'd rather lose the sale by being honest about volume thresholds than watch you waste money discovering this doesn't work for your situation.
              </p>
              <p className="text-gray-900 font-bold text-xl text-center mt-4">
                Are you at Category 3 volume and ready for systematic offshore staffing? ShoreAgents works with construction companies building permanent offshore capacity. If you're at Category 1-2 and need project-based services, the dozens of USA estimating services advertising quick turnarounds are probably better fits.
              </p>
              <p className="text-gray-900 font-bold text-xl text-center mt-4">
                Know which category you're in, understand the real costs, and make decisions based on actual maths rather than advertised savings. That's how the successful 30% approach construction estimating outsourcing.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for an Honest Assessment?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation. We'll assess your bid volume, tell you what's realistic, and whether we're the right fit for your needs.
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
            Construction estimating outsourcing works brilliantly when done right, by ready contractors, with realistic expectations. Are you in that 30%?
          </p>
        </div>
      </div>
    </div>
  );
}
