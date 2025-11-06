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
  Umbrella,
  Mic,
  Radio,
  RadioIcon,
  Play,
  CheckSquare,
  Eye,
  Trophy,
  Medal
} from 'lucide-react';
import Image from 'next/image';

export default function IndustryExpertValidationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-red-600 text-white px-4 py-2 text-lg mb-6">
            INDUSTRY VALIDATION: Derek Gallimore&apos;s Expert Recommendation
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Derek Gallimore Recognition: Industry Authority Validates Real Estate Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            When the world&apos;s leading outsourcing authority personally invites you as their exclusive real estate expert, it&apos;s more than recognition—it&apos;s validation. This Derek Gallimore client success story reveals how ShoreAgents earned the trust of the industry&apos;s most respected voice.
          </p>
          
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
              alt="Outsource Accelerator Operations"
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
                    alt="Outsource Accelerator Logo"
                    width={100}
                    height={100}
                    className="mx-auto rounded-full"
                  />
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  &quot;Anyone in the real estate space should reach out to ShoreAgents – they got it covered and truly know real estate.&quot;
                </blockquote>
                <div className="text-gray-900 font-bold">Derek Gallimore</div>
                <div className="text-gray-600">Outsource Accelerator</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Intro Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Mic className="w-8 h-8 text-lime-600 mr-2" />
            Industry Recognition: Derek Gallimore&apos;s Endorsement
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            How ShoreAgents became the go-to real estate outsourcing expert on the world&apos;s leading BPO platform
          </p>
          <p className="text-lg text-gray-700">
            When Derek Gallimore tells 18,000+ businesses to contact you specifically for real estate outsourcing, it&apos;s not just a recommendation—it&apos;s the industry&apos;s gold standard of approval. Here&apos;s how this Derek Gallimore client success story unfolded.
          </p>
        </div>

        {/* Why This Recognition Matters */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Award className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Derek Gallimore Client Success: Why This Recognition Matters</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Derek Gallimore isn&apos;t just another business consultant. He&apos;s the CEO of Outsource Accelerator, the world&apos;s largest BPO marketplace. For 20 years in business and 8 years specifically in outsourcing, Derek has been living in Manila—the heart of global outsourcing—since 2014. When he speaks, the industry listens.
                </p>
                <p className="mb-6">
                  His platform serves 18,000+ businesses, features 4,000+ outsourcing firms, and has created over $1.1 billion in value. So when Derek personally invites you to share your expertise as their exclusive real estate specialist, it means something significant. That&apos;s exactly what happened with Stephen Atcheler and ShoreAgents.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                      <Users className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                      <div className="text-4xl font-bold text-lime-600 mb-2">18K+</div>
                      <h4 className="font-bold text-gray-900 mb-2">Businesses Served</h4>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                      <DollarSign className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                      <div className="text-4xl font-bold text-lime-600 mb-2">$1.1B</div>
                      <h4 className="font-bold text-gray-900 mb-2">Value Created</h4>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                      <Building className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                      <div className="text-4xl font-bold text-lime-600 mb-2">4K+</div>
                      <h4 className="font-bold text-gray-900 mb-2">BPO Firms</h4>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                      <Mic className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                      <div className="text-4xl font-bold text-lime-600 mb-2">450+</div>
                      <h4 className="font-bold text-gray-900 mb-2">Podcast Episodes</h4>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold">
                      This isn&apos;t about being featured alongside other companies. Derek specifically positioned ShoreAgents as the real estate expert. When someone asks about property sector outsourcing on his platform, there&apos;s one company he points to. That level of trust doesn&apos;t happen overnight—it&apos;s earned through proven results and genuine expertise in virtual assistant services.
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  The endorsement came naturally through Stephen&apos;s authentic expertise and hands-on approach to real estate outsourcing solutions. No pitching, no sales presentations—just recognition of someone who truly understands the industry.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* The Expert Interview */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Headphones className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Derek Gallimore Client Success: The Expert Interview</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Getting invited to Derek&apos;s podcast isn&apos;t like other industry interviews. This isn&apos;t about promoting your business—it&apos;s about sharing genuine expertise that helps thousands of businesses make better outsourcing decisions. Derek only features people who can provide real value to his audience.
                </p>
                <p className="mb-6">
                  Stephen&apos;s episode, &quot;Real Estate Sector Outsourcing,&quot; wasn&apos;t a sales pitch. It was a deep dive into what actually works when outsourcing in the property industry. From his personal experience scaling his own real estate business with offshore staff to the systematic approach ShoreAgents has developed for real estate virtual assistant services.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Real Estate Sector Outsourcing – Expert Interview</h3>
                  <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                    <blockquote className="text-gray-800 italic text-lg mb-4">
                      &quot;Anyone in the real estate space should reach out to ShoreAgents – they got it covered and truly know real estate.&quot;
                    </blockquote>
                    <p className="text-gray-700 font-semibold">— Derek Gallimore, CEO, Outsource Accelerator</p>
                  </div>

                  <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">What Made This Derek Gallimore Client Success Story Special</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-gray-900">Real Experience</h4>
                          <p className="text-gray-700 text-sm">Stephen shared his actual journey from struggling real estate owner to successful outsourcing</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-gray-900">Practical Insights</h4>
                          <p className="text-gray-700 text-sm">Not theory, but actual processes that work for real estate businesses</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Handshake className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-gray-900">No Sales Pitch</h4>
                          <p className="text-gray-700 text-sm">Pure education and honest discussion about what works and what doesn&apos;t</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Home className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-gray-900">Industry Focus</h4>
                          <p className="text-gray-700 text-sm">Deep understanding of real estate specifically, not generic outsourcing advice</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-6">
                  The result? Derek now personally recommends ShoreAgents to anyone asking about real estate outsourcing. That&apos;s not something you can buy or negotiate—it&apos;s earned through genuine expertise and authentic value.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* The Real Impact */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Medal className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Derek Gallimore Client Success: The Real Impact</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  This isn&apos;t just another testimonial or review. When the world&apos;s leading outsourcing authority tells thousands of businesses that you&apos;re the specialist they should contact, it changes everything. Derek&apos;s recommendation carries weight that influences real business decisions across the industry.
                </p>
                <p className="mb-6">
                  Stephen&apos;s background as a real estate professional who actually used offshore staff to scale his own business to 14 salespeople and 400 rentals gives him credibility that Derek values. It&apos;s not theoretical knowledge—it&apos;s practical, tested experience that works in the real world.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Derek Gallimore Client Success Recognition Matters</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <CheckCircle2 className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Authentic Recognition</h4>
                      <p className="text-gray-700 text-sm">Derek&apos;s recommendation comes from witnessing real results and systematic expertise in action</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Award className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Industry Authority</h4>
                      <p className="text-gray-700 text-sm">Derek&apos;s voice influences thousands of business decisions across the global outsourcing industry</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Star className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Proven Expertise</h4>
                      <p className="text-gray-700 text-sm">Recognition based on real results and systematic approach, not marketing claims</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Target className="w-8 h-8 text-lime-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Sector Specialization</h4>
                      <p className="text-gray-700 text-sm">Exclusive positioning as the real estate expert, not just another generic BPO provider</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold">
                      When Derek tells his audience &quot;they got it covered and truly know real estate,&quot; it&apos;s because he&apos;s seen the systematic approach that ShoreAgents brings to the industry. It&apos;s not about being the cheapest or the biggest—it&apos;s about genuinely understanding what real estate businesses need.
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  This Derek Gallimore client success story represents something you can&apos;t manufacture: authentic industry respect earned through proven results and genuine expertise in helping real estate businesses succeed through strategic outsourcing.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Industry Leadership Recognition */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Globe className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Derek Gallimore Client Success: Industry Leadership Recognition</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  What makes this recognition special isn&apos;t just Derek&apos;s influence—it&apos;s the systematic approach that earned it. ShoreAgents didn&apos;t chase this endorsement; it came naturally through consistently delivering results and building genuine expertise in the real estate sector.
                </p>
                <p className="mb-6">
                  From Stephen&apos;s personal experience scaling his own real estate business with offshore staff to the hands-on approach ShoreAgents takes with every client, the recognition reflects a deep understanding of what actually works in real estate outsourcing. It&apos;s this practical knowledge that Derek values and recommends to his global audience.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What This Derek Gallimore Client Success Story Represents</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <Target className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Industry Focus</h4>
                        <p className="text-gray-700 text-sm">Specialized expertise over generic solutions</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Real Results</h4>
                        <p className="text-gray-700 text-sm">Proven track record with actual businesses</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Handshake className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Authentic Approach</h4>
                        <p className="text-gray-700 text-sm">Genuine expertise, not marketing hype</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="w-8 h-8 text-lime-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Global Recognition</h4>
                        <p className="text-gray-700 text-sm">Industry authority validation</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-l-4 border-lime-600 p-4 rounded mt-6">
                    <p className="text-gray-800 font-semibold">
                      Result: When the industry&apos;s leading voice recommends you specifically, it validates everything you&apos;ve built
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  This recognition represents years of building authentic expertise, delivering real results, and maintaining the systematic approach that Derek Gallimore values when recommending specialists to his global network of business decision-makers.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What This Means for Your Business */}
        <div className="mb-16">
          <Card className="border-lime-200 shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Derek Gallimore Client Success: What This Means for Your Business</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  When the world&apos;s leading outsourcing authority personally recommends ShoreAgents to anyone in the real estate space, it&apos;s because he&apos;s seen the systematic approach that consistently delivers results. This isn&apos;t about being the biggest or the cheapest—it&apos;s about genuinely understanding what real estate businesses need to succeed.
                </p>
                <p className="mb-6">
                  Derek&apos;s recommendation carries the weight of his platform&apos;s success: 18,000+ businesses served, $1.1 billion in value created, and 36,000 full-time staff successfully placed. When he tells his audience &quot;they got it covered and truly know real estate,&quot; it represents validation that money can&apos;t buy.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why This Validation Matters for Real Estate Businesses</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Industry Authority Endorsement</h4>
                        <p className="text-gray-700 text-sm">When the world&apos;s leading BPO expert recommends you specifically, it&apos;s validation you can trust</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Proven Real Estate Expertise</h4>
                        <p className="text-gray-700 text-sm">Recognition based on actual results with real estate businesses, not generic claims</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Systematic Approach</h4>
                        <p className="text-gray-700 text-sm">The methodology that earned Derek&apos;s recommendation is the same approach used with every client</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-lime-600 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">Global Platform Validation</h4>
                        <p className="text-gray-700 text-sm">18,000+ businesses trust Derek&apos;s recommendations—that&apos;s the credibility you get</p>
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
          <h2 className="text-4xl font-bold mb-6">Ready to experience the real estate outsourcing expertise that earned Derek Gallimore&apos;s personal recommendation?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the real estate businesses that have discovered why the world&apos;s leading outsourcing authority specifically recommends ShoreAgents for systematic, results-driven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Your Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-bold">
              <Building className="w-5 h-5 mr-2" />
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
