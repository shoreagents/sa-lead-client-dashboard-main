'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { X, Send, ChevronDown, ChevronUp, ExternalLink, Sparkles, MoreVertical, Pin, PinOff } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useChatContext, Message } from '@/lib/chat-context';
import { MayaTextField, MayaNameFields, MayaAnonymousUserForm, MayaTalentSearchModal, MayaPricingCalculatorModal, MayaPricingForm } from '@/components/maya';
import { generateUserId } from '@/lib/userEngagementService';


interface ChatConsoleProps {
  isOpen: boolean;
  onClose: () => void;
}

// Custom Lime Loader Component
const LimeLoader = () => {
  const transition = (x: number) => {
    return {
      duration: 1,
      repeat: Infinity,
      repeatType: "loop" as const,
      delay: x * 0.2,
      ease: "easeInOut" as const,
    };
  };

  return (
    <div className="flex items-center gap-1">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -6, 0] }}
        transition={transition(0)}
        className="h-1.5 w-1.5 rounded-full bg-lime-400"
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -6, 0] }}
        transition={transition(1)}
        className="h-1.5 w-1.5 rounded-full bg-lime-500"
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -6, 0] }}
        transition={transition(2)}
        className="h-1.5 w-1.5 rounded-full bg-lime-600"
      />
    </div>
  );
};

