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
  Brain,
  Monitor,
  Zap,
  MessageCircle
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb, BREADCRUMB_PATHS } from "@/components/ui/breadcrumb";

export default function AIVirtualAssistantsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={BREADCRUMB_PATHS['ai-virtual-assistants']} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              For $500K+ Annual Revenue Businesses
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI Virtual Assistant:<br />
              <span className="text-lime-600">You're Searching for the Wrong Thing (And Here's What You Actually Need)</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Every business owner searching "AI virtual assistant" in 2025 gets the same confusing mess of results: Alexa clones, ChatGPT integrations, automation software, and chatbots that promise to "revolutionize" your customer service. Meanwhile, what you actually need is sitting in a completely different category.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Here's what's happening. The term "AI virtual assistant" now means three entirely different things, and the confusion is costing businesses real money. You've got software companies selling you chatbots. You've got automation platforms selling you workflows. And buried somewhere in the noise are actual human virtual assistants who've learned to weaponize AI tools to do work faster than anyone thought possible.
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
            I've been placing offshore staff with businesses across the USA, Australia, and New Zealand for 15 years. The past 18 months changed everything. Not because AI replaced human VAs—that's not happening. But because human VAs with AI capability became productivity monsters that make pure AI solutions look primitive.
          </p>
          
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardContent className="p-6">
              <p className="text-gray-800 font-medium">
                <strong>This article is for businesses doing $500K+ annually who need real work done by actual people, not chatbots handling FAQs.</strong> If you're looking for software to automate your customer service, this isn't it. If you want a human VA who can leverage AI to do the work of three people, keep reading.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Three Types Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <Brain className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What "AI Virtual Assistant" Actually Means in 2025</h2>
              <p className="text-lg text-gray-600">Three different things businesses don't understand</p>
            </div>
          </div>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                The search term explosion happened around mid-2025 in the USA, jumping from a steady baseline to sustained high interest. Australian searches spike unpredictably whenever new AI tools drop. And nobody can agree on what the term actually means anymore.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Type 1: Pure AI Software (ChatGPT, Alexa, Business Automation)</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                These are software systems that simulate conversation or automate tasks. No humans involved. Examples: customer service chatbots, scheduling automation, voice assistants for your office. They're brilliant for handling 500 identical questions per day or triggering workflows when specific conditions hit.
              </p>
              <p className="text-gray-800 font-semibold">
                They're complete rubbish for anything requiring judgment, context-switching, or understanding nuance. I've watched businesses spend $40,000+ implementing AI chatbots that frustrated customers so badly they cancelled contracts. The tech works. The business application usually doesn't.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Type 2: Human VAs Without AI Skills (Traditional Offshore Model)</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                This is what most businesses hired from 2010-2023. Filipino or Latin American staff handling administrative work, customer service, data entry. Reliable, cost-effective, perfectly competent at defined tasks. But if you ask them to research competitors, draft strategic analysis, or handle complex problem-solving, you're waiting hours for work that AI-enhanced VAs finish in 15 minutes.
              </p>
              <p className="text-gray-800 leading-relaxed">
                Not their fault. They weren't trained on AI tools because those tools didn't exist at scale until 18 months ago.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Type 3: Human VAs with AI Mastery (The Actual Sweet Spot)</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                This is what changed the game. Experienced human virtual assistants who learned to integrate AI tools into their workflow. They use ChatGPT for research and drafting. They leverage automation platforms for repetitive sequences. They deploy AI image tools for graphics. They combine human judgment with AI speed.
              </p>
              <p className="text-gray-800 font-bold text-lg">
                This is what businesses actually need when they search "AI virtual assistant." Not chatbots. Not traditional VAs stuck in 2020 workflows. Human professionals amplified by AI capability.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Why Pure AI Fails Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Why Pure AI Solutions Keep Failing Businesses (And Why Nobody Admits It)</h2>
              <p className="text-lg text-gray-600">The AI industry projects $75.7 billion market size by 2034. Then reality hits</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                The AI industry projects $75.7 billion market size by 2034. IBM reports 27% of organizations using AI-powered voice communication. PwC estimates AI will add $15 trillion to global economy by 2030. Every vendor promises your business will transform overnight.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                Then reality hits. Three months into your AI customer service implementation, you're still manually handling the complex inquiries. Your chatbot deflects 25% of tickets—but irritates customers on the other 75%. Your voice AI can schedule appointments but sounds robotic enough that high-value clients request human callbacks.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Here's what the vendors don't tell you: AI assistants excel at structured, repetitive tasks with clear parameters. Customer service FAQs, appointment scheduling, data extraction from forms. Anywhere the question and answer follow predictable patterns, AI performs brilliantly.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                But the moment complexity enters—judgment calls, emotional intelligence, reading between lines, understanding context that wasn't explicitly stated—AI falls apart. I've watched businesses learn this the expensive way.
              </p>
              <p className="text-gray-800 leading-relaxed">
                One client spent $60,000 implementing AI lead qualification for their sales pipeline. Six months later, they were manually reviewing every AI-qualified lead anyway because the system couldn't differentiate between serious buyers and tire-kickers. The AI saw keyword matches. It missed the human signals that actually predicted conversion.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* What Human VAs Deliver Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Human VAs with AI Tools Actually Deliver</h2>
              <p className="text-lg text-gray-600">This is what your business needs—real examples from actual client businesses</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real Estate Example: Property Marketing That Used to Take 8 Hours</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Traditional VA workflow:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Research comparable properties manually</li>
                    <li>• Write listing description from scratch</li>
                    <li>• Coordinate photographer</li>
                    <li>• Create social media posts one by one</li>
                    <li>• Upload to multiple platforms manually</li>
                  </ul>
                  <p className="text-gray-800 font-semibold mt-2">Eight hours of work. Maybe six if they're fast.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">AI-enhanced VA workflow:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Uses AI to analyze comparable properties in 3 minutes</li>
                    <li>• Generates draft listing description in 30 seconds (then edits for accuracy and brand voice)</li>
                    <li>• Coordinates photographer while AI generates social media variations</li>
                    <li>• Deploys automation to schedule posts across platforms</li>
                  </ul>
                  <p className="text-gray-800 font-bold text-lg mt-2">Same work, 90 minutes total time.</p>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                The difference isn't the AI doing the work. It's a human professional who knows which 20% of tasks AI handles brilliantly (research, first drafts, variations) and which 80% still requires human judgment (accuracy verification, tone optimization, strategic timing).
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Service Example: Complex Issue Resolution</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Pure AI chatbot:</h4>
                  <p className="text-sm text-gray-700 mb-2">Can handle "What's your return policy?"</p>
                  <p className="text-sm text-gray-700 font-semibold">Fails completely at: "I ordered three weeks ago, tracking shows delivered but I never received it, and your automated system already issued a refund that hasn't arrived, also the item is showing as in stock again at a different price."</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Human VA with AI tools:</h4>
                  <p className="text-sm text-gray-700 mb-2">Uses AI to instantly pull order history, tracking data, refund status, and inventory records. Applies human judgment to understand the customer is frustrated by process failures, not just wanting information. Crafts response that acknowledges frustration, explains what happened, and resolves all issues in one interaction.</p>
                  <p className="text-sm text-gray-800 font-semibold">AI provided data in 30 seconds. Human provided solution in 3 minutes.</p>
                </div>
                <p className="text-gray-800 font-semibold">
                  Chatbot would've required three transfers and 45 minutes. Traditional VA would've taken 20 minutes gathering information manually. AI-enhanced VA resolved it in under 4 minutes total.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Administrative Example: Meeting Preparation and Follow-up</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Traditional VA:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Manually reviews last meeting notes</li>
                    <li>• Creates agenda document</li>
                    <li>• Emails participants</li>
                    <li>• Takes notes during call</li>
                    <li>• Types up summary</li>
                    <li>• Sends follow-up emails individually</li>
                  </ul>
                  <p className="text-gray-800 font-semibold mt-2">Three hours work.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">AI-enhanced VA:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Uses AI to analyze last meeting transcript and suggest agenda items</li>
                    <li>• Generates draft agenda in 2 minutes (human reviews and optimizes)</li>
                    <li>• Deploys automation for calendar invites</li>
                    <li>• Leverages AI transcription during meeting</li>
                    <li>• Uses AI to generate draft summary (human edits for accuracy and action items)</li>
                    <li>• Automates follow-up email deployment</li>
                  </ul>
                  <p className="text-gray-800 font-bold text-lg mt-2">Same work, 45 minutes.</p>
                </div>
              </div>
              <p className="text-gray-800 font-semibold mt-4">
                Notice the pattern? AI handles data aggregation, draft generation, and process automation. Humans handle judgment, optimization, and strategic thinking. Neither works brilliantly alone. Together, they're unstoppable.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* ShoreAgents Model Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Building2 className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The ShoreAgents AI-Enhanced VA Model</h2>
              <p className="text-lg text-gray-600">What you're actually getting</p>
            </div>
          </div>

          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                ShoreAgents doesn't sell AI software. We place Filipino offshore staff who work during your business hours—when you're working 9am-5pm in Dallas, they're working 9pm-5am in Manila, same moment. No overnight delays, no communication lag, real-time collaboration.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                What changed in the past 18 months is how we train them. Every VA we place now receives systematic training on AI integration. Not "here's ChatGPT, figure it out." Structured methodology on which tasks benefit from AI tools, which require pure human judgment, and how to combine both for maximum output.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Standard Roles Using AI Enhancement:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Administrative assistants using AI for research, drafting, and data analysis</li>
                  <li>• Customer service reps using AI for data retrieval and response templates (human for actual customer interaction)</li>
                </ul>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Marketing coordinators using AI for content variations and social media scheduling</li>
                  <li>• Sales support using AI for lead research and CRM data management</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pricing & Comparison:</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Our pricing runs $1,200-2,500/month full-time depending on role complexity and experience level. That's not hourly rate. That's your actual monthly cost including recruitment, management, backup coverage, and ongoing training on new AI tools as they emerge.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">USA market rates:</span>
                    <span className="font-semibold">$3,500-6,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Australian rates:</span>
                    <span className="font-semibold">$4,000-7,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">New Zealand rates:</span>
                    <span className="font-semibold">$3,800-6,500/month</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-gray-900">ShoreAgents AI-enhanced VAs:</span>
                    <span className="font-bold text-lime-600 text-xl">$1,200-2,500/month</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-800 font-bold text-lg">
                You're saving 60-70% on salary while gaining AI capability that local hires typically don't have.
              </p>
              <p className="text-gray-800 leading-relaxed mt-4">
                But here's what matters more than cost: you're getting human professionals who combine judgment with AI speed. Not chatbots that irritate customers. Not traditional VAs stuck in 2020 workflows. Actual people who've mastered the tools that changed everything in 2025.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">When AI-Enhanced Human VAs Don't Make Sense</h2>
              <p className="text-lg text-gray-600">The honest bit—most businesses searching "AI virtual assistant" aren't ready</p>
            </div>
          </div>

          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Most businesses searching "AI virtual assistant" aren't ready for what we offer. If you're in any of these situations, pure AI software makes more sense than human VAs:
              </p>
              <div className="space-y-3">
                {[
                  "You're handling thousands of identical inquiries. If your customer service receives 5,000 questions weekly about return policies, shipping times, and account access, deploy chatbots. The volume and repetition justify pure AI implementation. Human VAs make sense when inquiries vary and require judgment.",
                  "You're doing under $500K annual revenue. You can't afford systematic offshore staffing yet. Use freelancer platforms like Upwork for project work, or deploy software automation. Hire full-time offshore staff when you've got 20+ hours weekly of consistent work to delegate.",
                  "You need instant, automated responses. If your business requires responses in under 10 seconds 24/7, that's software automation territory. Human VAs work in real-time during your business hours, but they're not instant-response machines. They're strategic partners.",
                  "Your work is purely technical coding or development. For software development, you're better off with dedicated dev teams or technical freelancers. AI-enhanced VAs excel at business operations, not technical implementation.",
                  "You're looking for 'cheap labor.' If your primary goal is finding the lowest hourly rate possible, you're shopping in the wrong category. AI-enhanced VAs cost more than basic offshore staff because they're more capable. The value isn't cheapness—it's output multiplication."
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

        {/* What Happens Next Section */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What Happens Next (If You're Actually Ready)</h2>
              <p className="text-lg text-gray-600">Most businesses waste three months testing freelancers, trying automation software, and getting frustrated</p>
            </div>
          </div>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                Most businesses waste three months testing freelancers, trying automation software, and getting frustrated with results before they discover what actually works. Skip that expensive education.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                AI virtual assistants—the software kind—work brilliantly for structured, repetitive tasks. Deploy them for that. But when you need actual work done that requires judgment, context-switching, and strategic thinking, you need human professionals equipped with AI tools.
              </p>
            </CardContent>
          </Card>

          <Card className="border-lime-300 bg-lime-50">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                ShoreAgents places Filipino offshore staff trained in AI-enhanced workflows with businesses across the USA, Australia, and New Zealand. Full-time team members working your business hours, not overnight asynchronous work. Real-time collaboration with human judgment amplified by AI capability.
              </p>
              <p className="text-gray-800 font-semibold mb-4">
                We'll tell you if you're not ready. If you're under $500K revenue, we'll suggest you grow first. If you want the absolute cheapest option, we'll point you toward freelancer platforms. We only succeed when you succeed, which means being brutally honest about whether offshore staffing makes sense for your situation.
              </p>
              <p className="text-gray-800 leading-relaxed">
                But if you're generating $500K+ annually, drowning in work that requires human judgment but also benefits from AI speed, and you're ready to invest $1,200-2,500/month in full-time professional support, let's talk.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">The Actual Answer When You Search "AI Virtual Assistant"</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              The businesses that figured out AI-enhanced human VAs in 2025 didn't do it because they found magic technology. They succeeded because they stopped searching for pure AI solutions and started leveraging human professionals equipped with AI capability.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              That's the actual answer when you search "AI virtual assistant." Not software. Not traditional VAs. Human judgment amplified by AI tools. Are you ready for it?
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
            Ready to explore AI-enhanced virtual assistant staffing? Visit ShoreAgents.com or schedule a consultation to discuss whether offshore staffing makes sense for your specific situation.
          </p>
        </div>
      </div>
    </div>
  );
}
