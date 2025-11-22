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
  Heart,
  MessageSquare,
  Shield,
  FileText,
  Briefcase,
  Calculator,
  TrendingDown,
  Rocket,
  BarChart3,
  CheckCircle,
  Brain,
  Palette,
  Mail,
  Calendar,
  FileCheck,
  Code,
  Home,
  HelpCircle,
  Lock,
  Video,
  Settings
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function OutsourcingPhilippinesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[{"name":"Outsourcing","url":"https://www.shoreagents.com/outsourcing"},{"name":"Outsourcing Philippines","url":"https://www.shoreagents.com/outsourcing-philippines"}]} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              The 2025 Strategic Advantage
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Why the Smartest Companies<br />
              <span className="text-lime-600">Choose the Philippines</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Why the Philippines remains the undefeated champion of offshore talent and how to leverage it for 
              competitive advantage. While smart companies leverage AI-powered Filipino teams to dominate their markets, 
              others are stuck with outdated outsourcing approaches.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/sales" 
                className="inline-flex items-center px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors"
              >
                Book a Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/what-is-outsourcing" 
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-lime-600 transition-colors"
              >
                Complete Outsourcing Guide
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
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Philippines: The Undefeated Champion</h3>
              <p className="text-gray-700">Strategic advantage in numbers</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <DollarSign className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">80%</div>
                <div className="text-gray-900 font-semibold">Cost Savings Potential</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Award className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">#1</div>
                <div className="text-gray-900 font-semibold">Social Media Usage</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <TrendingUp className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">$40B</div>
                <div className="text-gray-900 font-semibold">BPO Market Value 2024</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Clock className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">24/7</div>
                <div className="text-gray-900 font-semibold">Time Zone Coverage</div>
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
                  CRITICAL: 73% of Businesses Are Missing the Philippines Outsourcing Revolution
                </h3>
                <p className="text-gray-700">
                  While smart companies leverage AI-powered Filipino teams to dominate their markets, others are stuck 
                  with outdated outsourcing approaches. Don't let your competition leave you behind.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Intro */}
        <section className="mb-16">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg mb-6">
              In the evolving landscape of global outsourcing, the Philippines continues to maintain its position as the 
              premier destination for businesses seeking offshore talent. What was once simply a cost-saving measure has 
              transformed into a strategic advantage that forward-thinking companies are leveraging to outpace their 
              competition.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* The Plot Twist */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Zap className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When Your Offshore Team Becomes Your Secret Weapon</h2>
              <p className="text-lg text-gray-600">The plot twist nobody saw coming</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: DollarSign, title: '💰 Not Just Cheaper', desc: 'The Philippines has evolved from "budget option" to strategic advantage that transforms business operations.', color: 'green' },
              { icon: Globe, title: '🌏 Cultural Superpower', desc: 'Filipino teams offer a rare blend of Western understanding with Eastern hospitality that creates extraordinary client experiences.', color: 'blue' },
              { icon: Clock, title: '🕐 Time Zone Magicians', desc: "They'll work while you sleep, or sync perfectly with your hours—your choice for maximum flexibility.", color: 'purple' },
              { icon: Rocket, title: '🚀 Digital Natives on Steroids', desc: 'The most social-media-savvy population also knows how to leverage AI for unprecedented productivity.', color: 'orange' },
              { icon: Heart, title: '❤️ Loyalty Factor', desc: 'When treated right, Filipino teams stick around years longer than Western counterparts, creating deep institutional knowledge.', color: 'red' }
            ].map((benefit, idx) => (
              <Card key={idx} className={`bg-gradient-to-br from-${benefit.color}-50 to-${benefit.color}-100 border-${benefit.color}-200`}>
                <CardContent className="p-6">
                  <benefit.icon className={`w-10 h-10 text-${benefit.color}-600 mb-4`} />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-700 text-sm">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Why Smart Companies Haven't Left */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                "But Everyone's Going to Vietnam Now" — Why Smart Companies Haven't
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Let's cut through the hype cycle. While outsourcing trends come and go, the Philippines has quietly 
                  built an infrastructure that newcomers can't match overnight.
                </p>
                <p className="mb-4">
                  Businesses that think strategically—not just tactically—are doubling down on Filipino teams in 2025. 
                  From fintech startups in London to e-commerce empires in Sydney, the pattern is clear: when you need 
                  teams who get your business culture, communicate naturally, and won't disappear after training, the 
                  Philippines remains undefeated.
                </p>
                <p className="text-gray-900 font-semibold">
                  What's changed isn't the destination—it's what Filipino professionals bring to the table. This isn't 
                  your 2010s call center outsourcing anymore.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Filipino Advantage */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Star className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Filipino Advantage</h2>
              <p className="text-lg text-gray-600">What other outsourcing hubs can't touch</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              The 60-80% cost savings? That's just the appetizer. The main course is what makes the Philippines different:
            </p>

            <div className="space-y-6">
              {/* English Advantage */}
              <Card className="bg-white border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <MessageSquare className="w-10 h-10 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        1. The English Advantage That's Actually Getting Stronger
                      </h3>
                      <p className="text-gray-700 mb-4">
                        While English proficiency is declining in some outsourcing hubs, the Philippines maintains its 
                        edge with:
                      </p>
                      <ul className="space-y-2">
                        {[
                          'English as the official language of education, business, and government',
                          'Natural American-influenced accents (thanks, history!)',
                          'Colloquial understanding of idioms and humor'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
                        <p className="text-gray-900 font-semibold text-sm">
                          <strong>Fun Fact:</strong> Many Filipino professionals speak 3+ languages, including regional 
                          dialects, making them natural code-switchers between communication styles.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Culture Hack */}
              <Card className="bg-white border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Users className="w-10 h-10 text-purple-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        2. The Culture Hack: Eastern Values, Western Workplace Understanding
                      </h3>
                      <p className="text-gray-700 mb-4">The secret sauce? Filipino culture blends:</p>
                      <ul className="space-y-2">
                        {[
                          'Hospitality and service orientation (the famous Filipino warmth)',
                          'Understanding of Western business expectations',
                          'Strong work ethic with family-centered values'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 p-4 bg-purple-50 border-l-4 border-purple-600 rounded">
                        <p className="text-gray-900 font-semibold text-sm">
                          <strong>Insider Insight:</strong> Filipino teams will often say "yes" to show respect. Great 
                          managers learn to ask open-ended questions to get the full picture.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Time Zone Flexibility */}
              <Card className="bg-white border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Clock className="w-10 h-10 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        3. Time Zone Flexibility That Borders on Supernatural
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Filipino professionals routinely adapt their schedules in ways that would shock Western workers:
                      </p>
                      <ul className="space-y-2">
                        {[
                          'AU/NZ/US time zone coverage without complaint',
                          'Night shifts with full productivity (not just "graveyard survival mode")',
                          'Weekend coverage when required'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-600 rounded">
                        <p className="text-gray-900 font-semibold text-sm">
                          <strong>Reality Check:</strong> While Filipino teams will adapt to your time zone, showing 
                          flexibility yourself creates tremendous loyalty.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media Natives */}
              <Card className="bg-white border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Rocket className="w-10 h-10 text-orange-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        4. Social Media Natives Who Understand Digital Culture
                      </h3>
                      <p className="text-gray-700 mb-4">
                        The Philippines consistently ranks #1 globally for social media usage time—translating to:
                      </p>
                      <ul className="space-y-2">
                        {[
                          'Intuitive understanding of trends and viral content',
                          'Natural ability to write in a contemporary digital voice',
                          'Comfort with memes, GIFs, and visual communication'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 p-4 bg-orange-50 border-l-4 border-orange-600 rounded">
                        <p className="text-gray-900 font-semibold text-sm">
                          <strong>Did You Know?</strong> The average Filipino spends over 4 hours daily on social media—
                          making them natural digital communicators and trend spotters.
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

        {/* 2025 Filipino Professional */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Brain className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 2025 Filipino Professional</h2>
              <p className="text-lg text-gray-600">AI-powered problem solvers</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Forget everything you thought you knew about "virtual assistants." The modern Filipino workforce has 
              undergone a transformation that most businesses haven't caught up to yet.
            </p>

            <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Brain className="w-8 h-8 text-lime-600" />
                  The AI Co-Pilot Revolution
                </h3>
                <p className="text-gray-700 mb-4">
                  Today's Filipino professionals don't just handle tasks—they engineer solutions using:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { icon: Brain, text: 'ChatGPT and Claude for research, content creation, and customer responses' },
                    { icon: Palette, text: 'Midjourney and DALL-E for creating stunning visuals without a design degree' },
                    { icon: Code, text: 'Zapier and Make for building complex automations without coding' }
                  ].map((tool, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg">
                      <tool.icon className="w-6 h-6 text-lime-600 mb-2" />
                      <p className="text-gray-700 text-sm">{tool.text}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-gray-900 font-semibold">
                  The result? One Filipino team member in 2025 can accomplish what required 3-4 people just a few years ago.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Multi-Tool Professional</h3>
                <p className="text-gray-700 mb-3">
                  The most valuable Filipino team members are those who blend multiple skill sets:
                </p>
                <ul className="space-y-2">
                  {[
                    'The admin assistant who also masters your CRM customization',
                    'The bookkeeper who creates automation workflows for approval processes',
                    'The support specialist who also manages marketing tasks'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-lime-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-4 bg-lime-50 border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold text-sm">
                    <strong>Pro Tip:</strong> When interviewing Filipino talent, ask about their "side skills"—you'll 
                    often discover capabilities they don't list on their resume out of modesty.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* What Can I Outsource */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Briefcase className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 2025 Playbook</h2>
              <p className="text-lg text-gray-600">"So what can I actually outsource?"</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              The question isn't what you can outsource anymore—it's what you shouldn't. Here's what's working right now:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Administrative */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Mail className="w-6 h-6 text-blue-600" />
                    📋 The Administrative Engine Room
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Email management that feels like you\'re doing it yourself',
                      'Calendar wizardry that optimizes your time automatically',
                      'Document creation that follows your exact brand standards',
                      'CRM management that keeps your data pristine without nagging'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Financial */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Calculator className="w-6 h-6 text-green-600" />
                    💰 The Financial Machine
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Bookkeeping so accurate your accountant will be impressed',
                      'Accounts payable/receivable with relentless follow-up',
                      'Financial reporting that tells stories, not just numbers',
                      'Expense tracking that catches errors and patterns'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Marketing */}
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Rocket className="w-6 h-6 text-purple-600" />
                    🚀 The Marketing Force Multiplier
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Content creation that actually sounds like your brand voice',
                      'Social media management that builds engagement, not just posts',
                      'Graphic design that doesn\'t scream "template"',
                      'SEO implementation with measurable ranking improvements'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Industry-Specific */}
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-orange-600" />
                    Industry-Specific Game Changers
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      { title: 'Construction', desc: 'Bid preparation, material takeoffs, and CAD work' },
                      { title: 'Financial Services', desc: 'Client reporting and compliance checking' },
                      { title: 'Real Estate', desc: 'Inventory management and customer communication' },
                      { title: 'Marketing Agencies', desc: 'Design, content, and technical talent' }
                    ].map((industry, idx) => (
                      <li key={idx} className="text-gray-700">
                        <strong className="text-orange-900">{industry.title}:</strong> {industry.desc}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 p-3 bg-white border-l-4 border-orange-600 rounded">
                    <p className="text-gray-900 font-semibold text-xs">
                      And the best part? Your competition probably hasn't figured this out yet.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Comparison Table */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <BarChart3 className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Outsourcing Cage Match</h2>
              <p className="text-lg text-gray-600">Philippines vs. India vs. Vietnam</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">Let's have some straight talk about the global outsourcing landscape:</p>

            {/* Philippines vs India */}
            <Card className="bg-white border-gray-300 overflow-hidden mb-6">
              <CardContent className="p-0">
                <div className="bg-lime-600 text-white p-4">
                  <h3 className="text-xl font-bold">
                    Philippines vs. India: Why It's Not Even Close for Most Functions
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    Outsourcing to India excels in hardcore coding and development, but for most business operations, 
                    the Philippines wins by knockout:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="text-left p-3 font-semibold">Factor</th>
                          <th className="text-left p-3 font-semibold text-blue-600">Philippines</th>
                          <th className="text-left p-3 font-semibold text-orange-600">India</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="p-3 font-semibold">English Communication</td>
                          <td className="p-3 text-gray-700">Natural Western phrasing</td>
                          <td className="p-3 text-gray-700">Syntax sometimes requires translation</td>
                        </tr>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <td className="p-3 font-semibold">Cultural Alignment</td>
                          <td className="p-3 text-gray-700">Intuitive understanding of Western expectations</td>
                          <td className="p-3 text-gray-700">Learning through training</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="p-3 font-semibold">Time Zone Compatibility</td>
                          <td className="p-3 text-gray-700">Willingness to work AU/US/NZ hours</td>
                          <td className="p-3 text-gray-700">Limited overlap</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-3 font-semibold">Retention</td>
                          <td className="p-3 text-gray-700">2-3x longer average tenure when treated well</td>
                          <td className="p-3 text-gray-700">Higher turnover</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-4 bg-lime-50 border-l-4 border-lime-600 rounded">
                    <p className="text-gray-900 font-semibold text-sm">
                      <strong>The Verdict:</strong> For technical development, consider India. For everything else involving 
                      communication and client experience, the Philippines dominates.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Philippines vs Vietnam */}
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Philippines vs. Vietnam: The Up-and-Comer That's Not There Yet
                </h3>
                <p className="text-gray-700 mb-4">
                  Outsourcing to Vietnam is ascending rapidly as an outsourcing destination, offering:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    'Slightly lower costs in some cases',
                    'Strong technical education',
                    'Growing English proficiency'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 mb-4">But the Philippines maintains critical advantages:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    'Decades-long head start in BPO infrastructure',
                    'Dramatically higher English fluency across all regions',
                    'Cultural understanding that takes generations to develop'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
                  <p className="text-gray-900 font-semibold text-sm">
                    <strong>The Verdict:</strong> Vietnam is promising but still developing. The Philippines offers 
                    immediate results with proven systems.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Getting Started Blueprint */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Settings className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The "Getting Started" Blueprint</h2>
              <p className="text-lg text-gray-600">How not to mess this up</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Not all outsourcing experiences are created equal. Follow this battle-tested approach to join the winners' circle:
            </p>

            <div className="space-y-6">
              {[
                {
                  num: '1',
                  title: 'The Role Autopsy',
                  desc: 'Perform a thorough dissection of the functions you\'re considering outsourcing:',
                  points: [
                    'Which processes follow clear patterns that could be documented?',
                    'Which activities don\'t require physical presence or local knowledge?'
                  ],
                  tip: 'Start with roles where success is easily measured—transaction processing, data entry, or specific creative outputs. Save complex, judgment-heavy roles for round two.'
                },
                {
                  num: '2',
                  title: 'Finding Your Match',
                  desc: 'Not all outsourcing providers are created equal. Look for:',
                  points: [
                    'Physical facilities with backup infrastructure (not just home-based staff)',
                    'Rigorous security protocols for data and communication',
                    'Proven recruitment capabilities in your specific functions'
                  ]
                },
                {
                  num: '3',
                  title: 'Onboarding That Actually Works',
                  desc: 'The difference between success and frustration often comes down to:',
                  points: [
                    'Investing in detailed process documentation (yes, record those videos!)',
                    'Providing access to all necessary resources from day one',
                    'Clarifying communication expectations and channels upfront'
                  ]
                },
                {
                  num: '4',
                  title: 'Ongoing Management Mastery',
                  desc: 'Long-term success requires systematic attention to:',
                  points: [
                    'Regular video communication (faces matter)',
                    'Clear task prioritization and visibility',
                    'Performance metrics that emphasize outcomes, not just activity'
                  ],
                  tip: 'Filipino professionals value relationships and recognition. Small gestures like remembering birthdays or family details create extraordinary loyalty.'
                }
              ].map((step, idx) => (
                <Card key={idx} className="bg-white border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        {step.num}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-700 mb-3">{step.desc}</p>
                        <ul className="space-y-1">
                          {step.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-lime-600">•</span>
                              <span className="text-gray-700 text-sm">{point}</span>
                            </li>
                          ))}
                        </ul>
                        {step.tip && (
                          <div className="mt-3 p-3 bg-lime-50 border-l-4 border-lime-600 rounded">
                            <p className="text-gray-900 font-semibold text-sm">
                              <strong>Insider Tip:</strong> {step.tip}
                            </p>
                          </div>
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

        {/* Top 5 Questions */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <HelpCircle className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Top 5 Questions</h2>
              <p className="text-lg text-gray-600">What smart business leaders ask before diving in</p>
            </div>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: 'Is this only for big companies with massive budgets?',
                a: 'Quite the opposite. While enterprises use Philippine outsourcing at scale, small businesses and even solopreneurs often benefit most. Starting with just one offshore team member can free up 15-20 hours of your week.'
              },
              {
                q: 'How do I handle the time zone difference without losing my mind?',
                a: 'Two approaches work exceptionally well: The Overlap Method (Filipino staff work hours that create 3-4 hours of overlap with your workday) or The Night Shift Magic (your tasks get completed while you sleep, ready for review when you start your day).'
              },
              {
                q: 'What about Filipino holidays and cultural differences?',
                a: 'The Philippines has about 10-12 public holidays annually. Top providers provide holiday calendars months in advance, offer coverage options during critical business periods, and help you understand cultural nuances that strengthen relationships.',
                tip: 'Filipinos value harmony and may be reluctant to say "no" directly. Rather than asking "Do you understand?", ask "How would you approach this task?" to gauge true comprehension.'
              },
              {
                q: 'Can offshore staff access my sensitive systems securely?',
                a: 'Yes, through properly configured secure access methods: VPN connections with multi-factor authentication, remote desktop protocols with session monitoring, and role-based access controls limiting system exposure.'
              },
              {
                q: 'What happens if my business needs change suddenly?',
                a: 'The flexibility of Philippine outsourcing is one of its greatest strengths: Scale up by adding team members with 2-4 weeks\' notice, adjust roles and responsibilities as business needs evolve, and implement cross-training to handle seasonal fluctuations.'
              }
            ].map((faq, idx) => (
              <Card key={idx} className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Q: {faq.q}</h3>
                  <p className="text-gray-700 mb-2"><strong>A:</strong> {faq.a}</p>
                  {faq.tip && (
                    <div className="mt-3 p-3 bg-blue-50 border-l-4 border-blue-600 rounded">
                      <p className="text-gray-900 font-semibold text-sm">
                        <strong>Cultural Pro Tip:</strong> {faq.tip}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Conclusion */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-lime-50 to-green-50 border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                The Bottom Line: Why 2025 Is the Tipping Point
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The future belongs to businesses who understand that outsourcing is no longer just about cost savings—
                  it's about gaining capabilities your competitors don't have.
                </p>
                <p className="mb-4">
                  In 2025, as AI-enabled teams become the norm, the dividing line between businesses that scale and those 
                  that stagnate often comes down to who has built the right offshore capabilities. The Philippines offers 
                  a unique blend of human talent and technological adoption that creates compound advantages.
                </p>
                <div className="bg-white border-l-4 border-lime-600 p-6 rounded mt-6">
                  <p className="text-gray-900 font-semibold">
                    The smartest move? Start small, document thoroughly, communicate clearly, and scale strategically. 
                    Your competitors will be left wondering how you're outperforming them with a smaller local team and 
                    better client experience.
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
            Ready to Leverage the Philippines Advantage?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            2025 is the tipping point. While your competitors struggle with outdated approaches, you can gain the 
            AI-powered Filipino team advantage that scales your business without the headaches. Let's talk strategy, 
            not just staffing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sales"
              className="inline-flex items-center px-8 py-4 bg-white text-lime-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors"
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/what-is-outsourcing"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-lime-600 font-bold text-lg rounded-lg transition-colors"
            >
              Complete Outsourcing Guide
            </Link>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
