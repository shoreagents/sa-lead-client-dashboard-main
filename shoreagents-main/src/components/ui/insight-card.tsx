'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, TrendingUp, Target, Zap } from 'lucide-react';

interface InsightCardProps {
  title: string;
  description: string;
  type?: 'motivation' | 'stat' | 'tip' | 'milestone';
  className?: string;
}

const ICON_MAP = {
  motivation: Sparkles,
  stat: TrendingUp,
  tip: Target,
  milestone: Zap
};

const COLOR_MAP = {
  motivation: {
    bg: 'from-purple-50 to-blue-50',
    icon: 'text-purple-600',
    title: 'text-purple-900'
  },
  stat: {
    bg: 'from-blue-50 to-cyan-50',
    icon: 'text-blue-600',
    title: 'text-blue-900'
  },
  tip: {
    bg: 'from-amber-50 to-orange-50',
    icon: 'text-amber-600',
    title: 'text-amber-900'
  },
  milestone: {
    bg: 'from-green-50 to-lime-50',
    icon: 'text-green-600',
    title: 'text-green-900'
  }
};

export function InsightCard({
  title,
  description,
  type = 'motivation',
  className
}: InsightCardProps) {
  const Icon = ICON_MAP[type];
  const colors = COLOR_MAP[type];

  return (
    <Card className={`hover:shadow-md transition-shadow overflow-hidden ${className}`}>
      <CardContent className={`p-4 bg-gradient-to-br ${colors.bg}`}>
        <div className="space-y-3">
          {/* Icon & Title */}
          <div className="flex items-start gap-3">
            <div className={`flex-shrink-0 ${colors.icon}`}>
              <Icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className={`text-sm font-semibold ${colors.title}`}>
                {title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-700 leading-relaxed">
            {description}
          </p>

          {/* Decorative Elements */}
          <div className="relative">
            <div className={`absolute -bottom-2 -right-2 w-16 h-16 ${colors.icon} opacity-5 pointer-events-none`}>
              <Icon className="w-full h-full" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

