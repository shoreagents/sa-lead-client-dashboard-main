"use client"

import * as React from "react"
import { useAuth } from '@/lib/auth-context'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useSidebar } from '@/components/ui/sidebar'
import { useLeads } from '@/hooks/use-api'
import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  BarChart3,
  Database,
  FileText,
  Shield,
  UserCheck,
  Building,
  ChevronDown,
  ChevronRight,
  Info,
  PenSquare,
  Sparkles,
  Video,
  Mail,
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog-videocall'
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

const adminNavItems = [
  {
    title: "Dashboard",
    url: "/admin-dashboard",
    icon: LayoutDashboard,
    disabled: false,
  },
  {
    title: "User Management",
    url: "/admin-dashboard/users",
    icon: UserCheck,
    disabled: false,
  },
  {
    title: "Lead Management",
    url: "/admin-dashboard/leads",
    icon: Users,
    disabled: false,
  },
  {
    title: "Create a Post",
    url: "/admin-dashboard/create-post",
    icon: PenSquare,
    disabled: false,
  },
  {
    title: "Generate Blog",
    url: "/admin-dashboard/generate-blog",
    icon: Sparkles,
    disabled: false,
  },
  {
    title: "Analytics",
    url: "/admin-dashboard/analytics",
    icon: BarChart3,
    disabled: true, // Disabled
  },
  {
    title: "Reports",
    url: "/admin-dashboard/reports",
    icon: FileText,
    disabled: false,
  },
  {
    title: "Database",
    url: "/admin-dashboard/database",
    icon: Database,
    disabled: true, // Disabled
  },
  {
    title: "Settings",
    url: "/admin-dashboard/settings",
    icon: Settings,
    disabled: false,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, signOut } = useAuth()
  const pathname = usePathname()
  const { toggleSidebar, state } = useSidebar()
  
  // State to control dropdown open/close
  const [isLeadManagementOpen, setIsLeadManagementOpen] = React.useState(
    pathname.startsWith('/admin-dashboard/leads')
  )
  
  // State to control video call modal
  const [isVideoCallModalOpen, setIsVideoCallModalOpen] = React.useState(false)
  const [onlineUsers, setOnlineUsers] = React.useState<Set<string>>(new Set())
  
  // Use TanStack Query for leads data (with caching)
  const { data: leadsData, isLoading: loadingLeads, error: leadsError, refetch: refetchLeads } = useLeads()
  const leads = leadsData?.data || []
  
  // Ensure leads are fetched on component mount and when modal opens
  React.useEffect(() => {
    // Always fetch leads when component mounts
    console.log('🔄 Component mounted, ensuring leads are fetched...')
    console.log('📊 Current leads state:', {
      hasData: !!leadsData,
      leadsCount: leads.length,
      isLoading: loadingLeads,
      error: leadsError,
    })
    // Only refetch if we don't have data and we're not already loading
    if (!leadsData && !loadingLeads) {
      refetchLeads()
    }
  }, []) // Only run on mount
  
  // Also fetch when modal opens
  React.useEffect(() => {
    if (isVideoCallModalOpen) {
      console.log('🔄 Modal opened, forcing leads refetch...')
      refetchLeads({
        cancelRefetch: false, // Don't cancel if already fetching
      })
    }
  }, [isVideoCallModalOpen, refetchLeads])
  
  // Debug: Log leads data and errors
  React.useEffect(() => {
    console.log('📋 Leads query state:', {
      hasData: !!leadsData,
      leadsCount: leads.length,
      isLoading: loadingLeads,
      error: leadsError,
      leadsDataStructure: leadsData ? Object.keys(leadsData) : null,
    })
    
    if (leadsError) {
      console.error('❌ Leads fetch error:', leadsError)
    }
    
    if (isVideoCallModalOpen) {
      console.log('📋 Modal opened - Leads data:', {
        leadsData,
        leadsCount: leads.length,
        isLoading: loadingLeads,
        error: leadsError,
        firstLead: leads[0] || null,
      })
    }
  }, [isVideoCallModalOpen, leadsData, leads, loadingLeads, leadsError])
  
  // State for interview details modal
  const [isInterviewDetailsOpen, setIsInterviewDetailsOpen] = React.useState(false)
  const [selectedLeadRequests, setSelectedLeadRequests] = React.useState<any>(null)
  
  // State for send invite confirmation modal
  const [isSendInviteModalOpen, setIsSendInviteModalOpen] = React.useState(false)
  const [selectedLeadForInvite, setSelectedLeadForInvite] = React.useState<any>(null)
  const [inviteMessage, setInviteMessage] = React.useState('')
  const [sendingInvite, setSendingInvite] = React.useState(false)
  const [scheduleDate, setScheduleDate] = React.useState('')
  const [scheduleTime, setScheduleTime] = React.useState('')
  
  // Update dropdown state when pathname changes
  React.useEffect(() => {
    setIsLeadManagementOpen(pathname.startsWith('/admin-dashboard/leads'))
  }, [pathname])

  // Fetch and track online users
  React.useEffect(() => {
    const fetchOnlineUsers = async () => {
      try {
        const response = await fetch('/api/admin/users/online')
        const data = await response.json()
        if (data.success && data.data?.onlineUsers) {
          setOnlineUsers(new Set(data.data.onlineUsers))
        }
      } catch (error) {
        console.error('Error fetching online users:', error)
      }
    }

    // Fetch initially
    fetchOnlineUsers()

    // Set up Socket.io listener for real-time updates
    if (typeof window !== 'undefined') {
      const getSocket = () => {
        if ((window as any).io && typeof (window as any).io === 'function') {
          return (window as any).io()
        }
        return null
      }

      const socket = getSocket()
      if (socket) {
        // Join admin room to receive user online/offline events
        socket.emit('join-admin-room')

        socket.on('user-online', (data: { userId: string }) => {
          setOnlineUsers((prev) => new Set([...prev, data.userId]))
        })

        socket.on('user-offline', (data: { userId: string }) => {
          setOnlineUsers((prev) => {
            const newSet = new Set(prev)
            newSet.delete(data.userId)
            return newSet
          })
        })

        // Poll for online users every 10 seconds as backup
        const interval = setInterval(fetchOnlineUsers, 10000)

        return () => {
          socket.off('user-online')
          socket.off('user-offline')
          clearInterval(interval)
        }
      }
    }
  }, [])
  
  const toggleLeadManagement = () => {
    setIsLeadManagementOpen(!isLeadManagementOpen)
  }

  const handleSignOut = async () => {
    try {
      console.log('🔍 AppSidebar - Starting sign out...')
      await signOut()
      console.log('✅ AppSidebar - Sign out completed')
    } catch (error) {
      console.error('❌ AppSidebar - Sign out error:', error)
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0).toUpperCase())
      .join('')
      .slice(0, 2)
  }

  // Handle opening send invite confirmation modal
  const handleOpenSendInviteModal = (lead: any) => {
    setSelectedLeadForInvite(lead)
    
    // Set default schedule to current date and time
    const now = new Date()
    const defaultDate = now.toISOString().split('T')[0] // YYYY-MM-DD format
    const defaultTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}` // HH:MM format
    
    setScheduleDate(defaultDate)
    setScheduleTime(defaultTime)
    
    // Set default message with current schedule
    const scheduleText = ` on ${now.toLocaleString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })}`
    
    setInviteMessage(`Hello ${lead.name},\n\nYou've been invited to a video call with ShoreAgents${scheduleText}.\n\nPlease join the meeting at your scheduled time.\n\nBest regards,\nShoreAgents Team`)
    setIsSendInviteModalOpen(true)
  }

  // Update message when schedule changes
  React.useEffect(() => {
    if (selectedLeadForInvite && (scheduleDate || scheduleTime)) {
      const scheduleText = scheduleDate && scheduleTime 
        ? ` on ${new Date(scheduleDate + 'T' + scheduleTime).toLocaleString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
          })}`
        : scheduleDate 
        ? ` on ${new Date(scheduleDate).toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
          })}`
        : ''
      
      setInviteMessage(`Hello ${selectedLeadForInvite.name},\n\nYou've been invited to a video call with ShoreAgents${scheduleText}.\n\nPlease join the meeting at your scheduled time.\n\nBest regards,\nShoreAgents Team`)
    } else if (selectedLeadForInvite) {
      setInviteMessage(`Hello ${selectedLeadForInvite.name},\n\nYou've been invited to a video call with ShoreAgents.\n\nPlease join the meeting at your scheduled time.\n\nBest regards,\nShoreAgents Team`)
    }
  }, [scheduleDate, scheduleTime, selectedLeadForInvite])

  // Handle sending video call invite (after confirmation)
  const handleSendInvite = async () => {
    if (!selectedLeadForInvite) return

    try {
      setSendingInvite(true)
      
      // First create a meeting link (skip notification since we'll create "Video Call Invitation" notification)
      const createResponse = await fetch('/api/admin/video-call/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: selectedLeadForInvite.id, // lead.id = user.user_id
          userName: selectedLeadForInvite.name,
          userEmail: selectedLeadForInvite.email,
          skipNotification: true, // Skip "Incoming Call" notification - we'll create "Video Call Invitation" instead
        }),
      })

      if (!createResponse.ok) {
        const errorData = await createResponse.json().catch(() => ({ error: 'Unknown error' }))
        throw new Error(errorData.error || errorData.details || `Failed to create meeting (${createResponse.status})`)
      }

      const createData = await createResponse.json()

      if (!createData.success) {
        throw new Error(createData.error || createData.details || 'Failed to create meeting')
      }

      // Then send the invite email
      const inviteResponse = await fetch('/api/admin/video-call/invite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: selectedLeadForInvite.id, // lead.id = user.user_id
          userEmail: selectedLeadForInvite.email,
          userName: selectedLeadForInvite.name,
          meetingLink: createData.data.meetingLink,
          customMessage: inviteMessage, // Pass custom message if needed
          scheduleDate: scheduleDate, // Pass schedule date
          scheduleTime: scheduleTime, // Pass schedule time
        }),
      })

      const inviteData = await inviteResponse.json()

      if (!inviteData.success) {
        throw new Error(inviteData.error || 'Failed to send invite')
      }

      // Close modal and show success
      setIsSendInviteModalOpen(false)
      setSelectedLeadForInvite(null)
      setInviteMessage('')
      setScheduleDate('')
      setScheduleTime('')
      
      // Show success message
      alert(`Video call invite sent successfully to ${selectedLeadForInvite.name}`)
      
      // Refresh leads to show updated video call link (TanStack Query will handle this)
      refetchLeads()
    } catch (error) {
      console.error('Error sending invite:', error)
      alert(`Failed to send invite: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setSendingInvite(false)
    }
  }

  // Handle starting video call
  const handleStartCall = async (lead: any) => {
    try {
      // Check if lead already has a meeting link
      let meetingLink = lead.video_call_link

      if (!meetingLink) {
        // Create a new meeting if one doesn't exist
        const createResponse = await fetch('/api/admin/video-call/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: lead.id, // lead.id = user.user_id
            userName: lead.name,
            userEmail: lead.email,
          }),
        })

        const createData = await createResponse.json()

        if (!createData.success) {
          throw new Error(createData.error || 'Failed to create meeting')
        }

        meetingLink = createData.data.meetingLink
      }

      // Open the video call in a new window/tab
      window.open(meetingLink, '_blank', 'width=1200,height=800')
    } catch (error) {
      console.error('Error starting call:', error)
      alert(`Failed to start call: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className='pb-0'>
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lime-600 text-white">
            <span className="text-lg font-bold">SA</span>
          </div>
          <div className="grid flex-1 text-left text-base leading-tight [&_p]:hidden [&_p]:data-[collapsible=icon]:block">
            <span className="truncate font-semibold text-lg">ShoreAgents</span>
            <span className="truncate text-sm text-muted-foreground">
              Admin Dashboard
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="pt-0">
        <SidebarGroup className='pt-0'>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-0">
              {adminNavItems.map((item) => {
                if (item.title === "Lead Management") {
                  return (
                    <SidebarMenuItem key={item.title}>
                      <div>
                        <SidebarMenuButton
                          onClick={toggleLeadManagement}
                          isActive={pathname.startsWith('/admin-dashboard/leads')}
                          tooltip={item.title}
                          className={`${pathname.startsWith('/admin-dashboard/leads') ? '!bg-lime-600 !text-white hover:!bg-lime-700 h-10 data-[active=true]:!bg-lime-600 data-[active=true]:!text-white' : 'hover:!bg-lime-100 hover:!text-lime-800'} text-base h-10 w-full data-[collapsible=icon]:!w-10 data-[collapsible=icon]:!h-10 data-[collapsible=icon]:!p-2 cursor-pointer`}
                        >
                          <item.icon className="w-5 h-5 data-[collapsible=icon]:!w-6 data-[collapsible=icon]:!h-6" />
                          <span className="text-base font-medium data-[collapsible=icon]:!hidden">{item.title}</span>
                          {isLeadManagementOpen ? (
                            <ChevronDown className="w-4 h-4 ml-auto data-[collapsible=icon]:!hidden" />
                          ) : (
                            <ChevronRight className="w-4 h-4 ml-auto data-[collapsible=icon]:!hidden" />
                          )}
                        </SidebarMenuButton>
                        
                        {isLeadManagementOpen && (
                          <div className="ml-4 mt-1 space-y-1 data-[collapsible=icon]:!hidden">
                            <SidebarMenuButton
                              asChild
                              isActive={pathname === "/admin-dashboard/leads"}
                              tooltip="Lead Details"
                              className={`${pathname === "/admin-dashboard/leads" ? '!bg-lime-600 !text-white hover:!bg-lime-700 h-8' : 'hover:!bg-lime-100 hover:!text-lime-800'} text-sm h-8 w-full`}
                            >
                              <Link href="/admin-dashboard/leads">
                                <Users className="w-4 h-4" />
                                <span className="text-sm font-medium">Lead Tracking</span>
                              </Link>
                            </SidebarMenuButton>
                            
                        <SidebarMenuButton
                          asChild
                          isActive={pathname === "/admin-dashboard/leads/quotations"}
                          tooltip="Lead Quotations"
                          className={`${pathname === "/admin-dashboard/leads/quotations" ? '!bg-lime-600 !text-white hover:!bg-lime-700 h-8' : 'hover:!bg-lime-100 hover:!text-lime-800'} text-sm h-8 w-full`}
                        >
                          <Link href="/admin-dashboard/leads/quotations">
                            <Info className="w-4 h-4" />
                            <span className="text-sm font-medium">Quotations</span>
                          </Link>
                        </SidebarMenuButton>
                          </div>
                        )}
                      </div>
                    </SidebarMenuItem>
                  )
                }
                
                return (
                  <SidebarMenuItem key={item.title}>
                    {item.disabled ? (
                      <SidebarMenuButton
                        disabled
                        tooltip={`${item.title} (Coming Soon)`}
                        className="text-base h-10 w-full data-[collapsible=icon]:!w-10 data-[collapsible=icon]:!h-10 data-[collapsible=icon]:!p-2 opacity-50 cursor-not-allowed hover:!bg-transparent"
                      >
                        <item.icon className="w-5 h-5 data-[collapsible=icon]:!w-6 data-[collapsible=icon]:!h-6" />
                        <span className="text-base font-medium data-[collapsible=icon]:!hidden">{item.title}</span>
                      </SidebarMenuButton>
                    ) : (
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.url}
                        tooltip={item.title}
                        className={`${pathname === item.url ? '!bg-lime-600 !text-white hover:!bg-lime-700 h-10 data-[active=true]:!bg-lime-600 data-[active=true]:!text-white' : 'hover:!bg-lime-100 hover:!text-lime-800'} text-base h-10 w-full data-[collapsible=icon]:!w-10 data-[collapsible=icon]:!h-10 data-[collapsible=icon]:!p-2`}
                      >
                        <Link href={item.url}>
                          <item.icon className="w-5 h-5 data-[collapsible=icon]:!w-6 data-[collapsible=icon]:!h-6" />
                          <span className="text-base font-medium data-[collapsible=icon]:!hidden">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        {/* Video Call Button */}
        <div className="px-3 pb-2">
          <Button
            className="w-full bg-lime-600 hover:bg-lime-700 text-white font-medium shadow-sm"
            onClick={() => setIsVideoCallModalOpen(true)}
          >
            <Video className="w-4 h-4 mr-2" />
            <span className="data-[collapsible=icon]:!hidden">Start a video call</span>
          </Button>
        </div>
        
        {/* User Info */}
        <div className="flex items-center gap-3 px-3 py-3 border-t">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user?.avatar || undefined} alt={user?.first_name} />
            <AvatarFallback className="bg-lime-600 text-white text-sm font-semibold">
              {getInitials(`${user?.first_name || ''} ${user?.last_name || ''}`)}
            </AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-base leading-tight [&_p]:hidden [&_p]:data-[collapsible=icon]:block">
            <span className="truncate font-semibold text-base">
              {user?.first_name} {user?.last_name}
            </span>
            <span className="truncate text-sm text-muted-foreground">
              {user?.email}
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 text-muted-foreground hover:text-foreground"
            onClick={handleSignOut}
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </SidebarFooter>
      
      {/* Video Call Modal */}
      <Dialog open={isVideoCallModalOpen} onOpenChange={setIsVideoCallModalOpen}>
        <DialogContent className="!w-[70%] !max-w-[70%] !h-[700px] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <Video className="w-6 h-6 text-lime-600" />
              Video Call with Leads
            </DialogTitle>
            <DialogDescription className="text-base">
              Select leads to start or schedule a video call
            </DialogDescription>
          </DialogHeader>
          
          {loadingLeads ? (
            <div className="flex items-center justify-center py-12 flex-1">
              <div className="w-8 h-8 border-4 border-lime-600 border-t-transparent rounded-full animate-spin" />
              <span className="ml-3 text-base text-gray-700">Loading leads...</span>
            </div>
          ) : leadsError ? (
            <div className="flex flex-col items-center justify-center py-12 flex-1">
              <div className="text-red-600 mb-2 font-semibold text-lg">Error loading leads</div>
              <div className="text-sm text-gray-600 mb-4 text-center px-4 max-w-md">
                {leadsError instanceof Error 
                  ? leadsError.message 
                  : typeof leadsError === 'string'
                  ? leadsError
                  : 'Unknown error occurred. Please check the console for details.'}
              </div>
              <div className="text-xs text-gray-400 mb-4 text-center px-4">
                If this persists, check:
                <ul className="list-disc list-inside mt-2 text-left">
                  <li>Database connection is active</li>
                  <li>Server is running</li>
                  <li>Network connection is stable</li>
                </ul>
              </div>
              <Button
                onClick={() => {
                  console.log('🔄 Retrying leads fetch...')
                  refetchLeads()
                }}
                className="bg-lime-600 hover:bg-lime-700 text-white"
              >
                Retry
              </Button>
            </div>
          ) : (
            <Tabs defaultValue="leads" className="w-full flex flex-col flex-1 overflow-hidden">
              <TabsList className="grid w-full grid-cols-3 bg-gray-100 mb-4">
                <TabsTrigger value="leads" className="data-[state=active]:bg-lime-600 data-[state=active]:text-white">
                  Leads ({leads.filter(lead => !lead.hasInterviewRequest && lead.column !== 'meeting_booked').length})
                </TabsTrigger>
                <TabsTrigger value="interview" className="data-[state=active]:bg-lime-600 data-[state=active]:text-white">
                  Interview Request ({leads.filter(lead => lead.hasInterviewRequest && lead.column !== 'meeting_booked').length})
                </TabsTrigger>
                <TabsTrigger value="final" className="data-[state=active]:bg-lime-600 data-[state=active]:text-white">
                  Final Interview ({leads.filter(lead => lead.column === 'meeting_booked').length})
                </TabsTrigger>
              </TabsList>

              {/* Leads Tab */}
              <TabsContent value="leads" className="h-[500px] flex flex-col">
                  <div className="rounded-md border h-full flex flex-col overflow-hidden w-full">
                    <div className="flex-shrink-0 w-full">
                      <Table className="w-full">
                        <TableHeader>
                          <TableRow className="flex items-center w-full">
                            <TableHead className="font-semibold flex-1 py-3 min-w-0 text-center">Name</TableHead>
                            <TableHead className="font-semibold flex-1 py-3 min-w-0 text-center">Company</TableHead>
                            <TableHead className="font-semibold flex-1 py-3 min-w-0 text-center">Email</TableHead>
                            <TableHead className="font-semibold flex-1 py-3 min-w-0 text-center">Action</TableHead>
                          </TableRow>
                        </TableHeader>
                      </Table>
                    </div>
                    <div className="flex-1 overflow-auto w-full">
                      <Table className="w-full">
                        <TableBody>
                        {leads
                          .filter(lead => !lead.hasInterviewRequest && lead.column !== 'meeting_booked')
                          .map((lead) => (
                            <TableRow key={lead.id} className="hover:bg-lime-50 flex w-full">
                              <TableCell className="font-medium flex-1 min-w-0 text-center">{lead.name}</TableCell>
                              <TableCell className="flex-1 min-w-0 text-center">{lead.company}</TableCell>
                              <TableCell className="text-sm text-gray-600 flex-1 min-w-0 text-center">{lead.email}</TableCell>
                              <TableCell className="flex-[0.5] min-w-0 text-center">
                                {lead.user_id && onlineUsers.has(lead.user_id) ? (
                                  <Button
                                    size="sm"
                                    className="bg-lime-600 hover:bg-lime-700 text-white text-xs px-2 py-1 h-6"
                                    disabled
                                  >
                                    Online
                                  </Button>
                                ) : (
                                  <span className="text-xs text-gray-400">Offline</span>
                                )}
                              </TableCell>
                              <TableCell className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 justify-center w-full">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-lime-600 text-lime-600 hover:bg-lime-50 whitespace-nowrap"
                                    onClick={() => handleOpenSendInviteModal(lead)}
                                  >
                                    <Mail className="w-4 h-4 mr-1" />
                                    Send Invite
                                  </Button>
                                  <Button
                                    size="sm"
                                    className="bg-lime-600 hover:bg-lime-700 text-white whitespace-nowrap"
                                    onClick={() => handleStartCall(lead)}
                                  >
                                    <Video className="w-4 h-4 mr-1" />
                                    Call
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        {leads.filter(lead => !lead.hasInterviewRequest && lead.column !== 'meeting_booked').length === 0 && (
                          <TableRow className="flex">
                            <TableCell colSpan={5} className="text-center py-8 text-gray-500 w-full">
                              No leads available
                            </TableCell>
                          </TableRow>
                        )}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </TabsContent>

              {/* Interview Request Tab */}
              <TabsContent value="interview" className="h-[500px] flex flex-col">
                  <div className="rounded-md border h-full flex flex-col overflow-hidden w-full">
                    <div className="flex-shrink-0 w-full">
                      <Table className="w-full">
                        <TableHeader>
                          <TableRow className="flex items-center w-full">
                            <TableHead className="font-semibold flex-1 py-3 min-w-0 text-center">Name</TableHead>
                            <TableHead className="font-semibold flex-1 py-3 min-w-0 text-center">Company</TableHead>
                            <TableHead className="font-semibold flex-1 py-3 min-w-0 text-center">Email</TableHead>
                            <TableHead className="font-semibold flex-[0.5] py-3 min-w-0 text-center">Status</TableHead>
                            <TableHead className="font-semibold flex-1 py-3 min-w-0 text-center">Requests</TableHead>
                            <TableHead className="font-semibold flex-1 py-3 min-w-0 text-center">Action</TableHead>
                          </TableRow>
                        </TableHeader>
                      </Table>
                    </div>
                    <div className="flex-1 overflow-auto w-full">
                      <Table className="w-full">
                        <TableBody>
                        {leads
                          .filter(lead => lead.hasInterviewRequest && lead.column !== 'meeting_booked')
                          .map((lead) => (
                            <TableRow key={lead.id} className="hover:bg-blue-50 flex w-full">
                              <TableCell className="font-medium flex-1 min-w-0 text-center">{lead.name}</TableCell>
                              <TableCell className="flex-1 min-w-0 text-center">{lead.company}</TableCell>
                              <TableCell className="text-sm text-gray-600 flex-1 min-w-0 text-center">{lead.email}</TableCell>
                              <TableCell className="flex-[0.5] min-w-0 text-center">
                                {lead.user_id && onlineUsers.has(lead.user_id) ? (
                                  <Button
                                    size="sm"
                                    className="bg-lime-600 hover:bg-lime-700 text-white text-xs px-2 py-1 h-6"
                                    disabled
                                  >
                                    Online
                                  </Button>
                                ) : (
                                  <span className="text-xs text-gray-400">Offline</span>
                                )}
                              </TableCell>
                              <TableCell className="flex-1 min-w-0 text-center">
                                <span 
                                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded cursor-pointer hover:bg-blue-200 transition-colors"
                                  onClick={() => {
                                    setSelectedLeadRequests(lead)
                                    setIsInterviewDetailsOpen(true)
                                  }}
                                >
                                  {lead.interviewRequestCount} request{lead.interviewRequestCount > 1 ? 's' : ''}
                                </span>
                              </TableCell>
                              <TableCell className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 justify-center w-full">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-lime-600 text-lime-600 hover:bg-lime-50 whitespace-nowrap"
                                    onClick={() => handleOpenSendInviteModal(lead)}
                                  >
                                    <Mail className="w-4 h-4 mr-1" />
                                    Send Invite
                                  </Button>
                                  <Button
                                    size="sm"
                                    className="bg-lime-600 hover:bg-lime-700 text-white whitespace-nowrap"
                                    onClick={() => handleStartCall(lead)}
                                  >
                                    <Video className="w-4 h-4 mr-1" />
                                    Call
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        {leads.filter(lead => lead.hasInterviewRequest && lead.column !== 'meeting_booked').length === 0 && (
                          <TableRow className="flex">
                            <TableCell colSpan={6} className="text-center py-8 text-gray-500 w-full">
                              No interview requests
                            </TableCell>
                          </TableRow>
                        )}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </TabsContent>

              {/* Final Interview Tab */}
              <TabsContent value="final" className="h-[500px] flex flex-col">
                  <div className="rounded-md border h-full flex flex-col overflow-hidden w-full">
                    <div className="flex-shrink-0 w-full">
                      <Table className="w-full">
                        <TableHeader>
                          <TableRow className="flex items-center w-full">
                            <TableHead className="font-semibold flex-1 py-3 min-w-0 text-center">Name</TableHead>
                            <TableHead className="font-semibold flex-1 py-3 min-w-0 text-center">Company</TableHead>
                            <TableHead className="font-semibold flex-1 py-3 min-w-0 text-center">Email</TableHead>
                            <TableHead className="font-semibold flex-[0.5] py-3 min-w-0 text-center">Status</TableHead>
                            <TableHead className="font-semibold flex-1 py-3 min-w-0 text-center">Requests</TableHead>
                            <TableHead className="font-semibold flex-1 py-3 min-w-0 text-center">Action</TableHead>
                          </TableRow>
                        </TableHeader>
                      </Table>
                    </div>
                    <div className="flex-1 overflow-auto w-full">
                      <Table className="w-full">
                        <TableBody>
                        {leads
                          .filter(lead => lead.column === 'meeting_booked')
                          .map((lead) => (
                            <TableRow key={lead.id} className="hover:bg-lime-50 flex w-full">
                              <TableCell className="font-medium flex-1 min-w-0 text-center">{lead.name}</TableCell>
                              <TableCell className="flex-1 min-w-0 text-center">{lead.company}</TableCell>
                              <TableCell className="text-sm text-gray-600 flex-1 min-w-0 text-center">{lead.email}</TableCell>
                              <TableCell className="flex-[0.5] min-w-0 text-center">
                                {lead.user_id && onlineUsers.has(lead.user_id) ? (
                                  <Button
                                    size="sm"
                                    className="bg-lime-600 hover:bg-lime-700 text-white text-xs px-2 py-1 h-6"
                                    disabled
                                  >
                                    Online
                                  </Button>
                                ) : (
                                  <span className="text-xs text-gray-400">Offline</span>
                                )}
                              </TableCell>
                              <TableCell className="flex-1 min-w-0 text-center">
                                {lead.hasInterviewRequest && (
                                  <span 
                                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded cursor-pointer hover:bg-blue-200 transition-colors"
                                    onClick={() => {
                                      setSelectedLeadRequests(lead)
                                      setIsInterviewDetailsOpen(true)
                                    }}
                                  >
                                    {lead.interviewRequestCount} request{lead.interviewRequestCount > 1 ? 's' : ''}
                                  </span>
                                )}
                              </TableCell>
                              <TableCell className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 justify-center w-full">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-lime-600 text-lime-600 hover:bg-lime-50 whitespace-nowrap"
                                    onClick={() => handleOpenSendInviteModal(lead)}
                                  >
                                    <Mail className="w-4 h-4 mr-1" />
                                    Send Invite
                                  </Button>
                                  <Button
                                    size="sm"
                                    className="bg-lime-600 hover:bg-lime-700 text-white whitespace-nowrap"
                                    onClick={() => handleStartCall(lead)}
                                  >
                                    <Video className="w-4 h-4 mr-1" />
                                    Call
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        {leads.filter(lead => lead.column === 'meeting_booked').length === 0 && (
                          <TableRow className="flex">
                            <TableCell colSpan={6} className="text-center py-8 text-gray-500 w-full">
                              No final interviews scheduled
                            </TableCell>
                          </TableRow>
                        )}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
              </TabsContent>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>
      
      {/* Interview Details Modal */}
      <Dialog open={isInterviewDetailsOpen} onOpenChange={setIsInterviewDetailsOpen}>
        <DialogContent className="!w-[60%] !max-w-[600px] !max-h-[80vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <Users className="w-6 h-6 text-lime-600" />
              Interview Requests
            </DialogTitle>
            <DialogDescription className="text-base">
              Candidates requested by {selectedLeadRequests?.name}
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4 overflow-auto">
            {selectedLeadRequests?.allInterviewRequests && selectedLeadRequests.allInterviewRequests.length > 0 ? (
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg border">
                  <h3 className="font-semibold text-base mb-2">Requester Information</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-600">Name:</span>
                      <span className="ml-2 font-medium">{selectedLeadRequests.name}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Company:</span>
                      <span className="ml-2 font-medium">{selectedLeadRequests.company}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-600">Email:</span>
                      <span className="ml-2 font-medium">{selectedLeadRequests.email}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-3">Requested Candidates ({selectedLeadRequests.allInterviewRequests.length})</h3>
                  <div className="space-y-3">
                    {selectedLeadRequests.allInterviewRequests.map((request: any, index: number) => (
                      <div 
                        key={index} 
                        className="p-4 bg-white rounded-lg border border-gray-200 hover:border-lime-600 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-base text-gray-900">{request.candidate_name}</h4>
                            {request.candidate_position && (
                              <p className="text-sm text-gray-600 mt-1">{request.candidate_position}</p>
                            )}
                            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                              <span>ID: {request.candidate_id}</span>
                              <span>Requested: {new Date(request.created_at).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            className="bg-lime-600 hover:bg-lime-700 text-white"
                            onClick={() => {
                              console.log('Viewing candidate:', request.candidate_name)
                              // Add your candidate view logic here
                            }}
                          >
                            View Profile
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No interview requests found
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Send Invite Confirmation Modal */}
      <Dialog open={isSendInviteModalOpen} onOpenChange={setIsSendInviteModalOpen}>
        <DialogContent className="!w-[90%] !max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <Mail className="w-6 h-6 text-lime-600" />
              Send Invite to {selectedLeadForInvite?.name}
            </DialogTitle>
            <DialogDescription className="text-base">
              Review and customize the invitation message before sending
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="p-4 bg-gray-50 rounded-lg border">
              <h3 className="font-semibold text-base mb-2">Recipient Information</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-gray-600">Name:</span>
                  <span className="ml-2 font-medium">{selectedLeadForInvite?.name}</span>
                </div>
                <div>
                  <span className="text-gray-600">Company:</span>
                  <span className="ml-2 font-medium">{selectedLeadForInvite?.company || 'Not specified'}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-600">Email:</span>
                  <span className="ml-2 font-medium">{selectedLeadForInvite?.email || 'No email provided'}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="schedule-date" className="text-base font-semibold">
                    Schedule Date
                  </Label>
                  <Input
                    id="schedule-date"
                    type="date"
                    value={scheduleDate}
                    onChange={(e) => setScheduleDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="schedule-time" className="text-base font-semibold">
                    Schedule Time
                  </Label>
                  <Input
                    id="schedule-time"
                    type="time"
                    value={scheduleTime}
                    onChange={(e) => setScheduleTime(e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="invite-message" className="text-base font-semibold">
                  Message to send:
                </Label>
                <Textarea
                  id="invite-message"
                  value={inviteMessage}
                  onChange={(e) => setInviteMessage(e.target.value)}
                  className="min-h-[200px] text-sm"
                  placeholder="Enter the invitation message..."
                />
                <p className="text-xs text-gray-500">
                  This message will be included in the email invitation sent to {selectedLeadForInvite?.name}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button
              variant="outline"
              onClick={() => {
                setIsSendInviteModalOpen(false)
                setSelectedLeadForInvite(null)
                setInviteMessage('')
                setScheduleDate('')
                setScheduleTime('')
              }}
              disabled={sendingInvite}
            >
              Cancel
            </Button>
            <Button
              className="bg-lime-600 hover:bg-lime-700 text-white"
              onClick={handleSendInvite}
              disabled={sendingInvite || !inviteMessage.trim()}
            >
              {sendingInvite ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 mr-2" />
                  Send Invite
                </>
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Sidebar>
  )
}
