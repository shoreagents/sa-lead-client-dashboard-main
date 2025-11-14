// src/components/MayaPreGreeting.tsx
'use client';

import { useEffect } from 'react';
import { useChatContext } from '@/lib/chat-context';
import { useAuth } from '@/lib/auth-context';
import { preGenerateGreeting, getPreGeneratedGreeting } from '@/lib/pre-greeting-service';

const MayaPreGreeting = () => {
  const { deviceId } = useChatContext();
  const { appUser } = useAuth();

  useEffect(() => {
    const userId = appUser?.user_id || deviceId;

    if (!userId) {
      console.warn('MayaPreGreeting: userId not available, skipping pre-generation.');
      return;
    }

    // Check if a greeting is already pre-generated and valid
    const existingPreGreeting = getPreGeneratedGreeting(userId);
    if (existingPreGreeting) {
      console.log('✨ MayaPreGreeting: Existing pre-generated greeting found, no need to re-generate.');
      return;
    }

    // Delay pre-generation slightly to not block initial page load
    const timer = setTimeout(async () => {
      console.log('✨ Pre-generating Maya greeting text in background...');
      
      // Just pre-generate the greeting text, no conversation creation
      // Conversation will be created only when user actually opens Maya
      await preGenerateGreeting(userId, null, appUser?.first_name);
    }, 2000); // 2-second delay

    return () => clearTimeout(timer);
  }, [deviceId, appUser?.user_id, appUser?.first_name]);

  return null; // This component doesn't render anything
};

export default MayaPreGreeting;


