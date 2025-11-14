"use client"

import * as React from "react"
import { useAuth } from '@/lib/auth-context'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useSidebar } from '@/components/ui/sidebar'
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
  const [leads, setLeads] = React.useState<any[]>([])
  const [loadingLeads, setLoadingLeads] = React.useState(false)
  
  // State for interview details modal
  const [isInterviewDetailsOpen, setIsInterviewDetailsOpen] = React.useState(false)
  const [selectedLeadRequests, setSelectedLeadRequests] = React.useState<any>(null)
  
  // Update dropdown state when pathname changes
  React.useEffect(() => {
    setIsLeadManagementOpen(pathname.startsWith('/admin-dashboard/leads'))
  }, [pathname])
  
  // Fetch leads when video call modal opens
  React.useEffect(() => {
    const fetchLeads = async () => {
      if (isVideoCallModalOpen) {
        setLoadingLeads(true)
        try {
          console.log('Fetching leads data...')
          const response = await fetch('/api/admin/leads')
          console.log('Response status:', response.status)
          const data = await response.json()
          console.log('Fetched data:', data)
          if (data.success && data.data) {
            console.log('Setting leads:', data.data.length, 'leads')
            setLeads(data.data)
          } else {
            console.error('API response not successful:', data)
          }
        } catch (error) {
          console.error('Error fetching leads:', error)
        } finally {
          setLoadingLeads(false)
        }
      }
    }
    fetchLeads()
  }, [isVideoCallModalOpen])
  
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
                              <TableCell className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 justify-center w-full">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-lime-600 text-lime-600 hover:bg-lime-50 whitespace-nowrap"
                                    onClick={() => {
                                      console.log('Sending invite to:', lead.name, lead.email)
                                      // Add your send invite logic here
                                    }}
                                  >
                                    <Mail className="w-4 h-4 mr-1" />
                                    Send Invite
                                  </Button>
                                  <Button
                                    size="sm"
                                    className="bg-lime-600 hover:bg-lime-700 text-white whitespace-nowrap"
                                    onClick={() => {
                                      console.log('Starting call with:', lead.name)
                                      // Add your video call logic here
                                    }}
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
                            <TableCell colSpan={4} className="text-center py-8 text-gray-500 w-full">
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
                                    className="bg-lime-600 hover:bg-lime-700 text-white whitespace-nowrap"
                                    onClick={() => {
                                      console.log('Starting call with:', lead.name)
                                      // Add your video call logic here
                                    }}
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
                            <TableCell colSpan={5} className="text-center py-8 text-gray-500 w-full">
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
                                    className="bg-lime-600 hover:bg-lime-700 text-white whitespace-nowrap"
                                    onClick={() => {
                                      console.log('Starting call with:', lead.name)
                                      // Add your video call logic here
                                    }}
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
                            <TableCell colSpan={5} className="text-center py-8 text-gray-500 w-full">
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
    </Sidebar>
  )
}
