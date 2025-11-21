"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { SideNav } from "@/components/layout/SideNav";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  CheckCircle2,
  XCircle,
  DollarSign,
  Clock,
  AlertTriangle,
  AlertCircle,
  ArrowRight,
  Building2,
  Moon,
  TrendingUp,
  FileText,
  Phone,
  Calculator,
  Users,
  ChevronDown,
  MapPin,
  Check
} from "lucide-react";
import Link from "next/link";

// --- Shared Styles ---
const cardHoverStyle = "hover:shadow-xl hover:-translate-y-1 transition-all duration-300";
const sectionSpacing = "my-16 md:my-24";
const headingStyle = "text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight";

// --- Components ---

const CustomBackgroundLines = () => {
  const paths = [
    "M720 450C720 450 742.459 440.315 755.249 425.626C768.039 410.937 778.88 418.741 789.478 401.499",
    "M720 450C720 450 741.044 435.759 753.062 410.636C765.079 385.514 770.541 386.148 782.73 370.489",
    "M720 450C720 450 712.336 437.768 690.248 407.156C668.161 376.544 672.543 394.253 665.951 365.784",
    "M720 450C720 450 738.983 448.651 790.209 446.852C841.436 445.052 816.31 441.421 861.866 437.296",
    "M720 450C720 450 696.366 458.841 682.407 472.967C668.448 487.093 673.23 487.471 647.919 492.882",
  ];

  const colors = ["#65a30d", "#4d7c0f", "#84cc16", "#3f6212", "#a3e635"];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        {paths.map((path, i) => (
          <motion.path
            key={i}
            d={path}
            stroke={colors[i % colors.length]}
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ 
              duration: 3 + i, 
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

export default function PropertyManagementOutsourcingPage() {
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-lime-200 selection:text-lime-900">
      <SideNav />
      
      {/* --- Hero Section --- */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(101,163,13,0.15),_rgba(15,23,42,1))]"></div>
        <CustomBackgroundLines />
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center h-full pt-16 pb-12">
          <motion.div style={{ y: headerY, opacity: headerOpacity }} className="space-y-6 md:space-y-8 flex flex-col items-center justify-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              <Badge className="bg-lime-500/10 text-lime-400 hover:bg-lime-500/20 border-lime-500/20 px-6 py-2 text-sm font-bold uppercase tracking-widest backdrop-blur-md rounded-full">
                For 100+ Rental Units
              </Badge>
            </motion.div>
            <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight md:leading-[1.1] max-w-5xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              Property Management <br className="hidden md:block" />
              Virtual Assistant: <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">The $30,000 Decision</span>
            </motion.h1>
            <motion.p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed font-light px-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
               Managing 100+ rental units? You're spending roughly <strong>30 hours every week on admin work</strong> that someone else could handle for $1,500/month. That's data entry, tenant emails, maintenance coordination, rent reminders, and CRM updates—work that keeps your operation running but doesn't require you specifically.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 md:pt-8 w-full sm:w-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
              <Link href="/pricing" className="w-full sm:w-auto"><Button size="lg" className="w-full sm:w-auto h-14 md:h-16 px-8 text-base md:text-lg bg-lime-500 hover:bg-lime-400 text-slate-900 font-bold rounded-full shadow-[0_0_40px_-10px_rgba(132,204,22,0.5)] hover:shadow-[0_0_60px_-15px_rgba(132,204,22,0.6)] transition-all duration-300 transform hover:-translate-y-1">Get Management Quote <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <Link href="/case-studies" className="w-full sm:w-auto"><Button size="lg" variant="outline" className="w-full sm:w-auto h-14 md:h-16 px-8 text-base md:text-lg border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white font-bold rounded-full transition-all duration-300">View Success Stories</Button></Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600/50" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}><ChevronDown className="w-8 h-8" /></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-20">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* --- Main Content Column --- */}
          <article className="lg:col-span-8 prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-lime-600 hover:prose-a:text-lime-700 prose-img:rounded-3xl">
            
            {/* Intro */}
            <div className="mb-16">
               <p className="text-2xl font-medium text-slate-900 leading-relaxed">
                  At 100 units, you're either paying $50,000+ for local admin staff or burning 1,500+ hours per year doing it yourself.
               </p>
               <p>
                  Here's the reality most property management companies figure out too late: A Philippines virtual assistant costs $19,800 
                  per year and handles 70% of your back-office work while you sleep*. They work US daytime hours (night shift for them), 
                  you wake up to completed tasks, and you save $30,000-50,000 annually compared to local staff.
               </p>
               
               <blockquote className="border-l-4 border-amber-500 pl-8 italic text-xl text-slate-800 my-12 bg-amber-50 p-8 rounded-r-2xl">
                 "But only if you set it up right."
               </blockquote>
            </div>

            {/* The Numbers Section */}
            <h2 className={headingStyle}>The Numbers Everyone Avoids Talking About</h2>
            <p className="text-lg text-slate-600 mb-8">Let's break down the real costs.</p>
            
            <div className="grid md:grid-cols-2 gap-6 not-prose mb-12">
                <Card className={cn("border-red-200 bg-red-50/50", cardHoverStyle)}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-red-900">Local Admin Staff in the US</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between text-sm"><span className="text-slate-600">Salary:</span><span className="font-bold">$40,000-55,000</span></div>
                    <div className="flex justify-between text-sm"><span className="text-slate-600">Benefits:</span><span className="font-bold">$8,000-12,000</span></div>
                    <div className="flex justify-between text-sm"><span className="text-slate-600">Office space:</span><span className="font-bold">$3,000-6,000</span></div>
                    <Separator className="bg-red-200" />
                    <div className="flex justify-between font-bold text-lg text-red-700"><span>Total:</span><span>$51k-73k / year</span></div>
                  </CardContent>
                </Card>

                <Card className={cn("border-lime-200 bg-lime-50/50", cardHoverStyle)}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-lime-900">Philippines VA (Shore Agents)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between text-sm"><span className="text-slate-600">Monthly cost:</span><span className="font-bold">$1,650/mo</span></div>
                    <div className="flex justify-between text-sm"><span className="text-slate-600">Setup fee:</span><span className="font-bold">$1,100 (one-time)</span></div>
                    <Separator className="bg-lime-200" />
                    <div className="flex justify-between font-bold text-sm text-lime-800"><span>Year 1:</span><span>$20,900 total</span></div>
                    <div className="flex justify-between font-bold text-lg text-lime-700"><span>Year 2+:</span><span>$19,800 / year</span></div>
                  </CardContent>
                </Card>
            </div>

            <Card className="bg-lime-50 border-lime-200 shadow-sm mb-16 not-prose">
                <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-lime-100 p-3 rounded-full"><Calculator className="w-6 h-6 text-lime-600" /></div>
                    <div>
                        <p className="text-slate-800 leading-relaxed mb-2">
                            At 100 units generating $15,000/month in management fees, that VA represents <strong>11% of your gross revenue</strong>. 
                            Local staff? <strong>28-40%</strong>.
                        </p>
                        <p className="text-slate-900 font-bold text-sm">
                            The math isn't complicated. You're paying 3x more for the same work output.
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* What Your VA Actually Does */}
            <h2 className={headingStyle}>What Your VA Actually Does</h2>
            <p className="text-lg text-slate-600 mb-8">Think about what buried you last week.</p>

            <div className="space-y-8 not-prose mb-16">
                <Card className="bg-slate-50 border-slate-200 shadow-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><XCircle className="w-5 h-5 text-red-500"/> Your Typical Week Without a VA</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-slate-600">
                        <p><strong className="text-slate-900">Monday:</strong> 47 unread tenant emails, 12 maintenance requests.</p>
                        <p><strong className="text-slate-900">Tuesday:</strong> 4 hours entering work orders into AppFolio.</p>
                        <p><strong className="text-slate-900">Wednesday:</strong> Chasing late rent, updating Zillow listings.</p>
                        <p><strong className="text-slate-900">Thursday:</strong> Invoices, owner statements, scheduling.</p>
                        <p><strong className="text-slate-900">Friday:</strong> Caught up. Until Monday hits again.</p>
                    </CardContent>
                </Card>

                <Card className="bg-white border-lime-200 shadow-lg">
                    <CardHeader className="bg-lime-50/50 border-b border-lime-100">
                        <CardTitle className="flex items-center gap-2 text-lime-900"><CheckCircle2 className="w-5 h-5 text-lime-600"/> Here's what changes with a VA</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                         <p className="text-slate-600 leading-relaxed">
                            Your VA works US business hours—9am to 5pm your time. They're handling tasks during your day while you focus on owner 
                            relationships, complex negotiations, property acquisitions, and the work that actually grows your business.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Need something done? Assign it in your task system. They're responding to emails while you're in meetings.
                        </p>
                        <div className="bg-lime-50 p-4 rounded-xl text-sm font-medium text-lime-800 flex items-center gap-2">
                            <Check className="w-4 h-4" /> You're not waiting for overnight work. You're delegating during the day.
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* The Night Shift Reality */}
            <h2 className={headingStyle}>The Night Shift Reality (For Them)</h2>
            <p className="text-lg text-slate-600 mb-8">
                Let's address what every BPO company glosses over: <strong>Your VA works night shift in the Philippines.</strong>
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose mb-16">
                <Card className="bg-purple-50 border-purple-200">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-purple-100 p-2 rounded-full"><Moon className="w-5 h-5 text-purple-600" /></div>
                            <h3 className="font-bold text-purple-900">The Reality</h3>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Manila is 12-16 hours ahead. Your 9am = their 9pm. They're working graveyard shift to match US business hours. 
                            Most companies hide this. We don't.
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-lime-50 border-lime-200">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-lime-100 p-2 rounded-full"><Check className="w-5 h-5 text-lime-600" /></div>
                            <h3 className="font-bold text-lime-900">Our Solution</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0 mt-0.5"/> Health & wellness programs</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0 mt-0.5"/> Shift rotation options</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0 mt-0.5"/> Burnout detection monitoring</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            {/* What They Handle vs Don't */}
            <h2 className={headingStyle}>What They Handle (And What They Don't)</h2>
            
            <div className="not-prose mb-16">
                <div className="bg-green-50 rounded-3xl p-8 border border-green-100 mb-8">
                     <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-2"><CheckCircle2 className="w-6 h-6 text-green-600"/> Where VAs Excel</h3>
                     <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: "Tenant Communication", items: ["Lease renewals", "Application processing", "Move-in docs"] },
                            { title: "Software Management", items: ["AppFolio/Buildium entry", "Work order creation", "CRM updates"] },
                            { title: "Financial Admin", items: ["Invoice processing", "Expense categorization", "Owner reports"] },
                            { title: "Marketing", items: ["Zillow updates", "Listing management", "Lead tracking"] }
                        ].map((cat, i) => (
                            <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-green-100">
                                <h4 className="font-bold text-slate-900 mb-3">{cat.title}</h4>
                                <ul className="space-y-2">
                                    {cat.items.map((item, j) => (
                                        <li key={j} className="text-sm text-slate-600 flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                     </div>
                </div>

                <Card className="bg-red-50 border-red-100">
                    <CardContent className="p-8">
                         <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2"><XCircle className="w-5 h-5 text-red-600"/> Where They Don't</h3>
                         <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-slate-900 mb-2">Physical Tasks</h4>
                                <p className="text-sm text-slate-600">Showings, inspections, emergency response. They can't do a walkthrough in Dallas from Manila.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-2">Strategic Decisions</h4>
                                <p className="text-sm text-slate-600">Complex lease negotiations, owner conflicts, legal compliance. They execute; you decide.</p>
                            </div>
                         </div>
                    </CardContent>
                </Card>
            </div>

            {/* Platform Section */}
            <h2 className={headingStyle}>Why Our Platform Actually Matters</h2>
            <p className="text-lg text-slate-600 mb-8">Most BPO companies operate on "trust us, they're working." That's bullshit.</p>

            <div className="grid md:grid-cols-2 gap-6 not-prose mb-16">
                <Card className={cn("border-slate-200 bg-slate-50", cardHoverStyle)}>
                    <CardHeader><CardTitle className="text-lg font-bold">Live Dashboard</CardTitle></CardHeader>
                    <CardContent className="space-y-3">
                        <p className="text-sm text-slate-600 mb-4">Updates every 60 seconds showing:</p>
                        {["Clock-in/out tracking", "Live productivity scores", "Task completion status", "Exact hours worked"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-lime-600" /> {item}
                            </div>
                        ))}
                    </CardContent>
                </Card>
                <Card className={cn("border-slate-200 bg-white", cardHoverStyle)}>
                    <CardHeader><CardTitle className="text-lg font-bold">Built-in Task Mgmt</CardTitle></CardHeader>
                    <CardContent className="space-y-3">
                         <p className="text-sm text-slate-600 mb-4">No more "did you get my email?":</p>
                         {["Assign tasks with due dates", "Real-time status tracking", "File attachments included", "Workload visibility"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-lime-600" /> {item}
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

            {/* Getting Started */}
            <h2 className={headingStyle}>Getting Started</h2>
            <div className="space-y-4 not-prose mb-16">
                 {[
                    { title: "We qualify you first", desc: "Free 15-min consultation. Under 50 units? We'll tell you to wait." },
                    { title: "Browse candidates", desc: "Pre-vetted database. Filter by AppFolio/Buildium experience." },
                    { title: "Interview process", desc: "Interview 2-4 candidates over 7 days. We handle scheduling." },
                    { title: "Onboarding", desc: "Tracked live in dashboard. Contracts, equipment, access setup." },
                    { title: "Training (30-60 days)", desc: "Week 1-2 Loom videos. Week 3-4 supervised. Month 3+ independent." }
                 ].map((step, i) => (
                    <Card key={i} className="border-l-4 border-l-lime-500 bg-white shadow-sm hover:shadow-md transition-all">
                        <CardContent className="p-4 flex gap-4 items-start">
                            <span className="font-black text-slate-200 text-3xl -mt-1">{i + 1}</span>
                            <div>
                                <h3 className="font-bold text-slate-900">{step.title}</h3>
                                <p className="text-sm text-slate-600">{step.desc}</p>
                            </div>
                        </CardContent>
                    </Card>
                 ))}
            </div>

            {/* The Bottom Line */}
            <Card className="bg-slate-900 text-white border-slate-800 not-prose mb-16 shadow-2xl rounded-3xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-lime-600/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <CardContent className="p-8 md:p-10 relative z-10">
                    <h2 className="text-3xl font-bold mb-6 text-white">The Bottom Line</h2>
                    <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                        <p>
                            If you're managing 100+ units and either paying $50,000+ for local admin staff or working 60-hour weeks doing it yourself, 
                            you're making an expensive mistake.
                        </p>
                        <p>
                            A Philippines VA costs $1,650/month. They work US business hours (night shift for them, but that's our problem to manage, 
                            not yours). They handle 70% of your admin workload. You save $30,000-50,000 per year minimum.
                        </p>
                        <p>
                            Yes, they work graveyard shift. Yes, training takes 30-60 days. Yes, you need basic processes documented. But the economics 
                            work, the time savings are real, and we've been doing this since 2012.
                        </p>
                        <p className="font-medium text-white">
                            We're not selling fairy tales. We're selling a business model that lets you scale to 200, 300, 500+ units without bleeding 
                            cash on expensive local staff doing work that doesn't require local presence.
                        </p>
                    </div>
                </CardContent>
            </Card>

          </article>

          {/* --- Sticky Sidebar --- */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              <Card className="bg-slate-900 text-white border-slate-800 overflow-hidden relative group shadow-2xl rounded-3xl">
                 <div className="absolute inset-0 bg-lime-600/20 blur-3xl group-hover:bg-lime-600/30 transition-all duration-700"></div>
                 <CardContent className="relative z-10 p-8 text-center">
                   <h3 className="text-2xl font-bold mb-2">Ready to Scale?</h3>
                   <p className="text-slate-400 mb-6 text-sm">
                     If you manage 100+ units and have basic processes, let's build your team.
                   </p>
                   <Link href="/pricing">
                    <Button className="w-full bg-lime-500 hover:bg-lime-400 text-slate-900 font-bold py-6 text-lg shadow-lg shadow-lime-900/20 rounded-xl transition-transform hover:scale-105">
                      Get Started
                    </Button>
                   </Link>
                   <p className="mt-4 text-xs text-slate-500">No hidden fees. No BS.</p>
                 </CardContent>
              </Card>

               <Card className="bg-white border-slate-200 shadow-lg rounded-3xl">
                  <CardHeader className="pb-2">
                     <CardTitle className="text-lg font-bold flex items-center gap-2"><FileText className="w-4 h-4 text-lime-600"/> Quick Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-600 space-y-4 pt-2">
                     <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                       <span>Target Units</span>
                       <span className="font-bold text-slate-900">100+</span>
                     </div>
                     <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                       <span>Annual Savings</span>
                       <span className="font-bold text-lime-600">$30k - $50k</span>
                     </div>
                     <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                       <span>Time to Value</span>
                       <span className="font-bold text-slate-900">30-60 Days</span>
                     </div>
                     <div className="pt-2">
                       <span className="block mb-2 font-medium text-slate-900">Key Roles:</span>
                       <div className="flex flex-wrap gap-2">
                         <Badge variant="secondary" className="bg-slate-100 text-slate-600">Admin</Badge>
                         <Badge variant="secondary" className="bg-slate-100 text-slate-600">Maintenance</Badge>
                         <Badge variant="secondary" className="bg-slate-100 text-slate-600">Leasing</Badge>
                       </div>
                     </div>
                  </CardContent>
               </Card>
            </div>
          </aside>

        </div>
      </div>

      {/* --- Final CTA --- */}
      <section className="py-32 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
             Ready to Stop Overpaying for Admin Work?
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Schedule a free consultation and we'll tell you straight if you're ready or not.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pricing">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-xl transition-all">
                Get Property Management Quote
              </Button>
            </Link>
             <Link href="/case-studies">
              <Button size="lg" variant="outline" className="px-12 py-8 text-xl font-bold rounded-2xl border-slate-300 hover:bg-white text-slate-700">
                View Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
