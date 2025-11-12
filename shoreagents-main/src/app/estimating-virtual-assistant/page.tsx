'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  DollarSign,
  Target,
  Zap,
  Award,
  Phone,
  AlertCircle,
  BarChart,
  HelpCircle,
  Ruler,
  Monitor,
  Building2,
  Settings,
  Lightbulb,
  Home,
  Activity,
  Factory,
  Heart,
  ClipboardList,
  RefreshCw,
  Cloud,
  Cpu,
  Globe,
  MessageCircle,
  X,
  Wrench,
  Calculator
} from 'lucide-react';
import Image from 'next/image';

export default function EstimatingVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Estimating Virtual Assistant: Your Expert Construction Cost Analysis Partner
          </h1>

          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop"
              alt="Professional estimating virtual assistant performing construction quantity takeoff and cost analysis with blueprints and estimating software"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Professional quantity takeoff specialists, cost estimators, and bid preparation experts who deliver 75% faster estimates with 92% accuracy while reducing costs by 65%
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Book a Strategy Call
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg font-semibold">
              How It Works
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg font-semibold">
              See Pricing
              <DollarSign className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            In today's hyper-competitive construction industry, winning profitable projects depends on one critical factor: accurate, competitive estimating delivered faster than your competition. An estimating virtual assistant transforms your preconstruction workflow by combining professional-grade quantity takeoff expertise, advanced software proficiency, and deep construction knowledge—all delivered at costs that fundamentally change your business economics.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Construction estimating virtual assistants represent the evolution of professional quantity surveying and cost analysis. These specialists bring engineering-level education, advanced software mastery, and years of construction industry experience to deliver the precision your projects demand. Unlike general administrative support, estimating VAs understand the nuanced differences between structural steel grades, concrete mix designs, and specialty construction methods that can make or break project profitability.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you're a general contractor pursuing large commercial developments, a specialty contractor focusing on specific trades, or a construction management firm handling diverse project portfolios, the right estimating virtual assistant becomes your secret weapon for winning more work at better margins.
          </p>
        </div>

        {/* Crisis Section */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="w-10 h-10 text-red-600 mr-3" />
            The Construction Estimating Crisis: Why Traditional Methods Are Failing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-red-200 bg-white">
              <CardContent className="p-6">
                <TrendingUp className="w-8 h-8 text-red-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Skilled Labor Shortage Crisis</h3>
                <p className="text-gray-700 leading-relaxed">
                  The construction industry faces a critical shortage of experienced estimators. With 73% of firms struggling to find qualified estimating professionals, projects are delayed and opportunities missed due to inadequate estimating capacity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-white">
              <CardContent className="p-6">
                <DollarSign className="w-8 h-8 text-red-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Escalating Employment Costs</h3>
                <p className="text-gray-700 leading-relaxed">
                  Senior estimators command $85,000-$120,000+ annually, plus benefits, office space, and software licensing. Small to mid-size contractors can't justify full-time positions for fluctuating workloads.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-white">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-red-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Deadline Pressure Reality</h3>
                <p className="text-gray-700 leading-relaxed">
                  Bid deadlines are getting tighter while project complexity increases. Manual estimating methods can't keep pace with the speed required to compete effectively in today's market.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-white">
              <CardContent className="p-6">
                <Target className="w-8 h-8 text-red-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Accuracy Demands</h3>
                <p className="text-gray-700 leading-relaxed">
                  Estimation errors destroy profitability. With margins typically 2-8%, a 10% estimation error can eliminate all profit or worse. The pressure for precision has never been higher.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-red-300 bg-red-100">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">The Bottom Line: Traditional Estimating Methods Are No Longer Viable</h3>
              <p className="text-lg text-gray-700 font-semibold">
                Construction companies that don't adapt their estimating approach will lose market share to competitors who leverage professional virtual estimating teams.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What Is Section */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Calculator className="w-8 h-8 text-lime-600 mr-3" />
            What Is an Estimating Virtual Assistant? The Complete Definition
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            An estimating virtual assistant is a highly trained construction professional who specializes in quantity takeoff, cost analysis, and bid preparation services delivered remotely. These specialists combine formal engineering or construction management education with advanced software proficiency and deep industry knowledge to provide accurate, detailed project estimates that help contractors win profitable work.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Competencies That Define Professional Estimating VAs</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Ruler className="w-8 h-8 text-lime-600 mb-3" />
                <h4 className="text-lg font-bold text-gray-900 mb-3">Technical Proficiency</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Blueprint reading and interpretation</li>
                  <li>• Specification analysis and code compliance</li>
                  <li>• Material quantity calculations and waste factors</li>
                  <li>• Labor productivity analysis and crew sizing</li>
                  <li>• Equipment requirements and operating costs</li>
                  <li>• Structural, MEP, and specialty systems knowledge</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Monitor className="w-8 h-8 text-lime-600 mb-3" />
                <h4 className="text-lg font-bold text-gray-900 mb-3">Software Mastery</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Advanced takeoff software (PlanSwift, Bluebeam, STACK)</li>
                  <li>• BIM integration and 3D model quantification</li>
                  <li>• Estimating platforms (Procore, Sage, ConEst)</li>
                  <li>• Database management and cost tracking</li>
                  <li>• Excel automation and custom formulas</li>
                  <li>• Cloud collaboration and document management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Building2 className="w-8 h-8 text-lime-600 mb-3" />
                <h4 className="text-lg font-bold text-gray-900 mb-3">Industry Knowledge</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Construction methods and sequencing</li>
                  <li>• Building codes and regulatory requirements</li>
                  <li>• Market pricing and vendor relationships</li>
                  <li>• Regional cost variations and adjustments</li>
                  <li>• Risk assessment and contingency planning</li>
                  <li>• Value engineering and alternative solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <BarChart className="w-8 h-8 text-lime-600 mb-3" />
                <h4 className="text-lg font-bold text-gray-900 mb-3">Business Acumen</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Competitive bidding strategies</li>
                  <li>• Profit margin analysis and optimization</li>
                  <li>• Project risk evaluation</li>
                  <li>• Subcontractor coordination and pricing</li>
                  <li>• Change order preparation and documentation</li>
                  <li>• Historical cost data analysis and trending</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* General vs Estimating VA Comparison */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            How Estimating VAs Differ from General Virtual Assistants
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <X className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">General Virtual Assistant</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Basic administrative tasks</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Generic software knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Limited industry understanding</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">No technical education requirement</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Entry-level pricing focus</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">High turnover and inconsistency</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Estimating Virtual Assistant</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Specialized construction estimating</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Advanced software proficiency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Deep construction industry knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Engineering or construction education</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Professional service delivery</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Long-term partnership approach</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stephen's Take */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-8 h-8 text-lime-600 mr-3" />
            Stephen's Take: The Estimating Revolution That Changed Everything
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              After 15+ years in real estate and construction, I've watched countless contractors lose winnable projects because their estimates were either too high (due to padding for uncertainty) or too low (due to calculation errors). The Philippines became our secret weapon when I discovered that many estimators there have engineering degrees AND advanced software training.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold italic">
              Here's what most contractors don't realize: Your local $90K estimator is probably using the same software and methods as our $25K Filipino specialist who has a civil engineering degree and 5+ years of experience. The difference isn't skill level—it's cost structure. Smart contractors use this arbitrage to bid on 3x more projects with confidence.
            </p>
          </div>
        </div>

        {/* Transform Your Business - Metrics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <TrendingUp className="w-8 h-8 text-lime-600 mr-3" />
            Transform Your Business: Measurable Results
          </h2>
          <p className="text-gray-700 text-center mb-8">Real Performance Metrics from ShoreAgents Clients</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Card className="border-lime-200 bg-lime-50 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">75%</div>
                <div className="text-gray-600 font-medium text-sm">Faster Takeoff Time</div>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-lime-50 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">92%</div>
                <div className="text-gray-600 font-medium text-sm">Estimate Accuracy</div>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-lime-50 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">65%</div>
                <div className="text-gray-600 font-medium text-sm">Cost Reduction</div>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-lime-50 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">150%</div>
                <div className="text-gray-600 font-medium text-sm">More Bids Submitted</div>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-lime-50 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">34%</div>
                <div className="text-gray-600 font-medium text-sm">Higher Win Rate</div>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-lime-50 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium text-sm">Support Available</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Investment Analysis */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <DollarSign className="w-8 h-8 text-lime-600 mr-3" />
            Investment Analysis: ROI That Transforms Your Business
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <X className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Traditional In-House Estimator</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Annual Salary:</span>
                    <span className="font-bold text-gray-900">$85,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Benefits (30%):</span>
                    <span className="font-bold text-gray-900">$25,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Office Space/Equipment:</span>
                    <span className="font-bold text-gray-900">$12,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Software Licenses:</span>
                    <span className="font-bold text-gray-900">$8,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Training/Development:</span>
                    <span className="font-bold text-gray-900">$5,000</span>
                  </div>
                  <hr className="border-red-300" />
                  <div className="flex justify-between text-xl">
                    <span className="font-bold text-gray-900">Total Annual Cost:</span>
                    <span className="font-bold text-red-600">$135,500</span>
                  </div>
                  <p className="text-center text-sm text-gray-600">Monthly Investment: $11,292</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Professional Estimating VA</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monthly Service Fee:</span>
                    <span className="font-bold text-gray-900">$3,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Software Access (included):</span>
                    <span className="font-bold text-gray-900">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Office/Equipment (included):</span>
                    <span className="font-bold text-gray-900">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Training (included):</span>
                    <span className="font-bold text-gray-900">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Management (included):</span>
                    <span className="font-bold text-gray-900">$0</span>
                  </div>
                  <hr className="border-lime-300" />
                  <div className="flex justify-between text-xl">
                    <span className="font-bold text-gray-900">Total Annual Cost:</span>
                    <span className="font-bold text-lime-600">$38,400</span>
                  </div>
                  <p className="text-center text-sm text-gray-600">Monthly Investment: $3,200</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-lime-200 bg-white">
            <CardContent className="p-8 text-center">
              <DollarSign className="w-16 h-16 text-lime-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Annual Savings: $97,100</h3>
              <p className="text-lg text-gray-700 font-semibold">
                That's enough savings to fund additional marketing, equipment, or expansion initiatives
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Philippines */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Globe className="w-8 h-8 text-lime-600 mr-3" />
            Why the Philippines Dominates Construction Estimating Excellence
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The Philippines has emerged as the global epicenter for construction estimating excellence due to a unique convergence of technical education, cultural compatibility, advanced infrastructure, and cost efficiency that no other region can match.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <Award className="w-8 h-8 text-lime-600 mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">World-Class Engineering Education</h3>
                <p className="text-gray-700 text-sm">
                  Strong foundation in civil engineering, architecture, and construction management with deep understanding of international building codes and construction methods. Many estimators hold engineering degrees from top universities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <Monitor className="w-8 h-8 text-lime-600 mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Advanced Technology Infrastructure</h3>
                <p className="text-gray-700 text-sm">
                  State-of-the-art facilities with redundant internet, backup power, and professional work environments. Extensive training in cutting-edge estimating software and BIM platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <Globe className="w-8 h-8 text-lime-600 mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Cultural & Business Alignment</h3>
                <p className="text-gray-700 text-sm">
                  Natural understanding of Western business practices and project expectations. Time zone overlap enables real-time collaboration and rapid response to urgent requests.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <MessageCircle className="w-8 h-8 text-lime-600 mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Superior English Proficiency</h3>
                <p className="text-gray-700 text-sm">
                  English as a primary language of instruction results in native-level communication skills. Technical writing and presentation abilities that exceed many native speakers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <Award className="w-8 h-8 text-lime-600 mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Professional Work Ethic</h3>
                <p className="text-gray-700 text-sm">
                  Dedicated approach to accuracy, attention to detail, and client service that builds long-term partnerships. Strong cultural emphasis on quality work and professional relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <DollarSign className="w-8 h-8 text-lime-600 mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Optimal Cost-Quality Balance</h3>
                <p className="text-gray-700 text-sm">
                  Exceptional value proposition combining professional-level expertise with sustainable cost structure. Investment in continuous training ensures skills remain current.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <Award className="w-8 h-8 text-lime-600 mr-3" />
            Success Stories: Real Results from Real Contractors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Building2 className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial GC – Phoenix, AZ</h3>
                <p className="text-gray-700 italic mb-4">
                  "We went from submitting 12 bids per month to 35+ bids with our estimating VA team. Our win rate increased from 18% to 28%, and we're on track for our best year ever."
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Revenue Growth:</span>
                    <span className="font-bold text-lime-600">+156%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bid Volume:</span>
                    <span className="font-bold text-lime-600">+192%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Win Rate:</span>
                    <span className="font-bold text-lime-600">+56%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cost Savings:</span>
                    <span className="font-bold text-lime-600">$78K/year</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Electrical Contractor – Dallas, TX</h3>
                <p className="text-gray-700 italic mb-4">
                  "The accuracy is incredible. We've eliminated estimation errors that were costing us $20-30K per project. Our Philippine estimator catches details our local team missed."
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Error Reduction:</span>
                    <span className="font-bold text-lime-600">-94%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Margin Protection:</span>
                    <span className="font-bold text-lime-600">+$180K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Turnaround Time:</span>
                    <span className="font-bold text-lime-600">-68%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Project Wins:</span>
                    <span className="font-bold text-lime-600">+43%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Activity className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Heavy Civil – Denver, CO</h3>
                <p className="text-gray-700 italic mb-4">
                  "Complex infrastructure projects require precise estimates. Our VA team handles earthwork calculations and utility coordination better than our previous $120K senior estimator."
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cost Reduction:</span>
                    <span className="font-bold text-lime-600">-71%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Accuracy Improvement:</span>
                    <span className="font-bold text-lime-600">+38%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bid Capacity:</span>
                    <span className="font-bold text-lime-600">+240%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Savings:</span>
                    <span className="font-bold text-lime-600">$95K</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <HelpCircle className="w-10 h-10 text-lime-600 mr-3" />
            Frequently Asked Questions
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How accurate are estimates from virtual assistants compared to local estimators?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our estimating VAs consistently achieve 92%+ accuracy due to specialized training, advanced software proficiency, and systematic quality control processes. Many clients report higher accuracy than their previous local estimators due to the focused expertise and attention to detail.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What software platforms do your estimating VAs use?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our team is proficient in all major platforms including PlanSwift, Bluebeam, STACK, Procore, Sage Estimating, ConEst, and custom Excel solutions. We can work with your preferred software or recommend the best platform for your specific needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How quickly can I get estimates completed?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Turnaround times depend on project complexity, but typical commercial projects are completed 75% faster than traditional methods. Simple residential projects: 24-48 hours. Complex commercial: 3-5 days. Rush projects can be accommodated with priority scheduling.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What happens if I need changes or revisions to estimates?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Revisions and addenda are handled quickly as part of the service. Minor changes typically completed within hours. Major scope changes are re-estimated with transparent pricing. All changes are tracked with detailed logs for audit purposes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How do you ensure data security and confidentiality?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We maintain strict security protocols including encrypted file transfer, secure cloud storage, non-disclosure agreements, and ISO-certified facilities. Your project data is protected with bank-level security and never shared with third parties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Can virtual assistants handle specialized or complex projects?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, our team includes specialists in all major construction sectors including healthcare, industrial, infrastructure, and specialty trades. Complex projects are assigned to estimators with relevant experience and advanced certifications in the specific discipline.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Zap className="w-10 h-10 text-white mr-3" />
            Ready to Transform Your Estimating Process?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of successful contractors who've revolutionized their bidding process with professional estimating virtual assistants. More accurate estimates, faster turnaround, significantly lower costs, and the competitive advantage you need to dominate your market.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Start Your Estimating Team Today
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold">
              View Pricing Plans
              <DollarSign className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="text-sm opacity-75">
            💡 Free Consultation Available: Speak with our estimating specialists to discuss your specific needs and see how we can improve your bidding process. No obligation, just expert insights tailored to your business.
          </p>
        </div>

      </div>
    </div>
  );
}
