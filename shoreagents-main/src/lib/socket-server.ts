import { Server as HTTPServer } from 'http'
import { Server as SocketIOServer } from 'socket.io'
import { NextApiRequest, NextApiResponse } from 'next'

let io: SocketIOServer | null = null

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
      })

      // Leave user room
      socket.on('leave-user-room', (userId: string) => {
        socket.leave(`user-${userId}`)
        console.log(`📢 Client ${socket.id} left user-${userId} room`)
      })

      socket.on('disconnect', () => {
        console.log('❌ Client disconnected:', socket.id)
      })
    })

    console.log('🚀 Socket.io server initialized')
  }

  return io
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

