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
  Edit,
  PenTool
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";

export default function ContentWritingOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['content-writing-outsourcing']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For $500K+ Annual Revenue Businesses
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Content Writing Outsourcing:<br />
              <span className="text-lime-600">Why Your $25/Article Writer Costs You $847 Per Month (And Delivers Nothing)</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Your content marketing strategy says you need 16 blog posts monthly. That's the magic number your SEO agency recommended, the benchmark every competitor hits, the volume Google rewards with rankings.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              So you went to Upwork. Found writers at $25 per 1,000-word article. Did the maths: $400/month versus $5,000 for a content agency. Hired three freelancers to split the load. Six months later, you've published 47 articles that generated exactly zero leads, burned through $2,400, and spent another 60 hours managing rewrites that still sound like they were translated from Bulgarian by a hungover robot.
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
            I've been placing offshore content writers with businesses across the USA, Australia, and New Zealand for 15 years. I've seen content outsourcing transform marketing departments. I've also watched companies waste $40,000 annually on content that actively damages their brand because they confused "cheap" with "cost-effective."
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This guide is for:</strong> Established businesses doing $500,000+ revenue who need consistent, strategic content—minimum 8-12 pieces monthly. If you're a startup testing content marketing with sporadic blog posts, hire someone on Fiverr for $15 and see what happens. This is for companies where content actually matters to revenue.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Brutal Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Brutal Reality: Why 70% of Content Outsourcing Fails in the First Year</h2>
              <p className="text-lg text-gray-600">Every content outsourcing provider sells you the dream. The reality? Most businesses fail spectacularly within 12 months.</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Every content outsourcing provider sells you the dream: unlimited access to writers, fast turnaround, affordable rates, SEO optimization included. The reality? Most businesses that outsource content writing for the first time fail spectacularly within 12 months.
              </p>
              <p className="text-gray-800 font-semibold">
                Not because content outsourcing doesn't work—it absolutely does when implemented properly. But because companies make three critical mistakes that doom the partnership before the first article publishes.
              </p>
            </CardContent>
          </Card>

          {/* Three Mistakes */}
          <div className="space-y-6">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mistake #1: Treating Content Like a Commodity</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You wouldn't hire the cheapest accountant, the cheapest lawyer, or the cheapest developer. But for some reason, businesses shop for content writers by filtering search results to show the lowest hourly rates first.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Here's what actually happens: That writer charging $0.05/word on Upwork isn't just cheap—they're managing 40 clients simultaneously to generate enough income. They spend 45 minutes on your 1,500-word article, including "research" (reading your competitor's blog), writing (copying that blog with slight variations), and "SEO optimization" (keyword stuffing that Google penalised back in 2018).
                </p>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">The real cost?</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Content that doesn't rank:</strong> Google's algorithm detects low-effort content. Your articles sit on page 8, generating zero organic traffic.</li>
                    <li>• <strong>Brand damage:</strong> Prospects who do find your content immediately question your credibility.</li>
                    <li>• <strong>Management overhead:</strong> You spend 2-3 hours per article providing feedback, requesting revisions, and eventually rewriting sections yourself.</li>
                  </ul>
                </div>
                <p className="text-gray-800 font-semibold">
                  A USA marketing manager making $75,000/year (roughly $36/hour) who spends 3 hours managing each $25 article is actually paying $133 per piece—and still getting subpar content.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mistake #2: No Content Strategy (Just Volume)</h3>
                <p className="text-gray-800 leading-relaxed mb-4">
                  "We need 12 blog posts per month for SEO" isn't a content strategy. It's a recipe for producing 144 articles annually that nobody reads, shares, or converts from.
                </p>
                <p className="text-gray-800 font-semibold mb-4">Successful content outsourcing starts with strategy:</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-4">
                  <li>• What specific keywords drive qualified traffic to your industry?</li>
                  <li>• What questions do prospects ask before buying?</li>
                  <li>• What objections need addressing through educational content?</li>
                  <li>• What content formats work for your audience (long-form guides vs. quick tips)?</li>
                  <li>• How does content integrate with your sales process?</li>
                </ul>
                <p className="text-gray-800 font-semibold">
                  Without this strategic foundation, you're just producing digital noise. I've seen companies spend $30,000 annually on content that ranks for keywords their target customers never search for.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mistake #3: Expecting Writers to Be Mind Readers</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You send a brief: "Write 1,500 words about property management software. Target keyword: property management software. Due Friday."
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The writer has no idea: Whether you're targeting landlords or property management companies, if readers are beginners or experienced users, what your competitive advantage is, what tone matches your brand, which features actually matter to your customers.
                </p>
                <p className="text-gray-800 font-semibold">
                  They produce a generic article that could apply to any property management software company. You're disappointed. They're confused. Nobody wins.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* What Actually Works Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Actually Works: The Content Outsourcing Model That Scales</h2>
              <p className="text-lg text-gray-600">After placing over 500 offshore content writers, I've seen what separates successful implementations from expensive failures</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Element #1: Dedicated Writers (Not Platform Freelancers)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Platform freelancers (Upwork, Fiverr, Freelancer) work for dozens of clients simultaneously. They optimise for volume, not quality. They disappear mid-project when a higher-paying client appears. They have zero investment in understanding your business.
              </p>
              <p className="text-gray-800 font-semibold mb-4">Dedicated content writers—whether full-time offshore staff or retained specialists—invest time learning your:</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• Industry terminology and concepts</li>
                <li>• Brand voice and style preferences</li>
                <li>• Target audience pain points</li>
                <li>• Product/service differentiators</li>
                <li>• Content goals and KPIs</li>
              </ul>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Platform Freelancer Model:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• $0.05-0.15/word</li>
                    <li>• 1,500-word = $75-225</li>
                    <li>• Writer juggling 30+ clients</li>
                    <li>• Zero brand knowledge</li>
                    <li>• Inconsistent quality</li>
                    <li>• High turnover</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Dedicated Writer Model:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• $1,200-2,500/month full-time</li>
                    <li>• 12-16 articles monthly</li>
                    <li>• Deep brand immersion</li>
                    <li>• Consistent voice</li>
                    <li>• Improving quality over time</li>
                    <li>• Stable partnership</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                Yes, the upfront monthly cost is higher. But the per-article cost drops to $75-200 with dramatically superior quality and zero management overhead chasing freelancers for revisions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Element #2: Editorial Infrastructure (Not Just Writers)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Content creation isn't just writing. It's: Strategy, Research, Writing, Editing, SEO optimization, Publishing, Promotion, Performance tracking.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                Most businesses outsource #3 (writing) and wonder why content doesn't perform. The companies succeeding with content outsourcing have either:
              </p>
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Option A:</strong> Full-service content agency handling all seven elements ($3,000-10,000/month USA, $2,500-7,500/month Australia, $2,800-8,500/month New Zealand)</p>
                <p><strong>Option B:</strong> Dedicated offshore content team covering multiple roles ($2,500-6,000/month for 2-3 full-time staff in Philippines covering writing, editing, and coordination)</p>
                <p><strong>Option C:</strong> Hybrid model—offshore writers for production, internal strategist for direction (most cost-effective for mid-sized companies)</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-300 bg-orange-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Element #3: Realistic Implementation Timeline (Not Immediate Results)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every content marketing case study you read follows the same pattern: "Company X outsourced content writing. Within 3 months, organic traffic increased 287%." What they don't mention: Company X spent 8 weeks training writers, provided detailed brand guides, had an internal content strategist managing the program.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Month 1-2: Training period</h4>
                  <p className="text-sm text-gray-700">Writers learning your business, voice, audience. Trial articles with heavy editing. Expect 50% of normal output during ramp-up.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Month 3-4: Consistency phase</h4>
                  <p className="text-sm text-gray-700">Output reaches target volume. Quality stabilises (still requires editing). Writers understand brand voice.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Month 5-6: Optimization phase</h4>
                  <p className="text-sm text-gray-700">Content quality consistently meets standards. SEO results begin appearing (Google needs 3-6 months to evaluate content).</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Month 7-12: Performance phase</h4>
                  <p className="text-sm text-gray-700">Mature content operation running smoothly. Measurable traffic and conversion improvements. ROI becomes clearly measurable.</p>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                Companies that abandon content outsourcing do so in months 2-4, right before it starts working. They confuse the investment period with permanent failure.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Philippines Advantage Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Philippines Advantage for Content Writing (And When It Doesn't Work)</h2>
              <p className="text-lg text-gray-600">Filipino content writers dominate offshore content production for reasons beyond just cost</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Filipino Writers Excel:</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">1. English Language Proficiency</h4>
                  <p className="text-gray-700 text-sm">The Philippines has the third-largest English-speaking population globally. English is an official language, taught from primary school. This isn't "learned English"—it's functional native-level proficiency.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">2. Cultural Alignment with Western Business</h4>
                  <p className="text-gray-700 text-sm">Decades of working with USA, Australian, and New Zealand companies means Filipino professionals understand Western business communication styles, deadlines, and expectations.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">3. Real-Time Communication</h4>
                  <p className="text-gray-700 text-sm mb-2">This is critical and frequently misunderstood: Filipino content writers work during YOUR business hours, not theirs.</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• <strong>For USA clients:</strong> Your 9am-5pm Eastern is their 9pm-5am Manila time. Your writer is working live when you're working. Zero communication delay.</li>
                    <li>• <strong>For Australian clients:</strong> Sydney is only +2 to +3 hours ahead of Manila. Your 9am-5pm overlaps perfectly with their 7am-3pm or 6am-2pm. This is actually MORE convenient than USA time zones.</li>
                    <li>• <strong>For New Zealand clients:</strong> Auckland is +4 to +5 hours ahead. Still manageable overlap during core business hours.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">4. Content Production Speed</h4>
                  <p className="text-gray-700 text-sm">Writers operating in English daily produce content faster than non-native speakers constantly checking translations. A skilled Filipino content writer produces 2,000-3,000 words of quality content daily without quality degradation.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">When Filipino Writers DON'T Work:</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Highly Technical B2B SaaS Content</h4>
                  <p className="text-sm text-gray-700">If you're selling enterprise software to CTOs and need content discussing microservices architecture, Kubernetes orchestration, or zero-trust security models, you need writers with deep technical backgrounds.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Legal/Medical Content Requiring Licensed Professionals</h4>
                  <p className="text-sm text-gray-700">If content requires legal opinions, medical diagnoses, or professional certifications, offshore writers cannot provide these.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Extreme Niche Industries</h4>
                  <p className="text-sm text-gray-700">If your business operates in an obscure niche with limited public information, training writers becomes extremely time-intensive.</p>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                For 85% of businesses—B2B services, B2C products, professional services, e-commerce, real estate, financial services, health and wellness, technology, marketing agencies—Filipino content writers handle requirements brilliantly at $1,200-2,500/month full-time.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Pricing Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Pricing Reality: What Content Outsourcing Actually Costs</h2>
              <p className="text-lg text-gray-600">Let's cut through the marketing fluff and look at real numbers</p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Model #1: Platform Freelancers (Upwork/Fiverr)</h3>
                <ul className="space-y-2 text-sm text-gray-700 mb-4">
                  <li>• Beginner writers: $0.03-0.08/word = $45-120 per 1,500-word article</li>
                  <li>• Intermediate writers: $0.10-0.25/word = $150-375 per article</li>
                  <li>• Experienced writers: $0.30-0.60/word = $450-900 per article</li>
                  <li>• Expert niche writers: $0.75-1.50/word = $1,125-2,250 per article</li>
                </ul>
                <p className="text-gray-800 font-semibold">
                  Reality: Factor in 20% platform fees, revision requests, management time, and inconsistent availability. That $150 article costs you $180 plus 2 hours of your time at $35-50/hour. True cost: $250-280 per mediocre article.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Model #2: USA Content Agencies</h3>
                <ul className="space-y-2 text-sm text-gray-700 mb-4">
                  <li>• Small agency: $2,000-5,000/month (4-8 articles)</li>
                  <li>• Mid-sized agency: $5,000-15,000/month (8-20 articles + strategy)</li>
                  <li>• Enterprise agency: $15,000-50,000/month (20-50 articles + full content operations)</li>
                </ul>
                <p className="text-gray-800 font-semibold">
                  Reality: You're paying for infrastructure, account management, editors, strategists, project managers. Premium quality, but at premium prices. Per-article cost: $250-1,000 depending on volume and service level.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Model #4: Dedicated Offshore Content Writers (ShoreAgents Model)</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Single full-time writer: $1,200-1,800/month</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 12-16 articles monthly (1,000-1,500 words each)</li>
                      <li>• Email newsletters, social media content</li>
                      <li>• Basic SEO optimization</li>
                      <li>• CMS publishing</li>
                      <li>• <strong>Per-article cost: $75-150</strong></li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Writer + Editor team: $2,500-3,500/month</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 20-30 articles monthly</li>
                      <li>• Strategic content planning</li>
                      <li>• Advanced SEO</li>
                      <li>• Quality assurance</li>
                      <li>• <strong>Per-article cost: $83-175</strong></li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Full content team (3-4 people): $4,000-6,000/month</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 40-60 articles monthly</li>
                      <li>• Content strategy</li>
                      <li>• Multi-format content (blogs, whitepapers, case studies, guides)</li>
                      <li>• Social media management</li>
                      <li>• Performance tracking</li>
                      <li>• <strong>Per-article cost: $67-150</strong></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-lime-50 border-l-4 border-lime-500 mt-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Break-Even Math:</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Let's say you need 12 blog posts monthly (reasonable target for mid-sized business):
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• <strong>Platform freelancers:</strong> 12 articles × $250 (true cost) = $3,000/month + management headaches</li>
                <li>• <strong>USA content agency:</strong> $4,000-6,000/month for 12 articles with strategy</li>
                <li>• <strong>Offshore dedicated writer:</strong> $1,500/month for 12 articles once trained</li>
              </ul>
              <p className="text-gray-800 font-semibold">
                After the 3-month training investment, the offshore model delivers 50-75% cost savings with quality matching or exceeding platform freelancers. The USA agency delivers premium quality but at 3-4× the cost.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When It Doesn't Make Sense Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When Content Outsourcing Doesn't Make Sense (The Honest Bit)</h2>
              <p className="text-lg text-gray-600">I turn away approximately 30% of businesses inquiring about offshore content writers</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  {
                    title: "You're Under $250,000 Annual Revenue",
                    description: "Content marketing is a long-term investment requiring consistent execution for 6-12 months before material ROI appears. If your business can't commit to spending $1,200-2,500 monthly for a year, you're not ready. Focus on revenue-generating activities first, content marketing second."
                  },
                  {
                    title: "You Don't Have Documented Processes",
                    description: "If you can't explain your business, target customers, competitive advantages, and brand voice in writing, content writers have nothing to work from. You'll spend your time teaching basics that should be documented before hiring begins. Fix this first."
                  },
                  {
                    title: "You Want Content But Don't Have a Content Strategy",
                    description: "\"We need blog posts for SEO\" isn't a strategy. If you can't articulate what topics support business goals, what keywords drive qualified traffic, how content integrates with sales process, and what success metrics matter, then you're not ready to outsource execution. Strategy comes first, always."
                  },
                  {
                    title: "You Need Highly Specialised Thought Leadership",
                    description: "If your business relies on the CEO's unique insights, proprietary research, or perspectives that only come from decades of niche experience, you can't fully outsource content creation. You can outsource research, drafting, editing—but the core ideas must come from internal experts."
                  },
                  {
                    title: "You're Expecting Content to Replace Poor Product-Market Fit",
                    description: "Content marketing amplifies good businesses. It doesn't fix bad ones. If your product/service isn't generating referrals and repeat business without content, adding blog posts won't magically create product-market fit."
                  },
                  {
                    title: "You Want Results in 30 Days",
                    description: "Content SEO takes 3-6 months minimum to show results. Google needs time to index, evaluate, and rank content. If you need leads next month, invest in paid advertising, not content marketing."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Implementation Checklist Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Making Content Outsourcing Work: Implementation Checklist</h2>
              <p className="text-lg text-gray-600">If you've read this far and still believe content outsourcing makes sense, here's the systematic approach</p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Phase 1: Strategic Foundation (Before Hiring Writers)</h3>
                <div className="space-y-2">
                  {[
                    "Define content goals: Traffic targets, lead generation numbers, brand awareness metrics",
                    "Identify target keywords: 30-50 keywords worth ranking for, including search volume and difficulty",
                    "Map customer journey: What questions do prospects ask at each buying stage?",
                    "Document brand voice: Tone, style, word choices, phrases to avoid",
                    "Create content templates: Standard structures for different content types",
                    "Establish approval workflow: Who reviews, who approves, turnaround expectations"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Phase 2: Writer Onboarding (Weeks 1-4)</h3>
                <div className="space-y-2">
                  {[
                    "Comprehensive business training: Product/service overview, target customers, competitive landscape",
                    "Voice and style guide review: Detailed examples of good vs. bad brand content",
                    "Trial articles: 3-5 pieces with heavy feedback to establish baseline",
                    "SEO training: Your specific keyword strategy, internal linking approach, formatting standards",
                    "Tools and access: CMS login, keyword research tools, content calendars, communication platforms"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Phase 3: Production Ramp-Up (Months 2-4)</h3>
                <div className="space-y-2">
                  {[
                    "Regular feedback cycles: Weekly reviews, specific constructive criticism",
                    "Quality benchmarks: Define what \"acceptable\" vs. \"excellent\" content looks like",
                    "Revision protocols: How many rounds, what triggers rewrites vs. minor edits",
                    "Performance tracking: Which articles rank, drive traffic, generate leads",
                    "Continuous improvement: Update briefs based on what works/doesn't work"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Phase 4: Mature Operations (Month 5+)</h3>
                <div className="space-y-2">
                  {[
                    "Strategic content planning: Quarterly keyword and topic planning",
                    "Performance optimization: Double down on what works, cut what doesn't",
                    "Format expansion: Beyond blog posts—guides, case studies, whitepapers",
                    "Promotion integration: Content supporting sales, social media, email marketing",
                    "ROI measurement: Traffic, rankings, leads, revenue attributed to content"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* ShoreAgents Approach Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The ShoreAgents Approach: Why We're Different</h2>
          
          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                I'm not going to pretend ShoreAgents is the only option for content outsourcing. We're not. But I'll explain what makes our approach work when other models fail.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">We Tell You When You're Not Ready</h3>
                  <p className="text-gray-700 text-sm">If your business isn't operationally mature enough for offshore content, we say so. I'd rather lose a sale today than watch you waste $15,000 over six months before admitting it wasn't the right time.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">We Don't Sell Content Packages—We Build Content Teams</h3>
                  <p className="text-gray-700 text-sm">Platform freelancers optimise for volume across dozens of clients. We place dedicated writers who become embedded in your business. They learn your industry, understand your customers, develop expertise in your niche.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">We Handle the Operational Complexity</h3>
                  <p className="text-gray-700 text-sm">Hiring offshore staff involves recruitment, employment compliance, payroll, HR management, performance reviews, equipment, internet backup systems. Most businesses don't want to manage this complexity—they want content that works.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">We're Transparent About Costs</h3>
                  <p className="text-gray-700 text-sm mb-2">Full-time Filipino content writers cost $1,200-2,500/month depending on experience level and role complexity. There's no hidden fees, no platform charges, no surprise invoices. That monthly rate covers:</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Writer's salary and benefits</li>
                    <li>• Employment compliance and HR</li>
                    <li>• Payroll and tax administration</li>
                    <li>• Equipment and internet backup</li>
                    <li>• Ongoing training and support</li>
                    <li>• Quality assurance and performance management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">We Scale As You Grow</h3>
                  <p className="text-gray-700 text-sm">Start with one writer producing 12-16 articles monthly. Add an editor when quality assurance becomes important. Bring on a content strategist when you need sophisticated topic planning. Build to 3-4 person content teams handling blogs, case studies, whitepapers, social media, and email.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Next Step Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Next Step: Is Content Outsourcing Right for You?</h2>
          
          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Content marketing either works spectacularly well or fails spectacularly poorly. There's little middle ground.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                If you're an established business with documented processes, clear content strategy, and realistic 6-12 month timeline expectations, offshore content outsourcing can transform your marketing operations. You'll produce 3-4× more content at 50-70% lower cost than USA/Australian/New Zealand agencies, with quality that improves continuously over time.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                If you're still building product-market fit, figuring out positioning, or expecting immediate results, content outsourcing will disappoint you. Focus on fundamentals first.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                ShoreAgents works with established businesses doing $500,000+ annual revenue who: Need consistent content production (8+ articles monthly minimum), Have documented brand voice and content strategy, Can commit to 3-6 month implementation timeline, Understand content marketing is long-term investment, Want dedicated teams, not platform freelancers.
              </p>
              <p className="text-gray-900 font-bold text-xl text-center mt-4">
                We're honest when businesses aren't ready. We're equally honest when offshore content teams are the smartest operational decision you'll make this year.
              </p>
              <p className="text-gray-900 font-bold text-xl text-center mt-4">
                Want a frank conversation about whether offshore content outsourcing makes sense for your situation? Contact our team. We'll tell you what's realistic, what's not, and whether we're the right fit. No sales pitch. Just 15 years of experience placing offshore content teams, having these exact conversations hundreds of times.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for an Honest Assessment?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Contact ShoreAgents for a frank conversation about whether offshore content outsourcing makes sense for your situation. No sales pitch. Just honest assessment.
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
            Content marketing either works spectacularly well or fails spectacularly poorly. Know which side of the $500K threshold you're on before spending a dollar.
          </p>
        </div>
      </div>
    </div>
  );
}
