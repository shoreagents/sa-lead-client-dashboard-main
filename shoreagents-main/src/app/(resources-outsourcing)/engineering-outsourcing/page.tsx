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
  Ban
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";

export default function EngineeringOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['engineering-outsourcing']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For $2M+ Annual Revenue Engineering Firms
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Engineering Outsourcing:<br />
              <span className="text-lime-600">The Licensing Problem That'll Cost You $167,000</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              An automotive OEM engineer told researchers: <strong>"By outsourcing, we are exporting our technical expertise, which will present problems long-term."</strong>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              He's right. And he's not alone—59% of OEM engineers say outsourced engineering work is inferior to in-house. Half report project delays from supplier failures. Yet the engineering outsourcing market is exploding: the USA alone grew from $337 billion in 2024 to a projected $844 billion by 2030.
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
            Here's what's happening: companies across the USA, Australia, and New Zealand are desperate. The engineering workforce is shrinking—down 10% from 2019 to 2024 in the US, with similar patterns across Australia and New Zealand. There'll be hundreds of thousands of open engineering roles with nobody to fill them. So businesses are turning to outsourcing without understanding professional licensing barriers (PE stamps in the US, RPEng in Australia, CPEng in NZ), export restrictions, or why that "$30/hour offshore engineer" actually costs $150/hour when you factor in everything.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I've spent 15 years helping businesses across these three markets navigate offshore staffing. Most of my work is administrative roles—property management, real estate, construction coordination. But I've watched enough engineering firms make expensive mistakes to know what works and what's complete rubbish.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This guide is for:</strong> Engineering firms doing $2M+ in annual revenue (USD/AUD/NZD), running multiple concurrent projects, and considering offshore engineering support for the first time. If you're working on defence contracts, dealing with export-controlled technology, or need certified engineering sign-offs, you need to understand the limitations before spending a cent.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* The Problem Nobody Discusses Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Problem Nobody Discusses: Your Offshore Engineer Can't Sign Your Drawings</h2>
              <p className="text-lg text-gray-600">Here's what every engineering outsourcing provider conveniently forgets to mention</p>
            </div>
          </div>

          {/* United States */}
          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">United States: PE Stamps Required</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All 50 US states require Professional Engineer (PE) licenses for certain work. Structural calculations for buildings? Need a PE stamp. Civil infrastructure projects? PE stamp. Many mechanical and electrical submissions? PE stamp.
              </p>
              <p className="text-gray-800 font-semibold">
                Your offshore provider can do the calculations, create the drawings, run the simulations—but at the end, you still need a licensed US Professional Engineer to review and stamp everything. That's an added cost layer nobody mentions upfront.
              </p>
            </CardContent>
          </Card>

          {/* Australia */}
          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Australia: RPEng Registration</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Engineers Australia's Registered Professional Engineer (RPEng) or state-based registration is required for:
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4 ml-4">
                <li>• Structural engineering certification in Queensland, Victoria, NSW</li>
                <li>• Building certifier submissions</li>
                <li>• Development applications requiring engineering reports</li>
                <li>• Any work where public safety is involved</li>
              </ul>
              <p className="text-gray-800 font-semibold">
                Your offshore engineer in the Philippines can't provide RPEng certification. You'll still need a registered Australian engineer to review and certify their work.
              </p>
            </CardContent>
          </Card>

          {/* New Zealand */}
          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">New Zealand: CPEng Chartership</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Chartered Professional Engineer (CPEng) status through Engineering New Zealand is required for:
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4 ml-4">
                <li>• Building consent applications (structural, fire, geotechnical)</li>
                <li>• Producer statements (PS1, PS3, PS4)</li>
                <li>• Resource consent engineering reports</li>
                <li>• Infrastructure design certification</li>
              </ul>
              <p className="text-gray-800 font-semibold">
                Your offshore team can do the technical work, but you need a CPEng-registered Kiwi engineer to sign off.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border-l-4 border-gray-600">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Real Cost Impact</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Real scenario across all three markets: You hire an offshore structural engineer for $35/hour to save money versus the $85/hour (USA), AU$95/hour (Australia), or NZ$90/hour (New Zealand) your local licensed engineer charges.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sounds brilliant until you realize you still need to pay that licensed engineer to review and certify the offshore engineer's work. Now you're paying for both—the offshore calculations AND the local professional review time. Where's the savings?
              </p>
              <p className="text-gray-800 font-semibold">
                Some firms make it work by having one in-house licensed engineer who reviews offshore calculations. But if your senior engineer is spending 15-20 hours weekly just reviewing outsourced work instead of doing original engineering, you've just turned your highest-paid staff into expensive checkers.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When Engineering Outsourcing Actually Costs MORE Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When Engineering Outsourcing Actually Costs MORE Than Local Hiring</h2>
              <p className="text-lg text-gray-600">Providers love advertising "$20-40/hour for offshore engineers." Here's what they don't calculate.</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-lg font-semibold text-gray-900 mb-4">ADVERTISED COST (offshore engineer, full-time):</p>
              <p className="text-gray-700 mb-6">$30/hour × 2,080 hours = $62,400/year (USD/AUD/NZD roughly equivalent)</p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">ACTUAL TOTAL COST OF OWNERSHIP (Year One):</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Base labour cost:</span>
                  <span className="font-semibold">$62,400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software licenses (SolidWorks, ANSYS, Revit, etc.):</span>
                  <span className="font-semibold">$15,000-25,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Security/VPN infrastructure:</span>
                  <span className="font-semibold">$8,000-15,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Project management overhead:</span>
                  <span className="font-semibold">$25,000-40,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your internal management time (8 hrs/wk @ $150/hr):</span>
                  <span className="font-semibold">$62,400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Training/onboarding (documenting YOUR processes):</span>
                  <span className="font-semibold">$20,000-30,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Rework from mistakes during learning curve:</span>
                  <span className="font-semibold">$15,000-40,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Licensed engineer review time (PE/RPEng/CPEng, if required):</span>
                  <span className="font-semibold">$20,000-50,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Legal/contract setup:</span>
                  <span className="font-semibold">$8,000-15,000</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">TOTAL FIRST YEAR:</span>
                  <span className="font-bold text-red-600 text-xl">$235,800 - $339,800</span>
                </div>
                <p className="text-red-700 font-semibold mt-2">Effective hourly rate: $113-163/hour (NOT the advertised $30/hour)</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For comparison:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">USA: Mid-level engineer at $95,000 salary + 30% benefits:</span>
                  <span className="font-semibold">$123,500 annually</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Australia: Mid-level engineer at AU$100,000 + 25% super/benefits:</span>
                  <span className="font-semibold">AU$125,000 annually</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">New Zealand: Mid-level engineer at NZ$95,000 + 25% benefits:</span>
                  <span className="font-semibold">NZ$118,750 annually</span>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                In year one, outsourcing often costs MORE than local hiring—not less, across all three markets.
              </p>
              <p className="text-gray-700 mt-3">
                The savings only materialize in years 2-3 after the learning curve, assuming the relationship survives (60-70% don't).
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Export Control Trap Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Ban className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Export Control Trap: When Offshore Engineering Violates the Law</h2>
              <p className="text-lg text-gray-600">If you're in aerospace, defence, satellite technology, or military applications, offshore outsourcing isn't just risky—it can violate export control laws.</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">United States: ITAR and EAR</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                ITAR (International Traffic in Arms Regulations) prohibits sharing defence-related technical data with foreign nationals, even for civilian projects that touch military applications. Violations aren't fines—they're criminal prosecution.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                EAR (Export Administration Regulations) restricts dual-use technologies (civilian applications with military potential). Advanced materials, certain software, aerospace components, some manufacturing processes—all potentially restricted.
              </p>
              <p className="text-gray-800 font-semibold">
                The "deemed export" rule means even sharing technical data with foreign nationals working in the US can trigger export controls. Your offshore team in India or the Philippines? Definitely covered.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Australia: Defence Export Controls</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Australia's Defence and Strategic Goods List (DSGL) controls export of:
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4 ml-4">
                <li>• Military technology and equipment</li>
                <li>• Dual-use goods with military applications</li>
                <li>• Certain aerospace and satellite technologies</li>
              </ul>
              <p className="text-gray-800 font-semibold">
                Sharing technical data offshore for controlled items requires Department of Defence permits. Violations carry significant penalties.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">New Zealand: Strategic Goods Controls</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                New Zealand's Strategic Goods List controls similar categories—defence, dual-use, and sensitive technologies. Sharing engineering data offshore for controlled projects requires permits from the Ministry of Foreign Affairs and Trade.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-red-100 border-l-4 border-red-600">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold mb-2">The Real Risk:</p>
              <p className="text-gray-700 leading-relaxed">
                I've seen engineering firms nearly torpedo themselves by outsourcing work on satellite components or aerospace parts without realizing export controls applied. They discovered the problem months in, had to pull back all work, faced legal reviews, and ended up spending more on cleanup than they would've spent keeping it in-house.
              </p>
              <p className="text-gray-800 font-semibold mt-4">
                If your work touches defence, aerospace, or advanced technology in any of these markets, get export control legal advice before outsourcing anything. The legal fees you spend upfront could save you from regulatory nightmares later.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Quality Crisis Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Quality Crisis: Why 59% Say Outsourced Work Is Inferior</h2>
              <p className="text-lg text-gray-600">An automotive industry survey asked OEM engineers directly: is outsourced engineering as good as in-house work? 59% said no.</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why the quality problems?</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">1. The "A Team" Isn't Working on Your Project</h4>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Offshore providers staff projects based on budget. Pay premium rates? You get their senior engineers. Cost-focused contract? You get recent graduates learning on your dime.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    One engineering firm I know tried offshore FEA analysis at $25/hour. The analyst had the software skills but didn't understand the client's industry-specific failure modes. Ran simulations that looked beautiful but missed critical stress concentrations. Cost them three months and $85,000 in rework.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">2. Standards Knowledge Gaps</h4>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Engineering codes and standards vary by market:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700 mb-3 ml-4">
                    <li>• USA: AISC, ACI, ASCE, IBC, ASME, IEEE standards</li>
                    <li>• Australia: AS (Australian Standards) across all engineering disciplines</li>
                    <li>• New Zealand: NZS standards, Building Code compliance</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Offshore engineers may know the software but not the compliance requirements specific to your market.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Example:</strong> An offshore structural engineer designed a building connection using generic international best practices. Problem: it didn't meet AISC 360 requirements for seismic loading in California. The US PE reviewer caught it, but if he'd missed it? Liability nightmare.</p>
                    <p><strong>Australian example:</strong> Offshore designer used generic wind loading calculations that didn't account for AS 1170.2 regional wind classifications. Queensland cyclone region requirements are stricter than generic standards.</p>
                    <p><strong>New Zealand example:</strong> Offshore engineer missed NZS 3604 light timber frame construction requirements specific to seismic zones. The CPEng reviewer had to redo significant portions.</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">3. "Good Enough" Standards Differ Culturally</h4>
                  <p className="text-gray-700 leading-relaxed">
                    This sounds harsh, but it's real: engineering standards for what constitutes "complete" or "acceptable" work vary globally. US engineering culture emphasizes thoroughness, documentation, liability protection. Some offshore locations prioritize speed and cost over comprehensiveness.
                  </p>
                  <p className="text-gray-800 font-semibold mt-3">
                    Not universal—I've seen brilliant offshore engineers. But the cultural baseline differs enough that you can't assume your quality expectations are understood.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">4. Communication Gaps Create Engineering Errors</h4>
                  <p className="text-gray-700 leading-relaxed">
                    It's not just language. It's engineering shorthand, industry assumptions, implicit knowledge that doesn't translate across 12 time zones and cultural contexts.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    You say "design per standard practice." Your offshore engineer implements what's "standard" in their region, not yours. Three months later, you're re-engineering from scratch.
                  </p>
                </div>
              </div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Actually Works: The Four Scenarios Where Engineering Outsourcing Makes Sense</h2>
              <p className="text-lg text-gray-600">Despite all these problems, some companies succeed with engineering outsourcing. Here's when it works:</p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. High-Volume, Repetitive CAD Work</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>What:</strong> Drawing production, 3D modelling of standard components, BIM coordination for established standards
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Why it works:</strong> Clear specifications, repeatable processes, easy to check quality
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Example:</strong> Architectural firm outsourcing tenant improvement drawings. The floor plans are similar, standards are documented, local architect reviews and stamps. Offshore team cranks out drawings at $25/hour versus $65/hour locally.
                </p>
                <p className="text-gray-800 font-semibold">Savings: Real 40-60% cost reduction once learning curve is complete</p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Non-Critical Analysis and Simulation</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>What:</strong> FEA for non-liability work, CFD studies, thermal analysis, basic calculations
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Why it works:</strong> Results are verified in-house, not liability-critical, clear methodology
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Example:</strong> Product development team outsourcing initial design iterations. Run 20 CFD simulations offshore for $50 each versus $300 locally. Use results to narrow options, then do final validation in-house.
                </p>
                <p className="text-gray-800 font-semibold">Savings: 60-80% on exploratory work, maintain quality control</p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Documentation and Technical Writing</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>What:</strong> Engineering reports, technical manuals, as-built documentation, specifications
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Why it works:</strong> Format-driven, clear examples, less technical judgment required
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Example:</strong> MEP firm outsourcing equipment schedule creation and submittal documentation. In-house engineers define requirements, offshore team formats documentation, PM reviews final product.
                </p>
                <p className="text-gray-800 font-semibold">Savings: 50-70% on documentation time</p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Legacy Drawing Updates and Conversions</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>What:</strong> CAD file format conversions, redlining incorporation, drawing cleanup
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Why it works:</strong> Defined scope, existing reference, minimal design judgment
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Example:</strong> Civil engineering firm with 30 years of projects needs CAD drawings updated from AutoCAD 2010 to current standards. Offshore team handles conversion at $15/hour, local engineer spot-checks.
                </p>
                <p className="text-gray-800 font-semibold">Savings: 70-80% versus local drafter rates</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-lime-50 border-l-4 border-lime-500 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                The Pattern: Outsourcing works for high-volume, well-defined, non-liability-critical, format-driven work. It fails spectacularly when you need design judgment, liability acceptance, regulatory expertise, or complex problem-solving.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When You Should NEVER Outsource Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When You Should NEVER Outsource Engineering</h2>
              <p className="text-lg text-gray-600">Red flags that should stop you immediately</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-8">
              <div className="space-y-6">
                {[
                  {
                    title: "Red Flag #1: Export-Controlled Technology",
                    description: "Aerospace, defence, satellite, military work—if export restrictions apply (ITAR in USA, DSGL in Australia, Strategic Goods List in NZ), offshore is legally restricted or prohibited. Don't risk it."
                  },
                  {
                    title: "Red Flag #2: Professional Certification Required (Without In-House Review Capacity)",
                    description: "Structural buildings, civil infrastructure, many mechanical/electrical submissions—if you need PE stamps (USA), RPEng certification (Australia), or CPEng sign-offs (NZ) and don't have in-house licensed capacity to review offshore work, the cost model doesn't work. You'll pay for offshore work PLUS local professional review. Where's the savings?"
                  },
                  {
                    title: "Red Flag #3: Your Engineering IS Your Competitive Advantage",
                    description: "Proprietary processes, innovative designs, unique methodologies—if your engineering differentiates you from competitors, outsourcing trains future competitors on your dime. An automotive OEM engineer said it best: 'As the tide comes into the supplier's harbour, it goes out from the OEM.' You're building their capability with your knowledge."
                  },
                  {
                    title: "Red Flag #4: Project Under $50,000 Total Value",
                    description: "Management overhead, training time, setup costs—they don't justify savings below $50K project size (USD/AUD/NZD). Better to use local contractors or handle in-house."
                  },
                  {
                    title: "Red Flag #5: Timeline Under 60 Days",
                    description: "Onboarding offshore providers takes 30-90 days. Communication cycles add 12-24 hour delays. Tight timeline + outsourcing = missed deadline."
                  },
                  {
                    title: "Red Flag #6: You Don't Have Documented Processes",
                    description: "Offshore teams need explicit SOPs, standards documents (AISC/ACI/ASCE in USA, AS/NZS standards in Australia/NZ), example projects, checklists. If you're 'figuring it out as you go,' offshore engineers will make expensive assumptions. One firm tried outsourcing while their processes were still in development. Three months of back-and-forth revisions cost more than doing it in-house would've cost."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Geographic Decision Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Geographic Decision: Location Matters More Than You Think</h2>
              <p className="text-lg text-gray-600">Here's a contrarian take: for many engineering firms, location choice matters more than hourly rate.</p>
            </div>
          </div>

          {/* USA-Based */}
          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For USA-Based Engineering Firms</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Nearshore (Mexico/Canada) versus Offshore (India/Philippines/Eastern Europe)</strong>
              </p>
              <div className="mb-4">
                <p className="text-gray-700 mb-2"><strong>Cost comparison:</strong></p>
                <ul className="space-y-1 text-sm text-gray-700 ml-4">
                  <li>• Offshore: $20-40/hour, 12-hour time difference</li>
                  <li>• Nearshore: $40-65/hour, 0-3 hour time difference</li>
                </ul>
              </div>
              <p className="font-semibold text-gray-900 mb-2">Why nearshore often wins for USA firms:</p>
              <ul className="space-y-1 text-sm text-gray-700 ml-4">
                <li>• Real-time collaboration: Same-day communication versus 24-hour email cycles</li>
                <li>• Quality difference: Nearshore typically delivers 30-50% fewer defects</li>
                <li>• Travel feasibility: Flying to Mexico City or Toronto versus 18-hour flights to India</li>
                <li>• Legal simplicity: USMCA trade agreement, easier contracts, similar legal frameworks</li>
              </ul>
            </CardContent>
          </Card>

          {/* Australia-Based */}
          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Australia-Based Engineering Firms</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Philippines versus India versus Eastern Europe</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Philippines time zone advantage: +2 to +4 hours ahead of Australian Eastern Time means natural overlap during your business day. Morning meetings in Sydney = afternoon in Manila. This is actually better than the USA-Philippines dynamic.
              </p>
              <div className="mb-4">
                <p className="text-gray-700 mb-2"><strong>Cost comparison:</strong></p>
                <ul className="space-y-1 text-sm text-gray-700 ml-4">
                  <li>• Philippines: AU$25-35/hour, excellent time zone overlap</li>
                  <li>• India: AU$20-35/hour, moderate time zone challenge (-4 to -6 hours)</li>
                  <li>• Eastern Europe: AU$40-55/hour, terrible time zone (-8 to -10 hours)</li>
                </ul>
              </div>
              <p className="text-gray-800 font-semibold">
                For Australian firms, Philippines is often the sweet spot: reasonable cost, good time zone, strong English proficiency, familiarity with Australian standards growing.
              </p>
            </CardContent>
          </Card>

          {/* New Zealand-Based */}
          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For New Zealand-Based Engineering Firms</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Similar to Australia but even better Philippines time zone: +4 to +5 hours ahead of NZ means even more business hours overlap. Morning in Auckland = late morning in Manila.
              </p>
              <div className="mb-4">
                <p className="text-gray-700 mb-2"><strong>Cost comparison:</strong></p>
                <ul className="space-y-1 text-sm text-gray-700 ml-4">
                  <li>• Philippines: NZ$25-35/hour, excellent time zone</li>
                  <li>• India: NZ$22-35/hour, moderate time zone challenge</li>
                  <li>• Eastern Europe: NZ$42-58/hour, terrible time zone</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold mb-2">The Pattern Across All Three Markets:</p>
              <div className="space-y-3 text-sm text-gray-700 mb-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">When geographic premium is justified:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Time-sensitive projects</li>
                    <li>• Iterative design work requiring frequent communication</li>
                    <li>• Client-facing deliverables</li>
                    <li>• Anything requiring regular coordination</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">When lowest-cost offshore works:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• High-volume production work (CAD drawings, BIM modeling)</li>
                    <li>• Clearly specified tasks with minimal iteration</li>
                    <li>• Asynchronous workflows</li>
                    <li>• Cost-critical contracts where you have margin for quality issues</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-800 font-semibold">
                I've watched engineering firms try the cheapest offshore option, struggle with communication and quality, then switch to better time zone alignment or nearshore and wish they'd started there. The hourly rate is higher, but the effective cost (when you factor in rework and management time) is often lower.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Onshoring Trend Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Onshoring Trend: Why Companies Are Bringing Engineering Back</h2>
              <p className="text-lg text-gray-600">Here's the market reality: onshore and nearshore engineering is growing while pure offshore is stagnating</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                USA market: Onshore growing at 8.4% annually, 57% of engineering outsourcing now onshore/nearshore versus offshore.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Australia and New Zealand: Similar patterns emerging—more firms choosing New Zealand talent for Australian projects, or keeping work fully domestic despite higher costs.
              </p>
              <p className="font-semibold text-gray-900 mb-3">Why are companies paying 2-3x more to keep work closer?</p>
              <div className="space-y-3">
                {[
                  "IP protection concerns: After a decade of offshoring, companies realized they'd trained competitors. Bringing core engineering back in-house or closer to home.",
                  "Quality control: That 59% dissatisfaction rating is driving decisions. Rework costs eliminate savings.",
                  "Regulatory complexity: Export controls, professional licensing requirements, liability concerns—easier to manage domestically or within trade bloc agreements.",
                  "Skills erosion: Companies that outsourced heavily lost internal capability. Can't bring it back easily now. Those who kept core engineering in-house or nearshore maintained competitive advantage."
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border-l-4 border-gray-600">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                I know a manufacturing firm that spent three years building offshore engineering capability in India, then spent two years bringing it back domestically because quality issues and IP concerns outweighed savings. The transition back cost more than if they'd stayed local or regional from the start.
              </p>
              <p className="text-gray-800 font-semibold">
                The lesson across all three markets: Outsource what's not strategically critical. Keep core engineering in-house or regionally close.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Documentation Requirement Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-100 rounded-full p-3">
              <FileText className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Documentation Requirement Nobody Mentions</h2>
              <p className="text-lg text-gray-600">Want to know why engineering outsourcing fails so often? Companies try it without documenting processes first.</p>
            </div>
          </div>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Offshore teams need:
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4 ml-4">
                <li>• Standard Operating Procedures for your workflows</li>
                <li>• Engineering standards library (codes, specifications, design guides)</li>
                <li>• Example projects (good and bad examples)</li>
                <li>• Checklists for common tasks</li>
                <li>• Quality control criteria</li>
                <li>• Review stage requirements</li>
                <li>• Escalation procedures</li>
              </ul>
              <p className="text-gray-800 leading-relaxed mb-4">
                Creating this documentation takes 200-300 hours of engineering time. At $150/hour, that's $30,000-45,000 before you hire anyone offshore.
              </p>
              <p className="text-gray-800 font-semibold">
                Most firms don't want to invest that time upfront. They expect offshore engineers to "just figure it out." Then they're shocked when the offshore team makes assumptions that cost $50,000 in rework.
              </p>
              <p className="text-gray-800 font-semibold mt-4">
                If your processes exist only in senior engineers' heads, you're not ready to outsource. Document first, outsource second.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Qualification Checklist Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Is Engineering Outsourcing Right for Your Firm?</h2>
              <p className="text-lg text-gray-600">Here's the qualification checklist</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Ready if you have:</h3>
                  <div className="space-y-2">
                    {[
                      "Annual revenue over $2M (need scale to justify management overhead)",
                      "Multiple concurrent projects (keeps offshore team utilized)",
                      "Documented standards and processes (or willing to invest 200+ hours creating them)",
                      "Management capacity (5-10 hours weekly for first 6-12 months)",
                      "Non-ITAR work (or clear legal guidance on what can be shared)",
                      "In-house PE review capacity (if stamps are required)",
                      "Realistic timeline (18-24 month break-even expectation)",
                      "Focus on high-volume work (CAD, documentation, analysis)"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Not ready if:</h3>
                  <div className="space-y-2">
                    {[
                      "Core engineering is your competitive advantage (don't outsource this)",
                      "Project timelines under 60 days (not enough time for offshore ramp-up)",
                      "Project budgets under $50K (management overhead exceeds savings)"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Card className="bg-white border-2 border-green-400 mt-6">
                <CardContent className="p-6">
                  <p className="text-gray-800 font-semibold text-center">
                    If you checked 6+ boxes with ✓ and zero with ✗, engineering outsourcing might make sense. Fewer than that? You're probably not ready yet.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What ShoreAgents Does Differently Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What ShoreAgents Does Differently</h2>
          
          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Most of my business is administrative roles—property management, real estate, construction coordination. We place Filipino professionals with businesses across the USA, Australia, and New Zealand at $1,200-2,500/month for full-time staff.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                I'm not an engineering outsourcing specialist. But I know enough about offshore staffing to see where engineering firms go wrong:
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4 ml-4">
                <li>• They hire too early (before processes are documented)</li>
                <li>• They hire for the wrong roles (core engineering versus support work)</li>
                <li>• They expect immediate savings (ignoring the 18-24 month reality)</li>
                <li>• They don't budget for management (5-10 hours weekly isn't optional)</li>
                <li>• They ignore legal barriers (PE licensing, ITAR, export controls)</li>
              </ul>
              <p className="text-gray-800 leading-relaxed mb-4">
                If you need engineering drafting, CAD support, technical documentation, or project coordination—not licensed engineering design—we might be able to help. Our team handles administrative and technical support work that frees your engineers to do actual engineering.
              </p>
              <p className="text-gray-800 font-semibold">
                But if you're looking to offshore core engineering design, FEA that carries liability, or anything requiring PE stamps, I'll be honest: you need a specialized engineering outsourcing provider with licensed engineers, not an administrative staffing company.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 text-white">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed">
                Want to discuss if offshore administrative/technical support makes sense for your engineering firm? Schedule a consultation where we'll honestly assess whether we're the right fit for your needs.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Bottom Line Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Bottom Line</h2>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Engineering outsourcing markets are growing across the USA, Australia, and New Zealand because there's a genuine talent shortage. Shrinking workforces and increasing project complexity mean companies are desperate for solutions.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            But desperation leads to expensive mistakes. Hiring offshore without understanding professional licensing requirements (PE/RPEng/CPEng), export controls, total cost of ownership, and the 18-24 month timeline leads to the 60-70% failure rate that nobody talks about.
          </p>

          <Card className="border-lime-300 bg-gradient-to-br from-lime-50 to-green-50 mb-8">
            <CardContent className="p-8">
              <p className="text-gray-800 leading-relaxed mb-4">
                Engineering outsourcing works—for high-volume, well-defined, non-liability-critical work, by companies with documented processes, realistic timelines, and management capacity to invest 5-10 hours weekly for the first year.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                It fails spectacularly for export-controlled work, projects requiring professional certification without in-house review capacity, core engineering that IS your competitive advantage, and firms expecting immediate savings without the upfront investment.
              </p>
              <p className="text-gray-900 font-bold text-xl text-center mt-4">
                Most engineering firms across all three markets aren't ready. And that's fine. Better to know now than waste $167,000 over 18 months learning the hard way.
              </p>
              <p className="text-gray-900 font-bold text-xl text-center mt-4">
                Are you actually ready for engineering outsourcing? Now you know how to find out.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for an Honest Assessment?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation. We'll honestly assess whether we're the right fit for your needs.
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
            Engineering outsourcing works brilliantly when done right, by ready firms, with realistic expectations. Are you actually ready?
          </p>
        </div>
      </div>
    </div>
  );
}
