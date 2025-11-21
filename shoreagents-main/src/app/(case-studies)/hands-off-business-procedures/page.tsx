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
  FileCheck,
  Settings,
  Shield,
  Rocket,
  Mic,
  Video,
  GraduationCap,
  ThumbsUp,
  Play
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function HandsOffBusinessProceduresPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[{"name":"Case Studies","url":"https://www.shoreagents.com/case-studies"},{"name":"Kevin Turner","url":"https://www.shoreagents.com/hands-off-business-procedures"}]} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              Kevin Turner - Australia's Leading Property Authority
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Industry Authority Validation:<br />
              <span className="text-lime-600">Systems That Run "Almost Without Supervision"</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              When Australia's most recognized property authority validates your business systems across multiple 
              ventures, it demonstrates something powerful. This is the systematic methodology that earned industry 
              authority endorsement and multi-business collaboration success.
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
                  KT
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                "ShoreAgents introduced us to systems and processes that have enabled us to streamline procedures 
                that are checked off and completed almost without supervision. These are the great benefits that 
                ShoreAgents has been able to offer us."
              </blockquote>
              <div className="text-lg font-bold text-gray-900">Kevin Turner</div>
              <div className="text-gray-600 mb-2">Property Industry Authority</div>
              <div className="flex items-center gap-2 text-gray-600">
                <Globe className="w-4 h-4" />
                <span>Australia</span>
                <span className="mx-2">•</span>
                <span>Host of "Real Estate Talk" & "RE-Uncut"</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Industry Authority Credentials */}
        <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200 mb-16">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Industry Authority Credentials</h3>
              <p className="text-gray-700">Why Kevin Turner's validation matters</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-lime-600 mb-2">30+</div>
                <div className="text-gray-900 font-semibold">Years Industry Experience</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-lime-600 mb-2">#1</div>
                <div className="text-gray-900 font-semibold">Property Podcast Australia</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-lime-600 mb-2">5</div>
                <div className="text-gray-900 font-semibold">Proven Success Strategies</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Overview */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This comprehensive analysis demonstrates how systematic business methodologies earn validation from industry 
            authorities who evaluate service providers based on real-world performance and measurable outcomes. Kevin 
            Turner's 30+ year career evolution from radio broadcaster to property industry authority provides unique 
            insights into what actually works in business systematization.
          </p>
        </div>

        <Separator className="my-12" />

        {/* Industry Authority Validation Framework */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Award className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Industry Authority Validation Framework</h2>
              <p className="text-lg text-gray-600">Multi-business collaboration spanning years of success</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              When Australia's most recognized property broadcaster chooses to work with the same business systems 
              provider across multiple ventures, it signals something significant. This collaboration with ShoreAgents 
              spans years of successful implementations, demonstrating the systematic approach to business improvement 
              that has made both parties industry leaders.
            </p>
            
            <p className="mb-8">
              As the host of Australia's most popular property podcast "Real Estate Talk" and "RE-Uncut," Kevin evaluates 
              service providers from a position of deep industry knowledge. His insights influence industry standards and 
              shape how professionals approach business optimization.
            </p>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What Industry Authority Validation Means</h3>
                <p className="text-gray-700 mb-6">
                  When someone of Kevin Turner's industry stature chooses to collaborate repeatedly with the same business 
                  systems provider, it validates the effectiveness of systematic approaches to business optimization.
                </p>
                <div className="bg-white border-l-4 border-lime-600 p-4 rounded">
                  <p className="text-gray-900 font-semibold">
                    This represents more than a typical client relationship—it demonstrates how systematic business 
                    improvement scales across different business models and market conditions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Multi-Business Implementation */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Building2 className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Multi-Business Implementation Success</h2>
              <p className="text-lg text-gray-600">Systematic excellence across multiple ventures</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              The methodology spans multiple business ventures, each presenting unique challenges and operational 
              requirements. This long-term partnership demonstrates how systematic business improvement methodologies 
              adapt to different business models while maintaining consistent excellence.
            </p>
            
            <p className="mb-8">
              Stephen Atcheler's relationship with Kevin Turner extends back to their shared real estate industry days, 
              creating a foundation of mutual understanding and professional respect. When Kevin needed systematic business 
              support for his ventures, the existing relationship provided the trust necessary for successful implementation.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Pinnacle of Business Optimization</h3>
                <div className="bg-white rounded-lg p-6 mb-6 border-l-4 border-lime-600">
                  <p className="text-lg text-gray-900 mb-4">
                    The phrase <strong>"almost without supervision"</strong> represents the pinnacle of systematic business 
                    optimization.
                  </p>
                  <p className="text-gray-700">
                    When procedures become so well-documented and processes so thoroughly implemented that business 
                    operations continue seamlessly, it demonstrates the effectiveness of proven systematic methodologies.
                  </p>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-4">Implementation Results</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <FileCheck className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-bold text-gray-900 mb-1">Process Systematization</h5>
                      <p className="text-gray-700 text-sm">Streamlined procedures that operate independently with minimal oversight requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Zap className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-bold text-gray-900 mb-1">Operational Efficiency</h5>
                      <p className="text-gray-700 text-sm">Tasks completed automatically through documented systems and trained personnel</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-bold text-gray-900 mb-1">Scalable Framework</h5>
                      <p className="text-gray-700 text-sm">Methodology proven across multiple business ventures and operational requirements</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Achievement: Systematic excellence demonstrated across multiple business implementations
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Authentic Video Testimonial */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Video className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Authentic Video Testimonial</h2>
              <p className="text-lg text-gray-600">Credible validation from Australia's property authority</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Authentic client testimonials provide the most credible validation of business relationships and outcomes. 
              This testimonial provides authentic validation of business excellence, demonstrating why Australia's leading 
              property authority continues collaborating across multiple ventures and recommends systematic approaches to 
              business optimization.
            </p>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
              <CardContent className="p-8">
                <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Play className="w-20 h-20 mx-auto mb-4 opacity-80" />
                    <p className="text-gray-300">Kevin Turner Client Success Testimonial</p>
                    <p className="text-sm text-gray-400 mt-2">Watch the full video on YouTube</p>
                  </div>
                </div>
                <div className="text-center">
                  <a 
                    href="https://www.youtube.com/watch?v=PY1XfmshxR4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Full Testimonial
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-lime-50 border-lime-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Success Factors</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <FileCheck className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Systematic Processes</h4>
                      <p className="text-gray-700 text-sm">Documented procedures that enable independent operation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Minimal Supervision</h4>
                      <p className="text-gray-700 text-sm">Tasks completed automatically with quality assurance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Settings className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Streamlined Operations</h4>
                      <p className="text-gray-700 text-sm">Efficient workflows that scale across business requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Proven Results</h4>
                      <p className="text-gray-700 text-sm">Multiple successful implementations across different ventures</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Educational Collaboration */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <GraduationCap className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Educational Collaboration: Offshore 101</h2>
              <p className="text-lg text-gray-600">Strategic partnership in industry knowledge sharing</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              The Offshore 101 collaboration with Kevin Turner represents a strategic partnership in educational content 
              creation, combining Stephen's systematic offshore expertise with Kevin's industry authority and broadcast 
              platform. This demonstrates knowledge sharing that benefits the entire industry.
            </p>
            
            <p className="mb-8">
              When industry authorities collaborate on educational content, it validates methodologies through peer review 
              and professional scrutiny. Kevin Turner's willingness to feature offshore staffing insights on his platform 
              demonstrates confidence in systematic approaches to business improvement.
            </p>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
              <CardContent className="p-8">
                <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Mic className="w-20 h-20 mx-auto mb-4 opacity-80" />
                    <p className="text-gray-300">Offshore 101 Educational Series</p>
                    <p className="text-sm text-gray-400 mt-2">Watch the educational collaboration</p>
                  </div>
                </div>
                <div className="text-center">
                  <a 
                    href="https://www.youtube.com/watch?v=syB0nLxxiSw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition-colors"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Offshore 101
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Educational Content Benefits</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <GraduationCap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Industry Education</h4>
                    <p className="text-gray-700 text-sm">Knowledge sharing that benefits the entire industry</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Peer Validation</h4>
                    <p className="text-gray-700 text-sm">Methodology validation through industry expert collaboration</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Mic className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Platform Authority</h4>
                    <p className="text-gray-700 text-sm">Broadcast expertise combined with systematic knowledge</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Long-Term Partnership Value */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <ThumbsUp className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Long-Term Partnership Value Analysis</h2>
              <p className="text-lg text-gray-600">Why industry authority validation matters</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              The long-term validation demonstrates something crucial about systematic business relationships: when 
              methodologies consistently deliver results, partnerships evolve beyond transactional exchanges into strategic 
              alliances that benefit both parties and the broader industry.
            </p>

            <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Why Kevin Turner Validation Matters
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Star className="w-8 h-8 text-lime-600" />
                      <h4 className="font-bold text-gray-900">Industry Authority</h4>
                    </div>
                    <p className="text-gray-700 text-sm">
                      30+ years of industry expertise validates systematic business improvement methodologies
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="w-8 h-8 text-lime-600" />
                      <h4 className="font-bold text-gray-900">Repeated Success</h4>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Multiple business collaborations demonstrate consistent methodology effectiveness
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Award className="w-8 h-8 text-lime-600" />
                      <h4 className="font-bold text-gray-900">Credible Endorsement</h4>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Public testimonials and educational collaborations provide third-party validation
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-8 h-8 text-lime-600" />
                      <h4 className="font-bold text-gray-900">Strategic Alliance</h4>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Long-term partnership demonstrates mutual value and continued collaboration benefits
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold mb-3">
                    When industry authorities experience systematic business improvement methodologies, they become 
                    advocates for proven approaches that deliver consistent results.
                  </p>
                  <p className="text-gray-700">
                    This provides something invaluable in business services: credible validation from an industry authority 
                    who has experienced the methodology's effectiveness across multiple implementations and can authentically 
                    recommend systematic approaches to business optimization.
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
            Ready to Experience Industry-Validated Excellence?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join the successful businesses that have transformed their operations through proven methodologies validated 
            by industry authorities like Kevin Turner. Experience systems that run "almost without supervision."
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
