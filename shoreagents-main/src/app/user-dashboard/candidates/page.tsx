'use client'

import { UserGuard } from '@/components/auth/UserGuard'
import { UserDashboardSidebar } from '@/components/layout/UserDashboardSidebar'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { useUserAuth } from '@/lib/user-auth-context'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { 
  Users, 
  Search, 
  Heart,
  Eye,
  Star,
  MapPin,
  Briefcase
} from 'lucide-react'
import { useState } from 'react'
import { useEmployeeCardData } from '@/hooks/use-api'

export default function CandidatesPage() {
  const { user } = useUserAuth()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [favorites, setFavorites] = useState<string[]>([])
  
  const { data: candidates = [], loading } = useEmployeeCardData()

  const toggleFavorite = (candidateId: string) => {
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
      <SidebarProvider>
        <UserDashboardSidebar />
        <SidebarInset>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-20">

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
                  size="sm"
                >
                  All
                </Button>
                <Button
                  variant={selectedFilter === 'available' ? 'default' : 'outline'}
                  onClick={() => setSelectedFilter('available')}
                  size="sm"
                >
                  Available
                </Button>
                <Button
                  variant={selectedFilter === 'favorites' ? 'default' : 'outline'}
                  onClick={() => setSelectedFilter('favorites')}
                  size="sm"
                >
                  <Heart className="w-4 h-4 mr-1" />
                  Favorites
                </Button>
              </div>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Skeleton className="h-16 w-16 rounded-full" />
                        <div className="space-y-2 flex-1">
                          <Skeleton className="h-4 w-3/4" />
                          <Skeleton className="h-3 w-1/2" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                      <div className="flex gap-2">
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-16" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Candidates Grid */}
            {!loading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCandidates.map((candidate) => (
                  <Card key={candidate.user.id} className="hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden">
                    <CardHeader className="pb-3 text-center relative">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center shadow-sm">
                          {candidate.user.avatar ? (
                            <img 
                              src={candidate.user.avatar} 
                              alt={candidate.user.name}
                              className="w-16 h-16 rounded-full object-cover"
                            />
                          ) : (
                            <Users className="w-8 h-8 text-lime-600" />
                          )}
                        </div>
                        
                        <div className="text-center">
                          <h3 className="font-semibold text-gray-900 text-sm">{candidate.user.name}</h3>
                          <p className="text-xs text-gray-600 truncate w-full">{candidate.user.position}</p>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFavorite(candidate.user.id)}
                          className={`absolute top-2 right-2 p-1 h-8 w-8 ${
                            favorites.includes(candidate.user.id) 
                              ? 'text-red-500 hover:text-red-600' 
                              : 'text-gray-400 hover:text-red-500'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${favorites.includes(candidate.user.id) ? 'fill-current' : ''}`} />
                        </Button>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex-1 flex flex-col space-y-2 px-3 pb-3 min-h-0">
                      {candidate.aiAnalysis && (
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">AI Score:</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span className="font-medium text-gray-900">{candidate.aiAnalysis.overallScore}/10</span>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <MapPin className="w-3 h-3" />
                        <span className="truncate">{candidate.user.location || 'Location not specified'}</span>
                      </div>
                      
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <Briefcase className="w-3 h-3" />
                        <span>{candidate.user.experience || 'Experience not specified'}</span>
                      </div>
                      
                      {candidate.user.skills && candidate.user.skills.length > 0 && (
                        <div className="space-y-1">
                          <div className="text-xs text-gray-600">Skills:</div>
                          <div className="flex flex-wrap gap-1">
                            {candidate.user.skills.slice(0, 3).map((skill, index) => (
                              <Badge key={index} variant="secondary" className="text-xs px-2 py-0.5">
                                {skill}
                              </Badge>
                            ))}
                            {candidate.user.skills.length > 3 && (
                              <Badge variant="outline" className="text-xs px-2 py-0.5">
                                +{candidate.user.skills.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex gap-2 mt-auto pt-2">
                        <Button 
                          size="sm" 
                          className="flex-1 bg-lime-600 hover:bg-lime-700 text-white"
                          onClick={() => window.open(`/employee/${candidate.user.id}`, '_blank')}
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          View
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
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
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </UserGuard>
  )
}
