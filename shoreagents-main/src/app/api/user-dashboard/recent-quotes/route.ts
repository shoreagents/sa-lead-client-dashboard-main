import { NextRequest, NextResponse } from 'next/server'
import { UserQuoteService } from '@/lib/userQuoteService'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json({ success: false, error: 'User ID is required' }, { status: 400 })
    }

    console.log('🔄 Fetching recent quotes for user:', userId)

    const result = await UserQuoteService.getAllQuotes(userId)
    
    if (result.success && result.data) {
      console.log('✅ Recent quotes found:', result.data.length)
      // Take the first 3 quotes (latest first)
      const recentQuotes = result.data.slice(0, 3)
      return NextResponse.json({ success: true, data: recentQuotes })
    }

    console.log('❌ No recent quotes found or error:', result.error)
    return NextResponse.json({ success: true, data: [] })

  } catch (error) {
    console.error('❌ Error in recent-quotes API:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}










