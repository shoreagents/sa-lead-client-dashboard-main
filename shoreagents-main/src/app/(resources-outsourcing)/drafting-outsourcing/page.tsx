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
  Globe,
  Users
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";

export default function DraftingOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['drafting-outsourcing']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For Firms Spending $50K+ Annually on CAD Drafting
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Drafting Outsourcing:<br />
              <span className="text-lime-600">The $50,000 Decision Nobody Tells You About</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              I'm going to save some of you a lot of money right now. If your firm spends less than $50,000 a year on CAD drafting, close this 
              page. Outsourcing offshore drafting services isn't for you, and anyone telling you otherwise is selling something. The maths 
              doesn't work, the training investment won't pay off, and you'll waste six months discovering what I'm telling you now.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/pricing" 
                className="inline-flex items-center px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors"
              >
                Get Drafting Quote
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
            Still here? Right, let's talk about when outsourcing your architectural drafting, engineering drawings, or BIM modeling actually 
            makes sense—and the costs nobody mentions until you're already committed.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I'm Stephen Atcheler. Spent fifteen years watching Australian, American, and Kiwi firms either nail offshore staffing or completely 
            cock it up. Most of the failures come down to unrealistic expectations and hidden costs that conveniently never make it into the 
            sales pitch.
          </p>
        </div>

        <Separator className="my-12" />

        {/* Advertised Rate vs Actual Cost Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Advertised Rate vs. The Actual Cost</h2>
              <p className="text-lg text-gray-600">Here's what every offshore CAD drafting provider tells you</p>
            </div>
          </div>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Here's what every offshore CAD drafting provider tells you: <strong>"Our experienced drafters are just $15-20 per hour!"</strong>
              </p>
              <p className="text-gray-800 leading-relaxed">
                Here's what they don't tell you: <strong>that $15/hour drafter costs you $32/hour in year one.</strong>
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The real cost breakdown for a full-time offshore drafter in their first year:</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Base salary:</span>
                  <span className="font-semibold">$15/hour × 2,080 hours = $31,200 USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Platform/agency markup:</span>
                  <span className="font-semibold">+20-30% = $6,240-9,360</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your CAD software licenses:</span>
                  <span className="font-semibold">$1,500-2,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Training time (60 hours of your senior drafter's time):</span>
                  <span className="font-semibold">$4,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Management overhead (5 hours/week of your time):</span>
                  <span className="font-semibold">$19,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">First 90 days of mistakes and rework:</span>
                  <span className="font-semibold">$3,000-5,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Project management tools, file sharing, communication:</span>
                  <span className="font-semibold">$1,000</span>
                </div>
                <Separator className="my-3" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">Total year one:</span>
                  <span className="font-bold text-blue-600">$66,940-70,560 USD</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">Effective hourly rate:</span>
                  <span className="font-bold text-blue-600">$32-34/hour</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Compare that to hiring a local CAD drafter in the USA at $26.50/hour ($55,120/year), Australia at $50-60/hour, or New Zealand 
                at similar rates to Australia—suddenly that 70% cost saving looks more like 30-40% in reality.
              </p>
              <p className="text-gray-800 font-semibold">
                By year two, once they're trained and productive, your costs drop to around $23-25/hour effective rate. That's when the savings 
                actually materialise. But you've got to survive year one first.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* 90-Day Training Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-100 rounded-full p-3">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 90-Day Training Reality</h2>
              <p className="text-lg text-gray-600">"Experienced CAD professionals" is the phrase every offshore drafting provider loves to use</p>
            </div>
          </div>

          <Card className="bg-amber-50 border-l-4 border-amber-500 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                "Experienced CAD professionals" is the phrase every offshore drafting provider loves to use. And they're not lying—these drafters 
                absolutely know AutoCAD, Revit, or whatever software you're using.
              </p>
              <p className="text-gray-800 leading-relaxed">
                What they don't know is YOUR standards. Your layer naming conventions. Your template files. Your typical project types. How you 
                like dimensions placed. Which details you always use. The quirks of your regular clients.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Here's the actual timeline I've seen work across firms in Brisbane, Denver, and Auckland:</h3>
              <div className="space-y-4">
                {[
                  {
                    period: "Weeks 1-2",
                    description: "Learning your file organisation, layer standards, and templates. They're producing work, but you're spending 2-3 hours daily reviewing and correcting."
                  },
                  {
                    period: "Weeks 3-6",
                    description: "Understanding your project types and standards. Output is acceptable but slow—about 40-50% of a local drafter's speed."
                  },
                  {
                    period: "Weeks 7-12",
                    description: "Building efficiency and confidence. You're still managing closely, 5-8 hours per week. Speed improves to 60-70%."
                  },
                  {
                    period: "Month 4+",
                    description: "Finally productive at 80-90% speed. Management time drops to 2-3 hours weekly. This is when ROI actually starts."
                  }
                ].map((phase, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Badge className="bg-blue-600 text-white">{phase.period}</Badge>
                    <p className="text-gray-700 flex-1">{phase.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed">
                I worked with a mid-sized architectural firm in Melbourne who hired an offshore team through one of the big Indian providers. 
                Brilliant technical skills, proper training, good English. Still took three and a half months before they stopped needing daily 
                video calls to clarify standards. The firm nearly gave up at week 10 when they were still doing extensive redlines on every 
                drawing set.
              </p>
              <p className="text-gray-800 font-semibold mt-4">
                They stuck with it. Eighteen months later, they're saving $127,000 annually with a team of three offshore drafters. But that 
                first year? Break-even at best.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Geography Matters Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Where Geography Actually Matters</h2>
              <p className="text-lg text-gray-600">For American firms, the Philippines and India cost roughly the same</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">For American Firms</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Philippines and India cost roughly the same—$15-25/hour all-in. The difference is the 12-16 hour time zone gap that cuts 
                  both ways.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The overnight work cycle sounds brilliant in theory: you send a project at 5pm Friday, wake up Monday to completed drawings. 
                  In practice, you send the project Friday afternoon, they start Monday morning their time (your Sunday evening), and by the time 
                  you review Tuesday, you've burned three days. Add a revision cycle and suddenly your "overnight turnaround" took a week.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">For Australian and New Zealand Firms</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Philippines is only 2-4 hours different from Sydney or Auckland time zones. You can have actual real-time conversations. 
                  Schedule a 2pm meeting and both sides are awake, alert, and collaborative.
                </p>
                <p className="text-gray-800 font-semibold">
                  This is why Philippines-based drafting services work better for Aussie and Kiwi firms—not cheaper, just more practical.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Eastern European Option</h3>
              <p className="text-gray-700 leading-relaxed">
                Eastern European drafters—Ukraine, Poland—cost 30-40% more than Asian teams ($25-35/hour) but sit in a more manageable time zone 
                for USA firms. Seven to nine hours' difference means some overlap for real-time collaboration. Higher cost, better communication, 
                faster iterations. Sometimes worth it for complex projects where back-and-forth matters.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What Works vs What Doesn't Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Works Offshore vs. What Doesn't</h2>
              <p className="text-lg text-gray-600">Not all drafting work should leave your office</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">Perfect for outsourcing:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Repetitive floor plan variations (apartment buildings, tract housing)",
                    "3D model creation from your approved 2D drawings",
                    "Sheet set assembly and standardised annotation",
                    "Drawing cleanup and file organisation",
                    "Quantity takeoffs and schedules",
                    "As-built updates from redlines you've marked up"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-900 mb-4">Keep in-house:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Initial concept sketches (too collaborative, too iterative)",
                    "Client-facing renderings where your brand reputation is on the line",
                    "Permit-ready construction documents (your professional liability)",
                    "Anything requiring site visits or local building code expertise",
                    "Last-minute rush jobs where time zones kill your deadline",
                    "Highly proprietary or sensitive designs"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-100 border-l-4 border-gray-600">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold mb-2">⚠️ Real Example:</p>
              <p className="text-gray-700 leading-relaxed">
                A commercial construction firm in Texas tried outsourcing their permit drawings to save money. Three projects came back with 
                code violations the offshore team missed—because they didn't know the specific county requirements for fire egress in that 
                jurisdiction. Cost them $18,000 in resubmission fees and delayed starts. They now keep permit-ready docs in-house and outsource 
                the background work.
              </p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Freelancer vs. Agency Question</h2>
              <p className="text-lg text-gray-600">Upwork and Fiverr look tempting</p>
            </div>
          </div>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Upwork and Fiverr look tempting. $12/hour CAD freelancers with great portfolios and five-star reviews. Why pay an agency $25/hour 
                when you can hire direct?
              </p>
              <p className="text-gray-800 font-semibold">
                Because 70-80% of cheap freelancers fail within the first 2-3 projects.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">They're juggling five clients. Your project sits in a queue. Communication is 
                sporadic. They ghost you mid-project because a better offer came along. You've got no backup, no quality control, no accountability.</p>
              <p className="text-gray-800 font-semibold">
                I've watched firms hire four consecutive Upwork freelancers before giving up and going with a proper agency. Total cost of those 
                failed attempts: $4,800 plus four months of wasted time.
              </p>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed">
                An agency charges more up-front but includes project management, quality control, backup resources, and someone to yell at when 
                things go wrong.
              </p>
              <p className="text-gray-800 font-semibold mt-4">
                That said, if you need a one-off project—a single 3D model or a set of shop drawings—a skilled freelancer can be brilliant. 
                Just don't try building an ongoing relationship with someone who's incentivised to chase the next highest bidder.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Real Numbers Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Real Numbers from Real Firms</h2>
              <p className="text-lg text-gray-600">ShoreAgents places full-time offshore staff</p>
            </div>
          </div>

          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                ShoreAgents places full-time offshore staff at $1,200-2,500/month depending on role complexity and experience level. For CAD 
                drafters and BIM modelers, you're typically at the $1,400-1,800 range.
              </p>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Compare to local costs:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-lime-600 font-bold mt-1">•</span>
                  <span><strong>USA:</strong> $3,500-6,000/month for equivalent roles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-600 font-bold mt-1">•</span>
                  <span><strong>Australia:</strong> $4,000-7,000/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-600 font-bold mt-1">•</span>
                  <span><strong>New Zealand:</strong> $3,800-6,500/month</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                One Queensland construction company we work with—Gallery Group—hired a full-time estimator and drafting assistant through us. 
                Annual savings of $73,000 AUD, with performance reviews consistently rating the offshore team member 5/5. But they came in knowing 
                exactly what they needed, had documented processes, and committed to proper training time.
              </p>
              <p className="text-gray-800 font-semibold">
                That's the pattern I see work: firms that prepare properly, set realistic timelines, and treat offshore staff as actual team 
                members rather than disposable vendors.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When This Doesn't Work (And You Should Walk Away)</h2>
              <p className="text-lg text-gray-600">If any of these apply to you, outsourcing offshore drafting will cost you more than it saves</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  {
                    title: "Annual drafting spend under $50,000",
                    description: "The training investment won't pay back. Use project-based freelancers or hire part-time locally."
                  },
                  {
                    title: "No documented CAD standards",
                    description: "You can't outsource chaos. If your layer systems and templates aren't written down, you're not ready."
                  },
                  {
                    title: "Under 10 employees total",
                    description: "You don't have the management bandwidth. Someone needs to oversee offshore staff 5-10 hours weekly in the first six months."
                  },
                  {
                    title: "Highly specialised or proprietary work",
                    description: "Defence contractors with ITAR restrictions, pharmaceutical facilities, anything with serious IP concerns or regulatory complexity."
                  },
                  {
                    title: "Project-based work with long gaps",
                    description: "If you need drafters for three months, then nothing for four months, then two months, you'll spend all your savings on constant retraining."
                  },
                  {
                    title: "No appetite for 90-day ramp-up",
                    description: "If you need someone productive next week, hire locally. Offshore teams need proper onboarding."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {index + 1}
                    </div>
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

        {/* Honest Path Forward Section */}
        <section className="mb-16">
          <Card className="bg-gray-900 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">The Honest Path Forward</h2>
              <p className="text-lg leading-relaxed mb-6">
                Look, offshore CAD drafting and BIM outsourcing works. I've seen it save Australian engineering firms $100,000+ annually. 
                American architectural practices cutting overhead by 40%. New Zealand construction companies scaling up without adding local 
                headcount.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                But it's not magic, it's not instant, and it's definitely not as cheap as the hourly rate suggests.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                You need consistent volume ($50,000+ annual spend), documented processes, realistic timelines (90 days to productivity), and 
                genuine commitment to training and management. Get those right, and by year two you're seeing legitimate 40-50% cost savings 
                with quality work.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Skip the preparation, expect immediate results, or treat offshore staff as disposable resources, and you'll burn $20,000-30,000 
                discovering this doesn't work for you.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Explore Drafting Outsourcing?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              If you're spending serious money on drafting, have your standards documented, and can commit to a proper 90-day onboarding 
              process, offshore drafting services make excellent financial sense. We place CAD drafters, BIM modelers, and technical support 
              staff for firms across the USA, Australia, and New Zealand at $1,200-2,500/month full-time.
            </p>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              But if you're not ready—if your annual volume is too low, your processes aren't documented, or you need someone productive 
              immediately—I'd rather tell you now than have you waste six months discovering it yourself. Sometimes the honest answer is: not yet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 bg-white text-lime-600 font-bold text-lg rounded-lg hover:bg-lime-50 transition-colors shadow-lg"
              >
                Get Drafting Quote
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
              Get in touch if your numbers work and you're ready to do this properly. We'll talk you through what realistic success looks 
              like—including the bits that aren't fun to hear.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
