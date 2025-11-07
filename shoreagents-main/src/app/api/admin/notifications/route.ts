import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET - Get all notifications
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')
    const unreadOnly = searchParams.get('unread_only') === 'true'
    const skip = (page - 1) * limit

    const where: any = {}
    if (unreadOnly) {
      where.read = false
    }

    // Mock notification data for testing
    const mockNotifications = [
      {
        id: '1',
        title: 'New User Registered',
        message: 'John Doe from Acme Corp has signed up for an account',
        type: 'success',
        read: false,
        created_at: new Date().toISOString(),
        link: '/admin-dashboard/users',
      },
      {
        id: '2',
        title: 'High-Value Lead Detected',
        message: 'A visitor calculated pricing for 25+ staff members',
        type: 'warning',
        read: false,
        created_at: new Date(Date.now() - 5 * 60 * 1000).toISOString(), // 5 minutes ago
        link: '/admin-dashboard/leads',
      },
      {
        id: '3',
        title: 'System Update Available',
        message: 'A new version of the dashboard is available for update',
        type: 'info',
        read: true,
        created_at: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 minutes ago
      },
      {
        id: '4',
        title: 'Database Backup Completed',
        message: 'Daily backup completed successfully at 2:00 AM',
        type: 'success',
        read: true,
        created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
      },
      {
        id: '5',
        title: 'API Rate Limit Warning',
        message: 'API usage is at 85% of the monthly limit',
        type: 'warning',
        read: false,
        created_at: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
        link: '/admin-dashboard/settings',
      },
      {
        id: '6',
        title: 'New Quotation Generated',
        message: 'A new pricing quotation has been created by a lead',
        type: 'info',
        read: false,
        created_at: new Date(Date.now() - 15 * 60 * 1000).toISOString(), // 15 minutes ago
        link: '/admin-dashboard/leads/quotations',
      },
      {
        id: '7',
        title: 'User Activity Spike',
        message: 'Unusual increase in user activity detected - 150% above average',
        type: 'warning',
        read: true,
        created_at: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // 3 hours ago
        link: '/admin-dashboard',
      },
      {
        id: '8',
        title: 'Payment Received',
        message: 'Payment of $2,500 received from Tech Solutions Inc.',
        type: 'success',
        read: false,
        created_at: new Date(Date.now() - 45 * 60 * 1000).toISOString(), // 45 minutes ago
      },
    ]

    // Filter by unread if requested
    let filteredNotifications = mockNotifications
    if (unreadOnly) {
      filteredNotifications = mockNotifications.filter((n) => !n.read)
    }

    // Apply pagination
    const paginatedNotifications = filteredNotifications.slice(skip, skip + limit)
    const total = filteredNotifications.length
    const totalPages = Math.ceil(total / limit)

    return NextResponse.json({
      success: true,
      data: paginatedNotifications,
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
    const { title, message, type = 'info', user_id, link } = body

    if (!title || !message) {
      return NextResponse.json(
        { success: false, error: 'Title and message are required' },
        { status: 400 }
      )
    }

    // In a real app, save to notifications table
    // For now, return success
    return NextResponse.json({
      success: true,
      message: 'Notification created',
    })
  } catch (error) {
    console.error('Error creating notification:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create notification' },
      { status: 500 }
    )
  }
}

