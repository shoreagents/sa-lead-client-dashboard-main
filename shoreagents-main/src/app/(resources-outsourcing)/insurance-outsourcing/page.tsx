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

export default function InsuranceOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For $2M+ Annual Premiums
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Insurance Outsourcing:<br />
              <span className="text-lime-600">The Licensed Agent Trap That Could Cost You Your Business</span>
        </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Let me tell you what every insurance BPO provider conveniently forgets to mention: that <strong>$15/hour virtual assistant 
              you just hired cannot legally quote policies, sell insurance, or negotiate claims settlements in the USA.</strong> Licensed 
              insurance agent work cannot be outsourced offshore—period.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/pricing" 
                className="inline-flex items-center px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors"
              >
                Get Insurance Quote
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
            Yet I've watched dozens of insurance agencies sign contracts with offshore providers who promise "full-service support" without 
            mentioning this massive legal landmine. The average cost when an unlicensed offshore worker performs regulated insurance activities? 
            Between <strong>$167,000 and $2.1 million in fines</strong>, plus potential license suspension.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I've been placing offshore staff with insurance companies across the USA, Australia, and New Zealand for 15 years. I've seen it 
            work brilliantly when agencies understand exactly what can and cannot be outsourced. I've also watched spectacular failures where 
            business owners got sold a fantasy about "licensed insurance agents for $20/hour" that ended in regulatory violations.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This guide is for:</strong> Insurance agencies and brokers doing $2M+ in annual premiums with documented systems 
                and clear workflow processes. If you're a solo agent hoping to outsource client-facing sales work, stop reading—it's illegal 
                and I won't help you do it.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Legal Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Insurance Outsourcing Actually Means (The Legal Reality)</h2>
              <p className="text-lg text-gray-600">Insurance outsourcing means delegating back-office operations, not licensed work</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Insurance outsourcing means delegating back-office operations, data processing, policy administration, and non-licensed customer 
            service to offshore or nearshore teams. It does <strong>NOT</strong> mean outsourcing the work that requires USA insurance producer licensing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">CAN Be Outsourced Offshore ($10-20/hour):</h3>
                <ul className="space-y-2">
                  {[
                    "Policy data entry and administration",
                    "Claims documentation processing (not negotiation or settlement decisions)",
                    "Customer service for non-licensed general inquiries",
                    "Back-office clerical work and document management",
                    "Appointment scheduling and calendar management",
                    "Database updates and CRM maintenance"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-900 mb-4">CANNOT Be Outsourced Offshore (Requires USA-Licensed Agents at $48-65/hour):</h3>
                <ul className="space-y-2">
                  {[
                    "Quoting insurance products or premiums",
                    "Selling policies or coverage recommendations",
                    "Claims negotiation and settlement authority",
                    "Underwriting decisions or risk assessment",
                    "Any client-facing advice requiring producer licensing",
                    "Activities that require state-specific insurance knowledge"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-red-100 border-l-4 border-red-600">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                <strong>If any work done by subcontractors falls within activities requiring licensing, then such outside offices must be 
                appropriately licensed.</strong> That means your Philippines-based virtual assistant cannot legally perform most of the tasks 
                competitors claim they can handle.
              </p>
              <p className="text-gray-800 leading-relaxed">
                The BPO companies advertising "$15/hour licensed insurance agents" are either: (1) maintaining expensive onshore USA-licensed 
                teams they don't disclose in pricing, or (2) setting you up for regulatory violations that'll cost exponentially more than 
                the "savings."
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Australia APRA Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Australia Difference: APRA's Material Business Activity Rules</h2>
              <p className="text-lg text-gray-600">Australian insurers face a completely different regulatory framework</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Australian insurers face a completely different regulatory framework that most offshore providers completely ignore.
          </p>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Australia's APRA Prudential Standard CPS 231 requires that outsourcing of "material business activities" must be notified to 
                APRA within 20 business days. A material business activity is defined as anything that, if disrupted, could significantly 
                impact your operations or risk management capability.
              </p>
              <h3 className="text-lg font-bold text-gray-900 mb-3">What This Means Practically:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>You must notify APRA before outsourcing claims processing, policy administration, or customer service operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Offshore arrangements require explicit consultation with APRA</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Breach of CPS 231 constitutes a breach of underlying legislation (serious legal exposure)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Ongoing monitoring and audit requirements are mandatory</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                Australian insurance companies can't just sign a BPO contract and start offshoring. There's a regulatory approval process, 
                compliance documentation requirements, and ongoing oversight obligations that add significant administrative overhead.
              </p>
              <p className="text-gray-800 font-semibold mt-4">
                Most BPO marketing materials completely ignore APRA requirements. They'll show you cost savings without mentioning the 20-day 
                notification timeline, consultation obligations, or audit requirements. Then six months later, you're facing regulatory 
                compliance issues because nobody told you about CPS 231.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Cost Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The $48-65/Hour Reality Nobody Discusses</h2>
              <p className="text-lg text-gray-600">Here's what the cost comparison actually looks like</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">USA Market Reality:</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Advertised offshore rate:</span>
                  <span className="font-semibold">$10-20/hour for "insurance support"</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Actual offshore rate (non-licensed work only):</span>
                  <span className="font-semibold text-green-600">$10-20/hour ✓</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">USA-licensed insurance agents:</span>
                  <span className="font-semibold">$48-65/hour (required for sales, quotes, claims decisions)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your actual blended cost:</span>
                  <span className="font-semibold">$25-45/hour depending on task mix</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Hidden Cost Breakdown:</h3>
              <p className="text-gray-700 mb-4">
                If 60% of your work requires licensing (quotes, sales, claims decisions) and 40% is clerical:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">60% at $48-65/hour (licensed USA agents):</span>
                  <span className="font-semibold">$28.80-39/hour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">40% at $15/hour (offshore clerical):</span>
                  <span className="font-semibold">$6/hour</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">Blended reality:</span>
                  <span className="font-bold text-red-600">$34.80-45/hour</span>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                Compare that to the "$15/hour full insurance support" fantasy being sold. The math doesn't work because it's not legal.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Australia Reality:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Labor costs for offshore staff are similar ($10-20/hour AUD), but APRA compliance overhead adds:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Notification and consultation administrative time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Enhanced audit and monitoring requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Documentation and reporting obligations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Legal review of outsourcing agreements</span>
                </li>
              </ul>
              <p className="text-gray-800 font-semibold mt-4">
                Australian insurers save money through offshore support, but the compliance burden is significantly higher than BPO providers disclose.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When It Works Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When Insurance Outsourcing Actually Works</h2>
              <p className="text-lg text-gray-600">Insurance outsourcing succeeds under specific conditions</p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Volume Threshold: $2M+ Annual Premiums</h3>
                <p className="text-gray-700 leading-relaxed">
                  Below $2M in annual premiums, you don't have enough back-office volume to justify the implementation overhead. The first 
                  3-6 months are training-intensive regardless of BPO claims about "insurance-trained staff ready day one."
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Your offshore team needs to learn YOUR specific systems, YOUR state regulations (if USA), YOUR product nuances, and YOUR 
                  workflows. That training investment only makes financial sense when you have sufficient transaction volume to generate ROI.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Process Documentation Exists</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you can't document exactly how a task should be completed, you can't outsource it effectively. Offshore staff need written 
                  procedures, system screenshots, decision trees, and quality standards.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">Agencies that succeed have documented workflows for:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span>Policy data entry procedures (step-by-step with screenshots)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span>Claims documentation requirements (exactly what information goes where)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span>Customer service response templates (approved answers for common questions)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span>Error checking protocols (what constitutes acceptable vs rejected work)</span>
                  </li>
                </ul>
                <p className="text-gray-800 font-semibold mt-4">
                  If your current process is "Sarah just knows how to do it," you're not ready for outsourcing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Clear Licensing Boundaries Established</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Successful agencies have absolutely clear definitions of:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span>Which tasks require USA licensing (stay onshore)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span>Which tasks are purely clerical (can move offshore)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span>Escalation protocols (when offshore encounters licensed work)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span>Quality control processes (who reviews offshore output)</span>
                  </li>
                </ul>
                <p className="text-gray-800 font-semibold">
                  The agencies I've watched fail are the ones who blur these lines—letting offshore staff "just help with quotes" or 
                  "provide some claim guidance." That's how regulatory violations happen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technology Infrastructure Ready</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Your offshore team needs secure access to:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span>Policy management systems (with appropriate permission levels)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span>CRM and client databases (with data security protocols)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span>Communication platforms (phone, email, chat systems)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span>Document management and workflow tools</span>
                  </li>
                </ul>
                <p className="text-gray-800 font-semibold mt-4">
                  If you're still running on paper files and local desktop software, outsourcing won't work. You need cloud-based systems 
                  with proper security, access controls, and audit trails.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* 90-Day Implementation Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-100 rounded-full p-3">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 90-Day Implementation Reality</h2>
              <p className="text-lg text-gray-600">Here's the honest timeline for insurance outsourcing that actually works</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                period: "Days 1-30",
                periodColor: "bg-red-600",
                title: "Training Phase (Almost No Productivity)",
                description: "Your offshore team is learning systems, processes, and insurance basics. They make lots of mistakes. You're spending 10-15 hours weekly training, reviewing work, and correcting errors.",
                details: "Expect: 20-30% productivity compared to experienced staff. Your time investment: 10-15 hours weekly. Actual cost: Base rate + YOUR training time ($$$)",
                borderColor: "border-red-300",
                bgColor: "bg-red-50"
              },
              {
                period: "Days 31-60",
                periodColor: "bg-amber-600",
                title: "Supervised Productivity (Still Lots of Hand-Holding)",
                description: "Offshore team is handling routine tasks independently but needs frequent guidance on exceptions, edge cases, and anything non-standard.",
                details: "Expect: 50-60% productivity. Your time investment: 5-8 hours weekly supervision. Error rate: Still 8-12% (requires your time to fix)",
                borderColor: "border-amber-300",
                bgColor: "bg-amber-50"
              },
              {
                period: "Days 61-90",
                periodColor: "bg-blue-600",
                title: "Independent Operations Beginning",
                description: "Offshore team handles standard workflows independently. You're reviewing quality samples rather than checking every piece of work.",
                details: "Expect: 70-80% productivity. Your time investment: 3-5 hours weekly oversight. Error rate: Down to 5-8% (approaching acceptable)",
                borderColor: "border-blue-300",
                bgColor: "bg-blue-50"
              },
              {
                period: "Month 4-6",
                periodColor: "bg-green-600",
                title: "Actual ROI Starts",
                description: "This is when offshore insurance support actually begins delivering the cost savings and efficiency gains BPO providers promise on day one.",
                details: "Expect: 80-90% productivity. Your time investment: 2-3 hours weekly management. Error rate: 3-5% (manageable and improving)",
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
                      <p className="text-gray-700 text-sm">{phase.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gray-100 border-l-4 border-gray-600 mt-8">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold mb-2">⚠️ The Hard Truth:</p>
              <p className="text-gray-700 leading-relaxed">
                The agencies that fail are the ones who expect immediate ROI. They hire offshore support, see high costs and errors in month 
                one, panic, and terminate the relationship before reaching the productive phase.
              </p>
              <p className="text-gray-800 font-semibold mt-4">
                Successful insurance outsourcing requires commitment to the 6-month implementation timeline and acceptance that first-quarter 
                costs will exceed first-quarter savings.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Tasks Never Outsource Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Tasks You Should Never Outsource</h2>
              <p className="text-lg text-gray-600">Some insurance work cannot or should not move offshore</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-4">Legally Prohibited:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Insurance sales requiring producer licensing (USA)",
                  "Premium quoting and coverage recommendations (USA)",
                  "Claims settlement decisions and negotiations (USA)",
                  "Underwriting authority and risk assessment (USA)",
                  "Any activity requiring state-specific insurance licensing (USA)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-4">High Risk of Regulatory Violations:</h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Client-facing advice on coverage adequacy",
                  "Recommendations on policy changes or additions",
                  "Communications that could be construed as sales activity",
                  "Anything involving professional judgment on risk"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-gray-300 bg-gray-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality/Relationship Critical:</h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Complex claims requiring deep knowledge of your coverage forms",
                  "High-value client relationships where accent/cultural differences matter",
                  "Unique situations requiring extensive industry experience",
                  "Emergency response situations requiring immediate local knowledge"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-gray-600 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What You Can Outsource Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What You Can Successfully Outsource</h2>
              <p className="text-lg text-gray-600">Once you understand the legal boundaries and have proper infrastructure</p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">Policy Administration (Perfect Fit):</h3>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Data entry from applications and submissions",
                    "Policy renewal processing and documentation",
                    "Certificate of insurance generation and tracking",
                    "Endorsement processing (non-complex standard changes)",
                    "Database updates and record maintenance"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-800 font-semibold mt-4">
                  Real example: A Melbourne insurance broker outsourced policy data entry and certificate processing. Offshore team handles 
                  200+ certificates weekly, reduced turnaround from 48 hours to 4 hours, zero errors in six months of operation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Claims Documentation (Not Claims Decisions):</h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  {[
                    "First Notice of Loss (FNOL) data entry",
                    "Claims file documentation and organization",
                    "Loss runs and claims status reporting",
                    "Document collection and management",
                    "Claims correspondence and follow-up (non-settlement)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-800 font-semibold">
                  Critical distinction: Offshore staff can DOCUMENT claims, but cannot make settlement decisions, negotiate amounts, or provide 
                  coverage opinions. Those require licensed adjusters or USA-licensed agents.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Service (Non-Licensed Inquiries):</h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  {[
                    "General policy information questions",
                    "Payment processing and billing inquiries",
                    "Address changes and routine updates",
                    "Appointment scheduling with licensed agents",
                    "Document requests and follow-up"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-800 font-semibold">
                  The key: Offshore customer service must escalate immediately when questions require licensed expertise. You need crystal-clear 
                  escalation protocols and regular quality monitoring.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-300 bg-purple-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Back-Office Operations:</h3>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Commission tracking and reporting",
                    "Compliance documentation and file audits",
                    "Marketing support and campaign management",
                    "Database cleanup and data hygiene",
                    "Report generation and administrative tasks"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-800 font-semibold mt-4">
                  These tasks are time-consuming but don't require insurance licensing or complex judgment. They're perfect candidates for 
                  offshore support.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Real Cost Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Real Cost of Insurance Outsourcing</h2>
              <p className="text-lg text-gray-600">Let's be honest about what insurance outsourcing actually costs</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Base BPO Investment:</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Offshore staff rate:</span>
                    <span className="font-semibold">$1,500-2,500/month per person</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Management platform/tools:</span>
                    <span className="font-semibold">$600-1,800/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Communication systems:</span>
                    <span className="font-semibold">$300-900/year</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Your Hidden Costs (First Year):</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Documentation creation:</span>
                    <span className="font-semibold">$3,000-4,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Training time:</span>
                    <span className="font-semibold">$6,000-9,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Error correction:</span>
                    <span className="font-semibold">$4,500-6,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Ongoing supervision:</span>
                    <span className="font-semibold">$26,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Legal/compliance review:</span>
                    <span className="font-semibold">$2,000-5,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Australia-Specific Additional Costs:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>APRA notification and consultation: $3,000-8,000 (legal review, documentation preparation)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Enhanced audit requirements: $2,000-5,000 annually</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Compliance monitoring overhead: Additional management time</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">First-Year Reality:</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Base offshore cost:</span>
                    <span className="font-semibold">$18,000-30,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Implementation overhead:</span>
                    <span className="font-semibold">$41,500-76,500</span>
                  </div>
                  <Separator className="my-3" />
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">Total first-year investment:</span>
                    <span className="font-bold text-red-600">$59,500-106,500</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">Effective hourly rate:</span>
                    <span className="font-bold text-red-600">$28-51/hour</span>
                  </div>
                  <p className="text-gray-600 text-xs mt-2">(not the advertised $10-20/hour)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Year Two Reality (When ROI Actually Appears):</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Base offshore cost:</span>
                    <span className="font-semibold">$18,000-30,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Minimal training (replacement hires only):</span>
                    <span className="font-semibold">$3,000-6,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Ongoing supervision (reduced):</span>
                    <span className="font-semibold">$15,600</span>
                  </div>
                  <Separator className="my-3" />
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">Total year-two cost:</span>
                    <span className="font-bold text-lime-600">$36,600-51,600</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">Effective hourly rate:</span>
                    <span className="font-bold text-lime-600">$17-25/hour</span>
                  </div>
                  <p className="text-gray-600 text-xs mt-2">(NOW you're seeing actual savings)</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-100 border-l-4 border-gray-600 mt-8">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                Break-even typically occurs between months 18-24 for insurance outsourcing. Agencies that expect immediate ROI get 
                disappointed and quit before reaching profitability.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Self-Assessment Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Self-Assessment: Should You Outsource Insurance Operations?</h2>
          
          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-8">
              <p className="text-gray-800 font-semibold mb-6">Answer these honestly:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Annual premium volume exceeds $2M",
                  "Transaction volume is 500+ policies or 200+ claims annually",
                  "All workflows are documented with written procedures",
                  "Using cloud-based policy and claims management systems",
                  "Clear separation between licensed work (stays onshore) and clerical work (can offshore)",
                  "Management bandwidth of 5+ hours weekly for supervision (first 6 months)",
                  "Financial capacity to invest $60,000-100,000 in first year before ROI appears",
                  "18-24 month commitment to implementation timeline",
                  "Understand regulatory requirements (USA licensing restrictions, APRA compliance for Australia)",
                  "E&O insurance reviewed for offshore operations coverage"
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
                  If you checked fewer than 7 boxes: You're not ready for insurance outsourcing yet. Focus on documentation, systems 
                  implementation, and volume growth first.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <p className="text-gray-800 font-semibold">
                  If you checked 7-8 boxes: You're potentially ready, but need expert guidance to avoid common pitfalls. Implementation 
                  will be challenging but possible.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <p className="text-gray-800 font-semibold">
                  If you checked 9-10 boxes: You're operationally ready for insurance outsourcing and positioned to succeed where most 
                  agencies fail.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Ready to Explore Section */}
        <section className="mb-16">
          <Card className="bg-gray-900 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">Ready to Explore Insurance Outsourcing Properly?</h2>
              <p className="text-lg leading-relaxed mb-6">
                ShoreAgents specialises in placing Filipino administrative staff with insurance agencies across the USA, Australia, and 
                New Zealand. Our full-time offshore team members cost $1,200-2,500/month depending on experience and role complexity.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                But here's what makes us different: we'll tell you if you're not ready yet.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                If your annual premiums are under $2M, we'll be honest that you should wait. If your licensing boundaries aren't clear, 
                we'll help you establish them before hiring. If you're trying to offshore tasks that require USA producer licensing, we'll 
                tell you it's illegal and won't work.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                We only succeed when you succeed. And that means being brutally honest about when offshore staffing makes sense—and when it doesn't.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Most insurance outsourcing fails because agencies hire the wrong tasks at the wrong time with unrealistic expectations. The 
                successful 30% understand legal boundaries, commit to proper implementation timelines, and have documented systems ready for 
                offshore execution.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Want to Discuss Whether Insurance Outsourcing Is Right for Your Agency?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Contact our team for a frank conversation about your situation. We'll tell you what's realistic, what's not, and whether we're 
              the right fit. No sales pitch—just 15 years of experience telling it straight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 bg-white text-lime-600 font-bold text-lg rounded-lg hover:bg-lime-50 transition-colors shadow-lg"
              >
                Get Insurance Quote
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
              Insurance outsourcing works brilliantly when implemented properly by ready agencies with realistic expectations. Are you there yet?
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
