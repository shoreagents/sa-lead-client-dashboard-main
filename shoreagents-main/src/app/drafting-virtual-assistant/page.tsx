'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  DollarSign,
  Zap,
  Phone,
  BarChart,
  Ruler,
  Building2,
  ClipboardList,
  Settings,
  Lightbulb,
  Globe,
  Boxes,
  Edit,
  Database,
  Wrench
} from 'lucide-react';
import Image from 'next/image';

export default function DraftingVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Drafting Virtual Assistant: Scale Your CAD Operations with Expert Filipino Teams
          </h1>

          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=600&fit=crop"
              alt="Professional drafting virtual assistant in modern CAD design studio with technical drawing displays and construction blueprints"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Save 60-75% on drafting costs while accessing world-class CAD expertise. Construction companies are building teams of 8+ drafters for explosive growth.
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg font-semibold">
              Build Your Drafting Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg font-semibold">
              View Pricing
              <DollarSign className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Construction Companies Scaling Stats */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <Zap className="w-8 h-8 text-lime-600 mr-3" />
            Construction Companies Are Scaling Fast
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-lime-200 bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">70%</div>
                <div className="text-gray-600 font-medium">Cost Savings</div>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">8+</div>
                <div className="text-gray-600 font-medium">Drafters Per Team</div>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Production Cycles</div>
              </CardContent>
            </Card>
            <Card className="border-lime-200 bg-white shadow-md">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-2">50%</div>
                <div className="text-gray-600 font-medium">Faster Turnaround</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stephen's Take */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-8 h-8 text-lime-600 mr-3" />
            Stephen's Take: The Drafting Team Revolution
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              I'm seeing construction companies with teams of 27 people, where 8 are dedicated drafters! This isn't a trend—it's a revolution. Smart construction firms are realizing that having a robust drafting team gives them a massive competitive advantage.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Philippines has become the global hub for CAD expertise. Our drafters aren't just skilled—they're passionate about precision and understand Western construction standards inside and out.
            </p>
          </div>
        </div>

        {/* What Is Section */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Ruler className="w-8 h-8 text-lime-600 mr-3" />
            What Is a Drafting Virtual Assistant?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A drafting virtual assistant is a highly skilled CAD professional who works remotely as part of your construction, architecture, or engineering team. These specialists combine technical expertise with advanced software proficiency to deliver precise technical drawings, 3D models, and construction documentation that meets industry standards and building codes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Unlike freelance drafters or project-based services, a dedicated virtual assistant becomes an integrated member of your team, understanding your company's standards, workflows, and quality requirements while providing consistent, reliable drafting support.
          </p>
        </div>

        {/* Comprehensive Services */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Comprehensive Drafting Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <Ruler className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">2D CAD Drafting</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Architectural floor plans and elevations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Structural drawings and details</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">MEP system layouts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Site plans and civil drawings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">As-built documentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <Building2 className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">3D BIM Modeling</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Revit architectural models</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">3D rendering and visualization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Clash detection and coordination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Quantity takeoffs and material lists</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Construction animation and walkthroughs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <ClipboardList className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Documentation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Construction detail drawings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Shop drawings and fabrication plans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Permit and submission drawings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Record drawings and updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Standards and specification compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <Settings className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Specialized Drafting</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Mechanical system design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Electrical schematic drawings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Fire protection system layouts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Landscape and site development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Infrastructure and utility plans</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Cost Savings Comparison */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <DollarSign className="w-8 h-8 text-lime-600 mr-3" />
            Massive Cost Savings: The Numbers Don't Lie
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="border-red-300 bg-red-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Building2 className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Local CAD Specialist</h3>
                </div>
                <div className="text-5xl font-bold text-red-600 mb-4">$65,000</div>
                <p className="text-gray-700 font-semibold">+ Benefits + Equipment + Office Space</p>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-lime-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Filipino CAD Specialist</h3>
                </div>
                <div className="text-5xl font-bold text-lime-600 mb-4">$22,000</div>
                <p className="text-gray-700 font-semibold">Fully Managed + Infrastructure Included</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-lime-200 bg-white mb-6">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-12 h-12 text-lime-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Annual Savings Per Drafter</h3>
              <div className="text-5xl font-bold text-lime-600 mb-2">$43,000+</div>
              <p className="text-lg text-gray-700 font-semibold">
                With a team of 8 drafters, you save over $344,000 annually!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Software Expertise */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Advanced Software Expertise
          </h2>
          <p className="text-gray-700 text-center mb-8 leading-relaxed max-w-4xl mx-auto">
            Our drafting virtual assistants are proficient in the latest industry-standard software platforms, ensuring compatibility with your existing workflows and the ability to leverage cutting-edge design technologies.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6 text-center">
                <Ruler className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900">AutoCAD</h3>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6 text-center">
                <Building2 className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900">Revit</h3>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6 text-center">
                <Settings className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900">SolidWorks</h3>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6 text-center">
                <Edit className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900">SketchUp</h3>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6 text-center">
                <Lightbulb className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900">Inventor</h3>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6 text-center">
                <Database className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900">MicroStation</h3>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6 text-center">
                <BarChart className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900">BricsCAD</h3>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6 text-center">
                <Wrench className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900">Tekla</h3>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Zap className="w-10 h-10 text-white mr-3" />
            Ready to Scale Your Drafting Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the construction companies building teams of 8+ drafters for explosive growth. Save 70% on costs while accelerating project delivery and maintaining the highest quality standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Start Building Your Team
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
