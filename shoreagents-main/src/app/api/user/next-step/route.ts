import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface NextStepRecommendation {
  title: string;
  description: string;
  action: string;
  actionUrl: string;
  icon: string;
  priority: number;
  reason: string;
}

export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id');
    
    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    // Fetch user's browsing data
    const [contentViews, pageVisits, candidateViews, pricingQuotes, interviewRequests] = await Promise.all([
      // Get content views from last 30 days
      prisma.content_views.findMany({
        where: {
          user_id: userId,
          viewed_at: {
            gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
          }
        },
        orderBy: { viewed_at: 'desc' },
        take: 50
      }),
      
      // Get page visits
      prisma.userPageVisit.findMany({
        where: { user_id: userId },
        orderBy: { last_visit_timestamp: 'desc' },
        take: 20
      }),
      
      // Get candidate views
      prisma.candidateView.findMany({
        where: { user_id: userId },
        orderBy: { updated_at: 'desc' },
        take: 10
      }),
      
      // Get pricing quotes
      prisma.pricingQuote.findMany({
        where: { user_id: userId },
        orderBy: { created_at: 'desc' },
        take: 5
      }),
      
      // Get interview requests
      prisma.interviewRequest.findMany({
        where: { user_id: userId },
        orderBy: { created_at: 'desc' },
        take: 5
      })
    ]);

    // Analyze behavior and generate recommendations
    const recommendations: NextStepRecommendation[] = [];

    // 1. Check if user has viewed candidates but not requested pricing
    const hasViewedCandidates = candidateViews.length > 0;
    const hasPricingQuotes = pricingQuotes.length > 0;
    const hasInterviewRequests = interviewRequests.length > 0;

    if (hasViewedCandidates && !hasPricingQuotes) {
      recommendations.push({
        title: 'Get Pricing Information',
        description: `You've viewed ${candidateViews.length} candidate${candidateViews.length > 1 ? 's' : ''}. See how affordable our talent is.`,
        action: 'View Pricing',
        actionUrl: '/pricing',
        icon: 'DollarSign',
        priority: 90,
        reason: 'Viewed candidates without pricing quote'
      });
    }

    // 2. Check if user has viewed specific candidate multiple times
    const frequentlyViewedCandidate = candidateViews.find(cv => (cv.page_views || 0) >= 3);
    if (frequentlyViewedCandidate && !hasInterviewRequests) {
      recommendations.push({
        title: 'Request Interview',
        description: `You've shown interest in ${frequentlyViewedCandidate.candidate_name || 'this candidate'}. Ready to meet them?`,
        action: 'Schedule Interview',
        actionUrl: `/employee/${frequentlyViewedCandidate.candidate_id}?action=interview`,
        icon: 'Video',
        priority: 95,
        reason: 'Frequently viewed candidate'
      });
    }

    // 3. Check if user has pricing quote but hasn't viewed candidates
    if (hasPricingQuotes && !hasViewedCandidates) {
      recommendations.push({
        title: 'Browse Our Talent',
        description: 'You have a pricing quote. Now see the amazing talent we have available.',
        action: 'View Candidates',
        actionUrl: '/we-got-talent',
        icon: 'Users',
        priority: 85,
        reason: 'Has pricing quote but no candidate views'
      });
    }

    // 4. Check if user has viewed pricing page recently
    const viewedPricingRecently = contentViews.some(
      cv => cv.content_type === 'page' && cv.content_id === 'pricing'
    ) || pageVisits.some(pv => pv.page_path.includes('/pricing'));

    if (viewedPricingRecently && candidateViews.length > 0 && !hasInterviewRequests) {
      recommendations.push({
        title: 'Book Your Free Consultation',
        description: 'You\'re ready! Let\'s discuss your specific needs and find the perfect match.',
        action: 'Book Consultation',
        actionUrl: '/contact?type=consultation',
        icon: 'Calendar',
        priority: 92,
        reason: 'Viewed pricing and candidates'
      });
    }

    // 5. Check content interaction depth
    const highEngagementViews = contentViews.filter(
      cv => (cv.scroll_depth || 0) > 70 && (cv.view_duration || 0) > 60
    );

    if (highEngagementViews.length >= 3 && !hasInterviewRequests) {
      recommendations.push({
        title: 'Take the Next Step',
        description: 'You\'ve explored our services thoroughly. Let\'s find your perfect team member.',
        action: 'Start Hiring Process',
        actionUrl: '/we-got-talent',
        icon: 'Rocket',
        priority: 88,
        reason: 'High engagement with content'
      });
    }

    // 6. Check if user viewed how-it-works
    const viewedHowItWorks = contentViews.some(
      cv => cv.content_id === 'how-it-works' || cv.page_section === 'how-it-works'
    );

    if (viewedHowItWorks && !hasViewedCandidates) {
      recommendations.push({
        title: 'See Our Talent Pool',
        description: 'Now that you know how it works, explore our talented professionals.',
        action: 'Browse Talent',
        actionUrl: '/we-got-talent',
        icon: 'Users',
        priority: 80,
        reason: 'Viewed how-it-works'
      });
    }

    // 7. Default recommendation for new users
    if (contentViews.length < 3 && pageVisits.length < 3) {
      recommendations.push({
        title: 'Explore Our Services',
        description: 'Discover how we can help you build your dream team in the Philippines.',
        action: 'Learn More',
        actionUrl: '/how-it-works',
        icon: 'Info',
        priority: 50,
        reason: 'New user'
      });
    }

    // 8. Check for recent case study views
    const viewedCaseStudies = contentViews.some(cv => cv.content_type === 'case-study');
    if (viewedCaseStudies && !hasPricingQuotes) {
      recommendations.push({
        title: 'See Success Stories',
        description: 'You\'ve read about our results. Ready to create your own success story?',
        action: 'Get Started',
        actionUrl: '/pricing',
        icon: 'TrendingUp',
        priority: 82,
        reason: 'Viewed case studies'
      });
    }

    // Sort by priority and return top recommendation
    const topRecommendation = recommendations.sort((a, b) => b.priority - a.priority)[0] || {
      title: 'Start Your Journey',
      description: 'Explore our platform and discover how we can help you grow your team.',
      action: 'Get Started',
      actionUrl: '/we-got-talent',
      icon: 'ArrowRight',
      priority: 0,
      reason: 'Default'
    };

    return NextResponse.json({
      success: true,
      recommendation: topRecommendation,
      alternativeSteps: recommendations.slice(0, 3),
      userActivity: {
        candidateViews: candidateViews.length,
        pricingQuotes: pricingQuotes.length,
        interviewRequests: interviewRequests.length,
        totalPageViews: pageVisits.reduce((sum, pv) => sum + (pv.visit_count || 0), 0),
        totalTimeSpent: pageVisits.reduce((sum, pv) => sum + (pv.time_spent_seconds || 0), 0)
      }
    });

  } catch (error) {
    console.error('Error fetching next step recommendation:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch recommendation',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

