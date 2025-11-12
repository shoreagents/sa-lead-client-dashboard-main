'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Users, 
  TrendingUp, 
  Shield, 
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
  TrendingDown,
  X,
  HelpCircle,
  Briefcase,
  FileCheck,
  Settings,
  Lightbulb,
  Globe,
  Code,
  Monitor,
  Cpu,
  MessageCircle,
  Layers
} from 'lucide-react';
import Image from 'next/image';

export default function WebsiteOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge variant="destructive" className="mb-4 bg-red-600 text-white px-4 py-2 text-sm font-semibold flex items-center justify-center w-fit mx-auto">
            <AlertCircle className="w-4 h-4 mr-2" />
            CRITICAL: Small Businesses Losing $50,000+ Annually on Website Disasters
          </Badge>
          <p className="text-lg text-gray-600 mb-6">
            While smart businesses embrace systematic website outsourcing, others are getting trapped by expensive agencies, disappearing freelancers, and technology lock-in that costs $18,000+ monthly in maintenance fees. Don't become another victim.
          </p>

          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Website Outsourcing: Revolutionary 2025 Guide - 500+ Proven Placements Eliminate Costly Failures
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Website outsourcing is the practice of hiring external development teams to build and maintain your websites, rather than dealing with expensive local developers or unreliable freelancers. At ShoreAgents, we're expanding our proven outsourcing methodology into web development outsourcing.
          </p>

          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop"
              alt="Web developer coding on multiple monitors showing website development and programming workspace"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Book a Strategy Call
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg font-semibold">
              See Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">78%</div>
              <div className="text-gray-600 font-medium">Cost Savings vs Local</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Successful Placements</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">60%</div>
              <div className="text-gray-600 font-medium">Faster with AI Tools</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">$150K</div>
              <div className="text-gray-600 font-medium">Stephen's Expensive Lesson</div>
            </CardContent>
          </Card>
        </div>

        {/* Why We're Expanding */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-10 h-10 text-lime-600 mr-3" />
            Why We're Expanding Into Website Outsourcing
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            <strong>By Stephen Atcheler, CEO</strong>
          </p>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              The demand became impossible to ignore. After 500+ successful virtual assistant placements, nearly every client asked the same question: "Can your team handle our website outsourcing needs too?"
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Initially, I said no. Website outsourcing seemed like a different beast entirely. But then I realized something – the hardest part isn't finding developers. It's managing them properly.
            </p>

            <div className="bg-white rounded-lg p-6 my-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Client Reality I Keep Seeing</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Here's what I've observed across our 500+ placements: every single client struggles with website issues, but they're approaching website outsourcing completely wrong.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">"We're paying $8,000 annually for a template website we can't even update ourselves." – Melbourne real estate agent</p>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">"Our developer disappeared after taking half the payment." – Auckland construction company</p>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">"We were quoted $35,000 for what should be a simple business website." – Sydney service business</p>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">"Our website is owned by the template company, not us." – Brisbane property manager</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              The frustrating part? They want expert-level results at reasonable pricing – which traditionally doesn't exist in web development outsourcing.
            </p>

            <div className="bg-lime-100 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Why Now Makes Sense</h3>
              <p className="text-gray-700 mb-3">We've already solved the hardest parts of outsourcing:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cultural integration with Filipino teams</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Quality management systems that actually work</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Communication protocols that eliminate offshore problems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Professional infrastructure and accountability</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4 font-semibold">
                Adding website outsourcing to our virtual assistant services isn't a stretch – it's applying our proven methodology to a new function.
              </p>
            </div>
          </div>
        </div>

        {/* The $150K Disaster */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="w-10 h-10 text-red-600 mr-3" />
            The $150,000 Website Lesson That Changed Everything
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Let me tell you about the most expensive web development lesson I ever learned – one that perfectly illustrates why traditional website outsourcing is broken.
            </p>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My $150,000 Website Disaster</h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                A few years ago, I needed a complex website built. I went to a "professional" web development company here in Australia. They quoted me $150,000, which seemed steep, but they were "experts."
              </p>
              <p className="text-gray-700 mb-3 leading-relaxed font-semibold">
                Their brilliant suggestion? Ruby on Rails.
              </p>
              <p className="text-gray-700 mb-3 leading-relaxed">
                "It's the best framework," they said. "Very powerful, very scalable."
              </p>
              <p className="text-gray-700 mb-3 leading-relaxed">
                What they didn't mention:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ruby developers are rare and expensive</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Finding Ruby talent is nearly impossible in Australia</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">I'd be completely locked in to their technology choice</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ongoing costs would be astronomical</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-100 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The $18,000 Monthly Nightmare</h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                After spending $150,000 on development, the real costs hit:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <DollarSign className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>$18,000 per month</strong> for basic maintenance and updates</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Zero flexibility to hire other developers</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Complete dependency on the original company</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Held hostage by their technology choices</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4 leading-relaxed">
                I couldn't find affordable Ruby developers anywhere. Every change, every update, every bug fix went through the original company at premium rates.
              </p>
              <p className="text-gray-700 mt-3 font-bold text-lg">
                This is exactly what's wrong with traditional web development.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Eye-Opening Realization</h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                That experience taught me why website outsourcing fails for most businesses:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Technology lock-in by web development companies</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ridiculous ongoing costs for simple changes</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Zero ownership of your digital assets</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Complete dependency on expensive specialists</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4 font-semibold text-lg">
                The solution isn't finding cheaper developers – it's finding smarter approaches.
              </p>
            </div>
          </div>
        </div>

        {/* What's Broken */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
            <X className="w-10 h-10 text-red-600 mr-3" />
            What's Broken About Website Outsourcing Today
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <DollarSign className="w-6 h-6 text-red-600 mr-2" />
                  Problem 1: The Agency Ripoff
                </h3>
                <p className="text-gray-700 mb-3 font-semibold">Traditional Web Development Companies:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Charge $15,000-$50,000+ for standard business websites</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Lock you into their preferred technology</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Disappear after project completion</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Charge premium rates for basic maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">No ongoing relationship or accountability</span>
                  </li>
                </ul>
                <p className="text-gray-700 text-sm italic">
                  The Ruby on Rails Problem: They push exotic frameworks that sound impressive but create dependency. Just like my experience – once you're locked in, you're stuck paying premium rates forever.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
                  Problem 2: The Freelancer Lottery
                </h3>
                <p className="text-gray-700 mb-3 font-semibold">Upwork and Freelancer Platforms:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Zero quality control or oversight</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Developers disappear mid-project</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Language and communication barriers</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">No recourse when things go wrong</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Inconsistent quality and unreliable timelines</span>
                  </li>
                </ul>
                <p className="text-gray-700 text-sm">
                  I've seen dozens of our clients burned by freelancer website outsourcing. They start with low quotes, then face scope creep, communication breakdown, and abandoned projects.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <MessageCircle className="w-6 h-6 text-red-600 mr-2" />
                  Problem 3: The Communication Disaster
                </h3>
                <p className="text-gray-700 mb-3 font-semibold">Why Most Website Outsourcing Fails:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Time zone conflicts causing delays</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Cultural misunderstandings affecting project scope</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Technical specifications lost in translation</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">No systematic project management</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Clients feeling completely in the dark</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Settings className="w-6 h-6 text-red-600 mr-2" />
                  Problem 4: The Technology Trap
                </h3>
                <p className="text-gray-700 mb-3 font-semibold">How Developers Lock You In:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Suggest complex, proprietary solutions</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Use frameworks with limited developer availability</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Create code that only they can maintain</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Charge premium rates for simple changes</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Hold your website hostage through technology choices</span>
                  </li>
                </ul>
                <p className="text-gray-700 text-sm font-semibold">
                  The result? Businesses paying $10,000-$25,000 annually for basic website maintenance because they can't find alternative developers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Approach */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <Zap className="w-10 h-10 text-lime-600 mr-3" />
            Our Approach to Website Outsourcing
          </h2>
          <p className="text-2xl text-gray-700 text-center mb-8">
            Here's how we're solving website outsourcing differently, using our proven virtual assistant methodology.
          </p>

          <div className="bg-white rounded-lg p-8 mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The ShoreAgents Website Outsourcing Philosophy</h3>
            <p className="text-xl text-lime-600 font-bold mb-4">We don't build websites – we provide web developers.</p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Instead of project-based web development outsourcing, we're applying our staffing model:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-lime-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Hire dedicated developers as team members</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-lime-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Professional management through our proven systems</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-lime-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Cultural integration that eliminates offshore problems</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-lime-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Ongoing relationships instead of one-off projects</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="w-6 h-6 text-lime-600 mr-2" />
                  Why This Approach Works
                </h3>
                <p className="text-gray-700 mb-3 font-semibold">Proven Management Systems:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">500+ successful placements using this exact methodology</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Cultural training programs that actually work</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Quality control processes with accountability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Professional infrastructure including offices and equipment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-lime-600 mr-2" />
                  No Technology Lock-In
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Flexible technology choices based on your needs, not our preferences</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Standard frameworks that any developer can maintain</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Your code, your ownership – never held hostage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Multiple developer access – not dependent on single specialists</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-lime-100 rounded-lg p-6 mt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Honest Assessment:</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>What We Can Offer Right Now:</strong> Entry to mid-level web developers through our recruitment process, same management approach we use for successful virtual assistant placements, professional oversight and cultural integration, and standard development practices – no exotic frameworks.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>What We're Building Toward:</strong> AI-assisted development training for our teams, advanced coding methodologies currently being tested internally, faster development processes using modern tools, and quality improvements through systematic training.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              We're not the most advanced web development outsourcing provider yet. But we're the most systematic, and that's what actually matters for business success.
            </p>
          </div>
        </div>

        {/* Team Options */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <Briefcase className="w-10 h-10 text-lime-600 mr-3" />
            Website Outsourcing Team Options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="flex items-center justify-center mb-4">
                    <Code className="w-12 h-12 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Entry-Level Web Developer</h3>
                  <p className="text-3xl font-bold text-lime-600 mb-2">$1,200-$2,000</p>
                  <p className="text-gray-600 mb-4">monthly</p>
                  
                  <div className="text-left mb-6">
                    <p className="text-gray-700 font-semibold mb-3">What You Get:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Junior to mid-level developers with 1-3 years experience</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Standard web development skills in HTML, CSS, JavaScript, PHP</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">WordPress and basic CMS development capability</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Professional training in communication and project management</span>
                      </li>
                    </ul>

                    <p className="text-gray-700 font-semibold mt-4 mb-2">Ideal For:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="text-gray-700">• Business websites with standard functionality</li>
                      <li className="text-gray-700">• WordPress development and customization</li>
                      <li className="text-gray-700">• Basic e-commerce setups and maintenance</li>
                      <li className="text-gray-700">• Content management and regular updates</li>
                    </ul>
                  </div>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Start with One Developer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-lime-600 text-white px-4 py-1 font-semibold">Most Popular</Badge>
              </div>
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="flex items-center justify-center mb-4">
                    <Layers className="w-12 h-12 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Team-Based Development</h3>
                  <p className="text-3xl font-bold text-lime-600 mb-2">Custom</p>
                  <p className="text-gray-600 mb-4">2-3 person development teams</p>
                  
                  <div className="text-left mb-6">
                    <p className="text-gray-700 font-semibold mb-3">For Larger Requirements:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">2-3 person development teams for complex projects</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Project manager coordination through our account management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Complementary skills across frontend, backend, and design</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Faster delivery through parallel development work</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Quality assurance through team review processes</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Build Your Development Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="text-center mb-6 flex-grow">
                  <div className="flex items-center justify-center mb-4">
                    <Users className="w-12 h-12 text-lime-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Integration with VA Services</h3>
                  <p className="text-3xl font-bold text-lime-600 mb-2">Combined</p>
                  <p className="text-gray-600 mb-4">Complete digital support</p>
                  
                  <div className="text-left mb-6">
                    <p className="text-gray-700 font-semibold mb-3">Combined Website + VA Support:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Cross-training opportunities for ongoing maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Content management through existing virtual assistant teams</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Unified account management across all outsourcing services</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Cost optimization through integrated service delivery</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Seamless workflow coordination</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white mt-auto font-semibold">
                  Explore Integrated Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* The Future: AI-Assisted Development */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Cpu className="w-8 h-8 text-lime-600 mr-3" />
            The Future: AI-Assisted Development
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            While we're starting with traditional website outsourcing, the real opportunity lies in AI-assisted development – and this is where things get exciting.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What's Changing in Web Development</h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Modern development tools like GitHub Copilot, Cursor, and Claude are fundamentally changing web development outsourcing. According to GitHub's productivity research, AI-assisted development can accelerate coding by up to 55% while improving code quality.
                </p>
                <p className="text-gray-700 font-semibold mb-2">These AI development tools can:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Zap className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Generate code from natural language descriptions</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Debug and optimize existing code automatically</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Translate between programming languages</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Accelerate development by 50-70%</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Reduce skill requirements for complex tasks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Website Outsourcing Opportunity</h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Instead of hiring specialists for React, PHP, Python, etc., we can train developers to use AI assistance for any technology stack. This means:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">No technology lock-in – developers can work with whatever you need</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Faster development through AI acceleration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Lower costs by eliminating the need for multiple specialists</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">More flexibility in project requirements and changes</span>
                  </li>
                </ul>
                <p className="text-gray-700 text-sm font-semibold">
                  Current Reality: We're not offering AI-assisted website outsourcing yet, but we're building toward it. By starting website outsourcing with us now, you get access to improvements as we develop AI-assisted capabilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Getting Started */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <Target className="w-10 h-10 text-lime-600 mr-3" />
            Getting Started with Website Outsourcing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-lime-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-lime-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Requirements Assessment</h3>
                </div>
                <p className="text-gray-700 mb-3 text-sm font-semibold">Understanding Your Needs:</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-700">• Current website analysis and improvement opportunities</li>
                  <li className="text-gray-700">• Technical requirements and functionality needs</li>
                  <li className="text-gray-700">• Budget parameters and timeline expectations</li>
                  <li className="text-gray-700">• Team size and skill level requirements</li>
                  <li className="text-gray-700">• Integration needs with existing business systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-lime-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-lime-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Developer Selection and Setup</h3>
                </div>
                <p className="text-gray-700 mb-3 text-sm font-semibold">Team Recruitment:</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-700">• Skill assessment matching your technology requirements</li>
                  <li className="text-gray-700">• Cultural fit evaluation for seamless communication</li>
                  <li className="text-gray-700">• Portfolio review of relevant development experience</li>
                  <li className="text-gray-700">• Professional setup including equipment and software</li>
                  <li className="text-gray-700">• Account manager assignment from our proven team</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-lime-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-lime-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Implementation and Management</h3>
                </div>
                <p className="text-gray-700 mb-3 text-sm font-semibold">Ongoing Support:</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-700">• Daily communication through established channels</li>
                  <li className="text-gray-700">• Weekly progress reviews with account manager</li>
                  <li className="text-gray-700">• Quality monitoring and feedback integration</li>
                  <li className="text-gray-700">• Issue resolution through proven escalation procedures</li>
                  <li className="text-gray-700">• Performance management ensuring consistent results</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Your Consultation
            </Button>
          </div>
        </div>

        {/* Why Choose ShoreAgents */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Award className="w-8 h-8 text-lime-600 mr-3" />
            Why Choose ShoreAgents for Website Outsourcing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">WHERE WE EXCEL:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Team management and cultural integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Professional service delivery with accountability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cost-effective solutions through proven methodology</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Geographic advantages with Philippines teams</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">WHERE WE'RE DEVELOPING:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Settings className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced technical capabilities through AI training</span>
                </li>
                <li className="flex items-start">
                  <Settings className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Complex project experience in specialized industries</span>
                </li>
                <li className="flex items-start">
                  <Settings className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Large-scale development team coordination</span>
                </li>
                <li className="flex items-start">
                  <Settings className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cutting-edge technology implementation</span>
                </li>
              </ul>
            </div>
          </div>

          <Card className="border-lime-200 bg-lime-50">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed font-semibold text-lg">
                Our Advantage: While we may not be the most technically advanced website outsourcing provider, we're the most systematic. And systematic beats sophisticated when it comes to business results.
              </p>
            </CardContent>
          </Card>

          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">The Anti-Ripoff Approach</h3>
            <p className="text-gray-700 font-semibold mb-3">No Technology Lock-In:</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Standard frameworks that any developer can maintain</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Your code ownership – never held hostage</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Transparent technology choices serving your business needs</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Multiple developer access – no single points of failure</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <HelpCircle className="w-10 h-10 text-lime-600 mr-3" />
            Frequently Asked Questions About Website Outsourcing
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How is your website outsourcing different from hiring a local web development company?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Website outsourcing with ShoreAgents means hiring dedicated developers as team members, not paying project premiums to agencies. Instead of $15,000-$50,000 for a business website, you get dedicated developers for $1,200-$2,000 monthly who can build multiple projects and provide ongoing support. No technology lock-in, no disappearing after project completion.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What happened with your $150,000 website disaster?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  I hired a local web development company who suggested Ruby on Rails for a complex website. After spending $150,000 on development, I was locked into $18,000 monthly maintenance costs because Ruby developers are scarce and expensive. This taught me why technology choices and vendor lock-in destroy businesses – exactly what we avoid in our website outsourcing approach.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Are you actually ready to provide website outsourcing services?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Honest answer: We can provide entry to mid-level web developers through our proven recruitment and management systems right now. We're working toward AI-assisted development capabilities, but currently focus on standard web development with professional oversight. We're not the most advanced provider yet, but we're the most systematic.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How much does website outsourcing cost compared to local developers?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Massive savings compared to local options: Local Australian developers cost $80,000-$120,000 annually, while ShoreAgents website outsourcing costs $14,400-$24,000 annually for dedicated developers. That's 70-80% cost savings while maintaining professional management and quality control.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Can I integrate website outsourcing with virtual assistant services?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, that's the plan. For existing virtual assistant clients, we can add web developers to your existing team setup, provide cross-training for maintenance and content management, and offer unified account management across all services. This combination provides complete digital support through a single provider.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  When will you have full AI-assisted website outsourcing capabilities?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We're developing these capabilities internally but don't have a commercial rollout timeline yet. Starting website outsourcing with us now means access to improvements as capabilities develop, an established relationship with an evolving provider, no switching costs when enhanced services become available, and early adopter advantages in AI-assisted development.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Zap className="w-10 h-10 text-white mr-3" />
            Ready to Transform Your Web Presence Through Website Outsourcing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            The future of website outsourcing lies in systematic, AI-assisted development delivered through proven offshore management methodology. While traditional web development companies struggle with high costs and limited accountability, our approach provides transparent, scalable, and cost-effective solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Book Your Consultation Now
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold">
              See Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            Don't let website challenges hold your business back. Join the hundreds of successful businesses that have transformed their operations through strategic outsourcing with ShoreAgents.
          </p>
        </div>

      </div>
    </div>
  );
}
