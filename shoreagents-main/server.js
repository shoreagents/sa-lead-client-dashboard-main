const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')
const { parse } = require('url')
const next = require('next')
const cors = require('cors')

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.HOSTNAME || 'localhost'
const port = parseInt(process.env.PORT || '3000', 10)

const nextApp = next({ dev, hostname, port })
const handle = nextApp.getRequestHandler()

const app = express()
const httpServer = createServer(app)

// Enable CORS for Express routes
const appUrl = process.env.NEXT_PUBLIC_APP_URL || `http://localhost:${port}`
app.use(cors({
  origin: appUrl,
  credentials: true,
}))

app.use(express.json())

// Initialize Socket.io server
const io = new Server(httpServer, {
  cors: {
    origin: appUrl,
    methods: ['GET', 'POST'],
    credentials: true,
  },
  path: '/socket.io',
})

// Track online users: Map<userId, Set<socketId>>
const onlineUsers = new Map()

// Expose io instance globally for HTTP endpoints
global.io = io

// Socket.io connection handling (simplified version)
io.on('connection', (socket) => {
  console.log('✅ Socket.io client connected:', socket.id)

  socket.on('join-admin-room', () => {
    socket.join('admin-notifications')
    console.log(`📢 Client ${socket.id} joined admin-notifications room`)
  })

  socket.on('join-user-room', (userId) => {
    socket.join(`user-${userId}`)
    console.log(`📢 Client ${socket.id} joined user-${userId} room`)
    
    if (!onlineUsers.has(userId)) {
      onlineUsers.set(userId, new Set())
    }
    onlineUsers.get(userId).add(socket.id)
    io.to('admin-notifications').emit('user-online', { userId })
    console.log(`🟢 User ${userId} is now online`)
  })

  socket.on('leave-user-room', (userId) => {
    socket.leave(`user-${userId}`)
    const userSockets = onlineUsers.get(userId)
    if (userSockets) {
      userSockets.delete(socket.id)
      if (userSockets.size === 0) {
        onlineUsers.delete(userId)
        io.to('admin-notifications').emit('user-offline', { userId })
        console.log(`🔴 User ${userId} is now offline`)
      }
    }
  })

  socket.on('disconnect', () => {
    console.log('❌ Socket.io client disconnected:', socket.id)
    for (const [userId, sockets] of onlineUsers.entries()) {
      if (sockets.has(socket.id)) {
        sockets.delete(socket.id)
        if (sockets.size === 0) {
          onlineUsers.delete(userId)
          io.to('admin-notifications').emit('user-offline', { userId })
        }
      }
    }
  })
})

// Socket.io API endpoints
app.post('/emit/notification', (req, res) => {
  try {
    const { notification, target } = req.body
    if (!notification || !target) {
      return res.status(400).json({ success: false, error: 'Missing notification or target' })
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

app.post('/emit/notification-update', (req, res) => {
  try {
    const { notification, target } = req.body
    if (!notification || !target) {
      return res.status(400).json({ success: false, error: 'Missing notification or target' })
    }
    const roomName = target === 'admin' ? 'admin-notifications' : `user-${target}`
    io.to(roomName).emit('notification-updated', notification)
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

app.post('/emit/notification-delete', (req, res) => {
  try {
    const { notificationId, target } = req.body
    if (!notificationId || !target) {
      return res.status(400).json({ success: false, error: 'Missing notificationId or target' })
    }
    const roomName = target === 'admin' ? 'admin-notifications' : `user-${target}`
    io.to(roomName).emit('notification-deleted', notificationId)
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

app.post('/emit/incoming-call', (req, res) => {
  try {
    const { userId, data } = req.body
    if (!userId || !data) {
      return res.status(400).json({ success: false, error: 'Missing userId or data' })
    }
    io.to(`user-${userId}`).emit('incoming-call', data)
    console.log(`📞 Emitted incoming call to user-${userId}`)
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

// Next.js request handling - use middleware instead of wildcard route
nextApp.prepare().then(() => {
  app.use((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  })

  httpServer.listen(port, (err) => {
    if (err) throw err
    console.log(`🚀 Next.js + Socket.io server running on http://${hostname}:${port}`)
    console.log(`📡 Socket.io path: /socket.io`)
    console.log(`🔌 CORS enabled for: ${appUrl}`)
  })
})

