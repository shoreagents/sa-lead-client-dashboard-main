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
  Globe,
  Users
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";

export default function LegalOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['legal-outsourcing']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              September 2025 Search Spike
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Legal Outsourcing:<br />
              <span className="text-lime-600">September's Search Spike Just Changed Everything</span>
        </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Something happened in September 2025 that legal outsourcing providers aren't talking about yet. Search interest for "legal 
              outsourcing" in the United States hit 100 on the Google Trends index—the highest point in over a year. In Australia, the 
              October spike went from near-zero to 100 overnight. The legal industry just woke up to offshore staffing en masse, and I'm 
              watching law firms make the same catastrophic mistakes I've seen destroy property management companies, construction businesses, 
              and accounting firms over the past 15 years.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/pricing" 
                className="inline-flex items-center px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors"
              >
                Get Legal Quote
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
            Here's what's about to happen: tens of thousands of law firms will hire their first legal process outsourcing provider in the 
            next six months. Within 90 days, <strong>70% of those relationships will fail spectacularly</strong>—missed privilege protections, 
            quality control disasters, compliance nightmares, and blown budgets that make the "$15/hour" rate look like complete rubbish.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The 30% who succeed won't do it because they found better offshore providers. They'll succeed because they understood something 
            fundamental that every competitor selling legal outsourcing won't tell you: <strong>most law firms aren't ready for it yet.</strong>
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This guide is for:</strong> Established law firms doing $500K+ annual revenue with documented systems, consistent 
                workflow, and realistic expectations about implementation timelines. If you're a solo practitioner hoping to save time 
                immediately, or a small firm with inconsistent processes expecting offshore staff to "figure it out," stop reading now. 
                You're not ready, and I'd rather tell you that honestly than take your money and watch you fail in 90 days.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Attorney-Client Privilege Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Attorney-Client Privilege Problem Nobody Discusses</h2>
              <p className="text-lg text-gray-600">Before we talk about costs or tasks, we need to address the elephant</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Every legal outsourcing provider will assure you they're "fully compliant" and "ABA approved." What they won't tell you is that 
            privilege protection in offshore legal work remains legally murky, varies by jurisdiction, and <strong>one mistake can waive 
            privilege on entire topics in litigation</strong>.
          </p>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Basic Question: Does sending work offshore break attorney-client confidentiality?</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>The ABA's 2008 Answer:</strong> It can be ethical if you do it properly—client consent, confidentiality agreements, 
                reasonable supervision, provider understanding of privilege, and due diligence on security.</p>
                <p><strong>The Reality:</strong> "If you do it properly" requires more work than most firms expect.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Here's what "properly" actually means for your firm:</h3>
              <h4 className="font-bold text-gray-900 mb-3">Client Consent Requirements</h4>
              <p className="text-gray-700 mb-3">You need either informed or implied client consent for offshore work. That means:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-lime-600 font-bold mt-1">•</span>
                  <span><strong>Option 1 - Engagement Letters:</strong> Include language about offshore administrative support and document review with appropriate confidentiality protections.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-600 font-bold mt-1">•</span>
                  <span><strong>Option 2 - Specific Consent:</strong> Get client permission for offshore work on their matter, explaining protections in place.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-600 font-bold mt-1">•</span>
                  <span><strong>Option 3 - Implied Consent:</strong> For routine administrative work where client wouldn't reasonably object—but document your reasoning.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-amber-50 border-l-4 border-amber-500 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                <strong>The Australian Complication:</strong> No clear regulatory framework exists. The NSW Legal Services Commission issued 
                guidelines in 2013, but they're now 12 years old and haven't been updated for modern LPO practices. Australian firms are 
                navigating without proper regulatory guidance.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What's Still Debated</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Even with ABA clarification, these questions remain:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>The Fee-Sharing Issue:</strong> ABA Model Rule 5.4 prohibits attorneys from sharing legal fees with non-attorneys. 
                    If you bill clients $150/hour for work done by offshore providers costing $75/hour, is that improper fee-sharing? The 
                    ABA says it's permissible if billing is "reasonable" and you supervise the work. Some ethics opinions disagree.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>The Unauthorized Practice Question:</strong> When do offshore legal research and contract drafting cross from 
                    "mechanical tasks" to "practice of law" requiring licensing? State bars disagree on where that line sits.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>The Foreign Government Risk:</strong> What happens if a foreign government seizes data during an investigation? 
                    Who notifies the client? Who's liable? What about GDPR, CCPA, and Australian Privacy Act compliance for cross-border data 
                    transfer?
                  </div>
                </li>
              </ul>
              <p className="text-gray-800 font-semibold mt-4">
                These aren't theoretical concerns. They're real risks that destroy law firms when they go wrong.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The True Cost Reality: Why "$15/Hour" Actually Costs $32 in Year One</h2>
              <p className="text-lg text-gray-600">Every legal outsourcing provider advertises hourly rates that sound incredible</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Year One True Cost Breakdown (Mid-Size Law Firm Example):</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">LPO Provider Fee:</span>
                  <span className="font-semibold">$1,800/month × 12 = $21,600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software & Tools:</span>
                  <span className="font-semibold">$1,320-2,520</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your Training Investment (60 hours @ $200/hr):</span>
                  <span className="font-semibold">$12,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Management Time (Year One):</span>
                  <span className="font-semibold">$28,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Mistakes and Rework:</span>
                  <span className="font-semibold">$3,000-5,000</span>
                </div>
                <Separator className="my-3" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">TOTAL YEAR ONE:</span>
                  <span className="font-bold text-blue-600">$66,000-69,000</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">Effective Hourly Rate:</span>
                  <span className="font-bold text-blue-600">$31.70-33.20/hour</span>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                That's not the "$15/hour" advertised. And if you're billing under $150/hour, your ROI timeline extends beyond two years.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Year Two (Steady State):</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">LPO Provider Fee:</span>
                    <span className="font-semibold">$21,600</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Software:</span>
                    <span className="font-semibold">$1,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Management:</span>
                    <span className="font-semibold">$10,400</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Mistakes:</span>
                    <span className="font-semibold">~$1,000</span>
                  </div>
                  <Separator className="my-3" />
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">TOTAL YEAR TWO:</span>
                    <span className="font-bold text-lime-600">$34,500</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">Effective Hourly Rate:</span>
                    <span className="font-bold text-lime-600">$16.60/hour</span>
                  </div>
                </div>
                <p className="text-gray-700 text-xs mt-2">The savings appear in Year Two, not immediately.</p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Break-Even Analysis</h3>
                <p className="text-gray-700 mb-4">For legal outsourcing to make financial sense:</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Your billable rate needs to be $150+/hour",
                    "Time saved should be 15+ hours weekly",
                    "ROI doesn't appear until Month 18-24",
                    "Firm revenue should exceed $500K annually",
                    "You need consistent, predictable workflow"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-800 font-semibold mt-4">
                  If those conditions aren't met, outsourcing costs more than it saves.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* 90-Day Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-100 rounded-full p-3">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 90-Day Reality Nobody Mentions</h2>
              <p className="text-lg text-gray-600">Legal outsourcing providers love to promise "immediate impact"</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                period: "Days 1-30",
                periodColor: "bg-red-600",
                title: "The Productivity Dip",
                description: "Your productivity decreases 20-30% this month. You're spending hours creating training materials, making Loom videos, writing SOPs, and answering constant questions. Your offshore provider is contributing minimal value while learning your systems, CRM, jurisdiction-specific procedures, and quality standards.",
                details: "Daily 30-60 minute check-ins become standard. The temptation to quit is highest during this phase.",
                borderColor: "border-red-300",
                bgColor: "bg-red-50",
                textColor: "text-red-700"
              },
              {
                period: "Days 30-60",
                periodColor: "bg-amber-600",
                title: "The Frustration Phase",
                description: "Your provider is contributing but still needs extensive hand-holding. Quality is inconsistent—some tasks are excellent, others require rework. You're still spending 5-10 hours weekly managing, reviewing, and training.",
                details: "You're breaking even on time (not losing, but not gaining either).",
                borderColor: "border-amber-300",
                bgColor: "bg-amber-50",
                textColor: "text-amber-700"
              },
              {
                period: "Days 60-90",
                periodColor: "bg-blue-600",
                title: "The Turning Point",
                description: "The provider is becoming independent on routine tasks. Quality is improving and stabilizing. Management time drops to 3-5 hours weekly. Small positive ROI is emerging.",
                borderColor: "border-blue-300",
                bgColor: "bg-blue-50"
              },
              {
                period: "Months 4-6",
                periodColor: "bg-green-600",
                title: "The Payoff Phase",
                description: "Your provider is handling 15-20 hours weekly independently. You've reclaimed 10-15 hours of productive time. Management is down to 2-3 hours weekly. Real ROI is visible—you're seeing 3-5x return on investment.",
                borderColor: "border-green-300",
                bgColor: "bg-green-50"
              },
              {
                period: "Month 6+",
                periodColor: "bg-lime-600",
                title: "The Scaling Phase",
                description: "Your provider has mastered the core task portfolio. You can delegate more complex and nuanced work. You're considering additional providers for other functions. The provider is suggesting process improvements and becoming a true team extension.",
                borderColor: "border-lime-300",
                bgColor: "bg-lime-50"
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

          <Card className="bg-gray-100 border-l-4 border-gray-600 mt-8">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                The Critical Truth: Anybody selling "immediate results" is lying. Expect 90 days before you break even, six months before 
                meaningful ROI.
              </p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What You Can Outsource (And the Seven Tasks That Will Destroy Your Practice)</h2>
              <p className="text-lg text-gray-600">Legal outsourcing providers will tell you they can handle "everything from A-Z"</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Perfect for Outsourcing</h3>
              <p className="text-gray-700 mb-4">
                These tasks are mechanical, repetitive, rules-based, and high-volume with minimal judgment required:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Document review for relevance (with clear coding guidelines)",
                  "Legal research (specific questions with defined parameters)",
                  "Contract drafting (from templates with clear instructions)",
                  "Cite-checking and Bluebooking (technical accuracy work)",
                  "Deposition summaries (mechanical summarisation)",
                  "Medical records chronologies (organising and indexing)",
                  "Data entry and CRM updates (administrative tasks)",
                  "Document organisation and indexing (file management)",
                  "Filing and deadline tracking (calendar management)",
                  "Routine correspondence (template-based communication)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6">The Seven Tasks That Will Destroy Your Practice If You Outsource Them</h3>
              <p className="text-gray-700 mb-6">Every legal outsourcing provider will gladly take these tasks. You should NEVER delegate them:</p>
              <div className="space-y-4">
                {[
                  {
                    number: "1",
                    title: "Client Relationship Building",
                    description: "Trust requires personal touch. Your reputation is at stake. The relationship is non-transferable and forms the foundation of retention and referrals."
                  },
                  {
                    number: "2",
                    title: "Court Appearances",
                    description: "Physical presence legally required. Cannot be delegated under any circumstances. Represents the client directly."
                  },
                  {
                    number: "3",
                    title: "Complex Negotiations",
                    description: "Requires real-time strategic decisions, body language reading, and tactical pivots that offshore support cannot execute remotely or without complete context."
                  },
                  {
                    number: "4",
                    title: "Strategic Legal Advice",
                    description: "Requires professional judgment and experience. Ultimate liability rests with you. Cannot be transferred to non-attorney staff."
                  },
                  {
                    number: "5",
                    title: "Business Development",
                    description: "Relationships are personal and built on trust. Cannot be transferred to remote staff. Represents the firm's reputation directly."
                  },
                  {
                    number: "6",
                    title: "Quality Control Oversight",
                    description: "You're ultimately responsible under professional conduct rules. Cannot delegate the supervision and review function itself."
                  },
                  {
                    number: "7",
                    title: "Attorney-Client Privileged Communications",
                    description: "Waiver risks too high. Any misstep potentially waives privilege on entire topics. Keep these communications strictly in-house."
                  }
                ].map((task, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {task.number}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{task.title}</h4>
                      <p className="text-gray-700">{task.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Proceed with EXTREME Caution</h3>
              <p className="text-gray-700 mb-4">These tasks are technically outsourceable but carry significant risks:</p>
              <ul className="space-y-2 text-gray-700">
                {[
                  "High-Value Client-Facing Communications - Review every email and letter before sending. Brand reputation and client confidence at stake.",
                  "Discovery Management (not just review) - Strategic decisions required. Offshore can execute, but you must direct.",
                  "Contract Negotiation Drafting - Requires legal judgment about positioning. Offshore can draft language, but you must strategise."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-800 font-semibold mt-4">
                The distinction is simple: Outsource mechanical tasks. Keep strategic, client-facing, and judgment-requiring work in-house.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Philippines Question Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Philippines Question: Time Zones, Quality, and Burnout</h2>
              <p className="text-lg text-gray-600">Here's the geography reality that most legal outsourcing discussions avoid</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">For USA Law Firms Using Philippines</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold mb-1">The Time Zone Math:</p>
                    <p>Your 9am = Their 9pm (start of their night shift)</p>
                    <p>Your 5pm = Their 5am (end of their night shift)</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">The Challenge:</p>
                    <p>Urgent issues have 12-16 hour delays.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">The Benefit:</p>
                    <p>Work happens "overnight"—you wake up to completed tasks.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">The Risk:</p>
                    <p>Provider burnout, health issues, and higher turnover after 18-24 months of graveyard shift work.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">For Australian Law Firms Using Philippines</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold mb-1">The Time Zone Math:</p>
                    <p>Much better alignment: +2 to +4 hours difference means natural daytime overlap.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">The Reality:</p>
                    <p>Philippines staff work normal daytime hours matching Australian business hours. No graveyard shift problems. This is a massive competitive advantage for Australian firms.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Quality Control Reality</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Industry standard error rates even with "top providers": <strong>5-7% error rate</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">Translation: 5-7 out of every 100 documents potentially miscoded.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>In e-discovery, that means potentially missing privileged documents = waiver of privilege.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>In due diligence, that means potentially missing material issues = liability exposure.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The "Trained in U.S. Law" Deception</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When providers claim staff are "trained in U.S. law," here's what that actually means:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Their Training:</h4>
                  <p className="text-sm text-gray-700">4-6 week general overview of U.S. legal system, common law principles, and basic procedures.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">What It Doesn't Include:</h4>
                  <p className="text-sm text-gray-700">Your CRM, your processes, your jurisdiction nuances, your quality standards, your client expectations, or your firm culture.</p>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                The Reality: Still requires 60-90 days of on-the-job training with your firm before reaching full productivity.
              </p>
              <p className="text-gray-800 font-semibold">
                Total ramp-up: 3-4 months to full productivity, not "immediate."
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* $500K Revenue Rule Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The $500K Revenue Rule: When Your Firm Is Too Small</h2>
              <p className="text-lg text-gray-600">Most legal outsourcing providers will sell to anyone. I won't.</p>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Threshold</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Firm Revenue:</strong> $500K+ annually</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Stable Monthly Revenue:</strong> $40K+ minimum</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Why?</strong> Year One true cost of $66K+ requires financial buffer to absorb investment period.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Volume Requirements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Outsourceable Work:</strong> 20+ hours weekly of consistent, predictable workflow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Not Project-Based:</strong> Ongoing needs, not seasonal spikes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Consistent Type:</strong> Repetitive tasks following documented procedures</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Organisational Readiness</h3>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Documented Processes: SOPs exist and are followed consistently",
                    "Established Systems: Consistent CRM usage, documented workflows",
                    "Management Capacity: 5-10 hours weekly available for supervision (first 90 days)",
                    "Training Ability: Can create video tutorials and written procedures"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Red Flags - DON'T Outsource If:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Solo practitioner doing under $250K annually",
                  "Startup firm in first two years of operation",
                  "Seasonal practice (tax law with 4-month busy season)",
                  "No documented processes—hoping outsourcer will \"figure it out\"",
                  "Can't dedicate 10 hours weekly for first 90 days",
                  "Inconsistent monthly revenue—can't guarantee payment",
                  "Project-based work only—need consistent volume",
                  "Already struggling with profitability—outsourcing won't fix business model problems"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Better Alternatives for Small Firms</h3>
              <p className="text-gray-700 mb-4">If you're not ready yet, consider these options:</p>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Per-Project Freelancers: Flexibility without long-term commitment",
                  "Part-Time Virtual Assistants: 10-15 hours weekly to start",
                  "Legal Tech Automation: Lower cost than human staff",
                  "Law Clerk Programs: Invest in local talent pipeline",
                  "Wait and Grow: Reach the threshold before outsourcing"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Disaster Scenarios Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When Legal Outsourcing Actively DAMAGES Law Firms</h2>
              <p className="text-lg text-gray-600">Here are the real disaster scenarios I've seen</p>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Scenario 1: The Privilege Waiver",
                description: "Mid-size firm outsources document review for litigation. LPO provider miscodes privileged attorney work-product as non-privileged. Document gets produced to opposing counsel.",
                result: "Privilege waived on entire topic. Critical attorney strategies now discoverable. Potential malpractice claim."
              },
              {
                title: "Scenario 2: The Quality Control Failure",
                description: "BigLaw firm outsources due diligence for M&A transaction. Offshore provider misses material contract clause. Deal closes. Issue discovered post-close. Client demands explanation.",
                result: "Professional liability claim. Reputation damage. Client relationship loss. Insurance rates increase."
              },
              {
                title: "Scenario 3: The Communication Breakdown",
                description: "U.S. firm uses India-based provider (12-hour time zone difference). Urgent motion due tomorrow. Discover mistake at 4pm U.S. time = middle of night India. Can't fix until next business day.",
                result: "Missed court deadline. Client upset. Potential sanctions. Malpractice exposure."
              },
              {
                title: "Scenario 4: The Unauthorised Practice Disaster",
                description: "Small firm delegates substantive client advice to offshore \"legal consultant\" without proper supervision. Client files bar complaint.",
                result: "Ethics investigation. Potential suspension. Professional reputation damage."
              },
              {
                title: "Scenario 5: The Client Conversion Killer",
                description: "Personal injury firm outsources initial client intake calls to Philippines team. Cultural communication differences create impression of rushed, impersonal service. Potential clients feel undervalued.",
                result: "Conversion rate drops from 40% to 15%. Revenue drops $200K+ annually. ROI deeply negative."
              }
            ].map((scenario, index) => (
              <Card key={index} className="border-red-300 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-red-900 mb-3">{scenario.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">{scenario.description}</p>
                  <p className="text-red-800 font-semibold"><strong>Result:</strong> {scenario.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-amber-300 bg-amber-50 mt-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Warning Signs You're Heading for Disaster</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Hired LPO before documenting your processes",
                  "No clear KPIs or success metrics established",
                  "Not providing 5+ hours weekly supervision",
                  "Expecting immediate results in first 30 days",
                  "Constantly changing what you want them to do",
                  "No written SOPs or training materials",
                  "Didn't check references or do due diligence",
                  "Chose based on price alone (cheapest option)",
                  "Haven't calculated your break-even point",
                  "Client consent and notification not addressed"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                These warning signs predict failure with 90%+ accuracy.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* September Spike Opportunity Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The September Spike Opportunity (If You Do It Right)</h2>
              <p className="text-lg text-gray-600">Here's why the September 2025 USA spike and October 2025 Australia spike matter</p>
            </div>
          </div>

          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                The legal industry just discovered offshore staffing en masse. In the USA, 91% of large enterprises already outsource at least 
                one legal function. Corporate legal departments spend an average of $4.2M annually on LPO services. The market is exploding: 
                $10.19B in 2025, projected to hit $52.63B by 2033.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                But while Fortune 500 legal departments have systematic approaches with dedicated project management, most small and mid-size 
                firms are entering this market blind.
              </p>
              <div className="space-y-2 text-gray-800 font-semibold">
                <p><strong>The Opportunity:</strong> First-mover advantage exists for law firms that implement properly while competitors stumble through trial-and-error failures.</p>
                <p><strong>The Risk:</strong> Rush in unprepared, become part of the 70% failure rate, and burn $60K+ learning what doesn't work.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What the Successful 30% Do Differently</h3>
              <p className="text-gray-700 mb-4 font-semibold">They don't start with hiring. They start with preparation:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Month Before Hiring:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Document current processes (even rough SOPs)",
                      "Identify specific, repetitive tasks",
                      "Calculate true budget including time investment",
                      "Verify financial capacity for $66K Year One commitment",
                      "Establish quality standards and review procedures"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">During Implementation:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Commit 10 hours weekly for first 90 days",
                      "Accept productivity dip in Month 1-2",
                      "Focus on training and documentation, not immediate ROI",
                      "Use structured communication (daily check-ins, weekly reviews)",
                      "Track metrics (error rates, time saved, tasks completed)"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Long-Term Success:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Maintain ongoing supervision (never hands-off)",
                      "Conduct quarterly performance reviews",
                      "Update SOPs as processes evolve",
                      "Plan 18-24 months for full ROI realisation",
                      "Build depth with backup coverage and cross-training"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Self-Assessment Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Is Your Law Firm Ready? The Honest Assessment</h2>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Most law firms reading this aren't ready for legal outsourcing yet. That's not an insult—it's a statement of operational maturity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">You're Ready IF:</h3>
                <div className="space-y-2">
                  {[
                    "Annual revenue exceeds $500K",
                    "Consistent 20+ hours weekly of outsourceable work",
                    "Documented processes (even rough SOPs exist)",
                    "Established systems (consistent CRM usage)",
                    "Management capacity (5-10 hours weekly available)",
                    "Financial buffer (can absorb $66K Year One investment)",
                    "Realistic timeline (accepting 90-day ramp-up)",
                    "Attorney-client privilege procedures established",
                    "Client consent approach determined",
                    "Supervision commitment secured"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">You're NOT Ready IF:</h3>
                <div className="space-y-2">
                  {[
                    "Solo practitioner under $250K revenue",
                    "Project-based or seasonal workflow",
                    "No documented processes",
                    "Inconsistent systems usage",
                    "Can't dedicate management time",
                    "Already struggling financially",
                    "Expecting immediate ROI",
                    "Haven't addressed privilege protection",
                    "No client consent strategy",
                    "Hoping offshore staff will \"figure it out\""
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-100 border-l-4 border-gray-600">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                If you're not ready, don't hire yet. Grow your revenue, document your systems, and come back when the timing's right.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* ShoreAgents Approach Section */}
        <section className="mb-16">
          <Card className="bg-gray-900 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">The ShoreAgents Approach: Why We Tell People NOT to Hire</h2>
              <p className="text-lg leading-relaxed mb-6">
                ShoreAgents works with law firms across the USA, Australia, and New Zealand. Our full-time legal support pricing is 
                $1,200-2,500/month depending on experience and role complexity.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                But here's what makes us different: we'll tell you if you're not ready yet.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                If your firm is under $500K revenue, we'll be honest that you should wait. If your processes aren't documented, we'll help 
                you get organised first before hiring. If you're trying to outsource tasks that must stay in-house for privilege protection, 
                we'll tell you it won't work.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                We only succeed when you succeed. That means being brutally honest about when legal outsourcing makes sense—and when it doesn't.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We're not the cheapest option (Upwork freelancers cost less). We're not the biggest (UnitedLex has 3,000+ staff globally). 
                But we'll give you the honest assessment based on 15 years of experience seeing what works and what fails.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Want to Discuss Whether Legal Outsourcing Is Right for Your Firm?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation for a frank conversation about your situation. We'll tell you what's realistic, what's not, and whether 
              we're the right fit. No sales pitch—just 15 years of experience telling it straight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 bg-white text-lime-600 font-bold text-lg rounded-lg hover:bg-lime-50 transition-colors shadow-lg"
              >
                Get Legal Quote
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
              The September search spike means legal outsourcing is going mainstream. The question is whether you'll be in the successful 30% 
              or the failed 70%. The difference isn't finding better offshore providers—it's being operationally ready before you start.
            </p>
            <p className="text-lime-100 mt-4 font-bold">
              Are you there yet?
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
