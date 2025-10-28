'use client'

import { usePathname } from 'next/navigation'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { RefreshCw, LogOut, Database } from 'lucide-react'
import { useAdminAuth } from '@/lib/admin-auth-context'
import { useRouter } from 'next/navigation'

interface AdminNavbarProps {
  onRefresh?: () => void
  onClearCache?: () => void
  isLoading?: boolean
  lastUpdated?: Date
}

export function AdminNavbar({ 
  onRefresh, 
  onClearCache, 
  isLoading = false, 
  lastUpdated = new Date() 
}: AdminNavbarProps) {
  const pathname = usePathname()
  const { admin, signOut } = useAdminAuth()
  const router = useRouter()

  // Get page title based on pathname
  const getPageTitle = () => {
    switch (pathname) {
      case '/admin-dashboard':
        return 'Admin Dashboard'
      case '/admin-dashboard/leads':
        return 'Lead Management'
      case '/admin-dashboard/leads/quotations':
        return 'Lead Quotations'
      default:
        return 'Admin Dashboard'
    }
  }

  // Get page description based on pathname
  const getPageDescription = () => {
    switch (pathname) {
      case '/admin-dashboard':
        return 'Monitor your website performance and analytics'
      case '/admin-dashboard/leads':
        return 'Track and manage your sales pipeline'
      case '/admin-dashboard/leads/quotations':
        return 'Track and manage pricing quotes from your leads'
      default:
        return 'Admin Dashboard'
    }
  }

  const handleLogout = async () => {
    await signOut()
    router.push('/')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b bg-white px-4 shadow-sm">
      <SidebarTrigger className="-ml-1" />
      <div className="flex items-center gap-2 flex-1">
        <h1 className="text-lg font-semibold">{getPageTitle()}</h1>
        <Badge variant="secondary" className="text-xs">
          Welcome back, {admin?.first_name}!
        </Badge>
      </div>
      
      {/* Action buttons */}
      <div className="flex items-center gap-4">
        {pathname === '/admin-dashboard' && (
          <>
            <div className="text-sm text-gray-500">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </div>
            {onClearCache && (
              <Button 
                onClick={onClearCache}
                variant="outline"
                size="sm"
                className="border-orange-200 text-orange-700 hover:bg-orange-50"
                title="Clear all cached data and reload"
              >
                <Database className="w-4 h-4 mr-2" />
                Clear Cache
              </Button>
            )}
          </>
        )}
        
        {onRefresh && (
          <Button 
            onClick={onRefresh} 
            disabled={isLoading}
            className="bg-lime-600 hover:bg-lime-700 text-white"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        )}
        
        <Button 
          onClick={handleLogout}
          variant="outline"
          className="border-lime-200 text-lime-700 hover:bg-lime-50"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </header>
  )
}
