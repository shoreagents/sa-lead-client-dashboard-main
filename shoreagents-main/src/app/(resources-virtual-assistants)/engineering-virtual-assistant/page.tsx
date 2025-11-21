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
  Monitor
} from "lucide-react";
import Link from "next/link";

export default function EngineeringVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For $500K+ Annual Revenue Engineering Firms
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Engineering Virtual Assistant:<br />
              <span className="text-lime-600">The CAD Operator vs Engineer Confusion Nobody Explains</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Here's a truth that'll save you $60,000: there's no such thing as an "Engineering Virtual Assistant" who can do licensed engineering work. What actually exists are CAD operators and drafters who produce technical drawings—and understanding this distinction before hiring is the difference between success and expensive failure.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Whether you're searching for an Engineering Virtual Assistant (USA) or Engineering Outsourcing services (Australia), understanding what offshore engineering support can—and cannot—do is critical before hiring.
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
            I've spent 15 years placing offshore staff with engineering firms across the USA, Australia, and New Zealand. The successful placements happen when firms understand exactly what they're hiring: CAD operators who execute drawings under licensed engineer supervision, not licensed engineers who can make design decisions.
          </p>
          
          <Card className="bg-red-50 border-l-4 border-red-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>Critical Market Insight:</strong> This is NOT like Real Estate VAs. Engineering firms face severe licensing, liability, and professional standards constraints that competitors are glossing over. The market is confused about CAD operators vs engineers, what can legally be delegated offshore, professional liability insurance implications, and when firms are large enough to justify the overhead.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* CAD Operator vs Engineer Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The CAD Operator vs Engineer Confusion</h2>
              <p className="text-lg text-gray-600">What competitors say vs what you're actually hiring</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                What Competitors Say: "Hire an Engineering Virtual Assistant for CAD drafting, design support, and technical tasks!"
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                The Reality: These are CAD operators/drafters, NOT licensed engineers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">USA: Only Professional Engineers (PE) can:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Seal/stamp engineering drawings</li>
                    <li>• Sign off on structural calculations</li>
                    <li>• Certify designs meet safety codes</li>
                    <li>• Take professional liability for work</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Australia: Only Chartered Professional Engineers (CPEng) can:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Certify engineering work</li>
                    <li>• Sign compliance documents</li>
                    <li>• Take professional responsibility</li>
                    <li>• Practice in regulated areas</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What "Engineering VAs" Can Actually Do:</h3>
                <div className="space-y-2">
                  {[
                    "Execute CAD drawings from marked-up sketches",
                    "Update dimensions on existing drawings",
                    "Create 3D models from specifications",
                    "Draft details per standards",
                    "Format submittal packages",
                    "Organize project files",
                    "Track RFIs and submittals",
                    "Basic quantity takeoffs"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What They CANNOT Do:</h3>
                <div className="space-y-2">
                  {[
                    "Make engineering decisions",
                    "Sign/stamp drawings (USA)",
                    "Certify compliance (Australia)",
                    "Perform structural analysis independently",
                    "Determine design loads",
                    "Specify systems without supervision",
                    "Carry professional liability"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Licensing Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Critical Licensing Reality</h2>
              <p className="text-lg text-gray-600">PE/CPEng requirements that competitors ignore</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">USA - Professional Engineer (PE) Requirements:</h3>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• 4-year ABET-accredited engineering degree</li>
                <li>• Pass FE (Fundamentals of Engineering) exam</li>
                <li>• 4 years experience under licensed PE</li>
                <li>• Pass PE (Principles and Practice) exam in specific discipline</li>
                <li>• State-specific licensing (not transferable)</li>
                <li>• Continuing education requirements</li>
              </ul>
              <p className="text-gray-800 font-semibold mb-4">
                What This Means for Outsourcing:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Offshore VAs cannot be licensed PEs (USA jurisdiction requirement)</li>
                <li>• PE stamp must be from licensed engineer in that state</li>
                <li>• Offshore work must be supervised and stamped by onshore PE</li>
                <li>• Professional liability insurance may have jurisdiction restrictions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Australia - Chartered Professional Engineer (CPEng):</h3>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• Engineering degree (accredited)</li>
                <li>• Competency demonstration (Stage 1 & 2)</li>
                <li>• Professional development</li>
                <li>• Continuing Professional Development (CPD)</li>
              </ul>
              <p className="text-gray-800 font-semibold mb-4">Australian Concerns:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Australian Standards compliance - AS 1170, AS 3600, AS/NZS 4600, etc.</li>
                <li>• Offshore engineers unfamiliar with Australian codes</li>
                <li>• Professional indemnity insurance - does it cover offshore work?</li>
                <li>• Duty of care under Australian law</li>
                <li>• Building Practitioners Act compliance (state-specific)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tasks That REQUIRE PE/CPEng (Cannot Be Delegated):</h3>
              <div className="space-y-2">
                {[
                  "Structural calculations for buildings",
                  "Sealing construction documents",
                  "Certifying designs meet building codes",
                  "Signing off on public safety projects",
                  "Expert witness testimony",
                  "Engineering reports for permits"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                Legal Implications: Providing engineering services without PE/CPEng license = illegal practice of engineering. Penalties include fines, cease and desist, liability for damages. Professional liability insurance may be void if unlicensed person does work.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Firm Size Threshold Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Calculator className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The $500K Revenue Rule: When Your Firm Is Ready</h2>
              <p className="text-lg text-gray-600">Small firms often LOSE money on VAs. Here's when it makes sense</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Small Firms (1-3 Engineers, &lt;$500K Revenue)</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Don't hire an engineering VA if: Revenue under $500K annually, Less than 10 active projects per year, Can't keep VA busy 30+ hours/week consistently, Partners still doing all CAD work themselves, No documented processes/standards.
              </p>
              <p className="text-gray-800 font-semibold mb-4">Why:</p>
              <ul className="space-y-1 text-sm text-gray-700 mb-4">
                <li>• $41K first-year VA cost = 8-10% of gross revenue</li>
                <li>• Training time = 60-90 days of partner time</li>
                <li>• ROI requires volume small firms don't have</li>
              </ul>
              <p className="text-gray-800 font-semibold">Better Alternatives:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Freelance CAD operators for specific projects</li>
                <li>• Recent engineering graduates (local, part-time)</li>
                <li>• Engineering students (intern programs)</li>
                <li>• Buy CAD services per project from specialty firms</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mid-Size Firms (4-10 Engineers, $500K-$2M Revenue)</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Sweet spot for engineering VAs if: Revenue $500K-$2M annually, 20+ projects per year, Consistent CAD/drafting backlog, Documented CAD standards, PE/CPEng on staff to supervise, Can dedicate 10-15 hours/week to VA management initially.
              </p>
              <div className="bg-white rounded-lg p-4 mt-4">
                <h4 className="font-bold text-gray-900 mb-2">ROI Timeline:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Month 1-3: Losing money (training phase)</li>
                  <li>• Month 4-6: Breaking even</li>
                  <li>• Month 7-12: Positive ROI starting</li>
                  <li>• Year 2+: 40-60% cost savings vs local CAD tech</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Large Firms (10+ Engineers, $2M+ Revenue)</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Definitely hire VAs if: Revenue over $2M annually, 50+ projects per year, Dedicated CAD manager position exists, Formalized standards and procedures, Multiple PEs/CPEngs on staff, Can hire 2-3 VAs for redundancy.
              </p>
              <p className="text-gray-800 font-semibold">Advanced Use Cases:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• 24/7 productivity (offshore time zone)</li>
                <li>• Specialized VA teams (structural, MEP, civil)</li>
                <li>• BIM coordination roles</li>
                <li>• Quantity surveying/takeoffs</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Software Cost Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Monitor className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The $8,000 Software Stack Nobody Mentions</h2>
              <p className="text-lg text-gray-600">What competitors say: "Save 60-70% on labor costs!" What they don't mention: Software licenses are EXPENSIVE</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Typical Software Stack Required:</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Design Software:</h4>
                  <div className="space-y-1 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span>AutoCAD:</span>
                      <span className="font-semibold">$1,865/year per seat</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Revit:</span>
                      <span className="font-semibold">$2,250/year per seat</span>
                    </div>
                    <div className="flex justify-between">
                      <span>AEC Collection (AutoCAD + Revit + Civil 3D + more):</span>
                      <span className="font-semibold">$3,430/year per seat</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Civil 3D:</span>
                      <span className="font-semibold">$2,590/year per seat</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SolidWorks:</span>
                      <span className="font-semibold">$4,000-5,000/year per seat</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ANSYS (analysis):</span>
                      <span className="font-semibold">$30,000-100,000+/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tekla Structures:</span>
                      <span className="font-semibold">$5,500-8,000/year per seat</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Collaboration Tools:</h4>
                  <div className="space-y-1 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span>Microsoft Project:</span>
                      <span className="font-semibold">$249/year per user</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Procore:</span>
                      <span className="font-semibold">$400-600/user/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span>BIM 360:</span>
                      <span className="font-semibold">$2,000-5,000/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Slack/Teams:</span>
                      <span className="font-semibold">$8-12/user/month</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">File Transfer & Security:</h4>
                  <div className="space-y-1 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span>VPN service:</span>
                      <span className="font-semibold">$10-20/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cloud storage:</span>
                      <span className="font-semibold">$10-30/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Remote desktop software:</span>
                      <span className="font-semibold">$10-50/month</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Total Software Cost for ONE Engineering VA:</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Minimum:</span>
                  <span className="font-semibold">$3,000-5,000/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Typical:</span>
                  <span className="font-semibold">$6,000-10,000/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Full stack:</span>
                  <span className="font-semibold">$15,000-25,000/year</span>
                </div>
              </div>
              <p className="text-gray-800 font-semibold">
                The Math: VA Salary $18,000/year + Software Licenses $8,000/year + Management/Training $15,000/year = TOTAL FIRST YEAR: $41,000. "60% savings" claim vs USA drafter at $50,000/year = TRUE. But NOT vs "zero cost" - you're spending $41K.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 90-Day Reality: It Gets Worse Before Better</h2>
              <p className="text-lg text-gray-600">What competitors say: "Immediate productivity boost!" The actual timeline:</p>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-red-600 text-white">Week 1-2</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Setup Phase</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Your Time Investment: 10-15 hours. Setting up software licenses, creating network/system access, recording training videos, sharing CAD standards and templates, initial project walkthrough.
                    </p>
                    <p className="text-gray-800 font-semibold">VA Productivity: 5% (learning systems). How You Feel: Excited, optimistic</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-amber-600 text-white">Week 3-4</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The "Why Did I Do This?" Phase</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Your Time Investment: 15-20 hours. Daily check-ins, reviewing work (finding mistakes), re-explaining standards repeatedly, answering constant questions.
                    </p>
                    <p className="text-gray-800 font-semibold">VA Productivity: 15-20%. How You Feel: Frustrated, questioning decision</p>
                    <p className="text-gray-700 text-sm mt-2">Common Issues: Basic drafting errors, wrong layers/line weights, doesn't understand project context, questions on every detail, time zone coordination problems</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-blue-600 text-white">Week 5-8</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The "Slightly Less Painful" Phase</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Your Time Investment: 10-12 hours/week. Still reviewing everything, fewer questions, but still need supervision, starting to handle routine tasks, quality inconsistent.
                    </p>
                    <p className="text-gray-800 font-semibold">VA Productivity: 30-40%. How You Feel: Hopeful but exhausted</p>
                    <p className="text-gray-700 text-sm mt-2">Reality Check: You're still SLOWER than doing it yourself. Haven't saved any time yet. Out of pocket $6,000-7,000 so far. Temptation to quit is HIGH.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-green-600 text-white">Week 9-12</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Turning Point</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Your Time Investment: 6-8 hours/week. Less daily supervision needed, can handle standard details independently, quality improving, developing project knowledge.
                    </p>
                    <p className="text-gray-800 font-semibold">VA Productivity: 50-60%. How You Feel: Relieved, seeing light</p>
                    <p className="text-gray-700 text-sm mt-2">Milestone: You can now delegate a drawing sheet and trust it'll come back 80-90% correct</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-lime-600 text-white">Month 4-6</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Payoff Begins</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Your Time Investment: 4-6 hours/week. Mostly project assignment and review, occasional training on new standards, quality checking (not redoing).
                    </p>
                    <p className="text-gray-800 font-semibold">VA Productivity: 70-80%. How You Feel: Finally worth it</p>
                    <p className="text-gray-700 text-sm mt-2">ROI Calculation: You're saving 10-12 hours/week now. At $100/hour (your time value) = $1,000-1,200/week saved. VA costs $1,500/month = BREAKING EVEN</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-green-600 text-white">Month 6-12</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Scale Phase</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Your Time Investment: 2-3 hours/week. Project assignment and review only, VA knows your standards, can train new VAs.
                    </p>
                    <p className="text-gray-800 font-semibold">VA Productivity: 80-90% of local CAD tech. How You Feel: Ready to hire VA #2</p>
                    <p className="text-gray-700 text-sm mt-2">ROI Calculation: Saving 15-20 hours/week. At $100/hour = $1,500-2,000/week saved. VA costs $1,500/month. Net gain: $4,500-6,500/month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Time Zone Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Time Zones: Why Australian Firms Have It MUCH Easier Than USA</h2>
              <p className="text-lg text-gray-600">The time zone reality that determines success</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">USA Firms → Philippines VAs:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Time Difference: East Coast: -12 to -13 hours, Central: -13 to -14 hours, Mountain: -14 to -15 hours, West Coast: -15 to -16 hours.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                What This Means: Your 9am = Their 9pm (start of their shift). Your 5pm = Their 5am (end of their shift). They work graveyard shift to match your hours.
              </p>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Challenges:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Urgent issues = 12-hour delay</li>
                  <li>• "Can you fix this by EOD?" = Tomorrow morning for you</li>
                  <li>• VA working night shift = burnout risk</li>
                  <li>• Health impacts of permanent night shift</li>
                  <li>• Holidays don't align (Philippines has different days off)</li>
                </ul>
                <h4 className="font-bold text-gray-900 mb-2 mt-4">Best For:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Non-urgent CAD work</li>
                  <li>• Drawing revisions with clear markups</li>
                  <li>• Model updates that can wait</li>
                  <li>• Documentation that's not time-sensitive</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Australian Firms → Philippines VAs:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Time Difference: Sydney/Melbourne: +2 to +4 hours ahead. Perth: +0 to +2 hours ahead.
              </p>
              <p className="text-gray-800 font-bold text-lg mb-4">
                Huge Advantage for Australia: Natural working hour overlap! VA working daytime hours in Philippines. No graveyard shift issues. Real-time communication possible. Much better than USA → Philippines setup.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">Why This Matters:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Lower turnover (normal working hours)</li>
                <li>• Better mental health for VAs</li>
                <li>• Easier communication</li>
                <li>• Same-day urgency achievable</li>
                <li>• Better long-term retention</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Australian Firms → Vietnam VAs (Emerging Trend):</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Why Vietnam is Growing for Australian Market: Time zone advantage (+2 to +4 hours from Australia), 12D Model expertise (Australian/NZ civil engineering software), Cost effective (similar rates to Philippines), Lower attrition (less saturated market), Strong engineering education focus.
              </p>
              <p className="text-gray-800 font-semibold">
                Vietnam grads specifically learning 12D Model, which Philippines VAs are less familiar with. This is a significant advantage for Australian civil engineering firms.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* True Costs Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What an Engineering VA Actually Costs: The $60K First-Year Reality</h2>
              <p className="text-lg text-gray-600">Forget the "$8/hour" nonsense. Here's your real first-year investment</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">True First-Year Costs (USA Firm Example):</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">VA Salary (agency):</span>
                  <span className="font-semibold">$21,600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software Licenses (AEC Collection):</span>
                  <span className="font-semibold">$3,430</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your Training Time (80 hrs × $100/hr):</span>
                  <span className="font-semibold">$8,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Management Time (4 hrs/wk × 52 × $100/hr):</span>
                  <span className="font-semibold">$20,800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Mistakes/Rework:</span>
                  <span className="font-semibold">~$5,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Communication Tools:</span>
                  <span className="font-semibold">$500</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">TOTAL FIRST YEAR:</span>
                  <span className="font-bold text-red-600 text-xl">$59,330</span>
                </div>
                <p className="text-red-700 font-semibold mt-2">Effective Hourly Rate: $28.50/hour (not $9!)</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Year Two (Ongoing):</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">VA Salary:</span>
                  <span className="font-semibold">$21,600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software:</span>
                  <span className="font-semibold">$3,430</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Management (2 hrs/wk × 52 × $100):</span>
                  <span className="font-semibold">$10,400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Rework:</span>
                  <span className="font-semibold">~$1,000</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">TOTAL YEAR TWO:</span>
                  <span className="font-bold text-blue-600 text-xl">$36,430</span>
                </div>
                <p className="text-blue-700 font-semibold mt-2">Effective Hourly Rate: $17.50/hour</p>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                Break-Even: vs USA CAD tech at $60,000/year = savings after Year 2. ROI positive after 18-24 months.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What VAs Actually Do Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Ruler className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Engineering VAs Actually Do (Under Supervision)</h2>
              <p className="text-lg text-gray-600">Realistic task breakdown by category</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="border-green-300 bg-green-50">
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

            <Card className="border-green-300 bg-green-50">
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

            <Card className="border-green-300 bg-green-50">
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

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Support:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• RFI tracking and organization</li>
                  <li>• Submittal package formatting</li>
                  <li>• Document version control</li>
                  <li>• Quantity takeoffs</li>
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

        {/* Australia-Specific Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Engineering Outsourcing in Australia: Standards, Insurance, and the Vietnam Advantage</h2>
              <p className="text-lg text-gray-600">Australia-specific considerations that USA firms don't face</p>
            </div>
          </div>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Australian Standards Compliance:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Australian engineering has very strict measures to ensure even the tiniest engineered component meets expectation. Offshore drafters unfamiliar with Australian codes will need training on:
              </p>
              <ul className="space-y-1 text-sm text-gray-700 mb-4">
                <li>• AS 1170 (Structural design actions)</li>
                <li>• AS 3600 (Concrete structures)</li>
                <li>• AS 4100 (Steel structures)</li>
                <li>• AS/NZS 1170.4 (Earthquake actions)</li>
                <li>• AS/NZS 4600 (Cold-formed steel)</li>
              </ul>
              <p className="text-gray-800 font-semibold">
                Reality: Offshore VAs CAN learn Australian standards, but requires detailed training (add 2-3 months). CPEng must still check and certify all work. More initial oversight needed.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Indemnity Insurance:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                The Question: Does PI insurance cover work done by offshore, non-CPEng personnel?
              </p>
              <p className="text-gray-800 font-semibold mb-4">The Answer: It depends on your policy.</p>
              <h4 className="font-bold text-gray-900 mb-3">What to Check:</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Does policy exclude offshore work?</li>
                <li>• Does it require work be done by CPEng or under direct CPEng supervision?</li>
                <li>• Are there jurisdiction limitations?</li>
                <li>• What does "supervision" mean legally?</li>
              </ul>
              <p className="text-gray-800 font-semibold mt-4">
                Best Practice: Call insurance broker BEFORE hiring offshore. Get written confirmation coverage applies. May need policy endorsement. Potentially higher premiums.
              </p>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Vietnam Opportunity for Australian Firms:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Why Vietnam is Growing for Australian Market:
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• <strong>Time Zone Advantage:</strong> +2 to +4 hours from Australia. Natural working hour overlap. No graveyard shifts.</li>
                <li>• <strong>12D Model Expertise:</strong> Australian/NZ civil engineering software. Vietnam grads specifically learning it. Philippines VAs less familiar.</li>
                <li>• <strong>Cost Effective:</strong> Similar rates to Philippines. Lower attrition (less saturated market).</li>
                <li>• <strong>Cultural Fit:</strong> Strong engineering education focus. Similar work ethic to Philippines. Growing English proficiency.</li>
              </ul>
              <p className="text-gray-800 font-semibold">
                Australian civil firms are quietly shifting to Vietnam over Philippines for 12D Model expertise. This is a significant advantage for Australian civil engineering firms.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Communication Challenges Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-100 rounded-full p-3">
              <Users className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Communication & Quality Control: The Hidden Costs</h2>
              <p className="text-lg text-gray-600">Realistic assessment of communication challenges and QC requirements</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What Works Well:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Written English (emails, Slack) - Generally excellent</li>
                <li>• Technical CAD commands - Can execute perfectly</li>
                <li>• Following written instructions - Strong</li>
                <li>• Reviewing marked-up drawings - Good</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Communication Challenges:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Phone calls with clients - Accents can concern clients</li>
                <li>• Understanding nuanced requests - "Figure out what I mean" situations</li>
                <li>• Cultural directness differences - "Yes, I understand" may mean "I heard you" not "I comprehend"</li>
                <li>• Technical understanding gap - Can execute CAD commands perfectly, may not understand WHY (engineering reasoning)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Control Overhead:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                The Check-Everything-Twice Reality: First 90 Days - Must review EVERY drawing 100%. Catch errors before they go to client/contractor. Rework time = 20-30% of time "saved".
              </p>
              <p className="text-gray-800 font-semibold mb-4">Common Mistakes:</p>
              <ul className="space-y-1 text-sm text-gray-700 mb-4">
                <li>• Wrong line weights (everything looks the same printed)</li>
                <li>• Incorrect layers (can't control visibility)</li>
                <li>• Missing dimensions</li>
                <li>• Incorrectly scaled details</li>
                <li>• Title block errors</li>
                <li>• Reference tags not updated</li>
                <li>• Notes copied from wrong project</li>
              </ul>
              <p className="text-gray-800 font-semibold">
                The Hidden Cost: Your time reviewing/fixing = 5-10 hours/week initially. Best Practice: Random spot-checks indefinitely. 100% review for first 6 months. Never eliminate QC entirely.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When This Doesn't Work (Save Yourself $60,000)</h2>
              <p className="text-lg text-gray-600">Don't hire an engineering VA if:</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <div className="space-y-3">
                {[
                  "Your annual revenue is under $500K (USA) or comparable in AUD/NZD",
                  "Profit margins are below 3%",
                  "You're running fewer than 10 projects annually",
                  "You have no documented processes or SOPs",
                  "You're a new company (under 3 years)",
                  "Your work is highly specialised requiring constant licensed decisions",
                  "You don't have 5+ hours weekly for training and management",
                  "You're primarily doing fieldwork with minimal admin",
                  "You expect them to make engineering decisions (that's your job, legally)",
                  "You're looking for someone to stamp drawings (they cannot)"
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

        {/* What Makes ShoreAgents Different Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes ShoreAgents Different</h2>
          
          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                We're going to tell you when you're not ready.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                If you're managing fewer than $500K revenue, we'll be honest that offshore staffing doesn't make financial sense yet. If your systems aren't documented, we'll help you organize first. If you're trying to offshore licensed engineering work, we'll explain why that's a legal problem.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                We only succeed when you succeed. That means brutal honesty about when engineering VAs make sense—and when they don't.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our approach:</h3>
              <div className="space-y-2 mb-4">
                {[
                  "Qualification first: We turn away firms that aren't ready",
                  "Clear role definition: CAD operators, not licensed engineers",
                  "Realistic timelines: 90-120 days to full productivity",
                  "Transparent pricing: $1,500-2,500/month depending on role and experience",
                  "Honest limitations: We tell you what we can't do",
                  "PE/CPEng licensing guidance: We explain what legally cannot be delegated"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 leading-relaxed mb-4">
                Small firms under 3 people? We'll probably tell you to wait or start with admin support only. Solo practitioners under $500K? We'll suggest automation tools first. Looking for someone to make engineering decisions? We'll explain the licensing reality.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for an Honest Assessment?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              If you're doing $500K+ revenue, have systems documented, understand the 90-day reality, and know exactly which tasks are safely delegable—let's have a conversation about whether offshore staff makes sense for your specific situation.
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
            There's no such thing as an "Engineering Virtual Assistant" who can do licensed engineering work. You're hiring CAD operators who execute drawings under licensed engineer supervision. Know the difference before you hire.
          </p>
        </div>
      </div>
    </div>
  );
}
