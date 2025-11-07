import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { UserType } from '@/types/user'

// GET - List all users with filters
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search') || ''
    const userType = searchParams.get('user_type') || ''
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')
    const skip = (page - 1) * limit

    // Build where clause
    const where: any = {}

    if (search) {
      where.OR = [
        { email: { contains: search, mode: 'insensitive' } },
        { first_name: { contains: search, mode: 'insensitive' } },
        { last_name: { contains: search, mode: 'insensitive' } },
        { company: { contains: search, mode: 'insensitive' } },
        { user_id: { contains: search, mode: 'insensitive' } },
      ]
    }

    if (userType) {
      where.user_type = userType
    }

    // Get users with pagination
    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take: limit,
        orderBy: { created_at: 'desc' },
        select: {
          id: true,
          user_id: true,
          first_name: true,
          last_name: true,
          email: true,
          company: true,
          country: true,
          phone_number: true,
          user_type: true,
          created_at: true,
          updated_at: true,
          auth_user_id: true,
        },
      }),
      prisma.user.count({ where }),
    ])

    return NextResponse.json({
      success: true,
      data: users,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch users' },
      { status: 500 }
    )
  }
}

// POST - Create new user
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      user_id,
      first_name,
      last_name,
      email,
      company,
      country,
      phone_number,
      user_type = UserType.ANONYMOUS,
    } = body

    // Validate required fields
    if (!user_id) {
      return NextResponse.json(
        { success: false, error: 'User ID is required' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { user_id },
    })

    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'User with this ID already exists' },
        { status: 409 }
      )
    }

    // Create user
    const user = await prisma.user.create({
      data: {
        user_id,
        first_name,
        last_name,
        email,
        company,
        country,
        phone_number,
        user_type: user_type as UserType,
      },
    })

    return NextResponse.json({
      success: true,
      data: user,
      message: 'User created successfully',
    })
  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create user' },
      { status: 500 }
    )
  }
}

