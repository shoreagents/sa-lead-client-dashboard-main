import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { emitNotification } from '@/lib/emit-notification'

// GET - Get all notifications
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')
    const unreadOnly = searchParams.get('unread_only') === 'true'
    const targetType = searchParams.get('target_type') || 'admin' // admin, user, or broadcast
    const targetUserId = searchParams.get('target_user_id') // For user-specific notifications
    const skip = (page - 1) * limit

    // Build where clause
    const where: any = {
      deleted_at: null, // Exclude soft-deleted notifications
      target_type: targetType,
    }

    if (unreadOnly) {
      where.read = false
    }

    if (targetType === 'user' && targetUserId) {
      where.target_user_id = targetUserId
    } else if (targetType === 'admin') {
      where.target_user_id = null // Admin notifications don't have target_user_id
    }
    
    console.log('🔍 Notification query filters:', {
      targetType,
      targetUserId,
      where: JSON.stringify(where),
    })

    // Fetch notifications from database
    const [notifications, total] = await Promise.all([
      prisma.notification.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          created_at: 'desc',
        },
        include: {
          user: {
            select: {
              user_id: true,
              email: true,
              first_name: true,
              last_name: true,
            },
          },
        },
      }),
      prisma.notification.count({ where }),
    ])

    console.log('📋 Found notifications:', notifications.length)
    
    // Format notifications for response
    const formattedNotifications = notifications.map((notification) => ({
      id: notification.id,
      title: notification.title,
      message: notification.message,
      type: notification.type,
      read: notification.read,
      created_at: notification.created_at.toISOString(),
      read_at: notification.read_at?.toISOString() || null,
      link: notification.link || undefined,
      metadata: notification.metadata || undefined,
      // Email fields
      send_email: notification.send_email,
      recipient_email: notification.recipient_email || undefined,
      email_sent: notification.email_sent,
      email_sent_at: notification.email_sent_at?.toISOString() || undefined,
      email_delivery_status: notification.email_delivery_status || undefined,
    }))
    
    console.log('✅ Formatted notifications:', formattedNotifications.length)

    const totalPages = Math.ceil(total / limit)

    return NextResponse.json({
      success: true,
      data: formattedNotifications,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    })
  } catch (error) {
    console.error('Error fetching notifications:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch notifications' },
      { status: 500 }
    )
  }
}

// POST - Create notification
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      title,
      message,
      type = 'info',
      target_type = 'admin',
      target_user_id,
      link,
      send_email = false,
      recipient_email,
      email_subject,
      email_template,
      metadata,
    } = body

    if (!title || !message) {
      return NextResponse.json(
        { success: false, error: 'Title and message are required' },
        { status: 400 }
      )
    }

    // Validate email fields if send_email is true
    if (send_email) {
      if (!target_user_id && !recipient_email) {
        return NextResponse.json(
          { success: false, error: 'Either target_user_id or recipient_email is required when send_email is true' },
          { status: 400 }
        )
      }
    }

    // Create notification in database
    const notification = await prisma.notification.create({
      data: {
      title,
      message,
        type: type as 'info' | 'success' | 'warning' | 'error',
        target_type: target_type as 'admin' | 'user' | 'broadcast',
        target_user_id: target_user_id || null,
        link: link || null,
        send_email,
        recipient_email: recipient_email || null,
        email_subject: email_subject || null,
        email_template: email_template || null,
        metadata: metadata ? JSON.parse(JSON.stringify(metadata)) : null,
      },
      include: {
        user: {
          select: {
            user_id: true,
            email: true,
            first_name: true,
            last_name: true,
          },
        },
      },
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
    }

    // Emit real-time notification via Socket.io
    const target = target_type === 'admin' ? 'admin' : (target_user_id || 'admin')
    emitNotification(formattedNotification, target)

    // TODO: If send_email is true, trigger email sending here
    // You can create a separate service/function to handle email sending

    return NextResponse.json({
      success: true,
      message: 'Notification created',
      data: {
        id: notification.id,
        title: notification.title,
        message: notification.message,
        type: notification.type,
        read: notification.read,
        created_at: notification.created_at.toISOString(),
        link: notification.link || undefined,
        send_email: notification.send_email,
        recipient_email: notification.recipient_email || undefined,
      },
    })
  } catch (error) {
    console.error('Error creating notification:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create notification' },
      { status: 500 }
    )
  }
}

