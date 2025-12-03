"use client"

import { UserGuard } from '@/components/auth/UserGuard'
import { UserDashboardSidebar } from '@/components/layout/UserDashboardSidebar'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { useUserAuth } from '@/lib/user-auth-context'
import { useChatContext } from '@/lib/chat-context'
import { ConversationComponent } from '@/components/chat/ConversationComponent'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { PricingCalculatorModal } from '@/components/pricing-calculator'
import { InterviewRequestModal } from '@/components/ui/interview-request-modal'
import { AnonymousUserModal } from '@/components/ui/anonymous-user-modal'

export default function ChatPage() {
  const { user } = useUserAuth()
  const searchParams = useSearchParams()
  const { conversations, clearAllChatHistory } = useChatContext()
  
  // State for current conversation
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null)
  
  // Modal states
  const [showPricingModal, setShowPricingModal] = useState(false)
  const [showInterviewModal, setShowInterviewModal] = useState(false)
  const [showAnonymousModal, setShowAnonymousModal] = useState(false)
  
  // Get device ID and user ID
  const userId = user?.user_id || 'anonymous'
  const isAuthenticated = !!user?.user_id

  // Handle loading specific conversation from URL
  useEffect(() => {
    const conversationId = searchParams.get('conversation')
    if (conversationId && conversationId !== currentConversationId) {
      setCurrentConversationId(conversationId)
    }
  }, [searchParams, currentConversationId])

  // Initialize with most recent conversation if none selected
  useEffect(() => {
    if (!currentConversationId && conversations.length > 0) {
      setCurrentConversationId(conversations[0].id)
    }
  }, [conversations, currentConversationId])

  const handleConversationChange = (conversationId: string) => {
    setCurrentConversationId(conversationId)
    // Update URL without page reload
    const url = new URL(window.location.href)
    url.searchParams.set('conversation', conversationId)
    window.history.replaceState({}, '', url.toString())
  }

  return (
    <UserGuard>
      <SidebarProvider>
        <UserDashboardSidebar />
        <SidebarInset className="relative h-screen pt-16">
          {/* Main Conversation Component */}
          <div className="h-full">
            <ConversationComponent
              conversationId={currentConversationId}
              onConversationChange={handleConversationChange}
              userId={userId}
              user={user}
              isAuthenticated={isAuthenticated}
            />
          </div>

          {/* Right Sidebar Panel - Fixed position, won't move when scrolled */}
          <div className="fixed top-0 right-0 z-10 w-80 h-full bg-gray-50 border-l pt-14 pb-32">
            <div className="p-4 h-full flex flex-col justify-center space-y-4">
              {/* Conversation History */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm h-[45%] w-full">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Recent Conversations</h3>
                <div className="text-sm text-gray-600">
                  {conversations.length > 0 ? (
                    <div className="space-y-2">
                      {conversations.slice(0, 3).map((conversation) => (
                        <div 
                          key={conversation.id} 
                          className={`p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors ${
                            currentConversationId === conversation.id ? 'bg-lime-50 border border-lime-200' : 'bg-gray-50'
                          }`}
                          onClick={() => handleConversationChange(conversation.id)}
                        >
                          <div className="text-xs font-medium text-gray-800 truncate">{conversation.title}</div>
                          <div className="text-xs text-gray-500">{conversation.messageCount} messages</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-gray-500">No conversations yet</div>
                  )}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm h-[45%] w-full">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setShowInterviewModal(true)}
                    className="w-full text-left p-2 text-xs bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    📅 Schedule Interview
                  </button>
                  <button
                    onClick={() => setShowAnonymousModal(true)}
                    className="w-full text-left p-2 text-xs bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    👤 Anonymous User Form
                  </button>
                  <button
                    onClick={() => setShowPricingModal(true)}
                    className="w-full text-left p-2 text-xs bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    💰 Pricing Calculator
                  </button>
                  <button
                    onClick={clearAllChatHistory}
                    className="w-full text-left p-2 text-xs bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors"
                  >
                    🗑️ Clear Chat History
                  </button>
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
