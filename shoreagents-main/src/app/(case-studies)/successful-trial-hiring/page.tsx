"use client";

import { SideNav } from "@/components/layout/SideNav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Target,
  Award,
  TrendingUp,
  Lightbulb,
  Star,
  Clock,
  FileText,
  ArrowRight,
  Building2,
  Globe,
  CheckCircle2,
  AlertCircle,
  Zap,
  Shield,
  BarChart3,
  Rocket,
  Users,
  ThumbsUp,
  TrendingDown
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function SuccessfulTrialHiringPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[{"name":"Case Studies","url":"https://www.shoreagents.com/case-studies"},{"name":"Jonathan Curreri","url":"https://www.shoreagents.com/successful-trial-hiring"}]} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              Crowdcopia Client Success - USA
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Conservative Approach That Worked:<br />
              <span className="text-lime-600">"Blown Our Expectations Out of the Water"</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              When a USA real estate company needed to test offshore staffing, they hired just one agent as a trial. 
              What happened next exceeded every expectation: perfect performance reviews, zero improvement areas 
              identified, and a recommendation to "highly recommend them so far." This is Crowdcopia's offshore 
              success blueprint.
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
                  JC
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                "We hired 1 agent with ShoreAgents as a trial before we commit to hiring more in other areas of our 
                business. Our first hire has blown our expectations out of the water as he is accurate, pays attention 
                to detail and picks things up way faster than we anticipated. We highly recommend them so far and look 
                forward to our future hires with them!"
              </blockquote>
              <div className="text-lg font-bold text-gray-900">Jonathan Curreri</div>
              <div className="text-gray-600 mb-2">Crowdcopia</div>
              <div className="flex items-center gap-2 text-gray-600">
                <Globe className="w-4 h-4" />
                <span>USA</span>
                <span className="mx-2">•</span>
                <span>Hired One Agent</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Overview */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Picture this: You're cautious about offshore hiring. You start with just one agent as a trial. Then 
            something remarkable happens—performance so exceptional that after three consecutive reviews, your 
            evaluator can't identify a single area for improvement. That's the Crowdcopia client success story.
          </p>
        </div>

        <Separator className="my-12" />

        {/* The Trial That Changed Everything */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Target className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Trial That Changed Everything</h2>
              <p className="text-lg text-gray-600">How a conservative approach delivered exceptional results</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Jonathan Curreri from Crowdcopia approached offshore staffing exactly the way smart business owners 
              should—with caution. As a USA-based real estate company handling insurance data, loan tape uploads, and 
              complex administrative processes, they needed someone who could handle detailed work accurately and 
              efficiently.
            </p>
            
            <p className="mb-8">
              "We hired 1 agent with ShoreAgents as a trial before we commit to hiring more in other areas of our 
              business," Jonathan explained. This wasn't about finding the cheapest option—it was about finding 
              systematic real estate virtual assistant support that could integrate seamlessly with their existing 
              operations.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Strategic Trial Approach</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Conservative Testing</h4>
                      <p className="text-gray-700 text-sm">Started with one agent to evaluate quality and integration capabilities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Real Estate Focus</h4>
                      <p className="text-gray-700 text-sm">Specialized administrative tasks requiring industry knowledge and attention to detail</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Future Planning</h4>
                      <p className="text-gray-700 text-sm">Evaluating for potential expansion "into other areas of our business" based on results</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Smart Scaling</h4>
                      <p className="text-gray-700 text-sm">Test before you scale—validate the approach before committing</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Smart businesses test before they scale—and Crowdcopia's approach validated their strategic thinking
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              This methodical approach to offshore staffing is exactly what we recommend to business owners. Too many 
              companies try to hire multiple people at once. Crowdcopia's conservative trial strategy reflects the 
              systematic approach that actually works. What happened next demonstrates why the careful approach to real 
              estate outsourcing delivers results that exceed expectations.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* "Blown Our Expectations Out of the Water" */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Zap className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">"Blown Our Expectations Out of the Water"</h2>
              <p className="text-lg text-gray-600">Exceeding expectations from day one</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Within the first month, something remarkable was happening. The trial hire wasn't just meeting 
              expectations—they were redefining what Crowdcopia thought was possible from offshore real estate 
              administrative support. "Our first hire has blown our expectations out of the water," Jonathan reported. 
              "He is accurate, pays attention to detail and picks things up way faster than we anticipated."
            </p>
            
            <p className="mb-8">
              This wasn't the typical learning curve that most businesses expect with new hires. Instead of spending 
              weeks training and correcting mistakes, Crowdcopia discovered what happens when you get systematic virtual 
              assistant support from professionals who understand real estate administrative requirements from day one.
            </p>

            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What "Blown Expectations" Actually Means</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Zap className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Speed of Mastery</h4>
                      <p className="text-gray-700 text-sm">"Picks things up way faster than we anticipated" – learning curve eliminated</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Target className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Precision Excellence</h4>
                      <p className="text-gray-700 text-sm">"Accurate, pays attention to detail" – zero quality concerns from day one</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Exceeded Planning</h4>
                      <p className="text-gray-700 text-sm">Performance levels beyond what they hoped for from their conservative trial</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Integration Success</h4>
                      <p className="text-gray-700 text-sm">Seamless integration into existing real estate administrative workflows</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-lime-50 border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Result: "We highly recommend them so far and look forward to our future hires with them!"
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              This kind of immediate success reflects something crucial about our systematic approach to offshore staffing. 
              We don't just hire people and hope for the best. Our Clark-based office environment, professional infrastructure, 
              and industry-specific recruitment ensure that team members arrive equipped to deliver excellence from their first 
              day of work.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Three Perfect Performance Reviews */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Award className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Three Perfect Performance Reviews</h2>
              <p className="text-lg text-gray-600">Sustained excellence over time validates the trial approach</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              The real validation of any offshore staffing relationship isn't the initial enthusiasm—it's the sustained 
              performance over time. Crowdcopia's evaluation process tells a remarkable story: three consecutive performance 
              reviews spanning over a year, each earning perfect scores across every category measured.
            </p>
            
            <p className="mb-8">
              Initial, mid-term, and annual reviews each delivered identical results: perfect 5/5 ratings for Quality, 
              Reliability, Communication, Time Management, and Job Knowledge. The sustained excellence across every 
              performance category demonstrates the systematic approach that makes offshore staffing successful.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Excellence Timeline</h3>
                <div className="space-y-6">
                  {/* Initial Review */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-lime-600">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Initial Review: Perfect Start</h4>
                        <p className="text-gray-700 mb-2"><strong>All Categories: 5/5 Perfect Scores</strong></p>
                        <p className="text-gray-700 mb-3">Quality, Communication, Reliability, Time Management, Job Knowledge</p>
                        <div className="bg-lime-50 p-3 rounded space-y-1">
                          <p className="text-gray-800 text-sm">• "Requires less instruction than anticipated"</p>
                          <p className="text-gray-800 text-sm">• "Work is extremely efficient"</p>
                          <p className="text-gray-800 text-sm">• "Always done well before time constraints"</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mid-Term Review */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-lime-600">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Mid-Term Review: Sustained Excellence</h4>
                        <p className="text-gray-700 mb-2"><strong>All Categories: 5/5 Perfect Scores</strong></p>
                        <p className="text-gray-700 mb-3">Sustained excellence across all performance areas</p>
                        <div className="bg-lime-50 p-3 rounded space-y-1">
                          <p className="text-gray-800 text-sm">• "Astounding" quality performance</p>
                          <p className="text-gray-800 text-sm">• "Exceeds expectations"</p>
                          <p className="text-gray-800 text-sm">• "Finishes work far before I expect it"</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Annual Review */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-lime-600">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Annual Review: Consistent Excellence</h4>
                        <p className="text-gray-700 mb-2"><strong>All Categories: 5/5 Perfect Scores</strong></p>
                        <p className="text-gray-700 mb-3">Consistent excellence over annual review period</p>
                        <div className="bg-lime-50 p-3 rounded space-y-1">
                          <p className="text-gray-800 text-sm">• "Does an amazing job"</p>
                          <p className="text-gray-800 text-sm">• "I trust his ability to complete any task"</p>
                          <p className="text-gray-800 text-sm">• "Exceeds expectations"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-gray-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Accomplishments Throughout Partnership</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <BarChart3 className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Salesforce Management</h4>
                      <p className="text-gray-700 text-sm">Loan tape uploads and data management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Insurance Operations</h4>
                      <p className="text-gray-700 text-sm">Complex insurance sheet management and issue resolution</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Administrative Excellence</h4>
                      <p className="text-gray-700 text-sm">SAT pieces and monthly water reports</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Perfect Record</h4>
                      <p className="text-gray-700 text-sm">Zero disciplinary actions, zero improvement areas identified</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-lime-50 border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Remarkable Achievement: Perfect attendance record and flawless performance across all metrics
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Why Systematic Approach Delivers Results */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Lightbulb className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Why Systematic Approach Delivers Results</h2>
              <p className="text-lg text-gray-600">The infrastructure that makes excellence possible</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              The Crowdcopia client success story reflects something crucial about how we approach offshore staffing 
              differently than typical BPO companies. This isn't about finding the cheapest labor—it's about implementing 
              systematic business processes that happen to cost 78% less than local alternatives while delivering superior 
              results.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Systematic Differences That Created Success</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Professional Office Environment</h4>
                      <p className="text-gray-700 text-sm">No chickens in the background, no power outages—professional infrastructure ensures consistent performance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Real Estate Specialization</h4>
                      <p className="text-gray-700 text-sm">Industry-specific recruitment and training means team members understand requirements from day one</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Staff Leasing Model</h4>
                      <p className="text-gray-700 text-sm">Employees under Philippines law, managed by ShoreAgents, dedicated exclusively to your business</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Honest Implementation</h4>
                      <p className="text-gray-700 text-sm">No false training promises—we support YOUR process documentation while providing skilled professionals</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Result: Immediate productivity, sustained excellence, and business owners who "highly recommend"
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200 mt-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-gray-900">Stephen's Take: Why Most Offshore Hiring Fails</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    "I've made every mistake possible in offshore staffing. In 2012, I hired someone working from home 
                    who would disappear for days when it rained because they couldn't work with chickens and roosters 
                    crowing in the background. I tried freelancer platforms where people stole computers. I hired 5 people 
                    at once and couldn't train them all."
                  </p>
                  <p>
                    "Crowdcopia's success reflects everything we've learned from those failures. Professional office 
                    environment, biometric security, enterprise-grade equipment, industry-specific recruitment, and honest 
                    expectations about training and implementation."
                  </p>
                  <p>
                    "When a USA business owner says their hire 'picks things up way faster than anticipated' and 'requires 
                    less instruction than anticipated,' that's validation of systematic approaches that actually work versus 
                    the typical BPO disaster stories."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* "Look Forward to Our Future Hires" */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Rocket className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">"Look Forward to Our Future Hires"</h2>
              <p className="text-lg text-gray-600">From trial to strategic expansion based on proven results</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              The true measure of any offshore staffing trial isn't the initial enthusiasm—it's whether the business 
              wants to expand the relationship. Crowdcopia's conclusion speaks volumes: "We highly recommend them so far 
              and look forward to our future hires with them!"
            </p>
            
            <p className="mb-8">
              This isn't casual optimism—it's strategic planning based on proven results. Crowdcopia started with one 
              agent as a trial specifically to evaluate expansion "into other areas of our business." Perfect performance 
              reviews and exceeded expectations validated their systematic approach to growth.
            </p>

            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Strategic Expansion Opportunities</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <FileText className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Additional Real Estate Admin</h4>
                      <p className="text-gray-700 text-sm">Scale insurance management, loan processing, and data entry operations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Business Development Support</h4>
                      <p className="text-gray-700 text-sm">Marketing, lead generation, and client relationship management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Operations Management</h4>
                      <p className="text-gray-700 text-sm">Process optimization, quality control, and systems administration</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Users className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Specialized Departments</h4>
                      <p className="text-gray-700 text-sm">Customer service, technical support, and compliance management</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-lime-50 border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Proven excellence in one area creates confidence for systematic expansion across all business functions
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              This expansion trajectory reflects exactly what we recommend to business owners: start conservatively, prove 
              the system works, then scale systematically based on results. Crowdcopia's approach validates the methodology 
              that transforms offshore staffing from cost-cutting measure to competitive advantage.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* How to Achieve What Crowdcopia Achieved */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <ThumbsUp className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Crowdcopia Success Formula You Can Copy</h2>
              <p className="text-lg text-gray-600">Exactly how to replicate their trial hiring success</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Jonathan's approach wasn't complicated—it was smart. If you're running a real estate business and wondering 
              whether offshore staffing could work for you, here's exactly how to follow Crowdcopia's blueprint for success.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-lime-600">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Start Conservative (Like Jonathan Did)</h4>
                        <p className="text-gray-700 mb-3">
                          Don't hire a whole team on day one. Pick ONE critical task that's eating up your time—insurance 
                          processing, data entry, client follow-up, whatever keeps you from actual revenue-generating activities.
                        </p>
                        <div className="bg-lime-50 p-3 rounded">
                          <p className="text-gray-800 italic text-sm">
                            "We hired 1 agent with ShoreAgents as a trial before we commit to hiring more in other areas of 
                            our business" – Jonathan's exact approach
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-lime-600">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Choose Professional Infrastructure</h4>
                        <p className="text-gray-700 mb-3">
                          Skip the freelancer platforms and home-based workers. Look for providers with actual offices, 
                          professional equipment, and staff leasing models. Jonathan's hire succeeded because they worked 
                          in a professional environment, not from someone's kitchen table.
                        </p>
                        <div className="bg-lime-50 p-3 rounded">
                          <p className="text-gray-800 font-semibold text-sm">
                            Result: Perfect performance from day one instead of weeks of training disasters
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-lime-600">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Measure Everything</h4>
                        <p className="text-gray-700 mb-3">
                          Do formal performance reviews like Jonathan did. Track quality, reliability, communication, and 
                          time management. If you can't identify specific areas for improvement after several months, you've 
                          found a winner.
                        </p>
                        <div className="bg-lime-50 p-3 rounded">
                          <p className="text-gray-800 italic text-sm">
                            Jonathan's evaluations: "I can't even think of any" areas for improvement across three reviews
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-lime-600">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-lime-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Scale Based on Success</h4>
                        <p className="text-gray-700 mb-3">
                          Once you have proof of concept, expand strategically. Jonathan is now planning hires "in other 
                          areas of our business" because the first hire exceeded expectations. That's how you build a 
                          competitive advantage.
                        </p>
                        <div className="bg-lime-50 p-3 rounded">
                          <p className="text-gray-800 italic text-sm">
                            "We highly recommend them so far and look forward to our future hires with them!"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Reality Check You Need</h3>
                <p className="text-gray-700">
                  Most offshore staffing attempts fail because business owners either choose the wrong provider or have 
                  unrealistic expectations. Jonathan succeeded because he approached it strategically, not desperately. 
                  The difference between Jonathan's success and the typical offshore staffing horror stories isn't luck—it's 
                  methodology. Start conservative, choose professional infrastructure, measure results, and scale based on 
                  proven success. That's how you transform administrative burdens into competitive advantages.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>

      {/* Final CTA */}
      <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white mx-4 mb-8">
        <CardContent className="p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Follow Jonathan's Blueprint?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Start your own conservative trial with the same systematic approach that delivered perfect performance 
            reviews for Crowdcopia. Test with one specialist, measure results, then scale based on proven success.
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
