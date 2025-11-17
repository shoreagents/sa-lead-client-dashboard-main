import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { emitNotificationDelete } from '@/lib/emit-notification'

// POST - Delete multiple notifications (soft delete)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { notificationIds, target_type, target_user_id } = body

    if (!notificationIds || !Array.isArray(notificationIds) || notificationIds.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Notification IDs array is required' },
        { status: 400 }
      )
    }

    // Get notifications to determine targets for Socket.io
    const notifications = await prisma.notification.findMany({
      where: {
        id: { in: notificationIds },
      },
      select: {
        id: true,
        target_type: true,
        target_user_id: true,
      },
    })

    if (notifications.length === 0) {
      return NextResponse.json(
        { success: false, error: 'No notifications found' },
        { status: 404 }
      )
    }

    // Soft delete the notifications
    const result = await prisma.notification.updateMany({
      where: {
        id: { in: notificationIds },
      },
      data: {
        deleted_at: new Date(),
      },
    })

    // Emit real-time delete events via Socket.io
    const target = target_type === 'admin' 
      ? 'admin' 
      : (target_user_id || 'admin')
    
    console.log('🗑️ Deleting notifications and emitting delete events:', {
      count: notificationIds.length,
      target,
      notificationIds: notificationIds.slice(0, 5), // Log first 5 IDs
    })
    
    notificationIds.forEach((id: string) => {
      emitNotificationDelete(id, target)
    })
    
    console.log(`✅ Emitted ${notificationIds.length} delete events to ${target}`)

    return NextResponse.json({
      success: true,
      message: `${result.count} notification(s) deleted`,
      data: {
        count: result.count,
      },
    })
  } catch (error) {
    console.error('Error deleting multiple notifications:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete notifications' },
      { status: 500 }
    )
  }
}

