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
  Monitor,
  MessageCircle,
  BarChart3,
  Zap
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";

export default function ContentWritingVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['content-writing-virtual-assistant']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For $500K+ Annual Revenue Businesses
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Content Writing Virtual Assistant:<br />
              <span className="text-lime-600">Why AI Made Them More Valuable (Not Obsolete)</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              ChatGPT writes 10,000 words in ten minutes. So why are businesses paying $1,200-2,500 monthly for content writing virtual assistants when AI does it for $20?
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Because 52% of web content is now AI-generated slop that ranks for nothing, converts nobody, and makes your brand sound like every other generic business on the internet. The content VAs who survive aren't the ones who write fast. They're the ones who can take AI's garbage first draft, inject actual insight, match your brand voice, and turn algorithmic word salad into content people actually want to read.
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
            This guide is for established businesses spending $5,000+ monthly on content marketing who are drowning in mediocre blog posts that nobody reads. If you're a solopreneur wanting cheap articles, ChatGPT already does that better than any $10/hour VA ever will.
          </p>
        </div>

        <Separator className="my-12" />

        {/* AI Content Crisis Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The AI Content Crisis (And Why It Created A New Job)</h2>
              <p className="text-lg text-gray-600">Here's what happened between 2023 and 2025</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Here's what happened between 2023 and 2025: AI tools went from "interesting experiment" to "71% of newly published content needs major human editing before publication." Companies thought AI would replace writers. Instead, AI created an ocean of identically mediocre content that all sounds the same, ranks poorly, and converts worse.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                Research from Ahrefs analysing 900,000 newly created webpages found that AI-assisted content with skilled human editing increases organic traffic by 31%, improves keyword rankings by 24%, and does it 68% faster than human-only content. The secret isn't choosing between AI or humans—it's having humans who know how to make AI useful rather than just faster.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Your content writing VA in 2025 isn't someone who writes blog posts from scratch. They're someone who understands your industry well enough to spot when ChatGPT is making things up, knows your brand voice deeply enough to rewrite robotic phrasing, and has the editorial judgement to turn generic AI responses into content with an actual point of view.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Bad content VAs will happily pump out 50 AI-generated articles monthly that tank your SEO. Good content VAs will push back and say "you don't need 50 articles, you need 8 really good ones that people will actually read and share." The difference shows up in your traffic analytics six months later.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What Content VAs Actually Do Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Edit className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Content VAs Actually Do Now</h2>
              <p className="text-lg text-gray-600">The skills that separate valuable VAs from obsolete ones</p>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">AI-Assisted Research & Editorial Control</h3>
                <p className="text-sm text-gray-700">Modern content VAs use AI for initial research and outline creation, then verify everything because AI hallucinates constantly. They're checking claims against real sources, adding data that actually exists, and building outlines that have logical flow rather than "5 random points ChatGPT suggested."</p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Brand Voice Adaptation</h3>
                <p className="text-sm text-gray-700">Anyone can write grammatically correct English. Few people can write in YOUR voice consistently across 20 blog posts. Great content VAs study your existing content, internalise your tone, and produce articles that sound like they came from your team rather than a content mill.</p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Strategic Content Planning</h3>
                <p className="text-sm text-gray-700">The best content VAs don't just write what you tell them. They research your competitors, identify content gaps, propose topics that will actually drive traffic, and maintain a content calendar aligned with business goals rather than just filling a publishing schedule.</p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">SEO Optimisation (The Real Kind)</h3>
                <p className="text-sm text-gray-700">Post-AI, Google heavily punishes generic keyword-stuffed content. Skilled content VAs understand search intent, structure content for featured snippets, use semantic keywords naturally, and write headlines that balance SEO requirements with actual human readability.</p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Editorial Judgement</h3>
                <p className="text-sm text-gray-700">This separates $600/month VAs from $2,000/month VAs. Can they read a draft and identify where it's too vague, making unsupported claims, or missing the point? Can they push back when your CEO wants a 3,000-word article about something nobody cares about? Editorial judgement requires years of experience; it can't be taught in a week.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Filipino Advantage Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Filipino Advantage (With Honest Limitations)</h2>
              <p className="text-lg text-gray-600">Filipino content VAs dominate this space for good reasons</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Filipino content VAs dominate this space because the Philippines has a mature outsourcing industry that's trained English-language professionals for decades. Educated Filipino professionals speak fluent, business-appropriate English from their education system and massive call centre industry background.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time communication:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Filipino content VAs working USA business hours (Manila nighttime) respond in real-time during YOUR 9-5. When you Slack them at 10am your time, they respond immediately—zero communication lag. For Australian and New Zealand businesses, there's natural overlap during your afternoon (Manila morning).
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cost reality:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                ShoreAgents pricing runs $1,200-2,500 monthly depending on experience and strategic capability. That's all-in: salary, management, office infrastructure, HR support, and replacement guarantees. Compare to USA content writers at $48,000-72,000 annually, or Australian/NZ writers at AUD/NZD $60,000-88,000. You're saving $26,000-66,000 annually—but only if they actually produce content that drives results.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The limitations:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Filipino content VAs sometimes struggle with deeply technical subjects requiring specialised expertise, ultra-local cultural nuance (writing for hyperlocal USA markets), and aggressive brand voices (they default to "professional and polite"). For highly technical content, use hybrid models: subject matter expert provides bullet points, VA drafts, expert reviews. For aggressive brand voices, provide extensive training examples.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Pricing Tiers Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What The Pricing Tiers Actually Mean</h2>
              <p className="text-lg text-gray-600">Not all content VAs are created equal</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">$1,200-1,500/month - Solid execution with clear direction</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Give them a detailed brief and they'll produce a first draft needing standard editing. They write clean English, hit deadlines, follow your style guide. What they don't do: strategic thinking or bringing insights you didn't have. Works for businesses with strong internal content strategy needing execution capacity.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-700"><strong>Typical output:</strong> 15-20 blog posts monthly at 1,200-1,500 words. Quality is "consistently good." Revision rate: 15-20%.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">$1,600-2,000/month - Strategic thinking enters the picture</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                These VAs suggest better topics based on competitor analysis, identify when your brief doesn't answer search intent, write SEO-optimised AND compelling headlines. They verify AI facts against real sources and can interview subject matter experts.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-700"><strong>Typical output:</strong> 12-16 high-quality, research-intensive blog posts monthly. Quality is "reliably excellent." Revision rate: 5-10%.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">$2,100-2,500/month - Fractional content director</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                They develop content strategies, analyse performance, recommend pivots, ghostwrite thought leadership, understand the full content funnel, and spot opportunities competitors miss. They're shaping your content direction, not just executing it.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-700"><strong>Typical output:</strong> 8-12 deeply researched pieces monthly that move actual business metrics. Revision rate: Under 5%.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border-l-4 border-gray-600 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                If you have strong content leadership internally, the $1,200-1,500 tier gives excellent value. If your content strategy consists of "we should probably blog more," you need the $1,600-2,000 tier or you're wasting money.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When Not Ready Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When You're Not Ready (Most Businesses Aren't)</h2>
              <p className="text-lg text-gray-600">Let me save you $44,400 and six months of frustration</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <div className="space-y-3">
                {[
                  "You're doing under $500K annual revenue and still figuring out product-market fit. Your content needs are minimal and sporadic—better served by freelancers than monthly overhead.",
                  "You can't dedicate 5-8 hours weekly to content direction and feedback. Content VAs aren't set-and-forget. They need input, examples, and iteration especially in the first 90 days.",
                  "You haven't documented your brand voice or content guidelines. Expecting a VA to figure out your brand voice from osmosis sets both of you up for frustration.",
                  "Your idea of \"content strategy\" is \"we should blog sometimes.\" That produces random articles that accomplish nothing. Wait until you can articulate what specific business outcomes your content needs to drive."
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Here's what I see constantly: businesses hire content VAs, set them loose producing 30 blog posts monthly, then wonder why traffic doesn't improve. The problem isn't the VA—it's that you never had a content strategy. Content VAs execute strategy; they don't create it from nothing.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real example:</h3>
              <p className="text-gray-800 leading-relaxed">
                Client hired a competent content VA at $1,500/month for a year, produced 180 blog posts, saw zero traffic growth because every article targeted keywords with no commercial intent. After auditing their approach, we cut publishing to 8 articles monthly focused on high-intent keywords. Result: 340% traffic increase in six months. Less content, actual strategy, same VA.
              </p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 90-Day Reality Timeline</h2>
              <p className="text-lg text-gray-600">Every content VA provider promises "ready in two weeks." That's rubbish</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-4">
            <CardContent className="p-6">
              <Badge className="bg-red-600 text-white mb-3">Days 1-30</Badge>
              <p className="text-gray-800 leading-relaxed mb-2">
                Even experienced VAs need time to understand your business, voice, and goals. Plan to spend 8-10 hours this month on training. Output quality will be 60-70% of where it needs to be. If you don't have documented brand voice guidelines, your VA is guessing what you want—they'll guess wrong frequently.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-4">
            <CardContent className="p-6">
              <Badge className="bg-amber-600 text-white mb-3">Days 31-60</Badge>
              <p className="text-gray-800 leading-relaxed mb-2">
                Your VA produces more consistent content but you're still doing meaningful editing. Content is 80-85% there. Time investment drops to 4-6 hours weekly. If you're not tracking what content drives traffic, neither you nor your VA knows what's working.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <Badge className="bg-green-600 text-white mb-3">Days 61-90</Badge>
              <p className="text-gray-800 leading-relaxed mb-2">
                Content quality is consistently 90-95%. Your VA brings topic ideas, not just executes assignments. You're spending 2-3 hours weekly on strategic direction and approvals. This is when content VAs start delivering actual ROI.
              </p>
              <p className="text-gray-800 font-semibold mt-4">
                By day 90, if your VA isn't producing content you'd confidently publish with minimal changes, something went wrong. Don't continue hoping they'll improve—either intensify training or admit the match isn't working.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Actual Costs Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Calculator className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What This Actually Costs</h2>
              <p className="text-lg text-gray-600">ShoreAgents' full-time content writing VAs run $1,200-2,500 monthly</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">First year realistic costs for a $1,800/month VA:</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">VA monthly fee:</span>
                  <span className="font-semibold">$1,800 × 12 = $21,600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your training time:</span>
                  <span className="font-semibold">60 hours @ $100/hour = $6,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your ongoing management:</span>
                  <span className="font-semibold">3 hours weekly × 52 × $100 = $15,600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Tools/subscriptions:</span>
                  <span className="font-semibold">$1,200</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">Year One total:</span>
                  <span className="font-bold text-red-600 text-xl">$44,400</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Compare to local USA content marketer: $60,000-78,000 annually. You're saving $15,600-33,600 the first year.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                For Australian businesses, expect AUD $2,200-3,600 monthly. New Zealand similar at NZD $2,200-3,500.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                The hidden cost: your time. Budget 8-10 hours weekly minimum in the first three months, dropping to 3-5 hours after training. If you don't have that time, hiring a VA will feel like a burden.
              </p>
              <p className="text-gray-800 font-semibold">
                Break-even happens around month 5-6. If you're not seeing clear productivity gains by month 6, diagnose the actual problem—don't continue hoping it improves.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Honest Assessment Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Honest Assessment</h2>
              <p className="text-lg text-gray-600">Content writing VAs work extraordinarily well for some, fail spectacularly for others</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Content writing VAs work extraordinarily well for:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Established businesses with clear content strategy, defined brand voice, and someone internal providing strategic direction even if they don't have time to write themselves. They can 10x your content output at 60-75% lower cost than local content marketers.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Content writing VAs fail spectacularly for:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Businesses without content strategy hoping the VA will figure it out, companies treating content as a checkbox, organisations unwilling to invest time in training, or businesses expecting the VA to be writer, strategist, designer, SEO expert, and social media manager for $1,200 monthly.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                The AI revolution didn't make content VAs obsolete. It made bad content VAs obsolete while making good content VAs more valuable than ever. In a world where anyone can generate 10,000 words in minutes, the ability to produce content that sounds human, reflects strategic thinking, and accomplishes business objectives is rarer and more valuable than ever.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                If you're a medium business (10+ employees, $1M+ revenue) spending $5,000+ monthly on content marketing that gets minimal engagement, a skilled content writing VA at $1,600-2,500/month can deliver better results than three junior local content marketers costing $120,000 combined. But that only works if you have clear content strategy and internal strategic direction.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                If you're under $500K revenue, still figuring out messaging, or can't commit 5-8 hours weekly to content collaboration, you're not ready. Focus on establishing product-market fit and developing your content perspective. Come back when you know what you want to say but don't have time to say it.
              </p>
              <p className="text-gray-800 font-semibold mt-4">
                The difference between content VA success and failure isn't the VA's capability—it's whether your business has the foundation (strategy, voice, metrics) to give them what they need to succeed. Most businesses blame the VA when really their content strategy was the problem all along.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Before You Contact Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-100 rounded-full p-3">
              <AlertCircle className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Before You Contact Anyone</h2>
              <p className="text-lg text-gray-600">You're ready to explore hiring a content writing VA if you can answer "yes" to all these questions</p>
            </div>
          </div>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <div className="space-y-3">
                {[
                  "Do you have documented content strategy explaining what your content should accomplish?",
                  "Can you commit 8-10 hours weekly for the first 90 days to training and feedback?",
                  "Do you have examples representing your brand voice and quality standards?",
                  "Are you tracking content performance with actual metrics?",
                  "Is your monthly content budget at least $1,500?",
                  "Do you have realistic expectations about the 90-day ramp period?"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Separator className="my-4" />
              <p className="text-gray-800 font-semibold mb-4">
                If you answered "no" to any question, that's your starting point. Build that foundation before hiring.
              </p>
              <p className="text-gray-800 font-semibold">
                If you answered "yes" to everything, you're genuinely ready. Not ready yet? That's most businesses. Clarify your content strategy, document your brand voice, and establish success metrics. We'll still be here when you're prepared.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for an Honest Conversation?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Content writing VAs work brilliantly when businesses are actually prepared for them. Are you prepared, or are you hoping a VA will compensate for lack of strategy?
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation where we'll assess whether you actually need a content VA, what tier makes sense, and whether your foundation is solid enough to make this work. We'll tell you if you're not ready—better to be honest upfront than waste six months and $10,000 discovering that the hard way.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              The difference determines whether you get incredible value or expensive disappointment.
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
      </div>
    </div>
  );
}
