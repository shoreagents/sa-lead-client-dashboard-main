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
  Search,
  Monitor,
  Brain
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";

export default function SeoVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['seo-virtual-assistant']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For $300K+ Annual Revenue Businesses
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              SEO Virtual Assistant:<br />
              <span className="text-lime-600">When "Ranking #1 on Google" Misses 3 Billion Monthly Searches</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Here's the question nobody hiring SEO virtual assistants is asking: where are your customers actually searching?
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              ChatGPT gets 3 billion visits monthly. It's now the fifth most-visited site globally. Add Perplexity, Claude, and other AI search platforms, and you're looking at billions of searches happening outside Google entirely. Meanwhile, most SEO virtual assistants are still optimising for 2020 Google algorithms, completely missing the platforms where your actual customers are finding answers.
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
            I've spent 15 years placing offshore staff with businesses across the USA, Australia, and New Zealand. The SEO virtual assistant market has exploded—but here's what's broken: traditional agencies charge $4,500-9,000 monthly for "SEO services" that are now mostly AI-assisted work any decent VA can do with proper tools. At the same time, most businesses hiring SEO VAs have no documented processes, unrealistic expectations, and zero understanding of what modern SEO actually involves.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This guide is for established businesses doing $300,000+ in annual revenue who need ongoing SEO work—minimum 15-20 hours weekly of consistent tasks like keyword research, content optimisation, and performance tracking.</strong> If you're a startup testing SEO with sporadic 5-hour projects, hire a Fiverr freelancer. Come back when you've got systematic work to delegate.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* What 78% Get Wrong Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What 78% of Businesses Get Wrong About SEO Virtual Assistants</h2>
              <p className="text-lg text-gray-600">Every SEO VA provider loves to advertise "$8-15/hour expert SEO talent!" Here's what they don't mention</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Every SEO VA provider loves to advertise "$8-15/hour expert SEO talent!" Here's what they don't mention: that $15/hour VA costs you $42/hour in Year One when you factor in reality.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h3 className="font-bold text-gray-900 mb-3">The advertised rate:</h3>
                <p className="text-gray-700">$15/hour × 20 hours/week × 52 weeks = $15,600/year</p>
              </div>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h3 className="font-bold text-gray-900 mb-3">The actual Year One cost:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">VA base cost:</span>
                    <span className="font-semibold">$15,600</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">SEO tools access:</span>
                    <span className="font-semibold">$3,200/year minimum</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Your management time (4 hrs/wk × 52 × $75/hr):</span>
                    <span className="font-semibold">$15,600</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Training mistakes:</span>
                    <span className="font-semibold">$8,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Rework and corrections:</span>
                    <span className="font-semibold">$4,200</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">Total Year One:</span>
                    <span className="font-bold text-red-600 text-xl">$46,600</span>
                  </div>
                  <p className="text-red-700 font-semibold mt-2">Effective hourly rate: $44.81, not $15</p>
                </div>
              </div>
              <p className="text-gray-800 leading-relaxed mt-4">
                A USA-based mid-level SEO specialist costs $55,000-75,000 annually. Australian businesses pay $60,000-80,000 AUD. New Zealand sits at $55,000-75,000 NZD. When you include management overhead, your year-one "savings" might be 20-30%, not the 70% those subscription services promise.
              </p>
              <p className="text-gray-800 font-semibold mt-4">
                The break-even point hits around month 8-10, after your VA has learned your industry terminology, understands your brand voice, stops making beginner mistakes, and actually knows what content your audience wants. Most businesses quit during weeks 6-12—right in the frustration valley—and waste every dollar invested.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* AI Disruption Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Brain className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The AI Disruption Nobody's Discussing Honestly</h2>
              <p className="text-lg text-gray-600">Back in 2012, SEO was simple. Now in 2025? The entire game has changed</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Back in 2012, SEO was simple. Stuff "real estate agents [city name]" into an article 47 times, and you'd rank. By 2015, it got more sophisticated with content quality mattering. Now in 2025? The entire game has changed, and most SEO VAs haven't adapted.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                ChatGPT launched in November 2022. Within 18 months, it became the fifth most-visited site globally. Reddit signed a $60 million AI content deal with Google in 2024, and now Reddit threads outrank professional blogs for most queries. The search landscape shifted from "optimise for Google" to "optimise for everywhere people actually search."
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Here's what this means for SEO virtual assistants:</h3>
              <p className="text-gray-800 font-semibold mb-4">
                If your VA is only optimising for traditional Google rankings, they're missing the platforms where your customers are finding competitors. Modern SEO requires Answer Engine Optimisation (AEO)—creating content that AI models can cite, structuring information for voice search, and understanding how ChatGPT and Perplexity pull answers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Most SEO VAs still focus on:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Traditional keyword density (obsolete)</li>
                    <li>• Exact-match anchor text (Google penalises this now)</li>
                    <li>• Guest posting on low-authority blogs (waste of time)</li>
                    <li>• Basic on-page optimisation (AI does this better and faster)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">What businesses actually need:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Multi-platform content strategy (Google, ChatGPT, Perplexity, Reddit)</li>
                    <li>• Structured data implementation for AI parsing</li>
                    <li>• Natural language optimisation for voice search</li>
                    <li>• Authority building through original research and data</li>
                    <li>• User experience signals that matter more than keywords</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                The gap between what most SEO VAs know and what modern SEO requires is enormous. Unless you're prepared to train them extensively—or hire someone who already understands the new landscape—you're paying for outdated tactics that won't move the needle.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When It Works vs Doesn't Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When SEO Virtual Assistants Work Brilliantly (And When They Absolutely Don't)</h2>
              <p className="text-lg text-gray-600">Let me save some of you $46,600 right now</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">You're NOT ready for an SEO VA if:</h3>
              <div className="space-y-3">
                {[
                  "Your business generates under $300,000 in annual revenue. The SEO work volume doesn't justify full-time offshore staffing, and you can't absorb the 8-10 month break-even period.",
                  "You don't have documented SEO processes. If you can't explain exactly what you want done, in what order, using which tools, with what success metrics, don't hire anyone yet. Document your processes first.",
                  "You need strategic SEO thinking, not execution. SEO VAs excel at tactical implementation—keyword research, content optimisation, link outreach, performance tracking. They're not SEO strategists who'll develop your entire approach.",
                  "Your content is highly technical or legally sensitive. Legal marketing, medical SEO, financial services content—these require subject matter expertise and compliance knowledge that most VAs don't have.",
                  "You expect immediate results. SEO takes 6-12 months to show meaningful results even when done perfectly. If you're looking for quick wins, SEO isn't your channel.",
                  "Your industry requires deep cultural understanding. Australian real estate regulations, USA healthcare compliance, New Zealand financial reporting standards—these need local expertise."
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">You're ready for an SEO VA when:</h3>
              <div className="space-y-3">
                {[
                  "You've got systematic, repetitive SEO work consuming 15-20+ hours weekly. Keyword research, content optimisation, performance tracking, link building, technical audits—consistent tasks that follow documented processes.",
                  "You understand modern SEO yourself. You know the strategy, you just need someone to execute it. You can teach them what good looks like because you already know what works.",
                  "You've got the right tools already. Ahrefs or SEMrush subscription, Google Analytics 4 properly configured, Search Console access, content management system they can learn.",
                  "You're prepared for the 8-10 month ramp-up. Initial training, learning your brand voice, understanding your industry, building expertise—this takes time. Businesses that succeed plan for it.",
                  "You can provide 4-5 hours weekly of training/oversight initially. SEO VAs need guidance, especially early on. If you can't commit this time, they'll flounder and fail."
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Real Pricing Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Calculator className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Real Pricing (Because Everyone Else Lies About It)</h2>
              <p className="text-lg text-gray-600">Every offshore SEO provider advertises their lowest hourly rate—$8-15/hour—while conveniently forgetting to mention all-in costs</p>
            </div>
          </div>

          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">ShoreAgents full-time SEO virtual assistant pricing:</h3>
              <p className="text-gray-800 font-bold text-2xl mb-4">$1,200-2,500/month depending on experience level and technical requirements.</p>
              <p className="text-gray-800 leading-relaxed mb-4">
                That's the honest number. No hidden fees. No "but you also need to pay for..." surprises.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What this actually includes:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Full-time dedicated SEO VA (160 hours/month, working real-time during your business hours)</li>
                <li>• Office infrastructure in Manila (they're not working from home with unreliable internet)</li>
                <li>• HR management, payroll, local compliance (we handle all employment responsibilities)</li>
                <li>• Equipment and workspace (professional environment, not kitchen table)</li>
                <li>• Productivity tracking and performance oversight (you get visibility into work being done)</li>
                <li>• Backup coverage when your VA is sick or on leave (operations don't stop)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What you provide:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• SEO tool subscriptions (Ahrefs, SEMrush, or similar: $200-400/month)</li>
                <li>• Content management system access (WordPress, Webflow, whatever you use)</li>
                <li>• Your documented processes and training (4-5 hours weekly initially, reducing to 1-2 hours ongoing)</li>
                <li>• Strategic direction (what keywords to target, what content to create, what metrics matter)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">True Year One cost: $33,200-48,200 depending on experience level and tool stack.</h3>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-bold text-gray-900 mb-3">Break-even analysis:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">USA mid-level SEO specialist:</span>
                    <span className="font-semibold">$55,000-75,000 + benefits</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Offshore via ShoreAgents:</span>
                    <span className="font-semibold">$33,200-48,200 all-in</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Savings:</span>
                    <span className="font-semibold text-green-600">$21,800-41,800 annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Break-even:</span>
                    <span className="font-semibold">Month 8-10 after training investment pays off</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-800 font-semibold">
                The maths works if you're ready. It doesn't work if you're testing, dabbling, or hoping someone will figure out your SEO strategy for you.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Timezone Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">How Filipino SEO VAs Actually Work (The Timezone Reality)</h2>
              <p className="text-lg text-gray-600">Let's address the elephant in the room: Filipino staff work night shifts to align with your business hours</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For USA businesses:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Your 9am-5pm EST is their 9pm-5am Manila time. They're working in real-time during your workday—not overnight with responses arriving the next morning. When you Slack them at 2pm your time, they respond immediately at 2am their time. No communication delays, no waiting for next-day answers.
              </p>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Australian/New Zealand businesses:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                This works even better. Manila is only 2-4 hours behind Australian Eastern Time and 4-6 hours behind New Zealand. Your SEO VA works during normal overlapping business hours, not night shifts. You get natural communication windows that don't exist with USA-based offshore staff.
              </p>
              <p className="text-gray-800 font-semibold">
                The night shift reality for USA clients needs honest discussion: Filipino professionals working nights choose this lifestyle deliberately. The pay premium over local day jobs is significant, the career opportunities with international companies are better, and many prefer working during quieter hours. This isn't exploitation—it's professional career choice.
              </p>
              <p className="text-gray-800 leading-relaxed mt-4">
                What matters: they're present during your workday, handling SEO tasks in real-time, responding to questions immediately, and participating in your operations as they happen. The physical location and time zone differences are invisible in practice.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What SEO VAs Actually Do Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Search className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What an SEO Virtual Assistant Actually Does (Day-to-Day Tasks)</h2>
              <p className="text-lg text-gray-600">Here's what a competent SEO VA handles on your behalf, assuming you've documented the processes and provided proper training</p>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Keyword Research & Analysis</h3>
                <p className="text-sm text-gray-700">Your SEO VA digs through search data to find opportunities you're missing. They use tools like Ahrefs, SEMrush, or Google Keyword Planner to identify high-volume, low-competition keywords relevant to your business. They track search trends, compile keyword lists organised by topic and search intent, and monitor what terms your competitors are ranking for.</p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">On-Page SEO Optimisation</h3>
                <p className="text-sm text-gray-700">Your VA systematically improves the technical SEO elements across your website. They write compelling title tags and meta descriptions that balance keywords with click-worthiness. They structure header tags (H1, H2, H3) properly for both search engines and readability. They optimise image alt text, improve internal linking between related pages, and ensure URL structures are clean and descriptive.</p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Content Auditing & Optimisation</h3>
                <p className="text-sm text-gray-700">Your existing content probably has SEO problems: outdated information, missing keywords, poor structure, broken links. Your SEO VA audits your content library systematically, identifies underperforming pages, updates old posts with current information and better keywords, fixes technical issues, improves readability, and ensures mobile optimisation.</p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Link Building & Outreach</h3>
                <p className="text-sm text-gray-700">This is where SEO VAs really earn their value. They prospect for relevant websites in your industry, identify link opportunities (guest posts, resource pages, broken link building), draft personalised outreach emails, track responses and follow-ups, and manage relationships with other site owners. Link building requires persistence and volume—work that's essential but doesn't require your time or expertise.</p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Technical SEO Monitoring</h3>
                <p className="text-sm text-gray-700">Your SEO VA runs regular technical audits to catch problems before they hurt rankings. They check site speed and loading times, verify mobile usability, identify and fix crawl errors, validate structured data markup (schema), monitor for broken links and 404 errors, and ensure XML sitemaps are current.</p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Performance Tracking & Reporting</h3>
                <p className="text-sm text-gray-700">SEO is meaningless without measurement. Your VA monitors your rankings for target keywords, tracks organic traffic and conversion metrics in Google Analytics, analyses which content is driving traffic, identifies what's working and what's not, and compiles regular reports showing progress.</p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Competitor Intelligence</h3>
                <p className="text-sm text-gray-700">Your SEO VA keeps tabs on what competitors are doing. They track which keywords competitors rank for, identify what content they're creating, monitor their backlink profiles, note changes to their website structure or strategy, and compile insights you can use to stay ahead.</p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Content Publishing & Formatting</h3>
                <p className="text-sm text-gray-700">Once you've created content (or hired writers), your VA handles the technical publishing. They upload content to your CMS, format text with proper headers and styling, add and optimise images, insert internal and external links strategically, implement meta tags and descriptions, and schedule publication timing.</p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Local SEO Management (if relevant)</h3>
                <p className="text-sm text-gray-700">For businesses targeting local customers, your SEO VA manages your Google Business Profile, keeps NAP (Name, Address, Phone) consistent across directories, monitors and responds to reviews (following your guidelines), manages local citations and business listings, and optimises content for local keywords.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* What They Can't Do Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Your SEO Virtual Assistant Can't Do (And Shouldn't Try)</h2>
              <p className="text-lg text-gray-600">Let's be clear about limitations. SEO VAs execute strategy—they don't create it</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <div className="space-y-3">
                {[
                  "They can't develop your overall SEO strategy from scratch. Deciding which keywords to target, what content themes to pursue, what channels to prioritise—this requires business understanding, market knowledge, and strategic thinking. You provide direction; they execute it.",
                  "They shouldn't create industry-specific content requiring expertise. Medical content needs medical professionals. Legal content needs lawyers. Financial advice needs certified professionals. Your VA can optimise this content for SEO, but they can't create it credibly.",
                  "They're not your brand voice. Defining how your company sounds, what tone resonates with your audience, what language to use—this is too foundational to delegate initially. Once your brand voice is established, your VA can follow guidelines, but they can't create it.",
                  "They can't replace strategic thinking about algorithm changes, platform shifts, or competitive positioning. When Google releases a major algorithm update, you need strategic analysis of implications—not just tactical execution of standard processes."
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Australia and New Zealand Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Australia and New Zealand Reality Check</h2>
              <p className="text-lg text-gray-600">Let's be honest: Google Trends shows insufficient search volume for "SEO Virtual Assistant" in Australia and near-zero in New Zealand</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Let's be honest: Google Trends shows insufficient search volume for "SEO Virtual Assistant" in Australia and near-zero in New Zealand. This tells us something important—Australian and Kiwi businesses aren't searching for SEO VAs specifically, they're searching for "SEO services" or "digital marketing agencies" and don't yet recognise the VA model as viable.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Australian businesses:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• SEO agencies typically charge $3,000-8,000 AUD monthly for similar work</li>
                <li>• The offshore VA route offers 60-70% cost reduction, but you need to drive the strategy yourself</li>
                <li>• Australian businesses succeed with SEO VAs when they've already got SEO knowledge in-house and need execution support, not strategic direction</li>
                <li>• The timezone advantage is real: Manila is only 2-3 hours behind Australian Eastern Time. Your SEO VA works during overlapping business hours, making collaboration natural and immediate</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For New Zealand businesses:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Similar dynamics apply. Local SEO services run $2,500-6,500 NZD monthly</li>
                <li>• Offshore VAs offer significant savings, but you must provide strategic direction</li>
                <li>• The key limitation for both markets: if you don't understand SEO yourself, hiring an offshore VA won't magically solve your search ranking problems</li>
                <li>• You need either internal SEO expertise or a local consultant providing strategy, with the VA handling execution</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What Happens When Right Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Happens When You Get It Right</h2>
              <p className="text-lg text-gray-600">When implemented properly—documented processes, realistic expectations, proper training investment</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                When implemented properly—documented processes, realistic expectations, proper training investment—SEO virtual assistants transform business operations.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                One USA-based affiliate marketing business we work with went from managing all SEO internally to outsourcing the majority of keyword research, content optimisation, and link building within 30 days. The founders described it as taking "a huge load off" their shoulders, allowing them time off after three years of grinding on the business.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                The BoxBrownie global PropTech company scaled their customer service infrastructure from 2 team members to 16 in 18 months through systematic offshore staffing. While not SEO-specific, it demonstrates the scalability possible when you implement professional offshore teams properly.
              </p>
              <p className="text-gray-800 font-semibold">
                The pattern across successful implementations: businesses that succeed invest in documentation, provide systematic training, set realistic timelines, and understand that offshore staffing is about building sustainable systems, not finding cheap labour.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">The Honest Next Step</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              ShoreAgents places full-time Filipino SEO virtual assistants at $1,200-2,500/month, but we'll tell you frankly if you're not ready yet or if local SEO consultants make more sense for your current situation.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              SEO VAs work brilliantly when implemented properly by ready businesses with realistic expectations and documented processes. The question is whether that describes your situation right now—and we're happy to help you figure that out honestly before you spend a dollar.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Modern SEO isn't about ranking #1 on Google anymore. It's about being findable everywhere your customers are actually searching—Google, ChatGPT, Perplexity, Reddit, voice search, AI overviews. Your SEO virtual assistant needs to understand this new landscape, or you're paying for outdated tactics that won't deliver results.
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
            Ready to discuss whether an SEO VA makes sense for your specific situation? Schedule a consultation. We'll assess your current SEO operations, identify whether offshore staffing fits, and tell you honestly if you should wait. No sales pitch, just 15 years of experience telling it straight.
          </p>
        </div>
      </div>
    </div>
  );
}
