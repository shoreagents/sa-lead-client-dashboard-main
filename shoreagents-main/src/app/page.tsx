'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Users, 
  Building2, 
  TrendingUp, 
  Calculator, 
  Globe, 
  Headphones, 
  ChevronDown,
  Star,
  Zap,
  Clock,
  MapPin,
  Check
} from 'lucide-react';

import { SideNav } from '@/components/layout/SideNav';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { ContentTracker } from '@/components/ContentTracker';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// --- Shared Styles ---
const sectionSpacing = "py-24 md:py-32";
const headingStyle = "text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6";
const subHeadingStyle = "text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto";

// --- Components ---

const CustomBackgroundLines = () => {
  const paths = [
    "M0 100 Q 250 50 500 100 T 1000 100 T 1500 100",
    "M0 200 Q 250 150 500 200 T 1000 200 T 1500 200",
    "M0 300 Q 250 250 500 300 T 1000 300 T 1500 300",
    "M0 400 Q 250 350 500 400 T 1000 400 T 1500 400",
    "M0 500 Q 250 450 500 500 T 1000 500 T 1500 500",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
        {paths.map((path, i) => (
          <motion.path
            key={i}
            d={path}
            stroke="#84cc16" // Lime-500
            strokeWidth="1.5"
            strokeOpacity="0.4"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ 
              duration: 5 + i, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut" 
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const ServiceTab = () => {
  return (
    <Tabs defaultValue="real-estate" className="w-full">
      <div className="flex justify-center mb-12">
        <TabsList className="inline-flex h-auto p-1 bg-slate-100 rounded-full border border-slate-200">
          <TabsTrigger value="real-estate" className="rounded-full px-6 py-3 text-sm font-medium data-[state=active]:bg-lime-600 data-[state=active]:text-white transition-all">Real Estate</TabsTrigger>
          <TabsTrigger value="construction" className="rounded-full px-6 py-3 text-sm font-medium data-[state=active]:bg-lime-600 data-[state=active]:text-white transition-all">Construction</TabsTrigger>
          <TabsTrigger value="finance" className="rounded-full px-6 py-3 text-sm font-medium data-[state=active]:bg-lime-600 data-[state=active]:text-white transition-all">Finance</TabsTrigger>
          <TabsTrigger value="support" className="rounded-full px-6 py-3 text-sm font-medium data-[state=active]:bg-lime-600 data-[state=active]:text-white transition-all">Support</TabsTrigger>
        </TabsList>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <TabsContent value="real-estate" className="mt-0">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <Badge className="bg-lime-100 text-lime-800 hover:bg-lime-200 px-4 py-1 rounded-full">Most Popular</Badge>
                <h3 className="text-3xl font-bold text-slate-900">Scale Your Agency, Not Your Overhead.</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  From transaction coordination to prospecting. Save ~$76k/year per agent. Build a team that handles the backend while you close deals.
                </p>
                <ul className="space-y-3">
                  {["Transaction Coordinators", "Property Management Admin", "Inside Sales Agents (ISAs)", "Marketing Specialists"].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-lime-500 mr-3" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link href="/real-estate-outsourcing">
                    <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 rounded-xl px-8">
                      Explore Real Estate
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2 relative h-[400px] bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200">
                 {/* Placeholder for a nice image or graphic */}
                 <div className="absolute inset-0 bg-gradient-to-br from-lime-50 to-slate-200 flex items-center justify-center">
                    <Building2 className="w-32 h-32 text-lime-200" />
                 </div>
                 <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm font-bold text-slate-900">Average Savings</p>
                            <p className="text-xs text-slate-500">Per Role / Year</p>
                        </div>
                        <span className="text-2xl font-black text-lime-600">$54,000+</span>
                    </div>
                 </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="construction" className="mt-0">
             <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 px-4 py-1 rounded-full">High Demand</Badge>
                <h3 className="text-3xl font-bold text-slate-900">Get Off the Tools, Get Into the Business.</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Estimating, takeoff, project admin, and scheduling. Stop drowning in paperwork at 10 PM and get your weekends back.
                </p>
                <ul className="space-y-3">
                  {["Estimators & Quantity Surveyors", "Project Administrators", "Procurement Assistants", "Safety Compliance Officers"].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link href="/construction-outsourcing">
                    <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 rounded-xl px-8">
                      Explore Construction
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2 relative h-[400px] bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200">
                 <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-slate-200 flex items-center justify-center">
                    <TrendingUp className="w-32 h-32 text-orange-200" />
                 </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="finance" className="mt-0">
             <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-4 py-1 rounded-full">CPA Qualified</Badge>
                <h3 className="text-3xl font-bold text-slate-900">Global Finance Talent. Local Standards.</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  CPA-qualified bookkeepers and accountants for a fraction of local cost. Xero, QuickBooks, and MYOB experts ready to deploy.
                </p>
                <ul className="space-y-3">
                  {["CPA Accountants", "Bookkeepers", "Payroll Specialists", "Financial Analysts"].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link href="/accounting-outsourcing">
                    <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 rounded-xl px-8">
                      Explore Finance
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2 relative h-[400px] bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-200 flex items-center justify-center">
                    <Calculator className="w-32 h-32 text-blue-200" />
                 </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="support" className="mt-0">
             <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 px-4 py-1 rounded-full">24/7 Coverage</Badge>
                <h3 className="text-3xl font-bold text-slate-900">Turn Support Into Your Competitive Edge.</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Omnichannel support teams (Voice, Email, Chat) that actually care about your customers. 24/7 availability without the burnout.
                </p>
                <ul className="space-y-3">
                  {["Customer Service Reps", "Technical Support", "Live Chat Agents", "Community Managers"].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link href="/virtual-assistant">
                    <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 rounded-xl px-8">
                      Explore Support
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2 relative h-[400px] bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200">
                 <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-slate-200 flex items-center justify-center">
                    <Headphones className="w-32 h-32 text-purple-200" />
                 </div>
              </div>
            </div>
          </TabsContent>
        </AnimatePresence>
      </div>
    </Tabs>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const brandLogos = [
    '/Global Brands/Gallery-Homes.webp',
    '/Global Brands/BoxBrownie.webp',
    '/Global Brands/Ballast.webp',
    '/Global Brands/Harcourts.webp',
    '/Global Brands/Compass.webp',
    '/Global Brands/Arizto.webp',
    '/Global Brands/McGrath.webp',
    '/Global Brands/BarryPlant.webp',
    '/Global Brands/Bayleys.webp',
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-lime-200 selection:text-lime-900">
      <ContentTracker 
        contentType="page" 
        contentId="home" 
        contentTitle="ShoreAgents - Professional Filipino Staff Leasing"
        pageSection="main"
      >
        <SideNav />

        {/* --- Hero Section --- */}
        <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
          {/* Video Background Layer */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-100"
            >
              <source src="/Video/veo31fastgeneratepreview_Create_me_a_Video_of_a_Productive_Phi_0.mp4" type="video/mp4" />
            </video>
            {/* Lighter Overlay - just enough for text readability */}
            <div className="absolute inset-0 bg-slate-950/40"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950"></div>
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(101,163,13,0.12),_rgba(2,6,23,1))] z-10 pointer-events-none"></div>
          
          <div className="absolute inset-0 z-10 pointer-events-none">
             <CustomBackgroundLines />
          </div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div style={{ y: headerY, opacity: headerOpacity }} className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-white/5 text-lime-400 hover:bg-white/10 border-lime-500/30 px-6 py-2 text-sm font-bold uppercase tracking-widest backdrop-blur-md rounded-full mb-4">
                  <Star className="w-3 h-3 mr-2 fill-lime-400" />
                  Trusted by 50+ Global Brands
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tight leading-[1.05]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Staff Leasing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-lime-200 to-lime-500">
                  Reimagined.
                </span>
              </motion.h1>
              
              <motion.p 
                className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-400 leading-relaxed font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Stop hiring freelancers. Start building <strong>assets</strong>.
                <br className="hidden md:block" />
                We build high-performance offshore teams for businesses that are ready to scale.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link href="/pricing">
                  <Button size="lg" className="h-16 px-10 text-lg bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold rounded-full shadow-[0_0_40px_-10px_rgba(132,204,22,0.6)] hover:shadow-[0_0_60px_-15px_rgba(132,204,22,0.8)] transition-all duration-300 transform hover:-translate-y-1">
                    Calculate Savings
                    <Calculator className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/we-got-talent">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-16 px-10 text-lg border-slate-700 text-slate-300 hover:text-white hover:bg-white/5 hover:border-white rounded-full backdrop-blur-sm bg-transparent"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Browse Talent
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-10 h-10 opacity-30" />
          </motion.div>
        </section>

        {/* --- Social Proof Ticker --- */}
        <div className="bg-white border-b border-slate-100 py-12">
          <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-10">Powering The Back Office Of</p>
          <Marquee gradient={true} gradientColor="white" speed={40}>
            {brandLogos.map((logo, i) => (
              <div key={i} className="mx-16 opacity-50 hover:opacity-100 transition-opacity duration-500 filter grayscale hover:grayscale-0">
                <Image src={logo} alt="Client Logo" width={160} height={80} className="object-contain h-12 w-auto" />
              </div>
            ))}
          </Marquee>
        </div>

        {/* --- The Problem / Solution (Interactive Comparison) --- */}
        <section className={sectionSpacing}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className={headingStyle}>The Outsourcing <span className="text-lime-600">Reality Check</span></h2>
              <p className={subHeadingStyle}>
                Most businesses fail at outsourcing because they treat it like a gig. We treat it like a business partnership.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* The Old Way */}
              <Card className="relative p-8 rounded-[2.5rem] bg-white border-slate-100 shadow-lg hover:shadow-xl transition-all duration-500 group">
                <div className="absolute -top-5 left-8 bg-red-50 text-red-600 px-6 py-2 rounded-full font-bold text-sm border border-red-100">Freelancer Chaos</div>
                <CardContent className="pt-8">
                  <ul className="space-y-6">
                    {[
                      "Works from home (unreliable power/internet)",
                      "High ghosting risk (zero accountability)",
                      "No data security or monitoring",
                      "You handle all HR, payroll, and legal",
                      "Zero management support when things break"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-slate-500 group-hover:text-slate-700 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center mr-4 shrink-0 text-sm font-bold border border-red-100">✕</div>
                        <span className="mt-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* The ShoreAgents Way */}
              <Card className="relative p-8 md:p-10 rounded-[2.5rem] bg-slate-900 text-white shadow-2xl border border-slate-800 transform md:scale-105 overflow-hidden">
                <div className="absolute -top-5 right-8 bg-lime-500 text-slate-900 px-6 py-2 rounded-full font-bold shadow-lg shadow-lime-500/20 z-20">ShoreAgents Standard</div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl -mr-20 -mt-20 z-0"></div>
                
                <CardContent className="relative z-10 pt-8">
                  <h3 className="text-3xl font-bold mb-8 flex items-center text-white">
                    <Shield className="w-8 h-8 text-lime-400 mr-4" />
                    Enterprise Grade
                  </h3>
                  <ul className="space-y-6">
                    {[
                      "100% Office-Based (Enterprise Fiber + Backup Power)",
                      "Dedicated HR, IT, and Success Managers",
                      "Biometric Security & Data Protection Protocols",
                      "We handle all Legal, Payroll, Taxes & Benefits",
                      "University-Educated Professionals Only"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center text-lg">
                        <div className="w-8 h-8 rounded-full bg-lime-500 flex items-center justify-center mr-4 shrink-0 border border-lime-400 shadow-[0_0_15px_rgba(132,204,22,0.4)]">
                          <Check className="w-4 h-4 text-slate-900 stroke-[3]" />
                        </div>
                        <span className="text-slate-200 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* --- Service Buckets (Tabbed Explorer) --- */}
        <section className={cn(sectionSpacing, "bg-slate-50/50")}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 border-lime-500 text-lime-700 bg-lime-50 px-4 py-1">Our Expertise</Badge>
              <h2 className={headingStyle}>Specialized Divisions</h2>
              <p className={subHeadingStyle}>
                We don't just hire "VAs". We build specialized teams for specific industries.
              </p>
            </div>

            <ServiceTab />
          </div>
        </section>

        {/* --- The 7-Day Hiring Sprint --- */}
        <section className={cn(sectionSpacing, "bg-white relative overflow-hidden")}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className={headingStyle}>The <span className="text-lime-600">7-Day</span> Sprint</h2>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  We've stripped away the fluff. Here is the exact process to get your new team member live in under a week.
                </p>
                
                <div className="space-y-8">
                  {[
                    { title: "Strategy Call", desc: "We dissect your bottlenecks and build the perfect role description." },
                    { title: "Sourcing", desc: "Our AI & Recruiters scan 250,000+ candidates to find your Top 3." },
                    { title: "You Interview", desc: "Video interviews with the best. You make the final call." },
                    { title: "Go Live", desc: "We handle contracts and setup. They start working for you." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg shadow-lg z-10 relative border-2 border-slate-900">
                          {i + 1}
                        </div>
                        {i !== 3 && <div className="w-0.5 h-full bg-slate-200 my-2"></div>}
                      </div>
                      <div className="pb-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-slate-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Link href="/how-it-works">
                    <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 h-14 rounded-xl text-lg">
                      See Detailed Process
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                 <div className="absolute inset-0 bg-gradient-to-br from-lime-400 to-lime-600 rounded-[3rem] rotate-3 opacity-20 blur-2xl"></div>
                 <div className="relative bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden shadow-2xl border border-slate-800">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    
                    <Zap className="w-16 h-16 text-lime-400 mb-8" />
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">Why wait 4 months?</h3>
                    <p className="text-lg text-slate-300 leading-relaxed mb-10">
                      Traditional recruitment takes 45-90 days. We maintain a pre-vetted pool of talent ready to interview immediately.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                        <div className="text-3xl font-bold text-lime-400 mb-1">250k+</div>
                        <div className="text-sm text-slate-400">Candidate Database</div>
                      </div>
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                        <div className="text-3xl font-bold text-lime-400 mb-1">7 Days</div>
                        <div className="text-sm text-slate-400">Average Time to Hire</div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Founder / Authority Section --- */}
        <section className={cn(sectionSpacing, "bg-slate-50")}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-xl border border-slate-100">
              {/* Decorative Quote Mark */}
              <div className="absolute top-8 left-8 text-lime-100">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H17.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H8.0166V21H5.0166Z" />
                </svg>
              </div>

              <div className="relative z-10 grid md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-4">
                  <div className="w-full aspect-[4/5] rounded-[2rem] bg-slate-200 overflow-hidden shadow-lg relative group">
                    <Image
                      src="/Stephen-Atcheler.jpg" 
                      alt="Stephen Atcheler" 
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="md:col-span-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">From One Business Owner to Another</h3>
                  <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                    <p>
                      "I didn't start a BPO because I wanted to run a call center. I started it because I was running a Real Estate agency in Australia and I was <strong>drowning</strong> in admin work.
                    </p>
                    <p>
                      I moved to the Philippines to solve my own problem. What I built—the office, the systems, the training—became ShoreAgents. We don't sell 'cheap labor'. We sell the exact same system I used to scale my own business."
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-4">
                    <div>
                      <p className="font-bold text-slate-900 text-xl">Stephen Atcheler</p>
                      <p className="text-lime-600 font-medium">Founder & CEO</p>
                    </div>
                    <div className="h-10 w-px bg-slate-200 mx-2"></div>
                    <Image src="/ShoreAgents-Logo.png" alt="ShoreAgents" width={120} height={30} className="h-8 w-auto opacity-50 grayscale" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Final CTA --- */}
        <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(132,204,22,0.15),_rgba(15,23,42,0))]"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight">
              Ready to <span className="text-lime-500">Scale?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              Join 50+ global brands who have transformed their operations with ShoreAgents. 
              No long-term lock-in contracts. Just results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/pricing">
                <Button size="lg" className="h-16 px-12 text-xl bg-lime-600 hover:bg-lime-500 text-white font-bold rounded-full shadow-xl shadow-lime-900/20 transition-all hover:-translate-y-1">
                  View Pricing Models
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-16 px-12 text-xl border-slate-700 text-slate-300 hover:text-white hover:bg-white/10 rounded-full bg-transparent transition-all hover:-translate-y-1">
                  Book Strategy Call
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
      </ContentTracker>
    </div>
  );
}
