import { SideNav } from "@/components/layout/SideNav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Target,
  Award,
  TrendingUp,
  Star,
  Users,
  Building2,
  ArrowRight,
  Globe,
  CheckCircle2,
  Lightbulb,
  DollarSign,
  Clock,
  Zap,
  AlertCircle,
  FileText,
  Settings,
  MapPin,
  Briefcase,
  Home,
  Hammer,
  Building,
  Cpu,
  TrendingDown,
  CheckCircle,
  XCircle,
  ArrowUpRight,
  List,
  HelpCircle,
  Rocket,
  ShieldCheck,
  BarChart3
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function OutsourcingVsOffshoringPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[{"name":"Outsourcing","url":"https://www.shoreagents.com/outsourcing"},{"name":"Outsourcing vs Offshoring","url":"https://www.shoreagents.com/outsourcing-vs-offshoring"}]} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              Complete 2025 Comparison
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Outsourcing vs Offshoring:<br />
              <span className="text-lime-600">What's the Real Difference?</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              This decision impacts costs, quality, and operational success for years. Understanding outsourcing vs 
              offshoring differences could save you $100,000+ in costly mistakes and failed implementations. Strategic 
              analysis with real-world examples and honest ROI comparisons.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/sales" 
                className="inline-flex items-center px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors"
              >
                Get Personalized Guidance
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/what-is-outsourcing" 
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-lime-600 transition-colors"
              >
                Explore Strategic Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Quick Comparison */}
        <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200 mb-16">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick Comparison Overview</h3>
              <p className="text-gray-700">Understanding the fundamental differences</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Target className="w-10 h-10 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-3">🎯 Outsourcing</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>External company manages entire process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>You define outcomes, they deliver results</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Globe className="w-10 h-10 text-lime-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-3">🌏 Offshoring</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-lime-600 flex-shrink-0 mt-1" />
                    <span>Your employees work from overseas location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-lime-600 flex-shrink-0 mt-1" />
                    <span>You manage daily, they execute tasks</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alert Box */}
        <Card className="bg-red-50 border-red-200 mb-12">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  CRITICAL: 89% of Businesses Choose Wrong Between Outsourcing vs Offshoring
                </h3>
                <p className="text-gray-700">
                  This decision impacts costs, quality, and operational success for years. Understanding outsourcing vs 
                  offshoring differences could save you $100,000+ in costly mistakes and failed implementations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Story */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <Lightbulb className="w-10 h-10 text-orange-600 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">My $150K Lesson: Why This Matters</h2>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="mb-4">
                      Back in 2012, I thought I was getting an outsourcing solution. What I actually got was offshoring 
                      without the infrastructure. The result? A home-based worker with chickens in the background who would 
                      disappear for days, costing me over <strong>$150,000 in lost opportunities</strong> and failed processes.
                    </p>
                    <p className="mb-4">
                      That expensive lesson taught me the critical difference between outsourcing (where a company manages 
                      the entire process) and offshoring (where you manage remote employees). After 500+ successful placements 
                      and building ShoreAgents into Australia's leading BPO provider, I can tell you exactly when to use each model.
                    </p>
                    <p className="text-gray-900 font-semibold">
                      This comprehensive outsourcing vs offshoring comparison will save you from making the same costly mistakes 
                      by showing you exactly which approach fits your business needs, growth stage, and operational requirements.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Core Definitions */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <FileText className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Core Definitions</h2>
              <p className="text-lg text-gray-600">Understanding the fundamental differences</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Outsourcing Definition</h3>
                  <p className="text-gray-700">
                    Outsourcing is when you hire a third-party company to perform specific tasks or deliver defined services 
                    for your business. You don't manage their team – you get a finished product.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Offshoring Definition</h3>
                  <p className="text-gray-700">
                    Offshoring is when you relocate specific roles or operations to another country while maintaining direct 
                    management control. They become part of your team structure.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Examples to Clarify the Difference</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <p className="text-gray-700">
                      <strong className="text-blue-900">Outsourcing Example:</strong> Hiring a design agency to create your 
                      Instagram feed. They manage the process, you get monthly content delivered.
                    </p>
                  </div>
                  <div className="bg-lime-50 border-l-4 border-lime-600 p-4 rounded">
                    <p className="text-gray-700">
                      <strong className="text-lime-900">Offshoring Example:</strong> Hiring a full-time virtual assistant in 
                      the Philippines who uses your systems, follows your processes, and reports to you daily.
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  While these outsourcing vs offshoring models can overlap in practice, the mindset, structure, and management 
                  approach behind them are fundamentally different. Understanding this distinction is crucial for successful 
                  implementation.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Strategic Comparison Table */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <BarChart3 className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Strategic Comparison</h2>
              <p className="text-lg text-gray-600">Key differences across critical business dimensions</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              To help visualize the key differences between outsourcing vs offshoring, here's how these models compare 
              across critical business dimensions:
            </p>

            <Card className="bg-white border-gray-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-lime-600 text-white">
                      <tr>
                        <th className="text-left p-4 font-semibold">Feature</th>
                        <th className="text-left p-4 font-semibold">Outsourcing</th>
                        <th className="text-left p-4 font-semibold">Offshoring</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900">Task Ownership</td>
                        <td className="p-4 text-gray-700">Provider delivers outcome</td>
                        <td className="p-4 text-gray-700">You manage task execution</td>
                      </tr>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900">Team Relationship</td>
                        <td className="p-4 text-gray-700">Project-based vendor</td>
                        <td className="p-4 text-gray-700">Long-term team member</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900">Management Required</td>
                        <td className="p-4 text-gray-700">Minimal oversight</td>
                        <td className="p-4 text-gray-700">Daily management needed</td>
                      </tr>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900">Tool Control</td>
                        <td className="p-4 text-gray-700">They use their systems</td>
                        <td className="p-4 text-gray-700">They use your systems</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900">Culture Alignment</td>
                        <td className="p-4 text-gray-700">Limited integration</td>
                        <td className="p-4 text-gray-700">Full cultural adoption</td>
                      </tr>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900">Cost Structure</td>
                        <td className="p-4 text-gray-700">Project-based fees</td>
                        <td className="p-4 text-gray-700">Monthly salary + provider fee</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900">Knowledge Retention</td>
                        <td className="p-4 text-gray-700">Stays with provider</td>
                        <td className="p-4 text-gray-700">Builds within your team</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-4 font-semibold text-gray-900">Best For</td>
                        <td className="p-4 text-gray-700">Specialized projects</td>
                        <td className="p-4 text-gray-700">Daily operations</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-lime-50 border-lime-200 mt-6">
              <CardContent className="p-6">
                <p className="text-gray-700">
                  <strong>Key Insight:</strong> This comparison reveals why businesses often struggle when they confuse these 
                  models. The most successful companies understand when to use strategic outsourcing versus building offshore 
                  team capacity.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* When to Choose */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <HelpCircle className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When to Choose Each Model</h2>
              <p className="text-lg text-gray-600">Simple decision framework for your business</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Having built multiple businesses using both approaches, I've developed a simple decision framework to help you 
              choose between outsourcing vs offshoring:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Use Outsourcing */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                    Use Outsourcing When:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'You need specialized expertise for a defined project',
                      'The work has a clear endpoint or deliverable',
                      'You lack bandwidth to manage the process',
                      'Speed matters more than perfect alignment',
                      'You need skills you don\'t use regularly',
                      'Testing concepts before building capacity'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Use Offshoring */}
              <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-lime-600" />
                    Use Offshoring When:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'You need ongoing support for daily operations',
                      'Work involves your internal systems and data',
                      'You value consistency and team integration',
                      'You have documented processes',
                      'You want scalable capacity without payroll',
                      'Cultural alignment matters'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-lime-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Real-World Examples</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <p className="text-gray-700">
                      <strong className="text-blue-900">Outsourcing Examples:</strong> Website redesign project, tax preparation, 
                      marketing campaign, legal compliance documentation
                    </p>
                  </div>
                  <div className="bg-lime-50 border-l-4 border-lime-600 p-4 rounded">
                    <p className="text-gray-700">
                      <strong className="text-lime-900">Offshoring Examples:</strong> Daily real estate support, ongoing bookkeeping, 
                      customer service, construction documentation
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  The beauty of modern business is that you can use both outsourcing and offshoring approaches strategically. 
                  The most successful companies we work with outsource specialized projects while offshoring their core operational 
                  functions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Industry Applications */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Briefcase className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Industry Applications</h2>
              <p className="text-lg text-gray-600">How different industries use each model</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Real Estate */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <Home className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-4">Real Estate Industry</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Outsource:</h4>
                    <p className="text-sm text-gray-700">Website design, marketing campaigns, professional photography, legal document templates</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lime-900 mb-2">Offshore:</h4>
                    <p className="text-sm text-gray-700">Daily listing coordination, transaction management, lead follow-up, MLS updates</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Construction */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <Hammer className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-4">Construction Industry</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Outsource:</h4>
                    <p className="text-sm text-gray-700">Specialized engineering reports, compliance documentation, equipment rental, safety training</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lime-900 mb-2">Offshore:</h4>
                    <p className="text-sm text-gray-700">Daily CAD drafting, project documentation, estimating, permit tracking</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Property Management */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <Building className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-4">Property Management</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Outsource:</h4>
                    <p className="text-sm text-gray-700">Property valuation reports, legal compliance audits, major renovation projects, insurance claims</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lime-900 mb-2">Offshore:</h4>
                    <p className="text-sm text-gray-700">Tenant screening, maintenance coordination, lease renewals, daily communications</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-lime-50 border-lime-200 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-700">
                Understanding these industry-specific applications helps you make better outsourcing vs offshoring decisions 
                based on your business type and operational needs.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Global Locations */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <MapPin className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Global Locations</h2>
              <p className="text-lg text-gray-600">Where to find outsourcing and offshoring talent</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Different regions have developed specializations in either outsourcing or offshoring based on infrastructure, 
              talent pools, and business environments:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Top Outsourcing Destinations */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6 text-blue-600" />
                    Top Outsourcing Destinations
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">🇮🇳</span>
                      <div>
                        <strong className="text-gray-900">India:</strong>
                        <p className="text-sm text-gray-700">Technical outsourcing, software development, complex data analysis</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">🇪🇺</span>
                      <div>
                        <strong className="text-gray-900">Eastern Europe:</strong>
                        <p className="text-sm text-gray-700">Development projects, creative services, specialized technical work</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">🇵🇭</span>
                      <div>
                        <strong className="text-gray-900">Philippines:</strong>
                        <p className="text-sm text-gray-700">Business process outsourcing, content creation, customer service</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">🌎</span>
                      <div>
                        <strong className="text-gray-900">Latin America:</strong>
                        <p className="text-sm text-gray-700">Nearshore development, design services, time-zone aligned projects</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Premier Offshoring Locations */}
              <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Globe className="w-6 h-6 text-lime-600" />
                    Premier Offshoring Locations
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">🇵🇭</span>
                      <div>
                        <strong className="text-gray-900">Philippines:</strong>
                        <Badge className="bg-lime-600 text-white text-xs mb-1">Gold Standard</Badge>
                        <p className="text-sm text-gray-700">Excellent English and Western cultural alignment</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">🇲🇽</span>
                      <div>
                        <strong className="text-gray-900">Mexico:</strong>
                        <p className="text-sm text-gray-700">Nearshore offshoring for US businesses with timezone advantages</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">🇻🇳</span>
                      <div>
                        <strong className="text-gray-900">Vietnam:</strong>
                        <p className="text-sm text-gray-700">Emerging technical talent with cost advantages</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-2xl">🇪🇺</span>
                      <div>
                        <strong className="text-gray-900">Eastern Europe:</strong>
                        <p className="text-sm text-gray-700">Specialized technical roles and advanced development capabilities</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-lime-50 border-lime-200 mt-6">
              <CardContent className="p-6">
                <p className="text-gray-700">
                  <strong>Key Insight:</strong> The Philippines has emerged as the premier destination for offshoring, 
                  particularly for Australian, New Zealand, and US businesses, due to cultural alignment, English proficiency, 
                  and a business environment structured to support Western companies.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* AI Era */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Cpu className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The AI Era: How Things Have Changed</h2>
              <p className="text-lg text-gray-600">AI's impact on outsourcing vs offshoring landscape</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              In 2025, AI tools have fundamentally changed the outsourcing vs offshoring landscape. While AI has automated 
              many basic tasks, it's created a new category of work: AI-assisted operations.
            </p>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-purple-600" />
                  AI-Enhanced Offshoring Advantages
                </h3>
                <p className="text-gray-700 mb-4">
                  The best offshore teams today function as AI-augmented extensions of your business. They:
                </p>
                <ul className="space-y-2">
                  {[
                    'Use ChatGPT and Claude for communications and content',
                    'Create process documentation with AI assistance',
                    'Build automations with Zapier and Make',
                    'Manage projects using AI-enhanced tools',
                    'Create consistent outputs using your AI prompts and workflows'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-lime-50 border-lime-200 mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why This Favors Offshoring</h3>
                <p className="text-gray-700">
                  With offshoring, you can train your team to use AI tools exactly as you would, creating a consistent 
                  technological ecosystem. With traditional outsourcing, you rarely have influence over how providers use 
                  AI in their workflows, leading to inconsistent outputs and missed opportunities for integration.
                </p>
                <p className="mt-4 text-gray-900 font-semibold">
                  This shift has actually increased the value proposition of offshoring while highlighting the limitations 
                  of traditional outsourcing models when it comes to AI integration and operational consistency.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Implementation Roadmaps */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <List className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Implementation Roadmaps</h2>
              <p className="text-lg text-gray-600">Step-by-step guides for each approach</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Outsourcing Implementation */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-blue-600" />
                  🎯 Outsourcing Implementation
                </h3>
                <ol className="space-y-3">
                  {[
                    { title: 'Define Requirements', desc: 'Create detailed project brief' },
                    { title: 'Research Providers', desc: 'Find specialized firms' },
                    { title: 'Request Proposals', desc: 'Get 3-5 detailed quotes' },
                    { title: 'Evaluate & Select', desc: 'Choose based on value' },
                    { title: 'Contract Clearly', desc: 'Define deliverables' },
                    { title: 'Manage Relationship', desc: 'Set communication protocols' }
                  ].map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <strong className="text-gray-900">{step.title}:</strong>
                        <p className="text-sm text-gray-700">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Offshoring Implementation */}
            <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Globe className="w-6 h-6 text-lime-600" />
                  🌏 Offshoring Implementation
                </h3>
                <ol className="space-y-3">
                  {[
                    { title: 'Identify Functions', desc: 'Determine offshore roles' },
                    { title: 'Document Processes', desc: 'Create detailed SOPs' },
                    { title: 'Choose Partner', desc: 'Select staffing provider' },
                    { title: 'Recruitment', desc: 'Find right talent' },
                    { title: 'Onboarding', desc: 'Structured training program' },
                    { title: 'Management', desc: 'Daily communication setup' }
                  ].map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="bg-lime-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <strong className="text-gray-900">{step.title}:</strong>
                        <p className="text-sm text-gray-700">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white border-gray-200 mt-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Critical Success Factors</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                  <p className="text-gray-700">
                    <strong className="text-blue-900">For Outsourcing:</strong> Clear specifications, defined quality standards, 
                    realistic timelines, and proper vendor management
                  </p>
                </div>
                <div className="bg-lime-50 border-l-4 border-lime-600 p-4 rounded">
                  <p className="text-gray-700">
                    <strong className="text-lime-900">For Offshoring:</strong> Documented processes, cultural integration, 
                    ongoing training, and consistent management practices
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                Both models require investment in setup and management, but offshoring typically provides better long-term 
                scalability while outsourcing offers faster short-term results for specific projects.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Critical Questions */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <HelpCircle className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Critical Decision Questions</h2>
              <p className="text-lg text-gray-600">Answer these before making your choice</p>
            </div>
          </div>
          
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6">
                Before choosing between outsourcing vs offshoring, honestly answer these critical questions:
              </p>
              <div className="space-y-4">
                {[
                  { q: 'Management Capacity:', a: 'How much ongoing oversight can you realistically provide? (Less = outsourcing)' },
                  { q: 'Cultural Alignment:', a: 'How important is brand representation and cultural fit? (More = offshoring)' },
                  { q: 'Process Documentation:', a: 'Do you have SOPs or ability to create them? (Required for offshoring)' },
                  { q: 'Timeline:', a: 'Is this one-time need or ongoing function? (One-time = outsourcing)' },
                  { q: 'System Access:', a: 'How much data sharing and tool access is required? (More = offshoring)' },
                  { q: 'Budget Structure:', a: 'Project-based or ongoing investment? (Project = outsourcing)' }
                ].map((item, idx) => (
                  <Card key={idx} className="bg-white">
                    <CardContent className="p-4">
                      <p className="text-gray-700">
                        <strong className="text-orange-900">{idx + 1}. {item.q}</strong> {item.a}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="mt-6 text-gray-900 font-semibold text-center">
                By carefully considering these outsourcing vs offshoring factors, you can make informed decisions that 
                align with your business capabilities, growth objectives, and operational requirements.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Conclusion */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-lime-50 to-green-50 border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Choose the Right Model for Your Business Growth
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  When I started ShoreAgents, it was because I had firsthand experience with the confusion around these 
                  models. I'd tried "outsourcing" my real estate operations only to discover what I really needed was 
                  offshoring—dedicated staff who would become part of my team, not just vendors delivering services.
                </p>
                <div className="bg-white border-l-4 border-lime-600 p-6 rounded mt-6">
                  <p className="text-gray-900 font-semibold">
                    The most important thing isn't just cost savings (though those are significant). It's about choosing 
                    the outsourcing vs offshoring model that aligns with your business objectives: If you want hands-off 
                    project completion, outsource. If you want to build scalable team capacity that grows with you, offshore.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>

      {/* Final CTA */}
      <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white mx-4 mb-8">
        <CardContent className="p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make the Right Choice for Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Stop wasting time and money on the wrong model. Get personalized guidance on whether outsourcing or offshoring 
            is right for your specific business needs, growth stage, and operational requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sales"
              className="inline-flex items-center px-8 py-4 bg-white text-lime-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Personalized Guidance
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/what-is-outsourcing"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-lime-600 font-bold text-lg rounded-lg transition-colors"
            >
              Explore Strategic Solutions
            </Link>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
