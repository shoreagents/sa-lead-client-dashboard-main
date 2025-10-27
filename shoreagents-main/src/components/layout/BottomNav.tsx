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
  BookOpen
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

// All available case studies with metadata (defined outside component to prevent re-creation)
const ALL_CASE_STUDIES = [
  { id: 'team-expansion-success', title: 'Team Expansion Success', slug: 'team-expansion-success', description: 'Successfully expanded team through offshore staffing' },
  { id: 'business-systems-implementation-success', title: 'Business Systems Implementation', slug: 'business-systems-implementation-success', description: 'Streamlined business systems and processes' },
  { id: 'offshore-staffing-success', title: 'Offshore Staffing Success', slug: 'offshore-staffing-success', description: 'Achieved growth through strategic offshore hiring' },
  { id: 'business-referral-partnerships', title: 'Business Referral Partnerships', slug: 'business-referral-partnerships', description: 'Built strong referral network partnerships' },
  { id: 'immediate-business-transformation', title: 'Immediate Business Transformation', slug: 'immediate-business-transformation', description: 'Rapid business process transformation' },
  { id: 'hiring-success-after-failures', title: 'Hiring Success After Failures', slug: 'hiring-success-after-failures', description: 'Overcame hiring challenges with Shore Agents' },
  { id: 'construction-cost-reduction', title: 'Construction Cost Reduction', slug: 'construction-cost-reduction', description: 'Reduced operational costs significantly' },
  { id: 'customer-service-scaling', title: 'Customer Service Scaling', slug: 'customer-service-scaling', description: 'Scaled customer service operations' },
  { id: 'mortgage-industry-transformation', title: 'Mortgage Industry Transformation', slug: 'mortgage-industry-transformation', description: 'Transformed mortgage processing workflows' },
  { id: 'marketing-automation-implementation', title: 'Marketing Automation', slug: 'marketing-automation-implementation', description: 'Automated marketing processes' }
]

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
  const [topCaseStudies, setTopCaseStudies] = useState<Array<{
    id: string;
    title: string;
    slug: string;
    description: string;
    viewCount: number;
  }>>([])
  const [isLoadingCaseStudies, setIsLoadingCaseStudies] = useState(false)
  const [currentCaseStudyIndex, setCurrentCaseStudyIndex] = useState(0)
  const [isCaseStudyAnimating, setIsCaseStudyAnimating] = useState(false)
  
  // Fetch guards to prevent multiple simultaneous fetches
  const isFetchingCandidate = React.useRef(false)
  const isFetchingCaseStudies = React.useRef(false)
  const isFetchingRecommended = React.useRef(false)
  const isFetchingQuotes = React.useRef(false)
  
  // Use the engagement tracking hook only on client side
  // const { // recordInteraction } = useEngagementTracking()
  const { appUser } = useAuth()
  
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
    // Prevent multiple simultaneous fetches
    if (isFetchingCandidate.current) {
      console.log('⏭️ Skipping fetchTopCandidate - already fetching')
      return
    }
    
    isFetchingCandidate.current = true
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
      console.error('❌ Exception in fetchTopCandidate:', error)
      setTopCandidate(null)
    } finally {
      setIsLoadingCandidate(false)
      isFetchingCandidate.current = false
    }
  }, [appUser?.user_id])

  const fetchRecommendedCandidates = useCallback(async () => {
    if (!appUser?.user_id) {
      console.log('No user ID available for fetching recommended candidates')
      return
    }

    // Prevent multiple simultaneous fetches
    if (isFetchingRecommended.current) {
      console.log('⏭️ Skipping fetchRecommendedCandidates - already fetching')
      return
    }
    
    isFetchingRecommended.current = true
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
      console.error('❌ Exception in fetchRecommendedCandidates:', error)
      setRecommendedCandidates([])
    } finally {
      setIsLoadingRecommended(false)
      isFetchingRecommended.current = false
    }
  }, [appUser?.user_id])

  const fetchRecentQuotes = useCallback(async () => {
    if (!appUser?.user_id) {
      console.log('No user ID available for fetching recent quotes')
      return
    }

    // Prevent multiple simultaneous fetches
    if (isFetchingQuotes.current) {
      console.log('⏭️ Skipping fetchRecentQuotes - already fetching')
      return
    }
    
    isFetchingQuotes.current = true
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
      console.error('❌ Exception in fetchRecentQuotes:', error)
      setRecentQuotes([])
    } finally {
      setIsLoadingQuote(false)
      isFetchingQuotes.current = false
    }
  }, [appUser?.user_id])

  const fetchTopCaseStudies = useCallback(async () => {
    // Prevent multiple simultaneous fetches
    if (isFetchingCaseStudies.current) {
      console.log('⏭️ Skipping fetchTopCaseStudies - already fetching')
      return
    }
    
    isFetchingCaseStudies.current = true
    setIsLoadingCaseStudies(true)
    try {
      let userId = null
      
      // Get user ID - either from authenticated user or device ID for anonymous users
      if (appUser?.user_id) {
        userId = appUser.user_id
        console.log('✅ Using authenticated user ID for case studies:', userId)
      } else {
        // For anonymous users, get device ID from localStorage
        if (typeof window !== 'undefined') {
          userId = localStorage.getItem('content_tracking_device_id')
          console.log('✅ Using device ID for anonymous user case studies:', userId)
        }
      }

      if (!userId) {
        console.log('❌ No user ID or device ID available for case studies')
        // If no user data, show default top 5 case studies
        setTopCaseStudies(ALL_CASE_STUDIES.slice(0, 5).map((cs, idx) => ({
          ...cs,
          viewCount: 5 - idx // Default ranking
        })))
        return
      }

      // Import supabase client
      const { createClient } = await import('@/lib/supabase/client')
      const supabase = createClient()

      console.log('🔍 Fetching top case studies for user:', userId)
      
      // Query content_views for case study views
      const { data, error } = await supabase
        .from('content_views')
        .select('content_id, content_title, content_url')
        .eq('user_id', userId)
        .eq('content_type', 'case-study')
        .order('view_duration', { ascending: false })
        .limit(10)

      if (error) {
        console.error('Error fetching case studies:', error)
        // Fallback to default case studies
        setTopCaseStudies(ALL_CASE_STUDIES.slice(0, 5).map((cs, idx) => ({
          ...cs,
          viewCount: 5 - idx
        })))
        return
      }

      console.log('📊 Found case study views:', data?.length || 0)

      if (!data || data.length === 0) {
        // No views yet, show default top 5
        setTopCaseStudies(ALL_CASE_STUDIES.slice(0, 5).map((cs, idx) => ({
          ...cs,
          viewCount: 5 - idx
        })))
        return
      }

      // Match the viewed case studies with our metadata
      const viewedCaseStudies = data
        .map((view, index) => {
          const caseStudy = ALL_CASE_STUDIES.find(cs => 
            view.content_id === cs.id || 
            view.content_url?.includes(cs.slug)
          )
          if (caseStudy) {
            return {
              ...caseStudy,
              viewCount: data.length - index
            }
          }
          return null
        })
        .filter((cs): cs is NonNullable<typeof cs> => cs !== null)
        .slice(0, 5)

      // If we have less than 5, fill with unviewed case studies
      if (viewedCaseStudies.length < 5) {
        const viewedIds = new Set(viewedCaseStudies.map(cs => cs.id))
        const unviewedCaseStudies = ALL_CASE_STUDIES
          .filter(cs => !viewedIds.has(cs.id))
          .slice(0, 5 - viewedCaseStudies.length)
          .map((cs, idx) => ({
            ...cs,
            viewCount: 0
          }))
        
        viewedCaseStudies.push(...unviewedCaseStudies)
      }

      console.log('✅ Setting top case studies:', viewedCaseStudies.length)
      setTopCaseStudies(viewedCaseStudies)
    } catch (error) {
      console.error('❌ Exception in fetchTopCaseStudies:', error)
      // Fallback to default
      setTopCaseStudies(ALL_CASE_STUDIES.slice(0, 5).map((cs, idx) => ({
        ...cs,
        viewCount: 5 - idx
      })))
    } finally {
      setIsLoadingCaseStudies(false)
      isFetchingCaseStudies.current = false
    }
  }, [appUser?.user_id])

  // Fetch data when drawer opens
  useEffect(() => {
    if (isDrawerOpen) {
      fetchTopCandidate()
      fetchRecommendedCandidates()
      fetchRecentQuotes()
      fetchTopCaseStudies()
    }
  }, [isDrawerOpen, fetchTopCandidate, fetchRecommendedCandidates, fetchRecentQuotes, fetchTopCaseStudies])

  // Auto-rotate AI matched candidates with animation
  useEffect(() => {
    if (isDrawerOpen && recommendedCandidates.length > 1) {
      const interval = setInterval(() => {
        setIsAnimating(true)
        setTimeout(() => {
          setCurrentCandidateIndex((prevIndex) => 
            (prevIndex + 1) % recommendedCandidates.length
          )
          setIsAnimating(false)
        }, 250) // Half of the animation duration
      }, 3000) // Change every 3 seconds

      return () => clearInterval(interval)
    }
  }, [isDrawerOpen, recommendedCandidates.length])

  // Auto-rotate case studies with animation
  useEffect(() => {
    if (isDrawerOpen && topCaseStudies.length > 1) {
      const interval = setInterval(() => {
        setIsCaseStudyAnimating(true)
        setTimeout(() => {
          setCurrentCaseStudyIndex((prevIndex) => 
            (prevIndex + 1) % topCaseStudies.length
          )
          setIsCaseStudyAnimating(false)
        }, 250) // Half of the animation duration
      }, 3500) // Change every 3.5 seconds (slightly different from candidates)

      return () => clearInterval(interval)
    }
  }, [isDrawerOpen, topCaseStudies.length])

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
          
          {/* AI Recommendations Content - 2x8 Grid Layout */}
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
              {/* 4x2 Grid Layout - All components visible without scrolling */}
              <div className="grid grid-cols-4 gap-3 h-full">
                {/* Top Left: Top Candidate */}
                <div className="col-span-1 row-span-1">
                  <Card className="hover:shadow-md transition-shadow h-full overflow-hidden p-0">
                    <div className="px-3 py-2 bg-lime-600">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-lime-50" />
                        <h3 className="text-sm font-semibold text-lime-50">Top Candidate</h3>
                      </div>
                    </div>
                    <CardContent className="p-3 h-full flex flex-col">
                      {isLoadingCandidate ? (
                        <div className="flex items-center justify-center py-4">
                          <div className="animate-spin rounded-full border-2 border-lime-600 border-t-transparent w-6 h-6" />
                        </div>
                      ) : topCandidate ? (
                        <div className="space-y-2 flex-1 flex flex-col justify-between">
                          <div className="flex items-center space-x-3">
                            <Avatar className="w-12 h-12">
                              {(() => {
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                const avatarUrl = String((topCandidate as any)?.user?.avatar_url || '');
                                return avatarUrl && avatarUrl !== 'undefined' && avatarUrl !== 'null' && avatarUrl.trim() !== '' ? (
                                  <AvatarImage 
                                    src={avatarUrl} 
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    alt={String((topCandidate as any)?.user?.name || 'Candidate')}
                                    onError={() => console.log('❌ Top candidate avatar failed to load')}
                                    onLoad={() => console.log('✅ Top candidate avatar loaded successfully')}
                                  />
                                ) : null;
                              })()}
                              <AvatarFallback className="bg-gradient-to-br from-lime-200 to-lime-300 text-lime-800 text-lg font-bold border-2 border-lime-400 shadow-sm">
                                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                {String((topCandidate as any)?.user?.name || 'U').charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium text-gray-900 truncate">
                                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                {String((topCandidate as any)?.user?.name || 'Unknown')}
                              </p>
                              <p className="text-xs text-gray-500 truncate">
                                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                {String((topCandidate as any)?.user?.position || 'Position')}
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-1">
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 text-xs h-6"
                              onClick={() => {
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                handleAskForInterview(String((topCandidate as any)?.user?.id), String((topCandidate as any)?.user?.name));
                              }}
                            >
                              Interview
                            </Button>
                            <Button
                              size="sm"
                              className="flex-1 text-xs bg-lime-600 hover:bg-lime-700 h-6"
                              onClick={handleViewProfile}
                            >
                              View Profile
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-4">
                          <p className="text-xs text-gray-500">No candidate data</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Top Center Left: AI Matched Candidates */}
                <div className="col-span-1 row-span-1">
                  <Card className="hover:shadow-md transition-shadow h-full overflow-hidden p-0">
                    <div className="px-3 py-2 bg-lime-600">
                      <div className="flex items-center space-x-2">
                        <Target className="w-4 h-4 text-lime-50" />
                        <h3 className="text-sm font-semibold text-lime-50">AI Matched</h3>
                      </div>
                    </div>
                    <CardContent className="p-3 h-full flex flex-col">
                      {isLoadingRecommended ? (
                        <div className="flex items-center justify-center py-4">
                          <div className="animate-spin rounded-full border-2 border-lime-600 border-t-transparent w-6 h-6" />
                        </div>
                      ) : recommendedCandidates.length > 0 ? (
                        <div className="space-y-2 flex-1 flex flex-col justify-between">
                          <div className={`flex items-center space-x-3 transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
                            <Avatar className="w-12 h-12">
                              {(() => {
                                const avatarUrl = recommendedCandidates[currentCandidateIndex]?.avatar || '';
                                return avatarUrl && avatarUrl !== 'undefined' && avatarUrl !== 'null' && avatarUrl.trim() !== '' ? (
                                  <AvatarImage 
                                    src={avatarUrl} 
                                    alt={recommendedCandidates[currentCandidateIndex]?.name || 'Candidate'}
                                    onError={() => console.log('❌ AI Matched avatar failed to load')}
                                    onLoad={() => console.log('✅ AI Matched avatar loaded successfully')}
                                  />
                                ) : null;
                              })()}
                              <AvatarFallback className="bg-gradient-to-br from-lime-200 to-lime-300 text-lime-800 text-lg font-bold border-2 border-lime-400 shadow-sm">
                                {recommendedCandidates[currentCandidateIndex]?.name?.charAt(0) || 'U'}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium text-gray-900 truncate">
                                {recommendedCandidates[currentCandidateIndex]?.name?.split(' ')[0] || 'Unknown'}
                              </p>
                              <p className="text-xs text-gray-500 truncate">
                                {recommendedCandidates[currentCandidateIndex]?.position || 'Position'}
                              </p>
                            </div>
                          </div>
                          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
                            <div className="flex space-x-1">
                              <Button
                                size="sm"
                                variant="outline"
                                className="flex-1 text-xs h-6"
                                onClick={() => handleAskForInterview(recommendedCandidates[currentCandidateIndex]?.id || '', recommendedCandidates[currentCandidateIndex]?.name || '')}
                              >
                                Interview
                              </Button>
                              <Button
                                size="sm"
                                className="flex-1 text-xs bg-lime-600 hover:bg-lime-700 h-6"
                                onClick={() => handleViewMatchedProfile(recommendedCandidates[currentCandidateIndex]?.id || '', recommendedCandidates[currentCandidateIndex]?.name || '')}
                              >
                                View Profile
                              </Button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-4">
                          <p className="text-xs text-gray-500">No matches found</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Top Center Right: Next Step */}
                <div className="col-span-1 row-span-1">
                  <Card className="hover:shadow-md transition-shadow h-full overflow-hidden p-0">
                    <div className="px-3 py-2 bg-lime-600">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-lime-50" />
                        <h3 className="text-sm font-semibold text-lime-50">Next Step</h3>
                      </div>
                    </div>
                    <CardContent className="p-3 h-full flex flex-col justify-between">
                      <p className="text-xs text-gray-700">Based on your browsing:</p>
                      <Button
                        onClick={handleSeePricing}
                        size="sm"
                        className="w-full bg-lime-600 hover:bg-lime-700 text-white text-xs h-6"
                      >
                        View Pricing
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Top Right: Maya Chat Assistant */}
                <div className="col-span-1 row-span-1">
                  <Card className="hover:shadow-md transition-shadow h-full overflow-hidden p-0">
                    <div className="px-3 py-2 bg-lime-600">
                      <div className="flex items-center space-x-2">
                        <MessageCircle className="w-4 h-4 text-lime-50" />
                        <h3 className="text-sm font-semibold text-lime-50">Maya AI</h3>
                      </div>
                    </div>
                    <CardContent className="p-3 h-full flex flex-col justify-center items-center">
                      <div className="text-center space-y-2">
                        <Avatar className="w-12 h-12 mx-auto">
                          <AvatarImage 
                            src="/MayaProfile.png" 
                            alt="Maya AI Assistant"
                            onError={() => console.log('❌ Maya avatar failed to load')}
                            onLoad={() => console.log('✅ Maya avatar loaded successfully')}
                          />
                          <AvatarFallback className="bg-lime-100 text-lime-700">
                            <MessageCircle className="w-6 h-6" />
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-xs text-gray-600">Get assistance</p>
                        </div>
                        <Button
                          onClick={handleChatWithClaude}
                          size="sm"
                          className="w-full bg-lime-600 hover:bg-lime-700 text-white text-xs h-6"
                        >
                          <MessageCircle className="w-3 h-3 mr-1" />
                          Chat
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Bottom Left: Case Study */}
                <div className="col-span-1 row-span-1">
                  <Card className="hover:shadow-md transition-shadow h-full overflow-hidden p-0">
                    <div className="px-3 py-2 bg-lime-600">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-4 h-4 text-lime-50" />
                          <h3 className="text-sm font-semibold text-lime-50">Top Case Studies</h3>
                        </div>
                        {topCaseStudies.length > 1 && (
                          <div className="flex items-center space-x-1">
                            <div className="w-1 h-1 rounded-full bg-lime-300 opacity-50"></div>
                            <div className="w-1 h-1 rounded-full bg-lime-300 opacity-50"></div>
                            <div className="w-1 h-1 rounded-full bg-lime-300"></div>
                          </div>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-3 h-full flex flex-col justify-between">
                      {isLoadingCaseStudies ? (
                        <div className="flex items-center justify-center py-4">
                          <div className="animate-spin rounded-full border-2 border-lime-600 border-t-transparent w-6 h-6" />
                        </div>
                      ) : topCaseStudies.length > 0 ? (
                        <>
                          <div className={`transition-all duration-500 ${isCaseStudyAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
                            <div className="mb-2">
                              <p className="text-xs font-semibold text-gray-900 line-clamp-2 mb-1">
                                {topCaseStudies[currentCaseStudyIndex]?.title}
                              </p>
                              <p className="text-[10px] text-gray-600 line-clamp-2">
                                {topCaseStudies[currentCaseStudyIndex]?.description}
                              </p>
                            </div>
                            {topCaseStudies[currentCaseStudyIndex]?.viewCount > 0 && (
                              <div className="mb-2">
                                <span className="text-[10px] text-lime-600 bg-lime-50 px-2 py-0.5 rounded">
                                  Previously viewed
                                </span>
                              </div>
                            )}
                          </div>
                          <Button
                            onClick={() => router.push(`/case-studies/${topCaseStudies[currentCaseStudyIndex]?.slug}`)}
                            size="sm"
                            variant="outline"
                            className="w-full text-xs h-6 border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white transition-all"
                          >
                            Read More
                          </Button>
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center py-2">
                          <div className="w-8 h-8 mx-auto mb-2 bg-gray-100 rounded-full flex items-center justify-center">
                            <BookOpen className="w-4 h-4 text-gray-400" />
                          </div>
                          <p className="text-xs text-gray-500">No case studies available</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Bottom Center Left: Recent Quotes */}
                <div className="col-span-2 row-span-1">
                  <Card className="hover:shadow-md transition-shadow h-full overflow-hidden p-0">
                    <div className="px-3 py-2 bg-lime-600">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-4 h-4 text-lime-50" />
                          <h3 className="text-sm font-semibold text-lime-50">Recent Quotes</h3>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={handleViewQuote}
                            className="text-xs px-2 py-1 h-5 border-lime-300 text-lime-100 hover:bg-lime-500 hover:text-white"
                          >
                            View All
                          </Button>
                          <Button
                            size="sm"
                            onClick={handleCreateQuote}
                            className="text-xs px-2 py-1 h-5 bg-lime-500 hover:bg-lime-400 text-white"
                          >
                            + New Quote
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-3 h-full flex flex-col">
                      {isLoadingQuote ? (
                        <div className="flex items-center justify-center py-4">
                          <div className="animate-spin rounded-full border-2 border-lime-600 border-t-transparent w-6 h-6" />
                        </div>
                      ) : recentQuotes.length > 0 ? (
                        <div className="space-y-2 flex-1">
                          {/* Latest Quote */}
                          <div className="bg-lime-50 rounded-lg p-2 border border-lime-200">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-semibold text-lime-700 bg-lime-100 px-2 py-1 rounded">
                                Latest
                              </span>
                              <span className="text-xs text-gray-500">
                                {UserQuoteService.getQuoteAge(recentQuotes[0].created_at)}
                              </span>
                            </div>
                            <div className="text-center">
                              <div className="text-sm font-bold text-lime-600">
                                {UserQuoteService.formatCurrency(recentQuotes[0].total_monthly_cost, recentQuotes[0].currency_code)}
                              </div>
                              <div className="text-xs text-gray-500">per month</div>
                            </div>
                            <div className="text-xs text-gray-700 mt-1">
                              <div className="font-medium">{recentQuotes[0].member_count} members</div>
                              <div className="text-xs text-gray-500">{recentQuotes[0].industry}</div>
                            </div>
                          </div>
                          
                          {/* Other Recent Quotes */}
                          {recentQuotes.length > 1 && (
                            <div className="space-y-1">
                              <div className="text-xs font-semibold text-gray-600">Recent</div>
                              {recentQuotes.slice(1, 2).map((quote) => (
                                <div key={quote.id} className="bg-gray-50 rounded-lg p-2 border border-gray-200">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-medium text-gray-700">
                                      {UserQuoteService.formatCurrency(quote.total_monthly_cost, quote.currency_code)}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                      {UserQuoteService.getQuoteAge(quote.created_at)}
                                    </span>
                                  </div>
                                  <div className="text-xs text-gray-600">
                                    {quote.member_count} members • {quote.industry}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="flex flex-col h-full">
                          {/* Visual Guide Illustration */}
                          <div className="flex items-center justify-center space-x-2 mb-3">
                            <div className="relative">
                              {/* Step 1: Click Button */}
                              <div className="flex flex-col items-center">
                                <div className="w-10 h-10 bg-gradient-to-br from-lime-100 to-lime-200 rounded-lg flex items-center justify-center shadow-sm border border-lime-300 mb-1">
                                  <BookOpen className="w-5 h-5 text-lime-700" />
                                </div>
                                <div className="text-[10px] font-medium text-gray-600">1. Click</div>
                              </div>
                              
                              {/* Arrow */}
                              <div className="absolute -right-6 top-4 text-lime-400">
                                <svg width="24" height="8" viewBox="0 0 24 8" fill="none" className="opacity-60">
                                  <path d="M0 4H22M22 4L18 1M22 4L18 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                            </div>
                            
                            <div className="ml-6 relative">
                              {/* Step 2: Fill Form */}
                              <div className="flex flex-col items-center">
                                <div className="w-10 h-10 bg-gradient-to-br from-lime-100 to-lime-200 rounded-lg flex items-center justify-center shadow-sm border border-lime-300 mb-1">
                                  <svg className="w-5 h-5 text-lime-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                </div>
                                <div className="text-[10px] font-medium text-gray-600">2. Fill Details</div>
                              </div>
                              
                              {/* Arrow */}
                              <div className="absolute -right-6 top-4 text-lime-400">
                                <svg width="24" height="8" viewBox="0 0 24 8" fill="none" className="opacity-60">
                                  <path d="M0 4H22M22 4L18 1M22 4L18 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                            </div>
                            
                            <div className="ml-6">
                              {/* Step 3: Get Quote */}
                              <div className="flex flex-col items-center">
                                <div className="w-10 h-10 bg-gradient-to-br from-lime-500 to-lime-600 rounded-lg flex items-center justify-center shadow-sm border border-lime-400 mb-1">
                                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <div className="text-[10px] font-medium text-gray-600">3. Get Quote</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Description */}
                          <div className="text-center mb-3">
                            <p className="text-xs text-gray-700 font-medium mb-1">Get Your Custom Quote</p>
                            <p className="text-[11px] text-gray-500 leading-relaxed">
                              Enter team size, roles & preferences to instantly calculate your monthly costs
                            </p>
                          </div>
                          
                          {/* CTA Button */}
                          <Button
                            onClick={handleCreateQuote}
                            size="sm"
                            className="w-full bg-gradient-to-r from-lime-600 to-lime-500 hover:from-lime-700 hover:to-lime-600 text-white text-xs h-7 font-semibold shadow-sm"
                          >
                            <BookOpen className="w-3 h-3 mr-1.5" />
                            Create Your First Quote
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Bottom Right: Reserved for future content */}
                <div className="col-span-1 row-span-1">
                  <Card className="hover:shadow-md transition-shadow h-full overflow-hidden p-0">
                    <div className="px-3 py-2 bg-lime-600">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-lime-300 rounded"></div>
                        <h3 className="text-sm font-semibold text-lime-50">Coming Soon</h3>
                      </div>
                    </div>
                    <CardContent className="p-3 h-full flex flex-col justify-center items-center">
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-2">
                          <div className="w-4 h-4 bg-gray-300 rounded"></div>
                        </div>
                        <p className="text-xs text-gray-500">More features</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
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