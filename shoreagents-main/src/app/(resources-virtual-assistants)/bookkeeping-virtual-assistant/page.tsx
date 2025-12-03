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
  Lock,
  Monitor,
  MessageCircle,
  Database
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";

export default function BookkeepingVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['bookkeeping-virtual-assistant']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For $250K+ Annual Revenue Businesses
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Bookkeeping Virtual Assistant:<br />
              <span className="text-lime-600">The Trust Test Nobody Passes (Would You Give a Stranger Your Bank Password?)</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Bookkeepers get MORE access than any other VA—full bank account credentials, financial data, tax information. Yet NOBODY discusses the security nightmare, the $250K revenue threshold, or the $42,400 first-year cost. Here's the brutally honest guide that might save you from hiring too early.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong>CRITICAL DISCOVERY:</strong> The market has a massive trust gap. 82% of small businesses fail due to cash flow mismanagement, yet no competitor adequately addresses security, vetting, or "what if they steal from me" concerns. Every competitor sells convenience and cost savings. Nobody honestly discusses when bookkeeping VAs fail.
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
            The bookkeeping VA market represents an $11.59B industry (2025) growing to $25.95B by 2034. But search behavior reveals a critical terminology gap: "remote bookkeeper" shows sustained USA search volume while "bookkeeping virtual assistant" displays only sporadic, tax-season spikes.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This guide is for US small businesses doing $250,000+ in annual revenue who need ongoing bookkeeping support.</strong> If you're under $250K revenue, focus on DIY with QuickBooks/Xero ($30-80/month) + quarterly CPA review ($500-1,000/quarter). If you're testing bookkeeping with sporadic projects, hire a local bookkeeper per-project. Come back when you've got systematic work to delegate.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Trust Paradox Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Lock className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Trust Test: Would You Give a Stranger Your Bank Password?</h2>
              <p className="text-lg text-gray-600">The security nightmare nobody discusses</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                The Reality: Bookkeepers need MORE access than any other VA—full bank account read access (minimum), often payment authorization, credit card account access, payroll system credentials, vendor payment systems, and receipt/expense tracking access.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                Questions Nobody Asks: What's their actual background check? (Criminal only? Financial?) Are they bonded/insured? (Most freelancers: NO) What happens if they steal? (No recourse with freelancers) How do you limit access? (Can't do job with limited access) What's the company's liability policy? (Often: zero)
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Honest Answer:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                You're trusting a remote worker you've never met with more financial access than you'd give your spouse. If that makes you uncomfortable, you're not crazy—you're being smart.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Better Approach:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Start with view-only access + screen sharing</li>
                <li>• Use Bill.com or similar (you approve, they enter)</li>
                <li>• Two-person approval for payments over $X</li>
                <li>• Weekly review, not monthly</li>
                <li>• Trust is earned over 90+ days, not given day one</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Revenue Threshold Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The $250K Revenue Rule: When to Hire (And When to Wait)</h2>
              <p className="text-lg text-gray-600">The revenue threshold guide no bookkeeping company will show you</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Scenario A: $150K Revenue Business</h3>
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Your Net Profit (30%):</span>
                    <span className="font-semibold">$45,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Bookkeeping VA Cost (Year 1):</span>
                    <span className="font-semibold">$42,400</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">Percentage of Profit:</span>
                    <span className="font-bold text-red-600 text-xl">94%!</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mb-4">
                You're spending almost ALL your profit on bookkeeping. That's insane.
              </p>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">BETTER STRATEGY:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• QuickBooks + your time (2 hrs/week): $960/year</li>
                  <li>• Quarterly CPA review: $2,000/year</li>
                  <li>• TOTAL: $2,960/year</li>
                  <li>• Money saved: $39,440 (invest in growth instead)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Scenario B: $500K Revenue Business</h3>
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Your Net Profit (25%):</span>
                    <span className="font-semibold">$125,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Bookkeeping VA Cost (Year 1):</span>
                    <span className="font-semibold">$42,400</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">Percentage of Profit:</span>
                    <span className="font-bold text-green-600 text-xl">34%</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-800 leading-relaxed mb-4">
                Still high, but getting reasonable. Your time saved: 8-10 hours/week. Value of time saved (at $150/hr): $62,400-78,000/year. ROI: Positive (barely) in Year 1. ROI: Strongly positive Year 2+.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Threshold Truth:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900">Under $250k revenue: Wait. Not worth it yet.</p>
                    <p className="text-sm text-gray-700">VA costs = 10-15% of revenue (too high). Not enough volume to keep VA busy 15+ hours/week.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900">$250k-500k: Maybe. Depends on margins and time value.</p>
                    <p className="text-sm text-gray-700">If you have documented processes and can invest 5+ hours/week for management.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900">$500k-1M: Probably. If you have systems ready.</p>
                    <p className="text-sm text-gray-700">ROI becomes clearly positive. Time savings justify the investment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-lime-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900">$1M+: Definitely. Should have hired yesterday.</p>
                    <p className="text-sm text-gray-700">At this revenue, bookkeeping VA is essential for scaling.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* True Cost Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Calculator className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The True Cost (That Nobody Tells You)</h2>
              <p className="text-lg text-gray-600">What's advertised: "$15/hour! Save 60-70%!" What it actually costs</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">ADVERTISED: $1,200/month ($15/hr × 20 hrs/week × 4 weeks)</h3>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ACTUAL FIRST YEAR COSTS:</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">VA Salary:</span>
                  <span className="font-semibold">$14,400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software/Tools ($200/month):</span>
                  <span className="font-semibold">$2,400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your Training Time (50 hrs @ $100/hr):</span>
                  <span className="font-semibold">$5,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Management Time (3 hrs/week × 52 × $100):</span>
                  <span className="font-semibold">$15,600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Mistakes/Rework:</span>
                  <span className="font-semibold">$3,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">CPA Extra Time:</span>
                  <span className="font-semibold">$2,000</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">TOTAL FIRST YEAR:</span>
                  <span className="font-bold text-red-600 text-xl">$42,400</span>
                </div>
                <p className="text-red-700 font-semibold mt-2">Effective Hourly Rate: $40/hour (not $15!)</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">YEAR TWO (If They Stay):</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">VA Salary:</span>
                  <span className="font-semibold">$14,400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software:</span>
                  <span className="font-semibold">$2,400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Management (1.5 hrs/week × 52 × $100):</span>
                  <span className="font-semibold">$7,800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Mistakes:</span>
                  <span className="font-semibold">$1,000</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">TOTAL YEAR TWO:</span>
                  <span className="font-bold text-blue-600 text-xl">$25,600</span>
                </div>
                <p className="text-blue-700 font-semibold mt-2">Effective Hourly Rate: $25/hour</p>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                Break-Even Point: Month 18-24 (if they don't quit). Average VA tenure: 18 months. Most businesses never see Year Two savings.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 90-Day Reality: Why You'll Get Slower Before Faster</h2>
              <p className="text-lg text-gray-600">The timeline they don't share</p>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <Badge className="bg-red-600 text-white mb-3">Week 1-2</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Setup Phase</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Training VA on your systems: 10 hours. Creating SOPs/Loom videos: 15 hours. Software access setup: 3 hours. Chart of accounts review: 2 hours.
                </p>
                <p className="text-gray-800 font-semibold">Your productivity drops 20% (time sucked into training). VA productivity: 10% (learning mode). You're doing their work + training them.</p>
              </CardContent>
            </Card>

            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <Badge className="bg-amber-600 text-white mb-3">Week 3-4</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Question Phase</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Daily questions: 1-2 hours/day. Quality checking their work: 1 hour/day. Fixing mistakes: 30 min/day.
                </p>
                <p className="text-gray-800 font-semibold">Your productivity drops 15%. VA productivity: 30% (still learning). Break-even on time (not gaining yet).</p>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <Badge className="bg-blue-600 text-white mb-3">Week 5-8</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Frustration Phase</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Fewer questions but still supervision needed. Finding errors after the fact (expensive). Re-explaining same concepts. Wondering if it's worth it (temptation to quit highest here).
                </p>
                <p className="text-gray-800 font-semibold">Your productivity drops 10%. VA productivity: 50%. Small positive ROI emerging.</p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <Badge className="bg-green-600 text-white mb-3">Week 9-12</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Turning Point</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  VA becoming independent on routine tasks. Quality improving. Trust building. Management time drops to 3-5 hours/week.
                </p>
                <p className="text-gray-800 font-semibold">Your productivity recovering. VA productivity: 70%. Real ROI starting to show.</p>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <Badge className="bg-lime-600 text-white mb-3">Month 4-6</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Payoff Phase</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  VA handling 15-20 hours/week independently. You've reclaimed 10-12 hours/week. Management down to 2-3 hours/week.
                </p>
                <p className="text-gray-800 font-semibold">Your productivity up 15% vs baseline. VA productivity: 85%. ROI: 3-4x return on investment.</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-100 border-l-4 border-gray-600 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                The Truth: It takes 90-120 days to see positive ROI. Anyone promising "immediate results" is lying.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What They Can't Do Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Your Bookkeeper Can't Do (That You're Asking Them To)</h2>
              <p className="text-lg text-gray-600">Legal boundaries nobody discusses</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">NEVER Ask Your Bookkeeper:</h3>
              <div className="space-y-3">
                {[
                  "Which business structure should I use? (CPA/attorney question)",
                  "Is this tax deductible? (Tax professional question)",
                  "Should I take a loan? (Financial advisor question)",
                  "How should I price my services? (Business consultant question)",
                  "File my taxes (CPA/EA only)",
                  "Represent me to IRS (CPA/EA/Attorney only)",
                  "Give me audit advice (CPA only)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                Why This Matters: Bookkeepers providing tax advice = unauthorized practice of accounting. YOU are liable for their bad advice. They have no E&O insurance for advice. Could trigger IRS penalties if wrong.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What Bookkeepers SHOULD Do:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Record transactions accurately</li>
                  <li>• Reconcile bank statements</li>
                  <li>• Categorize expenses</li>
                  <li>• Prepare basic financial reports</li>
                  <li>• Process payroll (data entry)</li>
                </ul>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Send invoices and track A/R</li>
                  <li>• Enter bills and track A/P</li>
                  <li>• Organize receipts</li>
                  <li>• Prepare data for YOUR CPA to analyze</li>
                </ul>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                The Dividing Line: Bookkeepers = Past (recording what happened). Accountants/CPAs = Future (planning what should happen).
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Software Compatibility Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Database className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">QuickBooks vs Xero: The Software Compatibility Nightmare</h2>
              <p className="text-lg text-gray-600">USA market = QuickBooks territory (80% market share, 5M+ users)</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">USA Market = QuickBooks Territory</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 80% US market share</li>
                <li>• 5M+ QuickBooks Online users, 7M+ total with Desktop</li>
                <li>• Industry standard - easier to find local help</li>
                <li>• Integrated with TurboTax (US tax filing)</li>
                <li>• Better local bookkeeper availability - huge QuickBooks ProAdvisor network</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">International VA Problem:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Philippines VAs often trained on different QuickBooks versions</li>
                <li>• International vs US QuickBooks have setting differences</li>
                <li>• Tax codes don't match (Philippines BIR vs US IRS)</li>
                <li>• Multi-currency complications</li>
                <li>• 30-day learning curve for US-specific setup</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Hidden Software Costs:</h3>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-bold text-gray-900 mb-3">WHAT YOU THINK YOU NEED:</h4>
                <p className="text-gray-700 mb-4">QuickBooks Online Simple Start: $30/month</p>
                <h4 className="font-bold text-gray-900 mb-3">WHAT YOU ACTUALLY NEED (With VA):</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• QuickBooks Online Plus: $100/month (VA needs access to advanced features)</li>
                  <li>• Bill.com integration: $49/month (Bill payment management)</li>
                  <li>• Receipt Bank/Hubdoc: $20/month (Receipt scanning)</li>
                  <li>• Gusto Payroll: $40/month + $6/employee (If you have employees)</li>
                  <li>• Project management: $10/month (For task tracking with VA)</li>
                </ul>
                <Separator className="my-3" />
                <p className="font-bold text-gray-900">TOTAL: $200-250/month in software</p>
                <p className="text-red-700 font-semibold mt-2">That's $2,400-3,000/year nobody mentions!</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Freelancer vs Company Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Freelancer vs Company: The Real Math</h2>
              <p className="text-lg text-gray-600">Success rate comparison and true cost analysis including failures</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Freelancer Route (Upwork/Fiverr/OnlineJobs.ph):</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Apparent Cost: $10-25/hour. Time Cost to Find Good One: Reviewing 50+ applications: 5 hours. Interviews: 10 hours (20-30 candidates). Test projects: 20 hours (supervising trials). Total: 35 hours @ $100/hr = $3,500 hidden cost.
              </p>
              <p className="text-gray-800 font-semibold mb-4">Success Rate: 20-30% work out long-term. Average Attempts: 3-4 before finding keeper. Real Cost: $10,000-15,000 in failed attempts.</p>
              <h4 className="font-bold text-gray-900 mb-2">Risks:</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• No backup when sick/quit</li>
                <li>• Juggling 3-5 other clients (divided attention)</li>
                <li>• YOU handle taxes, contracts, HR issues</li>
                <li>• High turnover (jump to better offers constantly)</li>
                <li>• Profiles often inflated/fake</li>
                <li>• No support when issues arise</li>
                <li>• No replacement guarantee</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">VA Company Route (BELAY, Virtudesk, etc.):</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Apparent Cost: $1,500-2,000/month (2-3x more). Included: Pre-vetted (top 1-3% of applicants), Backup coverage (VA sick? Replacement provided), Training included (basic bookkeeping covered), Management support (account managers), Payroll handled (one invoice), Replacement guarantee (doesn't work out? Free replacement), Faster hiring (7-14 days vs 2-4 months trial/error).
              </p>
              <p className="text-gray-800 font-semibold">Success Rate: 60-70% work out long-term.</p>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Math:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">FREELANCER PATH:</h4>
                  <div className="space-y-1 text-sm text-gray-700 mb-3">
                    <p>Month 1-2: $1,000/month × Failed attempt #1 = $2,000 wasted</p>
                    <p>Month 3-4: $1,000/month × Failed attempt #2 = $2,000 wasted</p>
                    <p>Month 5-6: $1,000/month × Failed attempt #3 = $2,000 wasted</p>
                    <p>Month 7: $1,000/month × SUCCESS = Finally working</p>
                  </div>
                  <p className="font-bold text-gray-900">TOTAL SPENT BY MONTH 7: $7,000</p>
                  <p className="text-sm text-gray-700">+ YOUR TIME: 100+ hours</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">COMPANY PATH:</h4>
                  <div className="space-y-1 text-sm text-gray-700 mb-3">
                    <p>Month 1: $1,800 × Success from start = $1,800</p>
                  </div>
                  <p className="font-bold text-gray-900">TOTAL SPENT BY MONTH 7: $12,600</p>
                  <p className="text-sm text-gray-700">+ YOUR TIME: 20-30 hours</p>
                  <p className="text-sm text-green-700 font-semibold mt-2">DIFFERENCE: $5,600 more, but: 6 months of correct books (vs mess), 70-80 hours of your time saved, No failed attempt stress, Backup coverage</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When It Works vs Doesn't Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When Bookkeeping VAs Work BEST (And When They Won't Work)</h2>
              <p className="text-lg text-gray-600">Let me save some of you $42,400 right now</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">When You're NOT Ready:</h3>
              <div className="space-y-3">
                {[
                  "Under $250k Revenue: VA costs = 10-15% of revenue (too high). Not enough volume to keep VA busy 15+ hours/week.",
                  "No Documented Processes: You'll spend 100+ hours creating SOPs. VA will constantly need guidance. Cost of process creation > cost of DIY.",
                  "Inconsistent Cash Flow: Part-time VAs harder to retain. Paying for hours you don't need. Better to pay per-project CPA.",
                  "Under 2 Years in Business: Financial systems still evolving. Too many exceptions for VA to handle. Learn your numbers first, then delegate."
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">When Bookkeeping VA Makes Financial Sense:</h3>
              <div className="space-y-3">
                {[
                  "Annual revenue: $250k-500k minimum. Monthly transactions: 100+. Multiple bank accounts/credit cards.",
                  "Employees (payroll processing needed). You value your time at $75-100+/hour.",
                  "You have documented processes. You have 5+ hours/week for management/training."
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Turnover Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When Your Bookkeeper Quits: The Turnover Catastrophe</h2>
              <p className="text-lg text-gray-600">Average VA tenure: 18 months. Losing bookkeeper mid-year = financial disaster</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Average VA tenure: 18 months. Losing bookkeeper mid-year = financial disaster. Tax season knowledge loss. Relationship with your CPA disrupted. 3-month ramp-up time for replacement. Costs $5,000-10,000 in lost productivity.
              </p>
              <p className="text-gray-800 font-semibold">
                Zero discussion of this risk by competitors. Most businesses never see Year Two savings because their bookkeeper quits before then.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Continuity Planning:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Document EVERYTHING (SOPs, processes, decisions)</li>
                <li>• Use company with backup coverage (not freelancer)</li>
                <li>• Monthly knowledge transfer sessions</li>
                <li>• Keep CPA in the loop (they can bridge gaps)</li>
                <li>• Have transition plan ready (always)</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What Bookkeepers Actually Do Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <FileText className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Remote Bookkeepers Actually Do</h2>
              <p className="text-lg text-gray-600">Comprehensive task list categorized by function</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Transaction Management:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Record transactions accurately</li>
                  <li>• Categorize expenses properly</li>
                  <li>• Reconcile bank statements</li>
                  <li>• Reconcile credit card statements</li>
                  <li>• Match receipts to transactions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Accounts Payable:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Enter bills and invoices</li>
                  <li>• Track payment due dates</li>
                  <li>• Process vendor payments</li>
                  <li>• Manage purchase orders</li>
                  <li>• Maintain vendor records</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Accounts Receivable:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Send invoices to customers</li>
                  <li>• Track outstanding receivables</li>
                  <li>• Process customer payments</li>
                  <li>• Send payment reminders</li>
                  <li>• Manage customer records</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Payroll Processing:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Enter payroll data (time tracking)</li>
                  <li>• Process payroll runs</li>
                  <li>• Track employee hours</li>
                  <li>• Maintain payroll records</li>
                  <li>• Generate payroll reports</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Financial Reporting:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Generate profit & loss statements</li>
                  <li>• Create balance sheets</li>
                  <li>• Prepare cash flow statements</li>
                  <li>• Monthly financial summaries</li>
                  <li>• Custom reports as needed</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Data Organization:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Organize receipts and documents</li>
                  <li>• Maintain filing systems</li>
                  <li>• Prepare data for CPA review</li>
                  <li>• Year-end documentation</li>
                  <li>• Audit preparation support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for an Honest Assessment?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Bookkeeping VAs work brilliantly when implemented properly by ready businesses with realistic expectations and documented processes. The question is whether that describes your situation right now.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              ShoreAgents places full-time Filipino bookkeeping virtual assistants at $1,200-2,500/month. We'll tell you honestly if you're not ready yet (under $250K revenue), if you need a CPA instead, or if local bookkeeping services make more sense for your current situation.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              We only succeed when you succeed. And that means being brutally honest about when bookkeeping VAs make sense—and when they don't. No sales pitch, just 15 years of experience telling it straight.
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
            Every US competitor sells the dream with inflated promises. We dominate by selling the reality—becoming the trusted authority that helps businesses make INFORMED decisions, even if the answer is "you're not ready yet." The businesses who ARE ready will trust you more because you were honest about who ISN'T ready.
          </p>
        </div>
      </div>
    </div>
  );
}
