'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ResourceCardProps {
  title: string;
  description: string;
  url: string;
  badge?: string;
  icon?: React.ReactNode;
  reason?: string;
  onClick?: () => void;
  className?: string;
}

export function ResourceCard({
  title,
  description,
  url,
  badge = 'Recommended For You',
  icon,
  reason,
  onClick,
  className
}: ResourceCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    router.push(url);
  };

  return (
    <Card className={`hover:shadow-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden group ${className}`}>
      <div className="px-3 py-2 bg-gradient-to-r from-purple-600 to-purple-500">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {icon || <Sparkles className="w-4 h-4 text-purple-50" />}
            <h3 className="text-sm font-semibold text-purple-50">{badge}</h3>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4 space-y-3">
        {/* Title */}
        <div>
          <h4 className="text-base font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
            {title}
          </h4>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3">
          {description}
        </p>

        {/* Reason Badge (if provided) */}
        {reason && (
          <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">
            {reason}
          </Badge>
        )}

        {/* CTA Button */}
        <Button
          onClick={handleClick}
          size="sm"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white group/btn"
        >
          <span>Read More</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
}

