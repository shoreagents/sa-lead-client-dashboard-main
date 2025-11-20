'use client';

import { useRouter } from 'next/navigation';
import { EmployeeCardData } from '@/types/api';
import Image from 'next/image';
import { Button } from './button';
import { Card, CardContent } from './card';
import { Badge } from './badge';
import { 
  User, 
  Eye,
  Trophy,
  Calendar,
  Flame,
  Heart,
  ArrowRight
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { candidateTracker } from '@/lib/candidateTrackingService';
import { useFavorites } from '@/lib/favorites-context';
import { cn } from '@/lib/utils';

interface TalentCardProps {
  data: EmployeeCardData;
  onAskForInterview?: () => void;
}

export function TalentCard({ data, onAskForInterview }: TalentCardProps) {
  const router = useRouter();
  const hasWorkStatus = data.workStatus;
  const hasResume = data.resume;
  const [hotnessScore, setHotnessScore] = useState<number>(0);
  const [isLoadingHotness, setIsLoadingHotness] = useState(true);
  const { toggleFavorite, isFavorite } = useFavorites();
  
  // Function to calculate gradual popularity score (0-100)
  const calculateGradualPopularity = (rawScore: number): number => {
    if (!rawScore || rawScore <= 0) return 0;
    const maxRawScore = 1000;
    const normalizedScore = Math.min(rawScore / maxRawScore, 1);
    const logScore = Math.log(1 + normalizedScore * 9) / Math.log(10);
    return Math.min(logScore * 100, 100);
  }

  const calculateScore = () => {
    let score = 0;
    if (hasResume) score += 20;
    if (data.aiAnalysis) score += 15;
    if (hasWorkStatus) score += 25;
    if (data.applications && Array.isArray(data.applications) && data.applications.length > 0) score += 10;
    if (data.user?.position) score += 10;
    if (data.user?.location) score += 10;
    if (data.user?.avatar) score += 10;
    
    if (data.aiAnalysis?.overall_score) {
      return data.aiAnalysis.overall_score;
    }
    
    return Math.min(score, 100);
  };

  const score = calculateScore();

  useEffect(() => {
    const fetchHotnessScore = async () => {
      try {
        setIsLoadingHotness(true);
        if (!data.user?.id) {
          setIsLoadingHotness(false);
          return;
        }
        const analytics = await candidateTracker.getCandidateAnalytics(data.user.id);
        if (analytics && typeof analytics.hotness_score === 'number') {
          setHotnessScore(analytics.hotness_score);
        } else {
          setHotnessScore(0);
        }
      } catch (error) {
        console.error('❌ Error fetching hotness score:', error);
        setHotnessScore(0);
      } finally {
        setIsLoadingHotness(false);
      }
    };
    fetchHotnessScore();
  }, [data.user.id]);

  const getHotnessLevel = (score: number) => {
    if (score >= 80) return { level: 'HOT', color: 'bg-red-500', textColor: 'text-red-600', iconColor: 'text-red-500' };
    if (score >= 60) return { level: 'WARM', color: 'bg-orange-500', textColor: 'text-orange-600', iconColor: 'text-orange-500' };
    if (score >= 40) return { level: 'COOL', color: 'bg-blue-500', textColor: 'text-blue-600', iconColor: 'text-blue-500' };
    if (score >= 20) return { level: 'CHILL', color: 'bg-lime-500', textColor: 'text-lime-600', iconColor: 'text-lime-500' };
    return { level: 'NEW', color: 'bg-slate-400', textColor: 'text-slate-500', iconColor: 'text-slate-400' };
  };

  const gradualScore = calculateGradualPopularity(hotnessScore);
  const hotness = getHotnessLevel(gradualScore);
  
  return (
    <Card className="group relative w-full bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Selection Overlay */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-lime-500/20 rounded-[2rem] transition-colors pointer-events-none z-10"></div>

      <div className="p-6 flex flex-col h-full relative z-0">
        
        {/* Top Bar: Badges */}
        <div className="flex justify-between items-start mb-6">
           {/* Hotness Badge */}
           <div className={cn("flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-50", hotness.textColor)}>
              <Flame className={cn("w-3 h-3", hotness.iconColor)} />
              {hotness.level}
           </div>

           {/* Score Badge */}
           <div className="flex items-center gap-1.5 px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-xs font-bold border border-yellow-100">
              <Trophy className="w-3 h-3" />
              {score}
           </div>
        </div>

        {/* Avatar Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-lime-400 group-hover:to-lime-600 transition-colors duration-500">
               <div className="w-full h-full rounded-full overflow-hidden bg-white relative">
                  {data.user.avatar ? (
                    <Image
                      src={data.user.avatar}
                      alt={data.user.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-50">
                      <User className="w-10 h-10 text-slate-300" />
                    </div>
                  )}
               </div>
            </div>
            {/* Favorite Button Absolute */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(data.user.id);
              }}
              className="absolute -right-1 bottom-0 p-2 bg-white rounded-full shadow-md border border-slate-100 hover:scale-110 transition-transform z-20"
            >
              <Heart 
                className={cn("w-4 h-4 transition-colors", isFavorite(data.user.id) ? 'text-red-500 fill-red-500' : 'text-slate-400 hover:text-red-500')} 
              />
            </button>
          </div>

          <h3 className="text-xl font-bold text-slate-900 text-center mb-1 group-hover:text-lime-700 transition-colors">
            {data.user.name}
          </h3>
          <p className="text-sm text-slate-500 text-center font-medium uppercase tracking-wide">
            {(() => {
                const position = hasWorkStatus && data.workStatus?.currentPosition 
                  ? data.workStatus.currentPosition 
                  : (data.user.position || 'Talent');
                return position?.split(',')[0]?.trim() || 'Talent';
            })()}
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-100 mb-6"></div>

        {/* Stats / Info */}
        <div className="space-y-4 flex-1">
           {/* Hotness Bar */}
           {!isLoadingHotness && hotnessScore > 0 && (
             <div className="space-y-1.5">
               <div className="flex justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider">
                 <span>Demand</span>
                 <span className={hotness.textColor}>{Math.min(Math.round(gradualScore), 100)}%</span>
               </div>
               <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                 <div 
                   className={cn("h-full rounded-full transition-all duration-1000", hotness.color)}
                   style={{ width: `${Math.min(gradualScore, 100)}%` }}
                 ></div>
               </div>
             </div>
           )}
           
           {/* Placeholder for pills/skills if we had them */}
           <div className="flex flex-wrap gap-2 justify-center">
              {data.user.location && (
                <Badge variant="secondary" className="bg-slate-50 text-slate-500 font-normal text-xs hover:bg-slate-100">
                   {data.user.location}
                </Badge>
              )}
              {hasResume && (
                <Badge variant="secondary" className="bg-blue-50 text-blue-600 font-normal text-xs hover:bg-blue-100">
                   CV Ready
                </Badge>
              )}
           </div>
        </div>

        {/* Actions */}
        <div className="mt-6 space-y-3">
          <Button
            onClick={() => router.push(`/employee/${data.user.id}`)}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl h-12 shadow-lg shadow-slate-900/10 group-hover:shadow-xl transition-all"
          >
            View Profile
          </Button>
          <Button
            onClick={onAskForInterview}
            variant="outline"
            className="w-full border-slate-200 text-slate-600 hover:text-lime-700 hover:border-lime-200 hover:bg-lime-50 rounded-xl h-12 font-semibold transition-all"
          >
            Request Interview
          </Button>
        </div>

      </div>
    </Card>
  );
}
