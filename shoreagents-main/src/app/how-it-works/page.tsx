"use client";

import { SideNav } from "@/components/layout/SideNav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { FocusCards } from "@/components/ui/focus-cards";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { ArrowRight, Users, Clock, Award, Check, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function HowItWorksPage() {
  const systemCards = [
    {
      number: 1,
      title: "Candidate Browsing & Hiring",
      description: "Browse pre-vetted candidates, filter by skills and experience, request interviews with timezone conversion, and send hire requests - all in one platform.",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop"
    },
    {
      number: 2,
      title: "Onboarding System",
      description: "Complete background checks, digital contract signing, desktop app installation, and work schedule configuration with real-time progress tracking.",
      src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop"
    },
    {
      number: 3,
      title: "Time & Attendance Tracking",
      description: "Desktop app with clock in/out, timezone conversion, break scheduling, real-time status updates every 60 seconds, and complete activity tracking.",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
    },
    {
      number: 4,
      title: "Productivity Dashboard",
      description: "Live activity status, daily productivity scores, attendance tracking, hours worked to the minute, task completion rates, and 7-day/30-day trend views.",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
    },
    {
      number: 5,
      title: "Task Management",
      description: "Create tasks with titles, descriptions, due dates, add files and links, track status (To Do, In Progress, Completed), and receive notifications when tasks are done.",
      src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop"
    },
    {
      number: 6,
      title: "Performance Review System",
      description: "Automatic review reminders at Month 1, 3, 5, and every 6 months. Rate work quality, productivity, communication, and reliability. DOLE compliant with auto-tracking.",
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop"
    },
    {
      number: 7,
      title: "Support & Communication",
      description: "Submit support tickets to your Account Manager, optional Team Feed for culture building, and AI Assistant to help staff with work questions and tasks.",
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop"
    },
    {
      number: 8,
      title: "Desktop App (Staff Side)",
      description: "Installed before Day 1, tracks time and activity, clock in/out interface, break scheduling, monitors productivity metrics, and sends data to platform automatically.",
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop"
    }
  ];

  const systemsContent = [
    {
      title: "1. CANDIDATE BROWSING & HIRING",
      description: (
        <div className="space-y-6">
          <p className="text-base font-semibold text-gray-900">What Exists:</p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Browse pre-vetted candidates</p>
                <p className="text-sm text-gray-600">Filter by: skills, experience, personality type</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">View profiles with:</p>
                <p className="text-sm text-gray-600">Work history, test scores, communication samples</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">"Request Interview" button</p>
                <p className="text-sm text-gray-600">Interview scheduling with timezone conversion</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">"Send Hire Request" button</p>
                <p className="text-sm text-gray-600">Platform contacts candidate and handles setup</p>
              </div>
            </div>
          </div>
        </div>
      ),
      content: (
        <div className="h-full w-full relative">
          <Image
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop"
            alt="Candidate Browsing"
            width={800}
            height={600}
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      ),
    },
    {
      title: "2. ONBOARDING SYSTEM",
      description: (
        <div className="space-y-6">
          <p className="text-base font-semibold text-gray-900">What Exists:</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <span>Background checks (IDs, police clearances, education)</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <span>Digital contract signing</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <span>Desktop app installation on staff computer</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <span>Work schedule configuration with timezone conversion</span>
            </div>
          </div>
          <div className="mt-4 p-4 bg-lime-50 rounded-lg border border-lime-200">
            <p className="font-semibold text-gray-900 mb-3">Client Progress Tracking:</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Personal Info: Complete</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>IDs Verified: Complete</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Contract Signed: Complete</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Equipment Setup: In Progress</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Waiting for Start Date</span>
              </div>
            </div>
          </div>
        </div>
      ),
      content: (
        <div className="h-full w-full relative">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop"
            alt="Onboarding"
            width={800}
            height={600}
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      ),
    },
    {
      title: "3. TIME & ATTENDANCE TRACKING",
      description: (
        <div className="space-y-6">
          <p className="text-base font-semibold text-gray-900">What Exists:</p>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-900 mb-2">Desktop App Features:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Clock in/out</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Timezone conversion (Manila ↔ Client time)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Break scheduling by staff</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Real-time status updates (every 60 seconds)</span>
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">Activity Tracking:</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-lime-600" />
                  <span>Hours worked</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-lime-600" />
                  <span>Active time vs. idle time</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-lime-600" />
                  <span>Tasks completed</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-lime-600" />
                  <span>Apps used</span>
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">Dashboard Shows:</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-lime-600" />
                  <span>Clock in/out times</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-lime-600" />
                  <span>Late arrivals with flags</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-lime-600" />
                  <span>Productivity scores (0-100%)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-lime-600" />
                  <span>"Clocked In / On Break / Idle" status</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-lime-600" />
                  <span>Timeline view of workday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      content: (
        <div className="h-full w-full relative">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
            alt="Time Tracking"
            width={800}
            height={600}
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      ),
    },
    {
      title: "4. PRODUCTIVITY DASHBOARD",
      description: (
        <div className="space-y-6">
          <div>
            <p className="text-base font-semibold text-gray-900 mb-3">What Client Sees:</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Live activity status (who's clocked in, on break, idle)</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Daily productivity scores</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Attendance & punctuality tracking</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Hours worked (to the minute)</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Task completion rates</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">7-day and 30-day trend views</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <p className="font-semibold text-gray-900 mb-2">What Management Sees (Behind Scenes):</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Granular data (websites, apps, idle patterns)</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Used for coaching staff</span>
              </div>
            </div>
            <p className="text-sm text-amber-900 mt-3 font-semibold">
              Client doesn't see this level of detail
            </p>
          </div>
        </div>
      ),
      content: (
        <div className="h-full w-full relative">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
            alt="Productivity Dashboard"
            width={800}
            height={600}
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      ),
    },
    {
      title: "5. TASK MANAGEMENT",
      description: (
        <div className="space-y-6">
          <p className="text-base font-semibold text-gray-900">What Exists:</p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Create tasks with:</p>
                <p className="text-sm text-gray-600">Title, description, due date, assignee</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Add files, links, instructions</p>
                <p className="text-sm text-gray-600">Priority levels</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <span>Notifications when tasks completed</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <span>Staff can create personal tasks</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <span>Client sees what staff is working on</span>
            </div>
          </div>
          <div className="p-4 bg-lime-50 rounded-lg border border-lime-200">
            <p className="font-semibold text-gray-900 mb-2">Task Status Tracking:</p>
            <div className="space-y-2 text-sm">
              <p>📋 To Do</p>
              <p>⚡ In Progress</p>
              <p>✅ Completed</p>
            </div>
          </div>
        </div>
      ),
      content: (
        <div className="h-full w-full relative">
          <Image
            src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop"
            alt="Task Management"
            width={800}
            height={600}
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      ),
    },
    {
      title: "6. PERFORMANCE REVIEW SYSTEM",
      description: (
        <div className="space-y-6">
          <p className="text-base font-semibold text-gray-900">What Exists:</p>
          <div className="p-4 bg-lime-50 rounded-lg border border-lime-200">
            <p className="font-semibold text-gray-900 mb-2">Automatic Review Reminders:</p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-lime-600" />
                <span>Month 1, Month 3, Month 5</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-lime-600" />
                <span>Every 6 months thereafter</span>
              </div>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-2">Client fills form rating:</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-lime-600" />
                <span>Work quality</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-lime-600" />
                <span>Productivity</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-lime-600" />
                <span>Communication</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-lime-600" />
                <span>Reliability</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-lime-600" />
              <span>Management reviews and finalizes</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-lime-600" />
              <span>Staff receives feedback</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-lime-600" />
              <span>DOLE compliant</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-lime-600" />
              <span>Auto-tracking based on start date</span>
            </div>
          </div>
        </div>
      ),
      content: (
        <div className="h-full w-full relative">
          <Image
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop"
            alt="Performance Reviews"
            width={800}
            height={600}
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      ),
    },
    {
      title: "7. SUPPORT & COMMUNICATION",
      description: (
        <div className="space-y-6">
          <p className="text-base font-semibold text-gray-900">What Exists:</p>
          <div className="p-4 bg-lime-50 rounded-lg border border-lime-200">
            <p className="font-semibold text-gray-900 mb-2">Support Tickets</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-lime-600" />
                <span>Submit questions/requests</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-lime-600" />
                <span>Account Manager responds</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Examples: bonuses, shift changes, billing questions</p>
          </div>
          <div className="p-4 bg-lime-50 rounded-lg border border-lime-200">
            <p className="font-semibold text-gray-900 mb-1">Team Feed <span className="text-sm bg-lime-600 text-white px-2 py-1 rounded">Optional</span></p>
            <div className="space-y-2 mt-2">
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-lime-600" />
                <span>Staff can post updates</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-lime-600" />
                <span>Team sees each other's posts</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Culture building tool</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="font-semibold text-gray-900 mb-1">AI Assistant <span className="text-sm bg-gray-600 text-white px-2 py-1 rounded">For Staff</span></p>
            <div className="space-y-2 mt-2">
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-gray-600" />
                <span>Staff can ask work questions</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-gray-600" />
                <span>Help with formatting, emails, summaries</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Client doesn't manage it</p>
          </div>
        </div>
      ),
      content: (
        <div className="h-full w-full relative">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop"
            alt="Support"
            width={800}
            height={600}
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      ),
    },
    {
      title: "8. DESKTOP APP (Staff Side)",
      description: (
        <div className="space-y-6">
          <div className="p-4 bg-gradient-to-r from-lime-50 to-lime-100 rounded-lg border-2 border-lime-200">
            <p className="font-bold text-gray-900 text-base">
              Installed on staff computer before Day 1
            </p>
          </div>
          <p className="text-base font-semibold text-gray-900">What It Does:</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <span>Tracks time and activity</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <span>Clock in/out interface</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <span>Break scheduling</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <span>Monitors productivity metrics</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <span>Sends data to platform</span>
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r from-lime-100 to-lime-200 border-2 border-lime-300 rounded-lg">
            <p className="text-sm font-bold text-lime-900 text-center">
              Everything runs automatically - staff just clock in and work
            </p>
          </div>
        </div>
      ),
      content: (
        <div className="h-full w-full relative">
          <Image
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop"
            alt="Desktop App"
            width={800}
            height={600}
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      ),
    },
  ];

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
        
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <FadeIn>
            <Badge variant="outline" className="mb-4 border-lime-600 text-lime-700 px-6 py-2.5 text-sm font-semibold hover:bg-lime-50 transition-colors">
              PLATFORM OVERVIEW
            </Badge>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                SHORE AGENTS{" "}
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-lime-600 via-lime-500 to-lime-600 bg-clip-text text-transparent">
                  8 CORE SYSTEMS
                </span>
              </h1>
              
              <h2 className="text-2xl font-semibold text-gray-700 max-w-4xl mx-auto">
                Everything You Get When You Work With Us
              </h2>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From hiring to management - complete transparency into how our platform handles every aspect of your offshore team.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
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
          </FadeIn>

          {/* Trust indicators */}
          <FadeIn delay={0.4}>
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
          </FadeIn>
        </div>
      </section>

      {/* 8 Systems - Focus Cards Grid (4x2) */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our 8 Core Systems
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Hover over each card to learn more about what we provide
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <FocusCards cards={systemCards} />
          </FadeIn>
        </div>
      </section>

      {/* Detailed Breakdown - Sticky Scroll Reveal */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-lime-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <Badge className="bg-lime-600 text-white px-6 py-2.5 text-sm font-semibold shadow-md mb-4">
                DETAILED BREAKDOWN
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What Each System Does
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Scroll through to explore complete features and capabilities
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <StickyScroll content={systemsContent} />
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-white to-lime-50/50">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="bg-gradient-to-br from-white via-lime-50/50 to-white shadow-2xl rounded-2xl border-2 border-lime-300 p-10 sm:p-14 space-y-10 text-center">
              <Badge className="bg-lime-600 text-white px-6 py-2.5 text-sm font-semibold shadow-md">
                GET STARTED
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                Ready to Experience the Platform?
              </h2>
              <p className="text-base text-gray-700 max-w-2xl mx-auto">
                All 8 systems working together to make offshore hiring <span className="font-bold text-lime-600">simple</span>
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                <Button 
                  size="lg"
                  onClick={() => window.location.href = '/gettingstart'}
                  className="w-full sm:w-auto bg-lime-600 hover:bg-lime-700 text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 px-10 py-7 text-base font-semibold"
                >
                  Start Your Process Today
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.location.href = '/pricing'}
                  className="w-full sm:w-auto border-2 border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white transition-all transform hover:scale-105 px-10 py-7 text-base font-semibold"
                >
                  See Pricing Calculator
                </Button>
              </div>

              <div className="text-center pt-4">
                <p className="text-base text-gray-600">
                  Questions? Let's talk!
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
