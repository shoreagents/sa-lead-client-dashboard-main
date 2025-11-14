import { NextRequest, NextResponse } from 'next/server'
import { emitNotificationDelete } from '@/lib/emit-notification'

// DELETE - Delete a notification
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

    // In a real app, delete the notification from the database
    // Emit real-time delete event via Socket.io
    emitNotificationDelete(id, 'admin')

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

