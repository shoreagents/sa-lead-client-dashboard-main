const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')
const cors = require('cors')

const app = express()
const httpServer = createServer(app)

// Enable CORS for Express routes
app.use(cors({
  origin: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  credentials: true,
}))

app.use(express.json())

// Initialize Socket.io server
const io = new Server(httpServer, {
  cors: {
    origin: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  },
  path: '/socket.io',
})

// Track online users: Map<userId, Set<socketId>>
const onlineUsers = new Map()

// Expose io instance globally for HTTP endpoints
global.io = io

// Define port and host
const PORT = process.env.SOCKET_PORT || 3001
const HOST = process.env.SOCKET_HOST || 'localhost'

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('✅ Socket.io client connected:', socket.id)

  // Join admin room for admin notifications
  socket.on('join-admin-room', () => {
    socket.join('admin-notifications')
    console.log(`📢 Client ${socket.id} joined admin-notifications room`)
  })

  // Join user room for user-specific notifications
  socket.on('join-user-room', (userId) => {
    socket.join(`user-${userId}`)
    console.log(`📢 Client ${socket.id} joined user-${userId} room`)
    
    // Track user as online
    if (!onlineUsers.has(userId)) {
      onlineUsers.set(userId, new Set())
    }
    onlineUsers.get(userId).add(socket.id)
    
    // Notify admin that user is online
    io.to('admin-notifications').emit('user-online', { userId })
    console.log(`🟢 User ${userId} is now online`)
  })

  // Leave user room
  socket.on('leave-user-room', (userId) => {
    socket.leave(`user-${userId}`)
    console.log(`📢 Client ${socket.id} left user-${userId} room`)
    
    // Remove user from online tracking
    const userSockets = onlineUsers.get(userId)
    if (userSockets) {
      userSockets.delete(socket.id)
      if (userSockets.size === 0) {
        onlineUsers.delete(userId)
        // Notify admin that user is offline
        io.to('admin-notifications').emit('user-offline', { userId })
        console.log(`🔴 User ${userId} is now offline`)
      }
    }
  })

  socket.on('disconnect', () => {
    console.log('❌ Socket.io client disconnected:', socket.id)
    
    // Remove socket from all users
    for (const [userId, sockets] of onlineUsers.entries()) {
      if (sockets.has(socket.id)) {
        sockets.delete(socket.id)
        if (sockets.size === 0) {
          onlineUsers.delete(userId)
          // Notify admin that user is offline
          io.to('admin-notifications').emit('user-offline', { userId })
          console.log(`🔴 User ${userId} is now offline`)
        }
      }
    }
  })
})

// HTTP endpoints for API routes to emit Socket.io events
// POST /emit/notification - Emit a new notification
app.post('/emit/notification', (req, res) => {
  try {
    const { notification, target } = req.body
    
    if (!notification || !target) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing notification or target' 
      })
    }

    const roomName = target === 'admin' ? 'admin-notifications' : `user-${target}`
    io.to(roomName).emit('new-notification', notification)
    
    console.log(`📢 Emitted notification to ${roomName}:`, notification.title)
    
    res.json({ success: true })
  } catch (error) {
    console.error('Error emitting notification:', error)
    res.status(500).json({ success: false, error: error.message })
  }
})

// POST /emit/notification-update - Emit a notification update
app.post('/emit/notification-update', (req, res) => {
  try {
    const { notification, target } = req.body
    
    if (!notification || !target) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing notification or target' 
      })
    }

    const roomName = target === 'admin' ? 'admin-notifications' : `user-${target}`
    io.to(roomName).emit('notification-updated', notification)
    
    console.log(`📢 Emitted notification update to ${roomName}:`, notification.title)
    
    res.json({ success: true })
  } catch (error) {
    console.error('Error emitting notification update:', error)
    res.status(500).json({ success: false, error: error.message })
  }
})

// POST /emit/notification-delete - Emit a notification delete
app.post('/emit/notification-delete', (req, res) => {
  try {
    const { notificationId, target } = req.body
    
    if (!notificationId || !target) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing notificationId or target' 
      })
    }

    const roomName = target === 'admin' ? 'admin-notifications' : `user-${target}`
    io.to(roomName).emit('notification-deleted', notificationId)
    
    console.log(`📢 Emitted notification delete to ${roomName}:`, notificationId)
    
    res.json({ success: true })
  } catch (error) {
    console.error('Error emitting notification delete:', error)
    res.status(500).json({ success: false, error: error.message })
  }
})

// POST /emit/incoming-call - Emit an incoming call event
app.post('/emit/incoming-call', (req, res) => {
  try {
    const { userId, data } = req.body
    
    if (!userId || !data) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing userId or data' 
      })
    }

    io.to(`user-${userId}`).emit('incoming-call', data)
    
    console.log(`📞 Emitted incoming call to user-${userId}:`, data.meetingLink)
    
    res.json({ success: true })
  } catch (error) {
    console.error('Error emitting incoming call:', error)
    res.status(500).json({ success: false, error: error.message })
  }
})

// GET / - Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    success: true,
    message: 'Socket.io Server is running',
    status: 'running',
    port: PORT,
    endpoints: {
      health: '/health',
      onlineUsers: '/online-users',
      emitNotification: 'POST /emit/notification',
      emitNotificationUpdate: 'POST /emit/notification-update',
      emitNotificationDelete: 'POST /emit/notification-delete',
      emitIncomingCall: 'POST /emit/incoming-call',
    },
    stats: {
      connectedClients: io.sockets.sockets.size,
      onlineUsers: onlineUsers.size,
    },
  })
})

// GET /health - Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    success: true, 
    status: 'running',
    connectedClients: io.sockets.sockets.size,
    onlineUsers: onlineUsers.size,
  })
})

// GET /online-users - Get list of online users
app.get('/online-users', (req, res) => {
  const onlineUserIds = Array.from(onlineUsers.keys())
  res.json({ 
    success: true, 
    onlineUsers: onlineUserIds,
    count: onlineUserIds.length,
  })
})

httpServer.listen(PORT, HOST, () => {
  console.log(`🚀 Socket.io server running on http://${HOST}:${PORT}`)
  console.log(`📡 Socket.io path: /socket.io`)
  console.log(`🔌 CORS enabled for: ${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}`)
})

