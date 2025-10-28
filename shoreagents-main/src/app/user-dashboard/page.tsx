"use client"

import { UserGuard } from '@/components/auth/UserGuard'
import { UserDashboardSidebar } from '@/components/layout/UserDashboardSidebar'
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { useUserAuth } from '@/lib/user-auth-context'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import ChatConsole from '@/components/ui/ai-chat-console'
import { PricingCalculatorModal } from '@/components/ui/pricing-calculator-modal'
import { useState, useCallback } from 'react'
import { 
  NextStepCard, 
  CaseStudyCard, 
  RecentQuoteCard, 
  ReservedCard 
} from '@/components/ui/dashboard-cards'
import { TopCandidateWithMatches } from '@/components/ui/top-candidate-with-matches'
import { InterviewRequestModal, InterviewRequestData } from '@/components/ui/interview-request-modal'
import { useTopCandidate, useRecentQuotes, useRecommendedCandidates } from '@/hooks/use-api'

export default function UserDashboardPage() {
  const { user } = useUserAuth()
  const router = useRouter()
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false)
  const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false)
  const [selectedCandidate, setSelectedCandidate] = useState<{ name: string; id: string; position?: string } | null>(null)

  // Get user ID - either from authenticated user or device ID for anonymous users
  const getUserId = useCallback(() => {
    if (user?.user_id) {
      return user.user_id
    }
    if (typeof window !== 'undefined') {
      return localStorage.getItem('content_tracking_device_id') || 
             localStorage.getItem('device_id') || 
             localStorage.getItem('session_id') || 
             null
    }
    return null
  }, [user?.user_id])

  // Use TanStack Query hooks for data fetching
  const userId = getUserId()
  const { data: topCandidate, isLoading: isLoadingCandidate } = useTopCandidate(userId)
  const { data: recentQuotes = [], isLoading: isLoadingQuote } = useRecentQuotes(userId)
  const { data: recommendedCandidates = [], isLoading: isLoadingRecommended } = useRecommendedCandidates(userId)

  const handleChatWithClaude = useCallback(() => {
    // // recordInteraction('chat')
    console.log('Chat button clicked - interaction recorded')
    setIsChatOpen(true)
  }, []);

  const handleChatOpen = useCallback(() => {
    // // recordInteraction('chat')
    console.log('Chat with Maya button clicked from sidebar - interaction recorded')
    setIsChatOpen(true)
  }, []);

  const handleBrowseTalent = useCallback(() => {
    // recordInteraction('navigation')
    console.log('Browse Talent button clicked - interaction recorded')
    router.push('/we-got-talent')
  }, [router]);

  const handleViewCandidateProfile = useCallback(() => {
    if (topCandidate) {
      // recordInteraction('navigation')
      console.log('Viewing candidate profile:', (topCandidate as Record<string, unknown>).user)
      const userId = ((topCandidate as Record<string, unknown>).user as Record<string, unknown>)?.id
      router.push(`/employee/${userId}`)
    } else {
      handleBrowseTalent()
    }
  }, [topCandidate, router, handleBrowseTalent]);

  const handleAskForInterview = useCallback((candidateId: string, candidateName: string, candidatePosition?: string) => {
    // recordInteraction('interview-request')
    console.log('Ask for interview clicked for candidate:', candidateName, candidateId, candidatePosition)
    setSelectedCandidate({ name: candidateName, id: candidateId, position: candidatePosition })
    setIsInterviewModalOpen(true)
  }, [])

  const handleInterviewSubmit = async (data: InterviewRequestData) => {
    try {
      console.log('Interview request submitted:', {
        candidateName: selectedCandidate?.name,
        candidateId: selectedCandidate?.id,
        ...data
      });
      
      // You can add your API call here to submit the interview request
      // await submitInterviewRequest({ candidateId: selectedCandidate?.id, ...data });
      
      setIsInterviewModalOpen(false);
      setSelectedCandidate(null);
    } catch (error) {
      console.error('Error submitting interview request:', error);
    }
  };

  const handleViewMatchedProfile = useCallback((candidateId: string, candidateName: string) => {
    // recordInteraction('navigation')
    console.log('View profile clicked for candidate:', candidateName, candidateId)
    router.push(`/employee/${candidateId}`)
  }, [router]);

  const handleSeePricing = useCallback(() => {
    // recordInteraction('navigation')
    console.log('See Pricing button clicked - interaction recorded')
    router.push('/pricing')
  }, [router]);

  const handleViewQuote = useCallback(() => {
    // recordInteraction('navigation')
    console.log('View Quote button clicked - interaction recorded')
    router.push('/user-dashboard/quotation')
  }, [router]);

  const handleCreateQuote = useCallback(() => {
    // recordInteraction('navigation')
    console.log('Create Quote button clicked - interaction recorded')
    setIsPricingModalOpen(true)
  }, []);


  return (
    <UserGuard>
      <SidebarProvider>
        <UserDashboardSidebar onChatOpen={handleChatOpen} />
        <SidebarInset>
          <div className="flex flex-1 flex-col gap-2 p-3 pt-16">
            {/* AI Recommendations Content */}
            <div className="grid gap-2">
              <div>
                <h2 className="text-xl font-bold tracking-tight">AI Recommendations</h2>
                <p className="text-sm text-muted-foreground">
                  Personalized suggestions based on your browsing behavior
                </p>
              </div>
            </div>

            {/* AI-Powered Sections - Grid Layout */}
            <div className="grid" style={{
              display: 'grid',
              height: '60%',
              width: '100%',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'repeat(4, 1fr)',
              gap: '12px',
              backgroundColor: '#ffffff',
              padding: '6px',
              borderRadius: '8px',
            }}>
              
              {/* Section 1: Next Step CTA - 1x1 */}
              <NextStepCard onSeePricing={handleSeePricing} />

              {/* Section 2: Suggested Case Study - 1x2 */}
              <CaseStudyCard onReadMore={() => router.push('/case-studies')} />

              {/* Section 3: Top Candidate with Matches - 1x4 */}
              <TopCandidateWithMatches 
                topCandidate={topCandidate}
                isLoadingCandidate={isLoadingCandidate}
                onViewProfile={handleViewCandidateProfile}
                recommendedCandidates={recommendedCandidates}
                isLoadingRecommended={isLoadingRecommended}
                onAskForInterview={handleAskForInterview}
                onViewMatchedProfile={handleViewMatchedProfile}
              />

              {/* Section 4: Recent Quotes - 1x3 */}
              <RecentQuoteCard 
                recentQuotes={recentQuotes}
                isLoading={isLoadingQuote}
                onViewQuote={handleViewQuote}
                onCreateQuote={handleCreateQuote}
              />

              {/* Section 5: Empty/Reserved - 1x2 */}
              <ReservedCard />

            </div>
          </div>
          
          {/* AI Chat Console */}
          <ChatConsole 
            isOpen={isChatOpen} 
            onClose={() => setIsChatOpen(false)} 
          />
          
          {/* Pricing Calculator Modal */}
          <PricingCalculatorModal 
            isOpen={isPricingModalOpen} 
            onClose={() => setIsPricingModalOpen(false)} 
          />

          {/* Interview Request Modal */}
          {selectedCandidate && (
            <InterviewRequestModal
              isOpen={isInterviewModalOpen}
              onClose={() => {
                setIsInterviewModalOpen(false);
                setSelectedCandidate(null);
              }}
              candidateName={selectedCandidate.name}
              candidatePosition={selectedCandidate.position || 'Position not specified'}
              candidateId={selectedCandidate.id}
              onSubmit={handleInterviewSubmit}
            />
          )}
        </SidebarInset>
      </SidebarProvider>
    </UserGuard>
  )
}
