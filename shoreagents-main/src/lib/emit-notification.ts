// Helper function to emit notifications via Socket.io
// This will be used in API routes to send real-time notifications
// Uses HTTP requests to the separate Socket.io server on port 3001

const SOCKET_SERVER_URL = process.env.SOCKET_SERVER_URL || 'http://localhost:3001'

async function emitToSocketServer(endpoint: string, data: any) {
  try {
    const response = await fetch(`${SOCKET_SERVER_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`❌ Socket server error (${endpoint}):`, response.status, errorText)
      return false
    }

    return true
  } catch (error) {
    console.error(`❌ Failed to connect to Socket.io server (${endpoint}):`, error)
    return false
  }
}

export const emitNotification = (
  notification: {
    id: string
    title: string
    message: string
    type: 'info' | 'success' | 'warning' | 'error'
    read: boolean
    created_at: string
    link?: string
    metadata?: any
  },
  target: 'admin' | string = 'admin'
) => {
  console.log('🔔 emitNotification called:', {
    notificationId: notification.id,
    title: notification.title,
    target,
    socketServerUrl: SOCKET_SERVER_URL,
  })
  
  emitToSocketServer('/emit/notification', { notification, target })
    .then(success => {
      if (success) {
        console.log(`📢 Notification emitted to ${target}:`, notification.title)
      }
    })
    .catch(error => {
      console.error('❌ Error emitting notification:', error)
    })
}

export const emitNotificationUpdate = (
  notification: {
    id: string
    title: string
    message: string
    type: 'info' | 'success' | 'warning' | 'error'
    read: boolean
    created_at: string
    link?: string
  },
  target: 'admin' | string = 'admin'
) => {
  console.log('🔄 emitNotificationUpdate called:', {
    notificationId: notification.id,
    title: notification.title,
    target,
  })
  
  emitToSocketServer('/emit/notification-update', { notification, target })
    .then(success => {
      if (success) {
        console.log(`📢 Notification update emitted to ${target}:`, notification.title)
      }
    })
    .catch(error => {
      console.error('❌ Error emitting notification update:', error)
    })
}

export const emitNotificationDelete = (
  notificationId: string,
  target: 'admin' | string = 'admin'
) => {
  console.log('🗑️ emitNotificationDelete called:', {
    notificationId,
    target,
  })
  
  emitToSocketServer('/emit/notification-delete', { notificationId, target })
    .then(success => {
      if (success) {
        console.log(`📢 Notification delete emitted to ${target}:`, notificationId)
      }
    })
    .catch(error => {
      console.error('❌ Error emitting notification delete:', error)
    })
}

// Emit direct incoming call event to user
export const emitIncomingCall = (
  userId: string,
  data: { meetingLink: string; userName?: string }
) => {
  console.log('📞 emitIncomingCall called:', {
    userId,
    meetingLink: data.meetingLink,
  })
  
  emitToSocketServer('/emit/incoming-call', { userId, data })
    .then(success => {
      if (success) {
        console.log(`📞 Incoming call emitted to user-${userId}:`, data.meetingLink)
      }
    })
    .catch(error => {
      console.error('❌ Error emitting incoming call:', error)
    })
}


