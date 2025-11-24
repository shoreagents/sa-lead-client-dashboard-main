"use client"

import { UserGuard } from '@/components/auth/UserGuard'
import { UserDashboardSidebar } from '@/components/layout/UserDashboardSidebar'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { useUserAuth } from '@/lib/user-auth-context'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Users, 
  Search, 
  Filter,
  Star,
  Heart,
  MessageCircle,
  Eye,
  Download,
  MapPin,
  Calendar,
  Briefcase,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Award,
  Zap,
  Target,
  DollarSign,
  Clock,
  Lightbulb
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { getEmployeeCardData } from '@/lib/api'
import { EmployeeCardData } from '@/types/api'
import { useEmployeeCardData } from '@/hooks/use-api'
import { useCurrency } from '@/lib/currencyContext'
import { calculateCandidateMonthlyCost, formatCurrency } from '@/lib/fixedPricingService'

export default function CandidatesPage() {
  const { user } = useUserAuth()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [favorites, setFavorites] = useState<string[]>([])
  const [expandedCards, setExpandedCards] = useState<string[]>([])
  const { selectedCurrency } = useCurrency()
  
  // Use TanStack Query for data fetching - preserves all custom logic
  const { data: candidates = [], isLoading: loading, error } = useEmployeeCardData()

  const toggleExpand = (candidateId: string) => {
    setExpandedCards(prev => 
      prev.includes(candidateId) 
        ? prev.filter(id => id !== candidateId)
        : [...prev, candidateId]
    )
  }

  const handleFavorite = (candidateId: string) => {
    setFavorites(prev => 
      prev.includes(candidateId) 
        ? prev.filter(id => id !== candidateId)
        : [...prev, candidateId]
    )
  }

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.user.position.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'available' && candidate.user.work_status === 'Available') ||
                         (selectedFilter === 'favorites' && favorites.includes(candidate.user.id))
    return matchesSearch && matchesFilter
  })

  return (
    <UserGuard>
      <SidebarProvider className="h-full">
        <UserDashboardSidebar />
        <SidebarInset className="flex flex-col h-full">
          <div className="flex-1 overflow-auto">
            <div className="flex flex-col gap-4 p-4">
            {/* Header */}
            <div className="grid gap-4">
              <div className="flex items-start justify-between">
              <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold tracking-tight">Premium Candidate Database</h2>
                    <Badge className="bg-lime-600 text-white">Full AI Insights</Badge>
                  </div>
                  <p className="text-muted-foreground mt-1">
                    Access detailed AI analysis, work preferences, and calculated monthly costs
                </p>
                </div>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search candidates by name or position..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={selectedFilter === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedFilter('all')}
                  className={selectedFilter === 'all' ? 'bg-lime-600 hover:bg-lime-700' : ''}
                >
                  All
                </Button>
                <Button
                  variant={selectedFilter === 'available' ? 'default' : 'outline'}
                  onClick={() => setSelectedFilter('available')}
                  className={selectedFilter === 'available' ? 'bg-lime-600 hover:bg-lime-700' : ''}
                >
                  Available
                </Button>
                <Button
                  variant={selectedFilter === 'favorites' ? 'default' : 'outline'}
                  onClick={() => setSelectedFilter('favorites')}
                  className={selectedFilter === 'favorites' ? 'bg-lime-600 hover:bg-lime-700' : ''}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Favorites
                </Button>
              </div>
            </div>

            {/* Error State */}
            {error && (
              <div className="text-center py-12">
                <p className="text-red-600 mb-4">Failed to load candidates. Please try again.</p>
                <Button onClick={() => window.location.reload()} variant="outline">
                  Retry
                </Button>
              </div>
            )}

            {/* Loading State */}
            {loading && (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full border-2 border-lime-600 border-t-transparent w-8 h-8" />
                <span className="ml-3 text-gray-600">Loading candidates...</span>
              </div>
            )}

            {/* Candidates Grid - Premium Enhanced Cards */}
            {!loading && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredCandidates.map((candidate) => {
                  const isExpanded = expandedCards.includes(candidate.user.id)
                  // Handle salary ranges like "80000 - 90000" by taking the average
                  const expectedSalaryPhp = candidate.workStatus?.expectedSalary 
                    ? (() => {
                        const salaryStr = candidate.workStatus.expectedSalary.toString();
                        if (salaryStr.includes('-')) {
                          const parts = salaryStr.split('-').map(p => p.trim());
                          const min = parseFloat(parts[0].replace(/[^\d.]/g, ''));
                          const max = parseFloat(parts[1]?.replace(/[^\d.]/g, '') || min);
                          return (min + max) / 2;
                        }
                        return parseFloat(salaryStr.replace(/[^\d.]/g, ''));
                      })()
                    : 0
                  
                  // Calculate client monthly cost using the pricing formula
                  const clientMonthlyCost = expectedSalaryPhp > 0 
                    ? calculateCandidateMonthlyCost(
                        expectedSalaryPhp,
                        'mid', // Default to mid-level
                        'wfh', // Default workspace (work from home)
                        selectedCurrency.code
                      )
                    : 0

                  return (
                    <Card 
                      key={candidate.user.id} 
                      className="hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden border-2 cursor-pointer group"
                      onClick={(e) => {
                        // Don't navigate if clicking on buttons or interactive elements
                        const target = e.target as HTMLElement
                        if (!target.closest('button')) {
                          window.location.href = `/user-dashboard/candidates/${candidate.user.id}`
                        }
                      }}
                    >
                      {/* Header Section */}
                      <CardHeader className="pb-4 bg-gradient-to-r from-lime-50 to-green-50 border-b group-hover:from-lime-100 group-hover:to-green-100 transition-colors">
                        <div className="flex items-start gap-4">
                          {/* Avatar */}
                          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0 border-2 border-lime-200">
                          {candidate.user.avatar ? (
                            <img 
                              src={candidate.user.avatar} 
                              alt={candidate.user.name}
                                className="w-20 h-20 rounded-full object-cover"
                            />
                          ) : (
                              <Users className="w-10 h-10 text-lime-600" />
                          )}
                        </div>
                        
                          {/* Name, Position, and Quick Stats */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1 min-w-0">
                                <CardTitle className="text-lg font-bold text-gray-900 truncate">
                                  {candidate.user.name}
                                </CardTitle>
                                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                  {candidate.user.position}
                                </p>
                        </div>
                        
                        {/* Favorite Button */}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFavorite(candidate.user.id)}
                                className="p-2 h-8 w-8 flex-shrink-0"
                        >
                          <Heart 
                                  className={`w-4 h-4 ${
                              favorites.includes(candidate.user.id) 
                                ? 'text-red-500 fill-current' 
                                : 'text-gray-400'
                            }`} 
                          />
                        </Button>
                      </div>
                    
                            {/* Location & Work Status */}
                            <div className="flex items-center gap-3 mt-2 text-xs text-gray-600">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                <span>{candidate.user.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className={`w-2 h-2 rounded-full ${
                                  candidate.user.work_status === 'Available' ? 'bg-green-500' : 
                                  candidate.user.work_status === 'Busy' ? 'bg-yellow-500' : 'bg-gray-500'
                                }`} />
                                <span>{candidate.user.work_status || 'Unknown'}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* AI Score Breakdown - Always Visible */}
                      {candidate.aiAnalysis && (
                          <div className="mt-4 p-3 bg-white rounded-lg shadow-sm">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Award className="w-4 h-4 text-yellow-500" />
                                <span className="text-sm font-semibold text-gray-900">AI Analysis Score</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                                <span className="text-lg font-bold text-gray-900">
                                  {candidate.aiAnalysis.overall_score.toFixed(1)}
                                </span>
                                <span className="text-xs text-gray-500">/100</span>
                              </div>
                            </div>
                            
                            {/* Mini Score Breakdown */}
                            <div className="grid grid-cols-2 gap-2 mt-2">
                              <div className="flex items-center justify-between text-xs">
                                <span className="text-gray-600">ATS Score</span>
                                <span className="font-semibold text-gray-900">
                                  {candidate.aiAnalysis.ats_compatibility_score.toFixed(0)}
                                </span>
                              </div>
                              <div className="flex items-center justify-between text-xs">
                                <span className="text-gray-600">Content</span>
                                <span className="font-semibold text-gray-900">
                                  {candidate.aiAnalysis.content_quality_score.toFixed(0)}
                                </span>
                              </div>
                              <div className="flex items-center justify-between text-xs">
                                <span className="text-gray-600">Presentation</span>
                                <span className="font-semibold text-gray-900">
                                  {candidate.aiAnalysis.professional_presentation_score.toFixed(0)}
                                </span>
                              </div>
                              <div className="flex items-center justify-between text-xs">
                                <span className="text-gray-600">Skills</span>
                                <span className="font-semibold text-gray-900">
                                  {candidate.aiAnalysis.skills_alignment_score.toFixed(0)}
                                </span>
                              </div>
                            </div>
                        </div>
                      )}

                        {/* Expected Cost - Prominent Display */}
                        {clientMonthlyCost > 0 && (
                          <div className="mt-3 p-3 bg-lime-600 text-white rounded-lg">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <DollarSign className="w-4 h-4" />
                                <span className="text-sm font-medium">Expected Monthly Cost</span>
                      </div>
                              <span className="text-xl font-bold">
                                {formatCurrency(clientMonthlyCost, selectedCurrency.code)}
                        </span>
                      </div>
                          </div>
                        )}
                      </CardHeader>

                      {/* Content Section */}
                      <CardContent className="flex-1 flex flex-col p-4">
                        {/* Key Strengths - Always Visible */}
                      {candidate.aiAnalysis?.key_strengths && candidate.aiAnalysis.key_strengths.length > 0 && (
                          <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Zap className="w-4 h-4 text-lime-600" />
                              <span className="text-sm font-semibold text-gray-900">Key Strengths</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {candidate.aiAnalysis.key_strengths.slice(0, isExpanded ? undefined : 4).map((strength, index) => (
                                <Badge key={index} variant="secondary" className="text-xs bg-lime-100 text-lime-800 border-lime-200">
                                  {strength}
                            </Badge>
                          ))}
                              {!isExpanded && candidate.aiAnalysis.key_strengths.length > 4 && (
                                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                                  +{candidate.aiAnalysis.key_strengths.length - 4} more
                            </Badge>
                          )}
                            </div>
                        </div>
                      )}

                      {/* Bio Preview */}
                      {candidate.user.bio && (
                          <div className="mb-4">
                            <p className={`text-sm text-gray-700 ${isExpanded ? '' : 'line-clamp-2'}`}>
                          {candidate.user.bio}
                        </p>
                          </div>
                        )}

                        {/* Expanded Details */}
                        {isExpanded && (
                          <div className="space-y-4 pt-4 border-t">
                            {/* AI Recommendations */}
                            {candidate.aiAnalysis?.recommendations && candidate.aiAnalysis.recommendations.length > 0 && (
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <Lightbulb className="w-4 h-4 text-blue-600" />
                                  <span className="text-sm font-semibold text-gray-900">AI Recommendations</span>
                                </div>
                                <ul className="space-y-1">
                                  {candidate.aiAnalysis.recommendations.map((rec, index) => (
                                    <li key={index} className="text-xs text-gray-700 flex items-start gap-2">
                                      <span className="text-blue-500 mt-0.5">•</span>
                                      <span>{rec}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Work Preferences */}
                            {candidate.workStatus && (
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <Clock className="w-4 h-4 text-gray-600" />
                                  <span className="text-sm font-semibold text-gray-900">Work Preferences</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-xs">
                                  {candidate.workStatus.preferredShift && (
                                    <div>
                                      <span className="text-gray-600">Shift: </span>
                                      <span className="font-medium text-gray-900">{candidate.workStatus.preferredShift}</span>
                                    </div>
                                  )}
                                  {candidate.workStatus.workSetup && (
                                    <div>
                                      <span className="text-gray-600">Setup: </span>
                                      <span className="font-medium text-gray-900">{candidate.workStatus.workSetup}</span>
                                    </div>
                                  )}
                                  {candidate.workStatus.noticePeriodDays && (
                                    <div>
                                      <span className="text-gray-600">Notice: </span>
                                      <span className="font-medium text-gray-900">{candidate.workStatus.noticePeriodDays} days</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                      )}

                      {/* Actions - Fixed at bottom */}
                        <div className="flex flex-col gap-2 pt-4 mt-auto">
                          {/* Expand/Collapse Button */}
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => toggleExpand(candidate.user.id)}
                            className="w-full text-xs h-9 border-lime-200 hover:bg-lime-50"
                          >
                            {isExpanded ? (
                              <>
                                <ChevronUp className="w-4 h-4 mr-1" />
                                Show Less
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-4 h-4 mr-1" />
                                Show More Details
                              </>
                            )}
                          </Button>

                          <div className="grid grid-cols-2 gap-2">
                        <Button 
                          size="sm" 
                              className="bg-lime-600 hover:bg-lime-700 text-white text-xs h-9"
                              onClick={() => window.location.href = `/user-dashboard/candidates/${candidate.user.id}`}
                        >
                          <Eye className="w-3 h-3 mr-1" />
                              View Details
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                              className="text-xs h-9 border-lime-200 hover:bg-lime-50"
                        >
                          <MessageCircle className="w-3 h-3 mr-1" />
                          Contact
                        </Button>
                          </div>
                      </div>
                    </CardContent>
                  </Card>
                  )
                })}
              </div>
            )}

            {/* No Results */}
            {!loading && filteredCandidates.length === 0 && (
              <div className="text-center py-12">
                <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No candidates found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search terms or filters
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedFilter('all')
                  }}
                  className="bg-lime-600 hover:bg-lime-700"
                >
                  Clear Filters
                </Button>
              </div>
            )}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </UserGuard>
  )
}
