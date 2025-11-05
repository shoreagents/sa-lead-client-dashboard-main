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
  DollarSign,
  Award,
  Globe
} from 'lucide-react';
import Image from 'next/image';

export default function OutsourcingToVietnamPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="mb-6">
            <Badge className="bg-red-600 text-white px-4 py-2 text-lg">
              🚨 CRITICAL: 73% of Businesses Miss Vietnam's Outsourcing Advantage
            </Badge>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Vietnam's Outsourcing Revolution: The Rising Star of Southeast Asia
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-4">
            While competitors focus on traditional destinations, smart businesses leverage Vietnam's specialized tech ecosystem for 70-90% cost savings with world-class quality in specific domains.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-4">
            <span><strong>Author:</strong> Stephen Atcheler</span>
            <span><strong>Published:</strong> May 19, 2025</span>
            <span><strong>Views:</strong> 1,206</span>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            From manufacturing hub to tech powerhouse – why Vietnam is the outsourcing destination smart businesses can't ignore
          </p>
          
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&h=600&fit=crop"
              alt="Modern cityscape of Ho Chi Minh City, Vietnam"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg">
              🎯 Explore Global Solutions
            </Button>
            <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg">
              📞 Discuss Your Strategy
            </Button>
          </div>

          {/* Stats Table */}
          <Card className="border-lime-200 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-semibold text-gray-900">Software Developers</td>
                      <td className="py-3 px-4 text-right text-lime-700 font-bold">530K+</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-semibold text-gray-900">Cost Savings vs Western Markets</td>
                      <td className="py-3 px-4 text-right text-lime-700 font-bold">70-90%</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-semibold text-gray-900">Annual STEM Graduates</td>
                      <td className="py-3 px-4 text-right text-lime-700 font-bold">400K+</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-gray-900">Global Math & Science Rankings</td>
                      <td className="py-3 px-4 text-right text-lime-700 font-bold">TOP 10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Personal Story */}
        <div className="mb-16">
          <Card className="border-lime-200 bg-blue-50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Vietnam Caught My Attention
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  After building ShoreAgents with 500+ successful placements primarily in the Philippines, I started noticing something interesting. Clients were asking about Vietnam for specific technical projects – not as a replacement for their Filipino teams, but as a complement.
                </p>
                <p className="mb-6">
                  What I discovered surprised me. While the Philippines excels at comprehensive outsourcing solutions and cultural integration, Vietnam has built something different – a specialized tech ecosystem that's particularly strong in development, engineering, and creative production.
                </p>
                <p className="mb-8">
                  This guide shares what I've learned about Vietnam's unique position in the global outsourcing landscape and when it makes strategic sense for businesses to leverage Vietnamese talent alongside or instead of other destinations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Evolution Section */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Vietnam's Outsourcing Evolution: Beyond the Rice Paddies
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Forget what you think you know about Vietnam. The country that was once synonymous with rice fields and manufacturing has undergone a remarkable transformation that few Western businesses have fully appreciated.
              </p>

              <div className="space-y-6">
                <div className="bg-lime-50 border-l-4 border-lime-600 p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">From Manufacturing Hub to Tech Powerhouse</h3>
                  <p className="text-gray-700">
                    While the outsourcing spotlight has traditionally focused on India and the Philippines, Vietnam has been building something different – a specialized tech ecosystem that's particularly strong in development, engineering, and creative production.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Specialization Over Generalization</h3>
                  <p className="text-gray-700">
                    In 2025, Vietnam isn't trying to be everything to everyone. Instead, it's excelling in specific niches where it can genuinely compete with – and often outperform – more established outsourcing destinations.
                  </p>
                  <p className="text-gray-700 mt-3">
                    This focused approach makes Vietnam an excellent complement to comprehensive outsourcing strategies that leverage multiple global talent pools for different functions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Advantages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Vietnam for Outsourcing: Key Advantages
          </h2>
          
          <div className="space-y-8">
            <Card className="border-lime-200">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-lime-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">STEM Education Revolution</h3>
                    <p className="text-gray-700 mb-4">
                      Vietnam's universities are producing over 400,000 STEM and IT graduates annually with curriculum increasingly aligned with global tech standards. The country's approximately 530,000 developers predominantly belong to Gen Z and Millennial generations, bringing fresh perspectives and modern technical skills.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Competitive programming embedded in high school curricula</li>
                      <li>• Technical English mandatory in university IT programs</li>
                      <li>• International tech certifications government-subsidized</li>
                      <li>• Code competitions and hackathons attract corporate sponsorship</li>
                    </ul>
                    <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4">
                      <p className="text-sm font-semibold text-gray-900">Surprising Fact:</p>
                      <p className="text-sm text-gray-700">Vietnamese students routinely rank in the top 10 globally in international math and science competitions, outperforming many Western nations.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-lime-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Compelling Cost-to-Quality Ratio</h3>
                    <p className="text-gray-700 mb-4">
                      Vietnam offers exceptional value that makes financial sense for businesses looking to optimize their outsourcing investments:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 70-90% labor cost savings compared to US/AU/EU rates</li>
                      <li>• 30-50% less expensive than equivalent Indian development talent</li>
                      <li>• Lower operational overhead than major Indian tech hubs</li>
                      <li>• Significantly lower staff turnover rates than competing markets</li>
                    </ul>
                    <div className="mt-4 bg-green-50 border-l-4 border-green-600 p-4">
                      <p className="text-sm font-semibold text-gray-900">Cost Reality:</p>
                      <p className="text-sm text-gray-700">A senior developer with 7+ years experience costs $45,000-55,000 annually in Vietnam versus $140,000+ in the US or Australia.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-lime-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Government-Backed Infrastructure Investment</h3>
                    <p className="text-gray-700 mb-4">
                      The Vietnamese government has recognized technology as a strategic growth pillar, with massive investments creating world-class infrastructure:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Purpose-built technology parks in major cities with world-class connectivity</li>
                      <li>• Tax incentives specifically targeting IT outsourcing businesses</li>
                      <li>• Digital infrastructure development prioritized in national budget</li>
                      <li>• Streamlined business registration for technology service providers</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-lime-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Cultural Work Ethic That Delivers Results</h3>
                    <p className="text-gray-700 mb-4">
                      Beyond technical skills, Vietnamese professionals bring distinctive cultural strengths:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Detail-oriented approach to technical specifications</li>
                      <li>• Strong commitment to meeting deadlines and deliverables</li>
                      <li>• Natural aptitude for visual design and creative execution</li>
                      <li>• Mathematically rigorous problem-solving methodology</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Top Services */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Top Services for Outsourcing to Vietnam
              </h2>
              <p className="text-gray-700 mb-8">
                Vietnam isn't trying to compete with comprehensive outsourcing solutions across every function. Instead, it has developed specialized excellence in specific domains:
              </p>

              <div className="space-y-6">
                <div className="bg-lime-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Software Development Excellence</h3>
                  <p className="text-gray-700 mb-4">Vietnamese development teams excel in:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Full-stack web application development</li>
                    <li>• Mobile app development (especially Android)</li>
                    <li>• Game development and graphics programming</li>
                    <li>• QA testing and automated test script development</li>
                  </ul>
                  <div className="mt-4 bg-blue-50 border-l-4 border-blue-600 p-4">
                    <p className="text-sm font-semibold text-gray-900">Real-World Impact:</p>
                    <p className="text-sm text-gray-700">Several unicorn startups have built their entire engineering foundations on Vietnamese development teams, including major fintech and e-commerce platforms.</p>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative Production at Scale</h3>
                  <p className="text-gray-700 mb-4">Vietnam has become a go-to hub for:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• UI/UX implementation and design systems</li>
                    <li>• Graphic design production work</li>
                    <li>• Video editing and post-production</li>
                    <li>• 3D modeling and architectural visualization</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Processing Excellence</h3>
                  <p className="text-gray-700 mb-4">For businesses drowning in data, Vietnamese teams provide:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Data entry with exceptional accuracy rates</li>
                    <li>• Research and data mining capabilities</li>
                    <li>• Data scraping and processing</li>
                    <li>• Basic data analysis and reporting</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Limitations */}
        <div className="mb-16">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Limitations When Outsourcing to Vietnam
              </h2>
              <p className="text-gray-700 mb-8">
                No outsourcing destination is perfect for every function. Understanding Vietnam's current limitations helps you make better strategic decisions:
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-bold text-red-700 mb-3">Voice Communication Challenges</h3>
                  <p className="text-gray-700 mb-3">While written English proficiency is strong, Vietnam still faces hurdles with:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Accents that can be challenging for Western ears in real-time conversation</li>
                    <li>• Limited experience with customer-facing voice communication</li>
                    <li>• Fewer professionals with advanced English fluency compared to the Philippines</li>
                  </ul>
                  <p className="text-gray-700 mt-3 italic">This makes Vietnam less suitable for call center operations or roles requiring extensive verbal client interaction.</p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-bold text-red-700 mb-3">Cultural Communication Differences</h3>
                  <p className="text-gray-700 mb-3">Vietnamese business culture brings certain considerations:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• More formal communication style than Western businesses might expect</li>
                    <li>• Tendency to avoid raising potential problems out of respect</li>
                    <li>• Less experience with direct negotiation or disagreement</li>
                    <li>• Higher context communication requiring reading between the lines</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-bold text-red-700 mb-3">Industry-Specific Knowledge Gaps</h3>
                  <p className="text-gray-700 mb-3">While excelling in tech and operations, Vietnam has less developed expertise in:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Specialized real estate outsourcing workflows</li>
                    <li>• Property management systems and processes</li>
                    <li>• Complex financial services compliance requirements</li>
                    <li>• Insurance and healthcare domain knowledge</li>
                  </ul>
                  <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <p className="text-sm font-semibold text-gray-900">Strategic Note:</p>
                    <p className="text-sm text-gray-700">Vietnam can handle technical aspects like website maintenance and visual content creation, but may struggle with specialized industry platforms that are second nature to teams in established outsourcing markets.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vietnam vs Philippines */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Vietnam vs Philippines: Strategic Decision Guide
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                The smart play isn't choosing between Vietnam and the Philippines – it's knowing when to leverage each destination's unique strengths within your comprehensive outsourcing strategy:
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                  <h3 className="text-2xl font-bold text-blue-700 mb-4">🇻🇳 When Vietnam Makes Sense</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Building software products or technical features</li>
                    <li>• Executing creative production work at scale</li>
                    <li>• Data-heavy processing with minimal client interaction</li>
                    <li>• Technical projects with clear specifications</li>
                    <li>• Cost-sensitive development work</li>
                  </ul>
                </div>

                <div className="bg-lime-50 border-l-4 border-lime-600 p-6">
                  <h3 className="text-2xl font-bold text-lime-700 mb-4">🇵🇭 When Philippines Has the Edge</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Customer-facing roles requiring natural English</li>
                    <li>• Administrative functions needing cultural alignment</li>
                    <li>• Daily operations in your business systems</li>
                    <li>• AI-augmented workflows requiring digital fluency</li>
                    <li>• Industry-specific processes like real estate operations</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-600 p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Strategic Approach:</h4>
                <p className="text-gray-700">
                  Many forward-thinking businesses create hybrid models – leveraging Vietnamese talent for development and technical work while using Filipino teams for client-facing and operational roles.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Building Strategy */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Building Your Vietnam Outsourcing Strategy
              </h2>
              <p className="text-gray-700 mb-8">
                If you're considering tapping into Vietnam's talent advantages, follow this strategic approach:
              </p>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Function Fit Analysis</h3>
                  <p className="text-gray-700 mb-3">Evaluate which business functions align with Vietnam's strengths:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Which roles require heavy technical expertise?</li>
                    <li>• Which functions involve minimal voice communication?</li>
                    <li>• Which tasks have clear inputs and outputs?</li>
                    <li>• Which activities could benefit from Vietnam's cost advantage?</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Partner Selection</h3>
                  <p className="text-gray-700 mb-3">Not all Vietnamese providers are created equal:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Focus on firms in Ho Chi Minh City, Hanoi, or Da Nang</li>
                    <li>• Look for established companies with Western client experience</li>
                    <li>• Verify English proficiency among management team</li>
                    <li>• Ask about technical infrastructure and security protocols</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Pilot Project Approach</h3>
                  <p className="text-gray-700 mb-3">Begin with a manageable test case:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Define specific project with clear success metrics</li>
                    <li>• Create detailed documentation and requirements</li>
                    <li>• Establish communication protocols and tools</li>
                    <li>• Set regular checkpoints and review cycles</li>
                  </ul>
                  <div className="mt-4 bg-lime-50 border-l-4 border-lime-600 p-4">
                    <p className="text-sm font-semibold text-gray-900">Pro Tip:</p>
                    <p className="text-sm text-gray-700">Start with contained projects that have well-defined deliverables rather than ongoing operational roles when testing Vietnam partnerships.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Future Outlook */}
        <div className="mb-16">
          <Card className="border-lime-200 bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Vietnam's Outsourcing Future: Growth Trajectory
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Vietnam's trajectory in the outsourcing world is pointing decisively upward, with massive FDI increases and emerging capabilities that smart businesses should monitor:
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-700 mb-4">Emerging Strengths to Watch</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• AI and machine learning talent developing rapidly</li>
                    <li>• Blockchain and cryptocurrency expertise growing</li>
                    <li>• Data science capabilities expanding quickly</li>
                    <li>• Engineering and design thinking skills evolving</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-bold text-orange-700 mb-4">Expected Challenges</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Rising costs as market matures (still well below Western rates)</li>
                    <li>• Increasing competition for top talent from multinationals</li>
                    <li>• Growing demand outpacing English language skill development</li>
                    <li>• Infrastructure needs in secondary cities beyond major hubs</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-white border-l-4 border-lime-600 p-6">
                <p className="text-gray-700">
                  The smart approach is building relationships now while Vietnam's capabilities are still emerging, positioning your business to benefit from this growth trajectory as part of a broader global outsourcing strategy.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Conclusion */}
        <div className="mb-16">
          <Card className="border-lime-200 bg-lime-50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Vietnam's Strategic Role in Global Outsourcing
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                The future doesn't belong to businesses that pick a single outsourcing destination – it belongs to those who strategically leverage the unique strengths of different locations.
              </p>
              <p className="text-lg text-gray-700">
                Vietnam represents an exceptional opportunity for technical functions, creative production, and data processing, while the Philippines continues to excel in customer service, administrative support, and operations requiring Western cultural alignment. The winning move? Build a diversified strategy that taps the best of both worlds.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Leverage Vietnam's Tech Advantage?</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how Vietnam's specialized tech ecosystem can complement your existing outsourcing strategy with world-class development talent at 70-90% cost savings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg">
              🎯 Explore Global Solutions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg">
              📞 Discuss Your Strategy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

