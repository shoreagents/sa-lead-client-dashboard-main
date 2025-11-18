"use client"

import { UserGuard } from '@/components/auth/UserGuard'
import { UserDashboardSidebar } from '@/components/layout/UserDashboardSidebar'
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { Menu, X } from 'lucide-react'
import { useUserAuth } from '@/lib/user-auth-context'
import { useChatContext } from '@/lib/chat-context'
import { ConversationComponent } from '@/components/chat/ConversationComponent'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { PricingCalculatorModal } from '@/components/ui/pricing-calculator-modal'
import { InterviewRequestModal } from '@/components/ui/interview-request-modal'
import { AnonymousUserModal } from '@/components/ui/anonymous-user-modal'
import { useEmployeeCardData } from '@/hooks/use-api'
import { BestMatchedCandidates } from '@/components/ui/top-candidate-with-matches'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

function ChatPageContent() {
  const { user } = useUserAuth()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { clearAllChatHistory, clearCurrentConversation } = useChatContext()
  
  // State for current conversation
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null)
  const [shouldShowGreeting, setShouldShowGreeting] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // Modal states
  const [showPricingModal, setShowPricingModal] = useState(false)
  const [showInterviewModal, setShowInterviewModal] = useState(false)
  const [showAnonymousModal, setShowAnonymousModal] = useState(false)
  
  // Get device ID and user ID
  const userId = user?.user_id || 'anonymous'
  const isAuthenticated = !!user?.user_id

  // Fetch candidate data
  const { data: candidates = [], loading: candidatesLoading } = useEmployeeCardData()
  
  // Transform candidates data for the carousel
  const recommendedCandidates = candidates.slice(0, 5).map((candidate, index) => ({
    id: candidate.user.id,
    name: candidate.user.name,
    position: candidate.user.position,
    avatar: candidate.user.avatar,
    score: Math.floor(Math.random() * 30) + 70, // Random score between 70-100
    bio: candidate.user.bio,
    expectedSalary: candidate.user.expectedSalary || 0
  }))

  // Handle loading specific conversation from URL
  useEffect(() => {
    const conversationId = searchParams.get('conversation')
    if (conversationId && conversationId !== currentConversationId) {
      setCurrentConversationId(conversationId)
    }
  }, [searchParams, currentConversationId])

  // Only load conversation if explicitly requested via URL parameter
  // Don't auto-load conversations - let user choose or show welcome screen

  // Clear current conversation when leaving the chat page
  useEffect(() => {
    return () => {
      // Clear the current conversation when component unmounts
      clearCurrentConversation()
    }
  }, [clearCurrentConversation])

  const handleConversationChange = (conversationId: string) => {
    if (conversationId === '') {
      // Regular new chat - clear current conversation, show welcome screen
      setCurrentConversationId(null)
      setShouldShowGreeting(false)
      // Update URL to remove conversation parameter
      const url = new URL(window.location.href)
      url.searchParams.delete('conversation')
      window.history.replaceState({}, '', url.toString())
    } else if (conversationId === 'new-chat') {
      // New chat button clicked - clear current conversation, show greeting
      setCurrentConversationId(null)
      setShouldShowGreeting(true)
      // Update URL to remove conversation parameter
      const url = new URL(window.location.href)
      url.searchParams.delete('conversation')
      window.history.replaceState({}, '', url.toString())
    } else {
      // Load specific conversation
      setCurrentConversationId(conversationId)
      setShouldShowGreeting(false)
      // Update URL without page reload
      const url = new URL(window.location.href)
      url.searchParams.set('conversation', conversationId)
      window.history.replaceState({}, '', url.toString())
    }
  }

  // Function to reset shouldShowGreeting after greeting is generated
  const resetShouldShowGreeting = () => {
    setShouldShowGreeting(false)
  }

  // Handler functions for candidate actions
  const handleAskForInterview = (candidateId: string, candidateName: string) => {
    console.log('Requesting interview for:', candidateName, candidateId)
    setShowInterviewModal(true)
  }

  const handleViewProfile = (candidateId: string, candidateName: string) => {
    console.log('Viewing profile for:', candidateName, candidateId)
    
    // Validate candidate ID
    if (!candidateId || candidateId === 'undefined') {
      console.error('Invalid candidate ID:', candidateId)
      alert('Unable to view profile: Invalid candidate ID')
      return
    }
    
    // Navigate to individual candidate profile page
    const candidateUrl = `/candidates/${candidateId}`
    console.log('Navigating to:', candidateUrl)
    
    try {
      if (pathname === '/user-dashboard/chat') {
        // If we're on chat page, open in new tab
        const newWindow = window.open(candidateUrl, '_blank')
        if (!newWindow) {
          console.error('Failed to open new window - popup blocked?')
          alert('Please allow popups for this site to view candidate profiles')
        }
      } else {
        // If we're on other pages, navigate directly
        window.location.href = candidateUrl
      }
    } catch (error) {
      console.error('Navigation error:', error)
      alert('Failed to navigate to candidate profile')
    }
  }

  return (
    <UserGuard>
      <SidebarProvider>
        <UserDashboardSidebar onConversationChange={handleConversationChange} />
        <SidebarInset className="relative h-screen pr-0 lg:pr-80">
          {/* Desktop Header with Sidebar Trigger */}
          <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4 hidden lg:flex">
            <SidebarTrigger className="-ml-1" />
            <div className="flex-1" />
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold">Chat with Maya</h1>
            </div>
          </header>

          {/* Mobile Header */}
          <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4 lg:hidden">
            {/* Mobile Menu Button */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <div className="flex-1" />
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold">Chat with Maya</h1>
            </div>
          </header>
          
          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-40 lg:hidden">
              <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)} />
              <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg">
                <div className="flex items-center justify-between p-4 border-b">
                  <h2 className="text-lg font-semibold">Menu</h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-4">Quick Actions</p>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => {
                            handleConversationChange('new-chat')
                            setIsMobileMenuOpen(false)
                          }}
                          className="w-full text-left p-3 bg-lime-50 text-lime-700 rounded-lg hover:bg-lime-100 transition-colors mb-2"
                        >
                          💬 New Chat
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Start a new conversation with Maya</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => {
                            setShowInterviewModal(true)
                            setIsMobileMenuOpen(false)
                          }}
                          className="w-full text-left p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors mb-2"
                        >
                          📅 Schedule Interview
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Open interview scheduling form</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => {
                            setShowPricingModal(true)
                            setIsMobileMenuOpen(false)
                          }}
                          className="w-full text-left p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors mb-2"
                        >
                          💰 Pricing Calculator
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Open pricing calculator modal</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => {
                            clearAllChatHistory()
                            setIsMobileMenuOpen(false)
                          }}
                          className="w-full text-left p-3 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors"
                        >
                          🗑️ Clear History
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Permanently delete all chat history</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          )}

          {/* Main Conversation Component */}
          <div className="h-full">
            <ConversationComponent
              conversationId={currentConversationId}
              onConversationChange={handleConversationChange}
              userId={userId}
              user={user}
              isAuthenticated={isAuthenticated}
              shouldShowGreeting={shouldShowGreeting}
              onResetShouldShowGreeting={resetShouldShowGreeting}
            />
          </div>

          {/* Right Sidebar Panel - Hidden on small screens, visible on large screens */}
          <div className="hidden lg:block fixed top-0 right-0 z-10 w-80 h-full bg-gray-50 border-l pt-16 pb-32">
            <div className="p-4 h-full flex flex-col justify-center space-y-4">

              {/* AI Recommended Candidates */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm h-[60%] w-full">
                <BestMatchedCandidates
                  recommendedCandidates={recommendedCandidates}
                  isLoading={candidatesLoading}
                  onAskForInterview={handleAskForInterview}
                  onViewProfile={handleViewProfile}
                />
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm h-[35%] w-full">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => setShowInterviewModal(true)}
                          className="w-full text-left p-2 text-xs bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                        >
                          📅 Schedule Interview
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Open interview scheduling form</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => setShowAnonymousModal(true)}
                          className="w-full text-left p-2 text-xs bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
                        >
                          👤 Anonymous User Form
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Open anonymous user information form</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => setShowPricingModal(true)}
                          className="w-full text-left p-2 text-xs bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors"
                        >
                          💰 Pricing Calculator
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Open pricing calculator modal</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={clearAllChatHistory}
                          className="w-full text-left p-2 text-xs bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors"
                        >
                          🗑️ Clear Chat History
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Permanently delete all chat history</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          </div>
        </SidebarInset>

        {/* Modals */}
        <PricingCalculatorModal 
          isOpen={showPricingModal} 
          onClose={() => setShowPricingModal(false)} 
        />
        <InterviewRequestModal 
          isOpen={showInterviewModal} 
          onClose={() => setShowInterviewModal(false)} 
        />
        <AnonymousUserModal 
          isOpen={showAnonymousModal} 
          onClose={() => setShowAnonymousModal(false)} 
        />
      </SidebarProvider>
    </UserGuard>
  )
}

export default function ChatPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 p-4 space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-96" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1 space-y-4">
              <Skeleton className="h-12 w-full" />
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-20 w-full rounded-lg" />
              ))}
            </div>
            <div className="md:col-span-2 space-y-4">
              <Skeleton className="h-96 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    }>
      <ChatPageContent />
    </Suspense>
  )
}

