import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { emitNotificationDelete } from '@/lib/emit-notification'

// DELETE - Delete a notification (soft delete)
export async function DELETE(
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

    // Get notification to determine target for Socket.io
    const notification = await prisma.notification.findUnique({
      where: { id },
      select: {
        target_type: true,
        target_user_id: true,
      },
    })

    if (!notification) {
      return NextResponse.json(
        { success: false, error: 'Notification not found' },
        { status: 404 }
      )
    }

    // Soft delete the notification
    await prisma.notification.update({
      where: { id },
      data: {
        deleted_at: new Date(),
      },
    })

    // Emit real-time delete event via Socket.io
    const target = notification.target_type === 'admin' 
      ? 'admin' 
      : (notification.target_user_id || 'admin')
    emitNotificationDelete(id, target)

    return NextResponse.json({
      success: true,
      message: 'Notification deleted',
    })
  } catch (error) {
    console.error('Error deleting notification:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete notification' },
      { status: 500 }
    )
  }
}

