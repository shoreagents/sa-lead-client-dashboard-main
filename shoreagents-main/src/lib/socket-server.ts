import { Server as HTTPServer } from 'http'
import { Server as SocketIOServer } from 'socket.io'
import { NextApiRequest, NextApiResponse } from 'next'

let io: SocketIOServer | null = null
// Track online users: Map<userId, Set<socketId>>
const onlineUsers = new Map<string, Set<string>>()

export const initSocketIO = (httpServer: HTTPServer) => {
  if (!io) {
    io = new SocketIOServer(httpServer, {
      cors: {
        origin: process.env.NEXT_PUBLIC_APP_URL || '*',
        methods: ['GET', 'POST'],
        credentials: true,
      },
      path: '/api/socket',
    })

    io.on('connection', (socket) => {
      console.log('✅ Client connected:', socket.id)

      // Join admin room for admin notifications
      socket.on('join-admin-room', () => {
        socket.join('admin-notifications')
        console.log(`📢 Client ${socket.id} joined admin-notifications room`)
      })

      // Join user room for user-specific notifications
      socket.on('join-user-room', (userId: string) => {
        socket.join(`user-${userId}`)
        console.log(`📢 Client ${socket.id} joined user-${userId} room`)
        
        // Track user as online
        if (!onlineUsers.has(userId)) {
          onlineUsers.set(userId, new Set())
        }
        onlineUsers.get(userId)!.add(socket.id)
        
        // Notify admin that user is online
        io!.to('admin-notifications').emit('user-online', { userId })
        console.log(`🟢 User ${userId} is now online`)
      })

      // Leave user room
      socket.on('leave-user-room', (userId: string) => {
        socket.leave(`user-${userId}`)
        console.log(`📢 Client ${socket.id} left user-${userId} room`)
        
        // Remove user from online tracking
        const userSockets = onlineUsers.get(userId)
        if (userSockets) {
          userSockets.delete(socket.id)
          if (userSockets.size === 0) {
            onlineUsers.delete(userId)
            // Notify admin that user is offline
            io!.to('admin-notifications').emit('user-offline', { userId })
            console.log(`🔴 User ${userId} is now offline`)
          }
        }
      })

      socket.on('disconnect', () => {
        console.log('❌ Client disconnected:', socket.id)
        
        // Remove socket from all users
        for (const [userId, sockets] of onlineUsers.entries()) {
          if (sockets.has(socket.id)) {
            sockets.delete(socket.id)
            if (sockets.size === 0) {
              onlineUsers.delete(userId)
              // Notify admin that user is offline
              io!.to('admin-notifications').emit('user-offline', { userId })
              console.log(`🔴 User ${userId} is now offline`)
            }
          }
        }
      })
    })

    console.log('🚀 Socket.io server initialized')
  }

  return io
}

// Get list of online user IDs
export const getOnlineUsers = (): string[] => {
  return Array.from(onlineUsers.keys())
}

// Check if a user is online
export const isUserOnline = (userId: string): boolean => {
  return onlineUsers.has(userId) && onlineUsers.get(userId)!.size > 0
}

export const getSocketIO = () => {
  if (!io) {
    throw new Error('Socket.io not initialized. Call initSocketIO first.')
  }
  return io
}

// Helper function to emit notifications
export const emitNotification = (notification: any, target: 'admin' | string) => {
  const socketIO = getSocketIO()
  
  if (target === 'admin') {
    socketIO.to('admin-notifications').emit('new-notification', notification)
  } else {
    socketIO.to(`user-${target}`).emit('new-notification', notification)
  }
}


