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
  Search
} from "lucide-react";
import Link from "next/link";

export default function SeoOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For $300K+ Annual Revenue Businesses
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              SEO Outsourcing:<br />
              <span className="text-lime-600">The $300K Revenue Question Nobody Wants to Answer</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Here's a question most SEO agencies won't touch: what's your annual revenue?
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Not because they're being polite. Because the answer determines whether outsourcing your SEO will make you money or cost you a fortune. And most businesses asking about SEO outsourcing aren't ready for it.
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
            I'm Stephen Atcheler. I've spent 15 years building offshore teams, and I've watched countless businesses hire SEO agencies when they absolutely shouldn't have. The industry loves to talk about success stories. Nobody mentions the spectacular failures.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This article is for:</strong> Businesses doing $300K+ in annual revenue, based in the USA, Australia, or New Zealand, who are seriously considering outsourcing their SEO. If you're below that threshold, I'll tell you exactly why you should wait - and what to do instead.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* What the SEO Industry Gets Wrong Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What the SEO Outsourcing Industry Gets Catastrophically Wrong</h2>
              <p className="text-lg text-gray-600">Every SEO agency's website reads like the same marketing template</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Every SEO agency's website reads like the same marketing template: "Save 30-70%! Access expert teams! Scale without hiring!" Complete rubbish, all of it.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                Here's what they don't tell you: that $2,000/month retainer becomes $5,183/month in year one when you factor in reality. Your management time (5-10 hours weekly during setup), the mistakes you'll pay to fix, the tools the agency doesn't include, the content you'll need to redo because it's off-brand.
              </p>
              <p className="text-gray-800 leading-relaxed">
                The Google Trends data tells the real story. In the USA, search interest for "SEO outsourcing" stays relatively consistent - this is a mature, professional market where businesses know what they're buying. Australia shows one massive spike in February 2025, then drops to near zero. That spike? Probably a bunch of businesses getting burned and warning others. New Zealand has insufficient search data to even show a trend.
              </p>
              <p className="text-gray-800 font-semibold mt-4">
                That pattern reveals something critical: SEO outsourcing isn't a consumer decision. It's a calculated business investment that only makes sense at specific revenue levels.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Revenue Threshold Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Revenue Threshold Nobody Discusses</h2>
              <p className="text-lg text-gray-600">Let's do the maths every agency avoids</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Small Business ($50K-200K Annual Revenue)</h3>
              <div className="space-y-2 text-sm mb-4">
                <p className="text-gray-700">Monthly SEO cost: $500-1,000. Annual spend: $6,000-12,000.</p>
                <p className="text-gray-800 font-semibold">
                  That's 3-24% of your gross revenue on one marketing channel with zero guaranteed returns. Your profit margins can't absorb that. You're better off with Google Business Profile optimisation and asking happy customers for reviews. Total cost: $0.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Medium Business ($200K-1M Annual Revenue)</h3>
              <div className="space-y-2 text-sm mb-4">
                <p className="text-gray-700">Monthly SEO cost: $2,000-3,000. Annual spend: $24,000-36,000.</p>
                <p className="text-gray-700">
                  At the lower end of this range ($200K revenue), that's still 12-18% of revenue - too high. The break-even point sits around $300K-500K annual revenue, where SEO becomes 5-10% of gross revenue. That's sustainable.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Large Business ($1M+ Annual Revenue)</h3>
              <div className="space-y-2 text-sm mb-4">
                <p className="text-gray-700">Monthly SEO cost: $5,000-10,000. Annual spend: $60,000-120,000.</p>
                <p className="text-gray-700">
                  At this scale, that's 1.2-12% of revenue. The ROI math finally works. You can afford the 6-12 month timeline before seeing returns.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                The $300K threshold exists because that's where SEO outsourcing costs become a reasonable percentage of revenue. Below that, you're gambling with money your business needs for operations.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What SEO Actually Costs Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What SEO Outsourcing Actually Costs (Beyond the Invoice)</h2>
              <p className="text-lg text-gray-600">ShoreAgents charges $1,200-2,500/month. But that quoted rate? That's not your actual cost.</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-lg font-semibold text-gray-900 mb-4">
                ShoreAgents charges $1,200-2,500/month for full-time offshore SEO specialists. Industry average in the USA runs $2,000-5,000/month for agencies. Australia and New Zealand pay similar rates in local currency (AU$3,000-7,000, NZ$3,500-7,500).
              </p>
              <p className="text-gray-800 font-semibold mb-4">But that quoted rate? That's not your actual cost.</p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Year One Reality:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Agency retainer:</span>
                  <span className="font-semibold">$24,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your management time (5 hrs/wk × 52 × $100/hr):</span>
                  <span className="font-semibold">$26,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Additional tools not included:</span>
                  <span className="font-semibold">$1,200/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Content creation if not in package:</span>
                  <span className="font-semibold">$6,000/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">First 90 days of mistakes:</span>
                  <span className="font-semibold">$3,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Training your team on new processes:</span>
                  <span className="font-semibold">$2,000</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">Total Year One:</span>
                  <span className="font-bold text-red-600 text-xl">$62,200</span>
                </div>
                <p className="text-red-700 font-semibold mt-2">Effective monthly rate: $5,183 (not $2,000)</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Year two drops significantly - maybe $3,500/month effective rate - because you've sorted the processes and reduced management time. But that first year? Prepare for the real number.
              </p>
              <p className="text-gray-800 font-semibold">
                This is why the revenue threshold matters. A business doing $200K annually cannot afford $62,200 for SEO. A business doing $800K can.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Three-Month Reality Check Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-100 rounded-full p-3">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Three-Month Reality Check</h2>
              <p className="text-lg text-gray-600">Agencies promise results in 30-60 days. Here's what actually happens.</p>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-4">
            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-blue-600 text-white">Month One</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Honeymoon</h3>
                    <p className="text-gray-700 leading-relaxed">
                      You're in 2-3 hours of onboarding meetings. Strategy sessions. Audit reviews. Your agency publishes their first round of "optimised" content. You're excited. You're also checking rankings daily. Nothing's happening yet. Google needs time to crawl, index, and rank new content. You knew this intellectually. Emotionally, you're wondering if you made a mistake.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-amber-600 text-white">Month Two</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Doubt</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Some technical fixes are live. Maybe 5-10 pieces of content published. Your rankings for target keywords moved from position 50 to position 30. Congratulations, nobody clicks on position 30. Traffic is basically unchanged. You're now questioning everything about this agency.
                    </p>
                    <p className="text-gray-800 font-semibold mt-3">
                      American businesses at this stage start drafting emails about "expectations not being met." Australian businesses are more direct: "This isn't working, mate." New Zealand businesses are still giving them the benefit of the doubt but definitely Googling "how to fire SEO agency."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-green-600 text-white">Month Three</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Turning Point</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Content's fully indexed. Technical foundation is solid. You're seeing keywords creep into positions 15-20. Traffic's up maybe 10-20% if you're lucky. Not impressive yet, but the trajectory is there. This is where you either commit to the process or kill it prematurely.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-lime-600 text-white">Month Four-Six</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Payoff</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Rankings stabilise in top 10 for several keywords. Traffic increase hits 30-50%. Conversions start appearing from organic search. The ROI is becoming visible. You stop checking rankings daily because you're now checking revenue from organic traffic.
                    </p>
                    <p className="text-gray-800 font-semibold mt-3">
                      Everyone who made it to month six wishes they'd started sooner. Everyone who quit at month two is telling their business group that "SEO outsourcing doesn't work."
                    </p>
                    <p className="text-gray-800 font-semibold mt-3">
                      The difference? Expectations set properly from day one.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* When You Should NOT Outsource Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When You Absolutely Should Not Outsource SEO</h2>
              <p className="text-lg text-gray-600">I'm going to save some of you a lot of money right now</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  {
                    title: "Don't outsource if you're under $300K annual revenue",
                    description: "The math doesn't work. Use that budget for Google Ads where you get immediate data on what converts."
                  },
                  {
                    title: "Don't outsource if you can't commit 12 months",
                    description: "SEO is a minimum 6-month play to see ROI, and that assumes everything goes right. Month-to-month arrangements guarantee failure because there's no strategic continuity."
                  },
                  {
                    title: "Don't outsource if nobody internal understands marketing",
                    description: "Someone needs to review content, approve strategy, and spot when the agency's drifting off-brand. If that's nobody, you'll pay for a lot of content you can't use."
                  },
                  {
                    title: "Don't outsource if you expect 'set it and forget it'",
                    description: "Quality SEO requires 2-5 hours weekly of your involvement. Strategy calls. Content review. Performance discussions. If you don't have that time, don't start."
                  },
                  {
                    title: "Don't outsource if you're in a highly regulated industry without compliance expertise",
                    description: "Healthcare, finance, legal - these sectors have strict content rules. Generic SEO agencies make expensive compliance mistakes. You need someone who understands HIPAA, SEC regulations, or your country's advertising standards."
                  },
                  {
                    title: "Don't outsource if you need results in under 90 days",
                    description: "If your business needs leads right now, use Google Ads. SEO is a long-term asset that compounds. It's not a short-term lead generation tool."
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

          <Card className="border-lime-300 bg-lime-50 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                The Gallery Group, a Queensland construction company, came to ShoreAgents doing $2.5 million annually. They hired a full-time offshore estimator who also handled their SEO content coordination (since he understood the industry). After 8 months, organic traffic was up 180%, and they saved $73,000 annually versus hiring locally. Their revenue supported the investment timeline.
              </p>
              <p className="text-gray-800 leading-relaxed">
                A Sydney startup doing $180K annually asked about SEO outsourcing. I told them to focus on partnerships and referrals until they hit $400K. They came back 18 months later at $550K revenue and then it made sense.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Time Zones and Communication Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Actually Matters: Time Zones and Communication</h2>
              <p className="text-lg text-gray-600">Location choice impacts collaboration and results</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Filipino Teams Working USA Hours</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you hire Filipino specialists for USA business hours, they're working night shift in Manila (9am New York = 9pm Manila). That means real-time collaboration - you message them at 10am your time, they respond immediately because they're online working. This is the entire point of hiring offshore teams that work your hours.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Some USA businesses prefer this because urgent issues get handled same-day. Others worry about staff burnout from permanent night shifts, though many Filipino professionals specifically choose night shift work for the pay premium and quieter work environment.
              </p>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Australian and New Zealand Advantage</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For Australian and New Zealand businesses, the Philippines offers natural time zone alignment. Sydney is only +2-3 hours ahead of Manila. You're both working during daylight hours. A 10am meeting in Melbourne is 7am in Manila - both normal business hours, no night shift required.
              </p>
              <p className="text-gray-800 font-semibold">
                This is why Filipino teams work particularly well for Australian and New Zealand businesses - genuine timezone overlap without requiring anyone to work nights.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">USA Agencies and Local Teams</h3>
              <p className="text-gray-700 leading-relaxed">
                USA-based agencies cost 2-3x more than offshore teams but operate in your exact time zone. Zero communication lag. Australian and New Zealand local agencies similarly offer same-timezone benefits but at premium rates (AU$4,000-7,000/month, NZ$3,800-6,500/month).
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What to Actually Look For Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Search className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What to Actually Look For</h2>
              <p className="text-lg text-gray-600">Red flags and green flags when choosing an SEO provider</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  "You want an SEO provider who shows you exactly where every backlink comes from. Monthly. If they resist that transparency, they're using spam tactics that'll eventually penalise your site.",
                  "You want someone who admits when SEO isn't the right solution. If every answer to your business challenges is 'more SEO,' find someone else.",
                  "You want realistic timelines in writing. 'Meaningful results in 3-6 months' is realistic. 'First page rankings in 30 days' is a lie.",
                  "You want to see their own website's backlink profile. If they're using dodgy tactics on their own site, they'll use them on yours."
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                ShoreAgents provides full-time offshore specialists at $1,200-2,500/month because Filipino talent offers the quality-cost balance that works. Not because they're "cheap labour" - because they're skilled professionals who cost less than hiring in Sydney, Auckland, or San Francisco. The Xact Homes case study shows 5/5 performance reviews across 12 months with measurable efficiency improvements.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Bottom Line Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Bottom Line</h2>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            SEO outsourcing works brilliantly at the right revenue level with realistic expectations. It fails spectacularly when businesses treat it as a quick fix or start before they're financially ready.
          </p>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                If you're doing $300K+ annually, can commit 12 months, and have 2-5 hours weekly for collaboration, outsourcing makes sense. You'll spend roughly $60K in year one (including hidden costs), see meaningful results by month 4-6, and achieve positive ROI by month 12-18.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                If you're below that threshold, wait. Build your revenue with other channels. Come back to SEO when the math supports the investment.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                That's the honest answer nobody else gives you. The revenue question determines everything.
              </p>
              <p className="text-gray-900 font-bold text-xl text-center mt-4">
                Ready to discuss whether offshore SEO makes sense for your specific situation? Contact ShoreAgents for a qualification call. We'll tell you if you're ready - or if you should wait.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for an Honest Assessment?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Contact ShoreAgents for a qualification call. We'll tell you if you're ready - or if you should wait.
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
            SEO outsourcing works brilliantly when done right, by ready businesses, with realistic expectations. The revenue question determines everything.
          </p>
        </div>
      </div>
    </div>
  );
}
