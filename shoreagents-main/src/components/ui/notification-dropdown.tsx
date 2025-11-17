'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Bell, Check, X, AlertCircle, Info, CheckCircle, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { toast } from 'sonner'
import { useSocket } from '@/lib/socket-client'
import { useUserAuth } from '@/lib/user-auth-context'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  read: boolean
  created_at: string
  link?: string
}

export function NotificationDropdown() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const { socket, isConnected } = useSocket()
  const pathname = usePathname()
  const deleteRefetchTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  const isEmployeePage = useMemo(() => pathname?.startsWith('/employee/'), [pathname])
  const isUserDashboard = useMemo(() => pathname?.startsWith('/user-dashboard'), [pathname])
  const isAdminDashboard = useMemo(() => pathname?.startsWith('/admin-dashboard'), [pathname])

  // Get user ID for user dashboard
  const { user } = useUserAuth()
  const userId = useMemo(() => {
    if (isUserDashboard) {
      // First try authenticated user
      if (user?.user_id) {
        return user.user_id
      }
      // Fallback to localStorage
      if (typeof window !== 'undefined') {
        return localStorage.getItem('content_tracking_device_id') || 
               localStorage.getItem('device_id') || 
               localStorage.getItem('session_id') || 
               null
      }
    }
    return null
  }, [isUserDashboard, user?.user_id])

  const fetchNotifications = async () => {
    try {
      let url = '/api/admin/notifications?unread_only=false&limit=10'
      
      // If in user dashboard, filter by user_id
      if (isUserDashboard && userId) {
        url += `&target_type=user&target_user_id=${userId}`
      }
      
      const response = await fetch(url)
      const result = await response.json()

      if (result.success) {
        setNotifications(result.data || [])
        setUnreadCount(result.data?.filter((n: Notification) => !n.read).length || 0)
      } else {
        // If not authenticated or not admin, just show empty state
        setNotifications([])
        setUnreadCount(0)
      }
    } catch (error) {
      console.error('Error fetching notifications:', error)
      // On error, show empty state
      setNotifications([])
      setUnreadCount(0)
    } finally {
      setLoading(false)
    }
  }

  // Set up Socket.io real-time subscription
  useEffect(() => {
    fetchNotifications()

    if (socket) {
      // Check socket connection status
      console.log('🔌 NotificationDropdown: Socket connection status:', socket.connected ? 'connected' : 'disconnected')
      console.log('🔌 NotificationDropdown: Socket ID:', socket.id)
      
      // Function to join rooms
      const joinRoom = () => {
        if (isUserDashboard && userId) {
          socket.emit('join-user-room', userId)
          console.log('📢 NotificationDropdown: Emitted join-user-room for userId:', userId)
        } else if (isAdminDashboard) {
          socket.emit('join-admin-room')
          console.log('📢 NotificationDropdown: Emitted join-admin-room')
        }
      }
      
      // Join room immediately if connected, otherwise wait for connection
      if (socket.connected) {
        joinRoom()
      } else {
        console.log('⏳ NotificationDropdown: Socket not connected yet, waiting for connection...')
        socket.once('connect', () => {
          console.log('✅ NotificationDropdown: Socket connected, joining room now')
          joinRoom()
        })
      }
      
      // Also join on reconnect
      socket.on('connect', () => {
        console.log('✅ NotificationDropdown: Socket (re)connected, rejoining room')
        joinRoom()
      })

      const handleNewNotification = (notification: Notification) => {
        console.log('📬 NotificationDropdown: Received new-notification event:', {
          id: notification.id,
          title: notification.title,
          target: isUserDashboard ? `user-${userId}` : 'admin',
        })
        
        // For user dashboard, only show notifications targeted to this user
        if (isUserDashboard && userId) {
          // The server already filters by user_id, but double-check
          console.log('✅ NotificationDropdown: Adding notification to user dashboard')
          setNotifications((prev) => [notification, ...prev])
        } else {
          // For admin, show all notifications
          console.log('✅ NotificationDropdown: Adding notification to admin dashboard')
          setNotifications((prev) => [notification, ...prev])
        }
        
        if (!notification.read) {
          setUnreadCount((prev) => prev + 1)
          toast.info(notification.title, {
            description: notification.message,
          })
        }
      }

      const handleNotificationUpdate = (notification: Notification) => {
        setNotifications((prev) => {
          const updated = prev.map((n) => 
            n.id === notification.id ? notification : n
          )
          const unread = updated.filter((n) => !n.read).length
          setUnreadCount(unread)
          return updated
        })
      }

      const handleNotificationDelete = (notificationId: string) => {
        console.log('🗑️ NotificationDropdown: Received notification-deleted event:', notificationId)
        
        // Remove from local state immediately
        setNotifications((prev) => {
          const deleted = prev.find((n) => n.id === notificationId)
          if (deleted && !deleted.read) {
            setUnreadCount((prevCount) => Math.max(0, prevCount - 1))
          }
          const filtered = prev.filter((n) => n.id !== notificationId)
          console.log('🗑️ NotificationDropdown: Removed notification from state, remaining:', filtered.length)
          return filtered
        })
        
        // Clear any pending refetch timeout
        if (deleteRefetchTimeoutRef.current) {
          clearTimeout(deleteRefetchTimeoutRef.current)
        }
        
        // Debounce refetch to handle multiple delete events
        // This ensures we only refetch once after all delete events are processed
        deleteRefetchTimeoutRef.current = setTimeout(() => {
          console.log('🔄 NotificationDropdown: Refetching notifications after delete(s)')
          fetchNotifications()
          deleteRefetchTimeoutRef.current = null
        }, 300)
      }

      socket.on('new-notification', handleNewNotification)
      socket.on('notification-updated', handleNotificationUpdate)
      socket.on('notification-deleted', handleNotificationDelete)
      
      // Debug: Log all socket events for troubleshooting
      socket.onAny((eventName, ...args) => {
        if (eventName === 'new-notification' || eventName === 'notification-updated' || eventName === 'notification-deleted') {
          console.log('🔔 NotificationDropdown: Received socket event:', eventName, args)
        }
      })

      return () => {
        // Clear any pending refetch timeout
        if (deleteRefetchTimeoutRef.current) {
          clearTimeout(deleteRefetchTimeoutRef.current)
          deleteRefetchTimeoutRef.current = null
        }
        
        if (socket) {
          console.log('🧹 NotificationDropdown: Cleaning up socket listeners')
          socket.off('new-notification', handleNewNotification)
          socket.off('notification-updated', handleNotificationUpdate)
          socket.off('notification-deleted', handleNotificationDelete)
          socket.offAny()
          
          // Leave room on cleanup
          if (isUserDashboard && userId) {
            socket.emit('leave-user-room', userId)
            console.log('📢 NotificationDropdown: Left user room:', userId)
          }
        }
      }
    } else {
      console.warn('⚠️ NotificationDropdown: Socket not available')
    }
  }, [socket, isConnected, isUserDashboard, userId, isAdminDashboard])

  const markAsRead = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/notifications/${id}/read`, {
        method: 'POST',
      })

      if (response.ok) {
        setNotifications((prev) =>
          prev.map((n) => (n.id === id ? { ...n, read: true } : n))
        )
        setUnreadCount((prev) => Math.max(0, prev - 1))
      }
    } catch (error) {
      console.error('Error marking notification as read:', error)
    }
  }

  const markAllAsRead = async () => {
    try {
      const response = await fetch('/api/admin/notifications/read-all', {
        method: 'POST',
      })

      if (response.ok) {
        setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
        setUnreadCount(0)
        toast.success('All notifications marked as read')
      }
    } catch (error) {
      console.error('Error marking all as read:', error)
    }
  }

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-600" />
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-600" />
      default:
        return <Info className="w-4 h-4 text-blue-600" />
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`relative ${isEmployeePage || isUserDashboard || isAdminDashboard ? 'text-white hover:bg-lime-700' : 'text-gray-600 hover:bg-gray-50'} transition-colors`}
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-lime-600 text-white text-xs flex items-center justify-center font-semibold">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-base">Notifications</h3>
            {unreadCount > 0 && (
              <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                Mark all read
              </Button>
            )}
          </div>
        </div>
        <ScrollArea className="h-[400px]">
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="w-6 h-6 border-2 border-lime-600 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : notifications.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Bell className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p className="text-sm">No notifications</p>
            </div>
          ) : (
            <div className="p-2 space-y-2">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 rounded-lg border ${
                    notification.read
                      ? 'bg-gray-50 border-gray-200'
                      : 'bg-lime-50 border-lime-200'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {getNotificationIcon(notification.type)}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm">{notification.title}</h4>
                          <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                            {notification.message}
                          </p>
                          <span className="text-xs text-gray-400 mt-1 block">
                            {new Date(notification.created_at).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          {!notification.read && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0"
                              onClick={() => markAsRead(notification.id)}
                            >
                              <Check className="w-3 h-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                      {notification.link && (
                        <Button
                          variant="link"
                          size="sm"
                          className="mt-2 p-0 h-auto text-xs"
                          onClick={() => window.location.href = notification.link!}
                        >
                          View →
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
        <div className="p-3 border-t">
          <Button
            variant="ghost"
            size="sm"
            className="w-full"
            onClick={() => {
              if (isUserDashboard) {
                window.location.href = '/user-dashboard/call-invitations'
              } else {
                window.location.href = '/admin-dashboard'
              }
            }}
          >
            {isUserDashboard ? 'View all invitations' : 'View all notifications'}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

