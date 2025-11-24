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
  Waves,
  Home,
  Plane,
  Smartphone,
  Cloud,
  Rocket,
  Video,
  Play
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function MobileBusinessSolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb items={[{"name":"Case Studies","url":"https://www.shoreagents.com/case-studies"},{"name":"Peter Forbes","url":"https://www.shoreagents.com/mobile-business-solutions"}]} className="mb-6" />
          
          <div className="max-w-4xl">
            <Badge className="bg-lime-600 text-white mb-4 text-sm px-3 py-1">
              #1 Property Centre Client Success - Australia
            </Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              How Australia's #1 Property Centre<br />
              <span className="text-lime-600">Went Completely Mobile: Work From Anywhere</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              When Peter Forbes discovered ShoreAgents, he wasn't just looking for cheap labor—he was searching for 
              the freedom to work anywhere. This is how one strategic hire transformed a leading Australian property 
              business from desk-bound to completely mobile.
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
        
        {/* Mobile Freedom Stats */}
        <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-lime-200 mb-16">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Location Independence</h3>
              <p className="text-gray-700">Work from anywhere while maintaining #1 standards</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Waves className="w-10 h-10 text-lime-600 mx-auto mb-3" />
                <div className="text-lg font-bold text-gray-900 mb-1">Work From Beach</div>
                <p className="text-gray-600 text-sm">Complete business operations without location constraints</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Home className="w-10 h-10 text-lime-600 mx-auto mb-3" />
                <div className="text-lg font-bold text-gray-900 mb-1">Home Office Freedom</div>
                <p className="text-gray-600 text-sm">Eliminate daily commute without sacrificing productivity</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Plane className="w-10 h-10 text-lime-600 mx-auto mb-3" />
                <div className="text-lg font-bold text-gray-900 mb-1">Travel While Working</div>
                <p className="text-gray-600 text-sm">Business continuity during travel and personal time</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Overview */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Picture this: You're running Australia's #1 Property Centre, tied to your desk, buried in administrative 
            tasks. Then you discover how to work from anywhere—the beach, your home, even while traveling. That 
            transformation? It started with one strategic hire. This is the Peter Forbes client success story.
          </p>
        </div>

        <Separator className="my-12" />

        {/* The Mobile Business Vision */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Target className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Mobile Business Vision</h2>
              <p className="text-lg text-gray-600">Breaking free from administrative chains</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Peter Forbes didn't just stumble into success with Australia's #1 Property Centre. As a leading property 
              professional, he understood something most agents never realize: the difference between working IN your 
              business and working ON your business. The challenge wasn't generating leads or closing deals—it was 
              breaking free from the administrative chains that kept him desk-bound.
            </p>
            
            <p className="mb-8">
              The breakthrough came when Peter discovered ShoreAgents' systematic approach to offshore staffing. This 
              wasn't about finding the cheapest labor—it was about finding the right person who could handle the 
              administrative foundation that would allow him to work from anywhere.
            </p>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Vision: Complete Location Independence</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Waves className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Work from the Beach</h4>
                      <p className="text-gray-700 text-sm">Complete business operations without location constraints</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Home className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Home Office Freedom</h4>
                      <p className="text-gray-700 text-sm">Eliminate the daily commute without sacrificing productivity</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Plane className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Travel While Working</h4>
                      <p className="text-gray-700 text-sm">Business continuity during travel and personal time</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold italic">
                    "The goal wasn't just efficiency—it was complete freedom to work from anywhere while maintaining 
                    Australia's #1 Property Centre standards."
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              What separated Peter's approach from typical outsourcing attempts was his strategic thinking. He understood 
              that successful mobile business operations required more than just delegating tasks—it needed systematic 
              foundation building that would support his vision of complete location independence.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* The Strategic "One Agent" Decision */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Users className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Strategic "One Agent" Decision</h2>
              <p className="text-lg text-gray-600">Quality over quantity for mobile business success</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Peter's decision to hire one carefully selected agent through ShoreAgents wasn't about saving money—it 
              was about strategic leverage. As the leader of Australia's #1 Property Centre, he understood that the 
              right person in the right role could transform his entire business model from location-dependent to 
              completely mobile.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why the "One Agent" Strategy Works</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Perfect Cultural Fit</h4>
                      <p className="text-gray-700 text-sm">Focus on finding the ideal match rather than managing multiple relationships</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Rapid Implementation</h4>
                      <p className="text-gray-700 text-sm">Single relationship enables faster integration and trust building</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Systematic Foundation</h4>
                      <p className="text-gray-700 text-sm">Build comprehensive operational base before considering expansion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Waves className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Maximum Flexibility</h4>
                      <p className="text-gray-700 text-sm">Complete location independence with reliable operational support</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Result: Australia's #1 Property Centre achieved complete mobile business operations through strategic 
                    offshore staffing
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              This strategic approach to offshore staffing demonstrates why Peter Forbes achieved such remarkable success 
              with his mobile business transformation. By focusing on finding the right person rather than the cheapest 
              solution, he built the foundation that would support his vision of working from anywhere while maintaining 
              Australia's #1 Property Centre standards.
            </p>
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
              <p className="text-lg text-gray-600">From Australia's #1 Property Centre</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              When Peter Forbes speaks about his ShoreAgents experience, you hear something that can't be manufactured: 
              genuine satisfaction from a business professional who achieved exactly what he envisioned. This isn't a 
              scripted testimonial—it's an authentic account of how strategic offshore staffing enabled complete mobile 
              business operations.
            </p>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
              <CardContent className="p-8">
                <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Play className="w-20 h-20 mx-auto mb-4 opacity-80" />
                    <p className="text-gray-300">Peter Forbes Mobile Business Testimonial</p>
                    <p className="text-sm text-gray-400 mt-2">Watch the full video on YouTube</p>
                  </div>
                </div>
                <div className="text-center">
                  <a 
                    href="https://www.youtube.com/watch?v=CugUOAyOGRc" 
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

            <Card className="bg-gradient-to-br from-gray-50 to-white border-lime-200 shadow-lg mt-8">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      PF
                    </div>
                  </div>
                  <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                    "ShoreAgents certainly helped me get my business into that mode of working with some outsourced 
                    workers and helping me to work on the go."
                  </blockquote>
                  <div className="text-lg font-bold text-gray-900">Peter Forbes</div>
                  <div className="text-gray-600 mb-2">#1 Property Centre</div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Globe className="w-4 h-4" />
                    <span>Australia</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-lime-50 border-lime-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Mobile Business Achievement</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
                    <Waves className="w-6 h-6 text-lime-600" />
                    <span className="font-semibold text-gray-900">Work from Beach</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
                    <Home className="w-6 h-6 text-lime-600" />
                    <span className="font-semibold text-gray-900">Home Office Freedom</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
                    <Plane className="w-6 h-6 text-lime-600" />
                    <span className="font-semibold text-gray-900">Travel While Working</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
                    <Star className="w-6 h-6 text-lime-600" />
                    <span className="font-semibold text-gray-900">Australia's #1 Standards</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Achievement: Complete mobile business transformation through strategic offshore staffing
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Mobile Business Framework */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Smartphone className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Mobile Business Framework</h2>
              <p className="text-lg text-gray-600">Complete location independence infrastructure</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Peter's achievement with Australia's #1 Property Centre demonstrates something profound about modern business 
              operations: location independence isn't just about working from home—it's about complete operational freedom. 
              His success validates a systematic approach to building mobile business infrastructure that maintains 
              professional standards regardless of location.
            </p>
            
            <p className="mb-8">
              The mobile business framework that Peter implemented through ShoreAgents represents a fundamental shift in 
              how property professionals approach their operations. Instead of being tied to a physical office, his business 
              model demonstrates complete flexibility while maintaining the high standards that define Australia's #1 
              Property Centre.
            </p>

            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Mobile Business Infrastructure</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-lime-600">
                    <div className="flex items-start gap-3 mb-3">
                      <CheckCircle2 className="w-8 h-8 text-lime-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Administrative Foundation</h4>
                        <p className="text-gray-700 text-sm">
                          Professional offshore agent handling all administrative tasks that previously required office presence
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-600">
                    <div className="flex items-start gap-3 mb-3">
                      <Cloud className="w-8 h-8 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Digital Operations</h4>
                        <p className="text-gray-700 text-sm">
                          Cloud-based business processes accessible from any location with internet connectivity
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-green-600">
                    <div className="flex items-start gap-3 mb-3">
                      <Award className="w-8 h-8 text-green-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Professional Standards</h4>
                        <p className="text-gray-700 text-sm">
                          Maintaining Australia's #1 Property Centre quality regardless of working location
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-purple-600">
                    <div className="flex items-start gap-3 mb-3">
                      <Zap className="w-8 h-8 text-purple-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Operational Flexibility</h4>
                        <p className="text-gray-700 text-sm">
                          Business continuity from beach, home office, or any travel destination
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold italic">
                    Complete mobile business framework enabling location independence without compromising professional standards
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              This mobile business framework demonstrates why Peter Forbes' success with Australia's #1 Property Centre 
              represents more than just operational efficiency—it's a complete business model transformation that provides 
              unprecedented freedom while maintaining professional excellence.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Peter's Mobile Business Blueprint */}
        <section className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-lime-100 rounded-full p-3">
              <Lightbulb className="w-8 h-8 text-lime-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Follow Peter's Mobile Business Blueprint</h2>
              <p className="text-lg text-gray-600">Step-by-step process for location independence</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              Peter's approach wasn't complicated—it was smart. He understood that achieving complete location independence 
              required more than just hiring someone cheap. He needed a strategic partner who could handle the administrative 
              foundation while maintaining Australia's #1 Property Centre standards.
            </p>

            <Card className="bg-lime-50 border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Peter's Step-by-Step Mobile Business Process</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-lime-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">STEP 1: Define Your Vision</h4>
                        <p className="text-gray-700 text-sm">
                          Peter knew exactly what he wanted: complete freedom to work from anywhere. Define your specific 
                          mobility goals before starting.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">STEP 2: Start with One</h4>
                        <p className="text-gray-700 text-sm">
                          Peter chose one high-quality agent rather than multiple cheaper options. Focus on finding the 
                          perfect cultural fit first.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">STEP 3: Build Foundation</h4>
                        <p className="text-gray-700 text-sm">
                          Peter focused on creating systematic processes that would work from any location. Build your 
                          operational foundation first.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">STEP 4: Test Mobility</h4>
                        <p className="text-gray-700 text-sm">
                          Peter gradually tested working from different locations. Start with home office, then beach, 
                          then travel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white border-l-4 border-lime-600 rounded">
                  <p className="text-gray-900 font-semibold">
                    Key Insight: Peter's success came from focusing on the end goal rather than just task delegation
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-50 border-red-200 mt-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Reality Check: Why Most Mobile Business Attempts Fail</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-600">
                    <p className="text-gray-900 font-semibold mb-1">They focus on cost savings instead of capability building.</p>
                    <p className="text-gray-700 text-sm">
                      Peter understood that mobile business freedom requires investment in quality, not just delegation of tasks.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-600">
                    <p className="text-gray-900 font-semibold mb-1">They try to manage multiple relationships simultaneously.</p>
                    <p className="text-gray-700 text-sm">
                      Peter's one-agent strategy allowed him to build trust and systems before expanding.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-600">
                    <p className="text-gray-900 font-semibold mb-1">They don't define success clearly.</p>
                    <p className="text-gray-700 text-sm">
                      Peter knew exactly what mobile business freedom looked like and worked backward from that vision.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="mt-8">
              Peter's mobile business transformation demonstrates that when property professionals approach offshore staffing 
              with clear vision and strategic implementation, they don't just save money—they create completely new possibilities 
              for how they structure their business and personal lives.
            </p>
          </div>
        </section>

      </div>

      {/* Final CTA */}
      <Card className="bg-gradient-to-r from-lime-500 to-green-600 text-white mx-4 mb-8">
        <CardContent className="p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Achieve Complete Location Independence?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Follow Peter's blueprint for mobile business freedom and work from anywhere while maintaining professional 
            excellence. Start with one strategic hire like Peter did, and transform your property business into a 
            completely mobile operation.
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
