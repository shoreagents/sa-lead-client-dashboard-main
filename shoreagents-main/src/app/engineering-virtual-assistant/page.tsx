'use client';

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Users, 
  TrendingUp, 
  Shield, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  DollarSign,
  Target,
  Zap,
  Award,
  Phone,
  AlertCircle,
  BarChart,
  HelpCircle,
  Briefcase,
  FileText,
  Settings,
  Wrench,
  Ruler,
  Building2,
  HardHat,
  Cpu,
  Lightbulb,
  Home,
  Factory,
  Monitor,
  Boxes,
  Activity,
  Database,
  Cloud,
  RefreshCw
} from 'lucide-react';
import Image from 'next/image';

export default function EngineeringVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Engineering Virtual Assistant
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Advanced engineering support with CAD mastery, BIM coordination, and technical expertise. Transform your engineering projects with AI-enhanced productivity and seamless collaboration.
          </p>

          {/* Hero Image */}
          <div className="relative mb-12">
            <Image
              src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&h=600&fit=crop"
              alt="Engineering virtual assistant working with CAD software and technical drawings"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Start Your Engineering Team
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-lime-600 text-lime-600 hover:bg-lime-50 px-8 py-4 text-lg font-semibold">
              Enquire Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* What is an Engineering VA */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Wrench className="w-8 h-8 text-lime-600 mr-3" />
            What is an Engineering Virtual Assistant?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            An Engineering Virtual Assistant is a highly skilled remote professional who provides specialized technical support to engineering firms, construction companies, and property development businesses. These experts combine traditional engineering knowledge with cutting-edge digital tools to deliver precision, efficiency, and innovation to your projects.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            In today's rapidly evolving construction landscape, engineering VAs are revolutionizing how firms handle complex technical tasks. From CAD drafting and BIM coordination to structural analysis and MEP system design, these professionals bridge the gap between traditional engineering practices and modern digital workflows. Virtual assistants in the engineering field represent the evolution of technical support services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The modern construction industry demands unprecedented speed, accuracy, and coordination across multiple disciplines. Engineering Virtual Assistants represent the evolution of technical support services, offering specialized expertise in areas like AutoCAD 2025 with AI-enhanced Smart Blocks, Revit 2025/2026 BIM modeling, and advanced MEP coordination that ensures seamless project delivery.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">75%</div>
              <div className="text-gray-600 font-medium">Faster Project Delivery</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">90%</div>
              <div className="text-gray-600 font-medium">Reduced Design Errors</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">65%</div>
              <div className="text-gray-600 font-medium">Cost Savings</div>
            </CardContent>
          </Card>
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-lime-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Global Support</div>
            </CardContent>
          </Card>
        </div>

        {/* Core Services */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Settings className="w-8 h-8 text-lime-600 mr-3" />
            Core Engineering Virtual Assistant Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Ruler className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">CAD & Technical Drafting</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">AutoCAD 2025 with AI-enhanced Smart Blocks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Precision technical drawings and blueprints</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">2D to 3D model conversions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Engineering detail drawings and specifications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Schematic design and layout optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Boxes className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">BIM & 3D Modeling</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Revit 2025/2026 expertise and modeling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">BIM coordination and clash detection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Navisworks project review and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">4D and 5D BIM implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Virtual Design & Construction (VDC)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">MEP Engineering Support</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Mechanical, Electrical & Plumbing design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">HVAC system layout and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Electrical load analysis and distribution</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Plumbing and fire protection systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Energy efficiency and sustainability analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Building2 className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Structural Engineering</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Structural analysis and calculations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Steel and concrete design optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Foundation design and geotechnical support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Seismic and wind load analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Building code compliance verification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <BarChart className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Project Engineering</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Project planning and scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Engineering documentation management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Quality control and assurance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Cost estimation and budget analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Regulatory compliance and permitting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Cpu className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Engineering & AI</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">AI-assisted design optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Digital twin development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Parametric design and generative modeling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Simulation and performance analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Cloud-based collaboration platforms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stephen's Take */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-8 h-8 text-lime-600 mr-3" />
            Stephen's Take: The Engineering Revolution is Here
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              After working with thousands of engineering firms, I've seen the game-changing impact of skilled Engineering VAs. The integration of AI tools like AutoCAD 2025's Smart Blocks and advanced BIM coordination isn't just improving efficiency—it's revolutionizing how engineering gets done.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold italic">
              The firms dominating 2025 aren't just hiring more engineers—they're strategically combining local expertise with global talent. Our Engineering VAs don't replace your team; they supercharge it with 24/7 productivity and cutting-edge technical skills that many firms can't afford in-house.
            </p>
          </div>
        </div>

        {/* Engineering VA Applications */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Engineering VA Applications in Construction & Property
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Home className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Residential Development</h3>
                <p className="text-gray-700 mb-4">
                  Streamline residential projects with comprehensive engineering support from concept to completion.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Site development and grading plans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Residential MEP system design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Structural engineering for homes and developments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Permit drawings and regulatory compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Energy efficiency modeling and green building design</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Building2 className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Commercial Construction</h3>
                <p className="text-gray-700 mb-4">
                  Support large-scale commercial projects with sophisticated engineering solutions and BIM coordination.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Complex MEP system coordination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Structural engineering for high-rise buildings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Fire protection and life safety systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Building automation and smart systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">LEED certification and sustainability consulting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Activity className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Infrastructure Projects</h3>
                <p className="text-gray-700 mb-4">
                  Engineering expertise for roads, utilities, and municipal infrastructure development.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Civil engineering and site design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Water and wastewater system design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Transportation and traffic engineering</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Utility coordination and relocation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Environmental impact assessment support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Factory className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Industrial & Manufacturing</h3>
                <p className="text-gray-700 mb-4">
                  Specialized engineering for industrial facilities, warehouses, and manufacturing plants.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Process engineering and equipment layout</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Industrial HVAC and ventilation systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Power distribution and electrical systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Safety systems and hazard analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Facility optimization and expansion planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Monitor className="w-8 h-8 text-lime-600 mr-3" />
            Advanced Engineering Technology Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">CAD & Drafting</h3>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-700">• AutoCAD 2025/2026</li>
                  <li className="text-gray-700">• AutoCAD MEP</li>
                  <li className="text-gray-700">• MicroStation</li>
                  <li className="text-gray-700">• SolidWorks</li>
                  <li className="text-gray-700">• Inventor</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">BIM & Modeling</h3>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-700">• Revit 2025/2026</li>
                  <li className="text-gray-700">• Navisworks Manage</li>
                  <li className="text-gray-700">• Tekla Structures</li>
                  <li className="text-gray-700">• ArchiCAD</li>
                  <li className="text-gray-700">• BIM 360 / ACC</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Analysis & Simulation</h3>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-700">• ANSYS</li>
                  <li className="text-gray-700">• SAP2000</li>
                  <li className="text-gray-700">• ETABS</li>
                  <li className="text-gray-700">• RISA 3D</li>
                  <li className="text-gray-700">• Robot Structural Analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Cloud & Collaboration</h3>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-700">• Autodesk Construction Cloud</li>
                  <li className="text-gray-700">• BIM Collaborate Pro</li>
                  <li className="text-gray-700">• Procore</li>
                  <li className="text-gray-700">• PlanGrid</li>
                  <li className="text-gray-700">• Bentley CONNECT</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Engineering VAs Transform Business */}
        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Engineering VAs Transform Your Business
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning-Fast Delivery</h3>
                <p className="text-gray-700">
                  Accelerate project timelines with 24/7 engineering support. Our VAs work across time zones to deliver results while your team sleeps, ensuring continuous progress on critical engineering tasks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <Target className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Precision Engineering</h3>
                <p className="text-gray-700">
                  Eliminate errors with advanced BIM coordination and AI-powered clash detection. Our engineering VAs use the latest technology to ensure your projects meet the highest standards of accuracy and compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <DollarSign className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Massive Cost Savings</h3>
                <p className="text-gray-700">
                  Reduce engineering costs by up to 65% without compromising quality. Access world-class engineering talent at a fraction of the cost of local hires, while eliminating overhead expenses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-white">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-lime-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Infinite Scalability</h3>
                <p className="text-gray-700">
                  Scale your engineering team up or down instantly based on project demands. No lengthy hiring processes, training periods, or overhead concerns—just immediate access to specialized expertise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How Engineering VAs Integrate */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <RefreshCw className="w-8 h-8 text-lime-600 mr-3" />
            How Engineering VAs Integrate with Your Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-3">1</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Requirements Analysis</h3>
                <p className="text-gray-700 text-sm">
                  We analyze your engineering needs, project requirements, and team structure to identify the perfect VA match.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-3">2</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Expert Matching</h3>
                <p className="text-gray-700 text-sm">
                  Our rigorous selection process matches you with engineering VAs who have the exact skills and experience for your projects.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-3">3</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Seamless Integration</h3>
                <p className="text-gray-700 text-sm">
                  Your engineering VA integrates with your existing workflows, tools, and team communication channels for immediate productivity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-lime-200 bg-lime-50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-lime-600 mb-3">4</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Continuous Excellence</h3>
                <p className="text-gray-700 text-sm">
                  Ongoing quality assurance, performance monitoring, and support ensure your engineering VA delivers consistent results.
                </p>
              </CardContent>
            </Card>
          </div>
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
                  What qualifications do your Engineering VAs have?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our Engineering VAs hold engineering degrees from accredited universities and have extensive experience with industry-standard software like AutoCAD 2025, Revit, and BIM platforms. Most have 5+ years of hands-on engineering experience in construction and property development.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How do Engineering VAs handle complex BIM coordination?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Our VAs are trained in advanced BIM workflows using Revit 2025/2026 and Navisworks for clash detection. They coordinate with architectural, structural, and MEP teams to ensure seamless integration and identify conflicts before construction begins.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  Can Engineering VAs work with our existing software and systems?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Absolutely! Our Engineering VAs are proficient in industry-standard software and can quickly adapt to your existing workflows. They're experienced with cloud-based collaboration platforms and can integrate seamlessly with your team's tools and processes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  What's the typical turnaround time for engineering deliverables?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  Turnaround times vary by project complexity, but typical deliverables include: CAD drawings (24-48 hours), BIM models (3-5 days), and complex structural analysis (5-7 days). Our 24/7 operations often enable faster delivery through round-the-clock work cycles.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-lime-200">
                <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-lime-600">
                  How do you ensure quality and accuracy in engineering work?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  We implement multi-level quality control including peer review, senior engineer oversight, and automated checking tools. All deliverables undergo thorough review before submission, and we maintain detailed project documentation for traceability and continuous improvement.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Zap className="w-10 h-10 text-white mr-3" />
            Ready to Revolutionize Your Engineering Projects?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of construction and property development firms who've transformed their engineering capabilities with our world-class Virtual Assistants. Experience the power of global talent, cutting-edge technology, and 24/7 productivity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-lime-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Start Your Engineering Team
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-600 px-8 py-4 text-lg font-semibold">
              Enquire Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
