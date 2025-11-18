'use client'

import { useEffect, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'

let socket: Socket | null = null

export const getSocket = () => {
  if (!socket) {
    // Connect to Socket.io server (auto-detect port from window.location)
    const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL || 
                     (typeof window !== 'undefined' ? `${window.location.protocol}//${window.location.hostname}:${window.location.port || '3000'}` : 'http://localhost:3000')
    socket = io(socketUrl, {
      path: '/socket.io',
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5,
    })

    socket.on('connect', () => {
      console.log('✅ Socket.io connected:', socket?.id)
      console.log('🔌 Socket.io connection URL:', socketUrl)
      console.log('🔌 Socket.io path:', '/socket.io')
    })

    socket.on('disconnect', (reason) => {
      console.log('❌ Socket.io disconnected:', reason)
    })

    socket.on('connect_error', (error) => {
      console.error('❌ Socket.io connection error:', error)
      console.error('❌ Connection error details:', {
        message: error.message || 'No error message',
        description: error.description || 'No description',
        context: error.context || 'No context',
        type: error.type || 'No type',
        transport: error.transport || 'No transport',
        socketUrl: socketUrl,
        errorObject: error,
      })
    })
    
    // Debug: Log all events
    socket.onAny((eventName, ...args) => {
      if (eventName === 'new-notification' || eventName === 'notification-updated' || eventName === 'notification-deleted') {
        console.log('🔔 socket-client: Received event:', eventName, args)
      }
    })
  }

  return socket
}

export const useSocket = () => {
  const [isConnected, setIsConnected] = useState(false)
  const socketRef = useRef<Socket | null>(null)

  useEffect(() => {
    const socketInstance = getSocket()
    socketRef.current = socketInstance

    socketInstance.on('connect', () => {
      setIsConnected(true)
    })

    socketInstance.on('disconnect', () => {
      setIsConnected(false)
    })

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect()
        socketRef.current = null
      }
    }
  }, [])

  return { socket: socketRef.current, isConnected }
}

