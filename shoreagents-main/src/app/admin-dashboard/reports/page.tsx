'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAdminAuth } from '@/lib/admin-auth-context'
import { AdminGuard } from '@/components/auth/AdminGuard'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import {
  BarChart3,
  Download,
  FileText,
  Calendar,
  Users,
  TrendingUp,
  Filter,
} from 'lucide-react'
import { toast } from 'sonner'

export default function ReportsPage() {
  const router = useRouter()
  const { isAdmin } = useAdminAuth()

  const [reportType, setReportType] = useState('users')
  const [dateRange, setDateRange] = useState('30')
  const [format, setFormat] = useState('pdf')
  const [includeCharts, setIncludeCharts] = useState(true)
  const [includeDetails, setIncludeDetails] = useState(true)

  const handleGenerateReport = async () => {
    try {
      toast.info('Generating report...')
      // In a real implementation, this would call an API to generate the report
      setTimeout(() => {
        toast.success('Report generated successfully!')
      }, 2000)
    } catch (error) {
      toast.error('Failed to generate report')
    }
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
                <h1 className="text-3xl font-bold text-gray-900">Reports Builder</h1>
                <p className="text-gray-600 mt-1">
                  Create custom reports and export data
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-lime-600" />
                    Report Configuration
                  </CardTitle>
                  <CardDescription>
                    Configure your report settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="report-type">Report Type</Label>
                    <Select value={reportType} onValueChange={setReportType}>
                      <SelectTrigger id="report-type">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="users">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            Users Report
                          </div>
                        </SelectItem>
                        <SelectItem value="leads">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            Leads Report
                          </div>
                        </SelectItem>
                        <SelectItem value="analytics">
                          <div className="flex items-center gap-2">
                            <BarChart3 className="w-4 h-4" />
                            Analytics Report
                          </div>
                        </SelectItem>
                        <SelectItem value="content">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4" />
                            Content Report
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date-range">Date Range</Label>
                    <Select value={dateRange} onValueChange={setDateRange}>
                      <SelectTrigger id="date-range">
                        <Calendar className="w-4 h-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7">Last 7 days</SelectItem>
                        <SelectItem value="30">Last 30 days</SelectItem>
                        <SelectItem value="90">Last 90 days</SelectItem>
                        <SelectItem value="365">Last year</SelectItem>
                        <SelectItem value="custom">Custom range</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="format">Export Format</Label>
                    <Select value={format} onValueChange={setFormat}>
                      <SelectTrigger id="format">
                        <FileText className="w-4 h-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pdf">PDF</SelectItem>
                        <SelectItem value="csv">CSV</SelectItem>
                        <SelectItem value="excel">Excel</SelectItem>
                        <SelectItem value="json">JSON</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Label>Report Options</Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="include-charts"
                          checked={includeCharts}
                          onCheckedChange={(checked) => setIncludeCharts(checked as boolean)}
                        />
                        <Label htmlFor="include-charts" className="cursor-pointer">
                          Include charts and graphs
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="include-details"
                          checked={includeDetails}
                          onCheckedChange={(checked) => setIncludeDetails(checked as boolean)}
                        />
                        <Label htmlFor="include-details" className="cursor-pointer">
                          Include detailed data
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button
                      onClick={handleGenerateReport}
                      className="bg-lime-600 hover:bg-lime-700 flex-1"
                    >
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Generate Report
                    </Button>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download Template
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Reports */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Recent Reports</CardTitle>
                  <CardDescription>
                    Your recently generated reports
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-gray-500">
                    <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>No reports generated yet</p>
                    <p className="text-sm">Generate your first report to see it here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </AdminGuard>
  )
}

