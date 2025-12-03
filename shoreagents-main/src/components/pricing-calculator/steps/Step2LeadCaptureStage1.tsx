'use client';

import { Building, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AIIndustryAutocomplete } from '@/components/ui/ai-industry-autocomplete';
import { useCurrency } from '@/lib/currencyContext';
import type { StepProps } from '../types';

export function Step2LeadCaptureStage1({ formData, updateFormData }: StepProps) {
  const { industry, company, businessGoals, memberCount } = formData;
  const { selectedCurrency } = useCurrency();

  // Conversational copy
  const greeting = memberCount
    ? `Awesome! You're looking for ${memberCount} team member${memberCount > 1 ? 's' : ''}.`
    : 'Great! ';

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-6">
        <Building className="w-12 h-12 text-lime-600 mx-auto mb-3" />
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          {greeting} Now, tell us about your business!
        </h3>
        <p className="text-gray-600">
          This helps our AI match you with the perfect talent ✨
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <Label htmlFor="company" className="text-base font-medium text-gray-900 flex items-center gap-2">
            What's your company name?
          </Label>
          <Input
            id="company"
            value={company}
            onChange={(e) => updateFormData({ company: e.target.value })}
            placeholder="e.g., Acme Real Estate"
            className="mt-2 h-12 text-base"
          />
        </div>

        <div>
          <Label htmlFor="industry" className="text-base font-medium text-gray-900 flex items-center gap-2 mb-2">
            What industry are you in? *
            <Sparkles className="w-4 h-4 text-yellow-500" />
          </Label>
          <AIIndustryAutocomplete
            value={industry}
            onChange={(value) => updateFormData({ industry: value })}
            label=""
            placeholder="Start typing your industry..."
            id="industry"
            currency={selectedCurrency.code}
          />
        </div>

        <div>
          <Label htmlFor="businessGoals" className="text-base font-medium text-gray-900">
            What are you trying to achieve? *
          </Label>
          <textarea
            id="businessGoals"
            value={businessGoals}
            onChange={(e) => updateFormData({ businessGoals: e.target.value })}
            placeholder="E.g., 'We need help managing property listings and responding to client inquiries faster' or 'Looking to scale our marketing campaigns without increasing overhead costs'..."
            className="mt-2 w-full min-h-[140px] px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent resize-none text-base"
            required
          />
          <p className="text-xs text-gray-500 mt-2">
            💬 Be as detailed as you'd like - it helps us understand your needs better!
          </p>
        </div>

        {/* Info Banner */}
        <div className="p-4 bg-gradient-to-r from-lime-50 to-green-50 border border-lime-200 rounded-lg">
          <p className="text-sm text-lime-900">
            <strong>🔒 Your info is safe:</strong> We use this to personalize your quote and
            match you with the right talent. No spam, ever.
          </p>
        </div>
      </div>
    </div>
  );
}


