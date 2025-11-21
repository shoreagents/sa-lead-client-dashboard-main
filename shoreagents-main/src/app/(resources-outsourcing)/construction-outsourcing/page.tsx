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
  Building2
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";

export default function ConstructionOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['construction-outsourcing']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For $2M+ Construction Companies
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Construction Outsourcing:<br />
              <span className="text-lime-600">The Admin Trap Killing Your Profit Margins</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              You're probably spending 20-30 hours weekly on paperwork instead of managing projects or winning bids. 
              That's <strong>$40,000-75,000 annually in lost opportunity cost</strong>.
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
            RFI tracking. Submittal logs. Invoice processing. Project documentation. If your time is worth $100-150/hour 
            but you're doing $15/hour admin work, that's $40,000-75,000 annually in lost opportunity cost.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I've been placing offshore construction staff for 15 years across the USA, Australia, and New Zealand. 
            Some construction companies save $70,000+ annually per offshore hire with perfect quality. Others waste 
            $40,000 in nine months because they delegated wrong tasks or weren't ready.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This guide is for:</strong> Construction companies doing $2M+ annual revenue, running 15-20+ active 
                projects simultaneously, and already using project management software. If you're tracking jobs in notebooks, 
                bookmark this for later.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* When You're NOT Ready Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When You're NOT Ready to Outsource</h2>
              <p className="text-lg text-gray-600">Most construction companies shouldn't be outsourcing yet</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            If you're running $1M revenue with 8-10 projects yearly, the math doesn't work.
          </p>

          {/* Reality at $1M Card */}
          <Card className="border-red-200 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Your Reality at $1M Revenue:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-800">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>Gross margin: ~$200,000</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>First-year outsourcing costs: $41,400</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>That's <strong>21% of your margin consumed</strong></span>
                </li>
                <li className="flex items-start gap-3 text-gray-800">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>You only have 15 hours/week of delegatable work</span>
                </li>
                <li className="flex items-start gap-3 text-gray-800">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span>You're paying for 40 hours/week capacity</span>
                </li>
                <li className="flex items-start gap-3 text-gray-900 font-bold">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Result: You're losing money</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* When NOT to Outsource Checklist */}
          <Card className="border-gray-300 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">When NOT to Outsource:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Annual revenue under $2M",
                  "Fewer than 15 active projects simultaneously",
                  "No documented processes or SOPs",
                  "Using spreadsheets instead of construction PM software",
                  "Can't dedicate 5-10 hours weekly to VA management",
                  "Haven't identified 25+ hours weekly of delegatable work",
                  "Thinking outsourcing will \"fix\" disorganization"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-l-4 border-blue-500">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                <strong>Better alternatives under $2M:</strong> Part-time local admin ($25K/year), project-based freelancers, 
                automation software ($5K/year vs $41K for VA), or wait until you're bigger.
              </p>
              <p className="text-gray-800 leading-relaxed">
                The construction companies succeeding? They're doing <strong>$3M-15M annually</strong>, running 20-50+ projects, using Procore 
                or Buildertrend, and have documented systems BEFORE they hire.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 90-Day Reality: You'll Get Slower First</h2>
              <p className="text-lg text-gray-600">Every provider promises "immediate productivity." That's rubbish.</p>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-4">
            {/* Days 1-30 */}
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-red-600 text-white">Days 1-30</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Productivity DROP</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Your productivity decreases 20-30%. You're creating training materials, holding daily check-ins, fixing mistakes. 
                      Work that took 3 hours now takes 5.
                    </p>
                    <p className="text-red-700 font-semibold">⚠️ Temptation to quit is highest. 40% quit here.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Days 30-60 */}
            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-amber-600 text-white">Days 30-60</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Frustration Zone</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Quality varies wildly. Still spending 5-10 hours weekly managing. Break-even point—not losing time, not gaining. 
                      Cash flowing out, zero ROI yet.
                    </p>
                    <p className="text-amber-700 font-semibold">⚠️ Another 30% quit here.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Days 60-90 */}
            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-blue-600 text-white">Days 60-90</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Turning Point</h3>
                    <p className="text-gray-700 leading-relaxed">
                      VA becoming independent. They've learned YOUR systems, terminology, standards. Quality improving. 
                      Small positive ROI starting (5-8 hours saved weekly).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Months 4-6 */}
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-green-600 text-white">Months 4-6</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Payoff Begins</h3>
                    <p className="text-gray-700 leading-relaxed">
                      VA handling 15-20 hours weekly independently. You've reclaimed 10-15 productive hours. Management down to 2-3 
                      hours weekly. <strong>Real ROI visible: 3-5x return.</strong>
                    </p>
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Scaling Phase</h3>
                    <p className="text-gray-700 leading-relaxed">
                      VA mastered core tasks. You can delegate complex work—actual project coordination, quality reviews. 
                      Effective hourly cost drops from $29 (month 1) to $16 (month 12+).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Success Story Callout */}
          <Card className="border-lime-300 bg-gradient-to-br from-lime-50 to-green-50 mt-8">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-lime-600 rounded-full p-3">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Gallery Group Success Story</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Gallery Group (Queensland construction company) hired two offshore architectural specialists and pushed 
                    through the tough 90 days. Years later: both earned 5/5 performance reviews, <strong>$73,000 annual 
                    savings per specialist</strong>.
                  </p>
                  <p className="text-gray-800 font-semibold italic">
                    "We can rely on this specialist for any task—the quality and dedication are outstanding."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Tasks That Will Bankrupt You Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 7 Tasks That Will Bankrupt You If Outsourced</h2>
              <p className="text-lg text-gray-600">Never delegate these construction-critical activities</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6">Never Outsource:</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Client Relationship Management",
                    description: "In-person meetings, trust-building, complaint handling. Personal connection = repeat business worth millions."
                  },
                  {
                    title: "Quality Control & Inspections",
                    description: "Physical walkthroughs, punch lists, safety checks. Photos don't reveal what on-site presence does. You're personally liable."
                  },
                  {
                    title: "Real-Time Problem-Solving",
                    description: "Design conflicts during framing, structural issues, code questions. 12-hour delays cost $3,000+ in crew labor plus schedule cascade."
                  },
                  {
                    title: "Crew & Sub Management",
                    description: "Daily assignments, conflicts, on-site coordination. You can't manage trades from 8,000 miles away."
                  },
                  {
                    title: "High-Stakes Negotiations",
                    description: "Change order pricing, delay explanations, budget overruns. One bad conversation costs entire client relationships."
                  },
                  {
                    title: "Strategic Business Decisions",
                    description: "Which bids to pursue, equipment purchases, expansion plans. Your money, your risk, your license."
                  },
                  {
                    title: "Legal & Compliance",
                    description: "Permits (require your signature), insurance, licensing, OSHA compliance. Personal legal liability you can't delegate."
                  }
                ].map((task, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{task.title}</h4>
                      <p className="text-gray-700 leading-relaxed">{task.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cautionary Tale */}
          <Card className="bg-gray-100 border-l-4 border-gray-600">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold mb-2">⚠️ Cautionary Tale:</p>
              <p className="text-gray-700 leading-relaxed">
                A Chicago contractor tried outsourcing permit applications. Forms filled incorrectly, permit rejected three times, 
                six-week delay. Client sued. <strong>Total cost: $85,000 settlement plus $15,000 legal fees.</strong> All to 
                save $600 in admin time.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Actually Works Offshore</h2>
              <p className="text-lg text-gray-600">These tasks thrive with Filipino construction specialists</p>
            </div>
          </div>

          {/* Perfect for Outsourcing */}
          <Card className="border-green-300 bg-green-50 mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Perfect for Outsourcing:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "CAD Drafting & BIM",
                    items: ["2D AutoCAD, 3D Revit, shop drawings", "Philippines: $8-15/hour vs USA $25-45/hour", "Natural daytime collaboration for AUS/NZ"]
                  },
                  {
                    title: "Quantity Takeoffs",
                    items: ["Material takeoffs, lumber lists", "Concrete calculations", "They measure, you price"]
                  },
                  {
                    title: "Project Documentation",
                    items: ["Daily logs, RFI tracking", "Submittal logs, photo organization", "Perfect admin work"]
                  },
                  {
                    title: "Bookkeeping",
                    items: ["Invoice processing, QuickBooks", "Progress billing, retention tracking", "70% cost savings"]
                  },
                  {
                    title: "Procurement Research",
                    items: ["Vendor comparisons, price checking", "They research, you decide", "Based on your relationships"]
                  },
                  {
                    title: "Marketing",
                    items: ["Social media, website updates", "Project portfolio creation", "Video editing"]
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

          {/* Proceed with Caution */}
          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Proceed with Caution:</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Estimating",
                    description: "They can do takeoffs and material research. YOU do final pricing based on YOUR costs, crew capabilities, and project risks."
                  },
                  {
                    title: "Client Communication",
                    description: "VA drafts, you review and send. Never let unreviewed messages go to high-value clients."
                  },
                  {
                    title: "Subcontractor Coordination",
                    description: "VA handles scheduling logistics. You handle relationships, conflicts, payment timing."
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
        </section>

        <Separator className="my-12" />

        {/* True Costs Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">True Costs: What Nobody Tells You</h2>
              <p className="text-lg text-gray-600">The real numbers behind "cheap offshore labor"</p>
            </div>
          </div>

          {/* Cost Breakdown */}
          <Card className="border-blue-300 bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Advertised vs Actual */}
                <div>
                  <Card className="border-gray-300 bg-white mb-4">
                    <CardContent className="p-6 text-center">
                      <p className="text-sm text-gray-600 mb-2">Advertised:</p>
                      <p className="text-5xl font-bold text-gray-900">$12<span className="text-xl text-gray-600">/hour</span></p>
                    </CardContent>
                  </Card>
                  <Card className="border-blue-400 bg-white">
                    <CardContent className="p-6 text-center">
                      <p className="text-sm text-gray-600 mb-2">Actual Year One:</p>
                      <p className="text-5xl font-bold text-blue-600">$23-25<span className="text-xl text-gray-600">/hour</span></p>
                    </CardContent>
                  </Card>
                </div>

                {/* Breakdown */}
                <Card className="bg-white border-blue-300">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Year One Cost Breakdown:</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-700">VA salary:</span>
                        <span className="font-semibold">$21,600</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Software stack:</span>
                        <span className="font-semibold">$7,800-10,800</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Your training time:</span>
                        <span className="font-semibold">$4,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Management (2hrs/wk):</span>
                        <span className="font-semibold">$10,400</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Mistakes/rework:</span>
                        <span className="font-semibold">~$3,000</span>
                      </div>
                      <Separator className="my-3" />
                      <div className="flex justify-between pt-2">
                        <span className="font-bold text-gray-900">Total Year One:</span>
                        <span className="font-bold text-blue-600">$47,800-50,800</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <p className="text-sm text-gray-700 text-center italic">
                Year Two drops to $29,700 as training completes. Software stack alone: $650-900/month most contractors forget to budget.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Real Savings Examples */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Real Savings Examples</h2>
              <p className="text-lg text-gray-600">Actual numbers from USA and Australian contractors</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* USA Example */}
            <Card className="border-green-300 bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-6">
                <Badge className="bg-green-600 text-white mb-4">USA Commercial Contractor</Badge>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Local admin:</span>
                    <span className="font-semibold text-gray-900">$71,200/year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Philippines Year 1:</span>
                    <span className="font-semibold text-gray-900">$41,400</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-bold text-gray-900">Year 1 Savings:</span>
                    <span className="font-bold text-green-600 text-xl">$29,800 (42%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900">Year 2+ Savings:</span>
                    <span className="font-bold text-green-700 text-xl">$41,500 (58%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Australian Example */}
            <Card className="border-lime-300 bg-gradient-to-br from-lime-50 to-lime-100">
              <CardContent className="p-6">
                <Badge className="bg-lime-600 text-white mb-4">Australian Queensland Tradie</Badge>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Local specialist:</span>
                    <span className="font-semibold text-gray-900">AUD $99,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Philippines specialist:</span>
                    <span className="font-semibold text-gray-900">AUD $22,000</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-bold text-gray-900">Annual Savings:</span>
                    <span className="font-bold text-lime-600 text-xl">AUD $77,000 (77%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900">5-Year Savings:</span>
                    <span className="font-bold text-lime-700 text-xl">$385,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Gallery Group Callout */}
          <Card className="border-lime-300 bg-gradient-to-r from-lime-100 to-green-100 mt-8">
            <CardContent className="p-8 text-center">
              <p className="text-gray-800 text-lg leading-relaxed">
                <strong>This is Gallery Group's reality.</strong> As they described it: helped them "survive tough times, now 
                thrive with their low cost, highly talented offshore team."
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Are You Ready Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Are You Ready?</h2>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Most reading this aren't. Come back when you hit $2M+ revenue, documented processes, 20+ active projects.
          </p>

          <Card className="border-lime-300 bg-gradient-to-br from-lime-50 to-green-50 mb-8">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">If you ARE ready:</h3>
              <div className="space-y-4">
                {[
                  "Document top 10 recurring tasks",
                  "Calculate your hourly value",
                  "Commit 5-10 hours weekly (first 90 days)",
                  "Budget $40,000-60,000 (Year 1)",
                  "Accept 90-day timeline"
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
                At ShoreAgents, construction VA pricing is <strong className="text-lime-400">$1,200-2,500/month full-time</strong> (all-inclusive: 
                salary, benefits, management, infrastructure, backup, replacements).
              </p>
              <p className="text-gray-300 leading-relaxed">
                We work with USA construction companies doing $2M-50M annually and Australian/NZ tradies drowning in admin. 
                We're not the cheapest (Upwork is cheaper). We're not the biggest (MyOutDesk is bigger). But we'll tell you 
                NOT to hire if you're not ready.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for an Honest Assessment?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation. We'll tell you if you're ready or what to fix first—not a sales pitch.
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
                Gallery Group Case Study
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Final Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            Construction outsourcing works brilliantly when done by properly-sized companies, at the right stage, 
            with realistic expectations. Don't waste $40,000 rushing in unprepared.
          </p>
        </div>
      </div>
    </div>
  );
}
