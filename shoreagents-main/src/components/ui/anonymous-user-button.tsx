'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { AnonymousUserModal } from './anonymous-user-modal';
import { useAuth } from '@/lib/auth-context';
import { generateUserId } from '@/lib/userEngagementService';
import { useUserFormStatus } from '@/hooks/use-api';

export function AnonymousUserButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Only generate userId once, not on every render
  const userId = useMemo(() => generateUserId(), []);
  const { data: userFormStatus, isLoading, error } = useUserFormStatus(userId);

  // Start timer immediately for anonymous users
  useEffect(() => {
    // Only start timer for anonymous users
    if (isAuthenticated) {
      console.log('🚫 User is authenticated, clearing timer');
      // Clear timer if user becomes authenticated
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    // Start the timer immediately for anonymous users
    // Only start if timer isn't already running
    if (!timerRef.current) {
      console.log('⏱️ Starting 45-second timer for anonymous user modal');
      timerRef.current = setTimeout(() => {
        console.log('⏱️ 45 seconds elapsed, opening anonymous user modal');
        setIsModalOpen(true);
        timerRef.current = null;
      }, 45000); // 45 seconds
    }

    // Cleanup function - clear timer on unmount
    return () => {
      if (timerRef.current) {
        console.log('🧹 Cleaning up timer (component unmounting)');
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isAuthenticated]); // Only depend on isAuthenticated for starting timer

  // Cancel timer if user has filled form
  useEffect(() => {
    // Check if user form status is loaded and user already filled form
    if (!isLoading && userFormStatus) {
      console.log('📊 User form status loaded:', userFormStatus);
      // Only prevent modal if user has actually filled the form (has meaningful data)
      if (userFormStatus.hasFilledForm) {
        // User already filled form, cancel the timer
        console.log('✅ User already filled form, canceling timer', userFormStatus);
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
      }
    }
  }, [isLoading, userFormStatus]); // Only depend on form status for canceling

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Debug logging
  useEffect(() => {
    console.log('🎭 AnonymousUserButton render state:', {
      isAuthenticated,
      isModalOpen,
      isLoading,
      userFormStatus,
      hasTimer: !!timerRef.current
    });
  }, [isAuthenticated, isModalOpen, isLoading, userFormStatus]);

  // Only show for anonymous users
  if (isAuthenticated) {
    return null;
  }

  return (
    <>
      {/* Modal - no floating button */}
      <AnonymousUserModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

