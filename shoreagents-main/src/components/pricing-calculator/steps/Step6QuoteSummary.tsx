'use client';

import { CheckCircle, Users, DollarSign, Briefcase, Sparkles, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCurrency } from '@/lib/currencyContext';
import type { StepProps } from '../types';

export function Step6QuoteSummary({ formData, isProcessing }: StepProps) {
  const { quoteData, industry, memberCount, firstName } = formData;
  const { formatPrice } = useCurrency();

  // Conversational greeting
  const greeting = firstName ? `${firstName}, here's your personalized quote!` : "Here's your personalized quote!";

  if (isProcessing) {
    return (
      <div className="text-center py-12">
        <div className="relative">
          <div className="w-16 h-16 mx-auto mb-4 relative">
            <div className="absolute inset-0 rounded-full border-3 border-lime-200"></div>
            <div
              className="absolute inset-0 rounded-full border-3 border-lime-600 border-t-transparent animate-spin"
              style={{ animationDuration: '0.8s' }}
            ></div>
            <Sparkles className="w-6 h-6 text-lime-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            🧠 Our AI is analyzing your requirements...
          </h3>
          <p className="text-gray-600 mb-4">
            Matching Philippine market rates and finding top candidates
          </p>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-lime-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-lime-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-lime-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    );
  }

  if (!quoteData) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No quote data available</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Header */}
      <div className="text-center mb-6">
        <div className="relative inline-block mb-3">
          <CheckCircle className="w-16 h-16 text-lime-600 mx-auto" />
          <Sparkles className="w-6 h-6 text-yellow-500 absolute -top-1 -right-1 animate-pulse" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-2">{greeting}</h3>
        <p className="text-lg text-gray-600">Your all-inclusive offshore staffing solution 🚀</p>
      </div>

      {/* Main Quote Card */}
      <Card className="mb-6 border-2 border-lime-500 shadow-xl bg-gradient-to-br from-white to-lime-50">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold text-gray-900">Your Quote</CardTitle>
              <CardDescription className="text-base mt-1">{industry} • {quoteData.totalMembers} Team Member{quoteData.totalMembers > 1 ? 's' : ''}</CardDescription>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600 mb-1">Monthly Cost</p>
              <p className="text-4xl font-bold text-lime-600">{formatPrice(quoteData.totalMonthlyCost)}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {quoteData.breakdown.map((breakdown, index) => (
              <div key={index} className="flex justify-between items-center py-3 px-4 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-lime-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{breakdown.count}</span>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-gray-900">{breakdown.role}</p>
                    <p className="text-xs text-gray-500">
                      {formatPrice(breakdown.monthlyCost)} salary + {formatPrice(breakdown.workspaceCost)} workspace
                    </p>
                    <p className="text-xs text-lime-600 font-medium">
                      Setup: {formatPrice(breakdown.setupCost)} × {breakdown.count} = {formatPrice(breakdown.setupCost * breakdown.count)}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-gray-900">
                    {formatPrice(breakdown.totalCost * breakdown.count)}
                  </p>
                  <p className="text-xs text-gray-500">per month</p>
                </div>
              </div>
            ))}
          </div>

          {/* Setup Fees */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-900">One-Time Setup Fee</p>
                <p className="text-sm text-gray-600">Onboarding, training, and equipment</p>
              </div>
              <p className="text-2xl font-bold text-blue-600">{formatPrice(quoteData.totalSetupCost || 0)}</p>
            </div>
          </div>

          {/* Office Lease Option (if 10+ staff) */}
          {(memberCount || 0) >= 10 && (
            <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-lg">
              <div className="flex items-start gap-3">
                <Building className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="font-semibold text-purple-900 mb-1">🏢 Want Your Own Private Office?</p>
                  <p className="text-sm text-purple-800 mb-3">
                    With {memberCount} team members, you qualify for a dedicated office space! No individual workspace fees - just use the office however you want (hybrid, hot-desking, full-time).
                  </p>
                  <Button size="sm" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                    View Office Options
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* What's Included */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-lime-600" />
            What's Included?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Full-time dedicated staff',
              'Recruitment & onboarding',
              'HR & payroll management',
              'Office space & equipment',
              'IT support & infrastructure',
              'Performance monitoring',
              '13th month pay & benefits',
              'Ongoing training & development',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-lime-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="mt-6 text-center p-6 bg-gradient-to-r from-lime-50 to-green-50 border border-lime-200 rounded-lg">
        <h4 className="text-xl font-bold text-gray-900 mb-2">Ready to build your dream team?</h4>
        <p className="text-gray-600 mb-4">Let's get started! Our team will reach out within 24 hours.</p>
        <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white text-lg px-8">
          Let's Do This! 🚀
        </Button>
      </div>
    </div>
  );
}

