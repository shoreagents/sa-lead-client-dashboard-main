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
  Share2,
  Monitor,
  MessageCircle,
  BarChart3
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";

export default function SocialMediaVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['social-media-virtual-assistant']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For $500K+ Annual Revenue Businesses
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Social Media Virtual Assistant:<br />
              <span className="text-lime-600">Stop Hiring Strategy When You Only Need Execution</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              You just hired a "social media virtual assistant" for $20/hour expecting them to grow your Instagram following, create your content strategy, and turn your social channels into lead generation machines. Three months later, you're frustrated because they're posting decent content but your engagement is flat, your strategy feels directionless, and you're spending 5 hours weekly managing them instead of the "set and forget" you were promised.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong>Here's what happened:</strong> you hired a virtual assistant when you actually needed a social media manager. And you're not alone—it's the single most common mistake in this industry.
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
            The difference? A social media manager creates your strategy, develops your brand voice, and makes strategic decisions at $50-100/hour. A virtual assistant executes your existing strategy, schedules your approved content, and handles routine engagement at $20-35/hour. Hire a VA expecting manager-level strategy, and you'll waste $40,000 in your first year before you realise the problem.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This guide is for USA businesses spending 10+ hours weekly on social media execution who already have a content strategy.</strong> If you're hoping someone will "figure out" your brand voice, stop reading. You're not ready yet.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* The $20/Hour Lie Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Calculator className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The $20/Hour Lie: What a Social Media VA Actually Costs</h2>
              <p className="text-lg text-gray-600">Every marketplace loves advertising "$15-25/hour for social media support!" Nobody mentions the actual first-year investment</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Year One Reality (20 hours/week):</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Your VA's pay:</span>
                  <span className="font-semibold">$20/hour × 20 hours × 52 weeks = $20,800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software stack:</span>
                  <span className="font-semibold">$732-1,380/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your training time:</span>
                  <span className="font-semibold">$4,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your management time:</span>
                  <span className="font-semibold">$13,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Mistakes and rework:</span>
                  <span className="font-semibold">~$2,000</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">True Year One Cost:</span>
                  <span className="font-bold text-red-600 text-xl">$41,312</span>
                </div>
                <p className="text-red-700 font-semibold mt-2">That's not $20/hour. That's an effective rate of $39.72/hour.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Year Two drops significantly (around $27,500) once training is complete and management time decreases, but most businesses quit before they get there because they weren't prepared for the first-year reality.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What VAs Actually Do Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Share2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Social Media VAs Actually Do (vs What You Think They Do)</h2>
              <p className="text-lg text-gray-600">This is where the confusion destroys relationships</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What VAs are EXCELLENT at (Execution Tasks):</h3>
              <div className="space-y-3">
                {[
                  "Content Scheduling – Taking your approved posts and scheduling them across platforms at optimal times",
                  "Graphic Creation from Templates – Using your Canva templates to create brand-consistent visuals",
                  "Community Management – Responding to comments and DMs using your documented brand voice guidelines",
                  "Content Curation – Finding relevant industry articles and content to share (that you approve)",
                  "Basic Analytics Reporting – Pulling platform metrics and compiling them into reports you can review",
                  "Administrative Tasks – Organising your content library, maintaining your editorial calendar, updating schedules"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What VAs are TERRIBLE at (Strategy Tasks):</h3>
              <div className="space-y-3">
                {[
                  "Creating Your Content Strategy – They don't know your business well enough to develop strategic direction",
                  "Developing Brand Voice – This requires intimate understanding of your company values and positioning",
                  "Campaign Planning – Strategic thinking about what campaigns to run and when requires business context they don't have",
                  "Crisis Management – When something goes wrong, they can't make judgment calls on your behalf",
                  "Strategic Decision-Making – Which platforms to prioritise, ad budget allocation, partnership decisions—all require business owner perspective"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                The research data is brutal: "Virtual assistants normally are more focused on the business side of the business...at the end of the day, a VA doesn't usually have the marketing expertise and internal drive to grow your social media channels. It is simply just another task to check off the to-do list."
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Solution:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• If you have strategy but no time to execute: Hire a VA.</li>
                <li>• If you need strategy and execution: Hire a social media manager.</li>
                <li>• If you want maximum efficiency: Hire a manager to create strategy, then a VA to execute it.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* 90-Day Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-100 rounded-full p-3">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 90-Day Reality: Why You'll Be Slower Before You're Faster</h2>
              <p className="text-lg text-gray-600">Nobody warns you about this, but it's the single biggest reason people quit too early</p>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <Badge className="bg-red-600 text-white mb-3">Month 1 (Days 1-30)</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Investment Phase</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  You're not saving time—you're losing it. You're creating training videos, writing SOPs, documenting your brand voice, answering constant questions, and reviewing every single post before it goes live.
                </p>
                <p className="text-gray-800 font-semibold">Your productivity drops 20-30% during this period. You'll spend 5-7 hours weekly managing your VA instead of the 10 hours you were spending doing the work yourself. Net result: you're saving 3-4 hours but questioning if this was worth it.</p>
              </CardContent>
            </Card>

            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <Badge className="bg-amber-600 text-white mb-3">Month 2 (Days 30-60)</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Frustration Phase</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Your VA is contributing but still needs daily check-ins. Quality is inconsistent—some posts are great, others need revision. You're still spending 3-5 hours weekly on management.
                </p>
                <p className="text-gray-800 font-semibold">You're roughly breaking even on time. Not losing, not gaining. This is when most people quit. They expected immediate results and got break-even performance instead.</p>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <Badge className="bg-blue-600 text-white mb-3">Month 3 (Days 60-90)</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Turning Point</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Your VA is becoming independent on routine tasks. Quality improves to 80-90% accuracy. Management time drops to 2-3 hours weekly.
                </p>
                <p className="text-gray-800 font-semibold">You're finally starting to see actual time savings—reclaiming 6-8 hours per week.</p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <Badge className="bg-green-600 text-white mb-3">Month 4-6</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Payoff</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Your VA handles 15-20 hours weekly independently. You've reclaimed 8-12 productive hours. Management down to 1-2 hours weekly.
                </p>
                <p className="text-gray-800 font-semibold">The ROI finally appears: 4-6x return on your time investment. But here's the catch: you only reach Month 4-6 if you survive Months 1-3 without quitting.</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-100 border-l-4 border-gray-600 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                According to research, it takes 6-9 months to start seeing genuine benefits from social media efforts. Most businesses quit at Month 2 thinking it's not working.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When It Works Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When Social Media VAs Work Brilliantly</h2>
              <p className="text-lg text-gray-600">After 15 years of placements, I can predict with 90% accuracy which relationships will succeed</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">You're Ready for a Social Media VA If:</h3>
              <div className="space-y-3">
                {[
                  "You're spending 10+ hours weekly on social media execution tasks",
                  "You have documented brand voice guidelines",
                  "You have 3+ months of content planned or a clear content strategy",
                  "You can dedicate 5-7 hours weekly for management during the first 90 days",
                  "Your business is doing $500,000+ in annual revenue (you can afford the $41K first-year investment)",
                  "You value your time at $100+/hour (the math works at this rate)",
                  "You measure social media ROI and know it's generating business results",
                  "You have documented processes for what you want done"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Success Story Pattern:</h3>
              <p className="text-gray-800 leading-relaxed">
                Most successful relationships I've seen follow this progression: business owner doing everything themselves → hire VA to execute owner's strategy → VA handles 80% of execution → owner focuses on strategy and high-value client work → business grows, VA's role expands, eventually hire a second VA or promote existing VA to manager role.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When NOT Ready Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When You're NOT Ready (And Honestly Shouldn't Waste Your Money)</h2>
              <p className="text-lg text-gray-600">Let me save you $40,000 and three months of frustration</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Don't Hire a Social Media VA If:</h3>
              <div className="space-y-3">
                {[
                  "You're hoping they'll \"figure out\" your content strategy",
                  "You're spending less than 6 hours weekly on social media (not enough work to delegate)",
                  "You can't articulate your brand voice in writing",
                  "Your business isn't profitable yet or you're doing under $300,000 in annual revenue",
                  "You can't commit 5+ hours weekly to management for the first 3 months",
                  "You expect immediate results (30-60 day timeframe)",
                  "You're looking for the cheapest option possible",
                  "You don't currently measure social media ROI and don't know if it's working"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Hard Truth:</h3>
              <p className="text-gray-800 leading-relaxed">
                If you're a solopreneur, early-stage startup, or side hustle, you're not ready for a full-time social media VA. Use scheduling tools like Buffer ($20/month) or hire someone on Fiverr for occasional graphic design work ($50-100/project). Come back to full-time VAs when your revenue and operational maturity support it.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Communication Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <MessageCircle className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Real-Time Communication Reality</h2>
              <p className="text-lg text-gray-600">Filipino VAs work during your business hours, not overnight while you sleep</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Here's something worth understanding about Filipino virtual assistants working with USA businesses: they're working during your business hours, not overnight while you sleep.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                When it's 9am in New York, it's 9pm in Manila—same moment, just different times. Your VA starts their workday when you start yours. When you send a Slack message at 2pm your time, they're there at 2pm their time (which is 2am in Manila) responding immediately.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                This isn't "overnight work you wake up to"—it's real-time collaboration during your business hours. They're working night shifts to match your schedule, but you're communicating with them in real-time throughout your workday.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Australian and New Zealand businesses:</h3>
              <p className="text-gray-800 leading-relaxed">
                The timezone advantage is even better. Manila is only 2-4 hours different from Sydney or Auckland, so your Filipino VA works during normal daylight hours while maintaining overlap with your business day.
              </p>
              <p className="text-gray-800 font-semibold mt-4">
                The broader point: Filipino VAs are professional specialists who happen to work when you work. Whether that's night shift for them (USA clients) or daylight hours (Australian/New Zealand clients), you're getting real-time communication and collaboration.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Platform Skills Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-100 rounded-full p-3">
              <AlertCircle className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Platform Skills: Not All VAs Know All Platforms Equally</h2>
              <p className="text-lg text-gray-600">This is a massive assumption people make that costs them dearly</p>
            </div>
          </div>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Most social media VAs specialise in Instagram and Facebook. Some know TikTok if they're younger. Fewer have deep expertise in LinkedIn, Twitter/X, Pinterest, or YouTube.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Before hiring, ask:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• "Which platform is your strongest?"</li>
                <li>• "Show me content you've personally created for [your priority platform]."</li>
                <li>• "How do you stay updated on algorithm changes?"</li>
                <li>• "What tools do you use for [specific platform]?"</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                If your business relies heavily on LinkedIn B2B marketing and your VA's portfolio is all Instagram fashion content, that's a mismatch. LinkedIn requires completely different content strategy, posting cadence, and engagement tactics than Instagram.
              </p>
              <p className="text-gray-800 font-semibold">
                The Fix: Hire for platform-specific expertise, not generic "social media" experience. A great Instagram VA will be mediocre on LinkedIn until they spend 3-6 months learning it.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* ROI Reality Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <BarChart3 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">ROI Reality: What Actually Matters (Not Followers)</h2>
              <p className="text-lg text-gray-600">Research shows 83% of marketers struggle to measure social media ROI</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Stop Tracking (Vanity Metrics):</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Total follower count</li>
                <li>• Total likes/impressions</li>
                <li>• Reach numbers alone</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Start Tracking (Business Metrics):</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Website traffic from social platforms</li>
                <li>• Lead generation (email signups, contact form submissions)</li>
                <li>• Conversion rate from social traffic</li>
                <li>• Customer acquisition cost from social</li>
                <li>• Customer lifetime value of social-referred customers</li>
                <li>• Engagement rate (not total engagement)</li>
                <li>• Response time to customer inquiries</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The ROI Formula:</h3>
              <p className="text-gray-800 font-semibold mb-4">Social Media ROI = (Revenue from Social - Cost of Social) / Cost of Social × 100</p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-bold text-gray-900 mb-2">Example:</h4>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>Revenue attributed to social channels: $15,000</p>
                  <p>All-in costs (VA + tools + your management time): $5,000</p>
                  <p className="font-semibold mt-2">ROI = ($15,000 - $5,000) / $5,000 = 200% ROI</p>
                </div>
              </div>
              <p className="text-gray-800 font-semibold">
                If you can't track revenue from social or you don't know which customers came from which channels, hiring a VA won't fix that measurement problem. You'll just spend $40,000 without knowing if it's working.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Software Stack Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Monitor className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Software Stack Nobody Mentions</h2>
              <p className="text-lg text-gray-600">Beyond your VA's monthly cost, you'll need proper tools</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">Budget $150-300/month for:</p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Communication & Management ($30-50/month):</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Slack or Teams: $8-12/user</li>
                    <li>• Loom for training videos: $10/month</li>
                    <li>• Zoom: $15/month</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Social Media Tools ($80-150/month):</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Scheduling tool (Buffer/Hootsuite/Sprout): $20-50/month</li>
                    <li>• Canva Pro: $13/month</li>
                    <li>• Social listening/analytics: $30-100/month</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Collaboration ($20-40/month):</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Asana or Monday: $10-20/month</li>
                    <li>• Google Workspace: $6-12/user</li>
                    <li>• Password manager: $4-8/month</li>
                  </ul>
                </div>
                <Separator className="my-3" />
                <p className="font-bold text-gray-900">Total: $150-300/month = $1,800-3,600 annually</p>
                <p className="text-red-700 font-semibold mt-2">That's $1,800-3,600 that nobody factors into their budget when they see "$20/hour VA" advertisements.</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Agency vs Freelancer Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Agency vs Freelancer: The $10,000 Decision</h2>
              <p className="text-lg text-gray-600">The real math behind both options</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Freelancer Platforms (Upwork, Fiverr):</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Pros:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Lower cost: $15-25/hour</li>
                    <li>• No long-term contracts</li>
                    <li>• Direct relationship</li>
                    <li>• Huge selection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Cons:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Juggling 3-5 other clients (you're not their priority)</li>
                    <li>• No backup when sick or quits</li>
                    <li>• You handle all HR/payroll/taxes</li>
                    <li>• High turnover (average 18-24 months)</li>
                    <li>• 60-70% don't work out</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Managed Service (ShoreAgents Model):</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Pros:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Vetted talent (we only place top 3%)</li>
                    <li>• Backup coverage when needed</li>
                    <li>• Training and onboarding included</li>
                    <li>• Replacement guarantee</li>
                    <li>• Support team available</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Cons:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Higher cost: $1,200-2,500/month full-time</li>
                    <li>• Longer contracts (typically 6-12 months minimum)</li>
                    <li>• 30-40% premium for overhead</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Math:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">Freelancer route:</h4>
                  <p className="text-sm text-gray-700 mb-3">Try 4 different VAs at $1,200/month each over 6 months before finding the right one</p>
                  <p className="font-bold text-gray-900">= $7,200 invested, 6 months of stress</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">Agency route:</h4>
                  <p className="text-sm text-gray-700 mb-3">$2,000/month, successful from month 1</p>
                  <p className="font-bold text-gray-900">= $12,000 over 6 months, peace of mind</p>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                By Month 12, both cost roughly the same—but the agency route gets you productive faster and handles the headaches.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">The Honest Conclusion Nobody Else Will Give You</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Social media VAs work brilliantly for the right businesses at the right time. They fail spectacularly for everyone else.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              If you're doing $500,000+ in annual revenue, spending 10+ hours weekly on social media execution, have documented brand voice and content strategy, and can commit to a 6-month implementation timeline with 5+ hours weekly management time initially—hire a social media VA. You'll reclaim 10+ productive hours weekly, save $30,000-50,000 annually compared to local hires, and finally focus on strategy while execution happens systematically.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              If you're a solopreneur doing under $200,000 annually, hoping someone will "figure out" your social media strategy, expecting results in 30-60 days, or looking for the absolute cheapest option—don't waste your money yet. Use scheduling tools, hire project-based help on Fiverr, and focus on growing your revenue first.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              At ShoreAgents, we place full-time Filipino social media VAs at $1,200-2,500/month depending on experience level. But we only work with businesses who are actually ready—meaning documented systems, realistic expectations about the 90-day ramp-up period, and commitment to proper management.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Sometimes the most valuable thing we do is tell a prospect they should wait another 6-12 months until their business is ready. That honesty might cost us a sale today, but it builds the trust that creates long-term partnerships tomorrow.
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
            Ready to have a frank conversation about whether a social media VA makes sense for your business? We'll tell you what's realistic, what's not, and whether the timing is right. No sales pitch—just 15 years of experience calling it straight.
          </p>
        </div>
      </div>
    </div>
  );
}
