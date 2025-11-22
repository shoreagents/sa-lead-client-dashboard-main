'use client';

import { Users, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import type { StepProps } from '../types';

export function Step1TeamSize({ formData, updateFormData }: StepProps) {
  const { memberCount, firstName } = formData;

  // Conversational greeting
  const greeting = firstName ? `Hey ${firstName}! ` : 'Hey there! ';

  const handleMemberCountChange = (count: number | null) => {
    updateFormData({ memberCount: count });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="relative inline-block">
          <Users className="w-16 h-16 text-lime-600 mx-auto mb-4" />
          <Sparkles className="w-6 h-6 text-yellow-500 absolute -top-1 -right-1 animate-pulse" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-3">
          {greeting}How many awesome team members are you looking to hire?
        </h3>
        <p className="text-lg text-gray-600">
          Let's build your dream offshore team together! 🚀
        </p>
      </div>

      {/* Team Size Input */}
      <div className="mb-8 flex justify-center">
        <div className="w-80">
          <Input
            id="memberCount"
            type="number"
            min="1"
            max="100"
            value={memberCount || ''}
            onChange={(e) =>
              handleMemberCountChange(parseInt(e.target.value) || null)
            }
            placeholder="Type a number..."
            className="w-full h-20 text-center text-4xl font-bold placeholder-gray-300 border-2 border-gray-300 focus:border-lime-500 rounded-xl shadow-lg"
            style={{ fontSize: '36px' }}
            autoFocus
          />
        </div>
      </div>

      {/* Quick Response Buttons */}
      <div className="flex justify-center flex-wrap gap-3 mb-6">
        {[1, 3, 5, 10, 20, 50].map((count) => (
          <button
            key={count}
            onClick={() => handleMemberCountChange(count)}
            className={`px-6 py-3 rounded-xl border-2 transition-all font-semibold text-lg ${
              memberCount === count
                ? 'border-lime-500 bg-lime-500 text-white shadow-lg scale-105'
                : 'border-gray-300 hover:border-lime-400 hover:bg-lime-50 text-gray-700 hover:scale-105'
            }`}
          >
            {count}
          </button>
        ))}
      </div>

      <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg text-center">
        <p className="text-sm text-blue-900">
          💡 <strong>Pro tip:</strong> Most clients start with 3-5 team members and scale from there!
        </p>
      </div>
    </div>
  );
}


