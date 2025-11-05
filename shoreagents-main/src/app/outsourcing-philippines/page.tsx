'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin,
  Users,
  Globe2,
  CheckCircle,
  MessageSquare,
  Star
} from 'lucide-react';
import Image from 'next/image';

export default function OutsourcingPhilippinesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="mb-6">
            <Badge className="bg-red-600 text-white px-4 py-2 text-lg">
              🚨 CRITICAL: 73% of Businesses Are Missing the Philippines Outsourcing Revolution
            </Badge>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Why the Smartest Companies Choose the Philippines for Outsourcing (and Why You Should Too)
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-4">
            <span><strong>Author:</strong> Stephen Atcheler</span>
            <span><strong>Published:</strong> April 16, 2024</span>
            <span><strong>Views:</strong> 5,332</span>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-4">
            Why the Philippines remains the undefeated champion of offshore talent and how to leverage it for competitive advantage
          </p>
          
          {/* Stats Table */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="bg-white rounded-lg shadow-md border border-lime-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-lime-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Metric</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Cost Savings Potential</td>
                    <td className="px-6 py-4 text-sm font-medium text-lime-600">80%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Social Media Usage Globally</td>
                    <td className="px-6 py-4 text-sm font-medium text-lime-600">#1</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">BPO Market Value 2024</td>
                    <td className="px-6 py-4 text-sm font-medium text-lime-600">$40B</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Time Zone Coverage</td>
                    <td className="px-6 py-4 text-sm font-medium text-lime-600">24/7</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            In the evolving landscape of global outsourcing, the Philippines continues to maintain its position as the premier destination for businesses seeking offshore talent. What was once simply a cost-saving measure has transformed into a strategic advantage that forward-thinking companies are leveraging to outpace their competition.
          </p>
          
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&h=600&fit=crop"
              alt="Modern business district in Manila, Philippines"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg">
              Start Outsourcing to Philippines
            </Button>
            <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg">
              See Pricing
            </Button>
          </div>
        </div>

        {/* Complete Outsourcing Strategy Guide CTA */}
        <div className="mb-16">
          <Card className="border-lime-200 bg-lime-50">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                💡 Complete Outsourcing Strategy Guide
              </h2>
              <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                For comprehensive insights into building a successful offshore team strategy, explore our complete outsourcing guide with proven frameworks and implementation strategies.
              </p>
              <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white">
                View Complete Guide
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* The Plot Twist Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            The Plot Twist: When Your Offshore Team Becomes Your Secret Weapon
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-lime-200">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Not Just Cheaper</h3>
                <p className="text-gray-700">
                  The Philippines has evolved from "budget option" to strategic advantage that transforms business operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🌏</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Superpower</h3>
                <p className="text-gray-700">
                  Filipino teams offer a rare blend of Western understanding with Eastern hospitality that creates extraordinary client experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🕐</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Time Zone Magicians</h3>
                <p className="text-gray-700">
                  They'll work while you sleep, or sync perfectly with your hours—your choice for maximum flexibility.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Natives on Steroids</h3>
                <p className="text-gray-700">
                  The most social-media-savvy population also knows how to leverage AI for unprecedented productivity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">❤️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Loyalty Factor</h3>
                <p className="text-gray-700">
                  When treated right, Filipino teams stick around years longer than Western counterparts, creating deep institutional knowledge.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* But Everyone's Going to Vietnam Now */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                "But Everyone's Going to Vietnam Now" — Why Smart Companies Haven't
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Let's cut through the hype cycle. While outsourcing trends come and go, the Philippines has quietly built an infrastructure that newcomers can't match overnight.
                </p>
                <p className="mb-4">
                  Businesses that think strategically—not just tactically—are doubling down on Filipino teams in 2025. From fintech startups in London to e-commerce empires in Sydney, the pattern is clear: when you need teams who get your business culture, communicate naturally, and won't disappear after training, the Philippines remains undefeated.
                </p>
                <p className="mb-4">
                  What's changed isn't the destination—it's what Filipino professionals bring to the table. This isn't your 2010s call center outsourcing anymore.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* The Filipino Advantage */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            The Filipino Advantage: What Other Outsourcing Hubs Can't Touch
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            The 60-80% cost savings? That's just the appetizer. The main course is what makes the Philippines different:
          </p>
          
          <div className="space-y-8">
            <Card className="border-lime-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  1. The English Advantage That's Actually Getting Stronger
                </h3>
                <p className="text-gray-700 mb-4">
                  While English proficiency is declining in some outsourcing hubs, the Philippines maintains its edge with:
                </p>
                <ul className="space-y-3 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>English as the official language of education, business, and government</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Natural American-influenced accents (thanks, history!)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Colloquial understanding of idioms and humor</span>
                  </li>
                </ul>
                <div className="bg-lime-50 rounded-lg p-4 border-l-4 border-lime-600">
                  <p className="text-sm text-gray-700">
                    <strong>Fun Fact:</strong> Many Filipino professionals speak 3+ languages, including regional dialects, making them natural code-switchers between communication styles.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  2. The Culture Hack: Eastern Values, Western Workplace Understanding
                </h3>
                <p className="text-gray-700 mb-4">
                  The secret sauce? Filipino culture blends:
                </p>
                <ul className="space-y-3 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Hospitality and service orientation (the famous Filipino warmth)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Understanding of Western business expectations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Strong work ethic with family-centered values</span>
                  </li>
                </ul>
                <div className="bg-lime-50 rounded-lg p-4 border-l-4 border-lime-600">
                  <p className="text-sm text-gray-700">
                    <strong>Insider Insight:</strong> Filipino teams will often say "yes" to show respect. Great managers learn to ask open-ended questions to get the full picture.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Time Zone Flexibility That Borders on Supernatural
                </h3>
                <p className="text-gray-700 mb-4">
                  Filipino professionals routinely adapt their schedules in ways that would shock Western workers:
                </p>
                <ul className="space-y-3 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>AU/NZ/US time zone coverage without complaint</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Night shifts with full productivity (not just "graveyard survival mode")</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Weekend coverage when required</span>
                  </li>
                </ul>
                <div className="bg-lime-50 rounded-lg p-4 border-l-4 border-lime-600">
                  <p className="text-sm text-gray-700">
                    <strong>Reality Check:</strong> While Filipino teams will adapt to your time zone, showing flexibility yourself creates tremendous loyalty.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Social Media Natives Who Understand Digital Culture
                </h3>
                <p className="text-gray-700 mb-4">
                  The Philippines consistently ranks #1 globally for social media usage time—translating to:
                </p>
                <ul className="space-y-3 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Intuitive understanding of trends and viral content</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Natural ability to write in a contemporary digital voice</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Comfort with memes, GIFs, and visual communication</span>
                  </li>
                </ul>
                <div className="bg-lime-50 rounded-lg p-4 border-l-4 border-lime-600">
                  <p className="text-sm text-gray-700">
                    <strong>Did You Know?</strong> The average Filipino spends over 4 hours daily on social media—making them natural digital communicators and trend spotters.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Meet the 2025 Filipino Professional */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Meet the 2025 Filipino Professional: AI-Powered Problem Solvers
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Forget everything you thought you knew about "virtual assistants." The modern Filipino workforce has undergone a transformation that most businesses haven't caught up to yet.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">The AI Co-Pilot Revolution</h3>
              <p className="text-gray-700 mb-4">
                Today's Filipino professionals don't just handle tasks—they engineer solutions using:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-lime-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">ChatGPT & Claude</p>
                  <p className="text-sm text-gray-700">For research, content creation, and customer responses</p>
                </div>
                <div className="bg-lime-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Midjourney & DALL-E</p>
                  <p className="text-sm text-gray-700">For creating stunning visuals without a design degree</p>
                </div>
                <div className="bg-lime-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Zapier & Make</p>
                  <p className="text-sm text-gray-700">For building complex automations without coding</p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600 mb-8">
                <p className="text-gray-700">
                  <strong>The result?</strong> One Filipino team member in 2025 can accomplish what required 3-4 people just a few years ago. This efficiency is why our One Agent solution has become increasingly popular.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Multi-Tool Professional</h3>
              <p className="text-gray-700 mb-4">
                The most valuable Filipino team members are those who blend multiple skill sets:
              </p>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>The admin assistant who also masters your CRM customization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>The bookkeeper who creates automation workflows for approval processes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>The support specialist who also manages marketing tasks</span>
                </li>
              </ul>
              <div className="bg-lime-50 rounded-lg p-4 border-l-4 border-lime-600">
                <p className="text-sm text-gray-700">
                  <strong>Pro Tip:</strong> When interviewing Filipino talent, ask about their "side skills"—you'll often discover capabilities they don't list on their resume out of modesty. Our recruitment process is designed to discover these hidden talents.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What Can I Actually Outsource */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            "So What Can I Actually Outsource?" — The 2025 Playbook
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            The question isn't what you can outsource anymore—it's what you shouldn't. Here's what's working right now:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="border-lime-200">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Administrative Engine Room</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Email management that feels like you're doing it yourself</li>
                  <li>• Calendar wizardry that optimizes your time automatically</li>
                  <li>• Document creation that follows your exact brand standards</li>
                  <li>• CRM management that keeps your data pristine without nagging</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Financial Machine</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bookkeeping so accurate your accountant will be impressed</li>
                  <li>• Accounts payable/receivable with relentless follow-up</li>
                  <li>• Financial reporting that tells stories, not just numbers</li>
                  <li>• Expense tracking that catches errors and patterns</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Marketing Force Multiplier</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Content creation that actually sounds like your brand voice</li>
                  <li>• Social media management that builds engagement, not just posts</li>
                  <li>• Graphic design that doesn't scream "template"</li>
                  <li>• SEO implementation with measurable ranking improvements</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Industry-Specific Game Changers</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Construction:</strong> Bid prep, material takeoffs, CAD work</li>
                  <li>• <strong>Financial Services:</strong> Client reporting, compliance checking</li>
                  <li>• <strong>Real Estate:</strong> Inventory mgmt, customer communication</li>
                  <li>• <strong>Marketing Agencies:</strong> Design, content, technical talent</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-lime-50 rounded-lg p-6 border-l-4 border-lime-600">
            <p className="text-gray-700">
              According to the IT and Business Process Association of the Philippines (IBPAP), the industry is projected to reach $40 billion in revenue by the end of 2024, demonstrating the sector's continued growth and vitality.
            </p>
          </div>
        </div>

        {/* The Outsourcing Cage Match */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            The Outsourcing Cage Match: Philippines vs. India vs. Vietnam
          </h2>
          
          <div className="space-y-8">
            <Card className="border-lime-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Philippines vs. India: Why It's Not Even Close for Most Functions
                </h3>
                <p className="text-gray-700 mb-6">
                  Outsourcing to India excels in hardcore coding and development, but for most business operations, the Philippines wins by knockout:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-lime-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3">🇵🇭 Philippines Advantage</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li><strong>English Communication:</strong> Natural Western phrasing</li>
                      <li><strong>Cultural Alignment:</strong> Intuitive understanding of Western expectations</li>
                      <li><strong>Time Zone Compatibility:</strong> Willingness to work AU/US/NZ hours</li>
                      <li><strong>Retention:</strong> 2-3x longer average tenure when treated well</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3">🇮🇳 India Best For</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li><strong>Technical Development:</strong> Hardcore coding and software engineering</li>
                      <li><strong>Large IT Projects:</strong> Complex system development</li>
                      <li><strong>Specialized Tech:</strong> Advanced programming needs</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                  <p className="text-sm text-gray-700">
                    <strong>The Verdict:</strong> For technical development, consider India. For everything else involving communication and client experience, the Philippines dominates.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Philippines vs. Vietnam: The Up-and-Comer That's Not There Yet
                </h3>
                <p className="text-gray-700 mb-6">
                  Outsourcing to Vietnam is ascending rapidly as an outsourcing destination, but the Philippines maintains critical advantages:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-lime-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3">🇵🇭 Philippines Edge</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li><strong>BPO Infrastructure:</strong> Decades-long head start</li>
                      <li><strong>English Fluency:</strong> Dramatically higher across all regions</li>
                      <li><strong>Cultural Understanding:</strong> Takes generations to develop</li>
                      <li><strong>Proven Systems:</strong> Immediate results with established processes</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3">🇻🇳 Vietnam Strengths</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li><strong>Cost:</strong> Slightly lower in some cases</li>
                      <li><strong>Technical Education:</strong> Strong STEM focus</li>
                      <li><strong>Growth:</strong> Rapidly developing capabilities</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                  <p className="text-sm text-gray-700">
                    <strong>The Verdict:</strong> Vietnam is promising but still developing. The Philippines offers immediate results with proven systems.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-lime-50 rounded-lg p-6 border-l-4 border-lime-600">
              <p className="text-gray-700">
                <strong>Pro Tip:</strong> Many businesses use a hybrid approach with an outsourcing company for customer-facing roles in the Philippines while using other countries for technical development.
              </p>
            </div>
          </div>
        </div>

        {/* Getting Started Blueprint */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The "Getting Started" Blueprint: How Not to Mess This Up
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Not all outsourcing experiences are created equal. Follow this battle-tested approach to join the winners' circle:
              </p>

              <div className="space-y-6">
                <div className="bg-lime-50 rounded-lg p-6 border-l-4 border-lime-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1. The Role Autopsy</h3>
                  <p className="text-gray-700 mb-3">
                    Perform a thorough dissection of the functions you're considering outsourcing:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Which processes follow clear patterns that could be documented?</li>
                    <li>• Which activities don't require physical presence or local knowledge?</li>
                  </ul>
                  <div className="mt-4 bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Insider Tip:</strong> Start with roles where success is easily measured—transaction processing, data entry, or specific creative outputs. Save complex, judgment-heavy roles for round two.
                    </p>
                  </div>
                </div>

                <div className="bg-lime-50 rounded-lg p-6 border-l-4 border-lime-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2. Finding Your Match</h3>
                  <p className="text-gray-700 mb-3">
                    Not all outsourcing providers are created equal. Look for:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Physical facilities with backup infrastructure (not just home-based staff)</li>
                    <li>• Rigorous security protocols for data and communication</li>
                    <li>• Proven recruitment capabilities in your specific functions</li>
                  </ul>
                </div>

                <div className="bg-lime-50 rounded-lg p-6 border-l-4 border-lime-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3. Onboarding That Actually Works</h3>
                  <p className="text-gray-700 mb-3">
                    The difference between success and frustration often comes down to:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Investing in detailed process documentation (yes, record those videos!)</li>
                    <li>• Providing access to all necessary resources from day one</li>
                    <li>• Clarifying communication expectations and channels upfront</li>
                  </ul>
                </div>

                <div className="bg-lime-50 rounded-lg p-6 border-l-4 border-lime-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4. Ongoing Management Mastery</h3>
                  <p className="text-gray-700 mb-3">
                    Long-term success requires systematic attention to:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Regular video communication (faces matter)</li>
                    <li>• Clear task prioritization and visibility</li>
                    <li>• Performance metrics that emphasize outcomes, not just activity</li>
                  </ul>
                  <div className="mt-4 bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Cultural Insight:</strong> Filipino professionals value relationships and recognition. Small gestures like remembering birthdays or family details create extraordinary loyalty.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top 5 Questions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Top 5 Questions Smart Business Leaders Ask Before Diving In
          </h2>
          
          <div className="space-y-6">
            <Card className="border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q: "Is this only for big companies with massive budgets?"
                </h3>
                <p className="text-gray-700">
                  <strong>A:</strong> Quite the opposite. While enterprises use Philippine outsourcing at scale, small businesses and even solopreneurs often benefit most. Starting with just one offshore team member can free up 15-20 hours of your week.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q: "How do I handle the time zone difference without losing my mind?"
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>A:</strong> Two approaches work exceptionally well:
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• <strong>The Overlap Method:</strong> Filipino staff work hours that create 3-4 hours of overlap with your workday for real-time collaboration.</li>
                  <li>• <strong>The Night Shift Magic:</strong> Your tasks get completed while you sleep, ready for review when you start your day.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q: "What about Filipino holidays and cultural differences?"
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>A:</strong> The Philippines has about 10-12 public holidays annually. Top providers:
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• Provide holiday calendars months in advance</li>
                  <li>• Offer coverage options during critical business periods</li>
                  <li>• Help you understand cultural nuances that strengthen relationships</li>
                </ul>
                <div className="mt-4 bg-lime-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Cultural Pro Tip:</strong> Filipinos value harmony and may be reluctant to say "no" directly. Rather than asking "Do you understand?", ask "How would you approach this task?" to gauge true comprehension.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q: "Can offshore staff access my sensitive systems securely?"
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>A:</strong> Yes, through properly configured secure access methods:
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• VPN connections with multi-factor authentication</li>
                  <li>• Remote desktop protocols with session monitoring</li>
                  <li>• Role-based access controls limiting system exposure</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Q: "What happens if my business needs change suddenly?"
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>A:</strong> The flexibility of Philippine outsourcing is one of its greatest strengths:
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• Scale up by adding team members with 2-4 weeks' notice</li>
                  <li>• Adjust roles and responsibilities as business needs evolve</li>
                  <li>• Implement cross-training to handle seasonal fluctuations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Ready to Leverage */}
        <div className="mb-16">
          <Card className="border-lime-200 bg-gradient-to-br from-lime-50 to-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Leverage the Philippines Advantage?
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                2025 is the tipping point. While your competitors struggle with outdated approaches, you can gain the AI-powered Filipino team advantage that scales your business without the headaches.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg">
                  Book a Strategy Call
                </Button>
                <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg">
                  See How One Agent Works
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* The Bottom Line */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Bottom Line: Why 2025 Is the Tipping Point
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  The future belongs to businesses who understand that what is outsourcing is no longer just about cost savings—it's about gaining capabilities your competitors don't have.
                </p>
                <p className="mb-4">
                  In 2025, as AI-enabled teams become the norm, the dividing line between businesses that scale and those that stagnate often comes down to who has built the right offshore capabilities. The Philippines offers a unique blend of human talent and technological adoption that creates compound advantages.
                </p>
                <p className="mb-4">
                  The smartest move? Start small, document thoroughly, communicate clearly, and scale strategically. Your competitors will be left wondering how you're outperforming them with a smaller local team and better client experience.
                </p>
                <p className="mb-6">
                  Want to see why our clients consistently rate us 5 stars in our reviews? Ready to explore how Philippine outsourcing could transform your business operations?
                </p>
                <div className="text-center">
                  <p className="text-2xl font-bold text-lime-600 mb-6">
                    Let's talk strategy, not just staffing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Build Your Philippine Team Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Access the world's best English-speaking offshore talent. ShoreAgents operates in Clark Freeport with proven expertise in building successful Philippine teams that transform businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

