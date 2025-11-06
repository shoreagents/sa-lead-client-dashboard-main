'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  TrendingUp,
  TrendingDown,
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
  MapPin,
  Heart,
  XCircle
} from 'lucide-react';
import Image from 'next/image';

export default function ReliableRecruitmentPartnerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-red-600 text-white px-4 py-2 text-lg mb-6">
            NEW ZEALAND BREAKTHROUGH: From Uncertainty to &quot;Nothing Short of Exceptional&quot;
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Client Success Spotlight: Tracey Foy&apos;s Journey from Administrative Overwhelm to Operational Excellence
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            When Tracey Foy at Professionals Schultz Realty took the leap with her first virtual assistant hire, she discovered something remarkable. What started as a business necessity became a partnership she describes as &quot;nothing short of exceptional.&quot; This is her story.
          </p>
          
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
              alt="Schultz Realty Ltd Maungaturoto Operations"
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
                    alt="Schultz Realty Ltd Maungaturoto"
                    width={100}
                    height={100}
                    className="mx-auto rounded-full"
                  />
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  &quot;Our partnership with ShoreAgents has been nothing short of exceptional. From the very beginning, their team demonstrated a high level of professionalism and friendliness that made the entire process enjoyable and seamless. The streamlined recruitment process they offer is truly remarkable, making it easy for us to find the right talent quickly and efficiently. Communication with ShoreAgents has always been clear and effective, ensuring that we are always on the same page. Their commitment to customer focus is evident in every interaction, and the transparency they maintain throughout our collaboration has built a strong foundation of trust. Outsourcing through ShoreAgents has enhanced our operations, allowing us to focus on core business activities while they handle the recruitment process with expertise. We believe services would be invaluable for other businesses in the real estate industry looking to improve efficiency and productivity. We highly recommend ShoreAgents to anyone seeking a reliable and customer-focused recruitment partner.&quot;
                </blockquote>
                <div className="text-gray-900 font-bold">Tracey Foy</div>
                <div className="text-gray-600">Professionals Schultz Realty Ltd Maungaturoto, NZ</div>
                <div className="text-gray-600">Hired One Agent</div>
                <div className="mt-2 flex items-center justify-center gap-2">
                  <Globe className="w-4 h-4 text-gray-600" />
                  <span>New Zealand</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Intro Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Globe className="w-8 h-8 text-lime-600 mr-2" />
            Tracey Foy Success Story: Real Estate Excellence in New Zealand
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            How a Maungaturoto real estate professional transformed her business with systematic virtual assistant support
          </p>
          <p className="text-lg text-gray-700">
            When Tracey Foy at Professionals Schultz Realty in Maungaturoto, New Zealand, decided to hire her first virtual assistant, she had no idea she was about to experience what she would later describe as &quot;nothing short of exceptional.&quot;
          </p>
          <p className="text-lg text-gray-700 mt-4">
            This is her story of transformation—from streamlined recruitment to operational excellence, from uncertainty to complete confidence in systematic virtual assistant support.
          </p>
        </div>

        {/* The Moment That Changed Everything */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The Moment That Changed Everything</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Every successful business partnership starts with a decision. For Tracey Foy at Professionals Schultz Realty in Maungaturoto, New Zealand, that decision was to hire her first virtual assistant. What she discovered exceeded every expectation.
                </p>
                <p className="mb-6">
                  Like many real estate professionals, Tracey was drowning in administrative tasks that pulled her away from clients and revenue-generating activities. The solution seemed obvious: hire help. But finding the right support in a small market like Maungaturoto? That was the challenge.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Small Market Reality</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <MapPin className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Limited Local Talent</h4>
                      <p className="text-gray-700 text-sm">Maungaturoto&apos;s small market means limited access to skilled administrative professionals</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <DollarSign className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Cost Constraints</h4>
                      <p className="text-gray-700 text-sm">New Zealand salary expectations make local hiring challenging for smaller agencies</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <Clock className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Time Pressure</h4>
                      <p className="text-gray-700 text-sm">Administrative tasks consuming time that should be spent with clients</p>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-6 font-semibold">
                    This is where ShoreAgents entered the picture. What Tracey discovered wasn&apos;t just a virtual assistant service—it was a systematic approach to business transformation that would fundamentally change how she operated.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Nothing Short of Exceptional */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Star className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">&quot;Nothing Short of Exceptional&quot; – The Experience</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  When Tracey describes her partnership with ShoreAgents as &quot;nothing short of exceptional,&quot; she&apos;s not using casual language. She&apos;s describing a business relationship that transformed her operations from day one.
                </p>
                <p className="mb-6">
                  &quot;From the very beginning, their team demonstrated a high level of professionalism and friendliness that made the entire process enjoyable and seamless,&quot; Tracey explains. This immediate professionalism set the foundation for everything that followed.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What Made Tracey&apos;s Experience &quot;Nothing Short of Exceptional&quot;</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <Zap className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Streamlined Process</h4>
                        <p className="text-gray-700 text-sm">&quot;The streamlined recruitment process they offer is truly remarkable&quot;</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Speed & Efficiency</h4>
                        <p className="text-gray-700 text-sm">&quot;Making it easy for us to find the right talent quickly and efficiently&quot;</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Clear Communication</h4>
                        <p className="text-gray-700 text-sm">&quot;Communication has always been clear and effective&quot;</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Customer Focus</h4>
                        <p className="text-gray-700 text-sm">&quot;Their commitment to customer focus is evident in every interaction&quot;</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-lg text-gray-800 italic mb-2">
                      &quot;The transparency they maintain throughout our collaboration has built a strong foundation of trust&quot;
                    </p>
                    <p className="text-gray-700">When business relationships are built on this foundation, exceptional results become inevitable.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Business Transformation */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The Business Transformation</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The real measure of any business partnership isn&apos;t initial satisfaction—it&apos;s sustained transformation. For Tracey, the implementation of her Sales Administrator role created fundamental changes in how she operates her real estate business.
                </p>
                <p className="mb-6">
                  &quot;Outsourcing through ShoreAgents has enhanced our operations, allowing us to focus on core business activities while they handle the recruitment process with expertise,&quot; Tracey explains. This shift from administrative burden to strategic focus represents the true value of systematic virtual assistant implementation.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">From Administrative Burden to Strategic Focus</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <XCircle className="w-6 h-6 text-red-600 mr-2" />
                        <h4 className="font-bold text-gray-900 text-lg">Before: Administrative Overwhelm</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <Clock className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Time consumed by administrative tasks</span>
                        </li>
                        <li className="flex items-start">
                          <Users className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Limited focus on client relationships</span>
                        </li>
                        <li className="flex items-start">
                          <MapPin className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Difficulty finding local talent</span>
                        </li>
                        <li className="flex items-start">
                          <TrendingDown className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Reduced time for revenue-generating activities</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-lime-50 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <CheckCircle className="w-6 h-6 text-lime-600 mr-2" />
                        <h4 className="font-bold text-gray-900 text-lg">After: Strategic Excellence</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <Zap className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Enhanced operational efficiency</span>
                        </li>
                        <li className="flex items-start">
                          <Target className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Focus on core business activities</span>
                        </li>
                        <li className="flex items-start">
                          <Users className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Professional administrative support</span>
                        </li>
                        <li className="flex items-start">
                          <TrendingUp className="w-4 h-4 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Streamlined recruitment and management</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="mt-6">
                  This transformation didn&apos;t happen by accident. It&apos;s the result of systematic approaches to virtual assistant implementation that prioritize long-term business success over short-term cost savings.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why This Works in New Zealand */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Globe className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Why This Works in New Zealand</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Tracey&apos;s success in Maungaturoto represents something significant for New Zealand real estate professionals. Her story demonstrates how systematic virtual assistant implementation addresses the unique challenges of the New Zealand market.
                </p>
                <p className="mb-6">
                  New Zealand&apos;s real estate market operates with distinct characteristics: smaller market centers, higher labor costs, and specific regulatory requirements. The success that Tracey achieved validates how these challenges can become opportunities with the right approach.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">New Zealand Virtual Assistant Advantages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <Clock className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Timezone Benefits</h4>
                        <p className="text-gray-700 text-sm">4-hour time difference with Philippines enables extended business hours</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <DollarSign className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Cost Efficiency</h4>
                        <p className="text-gray-700 text-sm">Significant savings compared to New Zealand salary expectations</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Award className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Professional Standards</h4>
                        <p className="text-gray-700 text-sm">University-educated English-speaking professionals</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Market Understanding</h4>
                        <p className="text-gray-700 text-sm">Training in New Zealand real estate practices and requirements</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-6 font-semibold">
                    The combination of these advantages creates opportunities that simply don&apos;t exist with traditional local hiring.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* We Highly Recommend */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Heart className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">&quot;We Highly Recommend ShoreAgents&quot;</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The strongest validation of any business partnership isn&apos;t satisfaction—it&apos;s recommendation. When Tracey states, &quot;We highly recommend ShoreAgents to anyone seeking a reliable and customer-focused recruitment partner,&quot; she&apos;s providing the ultimate endorsement.
                </p>
                <p className="mb-6">
                  But Tracey goes further. She specifically believes these services would be &quot;invaluable for other businesses in the real estate industry looking to improve efficiency and productivity.&quot; This industry-specific recommendation validates the systematic approach to real estate virtual assistant implementation.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What This Recommendation Validates</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Award className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Proven Results</h4>
                        <p className="text-gray-700 text-sm">Results significant enough to actively recommend to industry peers</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Industry Validation</h4>
                        <p className="text-gray-700 text-sm">Specific endorsement for real estate industry applications</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Handshake className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Trust Foundation</h4>
                        <p className="text-gray-700 text-sm">Partnership quality that builds confidence in recommending to others</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <TrendingUp className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Business Impact</h4>
                        <p className="text-gray-700 text-sm">Enhanced efficiency and productivity worth sharing with competitors</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Tracey&apos;s Recommendation Carries Weight</h3>
                  <p className="text-gray-700 mb-4">
                    When Tracey Foy says she &quot;highly recommends ShoreAgents to anyone seeking a reliable and customer-focused recruitment partner,&quot; she&apos;s not offering casual praise. She&apos;s putting her professional reputation on the line to endorse a service she believes other real estate professionals should experience.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Think about it: Tracey operates in Maungaturoto, New Zealand—a tight-knit market where professional relationships matter. When she actively recommends a service to her industry peers, she&apos;s telling them &quot;this works, and I&apos;m confident it will work for you too.&quot; That&apos;s not marketing speak; that&apos;s genuine professional endorsement from someone who&apos;s experienced the transformation firsthand.
                  </p>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded">
                    <p className="text-gray-800 font-semibold">
                      The Reality: Tracey experienced something &quot;nothing short of exceptional&quot; and wants others to have the same advantage
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What This Means */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">What This Means for New Zealand Real Estate Professionals</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  If Tracey can achieve this level of transformation in Maungaturoto—a smaller market with unique challenges—what&apos;s possible for your real estate business? Her success demonstrates that systematic virtual assistant support works regardless of market size or location.
                </p>
                <p className="mb-6">
                  The transparency, professionalism, and customer focus that earned Tracey&apos;s recommendation are available to any New Zealand real estate professional ready to enhance their operations while maintaining the quality standards their clients expect.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What Tracey&apos;s Recommendation Actually Validates</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Lightbulb className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Real Business Impact</h4>
                        <p className="text-gray-700 text-sm">Results significant enough to stake her reputation on</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ArrowRight className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Sustained Excellence</h4>
                        <p className="text-gray-700 text-sm">Confidence that the quality will continue for others</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Industry Relevance</h4>
                        <p className="text-gray-700 text-sm">Specifically believes it will help other real estate businesses</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Handshake className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Personal Trust</h4>
                        <p className="text-gray-700 text-sm">Willing to connect her name with our service quality</p>
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
          <h2 className="text-4xl font-bold mb-6">Experience the &quot;nothing short of exceptional&quot; service that earned Tracey&apos;s professional endorsement.</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover the streamlined recruitment process and transparent partnership approach that convinced a New Zealand real estate professional to stake her reputation on recommending our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Your Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-bold">
              <Building className="w-5 h-5 mr-2" />
              Virtual Assistant Solutions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
