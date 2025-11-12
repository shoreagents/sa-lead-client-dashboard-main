import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getEmployeeCardData } from '@/lib/api'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const limit = parseInt(searchParams.get('limit') || '3') // Target 3 candidates, but show whatever is available

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

    // Get up to 3 candidates: prioritize one for each metric
    // 1. Top candidate by scroll_percentage
    // 2. Top candidate by view_duration (if different from #1)
    // 3. Top candidate by visit_count/page_views (if different from #1 and #2)
    // Note: Shows all available candidates even if less than 3
    
    const candidatesWithMetrics = candidateViews.map(view => ({
      candidate_id: view.candidate_id,
      candidate_name: view.candidate_name,
      view_duration: view.view_duration || 0,
      scroll_percentage: view.scroll_percentage || 0,
      page_views: view.page_views || 0,
      updated_at: view.updated_at
    }))

    // Sort candidates by each metric to get top performers
    const byScroll = [...candidatesWithMetrics].sort((a, b) => b.scroll_percentage - a.scroll_percentage)
    const byDuration = [...candidatesWithMetrics].sort((a, b) => b.view_duration - a.view_duration)
    const byVisits = [...candidatesWithMetrics].sort((a, b) => b.page_views - a.page_views)

    // Collect up to 3 unique candidates, prioritizing different metrics
    const topCandidatesMap = new Map<string, typeof byScroll[0] & { metric_type: string }>()
    
    // First, try to get top from each metric
    if (byScroll[0]) {
      topCandidatesMap.set(byScroll[0].candidate_id, { ...byScroll[0], metric_type: 'scroll_percentage' })
    }
    
    // Add second candidate from duration (skip if already added)
    for (const candidate of byDuration) {
      if (!topCandidatesMap.has(candidate.candidate_id)) {
        topCandidatesMap.set(candidate.candidate_id, { ...candidate, metric_type: 'view_duration' })
        break
      }
    }
    
    // Add third candidate from visits (skip if already added)
    for (const candidate of byVisits) {
      if (!topCandidatesMap.has(candidate.candidate_id)) {
        topCandidatesMap.set(candidate.candidate_id, { ...candidate, metric_type: 'visit_count' })
        break
      }
    }

    // If we still have less than limit (or less than available candidates), add more from combined score
    const targetCount = Math.min(limit, candidatesWithMetrics.length)
    if (topCandidatesMap.size < targetCount) {
      const remainingCandidates = candidatesWithMetrics
        .filter(c => !topCandidatesMap.has(c.candidate_id))
        .sort((a, b) => {
          // Sort by combined score
          const scoreA = (a.scroll_percentage * 0.4) + (a.view_duration * 0.4) + (a.page_views * 0.2)
          const scoreB = (b.scroll_percentage * 0.4) + (b.view_duration * 0.4) + (b.page_views * 0.2)
          return scoreB - scoreA
        })
      
      for (const candidate of remainingCandidates) {
        if (topCandidatesMap.size >= targetCount) break
        topCandidatesMap.set(candidate.candidate_id, { ...candidate, metric_type: 'combined' })
      }
    }

    const topCandidates = Array.from(topCandidatesMap.values())
    
    console.log('🔍 Top candidates selection DETAILS:', {
      totalViewedCandidates: candidatesWithMetrics.length,
      allCandidates: candidatesWithMetrics.map(c => ({
        name: c.candidate_name,
        scroll: c.scroll_percentage,
        duration: c.view_duration,
        visits: c.page_views
      })),
      topByScroll: byScroll[0]?.candidate_name,
      topByDuration: byDuration[0]?.candidate_name,
      topByVisits: byVisits[0]?.candidate_name,
      uniqueCandidatesSelected: topCandidates.length,
      selectedCandidates: topCandidates.map(c => ({ 
        name: c.candidate_name, 
        metric: c.metric_type,
        id: c.candidate_id
      }))
    })

    // Get all employees to match with candidate data
    const employees = await getEmployeeCardData()

    // Match candidates with employee profiles
    const matchedCandidates = topCandidates.map(candidate => {
      const employee = employees.find(emp => emp.user.id === candidate.candidate_id)
      
      // Calculate engagement score for display
      const engagementScore = (candidate.scroll_percentage * 0.4) + 
                              ((candidate.view_duration / 10) * 0.4) + 
                              (candidate.page_views * 0.2)
      
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
          engagement_score: engagementScore,
          metric_type: candidate.metric_type,
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
        engagement_score: engagementScore,
        metric_type: candidate.metric_type,
        updated_at: candidate.updated_at
      }
    })

    console.log('✅ Returning top candidates (up to 3, one per metric):', {
      count: matchedCandidates.length,
      candidates: matchedCandidates.map(c => ({
        name: c.name,
        metric_type: c.metric_type,
        view_duration: c.view_duration,
        scroll_percentage: c.scroll_percentage,
        page_views: c.page_views,
        engagement_score: c.engagement_score.toFixed(2)
      }))
    })
    
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

