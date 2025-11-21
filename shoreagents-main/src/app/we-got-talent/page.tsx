'use client';

import { useState, useCallback, useMemo } from 'react';
import { TalentCard } from '@/components/ui/talent-card';
import { ResumeModal } from '@/components/ui/resume-modal';
import { InterviewRequestModal, InterviewRequestData } from '@/components/ui/interview-request-modal';
import { SideNav } from '@/components/layout/SideNav';
import { EmployeeCardData, ResumeGenerated } from '@/types/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/lib/toast-context';
import { useFavorites } from '@/lib/favorites-context';
import { useEmployeeCardData } from '@/hooks/use-api';
import {
  Search,
  Users,
  RefreshCw,
  Heart,
  Sparkles,
  Filter,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export default function EmployeesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const { favorites } = useFavorites();
  const [selectedResume, setSelectedResume] = useState<ResumeGenerated | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<EmployeeCardData | null>(null);
  const { showToast } = useToast();
  
  const { data: employees = [], error, refetch } = useEmployeeCardData();

  const handleInterviewSubmit = async (data: InterviewRequestData) => {
    try {
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

  const filteredEmployees = useMemo(() => {
    if (!Array.isArray(employees)) return [];
    
    let filtered = employees;

    if (searchTerm) {
      filtered = filtered.filter(employee =>
        employee.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.user?.position?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.user?.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (employee.workStatus?.currentEmployer?.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (employee.workStatus?.currentPosition?.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (showFavoritesOnly) {
      filtered = filtered.filter(employee => employee.user?.id && favorites.has(employee.user.id));
    }

    return filtered.sort((a, b) => {
      const getScore = (employee: EmployeeCardData) => {
        if (employee.aiAnalysis?.overall_score) return employee.aiAnalysis.overall_score;
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
      return getScore(b) - getScore(a);
    });
  }, [employees, searchTerm, favorites, showFavoritesOnly]);

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8 bg-white rounded-3xl shadow-xl">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
             <Users className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Connection Issue</h3>
          <p className="text-slate-500 mb-6">Failed to load our talent pool. Please try refreshing.</p>
          <Button onClick={handleRefresh} className="w-full bg-slate-900 text-white hover:bg-slate-800 rounded-xl">
            <RefreshCw className="w-4 h-4 mr-2" /> Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-lime-200 selection:text-lime-900">
      <SideNav />
      
      {/* --- Header Section --- */}
      <div className="bg-white border-b border-slate-100 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 mb-4"
              >
                <Badge className="bg-lime-50 text-lime-700 border-lime-200 hover:bg-lime-100 px-3 py-1 rounded-full uppercase tracking-wider font-bold text-xs">
                  <Sparkles className="w-3 h-3 mr-1" /> Live Database
                </Badge>
                <span className="text-sm text-slate-400 font-medium">{filteredEmployees.length} Candidates Available</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4"
              >
                We Got <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-lime-700">Talent.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-500 leading-relaxed"
              >
                Browse our pre-vetted pool of professionals. No sign-up required to view profiles.
              </motion.p>
            </div>

            <div className="flex gap-3">
               <Button 
                 onClick={handleRefresh} 
                 variant="outline" 
                 className="border-slate-200 text-slate-600 hover:bg-slate-50 rounded-xl h-12 px-4"
                 title="Refresh List"
               >
                 <RefreshCw className="w-5 h-5" />
               </Button>
            </div>
          </div>

          {/* --- Search Bar --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-50 p-2 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-2"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by role (e.g. 'Accountant', 'Virtual Assistant')..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 bg-white border-transparent focus:border-lime-500 focus:ring-0 rounded-xl text-lg shadow-sm placeholder:text-slate-400"
              />
            </div>
            
            <Button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              variant={showFavoritesOnly ? "default" : "outline"}
              className={`h-14 px-6 rounded-xl border-0 shadow-sm font-semibold transition-all ${
                showFavoritesOnly 
                  ? 'bg-red-500 hover:bg-red-600 text-white' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-red-500'
              }`}
            >
              <Heart className={`w-5 h-5 mr-2 ${showFavoritesOnly ? 'fill-current' : ''}`} />
              {showFavoritesOnly ? 'Show All' : `Favorites (${favorites.size})`}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* --- Grid Content --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredEmployees.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-24 bg-white rounded-[3rem] border border-slate-100 shadow-sm"
          >
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">No candidates found</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              We couldn't find anyone matching "{searchTerm}". Try a broader search term or view all candidates.
            </p>
            <Button 
              onClick={() => { setSearchTerm(''); setShowFavoritesOnly(false); }}
              variant="link" 
              className="mt-6 text-lime-600 font-bold"
            >
              Clear Filters
            </Button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredEmployees.map((employee, index) => (
                <motion.div
                  key={employee.user.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <TalentCard
                    data={employee}
                    onAskForInterview={() => {
                      console.log('Interview requested for:', employee.user.name);
                      setSelectedCandidate(employee);
                      setIsInterviewModalOpen(true);
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Modals */}
      <ResumeModal
        resume={selectedResume}
        isOpen={isResumeModalOpen}
        onClose={() => {
          setIsResumeModalOpen(false);
          setSelectedResume(null);
        }}
      />

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
