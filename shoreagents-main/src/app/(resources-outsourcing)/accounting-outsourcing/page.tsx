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
  Percent
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";

export default function AccountingOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['accounting-outsourcing']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For $500K+ Annual Revenue Businesses
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Accounting Outsourcing:<br />
              <span className="text-lime-600">Why 60% of Contracts Fail by 2025</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Here's a number that should terrify every accounting outsourcing provider: <strong>Gartner predicts 60% of finance and accounting outsourcing contracts won't be renewed by 2025.</strong>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Not because offshore accounting doesn't work—it does, when implemented properly. The problem is most companies are jumping into accounting outsourcing at exactly the wrong time, for exactly the wrong reasons, with completely unrealistic expectations about how it actually functions.
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
            Meanwhile, the USA is facing a genuine accounting crisis. The accountant workforce declined 10% from 2019 to 2024. By 2025, there'll be an estimated 300,000 open accounting roles with nobody to fill them. Companies are desperate for solutions, which means they're vulnerable to providers selling fantasies instead of reality.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I've been placing offshore accounting staff with businesses across the USA, Australia, and New Zealand for 15 years. The companies that succeed share one characteristic: they didn't outsource accounting because they were desperate. They outsourced because they were operationally mature, systematically ready, and crossed a specific revenue threshold where the maths actually worked.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This guide is for:</strong> Established businesses doing $500,000+ in annual revenue with transaction volumes exceeding 150-300 monthly. If you're a startup processing 50 transactions monthly, accounting outsourcing will cost you more than keeping it in-house. Save this for later and come back when you've scaled.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* The $2,000/Month Lie Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The $2,000/Month Lie: What Accounting Outsourcing Actually Costs</h2>
              <p className="text-lg text-gray-600">Every provider loves to advertise "$2,000/month outsourced accounting!" Then you discover what they don't mention.</p>
            </div>
          </div>

          {/* Year One True Cost */}
          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Year One True Cost (USA Mid-Sized Business):</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Outsourcing Fee:</span>
                  <span className="font-semibold text-gray-900">$30,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Your Management Time (5 hrs/week):</span>
                  <span className="font-semibold text-gray-900">$39,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Software & Tools:</span>
                  <span className="font-semibold text-gray-900">$2,400</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Training Investment:</span>
                  <span className="font-semibold text-gray-900">$6,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Mistakes & Rework:</span>
                  <span className="font-semibold text-gray-900">$8,000-15,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Transition Costs:</span>
                  <span className="font-semibold text-gray-900">$3,000</span>
                </div>
                <Separator className="my-3" />
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold text-gray-900">Total Year One:</span>
                  <span className="font-bold text-red-600 text-xl">$88,400-95,400</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Effective Monthly Cost:</span>
                  <span className="font-bold text-red-600">$7,367-7,950 (not $2,000)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Effective Hourly Rate:</span>
                  <span className="font-bold text-red-600">$44-48/hour (not $15)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Year Two+ Reality */}
          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Year Two+ Reality (Steady State):</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Outsourcing Fee:</span>
                  <span className="font-semibold text-gray-900">$30,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Software:</span>
                  <span className="font-semibold text-gray-900">$2,400</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Management (2 hrs/week):</span>
                  <span className="font-semibold text-gray-900">$15,600</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Mistakes:</span>
                  <span className="font-semibold text-gray-900">$2,000-3,000</span>
                </div>
                <Separator className="my-3" />
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold text-gray-900">Total Year Two:</span>
                  <span className="font-bold text-blue-600 text-xl">$50,000-51,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Effective Monthly Cost:</span>
                  <span className="font-bold text-blue-600">$4,167</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Effective Hourly Rate:</span>
                  <span className="font-bold text-blue-600">$24-25/hour</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border-l-4 border-gray-600">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold mb-2">⚠️ Critical Reality:</p>
              <p className="text-gray-700 leading-relaxed">
                Notice something? <strong>Year One costs MORE than many in-house accountants.</strong> True ROI doesn't materialise until Month 18-24. This is why companies under $500,000 revenue typically lose money on accounting outsourcing—the break-even timeline exceeds their patience and cash flow tolerance.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Revenue Threshold Rule Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Revenue Threshold Rule: When You're Actually Ready</h2>
              <p className="text-lg text-gray-600">Most small businesses lose money outsourcing accounting. Here's the uncomfortable truth.</p>
            </div>
          </div>

          {/* Revenue Thresholds */}
          <div className="space-y-6 mb-8">
            {/* Under $500K */}
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Under $500,000 Annual Revenue:</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-3 text-gray-800">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Monthly transactions: 50-150</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-800">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Accounting time needed: 10-20 hours/month</span>
                  </li>
                </ul>
                <p className="text-gray-800 font-semibold">
                  Better solution: Part-time bookkeeper ($25-35/hour) + QuickBooks + quarterly CPA review
                </p>
                <p className="text-gray-700 mt-2">
                  Why: Outsourcing overhead exceeds value at this scale
                </p>
              </CardContent>
            </Card>

            {/* $500K-$1M */}
            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">$500,000-1,000,000 Annual Revenue:</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-3 text-gray-800">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Monthly transactions: 150-300</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-800">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span>Accounting time needed: 20-40 hours/month</span>
                  </li>
                </ul>
                <p className="text-gray-800 font-semibold">
                  Tipping point: Outsourcing starts making financial sense
                </p>
                <p className="text-gray-700 mt-2">
                  Consider: If transactions exceed 200/month consistently
                </p>
              </CardContent>
            </Card>

            {/* $1M-$5M */}
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">$1,000,000-5,000,000 Annual Revenue:</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-3 text-gray-800">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span>Monthly transactions: 300-1,000+</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-800">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span>Accounting time needed: 40-80 hours/month</span>
                  </li>
                </ul>
                <p className="text-gray-800 font-semibold">
                  Sweet spot: Full outsourcing delivers clear ROI
                </p>
                <p className="text-gray-700 mt-2">
                  Reality: This is where the maths genuinely works
                </p>
              </CardContent>
            </Card>

            {/* $5M+ */}
            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">$5,000,000+ Annual Revenue:</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-3 text-gray-800">
                    <span className="text-lime-600 font-bold mt-1">•</span>
                    <span>Complex operations, multiple entities</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-800">
                    <span className="text-lime-600 font-bold mt-1">•</span>
                    <span>Full accounting team required (80+ hours/month)</span>
                  </li>
                </ul>
                <p className="text-gray-800 font-semibold">
                  Strong case: Outsourcing makes compelling financial sense
                </p>
              </CardContent>
            </Card>
          </div>

          {/* When NOT to Outsource */}
          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">When NOT to Outsource Accounting (Regardless of Revenue):</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Startup in first 2 years - Systems aren't established",
                  "Highly seasonal business (3+ months dormant)",
                  "Industry-specific complexity (Construction AIA billing, healthcare medical coding, non-profit fund accounting)",
                  "No documented processes - Everything's in your head",
                  "Need strategic guidance - Outsourced teams execute, don't strategize",
                  "Can't commit 5-10 hours/week management - First 90 days require minimum 10 hours/week"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 90-Day Reality: Why You'll Be Slower Before You're Faster</h2>
              <p className="text-lg text-gray-600">Here's what providers promise: "Save time immediately!" Here's what actually happens.</p>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-4">
            {/* Days 1-30 */}
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-red-600 text-white">Days 1-30</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Disaster Phase</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      You're 20-30% slower, not faster. You're creating training materials, writing SOPs, documenting every process. Daily 60-minute check-in calls. Constant questions. Mistakes requiring immediate fixes. Your time investment: 15-20 hours weekly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Days 30-60 */}
            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-amber-600 text-white">Days 30-60</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Frustration Phase</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Team contributing but needs heavy supervision. Quality inconsistent—some work excellent, some requires complete rework. You're spending 8-12 hours weekly managing. Small time savings emerging in certain areas. Break-even on time. Common thought: "Is this actually worth it?"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Days 60-90 */}
            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-blue-600 text-white">Days 60-90</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Turning Point</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Team becoming independent on routine tasks. Quality stabilising. Management time drops to 5-8 hours weekly. Small positive ROI starting—reclaiming 5-10 hours weekly. Can delegate more complex tasks.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Month 4-6 */}
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-green-600 text-white">Month 4-6</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Payoff Phase</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Team handling 30-40 hours weekly of work effectively. You've reclaimed 15-25 productive hours. Management down to 3-5 hours weekly. Visible ROI: 3-5x return on investment. Confidence to delegate more.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Month 6-12 */}
            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-lime-600 text-white">Month 6-12</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Scaling Phase</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Team mastered routine processes. Handling complex work with minimal oversight. Considering expanding scope. Full 20-30 hours weekly reclaimed. True cost savings realised.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-100 border-l-4 border-gray-600 mt-8">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold mb-2">⚠️ Why This Timeline Matters:</p>
              <p className="text-gray-700 leading-relaxed">
                This timeline is why the $500,000 revenue threshold matters—smaller companies don't have the cash flow or patience to survive the 90-day investment period before seeing returns.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What You Can Actually Outsource Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What You Can Actually Outsource (And What You Absolutely Cannot)</h2>
              <p className="text-lg text-gray-600">Not all accounting tasks are created equal. Here's the honest breakdown.</p>
            </div>
          </div>

          {/* Perfect for Outsourcing */}
          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Perfect for Outsourcing:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Accounts Payable Processing - Data entry, invoice coding, payment processing",
                  "Accounts Receivable Data Entry - Invoice creation, payment application",
                  "Bank Reconciliations - Time-consuming, rule-based, low complexity",
                  "General Ledger Coding & Entry - Following predefined chart of accounts",
                  "Fixed Asset Accounting - Depreciation calculations, asset tracking",
                  "Expense Report Processing - Receipt verification, coding, reimbursement",
                  "Financial Statement Preparation (Draft) - They prepare draft, you review",
                  "Payroll Processing (Non-Executive) - Data entry, tax calculations, reporting"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Risky to Outsource */}
          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Risky to Outsource (Proceed with Extreme Caution):</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Cash Management",
                    description: "Never give offshore team direct bank account access; set up read-only or require dual authorization"
                  },
                  {
                    title: "Customer-Facing Collections",
                    description: "Cultural differences may harm customer relationships; works for internal AR, risky for direct contact"
                  },
                  {
                    title: "Financial Close & Month-End (Initial Period)",
                    description: "First 3-6 months keep in-house or heavily supervised; timing critical and mistakes visible company-wide"
                  },
                  {
                    title: "Complex Revenue Recognition (ASC 606)",
                    description: "Requires judgment calls, not just data entry; outsource execution after YOU determine treatment"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Never Outsource */}
          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6">Never Outsource:</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Strategic Financial Planning",
                    description: "Requires deep business context and vision; outsourced teams execute, don't strategize"
                  },
                  {
                    title: "High-Stakes Client Relationships",
                    description: "Key client financial reviews, investor relations, board-level presentations where trust matters"
                  },
                  {
                    title: "Complex Negotiations",
                    description: "Vendor negotiations requiring judgment, banking relationships, M&A due diligence"
                  },
                  {
                    title: "Sensitive HR/Payroll Decisions",
                    description: "Compensation strategy, executive payroll, termination-related financial matters"
                  },
                  {
                    title: "Regulatory Filings Requiring Licensed Professional",
                    description: "SEC filings, IRS representation (requires Enrolled Agent, CPA, or Attorney), state regulatory filings"
                  },
                  {
                    title: "Legal/Compliance Gray Areas",
                    description: "FCPA compliance, fraud investigations, whistleblower management, compliance decisions requiring legal judgment"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border-l-4 border-gray-600 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                The decision framework: <strong>High risk + high judgment = keep in-house. Low risk + high volume = perfect for outsourcing.</strong>
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Quality Problem Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Quality Problem Everyone Whispers About</h2>
              <p className="text-lg text-gray-600">There's a pattern in the complaints from companies using accounting outsourcing.</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Common Quality Complaints:</h3>
              <div className="space-y-4">
                <blockquote className="text-gray-700 italic border-l-4 border-red-500 pl-4">
                  "There is a strong push to offshore work to Manila and India. Unfortunately the quality we get in return just isn't there, and it takes more effort to QC the work... we end up upside on client budgets." - Glassdoor, Accounting Professional
                </blockquote>
                <blockquote className="text-gray-700 italic border-l-4 border-red-500 pl-4">
                  "90% of the accounting team is in India and the team in America is like 5 people fixing India's mistakes." - Reddit comment
                </blockquote>
                <blockquote className="text-gray-700 italic border-l-4 border-red-500 pl-4">
                  "The lack of detail, lack of foresight, lack of communication has nearly killed the company. So many client complaints and clients churning, so many US staff leaving." - Industry forum
                </blockquote>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Quality Problems Happen:</h3>
              <div className="space-y-3">
                {[
                  "The 'Trained Professional' Myth - 'US GAAP trained' means basic classroom theory, not practical application",
                  "Communication Breakdown - Time zone challenges create 12-24 hour delays on urgent questions",
                  "Skills Gap - 'Real estate accounting specialist' often means worked with 5 real estate clients, each completely different",
                  "Insufficient Management - Companies underestimate supervision time required"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How Successful Companies Avoid Quality Issues:</h3>
              <div className="space-y-3">
                {[
                  "Invest heavily in first 90 days of training",
                  "Create comprehensive process documentation before hiring",
                  "Implement quality control systems with regular audits",
                  "Accept that offshore team executes YOUR systems, not their own",
                  "Commit realistic management time (not 'hands-off' fantasy)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                The quality problems are real, but they're largely preventable with proper implementation. Companies that fail typically underestimated the training and management investment required.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Market Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Market Reality: USA Accountant Shortage Driving Demand</h2>
              <p className="text-lg text-gray-600">The numbers tell a stark story</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Crisis:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-gray-800">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>USA accountant workforce: Down 10% from 2019-2024</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-800">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>Estimated open roles by 2025: 300,000</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-800">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>CPA exam pass rates: Declining</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-800">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>Young professionals entering accounting: Decreasing</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-800">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>Big 4 firms' response: Doubling offshore staff</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Outsourcing Adoption Rates (USA):</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-gray-800">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>37% of small businesses (under 50 employees) outsource accounting</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-800">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>66% of businesses (50+ employees) outsource accounting</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-800">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>30% of CPA firms outsource domestically</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-800">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>25% of CPA firms outsource to offshore workers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                Translation: Accounting outsourcing is mainstream in the USA. The question isn't "should I consider it?" but rather "am I ready for it?"
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What Success Actually Looks Like Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Success Actually Looks Like</h2>
              <p className="text-lg text-gray-600">When accounting outsourcing works properly, here's the reality</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Year Two+ Performance (After 18-Month Break-Even):</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>30-40% genuine cost savings (not the advertised 70%)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>15-25 hours weekly reclaimed by business owner</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>3-5 hours weekly ongoing management time</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Quality matching or exceeding previous in-house performance</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Scalability—can add second accountant for $30,000 vs $70,000 local hire</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real Success Indicators:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Offshore accountant working independently on routine tasks",
                  "You reviewing their work, not doing it yourself",
                  "Mistakes rare and quickly corrected",
                  "Can take vacation without accounting grinding to halt",
                  "Cash flow improved from cost savings",
                  "Time reinvested in revenue-generating activities"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                The successful companies all share common traits: they crossed the revenue threshold before outsourcing, documented their processes first, committed realistic management time, and maintained patience through the 90-day ramp-up.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Honest Assessment Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-100 rounded-full p-3">
              <FileText className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Honest Assessment: Are You Ready?</h2>
              <p className="text-lg text-gray-600">Most businesses reading this aren't ready for accounting outsourcing. That's not an insult—it's reality.</p>
            </div>
          </div>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Self-Assessment Checklist:</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Revenue Test:</h4>
                  <div className="space-y-2">
                    {[
                      "Annual revenue exceeds $500,000",
                      "Monthly transactions exceed 150-200",
                      "Accounting needs 20+ hours weekly"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-amber-600 font-bold">☐</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Systems Test:</h4>
                  <div className="space-y-2">
                    {[
                      "Processes documented (even rough SOPs)",
                      "Using accounting software (QuickBooks, Xero, NetSuite)",
                      "Chart of accounts established and organized",
                      "Monthly close process defined"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-amber-600 font-bold">☐</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Management Test:</h4>
                  <div className="space-y-2">
                    {[
                      "Can commit 10 hours/week for first 90 days",
                      "Can commit 3-5 hours/week ongoing",
                      "Have bandwidth to train and supervise"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-amber-600 font-bold">☐</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Financial Test:</h4>
                  <div className="space-y-2">
                    {[
                      "Can budget $50,000-60,000 for Year One",
                      "Can absorb 18-month break-even timeline",
                      "Cash flow supports initial investment"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-amber-600 font-bold">☐</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Card className="bg-white border-2 border-amber-400 mt-6">
                <CardContent className="p-6">
                  <p className="text-gray-800 font-semibold mb-2">
                    If you checked fewer than 10 boxes, you're not ready yet.
                  </p>
                  <p className="text-gray-700">
                    Focus on growing revenue, documenting systems, and building cash reserves. Come back to accounting outsourcing when you're operationally mature.
                  </p>
                  <p className="text-gray-800 font-semibold mt-4">
                    If you checked 10+ boxes, outsourcing might make sense—but only with realistic expectations about costs, timeline, and management commitment.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What Happens Next Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Happens Next</h2>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            I've given you the reality version—the 60% contract failure rate, the true costs, the 18-month break-even timeline. Most businesses aren't ready for accounting outsourcing, and that's perfectly fine. Better to know now than waste $50,000 learning the hard way.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            But if you're doing $1 million+ revenue, drowning in accounting work, turning away growth opportunities because you're buried in bookkeeping, and you've got documented systems (even rough ones), outsourcing implemented properly can give you your business back.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Not immediately. Not magically. But by month six, you'll have reclaimed 15-20 hours weekly. By month twelve, you'll wonder how you managed without offshore accounting support.
          </p>

          <Card className="bg-gray-900 text-white mb-8">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-6">
                ShoreAgents works with established businesses across the USA, Australia, and New Zealand. Our pricing is <strong className="text-lime-400">$1,200-2,500/month for full-time accounting support</strong>—not fantasy rates, real costs for real results. We handle recruitment, training, and backup coverage.
              </p>
              <p className="text-gray-300 leading-relaxed">
                If you're ready—actually ready, not just frustrated—schedule a consultation. We'll assess whether accounting outsourcing makes sense for your situation. If it doesn't, we'll tell you that too.
              </p>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-gradient-to-br from-lime-50 to-green-50">
            <CardContent className="p-8">
              <p className="text-gray-800 text-lg leading-relaxed">
                The 40% who succeed at accounting outsourcing don't do it because they found magic offshore accountants. They succeed because they were operationally ready, set realistic expectations, and committed to the 18-24 month timeline.
              </p>
              <p className="text-gray-900 font-bold text-xl mt-4 text-center">
                Are you in that 40%?
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for an Honest Assessment?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation. We'll assess whether accounting outsourcing makes sense for your situation. If it doesn't, we'll tell you that too.
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
            Accounting outsourcing works brilliantly when done by properly-sized companies, at the right stage, with realistic expectations. Don't waste $50,000 rushing in unprepared.
          </p>
        </div>
      </div>
    </div>
  );
}
