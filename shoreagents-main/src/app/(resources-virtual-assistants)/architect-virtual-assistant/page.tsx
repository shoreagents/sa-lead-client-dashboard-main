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
  Ruler,
  Layers,
  Mail,
  Calendar
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";

export default function ArchitectVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['architect-virtual-assistant']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For Architecture Firms
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Architect Virtual Assistant:<br />
              <span className="text-lime-600">The Two Roles Nobody Explains (And Why You're Probably Hiring the Wrong One)</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Here's a truth that'll save some of you about $45,000: there's no such thing as an "architect virtual assistant."
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              What actually exists are two completely different jobs that marketing teams have mashed together under one catchy label. You're hiring either a CAD drafter who produces technical drawings for $2,000-3,000/month, or a general admin assistant who learns architecture terminology for $1,200-1,800/month. Trying to find both skills in one person is a fantasy that'll waste six months of your time.
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
            I've spent 15 years placing offshore staff with architecture firms across the USA, Australia, and New Zealand. The successful placements happen when firms understand exactly which role they actually need. The disasters happen when they hire for "architect VA" and expect a unicorn who can both draft permit sets in Revit AND manage their calendar.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This guide is for:</strong> Architecture firms that understand what work they're delegating before they start looking for someone to delegate it to. If you're still figuring out whether you need technical production help or administrative coordination, read this first—it'll save you the cost of hiring wrong.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Licensing Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Your VA Can't Legally Do (The Licensing Reality)</h2>
              <p className="text-lg text-gray-600">Before we discuss what an architect VA can do, let's be clear about what they absolutely cannot do</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Before we discuss what an architect VA can do, let's be clear about what they absolutely cannot do in the USA:
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Prohibited Activities for Non-Licensed Staff:</h3>
              <div className="space-y-2">
                {[
                  "Design work requiring professional judgement",
                  "Stamp or seal drawings",
                  "Provide architectural opinions or advice to clients",
                  "Make decisions requiring licensure",
                  "Sign off on code compliance",
                  "Represent themselves as architects in any capacity"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                Every state requires architects to be licensed. Most states require firms themselves to have licenses or registrations. Practicing architecture without proper licensure carries serious legal consequences—and delegating licensed work to unlicensed offshore staff puts your firm at risk.
              </p>
              <p className="text-gray-800 font-semibold mt-4">
                Your VA can produce drawings under your supervision. They cannot make architectural decisions. That line matters more than the cost savings.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Two Types Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Two Types (And Why Most Firms Hire the Wrong One First)</h2>
              <p className="text-lg text-gray-600">Option A: Technical Production Assistant vs Option B: Administrative Support Specialist</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Option A: Technical Production Assistant</h3>
                <h4 className="font-bold text-gray-900 mb-2">What they actually do:</h4>
                <ul className="space-y-1 text-sm text-gray-700 mb-4">
                  <li>• CAD/Revit/BIM production work</li>
                  <li>• Drawing set coordination and updates</li>
                  <li>• 3D modeling and rendering</li>
                  <li>• As-built documentation</li>
                  <li>• Permit drawing preparation (under supervision)</li>
                </ul>
                <h4 className="font-bold text-gray-900 mb-2">Requirements:</h4>
                <ul className="space-y-1 text-sm text-gray-700 mb-4">
                  <li>• Architecture or drafting degree preferred</li>
                  <li>• 2-5 years software experience (AutoCAD, Revit, SketchUp)</li>
                  <li>• Understanding of construction documentation</li>
                  <li>• Familiarity with building codes and standards</li>
                </ul>
                <div className="bg-white rounded-lg p-3 mt-4">
                  <p className="text-sm"><strong>Cost:</strong> $2,000-3,000/month full-time</p>
                  <p className="text-sm"><strong>Training timeline:</strong> 60-90 days to full productivity</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Option B: Administrative Support Specialist</h3>
                <h4 className="font-bold text-gray-900 mb-2">What they actually do:</h4>
                <ul className="space-y-1 text-sm text-gray-700 mb-4">
                  <li>• Email and calendar management</li>
                  <li>• Client communication coordination (not providing architectural advice)</li>
                  <li>• Research (codes, materials, products, zoning)</li>
                  <li>• RFP and proposal preparation</li>
                  <li>• Project tracking and scheduling</li>
                  <li>• Social media and marketing support</li>
                  <li>• Invoice and billing coordination</li>
                </ul>
                <h4 className="font-bold text-gray-900 mb-2">Requirements:</h4>
                <ul className="space-y-1 text-sm text-gray-700 mb-4">
                  <li>• General VA experience</li>
                  <li>• Strong written communication</li>
                  <li>• Organizational skills</li>
                  <li>• Willingness to learn architecture terminology</li>
                </ul>
                <div className="bg-white rounded-lg p-3 mt-4">
                  <p className="text-sm"><strong>Cost:</strong> $1,200-1,800/month full-time</p>
                  <p className="text-sm"><strong>Training timeline:</strong> 30-60 days to full productivity</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Question Nobody Asks:</h3>
              <p className="text-gray-800 font-semibold mb-4">Which one do you actually need first?</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most small firms instinctively think "technical"—we're architects, we need CAD help. But here's what actually happens: principals spend 15-20 hours weekly on administrative work that doesn't require an architecture degree. Email coordination. Calendar management. RFP responses. Permit application prep. Client follow-ups.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                That's $90,000-120,000 annually in principal time (at $150/hour) doing work a $21,600/year admin VA could handle.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Meanwhile, that $30,000/year technical VA you're considering? They need your detailed design direction, quality control review, and coordination oversight. If you don't have 8-10 hours weekly of actual production work ready to delegate, they'll sit idle while you're still drowning in administrative tasks.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Start with admin support if:</h3>
                <div className="space-y-2">
                  {[
                    "You're spending 10+ hours weekly on non-design work",
                    "Your project pipeline is inconsistent (3-8 projects annually)",
                    "You're a solo practitioner or 2-3 person firm",
                    "You don't have documented CAD standards yet"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Start with technical support if:</h3>
                <div className="space-y-2">
                  {[
                    "You have consistent CAD/Revit production work (20+ hours weekly)",
                    "Documented design standards and templates exist",
                    "Quality control systems are established",
                    "You're a 5-15 person firm with steady project flow"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Firm Size Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Calculator className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Firm Size Reality (When Architecture Firms Aren't Ready)</h2>
              <p className="text-lg text-gray-600">The research is clear: 75% of US architecture firms have fewer than 10 employees</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                The research is clear: 75% of US architecture firms have fewer than 10 employees. The average firm has exactly 3 people. Most are pulling $400,000-800,000 in annual revenue.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Here's the math those firms need to see:</h3>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-bold text-gray-900 mb-3">Solo Architect Economics:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Annual revenue:</span>
                    <span className="font-semibold">$500,000 (optimistic)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Net revenue per FTE:</span>
                    <span className="font-semibold">$150,000 (industry median)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">After 60% overhead:</span>
                    <span className="font-semibold">$60,000-75,000 profit</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between">
                    <span className="text-gray-700">VA cost Year 1 (admin):</span>
                    <span className="font-semibold">$44,000 all-in</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">VA cost Year 1 (technical):</span>
                    <span className="font-semibold">$67,000 all-in</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-800 font-semibold">
                That admin VA consumes 60-75% of a solo practitioner's profit in Year One. The technical VA exceeds it.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">When You're Not Ready:</h3>
                <div className="space-y-2">
                  {[
                    "Solo practitioners under $500K revenue",
                    "Firms under 3 employees",
                    "Less than $150K net revenue per FTE",
                    "No documented processes or standards",
                    "Inconsistent project flow",
                    "Less than 20 hours weekly of delegatable work"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">When You're Actually Ready:</h3>
                <div className="space-y-2">
                  {[
                    "3-10 person firms with consistent workload",
                    "$800K+ annual revenue",
                    "Multiple simultaneous projects (5+)",
                    "Documented systems and standards",
                    "Clear work to delegate (admin OR technical)",
                    "20+ hours weekly of specific tasks"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-lime-50 border-l-4 border-lime-500 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                <strong>The Honest Truth for Small Firms:</strong> If you're under those thresholds, you're better off investing in automation and systems first. Project management software (Monograph, BQE Core), automated invoicing, client portals, and email templates cost $200-400/month versus $1,800+ for a VA. Get organized first, then scale with staff.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Time Audit Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Where Your Time Actually Goes (The Architect's Time Audit)</h2>
              <p className="text-lg text-gray-600">Architecture firms track billable hours obsessively. But here's what most don't measure</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Typical Solo/Small Firm Principal:</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Design/creative work:</span>
                  <span className="font-semibold">25 hours/week (should be 35-40)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Project coordination:</span>
                  <span className="font-semibold">8 hours/week</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Client meetings:</span>
                  <span className="font-semibold">5 hours/week</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Admin tasks:</span>
                  <span className="font-semibold text-red-600">8 hours/week (email, scheduling, invoices)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Marketing/BD:</span>
                  <span className="font-semibold">3 hours/week</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Code research:</span>
                  <span className="font-semibold">2 hours/week</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Everything else:</span>
                  <span className="font-semibold">4 hours/week</span>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mb-4">
                That 8 hours weekly of pure admin work? That's what an administrative VA eliminates. That's where you get 16-32 hours monthly back for actual design work.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                The 2-3 hours of code research and the 8 hours of project coordination? Those are partially delegatable to an admin VA who learns to research codes, track submittals, and coordinate with consultants.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What This Means:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                A $1,500/month admin VA can recover 12-20 hours weekly of your time. At $150/hour principal rate, that's $1,800-3,000/week in recovered capacity—$93,600-156,000 annually. Even in Year One with training overhead, the math works for firms billing $800K+.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Time Zone Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Time Zone Reality (Where Australia and New Zealand Win)</h2>
              <p className="text-lg text-gray-600">Here's something American architects don't realize</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">USA Reality:</h3>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• Philippines is 12-16 hours ahead</li>
                <li>• Your 9am-5pm = Their 9pm-5am (same moment, real-time)</li>
                <li>• VA works their night shift during your business day</li>
                <li>• Real-time communication—no delays</li>
                <li>• But it's a night shift for them every single day</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Australia/New Zealand Reality:</h3>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• Philippines is only 2-4 hours behind Australian time</li>
                <li>• Natural daytime overlap</li>
                <li>• Your 9am-5pm = Their 7am-3pm or 11am-7pm (same day)</li>
                <li>• Real-time communication during both parties' normal business hours</li>
                <li>• Better work-life balance for staff</li>
              </ul>
              <p className="text-gray-800 font-semibold">
                Australian and New Zealand architecture firms have a natural advantage here. Same-day communication, overlap in normal business hours, and healthier working conditions for offshore staff. US firms can make it work (thousands do), but the timezone is tougher.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What Admin VAs Do Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <FileText className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Administrative Architect VAs Actually Do</h2>
              <p className="text-lg text-gray-600">Comprehensive breakdown of admin VA responsibilities</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email & Calendar Management:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Inbox triage and priority flagging</li>
                  <li>• Meeting scheduling and coordination</li>
                  <li>• Calendar management</li>
                  <li>• Email drafting and responses (under your direction)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Client Communication Coordination:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Follow-up communications</li>
                  <li>• Meeting preparation and agendas</li>
                  <li>• Document delivery and tracking</li>
                  <li>• Client portal updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Research & Documentation:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Building code research</li>
                  <li>• Material and product research</li>
                  <li>• Zoning requirement documentation</li>
                  <li>• Permit application requirements</li>
                  <li>• Vendor and consultant research</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Tracking:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Submittal tracking</li>
                  <li>• RFI coordination</li>
                  <li>• Document version control</li>
                  <li>• Project milestone tracking</li>
                  <li>• Consultant coordination schedules</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proposal & RFP Preparation:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Proposal drafting and formatting</li>
                  <li>• RFP response coordination</li>
                  <li>• Project description writing</li>
                  <li>• Fee schedule preparation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing & Business Development:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Social media content scheduling</li>
                  <li>• Website updates</li>
                  <li>• Portfolio updates</li>
                  <li>• Award submission preparation</li>
                  <li>• Newsletter drafting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Administrative Tasks:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Invoice preparation and tracking</li>
                  <li>• Expense documentation</li>
                  <li>• Document organization</li>
                  <li>• File management</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* What Technical VAs Do Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Ruler className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Technical Architect VAs Do (Under Supervision)</h2>
              <p className="text-lg text-gray-600">All technical work requires your design direction and quality control</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">CAD/Revit Production:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Drawing production from design sketches</li>
                  <li>• Drawing set coordination</li>
                  <li>• Dimension and annotation updates</li>
                  <li>• Layer management and organization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">3D Modeling & Rendering:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Conceptual massing models</li>
                  <li>• Design development models</li>
                  <li>• Presentation renderings</li>
                  <li>• Material and lighting coordination</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Drawing Set Development:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Plan developments</li>
                  <li>• Elevation and section coordination</li>
                  <li>• Detail development</li>
                  <li>• Sheet setup and coordination</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">As-Built Documentation:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Measured drawing creation</li>
                  <li>• As-built drawing updates</li>
                  <li>• Field note incorporation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Permit Drawing Preparation:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Code compliance coordination (under architect review)</li>
                  <li>• Permit set compilation</li>
                  <li>• Drawing updates per review comments</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Important Limitations:</h3>
              <p className="text-gray-800 font-semibold mb-4">All technical work requires:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Your design direction and standards</li>
                <li>• Your quality control review</li>
                <li>• Your professional seal (they cannot seal drawings)</li>
                <li>• Your code compliance review</li>
                <li>• Your coordination with consultants</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* True First-Year Investment Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The True First-Year Investment (Not Just the Monthly Rate)</h2>
              <p className="text-lg text-gray-600">Everyone advertises monthly rates. Here's what actually happens in Year One</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Administrative VA (Year 1 All-In Costs):</h3>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-700">VA salary:</span>
                    <span className="font-semibold">$21,600</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Your training time (40 hrs × $150/hr):</span>
                    <span className="font-semibold">$6,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Your management (2 hrs/wk × 52 × $150):</span>
                    <span className="font-semibold">$15,600</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Software/tools:</span>
                    <span className="font-semibold">$800</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">Total Year 1:</span>
                    <span className="font-bold text-green-600 text-xl">$44,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technical VA/Drafter (Year 1 All-In Costs):</h3>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-700">VA salary:</span>
                    <span className="font-semibold">$30,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Your training time (80 hrs × $150/hr):</span>
                    <span className="font-semibold">$12,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Your management (3 hrs/wk × 52 × $150):</span>
                    <span className="font-semibold">$23,400</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Software licenses (Revit/CAD via VPN):</span>
                    <span className="font-semibold">$2,000</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">Total Year 1:</span>
                    <span className="font-bold text-blue-600 text-xl">$67,400</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Year 2+ Reality:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Training drops to minimal. Management time reduces to 30-60 minutes weekly. Your all-in cost for admin VA drops to $24,000-27,000 annually. Technical VA drops to $33,000-36,000 annually.
              </p>
              <h4 className="font-bold text-gray-900 mb-3">Break-Even Timeline:</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Small firms (under $800K revenue): 18-24 months</li>
                <li>• Mid-size firms ($800K-2M revenue): 12-18 months</li>
                <li>• Larger firms ($2M+ revenue): 6-12 months</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Training Timeline Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-100 rounded-full p-3">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Training Timeline Nobody Mentions</h2>
              <p className="text-lg text-gray-600">Realistic expectations for onboarding and productivity</p>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-blue-600 text-white">Weeks 1-2</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Onboarding & Systems</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Platform training</li>
                      <li>• Software access setup</li>
                      <li>• Communication protocols</li>
                      <li>• File organization systems</li>
                      <li>• Initial task documentation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-green-600 text-white">Weeks 3-4</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Basic Task Execution</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Handling repetitive tasks</li>
                      <li>• Learning your preferences</li>
                      <li>• Quality standards review</li>
                      <li>• Feedback and corrections</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-amber-600 text-white">Weeks 5-8</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Building Independence</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Handling more complex tasks</li>
                      <li>• Reduced oversight needed</li>
                      <li>• Proactive problem identification</li>
                      <li>• Process improvement suggestions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-lime-600 text-white">Week 9-12</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Full Productivity</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Independent task management</li>
                      <li>• Quality work with minimal oversight</li>
                      <li>• Understanding firm workflow</li>
                      <li>• Reliable performance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-red-300 bg-red-50 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                For technical VAs, add 4-6 weeks for: CAD/Revit standards training, Drawing set coordination understanding, Quality control processes, Code compliance awareness.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Critical Requirements BEFORE Hiring:</h3>
              <p className="text-gray-800 font-semibold mb-4">You must have documented:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Your CAD/Revit standards and templates (for technical VA)</li>
                <li>• Your typical email response patterns (for admin VA)</li>
                <li>• Your file organization system</li>
                <li>• Your quality expectations</li>
                <li>• Your communication preferences</li>
              </ul>
              <p className="text-gray-800 font-semibold mt-4">
                If these don't exist, create them first. Otherwise your training timeline doubles.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When This Doesn't Work Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When This Doesn't Work (The Honest Qualifier)</h2>
              <p className="text-lg text-gray-600">Don't hire an architect VA if:</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <div className="space-y-3">
                {[
                  "You're a solo practitioner under $500K revenue—the math doesn't work yet",
                  "You have no documented systems or processes—you'll waste months",
                  "Your project flow is sporadic (1-3 projects yearly)—not enough work",
                  "You're looking for someone to \"figure out what needs doing\"—you need clear delegation",
                  "You expect them to manage themselves without oversight—remote staff need management",
                  "You want someone who can make architectural decisions—that's your job, legally",
                  "You're trying to offshore work that requires your professional seal—doesn't work that way",
                  "You don't have 3-5 hours weekly for training the first 2 months—this needs your time investment",
                  "You're primarily solo residential work with 1-2 projects at a time—automate first, hire later"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Self-Assessment Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Self-Assessment: Ready for an Architect VA?</h2>
              <p className="text-lg text-gray-600">Check your readiness with these criteria</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Administrative VA Readiness:</h3>
                <div className="space-y-2">
                  {[
                    "Spending 8+ hours weekly on email/admin work",
                    "Annual revenue exceeds $500K",
                    "Have basic systems documented (even informally)",
                    "Can commit 3 hours weekly for first 8 weeks of training",
                    "Have consistent admin work to delegate (20+ hours weekly)",
                    "Understand they need direction, not autonomy",
                    "Have budget for $44,000 Year 1 investment"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technical VA Readiness:</h3>
                <div className="space-y-2">
                  {[
                    "Have 20+ hours weekly of consistent CAD/production work",
                    "CAD/Revit standards are documented",
                    "Quality control processes exist",
                    "Annual revenue exceeds $800K",
                    "Can commit 5 hours weekly for first 12 weeks of training",
                    "Have budget for $67,000 Year 1 investment",
                    "Comfortable managing technical work remotely"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-amber-300 bg-amber-50 mt-6">
            <CardContent className="p-6">
              <div className="space-y-3">
                <p className="text-gray-800 font-semibold">
                  <strong>If you checked fewer than 5 boxes in your category:</strong> Focus on documentation, automation, and systems first. Come back to hiring offshore staff when you're operationally ready.
                </p>
                <p className="text-gray-800 font-semibold">
                  <strong>If you checked 5-6 boxes:</strong> You're potentially ready, but expect a learning curve. Consider starting with admin support first.
                </p>
                <p className="text-gray-800 font-semibold">
                  <strong>If you checked 7 boxes:</strong> You're ready for strategic offshore staffing and positioned to succeed.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Gallery Group Example Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Real Implementation Example: Gallery Group</h2>
          
          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Gallery Group, a Queensland construction and architecture company, discovered ShoreAgents during a business tour of the Philippines. They hired two specialists during their visit—architectural specialists who now earn perfect 5/5 performance reviews years later.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                Their assessment: "We have been partners with ShoreAgents for years now and have a very good system going. We are very happy with ShoreAgents."
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                Recent performance reviews show team members earning perfect scores with management recommendations for salary increases. One specialist's review noted "consistently goes above and beyond to deliver the highest quality visual work possible" with "deep understanding of architectural visualization and construction industry requirements."
              </p>
              <div className="bg-white rounded-lg p-4 mt-4">
                <p className="text-gray-800 font-semibold mb-2">The financial reality:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Queensland architectural specialists cost $85,000+ annually</li>
                  <li>• ShoreAgents specialists cost $22,000 all-in</li>
                  <li>• <strong>$73,000 annual saving (77% cost reduction)</strong></li>
                </ul>
                <p className="text-gray-800 font-semibold mt-3">
                  Gallery Group credits this systematic approach with helping them "survive tough times, now thrive with their low cost, highly talented offshore team."
                </p>
                <p className="text-gray-700 text-sm mt-3">
                  Timeline: Years-long partnership with consistent excellence. Not overnight success, but systematic long-term value.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What Makes ShoreAgents Different Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes ShoreAgents Different</h2>
          
          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                We're going to tell you when you're not ready.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                If you're managing fewer than $500K revenue, we'll be honest that offshore staffing doesn't make financial sense yet. If your systems aren't documented, we'll help you organize first. If you're trying to offshore licensed architecture work, we'll explain why that's a legal problem.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                We only succeed when you succeed. That means brutal honesty about when architect VAs make sense—and when they don't.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our approach:</h3>
              <div className="space-y-2 mb-4">
                {[
                  "Qualification first: We turn away firms that aren't ready",
                  "Clear role definition: Admin OR technical, not both",
                  "Realistic timelines: 60-90 days to full productivity",
                  "Transparent pricing: $1,200-2,500/month depending on role and experience",
                  "Honest limitations: We tell you what we can't do"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 leading-relaxed mb-4">
                Small firms under 3 people? We'll probably tell you to wait or start with admin support only. Solo practitioners under $500K? We'll suggest automation tools first. Looking for someone to make architectural decisions? We'll explain the licensing reality.
              </p>
              <p className="text-gray-900 font-bold text-xl text-center mt-4">
                Want to discuss whether an architect VA is right for your firm? We'll have a frank conversation about your situation. We'll tell you what's realistic, what's not, and whether offshore staffing makes sense for your specific circumstances.
              </p>
              <p className="text-gray-900 font-bold text-xl text-center mt-4">
                No sales pitch. Just 15 years of experience helping architecture firms grow without the bullshit.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for an Honest Assessment?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Architecture VAs work brilliantly for ready firms with realistic expectations. Are you there yet?
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
            There's no such thing as an "architect virtual assistant." You're hiring either a CAD drafter or an admin assistant. Know which one you need before you start looking.
          </p>
        </div>
      </div>
    </div>
  );
}
