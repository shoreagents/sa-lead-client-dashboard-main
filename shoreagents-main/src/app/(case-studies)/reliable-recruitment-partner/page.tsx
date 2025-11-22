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
  Rocket,
  DollarSign,
  Clock,
  MessageSquare,
  Shield,
  Heart,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function ReliableRecruitmentPartnerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[{"name":"Case Studies","url":"https://www.shoreagents.com/case-studies"},{"name":"Tracey Foy","url":"https://www.shoreagents.com/reliable-recruitment-partner"}]} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              Professionals Schultz Realty - Maungaturoto, New Zealand
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              From Uncertainty to<br />
              <span className="text-lime-600">"Nothing Short of Exceptional"</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              When Tracey Foy at Professionals Schultz Realty took the leap with her first virtual assistant hire, she 
              discovered something remarkable. What started as a business necessity became a partnership she describes as 
              "nothing short of exceptional." This is her story of transformation.
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
        
        {/* Client Testimonial - Featured */}
        <Card className="bg-gradient-to-br from-gray-50 to-white border-lime-200 shadow-lg mb-12">
          <CardContent className="p-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  TF
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                "Our partnership with ShoreAgents has been nothing short of exceptional. From the very beginning, their 
                team demonstrated a high level of professionalism and friendliness that made the entire process enjoyable 
                and seamless. The streamlined recruitment process they offer is truly remarkable, making it easy for us to 
                find the right talent quickly and efficiently."
              </blockquote>
              <div className="text-lg font-bold text-gray-900">Tracey Foy</div>
              <div className="text-gray-600 mb-2">Professionals Schultz Realty Ltd</div>
              <div className="flex items-center gap-2 text-gray-600">
                <Globe className="w-4 h-4" />
                <span>Maungaturoto, New Zealand</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Excellence Stats */}
        <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200 mb-16">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">"Nothing Short of Exceptional"</h3>
              <p className="text-gray-700">What made Tracey's experience remarkable</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Rocket className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-lg font-bold text-gray-900 mb-1">Streamlined</div>
                <p className="text-gray-600 text-sm">Truly Remarkable Process</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <MessageSquare className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-lg font-bold text-gray-900 mb-1">Clear</div>
                <p className="text-gray-600 text-sm">Effective Communication</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Shield className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-lg font-bold text-gray-900 mb-1">Transparent</div>
                <p className="text-gray-600 text-sm">Strong Trust Foundation</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Award className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-lg font-bold text-gray-900 mb-1">Recommended</div>
                <p className="text-gray-600 text-sm">Highly Endorsed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Overview */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            When Tracey Foy at Professionals Schultz Realty in Maungaturoto, New Zealand, decided to hire her first 
            virtual assistant, she had no idea she was about to experience what she would later describe as "nothing short 
            of exceptional." This is her story of transformation—from streamlined recruitment to operational excellence, 
            from uncertainty to complete confidence in systematic virtual assistant support.
          </p>
        </div>

        <Separator className="my-12" />

        {/* The Moment That Changed Everything */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Target className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Moment That Changed Everything</h2>
              <p className="text-lg text-gray-600">The decision that transformed her business</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Every successful business partnership starts with a decision. For Tracey Foy at Professionals Schultz Realty 
              in Maungaturoto, New Zealand, that decision was to hire her first virtual assistant. What she discovered 
              exceeded every expectation.
            </p>
            
            <p className="mb-8">
              Like many real estate professionals, Tracey was drowning in administrative tasks that pulled her away from 
              clients and revenue-generating activities. The solution seemed obvious: hire help. But finding the right 
              support in a small market like Maungaturoto? That was the challenge.
            </p>

            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Small Market Reality</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg border-l-4 border-red-600">
                    <Users className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Limited Local Talent</h4>
                      <p className="text-gray-700 text-sm">
                        Maungaturoto's small market means limited access to skilled administrative professionals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg border-l-4 border-orange-600">
                    <DollarSign className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Cost Constraints</h4>
                      <p className="text-gray-700 text-sm">
                        New Zealand salary expectations make local hiring challenging for smaller agencies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg border-l-4 border-yellow-600">
                    <Clock className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Time Pressure</h4>
                      <p className="text-gray-700 text-sm">
                        Administrative tasks consuming time that should be spent with clients
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    This is where ShoreAgents entered the picture. What Tracey discovered wasn't just a virtual assistant 
                    service—it was a systematic approach to business transformation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* "Nothing Short of Exceptional" Experience */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Sparkles className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">"Nothing Short of Exceptional"</h2>
              <p className="text-lg text-gray-600">The experience that transformed her operations</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              When Tracey describes her partnership with ShoreAgents as "nothing short of exceptional," she's not using 
              casual language. She's describing a business relationship that transformed her operations from day one. 
              "From the very beginning, their team demonstrated a high level of professionalism and friendliness that made 
              the entire process enjoyable and seamless," Tracey explains.
            </p>

            <Card className="bg-gradient-to-br from-lime-50 to-green-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  What Made Tracey's Experience "Nothing Short of Exceptional"
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-5 border-l-4 border-lime-600">
                    <div className="flex items-start gap-3">
                      <Rocket className="w-7 h-7 text-lime-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Streamlined Process</h4>
                        <p className="text-gray-700 text-sm italic mb-2">
                          "The streamlined recruitment process they offer is truly remarkable"
                        </p>
                        <p className="text-gray-600 text-xs">
                          Making it easy to find the right talent quickly and efficiently
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 border-l-4 border-green-600">
                    <div className="flex items-start gap-3">
                      <MessageSquare className="w-7 h-7 text-green-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Clear Communication</h4>
                        <p className="text-gray-700 text-sm italic mb-2">
                          "Communication has always been clear and effective"
                        </p>
                        <p className="text-gray-600 text-xs">
                          Ensuring we are always on the same page
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 border-l-4 border-blue-600">
                    <div className="flex items-start gap-3">
                      <Heart className="w-7 h-7 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Customer Focus</h4>
                        <p className="text-gray-700 text-sm italic mb-2">
                          "Their commitment to customer focus is evident in every interaction"
                        </p>
                        <p className="text-gray-600 text-xs">
                          Professionalism and friendliness throughout
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 border-l-4 border-purple-600">
                    <div className="flex items-start gap-3">
                      <Shield className="w-7 h-7 text-purple-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Transparency & Trust</h4>
                        <p className="text-gray-700 text-sm italic mb-2">
                          "The transparency they maintain has built a strong foundation of trust"
                        </p>
                        <p className="text-gray-600 text-xs">
                          Clear expectations and honest communication
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    When business relationships are built on this foundation, exceptional results become inevitable.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* The Business Transformation */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Business Transformation</h2>
              <p className="text-lg text-gray-600">From administrative burden to strategic focus</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              The real measure of any business partnership isn't initial satisfaction—it's sustained transformation. For 
              Tracey, the implementation of her Sales Administrator role created fundamental changes in how she operates 
              her real estate business. "Outsourcing through ShoreAgents has enhanced our operations, allowing us to focus 
              on core business activities while they handle the recruitment process with expertise," Tracey explains.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-2">
                      ✗
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Before: Administrative Overwhelm</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold mt-1">•</span>
                      <span className="text-sm">Time consumed by administrative tasks</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold mt-1">•</span>
                      <span className="text-sm">Limited focus on client relationships</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold mt-1">•</span>
                      <span className="text-sm">Difficulty finding local talent</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold mt-1">•</span>
                      <span className="text-sm">Reduced time for revenue-generating activities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* After */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-2">
                      ✓
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">After: Strategic Excellence</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Enhanced operational efficiency</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Focus on core business activities</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Professional administrative support</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Streamlined recruitment and management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-blue-50 border-blue-200 mt-8">
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-lg text-gray-900 font-semibold italic">
                    "This transformation didn't happen by accident. It's the result of systematic approaches to virtual 
                    assistant implementation that prioritize long-term business success over short-term cost savings."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Why This Works in New Zealand */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Globe className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Why This Works in New Zealand</h2>
              <p className="text-lg text-gray-600">Unique advantages for Kiwi real estate professionals</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Tracey's success in Maungaturoto represents something significant for New Zealand real estate professionals. 
              Her story demonstrates how systematic virtual assistant implementation addresses the unique challenges of the 
              New Zealand market: smaller market centers, higher labor costs, and specific regulatory requirements.
            </p>

            <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-blue-200">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">🥝</div>
                  <h3 className="text-2xl font-bold text-gray-900">New Zealand Virtual Assistant Advantages</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-5 border-l-4 border-blue-600">
                    <div className="flex items-start gap-3">
                      <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Timezone Benefits</h4>
                        <p className="text-gray-700 text-sm">
                          4-hour time difference with Philippines enables extended business hours
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 border-l-4 border-green-600">
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Cost Efficiency</h4>
                        <p className="text-gray-700 text-sm">
                          Significant savings compared to New Zealand salary expectations
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 border-l-4 border-purple-600">
                    <div className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-purple-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Professional Standards</h4>
                        <p className="text-gray-700 text-sm">
                          University-educated English-speaking professionals
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 border-l-4 border-lime-600">
                    <div className="flex items-start gap-3">
                      <Target className="w-6 h-6 text-lime-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Market Understanding</h4>
                        <p className="text-gray-700 text-sm">
                          Training in New Zealand real estate practices and requirements
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    This isn't just about finding cheaper labor—it's about accessing professional capabilities that enable 
                    business growth while maintaining the quality standards that New Zealand clients expect.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* "We Highly Recommend ShoreAgents" */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Star className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">"We Highly Recommend ShoreAgents"</h2>
              <p className="text-lg text-gray-600">The ultimate endorsement from a satisfied client</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              The strongest validation of any business partnership isn't satisfaction—it's recommendation. When Tracey 
              states, "We highly recommend ShoreAgents to anyone seeking a reliable and customer-focused recruitment 
              partner," she's providing the ultimate endorsement. But Tracey goes further. She specifically believes these 
              services would be "invaluable for other businesses in the real estate industry looking to improve efficiency 
              and productivity."
            </p>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Tracey's Recommendation Validates</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-5 border-l-4 border-purple-600">
                    <div className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Proven Results</h4>
                        <p className="text-gray-700 text-sm">
                          Results significant enough to actively recommend to industry peers
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 border-l-4 border-blue-600">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Industry Validation</h4>
                        <p className="text-gray-700 text-sm">
                          Specific endorsement for real estate industry applications
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 border-l-4 border-green-600">
                    <div className="flex items-start gap-3">
                      <Heart className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Trust Foundation</h4>
                        <p className="text-gray-700 text-sm">
                          Partnership quality that builds confidence in recommending to others
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-5 border-l-4 border-lime-600">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-lime-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Business Impact</h4>
                        <p className="text-gray-700 text-sm">
                          Enhanced efficiency and productivity worth sharing with competitors
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Tracey's Recommendation Carries Weight</h3>
                <p className="text-gray-700 mb-4">
                  When Tracey Foy says she "highly recommends ShoreAgents to anyone seeking a reliable and customer-focused 
                  recruitment partner," she's not offering casual praise. She's putting her professional reputation on the 
                  line to endorse a service she believes other real estate professionals should experience.
                </p>
                <p className="text-gray-700 mb-4">
                  Think about it: Tracey operates in Maungaturoto, New Zealand—a tight-knit market where professional 
                  relationships matter. When she actively recommends a service to her industry peers, she's telling them 
                  "this works, and I'm confident it will work for you too."
                </p>
                <div className="bg-white border-l-4 border-lime-600 p-4 rounded">
                  <p className="text-gray-900 font-semibold">
                    That's not marketing speak; that's genuine professional endorsement from someone who's experienced the 
                    transformation firsthand.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* What This Means for NZ Professionals */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Lightbulb className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What This Means for You</h2>
              <p className="text-lg text-gray-600">Lessons from Tracey's transformation</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <Card className="bg-gradient-to-br from-lime-50 to-green-50 border-lime-200">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    If Tracey Can Achieve This in Maungaturoto...
                  </h3>
                  <p className="text-lg text-gray-700">
                    What's possible for your real estate business?
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 mb-6">
                  <p className="text-gray-700 text-center">
                    Her success demonstrates that systematic virtual assistant support works regardless of market size or 
                    location. The transparency, professionalism, and customer focus that earned Tracey's recommendation are 
                    available to any New Zealand real estate professional ready to enhance their operations while maintaining 
                    the quality standards their clients expect.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Sparkles className="w-8 h-8 text-lime-600 mx-auto mb-2" />
                    <h4 className="font-bold text-gray-900 text-sm">Exceptional Service</h4>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Rocket className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-bold text-gray-900 text-sm">Streamlined Process</h4>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-bold text-gray-900 text-sm">Transparent Partnership</h4>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>

      {/* Final CTA */}
      <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white mx-4 mb-8">
        <CardContent className="p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience "Nothing Short of Exceptional"?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Discover the streamlined recruitment process and transparent partnership approach that convinced a New Zealand 
            real estate professional to stake her reputation on recommending our services. Experience the transformation 
            from uncertainty to complete confidence.
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
