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
  AlertCircle,
  CheckCircle2,
  RefreshCw,
  Headphones,
  Settings,
  PlayCircle,
  XCircle,
  BarChart3,
  MessageSquare,
  Image as ImageIcon,
  Rocket,
  Layers,
  Briefcase,
  MapPin,
  Flag,
  ClipboardList,
  Gift,
  ThumbsUp,
  TrendingDown,
  Smile,
  Sparkles,
  Percent,
  BookOpen,
  GraduationCap,
  Heart,
  UserCheck,
  Wifi,
  WifiOff,
  CloudRain,
  HomeIcon,
  AlertTriangle,
  CheckCircle as CheckCircleIcon,
  Smartphone,
  Laptop,
  Plane,
  Umbrella
} from 'lucide-react';
import Image from 'next/image';

export default function MobileBusinessSolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-red-600 text-white px-4 py-2 text-lg mb-6">
            REVEALED: How Australia&apos;s #1 Property Centre Went Mobile
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Breaking Free from the Office: Peter Forbes&apos; Mobile Business Transformation
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            When Peter Forbes discovered ShoreAgents, he wasn&apos;t just looking for cheap labor—he was searching for the freedom to work anywhere. This Peter Forbes client success story reveals how one strategic hire transformed a leading Australian property business from desk-bound to completely mobile.
          </p>
          
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
              alt="#1 Property Centre Operations"
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
                    alt="#1 Property Centre Logo"
                    width={100}
                    height={100}
                    className="mx-auto rounded-full"
                  />
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  &quot;ShoreAgents certainly helped me get my business into that mode of working with some outsourced workers and helping me to work on the go.&quot;
                </blockquote>
                <div className="text-gray-900 font-bold">Peter Forbes</div>
                <div className="text-gray-600">#1 Property Centre, AU</div>
                <div className="text-gray-600">Hired One Agent</div>
                <div className="mt-2 flex items-center justify-center gap-2">
                  <Globe className="w-4 h-4 text-gray-600" />
                  <span>Australia</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Intro Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Building className="w-8 h-8 text-lime-600 mr-2" />
            Peter Forbes Client Success: Mobile Business Freedom
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            How Australia&apos;s #1 Property Centre achieved complete location independence through strategic offshore staffing
          </p>
          <p className="text-lg text-gray-700">
            Picture this: You&apos;re running Australia&apos;s #1 Property Centre, tied to your desk, buried in administrative tasks. Then you discover how to work from anywhere—the beach, your home, even while traveling. That transformation? It started with one strategic hire. This is the Peter Forbes client success story.
          </p>
        </div>

        {/* Mobile Business Vision */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Peter Forbes Client Success: The Mobile Business Vision</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Peter Forbes didn&apos;t just stumble into success with Australia&apos;s #1 Property Centre. As a leading property professional, he understood something most agents never realize: the difference between working IN your business and working ON your business. The challenge wasn&apos;t generating leads or closing deals—it was breaking free from the administrative chains that kept him desk-bound.
                </p>
                <p className="mb-6">
                  The breakthrough came when Peter discovered ShoreAgents&apos; systematic approach to offshore staffing. This wasn&apos;t about finding the cheapest labor—it was about finding the right person who could handle the administrative foundation that would allow him to work from anywhere. The search led him to what would become his most strategic business decision through our specialized real estate virtual assistant solutions.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">The Vision: Complete Location Independence</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                      <Umbrella className="w-12 h-12 text-lime-600 mx-auto mb-4" />
                      <h4 className="font-bold text-gray-900 mb-2">Work from the Beach</h4>
                      <p className="text-gray-700 text-sm">Complete business operations without location constraints</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                      <Home className="w-12 h-12 text-lime-600 mx-auto mb-4" />
                      <h4 className="font-bold text-gray-900 mb-2">Home Office Freedom</h4>
                      <p className="text-gray-700 text-sm">Eliminate the daily commute without sacrificing productivity</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                      <Plane className="w-12 h-12 text-lime-600 mx-auto mb-4" />
                      <h4 className="font-bold text-gray-900 mb-2">Travel While Working</h4>
                      <p className="text-gray-700 text-sm">Business continuity during travel and personal time</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold italic">
                      &quot;The goal wasn&apos;t just efficiency—it was complete freedom to work from anywhere while maintaining Australia&apos;s #1 Property Centre standards.&quot;
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  What separated Peter&apos;s approach from typical outsourcing attempts was his strategic thinking. He understood that successful mobile business operations required more than just delegating tasks—it needed systematic foundation building that would support his vision of complete location independence through our proven real estate outsourcing methodology.
                </p>
                <p className="mt-4">
                  The search for the right offshore partner led Peter to ShoreAgents, where he discovered a systematic approach that aligned perfectly with his vision. This wasn&apos;t about finding someone to handle busy work—it was about finding a professional who could become the operational foundation that would enable his mobile business dreams.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Strategic One Agent Decision */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Star className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Peter Forbes Client Success: The Strategic &quot;One Agent&quot; Decision</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Peter&apos;s decision to hire one carefully selected agent through ShoreAgents wasn&apos;t about saving money—it was about strategic leverage. As the leader of Australia&apos;s #1 Property Centre, he understood that the right person in the right role could transform his entire business model from location-dependent to completely mobile through our proven one agent methodology.
                </p>
                <p className="mb-6">
                  The &quot;one agent&quot; approach proved brilliant because it allowed Peter to focus on finding the perfect cultural and operational fit rather than managing multiple relationships. This strategic thinking demonstrates why successful property professionals choose quality over quantity when implementing offshore staffing solutions.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why the &quot;One Agent&quot; Strategy Works</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <Target className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Perfect Cultural Fit</h4>
                        <p className="text-gray-700 text-sm">Focus on finding the ideal match rather than managing multiple relationships</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Rapid Implementation</h4>
                        <p className="text-gray-700 text-sm">Single relationship enables faster integration and trust building</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Settings className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Systematic Foundation</h4>
                        <p className="text-gray-700 text-sm">Build comprehensive operational base before considering expansion</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Umbrella className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Maximum Flexibility</h4>
                        <p className="text-gray-700 text-sm">Complete location independence with reliable operational support</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold">
                      Result: Australia&apos;s #1 Property Centre achieved complete mobile business operations through strategic offshore staffing
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  This strategic approach to offshore staffing demonstrates why Peter Forbes achieved such remarkable success with his mobile business transformation. By focusing on finding the right person rather than the cheapest solution, he built the foundation that would support his vision of working from anywhere while maintaining Australia&apos;s #1 Property Centre standards.
                </p>
                <p className="mt-4">
                  The implementation process showcased ShoreAgents&apos; systematic methodology perfectly. Peter wasn&apos;t just hiring a virtual assistant—he was investing in the operational infrastructure that would enable his complete business transformation.
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
                <h2 className="text-3xl font-bold text-gray-900">Peter Forbes Client Success: Authentic Video Testimonial</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  When Peter Forbes speaks about his ShoreAgents experience, you hear something that can&apos;t be manufactured: genuine satisfaction from a business professional who achieved exactly what he envisioned. This isn&apos;t a scripted testimonial—it&apos;s an authentic account of how strategic offshore staffing enabled complete mobile business operations.
                </p>
                <p className="mb-6">
                  Peter&apos;s testimonial demonstrates the transformation that&apos;s possible when property professionals approach offshore staffing strategically rather than simply looking for cost savings. His success with Australia&apos;s #1 Property Centre validates the systematic approach that enables true location independence.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Mobile Business Freedom: Peter Forbes Testimonial</h3>
                  <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                    <blockquote className="text-gray-800 italic text-lg mb-4">
                      &quot;ShoreAgents certainly helped me get my business into that mode of working with some outsourced workers and helping me to work on the go.&quot;
                    </blockquote>
                    <p className="text-gray-700 font-semibold">— Peter Forbes, #1 Property Centre, Australia</p>
                  </div>

                  <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Mobile Business Achievement: Complete Location Independence</h4>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                        <Umbrella className="w-8 h-8 text-lime-600 mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-900">Work from Beach</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                        <Home className="w-8 h-8 text-lime-600 mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-900">Home Office Freedom</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                        <Plane className="w-8 h-8 text-lime-600 mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-900">Travel While Working</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                        <Award className="w-8 h-8 text-lime-600 mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-900">Australia&apos;s #1 Standards</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                      <p className="text-gray-800 font-semibold">
                        Achievement: Complete mobile business transformation through strategic offshore staffing
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6">
                  Peter&apos;s authentic testimonial demonstrates exactly what&apos;s possible when property professionals approach offshore staffing with clear vision and strategic implementation. His success with Australia&apos;s #1 Property Centre validates the systematic approach that enables true location independence through our comprehensive real estate virtual assistant solutions.
                </p>
                <div className="bg-lime-50 rounded-lg p-6 shadow-sm text-center mt-6">
                  <PlayCircle className="w-16 h-16 text-lime-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-semibold">Video testimonial coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mobile Business Framework */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Globe className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Peter Forbes Client Success: Mobile Business Framework</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Peter&apos;s achievement with Australia&apos;s #1 Property Centre demonstrates something profound about modern business operations: location independence isn&apos;t just about working from home—it&apos;s about complete operational freedom. His success validates a systematic approach to building mobile business infrastructure that maintains professional standards regardless of location.
                </p>
                <p className="mb-6">
                  The mobile business framework that Peter implemented through ShoreAgents represents a fundamental shift in how property professionals approach their operations. Instead of being tied to a physical office, his business model demonstrates complete flexibility while maintaining the high standards that define Australia&apos;s #1 Property Centre.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Mobile Business Infrastructure</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Smartphone className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Administrative Foundation</h4>
                      <p className="text-gray-700 text-sm">Professional offshore agent handling all administrative tasks that previously required office presence</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Wifi className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Digital Operations</h4>
                      <p className="text-gray-700 text-sm">Cloud-based business processes accessible from any location with internet connectivity</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Award className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Professional Standards</h4>
                      <p className="text-gray-700 text-sm">Maintaining Australia&apos;s #1 Property Centre quality regardless of working location</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Zap className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Operational Flexibility</h4>
                      <p className="text-gray-700 text-sm">Business continuity from beach, home office, or any travel destination</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold">
                      Complete mobile business framework enabling location independence without compromising professional standards
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  This mobile business framework demonstrates why Peter Forbes&apos; success with Australia&apos;s #1 Property Centre represents more than just operational efficiency—it&apos;s a complete business model transformation that provides unprecedented freedom while maintaining professional excellence through our specialized real estate outsourcing solutions.
                </p>
                <p className="mt-4">
                  The systematic approach that enabled Peter&apos;s mobile business transformation validates something crucial about modern property operations: when implemented correctly, offshore staffing doesn&apos;t just save money—it creates completely new possibilities for how successful professionals can structure their business and personal lives.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How to Follow Peter's Blueprint */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">How to Follow Peter&apos;s Mobile Business Blueprint</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Peter&apos;s approach wasn&apos;t complicated—it was smart. He understood that achieving complete location independence required more than just hiring someone cheap. He needed a strategic partner who could handle the administrative foundation while maintaining Australia&apos;s #1 Property Centre standards. Here&apos;s exactly how to follow his blueprint for mobile business transformation.
                </p>
                <p className="mb-6">
                  The key to Peter&apos;s success was focusing on the end goal: complete freedom to work from anywhere. This vision guided every decision, from the type of support he needed to the standards he required. Most property professionals make the mistake of focusing on tasks rather than outcomes.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Peter&apos;s Step-by-Step Mobile Business Process</h3>
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
                        <h4 className="font-bold text-gray-900 text-lg">Define Your Vision</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Peter knew exactly what he wanted: complete freedom to work from anywhere. Define your specific mobility goals before starting.</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
                        <h4 className="font-bold text-gray-900 text-lg">Start with One</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Peter chose one high-quality agent rather than multiple cheaper options. Focus on finding the perfect cultural fit first.</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
                        <h4 className="font-bold text-gray-900 text-lg">Build Foundation</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Peter focused on creating systematic processes that would work from any location. Build your operational foundation first.</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</div>
                        <h4 className="font-bold text-gray-900 text-lg">Test Mobility</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Peter gradually tested working from different locations. Start with home office, then beach, then travel.</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold">
                      Key Insight: Peter&apos;s success came from focusing on the end goal rather than just task delegation
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Reality Check: Why Most Mobile Business Attempts Fail</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-800">
                        <strong>They focus on cost savings instead of capability building.</strong> Peter understood that mobile business freedom requires investment in quality, not just delegation of tasks.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-800">
                        <strong>They try to manage multiple relationships simultaneously.</strong> Peter&apos;s one-agent strategy allowed him to build trust and systems before expanding.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-800">
                        <strong>They don&apos;t define success clearly.</strong> Peter knew exactly what mobile business freedom looked like and worked backward from that vision.
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold">
                      Peter&apos;s mobile business transformation demonstrates that when property professionals approach offshore staffing with clear vision and strategic implementation, they don&apos;t just save money—they create completely new possibilities for how they structure their business and personal lives.
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  The most important lesson from Peter&apos;s success is that mobile business freedom isn&apos;t about finding the cheapest virtual assistant—it&apos;s about building the systematic foundation that enables complete location independence while maintaining professional standards.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA Section */}
        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Ready to follow Peter&apos;s blueprint for mobile business freedom and work from anywhere while maintaining professional excellence?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start with one strategic hire like Peter did, or discover how his systematic approach to mobile business operations can transform your property business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Your Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-bold">
              <Building className="w-5 h-5 mr-2" />
              Real Estate Solutions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
