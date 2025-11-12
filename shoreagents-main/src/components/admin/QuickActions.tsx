'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Plus,
  Users,
  FileText,
  Download,
  Upload,
  Settings,
  RefreshCw,
  Mail,
  BarChart3,
} from 'lucide-react'
import { useRouter } from 'next/navigation'

export function QuickActions() {
  const router = useRouter()

  const actions = [
    {
      title: 'Create User',
      description: 'Add a new user to the system',
      icon: Plus,
      color: 'bg-lime-600 hover:bg-lime-700',
      onClick: () => router.push('/admin-dashboard/users'),
    },
    {
      title: 'View Leads',
      description: 'Manage and track leads',
      icon: Users,
      color: 'bg-blue-600 hover:bg-blue-700',
      onClick: () => router.push('/admin-dashboard/leads'),
    },
    {
      title: 'Create Post',
      description: 'Create new content',
      icon: FileText,
      color: 'bg-purple-600 hover:bg-purple-700',
      onClick: () => router.push('/admin-dashboard/create-post'),
    },
    {
      title: 'Export Data',
      description: 'Download reports and data',
      icon: Download,
      color: 'bg-green-600 hover:bg-green-700',
      onClick: () => {
        // Handle export
        console.log('Export data')
      },
    },
    {
      title: 'Import Data',
      description: 'Upload and import data',
      icon: Upload,
      color: 'bg-orange-600 hover:bg-orange-700',
      onClick: () => {
        // Handle import
        console.log('Import data')
      },
    },
    {
      title: 'Send Email',
      description: 'Send bulk emails',
      icon: Mail,
      color: 'bg-red-600 hover:bg-red-700',
      onClick: () => {
        // Handle email
        console.log('Send email')
      },
    },
    {
      title: 'Generate Report',
      description: 'Create custom reports',
      icon: BarChart3,
      color: 'bg-indigo-600 hover:bg-indigo-700',
      onClick: () => router.push('/admin-dashboard/reports'),
    },
    {
      title: 'Settings',
      description: 'System configuration',
      icon: Settings,
      color: 'bg-gray-600 hover:bg-gray-700',
      onClick: () => router.push('/admin-dashboard/settings'),
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>
          Common tasks and shortcuts
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {actions.map((action) => {
            const Icon = action.icon
            return (
              <Button
                key={action.title}
                variant="outline"
                className="flex flex-col items-center justify-center h-24 gap-2 hover:bg-lime-50"
                onClick={action.onClick}
              >
                <Icon className="w-5 h-5 text-lime-600" />
                <span className="text-xs font-medium">{action.title}</span>
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

