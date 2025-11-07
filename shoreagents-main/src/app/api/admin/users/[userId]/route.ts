import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { UserType } from '@/types/user'

// GET - Get single user
export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params

    const user = await prisma.user.findUnique({
      where: { user_id: userId },
      include: {
        leadProgress: true,
        pricingQuotes: {
          take: 5,
          orderBy: { created_at: 'desc' },
        },
        interviewRequests: {
          take: 5,
          orderBy: { created_at: 'desc' },
        },
      },
    })

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: user,
    })
  } catch (error) {
    console.error('Error fetching user:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch user' },
      { status: 500 }
    )
  }
}

// PUT - Update user
export async function PUT(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params
    const body = await request.json()

    const {
      first_name,
      last_name,
      email,
      company,
      country,
      phone_number,
      user_type,
    } = body

    // Build update data
    const updateData: any = {}
    if (first_name !== undefined) updateData.first_name = first_name
    if (last_name !== undefined) updateData.last_name = last_name
    if (email !== undefined) updateData.email = email
    if (company !== undefined) updateData.company = company
    if (country !== undefined) updateData.country = country
    if (phone_number !== undefined) updateData.phone_number = phone_number
    if (user_type !== undefined) {
      // Validate user type
      const validUserTypes = [UserType.ANONYMOUS, UserType.REGULAR, UserType.ADMIN]
      if (!validUserTypes.includes(user_type)) {
        return NextResponse.json(
          { success: false, error: 'Invalid user type' },
          { status: 400 }
        )
      }
      updateData.user_type = user_type
    }
    updateData.updated_at = new Date()

    const user = await prisma.user.update({
      where: { user_id: userId },
      data: updateData,
    })

    return NextResponse.json({
      success: true,
      data: user,
      message: 'User updated successfully',
    })
  } catch (error) {
    console.error('Error updating user:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update user' },
      { status: 500 }
    )
  }
}

// DELETE - Delete user
export async function DELETE(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { user_id: userId },
    })

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      )
    }

    // Delete user (cascade will handle related records)
    await prisma.user.delete({
      where: { user_id: userId },
    })

    return NextResponse.json({
      success: true,
      message: 'User deleted successfully',
    })
  } catch (error) {
    console.error('Error deleting user:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete user' },
      { status: 500 }
    )
  }
}

