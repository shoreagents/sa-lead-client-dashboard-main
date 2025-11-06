'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Users, Target, Building, Award, DollarSign, Shield, Zap, Home, Phone, Cog, Star, Clock, Globe } from 'lucide-react';
import Image from 'next/image';

export default function TeamExpansionSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-red-600 text-white px-4 py-2 text-lg mb-6">
            ENTERPRISE BREAKTHROUGH: From 4 to 46 Specialists
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Ballast&apos;s Success Secret: The 4-to-46 Formula That Works
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            When Ballast needed to scale their property management operations, they started with 4 specialists. The quality was so impressive they moved their entire operation to ShoreAgents. This Ballast client success story shows how enterprise companies achieve systematic transformation.
          </p>
          
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
              alt="Property management operations"
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
                    alt="Ballast Logo"
                    width={100}
                    height={100}
                    className="mx-auto rounded-full"
                  />
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  &quot;We&apos;ve used multiple Outsourcing companies and ShoreAgents has surpassed our expectations by far. From the quality of candidates we receive to the ongoing support, and everything in between. Kath and Mark have made the hiring process a breeze. We&apos;re so thankful to work with an amazing team!&quot;
                </blockquote>
                <div className="text-gray-900 font-bold">Kuahiwi Kahapea</div>
                <div className="text-gray-600">Ballast, USA</div>
                <div className="text-gray-600">Hired a Workforce</div>
                <div className="mt-2 flex items-center justify-center gap-2">
                  <Globe className="w-4 h-4 text-gray-600" />
                  <span>United States of America</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">4 → 46</div>
              <p className="text-gray-700">Team Growth</p>
            </CardContent>
          </Card>
          <Card className="border-lime-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">100%</div>
              <p className="text-gray-700">Migration</p>
            </CardContent>
          </Card>
          <Card className="border-lime-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">Multiple</div>
              <p className="text-gray-700">Departments</p>
            </CardContent>
          </Card>
          <Card className="border-lime-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">Years</div>
              <p className="text-gray-700">Partnership</p>
            </CardContent>
          </Card>
        </div>

        {/* Intro Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ballast Client Success: Property Management Excellence
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            How a major property management company scaled from 4 test specialists to complete enterprise operation
          </p>
          <p className="text-lg text-gray-700">
            Picture this: You&apos;re managing significant property portfolios. You&apos;ve tried other outsourcing providers. Then you find systematic excellence that transforms everything. You start with 4, end up moving your entire team. That&apos;s the Ballast client success story.
          </p>
        </div>

        {/* From Testing to Total Confidence */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Ballast Client Success: From Testing to Total Confidence</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Ballast came to ShoreAgents with typical enterprise caution. As a major property management company, they already had some outsourcing in place but needed better solutions. The conversation started conservatively: &quot;We&apos;re talking about getting 4 people.&quot;
                </p>
                <p className="mb-4">
                  What happened next speaks volumes about systematic quality. After implementing those initial 4 specialists, Ballast made a decision that defines enterprise confidence: they moved their entire operation to ShoreAgents. When companies migrate complete teams, it validates the difference between typical outsourcing and systematic property management virtual assistant excellence.
                </p>
                
                <div className="bg-lime-50 rounded-lg p-6 mt-6 shadow-sm">
                  <blockquote className="text-xl text-gray-800 italic border-l-4 border-lime-600 pl-4">
                    &quot;We&apos;ve used multiple outsourcing companies and ShoreAgents has surpassed our expectations by far&quot;
                  </blockquote>
                  <p className="text-gray-700 mt-4">
                    This Ballast client success story demonstrates what happens when property management companies discover systematic outsourcing that matches their operational standards. Complete team migration isn&apos;t a decision made lightly—it&apos;s validation of quality, reliability, and the systematic approach that differentiates enterprise-level property management outsourcing from typical solutions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Surpassed Our Expectations By Far */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Star className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">⭐ Ballast Client Success: &quot;Surpassed Our Expectations By Far&quot;</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Property management companies don&apos;t switch providers without good reason. When Ballast declared that &quot;ShoreAgents has surpassed our expectations by far&quot; after using multiple other companies, it reveals exactly what separates systematic excellence from typical outsourcing solutions.
                </p>
                <p className="mb-6">
                  Their experience with other outsourcing providers taught them what enterprise-level operations require—and what most providers simply cannot deliver. The systematic approach that convinced them to migrate their entire operation addresses the fundamental differences that matter for property management success.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 mb-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 What Made Ballast Choose Complete Migration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <Building className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">🏢 Industry Expertise</h4>
                        <p className="text-gray-700">Deep property management knowledge vs generic training</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">⚡ Quality Standards</h4>
                        <p className="text-gray-700">Systematic excellence vs inconsistent delivery</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">🤝 Partnership Approach</h4>
                        <p className="text-gray-700">Long-term relationship vs transactional service</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <TrendingUp className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">📈 Scalable Growth</h4>
                        <p className="text-gray-700">Enterprise-level scaling vs limited capabilities</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border-l-4 border-lime-600 p-6 rounded shadow-sm">
                  <p className="text-lg text-gray-800 italic mb-2">
                    &quot;From the quality of candidates we receive to the ongoing support, and everything in between&quot;
                  </p>
                  <p className="text-gray-700 font-semibold">Complete satisfaction that led to complete migration</p>
                </div>

                <p className="mt-6">
                  When property management companies publicly declare that your services &quot;surpassed expectations by far&quot; after trying multiple competitors, it validates the systematic approach that enables true enterprise-level real estate virtual assistant operations. This is what separates systematic outsourcing from commodity services.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Professional Team Excellence */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Users className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">🏢 Ballast Client Success: Professional Team Excellence</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  The Ballast client success story showcases how property management companies build comprehensive offshore departments that exceed local capabilities. With 46 specialists across multiple departments, their team structure demonstrates the systematic approach to virtual assistant services that professional companies require.
                </p>
                <p className="mb-6">
                  From leasing coordination to financial operations, the comprehensive team structure covers every aspect of property management excellence. This isn&apos;t just about cost savings—it&apos;s about building professional capabilities that enhance service delivery.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 mb-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">🏗️ Professional Department Coverage (46 Specialists)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Home className="w-10 h-10 text-lime-600 mr-3" />
                        <div>
                          <div className="text-4xl font-bold text-lime-600">13</div>
                          <h4 className="font-bold text-gray-900">🏠 Leasing Operations</h4>
                        </div>
                      </div>
                      <p className="text-gray-700">Specialists handling lease administration and coordination</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Phone className="w-10 h-10 text-lime-600 mr-3" />
                        <div>
                          <div className="text-4xl font-bold text-lime-600">8</div>
                          <h4 className="font-bold text-gray-900">📞 Communications</h4>
                        </div>
                      </div>
                      <p className="text-gray-700">Tenant relations and support coordination</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <DollarSign className="w-10 h-10 text-lime-600 mr-3" />
                        <div>
                          <div className="text-4xl font-bold text-lime-600">8</div>
                          <h4 className="font-bold text-gray-900">💰 Financial Operations</h4>
                        </div>
                      </div>
                      <p className="text-gray-700">Accounts payable and financial processing</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Cog className="w-10 h-10 text-lime-600 mr-3" />
                        <div>
                          <div className="text-4xl font-bold text-lime-600">17</div>
                          <h4 className="font-bold text-gray-900">⚙️ Specialized Support</h4>
                        </div>
                      </div>
                      <p className="text-gray-700">Marketing, compliance, and quality control</p>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-6 font-semibold">
                    Complete operational coverage with professional excellence standards
                  </p>
                </div>

                <p className="mt-4">
                  This comprehensive team structure demonstrates why the Ballast client success story represents true professional capabilities. When property management companies can build complete offshore operations covering every business function, it validates the systematic approach that enables outsourcing at enterprise scale.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Outstanding Performance Results */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Award className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">🌟 Ballast Client Success: Outstanding Performance Results</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The Ballast client success story isn&apos;t just about team size—it&apos;s about consistent performance excellence. Recent performance evaluations showcase exactly why they moved their entire operation after trying other providers. When team members consistently earn top ratings and management recognition, it validates systematic quality at scale.
                </p>
                <p className="mb-6">
                  Performance evaluations consistently demonstrate the caliber of professionals that property management companies rely on. With excellent ratings across all performance areas and consistent recognition for quality work, these results show the systematic approach to excellence that defines successful partnerships.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 mb-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">🏆 Consistent Performance Excellence: &quot;Huge Asset to the Team&quot;</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Target className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">🎯 Quality Excellence</h4>
                        <p className="text-gray-700">Consistently produces excellent quality work with proactive approach</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">⚡ Perfect Reliability</h4>
                        <p className="text-gray-700">Outstanding attendance record with professional communication</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">🤝 Team Integration</h4>
                        <p className="text-gray-700">Excellent team collaboration and willingness to assist others</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <TrendingUp className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">📈 Key Achievements</h4>
                        <p className="text-gray-700">Operational coordination, accuracy focus, proactive problem-solving</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border-l-4 border-lime-600 p-6 rounded shadow-sm">
                  <p className="text-lg text-gray-800 italic mb-2">
                    &quot;Management Recognition: Continued excellence with positive recommendations&quot;
                  </p>
                  <p className="text-gray-700 font-semibold">Consistent high performance across all evaluation areas</p>
                </div>

                <p className="mt-6">
                  When property management companies consistently report excellent performance with professional recommendations, it demonstrates the systematic quality that differentiates true professional outsourcing from basic cost-cutting measures. This level of performance excellence validates why companies choose to migrate complete operations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA Section */}
        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white shadow-lg">
          <h2 className="text-4xl font-bold mb-6">🚀 Ballast Client Success: Your Property Management Advantage</h2>
          <p className="text-xl mb-6 opacity-90">
            The Ballast client success story demonstrates how property management companies achieve systematic transformation. When professional teams can scale from 4 specialists to complete 46-person operations while maintaining excellent performance standards, it creates opportunities for any property management company to achieve similar success.
          </p>
          <p className="text-lg mb-8 opacity-90">
            From comprehensive department coverage earning top performance ratings to management declaring services &quot;surpassed our expectations by far,&quot; the systematic approach that convinced Ballast to migrate their entire operation represents the future of property management workforce optimization.
          </p>
          <p className="text-xl font-bold mb-8">
            Ready to experience the systematic property management outsourcing that convinced Ballast to move their entire operation?
          </p>
          <p className="text-lg mb-8 opacity-90">
            Start with 4 specialists like Ballast did, or discuss your complete operational transformation. Our systematic approach scales from initial testing to full enterprise migration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
              📞 Schedule Your Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-bold">
              🏢 Property Management Solutions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
