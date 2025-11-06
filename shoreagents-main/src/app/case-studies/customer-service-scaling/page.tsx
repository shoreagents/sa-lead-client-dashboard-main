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
  Smartphone,
  MessageSquare,
  ClipboardList,
  Camera,
  Home,
  Ruler,
  Cpu,
  PenTool,
  Zap,
  RefreshCw,
  Video
} from 'lucide-react';
import Image from 'next/image';

export default function CustomerServiceScalingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-red-600 text-white px-4 py-2 text-lg mb-6">
            REVEALED: BoxBrownie Client Success Framework
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            BoxBrownie Client Success Case Study: Tash Poole Customer Service Manager
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            When a global PropTech leader serving 170,000+ customers across 117 countries relies on your customer service infrastructure for their core operations, it validates systematic excellence. This BoxBrownie client success story reveals how ShoreAgents enabled massive scaling from 2 to 16 customer service representatives supporting a real estate photo editing giant.
          </p>
          
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1200&h=600&fit=crop"
              alt="BoxBrownie Customer Service Operations"
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
                    alt="BoxBrownie Logo"
                    width={100}
                    height={100}
                    className="mx-auto rounded-full"
                  />
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  &quot;The whole Outsourcing process at ShoreAgents has been amazing—starting from recruitment to processing, onboarding, HR, and everything in between.&quot;
                </blockquote>
                <div className="text-gray-900 font-bold">Tash Poole</div>
                <div className="text-gray-600">BoxBrownie, AU</div>
                <div className="text-gray-600">Hired a Workforce</div>
                <div className="mt-2 flex items-center justify-center gap-2">
                  <Globe className="w-4 h-4 text-gray-600" />
                  <span>Australia</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">170K+</div>
              <p className="text-gray-700">Global Customers</p>
            </CardContent>
          </Card>
          <Card className="border-lime-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">117</div>
              <p className="text-gray-700">Countries Served</p>
            </CardContent>
          </Card>
          <Card className="border-lime-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">8x</div>
              <p className="text-gray-700">Customer Service Growth</p>
            </CardContent>
          </Card>
          <Card className="border-lime-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">24/7</div>
              <p className="text-gray-700">Customer Support</p>
            </CardContent>
          </Card>
        </div>

        {/* Intro Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            <Camera className="inline-block w-8 h-8 text-lime-600 mr-2" />
            BoxBrownie Client Success: 8x Customer Service Growth
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            How Australia&apos;s youngest university graduate built a global PropTech empire with systematic customer service scaling through ShoreAgents
          </p>
          <p className="text-lg text-gray-700">
            This comprehensive BoxBrownie client success analysis demonstrates how systematic customer service scaling enabled a PropTech startup to grow from local Australian business to serving 170,000+ customers globally across 117 countries through professional offshore staffing solutions.
          </p>
        </div>

        {/* Global PropTech Leadership Foundation */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Award className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">BoxBrownie Client Success: Global PropTech Leadership Foundation</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  When Mel Myers became Australia&apos;s youngest university student at age 12, few could have predicted he would co-found a global PropTech empire that would revolutionize real estate photo editing worldwide. This BoxBrownie client success story demonstrates how visionary leadership combined with systematic customer service infrastructure creates industry-transforming businesses.
                </p>
                <p className="mb-6">
                  BoxBrownie&apos;s evolution from a manual photo editing service to serving over 170,000 customers across 117 countries required scalable customer service infrastructure that could handle inbound calls, outbound communications, live chat management, and complex order processing. This BoxBrownie client success partnership with ShoreAgents enabled the systematic scaling that transformed a startup into a global leader.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-6">
                    <div>
                      <div className="text-3xl font-bold text-lime-600 mb-2">170K+</div>
                      <p className="text-sm text-gray-700">Global Customers</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-lime-600 mb-2">117</div>
                      <p className="text-sm text-gray-700">Countries Served</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-lime-600 mb-2">8x</div>
                      <p className="text-sm text-gray-700">Customer Service Growth</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-lime-600 mb-2">24/7</div>
                      <p className="text-sm text-gray-700">Customer Support</p>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 font-semibold">
                    This BoxBrownie client success partnership demonstrates how systematic approach to customer service infrastructure enables PropTech companies to scale globally while maintaining the quality and responsiveness that customers expect.
                  </p>
                </div>

                <p className="mt-6">
                  When a company founded by Australia&apos;s youngest university graduate chooses to partner with ShoreAgents for their customer service infrastructure, it validates the effectiveness of systematic approaches to offshore staffing that scale with business growth.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Systematic Customer Service Infrastructure */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">BoxBrownie Client Success: Systematic Customer Service Infrastructure</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The BoxBrownie client success methodology required sophisticated customer service infrastructure to support a global real estate photo editing platform that processes thousands of orders daily across multiple time zones. From inbound phone calls to outbound customer follow-ups, live chat management to complex order processing, every aspect of customer interaction needed systematic optimization.
                </p>
                <p className="mb-6">
                  When BoxBrownie started with ShoreAgents eighteen months ago, they had a small customer service team handling basic inquiries. Today, their dedicated team of 16 ShoreAgents customer service representatives manages comprehensive customer support operations that span virtual staging inquiries, photo editing specifications, floor plan requirements, and complex project coordination.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 mb-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">BoxBrownie Client Success: Customer Service Operations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <Phone className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Inbound Phone Support</h4>
                        <p className="text-gray-700">Professional handling of customer inquiries, technical support, and order assistance</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Smartphone className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Outbound Communications</h4>
                        <p className="text-gray-700">Proactive customer follow-up, order status updates, and satisfaction surveys</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MessageSquare className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Live Chat Management</h4>
                        <p className="text-gray-700">Real-time customer support through integrated chat systems and instant assistance</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ClipboardList className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Order Processing</h4>
                        <p className="text-gray-700">Complex order management, specification coordination, and delivery tracking</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-6 font-semibold">
                    Achievement: BoxBrownie client success demonstrates 8x customer service scaling through systematic infrastructure development
                  </p>
                </div>

                <p className="mt-4">
                  This systematic BoxBrownie client success scaling validates our approach to customer service infrastructure development through comprehensive solutions that adapt to rapid business growth and global expansion requirements across multiple markets and time zones.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Testimonial */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Video className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">BoxBrownie Client Success: Tasha Poole Customer Service Manager Testimonial</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  Tasha Poole, Customer Service Manager at BoxBrownie, provides authentic validation of the systematic customer service infrastructure that enabled their global expansion. The BoxBrownie client success testimonial demonstrates real-world impact of professional offshore staffing solutions that scale with business growth.
                </p>

                <div className="bg-gray-50 border-l-4 border-lime-600 p-6 rounded shadow-sm mb-6">
                  <p className="text-xl text-gray-800 italic mb-4">
                    &quot;The whole outsourcing process at ShoreAgents has been amazing—starting from recruitment to processing, onboarding, HR, and everything in between. We started with two team members a year and a half ago and we now have a team of 16.&quot;
                  </p>
                  <p className="text-gray-900 font-bold">— Tasha Poole, Customer Service Manager, BoxBrownie</p>
                </div>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Target className="w-6 h-6 text-lime-600 mr-2" />
                    Key Success Factors from BoxBrownie Client Success Implementation
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <RefreshCw className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Complete Process Management</h4>
                        <p className="text-gray-700 text-sm">End-to-end recruitment, onboarding, and HR management</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <TrendingUp className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Systematic Scaling</h4>
                        <p className="text-gray-700 text-sm">Growth from 2 to 16 team members in 18 months</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Quality Performance</h4>
                        <p className="text-gray-700 text-sm">Exceptional team performance supporting global operations</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Award className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Comprehensive Support</h4>
                        <p className="text-gray-700 text-sm">Full-service management including processing and HR</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-6">
                  This BoxBrownie client success video testimonial validates the effectiveness of our systematic approach to customer service infrastructure development and demonstrates why global PropTech companies choose ShoreAgents for scalable offshore staffing solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* PropTech Industry Leadership Requirements */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Globe className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">BoxBrownie Client Success: PropTech Industry Leadership Requirements</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The BoxBrownie client success case study demonstrates the sophisticated customer service requirements of leading PropTech companies that serve global real estate markets. From handling complex virtual staging inquiries to managing floor plan specifications and coordinating CGI rendering projects, customer service representatives need specialized training and industry knowledge.
                </p>
                <p className="mb-6">
                  BoxBrownie&apos;s position as a world leader in visual property marketing—serving everyone from individual real estate agents to major international brokerages—requires customer service infrastructure that understands real estate photography, virtual staging technologies, and property marketing workflows. The BoxBrownie client success methodology demonstrates how specialized industry knowledge combined with systematic training creates exceptional customer experiences.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">BoxBrownie Service Portfolio Requiring Specialized Customer Support</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Camera className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Photo Editing Services</h4>
                        <p className="text-gray-700">Image enhancement, day-to-dusk conversion, object removal, and sky replacement for real estate photography</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Home className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Virtual Staging</h4>
                        <p className="text-gray-700">Furniture placement, interior design coordination, and room transformation for vacant properties</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Ruler className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Floor Plan Services</h4>
                        <p className="text-gray-700">Technical drafting, layout optimization, and architectural plan creation for property marketing</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Cpu className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">CGI Rendering</h4>
                        <p className="text-gray-700">3D visualization, architectural rendering, and virtual renovation for development projects</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">360° Virtual Tours</h4>
                        <p className="text-gray-700">Immersive property experiences, virtual walkthroughs, and interactive tour creation</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <PenTool className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">AI Copywriting</h4>
                        <p className="text-gray-700">Property descriptions, marketing content, and listing optimization for real estate professionals</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-6">
                  This BoxBrownie client success story demonstrates how comprehensive customer service infrastructure supports complex PropTech operations that require specialized knowledge of real estate marketing, visual design principles, and property development workflows across global markets.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Global Impact and Industry Leadership */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Building className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">BoxBrownie Client Success: Global Impact and Industry Leadership</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The BoxBrownie client success story validates something crucial about systematic customer service infrastructure: when PropTech companies can scale their customer support operations efficiently, they unlock global growth opportunities that transform entire industries. BoxBrownie&apos;s evolution from Australian startup to serving 170,000+ customers across 117 countries demonstrates the strategic advantage of professional offshore staffing.
                </p>
                <p className="mb-6">
                  The BoxBrownie client success methodology demonstrates how systematic customer service scaling enables PropTech companies to maintain quality while expanding globally. From partnerships with major international real estate networks like LeadingRE (550 firms, 138,000 sales associates) to collaboration with Engel & Völkers Europe, BoxBrownie&apos;s customer service infrastructure supports enterprise-level relationships that require exceptional reliability and professional communication standards.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">BoxBrownie Client Success: Global Market Leadership Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <Building className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Global Enterprise Partnerships</h4>
                        <p className="text-gray-700">LeadingRE, Engel & Völkers Europe collaboration</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">24-Hour Delivery</h4>
                        <p className="text-gray-700">Guaranteed turnaround across all time zones</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Smartphone className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Innovation Leadership</h4>
                        <p className="text-gray-700">SnapSnapSnap.com app development and AI integration</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Quality Standards</h4>
                        <p className="text-gray-700">100% satisfaction guarantee and dedicated quality control</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-6 font-semibold">
                    Achievement: BoxBrownie client success enables global PropTech leadership through systematic customer service excellence
                  </p>
                </div>

                <p className="mt-6">
                  This BoxBrownie client success validation demonstrates that when PropTech companies invest in systematic customer service infrastructure through professional offshore staffing, they create competitive advantages that enable global market leadership and sustainable business growth across multiple continents and market segments.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA Section */}
        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Ready to scale your customer service operations like global PropTech leaders BoxBrownie?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the successful businesses that have transformed their customer service infrastructure through proven methodologies validated by BoxBrownie client success achievements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
              📞 Schedule Your Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-bold">
              🏢 Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
