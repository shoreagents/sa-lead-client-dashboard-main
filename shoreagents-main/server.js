const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.HOSTNAME || 'localhost'
const port = parseInt(process.env.PORT || '3000', 10)

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const expressApp = express()
  const httpServer = createServer(expressApp)
  
  // Initialize Socket.io
  const io = new Server(httpServer, {
    cors: {
      origin: process.env.NEXT_PUBLIC_APP_URL || '*',
      methods: ['GET', 'POST'],
      credentials: true,
    },
    path: '/api/socket',
  })

  // Socket.io connection handling
  io.on('connection', (socket) => {
    console.log('✅ Client connected:', socket.id)

    // Join admin room for admin notifications
    socket.on('join-admin-room', () => {
      socket.join('admin-notifications')
      console.log(`📢 Client ${socket.id} joined admin-notifications room`)
    })

    // Join user room for user-specific notifications
    socket.on('join-user-room', (userId) => {
      socket.join(`user-${userId}`)
      console.log(`📢 Client ${socket.id} joined user-${userId} room`)
    })

    // Leave user room
    socket.on('leave-user-room', (userId) => {
      socket.leave(`user-${userId}`)
      console.log(`📢 Client ${socket.id} left user-${userId} room`)
    })

    socket.on('disconnect', () => {
      console.log('❌ Client disconnected:', socket.id)
    })
  })

  // Make io available globally for emitting notifications
  global.io = io

  // Next.js request handling
  expressApp.all('*', (req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  })

  httpServer.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
    console.log('🚀 Socket.io server initialized on /api/socket')
  })
})

