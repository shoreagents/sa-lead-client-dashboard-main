// src/lib/pre-greeting-service.ts

interface PreGeneratedGreeting {
  greeting: string;
  timestamp: number;
  conversationId: string | null;
}

const PRE_GREETING_KEY = 'maya_pre_greeting';
const GREETING_USED_KEY = 'maya_greeting_used';
const GREETING_EXPIRATION_MS = 30 * 60 * 1000; // 30 minutes

/**
 * Generate a personalized greeting text
 */
const generatePersonalizedGreetingText = (userName?: string): string => {
  const greetings = [
    userName
      ? `Hi ${userName}! 👋 I'm Maya from ShoreAgents. I'm here to help you build your perfect offshore team. What can I help you with today?`
      : `Hi there! 👋 I'm Maya from ShoreAgents. I'm here to help you build your perfect offshore team. What can I help you with today?`,
    userName
      ? `Hello ${userName}! I'm Maya, your AI assistant at ShoreAgents. How can I assist you in finding the right talent today?`
      : `Hello! I'm Maya, your AI assistant at ShoreAgents. How can I assist you in finding the right talent today?`,
    userName
      ? `Welcome back, ${userName}! I'm Maya. Ready to explore offshore solutions?`
      : `Welcome! I'm Maya. Ready to explore offshore solutions?`,
  ];
  
  return greetings[Math.floor(Math.random() * greetings.length)];
};

/**
 * Pre-generate and store a greeting for instant display
 */
export const preGenerateGreeting = async (
  userId: string,
  conversationId: string | null,
  userName?: string
): Promise<void> => {
  const now = Date.now();
  const greetingText = generatePersonalizedGreetingText(userName);

  const preGreeting: PreGeneratedGreeting = {
    greeting: greetingText,
    timestamp: now,
    conversationId: conversationId,
  };

  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(PRE_GREETING_KEY, JSON.stringify(preGreeting));
      console.log('✅ Maya greeting ready for instant display!');
    }
  } catch (error) {
    console.error('Error saving pre-generated greeting to localStorage:', error);
  }
};

/**
 * Retrieve a pre-generated greeting if it's still valid
 */
export const getPreGeneratedGreeting = (userId: string): PreGeneratedGreeting | null => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = localStorage.getItem(PRE_GREETING_KEY);
      if (stored) {
        const preGreeting: PreGeneratedGreeting = JSON.parse(stored);
        
        // Check if greeting is still valid (not expired)
        if (Date.now() - preGreeting.timestamp < GREETING_EXPIRATION_MS) {
          return preGreeting;
        } else {
          // Greeting expired, clear it
          localStorage.removeItem(PRE_GREETING_KEY);
          localStorage.removeItem(GREETING_USED_KEY);
          console.log('🗑️ Pre-generated greeting expired and cleared.');
        }
      }
    }
  } catch (error) {
    console.error('Error retrieving pre-generated greeting from localStorage:', error);
  }
  
  return null;
};

/**
 * Mark a greeting as used for a specific conversation
 */
export const markGreetingAsUsed = (conversationId: string): void => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(GREETING_USED_KEY, conversationId);
    }
  } catch (error) {
    console.error('Error marking greeting as used:', error);
  }
};

/**
 * Check if a greeting has already been used for a conversation
 */
export const hasUsedGreeting = (conversationId: string): boolean => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(GREETING_USED_KEY) === conversationId;
    }
  } catch (error) {
    console.error('Error checking if greeting was used:', error);
  }
  
  return false;
};

/**
 * Clear pre-generated greeting from storage
 */
export const clearPreGeneratedGreeting = (): void => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem(PRE_GREETING_KEY);
      localStorage.removeItem(GREETING_USED_KEY);
      console.log('🗑️ Cleared pre-generated greeting from localStorage.');
    }
  } catch (error) {
    console.error('Error clearing pre-generated greeting:', error);
  }
};


