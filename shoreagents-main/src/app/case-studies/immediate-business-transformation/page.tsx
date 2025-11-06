'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Target, 
  Building, 
  Award, 
  Globe, 
  Clock,
  Phone,
  Star,
  Zap,
  Home,
  Shield,
  FileText,
  Video,
  Handshake,
  DollarSign,
  Calendar,
  Lightbulb,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  RefreshCw,
  Headphones,
  Settings,
  PlayCircle,
  XCircle,
  BarChart3,
  MessageSquare,
  HelpCircle,
  TrendingDown
} from 'lucide-react';
import Image from 'next/image';

export default function ImmediateBusinessTransformationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-red-600 text-white px-4 py-2 text-lg mb-6">
            PROPTECH BREAKTHROUGH: &quot;Should Have Done This Years Ago&quot;
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The LockedOn Story: How 2 Weeks Changed Everything About Virtual Assistants
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            When Australian PropTech company LockedOn finally decided to try a virtual assistant, they discovered something that changed everything: &quot;We are loving our new VA, it&apos;s only been 2 weeks but we should have done it years ago.&quot; This LockedOn client success story reveals how one admin assistant transformed their entire operational mindset.
          </p>
          
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
              alt="LockedOn PropTech Operations"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Client Quote Card */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop"
                    alt="Locked On Logo"
                    width={100}
                    height={100}
                    className="mx-auto rounded-full"
                  />
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  &quot;We are loving our new VA its only been 2 weeks but we should have done it years ago.&quot;
                </blockquote>
                <div className="text-gray-900 font-bold">Luke Newton</div>
                <div className="text-gray-600">LockedOn, AU</div>
                <div className="text-gray-600">Hired One Agent</div>
                <div className="mt-2 flex items-center justify-center gap-2">
                  <Globe className="w-4 h-4 text-gray-600" />
                  <span>Australia</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Intro Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Building className="w-8 h-8 text-lime-600 mr-2" />
            LockedOn Client Success: PropTech Transformation
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            How Luke Newton and his PropTech team discovered the systematic admin support that changed their business forever
          </p>
          <p className="text-lg text-gray-700">
            Picture this: You&apos;re running a growing PropTech company. You know you need help, but you&apos;re hesitant about offshore solutions. Then you take the plunge. Two weeks later, you&apos;re telling everyone: &quot;We should have done this years ago.&quot; That&apos;s the LockedOn client success story.
          </p>
        </div>

        {/* From Hesitation to Transformation */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <HelpCircle className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">LockedOn Client Success: From Hesitation to Transformation</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Luke Newton from LockedOn, a growing PropTech company in Australia, represents thousands of business owners who know they need help but aren&apos;t sure about offshore solutions. Like many entrepreneurs, he was doing too much himself, drowning in administrative tasks that were keeping him from focusing on what really mattered—growing his business.
                </p>
                <p className="mb-4">
                  LockedOn wasn&apos;t just another tech startup. They were building something significant in the PropTech space, and Luke knew that systematic admin support would be crucial for scaling. But like many business owners, he had reservations about offshore staffing. Would the quality be there? Would communication work? Would someone really understand his business needs?
                </p>
                <p className="mb-6">
                  The decision to start with &quot;one agent&quot; through our One Agent service was strategic. Luke wasn&apos;t looking to replace his entire team—he wanted to test the waters with a single administrative assistant who could handle the day-to-day tasks that were consuming his time.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Common Concerns Every Business Owner Has</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Communication Worries</h4>
                        <p className="text-gray-700 text-sm">Will they understand my business? Can they communicate effectively?</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Star className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Quality Concerns</h4>
                        <p className="text-gray-700 text-sm">Will the work meet our standards? What about attention to detail?</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Cultural Alignment</h4>
                        <p className="text-gray-700 text-sm">Will they understand Australian business culture and expectations?</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <RefreshCw className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Integration Challenges</h4>
                        <p className="text-gray-700 text-sm">How do we integrate someone remote into our existing processes?</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-4 font-semibold">
                    Sound familiar? Every business owner has these exact concerns before discovering what Luke discovered.
                  </p>
                </div>

                <p className="mt-6">
                  What Luke didn&apos;t realize was that his hesitation was costing him thousands of dollars in lost productivity every month. While he was debating whether to hire a virtual assistant, he was spending his $150/hour executive time on $25/hour administrative tasks. The mathematics were clear—he just needed to experience the solution to believe it.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* The 2-Week Revelation */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Zap className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">LockedOn Client Success: &quot;The 2-Week Revelation&quot;</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Two weeks. That&apos;s all it took for Luke Newton to realize he&apos;d been making a costly mistake. &quot;We are loving our new VA, it&apos;s only been 2 weeks but we should have done it years ago.&quot; This wasn&apos;t polite feedback—this was the genuine amazement of a business owner who&apos;d just discovered systematic efficiency.
                </p>
                <p className="mb-6">
                  Enter the administrative virtual assistant who would transform Luke&apos;s entire perspective on offshore staffing. Within those first two weeks, his new team member had already begun demonstrating the systematic approach that separates professional virtual assistants from typical outsourcing solutions.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What Happened in Those First 2 Weeks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <MessageSquare className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Communication Excellence</h4>
                        <p className="text-gray-700 text-sm">Professional, clear communication via Slack that exceeded expectations</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <BarChart3 className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Excel Mastery</h4>
                        <p className="text-gray-700 text-sm">Advanced Excel skills that surpassed Luke&apos;s initial expectations</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Speed & Efficiency</h4>
                        <p className="text-gray-700 text-sm">&quot;All jobs done faster than I thought so far&quot;</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Quality Focus</h4>
                        <p className="text-gray-700 text-sm">Follows instructions perfectly with minimal mistakes</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-lg text-gray-800 italic mb-2">
                      &quot;We are loving our new VA, it&apos;s only been 2 weeks but we should have done it years ago.&quot;
                    </p>
                    <p className="text-gray-700 font-semibold">— Luke Newton, LockedOn PropTech</p>
                  </div>
                </div>

                <p className="mt-6">
                  The speed of this transformation wasn&apos;t accidental—it was the result of systematic preparation and professional excellence. The virtual assistant brought more than just administrative skills; she brought the proactive approach that defines successful virtual assistant relationships. Instead of waiting for detailed instructions, she was &quot;asking good questions each time a task is given.&quot;
                </p>
                <p className="mt-4">
                  This is what separates the ShoreAgents approach from typical outsourcing: our virtual assistants don&apos;t just complete tasks—they actively contribute to business improvement. Within two weeks, Luke wasn&apos;t just satisfied with the admin support; he was experiencing the systematic efficiency that made him realize he&apos;d been operating at a disadvantage for years.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Excellence */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Award className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">LockedOn Client Success: Performance Excellence That Speaks Volumes</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The real validation of the LockedOn client success story isn&apos;t in the initial excitement—it&apos;s in the sustained performance over time. Luke&apos;s formal performance reviews tell the complete story of why that &quot;2 weeks&quot; revelation has continued to deliver results month after month.
                </p>
                <p className="mb-6">
                  First-month performance review: Perfect scores across quality, communication, reliability, and time management. One-year performance review: &quot;Lovely to work with,&quot; &quot;Excellent communicator,&quot; &quot;Perfect,&quot; &quot;Great.&quot; This isn&apos;t just satisfaction—this is the systematic excellence that defines long-term virtual assistant partnerships.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">First Month Performance Review – November 2022</h3>
                      <Badge className="bg-lime-600 text-white">Perfect 5/5</Badge>
                    </div>
                    <div className="space-y-4 mb-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-gray-900">Quality</span>
                          <span className="text-lime-600 font-bold">5/5</span>
                        </div>
                        <p className="text-gray-700 text-sm">&quot;Follows instructions well and implements with minimal mistakes&quot;</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-gray-900">Communication</span>
                          <span className="text-lime-600 font-bold">5/5</span>
                        </div>
                        <p className="text-gray-700 text-sm">&quot;Very effective on Slack&quot;</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-gray-900">Reliability</span>
                          <span className="text-lime-600 font-bold">5/5</span>
                        </div>
                        <p className="text-gray-700 text-sm">&quot;Always on time&quot;</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-gray-900">Time Management</span>
                          <span className="text-lime-600 font-bold">5/5</span>
                        </div>
                        <p className="text-gray-700 text-sm">&quot;All jobs done faster than I thought so far&quot;</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="font-semibold text-gray-900 mb-2">Top 3 Accomplishments:</p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Excel skills above what I expected</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>English is fantastic</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Polite and professional demeanor</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">First Year Performance Review – October 2023</h3>
                      <Badge className="bg-lime-600 text-white">Perfect 5/5</Badge>
                    </div>
                    <div className="space-y-4 mb-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-gray-900">Quality</span>
                          <span className="text-lime-600 font-bold">5/5</span>
                        </div>
                        <p className="text-gray-700 text-sm">&quot;Lovely to work with&quot;</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-gray-900">Communication</span>
                          <span className="text-lime-600 font-bold">5/5</span>
                        </div>
                        <p className="text-gray-700 text-sm">&quot;Excellent communicator&quot;</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-gray-900">Reliability</span>
                          <span className="text-lime-600 font-bold">5/5</span>
                        </div>
                        <p className="text-gray-700 text-sm">&quot;Perfect always letting us know if issues&quot;</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-gray-900">Time Management</span>
                          <span className="text-lime-600 font-bold">5/5</span>
                        </div>
                        <p className="text-gray-700 text-sm">&quot;Great&quot;</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-sm text-gray-800 italic mb-2">
                        &quot;Going well very happy&quot;
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm font-semibold text-gray-900">Overall satisfaction:</span>
                        <span className="text-lime-600 font-bold">5/5</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-900">Recommendation likelihood:</span>
                        <span className="text-lime-600 font-bold">5/5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-6">
                  This consistency in performance excellence is what separates the ShoreAgents approach from typical outsourcing solutions. When a PropTech business owner can give perfect 5/5 ratings across multiple evaluation periods, it validates the systematic approach that enables long-term success in outsourcing partnerships.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Financial Transformation */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <DollarSign className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">LockedOn Client Success: The Financial Transformation</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Behind Luke&apos;s amazement at the &quot;2 weeks&quot; revelation was a financial reality that every PropTech business owner should understand. When he said &quot;we should have done this years ago,&quot; he wasn&apos;t just talking about convenience—he was talking about the massive cost savings that had been sitting on the table, waiting for him to discover them.
                </p>
                <p className="mb-6">
                  The mathematics of the LockedOn client success story are compelling: a high-level administrative assistant in Australia costs approximately $65,000+ annually, plus superannuation, WorkCover, and other benefits. The comprehensive virtual assistant service through ShoreAgents costs a fraction of that while delivering superior results and systematic reliability.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Australian PropTech Admin Cost Analysis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                      <Building className="w-10 h-10 text-lime-600 mx-auto mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Local Admin Assistant (Sydney/Melbourne)</h4>
                      <div className="text-3xl font-bold text-lime-600 mb-2">$70,000+</div>
                      <p className="text-sm text-gray-600 mb-2">Annual Total Cost</p>
                      <p className="text-xs text-gray-700">Includes: Salary, Super, WorkCover, Leave, Equipment, Office Space</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                      <Globe className="w-10 h-10 text-lime-600 mx-auto mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">ShoreAgents Admin Assistant</h4>
                      <div className="text-3xl font-bold text-lime-600 mb-2">$18,000</div>
                      <p className="text-sm text-gray-600 mb-2">Annual All-Inclusive</p>
                      <p className="text-xs text-gray-700">Includes: Salary, Management, Equipment, Office, Training, HR</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                      <TrendingUp className="w-10 h-10 text-lime-600 mx-auto mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">LockedOn Annual Savings</h4>
                      <div className="text-3xl font-bold text-lime-600 mb-2">$52,000+</div>
                      <p className="text-sm text-gray-600 mb-2">Annual Savings</p>
                      <div className="text-2xl font-bold text-lime-600 mb-2">74%</div>
                      <p className="text-sm text-gray-600 mb-2">Cost Reduction</p>
                      <div className="text-xl font-bold text-lime-600">$260K+</div>
                      <p className="text-xs text-gray-700">5-Year Savings</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded">
                    <p className="text-gray-800 font-semibold text-center">
                      This is why Luke said &quot;we should have done this years ago&quot;
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  But the LockedOn client success story isn&apos;t just about direct cost savings. It&apos;s about the opportunity cost of Luke&apos;s time. As a PropTech executive, every hour spent on administrative tasks is an hour not spent on business development, product innovation, or strategic planning. The systematic efficiency that his virtual assistant provided didn&apos;t just save money—it multiplied Luke&apos;s executive productivity.
                </p>
                <p className="mt-4">
                  When PropTech companies can reinvest $52,000+ annually in product development, marketing, or team expansion instead of administrative overhead, they create competitive advantages that compound over time. This is the financial reality behind Luke&apos;s &quot;we should have done this years ago&quot; revelation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Luke's Revelation */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Luke&apos;s Revelation: The Cost of Waiting</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Luke Newton&apos;s honest assessment after just two weeks—&quot;we should have done it years ago&quot;—captures something every business owner recognizes: the regret of waiting too long to solve a known problem. His transformation from hesitant PropTech CEO to enthusiastic advocate wasn&apos;t about discovering a miracle solution. It was about experiencing systematic excellence he didn&apos;t know existed.
                </p>
                <p className="mb-6">
                  Think about what Luke&apos;s revelation actually means. &quot;Years ago&quot; suggests he&apos;d been struggling with administrative burden for a long time, probably spending his executive time on $25/hour tasks while his PropTech company needed $150/hour strategic thinking. The systematic efficiency he discovered in two weeks had been available all along—he just needed to experience it to believe it.
                </p>

                <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What &quot;Years Ago&quot; Really Cost Luke</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <DollarSign className="w-6 h-6 text-red-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Financial Opportunity Cost</h4>
                        <p className="text-gray-700 text-sm">Years of paying premium rates for work that could have been done at 74% savings</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-red-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Strategic Time Loss</h4>
                        <p className="text-gray-700 text-sm">Executive time spent on administrative tasks instead of PropTech innovation</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <TrendingDown className="w-6 h-6 text-red-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Growth Constraints</h4>
                        <p className="text-gray-700 text-sm">Business scaling limited by founder&apos;s capacity for detailed work</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <AlertCircle className="w-6 h-6 text-red-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Unnecessary Stress</h4>
                        <p className="text-gray-700 text-sm">Years of operational burden that could have been eliminated</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-4">
                    <p className="text-gray-800 font-semibold">
                      Luke&apos;s Realization: The solution existed—he just needed to stop hesitating and start testing
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  The sustained performance excellence—perfect 5/5 ratings after one year, &quot;excellent communicator,&quot; &quot;lovely to work with&quot;—validates Luke&apos;s initial decision and confirms his regret about waiting. The team member who earned these reviews wasn&apos;t just completing tasks; she was enabling Luke to focus on what PropTech CEOs should be doing: building products, developing strategy, and growing the business.
                </p>
                <p className="mt-4">
                  Luke&apos;s story resonates because it&apos;s so familiar to entrepreneurs. How many business owners are currently spending their time on work that someone else could handle more efficiently? How many are delaying decisions that could free up their capacity for strategic work? How many are operating at a disadvantage simply because they haven&apos;t experienced what systematic virtual assistant support actually delivers?
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* The PropTech Advantage */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Zap className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The PropTech Advantage Luke Discovered</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  PropTech companies like LockedOn face unique pressures: rapid innovation cycles, technical complexity, and the need to move fast in competitive markets. Luke&apos;s discovery that reliable administrative support could be implemented quickly and efficiently removed a major constraint on his ability to focus on what matters most.
                </p>
                <p className="mb-6">
                  The systematic approach that delivered Luke&apos;s transformation wasn&apos;t magic—it was methodology. Professional recruitment, clear communication standards, systematic training, and ongoing performance management. The difference between hesitation and action was just experiencing how well this actually works.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why PropTech Companies Choose ShoreAgents</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Zap className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Rapid Implementation</h4>
                        <p className="text-gray-700 text-sm">Transformation visible within 2 weeks, not months</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Technical Competency</h4>
                        <p className="text-gray-700 text-sm">Advanced Excel, Slack communication, system integration</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <DollarSign className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Cost Efficiency</h4>
                        <p className="text-gray-700 text-sm">74% cost savings compared to local hiring</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <TrendingUp className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Scalable Growth</h4>
                        <p className="text-gray-700 text-sm">Start with one, expand based on proven results</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA Section */}
        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Don&apos;t wait &quot;years&quot; to discover what Luke discovered in two weeks.</h2>
          <p className="text-xl mb-8 opacity-90">
            Stop spending executive time on administrative tasks. Experience the systematic virtual assistant support that transforms hesitant business owners into enthusiastic advocates who wish they&apos;d started sooner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Your Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-bold">
              <Target className="w-5 h-5 mr-2" />
              Start With One Agent
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
