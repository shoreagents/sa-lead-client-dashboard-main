import { NextRequest, NextResponse } from 'next/server'
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

    // In a real app, update the notification in the database
    // For now, create updated notification object
    const updatedNotification = {
      id,
      title: 'Updated',
      message: 'Notification marked as read',
      type: 'info' as const,
      read: true,
      created_at: new Date().toISOString(),
    }

    // Emit real-time update via Socket.io
    emitNotificationUpdate(updatedNotification, 'admin')

    return NextResponse.json({
      success: true,
      message: 'Notification marked as read',
      data: updatedNotification,
    })
  } catch (error) {
    console.error('Error marking notification as read:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to mark notification as read' },
      { status: 500 }
    )
  }
}

