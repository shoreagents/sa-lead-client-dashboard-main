'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home,
  CheckCircle,
  Users,
  Calendar,
  Mail,
  Phone,
  FileText,
  TrendingUp
} from 'lucide-react';
import Image from 'next/image';

export default function WhatDoesRealEstateVADoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="mb-6">
            <Badge className="bg-lime-600 text-white px-4 py-2 text-lg">
              🏠 Complete Guide
            </Badge>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            What Does a Real Estate Virtual Assistant Do?
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Real estate virtual assistants handle administrative tasks, transaction coordination, lead management, and marketing support—freeing agents and brokers to focus on high-value activities like closing deals and building client relationships.
          </p>
          
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
              alt="Real estate professional working with virtual assistant support"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg">
              Hire a Real Estate VA
            </Button>
            <Button size="lg" variant="outline" className="border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg">
              See Pricing
            </Button>
          </div>
        </div>

        {/* Core Responsibilities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Core Responsibilities of a Real Estate VA
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-lime-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Administrative Support</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span>Calendar and appointment scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span>Email management and responses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span>Phone call screening and follow-ups</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span>Document preparation and filing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span>Database and CRM updates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Transaction Coordination</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span>Managing transaction timelines and deadlines</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span>Coordinating with title companies and escrow</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span>Preparing and reviewing contracts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span>Following up on contingencies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span>Ensuring compliance with regulations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Lead Management</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span>Lead capture and database entry</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span>Initial lead qualification and screening</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span>Automated follow-up sequences</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span>Nurturing campaigns via email/SMS</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span>Scheduling property showings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Marketing & Listing Support</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span>MLS listing creation and updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span>Social media posting and management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span>Property flyer and brochure design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span>Email marketing campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5" />
                    <span>Website content updates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Task Breakdown */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Daily, Weekly, and Monthly Tasks
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-lime-700 mb-4">Daily Tasks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-1" />
                      <span className="text-gray-700">Respond to emails and messages</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-1" />
                      <span className="text-gray-700">Update CRM with new leads</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-1" />
                      <span className="text-gray-700">Schedule appointments and showings</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-1" />
                      <span className="text-gray-700">Follow up on transaction deadlines</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-1" />
                      <span className="text-gray-700">Post on social media channels</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-1" />
                      <span className="text-gray-700">Monitor and respond to online inquiries</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-lime-700 mb-4">Weekly Tasks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-1" />
                      <span className="text-gray-700">Update MLS listings</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-1" />
                      <span className="text-gray-700">Create marketing materials</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-1" />
                      <span className="text-gray-700">Send email newsletters</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-1" />
                      <span className="text-gray-700">Review transaction checklists</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-lime-700 mb-4">Monthly Tasks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-1" />
                      <span className="text-gray-700">Generate performance reports</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-1" />
                      <span className="text-gray-700">Update database and clean contacts</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-1" />
                      <span className="text-gray-700">Plan marketing campaigns</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3 mt-1" />
                      <span className="text-gray-700">Analyze lead conversion rates</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How a Real Estate VA Transforms Your Business
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">Time Savings</h3>
                  <p className="text-gray-700">
                    Real estate agents spend 40-60% of their time on administrative tasks. A VA handles these, giving you back 15-20 hours per week to focus on selling, networking, and growing your business.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">Cost Efficiency</h3>
                  <p className="text-gray-700">
                    At $879-1,443/month, a virtual assistant costs 60-78% less than hiring a local admin ($3,500-5,500/month with benefits) while delivering the same or better quality work.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">Increased Productivity</h3>
                  <p className="text-gray-700">
                    With administrative burden removed, agents can handle 30-50% more transactions per year. More time for showings, negotiations, and client relationships means more closed deals.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">Scalable Growth</h3>
                  <p className="text-gray-700">
                    Start with one VA for administrative tasks, then add specialists for transaction coordination, lead management, or marketing as your business grows—all without the overhead of local hires.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Hire Your Real Estate VA?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a dedicated virtual assistant who understands real estate operations and can help you close more deals. Save 60-78% on costs while boosting productivity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Hire a Real Estate VA Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg">
              Calculate Your Savings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

