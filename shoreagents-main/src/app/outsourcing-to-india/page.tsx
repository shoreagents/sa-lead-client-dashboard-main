'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin,
  Users,
  TrendingUp,
  CheckCircle,
  Code,
  Award,
  Globe
} from 'lucide-react';
import Image from 'next/image';

export default function OutsourcingToIndiaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="mb-6">
            <Badge className="bg-red-600 text-white px-4 py-2 text-lg">
              ⚠️ CRITICAL: India's Outsourcing Landscape Has Fundamentally Changed
            </Badge>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Outsourcing to India: Evolution, Challenges, and Smart Strategies for 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-4">
            The "outsource everything to India" model is dead. Smart businesses now use strategic outsourcing approaches that leverage India's evolved strengths while avoiding outdated assumptions.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-4">
            <span><strong>Author:</strong> Stephen Atcheler</span>
            <span><strong>Published:</strong> May 19, 2025</span>
            <span><strong>Views:</strong> 1,273</span>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            From undisputed king to strategic specialist – understanding India's new role in global outsourcing
          </p>
          
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=600&fit=crop"
              alt="Modern tech park in Bangalore, India"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg">
              🌐 Explore Global Strategies
            </Button>
            <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg">
              📞 Get Strategic Guidance
            </Button>
          </div>

          {/* Then vs Now Comparison */}
          <Card className="border-lime-200 max-w-4xl mx-auto">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Then vs Now</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">📈</div>
                  <h4 className="font-bold text-gray-900 mb-2">Golden Era (2000-2015)</h4>
                  <p className="text-sm text-gray-700 mb-2">70-80% cost savings, dominated global IT outsourcing</p>
                  <p className="text-sm text-gray-700">Undisputed outsourcing king</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🎯</div>
                  <h4 className="font-bold text-gray-900 mb-2">New Reality (2025)</h4>
                  <p className="text-sm text-gray-700 mb-2">Specialized for enterprise scale, AI/ML, complex systems</p>
                  <p className="text-sm text-gray-700">Strategic specialist destination</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why India */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why India Dominates Global Outsourcing
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  India pioneered the modern outsourcing industry and continues to lead with over $245 billion in IT and BPO exports. Home to tech giants like TCS, Infosys, and Wipro, India has built world-class infrastructure and expertise in software development, engineering services, and business process management.
                </p>
                <p className="mb-8">
                  With 5.4 million+ people employed in the IT-BPO sector and 1.5 million+ engineering graduates per year, India offers unmatched scale and depth of technical talent.
                </p>
              </div>
              
              <div className="bg-lime-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">India Outsourcing Facts:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3" />
                    <span>$245 billion IT-BPO exports (2023)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3" />
                    <span>5.4 million IT-BPO professionals</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3" />
                    <span>1.5 million engineering graduates/year</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3" />
                    <span>67% global outsourcing market share</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Advantages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Top Advantages of Outsourcing to India
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-lime-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Massive Talent Pool</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  World's largest English-speaking technical workforce with deep expertise across all technologies and industries.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• 5.4M IT professionals</li>
                  <li>• 1.5M graduates/year</li>
                  <li>• Strong STEM education</li>
                  <li>• Multilingual capabilities</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-lime-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Technical Excellence</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Decades of experience in complex software development, emerging technologies, and advanced engineering services.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• AI/ML Development</li>
                  <li>• Cloud Computing</li>
                  <li>• Blockchain & Web3</li>
                  <li>• Cybersecurity</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-lime-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Mature Infrastructure</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  World-class tech parks, robust telecommunications, and established legal frameworks for business.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Modern office facilities</li>
                  <li>• Reliable internet</li>
                  <li>• Strong IP protection</li>
                  <li>• Business-friendly policies</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Major Cities */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Top Outsourcing Cities in India
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Bangalore</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>"Silicon Valley of India"</strong>
                  </p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• 1.5M+ IT professionals</li>
                    <li>• Tech startup hub</li>
                    <li>• Major company offices</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Hyderabad</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>"Cyberabad"</strong>
                  </p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Microsoft, Google hubs</li>
                    <li>• Cost-effective option</li>
                    <li>• Growing tech scene</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Pune</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>"IT City"</strong>
                  </p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Manufacturing IT</li>
                    <li>• Automotive sector</li>
                    <li>• Quality education</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Chennai</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>"Detroit of Asia"</strong>
                  </p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• BPO headquarters</li>
                    <li>• Manufacturing hub</li>
                    <li>• Lower costs</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">NCR Delhi</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>"Capital Region"</strong>
                  </p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Gurgaon, Noida</li>
                    <li>• Enterprise clients</li>
                    <li>• Best connectivity</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Mumbai</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>"Financial Capital"</strong>
                  </p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• FinTech services</li>
                    <li>• Banking IT</li>
                    <li>• Media & Entertainment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cost Comparison */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Average Outsourcing Costs in India
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Junior Developer</h3>
                  <div className="text-3xl font-bold text-lime-600 mb-3">$700-1,200</div>
                  <p className="text-gray-600">per month</p>
                  <ul className="mt-4 space-y-2 text-left text-gray-700 text-sm">
                    <li>• 0-2 years experience</li>
                    <li>• Basic programming</li>
                    <li>• Code implementation</li>
                  </ul>
                </div>
                
                <div className="text-center bg-lime-50 rounded-lg p-6 border-2 border-lime-400">
                  <div className="bg-lime-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-2 inline-block">Most Popular</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mid-Level Developer</h3>
                  <div className="text-3xl font-bold text-lime-600 mb-3">$1,500-2,500</div>
                  <p className="text-gray-600">per month</p>
                  <ul className="mt-4 space-y-2 text-left text-gray-700 text-sm">
                    <li>• 3-5 years experience</li>
                    <li>• Full-stack skills</li>
                    <li>• Project leadership</li>
                  </ul>
                </div>
                
                <div className="text-center bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Senior Developer</h3>
                  <div className="text-3xl font-bold text-lime-600 mb-3">$3,000-5,000</div>
                  <p className="text-gray-600">per month</p>
                  <ul className="mt-4 space-y-2 text-left text-gray-700 text-sm">
                    <li>• 6+ years experience</li>
                    <li>• Architecture design</li>
                    <li>• Team management</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Tap Into India's Tech Talent</h2>
          <p className="text-xl mb-8 opacity-90">
            Access the world's largest pool of English-speaking technical professionals. Start building your India team with proven expertise and competitive costs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Hire Indian Developers
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg">
              Compare Costs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

