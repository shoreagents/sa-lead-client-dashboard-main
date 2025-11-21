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
  ClipboardList,
  Monitor,
  MessageCircle,
  Calendar,
  Mail
} from "lucide-react";
import Link from "next/link";

export default function AdministrativeVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For $500K+ Annual Revenue Businesses
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              What Is an Administrative Virtual Assistant?<br />
              <span className="text-lime-600">(And the Break-Even Math That'll Surprise You)</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Belay charges $42/hour for administrative VAs—that's $87,360 annually for full-time support. Local admin assistants cost $55,000-75,000 all-in. You're saving money, right? Not quite. Factor in three months training time, 20 hours weekly of your management during year one, and false starts before finding the right fit, and your break-even point isn't six months—it's closer to 18 months.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I've placed administrative virtual assistants across the USA, Australia, and New Zealand for 15 years. Companies that get it right save $35,000+ annually. Companies that get it wrong burn through four VAs in 14 months, spend $22,000, and end up doing the admin work themselves.
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
            The difference? Most businesses hire administrative VAs before they're ready. They've got no documented processes, no clear job definition, and expect someone to "just figure it out." That's not how this works.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This guide is for businesses doing $500K+ annually with 25-30 hours of documented, repetitive administrative work weekly.</strong> If you're a solopreneur hoping a VA will solve your chaos, stop here. Come back when you've got actual systems.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* What Admin VAs Actually Do Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <ClipboardList className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Administrative VAs Actually Do</h2>
              <p className="text-lg text-gray-600">An administrative virtual assistant executes systematic, repetitive tasks—not strategic thinking</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                An administrative virtual assistant executes systematic, repetitive tasks—not strategic thinking. They manage calendars, handle email triage, process invoices, maintain databases, coordinate meetings, prepare reports, manage travel, conduct research, and handle routine client communications.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                What they don't do: strategic planning, decision-making, complex problem-solving, or anything requiring deep business context. They're task executors, not business strategists.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                The global VA market hit $25.63 billion in 2024, growing 30% annually with 40 million VAs worldwide. That growth comes from businesses understanding what admin VAs do well: execute clearly defined tasks whilst you handle revenue-generating activities.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                Research shows 37.7% of businesses use VAs primarily for administrative work. Marketing comes second at 20.5%, sales at 14%. If you're hiring an admin VA expecting marketing genius, you're hiring the wrong role.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Success Story:</h3>
              <p className="text-gray-800 leading-relaxed">
                Jon at JBMP Group learned this after freelancers kept disappearing mid-project. His administrative specialist earned 5/5 ratings in month one: "Great work in the detail we need," "Always asking how to improve," "Always shows up early and gets everything done." The difference? Clarity. Jon knew exactly what he needed—no ambiguity about "figuring it out."
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* USA/Australia/NZ Split Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The USA/Australia/New Zealand Split</h2>
              <p className="text-lg text-gray-600">"Administrative Virtual Assistant" is overwhelmingly USA terminology</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                "Administrative Virtual Assistant" is overwhelmingly USA terminology. Google Trends shows consistent USA search interest throughout 2025. Australia and New Zealand? Zero search volume. They search "admin staff" or "offshore admin support" instead.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                This reflects market maturity. USA businesses embraced remote admin support since the mid-2000s. Australian and New Zealand companies are 3-5 years behind, though catching up post-pandemic.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Australian Success Story:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Luke Newton at LockedOn (Australian PropTech) hesitated like many Australian owners. Two weeks after hiring through ShoreAgents: "We are loving our new VA, it's only been 2 weeks but we should have done it years ago." Perfect 5/5 ratings across quality, communication, reliability. One-year review: "Lovely to work with," "Excellent communicator," "Perfect." Overall satisfaction: 5/5.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-700 mb-2"><strong>Australian financials:</strong> Local admin assistants cost $70,000+ annually (salary, super, WorkCover, leave, equipment, office). ShoreAgents' service: $21,600 annually—a $48,400+ saving (69% reduction). That's $242,000+ over five years.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                USA economics are similar: local admins cost $55,000-75,000 all-in. ShoreAgents runs $1,200-2,500 monthly ($14,400-30,000 annually), representing 60-74% savings.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Why 13% Filipino Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Why 13% of World's VAs Are Filipino</h2>
              <p className="text-lg text-gray-600">Philippines provides 13% of global VAs—not because they're "cheap labour" but due to systematic advantages</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">English proficiency:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Philippines ranks among Asia's highest English-speaking populations, with business English taught from primary school. Filipino admin professionals understand Western communication styles and corporate etiquette matching USA, Australian, and New Zealand expectations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Education:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                60% of VAs globally have college degrees. Filipino admin assistants typically hold business administration or commerce degrees, arriving with foundational knowledge of business processes and professional communication.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time work:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Filipino admin assistants work during your business hours—not "overnight" with "next day" responses. USA 9am = Manila 9pm (same moment). Zero communication delay. Your admin answers emails and schedules meetings in real-time during your business day.
              </p>
              <p className="text-gray-800 font-semibold">
                For Australian/New Zealand businesses, it's even better. Brisbane 10am = Manila 8am. Sydney 11am = Manila 9am. Filipino assistants work during overlapping daylight hours, enabling seamless collaboration without night shifts.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Honest Pricing Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Calculator className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Honest Pricing: What You'll Actually Pay</h2>
              <p className="text-lg text-gray-600">The "$15/hour assistant" myth destroys most VA relationships</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                The "$15/hour assistant" myth destroys most VA relationships. Here's reality: you pay $15/hour, spend 12 hours finding candidates, interview six people, hire someone who quits after three weeks, repeat twice more, and spend $8,400 over four months with nothing to show.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                Research says VAs cut costs by 78% theoretically—but that assumes perfect day-one implementation. Reality check: Belay charges $42.70/hour and still gets "hit or miss" Reddit reviews. One user: "Paying high price for basic tasks didn't feel justifiable."
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">ShoreAgents' Honest Pricing:</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Entry-Level ($1,200-1,500/month):</h4>
                  <p className="text-sm text-gray-700 mb-2">Email, calendar, data entry, basic communications. Requires clear instructions. 2-3 weeks training.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Mid-Level ($1,500-2,000/month):</h4>
                  <p className="text-sm text-gray-700 mb-2">Complex scheduling, CRM management, reports, events, invoices, vendor relationships. Works independently. 3-4 weeks training.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Senior-Level ($2,000-2,500/month):</h4>
                  <p className="text-sm text-gray-700 mb-2">Executive admin functions, process optimisation, sensitive communications, multiple projects, trains juniors. Minimal supervision. 4-6 weeks training.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                What's included? Everything: salary, management, equipment, office, HR, backup coverage, replacement if needed. No hidden costs.
              </p>
              <p className="text-gray-800 font-semibold">
                Even at senior pricing ($30,000 annually), you're saving $25,000-45,000 yearly versus local admin assistants whilst getting professional support during your business hours in real-time.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Delegate This, Not That Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Delegate This, Not That</h2>
              <p className="text-lg text-gray-600">Most businesses delegate wrong things, keep wrong things, then wonder why it fails</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Delegate:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Email management</li>
                  <li>• Calendar coordination</li>
                  <li>• Data entry</li>
                  <li>• Database management</li>
                  <li>• Invoice processing</li>
                  <li>• Travel coordination</li>
                  <li>• Meeting scheduling</li>
                </ul>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Document formatting</li>
                  <li>• Client communication via templates</li>
                  <li>• Research with clear parameters</li>
                  <li>• Social media scheduling</li>
                  <li>• CRM updates</li>
                  <li>• Appointment confirmations</li>
                </ul>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                These are repetitive, follow documented processes, have clear metrics, don't require deep business context. Executives spend 16 hours weekly on admin tasks—delegate these first.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Never Delegate:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Strategic client relationships</li>
                  <li>• Negotiations</li>
                  <li>• Financial decisions</li>
                  <li>• Brand positioning</li>
                  <li>• Undefined problem-solving</li>
                </ul>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Crisis management</li>
                  <li>• Sensitive HR matters</li>
                  <li>• Legal documents</li>
                  <li>• Original brand content</li>
                  <li>• New client prospecting without processes</li>
                </ul>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                These require business context, strategic thinking, decision authority, or brand knowledge admin VAs don't have. They're task executors, not strategists.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Success Story:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Jason Gard started with one Sales Admin specialist handling listing management, contracts, communications, system admin. He didn't ask her to develop strategies—he delegated execution whilst focusing on relationships and business development. By year three, she was implementing ClickUp, managing Pipeline Pro, overseeing contractors. That evolution came from delegating appropriately from day one.
              </p>
              <p className="text-gray-800 font-semibold">
                Revenue threshold reality: under $500K annually, you don't have 25-30 hours of documented admin work weekly. You've got 10-15 hours of scattered tasks mixed with strategic work you shouldn't delegate. That's insufficient volume to justify full-time support. Part-time arrangements typically fail because training investment doesn't pay off.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When Admin VAs Don't Work Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When Admin VAs Don't Work</h2>
              <p className="text-lg text-gray-600">Here's what every provider hates admitting: admin VAs aren't for everyone</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">When you should NOT hire:</h3>
              <div className="space-y-3">
                {[
                  "Under $500K Revenue: Insufficient administrative volume for full-time support. The maths doesn't work.",
                  "No Documented Processes: If you'll \"figure it out,\" you're not ready. Admin VAs need clear processes, not management consulting.",
                  "Need Strategic Thinking: Admin VAs execute tasks, don't develop strategy. If you want \"initiative\" on undefined problems, hire an operations manager instead.",
                  "Part-Time Needs (<20 Hours): Training requires 30-50 hours over 1-2 months. At 10-15 hours weekly, you'll spend three months training for minimal output. Economics don't work.",
                  "Solopreneur/Side Hustle: Without consistent revenue, predictable workflow, and growth trajectory, you're not ready for systematic admin support.",
                  "Expect Mind-Reading: If your style is \"they should just know,\" this won't work. Admin VAs need clear communication, documented preferences, systematic feedback.",
                  "Looking for \"Cheap Labour\": Quality admin support isn't about finding cheapest option—it's about systematic efficiency. The \"cheapest VA\" becomes most expensive mistake when factoring turnover and quality issues."
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                Research validates this: whilst 59% report outsourcing savings, 41% don't achieve results. The difference isn't the VAs—it's whether businesses were actually ready.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* 18-Month Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-100 rounded-full p-3">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 18-Month Reality</h2>
              <p className="text-lg text-gray-600">Here's the honest break-even timeline</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Here's the honest break-even timeline: Months 1-3 = investment (training, documenting, establishing systems). Months 4-12 = efficiency building (productivity gains, frequent management). Months 13-24 = real payoff (systematic execution, minimal oversight, full ROI).
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                That 18-24 month break-even isn't failure—it's reality. Providers promising "immediate ROI" are lying. Quality admin support requires systematic implementation, proper training, realistic timeframes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hidden costs nobody mentions:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 20-40 hours your time for onboarding (months 1-2)</li>
                <li>• If you lack documented processes, add 40-80 hours creating them</li>
                <li>• Tool licenses: $20-50/month</li>
                <li>• Ongoing management: 2-5 hours monthly</li>
                <li>• Replacement if VA leaves: 15-25 hours</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Add it all up: Month 1-6 is investment. Month 7-12 is break-even. Month 13-24 is where value compounds.
              </p>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Success Story:</h3>
              <p className="text-gray-800 leading-relaxed">
                Arizto (New Zealand) started with two admin assistants, built trust over 12 months, then expanded to developers for technical projects. That admin-to-technical evolution took 18 months of systematic relationship building. By year two, they were expanding services to other companies in their network—ultimate validation of long-term value.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What ShoreAgents Does Differently Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Building2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What ShoreAgents Does Differently</h2>
              <p className="text-lg text-gray-600">Most providers: show resumes, help interview, collect payment, disappear whilst hoping it works</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Most providers: show resumes, help interview, collect payment, disappear whilst hoping it works. That's facilitated introductions with crossed fingers, not systematic support.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">ShoreAgents starts with honest assessment:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                We evaluate whether you're ready. Not ready? We'll say so directly. Rather lose a client upfront than have you fail later.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Candidate matching isn't resume shuffling:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Pre-vetted database filtered by experience, skills, personality, communication style. You see work samples, test scores, communication examples before first interview.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time onboarding tracking:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Dashboard shows personal info submitted, IDs verified, contract signed, equipment setup, start date. You're not wondering "when do they start?"—you're watching progress updates.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Live productivity monitoring:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                60-second updates showing clock-in, tasks completed, productivity scores. Unlike providers asking you to "trust they're working," we give transparent data.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backup coverage guaranteed:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                VA takes holidays or gets sick? We provide trained backup so admin functions don't stop.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">We handle everything you hate:</h3>
              <p className="text-gray-800 leading-relaxed">
                HR admin, payroll, equipment, office, compliance, replacement if needed. You get exceptional admin support without employment headaches.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              If you're doing $500K+ annually with documented, repetitive admin work consuming 25-30+ hours weekly, schedule a consultation. We'll evaluate readiness, review processes, discuss candidate matching.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Not ready yet—under revenue threshold, lacking processes, still building systems? Come back in 6-12 months when you've got operational infrastructure supporting systematic delegation.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              The 18-24 month break-even isn't weakness—it's realistic implementation creating long-term strategic value. Businesses succeeding with admin VAs don't expect magic. They expect systematic efficiency compounding over time through proper training investment, process development, and relationship building.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed font-semibold">
              Are you one of them?
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
      </div>
    </div>
  );
}
