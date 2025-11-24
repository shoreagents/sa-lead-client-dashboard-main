'use client';

import { useState, useCallback } from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useCurrency } from '@/lib/currencyContext';
import { calculateQuote } from '@/lib/quoteCalculationService';
import { Step1TeamSize } from './steps/Step1TeamSize';
import { Step2LeadCaptureStage1 } from './steps/Step2LeadCaptureStage1';
import { Step3RolesConfig } from './steps/Step3RolesConfig';
import { Step4WorkspaceSetup } from './steps/Step4WorkspaceSetup';
import { Step5LeadCaptureStage2 } from './steps/Step5LeadCaptureStage2';
import { Step6QuoteSummary } from './steps/Step6QuoteSummary';
import { usePricingProgress } from './hooks/usePricingProgress';
import type { PricingFormData, RoleDetail } from './types';

interface PricingCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PricingCalculatorModal({ isOpen, onClose }: PricingCalculatorModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const { saveStage1, saveStage2, isSavingStage1, isSavingStage2 } = usePricingProgress();
  const { selectedCurrency } = useCurrency();

  const [formData, setFormData] = useState<PricingFormData>({
    // Step 1
    memberCount: null,
    
    // Step 2
    industry: '',
    company: '',
    businessGoals: '',
    
    // Step 3
    sameRoles: false,
    roles: [],
    
    // Step 4
    firstName: '',
    lastName: '',
    email: '',
    stage2Skipped: false,
    
    // Step 5
    quoteData: null,
  });

  const updateFormData = useCallback((updates: Partial<PricingFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  }, []);

  const stepTitles = [
    'Team Size',
    'Business Info',
    'Roles Configuration',
    'Workspace Setup',
    'Contact Info (Optional)',
    'Quote Summary',
  ];

  const canProceed = useCallback(() => {
    switch (currentStep) {
      case 1:
        return formData.memberCount && formData.memberCount > 0;
      case 2:
        return formData.industry && formData.businessGoals.trim() !== '';
      case 3:
        // Check if all roles have title and description
        return formData.roles.length > 0 && formData.roles.every(role => 
          role.title && role.title.trim() !== '' && 
          role.description && role.description.trim() !== ''
        );
      case 4:
        // Workspace must be selected
        return formData.roles.length > 0 && formData.roles.every(role => role.workspace);
      case 5:
        // Optional step - always can proceed
        return true;
      default:
        return true;
    }
  }, [currentStep, formData]);

  const handleNext = useCallback(async () => {
    // Save lead progress at appropriate steps
    if (currentStep === 2) {
      try {
        await saveStage1({
          industry: formData.industry,
          company: formData.company,
          businessGoals: formData.businessGoals,
          memberCount: formData.memberCount || 0,
        });
        console.log('✅ Lead Capture Stage 1 saved!');
      } catch (error) {
        console.error('❌ Failed to save Stage 1:', error);
        // Continue anyway - don't block user
      }
    }

    if (currentStep === 5 && !formData.stage2Skipped) {
      // Only save if user didn't skip
      if (formData.firstName && formData.lastName && formData.email) {
        try {
          await saveStage2({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
          });
          console.log('✅ Lead Capture Stage 2 saved!');
        } catch (error) {
          console.error('❌ Failed to save Stage 2:', error);
          // Continue anyway
        }
      }
    }

    // Generate quote before Step 6
    if (currentStep === 5) {
      setIsProcessing(true);
      
      // Simulate AI processing time
      setTimeout(() => {
        const quoteData = calculateQuote(
          formData.roles,
          selectedCurrency.code,
          formData.industry
        );
        
        updateFormData({ quoteData });
        setIsProcessing(false);
        setCurrentStep(6);
      }, 2000);
      return;
    }

    setCurrentStep(prev => Math.min(prev + 1, 6));
  }, [currentStep, formData, saveStage1, saveStage2, updateFormData, selectedCurrency]);

  const handleBack = useCallback(() => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  }, []);

  const handleClose = useCallback(() => {
    // Reset form
    setCurrentStep(1);
    setFormData({
      memberCount: null,
      industry: '',
      company: '',
      businessGoals: '',
      sameRoles: false,
      roles: [],
      firstName: '',
      lastName: '',
      email: '',
      stage2Skipped: false,
      quoteData: null,
    });
    onClose();
  }, [onClose]);

  const renderStep = () => {
    const stepProps = {
      formData,
      updateFormData,
      onNext: handleNext,
      onBack: handleBack,
      isProcessing,
    };

    switch (currentStep) {
      case 1:
        return <Step1TeamSize {...stepProps} />;
      case 2:
        return <Step2LeadCaptureStage1 {...stepProps} />;
      case 3:
        return <Step3RolesConfig {...stepProps} />;
      case 4:
        return <Step4WorkspaceSetup {...stepProps} />;
      case 5:
        return <Step5LeadCaptureStage2 {...stepProps} />;
      case 6:
        return <Step6QuoteSummary {...stepProps} />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-7xl max-h-[95vh] p-0 gap-0" aria-describedby="pricing-calculator-description">
        <VisuallyHidden>
          <DialogTitle>Pricing Calculator - {stepTitles[currentStep - 1]}</DialogTitle>
          <DialogDescription id="pricing-calculator-description">
            Get your personalized team pricing quote in 6 easy steps
          </DialogDescription>
        </VisuallyHidden>
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-gray-900">Step {currentStep}/6</span>
            <span className="text-sm text-gray-500">:</span>
            <span className="text-sm font-medium text-gray-700">{stepTitles[currentStep - 1]}</span>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-200 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-4 py-1 bg-gray-50 border-b border-gray-100">
          <Progress value={(currentStep / 6) * 100} className="h-1" />
        </div>

        {/* Step Content */}
        <div className="p-4 max-h-[calc(95vh-160px)] overflow-y-auto">
          {renderStep()}
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between p-4 border-t border-gray-100 bg-gray-50">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1 || isProcessing}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>

          {currentStep < 6 && (
            <Button
              onClick={handleNext}
              disabled={!canProceed() || isSavingStage1 || isSavingStage2 || isProcessing}
              className="flex items-center gap-2 bg-lime-600 hover:bg-lime-700 text-white"
            >
              {isSavingStage1 || isSavingStage2 ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Saving...
                </>
              ) : isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  {currentStep === 5 ? 'View Quote' : 'Next'}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          )}

          {currentStep === 6 && (
            <Button
              onClick={handleClose}
              className="bg-lime-600 hover:bg-lime-700 text-white"
            >
              Close
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

