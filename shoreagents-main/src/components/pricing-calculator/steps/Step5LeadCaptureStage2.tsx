'use client';

import { Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { StepProps } from '../types';

export function Step5LeadCaptureStage2({
  formData,
  updateFormData,
  onNext,
}: StepProps) {
  const { firstName, lastName, email } = formData;

  const handleSkip = () => {
    updateFormData({ stage2Skipped: true });
    onNext();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <Sparkles className="w-12 h-12 text-lime-600 mx-auto mb-3" />
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          Personalize Your Quote
        </h3>
        <p className="text-gray-600">
          Help us customize your experience (Optional - you can skip this)
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={firstName}
              onChange={(e) => updateFormData({ firstName: e.target.value })}
              placeholder="John"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={lastName}
              onChange={(e) => updateFormData({ lastName: e.target.value })}
              placeholder="Doe"
              className="mt-1"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => updateFormData({ email: e.target.value })}
            placeholder="john@example.com"
            className="mt-1"
          />
          <p className="text-xs text-gray-500 mt-1">
            We'll email your quote so you can review it anytime
          </p>
        </div>

        {/* Info Banner */}
        <div className="p-4 bg-gradient-to-r from-lime-50 to-green-50 border border-lime-200 rounded-lg">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-semibold text-lime-900 mb-1">
                Get your quote emailed to you!
              </p>
              <p className="text-lime-800">
                We'll send your personalized quote and recommended candidates
                directly to your inbox. Plus, we can adjust it based on your
                feedback!
              </p>
            </div>
          </div>
        </div>

        {/* Skip Option */}
        <div className="text-center">
          <button
            onClick={handleSkip}
            className="text-sm text-gray-500 hover:text-gray-700 underline"
          >
            Skip for now - I just want to see my quote
          </button>
        </div>
      </div>
    </div>
  );
}

