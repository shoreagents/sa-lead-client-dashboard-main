import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { emitNotificationUpdate } from '@/lib/emit-notification'

// POST - Mark all notifications as unread
export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const targetType = searchParams.get('target_type') || 'admin'
    const targetUserId = searchParams.get('target_user_id')

    // Build where clause
    const where: any = {
      deleted_at: null,
      read: true, // Only mark read notifications as unread
      target_type: targetType,
    }

    if (targetType === 'user' && targetUserId) {
      where.target_user_id = targetUserId
    } else if (targetType === 'admin') {
      where.target_user_id = null
    }

    // Update all read notifications to unread
    const result = await prisma.notification.updateMany({
      where,
      data: {
        read: false,
        read_at: null,
        updated_at: new Date(),
      },
    })

    // Get updated notifications to emit via Socket.io
    const updatedNotifications = await prisma.notification.findMany({
      where: {
        ...where,
        read: false,
      },
      take: 50, // Limit to avoid too many emissions
      orderBy: {
        created_at: 'desc',
      },
    })

    // Emit updates for each notification
    const target = targetType === 'admin' ? 'admin' : (targetUserId || 'admin')
    updatedNotifications.forEach((notification) => {
      const formattedNotification = {
        id: notification.id,
        title: notification.title,
        message: notification.message,
        type: notification.type,
        read: notification.read,
        created_at: notification.created_at.toISOString(),
        link: notification.link || undefined,
      }
      emitNotificationUpdate(formattedNotification, target)
    })

    return NextResponse.json({
      success: true,
      message: 'All notifications marked as unread',
      data: {
        count: result.count,
      },
    })
  } catch (error) {
    console.error('Error marking all notifications as unread:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to mark all notifications as unread' },
      { status: 500 }
    )
  }
}

