'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  CheckCircle, 
  ArrowRight,
  DollarSign,
  Zap,
  Phone,
  HelpCircle,
  Calculator,
  BarChart,
  TrendingUp,
  FileText,
  Shield,
  ClipboardList,
  PieChart,
  X
} from 'lucide-react';
import Image from 'next/image';

export default function AccountingVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Accounting Virtual Assistant: Professional Financial Management & Analysis
          </h1>

          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop"
              alt="Professional accounting virtual assistant analyzing financial reports and statements"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Certified accounting professionals who manage financial reporting, analysis, tax preparation, and strategic planning—delivering CPA-level expertise at 68% cost savings.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Book a Strategy Call
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg font-semibold">
              How It Works
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg font-semibold">
              See Pricing
              <DollarSign className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <Zap className="w-8 h-8 text-lime-600 mr-3" />
            Accounting Excellence Delivered
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="border-lime-200 bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">99.9%</div>
                <div className="text-gray-600 font-medium text-sm">Accuracy Rate</div>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">68%</div>
                <div className="text-gray-600 font-medium text-sm">Cost Savings</div>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">CPA</div>
                <div className="text-gray-600 font-medium text-sm">Level Expertise</div>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium text-sm">Financial Support</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What Is Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Calculator className="w-8 h-8 text-lime-600 mr-3" />
            What Is an Accounting Virtual Assistant?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            An accounting virtual assistant is a certified accounting professional who provides comprehensive financial management, analysis, and strategic guidance remotely. These specialists bring advanced accounting knowledge, CPA-level expertise, and strategic financial insight to help your business make informed decisions and optimize financial performance.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Unlike bookkeepers who focus on transaction recording, accounting VAs provide higher-level financial analysis, strategic planning, tax strategy, financial forecasting, and CFO-level insights. They become trusted financial advisors who understand your business goals and provide guidance that drives profitability and growth.
          </p>
        </div>

        {/* Services Section */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Comprehensive Accounting Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <BarChart className="w-10 h-10 text-lime-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Reporting & Analysis</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Financial statement preparation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Variance analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>KPI tracking & dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Financial trend analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Shield className="w-10 h-10 text-lime-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tax Planning & Preparation</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Tax strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Tax return preparation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Tax compliance monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Deduction optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <TrendingUp className="w-10 h-10 text-lime-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Budget & Forecasting</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Annual budget development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Financial forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Cash flow projections</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Scenario planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <FileText className="w-10 h-10 text-lime-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Audit & Compliance</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Internal audit support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>External audit preparation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Compliance documentation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Process improvement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <PieChart className="w-10 h-10 text-lime-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Analysis & Control</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Cost-benefit analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Expense optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Profitability analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Cost reduction strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <ClipboardList className="w-10 h-10 text-lime-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Financial Planning</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>CFO-level strategic guidance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Investment analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Risk management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Growth strategy support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <DollarSign className="w-8 h-8 text-lime-600 mr-3" />
            The Cost Advantage
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <X className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Local Staff Accountant</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Annual Salary:</span>
                    <span className="font-bold text-gray-900">$72,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Benefits (30%):</span>
                    <span className="font-bold text-gray-900">$21,600</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Software & Training:</span>
                    <span className="font-bold text-gray-900">$5,400</span>
                  </div>
                  <hr className="border-red-300" />
                  <div className="flex justify-between text-xl">
                    <span className="font-bold text-gray-900">Total Annual Cost:</span>
                    <span className="font-bold text-red-600">$99,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-lime-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Accounting Virtual Assistant</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Annual Cost:</span>
                    <span className="font-bold text-gray-900">$31,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Software (included):</span>
                    <span className="font-bold text-gray-900">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Management (included):</span>
                    <span className="font-bold text-gray-900">$0</span>
                  </div>
                  <hr className="border-lime-300" />
                  <div className="flex justify-between text-xl">
                    <span className="font-bold text-gray-900">Total Annual Cost:</span>
                    <span className="font-bold text-lime-600">$31,200</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-lime-200 bg-lime-100 mt-8">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Annual Savings: $67,800</h3>
              <p className="text-lg text-gray-700">That's a 68% cost reduction with CPA-level financial expertise!</p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <HelpCircle className="w-10 h-10 text-lime-600 mr-3" />
            Frequently Asked Questions
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What's the difference between an accounting VA and a bookkeeping VA?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Bookkeeping VAs handle transaction recording and basic financial maintenance. Accounting VAs provide higher-level services including financial analysis, strategic planning, tax strategy, forecasting, and CFO-level insights. Many businesses need both—bookkeeping for daily operations and accounting for strategic guidance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Are accounting virtual assistants certified?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Yes, our accounting VAs hold relevant certifications including CPA, CMA, or equivalent international certifications. They have accounting degrees and extensive experience in financial analysis, tax preparation, and strategic financial management.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Can an accounting VA help with tax planning and filing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Absolutely. Our accounting VAs develop tax strategies, prepare returns, identify deductions, and ensure compliance. They work alongside your tax professional or can serve as your primary tax advisor depending on your needs and jurisdiction requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What software do accounting VAs use?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our accounting VAs are proficient in QuickBooks, Xero, Sage, NetSuite, and other accounting platforms, plus advanced Excel, financial analysis tools, and tax software. They adapt to your existing systems and recommend optimizations when beneficial.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How do you ensure accuracy and confidentiality?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We implement rigorous quality controls, multiple review layers, bank-level security protocols, encrypted communications, and strict NDAs. All accounting VAs adhere to professional standards and ethics codes equivalent to in-house staff.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Zap className="w-10 h-10 text-white mr-3" />
            Ready for Strategic Financial Management?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get CPA-level accounting expertise with professional virtual assistants. Save 68% on costs while gaining strategic financial insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Start Your Accounting Journey
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold">
              View Pricing Plans
              <DollarSign className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
