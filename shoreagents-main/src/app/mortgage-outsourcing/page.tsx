"use client";

import { SideNav } from "@/components/layout/SideNav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle2,
  XCircle,
  DollarSign,
  Clock,
  AlertTriangle,
  AlertCircle,
  ArrowRight,
  Building2,
  Shield,
  FileText,
  Scale,
  TrendingUp,
  Globe
} from "lucide-react";
import Link from "next/link";

export default function MortgageOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For $75M+ Annual Originations
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Mortgage Outsourcing:<br />
              <span className="text-lime-600">When $5,000 Daily Fines Meet Your $15/Hour VA</span>
        </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              RESPA violations carry penalties of <strong>$5,000 to $25,000 per day</strong>. Your lender remains 100% liable even if your 
              outsourced processor makes the mistake. That's the reality every mortgage BPO provider conveniently forgets to mention until 
              after you've signed the contract.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/pricing" 
                className="inline-flex items-center px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors"
              >
                Get Mortgage Quote
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
            The USA mortgage outsourcing market is heading toward $1.23 trillion by 2033, driven by a genuine crisis: lenders can't find 
            qualified staff, margins are compressed to nothing, and volume swings of 60% between rate cycles make fixed staffing impossible. 
            Close to <strong>90% of USA mortgage lenders now outsource some functions</strong>.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            But here's what nobody discusses until you're three months in and bleeding money: most mortgage outsourcing implementations fail 
            because lenders don't understand which tasks legally CANNOT be outsourced, what "trained teams" actually means (spoiler: not trained 
            on YOUR systems), and why that "$10-15/hour" rate hides $60,000+ in first-year costs you never saw coming.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This is a USA-focused guide</strong> because that's where "mortgage outsourcing" is actually searched and the industry 
                is mature enough to support it. If you're originating under $50-75M annually, you probably shouldn't outsource yet. If you're 
                doing $75M+ with documented workflows and cloud-based LOS systems, keep reading.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Legal Landmine Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Legal Landmine Nobody Warns You About</h2>
              <p className="text-lg text-gray-600">Here's the list every mortgage outsourcing provider avoids publishing</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-900 mb-4">Absolutely Prohibited in USA:</h3>
                <ul className="space-y-2">
                  {[
                    "Licensed loan originator activities (most states require MLO license)",
                    "Final underwriting approval (judgment calls requiring license)",
                    "Notarization (must be done by licensed USA notary)",
                    "Legal advice to borrowers",
                    "Final compliance sign-off (lender officer must certify)",
                    "Fraud determination (final decision must be licensed professional)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-4">High-Risk to Outsource:</h3>
                <ul className="space-y-2">
                  {[
                    "Income/employment verification (fraud risk if not properly trained)",
                    "Appraisal review (requires specialized license in some states)",
                    "Initial disclosures (timing-critical, TILA violations $5,000-25,000/day)",
                    "Borrower-facing negotiations (customer experience risk)",
                    "Complex scenario underwriting (non-QM, exceptions)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">Safe to Outsource:</h3>
                <ul className="space-y-2">
                  {[
                    "Data entry (CRM updates, document upload to LOS)",
                    "Document collection (ordering items from third parties)",
                    "File organization (arranging docs in loan origination system)",
                    "Preliminary title work (ordering, initial review)",
                    "Conditions tracking (checklist management)",
                    "Post-closing file prep (document packaging)",
                    "Quality control review (checklist verification, non-judgment)",
                    "Customer service (status updates, general questions)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-red-100 border-l-4 border-red-600">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                <strong>The Reality:</strong> California lender outsourced "loan processing" to Philippines. State regulators determined 
                activities required CA license. Result: <strong>$500,000+ fine</strong>, had to redo two years of loans, multiple borrowers 
                sued. This isn't hypothetical—it's documented reality from the research.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Compliance Trap Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Compliance Trap: You Remain 100% Liable</h2>
              <p className="text-lg text-gray-600">CFPB guidance is crystal clear</p>
            </div>
          </div>
          
          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                CFPB guidance is crystal clear: <strong>"If you use a third-party mortgage loan servicer, your institution remains responsible 
                for vendor compliance and risk management."</strong>
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-900 mb-4">RESPA Violations (Real Estate Settlement Procedures Act):</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Section 8 prohibits kickbacks: If your offshore team has ANY referral relationships (even innocent), you're liable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Disclosure timing requirements: Loan Estimate within 3 business days, Closing Disclosure 3 days before closing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Escrow administration: #1 violation area in 2023 (Federal Reserve data)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Fines: $5,000-10,000 per violation, up to $25,000/day for extreme violations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Criminal liability possible for RESPA violations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-900 mb-4">TILA Violations (Truth in Lending Act):</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Integrated with RESPA in TRID (TILA-RESPA Integrated Disclosure)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Precise timing requirements—time zone differences create timing risks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Missed deadlines = violations = delayed closings = angry borrowers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The True Cost of "Compliant" Outsourcing:</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Base outsourcing cost:</span>
                  <span className="font-semibold">$100,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Compliance oversight officer:</span>
                  <span className="font-semibold">$75,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Quarterly on-site audits:</span>
                  <span className="font-semibold">$30,000 (4 × $7,500)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Enhanced cyber insurance:</span>
                  <span className="font-semibold">$15,000</span>
                </div>
                <Separator className="my-3" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">TOTAL YEAR 1:</span>
                  <span className="font-bold text-blue-600">$220,000</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-gray-600">What they quoted:</span>
                  <span className="text-gray-600">$100,000</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">Reality:</span>
                  <span className="font-bold text-red-600">$220,000 (+120%)</span>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                Most lenders don't budget for the compliance layer. That's why Gartner predicts 60% of finance and accounting outsourcing 
                contracts won't be renewed by 2025—the true costs emerge after signing.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* $1M/Week Rule Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The $1M/Week Origination Rule</h2>
              <p className="text-lg text-gray-600">Here's the threshold nobody discusses</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Here's the threshold nobody discusses: if you're originating less than $50-75M annually ($1M+ per week sustained), mortgage 
            outsourcing typically costs MORE than just hiring locally when you account for true implementation costs.
          </p>

          <Card className="border-gray-300 bg-gray-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Break-Even Analysis (Small Lender):</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 mb-2"><strong>Origination Volume:</strong> $30M/year</p>
                  <p className="text-gray-700 mb-2"><strong>Loan count:</strong> ~100 loans/year</p>
                  <p className="text-gray-700"><strong>Processing time:</strong> 15-20 hours/loan average</p>
                </div>
                <Separator />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">In-House Option:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>1 processor: $55,000 salary + $20,000 benefits = $75,000/year</li>
                      <li>Handles 100-150 loans comfortably</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Outsourcing Option:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Processing: $15/hr × 1,750 hours = $26,250</li>
                      <li>Management: 5 hrs/wk × $75/hr × 52 = $19,500</li>
                      <li>Setup/integration: $15,000 (first year)</li>
                      <li>Software access: $3,600</li>
                      <li>Quality control: $10,000</li>
                      <li className="font-bold">TOTAL: $74,350 (ongoing $59,350)</li>
                    </ul>
                  </div>
                </div>
                <Separator />
                <p className="text-gray-800 font-semibold text-center">
                  Result: Break-even or HIGHER cost with less control.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">When It Actually Makes Sense:</h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "$75M+ annual originations (consistent volume)",
                  "Cyclical spikes you can't staff for (refinance booms)",
                  "Growth mode (scaling from $50M to $150M+)",
                  "Compliance-heavy operations needing specialized expertise",
                  "After-hours coverage (West Coast lenders, East Coast borrowers)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-800 font-semibold mt-4">
                If you're under that threshold, you're not saving money—you're creating expensive complexity for minimal benefit.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 90-Day Reality: Why You'll Be Slower First</h2>
              <p className="text-lg text-gray-600">Every mortgage BPO provider promises "trained teams ready day one!"</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                period: "Days 1-30",
                periodColor: "bg-red-600",
                title: "The Productivity Drop",
                description: "Your productivity DROPS 30-40% (documented in implementations). You're creating training materials (40-80 hours of your time). Daily calls with offshore team (1-2 hours/day). Fixing mistakes from learning curve. Reassuring borrowers about delays. Internal team resisting change.",
                details: "Temptation to quit is HIGHEST. \"Easier to just do it myself\" becomes your daily mantra.",
                borderColor: "border-red-300",
                bgColor: "bg-red-50",
                textColor: "text-red-700"
              },
              {
                period: "Days 30-60",
                periodColor: "bg-amber-600",
                title: "The Frustration Valley",
                description: "Still not break-even on time investment. Offshore team needs less hand-holding but frequent questions remain. Quality inconsistent (some loans perfect, others need rework). Communication gaps emerging from time zone differences. 12-16 hour delays on responses.",
                details: "You're spending 5-10 hours/week managing. Break-even point: NOT saving time yet.",
                borderColor: "border-amber-300",
                bgColor: "bg-amber-50",
                textColor: "text-amber-700"
              },
              {
                period: "Days 60-90",
                periodColor: "bg-blue-600",
                title: "The Turning Point",
                description: "Starting to see light. Offshore team handling routine tasks independently. Quality improving and becoming consistent. Management time drops to 3-5 hours/week. Small time savings beginning.",
                borderColor: "border-blue-300",
                bgColor: "bg-blue-50"
              },
              {
                period: "Days 90-180",
                periodColor: "bg-green-600",
                title: "The Payoff",
                description: "Finally getting value. Offshore team productive (15-20 hours/week of work handled). You've reclaimed 10-12 hours/week. Quality consistent. Management 2-3 hours/week. ROI becoming real.",
                borderColor: "border-green-300",
                bgColor: "bg-green-50"
              }
            ].map((phase, index) => (
              <Card key={index} className={`${phase.borderColor} ${phase.bgColor}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Badge className={`${phase.periodColor} text-white`}>{phase.period}</Badge>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                      <p className="text-gray-700 leading-relaxed mb-3">{phase.description}</p>
                      {phase.details && (
                        <p className={`${phase.textColor} font-semibold`}>{phase.details}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-lime-300 bg-lime-50 mt-8">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed">
                Gelt Financial's Jack Miller saw this timeline: his team member earned perfect 5/5 ratings, but it took months of proper 
                training and system integration before they reached the point where she was "going out of her comfort zone on certain tasks" 
                and confidently "speaking to potential borrowers and brokers" to generate leads that "led to loan originations."
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* True Cost Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The True Cost Beyond "$10-15/Hour"</h2>
              <p className="text-lg text-gray-600">Every mortgage outsourcing provider leads with the hourly rate</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hidden Implementation Costs:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>Process Documentation: 40-80 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>System Integration: $10,000-50,000</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>Training Materials Creation: 40-80 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>Offshore Team Training: 30-60 days</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>Quality Control Setup: $5,000-20,000</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>Management Time: 10-15 hours/week for first 90 days</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ongoing Hidden Costs:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Management Overhead: 5-10 hours/week (supervisor/QC role)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>System Access/Licenses: $50-200/user/month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Additional Software: CRM access, VPN, communication tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Travel for Audits: $5,000-10,000 annually</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Rework from Errors: Variable but significant during ramp-up</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">True First Year Cost Example:</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Offshore team (3 FTE):</span>
                  <span className="font-semibold">$15/hr × 6,240 hrs = $93,600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Implementation costs:</span>
                  <span className="font-semibold">$25,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Internal management:</span>
                  <span className="font-semibold">10 hrs/wk × 52 × $75/hr = $39,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software/systems:</span>
                  <span className="font-semibold">$7,200</span>
                </div>
                <Separator className="my-3" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">TOTAL YEAR 1:</span>
                  <span className="font-bold text-blue-600">$164,800</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-gray-600">Marketing Claim:</span>
                  <span className="text-gray-600">"Just $93,600 for 3 FTE!"</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">Hidden costs:</span>
                  <span className="font-bold text-red-600">+76%</span>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                By Year 2, costs drop significantly once implementation is complete, but most lenders don't survive Year 1 because they 
                weren't prepared for these realities.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Technology Integration Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-purple-100 rounded-full p-3">
              <FileText className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Technology Integration Myth</h2>
              <p className="text-lg text-gray-600">Provider Claim: "We work with all major LOS systems! Seamless integration!"</p>
            </div>
          </div>

          <Card className="bg-amber-50 border-l-4 border-amber-500 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                <strong>Reality:</strong> Every lender configures their LOS differently. Custom fields, unique workflows, specific automation 
                rules. Your offshore team needs:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold mt-1">•</span>
                  <span>VPN/remote access setup ($5,000-15,000)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold mt-1">•</span>
                  <span>Security compliance (2FA, IP restrictions)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold mt-1">•</span>
                  <span>Software licenses ($100-200/user/month for LOS access)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold mt-1">•</span>
                  <span>Training on YOUR specific configuration (20-30 hours)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What Actually Happens:</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Week 1:</strong> "We're experts in Encompass!"</p>
                <p><strong>Week 2:</strong> "Can you send screenshots of your workflows?"</p>
                <p><strong>Week 3:</strong> "We need 2 weeks training on your custom fields"</p>
                <p><strong>Week 4:</strong> "System is slow from Philippines, taking 2x longer"</p>
                <p><strong>Month 2:</strong> "We need these additional software modules"</p>
                <p><strong>Month 3:</strong> "Can we get admin access?" (Compliance red flag!)</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Cyclical Market Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Cyclical Market Trap</h2>
              <p className="text-lg text-gray-600">The 2022-2023 mortgage market taught an expensive lesson</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">2021 Market:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Refinance boom</li>
                  <li>$4.4T originations</li>
                  <li>Lenders hiring aggressively</li>
                  <li>Outsourcing booming</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">2023 Market:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Rates spike to 7%+</li>
                  <li>$1.64T originations (-63%!)</li>
                  <li>Mass layoffs (Wells Fargo, Rocket Mortgage: thousands)</li>
                  <li>Outsourcing contracts became anchors</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Problem:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You contract for 10 FTE offshore when volume is $200M/year. Volume drops 60% to $80M/year. You need only 4 FTE now. You're 
                paying for 10, using 4. That's <strong>$120,000 annually burning on unused capacity</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">Most contracts have:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>Minimum monthly commitments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>30-90 day notice periods</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>Termination fees (20-30% of contract value)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>Ramp-down restrictions</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What Works Better:</h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Shorter contracts (6 months max during volatile markets)",
                  "Variable pricing (per-loan vs per-FTE)",
                  "Hybrid model (small core team + surge capacity)",
                  "Project-based for cyclical work (refinance waves)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Trained Team Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The "Trained Team" Reality</h2>
              <p className="text-lg text-gray-600">Provider Claim: "Mortgage-trained professionals ready day one!"</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">What "Trained" Actually Means:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Understands mortgage terminology",
                    "Knows difference between purchase and refinance",
                    "Can navigate generic LOS (not YOURS specifically)",
                    "Understands DTI, LTV, FICO basics",
                    "Passed mortgage fundamentals test"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-900 mb-4">What "Trained" Does NOT Mean:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Knows YOUR specific LOS configuration",
                    "Understands YOUR workflows and policies",
                    "Familiar with YOUR loan products",
                    "Understands YOUR state's requirements",
                    "Knows YOUR borrower communication style",
                    "Can handle YOUR exception scenarios"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                <strong>Reality:</strong> "4-6 weeks general training" + "60-90 days learning YOUR business"
              </p>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Training You Still Have to Do:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <p>Your LOS system: 20-30 hours</p>
                  <p>Your workflows and checklists: 15-20 hours</p>
                  <p>Your loan products and guidelines: 10-15 hours</p>
                </div>
                <div>
                  <p>Your communication standards: 5-10 hours</p>
                  <p>Your exception handling: Ongoing</p>
                  <p>Your state-specific requirements: 10-15 hours</p>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                Total: 60-90 hours of YOUR time in first 90 days. Most lenders aren't prepared for this investment.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Self-Assessment Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Should You Actually Outsource? The Self-Assessment</h2>
          
          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-8">
              <p className="text-gray-800 font-semibold mb-6">Answer these honestly:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Annual origination volume exceeds $50-75M consistently",
                  "Currently originating 300+ loans annually",
                  "All workflows documented with written procedures",
                  "Using cloud-based LOS (Encompass, Calyx, BytePro, etc.)",
                  "Clear separation between licensed work (stays onshore) and clerical work (can offshore)",
                  "Management bandwidth of 10+ hours weekly for supervision (first 6 months)",
                  "Financial capacity to invest $100,000-150,000 in Year 1 before ROI appears",
                  "18-24 month commitment to implementation timeline",
                  "Understand RESPA/TILA compliance remains YOUR responsibility",
                  "E&O insurance covers offshore operations"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-gray-400 rounded mt-0.5 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <p className="text-gray-800 font-semibold">
                  If you checked fewer than 7 boxes: You're not ready for mortgage outsourcing yet. Focus on documentation, volume growth, 
                  and systems first.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <p className="text-gray-800 font-semibold">
                  If you checked 7-8 boxes: You're potentially ready, but need expert guidance to avoid the legal, compliance, and 
                  implementation pitfalls that sink most implementations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <p className="text-gray-800 font-semibold">
                  If you checked 9-10 boxes: You're operationally ready and positioned to succeed where most lenders fail.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Australia/NZ Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What About Australia and New Zealand?</h2>
              <p className="text-lg text-gray-600">While USA lenders dominate the "mortgage outsourcing" search volume</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                While USA lenders dominate the "mortgage outsourcing" search volume, lenders in Australia and New Zealand can leverage the same 
                strategies with similar economics.
              </p>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Differences:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Regulatory:</strong> AML/CFT compliance in Australia/NZ vs USA's RESPA/TILA requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Terminology:</strong> Australians search "mortgage virtual assistant" or "mortgage admin support" rather than "outsourcing"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Time Zone:</strong> Philippines is +2 to +4 hours ahead of Australia/NZ (better daytime overlap than USA's -12 to -16 hours)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Cost Savings:</strong> Similar 60-70% savings (offshore $25,000-35,000 annually vs local $60,000-90,000)</span>
                </li>
              </ul>
              <p className="text-gray-800 font-semibold mt-4">
                The principles remain identical: you need documented systems, appropriate volume ($30M+ AUD/NZD originations), and understanding 
                of which tasks can legally be outsourced under your regulatory framework.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Gelt Financial Case Study */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Real Success: The Gelt Financial Case Study</h2>
              <p className="text-lg text-gray-600">Jack Miller at Gelt Financial (USA mortgage lender)</p>
            </div>
          </div>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Jack Miller at Gelt Financial (USA mortgage lender) needed help with lead follow-up, YouTube marketing transcription, and 
                mortgage satisfaction processing. He started conservatively with one specialist through ShoreAgents.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Results:</h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                {[
                  "Perfect 5/5 performance ratings across all categories (work quality, communication, reliability, teamwork)",
                  "Direct revenue generation: Lead follow-up converted to actual loan originations",
                  "Multi-department coverage: One specialist handling marketing, sales, and operations",
                  "Strategic staff liberation: \"Helped free up other staff here to tackle projects\"",
                  "Management assessment: \"Very reliable...always exercises full cooperation with our team\""
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className="text-xl font-bold text-gray-900 mb-4">What Made It Work:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jack didn't jump in blindly. He took time to "fully train and orient" the VA on tasks. He ensured "full understanding before 
                undertaking any task." He built systems that allowed the team member to "go out of her comfort zone" and gain "confidence in 
                speaking to potential borrowers and brokers."
              </p>
              <p className="text-gray-800 font-semibold">
                Timeline: Months, not weeks. The testimonial doesn't claim instant success—it reflects the patient, systematic approach that works.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* ShoreAgents Difference Section */}
        <section className="mb-16">
          <Card className="bg-gray-900 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">The ShoreAgents Difference: Brutal Honesty About Readiness</h2>
              <p className="text-lg leading-relaxed mb-6">
                Most BPO providers will take your money regardless of readiness. We won't.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you're originating under $50M annually, we'll tell you to wait. If your systems aren't documented, we'll help you get 
                organised first. If you're trying to offshore licensed activities, we'll explain why it won't work.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our full-time Filipino staff cost $1,200-2,500/month depending on experience and role complexity. But we only work with 
                lenders who are actually ready—those doing $75M+ in originations with documented workflows and realistic 18-24 month 
                implementation timelines.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We handle recruitment, training, management, and backup coverage. But we can't fix undocumented systems, bypass licensing 
                requirements, or accelerate the 90-day ramp-up period. Nobody can.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Explore Mortgage Outsourcing?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              If you checked 9-10 boxes on the self-assessment, let's have an honest conversation about whether this makes sense for your operation.
            </p>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              We'll assess your volume, systems, compliance readiness, and management bandwidth. If you're ready, we'll explain exactly what 
              the first 90 days look like. If you're not ready, we'll tell you what needs to happen first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 bg-white text-lime-600 font-bold text-lg rounded-lg hover:bg-lime-50 transition-colors shadow-lg"
              >
                Get Mortgage Quote
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
            <p className="text-lime-100 mt-6 text-sm">
              Schedule a consultation where we discuss your specific situation. No sales pitch—just 15 years of experience telling it straight 
              about what works, what doesn't, and whether offshore mortgage staffing makes sense for your lending operation.
            </p>
            <p className="text-lime-100 mt-4 text-sm font-semibold">
              The 10% of lenders who succeed at mortgage outsourcing don't do it because they found magic offshore processors. They succeed 
              because they were operationally ready, understood legal boundaries, set realistic expectations, and committed to proper 
              implementation timelines.
            </p>
            <p className="text-lime-100 mt-4 font-bold">
              Are you in that 10%?
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
