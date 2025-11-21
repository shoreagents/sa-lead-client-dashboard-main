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
  Trophy,
  Shield,
  Calculator,
  TrendingDown,
  Briefcase,
  FileText,
  HelpCircle,
  MapPin,
  UserCheck,
  Percent,
  Package,
  Check
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function VirtualRealEstateAssistantPricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[{"name":"Virtual Assistants","url":"https://www.shoreagents.com/virtual-assistant"},{"name":"Real Estate Virtual Assistant","url":"https://www.shoreagents.com/real-estate-virtual-assistant"},{"name":"Pricing Guide","url":"https://www.shoreagents.com/virtual-real-estate-assistant-pricing"}]} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              7 Countries Compared - Save 65% in 2025
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Virtual Real Estate<br />
              <span className="text-lime-600">Assistant Pricing</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Understanding virtual real estate assistant pricing is crucial for cost-effective growth. Smart agencies 
              save 60-78% while getting better quality through strategic partnerships. Complete 2025 pricing guide 
              with comprehensive analysis and strategic guidance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/sales" 
                className="inline-flex items-center px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors"
              >
                Get Pricing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/what-does-a-real-estate-virtual-assistant-do" 
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-lime-600 transition-colors"
              >
                Explore VA Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Key Stats */}
        <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200 mb-16">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete 2025 Pricing Guide</h3>
              <p className="text-gray-700">Comprehensive pricing analysis for real estate professionals</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <DollarSign className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">$14,300</div>
                <div className="text-gray-900 font-semibold">Annual Cost (Philippines)</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <TrendingDown className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-red-600 mb-2">$72,800</div>
                <div className="text-gray-900 font-semibold">Annual Cost (USA Local)</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Percent className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">78%</div>
                <div className="text-gray-900 font-semibold">Cost Savings</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Clock className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">160</div>
                <div className="text-gray-900 font-semibold">Hours per Month</div>
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
                  CRITICAL: 89% of Real Estate Businesses Overpay for Virtual Assistants
                </h3>
                <p className="text-gray-700">
                  Understanding virtual real estate assistant pricing is crucial for cost-effective growth. Smart agencies 
                  save 60-78% while getting better quality through strategic partnerships.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Introduction */}
        <section className="mb-16">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Understanding virtual real estate assistant pricing is crucial for making informed decisions about growing 
              your real estate business cost-effectively. With the digital transformation of real estate operations, 
              virtual assistants have become essential team members for agencies worldwide.
            </p>
            <p className="mb-6">
              Most professional real estate virtual assistants typically charge $25 USD or above for their services. 
              Experienced VAs specializing in complex real estate operations might command $45 USD per hour or more.
            </p>
            <p className="mb-6">
              This comprehensive guide analyzes virtual real estate assistant pricing across multiple countries, compares 
              different hiring models, and provides you with the data needed to make the best decision for your real 
              estate virtual assistant investment.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* What Determines Pricing */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Calculator className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Determines Pricing?</h2>
              <p className="text-lg text-gray-600">Key factors influencing virtual assistant costs</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Virtual real estate assistant pricing varies significantly based on several key factors. The rates depend 
              heavily on experience level, specialized skill sets, and the complexity of real estate tasks they can handle. 
              However, the most significant factor influencing cost is geographic location.
            </p>
            <p className="mb-6">
              Countries like the Philippines offer substantially lower labor costs due to favorable economic conditions 
              and lower living expenses compared to developed markets like the USA, Australia, and the UK. This economic 
              advantage has made the Philippines a premier destination for real estate outsourcing services.
            </p>

            <Card className="bg-gradient-to-br from-lime-50 to-green-50 border-lime-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-10 h-10 text-lime-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Perspective</h3>
                    <p className="text-gray-700 mb-3">
                      The average annual salary for an entry-level virtual assistant in Australia is <strong>$60,091 AUD</strong>, 
                      while the equivalent role in the Philippines costs approximately <strong>$21,385 AUD</strong>.
                    </p>
                    <p className="text-gray-900 font-semibold">
                      This means you could potentially hire three skilled team members for the cost of one local employee.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="mt-6 text-center text-lg">
              The excellent news is that partnering with ShoreAgents provides a cost-effective solution that delivers 
              professional results without straining your budget.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Country Comparison */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <MapPin className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Salary Comparison by Country</h2>
              <p className="text-lg text-gray-600">Real estate virtual assistant rates across major markets</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Let's analyze real estate virtual assistant rates across major markets to help you make an informed decision. 
              The data below reflects comprehensive pricing from the Philippines, including all fees, benefits, and 
              government obligations.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Australia */}
              <Card className="bg-white border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🇦🇺</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Australia (Local)</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-2">$60,091</div>
                  <div className="text-gray-600">AUD Annual Salary</div>
                </CardContent>
              </Card>

              {/* Philippines */}
              <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🇵🇭</div>
                  <Badge className="bg-lime-600 text-white mb-2 text-xs">Best Value</Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Philippines (Remote)</h3>
                  <div className="text-3xl font-bold text-lime-600 mb-2">$21,385</div>
                  <div className="text-gray-600">AUD Annual Salary</div>
                </CardContent>
              </Card>

              {/* Canada */}
              <Card className="bg-white border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🇨🇦</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Canada (Local)</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-2">$52,000</div>
                  <div className="text-gray-600">CAD Annual Salary</div>
                </CardContent>
              </Card>

              {/* USA */}
              <Card className="bg-white border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🇺🇸</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">USA (Local)</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-2">$45,000</div>
                  <div className="text-gray-600">USD Annual Salary</div>
                </CardContent>
              </Card>

              {/* UK */}
              <Card className="bg-white border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🇬🇧</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">United Kingdom (Local)</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-2">£28,000</div>
                  <div className="text-gray-600">GBP Annual Salary</div>
                </CardContent>
              </Card>

              {/* New Zealand */}
              <Card className="bg-white border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🇳🇿</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">New Zealand (Local)</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-2">$55,000</div>
                  <div className="text-gray-600">NZD Annual Salary</div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-blue-50 border-blue-200 mt-8">
              <CardContent className="p-6">
                <p className="text-gray-700">
                  <strong>Note:</strong> While hiring talented professionals from the Philippines offers substantial cost 
                  savings, they may initially lack specific knowledge about local real estate regulations and market nuances. 
                  However, experienced real estate virtual assistants can quickly adapt to your specific requirements with 
                  proper training.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* BPO vs Freelance */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Users className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">BPO Company vs Freelance</h2>
              <p className="text-lg text-gray-600">Complete cost analysis and comparison</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              When evaluating real estate virtual assistant companies, the Philippines consistently emerges as the optimal 
              choice for cost-effectiveness and quality. The global freelance market has created pricing challenges, as 
              freelancers now have access to international clients willing to pay premium rates.
            </p>
            <p className="mb-8">
              A critical consideration is commitment level. Full-time team members from ShoreAgents dedicate themselves 
              exclusively to your business success. This contrasts sharply with freelancers who often juggle multiple 
              clients simultaneously, potentially compromising focus and availability when you need them most.
            </p>

            <Card className="bg-white border-gray-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-lime-600 text-white">
                      <tr>
                        <th className="text-left p-4 font-semibold">Comparison Factor</th>
                        <th className="text-left p-4 font-semibold">ShoreAgents Virtual Assistants</th>
                        <th className="text-left p-4 font-semibold">Freelance Virtual Assistants</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900">Monthly Cost</td>
                        <td className="p-4 text-lime-600 font-bold">$1,191 USD</td>
                        <td className="p-4 text-gray-700">$2,720+ USD</td>
                      </tr>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900">Commitment Level</td>
                        <td className="p-4 text-gray-700">Full-time dedicated</td>
                        <td className="p-4 text-gray-700">Multiple clients</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900">Recruitment Process</td>
                        <td className="p-4 text-gray-700">Handled by ShoreAgents</td>
                        <td className="p-4 text-gray-700">Your responsibility</td>
                      </tr>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900">Infrastructure</td>
                        <td className="p-4 text-gray-700">Professional office setup</td>
                        <td className="p-4 text-gray-700">Home-based (variable)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900">Backup & Support</td>
                        <td className="p-4 text-gray-700">24/7 technical support</td>
                        <td className="p-4 text-gray-700">Limited or none</td>
                      </tr>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900">Employee Benefits</td>
                        <td className="p-4 text-gray-700">Included in cost</td>
                        <td className="p-4 text-gray-700">Additional expense</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-gray-900">Quality Assurance</td>
                        <td className="p-4 text-gray-700">Ongoing monitoring</td>
                        <td className="p-4 text-gray-700">Self-managed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-lime-50 border-lime-200 mt-8">
              <CardContent className="p-6">
                <p className="text-gray-700">
                  <strong>Key Insight:</strong> Freelancer expenses, whether hourly or project-based, can quickly exceed 
                  budget projections. This contrasts sharply with hiring full-time professionals through ShoreAgents. At 
                  <strong className="text-lime-600"> $14,300 USD annually</strong>, you receive comprehensive benefits and 
                  employment security as part of the complete package.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Annual Investment Analysis */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Annual Investment Analysis</h2>
              <p className="text-lg text-gray-600">Transparent cost comparison across service models</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              For transparent cost comparison, local VAs in the USA typically charge around $35 USD per hour, resulting 
              in estimated monthly costs of $8,400 USD. This excludes recruitment fees, which typically add 10-13% of 
              annual salary costs.
            </p>

            <Card className="bg-white border-gray-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-lime-600 text-white">
                      <tr>
                        <th className="text-left p-4 font-semibold">Country/Service</th>
                        <th className="text-left p-4 font-semibold">Local VA Annual Cost</th>
                        <th className="text-left p-4 font-semibold">Freelanced Philippines</th>
                        <th className="text-left p-4 font-semibold">ShoreAgents</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900">United States</td>
                        <td className="p-4 text-gray-700">$72,800 USD</td>
                        <td className="p-4 text-gray-700">$32,640 USD</td>
                        <td className="p-4 text-lime-600 font-bold">$14,300 USD</td>
                      </tr>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900">Australia</td>
                        <td className="p-4 text-gray-700">$60,091 AUD</td>
                        <td className="p-4 text-gray-700">$32,640 AUD</td>
                        <td className="p-4 text-lime-600 font-bold">$21,385 AUD</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900">Canada</td>
                        <td className="p-4 text-gray-700">$52,000 CAD</td>
                        <td className="p-4 text-gray-700">$35,880 CAD</td>
                        <td className="p-4 text-lime-600 font-bold">$19,305 CAD</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-4 font-semibold text-gray-900">United Kingdom</td>
                        <td className="p-4 text-gray-700">£28,000 GBP</td>
                        <td className="p-4 text-gray-700">£26,208 GBP</td>
                        <td className="p-4 text-lime-600 font-bold">£11,440 GBP</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Membership Levels */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Trophy className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Membership Levels and Volume Discounts</h2>
              <p className="text-lg text-gray-600">Scale your team efficiently with tiered pricing</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              For businesses requiring single team member solutions, we accommodate this need with transparent setup fees. 
              We exclusively provide full-time real estate virtual assistants designed to accelerate your business objectives.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Bronze */}
              <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-300">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">🥉</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Bronze Membership</h3>
                  <div className="text-lg text-gray-700 mb-6">1-5 Team Members</div>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Standard Rates Apply</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Perfect for Small Teams</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Full-time Dedicated VAs</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Silver */}
              <Card className="bg-gradient-to-br from-gray-100 to-gray-200 border-gray-400">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">🥈</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Silver Membership</h3>
                  <div className="text-lg text-gray-700 mb-2">6-15 Team Members</div>
                  <Badge className="bg-lime-600 text-white mb-4">20% Discount</Badge>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">20% Volume Discount</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Growing Businesses</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Enhanced Support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Gold */}
              <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-400">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">🥇</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Gold Membership</h3>
                  <div className="text-lg text-gray-700 mb-2">16+ Team Members</div>
                  <Badge className="bg-lime-600 text-white mb-4">30% Discount</Badge>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">30% Volume Discount</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Enterprise Solutions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Premium Priority Support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-lime-50 border-lime-200 mt-8">
              <CardContent className="p-6 text-center">
                <p className="text-gray-700 text-lg">
                  You can also build complete teams through ShoreAgents while enjoying substantial volume discounts for 
                  scaling your operations efficiently.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* What's Included */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Package className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What's Included in Your Monthly Investment</h2>
              <p className="text-lg text-gray-600">Comprehensive package with no hidden fees</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Monthly costs vary according to roles and membership tiers. Philippine employment law requires 13th-month 
              compensation, distributed annually in December. We calculate and include prorated portions in your monthly 
              billing for transparency.
            </p>

            <Card className="bg-gradient-to-br from-lime-50 to-green-50 border-lime-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Complete Monthly Package Includes:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: Clock, text: 'Full-time dedicated virtual assistant (160 hours/month)' },
                    { icon: Shield, text: 'Government benefits and compliance costs' },
                    { icon: Building2, text: 'Professional office infrastructure' },
                    { icon: Zap, text: 'Backup power and internet connectivity' },
                    { icon: Target, text: 'Ongoing training and development' },
                    { icon: UserCheck, text: '24/7 technical support' },
                    { icon: CheckCircle2, text: 'Quality assurance monitoring' },
                    { icon: Award, text: 'ShoreAgents membership benefits' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                      <item.icon className="w-6 h-6 text-lime-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* FAQs */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <HelpCircle className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">Common questions about virtual assistant pricing</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  How much does a virtual real estate assistant cost per month?
                </h3>
                <p className="text-gray-700">
                  Virtual real estate assistant pricing varies by location and service model. ShoreAgents provides full-time 
                  virtual assistants starting at $1,191 USD per month, including all benefits and infrastructure costs. Local 
                  assistants typically cost $3,000-$6,000+ monthly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  What factors affect virtual assistant pricing?
                </h3>
                <p className="text-gray-700">
                  Key factors include geographic location, experience level, specialized skills, full-time vs part-time 
                  commitment, and service model (direct hire vs BPO company). Location typically has the most significant 
                  impact on virtual real estate assistant pricing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Are there setup fees for virtual assistants?
                </h3>
                <p className="text-gray-700">
                  ShoreAgents charges a one-time setup fee that covers recruitment, screening, and onboarding processes. 
                  This investment ensures you receive a qualified, trained virtual assistant ready to contribute immediately 
                  to your business.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  How do volume discounts work?
                </h3>
                <p className="text-gray-700">
                  ShoreAgents offers tiered membership with volume discounts: Bronze (1-5 members), Silver (6-15 members, 
                  20% discount), and Gold (16+ members, 30% discount). Larger teams achieve significant per-person cost savings.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  What's included in the monthly cost?
                </h3>
                <p className="text-gray-700">
                  Monthly costs include your virtual assistant's salary, government benefits, professional office infrastructure, 
                  backup systems, ongoing training, quality assurance, and ShoreAgents membership benefits. No hidden fees or 
                  surprise charges.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Conclusion */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-lime-50 to-green-50 border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Making the Right Choice for Your Business
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  This comprehensive analysis demonstrates the significant cost differences between local staff, offshore 
                  professionals, and freelance alternatives. Understanding these virtual real estate assistant pricing models 
                  empowers you to make strategic decisions that align with your real estate business objectives.
                </p>
                <div className="bg-white border-l-4 border-lime-600 p-6 rounded mt-6">
                  <p className="text-gray-900 font-semibold">
                    Virtual real estate assistant pricing offers compelling advantages compared to traditional staffing 
                    solutions. The combination of cost savings, professional quality, and dedicated support makes offshore 
                    virtual assistants a smart investment for growing real estate businesses.
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
            Ready to Save 60-78% on Virtual Assistant Costs?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Stop overpaying for virtual assistants. Get professional, full-time virtual assistants at a fraction of the 
            cost with ShoreAgents. Comprehensive benefits, no hidden fees, and volume discounts available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sales"
              className="inline-flex items-center px-8 py-4 bg-white text-lime-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Get Pricing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/what-does-a-real-estate-virtual-assistant-do"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-lime-600 font-bold text-lg rounded-lg transition-colors"
            >
              Explore VA Solutions
            </Link>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
