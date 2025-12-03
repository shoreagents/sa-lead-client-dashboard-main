'use client';

import { useState } from 'react';
import { generateUserId } from '@/lib/userEngagementService';

export function usePricingProgress() {
  const [isSavingStage1, setIsSavingStage1] = useState(false);
  const [isSavingStage2, setIsSavingStage2] = useState(false);

  /**
   * Save Lead Capture Stage 1
   * Matches /api/anonymous-user-inquiry
   */
  const saveStage1 = async (data: {
    industry: string;
    company: string;
    businessGoals: string;
    memberCount: number;
  }) => {
    setIsSavingStage1(true);
    try {
      const userId = generateUserId();

      const response = await fetch('/api/anonymous-user-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          industry: data.industry,
          company: data.company,
          employeeCount: data.memberCount.toString(),
          message: data.businessGoals,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save Stage 1');
      }

      const result = await response.json();
      console.log('✅ Stage 1 saved:', result);
      return result;
    } catch (error) {
      console.error('❌ Stage 1 error:', error);
      throw error;
    } finally {
      setIsSavingStage1(false);
    }
  };

  /**
   * Save Lead Capture Stage 2
   * Matches /api/stage-2-capture
   */
  const saveStage2 = async (data: {
    firstName: string;
    lastName: string;
    email: string;
  }) => {
    setIsSavingStage2(true);
    try {
      const userId = generateUserId();

      const response = await fetch('/api/stage-2-capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save Stage 2');
      }

      const result = await response.json();
      console.log('✅ Stage 2 saved:', result);
      return result;
    } catch (error) {
      console.error('❌ Stage 2 error:', error);
      throw error;
    } finally {
      setIsSavingStage2(false);
    }
  };

  return {
    saveStage1,
    saveStage2,
    isSavingStage1,
    isSavingStage2,
  };
}

