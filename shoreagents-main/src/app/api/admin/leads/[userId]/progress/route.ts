import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET /api/admin/leads/[userId]/progress - Get user's progress history
export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params

    if (!userId) {
      return NextResponse.json({ 
        success: false, 
        error: 'User ID is required' 
      }, { status: 400 })
    }

    // Get user's current progress (one-to-one relationship, so only one record exists)
    const currentProgress = await prisma.leadProgress.findFirst({
      where: { user_id: userId },
      include: {
        user: {
          select: {
            user_id: true,
            first_name: true,
            last_name: true,
            email: true,
            company: true
          }
        }
      }
    })

    // Get current status
    const currentStatus = currentProgress?.status || 'new_lead'
    const progressHistory = currentProgress ? [currentProgress] : []

    return NextResponse.json({
      success: true,
      data: {
        userId,
        currentStatus,
        progressHistory,
        totalChanges: progressHistory.length
      }
    })

  } catch (error) {
    console.error('Error fetching user progress:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch user progress' 
    }, { status: 500 })
  }
}

// POST /api/admin/leads/[userId]/progress - Update specific user's status
export async function POST(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params
    const { status, changedBy, changeReason } = await request.json()

    if (!userId || !status) {
      return NextResponse.json({ 
        success: false, 
        error: 'User ID and status are required' 
      }, { status: 400 })
    }

    // Check if user already has a progress record (one-to-one relationship)
    const existingProgress = await prisma.leadProgress.findFirst({
      where: { user_id: userId }
    })

    let updatedProgress

    if (existingProgress) {
      // Update existing record
      updatedProgress = await prisma.leadProgress.update({
        where: { id: existingProgress.id },
        data: {
          previous_status: existingProgress.status, // Store old status as previous
          status, // Update to new status
          changed_by: changedBy || null,
          change_reason: changeReason || null
        }
      })
      console.log('✅ Updated existing lead status:', updatedProgress)
    } else {
      // Create new record only if none exists
      updatedProgress = await prisma.leadProgress.create({
        data: {
          user_id: userId,
          status,
          previous_status: null,
          changed_by: changedBy || null,
          change_reason: changeReason || null
        }
      })
      console.log('✅ Created new lead status:', updatedProgress)
    }

    return NextResponse.json({
      success: true,
      data: updatedProgress,
      message: `Lead status updated to ${status}`
    })

  } catch (error) {
    console.error('Error updating user progress:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to update user progress' 
    }, { status: 500 })
  }
}






