import { NextRequest, NextResponse } from 'next/server'
import { UserQuoteService } from '@/lib/userQuoteService'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json({ success: false, error: 'User ID is required' }, { status: 400 })
    }

    console.log('🔄 Fetching recommended candidates for user:', userId)

    // Get all quotes for the user
    const quotesResult = await UserQuoteService.getAllQuotes(userId)
    
    if (!quotesResult.success || !quotesResult.data) {
      console.log('No quotes found for user or error occurred')
      return NextResponse.json({ success: true, data: [] })
    }

    console.log('📊 Found quotes:', quotesResult.data.length)

    // Collect all recommended candidates from all quotes
    const allRecommendedCandidates: Array<{
      id: string;
      name: string;
      position: string;
      avatar?: string;
      score: number;
      isFavorite?: boolean;
      bio?: string;
      expectedSalary?: number;
    }> = []

    quotesResult.data.forEach((quote, index) => {
      if (quote.candidate_recommendations && quote.candidate_recommendations.length > 0) {
        // Handle nested structure: extract recommendedCandidates from each role
        quote.candidate_recommendations.forEach((roleData) => {
          if (roleData.recommendedCandidates && roleData.recommendedCandidates.length > 0) {
            // Map the nested structure to the expected format
            const mappedCandidates = roleData.recommendedCandidates.map(candidate => ({
              id: candidate.id,
              name: candidate.name,
              position: candidate.position,
              avatar: candidate.avatar,
              score: candidate.matchScore || candidate.overallScore || 0,
              isFavorite: candidate.isFavorite || false,
              bio: candidate.bio,
              expectedSalary: candidate.expectedSalary || 0
            }))
            
            allRecommendedCandidates.push(...mappedCandidates)
          }
        })
      }
    })

    // Remove duplicates based on candidate ID and sort by score
    const uniqueCandidates = allRecommendedCandidates.reduce((acc, candidate) => {
      const existing = acc.find(c => c.id === candidate.id)
      if (!existing || candidate.score > existing.score) {
        return acc.filter(c => c.id !== candidate.id).concat(candidate)
      }
      return acc
    }, [] as typeof allRecommendedCandidates)

    // Sort by score (highest first) and take top 5
    const topCandidates = uniqueCandidates
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)

    console.log('✅ Returning top', topCandidates.length, 'recommended candidates')
    return NextResponse.json({ success: true, data: topCandidates })

  } catch (error) {
    console.error('❌ Error in recommended-candidates API:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}








