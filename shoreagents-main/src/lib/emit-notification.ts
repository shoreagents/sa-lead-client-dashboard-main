// Helper function to emit notifications via Socket.io
// This will be used in API routes to send real-time notifications

export const emitNotification = (
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
  // Access the global io instance from server.js
  if (typeof global !== 'undefined' && (global as any).io) {
    const io = (global as any).io
    
    if (target === 'admin') {
      io.to('admin-notifications').emit('new-notification', notification)
      console.log('📢 Emitted notification to admin room:', notification.title)
    } else {
      io.to(`user-${target}`).emit('new-notification', notification)
      console.log(`📢 Emitted notification to user-${target}:`, notification.title)
    }
  } else {
    console.warn('⚠️ Socket.io not available - notification not emitted')
  }
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
  if (typeof global !== 'undefined' && (global as any).io) {
    const io = (global as any).io
    
    if (target === 'admin') {
      io.to('admin-notifications').emit('notification-updated', notification)
    } else {
      io.to(`user-${target}`).emit('notification-updated', notification)
    }
  }
}

export const emitNotificationDelete = (
  notificationId: string,
  target: 'admin' | string = 'admin'
) => {
  if (typeof global !== 'undefined' && (global as any).io) {
    const io = (global as any).io
    
    if (target === 'admin') {
      io.to('admin-notifications').emit('notification-deleted', notificationId)
    } else {
      io.to(`user-${target}`).emit('notification-deleted', notificationId)
    }
  }
}

