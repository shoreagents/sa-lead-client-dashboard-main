import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getEmployeeCardData } from '@/lib/api'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const limit = parseInt(searchParams.get('limit') || '5')

    if (!userId) {
      return NextResponse.json({ success: false, error: 'User ID is required' }, { status: 400 })
    }

    console.log('🔄 Fetching top candidates for user:', userId)

    const supabase = await createClient()

    // Fetch candidate views for this user, ordered by engagement metrics
    const { data: candidateViews, error } = await supabase
      .from('candidate_views')
      .select('candidate_id, candidate_name, view_duration, scroll_percentage, page_views, updated_at')
      .eq('user_id', userId)
      .order('view_duration', { ascending: false, nullsLast: true })
      .limit(limit * 2) // Get more to filter and sort properly

    if (error) {
      console.error('❌ Error fetching candidate views:', error)
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to fetch candidate views',
        details: error.message 
      }, { status: 500 })
    }

    if (!candidateViews || candidateViews.length === 0) {
      console.log('❌ No candidate views found for user')
      return NextResponse.json({ success: true, data: [] })
    }

    // Calculate engagement score for each candidate
    // Combine view_duration, scroll_percentage, and page_views into a composite score
    const candidatesWithScore = candidateViews.map(view => {
      const viewDuration = view.view_duration || 0
      const scrollPercentage = view.scroll_percentage || 0
      const pageViews = view.page_views || 0
      
      // Normalize and weight each metric:
      // - view_duration: 0-1000 seconds -> 0-100 points (40% weight)
      // - scroll_percentage: 0-100 -> 0-100 points (30% weight)  
      // - page_views: 1-10+ views -> 0-100 points (30% weight)
      const normalizedDuration = Math.min((viewDuration / 10), 100) // 10 seconds = 1 point, max 100
      const normalizedScroll = scrollPercentage // Already 0-100
      const normalizedViews = Math.min((pageViews - 1) * 11.11, 100) // 1 view = 0, 10 views = 100
      
      // Weighted composite score
      const engagementScore = (normalizedDuration * 0.4) + (normalizedScroll * 0.3) + (normalizedViews * 0.3)
      
      return {
        candidate_id: view.candidate_id,
        candidate_name: view.candidate_name,
        view_duration: viewDuration,
        scroll_percentage: scrollPercentage,
        page_views: pageViews,
        engagement_score: engagementScore,
        updated_at: view.updated_at
      }
    })

    // Sort by engagement score (highest first)
    candidatesWithScore.sort((a, b) => b.engagement_score - a.engagement_score)

    // Get top candidates (limit)
    const topCandidates = candidatesWithScore.slice(0, limit)

    // Get all employees to match with candidate data
    const employees = await getEmployeeCardData()

    // Match candidates with employee profiles
    const matchedCandidates = topCandidates.map(candidate => {
      const employee = employees.find(emp => emp.user.id === candidate.candidate_id)
      
      if (employee) {
        return {
          id: employee.user.id,
          name: employee.user.name,
          position: employee.user.position || 'Position not specified',
          avatar: employee.user.avatar,
          bio: employee.user.bio,
          expectedSalary: employee.user.expectedSalary || 0,
          view_duration: candidate.view_duration,
          scroll_percentage: candidate.scroll_percentage,
          page_views: candidate.page_views,
          engagement_score: candidate.engagement_score,
          updated_at: candidate.updated_at
        }
      }
      
      // Fallback if employee not found
      return {
        id: candidate.candidate_id,
        name: candidate.candidate_name || 'Unknown Candidate',
        position: 'Position not specified',
        avatar: undefined,
        bio: undefined,
        expectedSalary: 0,
        view_duration: candidate.view_duration,
        scroll_percentage: candidate.scroll_percentage,
        page_views: candidate.page_views,
        engagement_score: candidate.engagement_score,
        updated_at: candidate.updated_at
      }
    })

    console.log('✅ Returning top candidates:', matchedCandidates.length)
    return NextResponse.json({ success: true, data: matchedCandidates })

  } catch (error) {
    console.error('❌ Error in top-candidates API:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

