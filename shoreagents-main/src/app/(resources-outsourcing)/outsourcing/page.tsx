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
  Shield
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";

export default function OutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['outsourcing']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For $500K+ Annual Revenue Businesses
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Outsourcing:<br />
              <span className="text-lime-600">Why 70% Fail in Year One (And What the Successful 30% Do Differently)</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Something happened in late 2023 that nobody in the industry is talking about.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Outsourcing search volume in the United States exploded by over 300%. What was sitting at 25-30 on the search interest index suddenly spiked to 75-100 and hasn't come back down. Australia's been hovering around 60-90 consistently for years—they figured this out ages ago. Meanwhile, American businesses are just now catching on to what Aussie companies have known for a decade: outsourcing works when you do it properly.
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
            But here's the problem. That surge in interest? It's creating a surge in disasters.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I've been running offshore teams for businesses in the USA, Australia, and New Zealand for 15 years. I've placed over 500 staff members. And I can tell you with absolute certainty that <strong>70% of companies trying outsourcing for the first time will fail within 12 months.</strong> Not because outsourcing doesn't work—it does. But because they're doing it for the wrong reasons, at the wrong time, with completely unrealistic expectations about how it actually works.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This guide is for:</strong> Medium to large businesses—companies pulling $500,000+ in annual revenue with 10-100+ employees who are considering full-time offshore staff at $1,200-2,500 per month. If you're a solopreneur or startup looking for part-time help on Fiverr, this isn't for you. Come back when you're operationally mature and have real systems in place.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* The Brutal Truth Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Brutal Truth: Why That "$15/Hour" Costs You $121,400 in Year One</h2>
              <p className="text-lg text-gray-600">Every outsourcing provider loves to advertise hourly rates. Here's what actually happens.</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-lg font-semibold text-gray-900 mb-4">Here's what actually happens when you hire that "$15/hour" offshore staff member:</p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Year One True Cost Breakdown:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Staff salary:</span>
                  <span className="font-semibold">$18,000 (this is the only number they show you)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software and tools:</span>
                  <span className="font-semibold">$2,400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your training time (80 hrs @ $150/hr):</span>
                  <span className="font-semibold">$12,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your management time (10 hrs/wk × 52 × $150/hr):</span>
                  <span className="font-semibold">$78,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Mistakes and rework:</span>
                  <span className="font-semibold">~$8,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Recruitment and onboarding:</span>
                  <span className="font-semibold">$3,000</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">Total Year One Cost:</span>
                  <span className="font-bold text-red-600 text-xl">$121,400</span>
                </div>
                <p className="text-red-700 font-semibold mt-2">Effective Hourly Rate: $58/hour (not $15)</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Now, does that mean outsourcing doesn't work? Not at all. By year two, your management time drops to 5 hours weekly, training is done, and mistakes are minimal. Your effective rate drops to around $30/hour. By year three, you're looking at legitimate $20/hour all-in costs with a fully productive team member who knows your business inside and out.
              </p>
              <p className="text-gray-800 font-semibold">
                But you have to survive year one first. And that's where 70% of companies fail—because nobody prepared them for the reality curve.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* 180-Day Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-100 rounded-full p-3">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 180-Day Reality: Why You Get Slower Before You Get Faster</h2>
              <p className="text-lg text-gray-600">Here's what outsourcing providers promise vs. what actually happens</p>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-4 mb-6">
            {/* Days 1-30 */}
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-red-600 text-white">Days 1-30</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Investment Phase (You're 30-40% SLOWER)</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      You're not gaining time—you're losing it. You're recording Loom videos explaining tasks you've done on autopilot for years. You're writing procedure documents that you should've created ages ago but never did. You're answering the same question five different ways because they don't understand your industry shorthand. Every single task takes three times longer than just doing it yourself.
                    </p>
                    <p className="text-red-700 font-semibold">This is when most people quit. "This isn't working," they think. "I'm wasting time, not saving it."</p>
                    <p className="text-gray-800 font-semibold mt-3">
                      But here's the thing—this phase is supposed to happen. It's not a bug, it's a feature. You're investing now to gain later. The people who succeed know this. The people who fail think something went wrong.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Days 31-60 */}
            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-amber-600 text-white">Days 31-60</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Frustration Phase (Break-Even Territory)</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Your offshore hire is contributing now, but quality is around 70% of what you'd do yourself. You're still checking every deliverable, correcting mistakes, holding daily check-ins. You're not losing time anymore, but you're not gaining much either.
                    </p>
                    <p className="text-gray-800 font-semibold mt-3">This is still normal. You're building their competence. The quality will improve every week if you stick with it.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Days 61-90 */}
            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-blue-600 text-white">Days 61-90</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Turning Point (Small Positive ROI)</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Something shifts around the three-month mark. They start catching mistakes before you do. Response times improve. Quality hits 85-90%. You're down to weekly check-ins instead of daily. You're finally reclaiming maybe 5-8 hours per week.
                    </p>
                    <p className="text-gray-800 font-semibold mt-3">This is when you realize it might actually work.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Days 91-180 */}
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-green-600 text-white">Days 91-180</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Payoff Phase (Real ROI)</h3>
                    <p className="text-gray-700 leading-relaxed">
                      By month six, your offshore hire is handling 20-30 hours of legitimate work weekly. You're spending 3-5 hours on management. Quality is consistent at 90-95%. The 15-20 hours you've reclaimed? That's when you can finally focus on growing your business instead of drowning in operational tasks.
                    </p>
                    <p className="text-gray-800 font-semibold mt-3">This is when it finally pays off.</p>
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
                      Your offshore team member has mastered core tasks and can handle more complex work. You're considering a second hire. You're growing your business because you have the time to do so. The ROI is undeniable.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-100 border-l-4 border-gray-600">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                The pattern is always the same: negative productivity for 30 days, break-even for 30 days, small gains for 30 days, real ROI from month four onward.
              </p>
              <p className="text-gray-700 mt-3">
                Know this timeline going in. Plan for it. Budget for it. Don't quit at day 45 thinking it's not working when you're actually right on schedule.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* The $500K Revenue Rule Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The $500,000 Revenue Rule: When You're Actually Ready to Outsource</h2>
              <p className="text-lg text-gray-600">Here's the decision framework nobody else will give you</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">You're NOT ready to outsource if:</h3>
              <div className="space-y-3">
                {[
                  "Your annual revenue is under $500,000 (you don't have the financial runway to survive the year-one investment)",
                  "You can't keep someone busy 30+ hours per week consistently (intermittent work means wasted costs)",
                  "Everything is 'in your head' with no documented processes (you'll spend six months teaching instead of three months training)",
                  "You can't dedicate 10-15 hours per week for training and management in the first 90 days (they'll fail without proper guidance)",
                  "You're outsourcing to 'save money' rather than 'buy time to grow' (wrong motivation leads to cheap hiring and terrible results)",
                  "Your business does project-based work with inconsistent volume (you need consistent, repeatable tasks)",
                  "You need same-day turnarounds on urgent matters regularly (wrong time zones, wrong model)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">You ARE ready to outsource when:</h3>
              <div className="space-y-3">
                {[
                  "Your business does $500,000+ in annual revenue (you can absorb the first-year investment)",
                  "You have documented processes—even rough ones—for your core tasks (you can train effectively)",
                  "You can identify 30+ hours of consistent, repeatable work per week (enough to keep someone fully productive)",
                  "You're turning away growth opportunities because you're operationally maxed out (outsourcing enables scaling)",
                  "You can dedicate the management time required, especially in the first 90 days (success requires commitment)",
                  "Your time is worth $150+/hour doing strategic work (opportunity cost makes sense)",
                  "You understand this is an 18-month ROI timeline, not a 30-day quick fix (realistic expectations)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                The math is simple. If your business does $300,000 in revenue at 30% margin, you're making $90,000 profit. Your year-one outsourcing cost is $121,000. You can't afford it.
              </p>
              <p className="text-gray-800 leading-relaxed">
                But if you're doing $800,000 in revenue? That $121,000 investment to reclaim 20 hours weekly means you can focus on business development. You grow from $800,000 to $1.2 million in year two. Now the math works brilliantly.
              </p>
              <p className="text-gray-800 font-semibold mt-4">
                Don't try to outsource your way to profitability. Get profitable first, then use outsourcing to scale.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What You Can Actually Outsource (And What Will Destroy Your Business If You Try)</h2>
              <p className="text-lg text-gray-600">The industry loves giving you lists of what you CAN outsource. I'm going to tell you what you should NEVER outsource.</p>
            </div>
          </div>

          {/* NEVER Outsource */}
          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6">NEVER Outsource These Tasks:</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Strategic decision-making",
                    description: "Business direction, major investments, pivots. This requires deep context about your market, customers, and competitive landscape that offshore staff simply cannot have. Delegate the research, keep the decision."
                  },
                  {
                    title: "Complex negotiations",
                    description: "Contracts, partnerships, major deals. These need real-time judgment, cultural context, and the ability to read body language. Video calls don't cut it for high-stakes discussions."
                  },
                  {
                    title: "Client relationship management for high-value accounts",
                    description: "Your top 20% of clients who generate 80% of revenue didn't hire you to hand them off to someone they've never met. They hired you. Keep those relationships yours."
                  },
                  {
                    title: "Crisis management",
                    description: "PR disasters, major client emergencies, reputation issues. These require instant judgment, cultural awareness, and the authority to make significant decisions. Not suitable for offshore."
                  },
                  {
                    title: "Brand voice and positioning",
                    description: "Core messaging, thought leadership, strategic content. The subtle nuances that differentiate you from competitors cannot be outsourced without losing authenticity."
                  },
                  {
                    title: "Anything requiring immediate local presence",
                    description: "Physical inspections, emergency site visits, in-person meetings. Obviously, but worth stating."
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

          {/* RISKY to Outsource */}
          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">RISKY to Outsource (Proceed with Caution):</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Customer-facing phone support",
                    description: "Accent bias is real. American and Australian customers may struggle with accents, especially for complex topics. Use offshore for appointment setting or basic inquiries, but keep complex support local or at least have local escalation available."
                  },
                  {
                    title: "Social media responses on controversial topics",
                    description: "Brand risk is too high. Offshore staff may not understand cultural sensitivities or current events in your market. They can draft posts for your approval, but real-time engagement should be reviewed locally."
                  },
                  {
                    title: "Financial signing authority",
                    description: "Never give offshore staff the ability to transfer money, sign checks, or make financial commitments. Process work is fine, but approvals must stay local for fraud prevention and legal compliance."
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

          {/* PERFECT to Outsource */}
          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">PERFECT to Outsource:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Data entry and CRM management",
                  "Research and lead generation",
                  "Appointment setting and calendar management",
                  "Content creation (with review)",
                  "Bookkeeping and transaction processing",
                  "Customer support (tier one)",
                  "Quality assurance and testing",
                  "Design and creative work"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                The decision framework is simple: If it requires strategic judgment, deep local market knowledge, or immediate physical presence, keep it in-house. If it's process-driven work with clear procedures and measurable outcomes, it's probably perfect for outsourcing.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Location Comparison Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Philippines vs Latin America vs Eastern Europe: The Honest Location Comparison</h2>
              <p className="text-lg text-gray-600">Not all offshore locations are equal. Here's what nobody tells you about the differences.</p>
            </div>
          </div>

          {/* Philippines */}
          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Philippines: $1,200-2,500/month</h3>
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">Best For:</p>
                <ul className="space-y-1 text-sm text-gray-700 ml-4">
                  <li>• USA, Australian, and New Zealand businesses doing administrative work</li>
                  <li>• Back-office operations (data entry, bookkeeping, customer support)</li>
                  <li>• Tasks that can be completed asynchronously</li>
                  <li>• Businesses where cost savings are primary concern</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">Time Zone Reality:</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>For USA businesses:</strong> Your staff works graveyard shift (your 9 AM is their 9 PM). They're available during your business hours, but they're on night shift to do it. Higher burnout and turnover risk, but you wake up to completed work.</p>
                  <p><strong>For Australian/NZ businesses:</strong> Near-perfect overlap (Sydney 9 AM is Manila 7 AM). Natural workday alignment. This is why Australians figured out Philippines outsourcing years ago—the time zones work beautifully.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-green-700 mb-2">Pros:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Most cost-effective option (60-70% savings vs. local)</li>
                    <li>• Huge talent pool with BPO experience</li>
                    <li>• Excellent English proficiency</li>
                    <li>• Strong service culture and work ethic</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-700 mb-2">Cons:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Graveyard shift for USA companies (burnout risk)</li>
                    <li>• Accent can be noticeable on phone calls</li>
                    <li>• Cultural differences require clear communication</li>
                    <li>• Infrastructure issues (improving rapidly)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Latin America */}
          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Latin America (Colombia, Mexico, Argentina): $2,000-3,500/month</h3>
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">Best For:</p>
                <ul className="space-y-1 text-sm text-gray-700 ml-4">
                  <li>• USA/Canada businesses needing real-time collaboration</li>
                  <li>• Sales support and lead follow-up requiring same-day responsiveness</li>
                  <li>• Customer-facing roles where accent matters</li>
                  <li>• Businesses that can afford 30-50% premium over Philippines</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">Time Zone Reality:</p>
                <p className="text-sm text-gray-700">
                  <strong>For USA businesses:</strong> Near-perfect alignment. Your 9 AM is their 9-11 AM depending on country. Natural workday overlap enables real-time communication.
                </p>
                <p className="text-sm text-gray-700">
                  <strong>For Australian/NZ businesses:</strong> Complete opposite schedules. Their daytime is your nighttime. Not recommended.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-green-700 mb-2">Pros:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Minimal time zone difference for USA companies</li>
                    <li>• Native Spanish speakers (if your market has Spanish-speaking customers)</li>
                    <li>• Cultural similarity to North America</li>
                    <li>• Clear accent-neutral English</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-700 mb-2">Cons:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 30-50% more expensive than Philippines</li>
                    <li>• Smaller talent pool with specialized experience</li>
                    <li>• Less developed BPO infrastructure</li>
                    <li>• Higher turnover as staff often use nearshore roles as stepping stones</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Eastern Europe */}
          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Eastern Europe (Poland, Ukraine, Romania): $3,000-5,000/month</h3>
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">Best For:</p>
                <ul className="space-y-1 text-sm text-gray-700 ml-4">
                  <li>• Technical roles (software development, IT support)</li>
                  <li>• Businesses needing European time zone coverage</li>
                  <li>• Companies where quality is more important than cost</li>
                  <li>• Specialized skills requiring higher expertise</li>
                </ul>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-green-700 mb-2">Pros:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Highest quality and education levels</li>
                    <li>• Excellent technical expertise (especially development)</li>
                    <li>• Strong work ethic and low turnover</li>
                    <li>• EU data protection compliance</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-700 mb-2">Cons:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 2-3x cost of Philippines</li>
                    <li>• Smaller talent pool for non-technical roles</li>
                    <li>• Time zone challenging for USA, impossible for Australia/NZ</li>
                    <li>• Higher expectations (salary, benefits, career progression)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold mb-2">The Honest Recommendation:</p>
              <p className="text-gray-700 leading-relaxed mb-2">
                For USA businesses: Philippines makes sense for 80% of administrative and back-office roles. The cost savings are substantial enough to justify the graveyard shift model. Use Latin America only when real-time communication or accent-neutral customer interaction is worth the 40% cost premium.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                For Australian/NZ businesses: Philippines is nearly perfect due to time zone alignment. You get cost savings AND natural workday overlap. There's rarely a reason to look elsewhere unless you need highly specialized technical skills.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For European businesses: Eastern Europe for quality and compliance, Philippines for cost savings on administrative work.
              </p>
              <p className="text-gray-800 font-semibold mt-4">
                Don't overthink this. Philippines works for most use cases. Only deviate when you have a specific reason the premium is worth it.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Freelancer vs Agency vs Dedicated Team Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-100 rounded-full p-3">
              <Users className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Freelancer vs Agency vs Dedicated Team: When Each Model Makes Sense</h2>
              <p className="text-lg text-gray-600">There are three main ways to outsource. Each works in different situations. Most people choose wrong.</p>
            </div>
          </div>

          {/* Model 1: Freelancers */}
          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Model 1: Freelancers (Upwork, Fiverr, OnlineJobs.ph)</h3>
              <div className="mb-4">
                <p className="text-gray-700 mb-2"><strong>Pricing:</strong> $5-25/hour</p>
                <p className="text-gray-700"><strong>Commitment:</strong> Pay per task or project</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-green-700 mb-2">When It Works:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• One-time projects with clear deliverables</li>
                    <li>• Testing outsourcing before full commitment</li>
                    <li>• Tasks under 15 hours per week</li>
                    <li>• You have time to screen 10-20 candidates</li>
                    <li>• You're experienced managing remote teams</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-700 mb-2">When It Fails:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Ongoing roles requiring 30+ hours weekly</li>
                    <li>• Quality control is critical</li>
                    <li>• You need backup coverage</li>
                    <li>• Reliability matters more than cost</li>
                    <li>• You value your time highly</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                The Reality: You'll hire 4-5 freelancers before finding one that works. Most juggle multiple clients, disappear without warning, or have inflated profiles that don't match reality. Success rate is around 20-30% for first-time outsourcers. You're saving money but spending enormous amounts of time on recruitment and management.
              </p>
            </CardContent>
          </Card>

          {/* Model 2: Outsourcing Agencies */}
          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Model 2: Outsourcing Agencies (ShoreAgents)</h3>
              <div className="mb-4">
                <p className="text-gray-700 mb-2"><strong>Pricing:</strong> $1,200-2,500/month full-time</p>
                <p className="text-gray-700"><strong>Commitment:</strong> Typically 3-6 month minimum</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-green-700 mb-2">When It Works:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• First-time outsourcing (want to reduce risk)</li>
                    <li>• Need ongoing, full-time support (30+ hours weekly)</li>
                    <li>• Want backup coverage if staff quits or gets sick</li>
                    <li>• Value your time highly and don't want recruitment headaches</li>
                    <li>• Need someone trained on industry-specific tasks</li>
                    <li>• Prefer one invoice vs. managing payroll, benefits, compliance</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-700 mb-2">When It Fails:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Part-time work only (under 20 hours/week)</li>
                    <li>• Extremely tight budget where every dollar matters</li>
                    <li>• Very specialized skills that require extensive searching</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                The Reality: You pay 30-50% more than hiring direct, but you get vetting, training support, backup coverage, and someone else handling HR and payroll. Success rate is 60-70% because candidates are pre-screened and you have professional support during implementation.
              </p>
              <p className="text-gray-800 font-semibold mt-2">
                This is what we do at ShoreAgents. We don't just hand you a person and wish you luck—we provide infrastructure, backup, and ongoing support to ensure success.
              </p>
            </CardContent>
          </Card>

          {/* Model 3: Dedicated Offshore Team */}
          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Model 3: Dedicated Offshore Team (Building Your Own Entity)</h3>
              <div className="mb-4">
                <p className="text-gray-700 mb-2"><strong>Pricing:</strong> $2,000-4,000/month per person (setup costs $15,000-30,000)</p>
                <p className="text-gray-700"><strong>Commitment:</strong> Long-term business decision</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-green-700 mb-2">When It Works:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• $2M+ annual revenue</li>
                    <li>• Need 5+ offshore staff</li>
                    <li>• Long-term scaling plans</li>
                    <li>• Want to build offshore "department"</li>
                    <li>• Complex operations requiring team coordination</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-700 mb-2">When It Fails:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Under $1M revenue (overhead too high)</li>
                    <li>• Fewer than 5 roles to fill</li>
                    <li>• First-time outsourcing (too risky)</li>
                    <li>• Need to scale up/down quickly</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                The Reality: You're building a mini-company offshore. Maximum control and cost efficiency at scale, but significant setup time, management overhead, and commitment required. Only makes sense for larger operations with proven outsourcing success.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Smart Progression:</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Year 1:</strong> Agency (learn what works, get support, reduce risk)</p>
                <p><strong>Year 2:</strong> Keep agency for critical roles, add freelancers for less important tasks</p>
                <p><strong>Year 3+:</strong> Consider dedicated team if you need 5+ people, or stick with hybrid model</p>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                Don't try to jump straight to the cheapest option. Pay for infrastructure and support early, then optimize costs once you know what you're doing.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Questions Everyone Asks (And The Honest Answers)</h2>
              <p className="text-lg text-gray-600">Common concerns with straight answers</p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">"How do I know they're actually working?"</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You don't, unless you have proper systems in place. This is why we built our platform with real-time activity tracking, productivity scores, and task management. You can see clock-in times, active work status, and task completion rates updated every 60 seconds.
                </p>
                <p className="text-gray-800 font-semibold">
                  But here's the thing—if you feel like you need to watch their screen 24/7, you've hired the wrong person or haven't set clear expectations. Good offshore staff want to prove themselves. Give them measurable tasks, check the results, and trust the process.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">"What if they quit suddenly?"</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Freelancers quit all the time. That's why working with an agency makes sense—you get backup coverage. When you work with ShoreAgents, if your team member quits or gets sick, we provide coverage while recruiting a replacement. You're not left stranded.
                </p>
                <p className="text-gray-800 font-semibold">
                  But let's be honest—good staff don't quit suddenly if they're treated well, paid fairly, and given clear direction. Most "sudden" quits happen because expectations weren't managed or quality issues weren't addressed early.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">"Can they handle customer service calls?"</h3>
                <p className="text-gray-700 leading-relaxed">
                  Depends on your customers and the complexity. Filipino staff have slight accents but excellent English. For basic support, appointment setting, or FAQ responses, they're fine. For complex troubleshooting or high-value client relationships where accent perception matters, keep it local or use nearshore Latin America.
                </p>
                <p className="text-gray-800 font-semibold mt-3">
                  Test it. Have them handle tier-one support and escalate complex issues to local staff. See how customers respond. Adjust accordingly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">"What about data security?"</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Legitimate concern. This is why proper agencies have secure office environments with biometric security, monitored workstations, and strict data access protocols. Freelancers working from home? That's a security risk.
                </p>
                <p className="text-gray-800 font-semibold">
                  At ShoreAgents, staff work from professional offices with enterprise-grade security. They don't take laptops home. They can't transfer data to personal devices. This matters for businesses handling sensitive information.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">"How long until I see ROI?"</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Plan for 12-18 months to break even, real profits from month 18+. Anyone promising immediate ROI is lying. You're investing heavily in year one (training, management, mistakes). Year two is when costs drop and productivity peaks.
                </p>
                <p className="text-gray-800 font-semibold">
                  If you need a positive ROI in 90 days, outsourcing isn't for you. If you can invest for 18 months to build a scalable system, the returns are substantial.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">"What tasks should I start with?"</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Start with repetitive, rule-based tasks with clear quality metrics:
                </p>
                <ul className="space-y-1 text-sm text-gray-700 mb-3 ml-4">
                  <li>• Data entry and CRM updates</li>
                  <li>• Appointment scheduling</li>
                  <li>• Email management and response templates</li>
                  <li>• Basic research and lead list building</li>
                  <li>• Document preparation</li>
                  <li>• Social media scheduling</li>
                </ul>
                <p className="text-gray-800 font-semibold">
                  Once they've proven themselves on simple tasks, gradually increase complexity. Don't hand them strategic work on day one.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">"Should I hire full-time or part-time?"</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Full-time (30+ hours weekly) almost always works better. Here's why:
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Part-time staff (10-20 hours weekly) juggle multiple clients. You're not their priority. They'll take full-time offers and leave you hanging. Training investment gets wasted.
                </p>
                <p className="text-gray-800 font-semibold">
                  Full-time staff are dedicated to your business. They learn your systems, remember context, and care about your success because you're their primary income source.
                </p>
                <p className="text-gray-800 font-semibold mt-3">
                  If you can't fill 30+ hours consistently, you're not ready for outsourcing. Batch your tasks, document your processes, and come back when you have full-time work available.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* What Happens Next Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Happens Next: Are You Actually Ready?</h2>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            I've given you the unfiltered truth—the 70% failure rate, the $121,400 first-year cost, the 180-day reality curve, the revenue threshold that determines viability.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Most businesses reading this aren't ready yet. That's fine. Better to know now than waste six months and $30,000 learning the hard way.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            But if you're pulling $500,000+ annually, have documented processes (even rough ones), can dedicate 10-15 hours weekly for training in the first 90 days, and genuinely need to reclaim 20+ hours per week to focus on growth... outsourcing done properly can transform your business.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Not immediately. Not magically. But by month six, you'll have reclaimed 15-20 hours weekly. By month twelve, you'll wonder how you ever ran your business without offshore support. By year two, you'll be scaling in ways that weren't possible before.
          </p>

          <Card className="bg-gray-900 text-white mb-8">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-4">
                ShoreAgents works with businesses across the USA, Australia, and New Zealand. Our pricing is <strong className="text-lime-400">$1,200-2,500/month for full-time offshore staff</strong>—not fantasy rates, real costs for real results. We handle recruitment, infrastructure, training support, and backup coverage so you're not managing HR on top of running your business.
              </p>
              <p className="text-gray-300 leading-relaxed">
                But here's what makes us different: we'll tell you if you're not ready yet. If your revenue is under $500,000, if your processes aren't documented, if you can't commit the management time required—we'll be honest about it. We only succeed when you succeed, and that means being brutally realistic about when outsourcing makes sense.
              </p>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-gradient-to-br from-lime-50 to-green-50">
            <CardContent className="p-8">
              <p className="text-gray-800 text-lg leading-relaxed">
                Ready to see if outsourcing is right for your situation? Schedule a consultation at www.shoreagents.com. We'll assess your business, tell you what's realistic, and whether we're the right fit. No sales pitch, just 15 years of experience telling it straight.
              </p>
              <p className="text-gray-900 font-bold text-xl mt-4 text-center">
                The successful 30% don't succeed because they found magic offshore staff. They succeed because they were operationally ready, set realistic expectations, and committed to the 180-day timeline.
              </p>
              <p className="text-gray-900 font-bold text-xl mt-4 text-center">
                Are you in that 30%?
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for an Honest Assessment?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation. We'll assess your business, tell you what's realistic, and whether we're the right fit. No sales pitch, just 15 years of experience telling it straight.
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
            Outsourcing works brilliantly when done right, by ready businesses, with realistic expectations. Are you in that 30%?
          </p>
        </div>
      </div>
    </div>
  );
}
