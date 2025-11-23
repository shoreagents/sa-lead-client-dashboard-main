"use client";

import { SideNav } from "@/components/layout/SideNav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FadeIn } from "@/components/ui/fade-in";
import { 
  Rocket, 
  Bell, 
  Clock, 
  CheckCircle, 
  Sparkles,
  Mail,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ManagementSoftwarePage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the email to your backend
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-lime-50/30 to-white">
      <SideNav />
      
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 md:py-32 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-lime-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8">
          <FadeIn>
            <Badge variant="outline" className="mb-4 border-lime-600 text-lime-700 px-6 py-2.5 text-sm font-semibold hover:bg-lime-50 transition-colors">
              <Rocket className="w-4 h-4 mr-2" />
              COMING SOON
            </Badge>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-lime-600 via-lime-500 to-lime-600 bg-clip-text text-transparent">
                  Management Software
                </span>
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl text-gray-700">
                  Is On The Way
                </span>
              </h1>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're building something powerful to help you manage your remote teams more effectively. Get notified when we launch!
            </p>
          </FadeIn>

          {/* Email Notification Form */}
          <FadeIn delay={0.3}>
            <Card className="max-w-md mx-auto border-2 border-lime-200 shadow-xl">
              <CardContent className="p-6">
                {!isSubmitted ? (
                  <form onSubmit={handleNotifyMe} className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Bell className="w-5 h-5 text-lime-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Get Early Access</h3>
                    </div>
                    <div className="flex gap-2">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1"
                      />
                      <Button 
                        type="submit" 
                        className="bg-lime-600 hover:bg-lime-700 whitespace-nowrap"
                      >
                        Notify Me
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500">
                      Be the first to know when we launch
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-4">
                    <CheckCircle className="w-12 h-12 text-lime-600 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      You're on the list!
                    </h3>
                    <p className="text-sm text-gray-600">
                      We'll notify you when it's ready
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </FadeIn>

          {/* Preview Image */}
          <FadeIn delay={0.4}>
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-lime-200">
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop"
                  alt="Management software preview"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <p className="text-white text-lg font-semibold">
                    Powerful tools to manage your remote workforce
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-lime-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center space-y-4 mb-12">
              <Badge className="bg-lime-600 text-white px-6 py-2.5 text-sm font-semibold shadow-md">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                WHAT'S COMING
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                Features In Development
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Here's what we're working on to make managing your remote teams easier
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <Card className="border-2 border-gray-100 hover:border-lime-300 transition-all hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-lime-600 to-lime-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Time Tracking
                  </h3>
                  <p className="text-gray-600">
                    Monitor work hours and productivity with detailed analytics
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="border-2 border-gray-100 hover:border-lime-300 transition-all hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-lime-600 to-lime-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Task Management
                  </h3>
                  <p className="text-gray-600">
                    Assign, track, and complete tasks with your team
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card className="border-2 border-gray-100 hover:border-lime-300 transition-all hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-lime-600 to-lime-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Team Communication
                  </h3>
                  <p className="text-gray-600">
                    Built-in messaging and collaboration tools
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center space-y-4 mb-12">
              <Badge className="bg-gray-900 text-white px-6 py-2.5 text-sm font-semibold">
                <Clock className="w-4 h-4 mr-2 inline" />
                DEVELOPMENT TIMELINE
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                When To Expect It
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="border-2 border-lime-300 bg-gradient-to-br from-lime-50 via-white to-lime-50/50 shadow-xl">
              <CardContent className="p-8 sm:p-12">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-lime-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Currently in Development</h3>
                      <p className="text-gray-600">
                        Our team is actively building and testing the core features
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bell className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Beta Launch Soon</h3>
                      <p className="text-gray-600">
                        Early access for registered users coming in the next few months
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Official Release</h3>
                      <p className="text-gray-600">
                        Full public launch with all features available
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-lime-200 text-center">
                  <p className="text-lg font-semibold text-lime-700">
                    Sign up above to be notified when we launch!
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-white to-lime-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Card className="border-2 border-lime-300 bg-gradient-to-br from-white via-lime-50/50 to-white shadow-2xl">
              <CardContent className="p-10 sm:p-14 space-y-6">
                <Sparkles className="w-16 h-16 text-lime-600 mx-auto" />
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Questions About Our Software?
                </h2>
                <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                  Get in touch with our team to learn more about what we're building
                </p>
                <Button 
                  size="lg"
                  onClick={() => window.location.href = '/gettingstart'}
                  className="bg-lime-600 hover:bg-lime-700 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105 px-8 py-6 text-base"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}




