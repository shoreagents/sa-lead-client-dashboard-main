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
  Palette,
  Monitor,
  MessageCircle,
  Image as ImageIcon
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";

export default function GraphicDesignVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['graphic-design-virtual-assistant']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For $250K+ Annual Revenue Businesses
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Graphic Design Virtual Assistant:<br />
              <span className="text-lime-600">Why Late 2025 Search Explosion Signals Disaster for Most First-Time Hirers</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Something unusual happened in the last two months. Google searches for "graphic design virtual assistant" spiked from baseline to absolute peak—we're talking a 100-point index in the United States. That's not gradual growth. That's panic buying.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Businesses are drowning in visual content demands while simultaneously watching 54% of local graphic designers leave their jobs within two years. But here's what'll cost most of these first-time hirers about $18,000 in Year One: they have no bloody clue what they're actually buying.
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
            I've been placing offshore staff with businesses across the USA, Australia, and New Zealand for 15 years. I've seen graphic design VAs transform companies with five social media posts per week into content machines. I've also watched businesses hire "experienced Adobe Suite designers" who couldn't center a logo if their life depended on it.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This guide is for established businesses doing $250,000+ annually who need consistent visual content creation—social media graphics, marketing materials, presentation decks, website assets.</strong> If you're a solopreneur who needs a logo once and a business card design, go to Fiverr. You'll get exactly what you need for $50. Don't pretend you need a full-time VA.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* What Actually Happened Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Actually Happened (And Why Your First Hire Will Probably Fail)</h2>
              <p className="text-lg text-gray-600">The graphic design industry is having an identity crisis</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Here's the reality: 90% of professional graphic designers now work freelance. They're not interested in your full-time offer. They're juggling six clients, charging $45-75/hour on Upwork, and refusing to commit to any single business. Meanwhile, the remaining 10% working in-house? More than half will quit within two years, leaving you back at square one.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                This creates a gap. You need someone who shows up Monday through Friday, knows your brand guidelines by heart, and doesn't disappear mid-project because they landed a better client. That's where graphic design VAs should fit.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">But here's where most businesses screw it up catastrophically:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• They hire someone with "5 years Adobe experience" without asking for a portfolio</li>
                <li>• They assign work with vague briefs like "make it pop" or "something modern"</li>
                <li>• They expect the VA to read their mind about brand guidelines they've never actually documented</li>
                <li>• Then they're shocked when revision round seven still looks nothing like what they wanted</li>
              </ul>
              <p className="text-gray-800 font-semibold mt-4">
                The VA cost $1,500/month. The project delays, missed campaign launches, and frustrated marketing team wasted $16,500. And that's being conservative.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Real Economics Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Calculator className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Real Economics (Because That "$15/Hour" Myth Needs to Die)</h2>
              <p className="text-lg text-gray-600">Let me walk you through the actual maths</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local US Designer Full-Time:</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Base salary:</span>
                  <span className="font-semibold">$50,700-61,300/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Benefits (health, super, leave):</span>
                  <span className="font-semibold">+30% = $15,210-18,390</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Office space/equipment:</span>
                  <span className="font-semibold">$3,600/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software licenses:</span>
                  <span className="font-semibold">$1,800/year (Adobe Creative Cloud)</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">Total Year One:</span>
                  <span className="font-bold text-blue-600 text-xl">$71,310-85,090</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proper Graphic Design VA Full-Time:</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Base rate:</span>
                  <span className="font-semibold">$1,500-2,200/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Recruitment/onboarding:</span>
                  <span className="font-semibold">$2,500 (one-time)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Management overhead:</span>
                  <span className="font-semibold">$200/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software provided by them:</span>
                  <span className="font-semibold">$0</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">Total Year One:</span>
                  <span className="font-bold text-green-600 text-xl">$22,900-31,300</span>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                You're saving $39,010-62,490 annually. But only if you hire properly and manage effectively.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Here's what that doesn't include: the three months of shit work while they learn your brand. The revision cycles because you didn't provide clear briefs. The design assets that technically match specifications but somehow look completely wrong.
              </p>
              <p className="text-gray-800 font-semibold">
                That's not the VA's fault. That's your fault for treating visual design like data entry.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What Works Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Works (The Unglamorous Reality of Getting Quality Design Output)</h2>
              <p className="text-lg text-gray-600">Successful graphic design VA relationships have three things in common</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Documented Brand Guidelines (Not "You'll Figure It Out")</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Your VA needs a brand guide with actual specifications. Not "we like blue" but "Primary: #0066CC, Secondary: #FF6600, never use gradients, logo needs 20px clear space, headlines in Montserrat Bold 24pt." If you don't have this documented, create it before you hire anyone.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                BoxBrownie—a global PropTech company processing thousands of real estate photo editing orders daily—scaled from 2 to 16 ShoreAgents customer service team members by documenting every single process. Their design specifications for photo editing, virtual staging, and floor plans are so precise that quality stays consistent across 117 countries. You need that same precision for your brand.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Portfolio Review That Actually Matters</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Don't hire based on "5 years Adobe experience." Hire based on portfolio work that matches your aesthetic. If you need clean, minimalist social media graphics, don't hire someone whose portfolio is full of maximalist event posters. Different design styles require different sensibilities.
              </p>
              <p className="text-gray-800 font-semibold">
                And test them. Give them a paid trial project with your actual brand guidelines before committing full-time. I've seen businesses waste three months with VAs who looked perfect on paper but couldn't adapt to their specific visual style.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Clear Briefs That Eliminate Mind-Reading</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                "Make a social media post about our new product" is a disaster waiting to happen. A proper brief includes: objective, target audience, key message, dimensions, colour restrictions, copy to include, examples of similar work you've liked, deadline, and how many revision rounds.
              </p>
              <p className="text-gray-800 font-semibold">
                Yes, this takes 10 minutes per project. That 10 minutes prevents 6 hours of revision hell.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Tasks You Can Delegate Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Palette className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Tasks You Can Actually Delegate (And What You Bloody Well Can't)</h2>
              <p className="text-lg text-gray-600">Here's what graphic design VAs excel at when properly briefed and managed</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Here's what graphic design VAs excel at:</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Consistent Social Media Graphics</h4>
                  <p className="text-sm text-gray-700">Daily Instagram posts, Facebook headers, LinkedIn carousels. Businesses using professionally designed social content see 650% more engagement than text-only posts. Your VA can handle this volume once they understand your brand.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Marketing Collateral</h4>
                  <p className="text-sm text-gray-700">Flyers, brochures, email headers, presentation decks. The repetitive stuff that follows established templates but needs customisation for each campaign.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Website Graphics</h4>
                  <p className="text-sm text-gray-700">Banner images, icons, infographics, product photography editing. Not full website design, but the visual elements that populate your pages.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Digital Ads</h4>
                  <p className="text-sm text-gray-700">Display ads, social ads, remarketing graphics. These need A/B testing variations, which means volume. A VA can produce 20 ad variations in the time your local designer produces 3.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Here's what you absolutely cannot delegate without massive oversight:</h3>
              <div className="space-y-3">
                {[
                  "Brand Identity Work – Your logo, your colour palette, your typography system. This requires strategic thinking and market positioning knowledge. Keep this in-house or hire specialist agencies.",
                  "Complex Infographics – Data visualisation that requires understanding your industry and translating complex information. A VA can execute the design once you've mapped the structure, but don't expect them to understand your quarterly financial data without extensive briefing.",
                  "Video Editing – Different skillset entirely. Some VAs have both graphic design and video skills, but they're rare. Hire specifically for video if that's what you need."
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

        {/* Software Situation Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Monitor className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Software Situation (And Why It Actually Matters)</h2>
              <p className="text-lg text-gray-600">42% of businesses now outsource design work instead of hiring in-house</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                42% of businesses now outsource design work instead of hiring in-house, and software is a major reason. Your local designer needs Adobe Creative Cloud ($55/month), possibly Figma ($15/month for professional), and various other tools. You're providing and paying for these.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                Most quality graphic design VAs come with their own Adobe Suite licenses. This matters because it means they're already proficient. The Philippines has a massive graphic design training industry—these aren't people learning on your dime.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">But verify this before hiring:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                "Proficient in Adobe Suite" means nothing. Ask what version they use, how long they've used it, and request specific examples: "Show me a project where you used Illustrator for vector work" or "Walk me through how you'd use Photoshop layers for this social media template."
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Also worth noting:</h3>
              <p className="text-gray-800 leading-relaxed">
                The shift toward Canva for simpler graphics. If 70% of your design work is social media posts and you're not doing complex vector work, a Canva-proficient VA at $1,200/month might serve you better than an Adobe expert at $2,200/month. Don't pay for skills you won't use.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Communication Reality (Because This Always Comes Up)</h2>
              <p className="text-lg text-gray-600">Filipino VAs work during your business hours</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Filipino VAs work during your business hours. When it's 9am Monday morning in Los Angeles, it's 9pm Monday evening in Manila—they're working the same moment you are. No overnight delays. No waiting 24 hours for revisions. Real-time communication.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                This matters more for graphic design than almost any other role because design work requires back-and-forth feedback. "Make the logo bigger" happens in Slack at 11am your time, and they adjust it immediately. That's why this model works for businesses managing multiple campaigns with tight deadlines.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Australian and New Zealand businesses:</h3>
              <p className="text-gray-800 leading-relaxed">
                The timezone overlap is even better—Philippines is only +2 to +4 hours ahead, creating natural working hour alignment during your afternoon, their morning.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* When This Doesn't Work Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When This Doesn't Work (And You Should Walk Away)</h2>
              <p className="text-lg text-gray-600">Most graphic design VA providers won't tell you when their service isn't right for you</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Don't hire a graphic design VA if:</h3>
              <div className="space-y-3">
                {[
                  "You need less than 20 hours per week of design work. You're better off with a freelancer on Upwork for specific projects. Full-time VAs need full-time work to justify the relationship investment.",
                  "Your brand guidelines don't exist and you have no time to create them. You'll spend three months frustrated with output that doesn't match your vision. Create the guidelines first, then hire.",
                  "You need senior art direction, not production design. VAs execute your vision—they don't replace a senior designer who understands brand strategy and market positioning. If you're building brand identity from scratch, hire a local agency for strategy, then use VAs for execution.",
                  "Your industry requires highly specialised knowledge. Medical illustration, architectural rendering, technical diagrams—these need specific expertise and often local certifications. Don't outsource what requires deep industry knowledge.",
                  "You're not willing to provide clear, detailed briefs. If your feedback style is \"I'll know it when I see it\" rather than specific, actionable direction, you'll create revision hell. Design VAs need clarity to succeed."
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

        {/* First 90 Days Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-100 rounded-full p-3">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The First 90 Days (What Actually Determines Success)</h2>
              <p className="text-lg text-gray-600">The difference between businesses that thrive and those that fail</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Successful implementations start with one month of intensive training: your brand history, your visual style evolution, your target audience, your competitors' design approaches, your common project types. This feels slow. It is slow. But it prevents six months of mediocre output.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Then you run parallel operations: your VA creates designs, but you're still verifying everything before it goes live. This catches mistakes before they reach customers while building your confidence in their capabilities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                By Month Three, you should be at 80% autonomy—they're producing work that needs minor feedback rather than complete revisions. If you're not there by 90 days, something's fundamentally wrong. Either your brief process needs work, their skills don't match your needs, or your brand guidelines are insufficient.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                Don't tolerate mediocre design work hoping it'll improve. It won't. Design sensibility either exists or it doesn't. Better to find out early and try someone else.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Australia/NZ Context Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Australian and New Zealand Context</h2>
              <p className="text-lg text-gray-600">For the 10% reading this from there</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Search data shows graphic design VA interest is overwhelmingly American (90%+ of searches), but the economics work just as well for Australian and New Zealand businesses—arguably better due to timezone alignment.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                Sydney or Auckland businesses hiring Filipino designers get the same $1,500-2,200/month (AUD $2,280-3,345 or NZD $2,475-3,690) while local designers cost $60,000-75,000 annually. That's a 70% saving while getting real-time collaboration during overlapping business hours.
              </p>
              <p className="text-gray-800 font-semibold">
                The difference is terminology: Americans search "graphic design virtual assistant" while Australians and Kiwis more often search "offshore graphic designer" or "outsourced design services." Same concept, different language. Just know that when you see "VA" in American content, it's the same full-time offshore designer you're considering.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What ShoreAgents Provides Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Building2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What ShoreAgents Actually Provides (Without the Bullshit)</h2>
              <p className="text-lg text-gray-600">We place full-time graphic design VAs at $1,200-2,500/month</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                We place full-time graphic design VAs at $1,200-2,500/month depending on experience level and skill complexity. That includes recruitment, vetting portfolios, checking Adobe proficiency, and replacement if the first match doesn't work.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">But we don't pretend every business needs this:</h3>
              <p className="text-gray-800 leading-relaxed">
                If you're doing under $250,000 revenue annually, you probably don't have enough design work to justify full-time support. Wait until you do.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">We also don't promise:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• "Immediate results" or "perfect fit first try"</li>
                <li>• Design is subjective. The VA we think matches your aesthetic might not resonate with you</li>
                <li>• That's why we offer replacements and expect a 90-day ramp-up period before you see full productivity</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What we do well:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Sourcing Filipino designers with proper Adobe training</li>
                <li>• Documenting your brand requirements</li>
                <li>• Managing the relationship logistics so you focus on creative direction rather than HR administration</li>
              </ul>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">What we don't do:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Replace senior creative directors</li>
                <li>• Provide strategic brand consulting</li>
                <li>• Work miracles with businesses that have no documented visual guidelines</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Actual Decision Point Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Target className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Actual Decision Point</h2>
              <p className="text-lg text-gray-600">Search interest spiking 100 points doesn't mean everyone should hire</p>
            </div>
          </div>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Search interest spiking 100 points doesn't mean everyone should hire. It means a lot of businesses are about to make expensive mistakes because they're following trends instead of assessing actual need.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Here's the real question:</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>• Do you have 30+ hours weekly of documented, repeatable design work?</li>
                <li>• Can you provide clear briefs?</li>
                <li>• Do you have brand guidelines that specify colours, fonts, and visual style?</li>
                <li>• Are you willing to invest three months training someone properly?</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                If yes to all four, graphic design VAs can transform your content production. You'll go from struggling to post three times weekly to having a content calendar booked two weeks ahead. You'll stop compromising campaign launches because "we don't have the graphics ready."
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                If no to any of those questions, fix that first. Hiring a VA won't solve problems you haven't defined.
              </p>
              <p className="text-gray-800 font-semibold">
                The businesses succeeding with offshore design staff aren't the ones jumping on trends. They're the ones who invested time documenting their processes, creating clear specifications, and committing to proper onboarding. That's not sexy. It's not fast. But it's what actually works.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for an Honest Assessment?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Graphic design VAs work brilliantly when implemented properly by ready businesses with documented brand guidelines and clear brief processes. The question is whether that describes your situation right now.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              ShoreAgents places full-time Filipino graphic design virtual assistants at $1,200-2,500/month. We'll tell you honestly if you're not ready yet (under $250K revenue, no brand guidelines), if you need a local agency for brand strategy first, or if freelancers make more sense for your current volume.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              We only succeed when you succeed. And that means being brutally honest about when graphic design VAs make sense—and when they don't. No sales pitch, just 15 years of experience telling it straight.
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
            Want to discuss whether your business is ready for a graphic design VA? We'll tell you honestly—even if it means you're not ready yet and should come back in six months after building proper systems.
          </p>
        </div>
      </div>
    </div>
  );
}
