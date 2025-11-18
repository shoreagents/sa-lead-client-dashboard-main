import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Skeleton } from '@/components/ui/skeleton'
import { 
  Users, 
  Target, 
  MessageCircle, 
  Eye, 
  Heart
} from 'lucide-react'
import { useFavorites } from '@/lib/favorites-context'
import { EmployeeCardData } from '@/types/api'
import { useEmployeeCardData, useTopCandidates } from '@/hooks/use-api'
import { useCurrency } from '@/lib/currencyContext'

// Top Candidate Section Component
interface TopCandidateSectionProps {
  topCandidate: Record<string, unknown> | null;
  isLoading: boolean;
  onViewProfile: () => void;
  onAskForInterview?: (candidateId: string, candidateName: string, candidatePosition?: string) => void;
  userId: string | null;
}

export const TopCandidateSection = ({ 
  topCandidate, 
  isLoading, 
  onViewProfile,
  onAskForInterview,
  userId
}: TopCandidateSectionProps) => {
  const { convertPrice, formatPrice } = useCurrency()
  // Fetch up to 3 top candidates - one for each metric:
  // 1. Highest scroll_percentage
  // 2. Highest view_duration (if different from #1)
  // 3. Highest visit_count/page_views (if different from #1 and #2)
  const { data: topCandidates = [], isLoading: isLoadingTopCandidates } = useTopCandidates(userId);
  const { data: allProfiles = [], isLoading: isLoadingProfiles } = useEmployeeCardData();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Use top candidates if available, otherwise fall back to single topCandidate
  const candidatesToDisplay = useMemo(() => {
    console.log('🎯 TopCandidateSection - Data received:', {
      topCandidatesCount: topCandidates.length,
      topCandidates: topCandidates.map(c => ({ name: c.name, id: c.id })),
      hasTopCandidate: !!topCandidate
    });
    
    return topCandidates.length > 0 
      ? topCandidates 
      : topCandidate 
        ? [{
            id: String(((topCandidate as Record<string, unknown>).user as Record<string, unknown>)?.id || ''),
            name: String(((topCandidate as Record<string, unknown>).user as Record<string, unknown>)?.name || 'Unknown'),
            position: String(((topCandidate as Record<string, unknown>).user as Record<string, unknown>)?.position || 'Position'),
            avatar: String(((topCandidate as Record<string, unknown>).user as Record<string, unknown>)?.avatar || ''),
            bio: String(((topCandidate as Record<string, unknown>).user as Record<string, unknown>)?.bio || ''),
            expectedSalary: Number(((topCandidate as Record<string, unknown>).user as Record<string, unknown>)?.expectedSalary || 0),
            view_duration: Number((topCandidate as Record<string, unknown>).hotnessScore || 0),
            scroll_percentage: 0,
            page_views: 1,
            engagement_score: Number((topCandidate as Record<string, unknown>).hotnessScore || 0)
          }]
        : [];
  }, [topCandidates, topCandidate]);
  
  // Match candidates with employee profiles from TanStack Query data
  const employeeProfiles = useMemo(() => {
    if (candidatesToDisplay.length === 0 || allProfiles.length === 0) return [];
    
    return candidatesToDisplay.map(candidate => {
      const profile = allProfiles.find(p => p.user.id === candidate.id);
      return profile;
    }).filter((profile): profile is EmployeeCardData => profile !== undefined);
  }, [candidatesToDisplay, allProfiles]);
  
  // Sync ref with state
  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);
  
  // Auto-rotate through candidates every 3 seconds (paused on hover)
  useEffect(() => {
    if (candidatesToDisplay.length <= 1) {
      // Clear interval if only one or no candidates
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }
    
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      // Check ref instead of state to avoid re-renders
      if (isHoveredRef.current) {
        console.log('⏸️ Carousel paused - hovered');
        return;
      }
      
      console.log('▶️ Carousel rotating...');
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % candidatesToDisplay.length;
          console.log(`🔄 Rotating from ${prevIndex} to ${nextIndex}`);
          return nextIndex;
        });
        setIsAnimating(false);
      }, 150);
    }, 3000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [candidatesToDisplay.length]);
  
  // Handle manual navigation
  const handleNavigateTo = (index: number) => {
    if (index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 150);
  };
  
  const currentCandidate = candidatesToDisplay.length > 0 ? candidatesToDisplay[currentIndex] : null;
  const currentEmployeeProfile = employeeProfiles.length > 0 && currentIndex < employeeProfiles.length 
    ? employeeProfiles[currentIndex] 
    : null;
  
  const isLoadingProfile = isLoadingProfiles || isLoadingTopCandidates;

  return (
    <div 
      className="h-full flex flex-col"
      onMouseEnter={() => {
        console.log('🖱️ Top Candidate - Mouse Enter');
        setIsHovered(true);
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        console.log('🖱️ Top Candidate - Mouse Leave');
        setIsHovered(false);
        isHoveredRef.current = false;
      }}
    >
      
      {isLoading || isLoadingProfile ? (
        <div className="flex items-center justify-center py-4">
          <div className="animate-spin rounded-full border-2 border-lime-600 border-t-transparent w-6 h-6" />
        </div>
      ) : currentCandidate ? (
        <>
          {/* Current Candidate Card */}
          <div 
            className={`transition-all duration-300 ${
              isAnimating ? 'opacity-0 transform translate-x-2' : 'opacity-100 transform translate-x-0'
            }`}
          >
            {/* Candidate Info */}
            <div className="flex items-center space-x-3">
              <Avatar className="w-12 h-12 flex-shrink-0">
                <AvatarImage src={currentEmployeeProfile?.user?.avatar || currentCandidate.avatar || undefined} />
                <AvatarFallback className="text-lg bg-gradient-to-br from-lime-200 to-lime-300 text-lime-800 font-bold border-2 border-lime-400 shadow-sm">
                  {currentCandidate.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-gray-900 truncate" title={currentCandidate.name}>
                  {currentCandidate.name.split(' ')[0]}
                </p>
                <p className="text-xs text-gray-500 truncate" title={currentCandidate.position}>
                  {currentCandidate.position}
                </p>
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex space-x-1 mt-2">
            <Button
              size="sm"
              variant="outline"
              className="flex-1 text-xs h-6"
              onClick={(e) => {
                e.stopPropagation()
                onAskForInterview?.(currentCandidate.id, currentCandidate.name, currentCandidate.position)
              }}
            >
              Interview
            </Button>
            <Button
              size="sm"
              className="flex-1 text-xs bg-lime-600 hover:bg-lime-700 h-6"
              onClick={(e) => {
                e.stopPropagation()
                if (currentCandidate) {
                // Navigate to the current candidate's profile
                if (typeof window !== 'undefined') {
                  window.location.href = `/candidates/${currentCandidate.id}`
                }
                } else if (onViewProfile) {
                  onViewProfile()
                }
              }}
            >
              View Profile
            </Button>
          </div>

          {/* Carousel Indicators */}
          {candidatesToDisplay.length > 1 && (
            <div className="flex justify-center gap-1 mt-1.5 pt-1.5 border-t border-gray-200">
              {candidatesToDisplay.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigateTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-lime-600 scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-4">
          <p className="text-xs text-gray-500">No candidate data</p>
        </div>
      )}
    </div>
  )
}

// Best Matched Candidates Component
interface BestMatchedCandidatesProps {
  recommendedCandidates: Array<{
    id: string;
    name: string;
    position: string;
    avatar?: string;
    score: number;
    isFavorite?: boolean;
    bio?: string;
    expectedSalary?: number;
  }>;
  isLoading: boolean;
  onAskForInterview?: (candidateId: string, candidateName: string) => void;
  onViewProfile?: (candidateId: string, candidateName: string) => void;
}

export const BestMatchedCandidates = ({ 
  recommendedCandidates = [], 
  isLoading = false,
  onAskForInterview,
  onViewProfile
}: BestMatchedCandidatesProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { convertPrice, formatPrice } = useCurrency()
  const { data: allProfiles = [], isLoading: isLoadingProfiles } = useEmployeeCardData();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Debug logging
  console.log('🎯 BestMatchedCandidates received:', {
    recommendedCandidates,
    count: recommendedCandidates.length,
    isLoading
  })
  
  // Match recommended candidates with employee profiles from TanStack Query data
  const employeeProfiles = useMemo(() => {
    if (recommendedCandidates.length === 0 || allProfiles.length === 0) return [];
    
    return recommendedCandidates.map(candidate => {
      const profile = allProfiles.find((p: EmployeeCardData) => p.user.id === candidate.id);
      return profile;
    }).filter((profile): profile is EmployeeCardData => profile !== undefined);
  }, [recommendedCandidates, allProfiles]);
  
  // Auto-rotate through candidates every 3 seconds (paused on hover)
  useEffect(() => {
    if (recommendedCandidates.length <= 1) {
      // Clear interval if only one or no candidates
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }
    
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      // Check ref instead of state to avoid re-renders
      if (isHoveredRef.current) {
        console.log('⏸️ AI Matched carousel paused - hovered');
        return;
      }
      
      console.log('▶️ AI Matched carousel rotating...');
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % recommendedCandidates.length;
          console.log(`🔄 AI Matched rotating from ${prevIndex} to ${nextIndex}`);
          return nextIndex;
        });
        setIsAnimating(false);
      }, 150); // Half of animation duration
    }, 3000); // 3 seconds
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [recommendedCandidates.length]);
  
  // Handle manual navigation with animation
  const handleNavigateTo = (index: number) => {
    if (index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 150);
  };
  
  // Get the current candidate to display
  const currentCandidate = recommendedCandidates.length > 0 ? recommendedCandidates[currentIndex] : null;
  const currentEmployeeProfile = employeeProfiles.length > 0 && currentIndex < employeeProfiles.length 
    ? employeeProfiles[currentIndex] 
    : null;
  
  // Debug current candidate
  console.log('🎯 Current candidate:', {
    currentIndex,
    currentCandidate,
    currentEmployeeProfile,
    totalCandidates: recommendedCandidates.length,
    employeeProfilesCount: employeeProfiles.length,
    allProfilesCount: allProfiles.length
  })
  
  if (isLoading || isLoadingProfiles) {
    return (
      <div className="h-full flex flex-col" style={{ minHeight: '350px', maxHeight: '350px' }}>
        <div className="flex items-center space-x-2 mb-2">
          <Target className="w-4 h-4 text-lime-600" />
          <h4 className="text-sm font-semibold text-gray-900">AI Matched</h4>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto" style={{ maxHeight: 'calc(350px - 120px)' }}>
          <div className="space-y-3">
            {/* Avatar and Name Skeleton */}
            <div className="flex items-start gap-3 mb-3">
              <Skeleton className="w-16 h-16 rounded-full" />
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-20" />
                </div>
                <Skeleton className="h-3 w-32" />
                <Skeleton className="h-3 w-full" />
              </div>
            </div>
            
            {/* Top Skills and Salary Skeleton */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-2 flex-1">
                <Skeleton className="w-1.5 h-1.5 rounded-full mt-1.5" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-3/4" />
                </div>
              </div>
              <div className="flex-shrink-0 space-y-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
            
            {/* Experience Skeleton */}
            <div className="flex items-start gap-2">
              <Skeleton className="w-1.5 h-1.5 rounded-full mt-1.5" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-3 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!currentCandidate) {
    return (
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Target className="w-4 h-4 text-lime-600" />
          <h4 className="text-sm font-semibold text-gray-900">AI Matched</h4>
        </div>
        <div className="text-center py-4">
          <div className="text-gray-500 text-sm">No AI matches yet</div>
          <div className="text-gray-400 text-xs">Create a quote to see recommendations</div>
        </div>
      </div>
    )
  }

  // Use fallback data if employee profile is not available
  // Note: experience, skills, and workStatus are added at runtime but not in the User type
  const userWithExtras = currentEmployeeProfile?.user as any;
  const displayData = {
    name: currentEmployeeProfile?.user?.name || currentCandidate?.name || 'Unknown',
    position: currentEmployeeProfile?.user?.position || currentCandidate?.position || 'Position',
    avatar: currentEmployeeProfile?.user?.avatar || currentCandidate?.avatar,
    bio: currentEmployeeProfile?.user?.bio || currentCandidate?.bio,
    expectedSalary: userWithExtras?.expectedSalary || currentCandidate?.expectedSalary || 0,
    experience: userWithExtras?.experience || 'Experience not specified',
    workStatus: currentEmployeeProfile?.workStatus?.workStatus || userWithExtras?.workStatus || 'Status not specified',
    skills: userWithExtras?.skills || []
  };

  return (
    <div 
      className="h-full flex flex-col"
      style={{ minHeight: '350px', maxHeight: '350px' }}
      onMouseEnter={() => {
        console.log('🖱️ AI Matched - Mouse Enter');
        setIsHovered(true);
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        console.log('🖱️ AI Matched - Mouse Leave');
        setIsHovered(false);
        isHoveredRef.current = false;
      }}
    >
      <div className="flex items-center space-x-2 mb-2">
        <Target className="w-4 h-4 text-lime-600" />
        <h4 className="text-sm font-semibold text-gray-900">AI Matched</h4>
      </div>
      
      {/* Current Candidate Card - Scrollable content */}
      <div 
        className={`rounded-lg p-2 transition-all duration-300 overflow-hidden relative flex-1 min-h-0 overflow-y-auto ${
          isAnimating ? 'opacity-0 transform translate-x-2' : 'opacity-100 transform translate-x-0'
        }`}
        style={{ maxHeight: 'calc(350px - 120px)' }}
      >
        {/* Candidate Info */}
        <div className="flex items-start gap-3 mb-4">
          <Avatar className="w-20 h-20 flex-shrink-0">
            <AvatarImage src={displayData.avatar || undefined} />
            <AvatarFallback className="text-xl bg-lime-100 text-lime-800">
              {displayData.name.split(' ').map(n => n[0]).join('').toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 flex-1 min-w-0">
                <div className="text-base font-bold text-gray-800 truncate" title={displayData.name}>
                  {displayData.name.split(' ')[0]}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(currentCandidate.id);
                  }}
                  className="p-0.5 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
                  title={isFavorite(currentCandidate.id) ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <Heart 
                    className={`w-3 h-3 transition-all duration-200 ${
                      isFavorite(currentCandidate.id) 
                        ? 'text-red-500 fill-current scale-110' 
                        : 'text-gray-400 hover:text-red-500'
                    }`} 
                  />
                </button>
              </div>
              {/* Match Score - Upper Right */}
              <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                <span className="text-sm text-gray-600">Match Score</span>
                <span className="text-sm font-bold text-lime-600">{Math.round(currentCandidate.score)}%</span>
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-600 truncate mt-0.5" title={displayData.position}>
              {displayData.position}
            </div>
            {/* Bio below job title */}
            {displayData.bio && (
              <div className="text-sm text-gray-600 line-clamp-2 mt-1.5 leading-relaxed" title={displayData.bio}>
                {displayData.bio}
              </div>
            )}
          </div>
        </div>

        {/* Candidate Details */}
        <div className="space-y-2.5">
          {/* Top Skills with Salary Expectation on the right */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-start gap-2 flex-1 min-w-0">
              <div className="w-1.5 h-1.5 bg-lime-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-gray-700 mb-1">Top Skills</div>
                <div className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                  {displayData.skills && displayData.skills.length > 0
                    ? displayData.skills.slice(0, 3).join(' • ')
                    : 'Not specified'}
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 text-right">
              <div className="text-sm font-semibold text-gray-700 mb-1">Salary Expectation</div>
              <div className="text-base font-bold text-lime-600">
                {(() => {
                  const phpSalary = displayData.expectedSalary || 0;
                  const convertedSalary = phpSalary > 0 ? convertPrice(phpSalary) : 0;
                  return convertedSalary > 0 
                    ? `${formatPrice(convertedSalary)}/month`
                    : 'Not specified';
                })()}
              </div>
            </div>
          </div>

          {/* Experience Level */}
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-lime-500 rounded-full mt-2 flex-shrink-0"></div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-gray-700 mb-1">Experience</div>
              <div className="text-sm text-gray-600 leading-relaxed break-words">
                {displayData.experience && displayData.experience !== 'Experience not specified'
                  ? `${displayData.experience} in ${displayData.position || 'Software Development'}`
                  : 'Experience not specified'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons - Fixed at bottom */}
      <div className="flex gap-1.5 mt-auto px-2 flex-shrink-0">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="outline"
                className="flex-1 h-8 text-white hover:brightness-110 transition-all duration-200 text-xs font-medium px-2"
                style={{ 
                  borderColor: 'rgb(101, 163, 13)', 
                  backgroundColor: 'rgb(101, 163, 13)' 
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  onAskForInterview?.(currentCandidate.id, currentCandidate.name)
                }}
              >
                <MessageCircle className="w-3 h-3 mr-1" />
                Interview
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Request an interview<br />with this candidate</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="outline"
                className="flex-1 h-8 text-white hover:brightness-110 transition-all duration-200 text-xs font-medium px-2"
                style={{ 
                  borderColor: 'rgb(101, 163, 13)', 
                  backgroundColor: 'rgb(101, 163, 13)' 
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  onViewProfile?.(currentCandidate.id, currentCandidate.name)
                }}
              >
                <Eye className="w-3 h-3 mr-1" />
                View
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>View detailed<br />candidate profile</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Carousel Indicators - Fixed at bottom */}
      {recommendedCandidates.length > 1 && (
        <div className="flex justify-center gap-1 mt-2 pt-2 border-t border-gray-200 flex-shrink-0">
          {recommendedCandidates.map((_, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => handleNavigateTo(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex 
                        ? 'bg-lime-600 scale-110' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>View candidate {index + 1}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      )}
    </div>
  )
}

// Main Combined Component
interface TopCandidateWithMatchesProps {
  topCandidate: Record<string, unknown> | null;
  isLoadingCandidate: boolean;
  onViewProfile: () => void;
  recommendedCandidates: Array<{
    id: string;
    name: string;
    position: string;
    avatar?: string;
    score: number;
    isFavorite?: boolean;
    bio?: string;
    expectedSalary?: number;
  }>;
  isLoadingRecommended: boolean;
  onAskForInterview?: (candidateId: string, candidateName: string) => void;
  onViewMatchedProfile?: (candidateId: string, candidateName: string) => void;
  userId: string | null;
}

export const TopCandidateWithMatches = ({
  topCandidate,
  isLoadingCandidate,
  onViewProfile,
  recommendedCandidates,
  isLoadingRecommended,
  onAskForInterview,
  onViewMatchedProfile,
  userId
}: TopCandidateWithMatchesProps) => {
  return (
    <Card 
      className="transition-shadow h-full"
    >
      <CardContent className="p-4 h-full">
        <div className="flex flex-col h-full">

          {/* Split into two equal sections */}
          <div className="flex-1 flex flex-col">
            {/* Top Candidate Section - 50% */}
            <div className="flex-1 flex flex-col">
              <TopCandidateSection 
                topCandidate={topCandidate}
                isLoading={isLoadingCandidate}
                onViewProfile={onViewProfile}
                onAskForInterview={onAskForInterview}
                userId={userId}
              />
            </div>
            
            {/* Best Matched Candidates Section - 50% */}
            <div className="flex-1 flex flex-col">
              <BestMatchedCandidates 
                recommendedCandidates={recommendedCandidates}
                isLoading={isLoadingRecommended}
                onAskForInterview={onAskForInterview}
                onViewProfile={onViewMatchedProfile}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
