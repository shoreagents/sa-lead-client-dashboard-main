import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { emitNotificationUpdate } from '@/lib/emit-notification'

// POST - Mark notification as read
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Notification ID is required' },
        { status: 400 }
      )
    }

    // Check if notification exists
    const existingNotification = await prisma.notification.findUnique({
      where: { id },
    })

    if (!existingNotification) {
      return NextResponse.json(
        { success: false, error: 'Notification not found' },
        { status: 404 }
      )
    }

    // Update notification in database
    const updatedNotification = await prisma.notification.update({
      where: { id },
      data: {
      read: true,
        read_at: new Date(),
        updated_at: new Date(),
      },
    })

    // Format notification for Socket.io emission
    const formattedNotification = {
      id: updatedNotification.id,
      title: updatedNotification.title,
      message: updatedNotification.message,
      type: updatedNotification.type,
      read: updatedNotification.read,
      created_at: updatedNotification.created_at.toISOString(),
      link: updatedNotification.link || undefined,
    }

    // Emit real-time update via Socket.io
    const target = updatedNotification.target_type === 'admin'
      ? 'admin'
      : (updatedNotification.target_user_id || 'admin')
    emitNotificationUpdate(formattedNotification, target)

    return NextResponse.json({
      success: true,
      message: 'Notification marked as read',
      data: {
        id: updatedNotification.id,
        title: updatedNotification.title,
        message: updatedNotification.message,
        type: updatedNotification.type,
        read: updatedNotification.read,
        read_at: updatedNotification.read_at?.toISOString() || null,
        created_at: updatedNotification.created_at.toISOString(),
        link: updatedNotification.link || undefined,
      },
    })
  } catch (error) {
    console.error('Error marking notification as read:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to mark notification as read' },
      { status: 500 }
    )
  }
}

