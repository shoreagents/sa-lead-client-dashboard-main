import { NextRequest, NextResponse } from 'next/server'
import { getOnlineUsers, isUserOnline } from '@/lib/socket-server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('user_id')

    if (userId) {
      // Check if specific user is online
      const online = isUserOnline(userId)
      return NextResponse.json({
        success: true,
        data: {
          userId,
          online,
        },
      })
    }

    // Get all online users
    const onlineUsers = getOnlineUsers()
    return NextResponse.json({
      success: true,
      data: {
        onlineUsers,
        count: onlineUsers.length,
      },
    })
  } catch (error) {
    console.error('Error getting online users:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to get online users' },
      { status: 500 }
    )
  }
}

