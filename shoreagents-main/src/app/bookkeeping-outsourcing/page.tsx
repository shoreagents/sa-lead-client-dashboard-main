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
  Calculator
} from "lucide-react";
import Link from "next/link";

export default function BookkeepingOutsourcingPage() {
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
              Bookkeeping Outsourcing:<br />
              <span className="text-lime-600">When $50/Month Software Beats $2,000/Month Specialists</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Here's what every bookkeeping outsourcing provider conveniently forgets to mention: <strong>if your business does under $250,000 in annual revenue, you're probably better off with Xero and YouTube tutorials than hiring anyone offshore.</strong>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Controversial? Maybe. But I've watched businesses waste $60,000 in their first year outsourcing bookkeeping when DIY software would've cost them $1,200 total. The bookkeeping outsourcing market is exploding—$46 billion in 2024, projected to hit $107 billion by 2033—but that doesn't mean it's right for your business.
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
            I'm Stephen Atcheler. I've been placing offshore bookkeeping specialists with businesses across the USA, Australia, and New Zealand for 15 years. I've seen companies save six figures annually through proper implementation. I've also seen plenty burn through cash because they outsourced too early, to the wrong people, or without understanding what they were actually buying.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This guide is for:</strong> Established businesses doing $250,000+ in revenue with 50+ monthly transactions who need full-time bookkeeping support. If you're a startup founder doing 20 transactions a month, stop reading now. You're not ready, and I'm not going to pretend you are.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Should You Even Outsource Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Question Nobody Asks: Should You Even Outsource?</h2>
              <p className="text-lg text-gray-600">Most bookkeeping outsourcing content starts by listing benefits. They never address the fundamental question.</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">You're Too Small If:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Annual revenue under $250,000",
                  "Fewer than 50 transactions per month",
                  "Single entity with no complexity",
                  "You have more time than money",
                  "Startup in first 12-18 months",
                  "Your 'bookkeeping' is 5 hours per month"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Break-Even Math */}
          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why $250,000 Matters—The Break-Even Math:</h3>
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-3">SMALL BUSINESS ($150K revenue, 20% margin = $30K profit)</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Outsourced bookkeeper:</span>
                    <span className="font-semibold">$24,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Software/tools:</span>
                    <span className="font-semibold">$1,500/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Your training time:</span>
                    <span className="font-semibold">$4,000 (one-time)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Your management:</span>
                    <span className="font-semibold">$15,600/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">First-year mistakes:</span>
                    <span className="font-semibold">~$3,000</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">TOTAL FIRST YEAR:</span>
                    <span className="font-bold text-red-600 text-lg">$48,100</span>
                  </div>
                  <p className="text-red-700 font-semibold mt-2">That's 160% of your entire profit.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">BETTER OPTION UNDER $250K:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Xero/QuickBooks:</span>
                  <span className="font-semibold">$1,080/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your time (8 hrs/month @ $100/hr):</span>
                  <span className="font-semibold">$9,600/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Quarterly review by local bookkeeper:</span>
                  <span className="font-semibold">$3,000/year</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">TOTAL:</span>
                  <span className="font-bold text-green-600 text-lg">$13,680/year</span>
                </div>
                <p className="text-green-700 font-semibold mt-2">Savings: $34,420 in year one</p>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                If you're under that threshold, bookmark this article and come back when you've grown. Until then, use software and learn the basics yourself. It's better business.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What Bookkeeping Outsourcing Actually Is Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Bookkeeping Outsourcing Actually Is (And Isn't)</h2>
              <p className="text-lg text-gray-600">Understanding what you're actually buying</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What You're Actually Buying:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bookkeeping outsourcing means hiring someone offshore—typically in the Philippines—to handle transaction recording, reconciliations, and financial reporting. You're getting professional bookkeeping skills at $1,200-2,500 per month full-time instead of $3,500-6,000 for a local hire in the USA, $4,000-7,000 in Australia, or $3,800-6,500 in New Zealand.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The work happens during your business hours (which means night shift for Filipino specialists serving USA clients, but natural daytime overlap for Australian and New Zealand businesses due to the +2 to +4 hour time zone advantage).
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What It Definitely Isn't:</h3>
              <ul className="space-y-2">
                {[
                  "It's not a CPA. It's not tax strategy advice.",
                  "It's not someone who can lodge your BAS statements in Australia, file GST returns in New Zealand, or make multi-state sales tax decisions in the USA without local oversight.",
                  "It's not '24/7 coverage' for anything requiring physical presence or instant local knowledge."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-800 font-semibold mt-4">
                Your outsourced bookkeeper records transactions and prepares financial statements. Your CPA or accountant provides strategy, tax planning, and compliance expertise. Both roles are necessary; neither replaces the other.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 90-Day Reality: You'll Get Slower Before You Get Faster</h2>
              <p className="text-lg text-gray-600">Every provider promises "immediate results." That's marketing fiction.</p>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-4">
            {/* Month 1 */}
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-red-600 text-white">Month 1</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Productivity Crash</h3>
                    <p className="text-gray-700 leading-relaxed">
                      You're creating training materials, recording Loom videos explaining your chart of accounts, answering questions about every transaction. You're 20-30% slower than doing it yourself. Net result: negative productivity. Every business owner wants to quit here.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Month 2 */}
            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-amber-600 text-white">Month 2</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Learning Curve</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Quality is inconsistent. You're still checking everything, correcting mistakes, explaining industry-specific terminology. You're not losing time anymore, but you're not gaining any either. Net result: break-even.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Month 3 */}
            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-blue-600 text-white">Month 3</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Turning Point</h3>
                    <p className="text-gray-700 leading-relaxed">
                      They're starting to catch mistakes before you do. Bank reconciliations are accurate. You're down to weekly check-ins instead of daily. Net result: small positive (maybe 5 hours reclaimed).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Month 4+ */}
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-green-600 text-white">Month 4+</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Payoff</h3>
                    <p className="text-gray-700 leading-relaxed">
                      They're handling 15-20 hours of work competently. You've reclaimed 10-15 productive hours weekly. Management drops to 2-3 hours per week. This is when ROI actually starts. Net result: significant positive.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-100 border-l-4 border-gray-600 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                The 90-day timeline is your investment period. Anyone promising instant results is either lying or hasn't actually done this before.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What You Can (And Can't) Outsource Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What You Can (And Can't) Outsource</h2>
              <p className="text-lg text-gray-600">Not all bookkeeping tasks are created equal</p>
            </div>
          </div>

          {/* Safe to Outsource */}
          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Safe to Outsource:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Transaction recording and data entry",
                  "Bank reconciliations",
                  "Accounts payable/receivable processing",
                  "Expense categorisation",
                  "Invoice generation",
                  "Financial statement preparation",
                  "Monthly/quarterly reporting",
                  "Payroll data entry (not decision-making)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Risky */}
          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Risky—Proceed with Extreme Caution:</h3>
              <div className="space-y-3">
                {[
                  "Tax return preparation (can do with CPA review)",
                  "Payroll processing (errors affect employee trust)",
                  "Financial forecasting (needs business context)",
                  "BAS statements in Australia (may need local BAS agent)",
                  "GST returns in New Zealand (IRD-specific knowledge)",
                  "Multi-state sales tax in USA (too complex)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Never Outsource */}
          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6">Never Outsource:</h3>
              <div className="space-y-3">
                {[
                  "Strategic financial planning",
                  "Tax strategy decisions",
                  "Final sign-offs on financial statements",
                  "Banking relationship management",
                  "Fraud detection/investigation",
                  "Direct communication with tax authorities"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                The Philippines produces excellent bookkeepers with strong technical skills. What they can't do is replace your local tax professional who understands the specific nuances of IRS rules, ATO requirements, or IRD regulations. Anyone selling you that fantasy is setting you up for expensive problems.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* True All-In Cost Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The True All-In Cost (That Nobody Mentions)</h2>
              <p className="text-lg text-gray-600">What Gets Advertised vs. What You Actually Pay</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-lg font-semibold text-gray-900 mb-4">What Gets Advertised:</p>
              <p className="text-gray-700 mb-6">"Hire an offshore bookkeeper for $15-25/hour! Save 60-70%!"</p>
              
              <p className="text-lg font-semibold text-gray-900 mb-4">What You Actually Pay—First Year Reality (USA Business Example):</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Bookkeeper salary:</span>
                  <span className="font-semibold">$41,600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software licenses:</span>
                  <span className="font-semibold">$1,200/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your training time:</span>
                  <span className="font-semibold">$6,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your management (5 hrs/wk × 12 weeks):</span>
                  <span className="font-semibold">$9,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Ongoing management (2 hrs/wk × 40 weeks):</span>
                  <span className="font-semibold">$12,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">First 90-day mistakes:</span>
                  <span className="font-semibold">$4,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Setup/transition:</span>
                  <span className="font-semibold">$2,000</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">REAL YEAR ONE TOTAL:</span>
                  <span className="font-bold text-red-600 text-xl">$75,800</span>
                </div>
                <p className="text-red-700 font-semibold mt-2">Effective hourly rate: $36/hour (not $20!)</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Year Two Onwards:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Bookkeeper:</span>
                  <span className="font-semibold">$41,600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software:</span>
                  <span className="font-semibold">$1,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Management (1 hr/week):</span>
                  <span className="font-semibold">$7,800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Mistakes:</span>
                  <span className="font-semibold">~$1,000</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">YEAR TWO TOTAL:</span>
                  <span className="font-bold text-blue-600 text-xl">$51,600</span>
                </div>
                <p className="text-blue-700 font-semibold mt-2">Effective rate: $25/hour</p>
                <p className="text-gray-800 font-semibold mt-3">Break-even point: Month 18-24</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border-l-4 border-gray-600">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                The savings are real—but they're back-loaded. You're investing first, then reaping benefits. Anyone promising immediate cost savings is either incompetent or dishonest.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Geography Decision Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Philippines vs. Latin America vs. Local: The Geography Decision</h2>
              <p className="text-lg text-gray-600">Where you're located matters for time zones and cost</p>
            </div>
          </div>

          {/* USA Businesses */}
          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For USA Businesses:</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Philippines ($1,200-2,000/month):</p>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>• 70-85% cost savings</li>
                    <li>• Works your business hours (9am-5pm USA time)</li>
                    <li>• Excellent English skills</li>
                    <li>• Strong bookkeeping training</li>
                    <li>• Professional service delivery during your workday</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Latin America ($2,000-3,500/month):</p>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>• 40-60% cost savings</li>
                    <li>• 1-3 hours time difference (real-time collaboration possible)</li>
                    <li>• Native English or bilingual</li>
                    <li>• Same-day urgency handling</li>
                    <li>• Premium: 30-50% more than Philippines</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Local USA ($3,500-6,000/month):</p>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>• Zero savings (baseline cost)</li>
                    <li>• Perfect time zone alignment</li>
                    <li>• Deep local tax knowledge</li>
                    <li>• In-person option available</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Australian Businesses */}
          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Australian Businesses:</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Philippines ($1,500-2,300/month):</p>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>• 70-85% cost savings</li>
                    <li>• +2 to +4 hours time difference ✅ PERFECT</li>
                    <li>• Natural daytime overlap for real-time communication</li>
                    <li>• No graveyard shift concerns</li>
                    <li className="font-semibold">This is your sweet spot</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Latin America ($2,500-4,000/month):</p>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>• 40-60% cost savings</li>
                    <li>• -14 to -16 hours (opposite side of globe)</li>
                    <li>• Terrible time zone fit</li>
                    <li className="font-semibold text-red-600">Don't do this</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* New Zealand Businesses */}
          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For New Zealand Businesses:</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Philippines ($1,500-2,300/month):</p>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>• 70-85% cost savings</li>
                    <li>• +4 to +5 hours time difference ✅ EXCELLENT</li>
                    <li>• Great daytime overlap</li>
                    <li>• Natural fit for NZ businesses</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Latin America ($2,500-4,000/month):</p>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>• -16 to -18 hours (worst possible)</li>
                    <li>• Complete opposite schedule</li>
                    <li className="font-semibold text-red-600">Avoid this</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                The Verdict: If you're in Australia or New Zealand, the Philippines is your obvious choice—better time zone than USA businesses get, same cost savings. If you're in the USA and need real-time collaboration, Latin America makes sense despite the premium. If you're in the USA and transaction volume is high but urgency is low, Philippines works brilliantly.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Freelancer vs Professional Firm Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-100 rounded-full p-3">
              <Users className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Freelancer vs. Professional Firm: The $30,000 Decision</h2>
              <p className="text-lg text-gray-600">Two paths, very different outcomes</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Freelancer */}
            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Option A: Freelancer (Upwork/Fiverr/OnlineJobs.ph)</h3>
                <div className="mb-4">
                  <p className="font-semibold text-green-700 mb-2">Pros:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Cheaper ($10-20/hr vs. $30-40 through firms)</li>
                    <li>• No long-term contracts</li>
                    <li>• Direct relationship</li>
                    <li>• Flexibility</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-700 mb-2">Cons:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 70-80% failure rate</li>
                    <li>• No backup coverage</li>
                    <li>• You handle everything (payroll, equipment, HR)</li>
                    <li>• High turnover</li>
                    <li>• Unvetted (profiles lie, skills inflated)</li>
                    <li>• Time investment (months finding one who works)</li>
                  </ul>
                </div>
                <p className="text-gray-800 font-semibold mt-4">Success probability: 20-30% work out long-term.</p>
              </CardContent>
            </Card>

            {/* Professional Firm */}
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Option B: Professional Firm (Like ShoreAgents)</h3>
                <div className="mb-4">
                  <p className="font-semibold text-green-700 mb-2">Pros:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Vetted specialists (top 2-5% only)</li>
                    <li>• Backup coverage included</li>
                    <li>• Management support</li>
                    <li>• Replacement guarantee</li>
                    <li>• Faster hiring (7-14 days vs. months)</li>
                    <li>• Professional standards</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-700 mb-2">Cons:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Higher cost ($2,000-3,500/month vs. $1,200-2,000 freelancer)</li>
                    <li>• Longer contracts (6-12 months minimum)</li>
                    <li>• Less flexibility</li>
                    <li>• 30-50% premium for infrastructure</li>
                  </ul>
                </div>
                <p className="text-gray-800 font-semibold mt-4">Success probability: 60-70% work out long-term.</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Math:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Freelancer Path:</p>
                  <div className="space-y-1 text-sm text-gray-700">
                    <p>Attempt 1: $1,200/month × 2 months = $2,400 (unreliable, fired)</p>
                    <p>Attempt 2: $1,500/month × 3 months = $4,500 (quit for better offer)</p>
                    <p>Attempt 3: $1,300/month × 2 months = $2,600 (incompetent, fired)</p>
                    <p>Attempt 4: $1,800/month = SUCCESS</p>
                    <p className="font-semibold mt-2">Total to find good one: $9,500 + 9 months wasted</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Firm Path:</p>
                  <div className="space-y-1 text-sm text-gray-700">
                    <p>Month 1: $3,000/month = SUCCESS from start</p>
                    <p>Ongoing: $3,000/month</p>
                    <p className="font-semibold mt-2">By Year 1:</p>
                    <p>Freelancer (if successful by attempt 4): $31,100 total</p>
                    <p>Firm (successful from start): $36,000 total</p>
                    <p className="font-semibold text-green-700 mt-2">Difference: $4,900 for 9 months less hassle</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-blue-300">
                <p className="text-gray-800 font-semibold mb-2">When to gamble on freelancers:</p>
                <p className="text-sm text-gray-700">You have time, experience managing remote teams, tight budget, willing to try multiple people.</p>
                <p className="text-gray-800 font-semibold mt-3 mb-2">When to use a firm:</p>
                <p className="text-sm text-gray-700">First-time outsourcing, value reliability over maximum savings, need backup coverage, don't want hiring headaches.</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Regional Compliance Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Regional Compliance Realities</h2>
              <p className="text-lg text-gray-600">What offshore bookkeepers can and cannot handle</p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">USA Businesses:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your offshore bookkeeper can handle transaction recording, reconciliations, and financial statement preparation brilliantly. They cannot make multi-state sales tax decisions, handle IRS correspondence directly, or develop tax strategy. You still need your local CPA for planning and compliance sign-offs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Australian Businesses:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your offshore bookkeeper can maintain books and prepare reports. For BAS statements, superannuation compliance, Single Touch Payroll (STP), and award wage calculations, you'll want local review or a registered BAS agent. The Australian tax system's complexity requires local expertise for compliance work.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">New Zealand Businesses:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your offshore bookkeeper handles day-to-day transaction recording beautifully. For GST returns filed with IRD, PAYE calculations, KiwiSaver, and FBT, local oversight is essential. New Zealand's relatively straightforward system still requires someone who understands IRD's specific requirements.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-lime-300 bg-gradient-to-br from-lime-50 to-green-50 mt-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Hybrid Model That Works:</h3>
              <p className="text-gray-800 leading-relaxed">
                Offshore bookkeeper handles 80% of work (transaction recording, reconciliations, reporting). Local CPA/accountant handles 20% (tax planning, compliance review, regulatory filings). This gives you 60-70% cost savings while maintaining compliance safety.
              </p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When Bookkeeping Outsourcing Actually Makes Sense</h2>
              <p className="text-lg text-gray-600">You're a good candidate if you meet these criteria</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">You're a good candidate if:</h3>
                <div className="space-y-2">
                  {[
                    "Annual revenue $250,000-300,000 minimum",
                    "50+ transactions monthly",
                    "Currently spending 15+ hours/month on bookkeeping",
                    "Your books are behind (you're not current)",
                    "You have systems documented (or willing to create them)",
                    "You can commit 5-10 hours weekly for first 90 days",
                    "Budget allows $50,000-70,000 first-year investment",
                    "You have (or will hire) a local CPA for tax work",
                    "You understand you're investing for 18-24 month payoff"
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">You're NOT ready if:</h3>
                <div className="space-y-2">
                  {[
                    "Doing under $250,000 annually",
                    "Fewer than 50 monthly transactions",
                    "Everything's 'in your head' with no documentation",
                    "Expecting instant results",
                    "Budget is extremely tight",
                    "You want to replace your CPA entirely",
                    "Looking for someone to 'just figure it out'",
                    "Not willing to invest management time"
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

        {/* What ShoreAgents Actually Does Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What ShoreAgents Actually Does</h2>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We're different because we'll tell you if you're not ready. If you're doing $120,000 in revenue, we'll honestly say wait until you hit $250,000. If your systems aren't documented, we'll explain why you need to fix that first. If you're trying to offshore compliance work that must stay local, we'll tell you it won't work.
          </p>

          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Our full-time bookkeeping specialists cost <strong>$1,200-2,500/month</strong> depending on experience and complexity. That's for dedicated professionals who work your business hours (USA night shift reality, or Australian/NZ daytime for perfect time zone alignment).
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                We handle recruitment, payroll, HR, equipment, and management support. You get backup coverage if someone's sick or on leave. You get replacement guarantee if fit isn't right. Most importantly, you get honest advice about what's realistic.
              </p>
              <p className="text-gray-800 font-semibold">
                But here's what we won't do: sell you on outsourcing if you're not ready. Our success depends on your success. That means qualifying you properly and sometimes saying "not yet."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 text-white">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-4">
                Want to discuss if outsourcing makes sense for your specific situation? Schedule a consultation where we'll review your revenue, transaction volume, and systems. We'll tell you honestly if you're ready or if you should wait. No sales pitch—just 15 years of experience telling it straight.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Not ready yet but want to stay informed? Learn about our approach and come back when you hit that $250K threshold. We'll still be here.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for an Honest Assessment?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation. We'll review your revenue, transaction volume, and systems. We'll tell you honestly if you're ready or if you should wait.
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
            Bookkeeping outsourcing works brilliantly when done by properly-sized businesses, at the right stage, with realistic expectations. Don't waste $60,000 rushing in unprepared.
          </p>
        </div>
      </div>
    </div>
  );
}
