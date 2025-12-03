'use client';

import { useState, useEffect } from 'react';
import { Stage2CaptureModal } from './stage-2-capture-modal';
import { useAuth } from '@/lib/auth-context';
import { useUserFormStatus } from '@/hooks/use-api';
import { generateUserId } from '@/lib/userEngagementService';

const STAGE_2_DELAY = 3 * 60 * 1000; // 3 minutes in milliseconds

export function Stage2CaptureButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const userId = generateUserId(); // Get consistent user ID
  const { data: userFormStatus, isLoading, error } = useUserFormStatus(userId);

  // Auto-open modal after delay
  useEffect(() => {
    console.log('🔍 ===== STAGE 2 CAPTURE - useEffect TRIGGERED =====');
    console.log('🆔 Stage 2 - User ID:', userId);
    console.log('🔍 Stage 2 - Current state:', {
      isAuthenticated: isAuthenticated ? '✅ Authenticated (will NOT trigger)' : '❌ Anonymous (will trigger)',
      isLoading: isLoading ? '⏳ Loading...' : '✅ Loaded',
      hasUserFormStatus: userFormStatus ? '✅ Has data' : '❌ No data',
      error: error ? '❌ Error present' : '✅ No errors'
    });

    // Only trigger for anonymous users
    if (isAuthenticated) {
      console.log('🔐 User is authenticated, skipping Stage 2 capture');
      return;
    }

    let timer: NodeJS.Timeout;
    let countdownInterval: NodeJS.Timeout;

    const startCountdown = () => {
      console.log('🚀 Stage 2 capture timer started - 3 minutes countdown');
      console.log('⏰ Stage 2 form will open in 180 seconds (3 minutes)...');
      
      // Countdown timer for logging every 10 seconds for better visibility
      let countdown = 180; // 3 minutes in seconds
      countdownInterval = setInterval(() => {
        countdown -= 10;
        if (countdown > 0) {
          console.log(`⏰ Stage 2 form will open in ${countdown} seconds (${Math.floor(countdown / 60)}:${String(countdown % 60).padStart(2, '0')})...`);
        } else {
          clearInterval(countdownInterval);
        }
      }, 10000); // Log every 10 seconds

      timer = setTimeout(() => {
        console.log('🎉 Opening Stage 2 capture modal after 3 minutes!');
        console.log('📋 Setting isModalOpen to TRUE');
        setIsModalOpen(true);
      }, STAGE_2_DELAY); // 3 minutes
    };

    // Check if user form status is loaded and handle accordingly
    if (!isLoading && userFormStatus) {
      console.log('📊 Stage 2 Check - Database result:', {
        hasFilledForm: userFormStatus.hasFilledForm,
        email: userFormStatus.email ? '✅ Has email' : '❌ No email',
        firstName: userFormStatus.firstName ? '✅ Has firstName' : '❌ No firstName',
        lastName: userFormStatus.lastName ? '✅ Has lastName' : '❌ No lastName',
        company: userFormStatus.company || 'Not set',
        industry: userFormStatus.industry || 'Not set'
      });

      // Don't show if user has already filled Stage 2 (has email + name)
      if (userFormStatus.email && userFormStatus.firstName && userFormStatus.lastName) {
        console.log('🚫 Stage 2 Check - User already has contact info (Stage 2 completed)');
        console.log('✅ Stage 2 modal will NOT be shown - already completed');
        return;
      }

      // Don't show if user hasn't filled Stage 1 yet
      if (!userFormStatus.hasFilledForm) {
        console.log('⏸️ Stage 2 Check - User has not filled Stage 1 yet');
        console.log('📝 hasFilledForm:', userFormStatus.hasFilledForm);
        console.log('❌ Stage 2 will NOT trigger - waiting for Stage 1');
        return;
      }

      console.log('✅ Stage 2 Check - User has filled Stage 1 but not Stage 2!');
      console.log('⏱️ Starting 3-minute countdown in 2 seconds...');
      // Add a small delay to make sure the database check is complete
      setTimeout(() => {
        console.log('⏱️ 2-second delay complete, starting countdown NOW!');
        startCountdown();
      }, 2000);
    } else if (error) {
      console.error('❌ Stage 2 Check - Error checking user form status:', error);
      console.log('⚠️ Database check failed, will not show Stage 2 form');
    } else if (isLoading) {
      console.log('⏳ Stage 2 Check - Still loading user form status...');
    } else {
      console.log('⚠️ Stage 2 Check - No user form status available yet');
    }

    // Cleanup function
    return () => {
      if (timer) clearTimeout(timer);
      if (countdownInterval) clearInterval(countdownInterval);
      console.log('🧹 Stage 2 capture timer cleaned up');
    };
  }, [isAuthenticated, isLoading, userFormStatus, error, userId]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Only show for anonymous users
  if (isAuthenticated) {
    return null;
  }

  return (
    <>
      <Stage2CaptureModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

