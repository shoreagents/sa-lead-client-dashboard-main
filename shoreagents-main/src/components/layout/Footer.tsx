"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Star,
  User,
  Globe,
  ArrowRight,
  Linkedin,
  Youtube,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  
  // Hide footer on employee profile pages and user dashboard
  if (pathname?.startsWith('/employee/') || pathname?.startsWith('/user-dashboard')) {
    return null
  }

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-500/50 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="block">
              <Image
                src="/ShoreAgents-Logo.png"
                alt="ShoreAgents Logo"
                width={200}
                height={45}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm max-w-sm">
              Stephen Atcheler, founder of Shore Agents, scaled his own agency before building the gold standard in Philippine outsourcing. We don't just hire staff; we build assets for your business.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-lime-500/10 rounded-full border border-lime-500/20">
                <Star className="w-3.5 h-3.5 text-lime-400 fill-lime-400" />
                <span className="text-xs font-medium text-lime-300">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 rounded-full border border-blue-500/20">
                <User className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-xs font-medium text-blue-300">Derek Gallimore Approved</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
               {[
                 { icon: Facebook, href: "https://www.facebook.com/ShoreAgents" },
                 { icon: Twitter, href: "https://x.com/ShoreAgents" },
                 { icon: Linkedin, href: "https://www.linkedin.com/company/shoreagents/" },
                 { icon: Instagram, href: "https://www.instagram.com/shore_agents/" },
                 { icon: Youtube, href: "https://www.youtube.com/@shoreagents" }
               ].map((social, i) => (
                 <Link 
                   key={i} 
                   href={social.href}
                   target="_blank"
                   className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-lime-600 hover:border-lime-500 transition-all duration-300"
                 >
                   <social.icon className="w-4 h-4" />
                 </Link>
               ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 col-span-6">
            <h3 className="font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-lime-500 rounded-full"></span>
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              {['One Agent', 'Build a Team', 'Create Workforce', 'Real Estate VA', 'Prop Mgmt Assistant', 'Construction VA', 'SEO Assistant', 'AI Assistant'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-lime-400 transition-colors block hover:translate-x-1 duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 col-span-6">
            <h3 className="font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-lime-500 rounded-full"></span>
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              {['About Us', 'How It Works', 'Our Team', 'Case Studies', 'Pricing', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-lime-400 transition-colors block hover:translate-x-1 duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h3 className="font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-lime-500 rounded-full"></span>
              Get in Touch
            </h3>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-lime-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-lime-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Clark Freeport Zone</p>
                  <p className="text-xs text-slate-400">Angeles City, Pampanga, Philippines</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-lime-500/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-lime-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">hello@shoreagents.com</p>
                  <p className="text-xs text-slate-400">Response within 2 hours</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-lime-500/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-lime-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Mon-Fri: 8AM-6PM PHT</p>
                  <p className="text-xs text-slate-400">We work on your timezone</p>
                </div>
              </div>
              
              <Button className="w-full bg-lime-600 hover:bg-lime-500 text-white font-bold">
                Book Strategy Call
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} Shore Agents. Professional Filipino Staff Leasing.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-lime-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-lime-400 transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-lime-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
