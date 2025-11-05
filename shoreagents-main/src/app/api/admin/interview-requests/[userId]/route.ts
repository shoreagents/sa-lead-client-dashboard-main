import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params
    
    console.log('🔍 Fetching interview requests for user:', userId)
    
    // Get all interview requests for the user
    const interviewRequests = await prisma.interviewRequest.findMany({
      where: {
        user_id: userId
      },
      orderBy: { created_at: 'desc' }
    })
    
    console.log('📊 Found interview requests:', interviewRequests.length)
    
    return NextResponse.json({ 
      success: true, 
      data: interviewRequests,
      count: interviewRequests.length
    })
    
  } catch (error) {
    console.error('Error fetching interview requests:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}






