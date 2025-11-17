import { prisma } from '@/lib/prisma'
import { emitNotification } from '@/lib/emit-notification'

interface CreateNotificationParams {
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  target_type: 'admin' | 'user' | 'broadcast'
  target_user_id?: string | null
  link?: string | null
  send_email?: boolean
  recipient_email?: string | null
  email_subject?: string | null
  email_template?: string | null
  metadata?: Record<string, any> | null
}

/**
 * Helper function to create notifications in the database
 * Handles email resolution and real-time Socket.io emission
 */
export async function createNotification(params: CreateNotificationParams) {
  try {
    // Resolve email address if send_email is true
    let resolvedEmail: string | null = null
    
    if (params.send_email) {
      if (params.target_user_id) {
        // Get email from user table
        const user = await prisma.user.findUnique({
          where: { user_id: params.target_user_id },
          select: { email: true },
        })
        resolvedEmail = user?.email || null
      } else {
        // Use fallback email
        resolvedEmail = params.recipient_email || null
      }

      if (!resolvedEmail) {
        console.warn('⚠️ send_email is true but no email address available')
      }
    }

    // Create notification in database
    console.log('📝 Creating notification with data:', {
      title: params.title,
      target_type: params.target_type,
      target_user_id: params.target_user_id,
      hasMetadata: !!params.metadata,
    })
    
    const notification = await prisma.notification.create({
      data: {
        title: params.title,
        message: params.message,
        type: params.type,
        target_type: params.target_type,
        target_user_id: params.target_user_id || null,
        link: params.link || null,
        send_email: params.send_email || false,
        recipient_email: resolvedEmail || params.recipient_email || null,
        email_subject: params.email_subject || null,
        email_template: params.email_template || null,
        metadata: params.metadata ? JSON.parse(JSON.stringify(params.metadata)) : null,
      },
    })
    
    console.log('✅ Notification created in database:', {
      id: notification.id,
      target_type: notification.target_type,
      target_user_id: notification.target_user_id,
    })

    // Format notification for Socket.io emission
    const formattedNotification = {
      id: notification.id,
      title: notification.title,
      message: notification.message,
      type: notification.type,
      read: notification.read,
      created_at: notification.created_at.toISOString(),
      link: notification.link || undefined,
      metadata: notification.metadata ? (typeof notification.metadata === 'string' ? JSON.parse(notification.metadata) : notification.metadata) : undefined,
    }

    // Emit real-time notification via Socket.io
    const target = params.target_type === 'admin' 
      ? 'admin' 
      : (params.target_user_id || 'admin')
    
    console.log('📤 About to emit notification via Socket.io:', {
      notificationId: formattedNotification.id,
      target,
      target_type: params.target_type,
      target_user_id: params.target_user_id,
    })
    
    emitNotification(formattedNotification, target)
    
    console.log('✅ Notification emission completed')

    // TODO: If send_email is true, trigger email sending here
    // You can integrate with your email service (Resend, SendGrid, etc.)

    return {
      success: true,
      notification,
    }
  } catch (error) {
    console.error('Error creating notification:', error)
    throw error
  }
}

