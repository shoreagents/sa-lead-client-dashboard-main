"use client"

import { UserGuard } from '@/components/auth/UserGuard'
import { UserDashboardSidebar } from '@/components/layout/UserDashboardSidebar'
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { useUserAuth } from '@/lib/user-auth-context'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { Video, Mail, Calendar, Clock, Trash2, CheckSquare, Square } from 'lucide-react'
import { NotificationDropdown } from '@/components/ui/notification-dropdown'
import { useState, useEffect, useMemo } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { toast } from 'sonner'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface CallInvitation {
  id: string
  title: string
  message: string
  type: string
  link: string | null
  created_at: string
  read?: boolean
  meeting_id?: string
  meeting_link?: string
  lead_name?: string
  metadata?: any
}

export default function CallInvitationsPage() {
  const { user, loading: userLoading } = useUserAuth()
  const [invitations, setInvitations] = useState<CallInvitation[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const [isDeleting, setIsDeleting] = useState(false)
  const [isMarkingUnread, setIsMarkingUnread] = useState(false)

  // Get user ID
  const userId = useMemo(() => {
    if (user?.user_id) {
      console.log('👤 Using authenticated user_id:', user.user_id)
      return user.user_id
    }
    if (typeof window !== 'undefined') {
      const deviceId = localStorage.getItem('content_tracking_device_id') || 
                       localStorage.getItem('device_id') || 
                       localStorage.getItem('session_id') || 
                       null
      console.log('👤 Using device/session ID:', deviceId)
      return deviceId
    }
    console.warn('⚠️ No user ID available')
    return null
  }, [user?.user_id])

  // Fetch call invitations
  useEffect(() => {
    if (!userId) return

    const fetchInvitations = async () => {
      try {
        setLoading(true)
        console.log('🔍 Fetching call invitations for user:', userId)
        const response = await fetch(`/api/admin/notifications?target_type=user&target_user_id=${userId}`)
        const data = await response.json()
        
        console.log('📬 Notifications API response:', data)
        
        if (data.success && data.data) {
          console.log('📋 Total notifications received:', data.data.length)
          // Filter for video call related notifications
          const callInvitations = data.data.filter((notif: any) => {
            const isCallRelated = 
              notif.title?.toLowerCase().includes('call') || 
              notif.title?.toLowerCase().includes('video') ||
              notif.link?.includes('video-call')
            console.log('🔍 Notification:', notif.title, 'isCallRelated:', isCallRelated)
            return isCallRelated
          })
          console.log('📞 Call invitations filtered:', callInvitations.length)
          setInvitations(callInvitations)
        } else {
          console.warn('⚠️ API response not successful or no data:', data)
        }
      } catch (error) {
        console.error('❌ Error fetching call invitations:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchInvitations()

    // Set up Socket.io listener for new invitations
    if (typeof window !== 'undefined' && userId) {
      // Import getSocket from socket-client
      import('@/lib/socket-client').then(({ getSocket }) => {
        const socket = getSocket()
        
        if (socket) {
          // Join user room for notifications
          socket.emit('join-user-room', userId)
          console.log('📢 Joined user room for notifications:', userId)

          socket.on('new-notification', (notification: CallInvitation) => {
            console.log('📬 Received new notification:', notification.title)
            if (
              notification.title?.toLowerCase().includes('call') || 
              notification.title?.toLowerCase().includes('video') ||
              notification.link?.includes('video-call')
            ) {
              console.log('✅ Adding call invitation to list')
              setInvitations((prev) => [notification, ...prev])
            }
          })

          return () => {
            socket.off('new-notification')
            socket.emit('leave-user-room', userId)
          }
        } else {
          console.warn('⚠️ Socket.io not available')
        }
      }).catch((error) => {
        console.error('❌ Error loading socket-client:', error)
      })
    }
  }, [userId])

  const handleJoinCall = (invitation: CallInvitation) => {
    const meetingLink = invitation.link || invitation.meeting_link
    if (meetingLink) {
      window.open(meetingLink, '_blank', 'width=1200,height=800')
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  // Extract metadata from notification
  const getMetadata = (invitation: CallInvitation) => {
    try {
      if (invitation.metadata && typeof invitation.metadata === 'string') {
        return JSON.parse(invitation.metadata)
      }
      return invitation.metadata || {}
    } catch {
      return {}
    }
  }

  // Handle select all
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(new Set(invitations.map(inv => inv.id)))
    } else {
      setSelectedIds(new Set())
    }
  }

  // Handle individual selection
  const handleSelect = (id: string, checked: boolean) => {
    const newSelected = new Set(selectedIds)
    if (checked) {
      newSelected.add(id)
    } else {
      newSelected.delete(id)
    }
    setSelectedIds(newSelected)
  }

  // Handle delete selected
  const handleDeleteSelected = async () => {
    if (selectedIds.size === 0) {
      toast.error('Please select at least one invitation to delete')
      return
    }

    if (!confirm(`Are you sure you want to delete ${selectedIds.size} invitation(s)?`)) {
      return
    }

    try {
      setIsDeleting(true)
      const response = await fetch('/api/admin/notifications/delete-multiple', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          notificationIds: Array.from(selectedIds),
          target_type: 'user',
          target_user_id: userId,
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast.success(`Deleted ${data.data.count} invitation(s)`)
        // Remove deleted invitations from state
        setInvitations(prev => prev.filter(inv => !selectedIds.has(inv.id)))
        setSelectedIds(new Set())
        // Refetch to ensure sync
        const fetchResponse = await fetch(`/api/admin/notifications?target_type=user&target_user_id=${userId}`)
        const fetchData = await fetchResponse.json()
        if (fetchData.success && fetchData.data) {
          const callInvitations = fetchData.data.filter((notif: any) => {
            const isCallRelated = 
              notif.title?.toLowerCase().includes('call') || 
              notif.title?.toLowerCase().includes('video') ||
              notif.link?.includes('video-call')
            return isCallRelated
          })
          setInvitations(callInvitations)
        }
      } else {
        toast.error(data.error || 'Failed to delete invitations')
      }
    } catch (error) {
      console.error('Error deleting invitations:', error)
      toast.error('Failed to delete invitations')
    } finally {
      setIsDeleting(false)
    }
  }

  // Handle mark all as unread
  const handleMarkAllUnread = async () => {
    try {
      setIsMarkingUnread(true)
      const response = await fetch(`/api/admin/notifications/unread-all?target_type=user&target_user_id=${userId}`, {
        method: 'POST',
      })

      const data = await response.json()

      if (data.success) {
        toast.success(`Marked ${data.data.count} invitation(s) as unread`)
        // Update local state
        setInvitations(prev => prev.map(inv => ({ ...inv, read: false })))
        // Refetch to ensure sync
        const fetchResponse = await fetch(`/api/admin/notifications?target_type=user&target_user_id=${userId}`)
        const fetchData = await fetchResponse.json()
        if (fetchData.success && fetchData.data) {
          const callInvitations = fetchData.data.filter((notif: any) => {
            const isCallRelated = 
              notif.title?.toLowerCase().includes('call') || 
              notif.title?.toLowerCase().includes('video') ||
              notif.link?.includes('video-call')
            return isCallRelated
          })
          setInvitations(callInvitations)
        }
      } else {
        toast.error(data.error || 'Failed to mark invitations as unread')
      }
    } catch (error) {
      console.error('Error marking invitations as unread:', error)
      toast.error('Failed to mark invitations as unread')
    } finally {
      setIsMarkingUnread(false)
    }
  }

  const allSelected = invitations.length > 0 && selectedIds.size === invitations.length
  const someSelected = selectedIds.size > 0 && selectedIds.size < invitations.length

  return (
    <UserGuard>
      <SidebarProvider>
        <UserDashboardSidebar />
        <SidebarInset>
          <div className="flex flex-1 flex-col gap-4 p-6 pt-20">
            {/* Header with notification dropdown */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Call Invitations</h1>
                <p className="text-muted-foreground mt-2">
                  View and manage your video call invitations
                </p>
              </div>
              <div className="flex items-center gap-2">
                <SidebarTrigger className="lg:hidden" />
                <NotificationDropdown />
              </div>
            </div>

            {loading ? (
              <div className="space-y-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-64 w-full" />
              </div>
            ) : invitations.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 border rounded-lg">
                <Video className="w-12 h-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Call Invitations</h3>
                <p className="text-sm text-muted-foreground">
                  You don't have any video call invitations yet.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Action Bar */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
                  <div className="flex items-center gap-4">
                    <Checkbox
                      checked={allSelected}
                      onCheckedChange={handleSelectAll}
                      className="h-5 w-5"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {selectedIds.size > 0 
                        ? `${selectedIds.size} selected` 
                        : 'Select all'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleMarkAllUnread}
                      disabled={isMarkingUnread || invitations.length === 0}
                      className="border-2 border-lime-600 bg-white text-lime-700 hover:bg-lime-50 hover:text-lime-800 font-semibold shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isMarkingUnread ? (
                        <>
                          <div className="w-4 h-4 border-2 border-lime-600 border-t-transparent rounded-full animate-spin mr-2" />
                          Marking...
                        </>
                      ) : (
                        <>
                          <CheckSquare className="w-4 h-4 mr-2" />
                          Mark All as Unread
                        </>
                      )}
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={handleDeleteSelected}
                      disabled={isDeleting || selectedIds.size === 0}
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isDeleting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Deleting...
                        </>
                      ) : (
                        <>
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete ({selectedIds.size})
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Table */}
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">
                          <Checkbox
                            checked={allSelected}
                            onCheckedChange={handleSelectAll}
                            className="h-4 w-4"
                          />
                        </TableHead>
                        <TableHead className="font-semibold">Type</TableHead>
                        <TableHead className="font-semibold">Message</TableHead>
                        <TableHead className="font-semibold">Date</TableHead>
                        <TableHead className="font-semibold text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {invitations.map((invitation) => (
                        <TableRow key={invitation.id} className="hover:bg-lime-50">
                          <TableCell>
                            <Checkbox
                              checked={selectedIds.has(invitation.id)}
                              onCheckedChange={(checked) => handleSelect(invitation.id, checked as boolean)}
                              className="h-4 w-4"
                            />
                          </TableCell>
                          <TableCell>
                            <Badge 
                              variant={invitation.type === 'warning' ? 'destructive' : 'default'}
                              className="bg-lime-600 hover:bg-lime-700"
                            >
                              <Video className="w-3 h-3 mr-1" />
                              {invitation.title}
                            </Badge>
                          </TableCell>
                          <TableCell className="max-w-md">
                            <p className="text-sm">{invitation.message}</p>
                            {(() => {
                              const metadata = getMetadata(invitation)
                              return metadata.lead_name && (
                                <div className="mt-1 text-xs text-muted-foreground">
                                  From: {metadata.lead_name}
                                </div>
                              )
                            })()}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              {formatDate(invitation.created_at)}
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              size="sm"
                              className="bg-lime-600 hover:bg-lime-700 text-white"
                              onClick={() => handleJoinCall(invitation)}
                              disabled={!invitation.link && !invitation.meeting_link}
                            >
                              <Video className="w-4 h-4 mr-2" />
                              Join Call
                            </Button>
                          </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                </div>
              </div>
            )}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </UserGuard>
  )
}

