'use client'

import { useState, useEffect, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { Bell, Check, X, AlertCircle, Info, CheckCircle, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { toast } from 'sonner'
import { useSocket } from '@/lib/socket-client'
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
  
  const isEmployeePage = useMemo(() => pathname?.startsWith('/employee/'), [pathname])
  const isUserDashboard = useMemo(() => pathname?.startsWith('/user-dashboard'), [pathname])
  const isAdminDashboard = useMemo(() => pathname?.startsWith('/admin-dashboard'), [pathname])

  const fetchNotifications = async () => {
    try {
      const response = await fetch('/api/admin/notifications?unread_only=false&limit=10')
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
      socket.emit('join-admin-room')

      const handleNewNotification = (notification: Notification) => {
        setNotifications((prev) => [notification, ...prev])
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
        setNotifications((prev) => {
          const deleted = prev.find((n) => n.id === notificationId)
          if (deleted && !deleted.read) {
            setUnreadCount((prev) => Math.max(0, prev - 1))
          }
          return prev.filter((n) => n.id !== notificationId)
        })
      }

      socket.on('new-notification', handleNewNotification)
      socket.on('notification-updated', handleNotificationUpdate)
      socket.on('notification-deleted', handleNotificationDelete)

      return () => {
        if (socket) {
          socket.off('new-notification', handleNewNotification)
          socket.off('notification-updated', handleNotificationUpdate)
          socket.off('notification-deleted', handleNotificationDelete)
        }
      }
    }
  }, [socket, isConnected])

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
            onClick={() => window.location.href = '/admin-dashboard'}
          >
            View all notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

