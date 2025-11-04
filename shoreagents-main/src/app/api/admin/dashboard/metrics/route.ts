import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    if (!supabase) {
      return NextResponse.json({ 
        success: false, 
        error: 'Database connection not available' 
      }, { status: 500 })
    }

    // Fetch all user page visits
    const { data: visits, error } = await supabase
      .from('user_page_visits')
      .select('*')

    if (error) {
      console.error('Error fetching dashboard metrics:', error)
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to fetch metrics' 
      }, { status: 500 })
    }

    if (visits && visits.length > 0) {
      // Calculate total page views (sum of all visit counts)
      const totalPageViews = visits.reduce((sum, visit) => sum + visit.visit_count, 0)
      
      // Calculate unique IP addresses
      const uniqueIPs = new Set(visits.map(visit => visit.ip_address).filter(Boolean)).size
      
      // Calculate total visitors (sum of all unique user sessions)
      const totalVisitors = visits.length

      return NextResponse.json({
        success: true,
        data: {
          totalPageViews,
          uniqueIPs,
          totalVisitors
        }
      })
    }

    return NextResponse.json({
      success: true,
      data: {
        totalPageViews: 0,
        uniqueIPs: 0,
        totalVisitors: 0
      }
    })

  } catch (error) {
    console.error('Error in dashboard metrics API:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}






