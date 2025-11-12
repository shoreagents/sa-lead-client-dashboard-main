'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAdminAuth } from '@/lib/admin-auth-context'
import { AdminGuard } from '@/components/auth/AdminGuard'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  History,
  Search,
  User,
  Calendar,
  Clock,
  Activity,
  Filter,
} from 'lucide-react'

interface ActivityLog {
  id: string
  user_id: string
  user_name: string
  action: string
  entity_type: string
  entity_id: string
  details: string
  ip_address?: string
  user_agent?: string
  created_at: string
}

export default function UserActivityPage() {
  const router = useRouter()
  const { isAdmin } = useAdminAuth()

  const [activities, setActivities] = useState<ActivityLog[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [actionFilter, setActionFilter] = useState('all')
  const [userFilter, setUserFilter] = useState('all')

  // Mock data for now - in real app, fetch from API
  useEffect(() => {
    if (isAdmin) {
      setLoading(true)
      // Simulate API call
      setTimeout(() => {
        setActivities([
          {
            id: '1',
            user_id: 'user_123',
            user_name: 'John Doe',
            action: 'created',
            entity_type: 'user',
            entity_id: 'user_456',
            details: 'Created new user account',
            ip_address: '192.168.1.1',
            created_at: new Date().toISOString(),
          },
          {
            id: '2',
            user_id: 'user_123',
            user_name: 'John Doe',
            action: 'updated',
            entity_type: 'lead',
            entity_id: 'lead_789',
            details: 'Updated lead status',
            ip_address: '192.168.1.1',
            created_at: new Date(Date.now() - 3600000).toISOString(),
          },
        ])
        setLoading(false)
      }, 1000)
    }
  }, [isAdmin])

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch =
      !searchQuery ||
      activity.user_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.details.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesAction = actionFilter === 'all' || activity.action === actionFilter
    const matchesUser = userFilter === 'all' || activity.user_id === userFilter

    return matchesSearch && matchesAction && matchesUser
  })

  const getActionBadge = (action: string) => {
    const variants: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
      created: 'default',
      updated: 'secondary',
      deleted: 'destructive',
      viewed: 'outline',
    }

    return <Badge variant={variants[action] || 'default'}>{action}</Badge>
  }

  if (!isAdmin) {
    return null
  }

  return (
    <AdminGuard>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-20">
            <div className="w-full">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900">User Activity History</h1>
                <p className="text-gray-600 mt-1">
                  Track all user actions and system events
                </p>
              </div>

              {/* Filters */}
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          placeholder="Search activities..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <Select value={actionFilter} onValueChange={setActionFilter}>
                      <SelectTrigger className="w-[180px]">
                        <Filter className="w-4 h-4 mr-2" />
                        <SelectValue placeholder="Filter by action" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Actions</SelectItem>
                        <SelectItem value="created">Created</SelectItem>
                        <SelectItem value="updated">Updated</SelectItem>
                        <SelectItem value="deleted">Deleted</SelectItem>
                        <SelectItem value="viewed">Viewed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Activity Table */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <History className="w-5 h-5 text-lime-600" />
                    Activity Logs ({filteredActivities.length})
                  </CardTitle>
                  <CardDescription>
                    Complete history of user actions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="space-y-4 py-4">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex items-center space-x-4 p-4 border rounded-lg">
                          <Skeleton className="h-10 w-10 rounded-full" />
                          <div className="space-y-2 flex-1">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                          </div>
                          <Skeleton className="h-6 w-24" />
                        </div>
                      ))}
                    </div>
                  ) : filteredActivities.length === 0 ? (
                    <div className="text-center py-12">
                      <Activity className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p className="text-gray-500">No activities found</p>
                    </div>
                  ) : (
                    <div className="border rounded-lg overflow-hidden">
                      <Table>
                        <TableHeader className="bg-lime-50">
                          <TableRow>
                            <TableHead>User</TableHead>
                            <TableHead>Action</TableHead>
                            <TableHead>Entity</TableHead>
                            <TableHead>Details</TableHead>
                            <TableHead>IP Address</TableHead>
                            <TableHead>Timestamp</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredActivities.map((activity) => (
                            <TableRow key={activity.id}>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <User className="w-4 h-4 text-gray-400" />
                                  <div>
                                    <div className="font-medium">{activity.user_name}</div>
                                    <div className="text-xs text-gray-500">
                                      {activity.user_id}
                                    </div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>{getActionBadge(activity.action)}</TableCell>
                              <TableCell>
                                <Badge variant="outline">
                                  {activity.entity_type}: {activity.entity_id}
                                </Badge>
                              </TableCell>
                              <TableCell className="max-w-md">
                                <div className="truncate">{activity.details}</div>
                              </TableCell>
                              <TableCell>
                                <span className="text-sm text-gray-600">
                                  {activity.ip_address || '—'}
                                </span>
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <Clock className="w-4 h-4" />
                                  {new Date(activity.created_at).toLocaleString()}
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </AdminGuard>
  )
}

