import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createNotification } from '@/lib/create-notification'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      userId, 
      userEmail, 
      userName, 
      meetingLink, 
      customMessage,
      scheduleDate,
      scheduleTime 
    } = body

    if (!userId || !userEmail || !userName || !meetingLink) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: userId, userEmail, userName, meetingLink' },
        { status: 400 }
      )
    }

    // Generate email content
    const emailSubject = `Video Call Invitation - ShoreAgents`
    const emailBody = customMessage || `
Hello ${userName},

You've been invited to a video call with ShoreAgents.

Meeting Link: ${meetingLink}

Please click the link above to join the video call at your scheduled time.

Best regards,
ShoreAgents Team
    `.trim()

    // TODO: Integrate with your email service (Resend, SendGrid, etc.)
    // For now, we'll log it and store the invite in the database
    console.log('Sending video call invite:', {
      to: userEmail,
      subject: emailSubject,
      body: emailBody,
    })

    // Store the video call invite in the database using Prisma
    try {
      // Check if user exists first
      const user = await prisma.user.findUnique({
        where: { user_id: userId },
        select: { user_id: true },
      })

      if (user) {
        // Using raw SQL since Prisma Client may not be regenerated yet
        await prisma.$executeRaw`
          UPDATE users 
          SET 
            video_call_link = ${meetingLink},
            video_call_invite_sent_at = ${new Date()}
          WHERE user_id = ${userId}
        `
      } else {
        console.warn(`User not found with user_id: ${userId}, skipping database update`)
      }
    } catch (dbError: any) {
      console.error('Error updating user with video call info:', dbError)
      console.error('Database error details:', {
        code: dbError?.code,
        meta: dbError?.meta,
        message: dbError?.message,
      })
      // Don't fail the request if update fails
    }

    // Create "Video Call Invitation Sent" notification
    try {
      // Verify user exists before creating notification
      const userExists = await prisma.user.findUnique({
        where: { user_id: userId },
        select: { user_id: true, email: true },
      })
      
      if (!userExists) {
        console.warn(`⚠️ User not found with user_id: ${userId}, notification will be created for admin only`)
      }
      
      // Extract meeting ID from meeting link
      const meetingId = meetingLink.split('/').pop() || ''
      
      console.log('📧 Creating notification for user:', {
        userId,
        userName,
        userEmail,
        meetingId,
        userExists: !!userExists,
      })
      
      // Prepare metadata with all invite details
      const metadata: Record<string, any> = {
        meeting_id: meetingId,
        meeting_link: meetingLink,
        user_id: userId,
        user_name: userName,
        user_email: userEmail,
        custom_message: customMessage || null,
        email_body: emailBody,
        email_subject: emailSubject,
      }

      // Add schedule information if provided
      if (scheduleDate) {
        metadata.schedule_date = scheduleDate
      }
      if (scheduleTime) {
        metadata.schedule_time = scheduleTime
      }
      if (scheduleDate && scheduleTime) {
        // Calculate scheduled datetime
        const scheduledDateTime = new Date(`${scheduleDate}T${scheduleTime}`)
        metadata.scheduled_datetime = scheduledDateTime.toISOString()
        metadata.scheduled_datetime_formatted = scheduledDateTime.toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })
      }

      const notificationResult = await createNotification({
        title: 'Video Call Invitation',
        message: `You've been invited to a video call${userName ? ` with ${userName}` : ''}${scheduleDate && scheduleTime ? ` scheduled for ${new Date(`${scheduleDate}T${scheduleTime}`).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}` : ''}`,
        type: 'info',
        target_type: userExists ? 'user' : 'admin', // Only set to 'user' if user exists
        target_user_id: userExists ? userId : null,
        link: `/video-call/${meetingId}`,
        send_email: true,
        recipient_email: userEmail,
        email_subject: emailSubject,
        email_template: 'video_call_invite',
        metadata: metadata,
      })
      
      console.log('✅ Notification created:', {
        id: notificationResult.notification?.id,
        target_type: notificationResult.notification?.target_type,
        target_user_id: notificationResult.notification?.target_user_id,
      })
    } catch (notificationError: any) {
      console.error('❌ Error creating video call invite notification:', notificationError)
      console.error('Error details:', {
        message: notificationError?.message,
        stack: notificationError?.stack,
      })
      // Don't fail the request if notification creation fails
    }

    return NextResponse.json({
      success: true,
      message: 'Video call invite sent successfully',
      data: {
        userId,
        email: userEmail,
        meetingLink,
      },
    })
  } catch (error) {
    console.error('Error sending video call invite:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send video call invite' },
      { status: 500 }
    )
  }
}

