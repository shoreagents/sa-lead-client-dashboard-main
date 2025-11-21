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
  Monitor,
  Layers
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";

export default function DraftingVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['drafting-virtual-assistant']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For $1M+ Annual Revenue AEC Firms
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Drafting Virtual Assistant:<br />
              <span className="text-lime-600">The AutoCAD Skills Gap Nobody's Talking About (And Why Your $66K Local Drafter Is Terrified)</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              There's something happening in the drafting world that nobody wants to discuss openly: experienced Filipino CAD drafters are now more proficient in Revit 2025, AutoCAD's latest automation features, and ISO 19650 BIM standards than 60% of local drafters in the USA.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I know this because I place offshore drafting staff with architecture and engineering firms daily. Last month, a Seattle firm tested their existing $32/hour local drafter against a $10/hour Filipino candidate we presented. Same test project—residential addition with MEP coordination. The Filipino drafter delivered LOD 350 Revit families with proper parameters, coordinated clash detection in Navisworks, and followed AIA CAD Layer Guidelines perfectly. The local drafter? Still working in AutoCAD 2018, manually fixing redlines, no BIM workflow knowledge whatsoever.
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
            The Seattle firm now runs both—local drafter for site visits and client meetings, Filipino drafter handling 90% of actual production work. They're saving $43,000 annually while their deliverable quality improved dramatically. But here's the uncomfortable truth that makes local drafters nervous: this isn't an isolated case.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This guide is for architecture, engineering, and construction firms doing $1M+ in annual revenue who need production drafting capacity, have documented CAD standards, and understand the difference between design work (keep local) and production drafting (perfect for offshore).</strong> If you're a 2-person design studio without established drawing standards, you're not ready yet.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-red-50 border-l-4 border-red-500 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>Warning:</strong> if you're expecting me to protect local drafting jobs or pretend offshore quality is inferior, you've come to the wrong article. I'm going to explain exactly what drafting virtual assistants actually do, which tasks they excel at versus where they struggle, and why the Philippines has become the global centre for technical drafting expertise.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* What Is a Drafting VA Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Ruler className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Is a Drafting Virtual Assistant? (Not What You Think)</h2>
              <p className="text-lg text-gray-600">A drafting virtual assistant isn't a general admin person who "knows some AutoCAD"</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                A drafting virtual assistant isn't a general admin person who "knows some AutoCAD." They're CAD professionals—often with engineering degrees—who work as remote team members producing technical drawings, 3D models, and construction documentation. They use the same software your local team uses: AutoCAD, Revit, Civil 3D, SolidWorks, Navisworks, SketchUp.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                The key difference from typical offshore outsourcing: they become integrated members of your production team. They understand your layer standards, your title block format, your naming conventions, your specific workflow. They're not freelancers you hire per project—they're dedicated staff members who work your business hours (yes, night shift in Manila, 9am-5pm your time) as permanent team additions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Most drafting VAs in the Philippines:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Hold civil engineering, architecture, or mechanical engineering degrees</li>
                <li>• Trained on Western building codes, AEC industry standards, and modern BIM workflows</li>
                <li>• Many already have Autodesk certifications</li>
                <li>• Experience with US construction projects</li>
                <li>• Fluency with the technical English used in construction documents</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                Here's what they're NOT: design decision-makers. They execute documented technical work—they don't determine structural solutions, select materials, or make architectural design choices. That's the distinction successful firms understand.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Brutal Economics Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Calculator className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Brutal Economics: $66K Versus $21K</h2>
              <p className="text-lg text-gray-600">Let's talk real numbers because this is where the conversation gets uncomfortable</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">USA CAD Drafter (Full Cost):</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Base salary:</span>
                  <span className="font-semibold">$52,000-$70,000/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Employer taxes (FICA, unemployment):</span>
                  <span className="font-semibold">$5,500-$7,500/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Benefits (health, retirement, paid time off):</span>
                  <span className="font-semibold">$8,000-$12,000/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Office space and equipment:</span>
                  <span className="font-semibold">$3,000-$5,000/year</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">Total annual cost:</span>
                  <span className="font-bold text-red-600 text-xl">$68,500-$94,500</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Filipino Drafting VA (ShoreAgents Full Cost):</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Monthly all-in cost:</span>
                  <span className="font-semibold">$1,200-$2,500 (depending on experience)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Setup fee (one-time):</span>
                  <span className="font-semibold">$1,100</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">First year cost:</span>
                  <span className="font-bold text-green-600 text-xl">$15,500-$31,100</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">Ongoing annual cost:</span>
                  <span className="font-bold text-green-600 text-xl">$14,400-$30,000</span>
                </div>
              </div>
              <p className="text-gray-800 font-bold text-lg mt-4">
                The savings: $37,400-$64,500 per year. Per drafter.
              </p>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Here's the part that makes people uncomfortable: that's not the end of the story. The Filipino drafter often delivers faster because they're production-focused specialists who aren't pulled into meetings, site visits, or admin tasks. A local drafter might spend 25 hours weekly on actual drafting. The offshore drafter? 38-40 hours weekly of pure CAD production.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                When you calculate output per dollar, the gap widens further. But let me be crystal clear: this doesn't mean replacing your entire team. Smart firms use a hybrid model—keep 1-2 local drafters for client-facing work, site coordination, and design development. Build your production capacity offshore.
              </p>
              <p className="text-gray-800 leading-relaxed">
                Gallery Group in Queensland did exactly this. They've been running offshore architectural specialists for years now, earning perfect 5/5 performance reviews and salary increase recommendations. One of their specialists recently received a management review noting: "We can rely on this specialist for any task—the quality and dedication are outstanding." That's not cheap labour—that's skilled professional staffing at sustainable pricing.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Software Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Monitor className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Software Reality: They're Already Better Trained</h2>
              <p className="text-lg text-gray-600">Here's something that shocked me when I first started placing drafting staff 15 years ago</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Here's something that shocked me when I first started placing drafting staff 15 years ago: Filipino CAD drafters often have more current software training than local staff. Why? Philippines-based drafting companies invest heavily in continuous training because it's their competitive advantage.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">What Filipino Drafting VAs Typically Know:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• AutoCAD 2024/2025 with Smart Blocks automation</li>
                  <li>• Revit 2025/2026 for BIM modeling and coordination</li>
                  <li>• Civil 3D for infrastructure and site design</li>
                  <li>• Navisworks for clash detection and model review</li>
                </ul>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• BIM 360 / ACC for cloud collaboration</li>
                  <li>• ISO 19650 BIM standards and LOD specifications</li>
                  <li>• AIA CAD Layer Guidelines and drawing standards</li>
                  <li>• IFC file formats for vendor-neutral model exchange</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Compare that to many local drafters who learned AutoCAD 15 years ago and haven't updated their skills since. They're still manually drawing everything while Filipino drafters leverage parametric modeling, automated schedules, and clash detection workflows.
              </p>
              <p className="text-gray-800 font-semibold">
                This isn't about talent or intelligence—it's about economic incentives. In the Philippines, staying current on software is essential for employment. In the USA, many drafters coast on established relationships without upgrading skills. The market is correcting this reality rapidly.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What VAs Actually Do Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Layers className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Drafting VAs Actually Do (And Don't Do)</h2>
              <p className="text-lg text-gray-600">Perfect for offshore vs where they struggle</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">✅ Perfect for Offshore Drafting VAs:</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Production Drawing Sets</h4>
                  <p className="text-sm text-gray-700">Floor plans, elevations, sections, details from marked-up sketches or design intent documents. They execute the tedious production work that takes 80% of time but requires 20% of creative thinking.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Redline Updates</h4>
                  <p className="text-sm text-gray-700">Converting marked-up PDFs back into clean DWG or RVT files. This is pure production work—perfect for offshore execution. Upload markups at 5pm, receive updated files by 8am next morning.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">BIM Coordination</h4>
                  <p className="text-sm text-gray-700">Running clash detection in Navisworks, coordinating MEP systems with structural and architectural models, documenting conflicts for resolution. Technical work that requires expertise but not design decisions.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Sheet Setup and Standards</h4>
                  <p className="text-sm text-gray-700">Title blocks, viewports, annotation standards, drawing organization. Once you document your standards (which you should have anyway), offshore drafters execute them perfectly.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">3D Modeling from 2D Plans</h4>
                  <p className="text-sm text-gray-700">Converting legacy 2D drawings into 3D Revit models or creating visualisations for client presentations. Time-consuming work that doesn't require site knowledge.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Construction Documentation</h4>
                  <p className="text-sm text-gray-700">Details, schedules, specifications, drawing notes following your templates and standards. They need your documented approach, then they execute flawlessly.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">As-Built Updates</h4>
                  <p className="text-sm text-gray-700">Incorporating field changes and redlines into final documentation. Tedious but essential work that pulls your design team away from new projects.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">⚠️ Where Offshore Drafting VAs Struggle (Keep Local):</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Design Development</h4>
                  <p className="text-sm text-gray-700">Making architectural design decisions, selecting materials, determining spatial relationships. This requires client knowledge, site familiarity, and design judgment better handled locally.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Client Presentations</h4>
                  <p className="text-sm text-gray-700">Presenting to clients, explaining design intent, handling objections. Communication nuances and relationship building work better face-to-face with local team members.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Site Visits and Field Verification</h4>
                  <p className="text-sm text-gray-700">Obviously can't be done remotely. Keep local drafters for site measurements, existing condition documentation, construction administration visits.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Complex Code Interpretation</h4>
                  <p className="text-sm text-gray-700">While Filipino drafters know building codes, interpreting unique local jurisdiction requirements or handling unusual variance requests is better managed by local staff familiar with specific jurisdictions.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Emergency Rush Work Requiring Instant Communication</h4>
                  <p className="text-sm text-gray-700">If you need something in 2 hours and require constant back-and-forth clarification, local staff handles this better. Offshore works best for documented, clear-scope projects.</p>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                The firms that succeed understand this distinction. They don't try to offshore everything—they strategically delegate production work while keeping design and client-facing roles local.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Communication Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Communication Reality (No, There's No Delay)</h2>
              <p className="text-lg text-gray-600">Let me kill a persistent myth</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Let me kill a persistent myth: Filipino drafting VAs don't work while you sleep, sending you completed work the next morning with no opportunity for feedback. That's complete rubbish.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                They work YOUR business hours. If you're in California, they work 9am-5pm Pacific Time (which is 1am-9am Manila time, but who cares?). You communicate via Slack, Microsoft Teams, or whatever you already use. They join your morning meetings. They're available for questions all day. There's no communication delay—you're working together in real-time, just like your local team.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                The time zone setup in the Philippines makes this possible. It's not convenient for them (working nights), but it's perfect for USA, Australian, and New Zealand firms who need staff available during their business hours. A Sydney firm actually has better timezone overlap with Manila (+2 hours) than a Los Angeles firm does with New York (+3 hours).
              </p>
              <p className="text-gray-800 font-semibold">
                When people complain about communication delays with offshore staff, it's usually because they hired through Upwork or Fiverr and got part-time freelancers working 3am their time whenever they feel like logging on. That's not how dedicated offshore staffing works.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When NOT to Hire Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Honest Bit: When NOT to Hire a Drafting VA</h2>
              <p className="text-lg text-gray-600">I'm going to save you money by telling you when this doesn't work</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                I'm going to save you money by telling you when this doesn't work. Because 30% of firms who try offshore drafting fail, and it's usually because they weren't ready in the first place.
              </p>
              <p className="text-gray-800 font-semibold mb-4">You're Not Ready If:</p>
              <div className="space-y-3">
                {[
                  "Your Drawing Standards Aren't Documented - If you can't hand someone a document explaining your layer standards, title block format, and drawing organisation, you're not ready. 'Just do it how we always do it' doesn't work remotely.",
                  "You're Under $1M Annual Revenue - Below this threshold, you don't have enough drafting volume to justify the training investment. Wait until you're consistently busy and turning down work because of capacity constraints.",
                  "You Need Design Services, Not Production - If you need someone to make design decisions rather than execute documented work, hire local. Offshore drafting works for production capacity, not creative direction.",
                  "Your Projects Are Heavily Site-Dependent - Residential additions requiring multiple site visits and constant field verification don't translate well offshore. New construction from scratch? Perfect for offshore.",
                  "You Can't Commit to Training - Expect 90 days before your offshore drafter is fully productive in your specific standards and workflow. If you need instant results, this isn't the solution.",
                  "You're Looking for Part-Time Help - Offshore staffing works best as full-time dedicated team members. If you need 10 hours a week of CAD help, use Upwork. ShoreAgents focuses on full-time placements."
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
              <p className="text-gray-800 leading-relaxed">
                The firms that succeed treat offshore drafters as real team members, invest in proper training, and don't expect magic. They understand the 90-day ramp-up period and plan accordingly.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Making It Work Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Making It Work: The Systematic Approach</h2>
              <p className="text-lg text-gray-600">If you're still reading, here's how successful firms actually implement offshore drafting staff</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Start With One Drafter</h3>
                  <p className="text-sm text-gray-700">Don't build a team of 8 offshore drafters in month one. Hire one, document your training process, establish communication workflows, and prove the model works. Scale after success.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Document Everything</h3>
                  <p className="text-sm text-gray-700">Your layer standards, title blocks, naming conventions, folder structures, quality control checklists. If it's not documented, it can't be taught remotely. This documentation benefits your entire team anyway.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Assign a Local Mentor</h3>
                  <p className="text-sm text-gray-700">One of your local drafters should be responsible for training and quality control. They review work, answer questions, and ensure standards are followed. This is a 10-hour weekly time investment for the first 90 days.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Use Video Documentation</h3>
                  <p className="text-sm text-gray-700">Record Loom videos showing exactly how you want tasks completed. "Here's how I set up a sheet, here's how I organise layers, here's how I handle this detail type." 5-minute videos save hours of back-and-forth questions.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Start With Simple Projects</h3>
                  <p className="text-sm text-gray-700">Begin with straightforward production work—residential plans, simple commercial tenant improvements, basic site plans. Save complex projects until they've proven themselves on easier work.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Expect 90-Day Ramp-Up</h3>
                  <p className="text-sm text-gray-700">Month 1: basic tasks, lots of questions, significant QC required. Month 2: increasing complexity, fewer mistakes, growing independence. Month 3: handling standard projects with minimal supervision. This timeline is realistic.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Track Measurable Results</h3>
                  <p className="text-sm text-gray-700">How many sheets per week? How many revisions required? Time saved by local staff? Firms that track metrics make better decisions about expanding offshore capacity.</p>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-6">
                The firms running successful offshore drafting teams didn't get there by accident. They followed systematic approaches, invested in training, and treated offshore staff as real team members rather than disposable contractors.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Explore Offshore Drafting Staff?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              ShoreAgents specialises in placing Filipino drafting professionals with architecture, engineering, and construction firms across the USA, Australia, and New Zealand. Our full-time drafting VAs cost $1,200-2,500/month depending on experience and software expertise.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              But here's what makes us different: we'll tell you if you're not ready yet. If your drawing standards aren't documented, we'll be honest that you should organise first. If you're too small to justify the investment, we'll tell you to wait. If you're trying to offshore work that must stay local, we'll explain why it won't work.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              We only succeed when you succeed. And that means being brutally honest about when offshore drafting makes sense—and when it doesn't.
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
            Want to discuss if offshore drafting is right for your firm? Contact our team for a frank conversation about your situation. We'll tell you what's realistic, what's not, and whether we're the right fit. No sales pitch, just 15 years of experience telling it straight.
          </p>
        </div>
      </div>
    </div>
  );
}
