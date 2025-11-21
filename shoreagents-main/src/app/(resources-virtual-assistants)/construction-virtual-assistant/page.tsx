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
  HardHat,
  Phone,
  Mail,
  Calendar
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";

export default function ConstructionVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['construction-virtual-assistant']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-red-600 text-white mb-4 text-sm px-3 py-1">
              For $2M+ Annual Revenue Builders
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Construction Virtual Assistant:<br />
              <span className="text-lime-600">The $2M Revenue Rule Nobody Mentions</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              I watched a Sydney builder nearly lose his contractor's licence last year. Not because of shoddy work or unpaid subcontractors—because his virtual assistant in Manila approved a structural modification without realising it needed an engineer's stamp. The client's solicitor noticed. The building certifier noticed. And suddenly, a simple cost-saving measure turned into a $47,000 legal mess.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Here's what that taught me: construction isn't like real estate or bookkeeping where admin mistakes just cost time. In construction, delegation mistakes can cost you your business licence, your professional insurance, and in worst cases, your company entirely.
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
            I've spent 15 years placing offshore staff with construction companies across the USA, Australia, and New Zealand. The companies that succeed with construction VAs have three things in common: they're doing over $2 million in annual revenue, they know exactly what tasks are legally delegable, and they've accepted that the first 120 days will make them slower, not faster.
          </p>
          
          <Card className="bg-red-50 border-l-4 border-red-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>If you're under $2M revenue, running residential projects with thin margins, or looking for someone to "handle everything" while you're on site—stop reading now.</strong> You're not ready, and hiring anyway will cost you roughly $46,000 in year-one expenses you can't recoup.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Why Most Can't Afford Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Why Most Construction Companies Can't Afford a Full-Time VA</h2>
              <p className="text-lg text-gray-600">The construction VA industry sells a fantasy. Here's the mathematics</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                The construction VA industry sells a fantasy: "Hire a construction-trained assistant for $8/hour and reclaim 40 hours every month!" It sounds brilliant until you do the mathematics.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h3 className="font-bold text-gray-900 mb-3">The average small construction company in the USA:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Grosses annually:</span>
                    <span className="font-semibold">$842,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Net profit margin:</span>
                    <span className="font-semibold">1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Actual profit:</span>
                    <span className="font-semibold">$8,420</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h3 className="font-bold text-gray-900 mb-3">A full-time VA costs roughly in Year 1:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">VA salary:</span>
                    <span className="font-semibold">$18,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Software subscriptions:</span>
                    <span className="font-semibold">$5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Training time (40 hrs × $75/hr):</span>
                    <span className="font-semibold">$3,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Ongoing management (5 hrs/wk × 52 × $75):</span>
                    <span className="font-semibold">$19,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Mistakes (first 90 days):</span>
                    <span className="font-semibold">$3,000</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">Total Year 1:</span>
                    <span className="font-bold text-red-600 text-xl">$48,500</span>
                  </div>
                </div>
              </div>
              <p className="text-red-700 font-bold text-lg">
                Your VA would cost 545% of your entire annual profit.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Even at healthier 3-5% margins typical of mid-sized builders, you need $900,000 to $1.5 million in revenue just to break even on the investment. This is why I tell most builders under $2M revenue: you're not ready yet.
              </p>
              <p className="text-gray-800 font-semibold">
                The revenue threshold isn't arbitrary. It's about having enough administrative volume to keep a full-time person genuinely busy, enough profit margin to absorb the learning curve, and enough management capacity to properly train and supervise someone who's never walked your job sites.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                Australian and New Zealand builders face similar mathematics, though your numbers look different. In Australia, comparable small builders average $1.1-1.4M AUD revenue with margins between 2-4%. In New Zealand, smaller residential builders typically sit around $900K-1.2M NZD. Same principle applies: you need substantial revenue to justify the investment.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What VA Legally Cannot Do Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Your Construction VA Legally Cannot Do</h2>
              <p className="text-lg text-gray-600">This is the bit that nearly cost that Sydney builder everything, so pay attention</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Your VA cannot make any decisions requiring a contractor's licence, engineering judgement, or safety certification. In most US states, that means they absolutely cannot:
              </p>
              <div className="space-y-2">
                {[
                  "Sign off on permit applications (requires your licensed signature)",
                  "Approve structural modifications or material substitutions (engineering judgement)",
                  "Make final decisions on building code interpretations (liability issue)",
                  "Handle OSHA safety plan development (requires qualified person designation)",
                  "Sign contracts or change orders on your behalf (licensing requirement)",
                  "Conduct quality control inspections (requires field expertise)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                In Australia, similar restrictions apply under state-based licensing laws. Your VA cannot perform any work requiring a building licence, cannot sign off on compliance certificates, and cannot make decisions affecting structural integrity or safety.
              </p>
              <p className="text-gray-800 font-semibold">
                The licensed builder or contractor must maintain direct responsibility for these tasks. No exceptions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What VAs excel at:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Document organisation, submittal tracking, RFI logging, scheduling coordination, vendor communication, invoice processing, meeting minutes, permit renewal reminders, and project closeout documentation.
              </p>
              <p className="text-gray-800 font-semibold">
                Notice the pattern? Administrative tracking and coordination—not decision-making on technical or legal matters. This distinction matters enormously. Delegate the wrong task and you're personally liable for whatever goes wrong.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Procore vs Buildertrend Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Building2 className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Procore vs Buildertrend Decision That Determines Everything</h2>
              <p className="text-lg text-gray-600">Here's something nobody mentions: your choice of construction management software determines whether a VA can actually help you</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Procore (Large Commercial Contractors):</h3>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• Targets large commercial contractors</li>
                <li>• Powerful, modular, and expensive ($375/month minimum, often $2,000+ for larger operations)</li>
                <li>• Requires 2-3 months of training before someone becomes productive</li>
                <li>• Built for complexity: multi-million dollar projects, dozens of subcontractors, union labour, extensive compliance documentation</li>
                <li>• <strong>If you're running commercial projects over $5M, Procore makes sense</strong></li>
                <li>• Your VA will need 90-120 days minimum to become genuinely useful</li>
                <li>• You'll need documented processes for every workflow</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Buildertrend (Residential Builders):</h3>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• Focuses on residential builders and remodellers</li>
                <li>• More intuitive, with pricing from $299-799/month depending on features</li>
                <li>• VAs typically reach basic competency in 60-90 days</li>
                <li>• Interface is simpler, workflows are more straightforward</li>
                <li>• Designed for the chaos of residential construction where clients change their minds and schedules shift weekly</li>
                <li>• <strong>For residential builders doing $1-5M annually, Buildertrend is usually the better fit</strong></li>
                <li>• Your VA can actually learn it in a reasonable timeframe</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">CoConstruct (Custom Home Builders):</h3>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• Serves custom home builders with even simpler pricing ($99-299/month)</li>
                <li>• Smallest learning curve of the three</li>
                <li>• Also most limited in features</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                The construction VA companies advertising "construction-trained assistants" mean they've had 4-6 weeks of general platform overview. They don't know your custom fields, project templates, naming conventions, client-specific workflows, or integration setups. That's another 60-80 hours of company-specific training you'll provide.
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>For US builders:</strong> Expect to spend $5,000-10,000 annually on software subscriptions once you add communication tools, cloud storage, time tracking, and project management platforms your VA needs access to.</p>
                <p><strong>Australian builders:</strong> Budget $6,500-13,000 AUD for comparable software stack.</p>
                <p><strong>New Zealand builders:</strong> Roughly $7,000-14,000 NZD.</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Residential vs Commercial Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <HardHat className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Residential vs Commercial: Completely Different VA Strategies</h2>
              <p className="text-lg text-gray-600">Residential builders can successfully hire VAs earlier than commercial contractors</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Residential Builders:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Residential builders doing $1-3M annually can successfully hire VAs earlier than commercial contractors. Why? Simpler software (Buildertrend), shorter project timelines (months not years), fewer regulatory hoops, and more client communication needs where VAs add immediate value.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-800 font-semibold mb-2">Residential VA sweet spot:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• $1.5-5M revenue</li>
                  <li>• Using Buildertrend or CoConstruct</li>
                  <li>• Running 10-20 concurrent projects</li>
                  <li>• Profit margins 4%+</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Commercial Contractors:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Commercial contractors need $5-10M revenue minimum before a VA makes financial sense. You're dealing with Procore's complexity, longer project timelines, heavier compliance requirements, union considerations, and more stakeholders. The VA learning curve is substantially longer—120-180 days versus 60-90 for residential.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-800 font-semibold mb-2">Commercial VA sweet spot:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• $10M+ revenue</li>
                  <li>• Established processes</li>
                  <li>• Dedicated project managers already in place</li>
                  <li>• Using Procore or similar enterprise platforms</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                If you're a commercial contractor under $5M doing tenant improvements or small retail build-outs, you're in an awkward middle ground. You might get value from a part-time VA (20 hours weekly) focused purely on document management and RFI tracking, but full-time is probably overkill.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* 120-Day Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-100 rounded-full p-3">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 120-Day Reality for Construction Companies</h2>
              <p className="text-lg text-gray-600">Here's what your first four months actually look like</p>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-red-600 text-white">Days 1-45</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Your Productivity Drops</h3>
                    <p className="text-gray-700 leading-relaxed">
                      The VA is learning Procore or Buildertrend, asking constant questions about construction terminology they've never heard, making mistakes on submittal logs, and requiring 6-8 hours of your time weekly for training and corrections. You're slower than before you hired them. Every builder I know considers quitting during this phase.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-amber-600 text-white">Days 45-90</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Small Improvements Appear</h3>
                    <p className="text-gray-700 leading-relaxed">
                      They're handling basic document filing, tracking some deadlines, maybe managing the submittal log adequately. You're still spending 4-5 hours weekly on management. Break-even point on time investment, but no real ROI yet.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-blue-600 text-white">Days 90-120</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Turning Point</h3>
                    <p className="text-gray-700 leading-relaxed">
                      They're proactively following up on RFIs, tracking permit renewals, coordinating delivery schedules without prompting. Management drops to 2-3 hours weekly. You're starting to reclaim meaningful time.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-green-600 text-white">Month 5-6</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Actual Payoff Begins</h3>
                    <p className="text-gray-700 leading-relaxed">
                      They're handling 20-25 hours of legitimate administrative work weekly, you've reclaimed 15+ hours of your time, and management is down to 2 hours. Real ROI emerges.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-lime-600 text-white">Month 6+</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">If You've Done This Right</h3>
                    <p className="text-gray-700 leading-relaxed">
                      They're independently managing most project documentation, you're considering a second VA for growth, and you're finally experiencing what the marketing promised 6 months ago.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-100 border-l-4 border-gray-600 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                This timeline is longer than real estate or accounting VAs because construction software is more complex and the technical terminology is extensive. Anyone promising "immediate productivity" is lying.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Time Zone Realities Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">USA, Australia, and New Zealand: Time Zone Realities</h2>
              <p className="text-lg text-gray-600">How time zones actually work for construction companies</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For US Builders:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                For US builders working with Filipino VAs, here's how the time zones actually work: when you're at your desk at 9am in New York or Los Angeles, your VA in Manila is working at exactly the same moment—it just happens to be 9pm or 10pm their time. You ask a question at 2pm your time, they respond immediately because they're working at 2am their time. There's no delay, no "overnight work gets done while you sleep" situation. You're working together in real-time.
              </p>
              <p className="text-gray-800 font-semibold">
                The trade-off: your VA is working night shift in Manila to match your daytime hours. This creates perfect communication—immediate responses, real-time collaboration, instant problem-solving. But it also means they're maintaining a graveyard shift schedule long-term, which increases burnout and turnover risk if not managed properly.
              </p>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Australian and New Zealand Builders:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                For Australian and New Zealand builders, you have a significant advantage: minimal time zone difference with the Philippines. When you're working 9am-5pm in Sydney or Auckland, your VA is working roughly 7am-3pm or 9am-5pm Manila time—normal daytime hours for both of you. You get the same real-time communication benefits as US clients, but without asking your VA to work nights permanently.
              </p>
              <p className="text-gray-800 font-semibold">
                This is one reason Australian builders often report better long-term retention with Filipino staff compared to US companies—the working arrangement is more sustainable for everyone involved.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What This Actually Costs Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Calculator className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What This Actually Costs (Real Numbers)</h2>
              <p className="text-lg text-gray-600">Forget the "$8/hour" nonsense. Here's your real first-year investment</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">First-Year Investment:</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">VA salary:</span>
                  <span className="font-semibold">$18,000 USD ($24,000 AUD / $26,000 NZD)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software subscriptions:</span>
                  <span className="font-semibold">$5,000 USD ($6,500 AUD / $7,000 NZD)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your training time (40 hrs × $75):</span>
                  <span className="font-semibold">$3,000 USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Ongoing management (5 hrs/wk × 52 × $75):</span>
                  <span className="font-semibold">$19,500 USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Mistakes and rework (first 90 days):</span>
                  <span className="font-semibold">~$3,000 USD</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">Total first year:</span>
                  <span className="font-bold text-red-600 text-xl">$48,500 USD ($64,000 AUD / $69,000 NZD)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Year two onwards drops significantly because training is complete and management reduces to 2 hours weekly: roughly $28,000 USD ($37,000 AUD / $40,000 NZD) annually.
              </p>
              <p className="text-gray-900 font-bold text-xl text-center">
                That's your real investment. If you can't afford to lose that money in year one, you're not ready.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When This Doesn't Work (Save Yourself $48,000)</h2>
              <p className="text-lg text-gray-600">Don't hire a construction VA if:</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <div className="space-y-3">
                {[
                  "Your annual revenue is under $2M (USA) or comparable in AUD/NZD",
                  "Profit margins are below 3%",
                  "You're running fewer than 10 projects annually",
                  "You have no documented processes or SOPs",
                  "You're a new company (under 3 years)",
                  "Your work is highly specialised requiring constant licensed decisions",
                  "You don't have 5+ hours weekly for training and management",
                  "You're primarily doing fieldwork with minimal admin"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-800 font-semibold mt-6 text-center">
                I've watched too many builders ignore these warnings and waste $48,000 proving I was right. Don't be that person.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Next Steps Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Next Steps (If You're Actually Ready)</h2>
              <p className="text-lg text-gray-600">You need three things before hiring</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                You need three things before hiring: documented processes for key workflows, construction management software properly configured with templates, and realistic expectations about the 120-day ramp-up period.
              </p>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                At ShoreAgents, we place Filipino construction staff with builders across the USA, Australia, and New Zealand. Our pricing is $1,500-2,500 monthly depending on experience and specialisation—not $8/hour, because that's not realistic once you include our recruitment, training, and support infrastructure.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                We're selective about who we work with. If you're under $2M revenue, we'll tell you to wait. If you have no systems in place, we'll tell you to document your processes first. If you're looking for someone to make licensed decisions on your behalf, we'll decline the engagement.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                This approach pisses off people who want to hear "yes" regardless of readiness. But it keeps our clients successful and our reputation intact.
              </p>
              <p className="text-gray-900 font-bold text-xl text-center mt-4">
                If you're doing $2M+ revenue, have systems documented, understand the 120-day reality, and know exactly which tasks are safely delegable—let's have a conversation about whether offshore staff makes sense for your specific situation.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for an Honest Assessment?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              If you're doing $2M+ revenue, have systems documented, and understand the 120-day reality, let's have a conversation about whether offshore staff makes sense for your specific situation.
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
            Construction isn't like real estate or bookkeeping where admin mistakes just cost time. In construction, delegation mistakes can cost you your business licence. Know exactly what tasks are legally delegable before you hire.
          </p>
        </div>
      </div>
    </div>
  );
}
