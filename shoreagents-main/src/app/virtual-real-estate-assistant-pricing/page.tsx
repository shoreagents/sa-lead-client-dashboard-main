'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign,
  Calculator,
  TrendingUp,
  CheckCircle,
  Home,
  Users
} from 'lucide-react';
import Image from 'next/image';

export default function VirtualRealEstateAssistantPricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="mb-6">
            <Badge className="bg-red-600 text-white px-4 py-2 text-lg">
              💰 CRITICAL: 89% of Real Estate Businesses Overpay for Virtual Assistants
            </Badge>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Virtual Real Estate Assistant Pricing: 7 Countries Compared (Save 65% in 2025)
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-4">
            Understanding virtual real estate assistant pricing is crucial for cost-effective growth. Smart agencies save 60-78% while getting better quality through strategic partnerships.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-4">
            <span><strong>Author:</strong> Stephen Atcheler</span>
            <span><strong>Published:</strong> July 5, 2024</span>
            <span><strong>Views:</strong> 4,491</span>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Comprehensive pricing analysis, cost comparisons, and strategic guidance for real estate professionals
          </p>
          
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=600&fit=crop"
              alt="Financial planning and cost analysis"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg">
              Calculate Your Savings
            </Button>
            <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg">
              Get Custom Quote
            </Button>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Real Estate VA Pricing Tiers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-lime-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Entry-Level VA</h3>
                <div className="text-4xl font-bold text-lime-600 mb-4">$879</div>
                <p className="text-gray-600 mb-6">USD monthly</p>
                <div className="text-left space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Basic administrative tasks</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Data entry & CRM management</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Appointment scheduling</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Email & phone support</span>
                  </div>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white">Get Started</Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-lime-400">
              <CardContent className="p-6 text-center">
                <Badge className="bg-lime-600 text-white mb-3">Most Popular</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mid-Level VA</h3>
                <div className="text-4xl font-bold text-lime-600 mb-4">$1,161</div>
                <p className="text-gray-600 mb-6">USD monthly</p>
                <div className="text-left space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Transaction coordination</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Listing management & MLS</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Lead follow-up & nurturing</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Social media management</span>
                  </div>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white">Most Popular</Button>
              </CardContent>
            </Card>
            
            <Card className="border-lime-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Senior VA</h3>
                <div className="text-4xl font-bold text-lime-600 mb-4">$1,443</div>
                <p className="text-gray-600 mb-6">USD monthly</p>
                <div className="text-left space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Complete transaction management</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Client relationship management</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Marketing campaign execution</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Team coordination & training</span>
                  </div>
                </div>
                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white">Premium Option</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Local Hire vs Virtual Assistant: Cost Comparison
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-lime-600">
                      <th className="text-left p-4 font-bold text-gray-900">Expense Type</th>
                      <th className="text-right p-4 font-bold text-gray-900">Local Hire (US)</th>
                      <th className="text-right p-4 font-bold text-lime-700">Virtual Assistant</th>
                      <th className="text-right p-4 font-bold text-green-700">Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 text-gray-700">Base Salary</td>
                      <td className="p-4 text-right text-gray-700">$3,500/mo</td>
                      <td className="p-4 text-right text-gray-700">$1,161/mo</td>
                      <td className="p-4 text-right text-green-700 font-bold">$2,339/mo</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 text-gray-700">Benefits & Taxes (30%)</td>
                      <td className="p-4 text-right text-gray-700">$1,050/mo</td>
                      <td className="p-4 text-right text-gray-700">$0</td>
                      <td className="p-4 text-right text-green-700 font-bold">$1,050/mo</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 text-gray-700">Office Space & Equipment</td>
                      <td className="p-4 text-right text-gray-700">$800/mo</td>
                      <td className="p-4 text-right text-gray-700">$0</td>
                      <td className="p-4 text-right text-green-700 font-bold">$800/mo</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 text-gray-700">Recruitment & Training</td>
                      <td className="p-4 text-right text-gray-700">$300/mo</td>
                      <td className="p-4 text-right text-gray-700">$0</td>
                      <td className="p-4 text-right text-green-700 font-bold">$300/mo</td>
                    </tr>
                    <tr className="border-t-2 border-lime-600 bg-lime-50">
                      <td className="p-4 font-bold text-gray-900">TOTAL MONTHLY COST</td>
                      <td className="p-4 text-right font-bold text-gray-900">$5,650</td>
                      <td className="p-4 text-right font-bold text-lime-700">$1,161</td>
                      <td className="p-4 text-right font-bold text-green-700 text-xl">$4,489/mo</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="p-4 font-bold text-gray-900">ANNUAL SAVINGS</td>
                      <td className="p-4 text-right text-gray-700">$67,800</td>
                      <td className="p-4 text-right text-gray-700">$13,932</td>
                      <td className="p-4 text-right font-bold text-green-700 text-2xl">$53,868</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 bg-lime-50 rounded-lg p-6 text-center">
                <p className="text-2xl font-bold text-lime-700 mb-2">
                  Save $53,868 per year (79% cost reduction)
                </p>
                <p className="text-gray-700">
                  Based on mid-level real estate virtual assistant vs. local US hire
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What's Included */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What's Included in Your Investment
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Infrastructure</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Professional office space with dedicated workstation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Enterprise-grade computer & dual monitors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">High-speed fiber internet with backup</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">24/7 security and biometric access</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Backup power systems & generators</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Management & Support</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Complete salary & statutory benefits</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Recruitment & initial training</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Performance monitoring & reporting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">HR support & conflict resolution</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Legal compliance & payroll processing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ROI Calculator CTA */}
        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Calculate Your Exact Savings</h2>
          <p className="text-xl mb-8 opacity-90">
            See how much you can save by hiring a virtual real estate assistant. Get a personalized cost breakdown and ROI analysis for your specific needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Use ROI Calculator
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

