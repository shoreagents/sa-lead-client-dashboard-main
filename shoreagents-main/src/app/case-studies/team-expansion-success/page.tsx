'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Users, Target } from 'lucide-react';
import Image from 'next/image';

export default function TeamExpansionSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <Badge className="bg-lime-600 text-white px-4 py-2 text-lg mb-6">
            Success Story
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Scaling from 2 to 20 Team Members in 12 Months
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            How a growing agency rapidly expanded their operations without compromising quality or breaking their budget
          </p>
          
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop"
              alt="Growing team collaboration"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">10x</div>
              <p className="text-gray-700">Team Growth</p>
            </CardContent>
          </Card>
          <Card className="border-lime-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">20</div>
              <p className="text-gray-700">Team Members</p>
            </CardContent>
          </Card>
          <Card className="border-lime-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">68%</div>
              <p className="text-gray-700">Cost Savings</p>
            </CardContent>
          </Card>
          <Card className="border-lime-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">12mo</div>
              <p className="text-gray-700">Expansion Period</p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The Challenge</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  A rapidly growing digital marketing agency had reached a critical inflection point. Client demand was exceeding capacity, but local hiring costs threatened to eliminate profit margins. They needed to scale fast without sacrificing quality.
                </p>
                <ul className="space-y-2 mb-4">
                  <li>• Unable to accept new clients due to capacity constraints</li>
                  <li>• Local hiring costs would reduce margins to unsustainable levels</li>
                  <li>• 3-6 month hiring timelines too slow for growth needs</li>
                  <li>• Existing team burning out from overwork</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The ShoreAgents Solution</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  ShoreAgents implemented a phased expansion plan that grew the team from 2 to 20 members over 12 months:
                </p>

                <div className="bg-lime-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Expansion Phases</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Months 1-3: Foundation (5 members)</h4>
                      <p className="text-gray-700">Core team of content writers, social media managers, and admin support</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Months 4-6: Specialization (10 members)</h4>
                      <p className="text-gray-700">Added SEO specialists, graphic designers, and account managers</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Months 7-12: Scale (20 members)</h4>
                      <p className="text-gray-700">Expanded with PPC specialists, video editors, and dedicated client support</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <Card className="border-lime-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-8 h-8 text-lime-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The Results</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-lime-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Team Growth</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>20 team members</strong> added in 12 months</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>68% cost savings</strong> vs local hiring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>4-week average</strong> time to full productivity</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-lime-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Business Impact</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>300% revenue growth</strong> in 12 months</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>45 new clients</strong> onboarded</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>95% client retention</strong> rate</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                <p className="text-gray-700 italic mb-2">
                  "ShoreAgents made scaling our team feel effortless. We grew 10x without the chaos we expected. It's been transformational for our business."
                </p>
                <p className="text-gray-900 font-semibold">— Founder & CEO, Digital Marketing Agency</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-lime-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Team?</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how ShoreAgents can help you grow rapidly without the traditional hiring headaches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg">
              View More Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
