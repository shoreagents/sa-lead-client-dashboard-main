"use client";

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Check, AlertTriangle, Clock, DollarSign, Target, Users, Shield, Zap, Phone, Search, UserCheck, Settings, PlayCircle, TrendingUp, MessageCircle, Award, Briefcase } from "lucide-react";
import Image from "next/image";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-lime-50/30 to-white">
      <SideNav />
      
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-lime-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
            </div>
            
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <Badge variant="outline" className="mb-4 border-lime-600 text-lime-700 px-6 py-2.5 text-sm font-semibold hover:bg-lime-50 transition-colors">
            <Shield className="w-4 h-4 mr-2" />
            THE COMPLETE IDIOTS GUIDE
          </Badge>
          
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              SHORE AGENTS{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-lime-600 via-lime-500 to-lime-600 bg-clip-text text-transparent">
                HOW IT WORKS
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 max-w-4xl mx-auto">
              What We <span className="text-lime-600 font-bold">ACTUALLY</span> Do vs. What{" "}
              <span className="text-lime-600 font-bold">YOU</span> Do
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            No-Bullshit Explanation of our 6-step process - what we handle, what you handle, and why it works.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Button 
              size="lg"
              onClick={() => window.location.href = '/gettingstart'}
              className="w-full sm:w-auto bg-lime-600 hover:bg-lime-700 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105 px-8 py-6 text-base"
            >
              Start Your Process Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.location.href = '/pricing'}
              className="w-full sm:w-auto border-2 border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white transition-all transform hover:scale-105 px-8 py-6 text-base"
            >
              See Pricing Calculator
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 opacity-70">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-lime-600" />
              <span className="text-sm text-gray-600">25,000+ Candidates</span>
          </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-lime-600" />
              <span className="text-sm text-gray-600">500+ Happy Clients</span>
                </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-lime-600" />
              <span className="text-sm text-gray-600">7 Days to Hire</span>
                </div>
              </div>

          {/* Hero Image */}
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-lime-200">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop"
                alt="Team collaboration in modern office"
                width={1200}
                height={600}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                <p className="text-white text-lg font-semibold">Building high-performing remote teams, simplified.</p>
                </div>
                </div>
                  </div>
                  </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Process Steps Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-lime-50/50">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          <div className="text-center space-y-4">
            <Badge className="bg-lime-600 text-white px-6 py-2.5 text-sm font-semibold shadow-md">
              THE 6-STEP PROCESS
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Simple, Transparent, and Effective
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Here's exactly how we help you find the perfect team members.
            </p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Step 1 */}
            <Card className="border-2 border-gray-100 hover:border-lime-300 transition-all hover:shadow-xl group relative overflow-hidden">
              {/* Mini image for visual appeal */}
              <div className="relative h-32 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&auto=format&fit=crop"
                  alt="Phone consultation"
                  width={600}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader className="space-y-3 pb-4 relative z-10 -mt-8">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-gradient-to-br from-lime-600 to-lime-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-7 h-7 text-white" />
                </div>
                  <Badge variant="secondary" className="bg-lime-600 text-white px-3 py-1.5 font-semibold">
                    STEP 1
                  </Badge>
                </div>
                <div>
                  <CardTitle className="text-xl sm:text-2xl mb-2">Book a Chat With Us</CardTitle>
                  <div className="flex items-center gap-2 text-lime-600">
                    <Clock className="w-4 h-4" />
                    <CardDescription className="text-lime-600 font-semibold">15-30 Minutes</CardDescription>
                </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-sm relative z-10">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-lime-600" />
                    What Happens:
                  </h4>
                  <ul className="space-y-1.5 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                      <span>You call us or book online</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                      <span>We ask simple questions about your needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                      <span>Budget and timeline discussion</span>
                    </li>
                  </ul>
                </div>
                <Separator />
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-lime-50 rounded-lg p-3 border border-lime-100">
                    <p className="font-semibold text-xs text-lime-700 mb-1">What WE Do:</p>
                    <p className="text-xs text-gray-700">Listen & understand</p>
                </div>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <p className="font-semibold text-xs text-gray-700 mb-1">What YOU Do:</p>
                    <p className="text-xs text-gray-600">Tell us your needs</p>
                  </div>
                  </div>
                <div className="flex items-center justify-center pt-2">
                  <Badge variant="outline" className="text-lime-700 border-lime-300 bg-lime-50 px-4 py-2">
                    <DollarSign className="w-4 h-4 mr-1" />
                    100% FREE
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-2 border-gray-100 hover:border-lime-300 transition-all hover:shadow-xl group relative overflow-hidden">
              {/* Mini image for visual appeal */}
              <div className="relative h-32 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop"
                  alt="Recruitment process"
                  width={600}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader className="space-y-3 pb-4 relative z-10 -mt-8">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-gradient-to-br from-lime-600 to-lime-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Search className="w-7 h-7 text-white" />
                </div>
                  <Badge variant="secondary" className="bg-lime-600 text-white px-3 py-1.5 font-semibold">
                    STEP 2
                  </Badge>
                </div>
                <div>
                  <CardTitle className="text-xl sm:text-2xl mb-2">We Find Qualified People</CardTitle>
                  <div className="flex items-center gap-2 text-lime-600">
                    <Clock className="w-4 h-4" />
                    <CardDescription className="text-lime-600 font-semibold">1-2 Weeks</CardDescription>
                </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-sm relative z-10">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-lime-600" />
                    What WE Do:
                  </h4>
                  <ul className="space-y-1.5 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                      <span>Search 25,000+ candidates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                      <span>Screen resumes & conduct interviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                      <span>AI testing & proficiency checks</span>
                    </li>
                  </ul>
                </div>
                <Separator />
                <div className="bg-gradient-to-br from-lime-50 to-lime-100/50 rounded-lg p-3 border border-lime-200">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">What YOU Get:</h4>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>• 3-5 qualified candidates</li>
                    <li>• Resumes & test scores</li>
                    <li>• Video interviews</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-2 border-gray-100 hover:border-lime-300 transition-all hover:shadow-xl group relative overflow-hidden">
              {/* Mini image for visual appeal */}
              <div className="relative h-32 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop"
                  alt="Interview process"
                  width={600}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader className="space-y-3 pb-4 relative z-10 -mt-8">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-gradient-to-br from-lime-600 to-lime-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <UserCheck className="w-7 h-7 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-lime-600 text-white px-3 py-1.5 font-semibold">
                    STEP 3
                  </Badge>
                  </div>
                <div>
                  <CardTitle className="text-xl sm:text-2xl mb-2">You Interview and Choose</CardTitle>
                  <div className="flex items-center gap-2 text-lime-600">
                    <Target className="w-4 h-4" />
                    <CardDescription className="text-lime-600 font-semibold">100% YOUR Decision</CardDescription>
                </div>
              </div>
              </CardHeader>
              <CardContent className="space-y-4 text-sm relative z-10">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <PlayCircle className="w-4 h-4 text-lime-600" />
                    What Happens:
                  </h4>
                  <ul className="space-y-1.5 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                      <span>YOU interview them</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                      <span>YOU ask your business questions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                      <span>YOU decide who fits</span>
                    </li>
                  </ul>
            </div>
                <Separator />
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <p className="text-xs text-gray-600">
                    <span className="font-semibold text-gray-900">We help with:</span> Scheduling, setup, and answering background questions
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="border-2 border-gray-100 hover:border-lime-300 transition-all hover:shadow-xl group relative overflow-hidden">
              {/* Mini image for visual appeal */}
              <div className="relative h-32 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop"
                  alt="Office setup"
                  width={600}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader className="space-y-3 pb-4 relative z-10 -mt-8">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-gradient-to-br from-lime-600 to-lime-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Settings className="w-7 h-7 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-lime-600 text-white px-3 py-1.5 font-semibold">
                    STEP 4
                  </Badge>
                </div>
                <div>
                  <CardTitle className="text-xl sm:text-2xl mb-2">We Set Up Everything</CardTitle>
                  <div className="flex items-center gap-2 text-lime-600">
                    <Clock className="w-4 h-4" />
                    <CardDescription className="text-lime-600 font-semibold">1-2 Weeks</CardDescription>
                </div>
              </div>
              </CardHeader>
              <CardContent className="space-y-4 text-sm relative z-10">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-lime-600" />
                    What WE Handle 100%:
                  </h4>
                  <ul className="space-y-1.5 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                      <span>Computer, monitor, equipment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                      <span>High-speed internet + backup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                      <span>Employment contracts & HR</span>
                    </li>
                    </ul>
                  </div>
                <Separator />
                <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-3">
                  <p className="text-xs text-amber-900 font-medium">
                    <span className="font-bold">YOU Must:</span> Train them on YOUR processes, systems, and business
                  </p>
                  </div>
              </CardContent>
            </Card>

            {/* Step 5 */}
            <Card className="border-2 border-gray-100 hover:border-lime-300 transition-all hover:shadow-xl group relative overflow-hidden">
              {/* Mini image for visual appeal */}
              <div className="relative h-32 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop"
                  alt="Team working together"
                  width={600}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader className="space-y-3 pb-4 relative z-10 -mt-8">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-gradient-to-br from-lime-600 to-lime-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Briefcase className="w-7 h-7 text-white" />
                </div>
                  <Badge variant="secondary" className="bg-lime-600 text-white px-3 py-1.5 font-semibold">
                    STEP 5
                  </Badge>
                </div>
                <div>
                  <CardTitle className="text-xl sm:text-2xl mb-2">They Work For You</CardTitle>
                  <div className="flex items-center gap-2 text-lime-600">
                    <TrendingUp className="w-4 h-4" />
                    <CardDescription className="text-lime-600 font-semibold">Ongoing Partnership</CardDescription>
                </div>
                  </div>
              </CardHeader>
              <CardContent className="space-y-4 text-sm relative z-10">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2 text-xs">THEY Do (For YOU):</h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• Work YOUR schedule</li>
                      <li>• Complete YOUR tasks</li>
                      <li>• Report to YOU</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-lime-50 to-lime-100/50 rounded-lg p-3 border border-lime-200">
                    <h4 className="font-semibold text-gray-900 mb-2 text-xs">WE Handle:</h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• Payroll & taxes</li>
                      <li>• IT & equipment</li>
                      <li>• HR & benefits</li>
                    </ul>
                </div>
              </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-xs text-blue-900 font-medium text-center">
                    You're their ACTUAL boss - We handle employment logistics
                  </p>
            </div>
              </CardContent>
            </Card>

            {/* Step 6 */}
            <Card className="border-2 border-gray-100 hover:border-lime-300 transition-all hover:shadow-xl group relative overflow-hidden">
              {/* Mini image for visual appeal */}
              <div className="relative h-32 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop"
                  alt="Team growth and scaling"
                  width={600}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader className="space-y-3 pb-4 relative z-10 -mt-8">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-gradient-to-br from-lime-600 to-lime-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-lime-600 text-white px-3 py-1.5 font-semibold">
                    STEP 6
                  </Badge>
                </div>
                <div>
                  <CardTitle className="text-xl sm:text-2xl mb-2">Expand Your Team</CardTitle>
                  <div className="flex items-center gap-2 text-lime-600">
                    <TrendingUp className="w-4 h-4" />
                    <CardDescription className="text-lime-600 font-semibold">Scale When Ready</CardDescription>
                </div>
              </div>
              </CardHeader>
              <CardContent className="space-y-4 text-sm relative z-10">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">When You Want More:</h4>
                  <ul className="space-y-1.5 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                      <span>Call us for more people</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                      <span>Faster process (1-2 weeks)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                      <span>We repeat steps 2-5</span>
                    </li>
                  </ul>
                </div>
                <Separator />
                <div className="bg-gradient-to-r from-lime-50 to-lime-100 border-2 border-lime-200 rounded-lg p-3">
                  <p className="text-xs text-lime-900 font-medium text-center">
                    <Zap className="w-3 h-3 inline mr-1" />
                    Easy Scaling: Add team members as you grow
                  </p>
                </div>
              </CardContent>
            </Card>
                </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Problem Resolution Section with Image */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge className="bg-gray-900 text-white px-6 py-2.5 text-sm font-semibold">
              PROBLEM RESOLUTION
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              What If Something Goes Wrong?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Clear boundaries mean clear solutions. Here's who handles what.
            </p>
                </div>

          {/* Support Image */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop"
                alt="Customer support team"
                width={1200}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-lime-600/80 to-gray-900/80 flex items-center justify-center">
                <div className="text-center text-white px-6">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">24/7 Support When You Need It</h3>
                  <p className="text-lg opacity-90">We've got your back on employment matters</p>
                  </div>
                </div>
              </div>
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* WE Handle */}
            <Card className="border-2 border-lime-200 bg-gradient-to-br from-lime-50 via-white to-lime-50/50 hover:shadow-2xl transition-all group">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-lime-600 to-lime-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                    <CardTitle className="text-2xl sm:text-3xl mb-1">Employment Issues</CardTitle>
                    <Badge className="bg-lime-600 text-white">WE Handle</Badge>
                </div>
              </div>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-lime-100 hover:border-lime-300 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-lime-600" />
                </div>
                <div>
                        <p className="font-semibold text-gray-900 mb-1">Not showing up to work</p>
                        <p className="text-sm text-gray-600">We investigate, take action, find replacement</p>
                </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-lime-100 hover:border-lime-300 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-lime-600" />
                      </div>
                <div>
                        <p className="font-semibold text-gray-900 mb-1">Equipment/Internet problems</p>
                        <p className="text-sm text-gray-600">24/7 IT support, fix or replace equipment</p>
                </div>
                  </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-lime-100 hover:border-lime-300 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-lime-600" />
                </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">They quit unexpectedly</p>
                        <p className="text-sm text-gray-600">90-day replacement guarantee, usually within 2 weeks</p>
              </div>
            </div>
          </div>
        </div>
              </CardContent>
            </Card>

            {/* YOU Handle */}
            <Card className="border-2 border-gray-200 bg-gradient-to-br from-gray-50 via-white to-gray-50/50 hover:shadow-2xl transition-all group">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-white" />
          </div>
                  <div>
                    <CardTitle className="text-2xl sm:text-3xl mb-1">Work Performance</CardTitle>
                    <Badge className="bg-gray-700 text-white">YOU Handle</Badge>
                </div>
              </div>
              </CardHeader>
              <CardContent className="space-y-5">
              <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-100 hover:border-amber-300 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                        <p className="font-semibold text-gray-900 mb-1">Don't understand your business</p>
                        <p className="text-sm text-gray-600">YOU provide business-specific training</p>
                </div>
                </div>
              </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-100 hover:border-amber-300 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-5 h-5 text-amber-600" />
            </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Work quality not good enough</p>
                        <p className="text-sm text-gray-600">YOU are their boss, give feedback</p>
                </div>
              </div>
                </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-100 hover:border-amber-300 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                        <p className="font-semibold text-gray-900 mb-1">Not following procedures</p>
                        <p className="text-sm text-gray-600">YOU supervise and enforce your business rules</p>
                </div>
              </div>
            </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Responsibility Division - Enhanced */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-lime-50/50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-lime-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge className="bg-lime-600 text-white px-6 py-2.5 text-sm font-semibold shadow-md">
              Clear Boundaries
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              The Real Division of Responsibility
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everyone knows their role - that's why it works.
            </p>
          </div>

          {/* Partnership Image */}
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&auto=format&fit=crop"
                alt="Business partnership handshake"
                width={1200}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-lime-600/90 to-gray-900/90 flex items-center justify-center">
                <div className="text-center text-white px-6">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">Partnership That Works</h3>
                  <p className="text-lg opacity-90">We handle employment, you handle the business</p>
                </div>
              </div>
            </div>
                </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Shore Agents */}
            <Card className="border-2 border-lime-200 hover:shadow-2xl transition-all bg-white">
              <CardHeader className="bg-gradient-to-br from-lime-50 to-white border-b border-lime-100 pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-lime-600 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  Shore Agents = Employment Provider
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                    <Check className="w-5 h-5 text-lime-600" />
                    We Provide:
                  </h4>
                  <div className="space-y-3">
                    {["The People: Qualified, English-speaking professionals", "The Infrastructure: Office space, equipment, internet", "The Employment: Contracts, payroll, benefits, HR", "The Support: IT help, equipment fixes, replacements"].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-lime-50 rounded-lg p-3 border border-lime-100">
                        <Check className="w-5 h-5 text-lime-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 font-medium">{item}</span>
                </div>
                    ))}
              </div>
            </div>
                <Separator />
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    We DON'T Provide:
                  </h4>
                  <div className="space-y-2">
                    {["Business management", "Daily supervision", "Industry training", "Quality control of YOUR work"].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{item}</span>
                </div>
                    ))}
              </div>
                </div>
              </CardContent>
            </Card>

            {/* You */}
            <Card className="border-2 border-gray-200 hover:shadow-2xl transition-all bg-white">
              <CardHeader className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-100 pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  YOU = The Actual Boss
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                    <Check className="w-5 h-5 text-gray-700" />
                    You Provide:
                  </h4>
                  <div className="space-y-3">
                    {["The Direction: What work needs to be done", "The Training: How YOUR business works", "The Management: Daily supervision and feedback", "The Standards: What quality you expect"].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3 border border-gray-100">
                        <Check className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 font-medium">{item}</span>
                </div>
                    ))}
              </div>
            </div>
                <Separator />
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    You DON'T Provide:
                  </h4>
                  <div className="space-y-2">
                    {["Office space or equipment", "Employment contracts or payroll", "IT support or technical issues", "Government compliance or benefits"].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{item}</span>
          </div>
                    ))}
        </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Car Analogy Card - Enhanced */}
          <Card className="border-2 border-lime-300 bg-gradient-to-br from-lime-50 via-white to-lime-50 shadow-xl overflow-hidden">
            {/* Car Analogy Image */}
            <div className="relative h-48 sm:h-64">
              <Image 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&auto=format&fit=crop"
                alt="Car keys handover"
                width={1200}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-lime-50"></div>
          </div>

            <CardContent className="p-8 sm:p-12 -mt-12 relative z-10">
              <div className="text-center space-y-8">
                <div>
                  <Badge className="bg-lime-600 text-white px-4 py-2 mb-4">
                    Simple Analogy
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Think of it like leasing a car:
              </h3>
            </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="space-y-4">
                    {[
                      { icon: Shield, title: "We provide the car", desc: "(person + equipment + office)" },
                      { icon: Settings, title: "We handle maintenance", desc: "(IT support, payroll, employment)" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-md border-2 border-lime-100 hover:border-lime-300 transition-colors">
                        <div className="w-10 h-10 bg-lime-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-white" />
                  </div>
                        <div className="text-left">
                          <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
                    ))}
                  </div>
              <div className="space-y-4">
                    {[
                      { icon: Users, title: "You drive it", desc: "(manage their daily work)" },
                      { icon: Target, title: "You decide where to go", desc: "(what work they do)" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-md border-2 border-gray-100 hover:border-gray-300 transition-colors">
                        <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-white" />
                  </div>
                        <div className="text-left">
                          <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
                    ))}
              </div>
            </div>

                <div className="bg-gradient-to-r from-lime-600 to-lime-500 text-white rounded-2xl p-6 shadow-lg max-w-3xl mx-auto">
                  <p className="text-lg font-bold">
                    The person works <span className="underline">FOR YOU</span>, but they're employed <span className="underline">BY US</span>.
              </p>
            </div>
          </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-16 sm:py-20 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-lime-50 to-white"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-lime-300 bg-gradient-to-br from-white via-lime-50/50 to-white shadow-2xl">
            <CardContent className="p-10 sm:p-14 space-y-10">
              <div className="text-center space-y-4">
                <Badge className="bg-lime-600 text-white px-6 py-2.5 text-sm font-semibold shadow-md">
                  GET STARTED
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                Ready to Start?
              </h2>
                <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                  They start working for <span className="font-bold text-lime-600">YOU</span> - With our support structure
                </p>
                </div>
                
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { num: "1", title: "Book consultation", desc: "15-30 minutes", color: "lime" },
                  { num: "2", title: "We find candidates", desc: "1-2 weeks", color: "lime" },
                  { num: "3", title: "You choose", desc: "Your decision", color: "lime" },
                  { num: "4", title: "We set up", desc: "1-2 weeks", color: "lime" },
                ].map((step) => (
                  <div key={step.num} className="text-center space-y-3 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-lime-600 to-lime-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-xl">{step.num}</span>
                  </div>
                    <div>
                      <p className="font-bold text-sm text-gray-900 mb-1">{step.title}</p>
                      <p className="text-xs text-gray-600">{step.desc}</p>
                </div>
                  </div>
                ))}
                </div>
                
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button 
                  size="lg"
                  onClick={() => window.location.href = '/gettingstart'}
                  className="w-full sm:w-auto bg-lime-600 hover:bg-lime-700 text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 px-10 py-7 text-lg font-semibold"
                >
                  Start Your Process Today
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.location.href = '/pricing'}
                  className="w-full sm:w-auto border-2 border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white transition-all transform hover:scale-105 px-10 py-7 text-lg font-semibold"
                >
                  See Pricing Calculator
                </Button>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-600 flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5 text-lime-600" />
                  Questions? Let's talk!
              </p>
            </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
