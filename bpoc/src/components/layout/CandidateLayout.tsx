'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { 
  LayoutDashboard,
  User,
  FileText,
  Briefcase,
  MessageSquare,
  ChevronDown,
  LogOut,
  ChevronUp,
  Home,
  UserCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog'
import { cn } from '@/lib/utils'

interface SidebarItem {
  title: string
  icon: any
  href?: string
  children?: { title: string; href: string }[]
}

const candidateItems: SidebarItem[] = [
  { title: 'Dashboard', icon: LayoutDashboard, href: '/candidate-dashboard' },
  { title: 'Profile', icon: User, href: '/candidate-dashboard/profile' },
  { title: 'Resume', icon: FileText, href: '/candidate-dashboard/resume' },
  { title: 'Applications', icon: Briefcase, href: '/candidate-dashboard/applications' },
  { title: 'Interviews', icon: MessageSquare, href: '/candidate-dashboard/interviews' }
]

interface CandidateLayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
  titleContent?: React.ReactNode
}

export default function CandidateLayout({ 
  children, 
  title = "Candidate Dashboard", 
  description = "Manage your profile and applications",
  titleContent
}: CandidateLayoutProps) {
  const { user, signOut } = useAuth()
  const router = useRouter()
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(['candidate']))
  const [userExpanded, setUserExpanded] = useState(false)
  const [sidebarMinimized, setSidebarMinimized] = useState(false)
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [userProfile, setUserProfile] = useState<any>(null)
  const pathname = usePathname()

  // Fetch user profile to get avatar_url from database
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        if (user?.id) {
          const response = await fetch(`/api/user/profile?userId=${user.id}`)
          if (response.ok) {
            const data = await response.json()
            setUserProfile(data.user)
          }
        }
      } catch (error) {
        console.error('Error fetching user profile:', error)
      }
    }

    fetchUserProfile()
  }, [user?.id])

  const toggleExpanded = (itemTitle: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemTitle)) {
      newExpanded.delete(itemTitle)
    } else {
      newExpanded.add(itemTitle)
    }
    setExpandedItems(newExpanded)
  }

  const SidebarItem = ({ item, level = 0, category = 'candidate' }: { item: SidebarItem; level?: number; category?: string }) => {
    const router = useRouter()
    const isExpanded = expandedItems.has(item.title)
    const hasChildren = item.children && item.children.length > 0
    const isActive = pathname === item.href || 
                    (pathname === '/candidate-dashboard' && item.title === 'Dashboard')

    const getCategoryColor = (category: string) => {
      switch (category) {
        case 'candidate':
          return 'text-cyan-400'
        default:
          return 'text-cyan-400'
      }
    }

    const handleClick = () => {
      if (item.href) {
        router.push(item.href)
      } else if (hasChildren) {
        toggleExpanded(item.title)
      }
    }

    return (
      <div>
        <button
          onClick={handleClick}
          className={cn(
            "w-full flex items-center rounded-lg transition-all duration-200 group",
            level === 0 ? "font-medium" : "font-normal",
            isActive ? "bg-white/10" : level === 0 ? "hover:bg-white/10" : "hover:bg-white/5",
            sidebarMinimized ? "justify-center px-2 py-2" : "justify-between px-3 py-2"
          )}
        >
          <div className={cn(
            "flex items-center",
            sidebarMinimized ? "justify-center" : "space-x-3"
          )}>
            <item.icon className={cn(
              "w-4 h-4",
              level === 0 ? getCategoryColor(category) : "text-gray-400"
            )} />
            {!sidebarMinimized && (
              <span className={cn(
                level === 0 ? "text-white" : "text-gray-300"
              )}>
                {item.title}
              </span>
            )}
          </div>
          {hasChildren && !sidebarMinimized && (
            <ChevronUp className={cn(
              "w-4 h-4 transition-transform duration-200",
              isExpanded ? "rotate-0" : "rotate-180"
            )} />
          )}
        </button>
        
        {hasChildren && isExpanded && !sidebarMinimized && (
          <div className="ml-6 mt-2 space-y-1 max-h-48 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400/30 hover:scrollbar-thumb-gray-400/50">
            {item.children?.map((child) => {
              const isChildActive = pathname === child.href
              return (
                <button
                  key={child.href}
                  onClick={() => router.push(child.href)}
                  className={cn(
                    "w-full flex items-center space-x-3 px-3 py-2 text-sm rounded-lg transition-all duration-200",
                    isChildActive ? "bg-white/10 text-white" : "hover:bg-white/5 text-gray-300 hover:text-white"
                  )}
                >
                  <span>{child.title}</span>
                </button>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden cyber-grid">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="flex relative z-10">
        {/* Sidebar */}
        <div className={cn(
          "h-screen fixed left-0 top-0 glass-card border-r border-white/10 overflow-y-auto transition-all duration-300 z-50",
          sidebarMinimized ? "w-16" : "w-64"
        )}>
          <div className={cn(
            "transition-all duration-300",
            sidebarMinimized ? "p-3" : "p-6"
          )}>
            {/* Header */}
            <div className={cn(
              "flex items-center mb-6",
              sidebarMinimized ? "justify-center" : "space-x-2"
            )}>
              <button
                type="button"
                onClick={() => router.push('/home')}
                className={cn(
                  "flex items-center",
                  sidebarMinimized ? "justify-center" : "space-x-2",
                  "group cursor-pointer select-none"
                )}
                title="Go to Home"
              >
                <div className="w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <div 
                    className="w-full h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400"
                    style={{
                      maskImage: 'url(/BPOC.IO-LOGO-IDEA.svg)',
                      WebkitMaskImage: 'url(/BPOC.IO-LOGO-IDEA.svg)',
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain',
                      maskPosition: 'center',
                      WebkitMaskPosition: 'center',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      backgroundSize: '200% 200%',
                      animation: 'gradient-shift 3s ease infinite'
                    }}
                  />
                </div>
                {!sidebarMinimized && (
                  <div>
                    <h2 className="text-lg font-bold gradient-text">BPOC.IO</h2>
                    <p className="text-xs text-gray-400">Candidate Dashboard</p>
                  </div>
                )}
              </button>
              {!sidebarMinimized && (
                <button
                  onClick={() => setSidebarMinimized(!sidebarMinimized)}
                  className="p-1.5 rounded-md hover:bg-white/10 transition-colors border border-white/10 ml-auto"
                  title="Minimize sidebar"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-300 hover:text-white" />
                </button>
              )}
            </div>

            {/* Minimize Button for minimized state */}
            {sidebarMinimized && (
              <div className="flex justify-center mb-4">
                <button
                  onClick={() => setSidebarMinimized(!sidebarMinimized)}
                  className="p-1.5 rounded-md hover:bg-white/10 transition-colors border border-white/10"
                  title="Expand sidebar"
                >
                  <ChevronRight className="w-4 h-4 text-gray-300 hover:text-white" />
                </button>
              </div>
            )}

            {/* Candidate Section */}
            <div className="mb-6">
              <div className={cn(
                "flex items-center mb-3",
                sidebarMinimized ? "justify-center" : "space-x-2"
              )}>
                <Home className="w-4 h-4 text-cyan-400" />
                {!sidebarMinimized && (
                  <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Account</span>
                )}
              </div>
              <div className="space-y-1">
                {candidateItems.map((item) => (
                  <SidebarItem key={item.title} item={item} category="candidate" />
                ))}
              </div>
            </div>

            {/* User Profile Section */}
            <div className="mt-auto pt-6">
              <Separator className="mb-6 bg-white/10" />
              <div className="space-y-2">
                <button
                  onClick={() => setUserExpanded(!userExpanded)}
                  className={cn(
                    "w-full flex items-center rounded-lg hover:bg-white/10 transition-all duration-200",
                    sidebarMinimized ? "justify-center p-3" : "justify-between p-3"
                  )}
                >
                  <div className={cn(
                    "flex items-center",
                    sidebarMinimized ? "justify-center" : "space-x-3"
                  )}>
                    <Avatar className={cn(
                      sidebarMinimized ? "w-8 h-8" : "w-10 h-10"
                    )}>
                      <AvatarImage 
                        src={userProfile?.avatar_url || user?.user_metadata?.avatar_url || user?.user_metadata?.picture} 
                        alt={userProfile?.full_name || user?.user_metadata?.full_name || 'User'}
                      />
                      <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-purple-600 text-white">
                        <UserCircle className="w-4 h-4" />
                      </AvatarFallback>
                    </Avatar>
                    {!sidebarMinimized && (
                      <div className="text-left">
                        <p className="text-sm font-medium text-white">
                          {userProfile?.full_name || user?.user_metadata?.full_name || user?.email || 'User'}
                        </p>
                        <p className="text-xs text-gray-400">
                          {userProfile?.email || user?.email || 'user@bpoc.io'}
                        </p>
                      </div>
                    )}
                  </div>
                  {!sidebarMinimized && (
                    <ChevronUp className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      userExpanded ? "rotate-0" : "rotate-180"
                    )} />
                  )}
                </button>
                
                {userExpanded && !sidebarMinimized && (
                  <div className="ml-4 mt-2">
                    <button 
                      onClick={() => setIsLogoutDialogOpen(true)}
                      className="w-full flex items-center space-x-3 px-3 py-2 text-sm rounded-lg transition-all duration-200 hover:bg-white/5 text-gray-300 hover:text-white"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Log out</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={cn(
          "flex-1 p-8 transition-all duration-300 overflow-x-hidden",
          sidebarMinimized ? "ml-16" : "ml-64"
        )}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 max-w-full"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div>
                  <h1 className="text-3xl font-bold gradient-text">{title}</h1>
                  <p className="text-gray-400 mt-2">{description}</p>
                </div>
                {titleContent && (
                  <div className="flex items-center gap-3">
                    {titleContent}
                  </div>
                )}
              </div>
            </div>

            {/* Page Content */}
            {children}
          </motion.div>
        </div>
      </div>

      {/* Logout Confirmation Dialog */}
      <AlertDialog open={isLogoutDialogOpen} onOpenChange={setIsLogoutDialogOpen}>
        <AlertDialogContent className="bg-[#0b0b0d] text-white border border-white/10">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white flex items-center gap-2">
              <LogOut className="h-5 w-5 text-cyan-400" />
              Log Out
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-300">
              Are you sure you want to log out? You will need to sign in again to access your dashboard.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel 
              className="bg-gray-800 hover:bg-gray-700 text-white border-gray-600"
              onClick={() => setIsLogoutDialogOpen(false)}
              disabled={isLoggingOut}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
              onClick={async () => {
                setIsLoggingOut(true)
                try {
                  console.log('🔍 CandidateLayout - Starting sign out...')
                  await signOut()
                  console.log('✅ CandidateLayout - Sign out completed')
                  router.push('/')
                } catch (error) {
                  console.error('❌ CandidateLayout - Sign out error:', error)
                  setIsLoggingOut(false)
                  setIsLogoutDialogOpen(false)
                }
              }}
              disabled={isLoggingOut}
            >
              {isLoggingOut ? 'Logging out...' : 'Log Out'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

