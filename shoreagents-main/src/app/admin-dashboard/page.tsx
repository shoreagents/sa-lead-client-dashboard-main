'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAdminAuth } from '@/lib/admin-auth-context'
import { AdminGuard } from '@/components/auth/AdminGuard'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { 
  Users, 
  Eye, 
  Clock, 
  TrendingUp, 
  Database,
  Globe,
  Smartphone,
  Monitor,
  RefreshCw,
  CheckCircle,
  LogOut,
} from 'lucide-react'
import { ChartAreaInteractive } from '@/components/chart-area-interactive'
import { useDashboardMetrics, useDeviceStats, useTimeSeriesData, clearAllCaches } from '@/hooks/use-api'
import { useQueryClient } from '@tanstack/react-query'
import { NotificationsCenter } from '@/components/admin/NotificationsCenter'

interface PerformanceMetrics {
  pageViews: number
  uniqueVisitors: number
  avgLoadTime: number
  bounceRate: number
  conversionRate: number
  serverUptime: number
  apiResponseTime: number
  errorRate: number
}

interface DeviceStats {
  desktop: number
  mobile: number
  tablet: number
}

interface PagePerformance {
  path: string
  views: number
  avgLoadTime: number
  bounceRate: number
}

interface UserVisitData {
  userId: string
  visits: Array<{
    pageName: string
    visitCount: number
    timeSpent: number
    lastVisit: string
  }>
}

