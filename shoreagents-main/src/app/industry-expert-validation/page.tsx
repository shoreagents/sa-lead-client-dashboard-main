"use client";

import { SideNav } from "@/components/layout/SideNav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Award,
  TrendingUp,
  Mic,
  Star,
  Target,
  Users,
  Building2,
  ArrowRight,
  Globe,
  CheckCircle2,
  Lightbulb,
  ThumbsUp,
  Briefcase,
  Rocket,
  Trophy,
  BarChart3
} from "lucide-react";
import Link from "next/link";

export default function IndustryExpertValidationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              Industry Validation - Derek Gallimore Recognition
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              When the World's Leading<br />
              <span className="text-lime-600">Outsourcing Authority Calls You THE Expert</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              When Derek Gallimore, CEO of the world's largest BPO marketplace serving 18,000+ businesses, personally 
              invites you as their exclusive real estate expert, it's more than recognition—it's validation. This is 
              how ShoreAgents earned the trust of the industry's most respected voice.
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
        
        {/* Expert Quote */}
        <Card className="bg-gradient-to-br from-gray-50 to-white border-lime-200 shadow-lg mb-16">
          <CardContent className="p-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  DG
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                "Anyone in the real estate space should reach out to ShoreAgents - they got it covered and truly know 
                real estate."
              </blockquote>
              <div className="text-lg font-bold text-gray-900">Derek Gallimore</div>
              <div className="text-gray-600 mb-2">CEO, Outsource Accelerator</div>
              <div className="flex items-center gap-2 text-gray-600">
                <Globe className="w-4 h-4" />
                <span>World's Largest BPO Marketplace</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Overview */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            How ShoreAgents became the go-to real estate outsourcing expert on the world's leading BPO platform. When 
            Derek Gallimore tells 18,000+ businesses to contact you specifically for real estate outsourcing, it's not 
            just a recommendation—it's the industry's gold standard of approval.
          </p>
        </div>

        <Separator className="my-12" />

        {/* Why This Recognition Matters */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Trophy className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Why This Recognition Matters</h2>
              <p className="text-lg text-gray-600">Understanding the weight of Derek Gallimore's endorsement</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Derek Gallimore isn't just another business consultant. He's the CEO of Outsource Accelerator, the world's 
              largest BPO marketplace. For 20 years in business and 8 years specifically in outsourcing, Derek has been 
              living in Manila—the heart of global outsourcing—since 2014. When he speaks, the industry listens.
            </p>
            
            <p className="mb-8">
              His platform serves 18,000+ businesses, features 4,000+ outsourcing firms, and has created over $1.1 billion 
              in value. So when Derek personally invites you to share your expertise as their exclusive real estate 
              specialist, it means something significant. That's exactly what happened with Stephen Atcheler and ShoreAgents.
            </p>

            <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Platform Authority Stats</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-lime-600 mb-2">18K+</div>
                    <p className="text-gray-700 font-medium">Businesses Served</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-lime-600 mb-2">$1.1B</div>
                    <p className="text-gray-700 font-medium">Value Created</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-lime-600 mb-2">4K+</div>
                    <p className="text-gray-700 font-medium">BPO Firms</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-lime-600 mb-2">450+</div>
                    <p className="text-gray-700 font-medium">Podcast Episodes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              This isn't about being featured alongside other companies. Derek specifically positioned ShoreAgents as the 
              real estate expert. When someone asks about property sector outsourcing on his platform, there's one company 
              he points to. That level of trust doesn't happen overnight—it's earned through proven results and genuine 
              expertise in virtual assistant services.
            </p>

            <p className="mt-6">
              The endorsement came naturally through Stephen's authentic expertise and hands-on approach to real estate 
              outsourcing solutions. No pitching, no sales presentations—just recognition of someone who truly understands 
              the industry.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* The Expert Interview */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Mic className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Expert Interview</h2>
              <p className="text-lg text-gray-600">Real Estate Sector Outsourcing - Featured Expert</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Getting invited to Derek's podcast isn't like other industry interviews. This isn't about promoting your 
              business—it's about sharing genuine expertise that helps thousands of businesses make better outsourcing 
              decisions. Derek only features people who can provide real value to his audience.
            </p>
            
            <p className="mb-8">
              Stephen's episode, "Real Estate Sector Outsourcing," wasn't a sales pitch. It was a deep dive into what 
              actually works when outsourcing in the property industry. From his personal experience scaling his own real 
              estate business with offshore staff to the systematic approach ShoreAgents has developed for real estate 
              virtual assistant services.
            </p>

            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Mic className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 font-semibold">Podcast Interview Available</p>
                    <p className="text-sm text-gray-500">Real Estate Sector Outsourcing Expert Discussion</p>
                  </div>
                </div>

                <div className="bg-lime-50 border-l-4 border-lime-600 p-6 rounded mb-6">
                  <p className="text-gray-900 font-semibold mb-2">Derek's Recommendation:</p>
                  <p className="text-gray-800 italic text-lg">
                    "Anyone in the real estate space should reach out to ShoreAgents - they got it covered and truly 
                    know real estate."
                  </p>
                  <p className="text-gray-600 text-sm mt-2">— Derek Gallimore, CEO, Outsource Accelerator</p>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">What Made This Interview Special</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Real Experience</h4>
                      <p className="text-gray-700 text-xs">Stephen shared his actual journey from struggling real estate owner to successful outsourcing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Practical Insights</h4>
                      <p className="text-gray-700 text-xs">Not theory, but actual processes that work for real estate businesses</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">No Sales Pitch</h4>
                      <p className="text-gray-700 text-xs">Pure education and honest discussion about what works and what doesn't</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Industry Focus</h4>
                      <p className="text-gray-700 text-xs">Deep understanding of real estate specifically, not generic outsourcing advice</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              The result? Derek now personally recommends ShoreAgents to anyone asking about real estate outsourcing. 
              That's not something you can buy or negotiate—it's earned through genuine expertise and authentic value.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* The Real Impact */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Award className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Real Impact</h2>
              <p className="text-lg text-gray-600">Beyond testimonials: industry authority validation</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              This isn't just another testimonial or review. When the world's leading outsourcing authority tells thousands 
              of businesses that you're the specialist they should contact, it changes everything. Derek's recommendation 
              carries weight that influences real business decisions across the industry.
            </p>
            
            <p className="mb-8">
              Stephen's background as a real estate professional who actually used offshore staff to scale his own business 
              to 14 salespeople and 400 rentals gives him credibility that Derek values. It's not theoretical knowledge—it's 
              practical, tested experience that works in the real world.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why This Recognition Matters</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <ThumbsUp className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Authentic Recognition</h4>
                      <p className="text-gray-700 text-sm">Derek's recommendation comes from witnessing real results and systematic expertise in action</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Users className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Industry Authority</h4>
                      <p className="text-gray-700 text-sm">Derek's voice influences thousands of business decisions across the global outsourcing industry</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Star className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Proven Expertise</h4>
                      <p className="text-gray-700 text-sm">Recognition based on real results and systematic approach, not marketing claims</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Target className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Sector Specialization</h4>
                      <p className="text-gray-700 text-sm">Exclusive positioning as the real estate expert, not just another generic BPO provider</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    When Derek tells his audience "they got it covered and truly know real estate," it's because he's seen 
                    the systematic approach that ShoreAgents brings to the industry
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              This recognition story represents something you can't manufacture: authentic industry respect earned through 
              proven results and genuine expertise in helping real estate businesses succeed through strategic outsourcing.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Industry Leadership Recognition */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Rocket className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Industry Leadership Recognition</h2>
              <p className="text-lg text-gray-600">The systematic approach that earned industry validation</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              What makes this recognition special isn't just Derek's influence—it's the systematic approach that earned it. 
              ShoreAgents didn't chase this endorsement; it came naturally through consistently delivering results and 
              building genuine expertise in the real estate sector.
            </p>
            
            <p className="mb-8">
              From Stephen's personal experience scaling his own real estate business with offshore staff to the hands-on 
              approach ShoreAgents takes with every client, the recognition reflects a deep understanding of what actually 
              works in real estate outsourcing. It's this practical knowledge that Derek values and recommends to his global 
              audience.
            </p>

            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What This Recognition Represents</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Industry Focus</h4>
                      <p className="text-gray-700 text-sm">Specialized expertise over generic solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BarChart3 className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Real Results</h4>
                      <p className="text-gray-700 text-sm">Proven track record with actual businesses</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Authentic Approach</h4>
                      <p className="text-gray-700 text-sm">Genuine expertise, not marketing hype</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Global Recognition</h4>
                      <p className="text-gray-700 text-sm">Industry authority validation</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-lime-50 border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Result: When the industry's leading voice recommends you specifically, it validates everything you've built
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              This recognition represents years of building authentic expertise, delivering real results, and maintaining 
              the systematic approach that Derek Gallimore values when recommending specialists to his global network of 
              business decision-makers.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* What This Means for Your Business */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Lightbulb className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What This Means for Your Business</h2>
              <p className="text-lg text-gray-600">Expert-validated solutions you can trust</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              When the world's leading outsourcing authority personally recommends ShoreAgents to anyone in the real estate 
              space, it's because he's seen the systematic approach that consistently delivers results. This isn't about 
              being the biggest or the cheapest—it's about genuinely understanding what real estate businesses need to succeed.
            </p>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Derek's Platform Success Metrics</h3>
                <p className="text-gray-700 mb-6">
                  Derek's recommendation carries the weight of his platform's proven success:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700"><strong>18,000+ businesses served</strong> across global markets</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700"><strong>$1.1 billion in value created</strong> through outsourcing placements</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700"><strong>36,000 full-time staff</strong> successfully placed</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700"><strong>4,000+ BPO firms</strong> evaluated and assessed</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold italic">
                    When Derek tells his audience "they got it covered and truly know real estate," it represents validation 
                    that money can't buy
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
            Ready to Experience Expert-Validated Solutions?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join the real estate businesses that have discovered why the world's leading outsourcing authority 
            specifically recommends ShoreAgents for systematic, results-driven solutions.
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
              href="/our-company"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-lime-600 font-bold text-lg rounded-lg transition-colors"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Learn More About Us
            </Link>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
