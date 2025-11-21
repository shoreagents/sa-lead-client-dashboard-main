'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer
} from 'recharts';
import { 
  CheckCircle2, 
  TrendingUp, 
  ArrowRight, 
  FileText,
  Users,
  ShieldAlert,
  Calculator,
  ChevronDown,
  PlayCircle,
  AlertTriangle,
  MapPin,
  Clock,
  CalendarClock,
  Quote,
  Building2,
  Globe,
  Check
} from 'lucide-react';
import Link from "next/link";

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const CostCalculator = () => {
  const [hourlyRate, setHourlyRate] = useState(15);
  const [trainingHours, setTrainingHours] = useState(60);
  const [mgmtHours, setMgmtHours] = useState(4);
  const [yourRate, setYourRate] = useState(150);
  const [showChart, setShowChart] = useState(false);

  const cheapVACost = hourlyRate * 40 * 52;
  const hiddenCost = (trainingHours * yourRate) + (mgmtHours * yourRate * 52) + 2000 + 5000;
  const productivityLoss = 8000;
  const totalRealCost = cheapVACost + hiddenCost + productivityLoss;
  
  const shoreAgentsCost = (22 * 40 * 52) + 5000; 

  const data = [
    { name: '"Cheap" VA', Base: cheapVACost, Hidden: hiddenCost + productivityLoss, Total: totalRealCost },
    { name: 'ShoreAgents', Base: shoreAgentsCost, Hidden: 2000, Total: shoreAgentsCost + 2000 }
  ];

  return (
    <div className={cn("bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden", sectionSpacing)}>
      <div className="p-8 md:p-12 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
            <Calculator className="w-6 h-6 text-lime-400" />
          </div>
          <h3 className="text-2xl font-bold">The Real Cost Calculator</h3>
        </div>
        <p className="text-slate-300 mb-8 text-lg max-w-2xl relative z-10">
          Drag the sliders to see the <strong>true</strong> cost of a "cheap" $15/hr VA vs. a managed solution.
        </p>

        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-slate-300">"Cheap" VA Hourly Rate</label>
                <span className="font-bold text-lime-400">${hourlyRate}/hr</span>
              </div>
              <input type="range" min="5" max="30" step="1" value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-lime-500" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-slate-300">Your Hourly Value</label>
                <span className="font-bold text-lime-400">${yourRate}/hr</span>
              </div>
              <input type="range" min="50" max="500" step="10" value={yourRate} onChange={(e) => setYourRate(Number(e.target.value))} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-lime-500" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-slate-300">Weekly Mgmt Hours</label>
                <span className="font-bold text-lime-400">{mgmtHours} hrs/wk</span>
              </div>
              <input type="range" min="1" max="10" step="1" value={mgmtHours} onChange={(e) => setMgmtHours(Number(e.target.value))} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-lime-500" />
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-center backdrop-blur-sm">
            <div className="text-center mb-6">
              <p className="text-slate-400 text-sm uppercase tracking-wider mb-1">True Annual Cost</p>
              <AnimatePresence mode="wait">
                <motion.div key={totalRealCost} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-4xl md:text-5xl font-black text-red-500">
                  ${totalRealCost.toLocaleString()}
                </motion.div>
              </AnimatePresence>
              <p className="text-sm text-slate-400 mt-2">vs. advertised ${(hourlyRate * 40 * 52).toLocaleString()}</p>
            </div>
            <Button className="mt-6 w-full bg-lime-600 hover:bg-lime-500 text-white font-bold py-6 text-lg shadow-lg shadow-lime-900/20 transition-all" onClick={() => setShowChart(!showChart)}>
              {showChart ? "Hide Chart" : "Visualize the Difference"}
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showChart && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="bg-white p-8">
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                  <XAxis type="number" tickFormatter={(value) => `$${value/1000}k`} />
                  <YAxis dataKey="name" type="category" width={100} fontWeight="bold" />
                  <Tooltip cursor={{fill: '#f1f5f9'}} formatter={(value) => `$${Number(value).toLocaleString()}`} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }} />
                  <Legend wrapperStyle={{paddingTop: '20px'}} />
                  <Bar dataKey="Base" stackId="a" fill="#94a3b8" radius={[0, 0, 0, 0]} name="Base Salary" />
                  <Bar dataKey="Hidden" stackId="a" fill="#ef4444" radius={[0, 4, 4, 0]} name="Hidden Costs (Training, Mgmt, Rework)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ReadinessQuiz = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    { q: "Is your annual revenue over $500k?", weight: 2 },
    { q: "Do you have documented processes (SOPs)?", weight: 2 },
    { q: "Can you dedicate 5 hours/week to management?", weight: 1 },
    { q: "Are you looking for a quick fix for a chaotic business?", weight: -5 },
  ];

  const handleAnswer = (yes: boolean) => {
    if (yes) setScore(s => s + questions[step].weight);
    if (step < questions.length - 1) setStep(s => s + 1);
    else setShowResult(true);
  };

  return (
    <Card className="border-none shadow-xl bg-white relative overflow-hidden mb-8">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100">
        <motion.div className="h-full bg-lime-500" animate={{ width: `${((step + 1) / questions.length) * 100}%` }} />
      </div>
      <CardHeader className="text-center pt-8 pb-2">
        <CardTitle className="text-xl font-bold">Are You Actually Ready?</CardTitle>
        <CardDescription>Take the 30-second reality check.</CardDescription>
      </CardHeader>
      <CardContent className="min-h-[200px] flex flex-col justify-center items-center p-6">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div key={step} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="w-full text-center">
              <h3 className="text-lg font-medium text-slate-800 mb-8 min-h-[3.5rem] flex items-center justify-center">{questions[step].q}</h3>
              <div className="flex gap-4 justify-center w-full">
                <Button variant="outline" size="lg" onClick={() => handleAnswer(false)} className="flex-1 border-red-100 text-red-600 hover:bg-red-50 hover:text-red-700">No</Button>
                <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white flex-1" onClick={() => handleAnswer(true)}>Yes</Button>
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center w-full">
              {score > 3 ? (
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-lime-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">You Are Ready!</h3>
                    <p className="text-sm text-gray-600">Don't waste your foundation on cheap labor.</p>
                  </div>
                  <Button className="w-full bg-lime-600 text-white font-bold shadow-lg shadow-lime-200 hover:shadow-xl transition-all">Get Strategy Plan</Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Proceed with Caution</h3>
                    <p className="text-sm text-gray-600">Focus on documenting your processes first.</p>
                  </div>
                  <Button variant="outline" onClick={() => {setStep(0); setScore(0); setShowResult(false)}} className="w-full">Try Again</Button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

const ServiceExplorer = () => {
  const [activeCategory, setActiveCategory] = useState("admin");
  const categories = [
    { id: "admin", label: "Admin & Ops", icon: FileText },
    { id: "marketing", label: "Marketing", icon: TrendingUp },
    { id: "sales", label: "Sales Support", icon: Users },
  ];
  const services = {
    admin: [
      { title: "MLS Listing Updates", desc: "Photos, descriptions, price changes—administrative grunt work." },
      { title: "Transaction Coordination", desc: "Document tracking, deadline management, compliance checklists." },
      { title: "CRM Management", desc: "Contact updates, pipeline tracking, data entry." },
    ],
    marketing: [
      { title: "Marketing Material Creation", desc: "Flyers, social media graphics, property brochures." },
      { title: "Listing Presentations", desc: "Preparing CMAs, property flyers, and brochures." },
      { title: "Social Media Management", desc: "Scheduling posts, engagement, community management." },
    ],
    sales: [
      { title: "Lead List Building", desc: "Research, prospecting, database compilation." },
      { title: "Appointment Scheduling", desc: "Internal coordination, showing bookings." },
      { title: "Email Inbox Management", desc: "Sorting, filtering, flagging priorities." },
    ]
  };

  return (
    <div className={cn("bg-slate-50 p-6 md:p-10 rounded-3xl border border-slate-100", sectionSpacing)}>
      <div className="flex justify-center gap-3 flex-wrap mb-10">
        {categories.map((cat) => {
          const IconComponent = cat.icon;
          return (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={cn("flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-sm", activeCategory === cat.id ? "bg-lime-600 text-white shadow-lg shadow-lime-200 scale-105 ring-2 ring-lime-600 ring-offset-2" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200")}>
              <IconComponent className="w-4 h-4" /> {cat.label}
            </button>
          );
        })}
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {services[activeCategory as keyof typeof services].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3, delay: i * 0.1 }}>
              <Card className={cn("h-full bg-white border-slate-100", cardHoverStyle)}>
                <CardHeader><CardTitle className="text-lg font-bold text-slate-800">{item.title}</CardTitle></CardHeader>
                <CardContent><p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p></CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Timeline = () => {
  const phases = [
    { title: "Month 1: Investment Phase", productivity: "Down 20-30%", desc: "You're SLOWER. Daily check-ins, creating training materials, answering questions. Value created: Minimal. Temptation to quit: Highest.", color: "bg-red-50 text-red-900 border-red-100", badge: "bg-red-100 text-red-700 border-red-200", icon: Clock },
    { title: "Month 2: Frustration Phase", productivity: "Down 10-15%", desc: "Small time savings appearing, but quality is inconsistent. Still 5-10 hours/week managing. Break-even on time.", color: "bg-orange-50 text-orange-900 border-orange-100", badge: "bg-orange-100 text-orange-700 border-orange-200", icon: AlertTriangle },
    { title: "Month 3: Turning Point", productivity: "Up 5-10%", desc: "VA becoming independent on routine tasks. Quality improving. Management drops to 3-5 hours. Small positive ROI starts.", color: "bg-yellow-50 text-yellow-900 border-yellow-100", badge: "bg-yellow-100 text-yellow-700 border-yellow-200", icon: CalendarClock },
    { title: "Month 4-6: Payoff Phase", productivity: "Up 20-40%", desc: "You've reclaimed 15+ hours. Management down to 2-3 hours/week. Real ROI visible: 3-5x return.", color: "bg-lime-50 text-lime-900 border-lime-100", badge: "bg-lime-100 text-lime-700 border-lime-200", icon: TrendingUp }
  ];

  return (
    <div className={cn("relative", sectionSpacing)}>
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 md:left-1/2 md:-ml-0.5"></div>
      {phases.map((phase, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className={cn("relative flex items-center mb-12 last:mb-0", i % 2 === 0 ? "md:flex-row-reverse" : "")}>
          <div className="hidden md:block w-1/2"></div>
          <div className="absolute left-8 md:left-1/2 -ml-4 w-8 h-8 rounded-full border-4 border-white shadow-md z-10 flex items-center justify-center bg-slate-900 text-white text-xs font-bold">{i + 1}</div>
          <div className="w-full md:w-1/2 pl-20 md:pl-12 md:pr-12">
            <div className={cn("p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow", phase.color)}>
              <div className="flex items-center justify-between mb-3"><h3 className="font-bold text-lg">{phase.title}</h3><phase.icon className="w-5 h-5 opacity-70" /></div>
              <Badge variant="outline" className={cn("mb-3 border font-semibold", phase.badge)}>Prod: {phase.productivity}</Badge>
              <p className="text-sm opacity-90 leading-relaxed">{phase.desc}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const RegionalComparison = () => {
  return (
    <Tabs defaultValue="philippines" className={cn("w-full", sectionSpacing)}>
      <TabsList className="grid w-full grid-cols-3 mb-8 p-1 bg-slate-100 rounded-full">
        <TabsTrigger value="philippines" className="rounded-full data-[state=active]:bg-lime-600 data-[state=active]:text-white">Philippines</TabsTrigger>
        <TabsTrigger value="latam" className="rounded-full data-[state=active]:bg-orange-500 data-[state=active]:text-white">Latin America</TabsTrigger>
        <TabsTrigger value="local" className="rounded-full data-[state=active]:bg-slate-900 data-[state=active]:text-white">Local</TabsTrigger>
      </TabsList>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="h-full shadow-lg border-slate-200 bg-white rounded-3xl overflow-hidden">
            <CardHeader className="bg-slate-50 border-b border-slate-100"><CardTitle className="flex items-center gap-2"><FileText className="w-5 h-5 text-slate-400"/> The Honest Breakdown</CardTitle></CardHeader>
            <CardContent className="space-y-6 pt-6">
                <TabsContent value="philippines" className="mt-0 space-y-4">
                    <div className="flex justify-between border-b border-slate-100 pb-3"><span className="text-slate-500">Cost</span><span className="font-bold text-lime-600 text-lg">$8 - $15/hr</span></div>
                    <div className="flex justify-between border-b border-slate-100 pb-3"><span className="text-slate-500">English</span><span className="font-medium text-slate-900">Excellent (Accent present)</span></div>
                    <div className="flex justify-between border-b border-slate-100 pb-3"><span className="text-slate-500">USA Time</span><span className="font-medium text-slate-900">Night Shift (Matches You)</span></div>
                    <div className="flex justify-between border-b border-slate-100 pb-3"><span className="text-slate-500">AU/NZ Time</span><span className="font-medium text-slate-900">Daytime (Perfect Fit)</span></div>
                     <div className="bg-lime-50 p-4 rounded-xl text-sm text-lime-800 mt-4 border border-lime-100"><strong>Best For:</strong> 95% of roles. Admin, Transaction Coord, CRM.</div>
                </TabsContent>
                <TabsContent value="latam" className="mt-0 space-y-4">
                    <div className="flex justify-between border-b border-slate-100 pb-3"><span className="text-slate-500">Cost</span><span className="font-bold text-orange-600 text-lg">$12 - $25/hr</span></div>
                    <div className="flex justify-between border-b border-slate-100 pb-3"><span className="text-slate-500">English</span><span className="font-medium text-slate-900">Native / Bilingual</span></div>
                    <div className="flex justify-between border-b border-slate-100 pb-3"><span className="text-slate-500">USA Time</span><span className="font-medium text-slate-900">Same Time Zone</span></div>
                     <div className="bg-orange-50 p-4 rounded-xl text-sm text-orange-800 mt-4 border border-orange-100"><strong>Best For:</strong> Phone-heavy sales roles needing native accent.</div>
                </TabsContent>
                <TabsContent value="local" className="mt-0 space-y-4">
                    <div className="flex justify-between border-b border-slate-100 pb-3"><span className="text-slate-500">Cost</span><span className="font-bold text-slate-900 text-lg">$25 - $60/hr</span></div>
                    <div className="flex justify-between border-b border-slate-100 pb-3"><span className="text-slate-500">English</span><span className="font-medium text-slate-900">Native</span></div>
                     <div className="bg-slate-100 p-4 rounded-xl text-sm text-slate-800 mt-4 border border-slate-200"><strong>Best For:</strong> Strategy, negotiations, high-touch client roles.</div>
                </TabsContent>
            </CardContent>
        </Card>
        <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/20 rounded-full blur-3xl -mr-12 -mt-12"></div>
             <h3 className="text-xl font-bold mb-6 flex items-center relative z-10"><MapPin className="mr-2 text-lime-400" /> Why We Choose Philippines</h3>
             <p className="text-slate-300 mb-6 leading-relaxed relative z-10">For USA clients, Filipino staff work night shifts to match your business hours perfectly. This allows for real-time collaboration on Slack/Zoom during YOUR day.</p>
             <p className="text-slate-300 mb-8 leading-relaxed relative z-10">For AU/NZ clients, the Philippines is only +2 to +4 hours ahead, offering a natural daytime fit without anyone working graveyard shifts.</p>
             <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm relative z-10 border border-white/10">
                <p className="text-lime-400 font-medium flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 shrink-0"/> Result: You get the best value (cost) with the best availability (time zone).</p>
             </div>
        </div>
      </div>
    </Tabs>
  );
};

export default function RealEstateOutsourcingPage() {
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-lime-200 selection:text-lime-900">
      <SideNav />
      
      {/* --- Hero Section --- */}
      <div className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(101,163,13,0.15),_rgba(15,23,42,1))]"></div>
        <CustomBackgroundLines />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div style={{ y: headerY, opacity: headerOpacity }} className="space-y-8">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              <Badge className="bg-lime-500/10 text-lime-400 hover:bg-lime-500/20 border-lime-500/20 px-6 py-2 text-sm font-bold uppercase tracking-widest backdrop-blur-md rounded-full">
                Warning: For $500K+ Agencies Only
              </Badge>
            </motion.div>
            <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1]" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              Real Estate Outsourcing: <br className="hidden md:block" />
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">$76,600 Reality</span> Nobody Tells You
            </motion.h1>
            <motion.p className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-400 leading-relaxed font-light" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
               Let me be blunt: If you're doing under $500K in revenue, outsourcing will likely lose you money. Here is the math nobody else will show you.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
              <Link href="/pricing"><Button size="lg" className="h-16 px-8 text-lg bg-lime-500 hover:bg-lime-400 text-slate-900 font-bold rounded-full shadow-[0_0_40px_-10px_rgba(132,204,22,0.5)] hover:shadow-[0_0_60px_-15px_rgba(132,204,22,0.6)] transition-all duration-300 transform hover:-translate-y-1">Get An Honest Quote <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}><ChevronDown className="w-8 h-8" /></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-20">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* --- Main Content Column --- */}
          <article className="lg:col-span-8 prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-lime-600 hover:prose-a:text-lime-700 prose-img:rounded-3xl">
            
            {/* Introduction */}
            <div className="mb-16">
               <p className="text-2xl font-medium text-slate-900 leading-relaxed">
                  Let me be blunt with you. I've been running offshore staff for real estate businesses for 15 years now. 
                  I've placed over 500 VAs. And here's what nobody else in this space will tell you: 
                  <span className="bg-lime-100 px-2 rounded font-semibold text-slate-900">if you're doing under $500K in annual revenue, real estate outsourcing will probably lose you money.</span>
               </p>
               <p>
                  Yeah, I just told you NOT to buy what I'm selling. That's because I reckon you deserve the truth, not another sales pitch about "saving 70% on costs" that conveniently forgets to mention you'll be slower for the first 60 days, not faster.
               </p>
               <p>
                  This guide is for medium to large real estate businesses in the USA, Australia, and New Zealand—agencies pulling $500K+ annually, managing 20-30+ properties, or running teams where your time is worth $150+/hour. If that's you, real estate outsourcing can legitimately transform your business. If that's not you yet? Bookmark this and come back when you're ready.
               </p>
            </div>

            {/* The Reality Check */}
            <h2 className={headingStyle}>The Reality Check: What Every Competitor Gets Wrong</h2>
            <p>
               Walk into any real estate conference and you'll hear the same promises: "Hire a VA for $15/hour! Save 70%! Scale instantly!" What they don't tell you is that 70% of real estate outsourcing partnerships fail within 90 days.
            </p>
            <p>
               Here's what actually happens: You hire someone for "$15/hour," spend 60 hours training them (that's $9,000 of YOUR time if you bill at $150/hour), invest in software licenses ($2,000+/year), manage them 4 hours per week ($31,200 annually), and deal with mistakes during the first 90 days ($5,000 in rework). Suddenly that "$15/hour VA" costs you $76,600 in year one.
            </p>
            
            <CostCalculator />

            <p>
               That's the real cost. Not the advertised hourly rate. Now, does that mean real estate outsourcing doesn't work? Not at all. I've got clients in Australia earning perfect 5/5 performance reviews after six years with the same VA. American real estate teams that have scaled from 3 to 8 agents with Filipino support handling all the backend.
            </p>
            <blockquote className="border-l-4 border-lime-500 pl-8 italic text-xl text-slate-800 my-12 bg-slate-50 p-8 rounded-r-2xl">
               "The difference? They went in with realistic expectations, proper revenue to support the investment, and understood they were building a long-term asset, not finding cheap labor."
            </blockquote>

            {/* When NOT to Outsource */}
            <h2 className={headingStyle}>When Real Estate Outsourcing Actually DESTROYS Your Business</h2>
            <p>Here's the section nobody else writes. When you should NOT outsource:</p>
            
            <div className={cn("grid md:grid-cols-2 gap-6 not-prose", sectionSpacing)}>
               <Card className="bg-red-50 border-red-100 shadow-sm hover:shadow-md transition-all">
                  <CardHeader>
                     <CardTitle className="flex items-center text-red-700"><ShieldAlert className="w-5 h-5 mr-2"/> Don't Outsource If:</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                     <li className="flex items-start text-red-900/80"><span className="mr-2">•</span> You're under $500K annual revenue</li>
                     <li className="flex items-start text-red-900/80"><span className="mr-2">•</span> You have no documented processes</li>
                     <li className="flex items-start text-red-900/80"><span className="mr-2">•</span> Your business pivots constantly</li>
                     <li className="flex items-start text-red-900/80"><span className="mr-2">•</span> You can't spare 5 hours/week to manage</li>
                  </CardContent>
               </Card>
                <Card className="bg-slate-50 border-slate-200 shadow-sm hover:shadow-md transition-all">
                  <CardHeader>
                     <CardTitle className="flex items-center text-slate-700"><ShieldAlert className="w-5 h-5 mr-2"/> NEVER Delegate:</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                     <li className="flex items-start text-slate-600"><span className="mr-2">•</span> High-stakes negotiations</li>
                     <li className="flex items-start text-slate-600"><span className="mr-2">•</span> Fair housing sensitive comms</li>
                     <li className="flex items-start text-slate-600"><span className="mr-2">•</span> Trust accounting</li>
                     <li className="flex items-start text-slate-600"><span className="mr-2">•</span> Strategic business decisions</li>
                  </CardContent>
               </Card>
            </div>
            
            <p>
               I've seen real estate businesses crash and burn because they outsourced the wrong things. One Sydney agency delegated client-facing communications to a VA with a heavy accent—lost three luxury listings worth $150K in commission because clients felt they weren't getting "premium service."
            </p>

            {/* What You CAN Outsource */}
            <h2 className={headingStyle}>What You CAN Outsource in Real Estate (And What Actually Works)</h2>
            <p>
               Right, now that I've scared off the people who shouldn't be doing this, let's talk about what works brilliantly when you're the right size business with proper expectations.
            </p>

            <ServiceExplorer />

            <p>
               The real advantage? Filipino VAs working Australian or New Zealand hours have a geographic gift. While American real estate agencies deal with their VAs working graveyard shifts (your 9am = their 9pm), Australian and Kiwi businesses get natural daytime overlap. Philippines is only +2 to +4 hours ahead—your business hours ARE their business hours.
            </p>

            {/* The 90-Day Timeline */}
            <h2 className={headingStyle}>The 90-Day Timeline: Why You'll Be Slower Before You're Faster</h2>
            <p>
               Every competitor promises "immediate time savings" and "instant scale." That's absolute rubbish. Here's what actually happens:
            </p>

            <Timeline />

            <p>
               Most failures happen in Month 1-2. People expect immediate results, get frustrated when they're actually SLOWER initially, and quit before reaching the payoff phase. That's why setting realistic expectations matters more than selling the dream.
            </p>

            {/* Regional Comparison */}
            <h2 className={headingStyle}>Philippines vs Latin America vs Local: The Honest Comparison</h2>
            <p>Not all offshore locations are equal, and nobody gives you the straight goods on this.</p>
            
            <RegionalComparison />

            <h2 className={headingStyle}>Real Success: What Actually Works in Practice</h2>
            <p>I'm not going to make up bullshit case studies. Here are real clients:</p>
            
            <div className={cn("grid md:grid-cols-2 gap-6 not-prose", sectionSpacing)}>
               {[
                  { title: "Barry Plant Property Management", loc: "Australia", desc: "Started with one property management specialist. Result: Successful integration protecting their brand while improving efficiency." },
                  { title: "Century 21 Rich River", loc: "Australia", desc: "Management's assessment: 'The whole team there are legends.' Not generic praise—that's 'we couldn't run without them' recognition." },
                  { title: "Jason Gard Real Estate", loc: "Australia", desc: "Three years later: Perfect performance reviews, handling system automation, considering hybrid work because the trust is absolute." },
                  { title: "Professionals McDowell", loc: "New Zealand", desc: "Perfect 5/5 performance ratings. 'If we could clone her we would' from management." }
               ].map((caseStudy, i) => (
                  <Card key={i} className={cn("bg-white border-slate-100", cardHoverStyle)}>
                     <CardHeader>
                        <CardTitle className="text-lg font-bold text-slate-800">{caseStudy.title}</CardTitle>
                        <CardDescription className="flex items-center text-lime-600"><Globe className="w-3 h-3 mr-1"/> {caseStudy.loc}</CardDescription>
                     </CardHeader>
                     <CardContent>
                        <p className="text-slate-600 text-sm leading-relaxed">{caseStudy.desc}</p>
                     </CardContent>
                  </Card>
               ))}
            </div>

            <p>
               What do these success stories have in common? They started conservative (one person, not a full team). They measured results professionally. They committed long-term. And they integrated culturally. That's the blueprint. Not sexy, not fast, but it works.
            </p>

          </article>

          {/* --- Sticky Sidebar --- */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              <ReadinessQuiz />
              
              <Card className="bg-slate-900 text-white border-slate-800 overflow-hidden relative group shadow-2xl rounded-3xl">
                 <div className="absolute inset-0 bg-lime-600/20 blur-3xl group-hover:bg-lime-600/30 transition-all duration-700"></div>
                 <CardContent className="relative z-10 p-8 text-center">
                   <h3 className="text-2xl font-bold mb-2">Ready to Scale?</h3>
                   <p className="text-slate-400 mb-6 text-sm">
                     If you passed the readiness quiz and understand the costs, let's build your custom team.
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
                       <span>Target Revenue</span>
                       <span className="font-bold text-slate-900">$500K+</span>
                     </div>
                     <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                       <span>Real Year 1 Cost</span>
                       <span className="font-bold text-red-600">~$76,600</span>
                     </div>
                     <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                       <span>ROI Timeline</span>
                       <span className="font-bold text-lime-600">Month 4-6</span>
                     </div>
                     <div className="pt-2">
                       <span className="block mb-2 font-medium text-slate-900">Best Roles:</span>
                       <div className="flex flex-wrap gap-2">
                         <Badge variant="secondary" className="bg-slate-100 text-slate-600">Admin</Badge>
                         <Badge variant="secondary" className="bg-slate-100 text-slate-600">CRM</Badge>
                         <Badge variant="secondary" className="bg-slate-100 text-slate-600">Marketing</Badge>
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
             Your Next Step: Are You Actually Ready?
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Most people reading this aren't ready. That's fine—bookmark it and come back when your revenue hits $500K+. 
            <br/><br/>
            But if you <strong>are</strong> ready, we're not the cheapest. We're not the biggest. But we're the ones telling you NOT to hire unless you're actually ready.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pricing">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-xl transition-all">
                View Pricing Models
              </Button>
            </Link>
             <Link href="/contact">
              <Button size="lg" variant="outline" className="px-12 py-8 text-xl font-bold rounded-2xl border-slate-300 hover:bg-white text-slate-700">
                Book Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
