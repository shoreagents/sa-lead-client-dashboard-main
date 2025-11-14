'use client'

import { useEffect, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'

let socket: Socket | null = null

export const getSocket = () => {
  if (!socket) {
    const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL || 
                     (typeof window !== 'undefined' ? window.location.origin : '')
    socket = io(socketUrl, {
      path: '/api/socket',
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5,
    })

    socket.on('connect', () => {
      console.log('✅ Socket.io connected:', socket?.id)
    })

    socket.on('disconnect', () => {
      console.log('❌ Socket.io disconnected')
    })

    socket.on('connect_error', (error) => {
      console.error('❌ Socket.io connection error:', error)
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

