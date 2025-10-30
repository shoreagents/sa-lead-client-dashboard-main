'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { generateUserId } from '@/lib/userEngagementService';
import { AI_CONFIG, getRandomWelcomeMessage } from '@/lib/ai-config';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  type?: 'text' | 'candidates' | 'summary';
  data?: any;
  relatedContent?: Array<{
    title: string;
    content: string;
    url?: string;
  }>;
  suggestedComponents?: string[];
  userData?: {
    userType: string;
    hasQuotes: boolean;
    leadCaptureStatus: {
      first_lead_capture: boolean;
      second_lead_capture: boolean;
      third_lead_capture: boolean;
    };
  };
  contextSnapshot?: any; // Context at time of message
}

export interface Conversation {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
  messageCount: number;
  conversationType: 'anonymous' | 'authenticated';
  contextData?: any; // Enhanced context storage
  migratedAt?: Date; // When migrated from anonymous to authenticated
}

export interface ConversationContext {
  deviceId: string;
  userId?: string;
  conversationType: 'anonymous' | 'authenticated';
  title: string;
  contextData: {
    userPreferences: any;
    conversationHistory: any;
    systemState: any;
    metadata: any;
  };
  contextSnapshot: any; // Per-message context
}

interface ChatContextType {
  // Device ID Management
  deviceId: string;
  getDeviceId: () => string;
  
  // Messages
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  addMessage: (message: Message) => void;
  clearMessages: () => void;
  
  // Conversations
  conversations: Conversation[];
  setConversations: (conversations: Conversation[]) => void;
  addConversation: (conversation: Conversation) => void;
  updateConversation: (id: string, conversation: Conversation) => void;
  deleteConversation: (id: string) => void;
  
  // Current conversation
  currentConversationId: string | null;
  setCurrentConversationId: (id: string | null) => void;
  clearCurrentConversation: () => void;
  
  // Context Management
  currentContext: ConversationContext | null;
  setCurrentContext: (context: ConversationContext | null) => void;
  updateContext: (updates: Partial<ConversationContext>) => void;
  saveContextSnapshot: () => any;
  
  // Loading states
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  
  // AI Response generation
  generateAIResponse: (message: string, conversationHistory: Message[], userId?: string) => Promise<{
    response: string;
    relatedContent: Array<{ title: string; content: string; url?: string }>;
    suggestedComponents: string[];
    userData: any;
  }>;
  
  // Conversation Management
  createAnonymousConversation: (deviceId: string) => Promise<string>;
  migrateConversationsOnSignup: (userId: string, deviceId: string) => Promise<void>;
  loadConversationsByDevice: (deviceId: string) => Promise<Conversation[]>;
  loadConversationsByUser: (userId: string) => Promise<Conversation[]>;
  
  // Modal triggers
  triggerModal: (modalType: string) => void;
  
  // Clear all chat history
  clearAllChatHistory: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};

