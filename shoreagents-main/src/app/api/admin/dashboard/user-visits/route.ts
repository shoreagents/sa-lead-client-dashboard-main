import { NextResponse } from 'next/server'
import { supabase, UserPageVisit } from '@/lib/supabase'

interface UserVisitData {
  userId: string;
  visits: Array<{
    pageName: string;
    visitCount: number;
    timeSpent: number;
    lastVisit: string;
  }>;
}

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
      .order('user_id', { ascending: true })
      .order('page_path', { ascending: true })

    if (error) {
      console.error('Error fetching user visit data:', error)
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to fetch user visits' 
      }, { status: 500 })
    }

    // Group visits by user_id
    const groupedData = new Map<string, UserVisitData>()
    
    visits?.forEach((visit: UserPageVisit) => {
      const userId = visit.user_id || 'Unknown'
      
      if (!groupedData.has(userId)) {
        groupedData.set(userId, {
          userId: userId,
          visits: []
        })
      }
      
      // Check if this page already exists for this user
      const existingVisit = groupedData.get(userId)?.visits.find(
        v => v.pageName === visit.page_path
      )
      
      if (existingVisit) {
        // Merge the data - add visit count and time spent
        existingVisit.visitCount += visit.visit_count
        existingVisit.timeSpent += visit.time_spent_seconds
        // Keep the most recent last visit
        if (new Date(visit.last_visit_timestamp) > new Date(existingVisit.lastVisit)) {
          existingVisit.lastVisit = visit.last_visit_timestamp
        }
      } else {
        // Add new page visit
        groupedData.get(userId)?.visits.push({
          pageName: visit.page_path,
          visitCount: visit.visit_count,
          timeSpent: visit.time_spent_seconds,
          lastVisit: visit.last_visit_timestamp
        })
      }
    })

    // Convert to array and sort by user_id
    const userVisitArray = Array.from(groupedData.values())
      .sort((a, b) => a.userId.localeCompare(b.userId))
      .slice(0, 50) // Limit to 50 users for performance

    return NextResponse.json({
      success: true,
      data: userVisitArray
    })

  } catch (error) {
    console.error('Error in user visits API:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}






