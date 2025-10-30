"use client"

import { UserGuard } from '@/components/auth/UserGuard'
import { UserDashboardSidebar } from '@/components/layout/UserDashboardSidebar'
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { useUserAuth } from '@/lib/user-auth-context'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Briefcase, 
  Search, 
  Plus,
  Calendar,
  MapPin,
  DollarSign,
  Users,
  Clock,
  Edit,
  Trash2,
  Eye,
  Loader2,
  Building2
} from 'lucide-react'
import { useState } from 'react'
import { useJobs } from '@/hooks/use-api'
import { useRouter } from 'next/navigation'

export default function JobsPage() {
  const { user } = useUserAuth()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')

  // Fetch jobs using TanStack Query
  const { data: jobs = [], isLoading, error } = useJobs(user?.user_id || null)

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.industry.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === 'all' || job.status.toLowerCase() === selectedStatus
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-lime-100 text-lime-800 border-lime-300'
      case 'Closed':
        return 'bg-gray-100 text-gray-800 border-gray-300'
      case 'Draft':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  const getExperienceLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'entry':
        return 'bg-lime-50 text-lime-700 border-lime-200'
      case 'intermediate':
        return 'bg-lime-100 text-lime-800 border-lime-300'
      case 'advanced':
        return 'bg-lime-200 text-lime-900 border-lime-400'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  const handleCreateJob = () => {
    router.push('/pricing')
  }

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
                  placeholder="Search jobs by title or company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={selectedStatus === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedStatus('all')}
                  className={selectedStatus === 'all' ? 'bg-lime-600 hover:bg-lime-700' : ''}
                >
                  All
                </Button>
                <Button
                  variant={selectedStatus === 'active' ? 'default' : 'outline'}
                  onClick={() => setSelectedStatus('active')}
                  className={selectedStatus === 'active' ? 'bg-lime-600 hover:bg-lime-700' : ''}
                >
                  Active
                </Button>
                <Button
                  variant={selectedStatus === 'closed' ? 'default' : 'outline'}
                  onClick={() => setSelectedStatus('closed')}
                  className={selectedStatus === 'closed' ? 'bg-lime-600 hover:bg-lime-700' : ''}
                >
                  Closed
                </Button>
              </div>
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-lime-600" />
                <span className="ml-3 text-muted-foreground">Loading jobs...</span>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="text-center py-12">
                <div className="text-lime-600 mb-2">Failed to load jobs</div>
                <p className="text-sm text-muted-foreground">{error.message}</p>
              </div>
            )}

            {/* Jobs List - 3 Column Responsive Grid */}
            {!isLoading && !error && (
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredJobs.map((job) => (
                  <Card key={job.id} className="hover:shadow-md transition-shadow h-fit">
                    <CardHeader className="pb-3">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg leading-tight">{job.title}</CardTitle>
                          <Badge className={getStatusColor(job.status)}>
                            {job.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Building2 className="w-3 h-3" />
                            {job.industry}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {job.workspaceType}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm font-semibold text-lime-700">
                          <DollarSign className="w-3 h-3" />
                          {job.salary}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3 pt-0">
                      <p className="text-sm text-muted-foreground line-clamp-3">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="secondary" className="text-xs bg-lime-50 text-lime-700 border-lime-200">
                          {job.experienceLevel}
                        </Badge>
                        {job.rolesCount > 1 && (
                          <Badge variant="secondary" className="text-xs bg-lime-50 text-lime-700 border-lime-200">
                            {job.rolesCount} positions
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {job.applicants}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(job.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="flex-1 h-8 text-xs"
                          onClick={() => router.push(`/user-dashboard/jobs/${job.id}`)}
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          View
                        </Button>
                        <Button 
                          size="sm" 
                          className="flex-1 h-8 text-xs bg-lime-600 hover:bg-lime-700"
                          onClick={() => router.push(`/user-dashboard/quotation`)}
                        >
                          Quote
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* No Results */}
            {!isLoading && !error && filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No jobs found</h3>
                <p className="text-muted-foreground mb-4">
                  {searchTerm || selectedStatus !== 'all' 
                    ? 'Try adjusting your search terms or filters'
                    : 'Create a pricing quote to generate job postings automatically'
                  }
                </p>
                <div className="flex gap-2 justify-center">
                  {searchTerm || selectedStatus !== 'all' ? (
                    <Button 
                      onClick={() => {
                        setSearchTerm('')
                        setSelectedStatus('all')
                      }}
                      className="bg-lime-600 hover:bg-lime-700"
                    >
                      Clear Filters
                    </Button>
                  ) : (
                    <Button 
                      onClick={handleCreateJob}
                      className="bg-lime-600 hover:bg-lime-700"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Create Your First Quote
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </UserGuard>
  )
}