const ChatConsole: React.FC<ChatConsoleProps> = ({ isOpen, onClose }) => {
  const {
    messages,
    setMessages,
    addMessage,
    clearMessages,
    isLoading,
    setIsLoading,
    generateAIResponse
  } = useChatContext();
  
  // Use the same user ID generation logic as AnonymousUserButton
  const userId = useMemo(() => generateUserId(), []);
  console.log('🎯 Chat Console using userId:', userId);
  
  const [inputValue, setInputValue] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isFullHeight, setIsFullHeight] = useState(false);
  const [isCollectingContact, setIsCollectingContact] = useState(false);
  const [contactStep, setContactStep] = useState<'name' | 'email' | 'company' | null>(null);
  const [isCollectingIndustry, setIsCollectingIndustry] = useState(false);
  
  const [contactData, setContactData] = useState<{name?: string; email?: string; company?: string}>({});
  const [isTalentSearchOpen, setIsTalentSearchOpen] = useState(false);
  const [isPricingCalculatorOpen, setIsPricingCalculatorOpen] = useState(false);
  const [isCollectingPricing, setIsCollectingPricing] = useState(false);
  const [isDirectTeamCreation, setIsDirectTeamCreation] = useState(false);
  const [pricingStep, setPricingStep] = useState<'teamSize' | 'roleType' | 'industry' | 'individualRoles' | 'experience' | 'description' | 'workplaceSetup' | 'workplaceType' | 'workplaceIndividual' | 'workplace' | null>(null);
  const [pricingData, setPricingData] = useState<{teamSize?: string; roleType?: string; roles?: string; experience?: string; description?: string; workplaceSetup?: string; workplaceType?: string; currentMember?: number; [key: string]: any}>({});
  const [conversationContext, setConversationContext] = useState<{isTalentInquiry?: boolean; conversationHistory?: Message[]}>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const adjustTextareaHeight = () => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 120)}px`;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    adjustTextareaHeight();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as React.FormEvent);
    }
  };

  useEffect(() => {
    scrollToBottom();
      // Only focus main input if no form is being collected
      if (isOpen && !isMinimized && !isCollectingContact && !isCollectingPricing) {
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }, 100);
      }
  }, [messages, isOpen, isMinimized, isCollectingContact, isCollectingPricing]);

  useEffect(() => {
    if (inputValue === '') {
      adjustTextareaHeight();
    }
  }, [inputValue]);

  // Maintain focus when loading state changes (only if no form is being collected)
  useEffect(() => {
    if (!isLoading && isOpen && !isMinimized && !isCollectingContact) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
    }
  }, [isLoading, isOpen, isMinimized, isCollectingContact, isCollectingPricing]);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      // Add delay before hiding to allow closing animation
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Generate personalized greeting when chat opens and there are no messages
  useEffect(() => {
    if (isOpen && messages.length === 0 && !isLoading) {
      const generatePersonalizedGreeting = async () => {
        try {
          setIsLoading(true);
          const { response, relatedContent, userData } = await generateAIResponse('', [], userId);
          
          const greetingMessage: Message = {
            id: 'personalized-greeting',
            role: 'assistant',
            content: response,
            timestamp: new Date(),
            relatedContent: relatedContent.length > 0 ? relatedContent : undefined,
            userData: userData,
          };

          addMessage(greetingMessage);
        } catch (error) {
          console.error('Error generating personalized greeting:', error);
          // Fallback to generic greeting if personalized greeting fails
          const fallbackMessage: Message = {
            id: 'fallback-greeting',
            role: 'assistant',
            content: "Hello! I'm Maya from ShoreAgents. What would you like to know?",
            timestamp: new Date(),
          };
          addMessage(fallbackMessage);
        } finally {
          setIsLoading(false);
        }
      };

      generatePersonalizedGreeting();
    }
  }, [isOpen, messages.length, isLoading, generateAIResponse, userId, addMessage]);

  useEffect(() => {
    if (isOpen && inputRef.current && !isCollectingContact && !isCollectingPricing) {
      inputRef.current.focus();
    }
  }, [isOpen, isCollectingContact, isCollectingPricing]);

  // Scroll to bottom when expanding from minimized state
  useEffect(() => {
    if (!isMinimized && isOpen) {
      // Small delay to ensure the chat is fully expanded
      setTimeout(() => {
        scrollToBottom();
        // Focus input field when expanding from minimized state (only if no form is being collected)
        if (!isCollectingContact && inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
    }
  }, [isMinimized, isOpen, isCollectingContact]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showMenu]);


  // Wrapper function for MayaTextField setMessages prop
  const handleSetMessages = (newMessages: React.SetStateAction<Message[]>) => {
    if (typeof newMessages === 'function') {
      setMessages(newMessages(messages));
    } else {
      setMessages(newMessages);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    addMessage(userMessage);
    setInputValue('');
    setIsLoading(true);
    // Reset textarea height after sending
    setTimeout(() => adjustTextareaHeight(), 0);

    try {
      const { response, relatedContent, userData, suggestedComponents } = await generateAIResponse(inputValue, messages, userId);
      
      // Check if this is a talent inquiry
      const messageLower = inputValue.toLowerCase();
      const isTalentInquiry = messageLower.includes('talent') || 
                              messageLower.includes('hire') || 
                              messageLower.includes('team') || 
                              messageLower.includes('staff') || 
                              messageLower.includes('employee') || 
                              messageLower.includes('candidate') ||
                              messageLower.includes('recruit') ||
                              messageLower.includes('find people') ||
                              messageLower.includes('team building');
      
      // Direct team creation trigger - only for clear business requests
      const isDirectTeamCreation = (messageLower.includes('create a team') && 
                                    (messageLower.includes('need') || messageLower.includes('want') || messageLower.includes('looking'))) ||
                                   (messageLower.includes('build a team') && 
                                    (messageLower.includes('need') || messageLower.includes('want') || messageLower.includes('looking'))) ||
                                   (messageLower.includes('need a team') && 
                                    (messageLower.includes('for') || messageLower.includes('to') || messageLower.includes('help'))) ||
                                   (messageLower.includes('want a team') && 
                                    (messageLower.includes('for') || messageLower.includes('to') || messageLower.includes('help')));
      
      // Update conversation context
      setConversationContext({
        isTalentInquiry,
        conversationHistory: [...messages, {
          id: Date.now().toString(),
          role: 'user',
          content: inputValue,
          timestamp: new Date(),
        }]
      });
      
      // Direct team creation - immediately trigger pricing calculator
      if (isDirectTeamCreation && !isCollectingPricing) {
        console.log('🎯 Direct team creation detected, starting pricing calculator immediately');
        setIsDirectTeamCreation(true);
        setIsCollectingPricing(true);
        setPricingStep('teamSize');
      }
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
        relatedContent: relatedContent.length > 0 ? relatedContent : undefined,
        userData: userData,
      };

      addMessage(assistantMessage);
      
       // Check if Maya is asking for contact information
       const responseLower = response.toLowerCase();
       
       // Skip all form triggers for simple greetings and casual conversations
       const isSimpleGreeting = responseLower.includes('hello') || 
                                responseLower.includes('hi') || 
                                responseLower.includes('hey') || 
                                responseLower.includes('good morning') || 
                                responseLower.includes('good afternoon') || 
                                responseLower.includes('good evening') ||
                                responseLower.includes('how are you') ||
                                responseLower.includes('how can i help') ||
                                responseLower.includes('what can i do') ||
                                responseLower.includes('anything') ||
                                responseLower.includes('help') ||
                                responseLower.includes('assist') ||
                                responseLower.includes('support');
       
       // Only trigger contact collection for very specific business-related phrases
       const isAskingForContact = 
         // Very specific exact phrases only
         responseLower.includes('before we continue our conversation, it\'s okay to have your name?') ||
         responseLower.includes('before we continue our conversation, it\'s okay to have your name') ||
         responseLower.includes('before we continue, it\'s okay to have your name') ||
         // Only trigger for business context
         (responseLower.includes('before we dive in') && responseLower.includes('name') && 
          (responseLower.includes('business') || responseLower.includes('team') || responseLower.includes('hire'))) ||
         (responseLower.includes('may i first get your name') && 
          (responseLower.includes('business') || responseLower.includes('team') || responseLower.includes('hire'))) ||
         (responseLower.includes('get your name') && 
          (responseLower.includes('business') || responseLower.includes('team') || responseLower.includes('hire')));
       
       console.log('🔍 Contact trigger check:', {
         response: response,
         responseLower: responseLower,
         isAskingForContact: isAskingForContact,
         isCollectingContact: isCollectingContact
       });
       
       if (isAskingForContact && !isCollectingContact && !isSimpleGreeting && !isCollectingPricing && !isDirectTeamCreation) {
         console.log('🎯 Triggering contact collection form!');
         console.log('🔍 User data check:', userData);
         
         // Only trigger contact collection if user doesn't have contact info
         if (!userData?.userProfile?.hasContactInfo) {
           console.log('✅ User has no contact info, showing form');
           setIsCollectingContact(true);
           setContactStep('name');
         } else {
           console.log('❌ User already has contact info, skipping form');
         }
       }

       // Check if Maya is suggesting pricing calculator for talent needs (PRIORITY)
       // Only trigger for very specific business-related phrases
       const isSuggestingPricingForTalent = responseLower.includes('pricing_calculator_modal') ||
                                           responseLower.includes('let me help you get a personalized quote for your talent needs') ||
                                           responseLower.includes('personalized quote for your talent') ||
                                           responseLower.includes('pricing calculator') ||
                                           responseLower.includes('pricing quote') ||
                                           responseLower.includes('personalized quote for your team needs') ||
                                           responseLower.includes('guide you through a quick form') ||
                                           responseLower.includes('understand your requirements') ||
                                           // Only trigger for clear business requests, not casual mentions
                                           (responseLower.includes('talent') && responseLower.includes('quote') && 
                                            (responseLower.includes('need') || responseLower.includes('want') || responseLower.includes('looking'))) ||
                                           (responseLower.includes('team') && responseLower.includes('quote') && 
                                            (responseLower.includes('need') || responseLower.includes('want') || responseLower.includes('looking'))) ||
                                           // Direct team creation triggers - only for clear requests
                                           (responseLower.includes('create a team') && 
                                            (responseLower.includes('need') || responseLower.includes('want') || responseLower.includes('looking'))) ||
                                           (responseLower.includes('build a team') && 
                                            (responseLower.includes('need') || responseLower.includes('want') || responseLower.includes('looking'))) ||
                                           (responseLower.includes('need a team') && 
                                            (responseLower.includes('for') || responseLower.includes('to') || responseLower.includes('help'))) ||
                                           (responseLower.includes('want a team') && 
                                            (responseLower.includes('for') || responseLower.includes('to') || responseLower.includes('help')));
       
       console.log('🔍 Pricing trigger check:', {
         response: response,
         responseLower: responseLower,
         isSuggestingPricingForTalent: isSuggestingPricingForTalent,
         isCollectingPricing: isCollectingPricing,
         suggestedComponents: suggestedComponents
       });
       
       // Check if pricing calculator is suggested via suggestedComponents
       const hasPricingCalculatorSuggestion = suggestedComponents && suggestedComponents.includes('pricing_calculator_modal');
       
       // Check if candidates were recently shown (in the last 5 messages)
       const recentMessages = messages.slice(-5);
       const candidatesRecentlyShown = recentMessages.some(msg => msg.type === 'candidates');
       
       // Check if user is asking about candidates (not requesting new ones)
       const isAskingAboutCandidates = 
         inputValue.toLowerCase().includes('ask about') ||
         inputValue.toLowerCase().includes('tell me about') ||
         inputValue.toLowerCase().includes('know about') ||
         inputValue.toLowerCase().includes('can i ask') ||
         (inputValue.toLowerCase().includes('candidate') && 
          (inputValue.toLowerCase().includes('about') || inputValue.toLowerCase().includes('?')));
       
       if ((isSuggestingPricingForTalent || hasPricingCalculatorSuggestion) && 
           !isCollectingPricing && 
           !candidatesRecentlyShown && 
           !isAskingAboutCandidates) {
         console.log('🎯 Maya is suggesting pricing calculator for talent needs, starting step-by-step form');
         console.log('🔧 Setting pricing form state:', { isCollectingPricing: true, pricingStep: 'teamSize' });
         setIsCollectingPricing(true);
         setPricingStep('teamSize');
       } else if (candidatesRecentlyShown) {
         console.log('⏭️ Skipping pricing form trigger - candidates were recently shown');
       } else if (isAskingAboutCandidates) {
         console.log('⏭️ Skipping pricing form trigger - user is asking about existing candidates');
       }

       // Check if Maya is asking for industry information (ONLY if not in pricing flow and business context)
       const isAskingForIndustry = 
         responseLower.includes('industry') && 
         (responseLower.includes('business') || responseLower.includes('company') || responseLower.includes('operate')) &&
         (responseLower.includes('let me know') || responseLower.includes('tell me') || responseLower.includes('what') || responseLower.includes('which')) &&
         // Only trigger for business-related conversations, not simple greetings
         (responseLower.includes('talent') || responseLower.includes('team') || responseLower.includes('hire') || 
          responseLower.includes('staff') || responseLower.includes('recruit') || responseLower.includes('build'));
       
       console.log('🔍 Industry trigger check:', {
         response: response,
         responseLower: responseLower,
         isAskingForIndustry: isAskingForIndustry,
         isCollectingIndustry: isCollectingIndustry,
         isCollectingPricing: isCollectingPricing,
         isDirectTeamCreation: isDirectTeamCreation
       });
       
       if (isAskingForIndustry && !isCollectingIndustry && !isCollectingContact && !isCollectingPricing && !isDirectTeamCreation && !isSimpleGreeting) {
         console.log('🎯 Triggering industry collection form!');
         console.log('🔍 User data check:', userData);
         
         // Check if user already has industry info
         if (!userData?.user?.industry || userData.user.industry.trim() === '') {
           console.log('✅ User has no industry info, showing form');
           setIsCollectingIndustry(true);
         } else {
           console.log('❌ User already has industry info, skipping form');
         }
       }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I'm sorry, I encountered an error. Please try again or contact our support team.",
        timestamp: new Date(),
      };
      addMessage(errorMessage);
    } finally {
      setIsLoading(false);
      // Maintain focus on input field after message submission (only if no form is being collected)
      if (!isCollectingContact && !isCollectingPricing) {
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }, 100);
      }
    }
  };

  const renderMessage = (message: Message) => {
    const isUser = message.role === 'user';
    
    // Handle special message types
    if (message.type === 'candidates' && message.data?.candidates) {
      // Import the candidates component dynamically
      const { MayaCandidatesMessage } = require('@/components/maya');
      return <MayaCandidatesMessage key={message.id} candidates={message.data.candidates} />;
    }
    
    return (
      <div
        key={message.id}
        className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}
      >
        <div className={`max-w-[90%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
          <div 
            className={`rounded-lg px-3 py-2 shadow-sm relative group ${
              isUser 
                ? 'bg-gradient-to-r from-lime-400 to-lime-500 text-white' 
                : 'bg-white text-gray-800 border border-gray-100'
            }`}
          >
            <div className="text-sm leading-relaxed font-normal whitespace-pre-wrap">
              {message.content}
            </div>
            
            {message.relatedContent && message.relatedContent.length > 0 && (
              <div className="mt-3 space-y-2">
                <div className="text-xs leading-tight font-medium text-gray-600 mb-2">🔗 Related Links:</div>
                {message.relatedContent.map((item, index) => (
                  <div key={index} className="bg-gradient-to-r from-lime-50 to-lime-100 rounded-xl p-3 border border-lime-200 shadow-sm hover:shadow-md transition-all duration-200">
                    <div className="text-sm leading-tight font-medium text-gray-800 mb-1">{item.title}</div>
                    <div className="text-xs leading-normal font-normal text-gray-600 mb-2 line-clamp-2">{item.content}</div>
                    {item.url && (
                      <a 
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs leading-tight font-medium text-lime-700 hover:text-lime-800 hover:bg-lime-200 px-2 py-1 rounded-md transition-all duration-200"
                      >
                        Visit Page <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            {/* Custom Styled Tooltip */}
             <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs leading-tight font-light rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              {/* Tooltip arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Background Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-[9998] transition-opacity duration-300"
          onClick={onClose}
        />
      )}
      
       {/* Chat Widget */}
       <div 
         className={`fixed z-[9999] w-96 flex flex-col transition-all duration-500 ease-out pointer-events-auto font-roboto ${
           isMinimized 
             ? 'bg-transparent bottom-0' 
             : 'bg-white rounded-t-xl shadow-2xl bottom-0'
         } ${
           isPinned ? 'right-0' : 'right-6'
         } ${
           isFullHeight && !isMinimized ? 'h-screen' : ''
         } ${
           isVisible 
             ? 'opacity-100 translate-y-0 scale-100' 
             : 'opacity-0 translate-y-8 scale-95'
         }`}
         style={{ 
           height: isMinimized ? '42px' : (isFullHeight ? '100vh' : '520px')
         }}
       >
        {/* Header */}
        <div className="bg-gradient-to-r from-lime-500 to-lime-600 text-white p-2 rounded-t-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Maya Santos Avatar - Hidden when minimized */}
            {!isMinimized && (
              <div className="relative pl-2">
                <div className="w-10 h-10 rounded-full shadow-lg border-2 border-white overflow-hidden">
                  <Image 
                    src="/MayaProfile.png"
                    alt="Maya Santos Avatar"
                    className="w-full h-full object-cover"
                    width={40}
                    height={40}
                  />
                </div>
                {/* Online indicator */}
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-white rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                {/* Sparkle effect */}
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-3 h-3 text-lime-200 animate-pulse" />
                </div>
              </div>
            )}
            <div>
              <h3 className={`font-medium text-base ${isMinimized ? 'pl-2' : ''}`}>Maya Santos</h3>
              {/* Subtitle - Hidden when minimized */}
              
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="p-1 hover:bg-lime-400/20 rounded-full transition-colors duration-300 ease-out"
                title="More options"
              >
                <MoreVertical size={18} />
              </button>
              
              {/* Dropdown Menu */}
              {showMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <button
                    onClick={() => {
                      setIsPinned(!isPinned);
                      if (!isPinned) {
                        // When pinning, also enable full height
                        setIsFullHeight(true);
                      } else {
                        // When unpinning, disable full height
                        setIsFullHeight(false);
                      }
                      setShowMenu(false);
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                  >
                    {isPinned ? <PinOff size={16} /> : <Pin size={16} />}
                    {isPinned ? 'Unpin from right' : 'Pin to right side (full height)'}
                  </button>
                  <button
                    onClick={() => {
                      // Clear chat history
                      clearMessages();
                      setShowMenu(false);
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Clear chat history
                  </button>
                </div>
              )}
            </div>
            
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 hover:bg-lime-400/20 rounded-full transition-colors duration-300 ease-out"
              title={isMinimized ? "Expand chat" : "Minimize chat"}
            >
              {isMinimized ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            <button
              onClick={() => {
                setIsVisible(false);
                // Delay the actual close to allow animation to complete
                setTimeout(() => onClose(), 300);
              }}
              className="p-1 hover:bg-lime-400/20 rounded-full transition-colors duration-200"
              title="Close chat"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div 
              className="flex-1 overflow-y-auto p-4 space-y-3 bg-white transition-all duration-300 ease-out"
              onClick={() => {
                // Focus input field when clicking in messages area (only if no form is being collected)
                if (!isCollectingContact && !isCollectingPricing && inputRef.current) {
                  inputRef.current.focus();
                }
              }}
            >
              {messages.map(renderMessage)}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="max-w-[90%]">
                    <div className="bg-gray-50 rounded-2xl px-4 py-3 border border-gray-100 shadow-sm">
                      <div className="flex items-center justify-center">
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full border-2 border-current border-t-transparent w-6 h-6" />
                          <span className="text-sm text-gray-600">Maya is thinking...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              

              {/* Contact Collection Form */}
              {isCollectingContact && contactStep && (
                <div className="mt-4">
                  <MayaAnonymousUserForm
                    currentStep={contactStep}
                    onStepChange={(step) => {
                      if (step === null) {
                        setIsCollectingContact(false);
                        setContactStep(null);
                      } else {
                        setContactStep(step as 'name' | 'email' | 'company');
                      }
                    }}
                    onFormDataChange={(data) => {
                      setContactData(data);
                    }}
                    setMessages={handleSetMessages}
                    generateMessageId={() => Date.now().toString()}
                    formData={{...contactData, userId: userId || 'anonymous_' + Date.now()}}
                    conversationContext={conversationContext}
                  />
                </div>
              )}

              {/* Industry Collection Form */}
              {isCollectingIndustry && (
                <div className="mt-4">
                  <MayaTextField
                    step="industry"
                    title="What industry does your business operate in?"
                    description="This helps me provide more relevant talent recommendations for your specific industry needs."
                    placeholder="e.g., Technology, Healthcare, Finance, Real Estate, Marketing"
                    inputType="text"
                    onComplete={async (industry) => {
                      try {
                        // Save industry to user profile
                        const response = await fetch('/api/update-user-industry', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({
                            userId: userId,
                            industry: industry
                          }),
                        });

                        if (response.ok) {
                          console.log('Industry updated successfully');
                          // Add user message to chat
                          const userMessage: Message = {
                            id: Date.now().toString(),
                            role: 'user',
                            content: `Industry: ${industry}`,
                            timestamp: new Date(),
                          };
                          handleSetMessages(userMessage);
                          
                          // Add Maya's response
                          const mayaMessage: Message = {
                            id: (Date.now() + 1).toString(),
                            role: 'assistant',
                            content: `Great! I can see you're in the ${industry} industry. This will help me provide more relevant talent recommendations. How can I assist you further?`,
                            timestamp: new Date(),
                          };
                          handleSetMessages(mayaMessage);
                        }
                      } catch (error) {
                        console.error('Error updating industry:', error);
                      } finally {
                        setIsCollectingIndustry(false);
                      }
                    }}
                    setMessages={handleSetMessages}
                    generateMessageId={() => Date.now().toString()}
                    enableAutocomplete={true}
                    autocompleteContext="business industries for offshore staffing"
                  />
                </div>
              )}
              
              {/* Pricing Collection Form */}
              {isCollectingPricing && pricingStep && (
                <div className="mt-4">
                  {console.log('🔧 Rendering pricing form:', { isCollectingPricing, pricingStep })}
                  <MayaPricingForm
                    currentStep={pricingStep}
                    onStepChange={(step: string | null) => {
                      if (step === null) {
                        setIsCollectingPricing(false);
                        setIsDirectTeamCreation(false);
                        setPricingStep(null);
                      } else {
                        setPricingStep(step as 'teamSize' | 'roleType' | 'industry' | 'individualRoles' | 'experience' | 'description' | 'workplaceSetup' | 'workplaceType' | 'workplaceIndividual' | 'workplace');
                      }
                    }}
                    onFormDataChange={(data: any) => {
                      setPricingData(data);
                    }}
                    setMessages={handleSetMessages}
                    generateMessageId={() => Date.now().toString()}
                    formData={{...pricingData, userId: userId || 'anonymous_' + Date.now()}}
                  />
                </div>
              )}
              
              {/* Talent Search Modal */}
              {isTalentSearchOpen && (
                <MayaTalentSearchModal
                  isOpen={isTalentSearchOpen}
                  onClose={() => setIsTalentSearchOpen(false)}
                  userData={contactData}
                />
              )}
              
              {/* Pricing Calculator Modal */}
              {isPricingCalculatorOpen && (
                <MayaPricingCalculatorModal
                  isOpen={isPricingCalculatorOpen}
                  onClose={() => setIsPricingCalculatorOpen(false)}
                  userData={contactData}
                  setMessages={handleSetMessages}
                />
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-gray-100 transition-all duration-300 ease-out">
              <div className="relative">
                <textarea
                  ref={inputRef}
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask Maya anything about ShoreAgents..."
                  className="w-full px-4 py-2 pr-12 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent text-sm transition-all duration-200 pointer-events-auto bg-gray-50 focus:bg-white resize-none overflow-hidden"
                  disabled={isLoading}
                  style={{ 
                    pointerEvents: 'auto',
                    minHeight: '40px',
                    maxHeight: '120px'
                  }}
                  rows={1}
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 bg-gradient-to-r from-lime-500 to-lime-600 text-white rounded-xl hover:from-lime-600 hover:to-lime-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
                >
                  <Send size={14} />
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default ChatConsole;
