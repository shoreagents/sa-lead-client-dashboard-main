'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2,
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Users,
  Clock,
  Shield,
  Target,
  AlertCircle,
  Briefcase,
  Award,
  Zap
} from 'lucide-react';
import Image from 'next/image';

export default function WhatIsOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <Badge className="bg-red-600 text-white px-4 py-2 text-lg">
              🚨 CRITICAL: 73% of Businesses Misunderstand What Outsourcing Actually Is
            </Badge>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            What Is Outsourcing? The Complete Guide for 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-4">
            While smart businesses leverage strategic outsourcing for 200%+ ROI, others waste money on glorified freelancing. Understanding the difference is worth millions.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-8">
            <span><strong>Author:</strong> Stephen Atcheler</span>
            <span><strong>Published:</strong> May 19, 2025</span>
            <span><strong>Views:</strong> 1,433</span>
          </div>
          
          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=600&fit=crop"
              alt="Business professionals collaborating in modern office environment"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg">
              Explore Outsourcing Solutions
            </Button>
            <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg">
              Schedule Consultation
            </Button>
          </div>

          {/* Stats Table */}
          <Card className="border-lime-200 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-semibold text-gray-900">Global Outsourcing Market 2025</td>
                      <td className="py-3 px-4 text-right text-lime-700 font-bold">$731B</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-semibold text-gray-900">Average Cost Reduction</td>
                      <td className="py-3 px-4 text-right text-lime-700 font-bold">78%</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-semibold text-gray-900">Global Operations</td>
                      <td className="py-3 px-4 text-right text-lime-700 font-bold">24/7</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-gray-900">ROI When Done Right</td>
                      <td className="py-3 px-4 text-right text-lime-700 font-bold">200%+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Personal Story */}
        <div className="mb-16">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <h2 className="text-3xl font-bold text-gray-900">
                  The $150,000 Lesson That Taught Me What Outsourcing Really Means
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  Back in 2012, I thought I understood outsourcing. I hired what I believed was a "trained" virtual assistant from a Philippines company. What I got was someone working from home with chickens in the background who would disappear for days.
                </p>
                <p className="mb-6">
                  That expensive lesson taught me the difference between real outsourcing and what most people think outsourcing means. After 500+ successful placements and building ShoreAgents into Australia's leading BPO provider, I can tell you exactly what outsourcing actually is – and what it isn't.
                </p>
                <p className="mb-8">
                  This comprehensive guide breaks down everything you need to know about modern business outsourcing, from basic definitions to strategic implementation across different industries.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Definition */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Outsourcing? The Core Definition
              </h2>
              <div className="bg-lime-50 border-l-4 border-lime-600 p-6 mb-6">
                <p className="text-xl font-semibold text-gray-900 mb-2">
                  <strong>Outsourcing Definition:</strong>
                </p>
                <p className="text-lg text-gray-700">
                  The strategic practice of contracting specific business functions to external organizations to achieve greater efficiency, access specialized skills, and reduce operational costs while allowing companies to focus on core competencies.
                </p>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  In simple terms, outsourcing means paying an external company to handle specific business tasks so you can focus on what you do best. Instead of hiring, training, and managing employees for every function, you partner with specialists who already have the systems, skills, and infrastructure in place.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Key Components of Modern Outsourcing</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-1" />
                    <div>
                      <strong>External Partnership:</strong> You work with an established business, not individual freelancers
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-1" />
                    <div>
                      <strong>Specialized Expertise:</strong> They bring proven skills and experience to your specific challenges
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-1" />
                    <div>
                      <strong>Outcome-Focused:</strong> You define what you need; they deliver results without you managing the process
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-1" />
                    <div>
                      <strong>Infrastructure Included:</strong> They provide the office space, technology, and management systems
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700">
                  This is fundamentally different from hiring employees or working with freelancers. With proper outsourcing services, you get predictable results without the complexity of employment management.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Types of Outsourcing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Types of Outsourcing: Understanding the Landscape
          </h2>
          
          <div className="space-y-6 mb-8">
            <Card className="border-lime-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Building2 className="w-8 h-8 text-lime-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Business Process Outsourcing (BPO)</h3>
                    <p className="text-gray-700 mb-4">
                      The delegation of entire business processes to external providers. This includes customer service, accounting, human resources, and administrative functions. BPO providers manage the complete workflow from start to finish.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Globe className="w-8 h-8 text-lime-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Information Technology Outsourcing (ITO)</h3>
                    <p className="text-gray-700 mb-4">
                      Contracting technology services including software development, network management, cybersecurity, and technical support. This allows businesses to access cutting-edge technology without maintaining large internal IT departments.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Award className="w-8 h-8 text-lime-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Knowledge Process Outsourcing (KPO)</h3>
                    <p className="text-gray-700 mb-4">
                      High-value services requiring specialized knowledge and analytical skills. This includes market research, financial analysis, legal research, and data analytics. KPO goes beyond routine tasks to provide strategic insights.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Briefcase className="w-8 h-8 text-lime-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Industry-Specific Outsourcing</h3>
                    <p className="text-gray-700 mb-4">
                      Specialized services tailored to specific industries:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Real estate outsourcing for property management and transaction coordination</li>
                      <li>• Construction outsourcing for drafting and project management</li>
                      <li>• Legal outsourcing for document review and research</li>
                      <li>• Accounting outsourcing for bookkeeping and financial reporting</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-lime-200 bg-lime-50">
            <CardContent className="p-6">
              <p className="text-gray-700">
                Each type serves different business needs, and the most successful companies often combine multiple approaches. The key is understanding which outsourcing solutions align with your specific challenges and growth objectives.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Outsourcing vs. Offshoring vs. Staff Leasing vs. Freelancing
              </h2>
              <p className="text-gray-700 mb-6">
                Business leaders often confuse these different models. Understanding the distinctions is crucial for making the right choice.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-lime-50">
                      <th className="border border-lime-200 p-3 text-left font-bold text-gray-900">Model</th>
                      <th className="border border-lime-200 p-3 text-left font-bold text-gray-900">Management</th>
                      <th className="border border-lime-200 p-3 text-left font-bold text-gray-900">Infrastructure</th>
                      <th className="border border-lime-200 p-3 text-left font-bold text-gray-900">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 p-3 font-semibold">Outsourcing</td>
                      <td className="border border-gray-200 p-3">Provider manages</td>
                      <td className="border border-gray-200 p-3">Provider provides</td>
                      <td className="border border-gray-200 p-3">Complete processes, specialized skills</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-3 font-semibold">Offshoring</td>
                      <td className="border border-gray-200 p-3">You manage directly</td>
                      <td className="border border-gray-200 p-3">You provide</td>
                      <td className="border border-gray-200 p-3">Cost reduction only</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3 font-semibold">Staff Leasing</td>
                      <td className="border border-gray-200 p-3">You manage daily</td>
                      <td className="border border-gray-200 p-3">Provider provides</td>
                      <td className="border border-gray-200 p-3">Ongoing team extension</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-3 font-semibold">Freelancing</td>
                      <td className="border border-gray-200 p-3">Minimal oversight</td>
                      <td className="border border-gray-200 p-3">Freelancer provides</td>
                      <td className="border border-gray-200 p-3">Small projects, creative work</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-6">
                <h4 className="font-bold text-gray-900 mb-3">Why These Distinctions Matter</h4>
                <p className="text-gray-700">
                  True outsourcing means you get results without managing the process. The provider handles everything from recruitment to quality control to infrastructure. You focus on defining what you need and reviewing what you get.
                </p>
                <p className="text-gray-700 mt-3">
                  Most businesses think they're outsourcing when they're actually just hiring remote freelancers or offshore employees. This confusion leads to poor results and reinforces negative perceptions about professional outsourcing services.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Strategic Benefits of Outsourcing
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-lime-600 text-white rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Cost Optimization Without Quality Compromise</h4>
                    <p className="text-gray-700">
                      Professional outsourcing typically reduces operational costs by 60-80% compared to local hiring, while often improving quality through specialized expertise and proven systems.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-lime-600 text-white rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Access to Specialized Expertise</h4>
                    <p className="text-gray-700">
                      Instead of training new employees on complex processes, you immediately access teams with proven experience in your specific industry or function.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-lime-600 text-white rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Scalability and Flexibility</h4>
                    <p className="text-gray-700">
                      Scale operations up or down based on demand without the complexities of hiring, training, or layoffs. This is particularly valuable for seasonal businesses or rapid growth phases.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-lime-600 text-white rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Risk Mitigation</h4>
                    <p className="text-gray-700">
                      Professional providers handle compliance, data security, and quality control. They maintain backup systems, alternative staff, and disaster recovery procedures that would be expensive for individual businesses to implement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-lime-600 text-white rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">24/7 Operations Capability</h4>
                    <p className="text-gray-700">
                      Geographic distribution allows for continuous operations across time zones, enabling faster turnaround times and improved customer service capabilities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-lime-50 border-l-4 border-lime-600 p-6">
                <p className="text-gray-700">
                  These benefits compound over time. Businesses using strategic outsourcing solutions often find they can take on larger projects, serve more clients, and compete more effectively in their markets.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Common Misconceptions */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Common Outsourcing Misconceptions Debunked
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-red-700 mb-2">Myth: "Outsourcing Means Lower Quality"</h3>
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <p className="text-gray-700">
                      <strong>Reality:</strong> Professional providers often deliver higher quality than internal teams because they specialize in specific functions, have established quality control systems, and their reputation depends on consistent results.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-red-700 mb-2">Myth: "You Lose Control When You Outsource"</h3>
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <p className="text-gray-700">
                      <strong>Reality:</strong> You actually gain control by working with providers who have transparent processes, regular reporting, and performance metrics. You define the outcomes; they handle the execution.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-red-700 mb-2">Myth: "Outsourcing is Only About Cost Cutting"</h3>
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <p className="text-gray-700">
                      <strong>Reality:</strong> Modern outsourcing is about accessing capabilities you couldn't build internally. Cost reduction is a benefit, but not the primary purpose for most successful implementations.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-red-700 mb-2">Myth: "Outsourcing Takes Jobs Away from Local Workers"</h3>
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <p className="text-gray-700">
                      <strong>Reality:</strong> Strategic outsourcing often enables business growth that creates more local jobs. When administrative and routine tasks are handled externally, internal teams can focus on higher-value activities that drive expansion.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Industry Examples */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How Different Industries Use Outsourcing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real Estate Industry</h3>
                <p className="text-gray-700 mb-3">
                  Real estate professionals use real estate outsourcing for transaction coordination, listing management, lead nurturing, and property research. This allows agents to focus on client relationships and deal closing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Construction Industry</h3>
                <p className="text-gray-700 mb-3">
                  Construction companies leverage construction outsourcing for CAD drafting, project documentation, estimating, and permit applications. This enables faster project turnaround and more competitive bidding.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Industry</h3>
                <p className="text-gray-700 mb-3">
                  Law firms use legal outsourcing for document review, legal research, case preparation, and administrative support. This allows attorneys to focus on client strategy and court appearances.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare Industry</h3>
                <p className="text-gray-700 mb-3">
                  Healthcare organizations outsource medical coding, insurance claim processing, appointment scheduling, and medical transcription. This improves accuracy while reducing administrative overhead.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Services</h3>
                <p className="text-gray-700 mb-3">
                  Financial firms use accounting outsourcing for bookkeeping, tax preparation, financial analysis, and compliance reporting. This ensures accuracy while providing access to specialized expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Common Thread</h3>
                <p className="text-gray-700 mb-3">
                  The key across all industries is identifying functions that can be clearly defined, systematically executed, and objectively measured. These are ideal candidates for strategic outsourcing implementation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* When to Outsource */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                When Should You Consider Outsourcing?
              </h2>
              
              <div className="bg-lime-50 border-l-4 border-lime-600 p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Clear Indicators It's Time to Outsource</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">• Repetitive tasks consume 30%+ of your team's time</p>
                  <p className="text-gray-700">• You need specialized skills for limited engagements</p>
                  <p className="text-gray-700">• Quality requirements exceed internal capabilities</p>
                  <p className="text-gray-700">• Seasonal demands create staffing challenges</p>
                  <p className="text-gray-700">• Cost of hiring exceeds business value generated</p>
                  <p className="text-gray-700">• Growth opportunities are limited by internal capacity</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">When NOT to Outsource</h3>
                <p className="text-gray-700">
                  Certain functions should remain internal: core strategic planning, key client relationships, proprietary product development, and sensitive financial decisions. These require deep company knowledge and direct accountability.
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
                Understanding Outsourcing Opens Growth Opportunities
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Outsourcing is more than a cost-reduction strategy—it's a way to access capabilities that would be impossible to build internally while freeing your team to focus on what they do best. The key is understanding the different models available and choosing the right approach for your specific needs.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're a real estate professional looking to scale your operations, a construction company needing specialized drafting support, or any business owner seeking to optimize your operations, understanding what outsourcing really means is the first step toward building a more efficient and profitable business.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Outsourcing?</h2>
          <p className="text-xl mb-8 opacity-90">
            Understanding what outsourcing actually means is the first step. Now discover how professional outsourcing services can transform your business operations with 60-80% cost savings and 200%+ ROI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg">
              🎯 Explore Outsourcing Solutions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg">
              📞 Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

