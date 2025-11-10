'use client';

import { useState, useEffect, useCallback, useMemo, Suspense, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { TalentCard } from '@/components/ui/talent-card';
import { ResumeModal } from '@/components/ui/resume-modal';
import { InterviewRequestModal, InterviewRequestData } from '@/components/ui/interview-request-modal';
import { SideNav } from '@/components/layout/SideNav';
import { FullPageLoader } from '@/components/ui/full-page-loader';
import { EmployeeCardData, ResumeGenerated } from '@/types/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/lib/toast-context';
// import { useEngagementTracking } from '@/lib/useEngagementTracking';
import { useFavorites } from '@/lib/favorites-context';
import { useEmployeeCardData } from '@/hooks/use-api';
// import { ButtonLoader } from '@/components/ui/loader'; // Removed - will be recreated later
import {
  Search,
  Users,
  RefreshCw,
  Heart
} from 'lucide-react';

function EmployeesPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const hasRefreshedRef = useRef<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const [selectedResume, setSelectedResume] = useState<ResumeGenerated | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<EmployeeCardData | null>(null);
  const { showToast } = useToast();
  // const { recordInteraction } = useEngagementTracking();
  
  // Use TanStack Query to fetch employee data
  const { data: employees = [], isLoading, error, refetch } = useEmployeeCardData();
  
  // Loading progress state for full-page loader
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const loadingStartTimeRef = useRef<number | null>(null);
  const minimumDelayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dataLoadedRef = useRef(false);

  // Simulate loading progress when isLoading is true
  useEffect(() => {
    if (isLoading) {
      // Start showing loader and track start time
      setShowLoader(true);
      loadingStartTimeRef.current = Date.now();
      dataLoadedRef.current = false;
      setLoadingProgress(0);
      
      // Simulate progress from 0 to 95% gradually while loading
      progressIntervalRef.current = setInterval(() => {
        setLoadingProgress((prev) => {
          // If data has loaded, allow progress to 100%
          if (dataLoadedRef.current) {
            if (prev >= 100) {
              return 100;
            }
            // Smoothly continue from current progress to 100%
            return Math.min(prev + 1.5, 100);
          }
          // While loading, progress from 0 to 95%
          if (prev >= 95) {
            return 95; // Hold at 95% until data loads
          }
          // Faster progress at the beginning, slower as we approach 95%
          const increment = prev < 30 ? 6 : prev < 60 ? 3 : prev < 85 ? 1.5 : 0.8;
          return Math.min(prev + increment, 95);
        });
      }, 100); // Update every 100ms
    } else {
      // Data has finished loading
      dataLoadedRef.current = true;
      
      // Calculate elapsed time
      const elapsedTime = loadingStartTimeRef.current 
        ? Date.now() - loadingStartTimeRef.current 
        : 0;
      const remainingTime = Math.max(0, 2000 - elapsedTime); // 2 seconds minimum
      
      // Continue progress animation to 100% smoothly
      const finalProgressInterval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(finalProgressInterval);
            return 100;
          }
          // Smoothly animate to 100%
          return Math.min(prev + 2, 100);
        });
      }, 50);
      
      // Clear the original interval
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
      
      // Wait for remaining time to ensure minimum 2 seconds, then hide loader
      minimumDelayTimeoutRef.current = setTimeout(() => {
        clearInterval(finalProgressInterval);
        setLoadingProgress(0);
        setShowLoader(false);
        loadingStartTimeRef.current = null;
        dataLoadedRef.current = false;
      }, remainingTime + 300); // Add 300ms for smooth transition
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      if (minimumDelayTimeoutRef.current) {
        clearTimeout(minimumDelayTimeoutRef.current);
      }
    };
  }, [isLoading]);

  // Refresh data when navigating back from employee profile page
  useEffect(() => {
    const refreshParam = searchParams.get('refresh');
    if (refreshParam && hasRefreshedRef.current !== refreshParam) {
      console.log('🔄 Refresh parameter detected, refetching data...', refreshParam);
      hasRefreshedRef.current = refreshParam;
      
      // Immediately refetch data when refresh parameter is present
      // Use a small delay to ensure page is fully loaded
      const timeoutId = setTimeout(() => {
        refetch().then(() => {
          console.log('✅ Data refreshed successfully');
          // Remove the refresh parameter from URL without page reload
          const url = new URL(window.location.href);
          url.searchParams.delete('refresh');
          window.history.replaceState({}, '', url.toString());
        }).catch((err) => {
          console.error('❌ Error refreshing employee data:', err);
          // Retry once after a delay if it fails
          setTimeout(() => {
            console.log('🔄 Retrying data refresh...');
            refetch();
          }, 500);
        });
      }, 150);
      
      return () => clearTimeout(timeoutId);
    }
  }, [searchParams, refetch]);

  // Track if this is the first mount to avoid unnecessary refreshes
  const isFirstMount = useRef(true);
  
  // Refresh when page becomes visible after being hidden (user navigated back)
  // This is a backup mechanism in case the refresh parameter doesn't work
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      // On first mount, check if we have a refresh parameter
      // If not, we might have navigated here directly, so don't refresh
      const refreshParam = searchParams.get('refresh');
      if (!refreshParam) {
        return;
      }
    }

    let wasHidden = false;
    let hideTime = 0;
    let lastRefreshTime = 0;
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        wasHidden = true;
        hideTime = Date.now();
      } else if (wasHidden && !document.hidden) {
        // Page became visible after being hidden
        const timeHidden = Date.now() - hideTime;
        const timeSinceLastRefresh = Date.now() - lastRefreshTime;
        
        // Only refresh if:
        // 1. Page was hidden for more than 300ms (indicates navigation)
        // 2. At least 1 second has passed since last refresh (prevent rapid refreshes)
        if (timeHidden > 300 && timeSinceLastRefresh > 1000) {
          console.log('🔄 Page became visible after navigation, refreshing data...', {
            timeHidden,
            timeSinceLastRefresh
          });
          lastRefreshTime = Date.now();
          refetch().catch((err) => {
            console.error('❌ Error refreshing on visibility change:', err);
          });
        }
        wasHidden = false;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [refetch, searchParams]);

  const handleInterviewSubmit = async (data: InterviewRequestData) => {
    try {
      // Here you would typically send the interview request to your backend
      console.log('Interview request submitted:', {
        candidateName: selectedCandidate?.user.name,
        candidateId: selectedCandidate?.user.id,
        ...data
      });
      
      showToast('Interview request submitted successfully!', 'success');
      setIsInterviewModalOpen(false);
      setSelectedCandidate(null);
    } catch (error) {
      console.error('Error submitting interview request:', error);
      showToast('Failed to submit interview request. Please try again.', 'error');
    }
  };

  const handleRefresh = useCallback(async () => {
    try {
      await refetch();
      showToast(`Refreshed ${employees.length} employees successfully`, 'success');
    } catch (err) {
      showToast('Failed to refresh employee data. Please try again.', 'error');
      console.error('Error refreshing employees:', err);
    }
  }, [refetch, employees.length, showToast]);

  // Use useMemo to compute filtered employees instead of useEffect + setState
  const filteredEmployees = useMemo(() => {
    // Safety check: ensure employees is an array
    if (!Array.isArray(employees)) {
      return [];
    }
    
    let filtered = employees;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(employee =>
        employee.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.user?.position?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.user?.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (employee.workStatus?.currentEmployer?.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (employee.workStatus?.currentPosition?.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply favorites filter
    if (showFavoritesOnly) {
      filtered = filtered.filter(employee => employee.user?.id && favorites.has(employee.user.id));
    }

    // Sort employees by score (highest to lowest)
    return filtered.sort((a, b) => {
      // Calculate scores for comparison
      const getScore = (employee: EmployeeCardData) => {
        // Use AI analysis score if available
        if (employee.aiAnalysis?.overall_score) {
          return employee.aiAnalysis.overall_score;
        }
        
        // Calculate score based on various factors
        let score = 0;
        if (employee.resume) score += 20;
        if (employee.aiAnalysis) score += 15;
        if (employee.workStatus) score += 25;
        if (employee.applications && Array.isArray(employee.applications) && employee.applications.length > 0) score += 10;
        if (employee.user?.position) score += 10;
        if (employee.user?.location) score += 10;
        if (employee.user?.avatar) score += 10;
        
        return Math.min(score, 100);
      };
      
      const scoreA = getScore(a);
      const scoreB = getScore(b);
      
      // Sort from highest to lowest
      return scoreB - scoreA;
    });
  }, [employees, searchTerm, favorites, showFavoritesOnly]);


  const handleViewResume = (resume: ResumeGenerated) => {
    // recordInteraction('view-resume');
    setSelectedResume(resume);
    setIsResumeModalOpen(true);
  };

  const toggleFavoritesView = () => {
    setShowFavoritesOnly(!showFavoritesOnly);
    // recordInteraction('toggle-favorites');
  };



  // Show full-page loader while loading (with minimum 2 second delay)
  if (isLoading || showLoader || loadingProgress > 0) {
    return (
      <>
        <FullPageLoader 
          isLoading={true} 
          progress={loadingProgress}
          message="Loading talent pool..."
        />
        {/* Render empty div to prevent layout shift */}
        <div className="min-h-screen bg-gray-50" />
      </>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <p className="text-red-600 mb-4">Failed to load employee data. Please try again.</p>
          <Button onClick={() => {
            // recordInteraction('refresh-employees');
            handleRefresh();
          }} variant="outline" className="flex items-center space-x-2">
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SideNav */}
      <SideNav />
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Our Talent Pool</h1>
              <p className="text-gray-600 mt-2">
                Discover qualified candidates ready to join your team
              </p>

            </div>
            <Button onClick={() => {
              // recordInteraction('refresh-employees');
              handleRefresh();
            }} variant="outline" className="flex items-center space-x-2">
              <RefreshCw className="w-4 h-4" />
              <span>Refresh</span>
            </Button>
          </div>


          {/* Search and Favorites */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
              <Input
                type="text"
                placeholder="Search by name, position, or location..."
                value={searchTerm}
                onChange={(e) => {
                  // recordInteraction('search-employees');
                  setSearchTerm(e.target.value);
                }}
                className="pl-10 focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
              />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={toggleFavoritesView}
                variant={showFavoritesOnly ? "default" : "outline"}
                className={`flex items-center space-x-2 ${
                  showFavoritesOnly 
                    ? 'bg-lime-600 hover:bg-lime-700 text-white' 
                    : 'hover:bg-lime-50 hover:border-lime-200 hover:text-lime-600'
                }`}
              >
                <Heart className={`w-4 h-4 ${showFavoritesOnly ? 'fill-current' : ''}`} />
                <span>Favorites ({favorites.size})</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Employee Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredEmployees.length === 0 ? (
          <div className="text-center py-12">
            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No candidates found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEmployees.map((employee, index) => (
              <TalentCard
                key={employee.user.id}
                data={employee}
                onAskForInterview={() => {
                  // Handle interview request for this candidate
                  // recordInteraction('interview-request')
                  console.log('Interview requested for:', employee.user.name);
                  setSelectedCandidate(employee);
                  setIsInterviewModalOpen(true);
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Resume Modal */}
      <ResumeModal
        resume={selectedResume}
        isOpen={isResumeModalOpen}
        onClose={() => {
          setIsResumeModalOpen(false);
          setSelectedResume(null);
        }}
      />

      {/* Interview Request Modal */}
      {selectedCandidate && (
        <InterviewRequestModal
          isOpen={isInterviewModalOpen}
          onClose={() => {
            setIsInterviewModalOpen(false);
            setSelectedCandidate(null);
          }}
          candidateName={selectedCandidate.user.name}
          candidatePosition={selectedCandidate.user.position || 'Position not specified'}
          candidateId={selectedCandidate.user.id}
          onSubmit={handleInterviewSubmit}
        />
      )}

    </div>
  );
}

export default function EmployeesPage() {
  return (
    <Suspense fallback={
      <FullPageLoader 
        isLoading={true} 
        progress={0}
        message="Loading talent pool..."
      />
    }>
      <EmployeesPageContent />
    </Suspense>
  );
}
