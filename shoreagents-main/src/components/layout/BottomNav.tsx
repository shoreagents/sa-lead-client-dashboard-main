"use client"

import React, { useEffect, useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { 
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle
} from '@/components/ui/drawer'
import { 
  ChevronDown,
  MessageCircle,
  Users, 
  Target,
  TrendingUp,
  BookOpen,
  Sparkles
} from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
// import { useEngagementTracking } from '@/lib/useEngagementTracking'
import ChatConsole from '@/components/ui/ai-chat-console'
import { InterviewRequestModal, InterviewRequestData } from '@/components/ui/interview-request-modal'
import { candidateTracker } from '@/lib/candidateTrackingService'
import { getEmployeeCardData } from '@/lib/api'
import { UserQuoteService, UserQuoteSummary } from '@/lib/userQuoteService'
import { useAuth } from '@/lib/auth-context'
import { PricingCalculatorModal } from '@/components/ui/pricing-calculator-modal'
import { ProgressIndicatorCard } from '@/components/ui/progress-indicator-card'
import { ResourceCard } from '@/components/ui/resource-card'
import { InsightCard } from '@/components/ui/insight-card'

export function BottomNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false)
  const [showPricingModal, setShowPricingModal] = useState(false)
  
  // AI Recommendation Data
  const [topCandidate, setTopCandidate] = useState<Record<string, unknown> | null>(null)
  const [isLoadingCandidate, setIsLoadingCandidate] = useState(false)
  const [recentQuotes, setRecentQuotes] = useState<UserQuoteSummary[]>([])
  const [isLoadingQuote, setIsLoadingQuote] = useState(false)
  const [recommendedCandidates, setRecommendedCandidates] = useState<Array<{
    id: string;
    name: string;
    position: string;
    avatar?: string;
    score: number;
    isFavorite?: boolean;
    bio?: string;
    expectedSalary?: number;
  }>>([])
  const [isLoadingRecommended, setIsLoadingRecommended] = useState(false)
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  // NEW: AI-powered recommendations
  const [aiRecommendations, setAiRecommendations] = useState<any[]>([])
  const [aiInsight, setAiInsight] = useState<any>(null)
  const [isLoadingAI, setIsLoadingAI] = useState(false)
  const [userStage, setUserStage] = useState<string>('new_lead')
  
  // Use the engagement tracking hook only on client side
  // const { // recordInteraction } = useEngagementTracking()
  const { appUser } = useAuth()
  
  // Listen for custom event to open pricing calculator (from Stage 2 form)
  useEffect(() => {
    const handleOpenPricingCalculator = () => {
      console.log('📊 Custom event received: Opening pricing calculator');
      setShowPricingModal(true);
    };

    window.addEventListener('openPricingCalculator', handleOpenPricingCalculator);
    
    return () => {
      window.removeEventListener('openPricingCalculator', handleOpenPricingCalculator);
    };
  }, []);
  
  // Show/hide bottom nav based on scroll position
  useEffect(() => {
    let lastScrollY = window.scrollY
    let timer: NodeJS.Timeout

    const handleScroll = () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        const currentScrollY = window.scrollY
        
        // Show nav when scrolling up or at top, hide when scrolling down
        if (currentScrollY < lastScrollY || currentScrollY < 100) {
      setIsVisible(true)
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false)
        }
        
        lastScrollY = currentScrollY
      }, 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      clearTimeout(timer)
    }
  }, [])

  // Listen for custom event to close AI drawer
  useEffect(() => {
    const handleCloseAIDrawer = () => {
      setIsDrawerOpen(false)
    }

    window.addEventListener('closeAIDrawer', handleCloseAIDrawer)
    
    return () => {
      window.removeEventListener('closeAIDrawer', handleCloseAIDrawer)
    }
  }, [])

  // Data fetching functions
  const fetchTopCandidate = useCallback(async () => {
    try {
      console.log('🔄 Fetching top candidate...')
      setIsLoadingCandidate(true)
      
      let userId = null
      
      // Get user ID - either from authenticated user or device ID for anonymous users
      if (appUser?.user_id) {
        userId = appUser.user_id
        console.log('✅ Using authenticated user ID:', userId)
      } else {
        // For anonymous users, get device ID from localStorage
        if (typeof window !== 'undefined') {
          userId = localStorage.getItem('content_tracking_device_id')
          console.log('✅ Using device ID for anonymous user:', userId)
        }
      }

      if (!userId) {
        console.log('❌ No user ID or device ID available')
        setTopCandidate(null)
        return
      }

      // Get the most viewed candidate for this user
      const mostViewedData = await candidateTracker.getUserMostViewedCandidate(userId)
      
      if (!mostViewedData || !mostViewedData.candidate_id) {
        console.log('No most viewed candidate found for user')
        setTopCandidate(null)
          return
      }

      console.log('📊 Most viewed candidate data:', mostViewedData)

      // Get all employees to find the matching candidate
      const employees = await getEmployeeCardData()
      console.log(`📋 Fetched ${employees.length} employees from BPOC`)

      // Find the employee that matches the most viewed candidate
      let targetEmployee = employees.find(emp => emp.user.id === mostViewedData.candidate_id)
      
      // If not found by ID, try matching by name
      if (!targetEmployee && mostViewedData.candidate_name) {
        const candidateName = String(mostViewedData.candidate_name);
        console.log('🔍 Trying to match by name:', candidateName)
        targetEmployee = employees.find(emp => 
          emp.user.name.toLowerCase().includes(candidateName.toLowerCase()) ||
          candidateName.toLowerCase().includes(emp.user.name.toLowerCase())
        )
      }
      
      if (!targetEmployee) {
        console.log('Target employee not found in employee data')
        setTopCandidate(null)
        return
      }

      // Add the view duration as hotness score for display
      const employeeWithScore = {
        ...targetEmployee,
        hotnessScore: Number(mostViewedData.view_duration) || 0
      }

      console.log('✅ Setting top candidate:', employeeWithScore.user.name)
      setTopCandidate(employeeWithScore)
    } catch (error) {
      console.error('Error fetching top candidate:', error)
      setTopCandidate(null)
    } finally {
      setIsLoadingCandidate(false)
    }
  }, [appUser?.user_id])

  const fetchRecommendedCandidates = useCallback(async () => {
    if (!appUser?.user_id) {
      console.log('No user ID available for fetching recommended candidates')
      return
    }

    setIsLoadingRecommended(true)
    try {
      console.log('🔍 Fetching recommended candidates from recent quotes for user:', appUser.user_id)
      
      // Get all quotes for the user
      const quotesResult = await UserQuoteService.getAllQuotes(appUser.user_id)
      
      if (!quotesResult.success || !quotesResult.data) {
        console.log('No quotes found for user or error occurred')
        setRecommendedCandidates([])
        return
      }

      console.log('📊 Found quotes:', quotesResult.data.length)

      // Collect all recommended candidates from all quotes
      const allRecommendedCandidates: Array<{
        id: string;
        name: string;
        position: string;
        avatar?: string;
        score: number;
        isFavorite?: boolean;
        bio?: string;
        expectedSalary?: number;
      }> = []

      quotesResult.data.forEach((quote, index) => {
        console.log(`🔍 BottomNav Quote ${index + 1}:`, {
          id: quote.id,
          candidate_recommendations: quote.candidate_recommendations,
          recommendations_length: quote.candidate_recommendations?.length || 0
        })
        
        if (quote.candidate_recommendations && quote.candidate_recommendations.length > 0) {
          // Handle nested structure: extract recommendedCandidates from each role
          quote.candidate_recommendations.forEach((roleData: any) => {
            if (roleData.recommendedCandidates && roleData.recommendedCandidates.length > 0) {
              console.log(`✅ BottomNav Role (${roleData.roleTitle}): ${roleData.recommendedCandidates.length} candidates`)
              
              // Map the nested structure to the expected format
              const mappedCandidates = roleData.recommendedCandidates.map((candidate: any) => ({
                id: candidate.id,
                name: candidate.name,
                position: candidate.position,
                avatar: candidate.avatar,
                score: candidate.matchScore || candidate.overallScore || 0,
                isFavorite: candidate.isFavorite || false,
                bio: candidate.bio,
                expectedSalary: candidate.expectedSalary || 0
              }))
              
              allRecommendedCandidates.push(...mappedCandidates)
            }
          })
        } else {
          console.log(`❌ BottomNav No candidate recommendations in quote ${index + 1}`)
        }
      })

      // Remove duplicates based on candidate ID and sort by score
      const uniqueCandidates = allRecommendedCandidates.reduce((acc, candidate) => {
        const existing = acc.find(c => c.id === candidate.id)
        if (!existing || candidate.score > existing.score) {
          return acc.filter(c => c.id !== candidate.id).concat(candidate)
        }
        return acc
      }, [] as typeof allRecommendedCandidates)

      // Sort by score (highest first) and take top 5
      const topCandidates = uniqueCandidates
        .sort((a, b) => b.score - a.score)
        .slice(0, 5)

      console.log('📋 BottomNav All collected candidates:', allRecommendedCandidates.length)
      console.log('🔄 BottomNav Unique candidates after deduplication:', uniqueCandidates.length)
      console.log('🏆 BottomNav Top 5 candidates:', topCandidates)

      // Fetch all employee data and find matching profiles
      const allEmployeeData = await getEmployeeCardData()
      console.log(`🔍 Fetched ${allEmployeeData.length} employees from BPOC`)
      
      // Fetch profile pictures for each candidate
      const candidatesWithAvatars = topCandidates.map((candidate) => {
        try {
          // Find the employee profile that matches the candidate ID
          const employeeProfile = allEmployeeData.find(emp => emp.user.id === candidate.id)
          console.log(`🔍 Looking for employee with ID ${candidate.id}:`, employeeProfile ? 'Found' : 'Not found')
          
          if (employeeProfile && employeeProfile.user.avatar) {
            console.log(`✅ Found avatar for ${candidate.name}:`, employeeProfile.user.avatar)
            return {
              ...candidate,
              avatar: employeeProfile.user.avatar
            }
          }
          console.log(`❌ No avatar found for ${candidate.name}`)
          return candidate
        } catch (error) {
          console.log(`Could not fetch avatar for candidate ${candidate.id}:`, error)
          return candidate
        }
      })

      console.log('✅ Setting recommended candidates with avatars:', candidatesWithAvatars.length)
      setRecommendedCandidates(candidatesWithAvatars)
    } catch (error) {
      console.error('Error fetching recommended candidates:', error)
      setRecommendedCandidates([])
    } finally {
      setIsLoadingRecommended(false)
    }
  }, [appUser?.user_id])

  const fetchRecentQuotes = useCallback(async () => {
    if (!appUser?.user_id) {
      console.log('No user ID available for fetching recent quotes')
      return
    }

    setIsLoadingQuote(true)
    try {
      console.log('🔍 Fetching recent quotes for user:', appUser.user_id)
      
      const quotesResult = await UserQuoteService.getAllQuotes(appUser.user_id)
      
      if (quotesResult.success && quotesResult.data) {
        // Get the top 3 quotes
        const topQuotes = quotesResult.data.slice(0, 3)
        console.log('✅ Setting recent quotes:', topQuotes.length)
        setRecentQuotes(topQuotes)
      } else {
        console.log('No quotes found for user')
        setRecentQuotes([])
      }
    } catch (error) {
      console.error('Error fetching recent quotes:', error)
      setRecentQuotes([])
    } finally {
      setIsLoadingQuote(false)
    }
  }, [appUser?.user_id])

  // NEW: Fetch AI recommendations
  const fetchAIRecommendations = useCallback(async () => {
    try {
      setIsLoadingAI(true)
      console.log('🤖 Fetching AI recommendations...')
      
      let userId = appUser?.user_id
      if (!userId && typeof window !== 'undefined') {
        userId = localStorage.getItem('content_tracking_device_id') || undefined
      }
      
      if (!userId) {
        console.log('❌ No user ID available for AI recommendations')
        setIsLoadingAI(false)
        return
      }
      
      const response = await fetch('/api/ai/recommendations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId })
      })
      
      if (!response.ok) {
        throw new Error('Failed to fetch AI recommendations')
      }
      
      const data = await response.json()
      console.log('✅ AI Recommendations received:', data)
      
      setAiRecommendations(data.recommendations || [])
      setAiInsight(data.insight || null)
      setUserStage(data.userStage || 'new_lead')
      
    } catch (error) {
      console.error('❌ Error fetching AI recommendations:', error)
    } finally {
      setIsLoadingAI(false)
    }
  }, [appUser?.user_id])

  // Fetch 100% AI data when drawer opens
  useEffect(() => {
    if (isDrawerOpen) {
      fetchAIRecommendations()
    }
  }, [isDrawerOpen, fetchAIRecommendations])


  const handleChatWithClaude = () => {
    // recordInteraction('chat')
    console.log('Chat button clicked - interaction recorded')
    setIsDrawerOpen(false) // Close drawer before opening chat
    setIsChatOpen(true)
  }


  // Handler functions
  const handleViewProfile = useCallback(() => {
    // recordInteraction('view-profile')
    console.log('View profile clicked')
    setIsDrawerOpen(false)
    router.push('/we-got-talent')
  }, [router])

  const handleAskForInterview = useCallback((candidateId?: string, candidateName?: string) => {
    // recordInteraction('interview-request')
    console.log('Ask for interview clicked for candidate:', candidateName, candidateId)
    setIsDrawerOpen(false)
    setIsInterviewModalOpen(true)
  }, [])

  const handleViewMatchedProfile = useCallback((candidateId?: string, candidateName?: string) => {
    // recordInteraction('view-profile')
    console.log('View matched profile clicked for candidate:', candidateName, candidateId)
      setIsDrawerOpen(false)
    if (candidateId) {
      router.push(`/employee/${candidateId}`)
    }
  }, [router])

  const handleSeePricing = useCallback(() => {
    // recordInteraction('navigation')
    console.log('See Pricing button clicked - interaction recorded')
    setIsDrawerOpen(false)
    router.push('/pricing')
  }, [router])

  const handleViewQuote = useCallback(() => {
    // recordInteraction('navigation')
    console.log('View Quote button clicked - interaction recorded')
    setIsDrawerOpen(false)
    router.push('/user-dashboard/quotation')
  }, [router])

  const handleCreateQuote = useCallback(() => {
    // recordInteraction('navigation')
    console.log('Create Quote button clicked - interaction recorded')
    setIsDrawerOpen(false) // Close the drawer first
    setShowPricingModal(true) // Then open the pricing modal
  }, [])

  const handleClosePricingModal = useCallback(() => {
    setShowPricingModal(false)
  }, [])

  const handleInterviewSubmit = async (data: InterviewRequestData) => {
    console.log('Interview request submitted:', data)
    setIsInterviewModalOpen(false)
    // Here you would typically send the data to your backend
  }

  const handleInterviewCancel = () => {
    console.log('Interview request cancelled')
    setIsInterviewModalOpen(false)
  }

  // Don't show on certain pages
  const hiddenPaths = ['/auth/signup', '/auth/login', '/auth/forgot-password']
  const isDashboardPage = pathname?.startsWith('/user-dashboard') || 
                         pathname?.startsWith('/admin-dashboard') ||
                         pathname?.startsWith('/employee/')
  
  if (hiddenPaths.includes(pathname) || isDashboardPage) {
    return null
  }

  return (
    <>
      {/* Bottom Navigation */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgb(101, 163, 13) 0%, rgb(132, 204, 22) 100%)',
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.15)'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-lime-50">
                <div className="text-sm font-medium">AI Recommendations</div>
                <div className="text-xs opacity-90">Discover your perfect team</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleChatWithClaude}
                className="text-lime-50 hover:bg-lime-600/20 hover:text-lime-100 transition-colors"
              >
                Chat with Maya
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDrawerOpen(true)}
                className="text-lime-50 hover:bg-lime-600/20 hover:text-lime-100 transition-colors flex items-center space-x-1"
              >
                <span>AI Recommendations</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDrawerOpen ? 'rotate-180' : ''
                  }`} 
                />
              </Button>
              </div>
          </div>
        </div>
      </div>
        
      {/* AI Recommendations Drawer */}
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent 
          className="max-h-[60vh] shadow-lg border-t-2 border-lime-200 max-w-6xl mx-auto"
          style={{
            backgroundColor: 'rgb(101, 163, 13)',
            '--vaul-overlay-bg': 'transparent',
            scrollbarGutter: 'stable'
          } as React.CSSProperties}
        >
          <DrawerHeader className="border-b border-lime-200 px-6 py-2" style={{ backgroundColor: 'rgb(101, 163, 13)' }}>
            <DrawerTitle className="text-lime-50">AI Recommendations</DrawerTitle>
          </DrawerHeader>
          
          {/* 100% AI-POWERED RECOMMENDATIONS */}
          <div className="px-6 py-6 bg-gradient-to-br from-lime-50 via-lime-100 to-lime-200 drawer-content-scrollable relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div 
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
              ></div>
            </div>
            
            {/* Floating Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-lime-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-lime-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-1000"></div>
              <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-lime-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            </div>
            
            {/* Content positioned above background elements */}
            <div className="relative z-10 max-w-6xl mx-auto">
              
              {/* 🤖 100% AI-POWERED RECOMMENDATIONS - NO OLD CODE */}
              
              {/* Loading State */}
              {isLoadingAI && (
                <div className="flex items-center justify-center py-12">
                  <div className="text-center space-y-4">
                    <div className="animate-spin rounded-full border-4 border-lime-600 border-t-transparent w-16 h-16 mx-auto" />
                    <div>
                      <p className="text-lg text-gray-800 font-bold">AI is analyzing your journey...</p>
                      <p className="text-sm text-gray-600 mt-1">Claude is crafting personalized recommendations</p>
                    </div>
                  </div>
                </div>
              )}

              {/* AI Insight Banner (Full Width Hero) */}
              {!isLoadingAI && aiInsight && (
                <div className="mb-4">
                  <Card className="overflow-hidden border-2 border-purple-300 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 p-6 text-white">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <Target className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold mb-2">{aiInsight.title}</h2>
                          <p className="text-purple-100 text-base mb-4">{aiInsight.description}</p>
                          <div className="flex items-center space-x-3">
                            <Button
                              onClick={() => router.push(aiInsight.actionUrl)}
                              size="lg"
                              className="bg-white text-purple-600 hover:bg-purple-50 font-semibold"
                            >
                              {aiInsight.action}
                            </Button>
                            <span className="text-sm text-purple-200">
                              💡 {aiInsight.reason}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )}

              {/* AI Recommendations Grid (6 cards) */}
              {!isLoadingAI && aiRecommendations.length > 0 && (
                <div className="grid grid-cols-3 gap-4">
                  {aiRecommendations.map((rec, index) => (
                    <ResourceCard key={index} recommendation={rec} />
                  ))}
                </div>
              )}

              {/* Empty State (No AI Data Yet) */}
              {!isLoadingAI && aiRecommendations.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 bg-lime-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-lime-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Welcome to ShoreAgents!</h3>
                  <p className="text-sm text-gray-600 mb-4">Start exploring to get personalized AI recommendations</p>
                  <Button
                    onClick={() => router.push('/how-it-works')}
                    className="bg-lime-600 hover:bg-lime-700 text-white"
                  >
                    Get Started
                  </Button>
                </div>
              )}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
      
      {/* AI Chat Console */}
      <ChatConsole 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />

      {/* Interview Request Modal */}
        <InterviewRequestModal
          isOpen={isInterviewModalOpen}
        onClose={handleInterviewCancel}
          onSubmit={handleInterviewSubmit}
        candidateName="Selected Candidate"
        candidatePosition="Position"
        />

      {/* Pricing Calculator Modal */}
      <PricingCalculatorModal
        isOpen={showPricingModal}
        onClose={handleClosePricingModal}
      />
    </>
  )
}
