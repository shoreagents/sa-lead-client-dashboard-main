"use client";

import { SideNav } from "@/components/layout/SideNav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Target, 
  Building2, 
  Award, 
  Globe, 
  Clock,
  Star,
  Zap,
  Home,
  Shield,
  FileText,
  ArrowRight,
  Handshake,
  DollarSign,
  Key,
  Phone
} from "lucide-react";
import Link from "next/link";

export default function GradualTeamScalingSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-red-600 text-white mb-4 text-sm px-3 py-1">
              🚨 PROPERTY MANAGEMENT BREAKTHROUGH: Conservative Start to 5-Star Excellence
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Barry Plant Client Success:<br />
              <span className="text-lime-600">How Australia&apos;s Leading Agency Achieved 5-Star Offshore Integration</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              When Barry Plant Real Estate started cautiously with one virtual assistant for property management, 
              they didn&apos;t expect perfect performance reviews and team integration so seamless that evaluators 
              call staff &quot;beautiful people.&quot; This Barry Plant client success story shows how systematic 
              property management outsourcing transforms established agencies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/pricing" 
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
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-lime-50 to-green-50 border-l-4 border-lime-500">
            <CardContent className="p-8">
              <blockquote className="text-xl text-gray-800 italic mb-6 leading-relaxed">
                &quot;The team at ShoreAgents have been able to provide us with two wonderful staff. We were 
                recommended to reach out by another happy client and they did not disappoint. Mark and the team 
                made the process seamless and very professional. As we could not decide on which applicant to 
                onboard so we took both and created another role. We are so grateful as both are beautiful and 
                hardworking members of our team that have become proficient in their respective roles. We highly 
                recommend ShoreAgents to any prospective employer looking to use the service to provide quality 
                applicants.&quot;
              </blockquote>
              <div className="flex items-center gap-4">
                <Globe className="w-10 h-10 text-lime-600" />
                <div>
                  <p className="text-gray-900 font-bold text-lg">Marinella Sortino</p>
                  <p className="text-gray-700">Barry Plant, AU - Hired a Team - Australia 🇦🇺</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Cards */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 text-lime-600 mx-auto mb-2" />
                <div className="text-4xl font-bold text-lime-600 mb-2">4.88/5</div>
                <p className="text-gray-700 font-semibold">Performance Rating</p>
              </CardContent>
            </Card>
            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <div className="text-4xl font-bold text-blue-600 mb-2">2</div>
                <p className="text-gray-700 font-semibold">Specialized Roles</p>
              </CardContent>
            </Card>
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <div className="text-4xl font-bold text-green-600 mb-2">5/5</div>
                <p className="text-gray-700 font-semibold">Attendance Rating</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Intro */}
        <div className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            How one of Australia&apos;s most established real estate brands achieved 4.88/5 performance ratings 
            through systematic property management outsourcing.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Picture this: You&apos;re managing property operations for one of Australia&apos;s most established 
            real estate brands. You start conservatively with one virtual assistant. Six months later, you&apos;re 
            writing performance reviews that describe your offshore team as &quot;beautiful people&quot; who are 
            assets to your organization. That&apos;s the Barry Plant client success story.
          </p>
        </div>

        <Separator className="my-12" />

        {/* The Smart Conservative Start */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Target className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Smart Conservative Start</h2>
              <p className="text-lg text-gray-600">Methodical testing that protected brand reputation</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Barry Plant Real Estate came to ShoreAgents through a strategic referral from Luke Newton at LockedOn. 
            As one of Australia&apos;s most established real estate brands, they approached offshore staffing with 
            <strong> the caution you&apos;d expect from a professional organization with reputation to protect</strong>.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Their approach was methodical: start with one property management virtual assistant for core administrative 
            tasks, test the quality and integration, then make decisions about expansion based on actual performance 
            rather than promises.
          </p>

          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">💡 Why Barry Plant&apos;s Conservative Approach Actually Worked</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white border-lime-200">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <Target className="w-6 h-6 text-lime-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">🎯 Focused Testing</h4>
                        <p className="text-gray-700 text-sm">One role, mastered completely before expanding</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-lime-200">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-lime-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">⚡ Quality Focus</h4>
                        <p className="text-gray-700 text-sm">Results-based decisions, not promises</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-lime-200">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-6 h-6 text-lime-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">🏢 Professional Standards</h4>
                        <p className="text-gray-700 text-sm">Maintained brand reputation throughout</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-lime-200">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-lime-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">📈 Systematic Growth</h4>
                        <p className="text-gray-700 text-sm">Expanded based on proven success</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border-l-4 border-lime-600">
            <CardContent className="p-6">
              <p className="text-gray-800 italic leading-relaxed">
                &quot;Conservative approach, exceptional results – exactly what established agencies need.&quot; This 
                methodical approach proved exactly right. Instead of overwhelming their systems with multiple new team 
                members, Barry Plant focused on integrating one specialist properly.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Performance Excellence */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-yellow-100 rounded-full p-3">
              <Award className="w-8 h-8 text-yellow-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Performance Excellence That Speaks Volumes</h2>
              <p className="text-lg text-gray-600">Real reviews from established Australian agency</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Performance reviews tell the real story of offshore staffing success. When established Australian real 
            estate brands conduct formal evaluations, they don&apos;t use flowery language unless it&apos;s genuinely 
            deserved. <strong>Barry Plant&apos;s reviews demonstrate exactly why their cautious approach delivered 
            exceptional results</strong>.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            The progression from first-month reviews to six-month evaluations shows systematic improvement and genuine 
            team integration. These aren&apos;t generic testimonials – they&apos;re detailed performance assessments 
            from busy property management professionals who focus on results, not pleasantries.
          </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <FileText className="w-6 h-6 text-lime-600 mr-2" />
                      Sales and Property Management Administrator: Consistent Excellence
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Target className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Quality Performance</p>
                          <p className="text-gray-700 text-sm">&quot;Quick learner, writes thorough notes, asks questions when unsure&quot;</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Perfect Attendance</p>
                          <p className="text-gray-700 text-sm">&quot;Ready to start 9am our time&quot; – 5/5 rating</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Core Tasks</p>
                          <p className="text-gray-700 text-sm">Lease preps, key management, advertising fees</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Professional Approach</p>
                          <p className="text-gray-700 text-sm">&quot;Always friendly and easy going&quot;</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 border-l-4 border-lime-600 p-3 rounded mt-4">
                      <p className="text-gray-800 italic text-sm">
                        &quot;We are very happy with her performance so far. No complaints here :)&quot;
                      </p>
                      <p className="text-gray-700 text-xs mt-1">– Veronica & Ashley, Barry Plant Management</p>
                    </div>
                  </div>

                  <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Star className="w-6 h-6 text-lime-600 mr-2" />
                      Property Management Virtual Assistant: 4.88/5 Star Excellence
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Quality Excellence</p>
                          <p className="text-gray-700 text-sm">&quot;Improved with taking notes and paying attention to details&quot;</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <TrendingUp className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Growth Mindset</p>
                          <p className="text-gray-700 text-sm">&quot;Always willing to learn and improve skills&quot;</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Team Integration</p>
                          <p className="text-gray-700 text-sm">&quot;Great team member and always assists others&quot;</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Building2 className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">LockedOn Mastery</p>
                          <p className="text-gray-700 text-sm">&quot;Amazing in LockedOn, putting in effort with sales admin&quot;</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 border-l-4 border-lime-600 p-3 rounded mt-4">
                      <p className="text-gray-800 italic text-sm">
                        &quot;We really like her, she is a beautiful person and works well with the team&quot;
                      </p>
                      <p className="text-gray-700 text-xs mt-1">– Marinella, Barry Plant Management</p>
                    </div>
                  </div>
                </div>

          <Card className="bg-gray-100 border-l-4 border-yellow-600 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                When property management evaluators describe team members as &quot;beautiful people&quot; and &quot;assets 
                to the team,&quot; it goes beyond professional competence. This represents genuine cultural integration 
                that protects brand reputation while delivering measurable operational improvements.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Systematic Framework */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-purple-100 rounded-full p-3">
              <Target className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Systematic Framework That Works</h2>
              <p className="text-lg text-gray-600">Strategic integration that protects brand standards</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Barry Plant&apos;s success demonstrates something crucial about professional property management outsourcing: 
            <strong>it&apos;s not about finding the cheapest staff</strong>, it&apos;s about implementing systematic approaches 
            that integrate seamlessly with established business operations while maintaining brand standards.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Their team structure evolved organically based on performance and business needs. The first administrator focused 
            on core property management tasks, while the second specialist developed expertise in LockedOn CRM management and 
            sales administration – exactly the kind of specialized knowledge that professional agencies require.
          </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Team Structure: 2 Specialized Roles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Home className="w-8 h-8 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900 text-lg">Sales and Property Management Administrator</h4>
                      </div>
                      <div className="space-y-2 mb-4">
                        <p className="font-semibold text-gray-900">Core Responsibilities:</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Lease Preparations & Documentation</span>
                          </li>
                          <li className="flex items-start">
                            <Key className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Key Management Systems</span>
                          </li>
                          <li className="flex items-start">
                            <DollarSign className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Letting & Advertising Fee Processing</span>
                          </li>
                          <li className="flex items-start">
                            <FileText className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Property Management Enterprise (PME) uploads</span>
                          </li>
                          <li className="flex items-start">
                            <Users className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Transfer of Management processes</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Tenant Transfer coordination</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-lime-100 rounded p-3">
                        <p className="text-sm font-semibold text-gray-900">Performance: 4.25/5 with perfect attendance</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Building2 className="w-8 h-8 text-lime-600 mr-3" />
                        <h4 className="font-bold text-gray-900 text-lg">Property Management Virtual Assistant</h4>
                      </div>
                      <div className="space-y-2 mb-4">
                        <p className="font-semibold text-gray-900">Specialized Focus:</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li className="flex items-start">
                            <Shield className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>LockedOn CRM Management</span>
                          </li>
                          <li className="flex items-start">
                            <FileText className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Sales Administration Support</span>
                          </li>
                          <li className="flex items-start">
                            <Users className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Team Coordination</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Task Management & Workflow</span>
                          </li>
                          <li className="flex items-start">
                            <FileText className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Process Documentation</span>
                          </li>
                          <li className="flex items-start">
                            <Handshake className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Cross-team assistance</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-lime-100 rounded p-3">
                        <p className="text-sm font-semibold text-gray-900">Performance: 4.88/5 &quot;Beautiful person&quot;</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-6 font-semibold">
                    Specialized team structure delivering comprehensive property management support with exceptional performance standards
                  </p>
                </div>

          <Card className="bg-gray-100 border-l-4 border-purple-600 mt-6">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                This systematic approach validates why established agencies choose ShoreAgents for virtual assistant 
                services: it&apos;s not about volume, it&apos;s about strategic integration that enhances professional 
                operations while maintaining brand integrity.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Why Barry Plant's Approach Works */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-3">
              <CheckCircle2 className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Why Barry Plant&apos;s Approach Actually Works</h2>
              <p className="text-lg text-gray-600">Genuine cultural integration, not just task completion</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            When I see performance reviews where management calls team members &quot;beautiful people,&quot; it tells me 
            something important happened during the integration process. That&apos;s not language you use for task-completers. 
            That&apos;s how you describe people who genuinely fit with your team culture.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Barry Plant&apos;s conservative start—one person, prove the concept, then expand—mirrors exactly what I 
            recommend to every established agency. They protected their brand reputation while testing our capabilities. 
            The 4.88/5 performance ratings weren&apos;t accidental. They resulted from systematic integration that respected 
            both their standards and our team&apos;s professional development.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            What I find most compelling about their experience is the honesty in the evaluations. Real management feedback, 
            specific performance areas, genuine recognition of growth and improvement. When established agencies conduct 
            professional reviews like these, it validates that our approach works for businesses that actually matter.
          </p>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 What Made Barry Plant&apos;s Implementation Successful</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white border-blue-200">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">🎯 Conservative Testing</h4>
                        <p className="text-gray-700 text-sm">Started with one specialist, mastered integration</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-blue-200">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <FileText className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">📊 Real Measurement</h4>
                        <p className="text-gray-700 text-sm">Professional reviews, not promotional testimonials</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border-blue-200">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">🛠️ Specialized Focus</h4>
                        <p className="text-gray-700 text-sm">Property management expertise, not generic admin</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-blue-200">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">🤝 Cultural Integration</h4>
                        <p className="text-gray-700 text-sm">Team members, not just service providers</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-white border-blue-200 mt-6">
                <CardContent className="p-6">
                  <p className="text-gray-800 font-semibold">
                    <strong>Result:</strong> Performance that protects your brand while delivering genuine improvements
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Want to Follow Barry Plant&apos;s Proven Conservative Approach?</h2>
            <p className="text-xl mb-8 text-lime-50 max-w-2xl mx-auto leading-relaxed">
              Start with one specialist. Test our integration. Measure the results. Then decide based on actual 
              performance, not promises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 bg-white text-lime-600 font-bold text-lg rounded-lg hover:bg-lime-50 transition-colors shadow-lg"
              >
                Schedule Your Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 bg-lime-700 text-white font-bold text-lg rounded-lg hover:bg-lime-800 transition-colors border-2 border-white/20"
              >
                <Building2 className="mr-2 w-5 h-5" />
                View More Case Studies
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Final Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            Conservative approach, exceptional results – 4.88/5 performance. That&apos;s the Barry Plant difference.
          </p>
        </div>
      </div>
    </div>
  );
}
