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
  Zap,
  Monitor,
  MessageCircle
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";

export default function MarketingVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['marketing-virtual-assistant']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For $100K+ Annual Revenue Businesses
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Marketing Virtual Assistant:<br />
              <span className="text-lime-600">The $8,500/Month Decision Nobody Explains (Generalist vs Specialist)</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Hiring a Social Media Manager costs $70K, a Content Writer costs $55K, and an SEO Specialist costs $65K. Or you could hire one Marketing VA for $24K who handles all three at 70% capacity. Here's when the $24K option actually makes sense (and when it's a terrible idea).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong>CRITICAL FINDING:</strong> "Marketing Virtual Assistant" has extremely low search volume because it's not how buyers search. Businesses don't look for "marketing VAs"—they search for specific specialists (Social Media Manager, Content Writer, SEO Specialist) or for "marketing outsourcing" solutions. The term "Marketing VA" is primarily industry terminology used by providers, not clients.
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
            This creates a massive opportunity: position "Marketing Virtual Assistant" as the "Marketing Generalist" or "Marketing Coordinator" who handles 8-10 marketing functions at 60-70% capacity each, versus hiring 3-4 specialists at full salary.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This guide is for businesses doing $100,000+ in annual revenue who need ongoing marketing execution support.</strong> If you're under $100K revenue, focus on DIY marketing + free tools + founder-led content. If you're testing marketing with sporadic 5-hour projects, hire a Fiverr freelancer. Come back when you've got systematic work to delegate.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* What IS a Marketing VA Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What IS a Marketing Virtual Assistant? (The Term Confusion)</h2>
              <p className="text-lg text-gray-600">Nobody searches for "Marketing Virtual Assistant" because buyers don't know what it means</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                The Problem: Nobody searches for "Marketing Virtual Assistant" because buyers don't know what it means. Are they hiring a Social Media Manager? A Content Writer? An SEO Specialist? A Marketing Coordinator? A Strategic Marketing Manager?
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                The Confusion Pattern: Search "Social Media Manager" → $70,287 average salary, strategic role. Search "Virtual Assistant" → $39,915 average salary, execution role. Search "Marketing Virtual Assistant" → ??? (nobody knows what this is)
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Clear Definition:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Marketing VA = Marketing Coordinator/Generalist</strong> (handles 8-10 functions)</li>
                <li>• <strong>NOT a specialist</strong> in any one area</li>
                <li>• <strong>Executes YOUR strategy</strong>, doesn't create strategy</li>
                <li>• <strong>Best for businesses</strong> with established marketing plan needing execution support</li>
                <li>• <strong>NOT for businesses</strong> needing strategic direction (hire Marketing Manager or Fractional CMO instead)</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Generalist vs Specialist Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Generalist vs Specialist Decision Framework</h2>
              <p className="text-lg text-gray-600">The $8,500/month cost difference</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">When You Need a GENERALIST (Marketing VA):</h3>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• You have a marketing strategy already</li>
                <li>• You need someone to execute across multiple channels</li>
                <li>• Tasks are varied: social posts + email campaigns + blog scheduling + CRM updates + basic graphics</li>
                <li>• No single task needs expert-level execution</li>
                <li>• Budget: $1,800-2,500/month for one person doing "a bit of everything"</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">When You Need SPECIALISTS Instead:</h3>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• One channel is your primary growth lever (social media, content, SEO)</li>
                <li>• You need expert-level strategy AND execution</li>
                <li>• You're willing to pay $3,000-5,000/month per specialist</li>
                <li>• Example: Fast-growing e-commerce brand needs dedicated Social Media Manager</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Cost Math:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">Option A: Marketing VA Generalist</h4>
                  <div className="space-y-1 text-sm text-gray-700 mb-3">
                    <p>• $2,000/month</p>
                    <p>• Handles: Social (20%), Email (15%), Content (20%), SEO (15%), Graphics (10%), CRM (10%), Ads (10%)</p>
                    <p>• Depth: Basic-to-intermediate execution across all functions</p>
                  </div>
                  <p className="font-bold text-gray-900">Total: $2,000/month</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">Option B: Hire Specialists</h4>
                  <div className="space-y-1 text-sm text-gray-700 mb-3">
                    <p>• Social Media Manager: $4,000/month</p>
                    <p>• Content Writer: $3,000/month</p>
                    <p>• SEO Specialist: $3,500/month</p>
                  </div>
                  <p className="font-bold text-gray-900">Total: $10,500/month</p>
                </div>
              </div>
              <p className="text-gray-800 font-bold text-lg mt-4 text-center">
                The Gap: $8,500/month savings—BUT you sacrifice depth for breadth
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Strategy Problem Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Strategy Problem Nobody Discusses</h2>
              <p className="text-lg text-gray-600">What competitors say vs what they don't say</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                What Competitors Say: "Our Marketing VAs handle social media, content, SEO, email marketing, and more!"
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                What They Don't Say: Marketing VAs execute. They don't strategize.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing VAs CAN do:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Schedule social media posts (that YOU created strategy for)</li>
                  <li>• Send email campaigns (that YOU wrote copy for or approved)</li>
                  <li>• Update blog posts (that YOU outlined or approved)</li>
                  <li>• Run ads (that YOU set strategy and budget for)</li>
                  <li>• Create graphics (from YOUR brand guidelines and direction)</li>
                  <li>• Respond to comments/messages (following YOUR brand voice guidelines)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing VAs CANNOT do (without strategic oversight):</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Develop your marketing strategy</li>
                  <li>• Identify your target audience and positioning</li>
                  <li>• Determine which marketing channels to prioritize</li>
                  <li>• Create content strategy and editorial calendar</li>
                  <li>• Analyze performance and pivot strategy</li>
                  <li>• Make budget allocation decisions</li>
                  <li>• Build marketing systems from scratch</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Failure Pattern:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Businesses hire a Marketing VA expecting: "Just handle my marketing"
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                What they actually get: "What should I post? What's our strategy? Who's our audience? What's our message?"
              </p>
              <p className="text-gray-800 font-semibold">
                Result: Frustrated business owner, confused VA, wasted money
              </p>
              <p className="text-gray-800 font-semibold mt-4">
                The Solution: Marketing VAs work BEST when you have clear marketing strategy documented, brand guidelines established, content calendar template created, SOPs for each marketing function, and examples of what "good" looks like.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Real Cost Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Calculator className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Real Cost Reality</h2>
              <p className="text-lg text-gray-600">What's advertised: "Marketing VAs from $15-25/hour! Save 60-70%!" What it actually costs</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">YEAR ONE INVESTMENT:</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Marketing VA Salary:</span>
                  <span className="font-semibold">$24,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software Stack:</span>
                  <span className="font-semibold">$1,884/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your Training Time (86 hrs @ $150/hr):</span>
                  <span className="font-semibold">$12,900</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Your Ongoing Management Time (180 hrs @ $150/hr):</span>
                  <span className="font-semibold">$27,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Mistakes/Rework Cost:</span>
                  <span className="font-semibold">$3,000-5,000</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">YEAR ONE TOTAL:</span>
                  <span className="font-bold text-red-600 text-xl">$68,784</span>
                </div>
                <p className="text-red-700 font-semibold mt-2">Effective Hourly Rate: $33.80/hour (not $20!)</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">YEAR TWO (Ongoing):</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">VA Salary:</span>
                  <span className="font-semibold">$24,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Software:</span>
                  <span className="font-semibold">$1,884</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Management time (reduced):</span>
                  <span className="font-semibold">$15,600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Mistakes (minimal):</span>
                  <span className="font-semibold">$1,000</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-gray-900">YEAR TWO TOTAL:</span>
                  <span className="font-bold text-blue-600 text-xl">$42,484</span>
                </div>
                <p className="text-blue-700 font-semibold mt-2">Effective Hourly Rate: $20.80/hour</p>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                Break-Even: Month 18-22. When It Makes Financial Sense: Your marketing activities should generate minimum $3,000/month in business value to justify $2,000 VA. If VA saves you 20 hours/month @ $150/hour value = $3,000 value. ROI: 50% return on investment.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Revenue Threshold Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The $100K Revenue Threshold</h2>
              <p className="text-lg text-gray-600">The revenue threshold guide no VA company will show you</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Under $100K annual revenue:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                DON'T hire a marketing VA yet. Focus: DIY marketing + free tools + founder-led content. Reason: Can't justify $24K+ investment (24%+ of revenue).
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">$100K-250K revenue:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Consider PART-TIME (20 hrs/week). Cost: $1,200/month instead of $2,400. Focus: Execution-only tasks (scheduling, basic graphics). Still handle strategy and content creation yourself.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">$250K-500K revenue:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Full-time marketing VA makes sense. Cost: $2,000-2,500/month. ROI: 10% of revenue invested in marketing is reasonable. Focus: Full execution support across all channels.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">$500K+ revenue:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Consider specialists OR marketing manager + VA team. Cost: $5,000-10,000/month. Strategy: Hire Marketing Manager ($4K) + support VA ($2K) OR hire channel specialists (Social, Content, SEO).
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 90-Day Productivity Timeline</h2>
              <p className="text-lg text-gray-600">What competitors promise: "Hit the ground running! Start seeing results immediately!" Actual timeline:</p>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-6">
                <Badge className="bg-red-600 text-white mb-3">Days 1-30</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Setup Phase (You're SLOWER, not faster)</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Creating brand guidelines, building content templates, documenting processes, initial training and onboarding, constant questions: "What should this look like?"
                </p>
                <p className="text-gray-800 font-semibold">Your time investment: 10-15 hours/week. Their output: 30% capacity (learning mode). Your marketing: Actually suffers as you divert attention.</p>
              </CardContent>
            </Card>

            <Card className="border-amber-300 bg-amber-50">
              <CardContent className="p-6">
                <Badge className="bg-amber-600 text-white mb-3">Days 30-60</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Training Wheels Phase</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Starting to execute independently, still needs regular guidance and approval, quality inconsistent—requires review of everything.
                </p>
                <p className="text-gray-800 font-semibold">Your time investment: 5-7 hours/week. Their output: 50-60% capacity. Your marketing: Back to baseline (not better yet)</p>
              </CardContent>
            </Card>

            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6">
                <Badge className="bg-blue-600 text-white mb-3">Days 60-90</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Momentum Phase</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Executing routine tasks independently, quality improving and more consistent, knows brand voice and guidelines.
                </p>
                <p className="text-gray-800 font-semibold">Your time investment: 3-5 hours/week. Their output: 70-80% capacity. Your marketing: Starting to scale</p>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <Badge className="bg-green-600 text-white mb-3">Month 4-6</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Payoff Phase</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Operating independently on established tasks, can handle 80-90% of execution without oversight.
                </p>
                <p className="text-gray-800 font-semibold">Your time investment: 2-3 hours/week. Their output: 85-95% capacity. Your marketing: Significantly scaled</p>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6">
                <Badge className="bg-lime-600 text-white mb-3">Month 6+</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Scaling Phase</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Fully autonomous on core functions, can train on new tools/platforms quickly, anticipates needs and suggests improvements.
                </p>
                <p className="text-gray-800 font-semibold">Your time investment: 1-2 hours/week (strategic check-ins). Their output: 95-100% capacity. Your marketing: Running like a well-oiled machine</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-100 border-l-4 border-gray-600 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 font-semibold">
                Real Example Pattern: Most businesses don't see positive ROI until Month 4-5. Anyone claiming "immediate results" is lying or cherry-picking success stories.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Tasks Never Delegate Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Tasks You Should NEVER Delegate</h2>
              <p className="text-lg text-gray-600">7 marketing tasks that will destroy your brand if you delegate them</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Never Delegate to a Marketing VA:</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Strategy & Decision-Making:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Marketing strategy development (requires deep business knowledge)</li>
                    <li>• Budget allocation decisions (requires ROI analysis and business context)</li>
                    <li>• Channel prioritization (which platforms to focus on)</li>
                    <li>• Target audience definition (requires customer insight)</li>
                    <li>• Brand positioning (your unique value proposition)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">High-Stakes Content:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Thought leadership content (needs founder/CEO voice and expertise)</li>
                    <li>• Major announcements (funding, pivots, crisis communications)</li>
                    <li>• Sales pages and landing pages (conversion-critical copy)</li>
                    <li>• Brand voice definition (sets tone for everything else)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Relationship-Critical Activities:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Key client communications (personal touch required)</li>
                    <li>• Partnership negotiations (requires business judgment)</li>
                    <li>• Crisis management (too high-stakes for junior VA)</li>
                    <li>• Major campaign launches (needs founder oversight)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Analytics & Pivots:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Performance analysis and strategic pivots (requires business acumen)</li>
                    <li>• Marketing attribution (complex analysis)</li>
                    <li>• ROI calculations (needs full business picture)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Perfect to Delegate:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Social media post scheduling</li>
                  <li>• Email list management and sending</li>
                  <li>• Blog post uploading and formatting</li>
                  <li>• Basic graphic design (from templates)</li>
                  <li>• Content repurposing across platforms</li>
                </ul>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Community management (responding to comments)</li>
                  <li>• CRM data entry and updates</li>
                  <li>• Reporting and dashboard creation</li>
                  <li>• Competitor monitoring</li>
                  <li>• Basic SEO optimization</li>
                </ul>
              </div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When Marketing VAs Work BEST (And When They Won't Work)</h2>
              <p className="text-lg text-gray-600">Let me save some of you $68,784 right now</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">When Marketing VAs WON'T Work:</h3>
              <div className="space-y-3">
                {[
                  "No marketing strategy in place = disaster. If you can't explain your strategy, don't hire anyone yet.",
                  "Under $100K revenue = can't justify cost. The SEO work volume doesn't justify full-time offshore staffing.",
                  "Expecting strategic thinking = wrong hire. SEO VAs excel at tactical implementation, not strategy development.",
                  "No time to manage = waste of money. If you can't commit 4-5 hours weekly initially, they'll flounder.",
                  "Need specialist expertise = hire specialist instead. If one channel is your primary growth lever, hire an expert."
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">When Marketing VAs Work BEST:</h3>
              <div className="space-y-3">
                {[
                  "Clear strategy already exists. You know the strategy, you just need someone to execute it.",
                  "Multiple marketing channels need execution. Tasks are varied across social, email, content, SEO, graphics.",
                  "Time-consuming tasks draining your focus. You're spending 20+ hours weekly on marketing execution.",
                  "Budget for generalist, not specialist. You need breadth across functions, not depth in one area.",
                  "You can invest time in training/management. You're prepared for 4-5 hours weekly initially, reducing to 2-3 hours ongoing."
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

        {/* Regional Considerations Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Regional Considerations: USA vs Australia vs New Zealand</h2>
              <p className="text-lg text-gray-600">Terminology, expectations, and cost differences</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">USA Market:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Preferred terms:</strong> "Digital Marketing Virtual Assistant," "Marketing Virtual Assistant," "Remote Marketing Assistant"</li>
                <li>• <strong>Search volume:</strong> Very low for exact match "Marketing Virtual Assistant"—people search for specialists instead</li>
                <li>• <strong>Cost expectations:</strong> $15-40/hour ($1,800-3,200/month full-time)</li>
                <li>• <strong>Behavior:</strong> Search for specialists (Social Media Manager, Content Writer, SEO Specialist) rather than generalists</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Australia Market:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Preferred terms:</strong> "Marketing Outsourcing," "Outsourced Marketing Services," "Fractional CMO"</li>
                <li>• <strong>Search behavior:</strong> Looking for strategic marketing partners, not task executors</li>
                <li>• <strong>Market expectation:</strong> Want "Marketing Manager" level strategic thinking</li>
                <li>• <strong>Cost expectations:</strong> Premium pricing—Australian companies charge $3,000-5,000 AUD/month for part-time marketing management</li>
                <li>• <strong>Key difference:</strong> Australians expect strategy + execution, Americans expect execution only</li>
                <li>• <strong>Time zone advantage:</strong> Manila is only 2-3 hours behind Australian Eastern Time. Natural business hours overlap, better work-life balance for VA</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">New Zealand Market:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Follows Australian patterns</strong> almost identically</li>
                <li>• <strong>"Marketing outsourcing"</strong> terminology dominant</li>
                <li>• <strong>Very low search volumes</strong> overall</li>
                <li>• <strong>Influenced heavily</strong> by Australian market trends</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Australia Strategy Expectation Gap Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-amber-100 rounded-full p-3">
              <AlertCircle className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Strategy Expectation Gap (Australia-Specific)</h2>
              <p className="text-lg text-gray-600">What Australian businesses expect vs what "Marketing VA" actually provides</p>
            </div>
          </div>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What Australian Businesses Expect:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                "Marketing Outsourcing" in Australia means hiring a strategic partner who develops AND executes your marketing strategy.
              </p>
              <p className="text-gray-800 font-semibold mb-4">Australian companies promoting "marketing outsourcing" typically offer:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Strategic Marketing Managers ($3,000-5,000 AUD/month)</li>
                <li>• Strategy development PLUS execution</li>
                <li>• Part-time senior marketing leadership (Fractional CMO model)</li>
                <li>• Monthly strategy sessions and performance reviews</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What "Marketing VA" Actually Provides:</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Execution support only</li>
                <li>• Lower cost ($1,500-2,500 AUD/month)</li>
                <li>• Assumes YOU have strategy in place</li>
                <li>• Hourly or task-based support</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Solution:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Position Marketing VA for Australian market as "Marketing Execution Support" or "Marketing Coordinator"—NOT strategic oversight (clarify this explicitly). Works UNDER your Marketing Manager or executes YOUR strategy. Lower price point than Fractional CMO/Marketing Manager services.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Time Zone Advantage Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Time Zone Advantage (Australia/NZ-Specific)</h2>
              <p className="text-lg text-gray-600">Why Australian businesses have a secret advantage with offshore marketing support</p>
            </div>
          </div>

          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Hidden Benefit:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                While USA businesses force Philippines VAs onto graveyard shifts (causing burnout), Australian and New Zealand businesses get natural daytime overlap.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Philippines → USA:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Manila is -12 to -16 hours behind USA</li>
                    <li>• 9am Los Angeles = 1am Manila (next day)</li>
                    <li>• Result: VAs work night shift, health issues, higher turnover</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Philippines → Australia:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Manila is +2 to +4 hours ahead of Australian East Coast</li>
                    <li>• 9am Sydney = 7am Manila (same day)</li>
                    <li>• Result: Natural business hours overlap, better work-life balance for VA</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Advantage for AUS/NZ Businesses:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Same-day communication (no 12-hour delays)</li>
                <li>• Healthier work environment for VA (daytime work)</li>
                <li>• Lower turnover (better quality of life = stay longer)</li>
                <li>• Real-time collaboration possible</li>
                <li>• Morning handoffs work (VA's afternoon = your morning)</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What Marketing VAs Actually Do Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Marketing VAs Actually Do (Day-to-Day Tasks)</h2>
              <p className="text-lg text-gray-600">Comprehensive task list categorized by function</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Social Media Management:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Post scheduling and publishing</li>
                  <li>• Community management (responding to comments)</li>
                  <li>• Basic graphic creation (from templates)</li>
                  <li>• Hashtag research and optimization</li>
                  <li>• Social media reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Email Marketing:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• List management and segmentation</li>
                  <li>• Campaign sending and scheduling</li>
                  <li>• Email template creation (from your designs)</li>
                  <li>• A/B testing setup</li>
                  <li>• Performance reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Content Management:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Blog post uploading and formatting</li>
                  <li>• Content repurposing across platforms</li>
                  <li>• Basic SEO optimization</li>
                  <li>• Image sourcing and optimization</li>
                  <li>• Content calendar management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">CRM & Data Management:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• CRM data entry and updates</li>
                  <li>• Lead qualification (following your criteria)</li>
                  <li>• Database cleanup and organization</li>
                  <li>• Reporting and dashboard creation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Marketing Operations:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Competitor monitoring</li>
                  <li>• Marketing tool management</li>
                  <li>• Basic graphic design (Canva, templates)</li>
                  <li>• Ad campaign setup (following your strategy)</li>
                  <li>• Performance tracking and reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Administrative Support:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Marketing meeting preparation</li>
                  <li>• Document organization</li>
                  <li>• Vendor coordination</li>
                  <li>• Marketing calendar management</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for an Honest Assessment?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Marketing VAs work brilliantly when implemented properly by ready businesses with realistic expectations and documented processes. The question is whether that describes your situation right now.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              ShoreAgents places full-time Filipino marketing virtual assistants at $1,200-2,500/month. We'll tell you honestly if you're not ready yet, if you need a specialist instead, or if local marketing consultants make more sense for your current situation.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              We only succeed when you succeed. And that means being brutally honest about when marketing VAs make sense—and when they don't. No sales pitch, just 15 years of experience telling it straight.
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
            Everyone in this space is selling benefits and hiding limitations. We're the honest broker—the authority that helps businesses make the RIGHT decision, even if that decision is "you're not ready yet." The businesses who ARE ready will trust you infinitely more because you were honest about who WASN'T ready.
          </p>
        </div>
      </div>
    </div>
  );
}
