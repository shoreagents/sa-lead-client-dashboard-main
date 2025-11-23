import { NextResponse} from 'next/server'
import { getRealDeviceStats } from '@/lib/userEngagementService'

export async function GET() {
  try {
    // Fetch real device statistics
    const deviceStats = await getRealDeviceStats()

    return NextResponse.json({
      success: true,
      data: deviceStats
    })

  } catch (error) {
    console.error('Error in device stats API:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error',
      data: {
        desktop: 0,
        mobile: 0,
        tablet: 0
      }
    }, { status: 500 })
  }
}












