'use client'

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Bell,
  Check,
  X,
  AlertCircle,
  Info,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react'
import { toast } from 'sonner'
import { useSocket } from '@/lib/socket-client'

interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  read: boolean
  created_at: string
  link?: string
}

export function NotificationsCenter() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const { socket, isConnected } = useSocket()
  const socketRef = useRef<any>(null)

  const fetchNotifications = async () => {
    try {
      const response = await fetch('/api/admin/notifications?unread_only=false')
      const result = await response.json()

      if (result.success) {
        setNotifications(result.data || [])
        setUnreadCount(result.data?.filter((n: Notification) => !n.read).length || 0)
      }
    } catch (error) {
      console.error('Error fetching notifications:', error)
    } finally {
      setLoading(false)
    }
  }

  // Set up Socket.io real-time subscription
  useEffect(() => {
    // Initial fetch
    fetchNotifications()

    if (socket) {
      // Join admin notifications room
      socket.emit('join-admin-room')

      // Listen for new notifications
      const handleNewNotification = (notification: Notification) => {
        console.log('🔔 New notification received:', notification)
        setNotifications((prev) => [notification, ...prev])
        if (!notification.read) {
          setUnreadCount((prev) => prev + 1)
          // Show toast for new notifications
          toast.info(notification.title, {
            description: notification.message,
          })
        }
      }

      // Listen for notification updates
      const handleNotificationUpdate = (notification: Notification) => {
        console.log('🔔 Notification updated:', notification)
        setNotifications((prev) => {
          const updated = prev.map((n) => 
            n.id === notification.id ? notification : n
          )
          // Recalculate unread count based on updated list
          const unread = updated.filter((n) => !n.read).length
          setUnreadCount(unread)
          return updated
        })
      }

      // Listen for notification deletion
      const handleNotificationDelete = (notificationId: string) => {
        console.log('🔔 Notification deleted:', notificationId)
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

      socketRef.current = socket

      console.log('✅ Socket.io real-time notifications enabled')

      // Cleanup on unmount
      return () => {
        if (socket) {
          socket.off('new-notification', handleNewNotification)
          socket.off('notification-updated', handleNotificationUpdate)
          socket.off('notification-deleted', handleNotificationDelete)
          socket.emit('leave-admin-room')
        }
      }
    } else {
      // Fallback to polling if Socket.io is not available
      console.log('📡 Socket.io not available, using polling fallback')
      const interval = setInterval(fetchNotifications, 5000) // Poll every 5 seconds
      return () => clearInterval(interval)
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

  const deleteNotification = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/notifications/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setNotifications((prev) => prev.filter((n) => n.id !== id))
        toast.success('Notification deleted')
      }
    } catch (error) {
      console.error('Error deleting notification:', error)
    }
  }

  useEffect(() => {
    fetchNotifications()
    // Poll for new notifications every 30 seconds
    const interval = setInterval(fetchNotifications, 30000)
    return () => clearInterval(interval)
  }, [])

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-600" />
      default:
        return <Info className="w-5 h-5 text-blue-600" />
    }
  }

  const getNotificationBadge = (type: Notification['type']) => {
    const variants = {
      info: 'default',
      success: 'default',
      warning: 'secondary',
      error: 'destructive',
    } as const

    return <Badge variant={variants[type]}>{type}</Badge>
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 pt-2">
              <Bell className="w-5 h-5 text-lime-600" />
              Notifications
              {unreadCount > 0 && (
                <Badge className="ml-2 bg-lime-600">{unreadCount}</Badge>
              )}
            </CardTitle>
            <CardDescription>
              System notifications and alerts
            </CardDescription>
          </div>
          {unreadCount > 0 && (
            <Button variant="outline" size="sm" onClick={markAllAsRead}>
              Mark all as read
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="w-6 h-6 border-2 border-lime-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : notifications.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Bell className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No notifications</p>
          </div>
        ) : (
          <ScrollArea className="h-[400px]">
            <div className="space-y-2">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-lg border ${
                    notification.read
                      ? 'bg-gray-50 border-gray-200'
                      : 'bg-lime-50 border-lime-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {getNotificationIcon(notification.type)}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-sm">{notification.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            {notification.message}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            {getNotificationBadge(notification.type)}
                            <span className="text-xs text-gray-400">
                              {new Date(notification.created_at).toLocaleString()}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {!notification.read && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => markAsRead(notification.id)}
                            >
                              <Check className="w-4 h-4" />
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteNotification(notification.id)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      {notification.link && (
                        <Button
                          variant="link"
                          size="sm"
                          className="mt-2 p-0 h-auto"
                          onClick={() => window.location.href = notification.link!}
                        >
                          View details →
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  )
}