interface ChatProviderProps {
  children: React.ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentContext, setCurrentContext] = useState<ConversationContext | null>(null);
  const [deviceId, setDeviceId] = useState<string>('');
  const queryClient = useQueryClient();

  // Device ID Management - Use existing fingerprinting system
  const getDeviceId = useCallback(() => {
    if (deviceId) return deviceId;
    
    // Check if we're in the browser
    if (typeof window === 'undefined') {
      return '';
    }
    
    // Use the existing device fingerprinting system
    const fingerprintDeviceId = generateUserId();
    
    // Only update state if it's different
    if (fingerprintDeviceId !== deviceId) {
      setDeviceId(fingerprintDeviceId);
    }
    
    return fingerprintDeviceId;
  }, [deviceId]);

  // Initialize device ID on mount - run only once
  useEffect(() => {
    if (!deviceId && typeof window !== 'undefined') {
      const fingerprintDeviceId = generateUserId();
      setDeviceId(fingerprintDeviceId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  // All conversations are managed via database through TanStack Query hooks
  // ChatContext keeps the sidebar in sync with database state

  // Sync conversations from TanStack Query when deviceId is available
  const userId = deviceId || '';
  const { data: dbConversations = [] } = useQuery({
    queryKey: ['conversations', deviceId, userId],
    queryFn: async () => {
      if (!deviceId && !userId) return [];
      
      const params = new URLSearchParams();
      if (deviceId) params.append('deviceId', deviceId);
      if (userId) params.append('userId', userId);
      
      const response = await fetch(`/api/chat/conversations?${params}`);
      if (!response.ok) return [];
      
      const data = await response.json();
      return data.conversations || [];
    },
    enabled: !!deviceId, // Only fetch when deviceId is ready
    staleTime: 5 * 60 * 1000, // 5 minutes - conversations don't change that often
    refetchOnWindowFocus: false, // Don't refetch when window gains focus
    refetchOnMount: true, // Fetch on mount
    refetchInterval: false, // Disable polling - only refetch manually
    retry: 1,
    retryDelay: 1000,
  });


  // Use ref to track processed conversations and prevent infinite loops
  const processedConversationsRef = useRef<string>('');

  // Sync dbConversations to local state with stable dependency tracking
  useEffect(() => {
    if (!dbConversations) return;

    // Create a stable string representation of the conversations
    const conversationsString = JSON.stringify(dbConversations.map((conv: any) => ({
      id: conv.id,
      title: conv.title,
      lastMessage: conv.lastMessage,
      messageCount: conv.messageCount,
      conversationType: conv.conversationType,
    })));

    // Only process if conversations have actually changed
    if (conversationsString === processedConversationsRef.current) {
      return;
    }

    if (dbConversations.length > 0) {
      const formatted = dbConversations.map((conv: any) => {
        // Ensure timestamp is always a Date object
        let timestamp: Date;
        if (conv.timestamp instanceof Date) {
          timestamp = conv.timestamp;
        } else if (conv.timestamp) {
          timestamp = new Date(conv.timestamp);
        } else if (conv.created_at) {
          timestamp = new Date(conv.created_at);
        } else {
          timestamp = new Date();
        }
        
        return {
          id: conv.id,
          title: conv.title || 'New Chat',
          lastMessage: conv.lastMessage || '',
          timestamp,
          messageCount: conv.messageCount || 0,
          conversationType: conv.conversationType || 'anonymous',
          contextData: conv.contextData,
          migratedAt: conv.migratedAt ? new Date(conv.migratedAt) : undefined,
        };
      });
      
      setConversations(formatted);
      processedConversationsRef.current = conversationsString;
      console.log('📱 Loaded conversations from database:', formatted.length);
    } else {
      setConversations([]);
      processedConversationsRef.current = conversationsString;
      console.log('📱 Database returned empty conversations, cleared local state');
    }
  }, [dbConversations]);

  const addMessage = useCallback((message: Message) => {
    console.log('📨 ChatContext addMessage called:', {
      messageId: message.id,
      role: message.role,
      contentPreview: message.content.substring(0, 50) + '...',
      timestamp: message.timestamp.toISOString(),
      stackTrace: new Error().stack?.split('\n').slice(1, 4).join('\n')
    });
    setMessages(prev => [...prev, message]);
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  const addConversation = useCallback((conversation: Conversation) => {
    setConversations(prev => [conversation, ...prev]);
    // Invalidate and refetch conversations
    queryClient.invalidateQueries({ queryKey: ['conversations'] });
  }, [queryClient]);

  const updateConversation = useCallback((id: string, conversation: Conversation) => {
    setConversations(prev => prev.map(c => c.id === id ? conversation : c));
    // Invalidate and refetch conversations
    queryClient.invalidateQueries({ queryKey: ['conversations'] });
  }, [queryClient]);

  const deleteConversation = useCallback((id: string) => {
    setConversations(prev => prev.filter(c => c.id !== id));
    if (currentConversationId === id) {
      setMessages([]);
      setCurrentConversationId(null);
    }
    // Invalidate and refetch conversations
    queryClient.invalidateQueries({ queryKey: ['conversations'] });
  }, [currentConversationId, queryClient]);

  const clearCurrentConversation = useCallback(() => {
    setCurrentConversationId(null);
    setMessages([]);
  }, []);

  const generateAIResponse = useCallback(async (
    message: string, 
    conversationHistory: Message[], 
    userId?: string
  ) => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          conversationHistory: conversationHistory.map(msg => ({
            role: msg.role,
            content: msg.content
          })),
          userId: userId || ''
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      return {
        response: data.content || 'I apologize, but I encountered an error processing your request.',
        relatedContent: data.components || [],
        suggestedComponents: data.suggestedComponents || [],
        userData: data.userData || null
      };
    } catch (error) {
      console.error('API call error:', error);
      throw error;
    }
  }, []);

  // Context Management
  const updateContext = useCallback((updates: Partial<ConversationContext>) => {
    setCurrentContext(prev => prev ? { ...prev, ...updates } : null);
  }, []);

  const saveContextSnapshot = useCallback(() => {
    return currentContext ? {
      ...currentContext,
      timestamp: new Date().toISOString()
    } : null;
  }, [currentContext]);

  // Conversation Management
  const createAnonymousConversation = useCallback(async (deviceId: string): Promise<string> => {
    try {
      console.log('🔄 Creating anonymous conversation for device:', deviceId);
      
      const response = await fetch('/api/chat/conversations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          deviceId,
          conversationType: 'anonymous',
          title: 'New Chat',
          contextData: currentContext?.contextData || {}
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Failed to create conversation:', response.status, errorText);
        throw new Error(`Failed to create conversation: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log('✅ Conversation created successfully:', data.conversationId);
      return data.conversationId;
    } catch (error) {
      console.error('❌ Error creating anonymous conversation:', error);
      throw error;
    }
  }, [currentContext]);

  const migrateConversationsOnSignup = useCallback(async (userId: string, deviceId: string): Promise<void> => {
    try {
      const response = await fetch('/api/chat/migrate', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          deviceId
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to migrate conversations: ${response.status}`);
      }

      // Invalidate conversations cache to refresh
      queryClient.invalidateQueries({ queryKey: ['conversations'] });
    } catch (error) {
      console.error('Error migrating conversations:', error);
      throw error;
    }
  }, [queryClient]);

  const loadConversationsByDevice = useCallback(async (deviceId: string): Promise<Conversation[]> => {
    try {
      const response = await fetch(`/api/chat/conversations?deviceId=${deviceId}`);
      if (!response.ok) {
        throw new Error(`Failed to load conversations: ${response.status}`);
      }
      const data = await response.json();
      return data.conversations || [];
    } catch (error) {
      console.error('Error loading conversations by device:', error);
      return [];
    }
  }, []);

  const loadConversationsByUser = useCallback(async (userId: string): Promise<Conversation[]> => {
    try {
      const response = await fetch(`/api/chat/conversations?userId=${userId}`);
      if (!response.ok) {
        throw new Error(`Failed to load conversations: ${response.status}`);
      }
      const data = await response.json();
      return data.conversations || [];
    } catch (error) {
      console.error('Error loading conversations by user:', error);
      return [];
    }
  }, []);

  const triggerModal = useCallback((modalType: string) => {
    // This will be handled by the individual components
    // They can listen for modal triggers and handle them accordingly
    console.log(`Modal trigger: ${modalType}`);
  }, []);

  // Clear all chat history (state, cache, and database)
  const clearAllChatHistory = useCallback(async () => {
    try {
      console.log('🧹 Starting to clear all chat history...');
      
      // Clear local state first
    setMessages([]);
    setConversations([]);
    setCurrentConversationId(null);
    setCurrentContext(null);
    
    // Clear TanStack Query cache
    queryClient.clear();
    
      // Delete from database and WAIT for it to complete
      if (deviceId) {
        console.log('🗑️ Deleting conversations from database for user:', deviceId);
        const response = await fetch(`/api/chat/conversations?userId=${deviceId}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log('✅ Deleted from database:', data.deletedCount, 'conversations');
          
          // Wait a moment to ensure database transaction completes
          await new Promise(resolve => setTimeout(resolve, 500));
        } else {
          console.error('❌ Failed to delete from database:', response.status);
        }
      }
      
      console.log('🧹 All chat history cleared successfully');
      
      // Update UI state without page reload
      setMessages([]);
      setConversations([]);
      setCurrentConversationId(null);
      setCurrentContext(null);
      
      // Invalidate queries to refresh data
      queryClient.invalidateQueries({ queryKey: ['conversations'] });
      queryClient.invalidateQueries({ queryKey: ['messages'] });
      
    } catch (error) {
      console.error('❌ Error clearing chat history:', error);
      
      // Even if there's an error, clear the local state
      setMessages([]);
      setConversations([]);
      setCurrentConversationId(null);
      setCurrentContext(null);
      
      // Show user-friendly error message
      alert('Some conversations may not have been deleted from the database, but the UI has been cleared.');
    }
  }, [queryClient, deviceId, setMessages, setConversations, setCurrentConversationId, setCurrentContext]);

  const value: ChatContextType = {
    // Device ID Management
    deviceId,
    getDeviceId,
    
    // Messages
    messages,
    setMessages,
    addMessage,
    clearMessages,
    
    // Conversations
    conversations,
    setConversations,
    addConversation,
    updateConversation,
    deleteConversation,
    
    // Current conversation
    currentConversationId,
    setCurrentConversationId,
    clearCurrentConversation,
    
    // Context Management
    currentContext,
    setCurrentContext,
    updateContext,
    saveContextSnapshot,
    
    // Loading states
    isLoading,
    setIsLoading,
    
    // AI Response generation
    generateAIResponse,
    
    // Conversation Management
    createAnonymousConversation,
    migrateConversationsOnSignup,
    loadConversationsByDevice,
    loadConversationsByUser,
    
    // Modal triggers
    triggerModal,
    
    // Clear all chat history
    clearAllChatHistory,
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};
