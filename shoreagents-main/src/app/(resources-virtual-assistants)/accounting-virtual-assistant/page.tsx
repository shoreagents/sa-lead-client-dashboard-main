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
  Database,
  Monitor,
  MessageCircle,
  BarChart3,
  Lock
} from "lucide-react";
import Link from "next/link";

export default function AccountingVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For $250K+ Annual Revenue Businesses (USA-Focused)
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Accounting Virtual Assistant:<br />
              <span className="text-lime-600">The $250K Revenue Rule (And Why Most Businesses Hire Too Early)</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              If your business does under $250,000 in annual revenue, hiring a full-time accounting VA will actually cost you money. Here's the math that nobody else shows you—and the 7 reasons why you're probably NOT ready to hire one.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              That "$10/hour accounting VA" actually costs $25.78/hour in year one when you account for software, training, management time, and fixing errors. Most accounting VA companies want to sell you their service. We're going to start by telling you when you're NOT ready.
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
            While this guide focuses on the USA market (where "Accounting Virtual Assistant" is the primary search term), the principles apply to businesses in Australia, New Zealand, and other English-speaking markets. However, compliance requirements vary significantly by jurisdiction.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This guide is for USA businesses doing $250,000+ in annual revenue with 30+ transactions per week and established accounting processes.</strong> If you're under $250K revenue, still figuring out your business model, or have no documented procedures, you're not ready yet. Come back when you've got actual systems.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Revenue Rule Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The $250K Revenue Rule: Should You Hire?</h2>
              <p className="text-lg text-gray-600">The math that nobody else shows you</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Calculation:</h3>
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Business Revenue:</span>
                    <span className="font-semibold">$150,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Net Margin (typical):</span>
                    <span className="font-semibold">20% = $30,000 net profit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Full-Time VA True Cost Year 1:</span>
                    <span className="font-semibold">$49,506</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">YOU JUST SPENT:</span>
                    <span className="font-bold text-red-600 text-xl">165% OF YOUR PROFIT</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Better Thresholds:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900">$250K revenue (at 20% margin = $50K profit) is bare minimum</p>
                    <p className="text-sm text-gray-700">Still tight, but workable if you have documented processes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900">$500K revenue (at 20% margin = $100K profit) is comfortable</p>
                    <p className="text-sm text-gray-700">ROI becomes clearly positive, manageable overhead</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-lime-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900">$1M revenue (at 20% margin = $200K profit) is ideal</p>
                    <p className="text-sm text-gray-700">Should have hired yesterday at this revenue level</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Minimum Thresholds for Full-Time Accounting VA:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• $300K-500K annual revenue minimum for businesses</li>
                <li>• 30+ transactions per week to keep VA busy 20+ hours</li>
                <li>• $5K+ monthly recurring accounting/bookkeeping needs</li>
                <li>• At least 2 years in business with established processes</li>
              </ul>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The True Cost Breakdown</h2>
              <p className="text-lg text-gray-600">What's advertised: "$10-15/hour! Save 70%!" What it actually costs</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">YEAR ONE BREAKDOWN:</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">VA Salary:</span>
                  <span className="font-semibold">$12/hr × 160 hrs/month × 12 = $23,040</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software Licenses:</span>
                  <span className="font-semibold">$1,416/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your Training Time:</span>
                  <span className="font-semibold">$4,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Management & Oversight:</span>
                  <span className="font-semibold">$17,550</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Mistakes & Rework:</span>
                  <span className="font-semibold">$3,000</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">TOTAL YEAR ONE COST:</span>
                  <span className="font-bold text-red-600 text-xl">$49,506</span>
                </div>
                <p className="text-red-700 font-semibold mt-2">EFFECTIVE HOURLY RATE: $25.78/hour (not $12!)</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">YEAR TWO (Ongoing):</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">VA Salary:</span>
                  <span className="font-semibold">$23,040</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software:</span>
                  <span className="font-semibold">$1,416</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Management (reduced):</span>
                  <span className="font-semibold">$3,900</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Errors (reduced):</span>
                  <span className="font-semibold">$1,000</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">TOTAL YEAR TWO:</span>
                  <span className="font-bold text-blue-600 text-xl">$29,356</span>
                </div>
                <p className="text-blue-700 font-semibold mt-2">EFFECTIVE HOURLY RATE: $15.29/hour</p>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                Break-Even Analysis: Must reclaim 15+ hours/week of $75+/hour work to justify. ROI positive only after Month 18-24. Only makes sense if you bill $150+/hour for client work.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Qualified VA Myth Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The "Qualified VA" Myth</h2>
              <p className="text-lg text-gray-600">What providers claim vs the reality</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What Providers Claim:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                "Accounting VAs trained in QuickBooks, bookkeeping, financial reporting"
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Reality:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• "Training" = basic familiarity with accounting software interfaces</li>
                <li>• NOT trained in: US tax code, GAAP principles, state-specific regulations</li>
                <li>• NOT trained in: YOUR specific business processes, chart of accounts, reporting needs</li>
                <li>• Still needs 60-90 days minimum of your training</li>
                <li>• Most "accounting VAs" have zero formal accounting education</li>
                <li>• Training = 2-4 weeks on software basics, not accounting principles</li>
                <li>• Cannot distinguish between capital vs operational expenses without instructions</li>
                <li>• Don't understand accrual vs cash accounting implications</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                What This Means: You're not hiring an accountant. You're hiring a trained data entry person who follows your instructions. That's fine—IF you know what instructions to give.
              </p>
              <p className="text-gray-800 font-semibold">
                One Provider Admits: "Administrative virtual assistants are not specialized in finance nor do they necessarily have financial experience, which is problematic for eCommerce companies since bookkeeping is a culmination of all financial records across all aspects of operations."
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Bookkeeper vs Accountant Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-100 rounded-full p-3">
              <AlertCircle className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Bookkeeper vs Accountant Confusion</h2>
              <p className="text-lg text-gray-600">Critical distinction most miss</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Bookkeepers:</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Record transactions</li>
                    <li>• Reconcile accounts</li>
                    <li>• Generate reports</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Accountants:</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Analyze data</li>
                    <li>• Provide strategic advice</li>
                    <li>• Ensure compliance</li>
                    <li>• Prepare taxes</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                VAs marketed as "Accounting VAs": Usually bookkeepers, NOT accountants.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Licensing Reality:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Only CPAs are legally able to provide attestation opinions on financial statements in most US states. Texas prohibits use of "accountant" designation by non-CPAs unless they're licensed CPAs from another state.
              </p>
              <p className="text-gray-800 font-semibold mb-4">Translation: Your "accounting VA" cannot legally:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Prepare reviewed or audited financial statements</li>
                <li>• Provide tax advice or sign tax returns</li>
                <li>• Represent you before the IRS</li>
                <li>• Perform CPA-level analysis or attestation services</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Tasks Never Delegate Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Tasks You Should NEVER Delegate to an Accounting VA</h2>
              <p className="text-lg text-gray-600">Legal compliance and high-risk tasks</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Legally Prohibited (USA):</h3>
              <div className="space-y-3">
                {[
                  "Tax Return Preparation & Signing - Requires CPA, EA, or attorney license",
                  "IRS Representation - Must be CPA, EA, or tax attorney",
                  "Audit Services - CPA license required",
                  "Financial Statement Attestation - CPA-only function",
                  "Providing Tax Advice - Unauthorized practice of accounting in most states"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">High-Risk to Delegate:</h3>
              <div className="space-y-3">
                {[
                  "Check Signing/Payment Authorization - Fraud risk too high",
                  "Bank Account Access - Should require two-factor authentication + oversight",
                  "Payroll Tax Filings - Errors or missing information can lead to stiff penalties",
                  "Sales Tax Calculations (multi-state) - Complex compliance varies by jurisdiction",
                  "Financial Forecasting/Strategy - Requires business context VAs don't have"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Perfect to Delegate:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Transaction Data Entry (with oversight)</li>
                  <li>• Bank/Credit Card Reconciliation (reviewed monthly)</li>
                  <li>• Invoice Creation & Sending</li>
                  <li>• Accounts Payable/Receivable Management</li>
                  <li>• Expense Categorization (following YOUR chart of accounts)</li>
                </ul>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Receipt Organization & Filing</li>
                  <li>• Basic Financial Report Generation (internal use only)</li>
                  <li>• Customer Payment Follow-up</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Data Security Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Lock className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Data Security & Compliance Nightmares</h2>
              <p className="text-lg text-gray-600">The problem nobody discusses</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                The Problem Nobody Discusses: Not being careful about who you hire opens you up to contractors who may take advantage of financial information and steal from the company. When typical businesses lose 5% of revenue to fraud, this becomes less far-fetched.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Requirements for CPA Firms:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                CPA firms must adhere to Sarbanes-Oxley Act, state licensing rules, AICPA ethics, and PCAOB auditing standards, covering areas like financial reporting, tax preparation, client confidentiality, data security, and internal controls.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The VA Challenge:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• How do you ensure VA follows SOX, GLBA security standards?</li>
                <li>• Who verifies background checks in Philippines/India?</li>
                <li>• What happens if VA is hacked or data is breached?</li>
                <li>• Are NDAs enforceable internationally?</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When NOT Ready Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When Accounting VAs DON'T Work</h2>
              <p className="text-lg text-gray-600">7 scenarios to avoid</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <div className="space-y-3">
                {[
                  "Doing under $250K annual revenue (costs exceed value)",
                  "Less than 50 transactions/month (not enough work)",
                  "Startup under 12 months old (processes not documented yet)",
                  "No documented procedures/SOPs (VA will flounder)",
                  "You don't have 10 hours/week for training/management",
                  "Expecting VA to \"figure things out\" independently",
                  "Looking for strategic financial advice (that's a CPA, not VA)",
                  "Need tax planning or IRS representation (requires licensed professional)",
                  "Handling sensitive regulated industry data without proper security protocols"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mt-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Better Alternatives if Under Threshold:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• DIY with QuickBooks + monthly CPA review: $500-1,000/month</li>
                <li>• Part-time local bookkeeper: 5-10 hrs/month: $200-500/month</li>
                <li>• Tax-time-only CPA: $1,000-3,000/year</li>
                <li>• Bookkeeping service (Bench, Pilot): $300-600/month</li>
              </ul>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 90-Day Onboarding Reality</h2>
              <p className="text-lg text-gray-600">For the first 60 days, your business will be slower, not faster</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-4">
            <CardContent className="p-6">
              <Badge className="bg-red-600 text-white mb-3">Days 1-30</Badge>
              <p className="text-gray-800 leading-relaxed mb-2">
                Even experienced VAs need time to understand your business, chart of accounts, and processes. Plan to spend 8-10 hours this month on training. Output quality will be 60-70% of where it needs to be. If you don't have documented procedures, your VA is guessing—they'll guess wrong frequently.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-4">
            <CardContent className="p-6">
              <Badge className="bg-amber-600 text-white mb-3">Days 31-60</Badge>
              <p className="text-gray-800 leading-relaxed mb-2">
                Your VA produces more consistent work but you're still doing meaningful review. Quality is 80-85% there. Time investment drops to 4-6 hours weekly. If you're not tracking what drives results, neither you nor your VA knows what's working.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <Badge className="bg-green-600 text-white mb-3">Days 61-90</Badge>
              <p className="text-gray-800 leading-relaxed mb-2">
                Quality is consistently 90-95%. Your VA brings process improvements, not just executes assignments. You're spending 2-3 hours weekly on strategic direction and approvals. This is when accounting VAs start delivering actual ROI.
              </p>
              <p className="text-gray-800 font-semibold mt-4">
                By day 90, if your VA isn't producing work you'd confidently rely on with minimal review, something went wrong. Don't continue hoping they'll improve—either intensify training or admit the match isn't working.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Philippines vs Latin America Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Philippines vs Latin America vs USA</h2>
              <p className="text-lg text-gray-600">The hidden cost of time zones</p>
            </div>
          </div>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Philippines Reality:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Philippines virtual assistants work during US business hours, which means they're working graveyard shifts (Manila is -12 to -16 hours behind the US).
              </p>
              <h4 className="font-bold text-gray-900 mb-2">What This Causes:</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Higher VA burnout and turnover</li>
                <li>• Health issues from disrupted sleep patterns</li>
                <li>• Quality declines over time</li>
                <li>• Holidays don't align (different days off)</li>
                <li>• "Brownouts" (power outages) disrupt work</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Latin America Alternative:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Latin America offers -1 to -3 hour time zones from US East Coast, enabling real-time collaboration.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-700 mb-2"><strong>Cost:</strong> 20-40% more ($15-25/hr vs $10-15/hr)</p>
                <p className="text-sm text-gray-700"><strong>Benefit:</strong> Same-day communication, better long-term retention</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Australian/NZ businesses:</h3>
              <p className="text-gray-800 leading-relaxed">
                Philippines = +2 to +4 hours (better alignment!). Filipino assistants work during overlapping daylight hours, enabling seamless collaboration without night shifts.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Freelancer vs Agency Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Freelancer vs Agency: The $10,000 Decision</h2>
              <p className="text-lg text-gray-600">The real math behind both options</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Freelancer (Upwork/Fiverr):</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Pros:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Cheaper ($8-15/hr vs $25-35/hr agency)</li>
                    <li>• Direct relationship</li>
                    <li>• No long-term contracts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Cons:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 70-80% estimated failure rate</li>
                    <li>• Juggling 3-5 clients (you're not priority)</li>
                    <li>• No backup if sick/quits</li>
                    <li>• YOU handle payroll, equipment, HR</li>
                    <li>• Time investment: 40+ hours screening candidates</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Agency:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Pros:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 60-70% success rate</li>
                    <li>• Vetted candidates (top 1-3% only)</li>
                    <li>• Backup coverage built-in</li>
                    <li>• Replacement guarantee</li>
                    <li>• Faster hiring (7-14 days vs months)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Cons:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 30-40% more expensive</li>
                    <li>• Less flexibility in VA selection</li>
                    <li>• Long-term contracts (6-12 months)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Math:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">FREELANCER PATH:</h4>
                  <div className="space-y-1 text-sm text-gray-700 mb-3">
                    <p>Try VA #1: $1,000/month × 3 months = $3,000 (didn't work out)</p>
                    <p>Try VA #2: $1,000/month × 2 months = $2,000 (disappeared)</p>
                    <p>Try VA #3: $1,000/month × 3 months = $3,000 (finally works!)</p>
                  </div>
                  <p className="font-bold text-gray-900">TOTAL: $8,000 + 8 months of frustration</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">AGENCY PATH:</h4>
                  <div className="space-y-1 text-sm text-gray-700 mb-3">
                    <p>Month 1: $1,800 (works from start)</p>
                  </div>
                  <p className="font-bold text-gray-900">Month 8: $14,400 total invested</p>
                  <p className="text-sm text-green-700 font-semibold mt-2">Difference: $6,400 more, but 8 months of productivity vs frustration</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Common Mistakes Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Tasks Your Accounting VA Will Screw Up (And How to Prevent It)</h2>
              <p className="text-lg text-gray-600">Most common errors and prevention systems</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Most Common Errors:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Miscategorizing Expenses - Impacts tax deductions significantly</li>
                <li>• Missing Billable Time/Expenses - Direct revenue loss</li>
                <li>• Incorrect Sales Tax - Compliance nightmares</li>
                <li>• Duplicate Entries - Makes reports worthless</li>
                <li>• Reconciliation Shortcuts - "Fixing" discrepancies with mystery entries</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Prevention System:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Weekly VA review meetings (30 minutes)</li>
                <li>• Monthly CPA review ($200-500/month)</li>
                <li>• Spot-check 10% of entries randomly</li>
                <li>• Clear escalation policy ("when in doubt, ask")</li>
                <li>• Loom video for every process (one-time 20-hour investment)</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Are You Ready?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Accounting VAs work brilliantly for the right businesses at the right time. They fail spectacularly for everyone else.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              If you're doing $250K+ in annual revenue, have 30+ transactions weekly, documented processes, and can commit 10+ hours weekly for training/management initially—an accounting VA can save you $25,000-45,000 annually versus local hires.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              If you're under $250K revenue, still figuring out your business model, or have no documented procedures—you're not ready yet. Focus on building systems first. Come back when you've got actual processes to delegate.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              At ShoreAgents, we place full-time Filipino accounting VAs at $1,200-2,500/month. But we only work with businesses who are actually ready—meaning documented systems, realistic expectations about the 18-24 month break-even, and commitment to proper training.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed font-semibold">
              Sometimes the most valuable thing we do is tell a prospect they should wait another 6-12 months until their business is ready. That honesty might cost us a sale today, but it builds the trust that creates long-term partnerships tomorrow.
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
            The business owners who ARE ready will trust you infinitely more because you were honest about who ISN'T ready. This builds a qualification moat that competitors selling to everyone cannot replicate.
          </p>
        </div>
      </div>
    </div>
  );
}
