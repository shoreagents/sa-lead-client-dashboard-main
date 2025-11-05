'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, Target, Clock, DollarSign, TrendingUp, 
  CheckCircle, XCircle, Users, Globe, Zap, Shield, 
  FileText, Award, Calendar, Home, Phone, Briefcase,
  ChevronRight, ArrowRight, Lightbulb
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function RealEstateVirtualAssistant90FailPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-red-600 text-white px-4 py-2 text-lg mb-6">
            <AlertTriangle className="w-5 h-5 inline-block mr-2" />
            Critical Reality Check
          </Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Real Estate Virtual Assistant:<br />90% Fail - Client Messes Up or Staff Messes Up
          </h1>
          <div className="flex items-center justify-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>By Stephen (Shore Agents)</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>13 Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>15 min read</span>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">90%</div>
              <p className="text-sm text-gray-700 font-medium">VA Partnerships Fail</p>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-lime-50">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">50%</div>
              <p className="text-sm text-gray-700 font-medium">Success If You Prepare</p>
            </CardContent>
          </Card>
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">60-90</div>
              <p className="text-sm text-gray-700 font-medium">Days to Productivity</p>
            </CardContent>
          </Card>
          <Card className="border-gray-200 bg-gray-100">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">13</div>
              <p className="text-sm text-gray-700 font-medium">Years Experience</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <Card className="mb-12 border-gray-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The Brutal Truth</h2>
              </div>
              <p className="text-gray-700 text-lg mb-4">
                Look, I'm going to be brutally honest with you - <strong>90% of VA partnerships fail</strong>. It's just a matter of time before the client messes up or the staff messes up. Sometimes both.
              </p>
              <p className="text-gray-700 mb-4">
                I started hiring offshore staff in 2012 because a $70/hour Australian bookkeeper was destroying my profit margins at REMAX. I was doing 80K monthly commissions on a 92% split - great revenue, terrible profits.
              </p>
              <p className="text-gray-700 mb-4">
                That first VA worked from her grandmother's house in the Philippines. Roosters crowing during client calls. Rain hammering tin roof. Power outages. Grandma talking in the background. I almost quit after two weeks.
              </p>
              <p className="text-gray-700 font-semibold">
                <strong>Fast forward:</strong> 13 years experience (client side 2012-2019, running Shore Agents BPO in Clark, Philippines since 2019). I've seen VAs last 7 years. I've seen them not even show up on Day 1.
              </p>
            </CardContent>
          </Card>

          {/* The 90% Failure Reality */}
          <Card className="mb-12 border-red-200 bg-red-50">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <XCircle className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The 90% Failure Reality</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Real talk: This is hiring and HR. It's a dirty game in ANY country. No different.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* The Client Messes Up */}
                <div className="bg-white rounded-lg p-6 border-2 border-red-300">
                  <h3 className="text-xl font-bold text-red-600 mb-4">The Client Messes Up</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">No documented processes (expects VA to "just know")</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Unrealistic expectations ("trained and ready Day 1!")</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Quits during the 30-60 day frustration phase</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Delegates strategy instead of execution</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">No systems, no patience, no management time</span>
                    </li>
                  </ul>
                </div>

                {/* The Staff Messes Up */}
                <div className="bg-white rounded-lg p-6 border-2 border-red-300">
                  <h3 className="text-xl font-bold text-red-600 mb-4">The Staff Messes Up</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Doesn't show up (Day 1 no-shows happen)</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Performance drops after a few months</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Takes better offer and ghosts</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Works multiple clients, divided attention</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Lies about experience or availability</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-red-600">
                <h4 className="font-bold text-gray-900 mb-2">The Pattern I've Seen:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li><strong>Best case:</strong> 7 years (longest VA I've seen - everything done right, luck played a part)</li>
                  <li><strong>Worst case:</strong> Day 1 no-show</li>
                  <li><strong>Common:</strong> 3-6 months then they take better offer</li>
                </ul>
                <p className="text-gray-700 mt-4 font-semibold">
                  Does this mean it won't work out? No. But you better have your processes together or you're part of the 90%.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* The Success Rate Reality */}
          <Card className="mb-12 border-lime-200 bg-lime-50">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The Success Rate Reality: 50-50 If You Do Your Part</h2>
              </div>

              <div className="bg-white rounded-lg p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-red-600 mb-2">90%</div>
                    <p className="text-gray-700">Industry reality: All VA partnerships fail within 90 days</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-lime-600 mb-2">50%</div>
                    <p className="text-gray-700">Shore Agents clients who get their shit together: Success rate long-term</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <XCircle className="w-6 h-6 text-red-600 mr-2" />
                    We Can't Control:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Whether you document your processes (most don't)</li>
                    <li>• Whether you have patience for 60-90 days (most quit)</li>
                    <li>• Whether you manage actively (most disappear)</li>
                    <li>• Whether you delegate the right tasks (most don't know the difference)</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 text-lime-600 mr-2" />
                    We CAN Control:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Quality of candidates (we show you real profiles)</li>
                    <li>• Transparency (no hidden markup bullshit)</li>
                    <li>• Tracking tools (see what they're actually doing)</li>
                    <li>• Ongoing support (we're here when shit goes wrong)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-lime-600 to-lime-700 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">The 100% Success Formula:</h3>
                <p className="mb-4"><strong>IF you:</strong></p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Document your processes BEFORE hiring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Dedicate 5-10 hours/week management (first 90 days)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Have patience for 60-90 day ramp-up</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Delegate execution tasks (not strategy)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Use our tracking software</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Don't quit during frustration phase</span>
                  </li>
                </ul>
                <p className="text-xl font-bold"><strong>THEN:</strong> It works. Every fucking time.</p>
              </div>
            </CardContent>
          </Card>

          {/* Philippines Night Shift Problem */}
          <Card className="mb-12 border-blue-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Clock className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The Philippines Night Shift Problem</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Here's the reality for US agents:
              </p>

              <div className="bg-blue-50 rounded-lg p-6 mb-6 border-l-4 border-blue-600">
                <p className="text-xl font-bold text-gray-900 mb-2">
                  Your 9am-5pm EST = Their 9pm-5am Manila. Night shift.
                </p>
                <p className="text-gray-700">
                  What happens: VA starts coming to office at 9pm. Traffic in Manila at 9pm is a nightmare. They ask to work from home (fair enough). Now tracking them becomes really difficult. You're paying 10% night differential (Philippine labor law). Higher cost + harder to manage = you're flying blind.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600">
                  <Globe className="w-8 h-8 text-red-600 mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">US Agents</h3>
                  <p className="text-gray-700 text-sm mb-3">Philippines is +12 to +16 hours ahead</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• NIGHT shift - tracking problems</li>
                    <li>• 10% night differential cost</li>
                    <li>• Home-based = harder monitoring</li>
                  </ul>
                </div>

                <div className="bg-lime-50 rounded-lg p-6 border-l-4 border-lime-600">
                  <Globe className="w-8 h-8 text-lime-600 mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Australian/NZ Agents</h3>
                  <p className="text-gray-700 text-sm mb-3">Philippines is +2 to +4 hours ahead</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• DAYTIME overlap - no night shift problems</li>
                    <li>• Time zones actually work for you</li>
                    <li>• This is why I moved operations to Clark in 2012</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Verify Workspace */}
          <Card className="mb-12 border-gray-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Phone className="w-8 h-8 text-gray-900 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">If You Want Outbound Calls - Verify the Workspace</h2>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6 mb-6 border-l-4 border-yellow-600">
                <p className="text-gray-700 mb-4">
                  <strong>Real talk about cold calling:</strong> If you're hiring for outbound calls, lead generation, client-facing work - you need to verify the workspace more thoroughly. Yes, avoid the chickens situation.
                </p>
                <p className="text-gray-700">
                  Why? Roosters crowing on a $2M listing call = you look unprofessional. Grandma talking during cold calls = instant hang up. Rain on tin roof = unprofessional. Dogs barking, kids screaming, neighbors yelling = brand damage.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-lime-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-lime-600 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    When Home-Based Works:
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✅ Admin tasks (data entry, CRM, email)</li>
                    <li>✅ Back-office (bookkeeping, transaction coordination)</li>
                    <li>✅ Written work (social media, listings, content)</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-red-600 mb-3 flex items-center">
                    <XCircle className="w-5 h-5 mr-2" />
                    When You Need Office-Based:
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>❌ Outbound calling (background noise kills you)</li>
                    <li>❌ Client-facing calls (professionalism matters)</li>
                    <li>❌ Live support (need reliable internet + quiet)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Competitor Landscape */}
          <Card className="mb-12 border-gray-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-gray-900 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The Real Competitor Landscape</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-gray-400">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">MyOutDesk (The Big Player)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Claim:</p>
                      <p className="text-gray-900 font-semibold">"Trained by 8,500+ clients, top 2.2% hired"</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Cost:</p>
                      <p className="text-gray-900 font-semibold">$1,988/month (12-month contract)</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-2"><strong>What they won't tell you:</strong> "Trained" = 4 weeks generic overview, not YOUR business</p>
                  <p className="text-gray-700 text-sm"><strong>Reality:</strong> Still need 60-90 days real training on YOUR systems. The markup: 40-50% more than direct costs.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-gray-400">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Virtudesk, TaskBullet, Zirtual, Wing</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Pricing:</p>
                      <p className="text-gray-900 font-semibold">$1,200-2,500/month</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Models:</p>
                      <p className="text-gray-900 font-semibold">Monthly contracts, some with minimums</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-2"><strong>What they hide:</strong> Generic assignment, you don't pick who</p>
                  <p className="text-gray-700 text-sm"><strong>Reality:</strong> All claim "real estate trained" - all need YOUR training still. Markup: 35-45% above actual costs.</p>
                </div>

                <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What NONE of Them Tell You:</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• 90% failure rate overall</li>
                    <li>• Night shift differential for Philippines + US hours</li>
                    <li>• Tracking home-based workers is extremely difficult</li>
                    <li>• They're NOT trained for YOUR business</li>
                    <li>• First 60-90 days you're slower, not faster</li>
                    <li>• The massive markup they're charging</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shore Agents Platform */}
          <Card className="mb-12 border-lime-200 bg-lime-50">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Platform: Real Candidates, Real Costs, No Hidden Fees</h2>
              </div>

              <p className="text-gray-700 mb-6">
                We're based in Clark, Philippines. We have our own pricing system with exact costs linked to real candidates. You sign up, you pick one.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg p-6">
                  <Lightbulb className="w-8 h-8 text-lime-600 mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Real Candidate Profiles</h3>
                  <p className="text-gray-700 text-sm">Browse actual people with real profiles. See their background, experience, workspace setup. Pick WHO you want, not who we assign. Full-time only.</p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <Target className="w-8 h-8 text-lime-600 mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">AI DISC Test</h3>
                  <p className="text-gray-700 text-sm">AI analyzes personality. Tells you exactly what type of person they are. Match to role requirements. No surprises after you hire.</p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <FileText className="w-8 h-8 text-lime-600 mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">AI Resume Analysis</h3>
                  <p className="text-gray-700 text-sm">AI breaks down their actual experience. Separates claims from real skills. Shows you what they've ACTUALLY done. Not what they say they can do.</p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <DollarSign className="w-8 h-8 text-lime-600 mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                  <p className="text-gray-700 text-sm">Entry level: $1,100 USD/month. Experienced: $1,800-2,200 USD/month. Night differential already factored in. No hidden markup like competitors.</p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <Home className="w-8 h-8 text-lime-600 mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Workspace Options</h3>
                  <p className="text-gray-700 text-sm">Work from Home: Lower setup, includes tracking software. Hybrid: Office access when needed. Full Office: Best for client-facing roles.</p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <Zap className="w-8 h-8 text-lime-600 mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Built-in Tracking Software</h3>
                  <p className="text-gray-700 text-sm">Screen monitoring for home-based workers. Activity verification. Output measurement. You can actually see what they're doing.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-red-600">
                <h3 className="text-lg font-bold text-gray-900 mb-3">What You DON'T Get:</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>❌ "Trained and ready" lies - No, they're not trained for YOUR business. You train them.</li>
                  <li>❌ Generic assignment - You pick the actual person.</li>
                  <li>❌ Part-time options - Full-time or go elsewhere.</li>
                  <li>❌ Magic solutions - Still hiring, still HR, still a dirty game.</li>
                  <li>❌ Hidden markups - Transparent pricing, you see what you pay.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Document Your Processes */}
          <Card className="mb-12 border-blue-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Make Sure You Have Your Processes Together First</h2>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6 border-l-4 border-blue-600">
                <p className="text-xl font-bold text-gray-900 mb-4">
                  This is the part that makes or breaks you.
                </p>
                <p className="text-gray-700">
                  Most tasks can be assisted by AI. Use AI to document your processes BEFORE you hire anyone.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Use AI to Document Your Processes:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Sign up to an LLM (I prefer Claude, but use what works)</li>
                    <li>• Create Projects for different areas of your business</li>
                    <li>• Document YOUR processes - talk through what you do</li>
                    <li>• Document processes for THEM - step-by-step instructions</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
                  <p className="text-gray-700 font-semibold">
                    <strong>The key:</strong> Learn AI tools to help you think about what you really want to delegate and create processes.
                  </p>
                  <p className="text-gray-700 mt-2">
                    Why? Because if you think this person is going to just figure it out on their own, you're setting them up to fail.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What to Document:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Every task you want to delegate</li>
                    <li>• Exactly how YOU do it (step-by-step)</li>
                    <li>• What good output looks like</li>
                    <li>• Where to find information</li>
                    <li>• Who to ask when stuck</li>
                    <li>• Decision trees for common situations</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    <strong>Without documentation:</strong> They guess. They mess up. You get frustrated. Partnership dies in 60 days.
                  </p>
                  <p className="text-gray-700 mt-2">
                    <strong>With documentation:</strong> They have a roadmap. Quality improves. You can scale.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What Real Estate VAs Actually Do */}
          <Card className="mb-12 border-gray-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Briefcase className="w-8 h-8 text-gray-900 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">What Real Estate VAs Actually Do</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-lime-50 rounded-lg p-6 border-l-4 border-lime-600">
                  <h3 className="text-lg font-bold text-lime-600 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Good to Delegate:
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✅ CRM updates, data entry</li>
                    <li>✅ MLS listings management</li>
                    <li>✅ Transaction coordination</li>
                    <li>✅ Appointment scheduling</li>
                    <li>✅ Social media (pre-approved content)</li>
                    <li>✅ Email management</li>
                    <li>✅ Lead research</li>
                    <li>✅ Marketing materials creation</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600">
                  <h3 className="text-lg font-bold text-red-600 mb-3 flex items-center">
                    <XCircle className="w-5 h-5 mr-2" />
                    Never Delegate:
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>❌ Client relationship building</li>
                    <li>❌ Listing presentations</li>
                    <li>❌ Negotiations</li>
                    <li>❌ Pricing strategy</li>
                    <li>❌ Strategic business decisions</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
                  <h3 className="text-lg font-bold text-yellow-700 mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Verify Workspace First:
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>⚠️ Outbound calling</li>
                    <li>⚠️ Client-facing calls</li>
                    <li>⚠️ Live customer support</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Real Costs */}
          <Card className="mb-12 border-gray-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <DollarSign className="w-8 h-8 text-gray-900 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The Real Costs (Honest Version)</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300">
                  <h3 className="text-2xl font-bold text-red-600 mb-4">Year 1 Complete Costs</h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                      <span>VA Monthly Cost:</span>
                      <span className="font-semibold">$1,900</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                      <span>Setup Fee:</span>
                      <span className="font-semibold">$1,100</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                      <span>Software/Tools:</span>
                      <span className="font-semibold">$1,200/yr</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                      <span>YOUR Training Time:</span>
                      <span className="font-semibold">$9,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                      <span>YOUR Management:</span>
                      <span className="font-semibold">$39,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                      <span>Mistakes/Rework:</span>
                      <span className="font-semibold">$5,000</span>
                    </div>
                    <div className="flex justify-between items-center pt-3">
                      <span className="text-xl font-bold">YEAR 1 TOTAL:</span>
                      <span className="text-2xl font-bold text-red-600">$66,700</span>
                    </div>
                  </div>
                </div>

                <div className="bg-lime-50 rounded-lg p-6 border-2 border-lime-300">
                  <h3 className="text-2xl font-bold text-lime-600 mb-4">Year 2+ (After Trained)</h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                      <span>VA Monthly Cost:</span>
                      <span className="font-semibold">$22,800/yr</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                      <span>Software:</span>
                      <span className="font-semibold">$1,200</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                      <span>Management:</span>
                      <span className="font-semibold">$15,600</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                      <span>Mistakes:</span>
                      <span className="font-semibold">$1,000</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 mt-16">
                      <span className="text-xl font-bold">YEAR 2 TOTAL:</span>
                      <span className="text-2xl font-bold text-lime-600">$40,600</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">When It Makes Sense:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Reclaim 15+ hours/week</li>
                  <li>• Your time worth $150+/hour</li>
                  <li>• Value saved: $9,000+/month</li>
                  <li>• Year 2+ ROI: 300-500%</li>
                  <li>• Break-even: 18-24 months if you don't quit</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Your Next Steps */}
          <Card className="mb-12 border-lime-200 bg-gradient-to-br from-lime-50 to-lime-100">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <ArrowRight className="w-8 h-8 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Your Next Steps</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 border-2 border-lime-300">
                  <div className="text-lime-600 text-6xl font-bold mb-4">1</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">You're Ready</h3>
                  <p className="text-gray-700 text-sm mb-3">You have:</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>✓ Documented processes</li>
                    <li>✓ 60-90 day patience</li>
                    <li>✓ 5-10 hrs/week management time</li>
                    <li>✓ Full-time role needs filling</li>
                  </ul>
                  <Button className="w-full mt-4 bg-lime-600 hover:bg-lime-700 text-white">
                    Sign Up to Platform
                  </Button>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-blue-300">
                  <div className="text-blue-600 text-6xl font-bold mb-4">2</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">You're NOT Ready</h3>
                  <p className="text-gray-700 text-sm mb-3">You don't have:</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>✗ Documented processes</li>
                    <li>✗ Patience for 60-90 days</li>
                    <li>✗ Time for management</li>
                    <li>✗ Your systems together</li>
                  </ul>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                    Use AI to Document First
                  </Button>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
                  <div className="text-gray-600 text-6xl font-bold mb-4">3</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Part-Time Only</h3>
                  <p className="text-gray-700 text-sm mb-3">Use Upwork or similar freelancer platforms.</p>
                  <p className="text-gray-700 text-sm">
                    We focus on full-time serious roles. If you're just testing, that's not our model.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">The Bottom Line</h3>
                <p className="mb-4">
                  90% fail. Client messes up or staff messes up. We're the middle man.
                </p>
                <p className="mb-4">
                  This is hiring. This is HR. It's a dirty game in ANY country.
                </p>
                <p className="mb-4">
                  <strong>The advantage:</strong> Lower costs because of economics (living expenses are different).
                </p>
                <p className="mb-4">
                  <strong>The disadvantage:</strong> They have options. Some don't show up. Some take better offers. Some aren't reliable.
                </p>
                <p className="text-xl font-bold mt-6">
                  Will it work out? That's up to you and them.
                </p>
                <p className="mt-2">
                  We give you the tools. You do the work.
                </p>
                <p className="mt-4 text-lime-400 font-semibold">
                  If you get your shit together: 100% success rate.
                </p>
                <p className="mt-2">
                  If you don't: Part of the 90% that fail.
                </p>
                <p className="mt-4 text-2xl font-bold">
                  Simple as that.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center py-12 bg-gradient-to-r from-lime-600 to-lime-700 rounded-xl">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Join the 10% Who Succeed?
            </h2>
            <p className="text-xl text-lime-100 mb-8 max-w-2xl mx-auto">
              Get your processes together, browse real candidates, and start building your offshore team the right way.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-6 text-lg">
                <ArrowRight className="w-5 h-5 mr-2" />
                Browse Real Candidates
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-lime-700 px-8 py-6 text-lg">
                <FileText className="w-5 h-5 mr-2" />
                Download Process Templates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

