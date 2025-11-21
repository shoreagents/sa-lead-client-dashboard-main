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
  Code,
  Monitor
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";

export default function WebsiteOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['website-outsourcing']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For $300K+ Annual Revenue Businesses
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Website Outsourcing:<br />
              <span className="text-lime-600">The $87,000 Rebuild Nobody Warns You About</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              A Dallas e-commerce company hired a $25/hour offshore developer last year. Six months later, they paid me $87,000 to rebuild the entire site from scratch because the code was so poorly structured it couldn't be fixed. That's triple what the original site cost—and this happens more often than anyone admits.
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
            The IT outsourcing market hit $512.5 billion in 2024. USA accounts for $185.5 billion of that. Google Trends shows strong, growing USA search interest throughout 2024-2025, peaking in September. Australia had one spike in February 2025, then flatlined. New Zealand shows insufficient data to register.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            That pattern tells you this is a mature USA market where businesses understand outsourcing. What they're buying, 70-80% of the time, are expensive mistakes they'll spend years fixing.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I've been placing offshore staff with businesses across the USA, Australia, and New Zealand for 15 years. Website outsourcing works brilliantly when done properly. It fails spectacularly when companies chase the cheapest rates without understanding the real costs.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This is for:</strong> Businesses doing $300,000+ annual revenue who need ongoing development work—minimum 20 hours weekly. If you need a one-time landing page under $5,000, use Fiverr. This is about systematic implementation for companies ready to invest properly.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* What That $25/Hour Actually Costs Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What That "$25/Hour" Actually Costs You</h2>
              <p className="text-lg text-gray-600">Every outsourcing pitch starts with hourly rates. Here's what they don't show you</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advertised Cost:</h3>
              <div className="space-y-2 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700">$25/hour × 40 hours/week:</span>
                  <span className="font-semibold">$1,000/week</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Annual:</span>
                  <span className="font-semibold">$52,000/year</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Actual Year One Cost:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Developer base:</span>
                  <span className="font-semibold">$52,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software/tools (project management, communication, code repos):</span>
                  <span className="font-semibold">$3,600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your management time (10 hrs/wk Q1, 5 hrs/wk after @ $100/hr):</span>
                  <span className="font-semibold">$39,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Training/onboarding (40 hours creating documentation):</span>
                  <span className="font-semibold">$6,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Mistakes/rework (first 90 days have high error rates):</span>
                  <span className="font-semibold">$8,000</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">Total Year One:</span>
                  <span className="font-bold text-red-600 text-xl">$108,600</span>
                </div>
                <p className="text-red-700 font-semibold mt-2">That's $52/hour, not $25/hour. More than double the advertised rate.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                Year Two drops to about $68,000 once they're trained ($33/hour effective rate). Break-even point? Months 18-24 after your initial investment.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 90-Day Reality Nobody Admits</h2>
              <p className="text-lg text-gray-600">Here's what outsourcing providers promise: "Start immediately! Expert developers! Instant results!" Complete rubbish.</p>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-4">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-red-600 text-white">Weeks 1-4</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">You Get Slower</h3>
                    <p className="text-gray-700 leading-relaxed">
                      You'll spend 15-20 hours weekly on training videos, documentation, specifications, daily calls, and constant questions. Your own work stops completely while you teach someone else how to do their job.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-amber-600 text-white">Weeks 5-8</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Revision Cycle</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Work comes back wrong. Your specifications weren't clear enough. Cultural differences affect design choices. You spend 16 hours weekly reviewing, correcting, and explaining. This is when most relationships fail.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-blue-600 text-white">Weeks 9-12</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Breaking Even</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Quality improves. They're starting to understand your business. But you're still not ahead—just breaking even. Management time: 9 hours weekly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-green-600 text-white">Months 4-6</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Actual ROI Begins</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Finally, they handle routine tasks independently. You reclaim 15-20 hours weekly. Management drops to 3-5 hours weekly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-red-50 border-l-4 border-red-500 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                The math: You lose 140 hours in the first 90 days. At $150/hour, that's $21,000 of YOUR time plus $13,000 in developer costs. You invest $34,000 before seeing positive returns.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* $300K Revenue Threshold Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Calculator className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The $300K Revenue Threshold</h2>
              <p className="text-lg text-gray-600">Why do you need $300K minimum annual revenue?</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">At $300K Revenue:</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700">Your profit margin at 30% = <strong>$90,000</strong> net income.</p>
                <p className="text-gray-700">Outsourcing Year One costs <strong>$108,000</strong>.</p>
                <p className="text-gray-800 font-semibold">You're $18,000 in the hole before seeing returns.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">At $200K Revenue:</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700">30% margin = <strong>$60,000</strong> profit.</p>
                <p className="text-gray-700">Outsourcing costs <strong>$108,000</strong>.</p>
                <p className="text-red-700 font-bold text-lg">You're $48,000 underwater. That's business suicide.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                You need enough profit to absorb the first-year investment PLUS generate additional revenue from the time you save. That requires $300K+ revenue, documented workflows, and 20+ hours weekly of consistent work.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Regional Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Regional Reality: USA, Australia, New Zealand</h2>
              <p className="text-lg text-gray-600">Location choice impacts collaboration and costs</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">USA Market</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Filipino developers work night shift (Philippines time) to match USA business hours. When it's 9am-5pm in New York or Los Angeles, your team is working their professional night shift. Real-time collaboration, instant Slack responses, live video calls during your workday.
              </p>
              <h4 className="font-bold text-gray-900 mb-3">Cost comparison (all-in Year One):</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• USA developer: $104,000-195,000</li>
                <li>• Eastern Europe: $73,000-145,000</li>
                <li>• Philippines: $62,000-110,000</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Australia/New Zealand Advantage</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Philippines is +2 to +4 hours from Australian Eastern Time, +4 to +5 from New Zealand. Your developers work during their daytime, which overlaps your afternoon/evening. Natural timezone collaboration that USA companies can't access.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                When USA businesses hire Philippines developers, they require night shift work. When YOU hire the same developers, they work their normal daytime hours that naturally align with your business hours. Same rates, dramatically better timezone.
              </p>
              <h4 className="font-bold text-gray-900 mb-3">Cost comparison (AUD/NZD):</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Local developer: $145,000-270,000 Year One</li>
                <li>• Philippines: $62,000-105,000 Year One</li>
                <li>• <strong>Savings: 55-65% with superior timezone fit</strong></li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What You Should Never Outsource Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What You Should Never Outsource</h2>
              <p className="text-lg text-gray-600">These seven tasks destroy value when outsourced</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  {
                    title: "Brand strategy and core messaging",
                    description: "Implement guidelines offshore, create strategy in-house"
                  },
                  {
                    title: "User experience strategy",
                    description: "Build specified flows offshore, determine what users need in-house"
                  },
                  {
                    title: "Core product features",
                    description: "Standard features can be outsourced, proprietary algorithms can't"
                  },
                  {
                    title: "Security and authentication",
                    description: "Use proven libraries offshore, keep custom security logic in-house"
                  },
                  {
                    title: "Architecture decisions",
                    description: "Build within your architecture offshore, make structural decisions in-house"
                  },
                  {
                    title: "Customer-facing copy",
                    description: "Body content can be outsourced, homepage/product pages can't"
                  },
                  {
                    title: "CRO decisions",
                    description: "Implement tests offshore, decide what to test in-house"
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
        </section>

        <Separator className="my-12" />

        {/* Freelancer vs Agency Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-100 rounded-full p-3">
              <Users className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Freelancer vs Agency: The $84,000 Decision</h2>
              <p className="text-lg text-gray-600">Most companies get this wrong and pay dearly for it</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Freelancer Reality:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                70-80% failure rate. You'll try 3-4 freelancers on average before finding someone competent. Each failed attempt costs $28,000-100,000 in wasted spend, timeline delays, and starting over.
              </p>
              <p className="text-red-700 font-bold text-lg">
                Total waste: $84,000-300,000 before you find success.
              </p>
              <h4 className="font-bold text-gray-900 mt-4 mb-3">When freelancers work:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• One-time project under $15,000</li>
                <li>• You have technical oversight in-house</li>
                <li>• Timeline is flexible (3-6 months acceptable)</li>
                <li>• You're experienced managing remote developers</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Agency Reality:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                60-70% success rate. Costs $3,000-10,000/month ($36,000-120,000/year). You pay 40% premium but get vetted developers, backup coverage, and accountability.
              </p>
              <h4 className="font-bold text-gray-900 mt-4 mb-3">When agencies work:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• First time outsourcing</li>
                <li>• Mission-critical website</li>
                <li>• No technical oversight in-house</li>
                <li>• Need reliability over cost savings</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Hybrid Model (What Smart Companies Do):</h3>
              <div className="space-y-3 text-sm text-gray-700 mb-4">
                <p>• 1 senior developer in-house (USA): <strong>$120,000</strong></p>
                <p>• 2 developers offshore (Philippines): <strong>$50,000-60,000</strong></p>
                <p className="mt-3">Senior reviews all offshore work. Offshore handles routine features and maintenance. Senior handles architecture, core features, critical systems.</p>
              </div>
              <p className="text-gray-800 font-semibold">
                Total cost: $170,000-180,000 for output equivalent to 3-4 in-house developers. Risk: Low because of in-house oversight.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* ShoreAgents Qualification Framework Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">ShoreAgents Qualification Framework</h2>
              <p className="text-lg text-gray-600">We place full-time Filipino developers at $1,200-2,500/month. But only after determining if you're actually ready.</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">You're Ready When:</h3>
              <div className="space-y-3">
                {[
                  "Annual revenue exceeds $300,000",
                  "Minimum 20 hours/week ongoing website work",
                  "Workflows documented with written specifications",
                  "Using project management software",
                  "Brand guidelines exist",
                  "5+ hours weekly management bandwidth for first 90 days",
                  "Financial capacity to invest $60,000-110,000 Year One",
                  "18-24 month commitment",
                  "Clear separation: proprietary work vs outsourceable work",
                  "Technical oversight available"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <div className="space-y-3">
                <p className="text-gray-800 font-semibold">
                  <strong>Fewer than 7 boxes checked:</strong> Not ready. Focus on documentation and systems first.
                </p>
                <p className="text-gray-800 font-semibold">
                  <strong>7-8 boxes:</strong> Potentially ready but need guidance to avoid pitfalls.
                </p>
                <p className="text-gray-800 font-semibold">
                  <strong>9-10 boxes:</strong> Positioned to succeed where 70-80% fail.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Honest Truth Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Honest Truth</h2>
          
          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                The successful 20-30% of companies that make website outsourcing work understand something the failures don't: this is a business investment requiring proper capitalisation, systematic implementation, and realistic timelines.
              </p>
              <p className="text-gray-800 leading-relaxed">
                They document everything before hiring. They budget for true all-in costs. They allocate management time. They commit to 18-24 months before breaking even. They don't chase the cheapest rates—they invest in the right implementation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                The failures hire too early, underestimate management time, chase bottom-dollar rates, and expect immediate results. Then they spend $87,000 rebuilding what they thought they got for $29,000.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Website outsourcing works brilliantly when implemented properly. It fails spectacularly when attempted too early with insufficient preparation.
              </p>
              <p className="text-gray-900 font-bold text-xl text-center mt-4">
                Are you ready? Probably not if this is your first time learning about the real costs. Probably yes if you've been documenting workflows, hitting revenue thresholds, and preparing for months.
              </p>
              <p className="text-gray-900 font-bold text-xl text-center mt-4">
                The question isn't whether website outsourcing works—it does, for companies that implement it properly. The question is whether you're positioned to be in the successful 20-30%, or the 70-80% who learn expensive lessons about preparation.
              </p>
              <p className="text-gray-900 font-bold text-xl text-center mt-4">
                Know which side you're on before spending a dollar.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for an Honest Assessment?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Contact ShoreAgents to determine if you're positioned to be in the successful 20-30%, or if you need to prepare first.
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
            Website outsourcing works brilliantly when implemented properly. Know which side of the $300K threshold you're on before spending a dollar.
          </p>
        </div>
      </div>
    </div>
  );
}
