'use client';

import { useState, useEffect, useMemo } from 'react';
import { AnonymousUserModal } from './anonymous-user-modal';
import { useAuth } from '@/lib/auth-context';
import { generateUserId } from '@/lib/userEngagementService';
import { useUserFormStatus } from '@/hooks/use-api';

export function AnonymousUserButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  
  // Only generate userId once, not on every render
  const userId = useMemo(() => generateUserId(), []);
  const { data: userFormStatus, isLoading, error } = useUserFormStatus(userId);

  // Auto-open modal after 45 seconds
  useEffect(() => {
    // Only start timer for anonymous users
    if (isAuthenticated) {
      return;
    }

    // Database check is the primary source of truth - no localStorage needed

    let timer: NodeJS.Timeout;
    let countdownInterval: NodeJS.Timeout;

    const startCountdown = () => {
      timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 45000); // 45 seconds
    };

    // Check if user form status is loaded and handle accordingly
    if (!isLoading && userFormStatus) {
      if (userFormStatus.hasFilledForm) {
        // User already filled form, don't show modal
        return;
      }

      // Add a small delay to make sure the database check is complete
      setTimeout(() => {
        startCountdown();
      }, 2000);
    } else if (error) {
      // Database check failed, start countdown anyway
      startCountdown();
    }

    // Cleanup function
    return () => {
      if (timer) clearTimeout(timer);
      if (countdownInterval) clearInterval(countdownInterval);
    };
  }, [isAuthenticated, isLoading, userFormStatus, error]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

