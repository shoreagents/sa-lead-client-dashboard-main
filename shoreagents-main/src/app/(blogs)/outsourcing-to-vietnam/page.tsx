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
  Code,
  Palette,
  Database,
  GraduationCap,
  TrendingDown,
  MapPin,
  Briefcase,
  MessageSquare,
  XCircle,
  CheckCircle,
  Settings,
  Rocket,
  BarChart3,
  FileText,
  Monitor,
  Smartphone,
  Cpu,
  PenTool,
  Video,
  Box,
  Phone,
  Building
} from "lucide-react";
import Link from "next/link";

export default function OutsourcingToVietnamPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              The Rising Star of Southeast Asia
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Vietnam's Outsourcing<br />
              <span className="text-lime-600">Revolution</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              From manufacturing hub to tech powerhouse – why Vietnam is the outsourcing destination smart businesses 
              can't ignore. While competitors focus on traditional destinations, smart businesses leverage Vietnam's 
              specialized tech ecosystem for 70-90% cost savings with world-class quality in specific domains.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/sales" 
                className="inline-flex items-center px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors"
              >
                Discuss Your Strategy
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/what-is-outsourcing" 
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-lime-600 transition-colors"
              >
                Explore Global Solutions
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
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Vietnam's Tech Powerhouse</h3>
              <p className="text-gray-700">Key metrics showcasing Vietnam's outsourcing capabilities</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Code className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">530K+</div>
                <div className="text-gray-900 font-semibold">Software Developers</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <DollarSign className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">70-90%</div>
                <div className="text-gray-900 font-semibold">Cost Savings</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <GraduationCap className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">400K+</div>
                <div className="text-gray-900 font-semibold">Annual STEM Graduates</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Award className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">TOP 10</div>
                <div className="text-gray-900 font-semibold">Math & Science Rankings</div>
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
                  CRITICAL: 73% of Businesses Miss Vietnam's Outsourcing Advantage
                </h3>
                <p className="text-gray-700">
                  While competitors focus on traditional destinations, smart businesses leverage Vietnam's specialized 
                  tech ecosystem for 70-90% cost savings with world-class quality in specific domains.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Insight */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <Lightbulb className="w-10 h-10 text-blue-600 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Why Vietnam Caught My Attention</h2>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="mb-4">
                      After building ShoreAgents with 500+ successful placements primarily in the Philippines, I started 
                      noticing something interesting. Clients were asking about Vietnam for specific technical projects – 
                      not as a replacement for their Filipino teams, but as a complement.
                    </p>
                    <p className="mb-4">
                      What I discovered surprised me. While the Philippines excels at comprehensive outsourcing solutions 
                      and cultural integration, Vietnam has built something different – a specialized tech ecosystem that's 
                      particularly strong in development, engineering, and creative production.
                    </p>
                    <p className="text-gray-900 font-semibold">
                      This guide shares what I've learned about Vietnam's unique position in the global outsourcing landscape 
                      and when it makes strategic sense for businesses to leverage Vietnamese talent alongside or instead of 
                      other destinations.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Evolution */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Beyond the Rice Paddies</h2>
              <p className="text-lg text-gray-600">Vietnam's remarkable transformation</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Forget what you think you know about Vietnam. The country that was once synonymous with rice fields and 
              manufacturing has undergone a remarkable transformation that few Western businesses have fully appreciated.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardContent className="p-6">
                  <Building2 className="w-10 h-10 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">From Manufacturing Hub to Tech Powerhouse</h3>
                  <p className="text-gray-700 text-sm">
                    While the outsourcing spotlight has traditionally focused on India and the Philippines, Vietnam has 
                    been building something different – a specialized tech ecosystem that's particularly strong in development, 
                    engineering, and creative production.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <CardContent className="p-6">
                  <Target className="w-10 h-10 text-orange-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Specialization Over Generalization</h3>
                  <p className="text-gray-700 text-sm">
                    In 2025, Vietnam isn't trying to be everything to everyone. Instead, it's excelling in specific niches 
                    where it can genuinely compete with – and often outperform – more established outsourcing destinations.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-lime-50 border-lime-200 mt-6">
              <CardContent className="p-6">
                <p className="text-gray-700">
                  This focused approach makes Vietnam an excellent complement to comprehensive outsourcing strategies that 
                  leverage multiple global talent pools for different functions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Key Advantages */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Star className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Key Advantages</h2>
              <p className="text-lg text-gray-600">Why choose Vietnam for outsourcing</p>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* STEM Education */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <GraduationCap className="w-10 h-10 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">1. STEM Education Revolution</h3>
                    <p className="text-gray-700 mb-4">
                      Vietnam's universities are producing over 400,000 STEM and IT graduates annually with curriculum 
                      increasingly aligned with global tech standards. The country's approximately 530,000 developers 
                      predominantly belong to Gen Z and Millennial generations, bringing fresh perspectives and modern 
                      technical skills.
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Competitive programming embedded in high school curricula',
                        'Technical English mandatory in university IT programs',
                        'International tech certifications government-subsidized',
                        'Code competitions and hackathons attract corporate sponsorship'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
                      <p className="text-gray-900 font-semibold text-sm">
                        <strong>Surprising Fact:</strong> Vietnamese students routinely rank in the top 10 globally in 
                        international math and science competitions, outperforming many Western nations.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cost Ratio */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <DollarSign className="w-10 h-10 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Compelling Cost-to-Quality Ratio</h3>
                    <p className="text-gray-700 mb-4">
                      Vietnam offers exceptional value that makes financial sense for businesses looking to optimize their 
                      outsourcing investments:
                    </p>
                    <ul className="space-y-2">
                      {[
                        '70-90% labor cost savings compared to US/AU/EU rates',
                        '30-50% less expensive than equivalent Indian development talent',
                        'Lower operational overhead than major Indian tech hubs',
                        'Significantly lower staff turnover rates than competing markets'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-600 rounded">
                      <p className="text-gray-900 font-semibold text-sm">
                        <strong>Cost Reality:</strong> A senior developer with 7+ years experience costs $45,000-55,000 
                        annually in Vietnam versus $140,000+ in the US or Australia.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Government Infrastructure */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Building className="w-10 h-10 text-purple-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Government-Backed Infrastructure Investment</h3>
                    <p className="text-gray-700 mb-4">
                      The Vietnamese government has recognized technology as a strategic growth pillar, with massive 
                      investments creating world-class infrastructure:
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Purpose-built technology parks in major cities with world-class connectivity',
                        'Tax incentives specifically targeting IT outsourcing businesses',
                        'Digital infrastructure development prioritized in national budget',
                        'Streamlined business registration for technology service providers'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cultural Work Ethic */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Users className="w-10 h-10 text-lime-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">4. Cultural Work Ethic That Delivers Results</h3>
                    <p className="text-gray-700 mb-4">
                      Beyond technical skills, Vietnamese professionals bring distinctive cultural strengths:
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Detail-oriented approach to technical specifications',
                        'Strong commitment to meeting deadlines and deliverables',
                        'Natural aptitude for visual design and creative execution',
                        'Mathematically rigorous problem-solving methodology'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-lime-600 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Top Services */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Briefcase className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Top Services for Outsourcing</h2>
              <p className="text-lg text-gray-600">Specialized excellence in specific domains</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Vietnam isn't trying to compete with comprehensive outsourcing solutions across every function. Instead, 
              it has developed specialized excellence in specific domains:
            </p>

            <div className="space-y-6">
              {/* Software Development */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Code className="w-10 h-10 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Software Development Excellence</h3>
                      <p className="text-gray-700 mb-3">Vietnamese development teams excel in:</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { icon: Monitor, text: 'Full-stack web application development' },
                          { icon: Smartphone, text: 'Mobile app development (especially Android)' },
                          { icon: Cpu, text: 'Game development and graphics programming' },
                          { icon: CheckCircle2, text: 'QA testing and automated test script development' }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 bg-white p-3 rounded">
                            <item.icon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-700 text-sm">{item.text}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 p-3 bg-white border-l-4 border-blue-600 rounded">
                        <p className="text-gray-900 font-semibold text-sm">
                          <strong>Real-World Impact:</strong> Several unicorn startups have built their entire engineering 
                          foundations on Vietnamese development teams, including major fintech and e-commerce platforms.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Creative Production */}
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Palette className="w-10 h-10 text-purple-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Creative Production at Scale</h3>
                      <p className="text-gray-700 mb-3">Vietnam has become a go-to hub for:</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { icon: PenTool, text: 'UI/UX implementation and design systems' },
                          { icon: Palette, text: 'Graphic design production work' },
                          { icon: Video, text: 'Video editing and post-production' },
                          { icon: Box, text: '3D modeling and architectural visualization' }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 bg-white p-3 rounded">
                            <item.icon className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-700 text-sm">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Data Processing */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Database className="w-10 h-10 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Data Processing Excellence</h3>
                      <p className="text-gray-700 mb-3">For businesses drowning in data, Vietnamese teams provide:</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          'Data entry with exceptional accuracy rates',
                          'Research and data mining capabilities',
                          'Data scraping and processing',
                          'Basic data analysis and reporting'
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 bg-white p-3 rounded">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Limitations */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <AlertCircle className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Limitations to Consider</h2>
              <p className="text-lg text-gray-600">Understanding current challenges for better decisions</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              No outsourcing destination is perfect for every function. Understanding Vietnam's current limitations helps 
              you make better strategic decisions:
            </p>

            <div className="space-y-6">
              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-8 h-8 text-orange-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Voice Communication Challenges</h3>
                      <p className="text-gray-700 mb-3">
                        While written English proficiency is strong, Vietnam still faces hurdles with:
                      </p>
                      <ul className="space-y-2">
                        {[
                          'Accents that can be challenging for Western ears in real-time conversation',
                          'Limited experience with customer-facing voice communication',
                          'Fewer professionals with advanced English fluency compared to the Philippines'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <XCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 text-gray-900 font-semibold text-sm">
                        This makes Vietnam less suitable for call center operations or roles requiring extensive verbal 
                        client interaction.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MessageSquare className="w-8 h-8 text-red-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Communication Differences</h3>
                      <p className="text-gray-700 mb-3">Vietnamese business culture brings certain considerations:</p>
                      <ul className="space-y-2">
                        {[
                          'More formal communication style than Western businesses might expect',
                          'Tendency to avoid raising potential problems out of respect',
                          'Less experience with direct negotiation or disagreement',
                          'Higher context communication requiring reading between the lines'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Briefcase className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Industry-Specific Knowledge Gaps</h3>
                      <p className="text-gray-700 mb-3">
                        While excelling in tech and operations, Vietnam has less developed expertise in:
                      </p>
                      <ul className="space-y-2">
                        {[
                          'Specialized real estate outsourcing workflows',
                          'Property management systems and processes',
                          'Complex financial services compliance requirements',
                          'Insurance and healthcare domain knowledge'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <XCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 p-3 bg-white border-l-4 border-yellow-600 rounded">
                        <p className="text-gray-900 font-semibold text-sm">
                          <strong>Strategic Note:</strong> Vietnam can handle technical aspects like website maintenance 
                          and visual content creation, but may struggle with specialized industry platforms that are 
                          second nature to teams in established outsourcing markets.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Vietnam vs Philippines */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <BarChart3 className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Vietnam vs Philippines</h2>
              <p className="text-lg text-gray-600">Strategic decision guide</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              The smart play isn't choosing between Vietnam and the Philippines – it's knowing when to leverage each 
              destination's unique strengths within your comprehensive outsourcing strategy:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Vietnam */}
              <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-300">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-2">🇻🇳</div>
                    <h3 className="text-xl font-bold text-gray-900">When Vietnam Makes Sense</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Building software products or technical features',
                      'Executing creative production work at scale',
                      'Data-heavy processing with minimal client interaction',
                      'Technical projects with clear specifications',
                      'Cost-sensitive development work'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Philippines */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-2">🇵🇭</div>
                    <h3 className="text-xl font-bold text-gray-900">When Philippines Has the Edge</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Customer-facing roles requiring natural English',
                      'Administrative functions needing cultural alignment',
                      'Daily operations in your business systems',
                      'AI-augmented workflows requiring digital fluency',
                      'Industry-specific processes like real estate operations'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-lime-50 border-lime-200 mt-6">
              <CardContent className="p-6">
                <p className="text-gray-900 font-semibold">
                  <strong>Strategic Approach:</strong> Many forward-thinking businesses create hybrid models – leveraging 
                  Vietnamese talent for development and technical work while using Filipino teams for client-facing and 
                  operational roles.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Building Strategy */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Settings className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Building Your Vietnam Strategy</h2>
              <p className="text-lg text-gray-600">Strategic approach for success</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              If you're considering tapping into Vietnam's talent advantages, follow this strategic approach:
            </p>

            <div className="space-y-6">
              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Function Fit Analysis</h3>
                      <p className="text-gray-700 mb-3">
                        Evaluate which business functions align with Vietnam's strengths:
                      </p>
                      <ul className="space-y-1 text-sm">
                        {[
                          'Which roles require heavy technical expertise?',
                          'Which functions involve minimal voice communication?',
                          'Which tasks have clear inputs and outputs?',
                          'Which activities could benefit from Vietnam\'s cost advantage?'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-lime-600">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Partner Selection</h3>
                      <p className="text-gray-700 mb-3">Not all Vietnamese providers are created equal:</p>
                      <ul className="space-y-1 text-sm">
                        {[
                          'Focus on firms in Ho Chi Minh City, Hanoi, or Da Nang',
                          'Look for established companies with Western client experience',
                          'Verify English proficiency among management team',
                          'Ask about technical infrastructure and security protocols'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-lime-600">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Pilot Project Approach</h3>
                      <p className="text-gray-700 mb-3">Begin with a manageable test case:</p>
                      <ul className="space-y-1 text-sm">
                        {[
                          'Define specific project with clear success metrics',
                          'Create detailed documentation and requirements',
                          'Establish communication protocols and tools',
                          'Set regular checkpoints and review cycles'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-lime-600">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 p-3 bg-lime-50 border-l-4 border-lime-600 rounded">
                        <p className="text-gray-900 font-semibold text-sm">
                          <strong>Pro Tip:</strong> Start with contained projects that have well-defined deliverables 
                          rather than ongoing operational roles when testing Vietnam partnerships.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Future Trajectory */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Rocket className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Vietnam's Outsourcing Future</h2>
              <p className="text-lg text-gray-600">Growth trajectory and emerging strengths</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Vietnam's trajectory in the outsourcing world is pointing decisively upward, with massive FDI increases 
              and emerging capabilities that smart businesses should monitor:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    Emerging Strengths to Watch
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'AI and machine learning talent developing rapidly',
                      'Blockchain and cryptocurrency expertise growing',
                      'Data science capabilities expanding quickly',
                      'Engineering and design thinking skills evolving'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-orange-600" />
                    Expected Challenges
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Rising costs as market matures (still well below Western rates)',
                      'Increasing competition for top talent from multinationals',
                      'Growing demand outpacing English language skill development',
                      'Infrastructure needs in secondary cities beyond major hubs'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-lime-50 border-lime-200 mt-6">
              <CardContent className="p-6">
                <p className="text-gray-700">
                  The smart approach is building relationships now while Vietnam's capabilities are still emerging, 
                  positioning your business to benefit from this growth trajectory as part of a broader global outsourcing 
                  strategy.
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
                Vietnam's Strategic Role in Global Outsourcing
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The future doesn't belong to businesses that pick a single outsourcing destination – it belongs to those 
                  who strategically leverage the unique strengths of different locations.
                </p>
                <div className="bg-white border-l-4 border-lime-600 p-6 rounded mt-6">
                  <p className="text-gray-900 font-semibold">
                    Vietnam represents an exceptional opportunity for technical functions, creative production, and data 
                    processing, while the Philippines continues to excel in customer service, administrative support, and 
                    operations requiring Western cultural alignment. The winning move? Build a diversified strategy that 
                    taps the best of both worlds.
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
            Ready to Leverage Vietnam's Tech Powerhouse?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Discover how Vietnam's specialized tech ecosystem can complement your outsourcing strategy. Get personalized 
            guidance on building a diversified global team that leverages the unique strengths of different locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sales"
              className="inline-flex items-center px-8 py-4 bg-white text-lime-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors"
            >
              Discuss Your Strategy
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/what-is-outsourcing"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-lime-600 font-bold text-lg rounded-lg transition-colors"
            >
              Explore Global Solutions
            </Link>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