export default function AdminDashboard() {
  const router = useRouter()
  const { admin, loading, signOut, isAdmin } = useAdminAuth()
  const queryClient = useQueryClient()
  
  // Debug logging
  console.log('AdminDashboard - admin:', admin)
  console.log('AdminDashboard - loading:', loading)
  console.log('AdminDashboard - isAdmin:', isAdmin)
  
  // TanStack Query hooks - Automatically fetch and cache data
  const { 
    data: dashboardMetrics, 
    isLoading: isLoadingMetrics, 
    error: metricsError,
    refetch: refetchMetrics 
  } = useDashboardMetrics()
  
  const { 
    data: deviceStatsData, 
    isLoading: isLoadingDeviceStats, 
    error: deviceStatsError,
    refetch: refetchDeviceStats 
  } = useDeviceStats()
  
  const { 
    data: timeSeriesData, 
    isLoading: isLoadingTimeSeries, 
    error: timeSeriesError,
    refetch: refetchTimeSeries 
  } = useTimeSeriesData(90)
  
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())
  
  // Use TanStack Query data with proper defaults
  const realMetrics = dashboardMetrics || { totalPageViews: 0, uniqueIPs: 0, totalVisitors: 0 }
  const deviceStats = deviceStatsData || { desktop: 0, mobile: 0, tablet: 0 }
  const realTimeSeriesData = timeSeriesData || []
  
  // Combined loading and error states
  const isLoading = isLoadingMetrics || isLoadingDeviceStats || isLoadingTimeSeries
  const hasError = metricsError || deviceStatsError || timeSeriesError

  // Redirect to home if not admin
  useEffect(() => {
    if (!loading && !isAdmin) {
      router.push('/')
    }
  }, [loading, isAdmin, router])

  // Time-series data is now handled by TanStack Query via useTimeSeriesData hook

  const refreshData = async () => {
    // Trigger TanStack Query refetch for all data
    setLastUpdated(new Date())
    await Promise.all([
      refetchMetrics(),
      refetchDeviceStats(),
      refetchTimeSeries()
    ])
  }

  const handleLogout = async () => {
    // Use auth context logout
    await signOut()
    router.push('/')
  }

  const handleClearCache = () => {
    clearAllCaches(queryClient)
    // Refetch all data after clearing cache
    refreshData()
  }

  const getStatusColor = (value: number, type: 'uptime' | 'error' | 'performance') => {
    if (type === 'uptime') {
      return value >= 99.5 ? 'text-green-600' : value >= 95 ? 'text-yellow-600' : 'text-red-600'
    }
    if (type === 'error') {
      return value <= 1 ? 'text-green-600' : value <= 3 ? 'text-yellow-600' : 'text-red-600'
    }
    if (type === 'performance') {
      return value <= 1 ? 'text-green-600' : value <= 2 ? 'text-yellow-600' : 'text-red-600'
    }
    return 'text-gray-600'
  }




  // Removed loading state - show content immediately

  // Redirect to home if not admin
  if (!isAdmin) {
    return null // Will redirect via useEffect
  }

  return (
    <AdminGuard>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-22">
            <div className="w-full">

        {/* Loading State */}
        {isLoading && !dashboardMetrics && !deviceStatsData && !timeSeriesData && (
          <div className="grid grid-cols-4 grid-rows-4 gap-4 w-full">
            {/* Page Views and Unique Visitors Skeleton - Top left, 3 columns, 1 row */}
            <div className="col-span-3 row-span-1 grid grid-cols-2 gap-4">
              <Card className="border-l-4 border-l-lime-500 bg-gradient-to-t from-lime-50/50 to-white shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-4 rounded" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-8 w-24 mb-2" />
                  <Skeleton className="h-3 w-32" />
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-lime-500 bg-gradient-to-t from-lime-50/50 to-white shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-4 rounded" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-8 w-24 mb-2" />
                  <Skeleton className="h-3 w-32" />
                </CardContent>
              </Card>
            </div>
            
            {/* Notifications Skeleton - Right side, 2 columns, 3 rows */}
            <div className="col-span-2 row-span-3 h-full flex">
              <Card className="w-full">
                <CardHeader>
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-4 w-48" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                      <Skeleton key={i} className="h-20 w-full rounded-lg" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Chart Skeleton - Bottom left, 3 columns, 2 rows */}
            <div className="col-span-3 row-span-2">
              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-48 mb-2" />
                  <Skeleton className="h-4 w-32" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-full w-full min-h-[300px]" />
                </CardContent>
              </Card>
            </div>

            {/* System Health Skeleton - Bottom row, full width, 1 row */}
            <div className="col-span-5 row-span-1">
              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-32" />
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[...Array(4)].map((_, i) => (
                      <Skeleton key={i} className="h-16 w-full rounded-lg" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Error State */}
        {hasError && !isLoading && (
          <div className="text-center py-12 bg-red-50 rounded-lg border border-red-200">
            <div className="text-red-600 font-semibold mb-2">Failed to load dashboard data</div>
            <p className="text-sm text-red-500 mb-4">
              {(metricsError || deviceStatsError || timeSeriesError)?.message || 'Unknown error occurred'}
            </p>
            <Button 
              onClick={refreshData}
              className="bg-lime-600 hover:bg-lime-700"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </div>
        )}


          {/* Dashboard Content - Only show when data is available */}
          {(!isLoading || dashboardMetrics || deviceStatsData || timeSeriesData) && !hasError && (
          <>
          {/* Grid Layout: 5 columns, 7 rows */}
          <div className="grid grid-cols-4 grid-rows-4 gap-4 w-full">
            {/* Page Views and Unique Visitors Cards - Top left, 3 columns, 2 rows */}
            <div className="col-span-3 row-span-1 grid grid-cols-2 gap-4">
              <Card className="border-l-4 border-l-lime-500 bg-gradient-to-t from-lime-50/50 to-white shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Page Views</CardTitle>
                  <Eye className="h-4 w-4 text-lime-600" />
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <Skeleton className="h-8 w-24 mb-2" />
                  ) : (
                    <div className="text-2xl font-bold text-lime-600 tabular-nums">
                      {realMetrics.totalPageViews.toLocaleString()}
                    </div>
                  )}
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-lime-600 border-lime-200">
                      <Database className="w-3 h-3 mr-1" />
                      Live Data
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Total from database
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-lime-500 bg-gradient-to-t from-lime-50/50 to-white shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
                  <Users className="h-4 w-4 text-lime-600" />
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <Skeleton className="h-8 w-24 mb-2" />
                  ) : (
                    <div className="text-2xl font-bold text-lime-600 tabular-nums">
                      {realMetrics.uniqueIPs.toLocaleString()}
                    </div>
                  )}
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-lime-600 border-lime-200">
                      <Globe className="w-3 h-3 mr-1" />
                      Anonymous IPs
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Unique IP addresses
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Notifications - Right side, 2 columns, 6 rows (extends from top to bottom) */}
            <div className="col-span-2 row-span-3 h-full flex">
              <NotificationsCenter />
            </div>

            {/* Chart - Bottom left, 3 columns, 4 rows */}
            <div className="col-span-3 row-span-2">
              <ChartAreaInteractive 
                totalVisitors={realMetrics.totalVisitors}
                uniqueVisitors={realMetrics.uniqueIPs}
                realTimeSeriesData={realTimeSeriesData}
              />
            </div>

            {/* System Health - Bottom row, full width, 1 row (row 7) */}
            <div className="col-span-5 row-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-lime-600" />
                    System Health
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <span className="text-sm font-medium">Database Status</span>
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Healthy
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <span className="text-sm font-medium">API Status</span>
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Operational
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <span className="text-sm font-medium">CDN Status</span>
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Active
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <span className="text-sm font-medium">SSL Certificate</span>
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Valid
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </>
         )}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </AdminGuard>
  )
}
