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
        console.log(`📋 Quote ${index + 1} has ${quote.candidate_recommendations.length} candidate recommendations`);
        
        // Handle both nested and flat structures
        quote.candidate_recommendations.forEach((item: any) => {
          // Check if it's a nested structure (has recommendedCandidates array)
          if (item.recommendedCandidates && Array.isArray(item.recommendedCandidates)) {
            // Nested structure: extract from roleData.recommendedCandidates
            console.log(`  📦 Nested structure found for role: ${item.roleTitle || 'Unknown'}`);
            item.recommendedCandidates.forEach((candidate: any) => {
              allRecommendedCandidates.push({
                id: candidate.id,
                name: candidate.name,
                position: candidate.position,
                avatar: candidate.avatar,
                score: candidate.matchScore || candidate.overallScore || candidate.score || 0,
                isFavorite: candidate.isFavorite || false,
                bio: candidate.bio,
                expectedSalary: candidate.expectedSalary || 0
              });
            });
          } else if (item.id && item.name) {
            // Flat structure: direct candidate objects
            console.log(`  📄 Flat structure found - candidate: ${item.name}`);
            allRecommendedCandidates.push({
              id: item.id,
              name: item.name,
              position: item.position || 'Position not specified',
              avatar: item.avatar,
              score: item.score || item.matchScore || item.overallScore || 0,
              isFavorite: item.isFavorite || false,
              bio: item.bio,
              expectedSalary: item.expectedSalary || 0
            });
          } else {
            console.log(`  ⚠️ Unknown structure in candidate_recommendations:`, item);
          }
        });
      } else {
        console.log(`📭 Quote ${index + 1} has no candidate recommendations`);
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












