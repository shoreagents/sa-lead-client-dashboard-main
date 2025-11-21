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
  Target
} from "lucide-react";
import Link from "next/link";

export default function VirtualAssistantsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For $250K+ Annual Revenue Businesses
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Virtual Assistant Guide:<br />
              <span className="text-lime-600">Cost, Tasks & the 90-Day Reality Check Nobody Discusses</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Here's something you won't read in any other virtual assistant guide: <strong>most people hiring their first VA aren't ready for one.</strong>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              They've got no systems documented. They're doing under $200,000 in annual revenue. They expect someone to "just figure it out." Then they're shocked when their $15/hour VA makes them slower for three months, costs them $60,000 in Year One, and quits on Day 87 because they never got proper training.
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
            I've been placing virtual assistants with businesses across the USA, Australia, and New Zealand for 15 years. I've seen partnerships that lasted six years with perfect performance reviews. I've also watched spectacular failures where business owners blamed the VA, when really they just hired too early.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This guide is for:</strong> Established businesses doing $250,000+ in revenue who have real, documented work to delegate—minimum 20 hours per week of repetitive tasks. If you're a solopreneur testing the waters with 5 hours a week of "random stuff," stop reading now and go use Fiverr.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* What a Virtual Assistant Actually Is Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What a Virtual Assistant Actually Is (Not What They're Selling You)</h2>
              <p className="text-lg text-gray-600">Understanding the reality vs. the marketing</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                A virtual assistant is remote administrative, technical, or creative support—typically from the Philippines, Latin America, or other lower-cost regions—who handles delegatable tasks in your business from their own location.
              </p>
              <p className="text-gray-800 font-semibold mb-4">That's the textbook definition. Here's the reality.</p>
              <div className="space-y-3">
                {[
                  "A VA is not a mind-reader who magically understands your business on Day One",
                  "They're not a strategic thinker who'll solve problems you haven't documented",
                  "They're not employees you hire and forget about",
                  "And they're sure as hell not 'plug and play' despite what every competitor promises"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                Virtual assistants are skilled executors who need explicit training, detailed systems, ongoing management, and 60-90 days to become genuinely useful. They excel at repetitive tasks you've already figured out—not figuring things out for you.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border-l-4 border-gray-600">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                The global virtual assistant market was worth $4.97 billion in 2023 and is projected to hit $15.88 billion by 2028. That's a 25.7% annual growth rate, driven by businesses finally understanding that their time is worth more than $15/hour. But the market's growing fast because successful partnerships ARE possible—just not the way most people approach them.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* The $200K Revenue Rule Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The $200K Revenue Rule: Are You Actually Ready?</h2>
              <p className="text-lg text-gray-600">Every competitor tells you any business can benefit from a VA. Absolute rubbish.</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-lg font-semibold text-gray-900 mb-4">Here's the math they hide. Let's say you hire a full-time VA at $1,500/month. Sounds affordable—$18,000 annually, right? Wrong.</p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Your ACTUAL First-Year Costs:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">VA salary:</span>
                  <span className="font-semibold">$18,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software subscriptions:</span>
                  <span className="font-semibold">$1,800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Training investment (60 hrs @ $150/hr):</span>
                  <span className="font-semibold">$9,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Management overhead (3 hrs/wk × 52 × $150/hr):</span>
                  <span className="font-semibold">$23,400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Mistakes and rework:</span>
                  <span className="font-semibold">$5,000</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">Total Year One:</span>
                  <span className="font-bold text-red-600 text-xl">$57,200</span>
                </div>
                <p className="text-red-700 font-semibold mt-2">That's an effective rate of $27.50/hour, not $15.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Now, if your business generates $150,000 annually at a 30% profit margin, that's $45,000 net profit. You just spent $57,200 to hire a VA. <strong>You're literally losing money.</strong>
              </p>
              <p className="text-gray-800 font-semibold">
                The math works at $250,000+ revenue. At that level, the time you reclaim can actually generate more revenue than the VA costs. Below that threshold? You're paying to make your life harder.
              </p>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Revenue Thresholds:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Under $150K revenue:</p>
                    <p className="text-gray-700">Don't even think about it</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">$150-200K revenue:</p>
                    <p className="text-gray-700">Maybe part-time (10-15 hrs/week) if you have documented systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">$200-250K revenue:</p>
                    <p className="text-gray-700">Full-time VA becomes viable if your time is worth $150+/hour</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">$250K+ revenue:</p>
                    <p className="text-gray-700">Strong candidate for full-time VA</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">$500K+ revenue:</p>
                    <p className="text-gray-700">Should definitely have at least one VA, possibly two</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border-l-4 border-gray-600 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                Nobody else will tell you this because they want your money. I'd rather tell you to wait six months, get your systems documented, and come back when you're truly ready.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 90-Day Reality: Month-by-Month Truth</h2>
              <p className="text-lg text-gray-600">Here's what nobody admits: hiring a VA makes you SLOWER for the first 60-90 days.</p>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-4 mb-6">
            {/* Month 1 */}
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-red-600 text-white">Month 1</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Investment Phase (You're Bleeding Time)</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      You're spending 10-15 hours per week creating training materials. Recording Loom videos showing how you do everything. Writing SOPs for tasks you've been doing instinctively for years. Daily 30-60 minute video calls answering basic questions.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Your VA is learning your systems, your software, your preferences, your industry terminology. They're asking questions constantly because everything is new. They're making mistakes because they're still building context.
                    </p>
                    <p className="text-red-700 font-semibold">You're tempted to quit. "It's easier to just do it myself!" you think. This is where 40% of people give up.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Months 2-3 */}
            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-amber-600 text-white">Months 2-3</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Frustration Valley</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Your VA is operational but inconsistent. Quality varies day-to-day. You're still checking everything they do because trust isn't built yet. Management time drops to 5-8 hours weekly but it still feels like a lot.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Mistakes happen. Clients notice differences in communication style. You're reworking things. The temptation to quit intensifies.
                    </p>
                    <p className="text-amber-700 font-semibold">Another 30% of partnerships fail here—right before they would've succeeded.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Months 3-4 */}
            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-blue-600 text-white">Months 3-4</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Turning Point</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Things start clicking. Your VA handles routine tasks independently. Quality becomes consistent. You're genuinely reclaiming 8-12 hours per week. Management drops to 3-5 hours weekly.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      You stop checking every email they send. You trust them with client communication. You sleep better knowing tasks will be completed while you're offline (especially true for Australian and New Zealand businesses with Philippines VAs—your 9am is their 7-8am, natural overlap).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Months 4-6 */}
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-green-600 text-white">Months 4-6</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Payoff Begins</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Your VA is now an asset, not a liability. They're handling 15-20 hours of work weekly. Your management time is down to 2-3 hours per week. You're reclaiming 12-17 net hours weekly.
                    </p>
                    <p className="text-gray-800 font-semibold">
                      At $150/hour value, that's $1,800-2,550 weekly value ($93,600-132,600 annually). Now the economics make sense.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Month 6+ */}
            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-lime-600 text-white">Month 6+</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Scaling Phase</h3>
                    <p className="text-gray-700 leading-relaxed">
                      You're delegating complex work. Your VA anticipates needs. They're suggesting improvements. You're considering hiring a second VA because you've seen this actually works.
                    </p>
                    <p className="text-gray-800 font-semibold mt-3">
                      The 30% who made it past Month 3 are now in the 80% who succeed long-term.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* What VAs Can Do Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Virtual Assistants Can Do (And What They Absolutely Cannot)</h2>
              <p className="text-lg text-gray-600">The strategic vs tactical distinction</p>
            </div>
          </div>

          {/* Virtual Assistants Excel At */}
          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Virtual Assistants Excel At: Tactical Execution</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Data entry and CRM updates (contact management, lead tracking, pipeline updates)",
                  "Email management (sorting, filtering, responding to routine inquiries)",
                  "Calendar management (scheduling meetings, coordinating availability)",
                  "Research (market research, competitor analysis, lead list building)",
                  "Social media scheduling (posting pre-approved content, basic engagement)",
                  "Document preparation (formatting reports, creating presentations from your notes)",
                  "Transcription (meetings, interviews, podcasts)",
                  "Expense tracking and basic bookkeeping",
                  "Travel booking and itinerary management",
                  "Customer support (routine inquiries, FAQ responses)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                These are tasks you've already figured out HOW to do—you're just buying time back by delegating the actual doing.
              </p>
            </CardContent>
          </Card>

          {/* Virtual Assistants Struggle With */}
          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Virtual Assistants Struggle With: Strategic Decisions</h3>
              <div className="space-y-3">
                {[
                  "Business strategy (deciding which markets to enter, which products to launch)",
                  "Complex problem-solving (situations requiring judgment calls without clear precedent)",
                  "High-stakes negotiations (deals where real-time cultural fluency matters)",
                  "Crisis management (brand emergencies, legal threats, major client issues)",
                  "Hiring/firing decisions (too much liability and judgment required)",
                  "Pricing strategy (directly impacts revenue and positioning)",
                  "Legal document review (unauthorized practice of law, massive liability)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Never Delegate */}
          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6">Tasks You Should NEVER Delegate (The Liability List)</h3>
              <p className="text-gray-800 font-semibold mb-4">These will destroy your business if you outsource them:</p>
              <div className="space-y-3">
                {[
                  "Signing contracts or legal documents without your review",
                  "Making financial decisions (large expenditures, investments)",
                  "Handling highly sensitive client data without proper security protocols",
                  "Brand voice in crisis situations (apologies, major announcements)",
                  "Strategic positioning decisions that define your company",
                  "Building key client relationships (trust requires your presence)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                I've seen businesses fail by delegating the wrong things. An Australian real estate agency lost three major clients because their VA (following instructions) sent a tone-deaf email during a market downturn. A New Zealand consultant had a VA accidentally expose confidential client data. A USA business owner let a VA handle pricing negotiations and left $40,000 on the table.
              </p>
              <p className="text-gray-800 font-semibold mt-2">
                The pattern? They delegated strategic decisions, not tactical execution.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* True Cost Breakdown Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The True Cost Breakdown: Beyond the Hourly Rate</h2>
              <p className="text-lg text-gray-600">Let's compare hiring options across all three markets with REAL all-in costs</p>
            </div>
          </div>

          {/* Freelance VA */}
          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Freelance VA (Upwork, Fiverr, OnlineJobs.ph):</h3>
              <div className="space-y-2 text-sm mb-4">
                <p className="text-gray-700">Hourly rate: $8-20 USD / $12-30 AUD / $13-32 NZD</p>
                <p className="text-gray-700">Annual cost (full-time): $16,640-41,600 USD / $24,960-62,400 AUD / $27,040-66,560 NZD</p>
              </div>
              <p className="font-semibold text-gray-900 mb-2">Hidden costs:</p>
              <ul className="space-y-1 text-sm text-gray-700 mb-4">
                <li>• YOU handle payroll, taxes, equipment</li>
                <li>• No backup when they're sick or quit</li>
                <li>• High turnover (juggling 3-5 clients, you're not priority)</li>
                <li>• Hours of interviewing to find someone decent</li>
                <li>• Unvetted (profiles lie, skills inflated)</li>
                <li>• 70-80% don't work out</li>
              </ul>
              <p className="text-gray-800 font-semibold">
                True cost including failures: $30,000-50,000 USD first year (after hiring 2-3 people who don't work out)
              </p>
            </CardContent>
          </Card>

          {/* Professional VA Service */}
          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional VA Service (MyOutDesk, Virtudesk, Wing, ShoreAgents):</h3>
              <div className="space-y-2 text-sm mb-4">
                <p className="text-gray-700">Monthly rate: $1,500-2,000 USD / $2,100-2,800 AUD / $2,250-3,000 NZD</p>
                <p className="text-gray-700">Annual cost: $18,000-24,000 USD / $25,200-33,600 AUD / $27,000-36,000 NZD</p>
              </div>
              <p className="font-semibold text-gray-900 mb-2">Includes:</p>
              <div className="space-y-1 text-sm mb-4">
                {[
                  "Vetted talent (top 1-3% applicants accepted)",
                  "Replacement guarantee (VA quits = immediate backup)",
                  "Training support and management guidance",
                  "Payroll handled",
                  "Equipment and infrastructure provided",
                  "60-70% success rate long-term"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-semibold">
                True cost: $22,000-28,000 USD first year (minimal failed hires)
              </p>
            </CardContent>
          </Card>

          {/* Local VA */}
          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local VA (USA/Australia/New Zealand):</h3>
              <div className="space-y-2 text-sm mb-4">
                <p className="text-gray-700">Hourly rate: $25-50 USD / $35-70 AUD / $35-70 NZD</p>
                <p className="text-gray-700">Annual cost (full-time): $52,000-104,000 USD / $72,800-145,600 AUD / $72,800-145,600 NZD</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-green-700 mb-2">Benefits:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Zero timezone issues</li>
                    <li>• Perfect cultural fit</li>
                    <li>• Local market knowledge</li>
                    <li>• Can meet in person if needed</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-700 mb-2">Drawbacks:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 3-5x cost of offshore</li>
                    <li>• Defeats the "leverage" purpose</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">Best for: Client-facing roles where local presence mandatory</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border-l-4 border-gray-600">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold mb-2">The Real Decision:</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most businesses under-budget. They see "$15/hour" and think "$31,000 annually." Then they add software ($1,800), training time ($9,000), management ($23,400), and mistakes ($5,000). Suddenly it's $70,000 Year One.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By Year Two, costs drop to $32,000-38,000 as training is complete and management reduces to 2 hours weekly. That's when ROI actually happens.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Location Strategy Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Location Strategy: Philippines vs Latin America vs Local</h2>
              <p className="text-lg text-gray-600">Where you hire from changes everything</p>
            </div>
          </div>

          {/* Philippines */}
          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Philippines:</h3>
              <div className="space-y-2 text-sm mb-4">
                <p className="text-gray-700">Cost: $8-15 USD / $12-22 AUD / $13-24 NZD per hour</p>
                <p className="text-gray-700">English: Excellent (accent present but clear)</p>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">For USA businesses:</p>
                  <p className="text-sm text-gray-700">Staff work night shift (their time) to match your 9am-5pm business hours—they're available during YOUR workday for Slack, Zoom, client support in real-time</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">For Australian businesses:</p>
                  <p className="text-sm text-gray-700">NATURAL timezone advantage—your 9am Melbourne = their 7am Manila (healthy daytime overlap)</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">For New Zealand businesses:</p>
                  <p className="text-sm text-gray-700">EXCELLENT alignment—your 9am Auckland = their 5-6am Manila (early but reasonable, not graveyard shift)</p>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">Best for: Administrative work, transaction coordination, CRM management, customer support—95% of VA roles</p>
            </CardContent>
          </Card>

          {/* Latin America */}
          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Latin America:</h3>
              <div className="space-y-2 text-sm mb-4">
                <p className="text-gray-700">Cost: $12-25 USD / $17-35 AUD / $19-38 NZD per hour (20-50% premium)</p>
                <p className="text-gray-700">English: Native/bilingual</p>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">For USA businesses:</p>
                  <p className="text-sm text-gray-700">Natural daytime overlap (-1 to -3 hours)</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">For AU/NZ businesses:</p>
                  <p className="text-sm text-gray-700">Poor overlap (-14 to -18 hours behind)</p>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">Best for: USA phone-heavy sales roles where native accent worth the premium</p>
            </CardContent>
          </Card>

          {/* Local */}
          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local (USA/Australia/New Zealand):</h3>
              <div className="space-y-2 text-sm mb-4">
                <p className="text-gray-700">Cost: $25-60 USD / $35-85 AUD / $35-85 NZD per hour</p>
              </div>
              <p className="text-gray-800 font-semibold">Best for: Client-facing roles requiring local market knowledge and presence</p>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold mb-2">The Honest Reality:</p>
              <p className="text-gray-700 leading-relaxed mb-2">
                For USA businesses, Philippines VAs working night shift to match your business hours handle 95% of roles perfectly. You wake up to completed work, they're available during your 9-5 for real-time communication, and you save $31,000+ annually versus Latin America. Latin America makes sense when phone-heavy sales and native accent justify the 30-50% premium.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For Australian and New Zealand businesses, Philippines is almost always the answer. The timezone overlap is natural and healthy—no night shift required. Your team works normal daytime hours with 2-4 hour overlap during your business day. It's genuinely perfect.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When VAs DON'T Work Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When Virtual Assistants DON'T Work (Save Yourself $60,000)</h2>
              <p className="text-lg text-gray-600">Here's when you should NOT hire a VA, no matter how appealing it sounds</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Revenue under $200K annually — Math doesn't work; you'll lose money Year One",
                  "Less than 20 hours/week of delegatable work — Not enough volume to justify full-time",
                  "No documented processes — VA will flounder without systems; YOU'LL CREATE THEM ON THE FLY (PAINFULLY)",
                  "First-time manager with no training — Management is a skill; VAs need management",
                  "Expect 'plug and play' magic — Reality requires 60-90 days investment before payoff",
                  "Hiring to save money — Wrong motivation; hire to BUY TIME that generates more revenue",
                  "Part-time business owner (<30 hrs/week) — You don't have enough work or management capacity",
                  "Looking for strategic thinking — VAs execute; they don't replace your brain",
                  "Can't dedicate 5-10 hrs/week managing (Months 1-3) — They'll fail without guidance",
                  "Bargain hunting for cheapest possible option — Quality offshore talent costs $12-20/hour, not $5"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Better Alternatives If You're Not Ready:</h3>
              <div className="space-y-2">
                {[
                  "Project-based freelancers (one-off tasks, no ongoing commitment)",
                  "Automation tools (Zapier, Make, ChatGPT for repetitive digital tasks)",
                  "AI tools (writing, research, data analysis)",
                  "Wait 6-12 months and grow revenue to threshold",
                  "Part-time VA (10-15 hrs/week) to test the waters"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                I'd rather tell you NOT to hire than watch you waste $60,000 learning this lesson the expensive way.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What Success Actually Looks Like Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Reality Check: What Success Actually Looks Like</h2>
              <p className="text-lg text-gray-600">Real examples from 15 years of placements</p>
            </div>
          </div>

          {/* Success Story */}
          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Success Story: Australian Business Owner (6 Years, Same VA)</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700"><strong>Revenue:</strong> $800K annually</p>
                <p className="text-gray-700"><strong>VA Role:</strong> Administrative support—CRM management, client onboarding, document preparation, email management</p>
                <p className="text-gray-700"><strong>Timeline:</strong> Painful first 90 days (almost quit Month 2), breakthrough Month 4, exceptional by Month 8</p>
                <p className="text-gray-700"><strong>Current state:</strong> 5/5 performance reviews, reclaimed 15 hours weekly, VA handles complex tasks independently</p>
                <p className="text-gray-700"><strong>ROI:</strong> $120,000+ annual value (15 hours × $150/hour × 52 weeks) for $28,000 all-in cost</p>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                Why it worked: Business owner had documented systems, committed to 90-day investment, managed consistently, gave clear feedback, treated VA as team member not "cheap labor."
              </p>
            </CardContent>
          </Card>

          {/* Failure Story */}
          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Failure Story: New Zealand Consultant ($80K Revenue)</h3>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• Hired VA at $80,000 annual revenue</li>
                <li>• Expected VA to "figure out" client onboarding with minimal training</li>
                <li>• No documented processes, explained things verbally once, frustrated when VA didn't remember</li>
                <li>• Spent 15 hours weekly managing (more than VA saved)</li>
                <li>• Quit after 6 weeks, blamed VA for being "incompetent"</li>
                <li>• Reality: Business wasn't ready, owner had no systems, expected mind-reading</li>
              </ul>
              <p className="text-gray-800 font-semibold">
                Cost: $9,000 wasted + 90 hours of management time + damaged confidence
              </p>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                The pattern? Success requires revenue threshold ($250K+), documented systems, realistic timeline (90 days), ongoing management (3-5 hrs/week), and treating it as investment not expense.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Your Next Step Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-100 rounded-full p-3">
              <Target className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Next Step: The Honest Assessment</h2>
              <p className="text-lg text-gray-600">Most people reading this aren't ready. That's fine.</p>
            </div>
          </div>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-8">
              <p className="text-gray-800 leading-relaxed mb-6">
                Most people reading this aren't ready. That's fine. Bookmark this page and come back in 6-12 months when you've hit the revenue threshold and documented your core processes.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-6">If you ARE ready, here's your 30-day pre-hire checklist:</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Week 1: Document Your Top 10 Tasks</h4>
                  <p className="text-gray-700">Record Loom videos showing exactly how you do your 10 most common tasks. Step-by-step. No assumptions. If you can't document it, you can't delegate it.</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Week 2: Calculate Your True Hourly Value</h4>
                  <p className="text-gray-700">Total annual revenue ÷ total hours worked = hourly value. If it's under $100/hour, you're probably not ready. If it's $150+/hour, strong candidate.</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Week 3: Identify Delegatable Work Volume</h4>
                  <p className="text-gray-700">List EVERY task you do repeatedly. Estimate hours per week. Need minimum 20 hours/week of genuine delegatable work for full-time VA. Less than that? Consider part-time.</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Week 4: Prepare Infrastructure</h4>
                  <p className="text-gray-700">Set up software accounts (project management, communication, password manager). Create templates for common tasks. Write basic SOPs. Block 10 hours/week in Month 1 for VA management.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reality Check Questions:</h3>
              <div className="space-y-2 mb-4">
                {[
                  "Am I doing $200K+ revenue annually?",
                  "Do I have 20+ hours/week of documented, repeatable tasks?",
                  "Can I commit 8-10 hours/week for first 60 days to train and manage?",
                  "Do I have $25,000-30,000 budget for Year One (including hidden costs)?",
                  "Am I prepared to be slower for 60-90 days before seeing ROI?",
                  "Do I have written processes (or time to create them in next 30 days)?"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">☐</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-lime-300">
                <p className="text-gray-800 font-semibold mb-2">
                  If you answered "no" to any of these, you're not ready yet. Wait, grow, document, then come back.
                </p>
                <p className="text-gray-800 font-semibold">
                  If you answered "yes" to ALL of these, you're a candidate for virtual assistant support.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Working With ShoreAgents Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Working With ShoreAgents: The Honest Approach</h2>
          
          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                At ShoreAgents, our full-time virtual assistants cost <strong>$1,200-2,500/month</strong> depending on experience level, role complexity, and workspace requirements. We place Filipino administrative staff with businesses in the USA, Australia, and New Zealand.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                But here's what makes us different: we'll tell you if you're not ready yet.
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• Doing under $200K revenue? We'll tell you to wait.</p>
                <p>• No documented systems? We'll explain you'll struggle.</p>
                <p>• Expecting plug-and-play magic? We'll set realistic 90-day timelines.</p>
                <p>• Looking for someone to think strategically rather than execute tactically? We'll redirect your expectations.</p>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                We only succeed when YOU succeed. That means brutal honesty about when offshore staffing makes sense—and when it doesn't.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 text-white">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-4">
                Not ready yet? That's most people. Bookmark this guide, grow your revenue, document your systems, and come back when the timing's right. We'll still be here.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Ready for the honest conversation? Schedule a consultation where we'll assess your situation and tell you frankly whether you're ready—or what you need to do first.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for an Honest Assessment?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation. We'll assess your situation and tell you frankly whether you're ready—or what you need to do first.
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
            Virtual assistants work brilliantly when done right, by ready businesses, with realistic expectations. Are you there yet?
          </p>
        </div>
      </div>
    </div>
  );
}
