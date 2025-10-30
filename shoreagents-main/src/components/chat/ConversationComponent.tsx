'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Copy, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Progress } from '@/components/ui/progress'
import { useUserAuth } from '@/lib/user-auth-context'
import { useChatContext, Message, Conversation } from '@/lib/chat-context'
import { MayaTextField, MayaNameFields, MayaAnonymousUserForm, MayaPricingForm } from '@/components/maya'
import { 
  useMessages, 
  useConversationContext, 
  useCreateConversation, 
  useSendMessage, 
  useUpdateConversationContext,
  useMigrateConversations
} from '@/hooks/use-api'
import { AI_CONFIG } from '@/lib/ai-config'

interface ConversationComponentProps {
  conversationId?: string | null
  onConversationChange?: (conversationId: string) => void
  userId: string
  user: any
  isAuthenticated: boolean
  shouldShowGreeting?: boolean
  onResetShouldShowGreeting?: () => void
}

export function ConversationComponent({ 
  conversationId, 
  onConversationChange, 
  userId, 
  user, 
  isAuthenticated,
  shouldShowGreeting = false,
  onResetShouldShowGreeting
}: ConversationComponentProps) {
  const {
    messages,
    setMessages,
    conversations,
    currentConversationId,
    isLoading,
    addMessage,
    clearMessages,
    addConversation,
    updateConversation,
    deleteConversation,
    setCurrentConversationId,
    setIsLoading,
    generateAIResponse,
    deviceId,
    getDeviceId,
    currentContext,
    setCurrentContext,
    updateContext,
    saveContextSnapshot,
    migrateConversationsOnSignup,
    clearAllChatHistory
  } = useChatContext()

  // Get device ID and user ID
  const currentDeviceId = deviceId || ''
  const currentUserId = user?.user_id || currentDeviceId
  
  // TanStack Query hooks
  const { data: dbMessages = [] } = useMessages(currentConversationId)
  const { data: conversationContext } = useConversationContext(currentConversationId)
  const createConversationMutation = useCreateConversation()
  const sendMessageMutation = useSendMessage()
  const updateContextMutation = useUpdateConversationContext()
  const migrateConversationsMutation = useMigrateConversations()
  
  const [inputValue, setInputValue] = useState('')
  
  // Loading states
  const [isLoadingConversation, setIsLoadingConversation] = useState(false)
  const [isStartingNewConversation, setIsStartingNewConversation] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState('')
  const [progressValue, setProgressValue] = useState(0)
  
  // Modal states
  const [showInterviewModal, setShowInterviewModal] = useState(false)
  const [showAnonymousModal, setShowAnonymousModal] = useState(false)
  
  // Contact collection states
  const [isCollectingContact, setIsCollectingContact] = useState(false)
  
  // Pricing form states (like bottom nav chat)
  const [isCollectingPricing, setIsCollectingPricing] = useState(false)
  const [pricingStep, setPricingStep] = useState<'teamSize' | 'roleType' | 'industry' | 'individualRoles' | 'experience' | 'description' | 'workplaceSetup' | 'workplaceType' | 'workplaceIndividual' | 'workplace' | null>(null)
  const [pricingData, setPricingData] = useState<{teamSize?: string; roleType?: string; roles?: string; experience?: string; description?: string; workplaceSetup?: string; workplaceType?: string; currentMember?: number; [key: string]: any}>({})
  const [contactStep, setContactStep] = useState<'name' | 'email' | 'company' | null>(null)
  const [contactData, setContactData] = useState<{name?: string; email?: string; company?: string}>({})
  const [isGeneratingGreeting, setIsGeneratingGreeting] = useState(false)
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const lastSyncedConversationId = useRef<string | null>(null)
  const greetedConversations = useRef<Set<string>>(new Set())
  
  // Helper function to check if conversation is local (fallback when database is unavailable)
  const isLocalConversation = (conversationId: string | null) => {
    return conversationId?.startsWith('local-') || false
  }

  // Progress animation function
  const animateProgress = () => {
    setProgressValue(0)
    const duration = 2000 // 2 seconds
    const steps = 50
    const stepDuration = duration / steps
    const stepValue = 100 / steps
    
    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      setProgressValue(Math.min(currentStep * stepValue, 100))
      
      if (currentStep >= steps) {
        clearInterval(interval)
      }
    }, stepDuration)
    
    return interval
  }
  
  // Load greeted conversations from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('greetedConversations');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          greetedConversations.current = new Set(parsed);
          console.log('📱 Loaded greeted conversations from localStorage:', Array.from(greetedConversations.current));
        } catch (error) {
          console.error('Error loading greeted conversations:', error);
        }
      }
    }
  }, []);

  // Load modal states from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedModalStates = localStorage.getItem('mayaModalStates');
        if (storedModalStates) {
          const parsed = JSON.parse(storedModalStates);
          console.log('📱 Loading modal states from localStorage:', parsed);
          
          if (parsed.showInterviewModal) setShowInterviewModal(true);
          if (parsed.showAnonymousModal) setShowAnonymousModal(true);
          if (parsed.isCollectingContact) {
            setIsCollectingContact(true);
            if (parsed.contactStep) setContactStep(parsed.contactStep);
            if (parsed.contactData) setContactData(parsed.contactData);
          }
          if (parsed.isCollectingPricing && !shouldShowGreeting) {
            console.log('📱 Restoring pricing form state from localStorage (not during greeting)');
            setIsCollectingPricing(true);
            if (parsed.pricingStep) setPricingStep(parsed.pricingStep);
            if (parsed.pricingData) setPricingData(parsed.pricingData);
          } else if (parsed.isCollectingPricing && shouldShowGreeting) {
            console.log('🚫 Skipping pricing form restoration during greeting');
          }
        }
      } catch (error) {
        console.error('Error loading modal states from localStorage:', error);
      }
    }
  }, []);

  // Save modal states to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const modalStates = {
        showInterviewModal,
        showAnonymousModal,
        isCollectingContact,
        contactStep,
        contactData,
        isCollectingPricing,
        pricingStep,
        pricingData
      };
      
      try {
        localStorage.setItem('mayaModalStates', JSON.stringify(modalStates));
        console.log('💾 Saved modal states to localStorage:', modalStates);
      } catch (error) {
        console.error('Error saving modal states to localStorage:', error);
      }
    }
  }, [showInterviewModal, showAnonymousModal, isCollectingContact, contactStep, contactData, isCollectingPricing, pricingStep, pricingData]);

  // Cleanup progress intervals on unmount
  useEffect(() => {
    return () => {
      // Clear any running progress intervals
      setProgressValue(0);
    };
  }, []);
  
  // Save greeted conversations to localStorage whenever it changes
  const saveGreetedConversations = useCallback(() => {
    if (typeof window !== 'undefined') {
      const array = Array.from(greetedConversations.current);
      localStorage.setItem('greetedConversations', JSON.stringify(array));
      console.log('💾 Saved greeted conversations to localStorage:', array);
    }
  }, []);

  // Initialize conversation when conversationId prop changes
  useEffect(() => {
    if (conversationId && conversationId !== currentConversationId) {
      console.log('🔄 Loading conversation from prop:', conversationId);
      setCurrentConversationId(conversationId);
      lastSyncedConversationId.current = null; // Reset to allow sync
    } else if (conversationId === null && currentConversationId) {
      // New chat requested - clear current conversation
      console.log('🆕 New chat requested - clearing current conversation');
      setCurrentConversationId(null);
      lastSyncedConversationId.current = null;
    }
    // Removed auto-creation - let user explicitly start new conversation via welcome screen
  }, [conversationId, currentConversationId, setCurrentConversationId]);

  // Define startNewConversationWithGreeting function before using it in useEffect
  const startNewConversationWithGreeting = useCallback(async () => {
    // Show loading state
    setIsStartingNewConversation(true)
    setLoadingMessage('Starting a new conversation...')
    
    // Start progress animation
    const progressInterval = animateProgress()
    
    // Wait for progress animation to complete before actually creating conversation
    setTimeout(async () => {
      try {
        clearMessages()
        lastSyncedConversationId.current = null // Reset sync tracking
        
        // Create a new conversation
        try {
          // Create conversation in database
          // For authenticated users, use their user_id as deviceId
          // For anonymous users, use the device fingerprint
          const result = await createConversationMutation.mutateAsync({
            deviceId: currentUserId, // Use currentUserId (which is user_id or deviceId) as deviceId
            conversationType: user?.user_id ? 'authenticated' : 'anonymous',
            title: 'New Chat',
            contextData: {}
          })
          
          const newConversation: Conversation = {
            id: result.id,
            title: result.title,
            lastMessage: result.lastMessage || '',
            timestamp: result.timestamp,
            messageCount: result.messageCount
          }
          
          addConversation(newConversation)
          setCurrentConversationId(result.id) // Set conversation ID immediately for greeting
          
          // Notify parent component of conversation change
          if (onConversationChange) {
            onConversationChange(result.id)
          }
          
          console.log('✅ New conversation created with greeting:', result.id)
        } catch (error) {
          console.error('❌ Error creating new conversation:', error)
          
          // Fallback: Create a local conversation ID when database is unavailable
          console.log('🔄 Creating local conversation as fallback...')
          const localConversationId = `local-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
          
          const newConversation: Conversation = {
            id: localConversationId,
            title: 'New Chat',
            lastMessage: '',
            timestamp: new Date(),
            messageCount: 0
          }
          
          addConversation(newConversation)
          setCurrentConversationId(localConversationId) // Set conversation ID immediately for greeting
          
          // Notify parent component of conversation change
          if (onConversationChange) {
            onConversationChange(localConversationId)
          }
          
          console.log('✅ Local conversation created as fallback with greeting:', localConversationId)
        }
      } finally {
        // Clear progress animation and hide loading state
        clearInterval(progressInterval)
        setIsStartingNewConversation(false)
        setLoadingMessage('')
        setProgressValue(0)
      }
    }, 2000)
  }, [currentUserId, user?.user_id, createConversationMutation, addConversation, setCurrentConversationId, onConversationChange, clearMessages, lastSyncedConversationId])

  // Auto-create conversation when shouldShowGreeting is true (New Chat button clicked)
  useEffect(() => {
    if (shouldShowGreeting && !currentConversationId && currentUserId) {
      console.log('🎯 Auto-creating conversation for New Chat button with greeting');
      startNewConversationWithGreeting();
    }
  }, [shouldShowGreeting, currentConversationId, currentUserId, startNewConversationWithGreeting]);

  // Disabled automatic greeting detection - conversations start with user messages

  // Migrate conversations when user logs in
  useEffect(() => {
    if (user?.user_id && currentDeviceId && user.user_id !== currentDeviceId) {
      const migrateConversations = async () => {
        try {
          console.log('🔄 Starting conversation migration...', {
            userId: user.user_id,
            deviceId: currentDeviceId
          });
          
          await migrateConversationsMutation.mutateAsync({
            userId: user.user_id,
            deviceId: currentDeviceId
          });
          console.log('✅ Conversations migrated successfully');
        } catch (error) {
          console.warn('⚠️ Failed to migrate conversations:', error);
        }
      };
      
      // Delay migration to ensure everything is loaded
      const timeoutId = setTimeout(migrateConversations, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [user?.user_id, currentDeviceId, migrateConversationsMutation]);

  // Sync database messages with local messages - only when switching conversations
  useEffect(() => {
    console.log('🔄 Message sync check:', {
      dbMessagesLength: dbMessages.length,
      currentConversationId,
      lastSyncedId: lastSyncedConversationId.current,
      isGeneratingGreeting: isGeneratingGreeting,
      shouldSync: dbMessages.length > 0 && 
                  currentConversationId && 
                  lastSyncedConversationId.current !== currentConversationId &&
                  !isGeneratingGreeting
    });
    
    // Only sync if we're switching to a different conversation or loading for first time
    // AND we're not currently generating a greeting
    if (dbMessages.length > 0 && currentConversationId && 
        lastSyncedConversationId.current !== currentConversationId &&
        !isGeneratingGreeting) {
      
      console.log('🔄 Syncing messages from database...');
      
      const transformedMessages: Message[] = dbMessages.map(msg => ({
        id: msg.id,
        role: msg.role,
        content: msg.content,
        timestamp: new Date(msg.timestamp),
        contextSnapshot: msg.contextSnapshot
      }));
      
      setMessages(transformedMessages);
      lastSyncedConversationId.current = currentConversationId;
      
      // Mark this conversation as already greeted if it has messages
      if (transformedMessages.length > 0) {
        greetedConversations.current.add(currentConversationId);
      }
    }
  }, [dbMessages, currentConversationId, setMessages, isGeneratingGreeting]);

  // Update context when conversation context changes
  useEffect(() => {
    if (conversationContext && currentContext) {
      // Only update if the context data is actually different
      const contextDataChanged = JSON.stringify(conversationContext.contextData) !== JSON.stringify(currentContext.contextData);
      const titleChanged = conversationContext.title !== currentContext.title;
      
      if (contextDataChanged || titleChanged) {
        updateContext({
          contextData: conversationContext.contextData,
          title: conversationContext.title
        });
      }
    }
  }, [conversationContext, currentContext]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Wrapper function for setMessages prop compatibility
  const handleSetMessages = (messageOrMessages: Message | Message[] | ((prev: Message[]) => Message[])) => {
    if (Array.isArray(messageOrMessages)) {
      // If it's an array, replace all messages
      messageOrMessages.forEach(msg => addMessage(msg))
    } else if (typeof messageOrMessages === 'function') {
      // If it's a function, we can't easily handle this with addMessage
      // For now, we'll just ignore it since MayaTextField doesn't use this pattern
    } else {
      // If it's a single message, add it
      addMessage(messageOrMessages)
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Generate greeting only when shouldShowGreeting is true (New Chat button clicked)
  useEffect(() => {
    if (shouldShowGreeting && currentConversationId && messages.length === 0 && !isLoading && currentUserId) {
      console.log('🎯 Generating greeting for NEW CHAT button click:', currentConversationId);
      console.log('🔍 Current pricing form state:', { isCollectingPricing, pricingStep });
      
      const generatePersonalizedGreeting = async () => {
        try {
          console.log('🤖 Calling generateAIResponse for greeting...', {
            conversationId: currentConversationId,
            userId: currentUserId,
            timestamp: new Date().toISOString()
          });
          setIsLoading(true);
          const { response, relatedContent, userData, suggestedComponents } = await generateAIResponse('', [], currentUserId);
          console.log('✅ Greeting response received:', {
            responseLength: response.length,
            responsePreview: response.substring(0, 100) + '...',
            timestamp: new Date().toISOString()
          });
          
          const greetingMessage: Message = {
            id: 'personalized-greeting-' + Date.now(),
            role: 'assistant',
            content: response,
            timestamp: new Date(),
            relatedContent: relatedContent.length > 0 ? relatedContent : undefined,
            suggestedComponents: undefined, // Don't show suggested actions in first greeting
            userData: userData,
            contextSnapshot: saveContextSnapshot()
          };

          console.log('📝 Adding greeting message to UI:', {
            messageId: greetingMessage.id,
            contentPreview: greetingMessage.content.substring(0, 50) + '...',
            timestamp: greetingMessage.timestamp.toISOString()
          });
          addMessage(greetingMessage);
          
          // Don't auto-trigger any modals or suggested actions in the first greeting
          // Keep the greeting clean and simple
          
          // Save greeting message to database (skip for local conversations)
          if (!isLocalConversation(currentConversationId)) {
            try {
              await sendMessageMutation.mutateAsync({
                conversationId: currentConversationId,
                userId: currentUserId,
                role: 'assistant',
                content: response,
                contextSnapshot: saveContextSnapshot()
              });
            } catch (error) {
              console.error('Error saving greeting message:', error);
            }
          }
        } catch (error) {
          console.error('Error generating personalized greeting:', error);
          // Fallback to generic greeting if personalized greeting fails
          const fallbackMessage: Message = {
            id: 'fallback-greeting-' + Date.now(),
            role: 'assistant',
            content: "Hello! I'm Maya from ShoreAgents. What would you like to know?",
            timestamp: new Date(),
            contextSnapshot: saveContextSnapshot()
          };
          addMessage(fallbackMessage);
          
          // Save fallback message to database (skip for local conversations)
          if (!isLocalConversation(currentConversationId)) {
            try {
              await sendMessageMutation.mutateAsync({
                conversationId: currentConversationId,
                userId: currentUserId,
                role: 'assistant',
                content: fallbackMessage.content,
                contextSnapshot: saveContextSnapshot()
              });
            } catch (dbError) {
              console.error('Error saving fallback message:', dbError);
            }
          }
        } finally {
          setIsLoading(false);
          // Reset shouldShowGreeting after greeting is generated
          if (onResetShouldShowGreeting) {
            onResetShouldShowGreeting();
          }
          if (onConversationChange) {
            onConversationChange(currentConversationId);
          }
        }
      };

      // Add a small delay to ensure conversation is fully set up
      const timeoutId = setTimeout(() => {
        generatePersonalizedGreeting();
      }, 100);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [shouldShowGreeting, currentConversationId, messages.length, isLoading, currentUserId || '', generateAIResponse, addMessage, sendMessageMutation, saveContextSnapshot, setIsLoading])

  const handleModalTrigger = (modalType: string) => {
    console.log('🎯 Modal triggered:', modalType)
    switch (modalType) {
      case 'interview_request_modal':
        setShowInterviewModal(true)
        break
      case 'anonymous_user_modal':
        setShowAnonymousModal(true)
        break
      case 'pricing_calculator_modal':
        setIsCollectingPricing(true)
        setPricingStep('teamSize')
        break
      default:
        console.log('Unknown modal type:', modalType)
    }
  }

  // Clear modal states from localStorage when modals are closed
  const clearModalStates = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('mayaModalStates');
      console.log('🗑️ Cleared modal states from localStorage');
    }
  }, []);

  // Clear modal states when modals are closed
  const handleCloseInterviewModal = useCallback(() => {
    setShowInterviewModal(false);
    clearModalStates();
  }, [clearModalStates]);

  const handleCloseAnonymousModal = useCallback(() => {
    setShowAnonymousModal(false);
    clearModalStates();
  }, [clearModalStates]);

  const handleClosePricingForm = useCallback(() => {
    setIsCollectingPricing(false);
    setPricingStep(null);
    setPricingData({});
    clearModalStates();
  }, [clearModalStates]);

  const handleCloseContactForm = useCallback(() => {
    setIsCollectingContact(false);
    setContactStep(null);
    setContactData({});
    clearModalStates();
  }, [clearModalStates]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return
    
    // If no conversation exists, start a new one first
    if (!currentConversationId) {
      // Store the message content before starting new conversation
      const messageContent = inputValue
      setInputValue('') // Clear input immediately
      
      // Start new conversation and wait for it to complete
      await startNewConversation()
      
      // Wait for the conversation to be created (progress animation + creation time)
      setTimeout(() => {
        // Now send the message
        if (currentConversationId) {
          handleSubmitWithMessage(messageContent)
        }
      }, 2500) // Wait longer than the progress animation (2000ms) + buffer
      return
    }
    
    handleSubmit(new Event('submit') as any)
  }

  const handleSubmitWithMessage = async (messageContent: string) => {
    if (!messageContent.trim() || isLoading || !currentConversationId) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageContent,
      timestamp: new Date(),
      contextSnapshot: saveContextSnapshot()
    }

    addMessage(userMessage)
    
    // Save user message to database (skip for local conversations)
    if (!isLocalConversation(currentConversationId)) {
      try {
        await sendMessageMutation.mutateAsync({
          conversationId: currentConversationId,
          userId: currentUserId,
          role: 'user',
          content: messageContent,
          contextSnapshot: saveContextSnapshot()
        });
      } catch (error) {
        console.error('Error saving user message:', error);
      }
    }
    
    // Clear input and set loading state
    setInputValue('')
    setIsLoading(true)

    try {
      const { response, relatedContent, suggestedComponents, userData } = await generateAIResponse(messageContent, messages, currentUserId)
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
        relatedContent: relatedContent.length > 0 ? relatedContent : undefined,
        suggestedComponents: suggestedComponents,
        userData: userData,
        contextSnapshot: saveContextSnapshot()
      }

      addMessage(assistantMessage)
      
      // Save assistant message to database (skip for local conversations)
      if (!isLocalConversation(currentConversationId)) {
        try {
          await sendMessageMutation.mutateAsync({
            conversationId: currentConversationId,
            userId: currentUserId,
            role: 'assistant',
            content: response,
            relatedContent: relatedContent,
            suggestedComponents: suggestedComponents,
            userData: userData,
            contextSnapshot: saveContextSnapshot()
          });
        } catch (error) {
          console.error('Error saving assistant message:', error);
        }
      }

      // Handle modal triggers (but not during greeting)
      if (suggestedComponents && suggestedComponents.length > 0 && !shouldShowGreeting) {
        console.log('🎯 Auto-triggering suggested components in handleSubmitWithMessage:', suggestedComponents)
        console.log('🔍 shouldShowGreeting state:', shouldShowGreeting)
        suggestedComponents.forEach(component => {
          handleModalTrigger(component);
        });
      }
      
      // Update or create conversation
      const conversationTitle = messageContent.length > 50 ? messageContent.substring(0, 50) + '...' : messageContent
      const conversationId = currentConversationId || Date.now().toString()
      
      const newConversation: Conversation = {
        id: conversationId,
        title: conversationTitle,
        lastMessage: response,
        timestamp: new Date(),
        messageCount: messages.length + 2
      }

      if (currentConversationId) {
        updateConversation(conversationId, newConversation)
      } else {
        addConversation(newConversation)
        setCurrentConversationId(conversationId)
      }

    } catch (error) {
      console.error('Error generating AI response:', error)
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: AI_CONFIG.errorMessages.generic,
        timestamp: new Date(),
        contextSnapshot: saveContextSnapshot()
      }
      addMessage(errorMessage)
      
      // Save error message to database (skip for local conversations)
      if (currentConversationId && !isLocalConversation(currentConversationId)) {
        try {
          await sendMessageMutation.mutateAsync({
            conversationId: currentConversationId,
            userId: currentUserId,
            role: 'assistant',
            content: errorMessage.content,
            contextSnapshot: saveContextSnapshot()
          });
        } catch (dbError) {
          console.error('Error saving error message:', dbError);
        }
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isLoading || !currentConversationId) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
      contextSnapshot: saveContextSnapshot()
    }

    addMessage(userMessage)
    
    // Save user message to database (skip for local conversations)
    if (!isLocalConversation(currentConversationId)) {
      try {
        await sendMessageMutation.mutateAsync({
          conversationId: currentConversationId,
          userId: currentUserId,
          role: 'user',
          content: inputValue,
          contextSnapshot: saveContextSnapshot()
        });
      } catch (error) {
        console.error('Error saving user message:', error);
      }
    }
    
    setInputValue('')
    setIsLoading(true)

    try {
      const { response, relatedContent, suggestedComponents, userData } = await generateAIResponse(inputValue, messages, currentUserId)
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
        relatedContent: relatedContent.length > 0 ? relatedContent : undefined,
        suggestedComponents: suggestedComponents,
        userData: userData,
        contextSnapshot: saveContextSnapshot()
      }

      addMessage(assistantMessage)
      
      // Auto-trigger modals based on suggestedComponents (but not during greeting)
      if (suggestedComponents && suggestedComponents.length > 0 && !shouldShowGreeting) {
        console.log('🎯 Auto-triggering suggested components:', suggestedComponents)
        console.log('🔍 shouldShowGreeting state:', shouldShowGreeting)
        
        // Check for pricing calculator suggestion
        if (suggestedComponents.includes('pricing_calculator_modal')) {
          console.log('💰 Auto-triggering pricing form (step-by-step)')
          setIsCollectingPricing(true)
          setPricingStep('teamSize')
        }
        
        // Check for interview request suggestion
        if (suggestedComponents.includes('interview_request_modal')) {
          console.log('📅 Auto-triggering interview request modal')
          setShowInterviewModal(true)
        }
        
        // Check for anonymous user modal suggestion
        if (suggestedComponents.includes('anonymous_user_modal')) {
          console.log('👤 Auto-triggering anonymous user modal')
          setShowAnonymousModal(true)
        }
      }
      
      // Save assistant message to database (skip for local conversations)
      if (!isLocalConversation(currentConversationId)) {
        try {
          await sendMessageMutation.mutateAsync({
            conversationId: currentConversationId,
            userId: currentUserId,
            role: 'assistant',
            content: response,
            contextSnapshot: saveContextSnapshot()
          });
        } catch (error) {
          console.error('Error saving assistant message:', error);
        }
      }
      
      // Check if Maya is asking for contact information
      const responseLower = response.toLowerCase();
      const isAskingForContact = responseLower.includes('before we continue our conversation, it\'s okay to have your name?') ||
                                (responseLower.includes('name') && responseLower.includes('email')) ||
                                (responseLower.includes('contact') && (responseLower.includes('get') || responseLower.includes('have'))) ||
                                (responseLower.includes('personalized') && responseLower.includes('assistance')) ||
                                (responseLower.includes('best service') && responseLower.includes('email'));
      
      if (isAskingForContact && !isCollectingContact) {
        console.log('Maya is asking for contact info, triggering form');
        setIsCollectingContact(true);
        setContactStep('name');
      }
      
      // Update or create conversation
      const conversationTitle = inputValue.length > 50 ? inputValue.substring(0, 50) + '...' : inputValue
      const conversationId = currentConversationId || Date.now().toString()
      
      const newConversation: Conversation = {
        id: conversationId,
        title: conversationTitle,
        lastMessage: response,
        timestamp: new Date(),
        messageCount: messages.length + 2
      }

      const existing = conversations.find(c => c.id === conversationId)
      if (existing) {
        updateConversation(conversationId, newConversation)
      } else {
        addConversation(newConversation)
      }
      
      setCurrentConversationId(conversationId)
    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: AI_CONFIG.errorMessages.generic,
        timestamp: new Date(),
        contextSnapshot: saveContextSnapshot()
      }
      addMessage(errorMessage)
      
      // Save error message to database (skip for local conversations)
      if (currentConversationId && !isLocalConversation(currentConversationId)) {
        try {
          await sendMessageMutation.mutateAsync({
            conversationId: currentConversationId,
            userId: currentUserId,
            role: 'assistant',
            content: errorMessage.content,
            contextSnapshot: saveContextSnapshot()
          });
        } catch (dbError) {
          console.error('Error saving error message:', dbError);
        }
      }
    } finally {
      setIsLoading(false)
    }
  }

  const startNewConversation = async () => {
    // Show loading state
    setIsStartingNewConversation(true)
    setLoadingMessage('Starting a new conversation...')
    
    // Start progress animation
    const progressInterval = animateProgress()
    
    // Wait for progress animation to complete before actually creating conversation
    setTimeout(async () => {
      try {
        clearMessages()
        setCurrentConversationId(null)
        lastSyncedConversationId.current = null // Reset sync tracking
        
        // Create a new conversation
        try {
          // Create conversation in database
          // For authenticated users, use their user_id as deviceId
          // For anonymous users, use the device fingerprint
          const result = await createConversationMutation.mutateAsync({
            deviceId: currentUserId, // Use currentUserId (which is user_id or deviceId) as deviceId
            conversationType: user?.user_id ? 'authenticated' : 'anonymous',
            title: 'New Chat',
            contextData: {}
          })
          
          const newConversation: Conversation = {
            id: result.id,
            title: result.title,
            lastMessage: result.lastMessage || '',
            timestamp: result.timestamp,
            messageCount: result.messageCount
          }
          
          addConversation(newConversation)
          setCurrentConversationId(result.id)
          
          // Notify parent component of conversation change
          if (onConversationChange) {
            onConversationChange(result.id)
          }
          
          console.log('✅ New conversation created:', result.id)
        } catch (error) {
          console.error('❌ Error creating new conversation:', error)
          
          // Fallback: Create a local conversation ID when database is unavailable
          console.log('🔄 Creating local conversation as fallback...')
          const localConversationId = `local-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
          
          const newConversation: Conversation = {
            id: localConversationId,
            title: 'New Chat',
            lastMessage: '',
            timestamp: new Date(),
            messageCount: 0
          }
          
          addConversation(newConversation)
          setCurrentConversationId(localConversationId)
          
          // Notify parent component of conversation change
          if (onConversationChange) {
            onConversationChange(localConversationId)
          }
          
          console.log('✅ Local conversation created as fallback:', localConversationId)
        }
      } finally {
        // Clear progress animation and hide loading state
        clearInterval(progressInterval)
        setIsStartingNewConversation(false)
        setLoadingMessage('')
        setProgressValue(0)
      }
    }, 2000)
  }

  const loadConversation = (conversationId: string) => {
    // Show loading state
    setIsLoadingConversation(true)
    setLoadingMessage('Loading conversation...')
    
    // Start progress animation
    const progressInterval = animateProgress()
    
    // Wait for progress animation to complete before actually loading
    setTimeout(() => {
      // Reset sync tracking when loading a different conversation
      lastSyncedConversationId.current = null
      setCurrentConversationId(conversationId)
      
      // Notify parent component of conversation change
      if (onConversationChange) {
        onConversationChange(conversationId)
      }
      
      // Clear progress and hide loading state
      clearInterval(progressInterval)
      setIsLoadingConversation(false)
      setLoadingMessage('')
      setProgressValue(0)
    }, 2000)
  }

  const renderMessage = (message: Message) => {
    const isUser = message.role === 'user'
    
    return (
      <motion.div
        key={message.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`flex gap-2 p-2 sm:p-3 group hover:bg-opacity-80 transition-colors ${
          isUser ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        <div className="flex-shrink-0">
          {isUser ? (
            <div className="w-8 h-8 bg-lime-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              {user?.first_name?.charAt(0) || 'U'}
            </div>
          ) : (
            <div className="w-8 h-8 bg-gradient-to-r from-lime-500 to-lime-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              M
            </div>
          )}
        </div>
        
        <div className={`flex-1 min-w-0 ${isUser ? 'text-right' : 'text-left'}`}>
          <div className={`flex items-center gap-2 mb-1 ${isUser ? 'justify-end' : 'justify-start'}`}>
            <span className="font-semibold text-sm">
              {isUser ? (user?.first_name || 'You') : AI_CONFIG.assistant.name}
            </span>
            <span className="text-xs text-gray-500">
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
          
          <div className={`prose prose-sm max-w-none ${isUser ? 'prose-invert' : ''}`}>
            <div className={`inline-block p-2 sm:p-3 rounded-lg ${
              isUser 
                ? 'bg-lime-100 text-lime-900 border border-lime-200' 
                : 'bg-white text-gray-900 border border-gray-200'
            }`}>
              <p className="whitespace-pre-wrap leading-relaxed m-0 text-sm sm:text-base">
                {message.content}
              </p>
            </div>
          </div>

          {/* Pricing Form */}
          {isCollectingPricing && pricingStep && (
            <div className="mt-4">
              <MayaPricingForm
                currentStep={pricingStep}
                onStepChange={(step: string | null) => {
                  if (step === null) {
                    handleClosePricingForm()
                  } else {
                    setPricingStep(step as any)
                  }
                }}
                onDataChange={(data: any) => {
                  setPricingData(prev => ({ ...prev, ...data }))
                }}
                data={pricingData}
                onComplete={(finalData: any) => {
                  console.log('🎉 Pricing form completed:', finalData)
                  handleClosePricingForm()
                  
                  // You can add logic here to handle the completed pricing form
                  // For example, save to database or show a summary
                }}
              />
            </div>
          )}

          {/* Suggested Actions */}
          {message.suggestedComponents && message.suggestedComponents.length > 0 && (
            <div className="mt-4">
              <div className="text-xs font-medium text-gray-600 mb-3">💡 Suggested Actions:</div>
              <div className="flex flex-wrap gap-2">
                {message.suggestedComponents.map((component, index) => (
                  <button
                    key={index}
                    onClick={() => handleModalTrigger(component)}
                    className="px-3 py-1.5 text-xs font-medium bg-lime-50 text-lime-700 border border-lime-200 rounded-lg hover:bg-lime-100 transition-colors"
                  >
                    {component.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Message Actions */}
          <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 w-8 p-0"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy message to clipboard</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="h-full flex flex-col relative">
      {/* Loading Overlay */}
      {(isLoadingConversation || isStartingNewConversation) && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-4">
            <div className="flex items-center gap-3 mb-4">
              <Loader2 className="w-5 h-5 animate-spin text-lime-600" />
              <span className="font-medium text-gray-900">{loadingMessage}</span>
            </div>
            <Progress value={progressValue} className="w-full" />
          </div>
        </div>
      )}
      
      {/* Messages - Only this scrolls, like ChatGPT */}
      <div 
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto bg-gray-50" 
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-1">
          {/* Welcome Screen - Show when no messages but NOT when shouldShowGreeting (New Chat button) */}
          {messages.length === 0 && !isLoading && !shouldShowGreeting && (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
              <div className="w-16 h-16 bg-gradient-to-r from-lime-500 to-lime-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold mb-6">
                M
              </div>
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                Chat with Maya
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-md">
                Your AI assistant for all your questions and tasks. How can I help you today?
              </p>
              
              {/* Centered Input Field */}
              <div className="w-full max-w-2xl">
                <div className="relative">
                  <textarea
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="What do you want to talk about today? . . . ."
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 pr-10 sm:pr-12 text-sm sm:text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent shadow-sm"
                    rows={1}
                    style={{
                      minHeight: '56px',
                      maxHeight: '200px',
                      height: 'auto'
                    }}
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      target.style.height = 'auto';
                      target.style.height = target.scrollHeight + 'px';
                    }}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 p-1.5 sm:p-2 text-lime-600 hover:text-lime-700 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}
          
          <AnimatePresence>
            {messages.map(renderMessage)}
          </AnimatePresence>
          
          {/* Contact Collection Form */}
          {isCollectingContact && contactStep && (
            <div className="mt-4">
              <MayaAnonymousUserForm
                currentStep={contactStep}
                onStepChange={(step) => {
                  if (step === null) {
                    handleCloseContactForm();
                  } else {
                    setContactStep(step as 'name' | 'email' | 'company');
                  }
                }}
                onFormDataChange={(data) => {
                  setContactData(data);
                }}
                setMessages={handleSetMessages}
                generateMessageId={() => Date.now().toString()}
                formData={contactData}
              />
            </div>
          )}
          
          {isLoading && (
            <div className="flex gap-4 p-6">
              <div className="w-8 h-8 bg-gradient-to-r from-lime-500 to-lime-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                M
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-sm">{AI_CONFIG.assistant.name}</span>
                  <span className="text-xs text-gray-500">typing...</span>
                </div>
                <div className="inline-block p-3 rounded-lg bg-white border border-gray-200">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-lime-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-lime-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-lime-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area - Fixed at bottom - Only show when there are messages */}
      {messages.length > 0 && (
        <div className="bg-white border-t p-3 sm:p-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="flex gap-2 sm:gap-3">
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Message Maya..."
                  className="w-full resize-none rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 pr-10 sm:pr-12 focus:border-lime-500 focus:ring-1 focus:ring-lime-500 focus:outline-none min-h-[40px] sm:min-h-[44px] shadow-sm text-sm sm:text-base"
                  rows={1}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleSubmit(e)
                    }
                  }}
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 p-1 sm:p-1.5 bg-lime-600 text-white rounded-lg hover:bg-lime-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors z-10"
                >
                  <Send size={12} className="sm:w-3.5 sm:h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
