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
  DollarSign, 
  Shield, 
  Zap, 
  Home, 
  Phone, 
  Settings,
  Star,
  ArrowRight,
  Globe
} from "lucide-react";
import Link from "next/link";

export default function TeamExpansionSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-red-600 text-white mb-4 text-sm px-3 py-1">
              🚨 ENTERPRISE BREAKTHROUGH: From 4 to 46 Specialists
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Ballast&apos;s Success Secret:<br />
              <span className="text-lime-600">The 4-to-46 Formula That Works</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              When Ballast needed to scale their property management operations, they started with 4 specialists. 
              The quality was so impressive they moved their entire operation to ShoreAgents. This Ballast client 
              success story shows how enterprise companies achieve systematic transformation.
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
                &quot;We&apos;ve used multiple Outsourcing companies and ShoreAgents has surpassed our expectations 
                by far. From the quality of candidates we receive to the ongoing support, and everything in between. 
                Kath and Mark have made the hiring process a breeze. We&apos;re so thankful to work with an amazing team!&quot;
              </blockquote>
              <div className="flex items-center gap-4">
                <Globe className="w-10 h-10 text-lime-600" />
                <div>
                  <p className="text-gray-900 font-bold text-lg">Kuahiwi Kahapea</p>
                  <p className="text-gray-700">Ballast, USA - Hired a Workforce - United States 🇺🇸</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">4 → 46</div>
                <p className="text-gray-700 font-semibold">Team Growth</p>
              </CardContent>
            </Card>
            <Card className="border-blue-300 bg-blue-50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <p className="text-gray-700 font-semibold">Migration</p>
              </CardContent>
            </Card>
            <Card className="border-purple-300 bg-purple-50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">Multiple</div>
                <p className="text-gray-700 font-semibold">Departments</p>
              </CardContent>
            </Card>
            <Card className="border-green-300 bg-green-50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">Years</div>
                <p className="text-gray-700 font-semibold">Partnership</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Intro */}
        <div className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            How a major property management company scaled from 4 test specialists to complete enterprise operation.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Picture this: You&apos;re managing significant property portfolios. You&apos;ve tried other outsourcing 
            providers. Then you find systematic excellence that transforms everything. You start with 4, end up moving 
            your entire team. That&apos;s the Ballast client success story.
          </p>
        </div>

        <Separator className="my-12" />

        {/* From Testing to Total Confidence */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Target className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">From Testing to Total Confidence</h2>
              <p className="text-lg text-gray-600">Enterprise caution that became complete migration</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Ballast came to ShoreAgents with typical enterprise caution. As a major property management company, they 
            already had some outsourcing in place but needed better solutions. The conversation started conservatively: 
            <strong> &quot;We&apos;re talking about getting 4 people.&quot;</strong>
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            What happened next speaks volumes about systematic quality. After implementing those initial 4 specialists, 
            Ballast made a decision that defines enterprise confidence: <strong>they moved their entire operation to 
            ShoreAgents</strong>. When companies migrate complete teams, it validates the difference between typical 
            outsourcing and systematic property management virtual assistant excellence.
          </p>

          <Card className="border-lime-300 bg-lime-50 mb-6">
            <CardContent className="p-8">
              <Card className="bg-white border-lime-200 mb-4">
                <CardContent className="p-6">
                  <p className="text-xl text-gray-800 italic">
                    &quot;We&apos;ve used multiple outsourcing companies and ShoreAgents has surpassed our expectations by far&quot;
                  </p>
                </CardContent>
              </Card>
              <p className="text-gray-700 leading-relaxed">
                This Ballast client success story demonstrates what happens when property management companies discover 
                systematic outsourcing that matches their operational standards. Complete team migration isn&apos;t a 
                decision made lightly—it&apos;s validation of quality, reliability, and the systematic approach that 
                differentiates enterprise-level property management outsourcing from typical solutions.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Surpassed Our Expectations By Far */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-yellow-100 rounded-full p-3">
              <Star className="w-8 h-8 text-yellow-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">&quot;Surpassed Our Expectations By Far&quot;</h2>
              <p className="text-lg text-gray-600">Why enterprise companies choose complete migration</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Property management companies don&apos;t switch providers without good reason. When Ballast declared that 
            <strong> &quot;ShoreAgents has surpassed our expectations by far&quot;</strong> after using multiple other 
            companies, it reveals exactly what separates systematic excellence from typical outsourcing solutions.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Their experience with other outsourcing providers taught them what enterprise-level operations require—and 
            what most providers simply cannot deliver. The systematic approach that convinced them to migrate their 
            entire operation addresses the fundamental differences that matter for property management success.
          </p>

          <Card className="border-blue-300 bg-blue-50 mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 What Made Ballast Choose Complete Migration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white border-blue-200">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">🏢 Industry Expertise</h4>
                        <p className="text-gray-700 text-sm">Deep property management knowledge vs generic training</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-blue-200">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">⚡ Quality Standards</h4>
                        <p className="text-gray-700 text-sm">Systematic excellence vs inconsistent delivery</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-blue-200">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">🤝 Partnership Approach</h4>
                        <p className="text-gray-700 text-sm">Long-term relationship vs transactional service</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-blue-200">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">📈 Scalable Growth</h4>
                        <p className="text-gray-700 text-sm">Enterprise-level scaling vs limited capabilities</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border-l-4 border-yellow-500 mb-6">
            <CardContent className="p-6">
              <p className="text-lg text-gray-800 italic mb-2">
                &quot;From the quality of candidates we receive to the ongoing support, and everything in between&quot;
              </p>
              <p className="text-gray-700 font-semibold">Complete satisfaction that led to complete migration</p>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                When property management companies publicly declare that your services &quot;surpassed expectations by 
                far&quot; after trying multiple competitors, it validates the systematic approach that enables true 
                enterprise-level real estate virtual assistant operations. This is what separates systematic outsourcing 
                from commodity services.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Professional Team Excellence */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-purple-100 rounded-full p-3">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Professional Team Excellence</h2>
              <p className="text-lg text-gray-600">46 specialists across multiple departments</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            The Ballast client success story showcases how property management companies build comprehensive offshore 
            departments that exceed local capabilities. With <strong>46 specialists across multiple departments</strong>, 
            their team structure demonstrates the systematic approach to virtual assistant services that professional 
            companies require.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            From leasing coordination to financial operations, the comprehensive team structure covers every aspect of 
            property management excellence. This isn&apos;t just about cost savings—it&apos;s about building professional 
            capabilities that enhance service delivery.
          </p>

          <Card className="border-purple-300 bg-purple-50 mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🏗️ Professional Department Coverage (46 Specialists)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white border-purple-200">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Home className="w-12 h-12 text-purple-600 mr-4" />
                      <div>
                        <div className="text-4xl font-bold text-purple-600">13</div>
                        <h4 className="font-bold text-gray-900">🏠 Leasing Operations</h4>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">Specialists handling lease administration and coordination</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-purple-200">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Phone className="w-12 h-12 text-purple-600 mr-4" />
                      <div>
                        <div className="text-4xl font-bold text-purple-600">8</div>
                        <h4 className="font-bold text-gray-900">📞 Communications</h4>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">Tenant relations and support coordination</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-purple-200">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <DollarSign className="w-12 h-12 text-purple-600 mr-4" />
                      <div>
                        <div className="text-4xl font-bold text-purple-600">8</div>
                        <h4 className="font-bold text-gray-900">💰 Financial Operations</h4>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">Accounts payable and financial processing</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-purple-200">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Settings className="w-12 h-12 text-purple-600 mr-4" />
                      <div>
                        <div className="text-4xl font-bold text-purple-600">17</div>
                        <h4 className="font-bold text-gray-900">⚙️ Specialized Support</h4>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">Marketing, compliance, and quality control</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border-l-4 border-purple-600">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                <strong>Complete operational coverage with professional excellence standards.</strong> This comprehensive 
                team structure demonstrates why the Ballast client success story represents true professional capabilities. 
                When property management companies can build complete offshore operations covering every business function, 
                it validates the systematic approach that enables outsourcing at enterprise scale.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Outstanding Performance Results */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Outstanding Performance Results</h2>
              <p className="text-lg text-gray-600">Consistent excellence that validates systematic quality</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            The Ballast client success story isn&apos;t just about team size—it&apos;s about <strong>consistent 
            performance excellence</strong>. Recent performance evaluations showcase exactly why they moved their entire 
            operation after trying other providers. When team members consistently earn top ratings and management 
            recognition, it validates systematic quality at scale.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Performance evaluations consistently demonstrate the caliber of professionals that property management 
            companies rely on. With excellent ratings across all performance areas and consistent recognition for 
            quality work, these results show the systematic approach to excellence that defines successful partnerships.
          </p>

          <Card className="border-green-300 bg-green-50 mb-6">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🏆 Consistent Performance Excellence: &quot;Huge Asset to the Team&quot;</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white border-green-200">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <Target className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">🎯 Quality Excellence</h4>
                        <p className="text-gray-700 text-sm">Consistently produces excellent quality work with proactive approach</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-green-200">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">⚡ Perfect Reliability</h4>
                        <p className="text-gray-700 text-sm">Outstanding attendance record with professional communication</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-green-200">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <Users className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">🤝 Team Integration</h4>
                        <p className="text-gray-700 text-sm">Excellent team collaboration and willingness to assist others</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-green-200">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">📈 Key Achievements</h4>
                        <p className="text-gray-700 text-sm">Operational coordination, accuracy focus, proactive problem-solving</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border-l-4 border-green-600 mb-6">
            <CardContent className="p-6">
              <p className="text-lg text-gray-800 italic mb-2">
                &quot;Management Recognition: Continued excellence with positive recommendations&quot;
              </p>
              <p className="text-gray-700 font-semibold">Consistent high performance across all evaluation areas</p>
            </CardContent>
          </Card>

          <Card className="bg-lime-50 border-l-4 border-lime-500">
            <CardContent className="p-6">
              <p className="text-gray-800 leading-relaxed">
                When property management companies consistently report excellent performance with professional 
                recommendations, it demonstrates the systematic quality that differentiates true professional outsourcing 
                from basic cost-cutting measures. This level of performance excellence validates why companies choose to 
                migrate complete operations.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Scale Like Ballast Did?</h2>
            <p className="text-xl mb-6 text-lime-50 leading-relaxed max-w-3xl mx-auto">
              The Ballast client success story demonstrates how property management companies achieve systematic 
              transformation. When professional teams can scale from 4 specialists to complete 46-person operations 
              while maintaining excellent performance standards, it creates opportunities for any property management 
              company to achieve similar success.
            </p>
            <p className="text-lg mb-8 text-lime-50 max-w-3xl mx-auto">
              From comprehensive department coverage earning top performance ratings to management declaring services 
              &quot;surpassed our expectations by far,&quot; the systematic approach that convinced Ballast to migrate 
              their entire operation represents the future of property management workforce optimization.
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
            <p className="text-lime-100 mt-6">
              Start with 4 specialists like Ballast did, or discuss your complete operational transformation.
            </p>
          </CardContent>
        </Card>

        {/* Final Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            From 4 to 46. From testing to complete migration. That&apos;s the power of systematic property management excellence.
          </p>
        </div>
      </div>
    </div>
  );
}
