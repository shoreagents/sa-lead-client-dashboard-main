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
  Moon,
  TrendingUp,
  FileText,
  Phone,
  Calculator,
  Users
} from "lucide-react";
import Link from "next/link";

export default function PropertyManagementOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For 100+ Rental Units
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Property Management Virtual Assistant:<br />
              <span className="text-lime-600">The $30,000 Decision</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Managing 100+ rental units? You're spending roughly <strong>30 hours every week on admin work</strong> that someone else 
              could handle for $1,500/month. That's data entry, tenant emails, maintenance coordination, rent reminders, and CRM updates—work 
              that keeps your operation running but doesn't require you specifically.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/pricing" 
                className="inline-flex items-center px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors"
              >
                Get Property Management Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/case-studies" 
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-lime-600 transition-colors"
              >
                View Success Stories
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
            At 100 units, you're either paying $50,000+ for local admin staff or burning 1,500+ hours per year doing it yourself.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Here's the reality most property management companies figure out too late: A Philippines virtual assistant costs $19,800 
            per year and handles 70% of your back-office work while you sleep*. They work US daytime hours (night shift for them), 
            you wake up to completed tasks, and you save $30,000-50,000 annually compared to local staff.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>But only if you set it up right.</strong>
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* The Numbers Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Numbers Everyone Avoids Talking About</h2>
              <p className="text-lg text-gray-600">Let's break down the real costs</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Local Admin Staff in the US:</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Salary:</span>
                    <span className="font-semibold">$40,000-55,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Benefits:</span>
                    <span className="font-semibold">$8,000-12,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Office space:</span>
                    <span className="font-semibold">$3,000-6,000</span>
                  </div>
                  <Separator className="my-3" />
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">Total:</span>
                    <span className="font-bold text-red-600">$51,000-73,000 per year</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Philippines VA Through Shore Agents:</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monthly cost:</span>
                    <span className="font-semibold">$1,650/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Setup fee (one-time):</span>
                    <span className="font-semibold">$1,100</span>
                  </div>
                  <Separator className="my-3" />
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">Year 1:</span>
                    <span className="font-bold text-lime-600">$20,900 total</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">Year 2+:</span>
                    <span className="font-bold text-lime-600">$19,800 annually</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-lime-50 border-l-4 border-lime-500">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                At 100 units generating $15,000/month in management fees, that VA represents <strong>11% of your gross revenue</strong>. 
                Local staff? <strong>28-40%</strong>.
              </p>
              <p className="text-gray-800 font-semibold">
                The math isn't complicated. You're paying 3x more for the same work output.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What Your VA Actually Does Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Your VA Actually Does</h2>
              <p className="text-lg text-gray-600">Think about what buried you last week</p>
            </div>
          </div>
          
          <Card className="border-gray-300 bg-gray-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Your Typical Week Without a VA:</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Monday morning:</strong> 47 unread tenant emails, 12 maintenance requests sitting in your inbox, and 3 owner reports you promised by Friday.</p>
                <p><strong>Tuesday:</strong> Spent 4 hours entering work orders into AppFolio and updating tenant records from move-outs.</p>
                <p><strong>Wednesday:</strong> Chasing down late rent payments, updating listings across Zillow and Apartments.com, scheduling contractor visits.</p>
                <p><strong>Thursday:</strong> Processing invoices, generating owner statements, coordinating showing schedules with agents.</p>
                <p><strong>Friday:</strong> You're caught up. Until Monday hits and it starts over.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Here's what changes with a VA:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your VA works US business hours—9am to 5pm your time. They're handling tasks during your day while you focus on owner 
                relationships, complex negotiations, property acquisitions, and the work that actually grows your business.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Need something done? Assign it in your task system. They're working your schedule, responding to tenant emails while you're 
                in meetings, entering work orders while you're doing property inspections, processing invoices while you're closing deals.
              </p>
              <p className="text-gray-800 font-semibold mt-4">
                You're not waiting for overnight work. You're delegating during the day and moving forward.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Night Shift Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-purple-100 rounded-full p-3">
              <Moon className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Night Shift Reality (For Them)</h2>
              <p className="text-lg text-gray-600">Let's address what every BPO company glosses over</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Let's address what every BPO company glosses over: <strong>Your VA works night shift in the Philippines.</strong>
          </p>

          <Card className="border-purple-300 bg-purple-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Manila is 12-16 hours ahead. Your 9am = their 9pm. Your 5pm = their 5am. They're working graveyard shift to match US 
                business hours.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Most companies either hide this or pretend it doesn't matter. We've been doing this since 2012—it matters if you don't 
                handle it right.
              </p>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What we do about it:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                  <span>Shore Agents has health and wellness programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                  <span>Shift rotation options</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                  <span>Performance monitoring for early burnout detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                  <span>Career progression paths</span>
                </li>
              </ul>
              <p className="text-gray-800 font-semibold mt-4">
                These aren't marketing promises—they're operational requirements because we want VAs staying 3-5 years, not burning out in 18 months.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Your responsibility:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold mt-1">•</span>
                  <span>Respect that they're working night shift to support your business day</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold mt-1">•</span>
                  <span>Don't pile urgent tasks at the end of their shift when they're exhausted</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold mt-1">•</span>
                  <span>Use the task management system so they can plan their workload</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold mt-1">•</span>
                  <span>Appreciate the work—night shift is harder than day shift</span>
                </li>
              </ul>
              <p className="text-gray-800 font-semibold mt-4">
                The companies crushing it with Philippines VAs? They treat their VAs well and build sustainable workflows. The ones failing? 
                They treat VAs like disposable robots and wonder why turnover is brutal.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What They Handle Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What They Handle (And What They Don't)</h2>
              <p className="text-lg text-gray-600">Where VAs excel and where they don't</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Where VAs excel:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Tenant communication",
                    items: ["Using your scripts and templates", "Application processing and tracking", "Lease renewal coordination", "Move-in/move-out documentation", "Rent collection tracking and late fee calculations"]
                  },
                  {
                    title: "Property management software",
                    items: ["AppFolio, Buildium, Rent Manager data entry", "Daily CRM updates", "Work order creation and tracking", "Payment processing", "Document organization"]
                  },
                  {
                    title: "Financial admin",
                    items: ["Invoice processing", "Expense categorization", "Owner distributions", "Monthly reporting"]
                  },
                  {
                    title: "Marketing and listings",
                    items: ["MLS, Zillow, and Apartments.com updates", "Photo galleries", "Virtual tour coordination", "Lead tracking"]
                  },
                  {
                    title: "Vendor coordination",
                    items: ["Work order assignment", "Contractor scheduling", "Job completion follow-up", "Maintenance tracking"]
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
              <p className="text-gray-800 font-semibold mt-6 text-center">
                Add it up: 60-80 hours per week of execution work at $9-10/hour vs $25-35/hour for local staff doing identical tasks.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-4">Where they don't:</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Physical tasks</h4>
                  <p className="text-gray-700">
                    On-site showings, inspections, emergency response requiring immediate presence. Obviously a VA in Manila can't do a 
                    property walkthrough in Dallas.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Strategic decisions</h4>
                  <p className="text-gray-700">
                    Complex lease negotiations, owner conflicts, major expenditure approvals, legal compliance interpretation. VAs execute 
                    your decisions—they don't make them.
                  </p>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                That's the difference between task executor and decision maker. Know it, respect it, and you'll be successful.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Platform Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Why Our Platform Actually Matters</h2>
              <p className="text-lg text-gray-600">Most BPO companies operate on "trust us, they're working." That's bullshit.</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Shore Agents built actual software. You get a dashboard that updates every 60 seconds showing:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Clock-in/clock-out tracking",
                  "Live productivity scores (0-100%)",
                  "Task completion status",
                  "Hours worked to the minute"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                You're not hoping they're working—you're seeing real data.
              </p>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Built-in task management means:</h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                  <span>You create a task, assign your VA, set a due date, and get instant notification</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                  <span>Real-time status tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                  <span>File attachments in each task</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                  <span>Completion timestamps</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                  <span>You see your entire team's workload at a glance</span>
                </li>
              </ul>
              <p className="text-gray-800 font-semibold">
                No more email chains. No "did you get my message?" Just clear assignment and execution tracking.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Training Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-100 rounded-full p-3">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Training Reality</h2>
              <p className="text-lg text-gray-600">"AppFolio-trained VAs" is marketing speak</p>
            </div>
          </div>

          <Card className="bg-amber-50 border-l-4 border-amber-500 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                "AppFolio-trained VAs" is marketing speak. What it actually means: they know basic navigation. They don't know YOUR setup, 
                YOUR workflows, YOUR vendor network, YOUR reporting needs.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real timeline:</h3>
              <div className="space-y-4">
                {[
                  {
                    period: "Week 1-2",
                    description: "Learning your specific system. Your custom fields, templates, workflow preferences."
                  },
                  {
                    period: "Week 3-4",
                    description: "Supervised execution. They do tasks, you review and correct."
                  },
                  {
                    period: "Week 5-8",
                    description: "Semi-independent work. They handle most tasks with spot-checks."
                  },
                  {
                    period: "Month 3-4",
                    description: "Fully independent. They're crushing 80% of tasks without questions."
                  }
                ].map((phase, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Badge className="bg-blue-600 text-white">{phase.period}</Badge>
                    <p className="text-gray-700 flex-1">{phase.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-semibold mt-6">
                That's 30-60 days to full productivity. Not "day one ready" like competitors claim, but honest and it works.
              </p>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Your training investment: 30-40 hours over the first two months. Mostly creating Loom videos documenting your processes. 
                Yeah, it sucks. But Month 3 forward, that VA saves you 80-100 hours monthly.
              </p>
              <p className="text-gray-800 font-semibold">
                Do the math: 40 hours invested, 1,200+ hours saved annually.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When This Makes Sense Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When This Makes Sense (And When It Doesn't)</h2>
              <p className="text-lg text-gray-600">You're ready if...</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">You're ready if:</h3>
              <div className="space-y-3">
                {[
                  "You're managing 100-500 units. This is the sweet spot. VA costs 10-15% of management fee revenue, saves you massive time.",
                  "You're drowning in data entry, tenant communication, maintenance coordination, report generation, listing management, invoice processing.",
                  "You have basic processes documented or can create them. Even just Loom videos showing how you do things.",
                  "You understand this takes 30-60 days to full productivity, not plug-and-play day one."
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">You're not ready if:</h3>
              <div className="space-y-3">
                {[
                  "You're under 50 units. Not enough volume to keep a VA busy full-time. Come back when you grow.",
                  "Everything is \"in your head\" with zero documentation. You'd be creating training while training the VA, which is painful.",
                  "You expect instant productivity or want someone making strategic decisions vs executing tasks.",
                  "Most of your work requires physical presence. VAs handle remote work—if 80% of your job is on-site, this isn't the solution."
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

        {/* Real ROI Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Real ROI</h2>
              <p className="text-lg text-gray-600">Let's break down the numbers</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Year 1 investment:</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">VA cost:</span>
                    <span className="font-semibold">$20,900</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Your training time:</span>
                    <span className="font-semibold">40 hours over 2 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Software and setup:</span>
                    <span className="font-semibold">minimal</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Year 1 return:</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Time saved:</span>
                    <span className="font-semibold">1,200+ hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Your hourly value at 100+ units:</span>
                    <span className="font-semibold">$75-150/hour minimum</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Value of time saved:</span>
                    <span className="font-semibold">$90,000-180,000</span>
                  </div>
                  <Separator className="my-3" />
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">Net benefit:</span>
                    <span className="font-bold text-lime-600 text-lg">$69,000-159,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Year 2+ ongoing:</h3>
              <div className="space-y-3 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Cost:</span>
                  <span className="font-semibold">$19,800/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Management time:</span>
                  <span className="font-semibold">2-3 hours weekly</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Savings vs local staff:</span>
                  <span className="font-semibold">$30,000-50,000 annually</span>
                </div>
              </div>
              <div className="space-y-2 text-gray-700">
                <p>At 100 units, you're basically printing money by not overpaying for local staff to do work a VA handles perfectly.</p>
                <p>At 200 units, you can afford 2-3 VAs and still spend less than one local admin person.</p>
                <p className="font-semibold">At 500 units, you're running a proper operation with multiple VAs as your ops engine, saving $100,000+ annually vs building a local team.</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Getting Started Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started</h2>
          
          <div className="space-y-6">
            {[
              {
                step: "We qualify you first",
                description: "Free 15-minute consultation to assess if you're actually ready. If you're under 50 units or have zero processes documented, we'll tell you straight—come back when you're ready."
              },
              {
                step: "Browse candidates",
                description: "If you are ready: browse our pre-vetted candidate database same day. Filter by property management experience and software skills. See actual work history and communication samples. One-click to request interviews."
              },
              {
                step: "Interview process",
                description: "Interview 2-4 candidates over 7-14 days. We handle timezone scheduling. Reference checks included. One-click to send hire request—we handle the rest."
              },
              {
                step: "Onboarding",
                description: "Onboarding tracked live in your dashboard. Contract signed, background checks complete, equipment setup, software access, start date—you see exact progress, not guessing."
              },
              {
                step: "Training and ramp-up",
                description: "Training and ramp-up takes 30-60 days. Week 1-2 they learn your system via Loom videos. Week 3-4 supervised execution. Week 5-8 semi-independent. Month 3+ fully productive."
              },
              {
                step: "Ongoing management",
                description: "Ongoing management through the platform. Daily task assignments. Weekly 5-minute dashboard checks. Monthly 15-minute performance reviews. Quarterly automated formal reviews. Account Manager support when needed."
              }
            ].map((item, index) => (
              <Card key={index} className="border-lime-300 bg-lime-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-lime-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.step}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Bottom Line Section */}
        <section className="mb-16">
          <Card className="bg-gray-900 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">The Bottom Line</h2>
              <p className="text-lg leading-relaxed mb-6">
                If you're managing 100+ units and either paying $50,000+ for local admin staff or working 60-hour weeks doing it yourself, 
                you're making an expensive mistake.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                A Philippines VA costs $1,650/month. They work US business hours (night shift for them, but that's our problem to manage, 
                not yours). They handle 70% of your admin workload. You save $30,000-50,000 per year minimum.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Yes, they work graveyard shift. Yes, training takes 30-60 days. Yes, you need basic processes documented. But the economics 
                work, the time savings are real, and we've been doing this since 2012.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We're not selling fairy tales. We're selling a business model that lets you scale to 200, 300, 500+ units without bleeding 
                cash on expensive local staff doing work that doesn't require local presence.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Stop Overpaying for Admin Work?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Schedule a free consultation and we'll tell you straight if you're ready or not.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 bg-white text-lime-600 font-bold text-lg rounded-lg hover:bg-lime-50 transition-colors shadow-lg"
              >
                Get Property Management Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 bg-lime-700 text-white font-bold text-lg rounded-lg hover:bg-lime-800 transition-colors border-2 border-white/20"
              >
                <Building2 className="mr-2 w-5 h-5" />
                View Success Stories
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
