"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Video, 
  Calendar, 
  Rocket, 
  Info, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

interface NextStepRecommendation {
  title: string;
  description: string;
  action: string;
  actionUrl: string;
  icon: string;
  priority: number;
  reason: string;
}

interface UserActivity {
  candidateViews: number;
  pricingQuotes: number;
  interviewRequests: number;
  totalPageViews: number;
  totalTimeSpent: number;
}

interface NextStepResponse {
  success: boolean;
  recommendation: NextStepRecommendation;
  alternativeSteps: NextStepRecommendation[];
  userActivity: UserActivity;
}

const iconMap: Record<string, any> = {
  TrendingUp,
  Users,
  DollarSign,
  Video,
  Calendar,
  Rocket,
  Info,
  ArrowRight,
  Sparkles
};

export function NextStepCard({ userId }: { userId: string }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<NextStepResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNextStep() {
      try {
        const response = await fetch('/api/user/next-step', {
          headers: {
            'x-user-id': userId
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch recommendation');
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error('Error fetching next step:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    if (userId) {
      fetchNextStep();
    }
  }, [userId]);

  if (loading) {
    return (
      <Card className="h-full">
        <CardHeader className="bg-lime-600 text-white">
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="w-5 h-5" />
            Next Step
          </CardTitle>
        </CardHeader>
        <CardContent className="py-6 space-y-4">
          {/* Badge Skeleton */}
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-32" />
          </div>
          
          {/* Main Recommendation Skeleton */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Skeleton className="w-12 h-12 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
            
            {/* Activity Summary Skeleton */}
            <div className="bg-gray-50 rounded-lg p-3 space-y-2">
              <Skeleton className="h-4 w-24" />
              <div className="flex flex-wrap gap-3">
                <Skeleton className="h-3 w-32" />
                <Skeleton className="h-3 w-28" />
              </div>
            </div>
            
            {/* Button Skeleton */}
            <Skeleton className="h-10 w-full" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error || !data) {
    return (
      <Card className="h-full">
        <CardHeader className="bg-lime-600 text-white">
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="w-5 h-5" />
            Next Step
          </CardTitle>
        </CardHeader>
        <CardContent className="py-8">
          <div className="text-center space-y-4">
            <p className="text-sm text-gray-600">Based on your browsing:</p>
            <Link href="/we-got-talent">
              <Button className="bg-lime-600 hover:bg-lime-500 w-full">
                Explore Our Talent
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    );
  }

  const { recommendation, userActivity } = data;
  const IconComponent = iconMap[recommendation.icon] || ArrowRight;

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="bg-gradient-to-r from-lime-600 to-lime-500 text-white">
        <CardTitle className="flex items-center gap-2 text-lg">
          <TrendingUp className="w-5 h-5" />
          Next Step
        </CardTitle>
      </CardHeader>
      <CardContent className="py-6 space-y-4">
        {/* Personalization Badge */}
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs bg-lime-50 text-lime-700 border-lime-200">
            <Sparkles className="w-3 h-3 mr-1" />
            Personalized for you
          </Badge>
        </div>

        {/* Main Recommendation */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center flex-shrink-0">
              <IconComponent className="w-6 h-6 text-lime-600" />
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="font-semibold text-gray-900">{recommendation.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {recommendation.description}
              </p>
            </div>
          </div>

          {/* Activity Summary */}
          {(userActivity.candidateViews > 0 || userActivity.pricingQuotes > 0) && (
            <div className="bg-gray-50 rounded-lg p-3 space-y-1">
              <p className="text-xs font-medium text-gray-700">Your Activity:</p>
              <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                {userActivity.candidateViews > 0 && (
                  <span>👥 {userActivity.candidateViews} candidates viewed</span>
                )}
                {userActivity.pricingQuotes > 0 && (
                  <span>💰 {userActivity.pricingQuotes} quotes created</span>
                )}
                {userActivity.interviewRequests > 0 && (
                  <span>📹 {userActivity.interviewRequests} interviews requested</span>
                )}
              </div>
            </div>
          )}

          {/* CTA Button */}
          <Link href={recommendation.actionUrl} className="block">
            <Button 
              className="w-full bg-lime-600 hover:bg-lime-500 text-white shadow-md hover:shadow-lg transition-all duration-300"
              size="lg"
            >
              {recommendation.action}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Debug Info (can be removed in production) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-400">
              Reason: {recommendation.reason} (Priority: {recommendation.priority})
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

