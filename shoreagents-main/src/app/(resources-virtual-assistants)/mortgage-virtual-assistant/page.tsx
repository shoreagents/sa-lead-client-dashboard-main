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
  Scale,
  Phone,
  Monitor
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";

export default function MortgageVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['mortgage-virtual-assistant']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-red-600 text-white mb-4 text-sm px-3 py-1">
              For 15+ Loans Monthly Brokers
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Mortgage Virtual Assistant:<br />
              <span className="text-red-600">Why Most Offshore Arrangements Are Technically Illegal in 25 States</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Every mortgage VA company except one is selling you an illegal employment arrangement. They just don't know it yet—or worse, they do and aren't telling you.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Here's what I mean: in Alabama, Arizona, Arkansas, California, Colorado, Florida, Georgia, Idaho, Illinois, Louisiana, Michigan, Minnesota, Missouri, Montana, Nebraska, New Mexico, New Jersey, Nevada, Ohio, Oregon, Pennsylvania, South Carolina, Tennessee, Texas, Virginia, and Washington, contract mortgage processors must be licensed as loan originators under the SAFE Act. That $15/hour Filipino VA you're hiring as an independent contractor? Legally, they need a loan originator licence in most of these states—which costs $1,500-2,500 per state, requires passing an exam, and demands ongoing continuing education.
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
            Nobody's telling you this. I've reviewed a dozen mortgage VA providers, and exactly one—BrokerVA—explicitly addresses state licensing requirements. The rest? They're positioning "trained mortgage VAs" without mentioning that most offshore arrangements violate federal SAFE Act provisions and state regulations.
          </p>
          
          <Card className="bg-red-50 border-l-4 border-red-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                I've been placing offshore staff with businesses across the USA, Australia, and New Zealand for 15 years. I've seen mortgage companies achieve genuine efficiency gains through compliant structures. I've also watched brokers discover their VA arrangements were technically illegal after six months of operations.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-amber-50 border-l-4 border-amber-500 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This guide is for USA mortgage brokers and lenders processing 15+ loans monthly who need legitimate offshore support without risking their licences.</strong> If you're in Australia or New Zealand, stop reading now—offshore mortgage processing faces nearly insurmountable regulatory barriers in both markets, making this primarily a USA conversation.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Licensing Trap Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Scale className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Licensing Trap Every Competitor Ignores</h2>
              <p className="text-lg text-gray-600">The SAFE Act requirements that make most arrangements illegal</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                The federal SAFE Act defines loan originator activities as taking applications, offering or negotiating loan terms, or representing to the public that you can perform these activities. Independent contractors performing these tasks must be licensed. The only exception? W-2 employees working under direct supervision of a licensed MLO.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                Here's the problem: most mortgage VA arrangements operate through contract labour. You hire a VA through an agency, they work as a contractor, you pay monthly fees. Seems fine, right? Except in 25+ states, that structure requires the processor to hold individual state licensing—which almost certainly they don't have.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What tasks trigger licensing requirements:</h3>
                <div className="space-y-2">
                  {[
                    "Taking loan applications (even basic data entry)",
                    "Discussing loan products or terms with borrowers",
                    "Providing credit or income advice",
                    "Negotiating rates or fees",
                    "Making decisions about loan structure",
                    "Pre-qualification conversations"
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">What's actually delegatable without licensing:</h3>
                <div className="space-y-2">
                  {[
                    "Document gathering and organisation",
                    "File status updates to internal team",
                    "Scheduling (non-borrower facing)",
                    "Post-closing file organisation",
                    "CRM data entry",
                    "Marketing material creation"
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

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                The gap between what VAs actually do and what's legally delegatable is massive. Most offshore arrangements have VAs performing tasks that technically require licensing because brokers don't understand the SAFE Act definition of "origination activities."
              </p>
              <p className="text-gray-800 font-semibold">
                The compliant solution: Work with a company that operates as a licensed mortgage entity with direct W-2 employees overseas (like the BrokerVA model), or hire your VA as a W-2 employee through your own licensed entity. Generic VA agencies arranging contract labour? That's the licensing trap waiting to happen.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* 15-Loan Volume Rule Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Calculator className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 15-Loan Volume Rule</h2>
              <p className="text-lg text-gray-600">Let me give you the honest math on when mortgage VAs make financial sense</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Small broker processing 10 loans/month:</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">VA base cost:</span>
                  <span className="font-semibold">$18,000/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">LOS software access:</span>
                  <span className="font-semibold">$1,200/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your training time (40 hrs @ $200/hr):</span>
                  <span className="font-semibold">$8,000 first year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Ongoing management (5 hrs/wk × 52 × $200/hr):</span>
                  <span className="font-semibold">$52,000/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Compliance setup:</span>
                  <span className="font-semibold">$2,000-5,000 first year</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">Total first-year cost:</span>
                  <span className="font-bold text-red-600 text-xl">$81,200-84,200</span>
                </div>
                <p className="text-red-700 font-semibold mt-2">Cost per loan: $6,767-7,017 per loan</p>
              </div>
              <p className="text-gray-800 leading-relaxed mt-4">
                Compare that to per-loan processors at $350-500 per file, and you're looking at $42,000-60,000 annually for 10 loans monthly. The VA costs more once you factor in your time.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <p className="text-gray-800 font-bold text-lg mb-4">
                The break-even point: 15-20 loans per month minimum.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                Below that threshold, per-loan processors make more economic sense. Above it, full-time VAs start delivering genuine ROI—but only if you've got documented processes and can commit 10+ hours weekly to management initially.
              </p>
              <p className="text-gray-800 font-semibold">
                This isn't what providers want to hear, but it's the reality. If you're processing 8-12 loans monthly, you're not ready for a full-time mortgage VA. Wait until you hit consistent 15+ monthly volume.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What Mortgage-Trained Actually Means Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Mortgage-Trained Actually Means</h2>
              <p className="text-lg text-gray-600">Every provider promises "mortgage-trained VAs ready day one." Here's what that training actually includes</p>
            </div>
          </div>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Their 2-4 week "mortgage training":</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Basic loan types (conventional, FHA, VA, USDA)</li>
                <li>• Generic compliance awareness</li>
                <li>• Maybe one LOS system (usually Encompass)</li>
                <li>• General mortgage terminology</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What they DON'T learn:</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Your specific LOS configuration</li>
                <li>• Your lender relationships and requirements</li>
                <li>• Your state regulations</li>
                <li>• Your actual workflow and procedures</li>
                <li>• Your client communication standards</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The real timeline to productivity:</h3>
              <div className="space-y-4">
                <div>
                  <Badge className="bg-blue-600 text-white mb-2">Weeks 1-4</Badge>
                  <p className="text-gray-800 font-semibold mb-1">Learning your systems (10-20% productivity)</p>
                  <p className="text-gray-700 text-sm">Your VA is watching, asking questions, making mistakes. You're spending 2-3 hours daily on training and oversight. They can handle basic document organisation but nothing substantive.</p>
                </div>
                <div>
                  <Badge className="bg-blue-600 text-white mb-2">Weeks 5-8</Badge>
                  <p className="text-gray-800 font-semibold mb-1">Starting simple tasks (30-40% productivity)</p>
                  <p className="text-gray-700 text-sm">They can process straightforward conventional loans with heavy supervision. Complex scenarios still require your direct involvement. You're spending 1-2 hours daily answering questions.</p>
                </div>
                <div>
                  <Badge className="bg-blue-600 text-white mb-2">Weeks 9-12</Badge>
                  <p className="text-gray-800 font-semibold mb-1">Moderate usefulness (50-60% productivity)</p>
                  <p className="text-gray-700 text-sm">Handling routine processing with less oversight. Still needs guidance on complicated files. Government loans (FHA/VA) require significant support.</p>
                </div>
                <div>
                  <Badge className="bg-green-600 text-white mb-2">Months 4-6</Badge>
                  <p className="text-gray-800 font-semibold mb-1">Actually valuable (70-80% productivity)</p>
                  <p className="text-gray-700 text-sm">Can manage most files independently. Still escalates complex issues but handles standard processing competently. Your management time drops to 5-10 hours weekly.</p>
                </div>
                <div>
                  <Badge className="bg-lime-600 text-white mb-2">Months 6+</Badge>
                  <p className="text-gray-800 font-semibold mb-1">Full productivity (85-95% productivity)</p>
                  <p className="text-gray-700 text-sm">Confidently processes most loan types, understands your systems, requires minimal oversight. This is when ROI actually starts.</p>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                Nobody breaks even on time investment for the first six months. That's the reality "mortgage-trained" providers don't mention in their sales pitches.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Case Study Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Building2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Real-World Success: Gelt Financial Case Study</h2>
              <p className="text-lg text-gray-600">How compliant mortgage VA implementation actually works</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Jack Miller at Gelt Financial started conservatively with one ShoreAgents specialist. His VA now handles YouTube marketing video transcription, follows up on sales leads (converting them to loan originations), and processes mortgage satisfactions.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                Jack's assessment: "Our VA has been a wonderful addition to our team. She is very reliable and her contributions have helped free up other staff here to tackle projects."
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-bold text-gray-900 mb-2">Performance Ratings:</h4>
                <p className="text-gray-700 text-sm mb-2">Perfect 5/5 across every category:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Work quality</li>
                  <li>• Continuous improvement</li>
                  <li>• Job knowledge</li>
                  <li>• Communication</li>
                  <li>• Reliability</li>
                  <li>• Teamwork</li>
                </ul>
              </div>
              <p className="text-gray-800 font-semibold mb-4">
                More importantly, Jack's VA generates direct revenue through lead conversion whilst saving Gelt Financial approximately $40,000 annually (69% cost reduction compared to USA-based staff).
              </p>
              <p className="text-gray-800 leading-relaxed">
                But notice the specifics: Jack took months to properly train his VA, maintains clear supervision, and uses her for tasks that don't trigger licensing requirements (marketing support, lead follow-up, documentation). This is compliant, effective mortgage VA implementation.
              </p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Software Cost Nobody Mentions</h2>
              <p className="text-lg text-gray-600">Your mortgage VA needs access to your tech stack. Most brokers forget this in their ROI calculations</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly software costs per VA:</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">LOS (Encompass, Calyx Point, etc.):</span>
                  <span className="font-semibold">$75-150/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">CRM:</span>
                  <span className="font-semibold">$50-100/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Document management:</span>
                  <span className="font-semibold">$30-60/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Credit reporting:</span>
                  <span className="font-semibold">$25-50/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Communication tools:</span>
                  <span className="font-semibold">$20/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Project management:</span>
                  <span className="font-semibold">$15/month</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">Total:</span>
                  <span className="font-bold text-red-600 text-xl">$215-395/month ($2,580-4,740/year)</span>
                </div>
              </div>
              <p className="text-gray-800 font-semibold">
                Add this to your $18,000-24,000 annual VA cost, and you're looking at $20,580-28,740 all-in before factoring management time. Still cheaper than USA-based staff ($60,000-85,000/year), but not the "$15/hour" fantasy providers advertise.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Tasks You Can't Delegate Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Tasks You Can't Legally Delegate</h2>
              <p className="text-lg text-gray-600">The SAFE Act is very clear about what requires licensing</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Never delegate without licensing:</h3>
                <div className="space-y-2">
                  {[
                    "Taking loan applications",
                    "Discussing loan products or terms",
                    "Advising on credit or income issues",
                    "Negotiating interest rates or fees",
                    "Pre-qualification/pre-approval conversations",
                    "Any substantive borrower responses about loan approval"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Safe to delegate (clerical duties):</h3>
                <div className="space-y-2">
                  {[
                    "Document gathering and organisation",
                    "File status updates to internal team",
                    "Scheduling non-borrower meetings",
                    "Post-closing organisation",
                    "CRM data entry",
                    "Marketing content creation"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Grey area (requires oversight):</h3>
                <div className="space-y-2">
                  {[
                    "Borrower communication (status updates only)",
                    "Initial disclosure preparation (MLO must review/send)",
                    "Conditions tracking and requests",
                    "Third-party vendor coordination"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-red-300 bg-red-50 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                The problem? Most VAs end up doing grey area and restricted tasks because brokers don't understand the legal boundaries. That's when you're operating outside licensing requirements—even if unintentionally.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Time Zone Reality for USA Brokers</h2>
              <p className="text-lg text-gray-600">Here's what providers don't explain about Philippines-based VAs</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Here's what providers don't explain about Philippines-based VAs: they're working your business hours in real-time. When you're operational 9am-5pm USA time, your Filipino VA is working 9pm-5am Manila time. There's no communication delay—they're responding to your Slack messages, answering your calls, processing files whilst you're simultaneously working.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                This isn't "overnight work that's ready in the morning." This is real-time collaboration during your business day. Filipino VAs work night shifts to match USA business hours. Some brokers see this as a limitation; others recognise it as professional service delivery by dedicated overnight professionals.
              </p>
              <p className="text-gray-800 leading-relaxed">
                The trade-off: you get real-time support during USA hours, but management conversations outside normal business hours become challenging. Most successful arrangements establish clear communication windows and project management systems that work asynchronously when needed.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When You're NOT Ready for a Mortgage VA</h2>
              <p className="text-lg text-gray-600">Most mortgage brokers aren't ready for full-time VAs. Here's when to wait</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold mb-4">Don't hire if you're:</p>
              <div className="space-y-3">
                {[
                  "Processing under 15 loans monthly (economics don't work)",
                  "Operating without documented SOPs (VA will flounder)",
                  "Unable to commit 10+ hours weekly for training initially (they need guidance)",
                  "Mixing delegated and non-delegated lending (compliance nightmare)",
                  "Expecting them to 'figure it out' (they won't without direction)",
                  "Heavy into government lending (FHA/VA complexity requires deep experience)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-semibold mt-6">
                The honest truth? If you're reading this guide hoping for an immediate solution to understaffing, you're probably not ready. Mortgage VAs require preparation, training commitment, and realistic expectations. Done properly, they deliver genuine value. Done hastily, they create compliance risks and operational headaches.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Compliant Hiring Options Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Getting It Right: Compliant Hiring Options</h2>
              <p className="text-lg text-gray-600">If you've hit the 15-loan threshold and have documented processes, here are your compliant paths forward</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Option 1: Licensed mortgage companies (BrokerVA model)</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Companies that operate as licensed mortgage entities in multiple states with direct W-2 employees overseas. More expensive ($2,000-3,500/month typically) but genuinely compliant. This is the only fully legal third-party arrangement.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Option 2: Direct W-2 employment through your licensed entity</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Hire your VA as a W-2 employee through your own broker or lender licence. Requires more setup but avoids contractor licensing requirements. ShoreAgents can facilitate this structure at $1,200-2,500/month.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Option 3: State-specific licensing for contractors</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                If using contractors, obtain state licensing for each state you operate in. Expensive ($1,500-2,500 per state plus ongoing education) and complex, but technically compliant.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What NOT to do:</h3>
              <p className="text-gray-800 font-semibold">
                Generic VA companies offering "contract mortgage processors" without addressing licensing. This is the most common arrangement and the most legally problematic—even though providers aren't explicitly telling you about the licensing requirements.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* 90-Day Reality Check Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-100 rounded-full p-3">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 90-Day Reality Check</h2>
              <p className="text-lg text-gray-600">Set realistic expectations for your first three months</p>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <Badge className="bg-red-600 text-white mb-3">Month 1</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">You're slower, not faster</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your VA is learning everything. You're explaining processes, reviewing work, answering questions constantly. Productivity drops before it rises. Plan for this.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <Badge className="bg-amber-600 text-white mb-3">Month 2</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Still heavily managed</h3>
                <p className="text-gray-700 leading-relaxed">
                  They can handle basic tasks but need oversight on anything complex. Government loans require significant hand-holding. You're still investing serious training time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <Badge className="bg-blue-600 text-white mb-3">Month 3</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Starting to help</h3>
                <p className="text-gray-700 leading-relaxed">
                  Real contribution begins. They can process straightforward files with less supervision. You're seeing glimpses of the ROI, but not there yet.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <Badge className="bg-green-600 text-white mb-3">Months 4-6</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Payoff period</h3>
                <p className="text-gray-700 leading-relaxed">
                  This is when it clicks. They know your systems, understand your standards, require minimal oversight. The time investment starts paying dividends.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <Badge className="bg-lime-600 text-white mb-3">Months 6+</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Full value</h3>
                <p className="text-gray-700 leading-relaxed">
                  Confident processing, proactive problem-solving, genuine productivity gains. This is what the providers promise day one—but it takes six months to achieve.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Real Pricing Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Real Pricing: USA Market All-In Costs</h2>
              <p className="text-lg text-gray-600">Full-time mortgage VA (ShoreAgents pricing)</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">First-Year Costs:</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Base cost:</span>
                  <span className="font-semibold">$14,400-30,000/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software access:</span>
                  <span className="font-semibold">$2,580-4,740/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Training time investment (Year 1):</span>
                  <span className="font-semibold">$8,000-12,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Management overhead (Year 1):</span>
                  <span className="font-semibold">$25,000-50,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Compliance setup (Year 1):</span>
                  <span className="font-semibold">$2,000-5,000</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">First-year total:</span>
                  <span className="font-bold text-red-600 text-xl">$51,980-101,740</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">Ongoing years:</span>
                  <span className="font-bold text-blue-600 text-xl">$16,980-34,740</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Compare to USA-based processor at $60,000-85,000 annually plus benefits ($75,000-105,000 all-in), and the ROI becomes clear—but only after surviving the first-year investment period.
              </p>
              <p className="text-gray-800 font-semibold">
                The honest assessment: You'll save $30,000-70,000 annually starting Year 2, but Year 1 is break-even at best when factoring true costs. Anyone promising immediate savings is selling fantasies.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for an Honest Assessment?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              If you're processing 15+ loans monthly, have documented procedures, and can commit to 6+ months for full ROI, mortgage VAs can deliver genuine value—but only through compliant structures that address licensing requirements.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation where we'll honestly assess whether you're ready, explain compliant hiring structures, and walk through realistic timelines. We place full-time Filipino mortgage support at $1,200-2,500/month, but we'll tell you frankly if you're not ready yet or if per-loan processors make more sense for your current volume.
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
            Mortgage VAs work brilliantly when implemented properly by ready brokers with realistic expectations and compliant structures. The question is whether that describes your situation right now—and we're happy to help you figure that out honestly before you spend a dollar.
          </p>
        </div>
      </div>
    </div>
  );
}
