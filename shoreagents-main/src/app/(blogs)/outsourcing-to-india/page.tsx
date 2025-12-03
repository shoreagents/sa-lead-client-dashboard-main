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
  TrendingDown,
  BarChart3,
  Code,
  Shield,
  FileText,
  Briefcase,
  MapPin,
  Settings,
  Cpu,
  Cloud,
  Brain,
  Database,
  CheckCircle,
  XCircle,
  MessageSquare,
  Video,
  BookOpen,
  RefreshCw,
  Rocket
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function OutsourcingToIndiaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[{"name":"Outsourcing","url":"https://www.shoreagents.com/outsourcing"},{"name":"Outsourcing to India","url":"https://www.shoreagents.com/outsourcing-to-india"}]} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              Evolution, Challenges, and Smart Strategies for 2025
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Outsourcing to India:<br />
              <span className="text-lime-600">From King to Strategic Specialist</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              From undisputed king to strategic specialist – understanding India's new role in global outsourcing. 
              The "outsource everything to India" model is dead. Smart businesses now use strategic outsourcing 
              approaches that leverage India's evolved strengths while avoiding outdated assumptions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/sales" 
                className="inline-flex items-center px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors"
              >
                Get Strategic Guidance
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/what-is-outsourcing" 
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-lime-600 transition-colors"
              >
                Explore Global Strategies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Era Comparison */}
        <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200 mb-16">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">The Evolution of India Outsourcing</h3>
              <p className="text-gray-700">From golden era dominance to strategic specialization</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  📈 Golden Era (2000-2015)
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">70-80% cost savings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Dominated global IT outsourcing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Undisputed outsourcing king</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="w-6 h-6 text-lime-600" />
                  🎯 New Reality (2025)
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-lime-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Specialized for enterprise scale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-lime-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">AI/ML and complex systems focus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-lime-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Strategic specialist destination</span>
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
                  CRITICAL: India's Outsourcing Landscape Has Fundamentally Changed
                </h3>
                <p className="text-gray-700">
                  The "outsource everything to India" model is dead. Smart businesses now use strategic outsourcing 
                  approaches that leverage India's evolved strengths while avoiding outdated assumptions.
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Why I Changed My Mind About India</h2>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="mb-4">
                      After building ShoreAgents with 500+ successful placements, I've had a front-row seat to the 
                      evolution of global outsourcing. Ten years ago, India was the default answer for almost everything. 
                      Today, it's a different story.
                    </p>
                    <p className="mb-4">
                      I've watched costs rise, quality become inconsistent, and other destinations like the Philippines 
                      excel in areas where India once dominated. But I've also seen India successfully pivot toward 
                      higher-value services where they still outperform everyone else.
                    </p>
                    <p className="text-gray-900 font-semibold">
                      This guide shares the honest reality of modern outsourcing strategies – when India still makes sense, 
                      when it doesn't, and how to build a global talent strategy that actually works in 2025.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Golden Era */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Golden Era</h2>
              <p className="text-lg text-gray-600">How India became the outsourcing standard</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              India's meteoric rise as an outsourcing destination wasn't an accident. It was the perfect storm of 
              technological timing, economic conditions, and human capital that created an irresistible value proposition.
            </p>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Perfect Foundation: Y2K and Beyond</h3>
                <p className="text-gray-700 mb-4">
                  The Y2K crisis of the late 1990s created unprecedented demand for IT talent, and India was positioned 
                  perfectly to capitalize. With a vast pool of STEM-educated, English-speaking professionals willing to 
                  work for a fraction of Western salaries, India offered advantages that traditional outsourcing models 
                  couldn't match.
                </p>
                <h4 className="text-lg font-bold text-gray-900 mb-3 mt-6">The Staggering Numbers</h4>
                <p className="text-gray-700 mb-3">By the early 2010s, India's dominance was undeniable:</p>
                <ul className="space-y-2">
                  {[
                    'Over 60% of all IT outsourcing for US and European companies',
                    '31% of global Business Process Outsourcing (BPO) services',
                    'Service exports reaching $75.8 billion by 2013',
                    'Cities like Bangalore, Pune, Hyderabad transformed into global tech hubs'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-gray-700">
                  Companies like Infosys, TCS, and Wipro grew from modest beginnings into multi-billion dollar 
                  international giants. The phrase "outsourced to India" became so common it entered the cultural lexicon.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Shifting Landscape */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <RefreshCw className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Shifting Landscape</h2>
              <p className="text-lg text-gray-600">Why India outsourcing has evolved</p>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Cost Advantage Shrinking */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <DollarSign className="w-10 h-10 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">1. The Cost Advantage Is Shrinking</h3>
                    <p className="text-gray-700">
                      Remember when cost savings from Indian outsourcing could make your CFO celebrate? Those days of 
                      70-80% savings have gradually disappeared. A developer who commanded $15,000 annually a decade ago 
                      now expects $30,000 or more. When you factor in the strengthening rupee and rising operational costs, 
                      the financial advantages aren't as compelling as they once were.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quality Variability */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <BarChart3 className="w-10 h-10 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">2. Quality Variability Has Increased</h3>
                    <p className="text-gray-700 mb-4">
                      India still produces brilliant tech minds—the top tier remains unmatched. But massive industry 
                      expansion has led to significant quality variability. For every exceptional team delivering 
                      world-class solutions, there are dozens of subpar vendors offering inconsistent results.
                    </p>
                    <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded">
                      <p className="text-gray-900 font-semibold text-sm">
                        <strong>Common Challenges:</strong> High turnover disrupting projects, communication gaps causing 
                        misalignment, inconsistent quality requiring expensive rework, and time zone complications causing 
                        delays.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cultural Integration */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Users className="w-10 h-10 text-purple-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">3. Cultural Integration Challenges</h3>
                    <p className="text-gray-700">
                      While not universal, some organizations have experienced cultural challenges that impact team dynamics. 
                      These include communication silos, management biases, and team fragmentation that can exclude non-Indian 
                      team members. Smart companies are addressing this through strategic team diversification and clear 
                      cultural integration protocols.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Revolution */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Brain className="w-10 h-10 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">4. The AI Revolution Changes Everything</h3>
                    <p className="text-gray-700 mb-4">
                      The biggest shift isn't about India specifically, but about work itself. Many traditionally 
                      outsourced tasks—basic coding, customer support, data entry—are being automated through AI. Up to 
                      1.2 million traditional outsourcing roles could be automated or fundamentally transformed by 2030, 
                      forcing the entire industry to evolve toward higher-value services.
                    </p>
                    <p className="text-gray-900 font-semibold">
                      This evolution is driving businesses toward more sophisticated outsourcing strategies that leverage 
                      specialized strengths rather than generic cost arbitrage.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* What Makes India Valuable */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Star className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Makes India Still Valuable in 2025</h2>
              <p className="text-lg text-gray-600">Where India continues to excel</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Despite challenges, India remains an outsourcing powerhouse for specific needs. When you need particular 
              strengths, India still outperforms in several key areas:
            </p>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Code className="w-10 h-10 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise-Scale Development Excellence</h3>
                      <p className="text-gray-700">
                        For large-scale enterprise development projects, India's capacity to rapidly scale teams of 
                        experienced developers remains unmatched. When you need 50+ skilled developers working in 
                        coordination, few countries can compete with what experienced providers in India can deliver.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Cpu className="w-10 h-10 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Technology Initiatives</h3>
                      <p className="text-gray-700 mb-3">
                        India has successfully pivoted toward higher-value services, particularly in:
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { icon: Cloud, text: 'Cloud infrastructure implementation and management' },
                          { icon: Brain, text: 'Artificial intelligence research and development' },
                          { icon: Settings, text: 'Enterprise resource planning (ERP) customization' },
                          { icon: Database, text: 'Legacy system integration and modernization' }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 bg-white p-3 rounded">
                            <item.icon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-700 text-sm">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-10 h-10 text-purple-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Procedural Rigor and Certifications</h3>
                      <p className="text-gray-700 mb-3">Indian firms continue to lead in process-oriented frameworks:</p>
                      <ul className="space-y-2">
                        {[
                          'CMMI (Capability Maturity Model Integration)',
                          'ISO certifications and compliance frameworks',
                          'Six Sigma implementation and quality control',
                          'ITIL frameworks for service management'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-gray-900 font-semibold text-sm">
                        These strengths make India particularly valuable for Fortune 500 companies and enterprises requiring 
                        specialized technical depth combined with rigorous documentation and process adherence.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Smart Alternatives */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Smart Alternatives to India</h2>
              <p className="text-lg text-gray-600">Global options for different business needs</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              As the outsourcing landscape evolves, several destinations have emerged as strong alternatives to India, 
              each with distinct advantages for different business needs:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  flag: '🇵🇭',
                  title: 'The Philippines',
                  subtitle: 'Administrative and Customer Service Excellence',
                  desc: 'For virtual assistants and administrative support, the Philippines has emerged as the leading destination. With neutral accents, exceptional English proficiency, and customer service orientation, Filipino professionals excel in roles requiring voice communication and administrative precision.',
                  color: 'blue'
                },
                {
                  flag: '🇻🇳',
                  title: 'Vietnam',
                  subtitle: 'The Rising Tech Star',
                  desc: 'Vietnam has rapidly emerged as a tech powerhouse, offering exceptional value for development, QA, and data analysis. With strong STEM education, lower costs than India, and growing English proficiency, Vietnam is becoming the go-to for cost-effective technical roles.',
                  color: 'red'
                },
                {
                  flag: '🇲🇽',
                  title: 'Mexico',
                  subtitle: 'The Nearshore Advantage',
                  desc: 'For US-based companies prioritizing time zone alignment and cultural proximity, Mexico offers strong technical capabilities combined with geographic closeness and NAFTA protection.',
                  color: 'green'
                },
                {
                  flag: '🇪🇺',
                  title: 'Eastern Europe',
                  subtitle: 'Specialized Excellence',
                  desc: 'Countries like Poland, Ukraine, and Romania offer high-end development services with European time zones and cultural alignment, making them ideal for specialized technical projects requiring close collaboration.',
                  color: 'purple'
                }
              ].map((location, idx) => (
                <Card key={idx} className={`bg-white border-${location.color}-200`}>
                  <CardContent className="p-6">
                    <div className="text-center mb-3">
                      <div className="text-4xl mb-2">{location.flag}</div>
                      <h3 className="text-lg font-bold text-gray-900">{location.title}</h3>
                      <p className={`text-sm font-semibold text-${location.color}-600 mb-3`}>{location.subtitle}</p>
                    </div>
                    <p className="text-gray-700 text-sm">{location.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* How to Succeed */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Rocket className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">How to Succeed with India in 2025</h2>
              <p className="text-lg text-gray-600">Strategies for maximizing success</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              If you've assessed your needs and determined that India is the right choice for your specific requirements, 
              here's how to maximize success:
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: DollarSign,
                  title: '1. Prioritize Quality Over Cost',
                  desc: 'The days of choosing the lowest bidder are over. The most successful Indian outsourcing relationships now focus on quality at mid-tier pricing, recognizing that marginal cost increases pay dividends in reduced rework and smoother operations.',
                  color: 'green'
                },
                {
                  icon: Brain,
                  title: '2. Leverage AI for Clear Role Definition',
                  desc: 'Before hiring, use AI tools to clearly define roles and responsibilities. Creating detailed job descriptions and project briefs through tools like ChatGPT ensures everyone starts with the same understanding.',
                  example: '"Create a detailed job description for a Senior React Developer who will work on our financial services platform, including specific responsibilities, technical requirements, and collaboration expectations with our US-based team."',
                  color: 'blue'
                },
                {
                  icon: Target,
                  title: '3. Start Small and Scale Gradually',
                  desc: 'The most successful outsourcing relationships begin with small teams and targeted projects. Start with 1-2 roles and expand only after establishing clear communication patterns and performance standards.',
                  color: 'purple'
                },
                {
                  icon: FileText,
                  title: '4. Document Everything',
                  desc: 'The single biggest predictor of outsourcing success is documentation quality. Implement comprehensive documentation using:',
                  list: [
                    'Video demonstrations (Loom, Zoom recordings)',
                    'Step-by-step process documentation',
                    'Clear acceptance criteria and quality standards',
                    'Regular feedback mechanisms and review cycles'
                  ],
                  color: 'orange'
                },
                {
                  icon: Video,
                  title: '5. Modern Documentation Creation',
                  desc: "Don't have time for detailed documentation? Here's an AI-powered workflow:",
                  steps: [
                    'Record a video explaining the task or process',
                    'Use Transkriptor or similar tools to generate a transcript',
                    'Feed transcript to ChatGPT: "Turn this into a repeatable SOP with step-by-step instructions and troubleshooting tips"',
                    'Store in your knowledge base and refine based on team feedback'
                  ],
                  color: 'lime'
                }
              ].map((strategy, idx) => (
                <Card key={idx} className="bg-white border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <strategy.icon className={`w-8 h-8 text-${strategy.color}-600 flex-shrink-0`} />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{strategy.title}</h3>
                        <p className="text-gray-700 mb-3">{strategy.desc}</p>
                        {strategy.example && (
                          <div className={`bg-${strategy.color}-50 border-l-4 border-${strategy.color}-600 p-3 rounded text-sm`}>
                            <strong>AI Prompt Example:</strong> {strategy.example}
                          </div>
                        )}
                        {strategy.list && (
                          <ul className="space-y-1 text-sm">
                            {strategy.list.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className={`text-${strategy.color}-600`}>•</span>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {strategy.steps && (
                          <ol className="space-y-1 text-sm list-decimal list-inside">
                            {strategy.steps.map((step, i) => (
                              <li key={i} className="text-gray-700">{step}</li>
                            ))}
                          </ol>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Strategic Decisions */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Target className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When to Choose India (And When Not To)</h2>
              <p className="text-lg text-gray-600">Strategic decision framework</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Best Use Cases */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  ✅ Best Use Cases for India
                </h3>
                <ul className="space-y-3">
                  {[
                    'Enterprise software development projects',
                    'SAP or Oracle implementations',
                    'Long-term development of complex systems',
                    'AI research and development centers',
                    'Technical projects requiring scale (50+ team members)'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Consider Alternatives */}
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-600" />
                  ❌ Consider Alternatives For
                </h3>
                <ul className="space-y-3">
                  {[
                    'Administrative or back-office functions',
                    'Voice-based customer support',
                    'Small, agile development teams',
                    'Real estate specific roles',
                    'Daily operational support requiring cultural alignment'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-blue-50 border-blue-200 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-700">
                <strong className="text-blue-900">Expert Insight:</strong> "India's outsourcing industry isn't dying—it's 
                transforming. It's less about pure cost arbitrage now and more about resilience, specialized expertise, and 
                innovation capacity. India is adapting, but it's no longer the default choice it once was."
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Future-Proof Strategy */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Building a Global Talent Portfolio</h2>
              <p className="text-lg text-gray-600">Future-proof strategy for smart businesses</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              The most sophisticated companies aren't choosing a single country for all outsourcing needs. Instead, 
              they're developing nuanced global talent strategies that leverage specific strengths of different regions:
            </p>

            <Card className="bg-gradient-to-br from-lime-50 to-green-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Geographic Distribution</h3>
                <div className="space-y-3">
                  {[
                    { flag: '🇵🇭', title: 'Philippines', use: 'Administrative support, customer service, and specialized real estate outsourcing' },
                    { flag: '🇮🇳', title: 'India', use: 'Enterprise development and specialized technical needs' },
                    { flag: '🇻🇳', title: 'Vietnam', use: 'Cost-effective development and QA testing' },
                    { flag: '🇪🇺', title: 'Eastern Europe', use: 'Specialized development and design work' },
                    { flag: '🇲🇽', title: 'Mexico', use: 'Nearshore US operations with timezone alignment' }
                  ].map((region, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded">
                      <span className="text-3xl">{region.flag}</span>
                      <div>
                        <strong className="text-gray-900">{region.title}:</strong>
                        <p className="text-gray-700 text-sm">{region.use}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-3 mt-6">Implementation Approach</h4>
                <p className="text-gray-700 mb-3">
                  This diversified approach creates resilience against regional challenges while allowing businesses to 
                  leverage unique strengths of each location:
                </p>
                <ol className="space-y-1 text-sm list-decimal list-inside">
                  {[
                    'Assess your business functions and requirements',
                    'Map functions to optimal geographic locations',
                    'Start with pilot projects in each region',
                    'Scale successful partnerships gradually',
                    'Maintain coordination across global teams'
                  ].map((step, idx) => (
                    <li key={idx} className="text-gray-700">{step}</li>
                  ))}
                </ol>
                <p className="mt-4 text-gray-900 font-semibold text-sm">
                  This strategic approach requires sophisticated outsourcing management capabilities but provides unmatched 
                  flexibility and resilience.
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
                Evolution, Not Revolution: India's New Role
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The story of outsourcing to India in 2025 isn't about decline—it's about evolution. The simplistic 
                  "outsource everything to India" model has given way to sophisticated understanding of global talent 
                  engagement.
                </p>
                <div className="bg-white border-l-4 border-lime-600 p-6 rounded mt-6">
                  <p className="text-gray-900 font-semibold">
                    India continues to excel in particular domains, while other countries have developed specialized 
                    strengths. The winners in this new landscape will be companies that develop nuanced understandings 
                    of these global dynamics, creating strategies that leverage the unique advantages each region offers.
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
            Ready to Build Your Global Talent Strategy?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Stop relying on outdated outsourcing models. Get strategic guidance on building a diversified global talent 
            portfolio that leverages India's evolved strengths alongside other specialized destinations for maximum value 
            and resilience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sales"
              className="inline-flex items-center px-8 py-4 bg-white text-lime-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Strategic Guidance
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/what-is-outsourcing"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-lime-600 font-bold text-lg rounded-lg transition-colors"
            >
              Explore Global Strategies
            </Link>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
