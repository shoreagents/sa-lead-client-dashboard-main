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

export default function InsuranceVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['insurance-virtual-assistant']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-red-600 text-white mb-4 text-sm px-3 py-1">
              For $300K+ Annual Revenue Agencies
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Insurance Virtual Assistant:<br />
              <span className="text-red-600">What Every Provider Won't Tell You About Licensing (Until You Get Fined)</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Every insurance virtual assistant provider will tell you their staff are "insurance-trained" and "ready in two weeks." Not one of them will tell you what your VA legally cannot do—until your Department of Insurance sends you a violation notice.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Here's what actually happened to an agency I know in Wisconsin: Their VA answered the phone, told a prospect they "definitely needed umbrella coverage," and scheduled a meeting to discuss policy options. Helpful, right? Wrong. That's unauthorized practice of insurance. Three activities that require a license: soliciting coverage, advising about coverage needs, and urging purchase of specific policies. The VA did all three in one phone call.
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
            The agency got flagged during a routine audit. No fine that time—just a warning and mandatory compliance training. But they were lucky. In some states, violations carry $5,000-$25,000 penalties per incident.
          </p>
          
          <Card className="bg-red-50 border-l-4 border-red-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                I've been placing offshore staff with businesses across the USA, Australia, and New Zealand for 15 years. Insurance agencies are the most legally complex clients I work with, and most agencies hiring their first VA have no idea about the licensing boundaries that separate legal admin work from activities that'll get you sanctioned.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-amber-50 border-l-4 border-amber-500 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This guide is for established insurance agencies—independent agencies doing $300,000+ in annual revenue with documented processes and clear task boundaries.</strong> If you're a captive agent with corporate systems already in place, you probably don't need this. If you're a solo agent doing under $150K annually, the maths won't work yet.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Licensing Boundary Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Scale className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Licensing Boundary Nobody Explains</h2>
              <p className="text-lg text-gray-600">Before we discuss costs or efficiency, you need to understand this</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Before we discuss costs or efficiency, you need to understand this: without a license, a customer service representative is unable to sell insurance or discuss any specific policy details with clients. That's not my opinion—that's regulatory reality across most US states, and similar restrictions exist in Australia and New Zealand under their respective insurance licensing frameworks.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                The line between "admin work" and "unauthorized practice" isn't always obvious. A VA can process policy renewals in your agency management system. They cannot explain to a client why their premium increased. They can email a certificate of insurance. They cannot sign it. They can schedule appointments. They cannot suggest which coverage the prospect needs during that call.
              </p>
              <p className="text-gray-800 leading-relaxed">
                Some states require licenses even for purely administrative work if it involves policyholder services. Most states draw the line at anything that could be interpreted as soliciting, negotiating, or advising about insurance coverage. And here's the problem: that phone call from earlier? The agency thought it was "just customer service." The regulator saw it as solicitation and advice.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Every insurance VA company markets "trained professionals" without addressing these boundaries. They'll tell you their staff can handle "policy administration, claims support, and customer service"—but they won't explain where admin crosses into activities requiring licensure. That's on you to figure out, apparently.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Real Economics Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Calculator className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Real Economics: Why Most Agencies Aren't Ready Yet</h2>
              <p className="text-lg text-gray-600">32% of US insurance agencies earn under $150,000 in annual revenue</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                32% of US insurance agencies earn under $150,000 in annual revenue. The average insurance agency profit margin sits between 2-10%—far lower than the 30-40% margins in industries like real estate. Labor costs average 35.9% of agency revenue already.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Here's the maths for a typical small agency:</h3>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-bold text-gray-900 mb-3">Agency Profile:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Annual revenue:</span>
                    <span className="font-semibold">$150,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Profit margin:</span>
                    <span className="font-semibold">10% = $15,000 total profit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Owner take-home:</span>
                    <span className="font-semibold">$15,000</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-bold text-gray-900 mb-3">Full-Time VA First Year Costs:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monthly fee:</span>
                    <span className="font-semibold">$21,600</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Training time (40 hrs @ $50/hr):</span>
                    <span className="font-semibold">$2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Management time (3 hrs/wk × 52 × $50):</span>
                    <span className="font-semibold">$7,800</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Software/tools:</span>
                    <span className="font-semibold">$1,500</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">Total Year One:</span>
                    <span className="font-bold text-red-600 text-xl">$32,900</span>
                  </div>
                </div>
              </div>
              <p className="text-red-700 font-bold text-lg">
                The VA costs 219% of your annual profit. You're spending $32,900 to potentially free up time worth maybe $15,000-$20,000. The maths doesn't work.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">When It Does Work:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>$300K-$500K revenue:</strong> Marginal—maybe with part-time VA only</li>
                <li>• <strong>$500K+ revenue:</strong> Makes sense if you have proper systems</li>
                <li>• <strong>$1M+ revenue:</strong> Absolutely worth it for multiple specialists</li>
              </ul>
              <p className="text-gray-800 font-semibold mt-4">
                The threshold isn't about wanting help—it's about having enough profit margin to absorb the first year investment before you see returns. Most agencies considering VAs aren't there yet.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What VAs Can and Cannot Do Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Insurance VAs Can (and Cannot) Actually Do</h2>
              <p className="text-lg text-gray-600">Based on regulatory guidance from multiple states and 15 years placing insurance staff</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">✅ Legal for Unlicensed VAs:</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Policy Administration</h4>
                  <p className="text-sm text-gray-700">Processing renewals in your agency management system, updating policyholder information, issuing auto ID cards, emailing policy documents. Your VA can manage the paperwork pipeline, they just can't make coverage decisions.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Claims Support</h4>
                  <p className="text-sm text-gray-700">Taking initial loss information from insureds, reporting claims to carriers, updating claim status in your system, scheduling adjuster appointments. They're coordinators, not advisors—they cannot tell a client whether something is covered or how to file a claim.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Data Entry & CRM</h4>
                  <p className="text-sm text-gray-700">Updating agency management systems, maintaining client records, processing endorsements that don't change coverage, inputting application information. This is where most VAs actually spend their time, and it's completely legal.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Appointment Scheduling</h4>
                  <p className="text-sm text-gray-700">Coordinating meetings between agents and clients, sending reminders, managing calendars. As long as they're not discussing coverage needs or urging specific products during scheduling calls.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Marketing Support</h4>
                  <p className="text-sm text-gray-700">Managing email campaigns, updating website content, social media management, event coordination. General business marketing doesn't require insurance licensing.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">⚠️ Grey Zone (Proceed with Caution):</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Phone Coverage</h4>
                  <p className="text-sm text-gray-700">Answering calls is fine. What they say during those calls is where problems happen. One wrong word about coverage recommendations and you've crossed the line. Most successful agencies keep VAs off phones initially.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Email Responses</h4>
                  <p className="text-sm text-gray-700">Similar to phones—responding to admin questions is fine, but any response touching policy specifics, coverage advice, or purchase encouragement requires agent review before sending.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Processing Endorsements</h4>
                  <p className="text-sm text-gray-700">Adding or removing coverage requires careful oversight. The actual system work is legal, but they cannot make judgement calls about whether changes are appropriate.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">❌ Absolutely Forbidden:</h3>
              <div className="space-y-3">
                {[
                  "Quoting & Binding - Providing premium quotes to prospects, binding coverage, issuing new policies. These require licenses in virtually every jurisdiction.",
                  "Coverage Advice - Recommending insurance types, suggesting coverage limits, advising clients about their insurance needs. This is where most violations occur.",
                  "Signing Documents - Certificates of insurance, policy declarations, cancellation notices. If it requires a signature and affects coverage, your VA cannot sign it.",
                  "Client Consultations - Discussing substantive policy terms, explaining benefits and exclusions, advising on claims strategies. Save this for licensed agents only."
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                The Wisconsin Department of Insurance puts it bluntly: "Answering the phone for 20 years doesn't matter—if you're telling customers they need coverage, you need a license."
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Timeline Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-100 rounded-full p-3">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Timeline Nobody Admits: 90 Days Minimum</h2>
              <p className="text-lg text-gray-600">Every provider claims "ready in two weeks" or "insurance-trained professionals." Complete rubbish</p>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <Badge className="bg-blue-600 text-white mb-3">Week 1-2</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Generic Insurance Training</h3>
                <p className="text-gray-700 leading-relaxed">
                  They learn premium vs deductible, basic coverage types, insurance terminology. This doesn't mean they understand YOUR agency, YOUR carriers, YOUR specific processes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <Badge className="bg-amber-600 text-white mb-3">Week 3-8</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Your Agency Reality</h3>
                <p className="text-gray-700 leading-relaxed">
                  Learning your agency management system, understanding your workflows, figuring out your specific carriers and forms. Lots of questions. Lots of mistakes you'll fix. They're at maybe 30-40% productivity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <Badge className="bg-green-600 text-white mb-3">Week 9-16</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Becoming Useful</h3>
                <p className="text-gray-700 leading-relaxed">
                  Starting to work more independently on routine tasks. Still need oversight on anything complex. Quality improving but inconsistent. Productivity hits 60-70%.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <Badge className="bg-lime-600 text-white mb-3">Week 17-26</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Actually Contributing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Working largely independently on standard tasks. Making fewer errors. Starting to save you actual time instead of creating more work. This is when ROI begins—months in, not weeks.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-100 border-l-4 border-gray-600 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                One insurance agent in our network who's used VAs for 10 years told a forum: "SE Asia assistants are great if just strictly admin—I rely on her for everything but client communications." Everything but client communications. That's the boundary after 10 years of successful partnership.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Insurance Type Complexity Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Insurance Type Complexity Factor</h2>
              <p className="text-lg text-gray-600">Not all insurance VAs face the same regulatory risk</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Life Insurance VAs (Lower Risk):</h3>
                <p className="text-sm text-gray-700">
                  Less real-time urgency, generally more permissible activities for unlicensed staff, but strict documentation requirements around suicide clauses and contestability periods.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Property & Casualty VAs (Moderate Risk):</h3>
                <p className="text-sm text-gray-700">
                  Time-sensitive renewals and certificates, claims handling restrictions, state-by-state certificate requirements. The volume of policies means more chances for errors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Health Insurance VAs (Highest Risk):</h3>
                <p className="text-sm text-gray-700">
                  Maximum regulatory complexity—HIPAA compliance, ACA regulations, Medicare/Medicaid federal rules, open enrollment pressure periods. One HIPAA violation can be $50,000. This is expert territory only.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-blue-300 bg-blue-50 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                Most insurance VAs start with P&C admin because it's highest volume but lower complexity than health. Life insurance is often easiest for VAs to learn but lowest volume for most agencies.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* State-by-State Problem Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The State-by-State Problem</h2>
              <p className="text-lg text-gray-600">Here's something none of the VA providers mention: licensing requirements vary by state</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Here's something none of the VA providers mention: licensing requirements vary by state. What's legal admin work in California might require a license in New York.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                Some states specifically allow unlicensed customer service representatives. Others require licenses for anyone performing "any administrative services to policyholders." Most fall somewhere in the middle with grey zones around what constitutes "advice."
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                You're responsible for knowing your state's rules. Your VA provider sure as hell won't tell you. Check with your state's Department of Insurance before your VA touches client-facing work.
              </p>
              <p className="text-gray-800 leading-relaxed">
                (For Australian insurance professionals, ASIC provides licensing guidance for insurance intermediaries. New Zealand insurance professionals should reference FMA requirements. The fundamental principle is the same globally: unlicensed staff cannot provide advice or bind coverage.)
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Philippines Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Philippines Reality for Insurance Work</h2>
              <p className="text-lg text-gray-600">Most insurance VAs work from the Philippines, covering US business hours in real-time</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Most insurance VAs work from the Philippines, covering US business hours in real-time. When it's 9am in New York, it's 9pm in Manila—they're working your exact business hours simultaneously. No overnight delays, no waiting for responses. Your VA is available during your 9-5, answering (permitted) tasks as they come in.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                This real-time availability works brilliantly for insurance agencies IF you set clear boundaries about what they can handle. The time zone overlap means they're working while you're working, so you can provide immediate guidance on grey-zone situations as they arise.
              </p>
              <p className="text-gray-800 leading-relaxed">
                For Australian and New Zealand agencies (where interest is emerging but search volume is still minimal), the Philippines time zone is actually better—only 2-4 hours difference, meaning natural daytime overlap instead of night shift work.
              </p>
              <p className="text-gray-800 leading-relaxed mt-4">
                The alternative is Latin American VAs at 20-40% higher cost but same time zones as USA offices. For insurance work where urgent issues come up constantly—policy expiring at midnight, client needs certificate NOW for closing—some agencies find the premium worthwhile. But most insurance admin can wait 30 seconds for your VA to message you with a question during your shared working hours.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When This Absolutely Doesn't Work</h2>
              <p className="text-lg text-gray-600">Most insurance VA providers will tell everyone they're ready. I'll tell you when you're not</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold mb-4">You're Not Ready If:</p>
              <div className="space-y-3">
                {[
                  "Annual revenue under $300K (maths doesn't work)",
                  "No documented processes (nothing for VA to follow)",
                  "Can't clearly define legal task boundaries (regulatory risk)",
                  "Expecting VA to handle client consultations (license violation)",
                  "Want someone for 5-10 hours weekly (part-time costs more per hour)",
                  "Captive agent with corporate support already (no need)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Better Alternatives:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Under $300K:</strong> Use part-time freelancers for specific projects</li>
                <li>• <strong>Under $500K:</strong> Fix your processes and systems first</li>
                <li>• <strong>No clear boundaries:</strong> Consult with compliance attorney first</li>
                <li>• <strong>Need client-facing support:</strong> Hire local licensed CSRs</li>
              </ul>
              <p className="text-gray-800 font-semibold mt-4">
                The agencies that succeed with VAs have clear processes, documented workflows, legal task boundaries, and enough volume to justify full-time help. If that's not you yet, wait. I'd rather lose a sale than help you violate licensing laws or waste $30,000.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Actually Works: The Proven Approach</h2>
              <p className="text-lg text-gray-600">The insurance agencies we've worked with who've had success follow this pattern</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Start with pure admin only</h3>
                  <p className="text-sm text-gray-700">Data entry, policy renewals (in-system only), document management. Nothing client-facing. Prove they can handle routine tasks without creating more work for you.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Document everything</h3>
                  <p className="text-sm text-gray-700">Scripts for any phone work (if you progress to that), email templates for common responses (that you review), clear lists of "never do this" activities. Don't rely on their judgement about licensing boundaries.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Slow expansion only</h3>
                  <p className="text-sm text-gray-700">After 90 days of perfect admin work, maybe try monitored email responses. After six months, perhaps some appointment scheduling. Never rush into client-facing work.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Accept the compliance cost</h3>
                  <p className="text-sm text-gray-700">Factor in your time reviewing their work, especially anything near licensing boundaries. This management time is part of the real cost.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Plan for turnover</h3>
                  <p className="text-sm text-gray-700">Average VA tenure is 18-24 months. Document processes so well that training the next VA isn't starting from zero. When they leave, you're not losing institutional knowledge.</p>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-6">
                The agencies who fail either rush into client-facing work, assume "trained" means "understands our compliance," or expect immediate productivity. Insurance is too complex and regulated for shortcuts.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Real Pricing Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Real ShoreAgents Pricing for Insurance VAs</h2>
              <p className="text-lg text-gray-600">We charge $1,200-$2,500 monthly for full-time insurance VAs</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                We charge $1,200-$2,500 monthly for full-time insurance VAs depending on experience level and role complexity. That's not "$15/hour"—it's all-in pricing including recruitment, HR, payroll, office infrastructure, management support, and replacement guarantees.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">First-year realistic costs:</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">VA monthly fee:</span>
                  <span className="font-semibold">$21,600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your training time (60 hrs @ $50):</span>
                  <span className="font-semibold">$3,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your management time (3 hrs/wk × 52 × $50):</span>
                  <span className="font-semibold">$7,800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software/subscriptions:</span>
                  <span className="font-semibold">$1,500</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">Year One Total:</span>
                  <span className="font-bold text-red-600 text-xl">$33,900</span>
                </div>
              </div>
              <p className="text-gray-800 leading-relaxed">
                Compare to local USA insurance CSR: $35,000-$50,000 salary + 20% benefits = $42,000-$60,000. You're saving $8,000-$26,000 annually, but only if the VA actually works out.
              </p>
              <p className="text-gray-800 leading-relaxed mt-4">
                For Australian and New Zealand agencies exploring this (search interest just spiked in NZ recently), expect AUD/NZD $2,200-$3,500 monthly. Same ROI timeline—six months before you see real savings.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Honest Assessment Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Target className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Honest Assessment</h2>
              <p className="text-lg text-gray-600">Insurance VAs work—with massive caveats</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Insurance VAs work—with massive caveats about licensing compliance, realistic timelines, and agency readiness thresholds.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                If you're an independent agency doing $500K+, with documented processes, clear understanding of licensing boundaries, and realistic expectations about 90-day productivity curves, a properly managed insurance VA can save you $15,000-$25,000 annually while freeing up your licensed agents for actual sales work.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                If you're under $300K revenue, have vague processes, and think a "trained VA" will handle client calls immediately, you're going to waste $30,000 and possibly face licensing violations.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                The difference between success and disaster is knowing what your VA legally cannot do, having the systems and patience for proper training, and accepting that insurance complexity means slow, careful implementation.
              </p>
              <p className="text-gray-800 leading-relaxed">
                Every other insurance VA provider will tell you their staff are ready immediately. I'm telling you the real timeline is 90+ days and the real success rate is maybe 30% because most agencies aren't ready when they think they are.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Discuss If Insurance VAs Actually Make Sense?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              ShoreAgents provides Philippine-based insurance administrative specialists at $1,200-$2,500 monthly for established agencies. We'll tell you honestly if you're ready—even if that means telling you to wait.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation where we'll assess your revenue threshold, process documentation, compliance understanding, and realistic timeline expectations. No sales pitch, just 15 years of experience in insurance outsourcing telling it straight.
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
            The Wisconsin Department of Insurance puts it bluntly: "Answering the phone for 20 years doesn't matter—if you're telling customers they need coverage, you need a license." Know the licensing boundaries before you hire.
          </p>
        </div>
      </div>
    </div>
  );
}
