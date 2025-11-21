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
  DollarSign,
  Shield,
  Clock,
  Briefcase,
  BarChart3,
  AlertCircle,
  XCircle,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function WhatIsOutsourcingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[{"name":"Outsourcing","url":"https://www.shoreagents.com/outsourcing"},{"name":"What is Outsourcing","url":"https://www.shoreagents.com/what-is-outsourcing"}]} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              Complete Guide for 2025
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              What Is Outsourcing?<br />
              <span className="text-lime-600">The Complete Guide for 2025</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              While smart businesses leverage strategic outsourcing for 200%+ ROI, others waste money on glorified 
              freelancing. Understanding the difference is worth millions. From basic definitions to strategic 
              implementation – everything you need to understand modern business outsourcing.
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
                href="/outsourcing-vs-offshoring" 
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-lime-600 transition-colors"
              >
                Compare Outsourcing Models
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
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Outsourcing by the Numbers</h3>
              <p className="text-gray-700">Global market statistics for 2025</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Globe className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">$731B</div>
                <div className="text-gray-900 font-semibold">Global Market 2025</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <DollarSign className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">78%</div>
                <div className="text-gray-900 font-semibold">Average Cost Reduction</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Clock className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">24/7</div>
                <div className="text-gray-900 font-semibold">Global Operations</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <TrendingUp className="w-8 h-8 text-lime-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-lime-600 mb-2">200%+</div>
                <div className="text-gray-900 font-semibold">ROI When Done Right</div>
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
                  CRITICAL: 73% of Businesses Misunderstand What Outsourcing Actually Is
                </h3>
                <p className="text-gray-700">
                  While smart businesses leverage strategic outsourcing for 200%+ ROI, others waste money on glorified 
                  freelancing. Understanding the difference is worth millions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Lesson */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Lightbulb className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The $150,000 Lesson</h2>
              <p className="text-lg text-gray-600">That taught me what outsourcing really means</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <Card className="bg-gradient-to-br from-gray-50 to-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <p className="text-gray-700 mb-4 italic">
                  Back in 2012, I thought I understood outsourcing. I hired what I believed was a "trained" virtual 
                  assistant from a Philippines company. What I got was someone working from home with chickens in the 
                  background who would disappear for days.
                </p>
                <p className="text-gray-700 mb-4">
                  That expensive lesson taught me the difference between real outsourcing and what most people think 
                  outsourcing means. After 500+ successful placements and building ShoreAgents into Australia's leading 
                  BPO provider, I can tell you exactly what outsourcing actually is – and what it isn't.
                </p>
                <div className="bg-lime-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                  <p className="text-gray-900 font-semibold">
                    This comprehensive guide breaks down everything you need to know about modern business outsourcing, 
                    from basic definitions to strategic implementation across different industries.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Core Definition */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Target className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What is Outsourcing? The Core Definition</h2>
              <p className="text-lg text-gray-600">Understanding the fundamentals</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <Card className="bg-blue-50 border-blue-200 mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Outsourcing Definition</h3>
                <p className="text-lg text-gray-900 font-semibold mb-4">
                  The strategic practice of contracting specific business functions to external organizations to achieve 
                  greater efficiency, access specialized skills, and reduce operational costs while allowing companies to 
                  focus on core competencies.
                </p>
                <p className="text-gray-700">
                  In simple terms, outsourcing means paying an external company to handle specific business tasks so you 
                  can focus on what you do best. Instead of hiring, training, and managing employees for every function, 
                  you partner with specialists who already have the systems, skills, and infrastructure in place.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Key Components of Modern Outsourcing</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Users className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">External Partnership</h4>
                      <p className="text-gray-700 text-sm">You work with an established business, not individual freelancers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Star className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Specialized Expertise</h4>
                      <p className="text-gray-700 text-sm">They bring proven skills and experience to your specific challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Target className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Outcome-Focused</h4>
                      <p className="text-gray-700 text-sm">You define what you need; they deliver results without you managing the process</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Building2 className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Infrastructure Included</h4>
                      <p className="text-gray-700 text-sm">They provide the office space, technology, and management systems</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    This is fundamentally different from hiring employees or working with freelancers. With proper 
                    outsourcing services, you get predictable results without the complexity of employment management.
                  </p>
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
            Ready to Leverage Strategic Outsourcing?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Understanding what outsourcing really means is the first step toward building a more efficient and profitable 
            business. Whether you're looking to scale operations, access specialized expertise, or optimize costs—strategic 
            outsourcing opens growth opportunities.
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
              href="/outsourcing-philippines"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-lime-600 font-bold text-lg rounded-lg transition-colors"
            >
              <Globe className="w-5 h-5 mr-2" />
              Explore Philippines Outsourcing
            </Link>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
