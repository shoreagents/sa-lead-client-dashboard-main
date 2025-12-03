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
  TrendingUp,
  FileText,
  Users,
  Globe
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";

export default function ArchitecturalOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['architectural-outsourcing']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For Architecture Firms with Consistent Project Work
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Architectural Outsourcing:<br />
              <span className="text-lime-600">Why Your $85K Architect Shouldn't Be Doing $22K Work</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Your licensed architect just spent two hours cleaning up CAD layers. Yesterday they prepared permit applications. Last week they 
              coordinated drawing sets and updated project documentation. You're paying them <strong>$85,000 annually to do work that doesn't 
              require an architecture licence</strong>.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/pricing" 
                className="inline-flex items-center px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors"
              >
                Get Architectural Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/case-studies" 
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-lime-600 transition-colors"
              >
                Gallery Group Case Study
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
            Here's what that actually costs you: when 40% of your architect's time goes to non-design tasks, you're burning <strong>$34,000 
            per year on misallocated talent</strong>. Scale that across three architects and you've wasted $102,000 annually on administrative 
            work dressed up as professional services.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The global architecture services market hit $394.6 billion in 2024, but most firms are haemorrhaging profit through talent 
            misallocation. Smart architecture firms using systematic outsourcing report 30% faster project completion, 78% cost reduction on 
            support tasks, and significantly higher architect satisfaction. The ones that don't? They're burning out their expensive talent 
            whilst competitors scale faster and win more projects.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This guide is for:</strong> Architecture firms doing consistent project work, managing multiple clients simultaneously, 
                and already using standard software like AutoCAD, Revit, or ArchiCAD. If you're a sole practitioner doing 2-3 small residential 
                projects per year, stop reading now.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* What Most Firms Get Wrong Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Most Architecture Firms Get Wrong About Outsourcing</h2>
              <p className="text-lg text-gray-600">The biggest misconception? Thinking architectural outsourcing means sending design work overseas</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            The biggest misconception? Thinking architectural outsourcing means sending design work overseas. It doesn't.
          </p>

          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Here's what actually works: systematic delegation of technical production, administrative coordination, and documentation tasks 
                to qualified professionals who free up your licensed architects to focus on design, client relationships, and high-value 
                decision-making.
              </p>
              <p className="text-gray-700 leading-relaxed">
                What doesn't work is treating offshore support as "cheap labour" for critical design decisions. Architecture isn't accounting 
                where processes are standardised. Every project requires licensed professional judgment for building codes, safety compliance, 
                and design intent. You can't offshore that judgment—nor should you try.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border-l-4 border-gray-600">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                The firms succeeding at architectural outsourcing understand a fundamental distinction: <strong>licensure-required tasks vs 
                technical production tasks</strong>. Your architect's stamp and professional liability insurance can't be delegated. CAD 
                production, drawing coordination, permit prep, and project administration absolutely can be.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Tasks Actually Outsourced Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Tasks Architecture Firms Actually Outsource</h2>
              <p className="text-lg text-gray-600">Notice what's missing? Conceptual design. Client consultations. Site analysis.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">Technical Drawing Production (70% of outsourcing)</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "CAD drafting and detail development",
                    "Construction documentation",
                    "Drawing set coordination",
                    "Redline incorporation",
                    "As-built documentation"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">BIM and 3D Visualisation (20% of outsourcing)</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Building Information Modeling",
                    "3D rendering and walkthroughs",
                    "Presentation materials",
                    "Virtual reality content"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-300 bg-purple-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-purple-900 mb-4">Project Coordination (10% of outsourcing)</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Permit application preparation",
                    "Code compliance research",
                    "Document management",
                    "Client communication",
                    "Administrative tracking"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Notice what's missing?</h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Conceptual design",
                  "Client consultations",
                  "Site analysis",
                  "Design development decisions",
                  "Building code interpretation requiring professional judgment"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-800 font-semibold mt-4">
                The firms wasting money on architectural outsourcing are trying to delegate design thinking. The firms saving $70,000+ annually 
                are delegating technical execution whilst keeping design control firmly in-house.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Filipino Advantage Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Filipino Advantage for Architectural Support</h2>
              <p className="text-lg text-gray-600">Why do architecture firms across the USA, Australia, and New Zealand choose Filipino architectural support?</p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">1. Technical Education Standards</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Philippines produces 180,000+ technical graduates annually, many with architectural drafting or CAD training. They're 
                  not licensed architects (that would defeat the purpose), but they're technically competent in software, construction 
                  documentation, and drawing production.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  More importantly, they understand the systematic nature of technical documentation. When you need someone to execute redlines, 
                  coordinate drawing sets, or prepare permit packages following established standards, technical competence matters more than 
                  creative design ability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">2. Real-Time Collaboration During Your Business Hours</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This is critical and frequently misunderstood: <strong>Filipino architectural support works during your business hours, 
                  not overnight</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When your USA firm operates 9am-5pm Eastern Time, your Manila-based CAD operator is working simultaneously at 9pm-5am Manila 
                  time. They're responding to Slack messages in real-time, attending meetings via Zoom, clarifying questions immediately, and 
                  collaborating as if they're in your office.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  There's no "send work at 5pm, get results at 9am" delay. They're working the same moment you're working. Australian and New 
                  Zealand firms actually have it better—Manila is only +2 to +4 hours ahead, creating natural daytime overlap without anyone 
                  working nights.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">3. Cost Structure That Creates Flexibility</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Full-time architectural support through ShoreAgents costs $1,200-2,500 monthly depending on experience and role complexity. 
                  That's all-in: salary, management, HR, equipment, training, backup coverage.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">Compare that to:</p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-lime-600 font-bold mt-1">•</span>
                    <span>USA architectural staff at $3,500-6,000 monthly for similar technical production roles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lime-600 font-bold mt-1">•</span>
                    <span>Australian firms pay $4,000-7,000 monthly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lime-600 font-bold mt-1">•</span>
                    <span>New Zealand firms pay $3,800-6,500 monthly</span>
                  </li>
                </ul>
                <p className="text-gray-800 font-semibold">
                  The mathematics are straightforward: 65-75% cost reduction on technical support whilst maintaining quality standards and 
                  real-time collaboration.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Gallery Group Case Study */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What You're Actually Buying: The Gallery Group Reality</h2>
              <p className="text-lg text-gray-600">Here's what systematic architectural outsourcing looks like in practice</p>
            </div>
          </div>

          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Gallery Group, a Queensland construction company working on architectural projects, discovered ShoreAgents during Mike's Business 
                Tours of Philippines BPO operations. They visited multiple providers. ShoreAgents was "head and shoulders above the rest."
              </p>
              <p className="text-gray-700 leading-relaxed">
                They hired two architectural specialists during their Philippines visit. Not because the hourly rate was cheap, but because the 
                systematic approach to construction and architectural support made sense for their operations.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">Architectural Specialist - Perfect 5/5 Performance Score:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Consistently delivers exceptional quality work exceeding expectations",
                    "Seamlessly integrates with Australian team and communicates clearly",
                    "Perfect attendance record with all projects delivered on time",
                    "Proactively identifies issues and continuously improves processes"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Design Specialist - Salary Increase Recommended:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Consistently goes above and beyond delivering highest quality visual work",
                    "Deep understanding of architectural visualisation and construction requirements",
                    "Works seamlessly with offshore colleagues and Australian team",
                    "Exceptional ability to manage multiple projects whilst meeting all deadlines"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Gallery Group's assessment after years of partnership: <strong>"We have a very good system going. We are very happy with 
                ShoreAgents."</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                That's not enthusiasm from a new relationship—it's satisfaction from systematic execution that helped them "survive tough times, 
                now thrive with their low cost, highly talented offshore team."
              </p>
              <p className="text-gray-800 font-semibold">
                The financial reality? Gallery Group saves approximately $73,000 annually per specialist (77% cost reduction) whilst maintaining 
                perfect performance standards. Multiple specialists equal multiple hundreds of thousands in savings over five years.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Real Cost Breakdown Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Real Cost Breakdown (No Bullshit Edition)</h2>
              <p className="text-lg text-gray-600">Let's talk actual numbers because most outsourcing providers hide the true costs</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">ShoreAgents All-In Pricing:</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Entry-level CAD operator:</span>
                    <span className="font-semibold">$1,200-1,600/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Mid-level BIM coordinator:</span>
                    <span className="font-semibold">$1,700-2,200/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Senior architectural specialist:</span>
                    <span className="font-semibold">$2,200-2,500/month</span>
                  </div>
                  <p className="text-gray-600 text-xs mt-3">
                    That includes everything: salary, benefits, management, HR, equipment, training, backup coverage. No hidden fees.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What You're Replacing:</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">USA CAD technician:</span>
                    <span className="font-semibold">$3,500-6,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Australian CAD operator:</span>
                    <span className="font-semibold">$4,000-7,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">New Zealand architectural assistant:</span>
                    <span className="font-semibold">$3,800-6,500/month</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">First-Year True Costs (Single Full-Time Support):</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Setup fee (one-time):</span>
                  <span className="font-semibold">$550-1,100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Monthly cost:</span>
                  <span className="font-semibold">$1,200-2,500 × 12 months = $14,400-30,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software licences (if needed):</span>
                  <span className="font-semibold">$1,200-3,600 annually</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your management time:</span>
                  <span className="font-semibold">2-5 hours weekly initially (decreases to 1-2 hours)</span>
                </div>
                <Separator className="my-3" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">Year One Total:</span>
                  <span className="font-bold text-blue-600">$16,150-34,700</span>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                Compare that to $42,000-72,000 for local USA hire (plus benefits, taxes, equipment, office space, recruitment costs). 
                Australian and New Zealand firms see similar 65-75% savings.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                But here's the bit nobody mentions: Year One isn't when you break even. You're training someone remotely, establishing workflows, 
                building communication patterns. Most firms see genuine ROI by months 4-6, not immediately.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When It Doesn't Work Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When Architectural Outsourcing Doesn't Work (And You Shouldn't Do It)</h2>
              <p className="text-lg text-gray-600">I'm going to lose money telling you this, but better you hear it now</p>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                number: "1",
                title: "You Don't Have Standardised Workflows",
                description: "If every project is handled differently, if drawing standards vary by whoever touched it last, if procedures exist only in your head—stop. Document your processes first. Offshore support amplifies whatever system you have. Chaos amplifies into expensive chaos."
              },
              {
                number: "2",
                title: "You're Doing Under $500K Annual Revenue",
                description: "The break-even economics don't work. You need consistent project volume to justify full-time support. If you're doing 3-4 small residential projects annually, hire local part-time help or use project-based freelancers. Don't commit to offshore full-time staff."
              },
              {
                number: "3",
                title: "You Need Someone Who Makes Architectural Decisions",
                description: "Offshore support handles technical execution, not professional judgment. If you need someone interpreting building codes, making structural decisions, or determining design intent, you need a local licensed architect. Don't try to replace professional licensure with cheaper overseas labour."
              },
              {
                number: "4",
                title: "You Can't Communicate Clearly in Writing",
                description: "Most communication happens via Slack, email, marked-up drawings. If you prefer verbal instructions or explaining things face-to-face, remote collaboration will frustrate you. Some people are better suited to in-person management."
              },
              {
                number: "5",
                title: "You're Just Looking for \"Cheap Help\"",
                description: "If your primary motivation is cutting costs rather than systematic delegation, you'll get exactly what you pay for: mediocre work from whoever accepts the lowest rate. Quality architectural support requires investing in training, clear communication, and proper management."
              },
              {
                number: "6",
                title: "Your Projects Require Constant Client Site Visits",
                description: "Some architectural work genuinely needs physical presence—site measurements, client presentations, contractor coordination. If that's 60%+ of your workflow, offshore support handles the remaining 40% but won't transform your operations."
              }
            ].map((item, index) => (
              <Card key={index} className="border-red-300 bg-red-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {item.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gray-100 border-l-4 border-gray-600 mt-8">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                The firms succeeding at architectural outsourcing are those doing consistent documentation-heavy work with standardised processes 
                and clear communication systems. If that's not you yet, get there first before hiring offshore support.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* How Not to Screw This Up Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">How Not to Screw This Up</h2>
              <p className="text-lg text-gray-600">Architecture firms that waste money on offshore support typically make three mistakes</p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-900 mb-4">Mistake #1: Hiring Immediately Without Preparation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  They think "I'll figure it out as we go." Then they spend six months discovering they can't clearly explain their requirements, 
                  their drawing standards are inconsistent, and their file organisation is chaos.
                </p>
                <p className="text-gray-800 font-semibold">
                  Fix it first: Document your CAD standards, create example projects showing expected quality, establish clear file naming 
                  conventions. Spend 2-3 weeks getting organised before hiring anyone.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-900 mb-4">Mistake #2: Expecting Them to "Just Know" Architecture</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your offshore support might have CAD training, but they don't know your firm's specific standards, your typical project types, 
                  or your local building codes. They're technically competent, not telepathic.
                </p>
                <p className="text-gray-800 font-semibold">
                  The solution: Treat the first month as paid training. Assign simple tasks with detailed examples. Gradually increase complexity 
                  as they learn your systems. Firms rushing this process waste months redoing work.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-900 mb-4">Mistake #3: No Direct Communication System</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Some firms route everything through a project manager who's already overwhelmed. Now you've added translation delay to every 
                  interaction.
                </p>
                <p className="text-gray-800 font-semibold">
                  Better approach: Set up direct Slack or Teams communication. Your offshore support should message you directly with questions, 
                  share work-in-progress for feedback, and collaborate in real-time during your business hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Systematic Approach Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Systematic Approach That Actually Works</h2>
              <p className="text-lg text-gray-600">Here's how architecture firms implement offshore support without wasting time or money</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                period: "Months 1-2",
                periodColor: "bg-blue-600",
                title: "Foundation and Training",
                items: [
                  "Assign simple drawing clean-up tasks",
                  "Provide detailed examples and marked-up feedback",
                  "Establish daily communication patterns",
                  "Test their ability to follow your standards"
                ],
                borderColor: "border-blue-300",
                bgColor: "bg-blue-50"
              },
              {
                period: "Months 3-4",
                periodColor: "bg-amber-600",
                title: "Expanding Scope",
                items: [
                  "Move to construction documentation tasks",
                  "Introduce BIM coordination if needed",
                  "Let them handle permit prep and code research",
                  "Still checking work closely"
                ],
                borderColor: "border-amber-300",
                bgColor: "bg-amber-50"
              },
              {
                period: "Months 5-6",
                periodColor: "bg-green-600",
                title: "Operational Integration",
                items: [
                  "They're handling full drawing sets",
                  "Communication becomes more efficient",
                  "Quality standards are maintained consistently",
                  "You're focusing more on design and client work"
                ],
                borderColor: "border-green-300",
                bgColor: "bg-green-50"
              },
              {
                period: "Month 7+",
                periodColor: "bg-lime-600",
                title: "Full Integration and Scaling",
                items: [
                  "They're operating independently on routine tasks",
                  "Your review time drops to spot-checking",
                  "You're considering adding second team member",
                  "ROI becomes clearly visible"
                ],
                borderColor: "border-lime-300",
                bgColor: "bg-lime-50"
              }
            ].map((phase, index) => (
              <Card key={index} className={`${phase.borderColor} ${phase.bgColor}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Badge className={`${phase.periodColor} text-white`}>{phase.period}</Badge>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                      <ul className="space-y-2">
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-lime-300 bg-lime-50 mt-8">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                The firms succeeding at this aren't special—they're just systematic. They document processes, communicate clearly, and treat 
                offshore support as genuine team members rather than disposable contractors.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Final CTA Section */}
        <section className="mb-16">
          <Card className="bg-gray-900 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">Ready to Stop Wasting Your Architect's Time on CAD Cleanup?</h2>
              <p className="text-lg leading-relaxed mb-6">
                ShoreAgents specialises in placing Filipino architectural support staff with architecture firms across the USA, Australia, and 
                New Zealand. Our full-time team members cost $1,200-2,500/month depending on experience and role complexity.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                But here's what makes us different: we'll tell you if you're not ready yet.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you're doing inconsistent project volume, if your systems aren't documented, if you're trying to offshore professional 
                judgment—we'll be honest that it won't work. We only succeed when you succeed, and that means being brutally frank about when 
                architectural outsourcing makes sense and when it doesn't.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                We're not interested in selling you staff you don't need. We're interested in helping architecture firms stop wasting $34,000+ 
                annually on talent misallocation whilst burning out their expensive architects on administrative tasks.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When you're doing consistent project work, have documented workflows, and need systematic support for technical production tasks, 
                architectural outsourcing transforms operations. When you're not there yet, attempting it wastes everyone's time and money.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">The Choice Is Yours</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Keep paying $85,000 architects to do $22,000 work, or implement the systematic delegation approach that firms like Gallery Group 
              use to save $73,000+ annually per specialist whilst maintaining perfect performance standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 bg-white text-lime-600 font-bold text-lg rounded-lg hover:bg-lime-50 transition-colors shadow-lg"
              >
                Get Architectural Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 bg-lime-700 text-white font-bold text-lg rounded-lg hover:bg-lime-800 transition-colors border-2 border-white/20"
              >
                <Building2 className="mr-2 w-5 h-5" />
                Gallery Group Case Study
              </Link>
            </div>
            <p className="text-lime-100 mt-6 text-sm">
              Ready for a frank conversation about whether offshore architectural support makes sense for your firm? Contact our team for an 
              honest assessment of your situation. We'll tell you what's realistic, what's not, and whether we're the right fit. No sales pitch, 
              just 15 years of experience telling it straight.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
