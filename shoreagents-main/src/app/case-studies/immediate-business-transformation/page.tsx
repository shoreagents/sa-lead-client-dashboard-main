"use client";

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
  Zap,
  Clock,
  DollarSign,
  AlertCircle,
  Rocket,
  ThumbsUp,
  MessageSquare,
  FileSpreadsheet,
  Calendar
} from "lucide-react";
import Link from "next/link";

export default function ImmediateBusinessTransformationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              LockedOn PropTech Client Success - Australia
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              How 2 Weeks Changed Everything:<br />
              <span className="text-lime-600">"We Should Have Done This Years Ago"</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              When Australian PropTech company LockedOn finally decided to try a virtual assistant, they discovered 
              something that changed everything in just 2 weeks. This is how one admin assistant transformed their 
              entire operational mindset—and why they wish they'd started years earlier.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/sales" 
                className="inline-flex items-center px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors"
              >
                Schedule Your Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/case-studies" 
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-lime-600 transition-colors"
              >
                View More Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Client Quote */}
        <Card className="bg-gradient-to-br from-gray-50 to-white border-lime-200 shadow-lg mb-16">
          <CardContent className="p-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  LN
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                "We are loving our new VA, it's only been 2 weeks but we should have done it years ago."
              </blockquote>
              <div className="text-lg font-bold text-gray-900">Luke Newton</div>
              <div className="text-gray-600 mb-2">LockedOn PropTech</div>
              <div className="flex items-center gap-2 text-gray-600">
                <Globe className="w-4 h-4" />
                <span>Australia</span>
                <span className="mx-2">•</span>
                <span>Hired One Agent</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 2 Week Impact Stats */}
        <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200 mb-16">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">The 2-Week Transformation</h3>
              <p className="text-gray-700">What Luke discovered in just 14 days</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Calendar className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">2</div>
                <div className="text-gray-900 font-semibold">Weeks to Love It</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Star className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">5/5</div>
                <div className="text-gray-900 font-semibold">Perfect Scores</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <DollarSign className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">74%</div>
                <div className="text-gray-900 font-semibold">Cost Reduction</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <ThumbsUp className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">100%</div>
                <div className="text-gray-900 font-semibold">Satisfaction</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Overview */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Picture this: You're running a growing PropTech company. You know you need help, but you're hesitant about 
            offshore solutions. Then you take the plunge. Two weeks later, you're telling everyone: "We should have done 
            this years ago." That's the LockedOn client success story.
          </p>
        </div>

        <Separator className="my-12" />

        {/* From Hesitation to Transformation */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <AlertCircle className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">From Hesitation to Transformation</h2>
              <p className="text-lg text-gray-600">The common concerns every business owner has</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Luke Newton from LockedOn, a growing PropTech company in Australia, represents thousands of business owners 
              who know they need help but aren't sure about offshore solutions. Like many entrepreneurs, he was doing too 
              much himself, drowning in administrative tasks that were keeping him from focusing on what really mattered—growing 
              his business.
            </p>
            
            <p className="mb-8">
              LockedOn wasn't just another tech startup. They were building something significant in the PropTech space, 
              and Luke knew that systematic admin support would be crucial for scaling. But like many business owners, he 
              had reservations about offshore staffing. Would the quality be there? Would communication work? Would someone 
              really understand his business needs?
            </p>

            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Common Concerns Every Business Owner Has</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Communication Worries</h4>
                      <p className="text-gray-700 text-sm">Will they understand my business? Can they communicate effectively?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Quality Concerns</h4>
                      <p className="text-gray-700 text-sm">Will the work meet our standards? What about attention to detail?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Globe className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Cultural Alignment</h4>
                      <p className="text-gray-700 text-sm">Will they understand Australian business culture and expectations?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Users className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Integration Challenges</h4>
                      <p className="text-gray-700 text-sm">How do we integrate someone remote into our existing processes?</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-amber-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Sound familiar? Every business owner has these exact concerns before discovering what Luke discovered.
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              What Luke didn't realize was that his hesitation was costing him thousands of dollars in lost productivity 
              every month. While he was debating whether to hire a virtual assistant, he was spending his $150/hour 
              executive time on $25/hour administrative tasks. The mathematics were clear—he just needed to experience the 
              solution to believe it.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* The 2-Week Revelation */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Zap className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The 2-Week Revelation</h2>
              <p className="text-lg text-gray-600">What happened in those first 14 days</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Two weeks. That's all it took for Luke Newton to realize he'd been making a costly mistake. "We are loving 
              our new VA, it's only been 2 weeks but we should have done it years ago." This wasn't polite feedback—this 
              was the genuine amazement of a business owner who'd just discovered systematic efficiency.
            </p>
            
            <p className="mb-8">
              Enter the administrative virtual assistant who would transform Luke's entire perspective on offshore staffing. 
              Within those first two weeks, his new team member had already begun demonstrating the systematic approach that 
              separates professional virtual assistants from typical outsourcing solutions.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Happened in Those First 2 Weeks</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Communication Excellence</h4>
                      <p className="text-gray-700 text-sm">Professional, clear communication via Slack that exceeded expectations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileSpreadsheet className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Excel Mastery</h4>
                      <p className="text-gray-700 text-sm">Advanced Excel skills that surpassed Luke's initial expectations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Speed & Efficiency</h4>
                      <p className="text-gray-700 text-sm">"All jobs done faster than I thought so far"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Quality Focus</h4>
                      <p className="text-gray-700 text-sm">Follows instructions perfectly with minimal mistakes</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-white border-l-4 border-lime-600 p-6 rounded">
                  <p className="text-gray-800 italic mb-3 text-lg">
                    "We are loving our new VA, it's only been 2 weeks but we should have done it years ago."
                  </p>
                  <p className="text-gray-900 font-bold">— Luke Newton, LockedOn PropTech</p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              The speed of this transformation wasn't accidental—it was the result of systematic preparation and professional 
              excellence. The virtual assistant brought more than just administrative skills; she brought the proactive approach 
              that defines successful virtual assistant relationships. Instead of waiting for detailed instructions, she was 
              "asking good questions each time a task is given."
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Performance Excellence */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Star className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Performance Excellence That Speaks Volumes</h2>
              <p className="text-lg text-gray-600">Perfect 5/5 scores sustained over one year</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              The real validation isn't in the initial excitement—it's in the sustained performance over time. Luke's 
              formal performance reviews tell the complete story of why that "2 weeks" revelation has continued to deliver 
              results month after month.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* First Month */}
              <Card className="bg-lime-50 border-lime-200">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Calendar className="w-10 h-10 text-lime-600 mx-auto mb-2" />
                    <h3 className="text-xl font-bold text-gray-900">First Month Review</h3>
                    <p className="text-gray-600 text-sm">November 2022</p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-gray-900">Quality</span>
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-lime-600 text-lime-600" />)}
                        </div>
                      </div>
                      <p className="text-xs text-gray-700">"Follows instructions well and implements with minimal mistakes"</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-gray-900">Communication</span>
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-lime-600 text-lime-600" />)}
                        </div>
                      </div>
                      <p className="text-xs text-gray-700">"Very effective on Slack"</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-gray-900">Reliability</span>
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-lime-600 text-lime-600" />)}
                        </div>
                      </div>
                      <p className="text-xs text-gray-700">"Always on time"</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-gray-900">Time Management</span>
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-lime-600 text-lime-600" />)}
                        </div>
                      </div>
                      <p className="text-xs text-gray-700">"All jobs done faster than I thought"</p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white rounded border-l-4 border-lime-600">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Top 3 Accomplishments:</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Excel skills above what I expected</li>
                      <li>• English is fantastic</li>
                      <li>• Polite and professional demeanor</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* First Year */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Award className="w-10 h-10 text-green-600 mx-auto mb-2" />
                    <h3 className="text-xl font-bold text-gray-900">First Year Review</h3>
                    <p className="text-gray-600 text-sm">October 2023</p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-gray-900">Quality</span>
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-green-600 text-green-600" />)}
                        </div>
                      </div>
                      <p className="text-xs text-gray-700">"Lovely to work with"</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-gray-900">Communication</span>
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-green-600 text-green-600" />)}
                        </div>
                      </div>
                      <p className="text-xs text-gray-700">"Excellent communicator"</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-gray-900">Reliability</span>
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-green-600 text-green-600" />)}
                        </div>
                      </div>
                      <p className="text-xs text-gray-700">"Perfect always letting us know if issues"</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-gray-900">Time Management</span>
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-green-600 text-green-600" />)}
                        </div>
                      </div>
                      <p className="text-xs text-gray-700">"Great"</p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white rounded border-l-4 border-green-600">
                    <p className="text-sm italic text-gray-800 mb-2">"Going well very happy"</p>
                    <div className="flex justify-between text-xs text-gray-700">
                      <span><strong>Overall:</strong> 5/5</span>
                      <span><strong>Would Recommend:</strong> 5/5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="mt-8">
              This consistency in performance excellence is what separates professional approaches from typical outsourcing 
              solutions. When a PropTech business owner can give perfect 5/5 ratings across multiple evaluation periods, it 
              validates the systematic approach that enables long-term success.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Financial Transformation */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <DollarSign className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Financial Transformation</h2>
              <p className="text-lg text-gray-600">$52,000+ annual savings and 74% cost reduction</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Behind Luke's amazement at the "2 weeks" revelation was a financial reality that every PropTech business owner 
              should understand. When he said "we should have done this years ago," he wasn't just talking about convenience—he 
              was talking about the massive cost savings that had been sitting on the table, waiting for him to discover them.
            </p>

            <Card className="bg-gradient-to-br from-gray-50 to-lime-50 border-lime-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Australian PropTech Admin Cost Analysis
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  {/* Local Cost */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="text-center mb-4">
                      <Building2 className="w-12 h-12 text-red-600 mx-auto mb-2" />
                      <h4 className="font-bold text-gray-900">Local Admin Assistant</h4>
                      <p className="text-xs text-gray-600">Sydney/Melbourne</p>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="text-xs text-gray-600">
                        Includes: Salary, Super, WorkCover, Leave, Equipment, Office Space
                      </div>
                      <div className="pt-2 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                          <span className="font-bold">Annual Total:</span>
                          <span className="text-xl font-bold text-red-600">$70,000+</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Offshore Cost */}
                  <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-lime-600">
                    <div className="text-center mb-4">
                      <Globe className="w-12 h-12 text-lime-600 mx-auto mb-2" />
                      <h4 className="font-bold text-gray-900">ShoreAgents Assistant</h4>
                      <p className="text-xs text-gray-600">All-Inclusive</p>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="text-xs text-gray-600">
                        Includes: Salary, Management, Equipment, Office, Training, HR
                      </div>
                      <div className="pt-2 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                          <span className="font-bold">Annual Total:</span>
                          <span className="text-xl font-bold text-lime-600">$18,000</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Savings */}
                  <div className="bg-gradient-to-br from-lime-500 to-green-600 text-white rounded-lg p-6 shadow-sm">
                    <div className="text-center mb-4">
                      <TrendingUp className="w-12 h-12 mx-auto mb-2" />
                      <h4 className="font-bold">LockedOn Savings</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Annual Savings:</span>
                        <span className="font-bold">$52,000+</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cost Reduction:</span>
                        <span className="font-bold">74%</span>
                      </div>
                      <div className="pt-2 border-t border-white/30">
                        <div className="flex justify-between items-center">
                          <span className="font-bold">5-Year Savings:</span>
                          <span className="text-xl font-bold">$260K+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-lime-600 text-white p-6 rounded-lg text-center">
                  <p className="text-xl font-bold">This is why Luke said "we should have done this years ago"</p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              But the story isn't just about direct cost savings. It's about the opportunity cost of Luke's time. As a 
              PropTech executive, every hour spent on administrative tasks is an hour not spent on business development, 
              product innovation, or strategic planning. The systematic efficiency that his virtual assistant provided didn't 
              just save money—it multiplied Luke's executive productivity.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* The Cost of Waiting */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Clock className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Cost of Waiting</h2>
              <p className="text-lg text-gray-600">What "years ago" really cost Luke</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Luke Newton's honest assessment after just two weeks—"we should have done it years ago"—captures something 
              every business owner recognizes: the regret of waiting too long to solve a known problem. His transformation 
              from hesitant PropTech CEO to enthusiastic advocate wasn't about discovering a miracle solution. It was about 
              experiencing systematic excellence he didn't know existed.
            </p>

            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What "Years Ago" Really Cost Luke</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <DollarSign className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Financial Opportunity Cost</h4>
                      <p className="text-gray-700 text-sm">Years of paying premium rates for work that could have been done at 74% savings</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Clock className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Strategic Time Loss</h4>
                      <p className="text-gray-700 text-sm">Executive time spent on administrative tasks instead of PropTech innovation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Growth Constraints</h4>
                      <p className="text-gray-700 text-sm">Business scaling limited by founder's capacity for detailed work</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <AlertCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Unnecessary Stress</h4>
                      <p className="text-gray-700 text-sm">Years of operational burden that could have been eliminated</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Luke's Realization: The solution existed—he just needed to stop hesitating and start testing
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              Luke's story resonates because it's so familiar to entrepreneurs. How many business owners are currently 
              spending their time on work that someone else could handle more efficiently? How many are delaying decisions 
              that could free up their capacity for strategic work? How many are operating at a disadvantage simply because 
              they haven't experienced what systematic virtual assistant support actually delivers?
            </p>
          </div>
        </section>

      </div>

      {/* Final CTA */}
      <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white mx-4 mb-8">
        <CardContent className="p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't Wait "Years" Like Luke Did
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Stop spending executive time on administrative tasks. Experience the systematic virtual assistant support 
            that transforms hesitant business owners into enthusiastic advocates in just 2 weeks. Discover what you 
            should have done years ago.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sales"
              className="inline-flex items-center px-8 py-4 bg-white text-lime-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors"
            >
              Schedule Your Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-lime-600 font-bold text-lg rounded-lg transition-colors"
            >
              <Building2 className="w-5 h-5 mr-2" />
              View More Case Studies
            </Link>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
