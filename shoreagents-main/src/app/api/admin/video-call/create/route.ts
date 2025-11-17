import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createNotification } from '@/lib/create-notification'
import { emitIncomingCall } from '@/lib/emit-notification'

// Generate a unique meeting ID
function generateMeetingId(): string {
  return `meeting-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, userName, userEmail, skipNotification } = body

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'User ID is required' },
        { status: 400 }
      )
    }

    // Generate a unique meeting link
    // You can integrate with Zoom, Google Meet, or use a custom WebRTC solution
    const meetingId = generateMeetingId()
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
    const meetingLink = `${baseUrl}/video-call/${meetingId}`

    // Store the video call session in the database using Prisma
    try {
      // First check if user exists
      const user = await prisma.user.findUnique({
        where: { user_id: userId },
        select: { user_id: true },
      })

      if (!user) {
        console.error(`User not found with user_id: ${userId}`)
        return NextResponse.json(
          { success: false, error: `User not found with ID: ${userId}` },
          { status: 404 }
        )
      }

      // Update user with video call information
      // Using raw SQL since Prisma Client may not be regenerated yet
      await prisma.$executeRaw`
        UPDATE users 
        SET 
          video_call_link = ${meetingLink},
          video_call_meeting_id = ${meetingId},
          video_call_created_at = ${new Date()}
        WHERE user_id = ${userId}
      `
    } catch (dbError: any) {
      console.error('Error creating video call:', dbError)
      const errorMessage = dbError?.message || 'Unknown database error'
      console.error('Database error details:', {
        code: dbError?.code,
        meta: dbError?.meta,
        message: errorMessage,
      })
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to create video call session',
          details: errorMessage,
        },
        { status: 500 }
      )
    }

    // Create "Incoming Call" notification (only if not skipping)
    if (!skipNotification) {
      try {
        await createNotification({
          title: 'Incoming Call',
          message: `Video call initiated${userName ? ` with ${userName}` : ''}`,
          type: 'warning',
          target_type: 'user',
          target_user_id: userId,
          link: `/video-call/${meetingId}`,
          metadata: {
            meeting_id: meetingId,
            meeting_link: meetingLink,
            user_id: userId,
            user_name: userName,
          },
        })

        // Also emit direct incoming call event to enable the "Accept a Call" button
        emitIncomingCall(userId, {
          meetingLink: meetingLink, // Use full URL
          userName: userName || undefined,
        })
      } catch (notificationError) {
        console.error('Error creating incoming call notification:', notificationError)
        // Don't fail the request if notification creation fails
      }
    } else {
      console.log('⏭️ Skipping notification creation (skipNotification=true)')
    }

    return NextResponse.json({
      success: true,
      data: {
        meetingId,
        meetingLink,
        userId,
        userName,
        userEmail,
      },
    })
  } catch (error) {
    console.error('Error creating video call:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create video call' },
      { status: 500 }
    )
  }
}

