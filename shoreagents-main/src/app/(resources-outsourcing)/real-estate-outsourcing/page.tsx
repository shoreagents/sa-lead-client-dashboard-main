"use client";

import { SideNav } from "@/components/layout/SideNav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";
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
  Globe,
  Phone
} from "lucide-react";
import Link from "next/link";

export default function RealEstateOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['real-estate-outsourcing']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For $500K+ Real Estate Businesses
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Real Estate Outsourcing:<br />
              <span className="text-lime-600">The $76,600 Reality Nobody Tells You</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Let me be blunt with you, mate. I've been running offshore staff for real estate businesses for 15 years now. 
              I've placed over 500 VAs. And here's what nobody else in this space will tell you: <strong>if you're doing under 
              $500K in annual revenue, real estate outsourcing will probably lose you money.</strong>
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
            Yeah, I just told you NOT to buy what I'm selling. That's because I reckon you deserve the truth, not another sales 
            pitch about "saving 70% on costs" that conveniently forgets to mention you'll be slower for the first 60 days, not faster.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This guide is for medium to large real estate businesses in the USA, Australia, and New Zealand—agencies pulling $500K+ 
            annually, managing 20-30+ properties, or running teams where your time is worth $150+/hour. If that's you, real estate 
            outsourcing can legitimately transform your business. If that's not you yet? Bookmark this and come back when you're ready.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This guide is for:</strong> Medium to large real estate businesses doing $500K+ annual revenue, managing 
                20-30+ properties, or running teams where your time is worth $150+/hour. If you're a solo agent or startup, bookmark 
                this for later.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* The Reality Check Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <AlertCircle className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Reality Check: What Every Competitor Gets Wrong</h2>
              <p className="text-lg text-gray-600">Walk into any real estate conference and you'll hear the same promises</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Walk into any real estate conference and you'll hear the same promises: "Hire a VA for $15/hour! Save 70%! Scale instantly!" 
            What they don't tell you is that <strong>70% of real estate outsourcing partnerships fail within 90 days.</strong>
          </p>

          <Card className="border-red-200 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Here's what actually happens:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-800">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>You hire someone for "$15/hour"</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>Spend 60 hours training them (that's <strong>$9,000 of YOUR time</strong> if you bill at $150/hour)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>Invest in software licenses ($2,000+/year)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>Manage them 4 hours per week ($31,200 annually)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>Deal with mistakes during the first 90 days ($5,000 in rework)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-900 font-bold">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Suddenly that "$15/hour VA" costs you <strong>$76,600 in year one</strong></span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                <strong>That's the real cost. Not the advertised hourly rate.</strong>
              </p>
              <p className="text-gray-800 leading-relaxed">
                Now, does that mean real estate outsourcing doesn't work? Not at all. I've got clients in Australia earning perfect 
                5/5 performance reviews after six years with the same VA. American real estate teams that have scaled from 3 to 8 agents 
                with Filipino support handling all the backend. New Zealand property managers who describe their offshore staff as 
                "legends" who are irreplaceable.
              </p>
              <p className="text-gray-800 leading-relaxed mt-4">
                The difference? They went in with realistic expectations, proper revenue to support the investment, and understood they 
                were building a long-term asset, not finding cheap labor.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When You're NOT Ready Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When Real Estate Outsourcing Actually DESTROYS Your Business</h2>
              <p className="text-lg text-gray-600">Here's the section nobody else writes. When you should NOT outsource</p>
            </div>
          </div>
          
          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Don't outsource if:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "You're under $500K annual revenue (or managing under 20-30 properties)",
                  "You have no documented processes",
                  "Your business pivots constantly",
                  "Personal client service is your differentiator",
                  "You don't have 5-10 hours per week to manage",
                  "You're in your first 90 days of business"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-300 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tasks you should NEVER delegate:</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "High-stakes client negotiations",
                    description: "Real-time decisions require local experience"
                  },
                  {
                    title: "Fair housing sensitive communications in the USA",
                    description: "Legal liability is too high"
                  },
                  {
                    title: "Pricing strategy",
                    description: "Requires intimate market knowledge"
                  },
                  {
                    title: "License-requiring activities",
                    description: "Contract advice, trust accounting"
                  },
                  {
                    title: "Strategic business decisions",
                    description: "Your vision, your risk, your call"
                  }
                ].map((task, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {index + 1}
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

          <Card className="bg-gray-100 border-l-4 border-gray-600">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold mb-2">⚠️ Cautionary Tales:</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                I've seen real estate businesses crash and burn because they outsourced the wrong things. One Sydney agency delegated 
                client-facing communications to a VA with a heavy accent—lost three luxury listings worth $150K in commission because 
                clients felt they weren't getting "premium service."
              </p>
              <p className="text-gray-700 leading-relaxed">
                Another Melbourne property manager handed off trust accounting to offshore staff—compliance nightmare that nearly cost 
                them their license.
              </p>
              <p className="text-gray-800 font-semibold mt-4">
                Don't be those people. Some tasks simply cannot be delegated offshore, no matter how good the VA.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What Actually Works Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What You CAN Outsource in Real Estate (And What Actually Works)</h2>
              <p className="text-lg text-gray-600">Right, now that I've scared off the people who shouldn't be doing this</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Perfect for delegation:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "MLS listing updates",
                    items: ["Photos, descriptions, price changes", "Administrative grunt work"]
                  },
                  {
                    title: "CRM management",
                    items: ["Contact updates, pipeline tracking", "Data entry"]
                  },
                  {
                    title: "Transaction coordination",
                    items: ["Document tracking, deadline management", "Compliance checklists"]
                  },
                  {
                    title: "Appointment scheduling",
                    items: ["Internal coordination", "Showing bookings"]
                  },
                  {
                    title: "Marketing material creation",
                    items: ["Flyers, social media graphics, property brochures", "With brand guidelines"]
                  },
                  {
                    title: "Lead list building",
                    items: ["Research, prospecting", "Database compilation"]
                  },
                  {
                    title: "Email inbox management",
                    items: ["Sorting, filtering", "Flagging priorities"]
                  },
                  {
                    title: "Property management admin",
                    items: ["Tenant communication, maintenance coordination", "Rent collection follow-up"]
                  }
                ].map((category, index) => (
                  <Card key={index} className="bg-white border-green-200">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <h4 className="text-lg font-bold text-gray-900">{category.title}</h4>
                      </div>
                      <ul className="space-y-2 ml-9">
                        {category.items.map((item, i) => (
                          <li key={i} className="text-gray-700 text-sm">{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Real Advantage: Timezone Mathematics</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The real advantage? Filipino VAs working Australian or New Zealand hours have a geographic gift. While American real 
                estate agencies deal with their VAs working graveyard shifts (your 9am = their 9pm), Australian and Kiwi businesses 
                get natural daytime overlap. Philippines is only +2 to +4 hours ahead—your business hours ARE their business hours.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For USA clients, you wake up to completed overnight work. For AU/NZ clients, you get real-time collaboration without the 
                burnout risk. That's not marketing talk—that's timezone mathematics.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* True Costs Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The True Cost: Stop Believing the "$15/Hour" Myth</h2>
              <p className="text-lg text-gray-600">Everyone advertises hourly rates. Nobody shows you the all-in first-year cost</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Year One Investment (USA Example):</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <Card className="border-gray-300 bg-white mb-4">
                    <CardContent className="p-6 text-center">
                      <p className="text-sm text-gray-600 mb-2">Advertised:</p>
                      <p className="text-5xl font-bold text-gray-900">$15<span className="text-xl text-gray-600">/hour</span></p>
                    </CardContent>
                  </Card>
                  <Card className="border-blue-400 bg-white">
                    <CardContent className="p-6 text-center">
                      <p className="text-sm text-gray-600 mb-2">Actual Year One:</p>
                      <p className="text-5xl font-bold text-blue-600">$37<span className="text-xl text-gray-600">/hour</span></p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-white border-blue-300">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Year One Cost Breakdown:</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-700">VA salary:</span>
                        <span className="font-semibold">$21,600</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Software/tools:</span>
                        <span className="font-semibold">$1,800</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Your training time (60 hrs @ $150/hr):</span>
                        <span className="font-semibold">$9,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Your management time (4 hrs/wk):</span>
                        <span className="font-semibold">$31,200</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Mistakes/rework (first 90 days):</span>
                        <span className="font-semibold">$5,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Initial productivity loss:</span>
                        <span className="font-semibold">$8,000</span>
                      </div>
                      <Separator className="my-3" />
                      <div className="flex justify-between pt-2">
                        <span className="font-bold text-gray-900">Total Year One:</span>
                        <span className="font-bold text-blue-600">$76,600</span>
                      </div>
                      <div className="flex justify-between pt-2">
                        <span className="font-bold text-gray-900">Effective hourly rate:</span>
                        <span className="font-bold text-blue-600">$37/hour (not $15)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-white border-blue-300 mb-4">
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-900 mb-4">Year Two (Ongoing):</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700">VA salary:</span>
                      <span className="font-semibold">$21,600</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Software:</span>
                      <span className="font-semibold">$1,800</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Management (2 hrs/week):</span>
                      <span className="font-semibold">$15,600</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Occasional mistakes:</span>
                      <span className="font-semibold">$1,000</span>
                    </div>
                    <Separator className="my-3" />
                    <div className="flex justify-between pt-2">
                      <span className="font-bold text-gray-900">Total Year Two:</span>
                      <span className="font-bold text-blue-600">$40,000</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="font-bold text-gray-900">Effective rate:</span>
                      <span className="font-bold text-blue-600">$19/hour</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <p className="text-sm text-gray-700 text-center italic mb-4">
                Break-even point? Month 18-24.
              </p>
              <p className="text-sm text-gray-700 text-center">
                When does it make sense? When the 15+ hours per week you reclaim are worth $9,000+/month in billable time or revenue 
                generation. If you're billing $150+/hour, that's easy maths. If you're a $50K/year solo agent? The maths don't work.
              </p>
              <p className="text-sm text-gray-700 text-center mt-4">
                For Australian and New Zealand businesses: Add 20-30% to these numbers for local currency conversion, but remember 
                your local staff comparison is even more expensive ($60K-80K AUD/NZD for admin vs $28K-35K for offshore), so your 
                savings ratio is actually better.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* 90-Day Timeline Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-100 rounded-full p-3">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 90-Day Timeline: Why You'll Be Slower Before You're Faster</h2>
              <p className="text-lg text-gray-600">Every competitor promises "immediate time savings" and "instant scale." That's absolute rubbish.</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                period: "Month 1 (Days 1-30)",
                periodColor: "bg-red-600",
                title: "The Investment Phase",
                description: "Your productivity: ↓ 20-30% (you're SLOWER, not faster). Daily 30-60 minute check-ins required. Creating training materials (Looms, SOPs, checklists). Answering constant questions. Fixing mistakes.",
                details: "Time invested: 40-60 hours. Value created: Minimal. Temptation to quit: HIGHEST.",
                borderColor: "border-red-300",
                bgColor: "bg-red-50",
                textColor: "text-red-700"
              },
              {
                period: "Month 2 (Days 30-60)",
                periodColor: "bg-amber-600",
                title: "The Frustration Phase",
                description: "Your productivity: ↓ 10-15% (still net negative). VA contributing but quality inconsistent. Still 5-10 hours/week managing. Small time savings appearing (5 hours/week). Break-even on time (not losing, not gaining much).",
                borderColor: "border-amber-300",
                bgColor: "bg-amber-50",
                textColor: "text-amber-700"
              },
              {
                period: "Month 3 (Days 60-90)",
                periodColor: "bg-blue-600",
                title: "The Turning Point",
                description: "Your productivity: +5-10% (small positive). VA becoming independent on routine tasks. Quality improving noticeably. Management drops to 3-5 hours/week. Small positive ROI starting.",
                borderColor: "border-blue-300",
                bgColor: "bg-blue-50"
              },
              {
                period: "Month 4-6",
                periodColor: "bg-green-600",
                title: "The Payoff Phase",
                description: "Your productivity: +20-40% (real gains). VA handling 15-20 hours/week confidently. You've reclaimed 10-15 hours of productive time. Management down to 2-3 hours/week. Real ROI visible: 3-5x return.",
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

          <Card className="bg-gray-100 border-l-4 border-gray-600 mt-8">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold mb-2">⚠️ The Hard Truth:</p>
              <p className="text-gray-700 leading-relaxed">
                Most failures happen in Month 1-2. People expect immediate results, get frustrated when they're actually SLOWER 
                initially, and quit before reaching the payoff phase. That's why setting realistic expectations matters more than 
                selling the dream.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Philippines vs Latin America Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Philippines vs Latin America vs Local: The Honest Comparison</h2>
              <p className="text-lg text-gray-600">Not all offshore locations are equal, and nobody gives you the straight goods on this</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Philippines</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold">Cost:</span> <span className="text-gray-700">$8-15/hour</span>
                  </div>
                  <div>
                    <span className="font-semibold">English level:</span> <span className="text-gray-700">Excellent (accent present but clear)</span>
                  </div>
                  <div>
                    <span className="font-semibold">USA time zone:</span> <span className="text-gray-700">Staff work night shift to match your business hours</span>
                  </div>
                  <div>
                    <span className="font-semibold">AU/NZ time zone:</span> <span className="text-gray-700">+2 to +4 hours (natural daytime overlap)</span>
                  </div>
                  <div>
                    <span className="font-semibold">Cultural fit:</span> <span className="text-gray-700">High (service-oriented culture)</span>
                  </div>
                  <div>
                    <span className="font-semibold">Best for:</span> <span className="text-gray-700">All administrative roles, transaction coordination</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Latin America</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold">Cost:</span> <span className="text-gray-700">$12-25/hour (20-50% premium)</span>
                  </div>
                  <div>
                    <span className="font-semibold">English level:</span> <span className="text-gray-700">Native/bilingual</span>
                  </div>
                  <div>
                    <span className="font-semibold">USA time zone:</span> <span className="text-gray-700">-1 to -3 hours (natural daytime alignment)</span>
                  </div>
                  <div>
                    <span className="font-semibold">AU/NZ time zone:</span> <span className="text-gray-700">-14 to -18 hours (poor overlap)</span>
                  </div>
                  <div>
                    <span className="font-semibold">Cultural fit:</span> <span className="text-gray-700">Very high (Western work culture)</span>
                  </div>
                  <div>
                    <span className="font-semibold">Best for:</span> <span className="text-gray-700">Sales roles where native accent matters</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-300 bg-gray-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Local (USA/AU/NZ)</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold">Cost:</span> <span className="text-gray-700">$25-60/hour (3-5x offshore rates)</span>
                  </div>
                  <div>
                    <span className="font-semibold">English level:</span> <span className="text-gray-700">Native</span>
                  </div>
                  <div>
                    <span className="font-semibold">Time zone:</span> <span className="text-gray-700">Same</span>
                  </div>
                  <div>
                    <span className="font-semibold">Cultural fit:</span> <span className="text-gray-700">Perfect</span>
                  </div>
                  <div>
                    <span className="font-semibold">Best for:</span> <span className="text-gray-700">High-touch client roles requiring local market expertise</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-lime-50 border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Real Decision Framework:</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">For USA/Canada Businesses:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Filipino VAs work night shift (their time) to match your 9am-5pm business hours. They're available during YOUR day 
                    for Slack messages, Zoom calls, client support—everything happens in real-time during your working hours. This 
                    works for 95% of real estate roles.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    Latin America costs 20-50% more but staff work natural daytime hours. The premium buys you native English accent 
                    for phone-heavy roles where accent perception matters—luxury sales, high-volume ISA calling.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">For Australia/New Zealand Businesses:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Philippines is the obvious winner. Staff work natural daytime hours (+2 to +4 hours) with perfect overlap during your 
                    business hours. No night shift required, no burnout risk, natural real-time collaboration for ALL roles. This is 
                    why 80% of my clients are AU/NZ—the timezone alignment is genuinely perfect.
                  </p>
                </div>
                <p className="text-gray-800 font-semibold mt-4">
                  Bottom line: Philippines delivers exceptional value for USA clients and perfect timezone alignment for AU/NZ clients. 
                  Latin America is the premium option when native accent is worth the 20-50% cost increase.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Real Success Stories Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Real Success: What Actually Works in Practice</h2>
              <p className="text-lg text-gray-600">I'm not going to make up bullshit case studies. Here are real clients</p>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                company: "Barry Plant Property Management (Australia)",
                description: "Started with one property management specialist. Conservative approach, professional reviews, specialized expertise. Result: Successful integration that protects their brand while improving efficiency."
              },
              {
                company: "Century 21 Rich River (Australia)",
                description: "Hired a team for property management and multimedia. Management's assessment after experience: \"The whole team there are legends.\" Not generic praise—that's \"we couldn't run without them\" recognition."
              },
              {
                company: "Jason Gard Real Estate (Australia)",
                description: "Needed to stop drowning in back-office work. Three years later: Perfect performance reviews, handling system automation, considering hybrid work arrangements because the trust is absolute."
              },
              {
                company: "Professionals McDowell (New Zealand)",
                description: "Started conservative, tested the approach. Years later: Perfect 5/5 performance ratings, \"If we could clone her we would\" from management. That's the irreplaceable team member every business wants."
              }
            ].map((story, index) => (
              <Card key={index} className="border-lime-300 bg-lime-50">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{story.company}</h4>
                  <p className="text-gray-700 leading-relaxed">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-green-300 bg-green-50 mt-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What do these success stories have in common?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>They started conservative (one person, not a full team)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>They measured results professionally (not promotional testimonials, actual performance reviews)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>They committed long-term (years, not months)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>They specialized (property management expertise, not generic admin)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>And they integrated culturally (team members, not service providers)</span>
                </li>
              </ul>
              <p className="text-gray-800 font-semibold mt-4">
                That's the blueprint. Not sexy, not fast, but it works.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When This Doesn't Work Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Honest Bit: When This Doesn't Work</h2>
              <p className="text-lg text-gray-600">I promised brutal honesty, so here it is</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real estate outsourcing fails when:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "You're looking for \"cheap labor\" (you'll get what you pay for)",
                  "You're a solopreneur or startup (you're not big enough yet)",
                  "You want someone to \"figure it out\" (they need your processes documented)",
                  "You can't commit management time (5-10 hours weekly initially)",
                  "You're constantly pivoting (training investment wasted)",
                  "Your revenue doesn't support the investment (under $500K annually)",
                  "You expect immediate results (60-90 days minimum before ROI)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border-l-4 border-gray-600">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold mb-2">Freelancer Platforms vs VA Companies:</p>
              <p className="text-gray-700 leading-relaxed">
                Freelancer platforms (Upwork, Fiverr) have 70-80% failure rates in real estate. You'll spend 4 months and $6,000+ 
                finding ONE person who works out. VA companies (like us) cost more upfront ($1,800-2,500/month vs $800-1,200 for 
                freelancers), but have 60-70% success rates with backup coverage, vetted candidates, and replacement guarantees.
              </p>
              <p className="text-gray-800 font-semibold mt-4">
                The math: Spend $6,200 on failed freelancer attempts to eventually find success, or pay $5,800 more in year one for 
                professional vetting, training support, and backup coverage. Most people cheap out, then learn the expensive way.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Are You Ready Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Next Step: Are You Actually Ready?</h2>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Most people reading this aren't ready. That's fine—bookmark it and come back when your revenue hits $500K+, when you've 
            documented your core processes, or when your time is genuinely worth $150+/hour.
          </p>

          <Card className="border-lime-300 bg-gradient-to-br from-lime-50 to-green-50 mb-8">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">If you ARE ready, here's what to do:</h3>
              <div className="space-y-4">
                {[
                  "Document your top 10 recurring tasks (what specifically needs delegation)",
                  "Calculate your true hourly value (total revenue ÷ hours worked)",
                  "Commit 5-10 hours per week for first 90 days (management time required)",
                  "Set aside first-year budget ($40K-75K depending on market)",
                  "Accept the 90-day timeline (you'll be slower initially)"
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-lime-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-gray-800 text-lg pt-0.5">{step}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 text-white">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-6">
                At ShoreAgents, our real estate VA pricing runs <strong className="text-lime-400">$1,200-2,500/month full-time</strong> 
                depending on expertise level and workspace setup. That's all-inclusive—salary, benefits, management, infrastructure, 
                backup coverage.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We work with USA, Australian, and New Zealand real estate businesses that are serious about long-term offshore team 
                building, not cheap labor experiments.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                We're not the cheapest. We're not the biggest. But we're the ones telling you NOT to hire unless you're actually ready. 
                Because successful partnerships matter more than quick sales.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for an Honest Assessment?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Want the honest conversation? Schedule a consultation where we'll actually tell you if you're ready or if you should wait.
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
            <p className="text-lime-100 mt-6 text-sm">
              Not ready yet? Learn more about our approach and come back when the timing's right.
            </p>
          </CardContent>
        </Card>

        {/* Final Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            Real estate outsourcing works brilliantly—when done right, by the right businesses, at the right time. Are you there yet?
          </p>
        </div>
      </div>
    </div>
  );
}
