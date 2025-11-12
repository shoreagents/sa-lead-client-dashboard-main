'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  DollarSign,
  Target,
  Zap,
  Award,
  Phone,
  AlertCircle,
  BarChart,
  HelpCircle,
  Lightbulb,
  Activity,
  Cpu,
  Settings,
  Database,
  RefreshCw,
  Monitor,
  Globe,
  MessageCircle,
  X,
  Brain,
  Code,
  Eye,
  Sparkles,
  Calculator
} from 'lucide-react';
import Image from 'next/image';

export default function AIVirtualAssistantsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI-Virtual Assistants: The Game-Changing Revolution That's Transforming Business Operations
          </h1>

          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop"
              alt="Professional AI virtual assistants specialist managing advanced automation dashboards with data visualization and tech analytics"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <p className="text-2xl text-gray-700 mb-8 max-w-4xl mx-auto font-semibold">
            How Smart Business Owners Are Building $500K Teams for $15/Hour
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Book a Strategy Call
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg font-semibold">
              How It Works
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg font-semibold">
              See Pricing
              <DollarSign className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* WTF MOMENT Section */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="w-10 h-10 text-red-600 mr-3" />
            THE WTF MOMENT THAT CHANGES BUSINESS FOREVER
          </h2>
          
          <div className="space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed font-semibold">
              While your competitors fumble with basic ChatGPT prompts, we're deploying AI-Virtual Assistant specialists who can build full-stack websites, orchestrate complex workflows, and manage entire AI teams. For $15/hour.
            </p>
            
            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Lightbulb className="w-8 h-8 text-lime-600 mr-3" />
                  <p className="text-2xl font-bold text-gray-900">This isn't science fiction. This is happening RIGHT NOW.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Revolutionary Moment Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="w-8 h-8 text-lime-600 mr-3" />
            The Revolutionary Moment That Changes Everything
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Picture this: It's 2:47 AM. A potential client just submitted a contact form on your website.
          </p>

          <Card className="border-lime-200 bg-gradient-to-br from-lime-50 to-green-50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="w-6 h-6 text-lime-600 mr-2" />
                By 2:48 AM, your AI-Virtual Assistant has:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Analyzed their company using Claude Projects</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Researched their industry with GPT-4</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Created a personalized proposal with Gemini</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Designed interactive charts showing ROI projections</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Drafted a compelling email sitting in your inbox</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-white rounded-lg border-2 border-lime-300">
                <div className="flex items-center justify-center">
                  <Clock className="w-8 h-8 text-lime-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Time elapsed:</p>
                    <p className="text-3xl font-bold text-lime-600">47 seconds</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-lime-200 bg-lime-100">
            <CardContent className="p-6 text-center">
              <Sparkles className="w-12 h-12 text-lime-600 mx-auto mb-3" />
              <p className="text-xl font-bold text-gray-900">
                You wake up to 12 perfect, personalized business proposals ready to send.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What is AI-Virtual Assistant */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Brain className="w-8 h-8 text-lime-600 mr-3" />
            The Revolution: AI-Virtual Assistant Specialists
          </h2>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">What Exactly is an AI-Virtual Assistant?</h3>
          <p className="text-lg text-gray-700 mb-6">
            Forget everything you know about virtual assistants. We're not talking about someone who schedules your meetings and answers emails.
          </p>
          <p className="text-lg text-gray-700 mb-8 font-semibold">
            We're talking about AI-Virtual Assistant specialists who command armies of AI tools like modern-day digital generals:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Brain className="w-10 h-10 text-lime-600 mb-3" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Claude Projects</h4>
                <p className="text-gray-700">Deep client knowledge management and persistent memory systems</p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Code className="w-10 h-10 text-lime-600 mb-3" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Cursor + Memory Bank</h4>
                <p className="text-gray-700">Full-stack development capabilities with AI assistance</p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Settings className="w-10 h-10 text-lime-600 mb-3" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Make.com Workflows</h4>
                <p className="text-gray-700">Orchestrate multiple AI models in complex automation sequences</p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <BarChart className="w-10 h-10 text-lime-600 mb-3" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Interactive Visualization</h4>
                <p className="text-gray-700">Transform data into compelling business intelligence dashboards</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-lime-300 bg-lime-100">
            <CardContent className="p-8 text-center">
              <Zap className="w-16 h-16 text-lime-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">The Result</h3>
              <p className="text-xl text-gray-700 font-semibold">
                One $15/hour AI-Virtual Assistant doing the work of a $500K team.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Real Scenarios */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Real Scenarios That Transform Business Operations
          </h2>

          {/* Scenario 1 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Activity className="w-8 h-8 text-lime-600 mr-3" />
              Scenario 1: The 3 AM Lead Generation Machine
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <X className="w-8 h-8 text-red-600 mr-3" />
                    <h4 className="text-xl font-bold text-gray-900">Traditional Approach</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Lead comes in → Manual follow-up next day</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Generic email template</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">20% response rate</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-lime-200 bg-lime-50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-8 h-8 text-lime-600 mr-3" />
                    <h4 className="text-xl font-bold text-gray-900">AI-Virtual Assistant Approach</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Lead submission triggers Make.com workflow</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Claude analyzes visitor behavior and company profile</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">GPT-4 crafts personalized email addressing specific pain points</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Gemini researches industry trends and competitor analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Email appears in your drafts with interactive ROI calculator</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-bold">Response rate: 78%</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Scenario 2 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Code className="w-8 h-8 text-lime-600 mr-3" />
              Scenario 2: The Full-Stack Website Builder
            </h3>

            <Card className="border-gray-200 bg-gray-50 mb-6">
              <CardContent className="p-6">
                <p className="text-lg text-gray-700 mb-4">
                  Your client says: <span className="font-bold">"We need a property management portal by Friday."</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center mb-3">
                      <X className="w-6 h-6 text-red-600 mr-2" />
                      <h4 className="text-lg font-bold text-gray-900">Traditional Response</h4>
                    </div>
                    <p className="text-gray-700 italic">"That'll take 3 months and cost $50K."</p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <CheckCircle className="w-6 h-6 text-lime-600 mr-2" />
                      <h4 className="text-lg font-bold text-gray-900">AI-Virtual Assistant Response</h4>
                    </div>
                    <p className="text-gray-700 italic font-bold">"Give me 48 hours."</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50 mb-6">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">What Actually Happens:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Cursor with Memory Bank maintains context across entire project</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Claude Code handles complex development workflows</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">AI visualization tools create interactive dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Automated testing and deployment pipelines</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Client training materials generated automatically</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-center">
                  <Target className="w-12 h-12 text-lime-600 mr-4" />
                  <div>
                    <p className="text-lg font-bold text-gray-900">Result</p>
                    <p className="text-2xl font-bold text-lime-600">Full-featured portal delivered in 2 days for $1,200.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Numbers Section */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <BarChart className="w-8 h-8 text-lime-600 mr-3" />
            The Numbers That Stop Executives in Their Tracks
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="border-lime-200 bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">73%</div>
                <div className="text-gray-600 font-medium text-sm">Cost Reduction</div>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">47</div>
                <div className="text-gray-600 font-medium text-sm">Seconds Response</div>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium text-sm">Operations</div>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">1248%</div>
                <div className="text-gray-600 font-medium text-sm">ROI Increase</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Economics Comparison */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <DollarSign className="w-8 h-8 text-lime-600 mr-3" />
            The Economics That Transform Your Bottom Line
          </h2>

          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Traditional Business Team vs AI-Virtual Assistant</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <X className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Traditional Approach</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700">Developer: <span className="font-bold">$120K/year</span></p>
                  <p className="text-gray-700">Marketing Specialist: <span className="font-bold">$80K/year</span></p>
                  <p className="text-gray-700">Data Analyst: <span className="font-bold">$90K/year</span></p>
                  <p className="text-gray-700">Business Analyst: <span className="font-bold">$100K/year</span></p>
                  <hr className="border-red-300 my-4" />
                  <p className="text-xl font-bold text-red-600">Total Cost: $390K/year</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">AI-Virtual Assistant</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700">Cost: <span className="font-bold">$31,200/year</span></p>
                  <p className="text-sm text-gray-600">($15/hour × 40 hours × 52 weeks)</p>
                  <p className="text-gray-700">Capabilities: <span className="font-bold">ALL of the above + more</span></p>
                  <p className="text-gray-700">Availability: <span className="font-bold">24/7 operations</span></p>
                  <p className="text-gray-700">Scalability: <span className="font-bold">Instant capacity expansion</span></p>
                  <hr className="border-lime-300 my-4" />
                  <p className="text-xl font-bold text-lime-600">Savings: $358,800 per year</p>
                  <p className="text-xl font-bold text-lime-600">ROI: 1,248%</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-lime-200 bg-lime-100">
            <CardContent className="p-6">
              <div className="flex items-center">
                <AlertCircle className="w-8 h-8 text-lime-600 mr-3" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Important Distinction</h4>
                  <p className="text-lg text-gray-700 font-semibold">This isn't cost-cutting. This is business transformation.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stephen's Take */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-8 h-8 text-lime-600 mr-3" />
            Stephen's Take: The Founder's Perspective
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              "I've been in the outsourcing game for over a decade, and I can tell you this: what we're seeing with AI-Virtual Assistant specialists isn't just an evolution—it's a complete revolution.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Three years ago, we were proud to offer cost-effective administrative support. Today, our AI-Virtual Assistant specialists are building complex web applications, creating business intelligence dashboards, and managing automated workflows that would make Silicon Valley startups jealous.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold italic">
              The businesses that get this early will have an insurmountable competitive advantage. The ones that don't… well, they'll be hiring our clients' former competitors who couldn't adapt."
            </p>
            <p className="text-gray-700 font-bold text-right">
              – Stephen Atcheler, CEO & Founder, ShoreAgents
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <HelpCircle className="w-10 h-10 text-lime-600 mr-3" />
            Frequently Asked Questions
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How is this different from just using ChatGPT?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  ChatGPT is one tool. We're talking about AI-Virtual Assistant specialists who orchestrate entire AI ecosystems and understand your business context to optimize performance across multiple platforms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Can AI really handle complex business tasks?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  AI excels at pattern recognition, data analysis, and content generation. Combined with human oversight and creativity, it creates capabilities that exceed traditional teams.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What if the AI makes mistakes?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  That's why you have a skilled AI-Virtual Assistant managing the process. They provide quality control, context understanding, and human judgment that AI lacks.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How long does it take to see results?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Basic automation starts working immediately. Complex workflows typically show ROI within 30-60 days. Full business transformation happens within 6 months.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Is this really sustainable at $15/hour?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  The value delivered far exceeds traditional $100K+ employees. It's sustainable because AI amplifies human capabilities rather than replacing them entirely.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Social Engagement Section */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <MessageCircle className="w-8 h-8 text-lime-600 mr-3" />
            Join the AI-Virtual Assistant Revolution
          </h2>

          <div className="space-y-4">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <ArrowRight className="w-6 h-6 text-lime-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">
                    <span className="font-bold">COMMENT BELOW</span> if you're ready to transform your business with AI-Virtual Assistant specialists!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <ArrowRight className="w-6 h-6 text-lime-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">
                    <span className="font-bold">SHARE THIS ARTICLE</span> with business owners who need to see the future of automation!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <ArrowRight className="w-6 h-6 text-lime-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">
                    <span className="font-bold">TAG THAT CEO FRIEND</span> who's still manually processing leads and watch their mind explode!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-xl font-bold text-gray-900 mt-6">
            Seriously, tag that business owner who still thinks AI is just a buzzword!
          </p>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Zap className="w-10 h-10 text-white mr-3" />
            Ready to Build Your AI-Powered Team?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            The businesses that adopt AI-Virtual Assistant specialists TODAY will dominate their industries tomorrow. The businesses that wait will be fighting for scraps.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Start Your AI Revolution Today
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold">
              View AI-VA Pricing
              <DollarSign className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Related Links */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Continue Your AI-Virtual Assistant Journey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-lime-200 bg-lime-50 h-full flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <Globe className="w-10 h-10 text-lime-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Guide to Virtual Assistant Services</h3>
                <p className="text-gray-700 mb-4 flex-grow">Discover the full spectrum of virtual assistant capabilities and how they can transform your business operations.</p>
                <Button className="bg-lime-600 hover:bg-lime-700 text-white font-semibold mt-auto">
                  Explore Virtual Assistant Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50 h-full flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <Activity className="w-10 h-10 text-lime-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real Estate Virtual Assistant Guide</h3>
                <p className="text-gray-700 mb-4 flex-grow">Learn how AI-enhanced virtual assistants are revolutionizing real estate operations and lead generation.</p>
                <Button className="bg-lime-600 hover:bg-lime-700 text-white font-semibold mt-auto">
                  Discover Real Estate AI Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50 h-full flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <Calculator className="w-10 h-10 text-lime-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Virtual Assistant Pricing & ROI Calculator</h3>
                <p className="text-gray-700 mb-4 flex-grow">Calculate the exact ROI of implementing AI-Virtual Assistant specialists in your business operations.</p>
                <Button className="bg-lime-600 hover:bg-lime-700 text-white font-semibold mt-auto">
                  Calculate Your AI-VA ROI
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
}
