import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { UserType } from '@/types/user'

// POST - Bulk operations on users
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, user_ids, data } = body

    if (!action || !user_ids || !Array.isArray(user_ids) || user_ids.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Action and user_ids array are required' },
        { status: 400 }
      )
    }

    let result

    switch (action) {
      case 'delete':
        result = await prisma.user.deleteMany({
          where: {
            user_id: { in: user_ids },
          },
        })
        return NextResponse.json({
          success: true,
          message: `Deleted ${result.count} user(s)`,
          count: result.count,
        })

      case 'update_type':
        if (!data?.user_type) {
          return NextResponse.json(
            { success: false, error: 'user_type is required for update_type action' },
            { status: 400 }
          )
        }
        // Validate user type
        const validUserTypes = [UserType.ANONYMOUS, UserType.REGULAR, UserType.ADMIN]
        if (!validUserTypes.includes(data.user_type)) {
          return NextResponse.json(
            { success: false, error: 'Invalid user type' },
            { status: 400 }
          )
        }
        result = await prisma.user.updateMany({
          where: {
            user_id: { in: user_ids },
          },
          data: {
            user_type: data.user_type,
            updated_at: new Date(),
          },
        })
        return NextResponse.json({
          success: true,
          message: `Updated ${result.count} user(s)`,
          count: result.count,
        })

      case 'deactivate':
        // For now, we'll use a user_type change or add an is_active field
        // Since we don't have is_active, we'll change to Anonymous
        result = await prisma.user.updateMany({
          where: {
            user_id: { in: user_ids },
          },
          data: {
            user_type: UserType.ANONYMOUS,
            updated_at: new Date(),
          },
        })
        return NextResponse.json({
          success: true,
          message: `Deactivated ${result.count} user(s)`,
          count: result.count,
        })

      default:
        return NextResponse.json(
          { success: false, error: 'Invalid action' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Error in bulk user operation:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to perform bulk operation' },
      { status: 500 }
    )
  }
}

