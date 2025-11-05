'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe,
  Building2,
  CheckCircle,
  X,
  Scale,
  Target
} from 'lucide-react';
import Image from 'next/image';

export default function OutsourcingVsOffshoringPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <Badge className="bg-red-600 text-white px-4 py-2 text-lg">
              ⚠️ CRITICAL: 89% of Businesses Choose Wrong Between Outsourcing vs Offshoring
            </Badge>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Outsourcing vs Offshoring: What's the Real Difference and Which Should You Use?
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-4">
            This decision impacts costs, quality, and operational success for years. Understanding outsourcing vs offshoring differences could save you $100,000+ in costly mistakes and failed implementations.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-4">
            <span><strong>Author:</strong> Stephen Atcheler</span>
            <span><strong>Published:</strong> May 19, 2025</span>
            <span><strong>Views:</strong> 1,454</span>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Strategic analysis of both models with real-world examples, implementation guidance, and honest ROI comparisons
          </p>
          
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop"
              alt="Global business strategy concept with world map"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg">
              🎯 Explore Strategic Solutions
            </Button>
            <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg">
              📞 Get Personalized Guidance
            </Button>
          </div>

          {/* Quick Comparison */}
          <Card className="border-lime-200 max-w-3xl mx-auto">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Comparison</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🎯</div>
                  <h4 className="font-bold text-gray-900 mb-2">Outsourcing</h4>
                  <p className="text-sm text-gray-700 mb-2">External company manages entire process</p>
                  <p className="text-sm text-gray-700">You define outcomes, they deliver results</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🌏</div>
                  <h4 className="font-bold text-gray-900 mb-2">Offshoring</h4>
                  <p className="text-sm text-gray-700 mb-2">Your employees work from overseas location</p>
                  <p className="text-sm text-gray-700">You manage daily, they execute tasks</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Personal Story */}
        <div className="mb-16">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                My $150K Lesson: Why Outsourcing vs Offshoring Matters
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  Back in 2012, I thought I was getting an outsourcing solution. What I actually got was offshoring without the infrastructure. The result? A home-based worker with chickens in the background who would disappear for days, costing me over $150,000 in lost opportunities and failed processes.
                </p>
                <p className="mb-6">
                  That expensive lesson taught me the critical difference between outsourcing (where a company manages the entire process) and offshoring (where you manage remote employees). After 500+ successful placements and building ShoreAgents into Australia's leading BPO provider, I can tell you exactly when to use each model.
                </p>
                <p className="mb-8">
                  This comprehensive outsourcing vs offshoring comparison will save you from making the same costly mistakes by showing you exactly which approach fits your business needs, growth stage, and operational requirements.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Definitions */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Outsourcing vs Offshoring: Core Definitions
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="flex items-center mb-4">
                    <Building2 className="w-8 h-8 text-lime-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Outsourcing Definition</h3>
                  </div>
                  <p className="text-lg text-gray-700">
                    Outsourcing is when you hire a third-party company to perform specific tasks or deliver defined services for your business. You don't manage their team – you get a finished product.
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Globe className="w-8 h-8 text-lime-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Offshoring Definition</h3>
                  </div>
                  <p className="text-lg text-gray-700">
                    Offshoring is when you relocate specific roles or operations to another country while maintaining direct management control. They become part of your team structure.
                  </p>
                </div>
              </div>

              <div className="bg-lime-50 border-l-4 border-lime-600 p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Quick Examples to Clarify the Difference</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-700">
                      <strong>Outsourcing Example:</strong> Hiring a design agency to create your Instagram feed. They manage the process, you get monthly content delivered.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <strong>Offshoring Example:</strong> Hiring a full-time virtual assistant in the Philippines who uses your systems, follows your processes, and reports to you daily.
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-gray-700">
                  While these outsourcing vs offshoring models can overlap in practice, the mindset, structure, and management approach behind them are fundamentally different. Understanding this distinction is crucial for successful implementation of strategic outsourcing solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Strategic Comparison Table */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Outsourcing vs Offshoring: Strategic Comparison
              </h2>
              <p className="text-gray-700 mb-8 text-center">
                To help visualize the key differences between outsourcing vs offshoring, here's how these models compare across critical business dimensions:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-lime-50">
                      <th className="border border-lime-200 p-3 text-left font-bold text-gray-900">Feature</th>
                      <th className="border border-lime-200 p-3 text-left font-bold text-gray-900">Outsourcing</th>
                      <th className="border border-lime-200 p-3 text-left font-bold text-gray-900">Offshoring</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 p-3 font-semibold">Task Ownership</td>
                      <td className="border border-gray-200 p-3">Provider delivers outcome</td>
                      <td className="border border-gray-200 p-3">You manage task execution</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-3 font-semibold">Team Relationship</td>
                      <td className="border border-gray-200 p-3">Project-based vendor</td>
                      <td className="border border-gray-200 p-3">Long-term team member</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3 font-semibold">Management Required</td>
                      <td className="border border-gray-200 p-3">Minimal oversight</td>
                      <td className="border border-gray-200 p-3">Daily management needed</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-3 font-semibold">Tool Control</td>
                      <td className="border border-gray-200 p-3">They use their systems</td>
                      <td className="border border-gray-200 p-3">They use your systems</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3 font-semibold">Culture Alignment</td>
                      <td className="border border-gray-200 p-3">Limited integration</td>
                      <td className="border border-gray-200 p-3">Full cultural adoption</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-3 font-semibold">Cost Structure</td>
                      <td className="border border-gray-200 p-3">Project-based fees</td>
                      <td className="border border-gray-200 p-3">Monthly salary + provider fee</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3 font-semibold">Knowledge Retention</td>
                      <td className="border border-gray-200 p-3">Stays with provider</td>
                      <td className="border border-gray-200 p-3">Builds within your team</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-3 font-semibold">Best For</td>
                      <td className="border border-gray-200 p-3">Specialized projects</td>
                      <td className="border border-gray-200 p-3">Daily operations</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-lime-50 border-l-4 border-lime-600 p-6">
                <p className="text-gray-700">
                  This comparison reveals why businesses often struggle when they confuse these models. The most successful companies understand when to use strategic outsourcing versus building offshore team capacity.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* When to Choose */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                When to Choose Outsourcing vs Offshoring
              </h2>
              <p className="text-gray-700 mb-8">
                Having built multiple businesses using both approaches, I've developed a simple decision framework to help you choose between outsourcing vs offshoring:
              </p>
              
              <div className="space-y-8">
                <div className="bg-lime-50 border-l-4 border-lime-600 p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">✅ Use Outsourcing When:</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700">• You need specialized expertise for a defined project</p>
                    <p className="text-gray-700">• The work has a clear endpoint or deliverable</p>
                    <p className="text-gray-700">• You lack bandwidth to manage the process</p>
                    <p className="text-gray-700">• Speed matters more than perfect alignment</p>
                    <p className="text-gray-700">• You need skills you don't use regularly</p>
                    <p className="text-gray-700">• Testing concepts before building capacity</p>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">✅ Use Offshoring When:</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700">• You need ongoing support for daily operations</p>
                    <p className="text-gray-700">• Work involves your internal systems and data</p>
                    <p className="text-gray-700">• You value consistency and team integration</p>
                    <p className="text-gray-700">• You have documented processes</p>
                    <p className="text-gray-700">• You want scalable capacity without payroll</p>
                    <p className="text-gray-700">• Cultural alignment matters</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Real-World Examples</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-700">
                        <strong>Outsourcing Examples:</strong> Website redesign project, tax preparation, marketing campaign, legal compliance documentation
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Offshoring Examples:</strong> Daily real estate support, ongoing bookkeeping, customer service, construction documentation
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">
                    The beauty of modern business is that you can use both outsourcing and offshoring approaches strategically. The most successful companies we work with outsource specialized projects while offshoring their core operational functions through comprehensive outsourcing solutions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Industry Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Outsourcing vs Offshoring by Industry
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Real Estate Industry Applications</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-lime-700">Outsource:</p>
                    <p className="text-gray-700 text-sm">Website design, marketing campaigns, professional photography, legal document templates</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-700">Offshore:</p>
                    <p className="text-gray-700 text-sm">Daily listing coordination, transaction management, lead follow-up, MLS updates through real estate outsourcing services</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Construction Industry Applications</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-lime-700">Outsource:</p>
                    <p className="text-gray-700 text-sm">Specialized engineering reports, compliance documentation, equipment rental, safety training</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-700">Offshore:</p>
                    <p className="text-gray-700 text-sm">Daily CAD drafting, project documentation, estimating, permit tracking through construction outsourcing solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Property Management Applications</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-lime-700">Outsource:</p>
                    <p className="text-gray-700 text-sm">Property valuation reports, legal compliance audits, major renovation projects, insurance claims</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-700">Offshore:</p>
                    <p className="text-gray-700 text-sm">Tenant screening, maintenance coordination, lease renewals, daily communications through property management outsourcing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <p className="text-gray-700">
                  <strong>Understanding these industry-specific applications</strong> helps you make better outsourcing vs offshoring decisions based on your business type and operational needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Global Locations */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Global Locations for Outsourcing vs Offshoring
              </h2>
              <p className="text-gray-700 mb-8">
                Different regions have developed specializations in either outsourcing or offshoring based on infrastructure, talent pools, and business environments:
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-lime-700 mb-4">Top Outsourcing Destinations</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">🇮🇳 India</h4>
                      <p className="text-sm text-gray-700">Technical outsourcing, software development, complex data analysis</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">🇪🇺 Eastern Europe</h4>
                      <p className="text-sm text-gray-700">Development projects, creative services, specialized technical work</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">🇵🇭 Philippines</h4>
                      <p className="text-sm text-gray-700">Business process outsourcing, content creation, customer service</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">🇲🇽 Latin America</h4>
                      <p className="text-sm text-gray-700">Nearshore development, design services, time-zone aligned projects</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-blue-700 mb-4">Premier Offshoring Locations</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">🇵🇭 Philippines</h4>
                      <p className="text-sm text-gray-700">The gold standard for offshore staffing with excellent English and Western cultural alignment</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">🇲🇽 Mexico</h4>
                      <p className="text-sm text-gray-700">Nearshore offshoring for US businesses with timezone advantages</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">🇻🇳 Vietnam</h4>
                      <p className="text-sm text-gray-700">Emerging technical talent with cost advantages</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">🇪🇺 Eastern Europe</h4>
                      <p className="text-sm text-gray-700">Specialized technical roles and advanced development capabilities</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-lime-50 border-l-4 border-lime-600 p-6">
                <p className="text-gray-700">
                  The Philippines has emerged as the premier destination for offshoring, particularly for Australian, New Zealand, and US businesses, due to cultural alignment, English proficiency, and a business environment structured to support Western companies through comprehensive outsourcing solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Era Section */}
        <div className="mb-16">
          <Card className="border-lime-200 bg-gradient-to-br from-purple-50 to-blue-50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The AI Era: How Outsourcing vs Offshoring Has Changed
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                In 2025, AI tools have fundamentally changed the outsourcing vs offshoring landscape. While AI has automated many basic tasks, it's created a new category of work: AI-assisted operations.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Enhanced Offshoring Advantages</h3>
                <p className="text-gray-700 mb-4">
                  The best offshore teams today function as AI-augmented extensions of your business. They:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">• Use ChatGPT and Claude for communications and content</p>
                  <p className="text-gray-700">• Create process documentation with AI assistance</p>
                  <p className="text-gray-700">• Build automations with Zapier and Make</p>
                  <p className="text-gray-700">• Manage projects using AI-enhanced tools</p>
                  <p className="text-gray-700">• Create consistent outputs using your AI prompts and workflows</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Why This Favors Offshoring</h4>
                <p className="text-gray-700">
                  With offshoring, you can train your team to use AI tools exactly as you would, creating a consistent technological ecosystem. With traditional outsourcing, you rarely have influence over how providers use AI in their workflows, leading to inconsistent outputs and missed opportunities for integration.
                </p>
                <p className="text-gray-700 mt-4">
                  This shift has actually increased the value proposition of offshoring while highlighting the limitations of traditional outsourcing models when it comes to AI integration and operational consistency.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Implementation Roadmaps */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Implementation: Outsourcing vs Offshoring Roadmaps
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-lime-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-lime-700 mb-6">🎯 Outsourcing Implementation</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-lime-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">1</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Define Requirements</h4>
                        <p className="text-sm text-gray-700">Create detailed project brief</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-lime-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">2</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Research Providers</h4>
                        <p className="text-sm text-gray-700">Find specialized firms</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-lime-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">3</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Request Proposals</h4>
                        <p className="text-sm text-gray-700">Get 3-5 detailed quotes</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-lime-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">4</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Evaluate & Select</h4>
                        <p className="text-sm text-gray-700">Choose based on value</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-lime-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">5</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Contract Clearly</h4>
                        <p className="text-sm text-gray-700">Define deliverables</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-lime-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">6</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Manage Relationship</h4>
                        <p className="text-sm text-gray-700">Set communication protocols</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-blue-700 mb-6">🌏 Offshoring Implementation</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">1</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Identify Functions</h4>
                        <p className="text-sm text-gray-700">Determine offshore roles</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">2</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Document Processes</h4>
                        <p className="text-sm text-gray-700">Create detailed SOPs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">3</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Choose Partner</h4>
                        <p className="text-sm text-gray-700">Select staffing provider</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">4</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Recruitment</h4>
                        <p className="text-sm text-gray-700">Find right talent</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">5</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Onboarding</h4>
                        <p className="text-sm text-gray-700">Structured training program</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">6</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Management</h4>
                        <p className="text-sm text-gray-700">Daily communication setup</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 border-l-4 border-gray-400 p-6">
                <h4 className="font-bold text-gray-900 mb-3">Critical Success Factors</h4>
                <p className="text-gray-700 mb-3">
                  <strong>For Outsourcing:</strong> Clear specifications, defined quality standards, realistic timelines, and proper vendor management
                </p>
                <p className="text-gray-700">
                  <strong>For Offshoring:</strong> Documented processes, cultural integration, ongoing training, and consistent management practices
                </p>
                <p className="text-gray-700 mt-4">
                  Both models require investment in setup and management, but offshoring typically provides better long-term scalability while outsourcing offers faster short-term results for specific projects. Our supporting services help ensure successful implementation of either approach.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Critical Questions */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Critical Questions: Outsourcing vs Offshoring Decision
              </h2>
              <p className="text-gray-700 mb-8">
                Before choosing between outsourcing vs offshoring, honestly answer these critical questions:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">1. Management Capacity</h4>
                  <p className="text-gray-700">How much ongoing oversight can you realistically provide? (Less = outsourcing)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">2. Cultural Alignment</h4>
                  <p className="text-gray-700">How important is brand representation and cultural fit? (More = offshoring)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">3. Process Documentation</h4>
                  <p className="text-gray-700">Do you have SOPs or ability to create them? (Required for offshoring)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">4. Timeline</h4>
                  <p className="text-gray-700">Is this one-time need or ongoing function? (One-time = outsourcing)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">5. System Access</h4>
                  <p className="text-gray-700">How much data sharing and tool access is required? (More = offshoring)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">6. Budget Structure</h4>
                  <p className="text-gray-700">Project-based or ongoing investment? (Project = outsourcing)</p>
                </div>
              </div>

              <div className="mt-6 bg-lime-50 border-l-4 border-lime-600 p-6">
                <p className="text-gray-700">
                  By carefully considering these outsourcing vs offshoring factors, you can make informed decisions that align with your business capabilities, growth objectives, and operational requirements.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Conclusion */}
        <div className="mb-16">
          <Card className="border-lime-200 bg-lime-50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Choose the Right Model for Your Business Growth
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                When I started ShoreAgents, it was because I had firsthand experience with the confusion around these models. I'd tried "outsourcing" my real estate operations only to discover what I really needed was offshoring—dedicated staff who would become part of my team, not just vendors delivering services.
              </p>
              <p className="text-lg text-gray-700">
                The most important thing isn't just cost savings (though those are significant). It's about choosing the outsourcing vs offshoring model that aligns with your business objectives: If you want hands-off project completion, outsource. If you want to build scalable team capacity that grows with you, offshore.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Make the Right Choice?</h2>
          <p className="text-xl mb-8 opacity-90">
            Understanding the outsourcing vs offshoring difference is the first step. Now get personalized guidance on which model fits your business best and how to implement it successfully.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg">
              🎯 Explore Strategic Solutions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg">
              📞 Get Personalized Guidance
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

