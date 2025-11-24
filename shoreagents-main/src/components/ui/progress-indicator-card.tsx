'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Circle } from 'lucide-react';

interface ProgressStep {
  label: string;
  completed: boolean;
}

interface ProgressIndicatorCardProps {
  currentStage: string;
  className?: string;
}

const JOURNEY_STEPS: Record<string, ProgressStep[]> = {
  new_lead: [
    { label: 'Browsing', completed: true },
    { label: 'Share Your Needs', completed: false },
    { label: 'Get Quote', completed: false },
    { label: 'Interview', completed: false },
    { label: 'Hire Team', completed: false }
  ],
  stage_1: [
    { label: 'Browsing', completed: true },
    { label: 'Shared Needs', completed: true },
    { label: 'Get Quote', completed: false },
    { label: 'Interview', completed: false },
    { label: 'Hire Team', completed: false }
  ],
  stage_2: [
    { label: 'Browsing', completed: true },
    { label: 'Shared Info', completed: true },
    { label: 'Get Quote', completed: false },
    { label: 'Interview', completed: false },
    { label: 'Hire Team', completed: false }
  ],
  quoted: [
    { label: 'Browsing', completed: true },
    { label: 'Shared Info', completed: true },
    { label: 'Got Quote', completed: true },
    { label: 'Interview', completed: false },
    { label: 'Hire Team', completed: false }
  ],
  meeting_booked: [
    { label: 'Browsing', completed: true },
    { label: 'Shared Info', completed: true },
    { label: 'Got Quote', completed: true },
    { label: 'Scheduled Call', completed: true },
    { label: 'Hire Team', completed: false }
  ],
  signed_up: [
    { label: 'Browsing', completed: true },
    { label: 'Shared Info', completed: true },
    { label: 'Got Quote', completed: true },
    { label: 'Interviewed', completed: true },
    { label: 'Ready to Hire', completed: true }
  ]
};

export function ProgressIndicatorCard({ currentStage, className }: ProgressIndicatorCardProps) {
  const steps = JOURNEY_STEPS[currentStage] || JOURNEY_STEPS.new_lead;
  const currentStepIndex = steps.findIndex(s => !s.completed);
  const progress = ((steps.filter(s => s.completed).length) / steps.length) * 100;

  return (
    <Card className={`hover:shadow-md transition-shadow overflow-hidden ${className}`}>
      <div className="px-3 py-2 bg-gradient-to-r from-lime-600 to-lime-500">
        <h3 className="text-sm font-semibold text-lime-50">Your Journey</h3>
      </div>
      <CardContent className="p-4">
        <div className="space-y-4">
          {/* Progress Bar */}
          <div className="relative">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-lime-500 to-lime-600 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-xs text-gray-500 mt-1 text-right">
              {Math.round(progress)}% Complete
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-2">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                  step.completed 
                    ? 'bg-lime-500 text-white' 
                    : index === currentStepIndex
                    ? 'bg-lime-100 border-2 border-lime-500 text-lime-600'
                    : 'bg-gray-100 text-gray-400'
                }`}>
                  {step.completed ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Circle className="w-3 h-3" fill={index === currentStepIndex ? 'currentColor' : 'none'} />
                  )}
                </div>
                <span className={`text-sm ${
                  step.completed 
                    ? 'text-gray-900 font-medium' 
                    : index === currentStepIndex
                    ? 'text-lime-600 font-semibold'
                    : 'text-gray-400'
                }`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          {/* Next Step Hint */}
          {currentStepIndex < steps.length && (
            <div className="mt-4 pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500">
                <span className="font-semibold text-gray-700">Next: </span>
                {steps[currentStepIndex]?.label}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

