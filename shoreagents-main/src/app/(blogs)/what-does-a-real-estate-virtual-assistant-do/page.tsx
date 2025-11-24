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
  Calendar,
  Home,
  MessageSquare,
  FileText,
  BarChart3,
  AlertCircle,
  Lock,
  DollarSign,
  Clock,
  Zap,
  RefreshCw,
  Settings,
  Phone
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function WhatDoesREVADoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[{"name":"Virtual Assistants","url":"https://www.shoreagents.com/virtual-assistant"},{"name":"Real Estate Virtual Assistant","url":"https://www.shoreagents.com/real-estate-virtual-assistant"},{"name":"What Do They Do","url":"https://www.shoreagents.com/what-does-a-real-estate-virtual-assistant-do"}]} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              Complete Guide - 15+ Essential Tasks
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              What Does a Real Estate<br />
              <span className="text-lime-600">Virtual Assistant Do?</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Discover 15+ essential tasks that boost efficiency, reduce costs, and scale your real estate business 
              effectively. While successful real estate professionals leverage virtual assistant expertise to focus on 
              high-value activities, others are trapped in endless admin work.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/sales" 
                className="inline-flex items-center px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors"
              >
                Book Your Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/virtual-real-estate-assistant-pricing" 
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-lime-600 transition-colors"
              >
                View Pricing Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Key Stats */}
        <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200 mb-16">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Real Estate VA Impact</h3>
              <p className="text-gray-700">Transforming real estate operations</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Target className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">40+</div>
                <div className="text-gray-900 font-semibold">Core Functions</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Clock className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">15hrs</div>
                <div className="text-gray-900 font-semibold">Weekly Time Savings</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <TrendingUp className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">300%</div>
                <div className="text-gray-900 font-semibold">Productivity Increase</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Globe className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">24/7</div>
                <div className="text-gray-900 font-semibold">Business Support</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alert Box */}
        <Card className="bg-red-50 border-red-200 mb-12">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  CRITICAL: 87% of Real Estate Agents Are Drowning in Administrative Tasks
                </h3>
                <p className="text-gray-700">
                  While successful real estate professionals leverage virtual assistant expertise to focus on high-value 
                  activities, others are trapped in endless admin work. Don't let operational chaos kill your deals.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Functions */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Target className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Understanding Core Functions</h2>
              <p className="text-lg text-gray-600">What real estate virtual assistants do daily</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              In today's fast-paced real estate industry, many business owners ask "what does a real estate virtual 
              assistant do?" The answer reveals a comprehensive support system that's instrumental in streamlining 
              operations, managing time-consuming tasks, and offering essential services for business growth.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Scheduling */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6">
                  <Calendar className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Scheduling and Email Management</h3>
                  <p className="text-gray-700 text-sm">
                    Expert coordination of appointments, meetings, and comprehensive email management to keep communication 
                    flowing smoothly.
                  </p>
                </CardContent>
              </Card>

              {/* Property Listing */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-6">
                  <Home className="w-10 h-10 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Property Listing Management</h3>
                  <p className="text-gray-700 text-sm">
                    Updating online portals, compiling property details, and ensuring all listings are accurate and 
                    compelling to potential buyers.
                  </p>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardContent className="p-6">
                  <MessageSquare className="w-10 h-10 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Social Media and Digital Marketing</h3>
                  <p className="text-gray-700 text-sm">
                    Creating engaging content, managing social media presence, and implementing digital marketing strategies 
                    for lead generation.
                  </p>
                </CardContent>
              </Card>

              {/* Client Relationship */}
              <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
                <CardContent className="p-6">
                  <Users className="w-10 h-10 text-pink-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Client Relationship Nurturing</h3>
                  <p className="text-gray-700 text-sm">
                    Providing consistent follow-ups, appointment setting, and client database management to maintain strong 
                    relationships.
                  </p>
                </CardContent>
              </Card>

              {/* Market Research */}
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <CardContent className="p-6">
                  <BarChart3 className="w-10 h-10 text-orange-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Market Research and Analysis</h3>
                  <p className="text-gray-700 text-sm">
                    Conducting comprehensive market research, analyzing trends, and providing valuable insights for strategic 
                    decision-making.
                  </p>
                </CardContent>
              </Card>

              {/* Versatility */}
              <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200">
                <CardContent className="p-6">
                  <Star className="w-10 h-10 text-lime-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Versatile Support</h3>
                  <p className="text-gray-700 text-sm">
                    Their versatility and expertise make them valuable additions to any real estate team looking to enhance 
                    efficiency and drive growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Operations Optimization */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Settings className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Operations Optimization</h2>
              <p className="text-lg text-gray-600">Strategic approaches to operational tasks</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              The dynamic world of real estate demands efficiency and strategic approaches to various operational tasks. 
              Real estate virtual assistants provide that competitive edge, optimizing business processes and facilitating 
              seamless operations.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Operational Functions</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-5 border-l-4 border-lime-600">
                    <div className="flex items-start gap-3">
                      <RefreshCw className="w-7 h-7 text-lime-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Transaction Coordination and Management</h4>
                        <p className="text-gray-700 text-sm">
                          Comprehensive tracking of sales progress, documentation management, and ensuring all parties stay 
                          informed throughout the transaction process.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 border-l-4 border-blue-600">
                    <div className="flex items-start gap-3">
                      <Target className="w-7 h-7 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Client Onboarding Systems</h4>
                        <p className="text-gray-700 text-sm">
                          Developing and maintaining systematic approaches to onboarding new clients, ensuring every client 
                          feels valued from the beginning.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 border-l-4 border-green-600">
                    <div className="flex items-start gap-3">
                      <Lock className="w-7 h-7 text-green-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Client Retention Strategies</h4>
                        <p className="text-gray-700 text-sm">
                          Implementing retention strategies like regular newsletters and personalized follow-ups, reinforcing 
                          the business's commitment to clients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold text-sm">
                    Well-maintained CRMs are goldmines for real estate businesses, and REVAs excel in keeping these systems 
                    updated and operational, ensuring client data remains current and actionable.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Property Management */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Home className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Property Management Excellence</h2>
              <p className="text-lg text-gray-600">Productivity enhancement in property management</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Within the competitive real estate landscape, productivity significance cannot be overstated. Real estate 
              virtual assistants serve as catalysts, particularly in property management.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white border-purple-200">
                <CardContent className="p-6">
                  <Phone className="w-10 h-10 text-purple-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Tenant Liaison and Communication</h3>
                  <p className="text-gray-700 text-sm">
                    Serving as primary contact points for tenant inquiries and concerns, providing timely responses and 
                    resolutions that foster tenant satisfaction.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-blue-200">
                <CardContent className="p-6">
                  <FileText className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Lease Document Management</h3>
                  <p className="text-gray-700 text-sm">
                    Managing lease agreements with precision, ensuring all documents are properly executed and stored for 
                    easy access and compliance.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-green-200">
                <CardContent className="p-6">
                  <DollarSign className="w-10 h-10 text-green-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Rent Collection and Arrears Tracking</h3>
                  <p className="text-gray-700 text-sm">
                    Maintaining financial consistency and reducing late payment incidents through systematic rent collection 
                    and arrears tracking.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-blue-50 border-blue-200 mt-8">
              <CardContent className="p-6">
                <p className="text-gray-700 text-center">
                  Property maintenance coordination represents another valuable area. They schedule regular maintenance 
                  checks, liaise with contractors, and ensure repairs are carried out promptly and efficiently.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Strategic Business Support */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Lightbulb className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Strategic Business Support</h2>
              <p className="text-lg text-gray-600">Efficient and cost-effective support systems</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              The integration of Real Estate Virtual Assistants into business models offers strategic support systems that 
              are both efficient and cost-effective. By exploring what real estate virtual assistants do strategically, 
              business owners can identify opportunities to delegate tasks, optimize workflows, and ultimately scale operations.
            </p>

            <Card className="bg-gradient-to-br from-lime-50 to-green-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Strategic Support Functions</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Target className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">CRM Management for Lead Generation</h4>
                      <p className="text-gray-700 text-sm">
                        Using sophisticated CRM tools to track interactions, schedule follow-ups, and keep sales pipelines 
                        flowing effectively.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Zap className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Workflow Optimization Techniques</h4>
                      <p className="text-gray-700 text-sm">
                        Streamlining document flow, implementing standardized operating procedures, and introducing time-saving 
                        automation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Calendar className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Advanced Scheduling and Follow-up Systems</h4>
                      <p className="text-gray-700 text-sm">
                        Implementing sophisticated scheduling systems and comprehensive follow-up protocols that ensure no 
                        opportunities are missed.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Workflow Efficiency */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Zap className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Workflow Efficiency</h2>
              <p className="text-lg text-gray-600">Ensuring daily operations run smoothly</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Efficiency is the cornerstone of thriving real estate businesses. Real estate virtual assistants play key 
              roles in ensuring daily operations run smoothly.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Calendar, title: 'Appointment Coordination', desc: 'Managing complex scheduling requirements and coordinating appointments across multiple stakeholders.' },
                { icon: FileText, title: 'Document Filing and Processing', desc: 'Systematic organization and processing of important documents and paperwork.' },
                { icon: RefreshCw, title: 'Transaction Management', desc: 'Comprehensive oversight of transaction processes from initiation to completion.' },
                { icon: Settings, title: 'Software Integration and Management', desc: 'Implementing and managing software solutions that streamline operations and improve efficiency.' },
                { icon: MessageSquare, title: 'Communication Facilitation', desc: 'Acting as liaisons between agents, clients, and third-party service providers to ensure clear communication.' }
              ].map((item, idx) => (
                <Card key={idx} className="bg-white border-gray-200">
                  <CardContent className="p-6">
                    <item.icon className="w-8 h-8 text-lime-600 mb-3" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Conclusion */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-lime-50 to-green-50 border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                What Real Estate VAs Do to Propel Growth
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  In the evolving real estate market landscape, leveraging virtual assistance significance cannot be 
                  overstated. Understanding what real estate virtual assistants do has illuminated the vast array of tasks 
                  these professionals can undertake to significantly enhance real estate business efficiency and productivity.
                </p>
                <p className="mb-4">
                  By embracing REVA services, real estate businesses can transcend traditional operational limitations, 
                  ensuring smoother, more streamlined workflows. The expertise these assistants bring in CRM management, 
                  lead generation, and transaction coordination is indispensable for those looking to scale operations.
                </p>
                <div className="bg-white border-l-4 border-lime-600 p-6 rounded mt-6">
                  <p className="text-gray-900 font-semibold">
                    What real estate virtual assistants do across various industry segments—be it sales, conveyancing, or 
                    property management—highlights their role as essential components of modern real estate business models.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>

      {/* Final CTA */}
      <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white mx-4 mb-8">
        <CardContent className="p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience What a Real Estate VA Can Do?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Stop drowning in administrative tasks and start focusing on what you do best – closing deals and growing your 
            business. Our specialized virtual assistants are ready to transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sales"
              className="inline-flex items-center px-8 py-4 bg-white text-lime-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors"
            >
              Book Your Strategy Call Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/virtual-real-estate-assistant-pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-lime-600 font-bold text-lg rounded-lg transition-colors"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              View Pricing Options
            </Link>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
